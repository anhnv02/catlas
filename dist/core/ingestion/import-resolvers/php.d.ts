import type { SuffixIndex } from './utils.js';
import type { ImportResult, ResolveCtx } from './types.js';
import type { ComposerConfig } from '../language-config.js';
export declare function resolvePhpImportInternal(importPath: string, composerConfig: ComposerConfig | null, allFiles: Set<string>, normalizedFileList: string[], allFileList: string[], index?: SuffixIndex): string | null;
export declare function resolvePhpImport(rawImportPath: string, _filePath: string, ctx: ResolveCtx): ImportResult;
