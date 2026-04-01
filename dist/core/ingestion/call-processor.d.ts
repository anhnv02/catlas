import { KnowledgeGraph } from '../graph/types.js';
import { ASTCache } from './ast-cache.js';
import type { SymbolTable } from './symbol-table.js';
import type { ResolutionContext } from './resolution-context.js';
import type { ExtractedCall, ExtractedAssignment, ExtractedHeritage, ExtractedRoute, ExtractedFetchCall, FileConstructorBindings } from './workers/parse-worker.js';
export type ExportedTypeMap = Map<string, Map<string, string>>;
export declare function buildImportedReturnTypes(filePath: string, namedImportMap: ReadonlyMap<string, ReadonlyMap<string, {
    sourcePath: string;
    exportedName: string;
}>>, symbolTable: {
    lookupExactFull(filePath: string, name: string): {
        returnType?: string;
    } | undefined;
}): ReadonlyMap<string, string>;
export declare function buildImportedRawReturnTypes(filePath: string, namedImportMap: ReadonlyMap<string, ReadonlyMap<string, {
    sourcePath: string;
    exportedName: string;
}>>, symbolTable: {
    lookupExactFull(filePath: string, name: string): {
        returnType?: string;
    } | undefined;
}): ReadonlyMap<string, string>;
export declare function buildExportedTypeMapFromGraph(graph: KnowledgeGraph, symbolTable: SymbolTable): ExportedTypeMap;
export declare function seedCrossFileReceiverTypes(calls: ExtractedCall[], namedImportMap: ReadonlyMap<string, ReadonlyMap<string, {
    sourcePath: string;
    exportedName: string;
}>>, exportedTypeMap: ReadonlyMap<string, ReadonlyMap<string, string>>): {
    enrichedCount: number;
};
export declare const processCalls: (graph: KnowledgeGraph, files: {
    path: string;
    content: string;
}[], astCache: ASTCache, ctx: ResolutionContext, onProgress?: (current: number, total: number) => void, exportedTypeMap?: ExportedTypeMap, importedBindingsMap?: ReadonlyMap<string, ReadonlyMap<string, string>>, importedReturnTypesMap?: ReadonlyMap<string, ReadonlyMap<string, string>>, importedRawReturnTypesMap?: ReadonlyMap<string, ReadonlyMap<string, string>>) => Promise<ExtractedHeritage[]>;
export declare const processCallsFromExtracted: (graph: KnowledgeGraph, extractedCalls: ExtractedCall[], ctx: ResolutionContext, onProgress?: (current: number, total: number) => void, constructorBindings?: FileConstructorBindings[]) => Promise<void>;
export declare const processAssignmentsFromExtracted: (graph: KnowledgeGraph, assignments: ExtractedAssignment[], ctx: ResolutionContext, constructorBindings?: FileConstructorBindings[]) => void;
export declare const processRoutesFromExtracted: (graph: KnowledgeGraph, extractedRoutes: ExtractedRoute[], ctx: ResolutionContext, onProgress?: (current: number, total: number) => void) => Promise<void>;
export declare const extractConsumerAccessedKeys: (content: string) => string[];
export declare const processNextjsFetchRoutes: (graph: KnowledgeGraph, fetchCalls: ExtractedFetchCall[], routeRegistry: Map<string, string>, consumerContents?: Map<string, string>) => void;
export declare const extractFetchCallsFromFiles: (files: {
    path: string;
    content: string;
}[], astCache: ASTCache) => Promise<ExtractedFetchCall[]>;
