import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  //saveImages: (data: ArrayBuffer[]) => ipcRenderer.send("save-images", data),
});
