import type { SuffixIndex } from './utils.js';
import type { ImportResult, ResolveCtx } from './types.js';
export declare function resolveRubyImportInternal(importPath: string, normalizedFileList: string[], allFileList: string[], index?: SuffixIndex): string | null;
export declare function resolveRubyImport(rawImportPath: string, _filePath: string, ctx: ResolveCtx): ImportResult;
