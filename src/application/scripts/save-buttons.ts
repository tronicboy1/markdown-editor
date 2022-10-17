import { collectImages, convertStringToBlob } from "../helpers";
import JSZip from "jszip";

const editor = document.querySelector("lit-markdown-editor")!;
const saveButton = document.querySelector("button#save")!;
const saveImagesButton = document.querySelector("button#save-images")!;

saveButton.addEventListener("click", async () => {
  const value = editor.value;
  const blob = convertStringToBlob(value);
  const cacheKey = "filename";
  const fileNameCache = window.localStorage.getItem(cacheKey);
  const newFileHandle = await window.showSaveFilePicker({
    suggestedName: fileNameCache ?? "article.md",
  });
  window.localStorage.setItem(cacheKey, newFileHandle.name);
  const writeableStream = await newFileHandle.createWritable();
  await writeableStream.write(blob);
  await writeableStream.close();
});

saveImagesButton.addEventListener("click", async () => {
  const value = editor.value;
  const filenamesAndBlobs = await collectImages(value);

  const zip = new JSZip();
  const markdownBlob = convertStringToBlob(value);
  zip.file("markdown.md", markdownBlob);
  for (const [filename, blob] of filenamesAndBlobs) {
    zip.file(filename, blob);
  }
  const zipBlob = await zip.generateAsync({ type: "blob" });
  const cacheKey = "filename-zip";
  const fileNameCache = window.localStorage.getItem(cacheKey);
  const newFileHandle = await window.showSaveFilePicker({
    suggestedName: fileNameCache ?? "article.zip",
  });
  window.localStorage.setItem(cacheKey, newFileHandle.name);
  const writeableStream = await newFileHandle.createWritable();
  await writeableStream.write(zipBlob);
  await writeableStream.close();
});
