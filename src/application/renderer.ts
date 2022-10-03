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

const cache = window.localStorage.getItem("cache");
if (cache) {
  editor.innerHTML = cache;
}
