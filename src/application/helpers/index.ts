import { marked } from "marked";

export type FilenameAndBlob = [string, Blob];

export const readFileAsBufferArray = (file: File) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      const { result } = reader;
      if (!(result instanceof ArrayBuffer)) throw TypeError();
      resolve(result);
    });
    reader.addEventListener("error", () => reject(reader.error));

    reader.readAsArrayBuffer(file);
  });

export const collectImages = (text: string) => {
  const matches = Array.from(text.matchAll(/!\[.*\]\(blob:(.*) "(.*)"\)/g));
  console.log(matches);
  const imageFilenamesAndUrls = matches.map(match => [
    "blob:" + match[1],
    match[2],
  ]);
  const imageBlobPromises = imageFilenamesAndUrls.map<Promise<FilenameAndBlob>>(
    ([url, name]) =>
      fetch(url)
        .then(result => result.blob())
        .then(blob => [name, blob])
  );
  return Promise.allSettled(imageBlobPromises).then(results =>
    results.reduce<FilenameAndBlob[]>((prev, result) => {
      if (result.status !== "fulfilled") return prev;
      return [...prev, result.value];
    }, [])
  );
};

export const convertStringToBlob = (string: string) =>
  new Blob([string], { type: "text/plain; charset=UTF-8" });

export const renderMarkdown = (input: string) =>
  new Promise<string>((resolve, reject) => {
    marked(input, (error, result) => {
      if (error) return reject(error);
      resolve(result);
    });
  });
