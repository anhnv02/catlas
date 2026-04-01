import type { TsconfigPaths, GoModuleConfig, CSharpProjectConfig, ComposerConfig } from '../language-config.js';
import type { SwiftPackageConfig } from '../language-config.js';
import type { SuffixIndex } from './utils.js';
export type ImportResult = {
    kind: 'files';
    files: string[];
} | {
    kind: 'package';
    files: string[];
    dirSuffix: string;
} | null;
export interface ImportConfigs {
    tsconfigPaths: TsconfigPaths | null;
    goModule: GoModuleConfig | null;
    composerConfig: ComposerConfig | null;
    swiftPackageConfig: SwiftPackageConfig | null;
    csharpConfigs: CSharpProjectConfig[];
}
export interface ImportResolutionContext {
    allFilePaths: Set<string>;
    allFileList: string[];
    normalizedFileList: string[];
    index: SuffixIndex;
    resolveCache: Map<string, string | null>;
}
export interface ResolveCtx extends ImportResolutionContext {
    configs: ImportConfigs;
}
export type ImportResolverFn = (rawImportPath: string, filePath: string, resolveCtx: ResolveCtx) => ImportResult;
