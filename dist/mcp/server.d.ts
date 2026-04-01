import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { LocalBackend } from './local/local-backend.js';
export declare function createMCPServer(backend: LocalBackend): McpServer;
export declare function startMCPServer(backend: LocalBackend): Promise<void>;
