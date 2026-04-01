import { type Ignore } from 'ignore';
import type { Path } from 'path-scurry';
export declare const shouldIgnorePath: (filePath: string) => boolean;
export declare const isHardcodedIgnoredDirectory: (name: string) => boolean;
export interface IgnoreOptions {
    noGitignore?: boolean;
}
export declare const loadIgnoreRules: (repoPath: string, options?: IgnoreOptions) => Promise<Ignore | null>;
export declare const createIgnoreFilter: (repoPath: string, options?: IgnoreOptions) => Promise<{
    ignored(p: Path): boolean;
    childrenIgnored(p: Path): boolean;
}>;
