export declare function detectStatusCode(content: string, jsonMatchPos: number, closingBracePos: number): number | undefined;
export declare function extractResponseShapes(content: string): {
    responseKeys?: string[];
    errorKeys?: string[];
};
export declare function extractPHPResponseShapes(content: string): {
    responseKeys?: string[];
    errorKeys?: string[];
};
