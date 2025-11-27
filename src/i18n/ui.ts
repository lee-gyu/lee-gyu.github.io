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
        jobTitle: "Web Full-stack Developer",
        name: "Lee Gyu Cheol",
        jobDesc: `
Currently, I am working as a senior developer in a web frontend development team of 5 members at a B2B IT solution company, overseeing core web frontend development.
I am interested in solving problems using AI services and fostering a collaborative culture that promotes growth and synergy among team members.
`.trim(),
        mainJob: "Main Job",
        "mainJob.0": "Designing Web Frontend Architecture",
        "mainJob.1": "Developing Common Infrastructure for Web Frontend",
        "mainJob.2": "Web Performance/Security Technology Engineering",
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
        "career.0.content": "InnoRules",
        "career.0.content.desc":
            "(R&D Center) Web F/E Core Infra/SDK Development",
        "career.1.header": "2012.10 - 2018.7",
        "career.1.content": "Samsung Electronics",
        "career.1.content.desc": [
            "(VD Division Global Operation Team) S/W Development for Overseas Factory Operation",
            "(GTC HR Group) Training and Coaching for WorldSkills",
        ].join("\n"),
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
        jobTitle: "웹 풀스택 개발자",
        name: "이규철",
        birthdate: "1994.2.19",
        jobDesc: `
현재 B2B IT 솔루션 회사에서 5명의 웹 프론트엔드 개발팀 시니어 개발자로 웹 프런트엔드 코어 개발을 총괄하고 있습니다.
AI 서비스를 이용하여 문제를 해결하고, 팀원들과 함께 성장하며 시너지를 내는 협업 문화에 관심이 많습니다.
`.trim(),
        mainJob: "주 업무",
        "mainJob.0": "웹 프런트엔드 아키텍처 설계",
        "mainJob.1": "웹 프런트엔드 공통 인프라 개발",
        "mainJob.2": "웹 성능/보안 기술 엔지니어링",
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
        "career.0.content": "이노룰스",
        "career.0.content.desc":
            "(기술연구소) 웹 프런트엔드 공통 인프라/SDK 개발",
        "career.1.header": "2012.10 - 2018.7",
        "career.1.content": "삼성전자",
        "career.1.content.desc": [
            "(VD사업부 글로벌운영팀) 해외법인 공정 운영 S/W 개발",
            "(GTC 인사그룹) 기능올림픽 국가대표 훈련 지도",
        ].join("\n"),

        experience: "경험",

        skills: "기술",
        "skills.10.label": "B/E",
        "skills.10.keywords": joinCommas("Nest.js", "RDBMS"),
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
        "skills.50.keywords": joinCommas(
            "J2EE",
            "GitLab",
            "Jenkins",
            "Docker",
            "Linux",
        ),

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
        "exp.tab.primary.desc": "주요 경험",
        "exp.tab.secondary": "보조 경험",
        "exp.tab.secondary.desc": "보조 경험",
        "exp.tab.etc": "기타",
        "exp.tab.etc.desc": "기타 경험",
    },
} as const;
