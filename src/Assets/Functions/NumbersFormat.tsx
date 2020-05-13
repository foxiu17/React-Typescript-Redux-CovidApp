
import { numbersFormatRegExp } from "../Conts/regExp";

export const GetNumberWithCommas = (num: number): string => {
  return num.toString().replace(numbersFormatRegExp, '$1,');
};