import { joinCommas } from "src/utils/string";

export type ExpProps =
    | "header"
    | "year"
    | "date"
    | "period"
    // 업무 배경
    | "background"
    | "tech"
    | "tasks"
    | "result"
    | "issue"
    | "urls"
    | "feat"
    | "urlText"
    | "imgUrls"
    | "imgLabel"
    | "team";

type ExpStoryObj = Partial<Record<ExpProps, string>>;

const ko = {
    core_pkg: {
        year: "2022 ~",
        header: "웹 Frontend 코어 개발 패키지 총괄",
        tech: joinCommas("VanillaJS", "TypeScript"),
        tasks: joinCommas(""),
        result: joinCommas(""),
    },
} satisfies Record<string, ExpStoryObj>;

export type ExpKey = keyof typeof ko;

export const experiencesKo = ko as Record<ExpKey, ExpStoryObj>;
