import { MCPTool, MCPToolDefinition } from '../core/base-tool.js';
import { KnowledgeEngine, RepoHandle } from '../../core/knowledge-engine.js';
export declare class QueryTool extends MCPTool {
    get definition(): MCPToolDefinition;
    execute(engine: KnowledgeEngine, params: any, repo?: RepoHandle): Promise<any>;
}
export declare class CypherTool extends MCPTool {
    get definition(): MCPToolDefinition;
    execute(engine: KnowledgeEngine, params: any, repo?: RepoHandle): Promise<any>;
}
export declare class ContextTool extends MCPTool {
    get definition(): MCPToolDefinition;
    execute(engine: KnowledgeEngine, params: any, repo?: RepoHandle): Promise<any>;
}
export declare class ImpactTool extends MCPTool {
    get definition(): MCPToolDefinition;
    execute(engine: KnowledgeEngine, params: any, repo?: RepoHandle): Promise<any>;
}
