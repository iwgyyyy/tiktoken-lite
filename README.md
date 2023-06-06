## Introduction
一个专门用来计算```gpt```的tokens的轻量级库

仅支持以下模型
```typescript
type TiktokenModel = "gpt-3.5-turbo" | "gpt-3.5-turbo-0301" | "gpt-4" | "gpt-4-0314" | "gpt-4-32k" | "gpt-4-32k-0314";
```
> fork from [tiktoken](https://github.com/dqbd/tiktoken)

## Get Started
```bash
npm install tiktoken-lite
```

## Usage

```javascript
import { get_encoding } from "tiktoken-lite";

const encoding = get_encoding();

console.log(encoding.encode('hello world'));

```