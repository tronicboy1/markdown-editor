import loadZipFile from "../helpers/load-zip";

const editor = document.querySelector("lit-markdown-editor")!;
const openButton = document.querySelector<HTMLButtonElement>("button#open")!;

const handleOpenClick: EventListener = () => {
  const pickerOpts: OpenFilePickerOptions = {
    types: [
      {
        accept: {
          "text/plain": [".md"],
          "application/zip": [".zip"],
        },
      },
    ],
    excludeAcceptAllOption: true,
    multiple: false,
  };
  window
    .showOpenFilePicker(pickerOpts)
    .then(([fileHandler]) => fileHandler.getFile())
    .then(file => {
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
    });
};

openButton.addEventListener("click", handleOpenClick);
