import { type FeatureExtractionPipeline } from '@huggingface/transformers';
export declare const initEmbedder: () => Promise<FeatureExtractionPipeline>;
export declare const isEmbedderReady: () => boolean;
export declare const embedQuery: (query: string) => Promise<number[]>;
export declare const getEmbeddingDims: () => number;
export declare const disposeEmbedder: () => Promise<void>;
