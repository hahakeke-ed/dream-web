export const site = {
  name: "드림심리상담센터",
  tagline: "전문심리상담기관",
  phone: "053-759-1282",
  smsPhone: "01084969389",
  kakaoUrl: "https://pf.kakao.com/_NxbxnRn",
  address: "대구광역시 수성구 동대구로346 범어서한포레스트 오피스텔, 범어역 (2호선) 11번 출구",
  naverMapUrl:
    "https://map.naver.com/v5/search/%EB%93%9C%EB%A6%BC%EC%8B%AC%EB%A6%AC%EC%83%81%EB%8B%B4%EC%84%BC%ED%84%B0",
  heroImage:
    "https://readdy.ai/api/search-image?query=Professional%20psychology%20counseling%20center%20interior%20with%20comfortable%20seating%20area%2C%20warm%20lighting%20with%20soft%20neutral%20tones%2C%20therapy%20office%20with%20calming%20ambiance%20for%20mental%20health%20services%2C%20modern%20design%20with%20comfortable%20chairs%20and%20plants%2C%20peaceful%20atmosphere%20with%20warm%20natural%20lighting&width=1200&height=600&seq=main-hero-v26&orientation=landscape",
};

export const navItems = [
  {
    id: "home",
    label: "홈",
    href: "/",
    description: "드림심리상담센터 메인 페이지입니다. 전체적인 서비스 소개와 상담 프로그램을 확인할 수 있습니다.",
  },
  {
    id: "counseling",
    label: "심리상담",
    href: "/#services",
    description: "심리상담전문가(한국심리학회 상담심리사1급)와 1:1 심리상담을 통해 심리적 적응과 성장을 돕습니다.",
  },
  {
    id: "national-support",
    label: "정신건강심리상담바우처",
    href: "/#voucher",
    description: "우울, 불안 등 정서적 어려움을 겪는 국민들에게 전문적인 심리상담 서비스를 제공하는 정부 사업입니다. 학교나 정신건강복지센터, 청소년상담복지센터, 병의원 의뢰서 등을 통해신청할 수 있습니다.",
  },
  {
    id: "eap",
    label: "EAP 기업심리상담",
    href: "/#expertise",
    description: "본 기관과 연계된 기업체 임직원 및 가족에 대한 심리상담 서비스를 제공합니다.",
  },
];

export const services = [
  {
    slug: "individual",
    title: "개인상담",
    eyebrow: "Individual Counseling",
    summary: "개인적인 고민과 심리적 어려움을 전문적으로 상담합니다",
    points: ["우울, 불안 상담", "스트레스 관리", "자존감 향상", "대인관계 개선"],
    accent: "blue",
  },
  {
    slug: "couple",
    title: "부부상담",
    eyebrow: "Couple Counseling",
    summary: "더 건강하고 행복한 부부 관계를 위한 전문 상담입니다",
    points: ["의사소통 개선", "갈등 해결", "친밀감 회복", "신뢰 구축"],
    accent: "rose",
  },
  {
    slug: "family",
    title: "가족상담",
    eyebrow: "Family Counseling",
    summary: "화목한 가정을 위한 가족 구성원 간의 관계 개선 상담",
    points: ["가족 갈등", "의사소통 문제", "자녀 양육 상담", "가족 유대감 강화"],
    accent: "green",
  },
  {
    slug: "child",
    title: "아동·청소년상담",
    eyebrow: "Child & Adolescent",
    summary: "성장기 아이들의 건강한 발달을 위한 전문상담",
    points: ["놀이치료", "학습 문제", "행동 수정", "정서 발달"],
    accent: "amber",
  },
];

export const credentials = [
  "한국심리학회 상담심리사 1급·2급",
  "국가 청소년 상담사 1급",
  "정신건강심리상담바우처 서비스 제공기관",
];

export const promises = [
  {
    title: "예약제 운영",
    text: "충분한 상담 시간을 확보하기 위해 사전 예약제로 운영합니다.",
  },
  {
    title: "비밀보장 원칙",
    text: "상담 내용은 법적 예외 상황을 제외하고 외부에 공개하지 않습니다.",
  },
  {
    title: "독립된 상담 공간",
    text: "방문자의 사생활이 보호되도록 조용하고 분리된 공간에서 상담합니다.",
  },
];

