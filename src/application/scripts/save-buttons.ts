import { collectImages, convertStringToBlob } from "../helpers";
import JSZip from "jszip";

const editor = document.querySelector(
  "lit-markdown-editor"
)!;
const saveButton = document.querySelector("button#save")!;
const anchor = /** @type {HTMLAnchorElement!} */ document.querySelector("a")!;
const saveImagesButton = document.querySelector("button#save-images")!;

saveButton.addEventListener("click", () => {
  const value = /** @type {string!} */ editor.value;
  const blob = convertStringToBlob(value);
  const blobUrl = URL.createObjectURL(blob);
  anchor.href = blobUrl;
  anchor.download = "article.md";
  anchor.click();
});
saveImagesButton.addEventListener("click", () => {
  const value = /** @type {string!} */ editor.value;
  collectImages(value)
    .then(filenamesAndBlobs => {
      const zip = new JSZip();
      const blob = convertStringToBlob(value);
      zip.file("markdown.md", blob);
      for (const [filename, blob] of filenamesAndBlobs) {
        zip.file(filename, blob);
      }
      return zip.generateAsync({ type: "blob" });
    })
    .then(zipBlob => {
      const blobUrl = URL.createObjectURL(zipBlob);
      anchor.href = blobUrl;
      anchor.download = "article.zip";
      anchor.click();
    });
});
