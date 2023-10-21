declare global {
  interface Window {
    isValidThaiID: (id: string) => boolean;
  }
}
