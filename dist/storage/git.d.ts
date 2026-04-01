export declare const isGitRepo: (repoPath: string) => boolean;
export declare const getCurrentCommit: (repoPath: string) => string;
export declare const getCurrentBranch: (repoPath: string) => string;
export declare const getGitRoot: (fromPath: string) => string | null;
export declare const hasGitDir: (dirPath: string) => boolean;
