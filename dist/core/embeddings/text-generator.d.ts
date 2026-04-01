import type { EmbeddableNode, EmbeddingConfig } from './types.js';
export declare const generateEmbeddingText: (node: EmbeddableNode, config?: Partial<EmbeddingConfig>) => string;
export declare const generateBatchEmbeddingTexts: (nodes: EmbeddableNode[], config?: Partial<EmbeddingConfig>) => string[];
