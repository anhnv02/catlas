export interface BM25SearchResult {
    filePath: string;
    score: number;
    rank: number;
}
export declare const searchFTSFromLbug: (query: string, limit?: number, repoId?: string) => Promise<BM25SearchResult[]>;
