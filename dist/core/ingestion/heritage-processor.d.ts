import { KnowledgeGraph } from '../graph/types.js';
import { ASTCache } from './ast-cache.js';
import type { ExtractedHeritage } from './workers/parse-worker.js';
import type { ResolutionContext } from './resolution-context.js';
export declare const processHeritage: (graph: KnowledgeGraph, files: {
    path: string;
    content: string;
}[], astCache: ASTCache, ctx: ResolutionContext, onProgress?: (current: number, total: number) => void) => Promise<void>;
export declare const processHeritageFromExtracted: (graph: KnowledgeGraph, extractedHeritage: ExtractedHeritage[], ctx: ResolutionContext, onProgress?: (current: number, total: number) => void) => Promise<void>;
