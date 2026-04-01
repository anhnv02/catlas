import type { ImportConfigs } from './import-resolvers/types.js';
export interface TsconfigPaths {
    aliases: Map<string, string>;
    baseUrl: string;
}
export interface GoModuleConfig {
    modulePath: string;
}
export interface ComposerConfig {
    psr4: Map<string, string>;
    psr4Sorted?: readonly [string, string][];
}
export interface CSharpProjectConfig {
    rootNamespace: string;
    projectDir: string;
}
export interface SwiftPackageConfig {
    targets: Map<string, string>;
}
export declare function loadTsconfigPaths(repoRoot: string): Promise<TsconfigPaths | null>;
export declare function loadGoModulePath(repoRoot: string): Promise<GoModuleConfig | null>;
export declare function loadComposerConfig(repoRoot: string): Promise<ComposerConfig | null>;
export declare function loadCSharpProjectConfig(repoRoot: string): Promise<CSharpProjectConfig[]>;
export declare function loadSwiftPackageConfig(repoRoot: string): Promise<SwiftPackageConfig | null>;
export declare function loadImportConfigs(repoRoot: string): Promise<ImportConfigs>;
