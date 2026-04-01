import lbug from '@ladybugdb/core';
import { KnowledgeGraph } from '../graph/types.js';
export declare const getDatabase: () => lbug.Database | null;
export declare const isDbBusyError: (err: unknown) => boolean;
export declare const initLbug: (dbPath: string) => Promise<{
    db: lbug.Database;
    conn: lbug.Connection;
}>;
export declare const withLbugDb: <T>(dbPath: string, operation: () => Promise<T>) => Promise<T>;
export type LbugProgressCallback = (message: string) => void;
export declare const loadGraphToLbug: (graph: KnowledgeGraph, repoPath: string, storagePath: string, onProgress?: LbugProgressCallback) => Promise<{
    success: boolean;
    insertedRels: number;
    skippedRels: number;
    warnings: string[];
}>;
export declare const insertNodeToLbug: (label: string, properties: Record<string, any>, dbPath?: string) => Promise<boolean>;
export declare const batchInsertNodesToLbug: (nodes: Array<{
    label: string;
    properties: Record<string, any>;
}>, dbPath: string) => Promise<{
    inserted: number;
    failed: number;
}>;
export declare const executeQuery: (cypher: string) => Promise<any[]>;
export declare const executeWithReusedStatement: (cypher: string, paramsList: Array<Record<string, any>>) => Promise<void>;
export declare const getLbugStats: () => Promise<{
    nodes: number;
    edges: number;
}>;
export declare const loadCachedEmbeddings: () => Promise<{
    embeddingNodeIds: Set<string>;
    embeddings: Array<{
        nodeId: string;
        embedding: number[];
    }>;
}>;
export declare const closeLbug: () => Promise<void>;
export declare const isLbugReady: () => boolean;
export declare const deleteNodesForFile: (filePath: string, dbPath?: string) => Promise<{
    deletedNodes: number;
}>;
export declare const getEmbeddingTableName: () => string;
export declare const loadFTSExtension: () => Promise<void>;
export declare const createFTSIndex: (tableName: string, indexName: string, properties: string[], stemmer?: string) => Promise<void>;
export declare const queryFTS: (tableName: string, indexName: string, query: string, limit?: number, conjunctive?: boolean) => Promise<Array<{
    nodeId: string;
    name: string;
    filePath: string;
    score: number;
    [key: string]: any;
}>>;
export declare const dropFTSIndex: (tableName: string, indexName: string) => Promise<void>;
