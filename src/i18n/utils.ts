import { defaultLang, ui } from "./ui";

export function getLangFromUrl(url: URL) {
    const lang = url.searchParams.get("lang") ?? "ko";

    if (lang in ui) return lang as keyof typeof ui;

    return "ko";
}

export function getDocLang() {
    return document.documentElement.lang as keyof typeof ui;
}

export type KeyDict = keyof (typeof ui)["ko"];

type ExpProp =
    | "header"
    | "role"
    | "goal"
    | "period"
    | "content"
    | "result"
    | "urls";

type ExpKeys = {
    [key in KeyDict as key extends `exp.${infer Key}` ? Key : never]: string;
};

export type ExpKeyPrefix = keyof {
    [key in keyof ExpKeys as key extends `${infer Prefix}.${ExpProp}`
        ? Prefix
        : never]: string;
};

export function useTranslations(lang: keyof typeof ui) {
    const dict = ui[lang] as Record<string, string>;

    return function t(key: KeyDict): string {
        return dict[key] || ui[defaultLang][key];
    };
}
