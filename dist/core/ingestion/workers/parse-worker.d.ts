import { SupportedLanguages } from '../../../config/supported-languages.js';
import { type MixedChainStep } from '../utils/call-analysis.js';
import type { ConstructorBinding } from '../type-env.js';
import type { NamedBinding } from '../named-bindings/types.js';
import type { NodeLabel } from '../../graph/types.js';
interface ParsedNode {
    id: string;
    label: string;
    properties: {
        name: string;
        filePath: string;
        startLine: number;
        endLine: number;
        language: SupportedLanguages;
        isExported: boolean;
        astFrameworkMultiplier?: number;
        astFrameworkReason?: string;
        description?: string;
        parameterCount?: number;
        requiredParameterCount?: number;
        returnType?: string;
        declaredType?: string;
        visibility?: string;
        isStatic?: boolean;
        isReadonly?: boolean;
    };
}
interface ParsedRelationship {
    id: string;
    sourceId: string;
    targetId: string;
    type: 'DEFINES' | 'HAS_METHOD' | 'HAS_PROPERTY';
    confidence: number;
    reason: string;
}
interface ParsedSymbol {
    filePath: string;
    name: string;
    nodeId: string;
    type: NodeLabel;
    parameterCount?: number;
    requiredParameterCount?: number;
    parameterTypes?: string[];
    returnType?: string;
    declaredType?: string;
    ownerId?: string;
    visibility?: string;
    isStatic?: boolean;
    isReadonly?: boolean;
}
export interface ExtractedImport {
    filePath: string;
    rawImportPath: string;
    language: SupportedLanguages;
    namedBindings?: NamedBinding[];
}
export interface ExtractedCall {
    filePath: string;
    calledName: string;
    sourceId: string;
    argCount?: number;
    callForm?: 'free' | 'member' | 'constructor';
    receiverName?: string;
    receiverTypeName?: string;
    receiverMixedChain?: MixedChainStep[];
}
export interface ExtractedAssignment {
    filePath: string;
    sourceId: string;
    receiverText: string;
    propertyName: string;
    receiverTypeName?: string;
}
export interface ExtractedHeritage {
    filePath: string;
    className: string;
    parentName: string;
    kind: string;
}
export interface ExtractedRoute {
    filePath: string;
    httpMethod: string;
    routePath: string | null;
    controllerName: string | null;
    methodName: string | null;
    middleware: string[];
    prefix: string | null;
    lineNumber: number;
}
export interface ExtractedFetchCall {
    filePath: string;
    fetchURL: string;
    lineNumber: number;
}
export interface ExtractedDecoratorRoute {
    filePath: string;
    routePath: string;
    httpMethod: string;
    decoratorName: string;
    lineNumber: number;
}
export interface ExtractedToolDef {
    filePath: string;
    toolName: string;
    description: string;
    lineNumber: number;
}
export interface ExtractedORMQuery {
    filePath: string;
    orm: 'prisma' | 'supabase';
    model: string;
    method: string;
    lineNumber: number;
}
export interface FileConstructorBindings {
    filePath: string;
    bindings: ConstructorBinding[];
}
export interface FileTypeEnvBindings {
    filePath: string;
    bindings: [string, string][];
}
export interface ParseWorkerResult {
    nodes: ParsedNode[];
    relationships: ParsedRelationship[];
    symbols: ParsedSymbol[];
    imports: ExtractedImport[];
    calls: ExtractedCall[];
    assignments: ExtractedAssignment[];
    heritage: ExtractedHeritage[];
    routes: ExtractedRoute[];
    fetchCalls: ExtractedFetchCall[];
    decoratorRoutes: ExtractedDecoratorRoute[];
    toolDefs: ExtractedToolDef[];
    ormQueries: ExtractedORMQuery[];
    constructorBindings: FileConstructorBindings[];
    typeEnvBindings: FileTypeEnvBindings[];
    skippedLanguages: Record<string, number>;
    fileCount: number;
}
export interface ParseWorkerInput {
    path: string;
    content: string;
}
export declare function extractORMQueries(filePath: string, content: string, out: ExtractedORMQuery[]): void;
export {};
