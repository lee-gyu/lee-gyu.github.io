import type { UIDict, UIKey } from "./types";
import { defaultLang, ui } from "./ui";

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function getDocLang() {
    return document.documentElement.lang as keyof typeof ui;
}

export function useTranslations(lang: keyof typeof ui) {
    const dict: UIDict = ui[lang];

    return function t(key: UIKey): string {
        return dict[key] || ui[defaultLang][key];
    };
}
