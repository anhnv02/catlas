export interface QueryOptions {
    repo?: string;
    context?: string;
    goal?: string;
    limit?: string;
    content?: boolean;
}
export interface ContextOptions {
    repo?: string;
    file?: string;
    uid?: string;
    content?: boolean;
}
export interface ImpactOptions {
    direction?: string;
    repo?: string;
    depth?: string;
    includeTests?: boolean;
}
export interface CypherOptions {
    repo?: string;
}
export declare const queryCommand: (q: string, o: QueryOptions) => Promise<void>;
export declare const contextCommand: (n: string, o: ContextOptions) => Promise<void>;
export declare const impactCommand: (t: string, o: ImpactOptions) => Promise<void>;
export declare const cypherCommand: (q: string, o: CypherOptions) => Promise<void>;
