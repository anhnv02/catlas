import { type SyntaxNode } from './utils/ast-helpers.js';
import { SupportedLanguages } from '../../config/supported-languages.js';
import type { SymbolTable } from './symbol-table.js';
import type { NodeLabel } from '../graph/types.js';
export interface TypeEnvironment {
    lookup(varName: string, callNode: SyntaxNode): string | undefined;
    readonly constructorBindings: readonly ConstructorBinding[];
    fileScope(): ReadonlyMap<string, string>;
    allScopes(): ReadonlyMap<string, ReadonlyMap<string, string>>;
    readonly constructorTypeMap: ReadonlyMap<string, string>;
}
export declare const isSubclassOf: (child: string, parent: string, parentMap: ReadonlyMap<string, readonly string[]> | undefined) => boolean;
export interface BuildTypeEnvOptions {
    symbolTable?: SymbolTable;
    parentMap?: ReadonlyMap<string, readonly string[]>;
    importedBindings?: ReadonlyMap<string, string>;
    importedReturnTypes?: ReadonlyMap<string, string>;
    importedRawReturnTypes?: ReadonlyMap<string, string>;
    enclosingFunctionFinder?: (ancestorNode: SyntaxNode) => {
        funcName: string;
        label: NodeLabel;
    } | null;
}
export declare const buildTypeEnv: (tree: {
    rootNode: SyntaxNode;
}, language: SupportedLanguages, options?: BuildTypeEnvOptions) => TypeEnvironment;
export interface ConstructorBinding {
    scope: string;
    varName: string;
    calleeName: string;
    receiverClassName?: string;
}
