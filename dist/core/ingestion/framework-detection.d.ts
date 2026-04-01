import { SupportedLanguages } from '../../config/supported-languages.js';
export interface FrameworkHint {
    framework: string;
    entryPointMultiplier: number;
    reason: string;
}
export declare function detectFrameworkFromPath(filePath: string): FrameworkHint | null;
export declare const FRAMEWORK_AST_PATTERNS: {
    nestjs: string[];
    'expo-router': string[];
    express: string[];
    fastapi: string[];
    flask: string[];
    spring: string[];
    jaxrs: string[];
    aspnet: string[];
    signalr: string[];
    blazor: string[];
    efcore: string[];
    'go-http': string[];
    gin: string[];
    echo: string[];
    fiber: string[];
    'go-grpc': string[];
    prisma: string[];
    supabase: string[];
    laravel: string[];
    actix: string[];
    axum: string[];
    rocket: string[];
    tokio: string[];
    qt: string[];
    uikit: string[];
    swiftui: string[];
    vapor: string[];
    rails: string[];
    sinatra: string[];
    flutter: string[];
    riverpod: string[];
};
export declare const AST_FRAMEWORK_PATTERNS_BY_LANGUAGE: {
    javascript: {
        framework: string;
        entryPointMultiplier: number;
        reason: string;
        patterns: string[];
    }[];
    typescript: {
        framework: string;
        entryPointMultiplier: number;
        reason: string;
        patterns: string[];
    }[];
    python: {
        framework: string;
        entryPointMultiplier: number;
        reason: string;
        patterns: string[];
    }[];
    java: {
        framework: string;
        entryPointMultiplier: number;
        reason: string;
        patterns: string[];
    }[];
    kotlin: {
        framework: string;
        entryPointMultiplier: number;
        reason: string;
        patterns: string[];
    }[];
    csharp: {
        framework: string;
        entryPointMultiplier: number;
        reason: string;
        patterns: string[];
    }[];
    php: {
        framework: string;
        entryPointMultiplier: number;
        reason: string;
        patterns: string[];
    }[];
    go: {
        framework: string;
        entryPointMultiplier: number;
        reason: string;
        patterns: string[];
    }[];
    rust: {
        framework: string;
        entryPointMultiplier: number;
        reason: string;
        patterns: string[];
    }[];
    c: any[];
    cpp: {
        framework: string;
        entryPointMultiplier: number;
        reason: string;
        patterns: string[];
    }[];
    swift: {
        framework: string;
        entryPointMultiplier: number;
        reason: string;
        patterns: string[];
    }[];
    ruby: {
        framework: string;
        entryPointMultiplier: number;
        reason: string;
        patterns: string[];
    }[];
    dart: {
        framework: string;
        entryPointMultiplier: number;
        reason: string;
        patterns: string[];
    }[];
    cobol: any[];
};
export declare function detectFrameworkFromAST(language: SupportedLanguages, definitionText: string): FrameworkHint | null;
