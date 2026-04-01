export type NodeLabel = 'Project' | 'Package' | 'Module' | 'Folder' | 'File' | 'Class' | 'Function' | 'Method' | 'Variable' | 'Interface' | 'Enum' | 'Decorator' | 'Import' | 'Type' | 'CodeElement' | 'Community' | 'Process' | 'Struct' | 'Macro' | 'Typedef' | 'Union' | 'Namespace' | 'Trait' | 'Impl' | 'TypeAlias' | 'Const' | 'Static' | 'Property' | 'Record' | 'Delegate' | 'Annotation' | 'Constructor' | 'Template' | 'Section' | 'Route' | 'Tool';
import { SupportedLanguages } from '../../config/supported-languages.js';
export type NodeProperties = {
    name: string;
    filePath: string;
    startLine?: number;
    endLine?: number;
    language?: SupportedLanguages;
    isExported?: boolean;
    astFrameworkMultiplier?: number;
    astFrameworkReason?: string;
    heuristicLabel?: string;
    cohesion?: number;
    symbolCount?: number;
    keywords?: string[];
    description?: string;
    enrichedBy?: 'heuristic' | 'llm';
    processType?: 'intra_community' | 'cross_community';
    stepCount?: number;
    communities?: string[];
    entryPointId?: string;
    terminalId?: string;
    entryPointScore?: number;
    entryPointReason?: string;
    parameterCount?: number;
    level?: number;
    returnType?: string;
    declaredType?: string;
    visibility?: string;
    isStatic?: boolean;
    isReadonly?: boolean;
    responseKeys?: string[];
    errorKeys?: string[];
    middleware?: string[];
};
export type RelationshipType = 'CONTAINS' | 'CALLS' | 'INHERITS' | 'OVERRIDES' | 'IMPORTS' | 'USES' | 'DEFINES' | 'DECORATES' | 'IMPLEMENTS' | 'EXTENDS' | 'HAS_METHOD' | 'HAS_PROPERTY' | 'ACCESSES' | 'MEMBER_OF' | 'STEP_IN_PROCESS' | 'HANDLES_ROUTE' | 'FETCHES' | 'HANDLES_TOOL' | 'ENTRY_POINT_OF' | 'WRAPS' | 'QUERIES';
export interface GraphNode {
    id: string;
    label: NodeLabel;
    properties: NodeProperties;
}
export interface GraphRelationship {
    id: string;
    sourceId: string;
    targetId: string;
    type: RelationshipType;
    confidence: number;
    reason: string;
    step?: number;
}
export interface KnowledgeGraph {
    nodes: GraphNode[];
    relationships: GraphRelationship[];
    iterNodes: () => IterableIterator<GraphNode>;
    iterRelationships: () => IterableIterator<GraphRelationship>;
    forEachNode: (fn: (node: GraphNode) => void) => void;
    forEachRelationship: (fn: (rel: GraphRelationship) => void) => void;
    getNode: (id: string) => GraphNode | undefined;
    nodeCount: number;
    relationshipCount: number;
    addNode: (node: GraphNode) => void;
    addRelationship: (relationship: GraphRelationship) => void;
    removeNode: (nodeId: string) => boolean;
    removeNodesByFile: (filePath: string) => number;
    removeRelationship: (relationshipId: string) => boolean;
}
