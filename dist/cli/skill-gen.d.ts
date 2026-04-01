import { PipelineResult } from '../types/pipeline.js';
export interface GeneratedSkillInfo {
    name: string;
    label: string;
    symbolCount: number;
    fileCount: number;
}
export declare const generateSkillFiles: (repoPath: string, projectName: string, pipelineResult: PipelineResult) => Promise<{
    skills: GeneratedSkillInfo[];
    outputPath: string;
}>;
