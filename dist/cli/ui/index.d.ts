export interface UIOptions {
    port?: string;
    host?: string;
}
export interface UIServerHandle {
    host: string;
    port: number;
    close: () => Promise<void>;
}
interface StartUIOptions {
    silent?: boolean;
}
export declare function startUIServer(options?: UIOptions, startOptions?: StartUIOptions): Promise<UIServerHandle>;
export declare const uiCommand: (options?: UIOptions) => Promise<void>;
export {};
