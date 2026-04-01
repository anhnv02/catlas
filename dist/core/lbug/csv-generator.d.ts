import { KnowledgeGraph } from '../graph/types.js';
import { NodeTableName } from './schema.js';
export declare const sanitizeUTF8: (str: string) => string;
export declare const escapeCSVField: (value: string | number | undefined | null) => string;
export declare const escapeCSVNumber: (value: number | undefined | null, defaultValue?: number) => string;
export declare const isBinaryContent: (content: string) => boolean;
export interface StreamedCSVResult {
    nodeFiles: Map<NodeTableName, {
        csvPath: string;
        rows: number;
    }>;
    relCsvPath: string;
    relRows: number;
}
export declare const streamAllCSVsToDisk: (graph: KnowledgeGraph, repoPath: string, csvDir: string) => Promise<StreamedCSVResult>;
