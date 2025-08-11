import { joinCommas } from "src/utils/string";

export type ExpProps =
    | "header"
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

export type ExpKey = keyof typeof ko;

type ExpStoryObj = Partial<Record<ExpProps, string>>;

const ko = {
    // 2015 ~
    "20150010": {
        header: "기능올림픽 국가대표 선발전 준비",
        period: "2011 ~ 2012",
        story: [
            "기능올림픽은 전국 대회 수상자끼리 선발전을 치뤄 국가대표를 선발합니다.",
            "전국 대회에서 수상 후, 국가대표 선발전을 치뤄 1위를 했습니다.",
            "\n목표를 가지고 체계적으로 준비하는 과정을 경험했습니다.",
        ].join(" "),
    } satisfies ExpStoryObj,
    "20150020": {
        header: "삼성전자 기능올림픽 특채 전형 입사",
        date: "2012.10",
    } satisfies ExpStoryObj,
    "20150030": {
        header: "2013 국제기능올림픽 정보기술 직종 국가대표 훈련",
        period: "2013.1 ~ 2013.8",
        role: "기능올림픽 정보기술 직종 국가대표",
        tech: joinCommas(
            "(VBA) 업무 프로그램 개발",
            "(MS Access) Database",
            "(Word/PPT) 업무 문서 작성",
        ),
        result: joinCommas("금메달(1위) 수상 / 동탑산업훈장 표창"),
        urlText: "삼성 뉴스룸 기사, 대회 점수, 수상자 사진",
        urls: joinCommas(
            "https://news.samsung.com/kr/4590",
            "https://results.worldskills.org/results?event=9&offset=0&skill=345&base_skill=221",
            "https://www.flickr.com/photos/worldskills/9235939100/in/album-72157634532467264/",
        ),
    } satisfies ExpStoryObj,
    "20150040": {
        header: "기능올림픽 특별채용 전형 업무",
        date: "2013.10, 2014.10",
        summary: "대기업 채용 프로세스를 인사 담당자 관점에서 경험",
    } satisfies ExpStoryObj,
    "20150050": {
        header: "글로벌 사내 경진대회 행사 업무",
        date: "2014.5, 2015.5",
        tasks: joinCommas("해외 법인 참가자 지원 업무"),
        story: [
            "국내외 법인에서 참가하는 사내 기술 경진대회에서 해외 법인 참가자를 담당했습니다. ",
            "해외 참가자들의 비자 관리, 한국 문화 체험 행사, 숙소/교통편 등의 업무를 지원했습니다.\n",
            "다양한 문화를 가진 사람들과 소통하는 경험을 했습니다.",
        ].join(""),
    } satisfies ExpStoryObj,
    "20150060": {
        header: "조직문화 개선 활동 업무",
        period: "2014 ~ 2015",
        role: "조직문화 활동 담당자",
        tasks: "근무 문화 개선 활동 기획/진행",
        story: [
            "Change Agent라는 직책으로 조직문화 개선을 위한 업무를 담당했습니다.",
            "조직문화 활동을 기획하여 임원부터 일반 직원 모두 참여하는 행사를 진행했습니다.",
        ].join(" "),
    } satisfies ExpStoryObj,
    "20150070": {
        header: "삼성전자 기능올림픽 훈련센터 지도위원",
        period: "2013.9 ~ 2015.9",
        role: "국가대표 지도위원",
        tech: joinCommas("(C#) Windows App 개발", "(SQL Server) DBMS"),
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
            "기능올림픽 수상 이후, 한국/베트남 국가대표 선수 지도를 담당했습니다.",
            "지도 선수 모두 수상을 하여 고과 평가 A를 받았으며,",
            "베트남은 국가 최초 메달 수상으로 베트남에 초청되어 국가 총리의 표창을 받았습니다.",
        ].join(" "),
    } satisfies ExpStoryObj,

    "20150080": {
        header: "삼성전자 VD사업부 전배",
        date: "2015.9",
        summary: "S/W 전문성을 개발하기 위해 부서 이동",
    } satisfies ExpStoryObj,

    "20170020": {
        header: "웹 기반 사내 업무 시스템 개발",
        period: "2016.1 ~ 2016.5",
        tech: joinCommas(
            "(DB) MariaDB",
            "(Server OS) Windows Server",
            "(Backend) C# ASP.NET MVC",
            "(Frontend) JQuery / Bootstrap",
        ),
        role: joinCommas("웹 풀스택 개발"),
        feat: joinCommas(
            "사내 표준 업무 시스템과 SSO 계정 연동",
            "TinyMCE 에디터 기반 컨텐츠 작성",
            "주기적 메일링 서비스",
        ),
        story: [
            "사업부의 IT 시스템은 큰 SI 업체에 의존하고 있어, 기능 개발 요청 시 큰 비용이 발생하고 있었습니다. ",
            "팀에서 필요한 업무 시스템을 직접 만들기로 기획하고 요구사항 전체를 개발하는 역할을 맡았습니다.",
            "\n\n",
            "지시가 없더라도 불편함이 보이면 스스로 개선하며 얻는 성취가 있었습니다.",
        ].join(""),
    } satisfies ExpStoryObj,
    "20170030": {
        header: "해외 법인 종합 관제실 시스템 구축",
        period: "2016.6 ~ 10",
        role: "웹 풀스택 개발",
        tech: joinCommas(
            "(DB) MariaDB",
            "(Server OS) Windows Server",
            "(Backend) C# ASP.Net MVC",
            "(Frontend) Telerik Kendo UI",
            "(Windows) WPF / Service",
        ),
        feat: joinCommas(
            "웹 / Windows 대쉬보드 화면",
            "데이터 동기화 윈도우 서비스",
        ),
        issue: joinCommas(
            "해외 타임존/썸머 타임 문제",
            "내부 인트라 네트워킹 보안망 문제",
        ),
        story: [
            "14개 해외 법인의 실시간 생산 현황을 모니터링하고 보여주는 시스템을 개발했습니다.",
            "제조 실행 시스템(MES) API를 호출하여 관제실 DB를 동기화시키고 대쉬보드 화면을 개발했습니다.",
        ].join("\n"),
    } satisfies ExpStoryObj,
    "20170050": {
        header: "환경 데이터 수집 IoT 프로젝트",
        period: "2017.1 ~ 2017.5",
        role: "웹 풀스택 개발",
        tech: joinCommas(
            "(DB) MariaDB",
            "(Backend) C# ASP.NET MVC",
            "(Message Broker) Mosquitto",
            "(IoT) Raspberry Pi (Linux Raspbian)",
        ),
        feat: joinCommas(
            "웹 대쉬보드 화면",
            "메시지 브로커를 통하여 데이터 수집/가공",
        ),
        story: [
            "먼지, 조도, 소음 등의 공정에서 발생하는 환경 데이터를 IoT 기기로 수집하고, 이를 공정 환경 분석에 활용하는 과제입니다.",
            "IoT 기기와 센서 연동을 담당하는 엔지니어와 협업한 과제입니다.",
        ].join("\n"),
    } satisfies ExpStoryObj,

    "20170055": {
        header: "삼성전자 개발 직군 S/W 자격 검증 시험",
        date: "2017.6",
        result: "Pro 등급 취득",
        story: [
            "사내 S/W 코딩 테스트 자격증 시험을 응시하여 당시 상위 15% 수준의 Pro 등급을 취득하여 인센티브로 약 100만원을 받았습니다.",
        ].join("\n"),
    } satisfies ExpStoryObj,

    "20170060": {
        header: "제조 생산량 예측 시뮬레이터",
        date: "2017.6 ~ 8",
        role: "Windows App 개발",
        tech: joinCommas(
            "(C#) Windows WPF",
            "(C#) MS Office Library",
            "(ORM) Entity Framework",
        ),
        issue: joinCommas(
            "문서 DRM 보안 충돌",
            "수백만 데이터 처리 알고리즘 성능",
        ),
        feat: joinCommas(),
        story: [
            "DB에 쌓인 제조 데이터를 이용하여 공정 전문가의 몇 개월 분석이 필요한 생산량 예측 작업을 자동화하는 프로젝트입니다.",
            "제조 현장의 변수와 불량 데이터 문제로 큰 성과를 내지 못하여 아쉬웠던 경험입니다.",
        ].join(" "),
    } satisfies ExpStoryObj,

    "20170070": {
        header: "공정 프로세스 모니터링 프로젝트",
        date: "2017.9 ~ 2018.1",
        role: "웹 풀스택 개발",
        tech: joinCommas("(Backend) C# ASP.NET MVC", "(Frontend) TypeScript"),
        feat: joinCommas(
            "서버 API 개발",
            "공정 레이아웃을 표현하는 화면",
            "작업 데이터 리포팅",
        ),
        story: [
            "공정 프로세스는 부품 조립, 검사, 포장 등의 단계를 직렬로 거칩니다.",
            "평균보다 지연되는 작업이 있는 경우, 전체 생산성에 영향을 미칩니다.",
            "공정의 PLC에서 작업 신호를 수신하여 처리 시간을 계산하고, 처리 현황을 보여주는 웹 화면을 개발했습니다.",
            "",
            "처음으로 개발 환경에 Node.js와 타입스크립트를 도입했던 과제였습니다.",
        ].join("\n"),
    } satisfies ExpStoryObj,

    "20170080": {
        header: "삼성전자 퇴사",
        date: "2018.7",
        story: [
            "근무하던 부서에서 S/W 기술은 잠깐 보여주고 개발이 종료되는 일이 많았습니다.",
            "산업군을 IT 서비스로 변경하고 싶어 퇴사를 결정했습니다.",
        ].join(" "),
    } satisfies ExpStoryObj,

    "20210020": {
        header: "기능경기대회 학교 지도 강사",
        period: "2019 ~ 2021",
        summary: "지도 학생 3명 전국대회 은메달 수상",
    } satisfies ExpStoryObj,
    "20210030": {
        header: "캐나다 밴쿠버 어학연수",
        period: "2020.01 ~ 2020.06",
        summary: "Lv6 Intermediate 등급 취득",
        urls: "https://vgc.ca/",
        urlText: "VGC 어학원",
    } satisfies ExpStoryObj,
    "20210040": {
        header: "이노룰스 기술연구소 입사",
        date: "2020.10",
    } satisfies ExpStoryObj,
    "20210060": {
        header: "정부 연구개발 과제",
        period: "2020.11 ~ 2021.3",
        summary: "RPA AI 소프트웨어 개발",
        tasks: joinCommas(
            "내부 시스템 풀스택 개발",
            "TTA 인증 시험 업무 지원",
            "프로젝트 최종 보고서 작성",
        ),
        feat: joinCommas(
            "스크립트 실행 성능 최적화",
            "Win/Linux/Mac 크로스 플랫폼 Electron App",
            "Windows Sandbox 활용 가상 테스팅 환경 구축",
        ),
        tech: joinCommas(
            "Java / Python",
            "(Backend) Koa.js",
            "(Frontend) Vue.js / Electron",
            "(시스템 배포) Docker",
        ),
        issue: joinCommas(
            "RPA 스크립트 실행 성능 문제",
            "크로스 플랫폼 실행 환경 이슈",
        ),
        story: [
            "당시 진행 중이던 AI 과제를 맡았습니다. ",
            "화면 내의 UI 이미지를 식별하고 마우스/키보드를 제어하여 단순 반복 작업을 자동화하는 업무 자동화 과제였습니다.",
            "\n",
            "화면의 오브젝트 식별, 마우스/키보드 처리는 Java 라이브러리로 처리했고, 단순 반복 작업을 Python 스크립트로 작성하는 소프트웨어입니다.\n",
            "Windows 실행 환경만 구현되어 있어서 프로젝트 마무리에 어려움이 있었는데, Linux/Mac 실행에 대한 개발 작업을 전담하고 TTA 인증 시험까지 마무리 지었습니다.",
        ].join(""),
    } satisfies ExpStoryObj,
    "20210070": {
        header: "플로우차트 UI 컴포넌트 라이브러리",
        period: "2021.4 ~ 2021.6",
        role: "웹 프런트엔드 라이브러리 개발",
        tasks: "",
        tech: joinCommas("D3.js", "TypeScript"),
        feat: joinCommas(
            "객체 추가 / 선택 / 드래그 앤 드롭 모드",
            "내부 작업 Undo / Redo",
            "연결선 처리 알고리즘",
        ),
        urlText: "스토리북 컴포넌트 예제",
        urls: "https://lee-gyu.github.io/storybook/?path=/story/js-components-irflowchart--basic",
        story: [
            "데스크탑 기반의 레거시 클라이언트를 웹으로 포팅하기 위해 시작한 과제입니다.",
            "기존 데스크탑에서 제공하는 사용성을 웹에서도 동일하게 제공하기 위해 노력했습니다.",
            "\n당시 svg 요소를 제어하는 기술이 미흡하여 D3.js를 활용하고, 개발 편의성을 위해 TypeScript로 타입 힌트를 제공했습니다.",
        ].join(" "),
    } satisfies ExpStoryObj,
    "20210080": {
        header: "사내 웹 SDK 배포 환경 구축",
        date: "2021.7",
        tasks: joinCommas(
            "사내 npm 레지스트리 서버 구축",
            "사내 스토리북 사이트 구축",
            "Jenkins 기반 자동화 배포 파이프라인 구축",
        ),
        tech: joinCommas("Docker", "Jenkins", "Storybook", "GitLab"),
        story: [
            "당시 Node.js, npm를 활용하지 못해 버전 관리나 패키지 배포에 번거로움이 있었습니다.",
            "개발 패키지 설치를 쉽게 하는 환경을 구축했습니다.",
            "라이브러리 소스를 특정 브랜치에 커밋하면 배포되도록 자동화 흐름을 만들었습니다.",
        ].join(" "),
    } satisfies ExpStoryObj,
    "20210090": {
        header: "UI 스타일 리뉴얼 프로젝트",
        period: "2021.7 ~ 2022.3",
        summary: "프리랜서 디자이너와 협업하여 UI 스타일 리뉴얼",
        tasks: joinCommas(
            "리뉴얼을 위한 기존 화면 전수 조사",
            "프로젝트 협업 환경 구축",
            "CSS 토큰/공용 스타일 적용 체계 구축",
        ),
        tech: joinCommas("Figma"),
        imgUrls: joinCommas(
            "/img/20210090_1.png",
            "/img/20210090_2.png",
            "/img/20210090_3.png",
            "/img/20210090_4.png",
        ),
        imgLabel: joinCommas("#1 기존", "#1 리뉴얼", "#2 기존", "#2 리뉴얼"),
    } satisfies ExpStoryObj,

    // 2023 ~
    "20230010": {
        header: "mask 기반 아이콘 CSS 체계",
        period: "2022",
    } satisfies ExpStoryObj,
    "20230020": {
        header: "임직원 일정 관리 App 개발",
        period: "2022",
        // 기존 구글 캘린더 ics 마이그
    } satisfies ExpStoryObj,

    "20230040": {
        header: "Grid UI 컴포넌트 라이브러리 개발",
        period: "2022",
        // TypeScript 기반, Undo, 타 Format 클립보드 지원
        // 플러그인 기반 코어 아키텍처
    } satisfies ExpStoryObj,
    "20230050": {
        header: "계정 인증 시스템 통합",
        period: "2023",
    } satisfies ExpStoryObj,
    "20230060": {
        header: "레거시 jsp → vite 기반으로 마이그레이션",
        period: "2023",
    } satisfies ExpStoryObj,
    "20230070": {
        header: "브라우저 Window 통신 체계 구축",
        // BroadcastChannel API 기반
        period: "2023",
    } satisfies ExpStoryObj,

    // 2025 ~
    "20250010": {
        header: "한 페이지에서 여러 페이지를 관리하는 UI 컴포넌트",
        period: "2024",
    } satisfies ExpStoryObj,
    "20250020": {
        header: "고성능 계층 트리 UI 컴포넌트 개발",
        period: "2024",
    } satisfies ExpStoryObj,
    "20250030": {
        header: "iframe 기반 제품 임베딩 구조 설계/개발",
        period: "2024",
    } satisfies ExpStoryObj,
    "20250040": {
        header: "신입/경력 웹 개발자 채용",
        period: "2024",
    } satisfies ExpStoryObj,
    "20250050": {
        header: "입사 지원자 온라인 코딩 테스트 사이트 개발",
        period: "2025",
    } satisfies ExpStoryObj,
    "20250060": {
        header: "팀 개발자 관리",
        period: "2025",
        // 목표 관리, 일정 관리, 코드 관리, 문서화
    } satisfies ExpStoryObj,
    "20250070": {
        header: "전자결재 업무 시스템 구조 설계",
        period: "2025",
    } satisfies ExpStoryObj,
    "20250080": {
        header: "다크모드 컬러 토큰 체계",
        period: "2025",
    } satisfies ExpStoryObj,
    "20250090": {
        header: "제품 커스터마이징 모듈 로더 구조 설계/개발",
        period: "2025",
    } satisfies ExpStoryObj,
};

export const experiencesKo = ko as Record<ExpKey, ExpStoryObj>;
