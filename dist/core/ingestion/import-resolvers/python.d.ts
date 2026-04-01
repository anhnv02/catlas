import type { ImportResult, ResolveCtx } from './types.js';
export declare function resolvePythonImportInternal(currentFile: string, importPath: string, allFiles: Set<string>): string | null;
export declare function resolvePythonImport(rawImportPath: string, filePath: string, ctx: ResolveCtx): ImportResult;
