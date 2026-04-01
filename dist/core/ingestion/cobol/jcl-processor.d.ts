import type { KnowledgeGraph } from '../../graph/types.js';
export interface JclProcessResult {
    jobCount: number;
    stepCount: number;
    datasetCount: number;
    programLinks: number;
}
export declare function processJclFiles(graph: KnowledgeGraph, jclPaths: string[], jclContents: Map<string, string>): JclProcessResult;
