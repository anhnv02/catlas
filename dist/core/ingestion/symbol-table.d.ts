import type { NodeLabel } from '../graph/types.js';
export interface SymbolDefinition {
    nodeId: string;
    filePath: string;
    type: NodeLabel;
    parameterCount?: number;
    requiredParameterCount?: number;
    parameterTypes?: string[];
    returnType?: string;
    declaredType?: string;
    ownerId?: string;
}
export interface SymbolTable {
    add: (filePath: string, name: string, nodeId: string, type: NodeLabel, metadata?: {
        parameterCount?: number;
        requiredParameterCount?: number;
        parameterTypes?: string[];
        returnType?: string;
        declaredType?: string;
        ownerId?: string;
    }) => void;
    lookupExact: (filePath: string, name: string) => string | undefined;
    lookupExactFull: (filePath: string, name: string) => SymbolDefinition | undefined;
    lookupExactAll: (filePath: string, name: string) => SymbolDefinition[];
    lookupFuzzy: (name: string) => SymbolDefinition[];
    lookupFuzzyCallable: (name: string) => SymbolDefinition[];
    lookupFieldByOwner: (ownerNodeId: string, fieldName: string) => SymbolDefinition | undefined;
    getStats: () => {
        fileCount: number;
        globalSymbolCount: number;
    };
    clear: () => void;
}
export declare const createSymbolTable: () => SymbolTable;
