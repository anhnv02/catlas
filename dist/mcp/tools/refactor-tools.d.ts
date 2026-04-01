import { MCPTool, MCPToolDefinition } from '../core/base-tool.js';
import { KnowledgeEngine, RepoHandle } from '../../core/knowledge-engine.js';
export declare class DetectChangesTool extends MCPTool {
    get definition(): MCPToolDefinition;
    execute(engine: KnowledgeEngine, params: any, repo?: RepoHandle): Promise<any>;
}
export declare class RenameTool extends MCPTool {
    get definition(): MCPToolDefinition;
    execute(engine: KnowledgeEngine, params: any, repo?: RepoHandle): Promise<any>;
}
