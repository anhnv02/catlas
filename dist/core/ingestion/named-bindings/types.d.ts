import type { SyntaxNode } from '../utils/ast-helpers.js';
export interface NamedBinding {
    local: string;
    exported: string;
    isModuleAlias?: boolean;
}
export type NamedBindingExtractorFn = (importNode: SyntaxNode) => NamedBinding[] | undefined;
