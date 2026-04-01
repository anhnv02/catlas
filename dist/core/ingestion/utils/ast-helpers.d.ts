import type Parser from 'tree-sitter';
import type { NodeLabel } from '../../graph/types.js';
import type { LanguageProvider } from '../language-provider.js';
export type SyntaxNode = Parser.SyntaxNode;
export declare const DEFINITION_CAPTURE_KEYS: readonly ["definition.function", "definition.class", "definition.interface", "definition.method", "definition.struct", "definition.enum", "definition.namespace", "definition.module", "definition.trait", "definition.impl", "definition.type", "definition.const", "definition.static", "definition.typedef", "definition.macro", "definition.union", "definition.property", "definition.record", "definition.delegate", "definition.annotation", "definition.constructor", "definition.template"];
export declare const getDefinitionNodeFromCaptures: (captureMap: Record<string, any>) => SyntaxNode | null;
export declare const FUNCTION_NODE_TYPES: Set<string>;
export declare const FUNCTION_DECLARATION_TYPES: Set<string>;
export declare const CLASS_CONTAINER_TYPES: Set<string>;
export declare const CONTAINER_TYPE_TO_LABEL: Record<string, string>;
export declare function isKotlinClassMethod(captureNode: {
    parent?: any;
} | null | undefined): boolean;
export declare function getLabelFromCaptures(captureMap: Record<string, any>, provider: LanguageProvider): NodeLabel | null;
export declare const findEnclosingClassId: (node: any, filePath: string) => string | null;
export declare const findSiblingChild: (parent: any, siblingType: string, childType: string) => any | null;
export declare const extractFunctionName: (node: SyntaxNode) => {
    funcName: string | null;
    label: NodeLabel;
};
export interface MethodSignature {
    parameterCount: number | undefined;
    requiredParameterCount: number | undefined;
    parameterTypes: string[] | undefined;
    returnType: string | undefined;
}
export declare const CALL_ARGUMENT_LIST_TYPES: Set<string>;
export declare const extractMethodSignature: (node: SyntaxNode | null | undefined) => MethodSignature;
export declare function findDescendant(node: any, type: string): any;
export declare function extractStringContent(node: any): string | null;
export declare function isCppInsideClassOrStruct(functionNode: SyntaxNode): boolean;
export declare function findChild(node: SyntaxNode, type: string): SyntaxNode | null;
