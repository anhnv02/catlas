export interface FileEntry {
    path: string;
    content: string;
}
export interface ScannedFile {
    path: string;
    size: number;
}
export interface FilePath {
    path: string;
}
export declare const walkRepositoryPaths: (repoPath: string, onProgress?: (current: number, total: number, filePath: string) => void) => Promise<ScannedFile[]>;
export declare const readFileContents: (repoPath: string, relativePaths: string[]) => Promise<Map<string, string>>;
export declare const walkRepository: (repoPath: string, onProgress?: (current: number, total: number, filePath: string) => void) => Promise<FileEntry[]>;
