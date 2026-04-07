import { z } from 'zod';
import { KnowledgeEngine, RepoHandle } from '../../core/knowledge-engine.js';
export interface MCPToolDefinition {
    name: string;
    description: string;
    inputSchema?: {
        type: 'object';
        properties: Record<string, any>;
        required?: string[];
    };
    zodSchema?: z.ZodObject<any>;
}
export declare abstract class MCPTool {
    abstract get definition(): MCPToolDefinition;
    abstract execute(engine: KnowledgeEngine, params: any, repo?: RepoHandle): Promise<any>;
}
