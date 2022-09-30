export interface IElectronAPI {
  //saveImages: (images: ArrayBuffer[]) => Promise<void>,
}

declare global {
  interface Window {
    electronAPI: IElectronAPI
  }
}
