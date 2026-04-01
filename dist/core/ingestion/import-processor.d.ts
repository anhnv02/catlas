import { KnowledgeGraph } from '../graph/types.js';
import { ASTCache } from './ast-cache.js';
import type { LanguageProvider } from './language-provider.js';
import type { ExtractedImport } from './workers/parse-worker.js';
import type { ResolutionContext } from './resolution-context.js';
import type { ImportResolutionContext } from './import-resolvers/types.js';
import type { SyntaxNode } from './utils/ast-helpers.js';
export type ImportMap = Map<string, Set<string>>;
export type PackageMap = Map<string, Set<string>>;
export interface NamedImportBinding {
    sourcePath: string;
    exportedName: string;
}
export type NamedImportMap = Map<string, Map<string, NamedImportBinding>>;
export declare function isFileInPackageDir(filePath: string, dirSuffix: string): boolean;
export declare function buildImportResolutionContext(allPaths: string[]): ImportResolutionContext;
export declare function preprocessImportPath(sourceText: string, importNode: SyntaxNode, provider: LanguageProvider): string | null;
export declare const processImports: (graph: KnowledgeGraph, files: {
    path: string;
    content: string;
}[], astCache: ASTCache, ctx: ResolutionContext, onProgress?: (current: number, total: number) => void, repoRoot?: string, allPaths?: string[]) => Promise<void>;
export declare const processImportsFromExtracted: (graph: KnowledgeGraph, files: {
    path: string;
}[], extractedImports: ExtractedImport[], ctx: ResolutionContext, onProgress?: (current: number, total: number) => void, repoRoot?: string, prebuiltCtx?: ImportResolutionContext) => Promise<void>;
