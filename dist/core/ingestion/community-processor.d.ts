import { KnowledgeGraph } from '../graph/types.js';
export interface CommunityNode {
    id: string;
    label: string;
    heuristicLabel: string;
    cohesion: number;
    symbolCount: number;
}
export interface CommunityMembership {
    nodeId: string;
    communityId: string;
}
export interface CommunityDetectionResult {
    communities: CommunityNode[];
    memberships: CommunityMembership[];
    stats: {
        totalCommunities: number;
        modularity: number;
        nodesProcessed: number;
    };
}
export declare const COMMUNITY_COLORS: string[];
export declare const getCommunityColor: (communityIndex: number) => string;
export declare const processCommunities: (knowledgeGraph: KnowledgeGraph, onProgress?: (message: string, progress: number) => void) => Promise<CommunityDetectionResult>;
