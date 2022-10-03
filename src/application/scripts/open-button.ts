import loadZipFile from "../helpers/load-zip";

const editor = document.querySelector("lit-markdown-editor")!;
const openButton = document.querySelector<HTMLButtonElement>("button#open")!;
const hiddenInput = document.querySelector<HTMLInputElement>(
  "input#markdown-input"
)!;

const handleOpenClick: EventListener = () => hiddenInput.click();

const handleFileInput: EventListener = event => {
  const files = hiddenInput.files;
  if (!files) throw TypeError("Listener must be used with file input.");
  const [file] = files;
  if (!(file && file.size)) return;
  const regex = /.*\.md$/;
  if (regex.test(file.name)) {
    return file.text().then(markdown => {
      if (!markdown.length) return;
      editor.value = markdown;
    });
  }
  loadZipFile(file).then(markdown => {
    editor.value = markdown;
  });
};

openButton.addEventListener("click", handleOpenClick);
hiddenInput.addEventListener("input", handleFileInput);
