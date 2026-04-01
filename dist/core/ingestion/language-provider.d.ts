import type { SupportedLanguages } from '../../config/supported-languages.js';
import type { LanguageTypeConfig } from './type-extractors/types.js';
import type { CallRouter } from './call-routing.js';
import type { ExportChecker } from './export-detection.js';
import type { FieldExtractor } from './field-extractor.js';
import type { ImportResolverFn } from './import-resolvers/types.js';
import type { NamedBindingExtractorFn } from './named-bindings/types.js';
import type { SyntaxNode } from './utils/ast-helpers.js';
import type { NodeLabel } from '../graph/types.js';
export type CaptureMap = Record<string, SyntaxNode | undefined>;
export type MroStrategy = 'first-wins' | 'c3' | 'leftmost-base' | 'implements-split' | 'qualified-syntax';
export type ImportSemantics = 'named' | 'wildcard' | 'namespace';
interface LanguageProviderConfig {
    readonly id: SupportedLanguages;
    readonly extensions: readonly string[];
    readonly parseStrategy?: 'tree-sitter' | 'standalone';
    readonly treeSitterQueries: string;
    readonly typeConfig: LanguageTypeConfig;
    readonly exportChecker: ExportChecker;
    readonly importResolver: ImportResolverFn;
    readonly callRouter?: CallRouter;
    readonly namedBindingExtractor?: NamedBindingExtractorFn;
    readonly importSemantics?: ImportSemantics;
    readonly importPathPreprocessor?: (cleaned: string, importNode: SyntaxNode) => string;
    readonly implicitImportWirer?: (languageFiles: string[], importMap: ReadonlyMap<string, ReadonlySet<string>>, addImportEdge: (src: string, target: string) => void, projectConfig: unknown) => void;
    readonly enclosingFunctionFinder?: (ancestorNode: SyntaxNode) => {
        funcName: string;
        label: NodeLabel;
    } | null;
    readonly labelOverride?: (functionNode: SyntaxNode, defaultLabel: NodeLabel) => NodeLabel | null;
    readonly heritageDefaultEdge?: 'EXTENDS' | 'IMPLEMENTS';
    readonly interfaceNamePattern?: RegExp;
    readonly mroStrategy?: MroStrategy;
    readonly fieldExtractor?: FieldExtractor;
    readonly descriptionExtractor?: (nodeLabel: NodeLabel, nodeName: string, captureMap: CaptureMap) => string | undefined;
    readonly isRouteFile?: (filePath: string) => boolean;
    readonly builtInNames?: ReadonlySet<string>;
}
export interface LanguageProvider extends Omit<LanguageProviderConfig, 'importSemantics' | 'heritageDefaultEdge' | 'mroStrategy'> {
    readonly importSemantics: ImportSemantics;
    readonly heritageDefaultEdge: 'EXTENDS' | 'IMPLEMENTS';
    readonly mroStrategy: MroStrategy;
    readonly isBuiltInName: (name: string) => boolean;
}
export declare function defineLanguage(config: LanguageProviderConfig): LanguageProvider;
export {};
