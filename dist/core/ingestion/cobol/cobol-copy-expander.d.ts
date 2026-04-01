export interface CopyReplacing {
    type: 'LEADING' | 'TRAILING' | 'EXACT';
    from: string;
    to: string;
    isPseudotext?: boolean;
}
export interface CopyResolution {
    copyTarget: string;
    resolvedPath: string | null;
    line: number;
    replacing: CopyReplacing[];
    library?: string;
}
export interface CopyExpansionResult {
    expandedContent: string;
    copyResolutions: CopyResolution[];
}
export declare const DEFAULT_MAX_DEPTH = 10;
export declare function parseReplacingClause(text: string): CopyReplacing[];
export declare function expandCopies(content: string, filePath: string, resolveFile: (name: string) => string | null, readFile: (path: string) => string | null, maxDepth?: number): CopyExpansionResult;
