import type { RepoHandle } from '../core/knowledge-engine.js';
export type AutoAnalyzeMode = 'off' | 'warn' | 'auto';
export declare function getAutoAnalyzeMode(): AutoAnalyzeMode;
export declare function hasActiveLock(repoPath: string): boolean;
export declare function isCircuitOpen(repoPath: string): boolean;
export declare function resetCircuitBreaker(repoPath: string): void;
export declare function triggerBackgroundAnalyze(repo: RepoHandle, onComplete: () => void): boolean;
export declare function scheduleLogCleanup(): void;
