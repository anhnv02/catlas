import { SupportedLanguages } from '../../../config/supported-languages.js';
import type { LanguageProvider } from '../language-provider.js';
export declare const providers: {
    javascript: LanguageProvider;
    typescript: LanguageProvider;
    python: LanguageProvider;
    java: LanguageProvider;
    kotlin: LanguageProvider;
    go: LanguageProvider;
    rust: LanguageProvider;
    csharp: LanguageProvider;
    c: LanguageProvider;
    cpp: LanguageProvider;
    php: LanguageProvider;
    ruby: LanguageProvider;
    swift: LanguageProvider;
    dart: LanguageProvider;
    cobol: LanguageProvider;
};
export declare function getProvider(language: SupportedLanguages): LanguageProvider;
export declare function getProviderForFile(filePath: string): LanguageProvider | null;
export declare const providersWithImplicitWiring: (LanguageProvider & {
    implicitImportWirer: NonNullable<LanguageProvider["implicitImportWirer"]>;
})[];
