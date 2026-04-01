export interface IndexOptions {
    force?: boolean;
    allowNonGit?: boolean;
}
export declare const indexCommand: (inputPathParts: string[] | undefined, options?: IndexOptions) => Promise<void>;
