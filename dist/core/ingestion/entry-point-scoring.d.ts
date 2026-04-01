import { SupportedLanguages } from '../../config/supported-languages.js';
export declare const ENTRY_POINT_PATTERNS: {
    javascript: RegExp[];
    typescript: RegExp[];
    python: RegExp[];
    java: RegExp[];
    kotlin: RegExp[];
    csharp: RegExp[];
    go: RegExp[];
    rust: RegExp[];
    c: RegExp[];
    cpp: RegExp[];
    swift: RegExp[];
    php: RegExp[];
    ruby: RegExp[];
    dart: RegExp[];
    cobol: any[];
};
export interface EntryPointScoreResult {
    score: number;
    reasons: string[];
}
export declare function calculateEntryPointScore(name: string, language: SupportedLanguages, isExported: boolean, callerCount: number, calleeCount: number, filePath?: string): EntryPointScoreResult;
export declare function isTestFile(filePath: string): boolean;
export declare function isUtilityFile(filePath: string): boolean;
