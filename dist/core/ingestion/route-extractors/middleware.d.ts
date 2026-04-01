export declare const MIDDLEWARE_STOP_KEYWORDS: Set<string>;
export declare function extractMiddlewareChain(content: string): {
    chain: string[];
    method: string;
} | undefined;
export interface NextjsMiddlewareConfig {
    matchers: string[];
    exportedName: string;
    wrappedFunctions: string[];
}
export declare function extractNextjsMiddlewareConfig(content: string): NextjsMiddlewareConfig | undefined;
export type CompiledMatcher = {
    type: 'prefix';
    prefix: string;
} | {
    type: 'regex';
    re: RegExp;
} | {
    type: 'exact';
    value: string;
};
export declare function compileMatcher(matcher: string): CompiledMatcher | null;
export declare function compiledMatcherMatchesRoute(cm: CompiledMatcher, routeURL: string): boolean;
export declare function middlewareMatcherMatchesRoute(matcher: string, routeURL: string): boolean;
