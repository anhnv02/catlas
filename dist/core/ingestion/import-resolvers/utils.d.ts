export declare const EXTENSIONS: string[];
export declare function tryResolveWithExtensions(basePath: string, allFiles: Set<string>): string | null;
export interface SuffixIndex {
    get(suffix: string): string | undefined;
    getInsensitive(suffix: string): string | undefined;
    getFilesInDir(dirSuffix: string, extension: string): string[];
}
export declare const EMPTY_INDEX: SuffixIndex;
export declare function buildSuffixIndex(normalizedFileList: string[], allFileList: string[]): SuffixIndex;
export declare function suffixResolve(pathParts: string[], normalizedFileList: string[], allFileList: string[], index?: SuffixIndex): string | null;
