// 페이스요가/두피마사지 셀프케어 IG 릴스 수집 데이터 (2026-08-05)
// VFR = 조회수 ÷ 팔로워 (돌파배수)

const CATEGORIES = ['페이스요가','리프팅','윤곽관리','두피마사지','괄사/구아샤','얼굴마사지','귀마사지','눈가케어','비대칭교정','순환/붓기','스킨케어','기타'];

const REELS = [
  // ── 최상위 돌파 후보 ──
  { account:'itsedonna_', followers:78000, code:'Da-fkUntpXr', views:6576000, bio:'Skincare & K-Beauty · LA', topic:'general', category:'스킨케어', title:'POV: 맑은 피부 되는 법', note:'스킨케어/K뷰티 전반 (페이스요가 특화 아님)' },
  { account:'carebyme.official', followers:1232, code:'Da76HCIBqoN', views:86000, bio:'강남 에스테틱 피부관리', topic:'adjacent', category:'순환/붓기', title:'다리 붓기 원인과 종아리 마사지법', note:'다리가 잘 붓는 이유 · 종아리마사지/림프순환' },
  { account:'piarsste_aesthetic', followers:2706, code:'DatX2EfBdQH', views:165000, bio:'박현정ㅣ10년후얼굴연구소 · 윤곽관리', topic:'onTopic', category:'윤곽관리', title:'데이트 전 5분 셀프 윤곽 마사지', note:'데이트 전 5분 셀프윤곽 마사지' },
  { account:'livvykim26', followers:168000, code:'DavMVssvjvq', views:3820000, bio:'Korean Aesthetician', topic:'onTopic', category:'비대칭교정', title:'얼굴 비대칭 교정 셀프 루틴', note:'얼굴 비대칭 교정 셀프 루틴' },
  { account:'whatislada', followers:106000, code:'DbdYEebT5Ym', views:1607000, bio:'서울 거주 · 스킨케어', topic:'general', category:'스킨케어', title:'데일리 스킨케어 루틴', note:'스킨케어 루틴 (주제 확인 필요)' },
  { account:'leeskincare7', followers:109000, code:'DbBRE2hhmyI', views:1369000, bio:'K-beauty bestie', topic:'general', category:'스킨케어', title:'K뷰티 루틴 공유', note:'K뷰티 전반' },
  { account:'dayjin_beauty', followers:36000, code:'DafxmkzBPcS', views:376000, bio:'15년차 에스테틱 원장', topic:'onTopic', category:'페이스요가', title:'얼굴 망치는 페이스요가 1가지', note:'"의외로 모르는, 얼굴 망치는 페이스요가 1가지" — 광대 페이스요가 부작용 경고' },
  { account:'faceteacher_juunq', followers:80000, code:'DYRE0U3TpLy', views:746000, bio:'박준규 · 물리치료사 · 강남 얼굴형 관리', topic:'onTopic', category:'리프팅', title:'팔자주름 펴는 법', note:'팔자주름/얼굴형 교정 콘텐츠' },
  { account:'krystallee22', followers:359000, code:'DbNreGDh6pl', views:3300000, bio:'뷰티 전반', topic:'off', category:'기타', title:'일본 향수 추천 (주제 무관)', note:'⚠️ 일본 향수 콘텐츠 — 페이스요가와 무관' },
  { account:'fitmate_jangssam', followers:187000, code:'Dbcoxjmt8Tf', views:1576000, bio:'운동메이트 장쌤 · 체형교정', topic:'adjacent', category:'순환/붓기', title:'뱃살과 순환 관리', note:'순환/체형교정 (얼굴 특화 아님)' },
  { account:'hudsonsqrd', followers:260000, code:'DbTlBWZhjyB', views:1844000, bio:'Your Korean brother · Glow up tips', topic:'general', category:'스킨케어', title:'글로우업 팁', note:'글로우업 팁 전반' },
  { account:'coco_vely1229', followers:286000, code:'DbGBaewhc6G', views:2004000, bio:'라히코 RAHEECO · K-FaceYoga Expert', topic:'onTopic', category:'페이스요가', title:'K-페이스요가 리프팅 루틴', note:'K-페이스요가 & 힐링명상 지도자, 리프팅 화장품' },
  { account:'esthetia_songdo_sh', followers:73000, code:'DanGZv7ymuy', views:495000, bio:'에스테티아송도 · 저속노화 페이스설계', topic:'onTopic', category:'윤곽관리', title:'윤곽관리·헤드스파 시술', note:'윤곽관리 · 헤드스파 · 바이오포톤 공식 센터' },
  { account:'allyoucanface', followers:853000, code:'DbJT7dboJfH', views:5360000, bio:'Face Yoga | Fascia | Posture', topic:'onTopic', category:'리프팅', title:'10분 페이스리프트 메소드', note:'10분/일 페이스리프트 메소드, 최근 릴스 다수가 고성과 (일회성 아님)' },
  { account:'liftique.app', followers:211000, code:'DadzrTmEz-1', views:1039000, bio:'Liftique · Face Fitness Exercises 앱', topic:'onTopic', category:'페이스요가', title:'AI 얼굴스캔 기반 페이스핏니스', note:'AI 얼굴스캔 기반 페이스핏니스 앱' },
  { account:'lemi_brand.co', followers:66000, code:'DbDWl7sRX5F', views:101000, bio:'Lemi · 뷰티·홈케어·동안피부', topic:'onTopic', category:'두피마사지', title:'진짜 얼굴 올라가는 두피 마사지', note:'"진짜 얼굴 올라가는 두피 마사지는 누구?!" — 두피마사지 정확히 일치' },
  { account:'skincarewithyuri', followers:1706000, code:'DG0sy21p3N9', views:3051000, bio:'Yuri Lee · Glass skin for life', topic:'onTopic', category:'괄사/구아샤', title:'Gua Sha 튜토리얼', note:'Gua Sha tutorial (괄사)' },
  { account:'kokohayashi', followers:680000, code:'DbECbQ-hxWn', views:1221000, bio:'KOKO FACE YOGA · Shark Tank·Kardashians 피처링', topic:'onTopic', category:'페이스요가', title:'FaceYoga & Mewing 루틴', note:'#FaceYoga #Mewing #FacePosture' },

  // ── 전체 계정 데이터 ──
  { account:'valeriiaveksler', followers:3034000, code:'DbGptQrMH8n', views:5014000, bio:'Face Fitness System 창시자', topic:'onTopic', category:'페이스요가', title:'Face Fitness System 소개', note:'' },
  { account:'dyou.co', followers:99000, code:'DazwFwmtGlx', views:156000, bio:'프리미엄 스킨케어 브랜드', topic:'general', category:'스킨케어', title:'스킨케어 브랜드 소개', note:'' },
  { account:'namvo', followers:534000, code:'DbL7K5ZJ7PW', views:816000, bio:'메이크업 아티스트', topic:'off', category:'기타', title:'메이크업 튜토리얼 (주제 무관)', note:'메이크업 전문' },
  { account:'lenkalul', followers:4473000, code:'DaqC7W_IEzE', views:5879000, bio:'패션/라이프스타일', topic:'off', category:'기타', title:'패션 브이로그 (주제 무관)', note:'⚠️ 패션·라이프스타일' },
  { account:'np.miranda', followers:1876000, code:'DbJDG1IRRN8', views:2313000, bio:'Nurse Practitioner · 주사시술', topic:'off', category:'기타', title:'주사시술 안내 (주제 무관)', note:'⚠️ 의료시술(보톡스/필러) — 셀프케어 아님' },
  { account:'cami_kana', followers:786000, code:'DbpyidKOTZe', views:853000, bio:'土屋可奈 · 일본 에스테틱', topic:'adjacent', category:'괄사/구아샤', title:'Gua Sha 마사지', note:'Gua Sha 하이라이트 보유' },
  { account:'dr_ales_osteopath', followers:2234000, code:'Da-NMokoeO0', views:2278000, bio:'정골의학 박사 · Dubai', topic:'onTopic', category:'리프팅', title:'정골의학 기반 얼굴 교정', note:'' },
  { account:'madymorrison', followers:1056000, code:'DbD9-7VtxRc', views:916000, bio:'요가 강사 (전신 요가 위주)', topic:'adjacent', category:'기타', title:'요가 루틴 (전신)', note:'요가 전반, 페이스요가는 일부' },
  { account:'songofskinofficial', followers:1254000, code:'DbmQ3ldvszD', views:451000, bio:'Let Your Skin Sing · K-Beauty', topic:'general', category:'스킨케어', title:'K-Beauty 스킨케어', note:'' },
  { account:'trinhgeorgg', followers:1270000, code:'DbWZI9INK9H', views:508000, bio:'Natural Beauty Community', topic:'onTopic', category:'얼굴마사지', title:'자연스러운 동안 관리', note:'' },
  { account:'anastasiabeautyfascia', followers:2769000, code:'DbkVAqaqG6g', views:1344000, bio:'Face & Self Care · Fascia', topic:'onTopic', category:'리프팅', title:'Fascia 기반 얼굴 케어', note:'' },
  { account:'blushwithme_parmita', followers:755000, code:'DawdPKMJVs5', views:444000, bio:'Face Yoga & Self-Image Coach · Miss India', topic:'onTopic', category:'페이스요가', title:'40대를 위한 페이스요가', note:'' },
  { account:'yaofacial', followers:213000, code:'Da1avmEzWAx', views:124000, bio:'Eastern Facial Anti-Aging Massage', topic:'onTopic', category:'얼굴마사지', title:'동양식 안티에이징 마사지', note:'' },
  { account:'arielyu.fit', followers:4365000, code:'DbWpJAlp7eq', views:1338000, bio:'줄넘기 피트니스', topic:'off', category:'기타', title:'줄넘기 운동 (주제 무관)', note:'⚠️ 줄넘기 피트니스 — 페이스요가와 무관' },
  { account:'taichi.aretues', followers:3277000, code:'DbOKKMJSIGo', views:835000, bio:'태극권/기공', topic:'off', category:'기타', title:'태극권/기공 (주제 무관)', note:'⚠️ 태극권·기공 명상 — 페이스요가와 무관' },
  { account:'studiobymargaritacom', followers:1562000, code:'DbkUlv4MoNs', views:150000, bio:'독일 글로우업 스튜디오', topic:'general', category:'스킨케어', title:'글로우업 스튜디오', note:'' },
  { account:'lisa.beautify', followers:825000, code:'DbGb2wNMKie', views:75000, bio:'German Beauty nerd in NYC', topic:'general', category:'스킨케어', title:'글래스스킨 루틴', note:'' },
  { account:'sweatsquadusahome', followers:1380000, code:'DbqjTHngmI5', views:84000, bio:'홈트 장비 브랜드', topic:'off', category:'기타', title:'홈트레이닝 장비 (주제 무관)', note:'⚠️ 전신 홈트레이닝 장비 — 얼굴 무관' },
  { account:'sadienardiniofficial', followers:1136000, code:'DblErTchkHy', views:93000, bio:'Face HIIT 창시자', topic:'onTopic', category:'리프팅', title:'Face HIIT 운동', note:'' },
  { account:'seojeong_19', followers:304000, code:'Dbn90amCNaH', views:31000, bio:'서정 · 페이스요가 강사 · 국제얼굴교정학회', topic:'onTopic', category:'페이스요가', title:'페이스요가 강사의 루틴', note:'최근 릴스는 저조하나 자격/전문성 있음' },
  { account:'lilyfaceyoga', followers:121000, code:'DblqPGeRgmu', views:27000, bio:'Face Yoga with Lily', topic:'onTopic', category:'페이스요가', title:'페이스요가 데일리 루틴', note:'니치 허브 계정, 현재는 저조' },
  { account:'hormone.yoga', followers:405000, code:'DbgmDzzhVcR', views:922000, bio:'Hormone Yoga for Menopause', topic:'adjacent', category:'기타', title:'갱년기 호르몬 요가', note:'갱년기 호르몬 요가' },
  { account:'takeclass.superface', followers:1019000, code:'Dbf9okoMVvY', views:2159000, bio:'Anastasiia Burdiug · Face Yoga Coach', topic:'onTopic', category:'페이스요가', title:'페이스요가 클래스', note:'' },
  { account:'danicolexx', followers:1478000, code:'DbjRBbUznGR', views:3080000, bio:'skincare & beauty', topic:'general', category:'스킨케어', title:'스킨케어 꿀팁', note:'' },
  { account:'aylenpark', followers:1693000, code:'DbHoUIKin8w', views:7629000, bio:'모녀 뷰티/여행 브이로그', topic:'general', category:'스킨케어', title:'모녀 뷰티 브이로그', note:'' },
  { account:'dermatologysurgeon', followers:2260000, code:'DayJZ2kRlni', views:4784000, bio:'Dr. Neera Nathan · 하버드 피부과 전문의', topic:'off', category:'기타', title:'피부과 전문의 팁 (주제 무관)', note:'⚠️ 의료 시술/피부과 — 셀프케어 아님' },
  { account:'alessa', followers:420000, code:'DbjtPxpNXwk', views:1212000, bio:'뷰티·요리 라이프스타일', topic:'general', category:'스킨케어', title:'뷰티·라이프스타일 브이로그', note:'' },
  { account:'coco_vely1229', followers:286000, code:'DbanPK-hUuU', views:116000, bio:'라히코 RAHEECO · K-FaceYoga Expert', topic:'onTopic', category:'리프팅', title:'99%가 모르는 팔자주름 없애는 방법', note:'Nasolabial folds — 순서가 있는 팔자주름 관리법' },
  { account:'wellness_baum', followers:2063, code:'DYWz5kDTJ-Q', views:145000, bio:'바움 동안관리 연구소 · 홈 프라이빗 헬스 에스테틱 스파', topic:'onTopic', category:'리프팅', title:'시술없이 10살 어려지는 팔자주름 관리법', note:'Nasolabial folds 2 — 신규 계정, VFR 70배 폭발돌파 (팔로워 2,063명)' },
];

REELS.forEach(r => r.id = r.code);

const TIER = v => v>=20 ? {label:'🚀🚀 폭발', cls:'t-explode'} : v>=5 ? {label:'🚀 돌파', cls:'t-break'} : v>=1.3 ? {label:'↗ 확산', cls:'t-spread'} : {label:'👥 평타', cls:'t-flat'};
const TOPIC_LABEL = {onTopic:'✅ 온토픽', adjacent:'🟡 인접', general:'⬜ 일반뷰티', off:'⚠️ 무관', custom:'✏️ 직접추가'};
