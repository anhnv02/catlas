import type { SyntaxNode } from './ast-helpers.js';
export declare const CALL_EXPRESSION_TYPES: Set<string>;
export declare const MAX_CHAIN_DEPTH = 3;
export declare const countCallArguments: (callNode: SyntaxNode | null | undefined) => number | undefined;
type CallForm = 'free' | 'member' | 'constructor';
export declare const inferCallForm: (callNode: SyntaxNode, nameNode: SyntaxNode) => CallForm | undefined;
export declare const extractReceiverName: (nameNode: SyntaxNode) => string | undefined;
export declare const extractReceiverNode: (nameNode: SyntaxNode) => SyntaxNode | undefined;
export type MixedChainStep = {
    kind: 'field' | 'call';
    name: string;
};
export declare function extractCallChain(receiverCallNode: SyntaxNode): {
    chain: string[];
    baseReceiverName: string | undefined;
} | undefined;
export declare function extractMixedChain(receiverNode: SyntaxNode): {
    chain: MixedChainStep[];
    baseReceiverName: string | undefined;
} | undefined;
export {};
