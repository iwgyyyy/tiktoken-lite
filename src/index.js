import { Tiktoken } from './tiktoken.js';
import { cl100k_base_default } from './cl100k_base_default.js';

// src/index.ts
function getEncoding(extendSpecialTokens) {
  return new Tiktoken(cl100k_base_default, extendSpecialTokens);
}

export { getEncoding };
