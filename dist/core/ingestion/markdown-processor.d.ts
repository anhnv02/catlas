import { KnowledgeGraph } from '../graph/types.js';
interface MdFile {
    path: string;
    content: string;
}
export declare const processMarkdown: (graph: KnowledgeGraph, files: MdFile[], allPathSet: Set<string>) => {
    sections: number;
    links: number;
};
export {};
