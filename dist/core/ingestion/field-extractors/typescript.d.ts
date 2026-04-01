import type { SyntaxNode } from '../utils/ast-helpers.js';
import { SupportedLanguages } from '../../../config/supported-languages.js';
import { BaseFieldExtractor } from '../field-extractor.js';
import type { FieldExtractorContext, ExtractedFields, FieldVisibility } from '../field-types.js';
export declare class TypeScriptFieldExtractor extends BaseFieldExtractor {
    language: SupportedLanguages;
    private static readonly TYPE_DECLARATION_NODES;
    private static readonly FIELD_NODE_TYPES;
    private static readonly VISIBILITY_MODIFIERS;
    isTypeDeclaration(node: SyntaxNode): boolean;
    protected extractVisibility(node: SyntaxNode): FieldVisibility;
    private isStatic;
    private isReadonly;
    private isOptional;
    private extractFullType;
    private extractField;
    private extractFieldsFromBody;
    private extractFieldsFromObjectType;
    extract(node: SyntaxNode, context: FieldExtractorContext): ExtractedFields | null;
}
export declare const typescriptFieldExtractor: TypeScriptFieldExtractor;
