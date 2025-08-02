import { defaultLang, ui } from "./ui";

export function getLangFromUrl(url: URL) {
    const lang = url.searchParams.get("lang") ?? "ko";

    if (lang in ui) return lang as keyof typeof ui;

    return "ko";
}

export function getDocLang() {
    return document.documentElement.lang as keyof typeof ui;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof (typeof ui)[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    };
}
