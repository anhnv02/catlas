import { MCPTool, MCPToolDefinition } from '../core/base-tool.js';
import { KnowledgeEngine, RepoHandle } from '../../core/knowledge-engine.js';
export declare class RouteMapTool extends MCPTool {
    get definition(): MCPToolDefinition;
    execute(engine: KnowledgeEngine, params: any, repo?: RepoHandle): Promise<any>;
}
export declare class ToolMapTool extends MCPTool {
    get definition(): MCPToolDefinition;
    execute(engine: KnowledgeEngine, params: any, repo?: RepoHandle): Promise<any>;
}
export declare class ShapeCheckTool extends MCPTool {
    get definition(): MCPToolDefinition;
    execute(engine: KnowledgeEngine, params: any, repo?: RepoHandle): Promise<any>;
}
export declare class ApiImpactTool extends MCPTool {
    get definition(): MCPToolDefinition;
    execute(engine: KnowledgeEngine, params: any, repo?: RepoHandle): Promise<any>;
}
