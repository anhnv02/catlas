export interface AnalyzeOptions {
    force?: boolean;
    embeddings?: boolean;
    skills?: boolean;
    verbose?: boolean;
    skipGit?: boolean;
}
export declare const analyzeCommand: (inputPath?: string, options?: AnalyzeOptions) => Promise<void>;
