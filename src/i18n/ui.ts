import { joinCommas } from "src/utils/string";

export const languages = {
    en: "English",
    ko: "한국어",
};

export const defaultLang = "ko";

export const ui = {
    en: {
        toTop: "To Top",
        lastUpdated: "Last Updated:",
        jobTitle: "Web Frontend Developer",
        name: "Lee Gyu Cheol",
        jobDesc: `
I'm in charge of developing core web F/E packages for WebApp development.
I work with 4 junior developers and am very interested in a culture of growth together.
`.trim(),
        mainJob: "Main Job",
        "mainJob.0": "Web Frontend Architecture Design",
        "mainJob.1": "Web Frontend Core SDK Development",
        "mainJob.2": "Web Full Stack Development (F/E 80%, B/E 20%)",
        career: "Career",
        awards: "Awards",
        "awards.0.header":
            "National Skill Development/International Contribution",
        "awards.0.tags": "Ministry of Employment and Labor, 2015",
        "awards.1.header": "Prime Minister's Commendation of Vietnam",
        "awards.1.tags": "Government of Vietnam, 2015",
        "awards.2.header":
            "Awarded the Order of Industrial Service Merit (Dongtap Medal)",
        "awards.2.tags": "Government of South Korea, 2013",
        "awards.3.header": "Gold Medal(1st) in IT at WorldSkills",
        "awards.3.tags": "WorldSkills, 2013",
        "awards.4.header":
            "Silver Medal(2nd) in IT at National Skills Competition",
        "awards.4.tags": "HRDKorea, 2011",
        years: "Years",
        "career.0.header": "2020.10 - Present",
        "career.0.content": "InnoRules R&D Center Base Technology Team",
        "career.0.content.keywords": joinCommas("Web F/E Core"),
        "career.0.content.desc": "Research/Development of common technologies",
        "career.1.header": "2015.9 - 2018.7",
        "career.1.content":
            "Samsung Electronics VD Division Global Operations Team",
        "career.1.content.keywords": joinCommas(
            "Manufacturing S/W",
            "Back Office System",
        ),
        "career.1.content.desc": "Development of back office systems",
        "career.2.header": "2015.9 - 2018.7",
        "career.2.content": "Samsung Electronics WorldSkills Training Center",
        "career.2.content.keywords": joinCommas("HR", "Training Center"),
        "career.2.content.desc":
            "Training and guidance for national representatives of WorldSkills",
        experience: "Job Experiences",
        "exp.label.role": "Role",
        "exp.label.period": "Period",
        "exp.label.mainTask": "Tasks",
        "exp.label.result": "Result",
        "exp.label.tech": "Tech",

        skills: "Main Skills",
        "skills.40.label": "Lang",
        "skills.50.label": "ETC",
    },
    ko: {
        toTop: "맨 위로",
        lastUpdated: "최근 업데이트:",
        jobTitle: "웹 프론트엔드 개발자",
        name: "이규철",
        birthdate: "1994.2.19",
        jobDesc: `
현재 B2B IT 솔루션 회사에서 웹 프론트엔드 코어 패키지를 개발하고 있습니다.
4명의 개발자와 1명의 디자이너로 구성된 팀에서 협업하며,
최근에는 LLM 기반 AI 기능 개발 프로젝트에 참여하고 있습니다.
함께 성장하며 시너지를 내는 업무 문화에 관심이 많습니다.
`.trim(),
        mainJob: "주 업무",
        "mainJob.0": "웹 애플리케이션 구조 설계",
        "mainJob.1": "웹 프론트엔드 코어 SDK 개발",
        "mainJob.2": "웹 풀스택 개발 (F/E 80%, B/E 20%)",
        career: "경력",
        awards: "수상",
        "awards.0.header": "기능발전/국위선양 장관 표창",
        "awards.0.tags": "고용노동부, 2015",
        "awards.1.header": "베트남 국가 총리 표창",
        "awards.1.tags": "베트남 정부, 2015",
        "awards.2.header": "동탑산업훈장 대통령 표창",
        "awards.2.tags": "대한민국 정부, 2013",
        "awards.3.header": "국제기능올림픽 정보기술 직종 1위 금메달",
        "awards.3.tags": "WorldSkills, 2013",
        "awards.4.header": "전국기능경기대회 정보기술 직종 2위 은메달",
        "awards.4.tags": "한국산업인력공단, 2011",
        years: "년",
        "career.0.header": "2020.10 - 현재",
        "career.0.content": "이노룰스 기술연구소 기반기술팀",
        "career.0.content.keywords": joinCommas("웹 F/E 코어 개발"),
        "career.0.content.desc": "제품 개발에 핵심이 되는 공통 기술 연구/개발",
        "career.1.header": "2015.9 - 2018.7",
        "career.1.content": "삼성전자 VD사업부 글로벌운영팀",
        "career.1.content.keywords": joinCommas("웹 개발", "공정 S/W 개발"),
        "career.1.content.desc": "글로벌 해외법인 공정 운영에 필요한 S/W 개발",
        "career.2.header": "2012.10 - 2015.9",
        "career.2.content": "삼성전자 기능올림픽 훈련센터",
        "career.2.content.keywords": joinCommas("인사 업무", "훈련 지도"),
        "career.2.content.desc":
            "기술 인재 채용과 기능올림픽 국가대표 훈련 지도",
        experience: "경험",
        "experience.print-desc": "※ pdf에서는 불필요한 경험은 생략되었습니다.",
        "experience.print-link": `(${DEFAULT_BASE_URL} 웹 사이트에서 전체 내용을 확인할 수 있습니다.)`,

        skills: "기술",
        "skills.10.label": "B/E",
        "skills.10.keywords": joinCommas("Nest.js"),
        "skills.20.label": "F/E",
        "skills.20.keywords": joinCommas(
            "Vite",
            "Next.js",
            "Astro",
            "React",
            "SolidJS",
        ),
        "skills.40.label": "Lang",
        "skills.40.keywords": joinCommas("JavaScript", "TypeScript", "Java"),
        "skills.50.label": "ETC",
        "skills.50.keywords": joinCommas("J2EE", "GitLab", "Jenkins", "Docker"),

        "exp.label.date": "일자",
        "exp.label.team": "팀",
        "exp.label.role": "역할",
        "exp.label.period": "기간",
        "exp.label.year": "연도",
        "exp.label.mainTask": "주 작업",
        "exp.label.result": "성과",
        "exp.label.tech": "사용 기술",
        "exp.label.tasks": "업무",
        "exp.label.feat": "개발 기능",
        "exp.label.urls": "URL",
        "exp.label.background": "배경",
        "exp.label.issue": "주요 이슈",

        "exp.tab.primary": "주요 경험",
        "exp.tab.primary.desc": "이노룰스 기술연구소 소속 주요 경험",
        "exp.tab.secondary": "보조 경험",
        "exp.tab.secondary.desc": "이노룰스 기술연구소 소속 보조 경험",
        "exp.tab.etc": "기타",
        "exp.tab.etc.desc": "삼성전자 소속 경험 / 퇴직 후 활동",
    },
} as const;
