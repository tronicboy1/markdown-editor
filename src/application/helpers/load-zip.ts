import JSZip from "jszip";

type BlobWithName = [string, Blob];

const loadZipFile = (file: File) =>
  JSZip.loadAsync(file).then(contents => {
    const { files } = contents;
    const fileNames = Object.keys(files);
    const regex = /.*\.md$/;
    const articleFileName = fileNames.find(name => regex.test(name));
    if (!articleFileName) throw Error("No markdown file was found in archive.");
    const markdownFile = files[articleFileName];

    return markdownFile.async("text").then(markdownRaw => {
      const markdownImageRegex = /\!\[.*\]\(blob:file:.* "(.*)"\)/g;
      const imageFileNamesRegexMatches = Array.from(
        markdownRaw.matchAll(markdownImageRegex)
      );
      if (!imageFileNamesRegexMatches.length)
        return Promise.resolve(markdownRaw);
      const imageFileNames = imageFileNamesRegexMatches.map(
        ([_, fileName]) => fileName
      );
      const openImagePromises = imageFileNames.reduce<Promise<BlobWithName>[]>(
        (prev, fileName) => {
          const file = files[fileName];
          if (!file) return prev;
          const promise: Promise<BlobWithName> = file
            .async("blob")
            .then(blob => [fileName, blob]);
          return [...prev, promise];
        },
        []
      );
      return Promise.allSettled(openImagePromises).then(results => {
        const imageBlobMap = results.reduce<Map<string, Blob>>(
          (prev, result) => {
            if (result.status === "rejected") return prev;
            const [name, blob] = result.value;
            prev.set(name, blob);
            return prev;
          },
          new Map()
        );
        let replacedMarkdown = markdownRaw;
        for (const [match, fileName] of imageFileNamesRegexMatches) {
          const blob = imageBlobMap.get(fileName);
          if (!blob) throw Error("Image blob not in map.");
          const newObjectURL = URL.createObjectURL(blob);
          const newImageMarkdown = match.replace(
            /blob:file:.* "/,
            newObjectURL + ' "'
          );
          replacedMarkdown = replacedMarkdown.replace(match, newImageMarkdown);
        }
        return Promise.resolve(replacedMarkdown);
      });
    });
  });

export default loadZipFile;
