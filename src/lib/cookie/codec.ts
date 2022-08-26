import type { Encoder, Decoder } from './type';

export const encodeName: Encoder<string> = (name) =>
  encodeURIComponent(name)
    .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
    .replace(/[()]/g, escape);

export const encodeValue: Encoder<
  string | number | boolean | undefined | null
> = (value) => {
  return encodeURIComponent(value as string).replace(
    /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
    decodeURIComponent
  );
};

export const decodeName: Decoder<string> = decodeURIComponent;

export const decodeValue: Decoder<string> = (value) => {
  let decode = value;
  if (value[0] === '"') {
    decode = value.slice(1, -1);
  }
  return decode.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
};
