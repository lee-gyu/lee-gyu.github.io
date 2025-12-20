import { defaultLang, ui } from "./ui";

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function getDocLang() {
    return document.documentElement.lang as keyof typeof ui;
}

type KeyDict = keyof (typeof ui)["ko"];

export function useTranslations(lang: keyof typeof ui) {
    const dict = ui[lang] as Record<string, string>;

    return function t(key: KeyDict): string {
        return dict[key] || ui[defaultLang][key];
    };
}
