declare function isValidThaiID(input: string | number): boolean;

export interface Window {
    isValidThaiID: typeof isValidThaiID;
}

export as namespace isValidThaiID;
export { isValidThaiID };
export default isValidThaiID;