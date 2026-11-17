import { en } from "./en";
import { ko } from "./ko";
import type { UIDict } from "./types";

export const languages = {
    en: "English",
    ko: "한국어",
};

export const defaultLang = "ko";

export const ui = {
    en,
    ko,
} satisfies Record<keyof typeof languages, UIDict>;
