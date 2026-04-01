import type { ImportResult, ResolveCtx } from './types.js';
export declare function resolveRustImportInternal(currentFile: string, importPath: string, allFiles: Set<string>): string | null;
export declare function tryRustModulePath(modulePath: string, allFiles: Set<string>): string | null;
export declare function resolveRustImport(rawImportPath: string, filePath: string, ctx: ResolveCtx): ImportResult;
