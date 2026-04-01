import type { SuffixIndex } from './utils.js';
import type { ImportResult, ResolveCtx } from './types.js';
import type { CSharpProjectConfig } from '../language-config.js';
export declare function resolveCSharpImportInternal(importPath: string, csharpConfigs: CSharpProjectConfig[], normalizedFileList: string[], allFileList: string[], index?: SuffixIndex): string[];
export declare function resolveCSharpNamespaceDir(importPath: string, csharpConfigs: CSharpProjectConfig[]): string | null;
export declare function resolveCSharpImport(rawImportPath: string, filePath: string, ctx: ResolveCtx): ImportResult;
