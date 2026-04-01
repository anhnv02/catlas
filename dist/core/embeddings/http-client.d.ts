export declare const isHttpMode: () => boolean;
export declare const getHttpDimensions: () => number | undefined;
export declare const httpEmbed: (texts: string[]) => Promise<Float32Array[]>;
export declare const httpEmbedQuery: (text: string) => Promise<number[]>;
