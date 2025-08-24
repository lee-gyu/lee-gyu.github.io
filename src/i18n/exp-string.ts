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
    | "imgLabel";

type ExpStoryObj = Partial<Record<ExpProps, string>>;

const ko = {
    "20150030": {
        header: "2013 국제기능올림픽 정보기술 직종 국가대표 훈련",
        period: "2012 ~ 2013",
        role: "기능올림픽 정보기술 직종 국가대표",
        tech: joinCommas(
            "(Docs) MS Office",
            "(DBMS) MS Access",
            "VBA 프로그래밍",
        ),
        result: joinCommas("금메달 (1위)", "동탑산업훈장 대통령 표창"),
        urlText: joinCommas("대회 점수", "수상자 사진"),
        urls: joinCommas(
            "https://results.worldskills.org/results?event=9&offset=0&skill=345&base_skill=221",
            "https://www.flickr.com/photos/worldskills/9235939100/in/album-72157634532467264/",
        ),
        story: [
            "전국 대회 2위 수상하고, 국가대표 선발전을 거쳐 국가대표로 선발되었습니다.",
            "이후 삼성전자 기능올림픽 훈련센터에서 국가대표 훈련을 받고, 금메달을 수상했습니다.",
            "국가대표 훈련 과정에서 문제 해결 능력과 업무용 소프트웨어를 이해하는 능력을 키울 수 있었습니다.",
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
        header: "조직문화 개선 활동 업무",
        period: "2014 ~ 2015",
        tasks: "근무 문화 개선 활동 기획/진행",
        result: "조직문화 평가 지표 향상",
        story: [
            "Change Agent라는 직책으로 조직 문화를 개선하는 업무를 담당했습니다.",
            "여러 문화 활동을 기획하여 임원부터 일반 직원까지 모두 참여하는 행사를 진행했습니다.",
        ].join(" "),
    },
    "20150070": {
        header: "삼성전자 기능올림픽 훈련센터 지도위원",
        period: "2013 ~ 2015",
        role: "국가대표 지도위원",
        tech: joinCommas("(Client) C# Windows", "(DBMS) SQL Server"),
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
            "이후 S/W 전문성을 키우기 위해 부서 이동을 신청하여 VD사업부로 전배되었습니다.",
        ].join(""),
    },

    "20180020": {
        header: "웹 기반 사내 업무 시스템 개발",
        year: "2016",
        tech: joinCommas(
            "(Backend) C# ASP.NET MVC",
            "(Frontend) JQuery / Bootstrap",
            // "(DBMS) MariaDB",
            // "(ORM) Entity Framework",
        ),
        role: joinCommas("웹 풀스택 개발"),
        feat: joinCommas(
            "사내 표준 업무 시스템과 SSO 계정 연동",
            "TinyMCE 에디터 기반 컨텐츠 작성",
            "임직원 업무 현황 보고서 메일링",
        ),
        result: joinCommas(
            "기존 보고용 문서 출력을 웹 문서로 대체",
            "관리자가 수기로 취합하던 업무 보고 작업 시스템화",
        ),
        story: [
            "사내 IT 시스템은 SI 업체에 의존하고 있어, 개발 요청 시 큰 비용이 발생합니다. ",
            "팀에서 필요한 업무 시스템을 직접 만들기로 기획하고 요구사항 전체를 개발하는 역할을 맡았습니다.",
            "\n\n",
            "지시가 없더라도 사용에 불편함이 보이면 스스로 개선하며 얻는 성취가 있었습니다.",
        ].join(""),
    },
    "20180030": {
        header: "해외 법인 종합 관제실 시스템 구축",
        year: "2016",
        role: "웹 풀스택 개발",
        tech: joinCommas(
            "(Backend) C# ASP.Net MVC",
            "(Frontend) JQuery / Telerik Kendo UI",
            // "(DBMS) MariaDB",
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
        story: [
            "부서에 소프트웨어 개발 인력이 보충되면서, 전체 해외 법인을 모니터링하는 과제가 주어졌습니다.",
            "사내 제조 실행 시스템(MES)과 연계하여 API로 주기적으로 데이터를 수집하고, 이를 보여주는 화면을 개발했습니다.",
        ].join(" "),
    },
    "20180050": {
        header: "IoT 환경 데이터 수집",
        year: "2017",
        role: "웹 풀스택 개발",
        result: "위험 환경 요소를 파악하는 모니터링 시스템 구축",
        tech: joinCommas(
            "(IoT) Raspberry Pi (Linux Raspbian)",
            "(Backend) C# ASP.NET MVC",
            "(Message Broker) Mosquitto",
            // "(DBMS) MariaDB",
            // "(ORM) Entity Framework",
        ),
        // story: [
        //     "먼지, 조도, 소음 등의 공정에서 발생하는 환경 데이터를 IoT 기기로 수집하고, 이를 공정 환경 분석에 활용하는 과제입니다.",
        //     "IoT 기기와 센서 연동을 담당하는 엔지니어와 협업한 과제입니다.",
        // ].join("\n"),
    },

    "20180055": {
        header: "삼성전자 개발 직군 S/W 자격 검증 시험",
        date: "2017.6",
        result: "Pro 등급 취득",
        summary: "알고리즘 코딩테스트 시험",
        story: [
            "사내 S/W 자격 시험을 응시하여 Pro 등급을 취득하고 인센티브로 약 100만원을 받았습니다.",
            "당시 Pro 등급은 상위 개발자 15~20% 정도가 취득했었습니다.",
        ].join(" "),
    },

    "20180070": {
        header: "공정 프로세스 현황 모니터링",
        year: "2017",
        role: "웹 풀스택 개발",
        result: "공정 병목 현상 파악 및 개선에 기여",
        tech: joinCommas(
            "(DBMS) MariaDB",
            "(Backend) C# ASP.NET MVC",
            "(ORM) Entity Framework",
            "(Frontend) TypeScript",
        ),
        story: [
            "공정 프로세스는 조립-검사-포장 등의 단계를 거칩니다. ",
            "평균보다 지연되는 작업이 있는 경우, 전체 생산성에 영향을 미칩니다. ",
            "어떤 공정에서 병목이 있는지 분석하기 위해 PLC 신호를 수신하여 작업 시간을 계산하고, 전체 공정을 보여주는 웹 화면을 개발했습니다.\n",
            "실제 공정에 있는 PLC 메모리를 읽어 작업을 계산하는 부분은 다른 엔지니어가 담당하고, 데이터 수집 서버와 웹 화면 개발을 담당했습니다.",
            "\n\n",
            "개발 환경에 Node.js와 타입스크립트를 처음으로 도입해보았던 과제입니다.",
        ].join(""),
    },

    "20210060": {
        header: "정부 연구개발 과제",
        year: "2021",
        summary: "RPA 소프트웨어 개발",
        tasks: joinCommas(
            "내부 시스템 풀스택 개발",
            "TTA 인증 시험 업무 지원",
            "프로젝트 최종 보고서 작성",
        ),
        result: "정부 연구개발 과제 최종 수행 완료",
        feat: joinCommas(
            "스크립트 실행 성능 최적화",
            "Win/Linux/Mac 크로스 플랫폼 Electron App",
            "Windows Sandbox 활용 가상 테스팅 환경 구축",
        ),
        tech: joinCommas(
            "(ETC) Java / Python",
            "(Backend) Koa.js",
            "(Frontend) Vue.js / Electron",
            "(Container) Docker",
        ),
        issue: joinCommas(
            "RPA 스크립트 실행 성능 문제",
            "크로스 플랫폼 실행 환경 이슈",
        ),
        story: [
            "당시 프로젝트 막바지였던 AI 과제를 맡았습니다. ",
            "PC 내 UI를 식별하고 마우스/키보드를 제어하여 단순 반복 작업을 자동화하는 업무 자동화(RPA) 연구개발 과제였습니다.",
            "\n\n",
            "Windows 실행 환경만 구현되어 있어서 프로젝트 마무리에 어려움이 있었는데, Linux/Mac 실행 환경에 대한 작업을 전담하고 TTA 인증 시험까지 마무리 지었습니다.",
        ].join(""),
    },
    "20210070": {
        header: "플로우차트 UI 컴포넌트 라이브러리",
        year: "2021",
        tasks: "플로우차트 내부 시스템 설계 / 구현",
        result: "",
        tech: joinCommas("D3.js", "TypeScript"),
        feat: joinCommas(
            "객체 추가 / 선택 / 드래그 앤 드롭 모드",
            "사용자 액션 Undo / Redo",
            "연결선 처리 알고리즘",
        ),
        urlText: "스토리북 컴포넌트 예제",
        urls: "https://lee-gyu.github.io/storybook/?path=/story/js-components-irflowchart--basic",
        story: [
            "데스크탑 클라이언트를 웹으로 포팅하기 위해 시작한 과제입니다.",
            "기존 데스크탑의 사용성을 웹에서도 동일하게 제공하기 위해 노력했습니다.",
            "\n당시 svg 요소를 편하게 처리하기 위해 D3.js를 채택하고, TypeScript로 타입 힌트를 제공하여 개발자 경험을 높였습니다.",
        ].join(" "),
    },
    "20210080": {
        header: "사내 웹 SDK 배포 환경 구축",
        year: "2021",
        tasks: joinCommas(
            "사내 npm 레지스트리 서버 구축",
            "사내 스토리북 사이트 구축",
            "스토리북 라이브에디터 컴포넌트 개발",
            "Jenkins 기반 자동화 배포 파이프라인 구축",
        ),
        tech: joinCommas(
            "(Container) Docker",
            "(CI/CD) Jenkins",
            "(Docs) Storybook",
            "(Docs) TypeDoc",
            "(VCS) GitLab",
        ),
        urls: "https://lee-gyu.github.io/storybook/?path=/story/html-components-button--intent",
        urlText: "라이브 에디터 예제",
        story: [
            "당시 Node.js, npm를 활용하지 못해 버전 관리나 패키지 배포/업그레이드에 번거로움이 있었습니다.",
            "개발자 경험을 향상시키고자 사내 npm 패키지 서버와 개발자들이 찾아볼 수 있는 문서화 사이트도 함께 구축했습니다.",
            "라이브러리 소스를 특정 브랜치에 커밋하면 문서 사이트가 배포되도록 자동화 흐름을 만들었습니다.",
            "\n\n추가로, 디버깅을 위해 스토리북 예제를 실시간으로 수정하고 결과를 확인할 수 있도록 라이브 에디터를 개발했습니다.",
        ].join(" "),
    },
    "20210090": {
        header: "UI 스타일 리뉴얼 프로젝트",
        period: "2021 ~ 2022",
        summary: "프리랜서와 협업하여 제품 UI 스타일 리뉴얼",
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
            "/img/20210090_3.png",
            "/img/20210090_4.png",
        ),
        imgLabel: joinCommas("#1 기존", "#1 리뉴얼", "#2 기존", "#2 리뉴얼"),
        story: [
            "기존 화면은 개발자들이 직접 만든 화면이라 UI의 스타일이 오래되어 보인다는 지적이 있었습니다.",
            "누구도 쉽게 리뉴얼 작업을 시도하지 못 했었는데, 직접 주도하여 모든 화면을 조사하고,",
            "UI 리뉴얼을 위한 기초 작업을 모두 완료했습니다. 현재는 제품의 모든 화면이 리뉴얼되어 적용되었습니다.",
        ].join(" "),
    },

    "20230010": {
        header: "웹 제품 아이콘 CSS 번들러 개발",
        year: "2022",
        tasks: joinCommas(
            "아이콘 CSS 번들러 프로그램 개발",
            "아이콘 스토리북 페이지 작성",
            "디자이너/개발자 아이콘 유지보수 프로세스 수립",
        ),
        result: joinCommas(
            "모든 제품에 동일한 아이콘 CSS 체계 제공",
            "아이콘을 UI에 배치하는 개발 편의성 향상",
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
        header: "Grid UI 컴포넌트 라이브러리 개발",
        year: "2022",
        result: joinCommas(""),
        tasks: joinCommas("내부 구성 요소 구조 설계 개발"),
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
        header: "임직원 일정 관리 App 개발",
        role: "웹 풀스택 개발",
        result: joinCommas(""),
        tasks: joinCommas(
            "기존 구글 캘린더 ics 마이그레이션",
            "모바일/데스크탑 대응 반응형 레이아웃 처리",
            "다크모드 CSS 테마 기능 개발",
        ),
        tech: joinCommas(
            "(DBMS) MySQL",
            "(Backend) Nest.js",
            "(ORM) TypeORM",
            "(Frontend) Next.js Page Router",
        ),
        imgLabel: joinCommas("동작 화면"),
        imgUrls: joinCommas("/gif/20230020_1.gif"),
    },

    "20230050": {
        header: "솔루션 계정 인증 시스템 통합",
        tasks: joinCommas(
            "웹 제품 계정 인증 인터페이스 개발",
            "로그인 포털 페이지 개발",
        ),
        year: "2023",
        tech: joinCommas("(Frontend) Vite / React"),
        imgLabel: joinCommas(),
        imgUrls: joinCommas(),
    },

    "20230060": {
        header: "레거시 jsp → vite 기반으로 마이그레이션",
        year: "2023",
    },
    "20230070": {
        header: "iframe 기반 웹 페이지 모듈화",
        // BroadcastChannel API 기반
        year: "2023",
    },
    "20230080": {
        header: "사내 휴가계 시스템 리뉴얼",
        // BroadcastChannel API 기반
        year: "2023",
    },

    "20240010": {
        header: "패키지 배포 릴리즈 주기 프로세스",
        // BroadcastChannel API 기반
        year: "2024",
    },

    // 2025 ~
    "20250010": {
        header: "한 페이지에서 여러 페이지를 관리하는 UI 컴포넌트",
        year: "2024",
    },
    "20250020": {
        header: "고성능 계층 트리 UI 컴포넌트 개발",
        year: "2024",
    },
    "20250040": {
        header: "신입/경력 웹 개발자 채용 전형 담당",
        year: "2024",
    },
    "20250050": {
        header: "온라인 코딩 테스트 사이트 개발",
        year: "2025",
        tech: joinCommas(
            "(Frontend) Next.js App Router",
            "(DBMS) PostgreSQL",
            "(ORM) Drizzle",
        ),
    },
    "20250070": {
        header: "전자결재 업무 시스템 설계",
        role: "",
        year: "2025",
    },
    "20250080": {
        header: "다크모드 컬러 토큰 체계",
        year: "2025",
    },
    "20250090": {
        header: "제품 커스터마이징 모듈 로더 구조 설계/개발",
        year: "2025",
    },
} satisfies Record<string, ExpStoryObj>;

export type ExpKey = keyof typeof ko;

export const experiencesKo = ko as Record<ExpKey, ExpStoryObj>;
