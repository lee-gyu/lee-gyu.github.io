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
    | "story";

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

    // 2017 ~
    "20170010": {
        header: "삼성전자 VD사업부 전배",
        date: "2015.9",
        summary: "S/W 개발 전문성을 키우기 위해 부서 이동 신청",
    } satisfies ExpStoryObj,
    "20170020": {
        header: "웹 기반 사내 업무 시스템 개발",
        period: "2016 상반기",
        role: "웹 풀스택 개발",
        tech: joinCommas(
            "(Server OS) Windows Server",
            "(DB) MariaDB",
            "(Backend) C# ASP.Net MVC",
            "(Frontend) JQuery / Bootstrap",
        ),
        tasks: "요구사항 분석 및 주도적 기능 개발",
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
        period: "2016 하반기",
        role: "웹 풀스택 개발",
        tech: joinCommas(
            "(Server OS) Windows Server",
            "(DB) MariaDB",
            "(Backend) C# ASP.Net MVC",
            "(Frontend) Telerik Kendo UI",
            "(Windows) WPF / Service",
        ),
        feat: joinCommas(
            "서버 DB 설계 / API 개발",
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
        period: "2017 상반기",
        role: "웹 풀스택 개발자",
        tech: joinCommas(
            "(DB) MariaDB",
            "(Backend) C# ASP.Net MVC",
            "(IoT) Raspberry Pi (Linux Raspbian)",
            "(Message Broker) Mosquitto",
        ),
        tasks: joinCommas(
            "서버 사이드 개발 (DB / API)",
            "메시지 브로커를 이용한 데이터 수집/가공",
            "웹 대쉬보드 화면 개발",
        ),
        story: [
            "먼지, 조도, 소음 등의 공정에서 발생하는 환경 데이터를 IoT 기기로 수집하고, 이를 공정 환경 분석에 활용하는 과제입니다.",
            "IoT 기기와 센서 연동은 다른 엔지니어가 담당하였습니다.",
        ].join("\n"),
    } satisfies ExpStoryObj,
    "20170060": {
        header: "제조 생산 예측 시뮬레이터",
        period: "2017",
        tasks: joinCommas(
            "시뮬레이터 Windows App 개발",
            "데이터 계산 로직 성능 최적화",
        ),
        tech: joinCommas(
            "Excel Automation",
            "(Windows) WPF",
            "(ORM) Entity Framework",
        ),
        issue: joinCommas(
            "문서 DRM 보안 충돌",
            "수백만 데이터 처리 알고리즘 성능",
        ),
        feat: joinCommas(),
        story: [
            "수십명의 공정 전문가들이 몇 개월씩 분석이 필요한 생산량 예측 작업을 자동화하는 프로젝트입니다.",
            "제조 현장의 변수와 불량 데이터 문제로 큰 성과를 내지 못하여 아쉬웠던 경험입니다.",
        ].join(" "),
    } satisfies ExpStoryObj,
    "20170070": {
        header: "공정 프로세스 모니터링 프로젝트",
        period: "2017",
        tech: "ASP.Net MVC, TypeScript",
        tasks: "작업 데이터 수집 시스템 개발, 웹 대쉬보드 페이지 개발",
        story: [
            "공정 프로세스는 부품 조립, 검사, 포장 등의 단계를 직렬로 거칩니다.",
            "각 작업에서 하나라도 평균보다 지연되는 경우, 전체 생산성에 영향을 미칩니다.",
            "공정 장비의 PLC 신호를 이용하여 작업자의 작업 시간을 수집하고,",
            "그것을 대쉬보드로 나타내는 웹 페이지를 개발했습니다.",
            "",
            "처음으로 Node.js를 개발 환경과 타입스크립트를 도입했던 과제였습니다.",
        ].join("\n"),
    } satisfies ExpStoryObj,
    "20170080": {
        header: "삼성전자 개발 직군 S/W 자격 검증 시험",
        date: "2017.6",
        result: "Lv.3 Pro 등급 취득",
        story: [
            "사내에는 총 4단계의 S/W 코딩 테스트 자격증 시험이 있습니다.",
            "취득한 등급은 당시 상위 15%가 취득한 등급이었습니다.",
            "취득 인센티브로 약 100만원의 보너스를 받았습니다.",
        ].join("\n"),
    } satisfies ExpStoryObj,

    // 2021 ~
    "20210010": {
        header: "삼성전자 퇴사",
        date: "2018.7",
        story: [
            "'제조'에서 S/W 기술은 혁신성을 잠깐 보여주고 개발이 종료되는 일이 많았습니다.",
            "산업군을 IT 서비스로 변경하고 싶어 퇴사를 결정했습니다.",
        ].join("\n"),
    } satisfies ExpStoryObj,
    "20210020": {
        header: "전국 기능경기대회 학교 멘토링 진행",
        period: "2018 ~ 2021",
        summary: "멘토링 수업으로 전국대회 수상자 3명 배출",
    } satisfies ExpStoryObj,
    "20210030": {
        header: "캐나다 밴쿠버 어학연수",
        period: "2020.01 ~ 2020.06",
        result: "Lv6 Intermediate 등급 취득",
        urls: "https://vgc.ca/",
        urlText: "VGC",
    } satisfies ExpStoryObj,
    "20210040": {
        header: "이노룰스 기술연구소 입사",
        date: "2020.10",
    } satisfies ExpStoryObj,
    "20210060": {
        header: "정부 연구개발 과제",
        period: "2020.11 ~ 2021.3",
        tasks: joinCommas(
            "Electron App Win/Linux/Mac 크로스 플랫폼 개발",
            "RPA 스크립트 실행 성능 최적화",
            "TTA 인증 시험 업무 지원",
            "Windows Sandbox 활용한 가상 테스팅 환경 구축",
        ),
        tech: joinCommas(
            "Java",
            "Python",
            "Electron",
            "(Backend) Koa.js",
            "(Frontend) Vue.js",
        ),
        story: ``.trim(),
    } satisfies ExpStoryObj,
    "20210070": {
        header: "플로우차트 UI 컴포넌트 라이브러리 개발",
        period: "2021.4 ~ 2021.7",
    } satisfies ExpStoryObj,
    "20210080": {
        header: "사내 웹 SDK 배포 환경 구축",
        date: "2021.8",
        // 스토리북,,, 도커화 npm 레지스트리, Storybook
    } satisfies ExpStoryObj,
    "20210090": {
        header: "레거시 UI 스타일 리뉴얼",
        period: "2021.7 ~ 2022.3",
        // 피그마, 레거시, 협업 방법, 등등.. 프리랜서 디자이너
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
