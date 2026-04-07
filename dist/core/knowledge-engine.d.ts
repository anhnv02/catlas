export declare const VALID_NODE_LABELS: Set<string>;
export declare const VALID_RELATION_TYPES: Set<string>;
export declare const IMPACT_RELATION_CONFIDENCE: Readonly<Record<string, number>>;
export interface RepoHandle {
    id: string;
    name: string;
    repoPath: string;
    storagePath: string;
    lbugPath: string;
    indexedAt: string;
    lastCommit: string;
    indexedBranch: string;
    stats?: any;
}
export interface CodebaseContext {
    projectName: string;
    stats: {
        fileCount: number;
        functionCount: number;
        communityCount: number;
        processCount: number;
        nodeCount?: number;
        edgeCount?: number;
    };
}
export declare function isTestFilePath(filePath: string): boolean;
export declare class KnowledgeEngine {
    private initializedRepos;
    getContext(repo: RepoHandle): Promise<CodebaseContext>;
    private lastStalenessCheck;
    constructor();
    private confidenceForRelType;
    private initPromises;
    private checkPromises;
    ensureInitialized(repo: RepoHandle): Promise<void>;
    private runInitialization;
    private logError;
    query(repo: RepoHandle, params: {
        query: string;
        task_context?: string;
        goal?: string;
        limit?: number;
        max_symbols?: number;
        include_content?: boolean;
    }): Promise<any>;
    private bm25Search;
    private semanticSearch;
    cypher(repo: RepoHandle, params: {
        query: string;
    }): Promise<any>;
    private formatCypherAsMarkdown;
    overview(repo: RepoHandle, params: {
        showClusters?: boolean;
        showProcesses?: boolean;
        limit?: number;
    }): Promise<any>;
    private aggregateClusters;
    context(repo: RepoHandle, params: {
        name?: string;
        uid?: string;
        file_path?: string;
        include_content?: boolean;
    }): Promise<any>;
    impact(repo: RepoHandle, params: {
        target: string;
        direction: 'upstream' | 'downstream';
        maxDepth?: number;
        relationTypes?: string[];
        includeTests?: boolean;
        minConfidence?: number;
    }): Promise<any>;
    routeMap(repo: RepoHandle, params: {
        route?: string;
    }): Promise<any>;
    shapeCheck(repo: RepoHandle, params: {
        route?: string;
    }): Promise<any>;
    toolMap(repo: RepoHandle, params: {
        tool?: string;
    }): Promise<any>;
    apiImpact(repo: RepoHandle, params: {
        route?: string;
        file?: string;
    }): Promise<any>;
    private fetchRoutesWithConsumers;
    private fetchLinkedFlowsBatch;
    detectChanges(repo: RepoHandle, params: {
        scope?: string;
        base_ref?: string;
    }): Promise<any>;
    rename(repo: RepoHandle, params: {
        symbol_name?: string;
        symbol_uid?: string;
        new_name: string;
        file_path?: string;
        dry_run?: boolean;
    }): Promise<any>;
    disconnect(): Promise<void>;
    queryClusters(repo: RepoHandle, limit?: number): Promise<any>;
    queryProcesses(repo: RepoHandle, limit?: number): Promise<any>;
    queryClusterDetail(repo: RepoHandle, name: string): Promise<any>;
    queryProcessDetail(repo: RepoHandle, name: string): Promise<any>;
}
