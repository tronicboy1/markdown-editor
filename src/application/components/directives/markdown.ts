import { directive } from "lit-html/directive.js";
import { MarkdownDirective } from "lit-markdown";

class MarkdownDirectiveWithWindowEvent extends MarkdownDirective {
  setValue(value: unknown): void {
    // most definitely should come up with a better solution
    window.dispatchEvent(new Event("markdown-updated"));
    super.setValue(value);
  }
}

export const resolveMarkdownAndEmitEvent = directive(
  MarkdownDirectiveWithWindowEvent
);

declare global {
  interface WindowEventMap {
    "markdown-updated": Event;
  }
}
