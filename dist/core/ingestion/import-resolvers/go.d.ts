import type { ImportResult, ResolveCtx } from './types.js';
import type { GoModuleConfig } from '../language-config.js';
export declare function resolveGoPackageDir(importPath: string, goModule: GoModuleConfig): string | null;
export declare function resolveGoPackage(importPath: string, goModule: GoModuleConfig, normalizedFileList: string[], allFileList: string[]): string[];
export declare function resolveGoImport(rawImportPath: string, filePath: string, ctx: ResolveCtx): ImportResult;