export const processSteps = [
  {
    title: "문의 및 예약",
    text: "문자 예약으로 상담 가능 시간과 상담 유형을 확인합니다.",
  },
  {
    title: "초기 면담",
    text: "현재 어려움과 상담 목표를 함께 정리하고 진행 방향을 안내합니다.",
  },
  {
    title: "상담 진행",
    text: "개인, 부부, 가족, 아동·청소년 특성에 맞춰 상담을 이어갑니다.",
  },
  {
    title: "정리와 계획",
    text: "상담에서 확인한 변화와 이후 생활에서 이어갈 방향을 정리합니다.",
  },
];

export const serviceDetails = {
  individual: {
    title: "개인상담",
    subtitle: "혼자 견디던 마음의 문제를 안전한 관계 안에서 함께 살펴봅니다.",
    intro:
      "개인상담은 상담자와 내담자가 일대일로 만나 정서적 어려움, 관계 문제, 자기이해의 과정을 다루는 전문 상담입니다. 문제를 빠르게 판단하기보다 현재의 삶에서 반복되는 마음의 패턴을 차분히 이해하는 데 초점을 둡니다.",
    sections: [
      {
        title: "주요 상담 영역",
        items: ["우울감과 무기력", "불안과 긴장", "대인관계 어려움", "자존감과 자기이해"],
      },
      {
        title: "상담 방향",
        items: ["초기 면담을 통한 목표 설정", "정서와 사고 패턴 탐색", "일상에서 적용 가능한 변화 계획"],
      },
    ],
  },
  couple: {
    title: "부부상담",
    subtitle: "반복되는 갈등의 구조를 이해하고 다시 대화할 수 있는 길을 찾습니다.",
    intro:
      "부부상담은 어느 한쪽을 판단하는 자리가 아니라, 두 사람이 겪는 관계의 어려움을 안전한 대화 구조 안에서 함께 살펴보는 과정입니다. 감정의 악순환을 줄이고 서로의 욕구와 상처를 이해하도록 돕습니다.",
    sections: [
      {
        title: "주요 상담 영역",
        items: ["의사소통 문제", "반복되는 갈등", "친밀감 저하", "신뢰 회복과 관계 재정립"],
      },
      {
        title: "상담 방향",
        items: ["갈등 패턴 확인", "서로의 관점 이해", "현실적인 합의와 회복 계획"],
      },
    ],
  },
  family: {
    title: "가족상담",
    subtitle: "가족 구성원 각자의 어려움을 관계의 흐름 안에서 이해합니다.",
    intro:
      "가족상담은 개인의 문제만 따로 떼어 보기보다 가족 안의 역할, 경계, 소통 방식, 세대 차이를 함께 살펴봅니다. 필요한 경우 전체 가족 또는 일부 가족 구성원이 참여할 수 있습니다.",
    sections: [
      {
        title: "주요 상담 영역",
        items: ["부모-자녀 갈등", "세대 간 소통", "가족 역할과 경계", "양육 방식 조율"],
      },
      {
        title: "상담 방향",
        items: ["가족 구조와 상호작용 평가", "핵심 갈등 정리", "실천 가능한 가족 내 변화 계획"],
      },
    ],
  },
  child: {
    title: "아동·청소년상담",
    subtitle: "성장기 아이의 마음을 발달 단계에 맞게 이해하고 돕습니다.",
    intro:
      "아동·청소년상담은 아이의 정서, 행동, 학교생활, 또래 관계, 가족 관계를 발달적 관점에서 살펴봅니다. 필요에 따라 놀이, 표현 활동, 대화 상담, 부모 상담을 함께 진행합니다.",
    sections: [
      {
        title: "주요 상담 영역",
        items: ["학교 적응", "정서 조절", "또래 관계", "학습과 진로 고민"],
      },
      {
        title: "상담 방향",
        items: ["부모 면담과 아동 평가", "아이에게 맞는 상담 방식 선택", "가정에서의 지원 방향 안내"],
      },
    ],
  },
} as const;
