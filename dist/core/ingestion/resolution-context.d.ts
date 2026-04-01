import type { SymbolTable, SymbolDefinition } from './symbol-table.js';
import type { NamedImportBinding } from './import-processor.js';
export type ResolutionTier = 'same-file' | 'import-scoped' | 'global';
export interface TieredCandidates {
    readonly candidates: readonly SymbolDefinition[];
    readonly tier: ResolutionTier;
}
export declare const TIER_CONFIDENCE: Record<ResolutionTier, number>;
export type ImportMap = Map<string, Set<string>>;
export type PackageMap = Map<string, Set<string>>;
export type NamedImportMap = Map<string, Map<string, NamedImportBinding>>;
export type ModuleAliasMap = Map<string, Map<string, string>>;
export interface ResolutionContext {
    resolve(name: string, fromFile: string): TieredCandidates | null;
    readonly symbols: SymbolTable;
    readonly importMap: ImportMap;
    readonly packageMap: PackageMap;
    readonly namedImportMap: NamedImportMap;
    readonly moduleAliasMap: ModuleAliasMap;
    enableCache(filePath: string): void;
    clearCache(): void;
    getStats(): {
        fileCount: number;
        globalSymbolCount: number;
        cacheHits: number;
        cacheMisses: number;
    };
    clear(): void;
}
export declare const createResolutionContext: () => ResolutionContext;
