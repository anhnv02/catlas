export interface EvalServerOptions {
    port?: string;
    idleTimeout?: string;
}
export declare const evalServerCommand: (options?: EvalServerOptions) => Promise<void>;
