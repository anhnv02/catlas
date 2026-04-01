import { KnowledgeGraph } from '../graph/types.js';
import { SupportedLanguages } from '../../config/supported-languages.js';
export interface MROEntry {
    classId: string;
    className: string;
    language: SupportedLanguages;
    mro: string[];
    ambiguities: MethodAmbiguity[];
}
export interface MethodAmbiguity {
    methodName: string;
    definedIn: Array<{
        classId: string;
        className: string;
        methodId: string;
    }>;
    resolvedTo: string | null;
    reason: string;
}
export interface MROResult {
    entries: MROEntry[];
    overrideEdges: number;
    ambiguityCount: number;
}
export declare function computeMRO(graph: KnowledgeGraph): MROResult;
