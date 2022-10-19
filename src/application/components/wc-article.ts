import { css, html, LitElement } from "lit";
import { customElement, query, state } from "lit/decorators.js";
import { resolveMarkdown } from "lit-markdown";
import HighlighJS from "highlight.js";

export const tagName = "wc-article";

@customElement(tagName)
export class WcArticle extends LitElement {
  @state()
  public raw = "";
  @query("article")
  private article!: HTMLElement;

  updated() {
    this.updateComplete.then(() =>
      this.article
        .querySelectorAll("pre")
        .forEach(pre => HighlighJS.highlightElement(pre.querySelector("code")!))
    );
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

      article {
        display: flex;
        flex-direction: column;
        margin-bottom: 100vh;
      }
    `,
  ];

  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://unpkg.com/mustard-ui@latest/dist/css/mustard-ui.min.css"
      />
      <link rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/github-dark.min.css">
      <article>
        ${resolveMarkdown(this.raw, {
          includeImages: true,
          includeCodeBlockClassNames: true,
        })}
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: WcArticle;
  }
}
