import { RegistryEntry } from '../../storage/repo-manager.js';
import { RepoHandle } from '../../core/knowledge-engine.js';
export interface DetailedToolResult {
    data: any;
    stalenessWarning?: string;
    backgroundStatus: 'idle' | 'running';
}
export declare class LocalBackend {
    private engine;
    private registry;
    private repoCache;
    constructor();
    init(): Promise<boolean>;
    getToolDefinitions(): import("../core/base-tool.js").MCPToolDefinition[];
    private executeToolWithRepo;
    callTool(name: string, params: any): Promise<any>;
    callToolWithStaleness(name: string, params: any): Promise<DetailedToolResult>;
    listRepos(): Promise<RegistryEntry[]>;
    resolveRepo(repoParam?: string): Promise<RepoHandle | null>;
    getContext(repo: RepoHandle): Promise<import("../../core/knowledge-engine.js").CodebaseContext>;
    queryClusters(repoName?: string, limit?: number): Promise<any>;
    queryProcesses(repoName?: string, limit?: number): Promise<any>;
    queryClusterDetail(name: string, repoName?: string): Promise<any>;
    queryProcessDetail(name: string, repoName?: string): Promise<any>;
    disconnect(): Promise<void>;
}
