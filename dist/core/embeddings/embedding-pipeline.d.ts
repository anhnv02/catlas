import { type EmbeddingProgress, type EmbeddingConfig, type SemanticSearchResult } from './types.js';
export type EmbeddingProgressCallback = (progress: EmbeddingProgress) => void;
export declare const runEmbeddingPipeline: (executeQuery: (cypher: string) => Promise<any[]>, executeWithReusedStatement: (cypher: string, paramsList: Array<Record<string, any>>) => Promise<void>, onProgress: EmbeddingProgressCallback, config?: Partial<EmbeddingConfig>, skipNodeIds?: Set<string>) => Promise<void>;
export declare const semanticSearch: (executeQuery: (cypher: string) => Promise<any[]>, query: string, k?: number, maxDistance?: number) => Promise<SemanticSearchResult[]>;
export declare const semanticSearchWithContext: (executeQuery: (cypher: string) => Promise<any[]>, query: string, k?: number, _hops?: number) => Promise<any[]>;
