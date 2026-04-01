import type { SyntaxNode } from '../utils/ast-helpers.js';
export type TypeArgPosition = 'first' | 'last';
interface ContainerDescriptor {
    arity: number;
    keyMethods: ReadonlySet<string>;
    valueMethods: ReadonlySet<string>;
}
export declare function methodToTypeArgPosition(methodName: string | undefined, containerTypeName?: string): TypeArgPosition;
export declare function getContainerDescriptor(typeName: string): ContainerDescriptor | undefined;
export declare function resolveIterableElementType(iterableName: string, node: SyntaxNode, scopeEnv: ReadonlyMap<string, string>, declarationTypeNodes: ReadonlyMap<string, SyntaxNode>, scope: string, extractFromTypeNode: (typeNode: SyntaxNode, pos?: TypeArgPosition) => string | undefined, findParamElementType?: (name: string, startNode: SyntaxNode, pos?: TypeArgPosition) => string | undefined, typeArgPos?: TypeArgPosition): string | undefined;
export declare const extractSimpleTypeName: (typeNode: SyntaxNode, depth?: number) => string | undefined;
export declare const extractVarName: (node: SyntaxNode) => string | undefined;
export declare const TYPED_PARAMETER_TYPES: Set<string>;
export declare const extractGenericTypeArgs: (typeNode: SyntaxNode, depth?: number) => string[];
export declare const extractRubyConstructorAssignment: (node: SyntaxNode) => {
    varName: string;
    calleeName: string;
} | undefined;
export declare const hasTypeAnnotation: (node: SyntaxNode) => boolean;
export declare const stripNullable: (typeName: string) => string | undefined;
export declare const unwrapAwait: (node: SyntaxNode | null) => SyntaxNode | null;
export declare const extractCalleeName: (callNode: SyntaxNode) => string | undefined;
export declare function extractElementTypeFromString(typeStr: string, pos?: TypeArgPosition): string | undefined;
export declare const extractReturnTypeName: (raw: string, depth?: number) => string | undefined;
export {};
