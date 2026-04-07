export interface BM25SearchResult {
    nodeId: string;
    name?: string;
    type: string;
    filePath: string;
    startLine?: number;
    endLine?: number;
    score: number;
    rank: number;
}
export declare const searchFTSFromLbug: (query: string, limit?: number, repoId?: string) => Promise<BM25SearchResult[]>;
