export interface RepoMeta {
    repoPath: string;
    lastCommit: string;
    indexedBranch?: string;
    indexedAt: string;
    stats?: {
        files?: number;
        nodes?: number;
        edges?: number;
        communities?: number;
        processes?: number;
        embeddings?: number;
    };
}
export interface IndexedRepo {
    repoPath: string;
    storagePath: string;
    lbugPath: string;
    metaPath: string;
    meta: RepoMeta;
}
export interface RegistryEntry {
    name: string;
    path: string;
    storagePath: string;
    indexedAt: string;
    lastCommit: string;
    stats?: RepoMeta['stats'];
}
export declare const getStoragePath: (repoPath: string) => string;
export declare const getStoragePaths: (repoPath: string) => {
    readonly storagePath: string;
    readonly lbugPath: string;
    readonly metaPath: string;
};
export declare const hasKuzuIndex: (storagePath: string) => Promise<boolean>;
export declare const cleanupOldKuzuFiles: (storagePath: string) => Promise<{
    found: boolean;
    needsReindex: boolean;
}>;
export declare const loadMeta: (storagePath: string) => Promise<RepoMeta | null>;
export declare const saveMeta: (storagePath: string, meta: RepoMeta) => Promise<void>;
export declare const hasIndex: (repoPath: string) => Promise<boolean>;
export declare const loadRepo: (repoPath: string) => Promise<IndexedRepo | null>;
export declare const findRepo: (startPath: string) => Promise<IndexedRepo | null>;
export declare const addToGitignore: (repoPath: string) => Promise<void>;
export declare const getGlobalDir: () => string;
export declare const getGlobalRegistryPath: () => string;
export declare const readRegistry: () => Promise<RegistryEntry[]>;
export declare const registerRepo: (repoPath: string, meta: RepoMeta) => Promise<void>;
export declare const unregisterRepo: (repoPath: string) => Promise<void>;
export declare const listRegisteredRepos: (opts?: {
    validate?: boolean;
}) => Promise<RegistryEntry[]>;
export type LLMProvider = 'openai' | 'cursor';
export interface CLIConfig {
    apiKey?: string;
    model?: string;
    baseUrl?: string;
    provider?: LLMProvider;
    cursorModel?: string;
}
export declare const getGlobalConfigPath: () => string;
export declare const loadCLIConfig: () => Promise<CLIConfig>;
export declare const saveCLIConfig: (config: CLIConfig) => Promise<void>;
