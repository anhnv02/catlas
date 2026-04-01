import type { SymbolTable, SymbolDefinition } from './symbol-table.js';
import type { NamedImportMap } from './import-processor.js';
export declare function walkBindingChain(name: string, currentFilePath: string, symbolTable: SymbolTable, namedImportMap: NamedImportMap, allDefs: SymbolDefinition[]): SymbolDefinition[] | null;
