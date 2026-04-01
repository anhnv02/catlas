import type { SyntaxNode } from '../utils/ast-helpers.js';
import { SupportedLanguages } from '../../../config/supported-languages.js';
import type { FieldExtractor } from '../field-extractor.js';
import type { FieldVisibility } from '../field-types.js';
export interface FieldExtractionConfig {
    language: SupportedLanguages;
    typeDeclarationNodes: string[];
    fieldNodeTypes: string[];
    bodyNodeTypes: string[];
    defaultVisibility: FieldVisibility;
    extractName: (node: SyntaxNode) => string | undefined;
    extractNames?: (node: SyntaxNode) => string[];
    extractType: (node: SyntaxNode) => string | undefined;
    extractVisibility: (node: SyntaxNode) => FieldVisibility;
    isStatic: (node: SyntaxNode) => boolean;
    isReadonly: (node: SyntaxNode) => boolean;
}
export declare function createFieldExtractor(config: FieldExtractionConfig): FieldExtractor;
