import { app, BrowserWindow, ipcMain, shell } from "electron";
import path from "path";
import fs from "fs";

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("index.html");

  win.webContents.on("will-navigate", (event, url) => {
    event.preventDefault();
    shell.openExternal(url);
  })

  return win;
};

app.whenReady().then(() => {
  // ipcMain.on("save-images", async (event, data: ArrayBuffer[]) => {});
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  app.quit();
});
