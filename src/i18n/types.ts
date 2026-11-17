import type { ko } from "./ko";

/** 기준 언어(ko)에 정의된 UI 문자열 key */
export type UIKey = keyof typeof ko;

/** 모든 언어 사전이 따라야 하는 형태 (ko의 key를 전부 포함) */
export type UIDict = Record<UIKey, string>;
