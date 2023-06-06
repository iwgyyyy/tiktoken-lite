type TiktokenEncoding = "cl100k_base";
type TiktokenModel = "gpt-3.5-turbo" | "gpt-3.5-turbo-0301" | "gpt-4" | "gpt-4-0314" | "gpt-4-32k" | "gpt-4-32k-0314";

interface TiktokenBPE {
    pat_str: string;
    special_tokens: Record<string, number>;
    bpe_ranks: string;
}

declare class Tiktoken {
    constructor(ranks: TiktokenBPE, extendedSpecialTokens?: Record<string, number>);
    private static specialTokenRegex;
    encode(text: string, allowedSpecial?: Array<string> | "all", disallowedSpecial?: Array<string> | "all"): number[];
    decode(tokens: number[]): string;
}

declare function getEncoding(extendSpecialTokens?: Record<string, number>): Tiktoken;

export { Tiktoken, getEncoding, TiktokenModel, TiktokenEncoding };
