export declare const ANALYSIS_STAGES: Record<string, string>;
export declare class TerminalUI {
    private bar;
    private lastPhaseLabel;
    private phaseStart;
    private elapsedTimer?;
    private origLog;
    private origWarn;
    private origError;
    constructor();
    start(): void;
    update(value: number, phaseNameOrLabel: string): void;
    stop(finalMessage?: string): void;
    private hijackConsole;
    private restoreConsole;
    private startElapsedTimer;
    private stopElapsedTimer;
}
