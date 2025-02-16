import type { ParsedTokenInfo } from "./utils/types/parsedTokenInfo.js";
export interface TokenizerOptions {
    stringBufferSize?: number;
    numberBufferSize?: number;
    separator?: string;
    emitPartialTokens?: boolean;
}
export declare class TokenizerError extends Error {
    constructor(message: string);
}
export default class Tokenizer {
    private state;
    private bom?;
    private bomIndex;
    private emitPartialTokens;
    private separator?;
    private separatorBytes?;
    private separatorIndex;
    private escapeLength;
    private bufferedString;
    private bufferedNumber;
    private unicode?;
    private highSurrogate?;
    private bytes_remaining;
    private bytes_in_sequence;
    private char_split_buffer;
    private encoder;
    private offset;
    constructor(opts?: TokenizerOptions);
    get isEnded(): boolean;
    write(input: Iterable<number> | string): void;
    private emitNumber;
    protected parseNumber(numberStr: string): number;
    error(err: Error): void;
    end(): void;
    onToken(parsedToken: ParsedTokenInfo): void;
    onError(err: Error): void;
    onEnd(): void;
}
//# sourceMappingURL=tokenizer.d.ts.map