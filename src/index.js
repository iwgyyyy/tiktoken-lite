import { Tiktoken } from './tiktoken.js';
import { cl100k_base_default } from './cl100k_base_default.js';

// src/index.ts
function get_encoding(extendSpecialTokens) {
  return new Tiktoken(cl100k_base_default, extendSpecialTokens);
}

export { get_encoding };
