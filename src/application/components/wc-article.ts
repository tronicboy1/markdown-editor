import { css, html, render } from "lit";
import { customElement } from "lit/decorators.js";
import HighlightJS from "highlight.js";
import { marked } from "marked";

export const tagName = "wc-article";

@customElement(tagName)
export class WcArticle extends HTMLElement {
  #raw = "";
  public get raw(): string {
    return this.#raw;
  }
  public set raw(value: string) {
    if (this.#raw === value) return;
    this.#raw = value;
    this.renderMarkdown();
  }
  private article!: HTMLElement;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    if (!this.shadowRoot) throw Error("No shadow Root");
    const styles = document.createElement("style");
    styles.innerHTML = WcArticle.styles.reduce(
      (accumulator, current) => accumulator + current.cssText,
      ""
    );
    this.shadowRoot.append(styles);
  }

  connectedCallback() {
    render(this.render(), this.shadowRoot!);
    this.article = this.shadowRoot!.querySelector("article")!;
  }

  private renderMarkdown() {
    if (!this.article) throw Error("No article");
    return new Promise<string>((resolve, reject) => {
      marked.parse(this.raw, (error, result) => {
        if (error) return reject(error);
        resolve(result);
      });
    }).then(renderedMarkdown => {
      this.article.innerHTML = renderedMarkdown;
      this.article
        .querySelectorAll("pre")
        .forEach(pre =>
          HighlightJS.highlightElement(pre.querySelector("code")!)
        );
    });
  }

  static styles = [
    css`
      :host {
        display: block;
        max-height: 100%;
        max-width: 100%;
        overflow-y: auto;
        padding: 1rem;
      }

      * {
        box-sizing: border-box;
      }

      article {
        color: black;
        height: 100%;
        overflow-y: auto;
        padding: 0 1rem;
      }

      article > :last-child {
        margin-bottom: 100vh;
      }

      img {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 50vh;
      }

      code {
        background-color: rgba(0, 0, 0, 0.08);
        color: #333;
        padding: 0.1em 0.4em;
      }
    `,
  ];

  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://unpkg.com/mustard-ui@latest/dist/css/mustard-ui.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/github-dark.min.css"
      />
      <article></article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: WcArticle;
  }
}
