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
        tasks: joinCommas(
            "웹 F/E 공통 개발 환경 구축 (Vite, ESLint, 내부 npm 서버 등)",
            "CSS 체계, 공통 UI 컴포넌트, 제품 인터페이스 설계/개발",
            "웹 애플리케이션 개발 가이드 및 문서화",
            "웹 기술적 난제 해결 (레거시 시스템 연동, MS 오피스 연계, 대량 데이터 처리, 보안)",
        ),
        result: joinCommas(
            "웹 기반 신제품 출시 (15개 프로젝트 계약)",
            "SI 사업 기반 웹 기술 구축 (2개 프로젝트 계약)",
            "C++ 기반 클라이언트 -> Web Application 기술 전환 완료 (약 100개 화면)",
        ),
        tech: joinCommas("TypeScript", "Vite / Vite Plugin", "PNPM"),
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
            "Storybook",
            "Typedoc",
        ),
        tasks: joinCommas(
            "컴포넌트 내부 모듈 구조 설계",
            "전체 제품 화면에 핵심적인 UI 컴포넌트 개발",
            "팀 개발 업무 관리/코드 리뷰 진행",
        ),
        result: joinCommas(
            "다양한 고객사 요구 사항에 확장 가능한 플러그인 아키텍처",
            "고객사 톤앤 매너에 맞는 CSS 시스템 커스터마이징 기능 제공",
            "각 개발팀 관심사 분리 및 개발 생산성 향상",
            "다크모드 테마 CSS 시스템 적용",
            "대량 데이터 적재 가능한 UI 렌더링 최적화",
            "MS Office 클립보드 호환 기능 개발",
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
        tech: joinCommas("Authentication", "Security", "iframe"),
        tasks: joinCommas(
            "타 시스템 SSO 연동 모듈 개발",
            "웹 통신 보안 모듈 개발",
            "타 웹 제품에서 자사 제품 연동 모듈 개발",
        ),
        result: joinCommas(
            "고객사 프로젝트 SSO 연동 아키텍처 설계/개발",
            "고객사 보안 SAST/DAST 기준 통과",
            "고객사 웹 애플리케이션에서 자사 앱 임베딩 가능한 기능 제공",
        ),

        // web-api, iframe, add-on, sso, X-INNO 보안 모듈
    },
    pjt4: {
        header: "#4 사내 업무 시스템 개발",
        tech: joinCommas(
            "Nest.js",
            "Next.js",
            "MySQL",
            "PostgreSQL",
            "TypeORM",
            "DrizzleORM",
        ),
        tasks: joinCommas(
            "레거시 사내 업무 시스템(php) 신규 기술 기반 아키텍처로 재설계",
            "개발자 채용 온라인 코딩 테스트 웹 개발 (Next.js + Drizzle ORM)",
            "개발자 업무 캘린더 웹 개발 (Next.js)",
            "웹 개발 기술 선정 및 개발자 업무 분배",
        ),
        result: joinCommas(
            "개발자 채용 프로세스 개선 및 개발 인력 검증 업무 감소",
            "사내 업무 시스템에 대한 임직원 만족도 향상 (휴가 사용, 임직원 일정 관리 등)",
            "레거시 시스템 유지보수 부담 감소 및 신규 기능 개발 유지보수성 향상",
        ),
        imgUrls: joinCommas("/video/20250050.mp4", "/video/20230020_1.mp4"),
        imgLabel: joinCommas("온라인 코딩 테스트", "업무 캘린더"),
    },
    pjt5: {
        header: "#5 LLM 기술 활용 프로젝트",
        tech: joinCommas(
            "LangChainJS",
            "Prompt Engineering",
            "Google Gemini API",
            "OpenAI API",
        ),
        tasks: joinCommas(
            "사내 AI 공모전 참가팀 코칭 및 기술 지원",
            "실제 비즈니스 문제를 LLM으로 해결하기 위한 기술 설계/구현",
        ),
        result: joinCommas(
            "사내 AI 공모전 참가팀 1,3위 수상",
            "LLM 기반 온라인 코딩 테스트 AI 채점 자동화",
            "제품 문자열 LLM 기반 다국어 자동 번역 시스템 개발 (한국어 → 영어,스페인어,중국어)",
        ),
    },
    pjt6: {
        header: "#6 업무/개발 프로세스 개선",
        tech: joinCommas("Jenkins", "GitLab", "Docker"),
        tasks: joinCommas(
            "사내 CI/CD 파이프라인 구축",
            "런타임 환경 컨테이너화",
            "Branch 전략 및 Git Workflow 개선 (MR, 커밋 규칙)",
        ),
        result: joinCommas(
            "개발 → 배포 자동화 및 시스템 안정성 향상",
            "개발 프로세스 표준화로 인수인계 및 협업 효율 개선",
            "팀 개발 업무 현황(GitLab Issue)을 실시간으로 파악 가능한 대쉬보드 구축",
        ),
    },
} satisfies Record<string, ExpStoryObj>;

export type ExpKey = keyof typeof ko;

export const experiencesKo = ko as Record<ExpKey, ExpStoryObj>;
