import { type BM25SearchResult } from './bm25-index.js';
import type { SemanticSearchResult } from '../embeddings/types.js';
export interface HybridSearchResult {
    nodeId?: string;
    name?: string;
    type?: string;
    filePath: string;
    startLine?: number;
    endLine?: number;
    score: number;
    rank: number;
    sources: ('bm25' | 'semantic')[];
    bm25Score?: number;
    semanticScore?: number;
}
export declare const mergeWithRRF: (bm25Results: BM25SearchResult[], semanticResults: SemanticSearchResult[], limit?: number) => HybridSearchResult[];
export declare const isHybridSearchReady: () => boolean;
export declare const formatHybridResults: (results: HybridSearchResult[]) => string;
export declare const hybridSearch: (query: string, limit: number, executeQuery: (cypher: string) => Promise<any[]>, semanticSearch: (executeQuery: (cypher: string) => Promise<any[]>, query: string, k?: number) => Promise<SemanticSearchResult[]>) => Promise<HybridSearchResult[]>;
