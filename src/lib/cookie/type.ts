export type Encoder<T> = (value: T, name?: string) => string;

export type Decoder<T> = (value: string, name?: string) => T;

export interface CookieAttributes {
  path?: string;
  domain?: string;
  expires?: number | Date;
  sameSite?: 'strict' | 'Strict' | 'lax' | 'Lax' | 'none' | 'None';
  secure?: boolean;
  [property: string]: any;
}

export type CookieAttributesConfig = Readonly<CookieAttributes>;

export interface CookieDecoding<T> {
  readonly decodeName?: Decoder<string>;
  readonly decodeValue?: Decoder<T>;
}

export interface CookieEncoding<T> {
  readonly encodeName?: Encoder<string>;
  readonly encodeValue?: Encoder<T>;
}

export interface CookieCodecConfig<W, R> {
  readonly decodeName: Decoder<string>;
  readonly decodeValue: Decoder<R>;
  readonly encodeName: Encoder<string>;
  readonly encodeValue: Encoder<W>;
}
