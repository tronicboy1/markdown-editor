//@ts-check

/**
 * Converts a Blob to a data string
 *
 * @param {File | Blob} file
 * @returns {Promise<string>}
 */
export const readFileAsDataString = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      const { result } = reader;
      if (typeof result !== "string") throw TypeError();
      resolve(result);
    });

    reader.addEventListener("error", () => reject(reader.error));

    reader.readAsDataURL(file);
  });

/** @typedef {Map<string, string>} ImageDataStringMap */
/**
 * Finds images in text and converts to data string.
 * Results are returned as a map with the key being the object url.
 * @param {string} text
 * @returns {Promise<ImageDataStringMap>}
 */
export const buildMapOfImages = async text => {
  const imageBlobUrls = Array.from(
    text.matchAll(/!\[.*\]\(blob:(.*) ".*"\)/g)
  ).map(match => "blob:" + match[1]);
  const imageMap = /** @type {ImageDataStringMap} */ (new Map());
  for (const url of imageBlobUrls) {
    const blob = await getImageBlob(url);
    if (!blob) continue;
    const dataString = await readFileAsDataString(blob);
    imageMap.set(url, dataString);
  }
  return imageMap;
};

/**
 *
 * @param {string} text
 * @returns {Promise<string>}
 */
export const replaceBlobURLsWithDataString = async text => {
  const imageDataStringMap = await buildMapOfImages(text);
  const matches = text.matchAll(/!\[.*\]\((.*) ".*"\)/g);
  let replacedText = text;
  for (const [hit, url] of matches) {
    const image = imageDataStringMap.get(url);
    if (!image) continue;
    replacedText = replacedText.replace(url, image);
  }
  return replacedText;
};

/**
 *
 * @param {string} url
 * @returns {Promise<Blob | null>}
 */
const getImageBlob = url =>
  fetch(url).then(
    result => result.blob(),
    () => null
  );
