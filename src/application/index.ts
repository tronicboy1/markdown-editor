import "lit-markdown-editor";
import { replaceBlobURLsWithDataString } from "./helpers";
import { marked } from "marked";
import type { LitMarkdownEditor } from "lit-markdown-editor";

/** @type {() => Promise<string>} */
const renderMarkdown = (input: string) =>
  new Promise<string>((resolve, reject) => {
    marked(input, (error, result) => {
      if (error) return reject(error);
      resolve(result);
    });
  });

const editor = document.querySelector<LitMarkdownEditor>(
  "lit-markdown-editor"
)!;
const article = document.querySelector("article")!;
editor.addEventListener("input", () => {
  const value = /** @type {string!} */ editor.value;
  window.localStorage.setItem("cache", value);
  renderMarkdown(value).then(rawHTML => {
    article.innerHTML = rawHTML;
  });
});

const convertStringToBlob = (string: string) =>
  new Blob([string], { type: "text/plain; charset=UTF-8" });

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
  replaceBlobURLsWithDataString(value).then(markdownWithImages => {
    const blob = convertStringToBlob(markdownWithImages);
    const blobUrl = URL.createObjectURL(blob);
    anchor.href = blobUrl;
    anchor.download = "article.md";
    anchor.click();
  });
});

const cache = window.localStorage.getItem("cache");
if (cache) {
  editor.innerHTML = cache;
}
