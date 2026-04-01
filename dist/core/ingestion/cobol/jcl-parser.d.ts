export interface JclParseResults {
    jobs: Array<{
        name: string;
        line: number;
        class?: string;
        msgclass?: string;
    }>;
    steps: Array<{
        name: string;
        jobName: string;
        program?: string;
        proc?: string;
        line: number;
    }>;
    ddStatements: Array<{
        ddName: string;
        stepName: string;
        dataset?: string;
        disp?: string;
        line: number;
    }>;
    procs: Array<{
        name: string;
        line: number;
        isInStream: boolean;
    }>;
    includes: Array<{
        member: string;
        line: number;
    }>;
    sets: Array<{
        variable: string;
        value: string;
        line: number;
    }>;
    jcllib: Array<{
        order: string[];
        line: number;
    }>;
    conditionals: Array<{
        type: 'IF' | 'ELSE' | 'ENDIF';
        condition?: string;
        line: number;
    }>;
}
export declare function parseJcl(content: string, filePath: string): JclParseResults;
