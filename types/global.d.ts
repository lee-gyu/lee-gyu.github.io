declare type Theme = "light" | "dark";
declare type Lang = "ko" | "en";

declare type ProjectInfo = {
    header: string;
    role: string;
    goal: string;
    period: string;
    content: string;
    result: string;
    urls: string[];
};

declare interface WindowEventMap {
    "change:scrolled": CustomEvent<boolean>;
}
