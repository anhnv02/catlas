import { type GeneratedSkillInfo } from './skill-gen.js';
export interface RepoStats {
    nodes?: number;
    edges?: number;
    processes?: number;
}
export declare function generateAIContextFiles(repoPath: string, projectName: string, stats: RepoStats, generatedSkills?: GeneratedSkillInfo[]): Promise<{
    files: string[];
}>;
