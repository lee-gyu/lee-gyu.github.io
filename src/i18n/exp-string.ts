import { joinCommas } from "src/utils/string";

export type ExpProps =
    | "header"
    | "year"
    | "date"
    | "period"
    | "role"
    | "summary"
    | "tech"
    | "tasks"
    | "result"
    | "issue"
    | "urls"
    | "feat"
    | "urlText"
    | "story"
    | "imgUrls"
    | "imgLabel"
    | "co-op";

type ExpStoryObj = Partial<Record<ExpProps, string>>;

const ko = {
    "20150030": {
        header: "[훈련] 2013 국제기능올림픽 정보기술 직종 국가대표",
        period: "2012 ~ 2013",
        role: "기능올림픽 정보기술 직종 국가대표",
        tech: joinCommas(
            "(Docs) MS Office",
            "(DB) MS Access",
            "VBA 프로그래밍",
        ),
        result: joinCommas("금메달 (1위)", "동탑산업훈장 대통령 표창"),
        urlText: joinCommas("대회 점수", "수상자 사진"),
        urls: joinCommas(
            "https://results.worldskills.org/results?event=9&offset=0&skill=345&base_skill=221",
            "https://www.flickr.com/photos/worldskills/9235939100/in/album-72157634532467264/",
        ),
        story: [
            "전국 대회 수상 후, 국가대표 선발전을 거쳐 국가대표로 선발되었습니다.",
            "이후 삼성전자 기능올림픽 훈련센터에서 국가대표 훈련을 받고, 금메달을 수상했습니다.",
            "훈련 과정에서 문제 해결 능력과 업무용 소프트웨어를 이해하는 능력을 키웠습니다.",
        ].join(" "),
    },
    "20150040": {
        header: "기능올림픽 입상자 채용 업무",
        year: "2013, 2014",
        summary: "삼성그룹 내 계열사 수백명 규모 채용 전형 진행",
        tasks: joinCommas("지원자 채용 프로세스 안내", "지원 데이터 리포팅"),
        story: ["대기업의 채용 과정을 인사 담당자 관점에서 진행했습니다."].join(
            " ",
        ),
    },
    "20150050": {
        header: "글로벌 사내 경진대회",
        year: "2014, 2015",
        tasks: joinCommas("해외 법인 참가자 인솔", "한국 문화 체험 행사 지원"),
        story: [
            "국내외 여러 계열사 법인에서 참가하는 사내 기술 대회에서 해외 법인 참가자를 담당했습니다. ",
            "해외 참가자들의 비자, 한국 문화 체험 행사 준비, 숙소/교통편 등의 업무를 지원했습니다.\n",
            "다양한 문화를 가진 사람들과 소통하고, 행사를 처음부터 끝까지 준비하는 경험을 했습니다.",
        ].join(""),
    },
    "20150060": {
        header: "[조직문화] 팀 문화 개선 활동 업무",
        period: "2014 ~ 2015",
        tasks: "근무 문화 개선 활동 기획/진행",
        result: "조직문화 평가 지표 향상",
        story: [
            "Change Agent라는 직책으로 조직 문화를 개선하는 업무를 담당했습니다.",
            "여러 문화 활동을 기획하여 임원부터 일반 직원까지 모두 참여하는 행사를 진행했습니다.",
        ].join(" "),
    },
    "20150070": {
        header: "[교육] 삼성전자 기능올림픽 훈련센터 지도위원",
        period: "2013 ~ 2015",
        role: "국가대표 지도위원",
        tech: joinCommas("(Client) C# Windows", "(DB) SQL Server"),
        result: joinCommas(
            "한국 은메달(2위) 수상",
            "고용노동부 장관 표창",
            "베트남 동메달(3위) 수상",
            "베트남 국가 총리 표창",
        ),
        urlText: "기능올림픽 입상 보도",
        urls: "https://www.yna.co.kr/view/AKR20150818116700003",
        tasks: "국가대표 선수 훈련 프로그램 개발",
        story: [
            "기능올림픽 수상 이후, 한국/베트남 국가대표 선수 지도를 담당했습니다. ",
            "지도 선수 모두 수상을 하여 고과 평가 A를 받았으며, ",
            "베트남은 국가 최초 메달 수상으로 베트남에 초청되어 국가 총리의 표창을 받았습니다.",
            "\n\n",
            "이후 S/W 전문성을 키우기 위해 부서 이동을 신청하여 다른 사업부로 전배했습니다.",
        ].join(""),
    },

    "20180020": {
        header: "[App] 웹 사내 업무 시스템 개발",
        year: "2016",
        "co-op": "프로젝트 리더",
        tech: joinCommas(
            "(F/E) JQuery / Bootstrap",
            "(B/E) C# ASP.NET MVC",
            // "(DB) MariaDB",
            // "(ORM) Entity Framework",
        ),
        role: joinCommas("웹 풀스택 개발"),
        feat: joinCommas(
            "사내 표준 업무 시스템과 SSO 계정 연동",
            "TinyMCE 에디터 기반 컨텐츠 작성",
            "임직원 업무 현황 보고서 메일링",
        ),
        result: joinCommas(
            "기존 보고용 문서 출력을 웹 기반 시스템으로 효율화",
            "관리자가 수기로 취합하던 업무 취합 작업 시스템화",
        ),
        story: [
            "사내 IT 시스템은 SI 업체에 의존하고 있어, 개발 요청 시 큰 비용이 발생했었습니다. ",
            "사업부에 필요한 업무 시스템을 직접 만들기로 기획하고 요구사항 전체를 개발하는 역할을 맡았습니다.",
            "\n\n",
            "사용에 불편함이 보이면 스스로 개선하며 얻는 성취가 있었습니다.",
        ].join(""),
    },
    "20180030": {
        header: "[App] 해외 법인 종합 관제실 시스템 구축",
        year: "2016",
        role: "웹 풀스택 개발",
        "co-op": joinCommas("프로젝트 리더"),
        tech: joinCommas(
            "(F/E) JQuery / Tzelerik Kendo UI",
            "(B/E) C# ASP.Net MVC",
            // "(DB) MariaDB",
            // "(ORM) Entity Framework",
            // "(Windows) WPF / Service",
        ),
        result: "기존 수십분이 소요되는 현황 파악 작업 자동화",
        issue: joinCommas(
            "해외 타임존/썸머 타임 문제",
            "내부 인트라 네트워킹 보안망 문제",
        ),
        feat: joinCommas(
            "세계 지도 형태의 실시간 모니터링 화면",
            // "해외 법인 DB 동기화 시스템",
            // "모니터링 대시보드 화면",
        ),
        // story: [
        //     "부서에 소프트웨어 개발 인력이 보충되면서, 전체 해외 법인을 모니터링하는 과제가 주어졌습니다.",
        //     "사내 제조 실행 시스템(MES)과 연계하여 API로 주기적으로 데이터를 수집하고, 이를 보여주는 화면을 개발했습니다.",
        // ].join(" "),
    },
    "20180050": {
        header: "[App] IoT 환경 데이터 수집",
        year: "2017",
        "co-op": "IoT/센서 연동 담당 엔지니어",
        role: "웹 풀스택 개발",
        result: "먼지/조도/소음 등 환경 데이터 수집/모니터링 시스템 개발",
        tech: joinCommas(
            "(IoT) Raspberry Pi (Linux Raspbian)",
            "(B/E) C# ASP.NET MVC",
            "(Message Broker) Mosquitto",
        ),
        story: [
            "IoT 기기에 연결된 센서들로 환경 데이터를 수집하고, 이를 공정 환경 개선에 활용될 수 있도록 하는 과제입니다.",
            "IoT 기기와 센서 연동 등의 하드웨어를 담당하는 엔지니어와 협업한 과제입니다.",
        ].join("\n"),
    },

    "20180055": {
        header: "[자격시험] 삼성전자 S/W 개발 직군 시험",
        year: "2017",
        result: "Pro 등급 취득",
        summary: "알고리즘 코딩테스트 시험",
        story: [
            "사내 S/W 자격 시험을 응시하여 Pro 등급을 취득하고 인센티브로 약 100만원을 받았습니다.",
            "당시 Pro 등급은 상위 개발자 20% 정도가 취득했었습니다.",
        ].join("\n"),
    },

    "20180070": {
        header: "[App] 공정 프로세스 현황 모니터링",
        year: "2017",
        role: "웹 풀스택 개발",
        "co-op": "PLC 신호 처리 클라이언트 개발자",
        result: "공정 병목 현상 파악 및 개선에 기여",
        tech: joinCommas(
            "(F/E) TypeScript",
            "(B/E) C# ASP.NET MVC",
            "(ORM) Entity Framework",
            "(DB) MariaDB",
        ),
        story: [
            "공정 프로세스는 조립-검사-포장 등의 단계를 거칩니다. ",
            "평균보다 지연되는 작업이 있는 경우, 전체 생산성에 지연이 발생합니다. ",
            "공정 기계의 PLC 신호를 수신하여 작업 시간을 계산하고, 전체 공정을 보여주는 웹 화면을 개발했습니다.\n",
            "실제 공정에 있는 PLC 메모리를 읽어 작업을 계산하는 부분은 다른 엔지니어가 담당하고, 데이터 수집 서버와 웹 화면 개발을 담당했습니다.",
            "\n\n",
            "개발 환경에 Node.js와 타입스크립트를 처음으로 도입해보았던 과제입니다.",
        ].join(""),
    },

    "20200010": {
        header: "[어학연수] 캐나다 밴쿠버 VGC 어학원(6개월)",
        year: "2020",
        result: "Lv6 Upper Intermediate 등급 수료",
        urls: "https://vgc.ca/",
        urlText: "vgc.ca",
        imgLabel: joinCommas("수료증", "등급표"),
        imgUrls: joinCommas("/img/20200010.png", "/img/20200010_2.png"),
    } satisfies ExpStoryObj,

    "20210060": {
        header: "[정부 연구개발 과제] 로봇 자동화(RPA) S/W 개발",
        period: "2020 ~ 2021",
        role: "풀스택 개발 / 시스템 엔지니어링",
        "co-op": joinCommas("프로젝트 리더", "Vision 머신러닝 개발자"),
        tasks: joinCommas(
            "풀스택 개발 / 시스템 성능 최적화",
            "TTA 인증 시험 업무",
            "프로젝트 최종 보고서 작성",
        ),
        result: "정부 연구개발 과제 최종 수행 완료",
        feat: joinCommas(
            "RPA 실행 성능 최적화 (10초 → 2초)",
            "Win/Linux/Mac 크로스 플랫폼 Electron App",
            "Windows Sandbox 활용 가상 테스팅 환경 구축",
        ),
        tech: joinCommas("(B/E) Koa.js", "(F/E) Vue.js / Electron"),
        issue: joinCommas(
            "Linux / Mac 크로스 플랫폼 실행 환경 이슈",
            "Jython 기반의 매우 무겁고 느린 초기화 성능",
        ),
        story: [
            "당시 프로젝트 막바지였던 정부 연구개발 과제에 투입되었습니다.\n",
            "화면 내 UI를 식별하고 마우스/키보드를 제어하여 단순 사용자의 반복 작업을 자동화하는 업무 자동화(RPA) 연구개발 과제였습니다.",
            "\n\n",
            "프로젝트 완수 조건이 Windows/Linux/Mac 3개 플랫폼에서의 실행 보장이었는데,\n",
            "팀에 합류한 당시 몇 개월이 남지 않은 상황에서 Windows 실행 환경만 구현되어 있었습니다.\n",
            "Linux/Mac 실행 환경에 대한 작업을 전담하고 TTA 인증 시험까지 마무리 지어 프로젝트를 마무리했습니다.",
        ].join(""),
    },
    "20210070": {
        header: "[UI] 플로우차트 컴포넌트 개발",
        year: "2021",
        tasks: "컴포넌트 내부 구조 전체 설계 / 개발",
        result: joinCommas(""),
        tech: joinCommas("D3.js / TypeScript"),
        feat: joinCommas(
            "객체 추가 / 선택 / 드래그 앤 드롭 모드",
            "사용자 액션 Undo / Redo",
            "연결선 처리 알고리즘",
        ),
        urlText: "스토리북 예제",
        urls: "https://lee-gyu.github.io/storybook/?path=/story/js-components-irflowchart--basic",
        story: [
            "당시 사내 클라이언트 프로그램은 C++ Builder 기반의 네이티브 데스크탑 애플리케이션이었습니다. ",
            "영업본부에서는 타사와의 제품 경쟁력을 위해 웹으로의 기술 전환을 지속적으로 요구하였고, 웹 전환의 가능성을 보기 위한 첫 시작 과제였습니다.\n\n",
            "별도의 요구사항 정의서, 사양서 없이 직접 레거시 애플리케이션을 분석하여 모든 기능이 호환되도록 구현하여 프로젝트를 완료했습니다.",
        ].join(" "),
        imgLabel: "예제",
        imgUrls: "/video/20210070_1.mp4",
    },
    "20210080": {
        header: "[Core] 사내 웹 프로젝트 개발 환경 구축",
        year: "2021",
        tasks: joinCommas(
            "사내 npm 레지스트리 서버 구축",
            "사내 스토리북 사이트 구축",
            "CodeMirror 기반 라이브에디터 기능 개발",
            "Jenkins 기반 자동화 배포 파이프라인 구축",
            "jsp 페이지 모두 vite 기반으로 마이그레이션",
        ),
        result: joinCommas(
            "웹 프로젝트 개발 표준 기술 수립",
            "자바 서버 사이드와 완전히 분리되어 제품 보안성 향상",
        ),
        tech: joinCommas(
            "(F/E) Vite",
            "(CI/CD) Jenkins",
            "(Container) Docker",
            "(Docs) Storybook / TypeDoc",
        ),
        urls: "https://lee-gyu.github.io/storybook/?path=/story/html-components-button--intent",
        urlText: "라이브 에디터 예제",
        story: [
            "당시 Node.js, npm를 활용하지 못해 버전 관리나 패키지 배포/업그레이드에 번거로움이 있었습니다.",
            "개발자 경험을 향상시키고자 사내 npm 패키지 서버와 개발자들이 찾아볼 수 있는 문서화 사이트도 함께 구축했습니다.",
            "라이브러리 소스를 특정 브랜치에 커밋하면 문서 사이트가 배포되도록 자동화 흐름을 만들었습니다.",
        ].join("\n"),
    },
    "20210090": {
        header: "[디자인 시스템] UI 스타일 리뉴얼 프로젝트",
        period: "2021 ~ 2022",
        "co-op": "프리랜서 제품 디자이너",
        tasks: joinCommas(
            "리뉴얼을 위한 기존 화면 전수 조사",
            "프로젝트 협업 환경 구축",
            "CSS 토큰/공용 스타일 적용 체계 구축",
            "신규 UI 스타일을 적용하는 CSS 가이드",
        ),
        tech: joinCommas("Figma"),
        result: joinCommas("UI 개발 생산성 향상", "일관된 UX/UI 제공"),
        imgUrls: joinCommas(
            "/img/20210090_1.png",
            "/img/20210090_2.png",
            "/video/20210090_3.mp4",
            "/video/20210090_4.mp4",
        ),
        imgLabel: joinCommas("#1 기존", "#2 기존", "#1 리뉴얼", "#2 리뉴얼"),
        story: [
            "기존 화면은 개발자들이 직접 만든 화면이라 UI의 스타일이 오래되어 보인다는 지적이 있었습니다.",
            "누구도 쉽게 리뉴얼 작업을 시도하지 못 했었는데, 직접 주도하여 모든 화면을 조사하고,",
            "UI 리뉴얼을 위한 기초 작업을 모두 완료했습니다. 현재는 제품의 모든 화면이 리뉴얼되어 적용되었습니다.",
        ].join(" "),
    },

    "20230010": {
        header: "[디자인 시스템] svg 아이콘 CSS 번들러 개발",
        year: "2022",
        "co-op": "제품 디자이너",
        tasks: joinCommas(
            "아이콘 CSS 번들러 프로그램 개발",
            "아이콘 스토리북 페이지 작성",
            "디자이너/개발자 아이콘 유지보수 프로세스 수립",
        ),
        result: joinCommas(
            "공용 패키지를 통하여 모든 솔루션에 동일한 아이콘 CSS 체계 적용",
        ),
        urls: "https://lee-gyu.github.io/storybook/?path=/story/html-components-icon--list",
        urlText: "아이콘 목록",
        story: [
            "기존 비트맵 아이콘 처리 방식을 벡터 이미지(svg)로 처리하도록 아이콘 CSS 처리 체계를 새로 구축했습니다.",
            "mask-image CSS를 활용하여 아이콘 색상을 유연하게 처리하도록 하여 아이콘을 유연하게 활용할 수 있도록 했습니다.",
            "svg를 소스 코드에 넣으면 이를 css로 번들링하는 프로그램을 작성하여 독립적인 패키지로 배포하여 모든 제품에 활용될 수 있도록 하였습니다.",
        ].join(" "),
    },

    "20230015": {
        header: "[UI] Grid 컴포넌트 라이브러리 개발",
        year: "2022",
        summary: "모든 업무 화면에 핵심이 되는 Grid 컴포넌트 개발",
        result: joinCommas(""),
        tasks: joinCommas("Row/Column/Cell/Plugin 구성 요소 설계/개발"),
        feat: joinCommas(
            "Viewport에 보이는 DOM만 출력하도록 Windowing 적용",
            "셀 렌더러를 이용하여 다양한 셀 UI 커스텀 기능 제공",
            "플러그인 기반 컴포넌트 확장 기능 제공",
            "MS-Office 기반 데이터 클립보드 복사/붙여넣기 호환",
        ),
        issue: joinCommas(""),
        urls: joinCommas(
            "https://lee-gyu.github.io/storybook/?path=/story/js-components-irgrid--bulk-columns",
            "https://lee-gyu.github.io/storybook/?path=/story/js-components-irgrid--cell-renderer",
            "https://lee-gyu.github.io/storybook/?path=/story/js-components-irgrid--row-filter-plugin",
        ),
        urlText: joinCommas(
            "50만개 셀 처리",
            "셀 렌더러 UI 기능 확장",
            "플러그인 기반 기능 확장",
        ),
        // TypeScript 기반, Undo, 타 Format 클립보드 지원
        // 플러그인 기반 코어 아키텍처
    },

    "20230020": {
        year: "2022",
        header: "[App] 임직원 일정 관리/공유 캘린더 개발",
        role: "웹 풀스택 개발",
        "co-op": joinCommas("제품 디자이너", "주니어 F/E 개발자"),
        result: joinCommas(""),
        tasks: joinCommas(
            "기존 구글 캘린더 ics 마이그레이션",
            "모바일/데스크탑 대응 반응형 레이아웃 처리",
            "다크모드 CSS 테마 기능 개발",
        ),
        tech: joinCommas(
            "(F/E) Next.js Page Router",
            "(F/E) React / Jotai / SWR",
            "(B/E) Nest.js / TypeORM",
            "(DB) MySQL",
        ),
        imgLabel: joinCommas("(PC) 동작 화면", "(모바일) 동작 화면"),
        imgUrls: joinCommas("/video/20230020_1.mp4", "/video/20230020_2.mp4"),
    },

    "20230070": {
        header: "[Lib] 제품 호출 프로토콜 설계 / 개발",
        year: "2023",
        result: joinCommas(
            "내부 제품간 연동을 통한 재생산성 향상",
            "고객사 계정 시스템과 SSO 연동을 위한 기반 마련",
        ),
        tasks: joinCommas(
            "웹 애플리케이션 manifest.json 메타 정보 설계",
            "제품 호출을 위한 app-entry 스크립트 설계",
            "타 웹 애플리케이션에서 본 제품 호출을 위한 모듈 개발",
        ),
        feat: joinCommas(
            "MPA 기반 웹 애플리케이션의 페이지를 UI 컴포넌트처럼 제공하는 iframe Wrapper",
            "Window Message 기반 페이지 간 통신 체계 제공",
            "타사 계정 시스템과 SSO 연동을 위한 클라이언트 라이브러리 개발",
        ),
    },
    "20230080": {
        header: "[App] 사내 휴가계 시스템 리뉴얼",
        year: "2023",
        role: "웹 풀스택 개발",
        result: joinCommas("전체 임직원의 연차 시스템 사용 만족도 개선"),
        tasks: joinCommas(
            "php 기반 레거시 시스템 리뉴얼",
            "30분 단위 사용 가능한 연차 시스템 설계",
            "PC/Mobile 반응형 UI 레이아웃 설계",
            "프로젝트 관리(개발 일정/리스크)",
        ),
        "co-op": joinCommas("제품 디자이너", "주니어 개발자"),
        tech: joinCommas("(F/E) React", "(B/E) Nest.js"),
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
        header: "[Testing] 공통 UI 컴포넌트 테스트 자동화",
        year: "2024",
        "co-op": joinCommas("주니어 F/E 개발자 (3명)"),
        tech: joinCommas("Vitest / Playwright"),
        result: "반복적 테스팅 작업 단축",
        tasks: joinCommas(
            "테스팅 할 수 있는 기술 환경 구축",
            "테스팅 업무 프로세스 수립",
        ),
        imgLabel: joinCommas("Vitest", "Playwright"),
        imgUrls: joinCommas("/img/vitest.png", "/img/playwright.png"),
    },

    // 2025 ~
    "20250010": {
        header: "[UI] iframe 기반 탭 관리 컴포넌트 개발",
        year: "2024",
        tasks: joinCommas(
            "iframe 페이지 호출을 위한 인터페이스 설계",
            "UI 컴포넌트 개발",
        ),
        result: joinCommas("웹 애플리케이션 제품 사용성에 대한 만족도 향상"),
        "co-op": "제품 디자이너",
        imgUrls: joinCommas("/video/20250010.mp4"),
        imgLabel: joinCommas("동작 화면"),
        story: [
            "기존에는 브라우저 탭마다 각 업무 화면을 사용하는 구조였습니다. 이러한 구조는 사용자들이 사용하는 탭이 많아지면, 분류가 어렵고 불편하다는 지적이 많았습니다.\n",
            "페이지 내 iframe으로 페이지를 관리하는 컴포넌트를 개발하였습니다.\n",
            "iframe이라 무거운 이슈가 있었지만, 이미 만들어진 MPA 구조에서 큰 변경 작업 없이 진행될 수 있어서 큰 작업 공수 없이 적용을 완료하였습니다.\n",
            "이 기능으로 제품 사용성이 대폭 개선되어 공식 웹 제품 출시에 큰 영향을 주었습니다.",
        ].join(""),
    },
    "20250020": {
        header: "[UI] 고성능 트리 컴포넌트 개발",
        year: "2024",
        "co-op": "제품 디자이너",
        urlText: joinCommas("스토리북 예제", "체크박스 플러그인"),
        urls: joinCommas(
            "https://lee-gyu.github.io/storybook/?path=/story/js-components-irtreeview--bulk-data",
            "https://lee-gyu.github.io/storybook/?path=/story/js-components-irtreeview--cascade-checking",
        ),
        feat: joinCommas(
            "부모/자식 노드 계층 처리",
            "플러그인을 활용한 기능 확장 (키보드/마우스/체크박스/툴팁)",
            "Windowing을 통한 수십만개 노드 고성능 렌더링 처리",
        ),
        imgLabel: "컴포넌트 이미지",
        imgUrls: "/img/20250020.png",
    },
    "20250040": {
        header: "[채용] 신입/경력 웹 개발자 채용",
        year: "2024",
        role: "채용 전형 담당",
        summary: joinCommas(
            "신입 F/E 개발자 2명 채용",
            "경력(3년차↑) F/E 개발자 2명 채용",
        ),
        tasks: joinCommas(
            "지원자 서류 검토",
            "과제 테스트 진행/평가",
            "면접 진행(기술, 문화 적합성)",
        ),
        urlText: joinCommas("채용 회고록"),
        urls: joinCommas(
            "https://medium.com/@gyuc219/%EC%9B%B9-f-e-%EA%B0%9C%EB%B0%9C%EC%9E%90-%EC%B1%84%EC%9A%A9-%EA%B3%BC%EC%A0%95-%ED%9A%8C%EA%B3%A0-efa5ea562ab9",
        ),
    },
    "20250050": {
        header: "[App] 온라인 코딩 테스트 사이트 개발",
        year: "2025",
        "co-op": joinCommas("제품 디자이너", "주니어 F/E 개발자 (2명)"),
        tech: joinCommas(
            "(F/E) Next.js App Router / Server Actions",
            "(F/E) React / zustand / react-query / CodeMirror",
            "(DB) PostgreSQL",
            "(ORM) Drizzle",
        ),
        result: joinCommas(
            "800명 응시하여 6명 신입 개발자 채용",
            "채용 프로세스 간소화\n(기존) 오프라인 필기 시험 + 1~2회 면접\n(개선) 온라인 코딩 테스트 + 1회 면접",
        ),
        urls: "https://innorules.com/online",
        urlText: "이노룰스 온라인 코딩 테스트",
        feat: joinCommas(
            "지원자 관리 / 입장 안내 메일 발송 시스템",
            "제출용 에디터 컴포넌트",
            "시간 제한 타이머",
            "답안 임시 저장 / 최종 제출",
            "Markdown 기반 문제 작성 및 문제 Viewer UI 작업",
        ),
        imgLabel: "동작 영상",
        imgUrls: "/video/20250050.mp4",
    },
    "20250070": {
        header: "[BackOffice] 전자결재 업무 시스템 설계",
        role: "",
        year: "2025",
    },
    "20250080": {
        year: "2025",
        header: "[디자인 시스템] 다크모드 컬러 토큰 체계 적용",
        role: "CSS 토큰 체계 개발 방향성 리드",
        "co-op": joinCommas("제품 디자이너", "주니어 F/E 개발자"),
    },
    "20250090": {
        year: "2025",
        header: "[Lib] WebApp 커스터마이징 Add-on 구조",
        result: joinCommas("고객사 요구에 따른 제품 확장성 향상"),
        summary: joinCommas(
            "(기존) 고객사에서 추가 기능 구현마다 별도의 브랜치와 제품 소스를 재빌드하는 번거로움 발생",
            "(개선) 제품 재빌드 없이 메인 프로그램에서 커스터마이징 모듈만 분리하는 Add-on 구조 적용",
        ),
        tech: "Vite Plugin API",
        tasks: joinCommas(
            "웹 제품 공유 모듈 개발",
            "ESM 기반 동적 JS 모듈 로더 개발",
            "Add-on 라이프사이클 흐름 설계",
            "커스터마이징 로더 설정을 위한 Vite Plugin 개발",
        ),
        feat: joinCommas(
            "고객사 내부 디자인 규정에 제품 css 재정의",
            "고객사 사이트에서 원하는 업무 기능 커스터마이징",
        ),
    },

    "20250100": {
        header: "[AI] 다국어 번역 자동화",
        year: "2025",
        role: "전체 시스템 설계/개발",
        tasks: joinCommas(
            "기존 시스템 다국어 문자열 전수 조사",
            "다국어 번역 Dataset 자료 생성",
            "Google 적응형 번역(LLM)을 활용한 번역 자동화 (일본어, 영어, 중국어, 스페인어)",
        ),
        feat: joinCommas(
            "사내 업무 시스템으로 제품 다국어 통합 관리 UI",
            "Java/Web 제품에 맞게 다국어 리소스 Export 기능",
        ),
        result: joinCommas("약 8,000개 다국어 문자열 번역 처리 자동화909090"),
        imgLabel: "화면",
        imgUrls: "/img/20250100.png",
    },

    "20250110": {
        header: "[AI] 챗봇 기능 프로토타입",
        role: "웹 제품 AI 기능 풀스택 개발/적용",
        year: "2025",
        tech: joinCommas(
            "(F/E) React",
            "(B/E) Hono",
            "(VectorDB) ChromaDB",
            "(AI) Google GenAI / LangChainJS",
        ),
        tasks: joinCommas(
            "챗봇 UI 컴포넌트 개발",
            "제품 지식 자료 임베딩",
            "프롬프트 엔지니어링",
            "AI 서비스 호출 API 서버 개발",
        ),
        story: [
            "회사 제품에 AI 기능에 대한 요구가 증가하여, 프로토타입으로 구축한 프로젝트입니다.\n",
            "직접 VectorDB 구축, RAG 파이프라인과 AI를 위한 API 서버를 개발하여 데모 버전에 적용하였습니다.\n",
            "임베딩과 VectorDB는 사내 서버에 구축하였고, AI 서비스는 구글 클라우드 플랫폼을 통해 빠르게 구축하였습니다.",
        ].join(""),
        imgLabel: "시연 영상",
        imgUrls: "/video/20250110.mp4",
    },
} satisfies Record<string, ExpStoryObj>;

export type ExpKey = keyof typeof ko;

export const experiencesKo = ko as Record<ExpKey, ExpStoryObj>;
