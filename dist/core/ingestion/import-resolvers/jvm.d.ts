import type { SuffixIndex } from './utils.js';
import type { SyntaxNode } from '../utils/ast-helpers.js';
import type { ImportResult, ResolveCtx } from './types.js';
export declare const KOTLIN_EXTENSIONS: readonly string[];
export declare const appendKotlinWildcard: (importPath: string, importNode: SyntaxNode) => string;
export declare function resolveJvmWildcard(importPath: string, normalizedFileList: string[], allFileList: string[], extensions: readonly string[], index?: SuffixIndex): string[];
export declare function resolveJvmMemberImport(importPath: string, normalizedFileList: string[], allFileList: string[], extensions: readonly string[], index?: SuffixIndex): string | null;
export declare function resolveJavaImport(rawImportPath: string, filePath: string, ctx: ResolveCtx): ImportResult;
export declare function resolveKotlinImport(rawImportPath: string, filePath: string, ctx: ResolveCtx): ImportResult;
