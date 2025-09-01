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
    "20150030": {
        period: "2012 ~ 2013 / 삼성전자 기능올림픽 훈련센터",
        header: "[훈련] 2013 국제기능올림픽 정보기술 직종 국가대표",
        team: "기능올림픽 정보기술 직종 국가대표",
        tech: joinCommas("MS Office", "MS Access", "VBA Programming"),
        result: joinCommas("금메달 (1위), 동탑산업훈장 대통령 표창"),
        urlText: joinCommas("대회 점수", "수상자 사진"),
        urls: joinCommas(
            "https://m.site.naver.com/1PzvO",
            "https://m.site.naver.com/1PzvV",
        ),
    },
    "20150040": {
        year: "2013, 2014 / 삼성전자 기능올림픽 훈련센터",
        header: "기능올림픽 입상자 채용 업무",
        background: "삼성그룹 내 계열사 수백명 규모 채용 전형 진행",
        tasks: joinCommas("지원자 채용 프로세스 안내", "지원 데이터 리포팅"),
    },
    "20150050": {
        year: "2014, 2015 / 삼성전자 기능올림픽 훈련센터",
        header: "글로벌 사내 경진대회",
        tasks: joinCommas("해외 법인 참가자 인솔", "한국 문화 체험 행사 지원"),
    },
    "20150060": {
        header: "[조직문화] 팀 문화 개선 활동 업무",
        period: "2014 ~ 2015  / 삼성전자 기능올림픽 훈련센터",
        tasks: "근무 문화 개선 활동 기획/진행",
        result: "조직문화 평가 지표 향상",
    },
    "20150070": {
        period: "2013 ~ 2015 / 삼성전자 기능올림픽 훈련센터",
        header: "[교육] 삼성전자 기능올림픽 훈련센터 지도위원",
        team: "국가대표 지도위원",
        tech: joinCommas("C# Windows", "SQL Server"),
        result: joinCommas("한국 은메달(2위), 베트남 동메달(3위) 수상"),
        urlText: "기능올림픽 입상 보도",
        urls: "https://m.site.naver.com/1PzvF",
        tasks: "국가대표 선수 훈련 프로그램 개발",
    },
    "20180020": {
        year: "2016 / 삼성전자 VD 사업부 글로벌운영팀",
        header: "[App] 웹 사내 업무 시스템 개발",
        tech: joinCommas("JQuery", "Bootstrap", "ASP.NET"),
        background: "사업부 맞춤형 사내 업무 시스템 요구",
        team: joinCommas("(역할) 웹 풀스택 개발", "프로젝트 리더"),
        feat: joinCommas(
            "사내 표준 업무 시스템과 SSO 계정 연동",
            "TinyMCE 에디터 기반 컨텐츠 작성",
            "임직원 업무 현황 보고서 메일링",
        ),
        result: joinCommas(
            "기존 보고용 문서 출력을 웹 기반 시스템으로 효율화",
            "관리자가 수기로 취합하던 업무 취합 작업 시스템화",
        ),
    },
    "20180030": {
        year: "2016 / 삼성전자 VD 사업부 글로벌운영팀",
        header: "[App] 해외 법인 종합 관제실 모니터링 시스템",
        tech: joinCommas("JQuery", "Telerik Kendo UI", "ASP.Net"),
        background: "전체 해외법인의 현황을 모니터링하는 관제실 프로젝트",
        team: joinCommas(
            "(역할) 웹 풀스택 개발자",
            "프로젝트 리더",
            "시니어 엔지니어 3명",
        ),
        feat: joinCommas(
            "세계 지도 형태의 실시간 모니터링 화면",
            "이상 상황 발생 시 알람",
            "일간/주간 생산 현황 리포팅",
        ),
    },
    "20180050": {
        year: "2017 / 삼성전자 VD 사업부 글로벌운영팀",
        header: "[App] IoT 환경 데이터 수집",
        tech: joinCommas("ASP.NET", "(IoT) Raspberry Pi"),
        background: "환경 데이터를 수집하여 공정 환경 개선에 활용",
        team: joinCommas("(역할) 웹 풀스택 개발", "IoT/센서 연동 엔지니어"),
        result: "이집트, 베트남, 슬로바키아 해외 법인 구축 완료",
        feat: joinCommas(
            "환경 데이터 수집/모니터링 시스템 개발 (먼지/조도/온습도/소음 등)",
        ),
    },

    "20180055": {
        year: "2017  / 삼성전자 VD 사업부 글로벌운영팀",
        header: "[자격시험] 삼성전자 S/W 개발 직군 시험",
        tech: joinCommas("Java", "C++", "Algorithm", "Data Structure"),
        background: joinCommas(
            "# 사내 코딩 테스트 Pro 등급 취득 인원을 팀 평가에 반영",
            "총 4단계 등급: IM -> AD -> Pro -> Ex",
        ),
        result: "Pro 등급 취득 (당시 기준 상위 20% 개발자 취득)",
    },

    "20180070": {
        year: "2017 / 삼성전자 VD 사업부 글로벌운영팀",
        header: "[App] 공정 프로세스 현황 모니터링",
        tech: joinCommas("TypeScript", "ASP.NET"),
        background: "공정 병목 현상 파악을 위한 시스템 요구",
        team: joinCommas(
            "(역할) 웹 풀스택 개발",
            "PLC 신호 처리 클라이언트 개발자",
        ),
        result: "공정 병목 현상 파악 및 개선에 기여",
        feat: joinCommas(
            "실시간 공정 작업 현황 출력",
            "공정별 작업 통계 리포팅",
        ),
    },

    "20190010": {
        period: "2018 ~ 2019 / 프리랜서",
        header: "[강사] IT 기술 교육 고등학교 멘토링 활동",
        team: joinCommas("IT 기술 전국 준비 대회 학생 멘토"),
        result: joinCommas("멘토링 학생 3명 전국대회 은메달 입상"),
    },

    "20200010": {
        period: "2020.2 ~ 2020.6",
        header: "[어학연수] 캐나다 밴쿠버 VGC 어학원",
        background: "해외 문화 체험과 영어 능력 학습 목적으로 계획",
        result: "Lv6 Upper Intermediate 등급 수료",
        urls: "https://vgc.ca/",
        urlText: "vgc.ca",
        imgLabel: joinCommas("수료증", "등급표"),
        imgUrls: joinCommas("/img/20200010.png", "/img/20200010_2.png"),
    } satisfies ExpStoryObj,

    "20210060": {
        period: "2020 ~ 2021 / 이노룰스 기술연구소 AI팀",
        header: "[정부 연구개발 과제] 로봇 자동화(RPA) S/W 개발",
        background: "사내 신제품 발굴",
        team: joinCommas(
            "(역할) 풀스택 개발",
            "프로젝트 리더",
            "Vision 머신러닝 개발자",
            "정부 연구개발 보고서 담당자",
        ),
        tasks: joinCommas(
            "# 풀스택 개발 / 시스템 성능 최적화",
            "Electron Windows / Linux / Mac 크로스 플랫폼 환경 개발",
            "RPA 실행 성능 최적화 (10초 → 2초)",
            "Windows Sandbox 활용 가상 테스팅 환경 구축",
            "TTA 인증 시험 업무",
        ),
        result: "정부 연구개발 과제 최종 수행 완료",
        feat: joinCommas(
            "(B/E) RPA 스크립트 관리, 실행 예약, 실행 에이전트 관리",
            "(F/E) RPA 스크립트 편집기, Electron 기반 RPA 실행 에이전트",
        ),
        tech: joinCommas("Vue.js", "Electron", "CodeMirror", "Koa.js"),
        imgLabel: "스크립트 작성 화면",
        imgUrls: "/img/20210060.png",
    },
    "20210070": {
        year: "2021 / 이노룰스 기술연구소 AI팀",
        header: "[UI] 플로우차트 컴포넌트 개발",
        tech: joinCommas("D3.js", "TypeScript"),
        team: "UI 컴포넌트 개발자",
        background:
            "레거시 윈도우 클라이언트의 웹 전환을 위한 UI 컴포넌트 작업 요구",
        tasks: "svg 기반 객체 렌더링 구조 설계/개발",
        result: joinCommas("제품 웹 전환 프로젝트에 기여"),
        feat: joinCommas(
            "객체 추가 / 선택 / 드래그 앤 드롭 모드",
            "사용자 액션 Undo / Redo",
            "연결선 처리 알고리즘",
        ),
        urlText: joinCommas("스토리북 예제"),
        urls: joinCommas("https://m.site.naver.com/1PHv3"),
        imgLabel: joinCommas("적용 화면 #1", "적용 화면 #2", "적용 화면 #3"),
        imgUrls: joinCommas(
            "/img/20210070_1.png",
            "/img/20210070_2.png",
            "/img/20210070_3.png",
        ),
    },
    "20210080": {
        period: "2021 ~ 2023 / 이노룰스 기술연구소 기반기술팀",
        header: "[Core] 사내 웹 제품 개발 기반 기술 구축",
        background: "웹 프로젝트별 상이한 기술 적용으로 인한 혼란",
        team: joinCommas("(역할) 프로젝트 리드", "주니어 F/E 개발자 3명"),
        result: "일관된 기술 표준을 통한 개발자 온보딩 및 순환 근무 용이",
        tasks: joinCommas(
            "# 사내 웹 제품 기술 표준 체계 구성",
            "jsp 페이지 → vite 기반 CSR 방식으로 웹 소스 전체 마이그레이션",
            "웹 제품 배포 디렉터리 구조 설계 (app/, site/, help/)",
            "제품 개발 기술 문서화 (Storybook, TypeDoc, VitePress)",
            "웹 프로젝트 빌드 Vite Plugin 개발",
            "사내 npm 레지스트리 서버 구축 (내부 패키지: @innorules/*)",
            "사내 표준 JS/TS eslint 코딩 규칙 구성 및 공통 패키지화",
            "Tailwind CSS Config 공통 설정 패키지화",
        ),
        tech: joinCommas(
            "Vite",
            "TypeScript",
            "PNPM",
            "ESLint",
            "Tailwind CSS",
            "Storybook",
        ),
        urlText: joinCommas(""),
        urls: joinCommas(""),
    },
    "20210090": {
        period: "2021 ~ 2022 / 이노룰스 기술연구소 기반기술팀",
        header: "[디자인 시스템] UI 스타일 리뉴얼 프로젝트",
        background: "UI가 오래되고 낡아 보인다는 많은 내부 피드백",
        team: joinCommas(
            "(역할) 프로젝트 리드",
            "제품 디자이너",
            "주니어 F/E 개발자",
        ),
        result: joinCommas(
            "웹 제품 전체 일관된 UX/UI 적용 및 표준 스타일 가이드 체계 수립",
        ),
        tasks: joinCommas(
            "# 디자인 리뉴얼 프로젝트 총 책임",
            "프로젝트 협업 환경 구축",
            "기존 레거시 화면 전수 조사",
            "CSS 토큰/공용 스타일 적용 체계 구축",
            "제품 개발팀 리뉴얼 스타일 적용 기술 지원",
        ),
        tech: joinCommas("vanilla-extract", "Figma"),
        imgUrls: joinCommas(
            "/img/20210090_1.png",
            "/img/20210090_2.png",
            "/video/20210090_3.mp4",
            "/video/20210090_4.mp4",
        ),
        imgLabel: joinCommas("#1 기존", "#2 기존", "#1 리뉴얼", "#2 리뉴얼"),
    },

    "20230010": {
        year: "2022 / 이노룰스 기술연구소 기반기술팀",
        header: "[디자인 시스템] svg 아이콘 CSS 번들러 개발",
        background:
            "레거시 윈도우 앱의 비트맵 아이콘 -> 웹 전환 마이그레이션 필요",
        team: joinCommas("(역할) UI 컴포넌트 개발자", "제품 디자이너"),
        tech: joinCommas("Node.js", "TypeScript", "PostCSS"),
        tasks: joinCommas(
            "# 아이콘 CSS 번들러 프로그램 개발",
            "icon을 사용하는 개발자 경험 고려",
            "CSS 용량 최적화 (svgo, cssnano)",
        ),
        feat: joinCommas(
            "사내 제품 표준 아이콘 CSS 통합",
            "CSS 속성을 활용한 아이콘 스타일링 (badge, rounded)",
        ),
        result: "아이콘 CSS 구축으로 UI 작업 단축·확장성 있는 스타일 체계 완성",
        urls: "https://m.site.naver.com/1PF98",
        urlText: "아이콘 목록",
        imgLabel: "아이콘 사용 예제",
        imgUrls: "/img/20230010.png",
    },

    "20230015": {
        period: "2022 ~ 2023 / 이노룰스 기술연구소 기반기술팀",
        header: "[UI] Grid 컴포넌트 라이브러리 개발",
        tech: joinCommas("VanillaJS", "TypeScript", "SolidJS"),
        background: "레거시 윈도우 앱의 Grid를 웹으로 전환하는 작업 요구",
        team: joinCommas("(역할) 프로젝트 리드 개발", "주니어 F/E 개발자 2명"),
        result: joinCommas("레거시 윈도우 앱 -> 웹 전환에 핵심 성과 기여"),
        tasks: joinCommas(
            "# Grid UI 아키텍처 설계/초기 구조 개발",
            "Row/Column/Cell 구성 요소 구조 개발",
            "다량의 셀 데이터 성능 최적화 기술 검토",
            "Plugin 기반 컴포넌트 확장 기능 제공",
        ),
        feat: joinCommas(
            "Viewport에 보이는 DOM만 출력하도록 Windowing 적용",
            "셀 렌더러를 이용하여 셀 UI 커스텀 기능",
            "사용자 행/열/셀 조작 행동 Undo / Redo",
            "필터, 키보드, 마우스 기본 플러그인 확장 기능",
            "MS-Office 테이블 데이터 클립보드 복사/붙여넣기 호환",
        ),
        urls: joinCommas("https://m.site.naver.com/1PF9n"),
        urlText: joinCommas("스토리북 예제"),
        imgLabel: joinCommas("동작 화면 #1", "동작 화면 #2"),
        imgUrls: joinCommas("/img/20230015.png", "/img/20230015_2.png"),
    },

    "20230020": {
        year: "2022 / 이노룰스 기술연구소 기반기술팀",
        header: "[App] 임직원 일정 관리/공유 캘린더 개발",
        team: joinCommas(
            "(역할) 프로젝트 리드",
            "제품 디자이너",
            "주니어 F/E 개발자",
        ),
        background: "기존 구글 캘린더 기반의 사내 일정 관리 시스템 교체 요구",
        result: joinCommas(""),
        tasks: joinCommas(
            "# 기존 사내 시스템 연동 및 전체 시스템 설계",
            "기존 구글 캘린더 기반 데이터 마이그레이션",
            "사내 업무 시스템 계정 시스템 SSO  연동",
        ),
        tech: joinCommas(
            "Next.js",
            "React",
            "Jotai",
            "Tailwind CSS",
            "Nest.js",
        ),
        feat: joinCommas(
            "모바일/데스크탑 대응 반응형 레이아웃 처리",
            "다크모드 CSS 테마 기능 개발",
        ),
        imgLabel: joinCommas("(PC) 동작 화면", "(모바일) 동작 화면"),
        imgUrls: joinCommas("/video/20230020_1.mp4", "/video/20230020_2.mp4"),
    },

    "20230070": {
        year: "2023 / 이노룰스 기술연구소 기반기술팀",
        header: "[Lib] 3rd-party 호출 모듈 개발",
        tech: joinCommas("VanillaJS", "TypeScript"),
        background: "고객사 업무 시스템에 자사 솔루션 화면 임베딩 요청",
        team: "3rd-party 호출 라이브러리 설계/개발",
        result: joinCommas(
            "# 웹 애플리케이션 간 연동 가능한 제품 경쟁력 향상",
            "삼성전자, 삼성화재 프로젝트 수행 기여",
        ),
        tasks: joinCommas(
            "# 자사 솔루션 호출 시스템 아키텍처 설계/개발",
            "솔루션 호출을 위한 manifest.json 메타 정보 설계",
            "제품 초기화 app-entry 스크립트 모듈 설계",
            "umd/esm JS 기반 호출 모듈 제공",
        ),
        feat: joinCommas(
            "타사 계정 시스템과 SSO 연동을 위한 라이브러리 개발",
            "자사 솔루션 웹 페이지를 iframe 캡슐화하여 컴포넌트로 제공",
            "Window Message 기반 페이지 간 통신 체계 (이벤트, 기능 호출)",
        ),
    },
    "20230080": {
        year: "2023 / 이노룰스 기술연구소 기반기술팀",
        header: "[App] 사내 휴가계 시스템 리뉴얼",
        result: joinCommas("전체 임직원의 연차 시스템 사용 만족도 개선"),
        tech: joinCommas("React", "Nest.js", "Tailwind CSS"),
        background: "휴가계 UX/UI 개선 요구 및 휴가 제도의 개선으로 반영 필요",
        tasks: joinCommas(
            "# 휴가계 리뉴얼 프로젝트 관리 (일정/리스크/방향)",
            "php 기반 레거시 시스템 리뉴얼",
            "30분 단위 사용 가능한 연차 시스템 설계",
            "PC/Mobile 반응형 UI 레이아웃 설계",
        ),
        team: joinCommas(
            "(역할) 프로젝트 리드",
            "제품 디자이너",
            "주니어 F/E 개발자",
        ),
        imgUrls: joinCommas(
            "/img/20230080_1.png",
            "/img/20230080_2.png",
            "/video/20230080_1.mp4",
        ),
        imgLabel: joinCommas(
            "구 버전 화면",
            "(PC) 리뉴얼 화면",
            "(모바일) 리뉴얼 화면",
        ),
    },

    "20240010": {
        year: "2024 / 이노룰스 기술연구소 기반기술팀",
        header: "[Testing] UI 컴포넌트 테스트 자동화",
        tech: joinCommas("Vitest", "Playwright"),
        background: "팀 규모 확장으로 기능 추가·패치 시 개발 리스크 증가",
        team: joinCommas("(역할) 프로젝트 리드", "주니어 F/E 개발자 3명"),
        result: joinCommas(
            "# 자동화 테스트로 안정성 향상·수동 테스트 작업량 감소",
            "Vitest 119건, Playwright 19건 테스팅 작성",
        ),
        tasks: joinCommas(
            "# 테스팅 업무, 기술 환경 구축",
            "테스팅 업무 프로세스 수립",
            "테스팅을 위한 기존 코드 구조 리팩토링",
        ),
        imgLabel: joinCommas("Vitest", "Playwright"),
        imgUrls: joinCommas("/img/vitest.png", "/img/playwright.png"),
    },

    // 2025 ~
    "20250010": {
        year: "2024 / 이노룰스 기술연구소 기반기술팀",
        header: "[UI] iframe 기반 화면 탭 관리 컴포넌트",
        tech: joinCommas("VanillaJS", "TypeScript"),
        background: "여러 브라우저 탭 사용으로 혼잡·불편함 발생 문제",
        team: joinCommas("(역할) UI 컴포넌트 개발자", "제품 디자이너"),
        tasks: joinCommas("iframe 호출 흐름 및 UI 컴포넌트 설계"),
        result: joinCommas(
            "멀티 탭 기반 시스템을 단일 Top 페이지·iframe 구조로 사용성 개선",
        ),
        feat: joinCommas(
            "Top Window에서 Sub Iframe 페이지 관리",
            "부모, 자식 페이지 간 Message 기반 통신 체계 설계",
            "탭 목록 관리 API 제공",
        ),
        imgUrls: joinCommas("/video/20250010.mp4"),
        imgLabel: joinCommas("동작 화면"),
    },
    "20250020": {
        year: "2024 / 이노룰스 기술연구소 기반기술팀",
        header: "[UI] 트리 컴포넌트 리뉴얼 개발",
        background: "AS-IS 트리 컴포넌트의 성능 문제 이슈",
        tech: joinCommas("VanillaJS", "TypeScript", "DOM Windowing"),
        team: joinCommas("(역할) UI 컴포넌트 개발자", "제품 디자이너"),
        urlText: joinCommas("스토리북 예제", "5만개 처리"),
        urls: joinCommas(
            "https://m.site.naver.com/1PF9h",
            "https://lee-gyu.github.io/storybook/?path=/story/js-components-irtreeview--bulk-data",
        ),
        tasks: "AS-IS 컴포넌트 성능 병목점 분석 및 리뉴얼 개발 리드",
        feat: joinCommas(
            "Windowing을 통한 수십만개 노드 고성능 렌더링 처리",
            "플러그인을 활용한 기능 확장 구조 적용",
        ),
        imgLabel: "컴포넌트 이미지",
        imgUrls: "/img/20250020.png",
    },
    "20250040": {
        year: "2024 / 이노룰스 기술연구소 기반기술팀",
        header: "[채용] 신입/경력 웹 프론트엔드 개발자 채용",
        background: "웹 제품 출시로 웹 개발자 수요 증가",
        team: joinCommas(
            "(역할) F/E 개발자 채용 전형 담당",
            "기술연구소장",
            "제품 개발 팀장",
        ),
        result: "신입 2명 채용, 경력(3년↑) 2명 채용",
        tasks: joinCommas(
            "# 개발자 채용 프로세스 진행",
            "약 300명 지원자 서류 검토",
            "과제 테스트 진행/평가",
            "기술/문화 면접 진행",
        ),
        urlText: joinCommas("채용 회고록"),
        urls: joinCommas("https://m.site.naver.com/1Pzvj"),
    },
    "20250050": {
        year: "2025 / 이노룰스 기술연구소 기반기술팀",
        header: "[App] 온라인 코딩 테스트 사이트 개발",
        team: joinCommas(
            "(역할) 프로젝트 리드 개발",
            "제품 디자이너",
            "주니어 F/E 개발자 2명",
        ),
        tech: joinCommas(
            "React",
            "Zustand",
            "Next.js (Server Actions)",
            "Tailwind CSS",
            "CodeMirror",
        ),
        background: "오프라인 시험으로 인한 채용 프로세스 불편함 문제",
        result: joinCommas(
            "# 기존 오프라인 시험을 온라인 시험으로 채용 프로세스 개선",
            "2025년 신입 공채 800명 응시하여 6명 채용",
        ),
        tasks: "온라인 코딩 테스트 시스템 풀스택 개발",
        urls: "https://m.site.naver.com/1Pzvv",
        urlText: "이노룰스 온라인 코딩 테스트",
        feat: joinCommas(
            "응시자 입장 시스템 안내 메일 발송 시스템",
            "코드 작성용 에디터 컴포넌트",
            "온라인 테스트 타이머 / 답안 제출 기능",
            "Markdown 형식 기반 문제 뷰어",
        ),
        imgLabel: "동작 영상",
        imgUrls: "/video/20250050.mp4",
    },
    "20250080": {
        year: "2025 / 이노룰스 기술연구소 기반기술팀",
        header: "[디자인 시스템] 다크모드 테마 시스템 설계",
        background:
            "다크모드·테마 커스터마이징 요구 증가로 제품 경쟁력 확보 필요",
        result: "디자인 시스템 기반 색상 토큰 정리, 다크모드 구현 완료",
        team: joinCommas(
            "(역할) 프로젝트 리드",
            "제품 디자이너",
            "주니어 F/E 개발자",
        ),
        tasks: joinCommas(
            "# 색상 토큰 계층 설계 및 기존 시스템 충돌 리스크 분석",
            "L1: 시스템 컬러 계층 (색상 팔레트: Black, Red, Gray 등)",
            "L2: 의미 기반 컬러 계층 (Primary, Secondary, Warning, Success 등)",
            "L3: 공통 컴포넌트 계층 (Button, Input, Grid 등)",
            "L4: 제품 도메인 계층 (RuleType, RuleExpression 등)",
        ),
        tech: joinCommas("vanilla-extract", "Figma"),
        imgLabel: "테마 전환",
        imgUrls: "/video/20250080.mp4",
    },
    "20250090": {
        year: "2025 / 이노룰스 기술연구소 기반기술팀",
        header: "[App] 웹 애플리케이션 커스터마이징 Add-on",
        background: "고객사 커스텀마다 새 브랜치·재빌드·재배포로 번거로움",
        team: "Add-on 구조 설계/개발",
        result: joinCommas(
            "# 커스터마이징에 유연한 제품 확장성 향상",
            "삼성생명, 삼성화재 고객사 프로젝트 수행 기여",
        ),
        tech: "Vite Plugin API",
        tasks: joinCommas(
            "# 웹 애플리케이션 Add-on 구조 설계",
            "ESM 기반 동적 JS 모듈 로더 개발",
            "Add-on 모듈과 웹 제품 간 모듈 공유 시스템 개발",
            "커스터마이징 JS 로더 설정 Vite Plugin 개발",
        ),
        feat: joinCommas(
            "제품 UI 스타일 CSS 재정의 구조",
            "제품 비즈니스 로직 커스터마이징 hook 구조",
        ),
    },

    "20250100": {
        year: "2025 / 이노룰스 기술연구소 기반기술팀",
        header: "[App] 다국어 번역 자동화",
        background: joinCommas(
            "프로젝트별 다른 다국어 형식과 중복 관리로 인한 어려움",
        ),
        team: joinCommas(
            "(역할) 프로젝트 리드",
            "미들 F/E 개발자",
            "주니어 F/E 개발자",
        ),
        tasks: joinCommas(
            "# 다국어 통합 관리 업무 시스템 설계",
            "Google Cloud 적응형 번역 API를 활용한 다국어 리소스 번역 자동화",
            "기존 제품 한글 리소스 전수 조사/파서 작성",
        ),
        feat: joinCommas(
            "하나의 화면에서 모든 제품 다국어 리소스 관리",
            "Java/Web 소스 코드에 맞게 다국어 리소스 Exporting",
        ),
        tech: joinCommas("React", "Google Cloud Platform", "i18next"),
        result: joinCommas(
            "# 제품 다국어 통합 관리 업무 시스템화",
            "총 13,326개 다국어 문자열 번역 (한국어 -> 일본어, 영어, 중국어, 스페인어)",
        ),
        imgLabel: "다국어 관리 화면",
        imgUrls: "/img/20250100.png",
    },

    "20250110": {
        year: "2025 (진행 중) / 이노룰스 기술연구소 기반기술팀",
        header: "[AI] LLM 기반 AI ChatBot 기능 개발",
        team: "웹 애플리케이션 AI 기능 개발",
        background: "회사 제품에 AI 기능 도입 요구 증가",
        tech: joinCommas(
            "React",
            "Chroma",
            "LangChainJS",
            "Google GenAI",
            "OpenAI",
        ),
        tasks: joinCommas(
            "# AI 기능을 개발하기 위한 웹 애플리케이션 아키텍처 설계",
            "제품 도메인 지식 자료 임베딩",
            "RAG 파이프라인 개발",
            "프롬프트 엔지니어링",
            "AI 서비스 API 서버 개발",
            "챗봇 UI 컴포넌트 AI API 연동",
        ),
        imgLabel: "시연 영상",
        imgUrls: "/video/20250110.mp4",
    },
} satisfies Record<string, ExpStoryObj>;

export type ExpKey = keyof typeof ko;

export const experiencesKo = ko as Record<ExpKey, ExpStoryObj>;
