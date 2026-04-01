import { MCPTool, MCPToolDefinition } from '../core/base-tool.js';
import { KnowledgeEngine } from '../../core/knowledge-engine.js';
export declare class ListReposTool extends MCPTool {
    get definition(): MCPToolDefinition;
    execute(engine: KnowledgeEngine, params: any): Promise<any>;
}
