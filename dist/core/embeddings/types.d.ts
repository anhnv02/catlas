export declare const EMBEDDABLE_LABELS: readonly ["Function", "Class", "Method", "Interface", "File"];
export type EmbeddableLabel = typeof EMBEDDABLE_LABELS[number];
export declare const isEmbeddableLabel: (label: string) => label is EmbeddableLabel;
export type EmbeddingPhase = 'idle' | 'loading-model' | 'embedding' | 'indexing' | 'ready' | 'error';
export interface EmbeddingProgress {
    phase: EmbeddingPhase;
    percent: number;
    modelDownloadPercent?: number;
    nodesProcessed?: number;
    totalNodes?: number;
    currentBatch?: number;
    totalBatches?: number;
    error?: string;
}
export interface EmbeddingConfig {
    modelId: string;
    batchSize: number;
    dimensions: number;
    device: 'auto' | 'dml' | 'cuda' | 'cpu' | 'wasm';
    maxSnippetLength: number;
}
export declare const DEFAULT_EMBEDDING_CONFIG: EmbeddingConfig;
export interface SemanticSearchResult {
    nodeId: string;
    name: string;
    label: string;
    filePath: string;
    distance: number;
    startLine?: number;
    endLine?: number;
}
export interface EmbeddableNode {
    id: string;
    name: string;
    label: string;
    filePath: string;
    content: string;
    startLine?: number;
    endLine?: number;
}
export interface ModelProgress {
    status: 'initiate' | 'download' | 'progress' | 'done' | 'ready';
    file?: string;
    progress?: number;
    loaded?: number;
    total?: number;
}
