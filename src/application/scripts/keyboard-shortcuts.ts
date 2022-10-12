import { filter, fromEvent } from "rxjs";

const saveButton = document.querySelector("button#save")!;
const saveImagesButton = document.querySelector("button#save-images")!;
const openButton = document.querySelector<HTMLButtonElement>("button#open")!;
const keydown$ = fromEvent<KeyboardEvent>(document, "keydown");
const metaKeyPressed$ = keydown$.pipe(filter(event => event.metaKey));
metaKeyPressed$
  .pipe(filter(event => event.key.toUpperCase() === "D"))
  .subscribe(event => {
    const shiftPressed = event.shiftKey;
    if (shiftPressed) return saveImagesButton.dispatchEvent(new Event("click"));
    return saveButton.dispatchEvent(new Event("click"));
  });
metaKeyPressed$
  .pipe(filter(event => event.key.toUpperCase() === "O"))
  .subscribe(() => openButton.dispatchEvent(new Event("click")));
metaKeyPressed$
  .pipe(filter(event => event.key.toUpperCase() === "R"))
  .subscribe(event => {
    event.preventDefault();
  });
