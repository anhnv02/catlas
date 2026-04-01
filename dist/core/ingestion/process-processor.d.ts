import { KnowledgeGraph } from '../graph/types.js';
import { CommunityMembership } from './community-processor.js';
export interface ProcessDetectionConfig {
    maxTraceDepth: number;
    maxBranching: number;
    maxProcesses: number;
    minSteps: number;
}
export interface ProcessNode {
    id: string;
    label: string;
    heuristicLabel: string;
    processType: 'intra_community' | 'cross_community';
    stepCount: number;
    communities: string[];
    entryPointId: string;
    terminalId: string;
    trace: string[];
}
export interface ProcessStep {
    nodeId: string;
    processId: string;
    step: number;
}
export interface ProcessDetectionResult {
    processes: ProcessNode[];
    steps: ProcessStep[];
    stats: {
        totalProcesses: number;
        crossCommunityCount: number;
        avgStepCount: number;
        entryPointsFound: number;
    };
}
export declare const processProcesses: (knowledgeGraph: KnowledgeGraph, memberships: CommunityMembership[], onProgress?: (message: string, progress: number) => void, config?: Partial<ProcessDetectionConfig>) => Promise<ProcessDetectionResult>;
