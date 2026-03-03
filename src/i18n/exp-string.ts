import { joinCommas } from "src/utils/string";

export type ExpProps =
    | "header"
    | "period"
    | "team"
    | "role"
    | "tech"
    | "tasks"
    | "result"
    | "urls"
    | "urlText"
    | "imgUrls"
    | "imgLabel";

type ExpStoryObj = Partial<Record<ExpProps, string>>;

const ko = {
    pjt1: {
        header: "#1 데스크탑 애플리케이션 -> 웹 클라이언트 리뉴얼",
        team: "*F/E 플랫폼 개발팀(3명), 제품 개발팀(15명)",
        role: joinCommas("웹 애플리케이션 개발 플랫폼 구축/리딩"),
        period: "2022 ~ 2025",
        result: joinCommas(
            "C++ 기반 클라이언트 -> 웹 기반 기술 전환 완료",
            "웹 기반 신제품 출시 (15개 프로젝트 계약)",
            "SI 사업 기반 웹 기술 구축 (2개 프로젝트 계약)",
        ),
        tasks: joinCommas(
            "웹 애플리케이션 아키텍처 설계/개발",
            "웹 F/E 공통 개발 환경 구축 (Vite, ESLint, Storybook, npm)",
            "CSS 체계, 공통 UI 컴포넌트, 제품 인터페이스 설계/개발",
        ),
        tech: joinCommas("TypeScript", "Vite / Vitest", "SolidJS", "PNPM"),
        imgLabel: joinCommas("AS-IS(1)", "AS-IS(2)", "TO-BE(1)", "TO-BE(2)"),
        urls: joinCommas(
            "https://lee-gyu.github.io/storybook/",
            "http://innorules.com:32108/",
        ),
        urlText: joinCommas("storybook", "typedoc"),
        imgUrls: joinCommas(
            "/img/as-is.png",
            "/img/20210090_2.png",
            "/img/to-be.png",
            "/img/20230015_2.png",
        ),
    },
    pjt2: {
        header: "#2 Core UI 컴포넌트 개발",
        // Grid, Flowchart, HtmlEditor, TreeView, PageContainer 정도?
    },
    pjt3: {
        header: "#3 웹 시스템 인터페이스 모듈 개발",
        // web-api, iframe, sso, X-INNO 보안 모듈
    },
    pjt4: {
        header: "#4 사내 업무 시스템 개발",
        // 다국어 관리
        // 캘린더
        // 온라인 코딩 테스트 플랫폼
        // 휴가계?
    },
    pjt5: {
        header: "#5 LLM 기술 활용 프로젝트",
        // 온라인 코딩 테스트 채점
        // 사내 제품 리소스 AI 번역
        // AI 공모전 팀 우승
    },
} satisfies Record<string, ExpStoryObj>;

export type ExpKey = keyof typeof ko;

export const experiencesKo = ko as Record<ExpKey, ExpStoryObj>;
