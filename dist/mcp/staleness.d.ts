import type { RepoMeta } from '../storage/repo-manager.js';
export interface StalenessInfo {
    isStale: boolean;
    commitsBehind: number;
    hint?: string;
}
export declare enum StaleLevel {
    FRESH = 0,
    MINOR = 1,
    MAJOR = 2,
    CRITICAL = 3
}
export interface EnhancedStalenessInfo {
    isStale: boolean;
    staleLevel: StaleLevel;
    commitsBehind: number;
    branchChanged: boolean;
    currentBranch: string;
    indexedBranch: string;
    indexAgeMs: number;
    hint: string;
}
export declare function checkEnhancedStaleness(repoPath: string, indexedBranch: string, meta: RepoMeta): EnhancedStalenessInfo;
export declare function getCachedStaleness(repoPath: string, indexedBranch: string, meta: RepoMeta): EnhancedStalenessInfo;
export declare function invalidateStalenessCache(repoPath: string): void;
export declare function checkStaleness(repoPath: string, lastCommit: string): StalenessInfo;
