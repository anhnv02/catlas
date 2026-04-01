import type { LocalBackend } from './local/local-backend.js';
export interface ResourceDefinition {
    uri: string;
    name: string;
    description: string;
    mimeType: string;
}
export interface ResourceTemplate {
    uriTemplate: string;
    name: string;
    description: string;
    mimeType: string;
}
export declare function getResourceDefinitions(): ResourceDefinition[];
export declare function getResourceTemplates(): ResourceTemplate[];
export declare function getResourceMimeType(uri: string): string;
export declare function readResource(uri: string, backend: LocalBackend): Promise<string>;
