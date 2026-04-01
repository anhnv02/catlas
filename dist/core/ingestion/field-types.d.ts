import type { TypeEnvironment } from './type-env.js';
import type { SymbolTable } from './symbol-table.js';
import { SupportedLanguages } from '../../config/supported-languages.js';
export type FieldVisibility = 'public' | 'private' | 'protected' | 'internal' | 'package' | 'fileprivate' | 'open';
export interface FieldInfo {
    name: string;
    type: string | null;
    visibility: FieldVisibility;
    isStatic: boolean;
    isReadonly: boolean;
    sourceFile: string;
    line: number;
}
export type FieldTypeMap = Map<string, FieldInfo[]>;
export interface FieldExtractorContext {
    typeEnv: TypeEnvironment;
    symbolTable: SymbolTable;
    filePath: string;
    language: SupportedLanguages;
}
export interface ExtractedFields {
    ownerFqn: string;
    fields: FieldInfo[];
    nestedTypes: string[];
}
