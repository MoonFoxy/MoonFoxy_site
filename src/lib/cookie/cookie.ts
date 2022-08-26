import type {
  CookieAttributes,
  CookieDecoding,
  CookieEncoding,
  CookieAttributesConfig,
  CookieCodecConfig,
  Decoder,
} from './type';

import {
  decodeName as defaultNameDecoder,
  decodeValue as defaultValueDecoder,
  encodeName as defaultNameEncoder,
  encodeValue as defaultValueEncoder,
} from './codec';

function stringifyAttributes(
  attributes: CookieAttributes & { expires?: any }
): string {
  // Copy incoming attributes as to not alter the original object..
  const copyAttr = Object.assign({}, attributes);

  if (typeof copyAttr.expires === 'number') {
    copyAttr.expires = new Date(Date.now() + copyAttr.expires * 864e5);
  }
  if (copyAttr.expires !== null) {
    copyAttr.expires = copyAttr.expires.toUTCString();
  }

  return (
    Object.entries(copyAttr)
      .filter(([_, value]: [string, any]) => value !== null && value !== false)
      // Considers RFC 6265 section 5.2:
      // ...
      // 3.  If the remaining unparsed-attributes contains a %x3B (";")
      //     character:
      // Consume the characters of the unparsed-attributes up to,
      // not including, the first %x3B (";") character.
      // ...
      .map(([key, value]: [string, string | true]) =>
        value === true ? `; ${key}` : `; ${key}=${value.split(';')[0]}`
      )
      .join('')
  );
}

export const DEFAULT_CODEC: CookieCodecConfig<
  string | number | boolean | undefined | null,
  string
> = Object.freeze({
  decodeName: defaultNameDecoder,
  decodeValue: defaultValueDecoder,
  encodeName: defaultNameEncoder,
  encodeValue: defaultValueEncoder,
});

export const DEFAULT_ATTRIBUTES: CookieAttributesConfig = Object.freeze({
  path: '/',
});

export function setCookie<
  T extends string | number | boolean | undefined | null
>(name: string, value: T): string;

export function setCookie<
  T extends string | number | boolean | undefined | null
>(name: string, value: T, attributes: CookieAttributes): string;

export function setCookie<T extends Record<string, unknown>>(
  name: string,
  value: T,
  attributes: CookieAttributes | undefined,
  { encodeValue, encodeName }: CookieEncoding<T>
): string;

export function setCookie(
  name: string,
  value: string | number | boolean | undefined | null,
  attributes: CookieAttributes = DEFAULT_ATTRIBUTES,
  {
    encodeValue = defaultValueEncoder,
    encodeName = defaultNameEncoder,
  }: CookieEncoding<string | number | boolean | undefined | null> = {}
): string {
  return (document.cookie = `${encodeName(name)}=${encodeValue(
    value,
    name
  )}${stringifyAttributes(attributes)}`);
}

type GetReturn<T, R> = [T] extends [undefined]
  ? { [property: string]: R }
  : R | undefined;

function get<T extends string | undefined, U>(
  name: T,
  decodeValue: Decoder<U>,
  decodeName: Decoder<string>
): GetReturn<T, U> {
  const scan = /(?:^|; )([^=]*)=([^;]*)/g;
  const jar: any = {};
  let match;
  while ((match = scan.exec(document.cookie)) !== null) {
    try {
      const found = decodeName(match[1]);
      jar[found] = decodeValue(match[2], found);
      if (name === found) {
        break;
      }
    } catch (e) {}
  }

  return name !== null ? jar[name] : jar;
}

export function getCookie(name: string): string | undefined;

export function getCookie<T extends Record<string, unknown>>(
  name: string,
  { decodeValue, decodeName }: CookieDecoding<T>
): T | undefined;

export function getCookie(
  name: string,
  {
    decodeValue = defaultValueDecoder,
    decodeName = defaultNameDecoder,
  }: CookieDecoding<string> = {}
): string | undefined {
  return get(name, decodeValue, decodeName);
}

export function removeCookie(
  name: string,
  attributes: CookieAttributes = DEFAULT_ATTRIBUTES
): void {
  setCookie(
    name,
    '',
    Object.assign({}, attributes, {
      expires: -1,
    })
  );
}
