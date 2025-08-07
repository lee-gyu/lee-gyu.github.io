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

type ExpKeys = {
    [key in KeyDict as key extends `exp.${infer Key}` ? Key : never]: string;
};

export type ExpProps = keyof {
    [key in keyof ExpKeys as key extends `${number}.${infer ExpProp}`
        ? ExpProp
        : never]: string;
};

export type ExpKeyPrefix = keyof {
    [key in keyof ExpKeys as key extends `${infer Prefix}.${ExpProps}`
        ? Prefix extends `${number}`
            ? Prefix
            : never
        : never]: string;
};

export function useTranslations(lang: keyof typeof ui) {
    const dict = ui[lang] as Record<string, string>;

    return function t(key: KeyDict): string {
        return dict[key] || ui[defaultLang][key];
    };
}
