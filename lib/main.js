"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path_1 = __importDefault(require("path"));
electron_1.app.commandLine.appendSwitch("enable-experimental-web-platform-features");
const createWindow = () => {
    const win = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path_1.default.join(__dirname, "preload.js"),
        },
    });
    win.loadFile("index.html");
    win.webContents.on("will-navigate", (event, url) => {
        event.preventDefault();
        electron_1.shell.openExternal(url);
    });
    return win;
};
electron_1.app.whenReady().then(() => {
    // ipcMain.on("save-images", async (event, data: ArrayBuffer[]) => {});
    createWindow();
    electron_1.app.on("activate", () => {
        if (electron_1.BrowserWindow.getAllWindows().length === 0)
            createWindow();
    });
});
electron_1.app.on("window-all-closed", () => {
    electron_1.app.quit();
});
