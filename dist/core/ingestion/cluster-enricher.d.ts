import { CommunityNode } from './community-processor.js';
export interface ClusterEnrichment {
    name: string;
    keywords: string[];
    description: string;
}
export interface EnrichmentResult {
    enrichments: Map<string, ClusterEnrichment>;
    tokensUsed: number;
}
export interface LLMClient {
    generate: (prompt: string) => Promise<string>;
}
export interface ClusterMemberInfo {
    name: string;
    filePath: string;
    type: string;
}
export declare const enrichClusters: (communities: CommunityNode[], memberMap: Map<string, ClusterMemberInfo[]>, llmClient: LLMClient, onProgress?: (current: number, total: number) => void) => Promise<EnrichmentResult>;
export declare const enrichClustersBatch: (communities: CommunityNode[], memberMap: Map<string, ClusterMemberInfo[]>, llmClient: LLMClient, batchSize?: number, onProgress?: (current: number, total: number) => void) => Promise<EnrichmentResult>;
