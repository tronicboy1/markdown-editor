import "lit-markdown-editor";
import "./components/wc-article";
import { tagName as modalTagName } from "./components/base-modal";
import "./scripts/save-buttons";
import "./scripts/open-button";
import "./scripts/keyboard-shortcuts";
import { renderMarkdown } from "./helpers";
import { fromEvent, map, sampleTime } from "rxjs";
import { LitMarkdownEditor } from "lit-markdown-editor";

const root = document.getElementById("root")!;
const editor = document.querySelector("lit-markdown-editor")!;
const article = document.querySelector("wc-article")!;
const editorInput$ = fromEvent(editor, "input");
editorInput$
  .pipe(
    sampleTime(200),
    map(event => {
      const target = event.target;
      if (!(target instanceof LitMarkdownEditor)) throw TypeError();
      return target.value;
    })
  )
  .subscribe(value => {
    window.localStorage.setItem("cache", value);
    article.raw = value;
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
