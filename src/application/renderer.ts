import "lit-markdown-editor";
import { tagName as modalTagName } from "./components/base-modal";
import "./scripts/save-buttons";
import "./scripts/open-button";
import { renderMarkdown } from "./helpers";

const root = document.getElementById("root")!;
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
  new Promise(resolve => {
    const modal = document.createElement(modalTagName);
    modal.toggleAttribute("show", true);
    modal.modalTitle = "Restore old data?";
    modal.addEventListener("close", () => resolve(true), { once: true });
    const yesButton = document.createElement("button");
    const noButton = document.createElement("button");
    yesButton.textContent = "Yes";
    noButton.textContent = "No";
    yesButton.setAttribute("slot", "buttons");
    noButton.setAttribute("slot", "buttons");
    modal.append(yesButton, noButton);
    root.append(modal);
    yesButton.addEventListener(
      "click",
      () => {
        editor.updateComplete.then(() => {
          editor.value = cache;
          return resolve(true);
        });
      },
      { once: true }
    );
    noButton.addEventListener("click", () => resolve(true), { once: true });
  }).finally(() => (root.innerHTML = ""));
}
