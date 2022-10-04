import "lit-markdown-editor";
import "./scripts/save-buttons";
import "./scripts/open-button";
import { renderMarkdown } from "./helpers";

const editor = document.querySelector("lit-markdown-editor")!;
const article = document.querySelector("article")!;
editor.addEventListener("input", () => {
  const value = editor.value;
  window.localStorage.setItem("cache", value);
  renderMarkdown(value).then(rawHTML => {
    article.innerHTML = rawHTML;
  });
});

const saveButton = document.querySelector("button#save")!;
const saveImagesButton = document.querySelector("button#save-images")!;
const openButton = document.querySelector<HTMLButtonElement>("button#open")!;
document.addEventListener("keydown", event => {
  const isMeta = event.metaKey;
  const shiftPressed = event.shiftKey;
  const isDkey = event.key.toUpperCase() === "D";
  const isOkey = event.key.toUpperCase() === "O";
  if (!isMeta) return;
  if (isOkey) return openButton.dispatchEvent(new Event("click"));
  if (isDkey && shiftPressed)
    return saveImagesButton.dispatchEvent(new Event("click"));
  if (isDkey) return saveButton.dispatchEvent(new Event("click"));
  return;
});

const cache = window.localStorage.getItem("cache");
if (cache) {
  editor.innerHTML = cache;
}
