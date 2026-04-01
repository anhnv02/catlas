import { PipelineProgress, PipelineResult } from '../../types/pipeline.js';
type IndependentFileGroup = readonly string[];
export declare function topologicalLevelSort(importMap: ReadonlyMap<string, ReadonlySet<string>>): {
    levels: readonly IndependentFileGroup[];
    cycleCount: number;
};
export interface PipelineOptions {
    skipGraphPhases?: boolean;
}
export declare const runPipelineFromRepo: (repoPath: string, onProgress: (progress: PipelineProgress) => void, options?: PipelineOptions) => Promise<PipelineResult>;
export {};
