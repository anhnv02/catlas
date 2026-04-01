export interface CleanOptions {
    force?: boolean;
    all?: boolean;
}
export declare const cleanCommand: (options?: CleanOptions) => Promise<void>;
