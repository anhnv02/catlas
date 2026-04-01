import type { SyntaxNode } from '../utils/ast-helpers.js';
export type TypeBindingExtractor = (node: SyntaxNode, env: Map<string, string>) => void;
export type ParameterExtractor = (node: SyntaxNode, env: Map<string, string>) => void;
export type ClassNameLookup = {
    has(name: string): boolean;
};
export type InitializerExtractor = (node: SyntaxNode, env: Map<string, string>, classNames: ClassNameLookup) => void;
export type ConstructorBindingScanner = (node: SyntaxNode) => {
    varName: string;
    calleeName: string;
    receiverClassName?: string;
} | undefined;
export type ReturnTypeExtractor = (node: SyntaxNode) => string | undefined;
export type LiteralTypeInferrer = (node: SyntaxNode) => string | undefined;
export type ConstructorTypeDetector = (node: SyntaxNode, classNames: ClassNameLookup) => string | undefined;
export type DeclaredTypeUnwrapper = (declaredType: string, typeNode: SyntaxNode) => string | undefined;
export interface ReturnTypeLookup {
    lookupReturnType(callee: string): string | undefined;
    lookupRawReturnType(callee: string): string | undefined;
}
export interface ForLoopExtractorContext {
    scopeEnv: Map<string, string>;
    declarationTypeNodes: ReadonlyMap<string, SyntaxNode>;
    scope: string;
    returnTypeLookup: ReturnTypeLookup;
}
export type ForLoopExtractor = (node: SyntaxNode, ctx: ForLoopExtractorContext) => void;
export type PendingAssignment = {
    kind: 'copy';
    lhs: string;
    rhs: string;
} | {
    kind: 'callResult';
    lhs: string;
    callee: string;
    calleeFqn?: string;
    line?: number;
} | {
    kind: 'fieldAccess';
    lhs: string;
    receiver: string;
    field: string;
} | {
    kind: 'methodCallResult';
    lhs: string;
    receiver: string;
    method: string;
};
export type PendingAssignmentExtractor = (node: SyntaxNode, scopeEnv: ReadonlyMap<string, string>) => PendingAssignment | PendingAssignment[] | undefined;
export interface PatternBindingResult {
    varName: string;
    typeName: string;
    narrowingRange?: {
        startIndex: number;
        endIndex: number;
    };
}
export type PatternBindingExtractor = (node: SyntaxNode, scopeEnv: ReadonlyMap<string, string>, declarationTypeNodes: ReadonlyMap<string, SyntaxNode>, scope: string) => PatternBindingResult | undefined;
export interface LanguageTypeConfig {
    readonly allowPatternBindingOverwrite?: boolean;
    declarationNodeTypes: ReadonlySet<string>;
    forLoopNodeTypes?: ReadonlySet<string>;
    patternBindingNodeTypes?: ReadonlySet<string>;
    extractDeclaration: TypeBindingExtractor;
    extractParameter: ParameterExtractor;
    extractInitializer?: InitializerExtractor;
    scanConstructorBinding?: ConstructorBindingScanner;
    extractReturnType?: ReturnTypeExtractor;
    extractForLoopBinding?: ForLoopExtractor;
    extractPendingAssignment?: PendingAssignmentExtractor;
    extractPatternBinding?: PatternBindingExtractor;
    inferLiteralType?: LiteralTypeInferrer;
    detectConstructorType?: ConstructorTypeDetector;
    unwrapDeclaredType?: DeclaredTypeUnwrapper;
}
