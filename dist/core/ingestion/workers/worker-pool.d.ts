export interface WorkerPool {
    dispatch<TInput, TResult>(items: TInput[], onProgress?: (filesProcessed: number) => void): Promise<TResult[]>;
    terminate(): Promise<void>;
    readonly size: number;
}
export declare const createWorkerPool: (workerUrl: URL, poolSize?: number) => WorkerPool;
