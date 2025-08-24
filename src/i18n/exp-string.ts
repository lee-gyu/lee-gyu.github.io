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
            "이후 S/W 전문성을 키우기 위해 부서 이동을 신청하여 다른 사업부로 전배했습니다.",
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
        // story: [
        //     "부서에 소프트웨어 개발 인력이 보충되면서, 전체 해외 법인을 모니터링하는 과제가 주어졌습니다.",
        //     "사내 제조 실행 시스템(MES)과 연계하여 API로 주기적으로 데이터를 수집하고, 이를 보여주는 화면을 개발했습니다.",
        // ].join(" "),
    },
    "20180050": {
        header: "IoT 환경 데이터 수집",
        year: "2017",
        "co-op": "IoT/센서 연동 담당 엔지니어",
        role: "웹 풀스택 개발",
        result: "먼지/조도/소음 등 환경 데이터 수집/모니터링 시스템 개발",
        tech: joinCommas(
            "(IoT) Raspberry Pi (Linux Raspbian)",
            "(Backend) C# ASP.NET MVC",
            "(Message Broker) Mosquitto",
            // "(DBMS) MariaDB",
            // "(ORM) Entity Framework",
        ),
        story: [
            "IoT 기기에 연결된 센서들로 환경 데이터를 수집하고, 이를 공정 환경 개선에 활용될 수 있도록 하는 과제입니다.",
            "IoT 기기와 센서 연동 등의 하드웨어를 담당하는 엔지니어와 협업한 과제입니다.",
        ].join("\n"),
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
        "co-op": "PLC 신호 처리 클라이언트 개발자",
        result: "공정 병목 현상 파악 및 개선에 기여",
        tech: joinCommas(
            "(DBMS) MariaDB",
            "(Backend) C# ASP.NET MVC",
            "(ORM) Entity Framework",
            "(Frontend) TypeScript",
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

    "20210060": {
        header: "RPA 정부 연구개발 과제 개발",
        period: "2020 ~ 2021",
        role: "시스템 풀스택 개발",
        "co-op": joinCommas("프로젝트 리더", "AI 모델 개발자"),
        tasks: joinCommas(
            "내부 시스템 풀스택 개발",
            "TTA 인증 시험 업무",
            "프로젝트 최종 보고서 작성",
        ),
        result: "정부 연구개발 과제 최종 수행 완료",
        feat: joinCommas(
            "RPA 실행 성능 최적화 (10초 → 2초)",
            "Win/Linux/Mac 크로스 플랫폼 Electron App",
            "Windows Sandbox 활용 가상 테스팅 환경 구축",
        ),
        tech: joinCommas("(Backend) Koa.js", "(Frontend) Vue.js / Electron"),
        issue: joinCommas(
            "Linux / Mac 크로스 플랫폼 실행 환경 이슈",
            "Jython 기반의 매우 무겁고 느린 초기화 성능",
        ),
        story: [
            "당시 프로젝트 막바지였던 정부 연구개발 과제를 맡았습니다.\n",
            "화면 내 UI를 식별하고 마우스/키보드를 제어하여 단순 사용자의 반복 작업을 자동화하는 업무 자동화(RPA) 연구개발 과제였습니다.",
            "\n\n",
            "프로젝트 완수 조건이 모든 플랫폼에서의 실행 보장이었는데,\n",
            "팀에 합류한 당시 몇 개월이 남지 않은 상황에서 Windows 실행 환경만 구현되어 있었습니다.\n",
            "Linux/Mac 실행 환경에 대한 작업을 전담하고 TTA 인증 시험까지 마무리 지어 프로젝트를 마무리했습니다.",
        ].join(""),
    },
    "20210070": {
        header: "플로우차트 UI 컴포넌트 라이브러리",
        year: "2021",
        tasks: "플로우차트 내부 시스템 전체 설계 / 구현",
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
            "영업본부에서는 타사와의 제품 경쟁력을 위해 웹으로의 기술 전환을 지속적으로 요구하였고, 웹 전환의 가능성을 보기 위한 첫 시작 과제였습니다.",
            "레거시 버전 이상의 UI 컴포넌트로 개발을 완수했습니다.",
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
            "(Docs) Storybook / TypeDoc",
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
        header: "웹 제품 svg 아이콘 CSS 번들러 개발",
        year: "2022",
        "co-op": "제품 디자이너",
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
        header: "임직원 일정 관리/공유 캘린더 개발",
        role: "웹 풀스택 개발",
        "co-op": joinCommas("제품 디자이너", "신입 F/E 개발자"),
        result: joinCommas(""),
        tasks: joinCommas(
            "기존 구글 캘린더 ics 마이그레이션",
            "모바일/데스크탑 대응 반응형 레이아웃 처리",
            "다크모드 CSS 테마 기능 개발",
        ),
        tech: joinCommas(
            "(Frontend) Next.js Page Router",
            "(Backend) Nest.js / TypeORM",
            "(DBMS) MySQL",
        ),
        imgLabel: joinCommas("(PC) 동작 화면", "(Mobile) 동작 화면"),
        imgUrls: joinCommas("/gif/20230020_1.webp", "/gif/20230020_2.webp"),
    },

    "20230070": {
        header: "웹 제품 간 호출 프로토콜 설계 / 개발",
        year: "2023",
        result: joinCommas("iframe 기반 페이지 컴포넌트화"),
    },
    "20230080": {
        header: "사내 휴가계 시스템 리뉴얼",
        year: "2023",
        "co-op": "제품 디자이너",
    },

    "20240010": {
        header: "패키지 배포 릴리즈 주기 프로세스",
        year: "2024",
    },

    // 2025 ~
    "20250010": {
        header: "iframe 기반 페이지 탭 관리 UI 컴포넌트",
        year: "2024",
        "co-op": "제품 디자이너",
    },
    "20250020": {
        header: "고성능 트리 UI 컴포넌트 개발",
        year: "2024",
    },
    "20250040": {
        header: "신입/경력 웹 개발자 채용 전형 담당",
        year: "2024",
        role: "채용 전형 담당/면접관",
        urlText: joinCommas("채용 회고록"),
        urls: joinCommas(
            "https://medium.com/@gyuc219/%EC%9B%B9-f-e-%EA%B0%9C%EB%B0%9C%EC%9E%90-%EC%B1%84%EC%9A%A9-%EA%B3%BC%EC%A0%95-%ED%9A%8C%EA%B3%A0-efa5ea562ab9",
        ),
    },
    "20250050": {
        header: "온라인 코딩 테스트 사이트 개발",
        year: "2025",
        "co-op": "제품 디자이너",
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
