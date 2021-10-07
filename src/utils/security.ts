/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const crypt = (salt: any, text: string) => {
  const textToChars = (text: string) =>
    text.split("").map((c: string) => c.charCodeAt(0));
  const byteHex = (n: any) => ("0" + Number(n).toString(16)).substr(-2);
  const applySaltToChar = (code: any) =>
    textToChars(salt).reduce((a: number, b: number) => a ^ b, code);

  return text
    .split("")
    .map(textToChars)
    .map(applySaltToChar)
    .map(byteHex)
    .join("");
};

export const decrypt = (
  salt: any,
  encoded: { match: (arg0: RegExp) => any[] }
) => {
  const textToChars = (text: string) =>
    text.split("").map((c: string) => c.charCodeAt(0));
  const applySaltToChar = (code: any) =>
    textToChars(salt).reduce((a: number, b: number) => a ^ b, code);
  return encoded
    .match(/.{1,2}/g)
    .map((hex: string) => parseInt(hex, 16))
    .map(applySaltToChar)
    .map((charCode: number) => String.fromCharCode(charCode))
    .join("");
};
