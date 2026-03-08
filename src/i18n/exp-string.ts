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
        team: joinCommas("웹 플랫폼 기술팀 (팀장)"),
        period: "2022 ~ 2025",
        tasks: joinCommas(
            "웹 F/E 공통 개발 환경 구축 (Vite, ESLint, Storybook, npm 서버)",
            "CSS 체계, 공통 UI 컴포넌트, 제품 인터페이스 설계/개발",
            "웹 애플리케이션 개발 가이드 및 문서화",
            "웹 기술적 난제 해결 (레거시 시스템 연동, MS 오피스 연계, 대량 데이터 처리, 보안)",
        ),
        result: joinCommas(
            "웹 기반 신제품 출시 (15개 프로젝트 계약)",
            "SI 사업 기반 웹 기술 구축 (2개 프로젝트 계약)",
            "C++ 기반 클라이언트 -> Web Application 기술 전환 완료 (약 100개 화면)",
        ),
        tech: joinCommas("TypeScript", "Vite", "PNPM", "Storybook", "Typedoc"),
        imgLabel: joinCommas("레거시-1", "레거시-2", "웹-1", "웹-2"),
        imgUrls: joinCommas(
            "/img/as-is.png",
            "/img/20210090_2.png",
            "/img/to-be.png",
            "/img/20230015_2.png",
        ),
    },
    pjt2: {
        header: "#2 Core UI 컴포넌트 개발",
        tech: joinCommas(
            "TypeScript",
            "Vite / Vitest",
            "Playwright",
            "SolidJS",
            "vanilla-extract",
            "TurboRepo",
        ),
        period: "2022 ~ 2026",
        team: joinCommas("웹 플랫폼 기술팀 (팀장)"),
        tasks: joinCommas(
            "컴포넌트 내부 모듈 구조 설계",
            "전체 제품 화면에 핵심적인 UI 컴포넌트 개발",
            "팀 코드 리뷰 및 개발 업무 관리",
        ),
        result: joinCommas(
            "다양한 고객사 요구 사항에 확장 가능한 플러그인 아키텍처",
            "고객사 톤앤 매너에 맞는 CSS 시스템 커스터마이징 기능 제공",
            "각 개발팀 관심사 분리 및 개발 생산성 향상",
            "다크모드 테마 CSS 시스템 적용",
            "수십만 데이터도 원활히 처리 가능한 렌더링 최적화",
        ),
        urls: joinCommas(
            "https://lee-gyu.github.io/storybook/",
            "http://innorules.com:32108/",
            "https://lee-gyu.github.io/storybook/?path=/story/js-components-irgrid-rowfilterplugin--basic",
            "https://lee-gyu.github.io/storybook/?path=/story/js-components-irtreeview--basic",
            "https://lee-gyu.github.io/storybook/?path=/story/js-components-irflowchart--api-demo",
            "https://lee-gyu.github.io/storybook/?path=/story/js-components-innohtmleditor--html-editor-basic",
        ),
        urlText: joinCommas(
            "Grid",
            "TreeView",
            "Flowchart",
            "HtmlEditor",
            "Typedoc",
        ),
    },
    pjt3: {
        header: "#3 웹 제품 통합 인터페이스 모듈 개발",
        tech: joinCommas("SSO", "Security", "iframe"),
        period: "2024 ~ 2025",
        team: joinCommas("웹 플랫폼 기술팀 (팀장)"),
        tasks: joinCommas(
            "타 시스템 SSO 연동 모듈 개발",
            "웹 보안 모듈 개발",
            "타 웹 제품에서 자사 제품 연동 모듈 개발",
        ),
        result: joinCommas(
            "3개 고객사 SSO 연동 요구사항 개발 완료",
            "고객사 보안 감사 리포트 기준 통과 완료",
            "고객사 웹 애플리케이션에서 임베딩 가능한 호출 구조 개발 완료",
        ),

        // web-api, iframe, add-on, sso, X-INNO 보안 모듈
    },
    pjt4: {
        header: "#4 사내 업무 시스템 개발",
        period: "2022 ~ 2025",
        team: joinCommas("웹 플랫폼 기술팀 (팀장)"),
        tasks: joinCommas(),
        result: joinCommas(),
        // 다국어 관리
        // 캘린더
        // 온라인 코딩 테스트 플랫폼
        // 휴가계?
    },
    pjt5: {
        header: "#5 LLM 기술 활용 프로젝트",
        period: "2025 ~ 2026",
        // 온라인 코딩 테스트 채점
        // 사내 제품 리소스 AI 번역
        // AI 공모전 팀 우승
    },
} satisfies Record<string, ExpStoryObj>;

export type ExpKey = keyof typeof ko;

export const experiencesKo = ko as Record<ExpKey, ExpStoryObj>;
