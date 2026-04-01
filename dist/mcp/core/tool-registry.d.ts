import { MCPTool, MCPToolDefinition } from './base-tool.js';
export declare class ToolRegistry {
    private tools;
    registerAll(tools: MCPTool[]): void;
    getTool(name: string): MCPTool | undefined;
    getDefinitions(): MCPToolDefinition[];
}
