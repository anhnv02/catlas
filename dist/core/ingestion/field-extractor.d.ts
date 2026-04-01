import type { SyntaxNode } from './utils/ast-helpers.js';
import { SupportedLanguages } from '../../config/supported-languages.js';
import type { FieldExtractorContext, ExtractedFields, FieldVisibility } from './field-types.js';
export interface FieldExtractor {
    language: SupportedLanguages;
    extract(node: SyntaxNode, context: FieldExtractorContext): ExtractedFields | null;
    isTypeDeclaration(node: SyntaxNode): boolean;
}
export declare abstract class BaseFieldExtractor implements FieldExtractor {
    abstract language: SupportedLanguages;
    abstract extract(node: SyntaxNode, context: FieldExtractorContext): ExtractedFields | null;
    abstract isTypeDeclaration(node: SyntaxNode): boolean;
    protected normalizeType(type: string | null): string | null;
    protected resolveType(typeName: string, context: FieldExtractorContext): string | null;
    protected abstract extractVisibility(node: SyntaxNode): FieldVisibility;
}
