import type { SyntaxNode } from './utils/ast-helpers.js';
export type CallRoutingResult = RubyCallRouting | null;
export type CallRouter = (calledName: string, callNode: SyntaxNode) => CallRoutingResult;
export type RubyCallRouting = {
    kind: 'import';
    importPath: string;
    isRelative: boolean;
} | {
    kind: 'heritage';
    items: RubyHeritageItem[];
} | {
    kind: 'properties';
    items: RubyPropertyItem[];
} | {
    kind: 'call';
} | {
    kind: 'skip';
};
export interface RubyHeritageItem {
    enclosingClass: string;
    mixinName: string;
    heritageKind: 'include' | 'extend' | 'prepend';
}
export type RubyAccessorType = 'attr_accessor' | 'attr_reader' | 'attr_writer';
export interface RubyPropertyItem {
    propName: string;
    accessorType: RubyAccessorType;
    startLine: number;
    endLine: number;
    declaredType?: string;
}
export declare function routeRubyCall(calledName: string, callNode: SyntaxNode): RubyCallRouting;
