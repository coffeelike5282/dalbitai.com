# 달빛 연구소 (Moonlight Lab) - DESIGN.md
> **프로젝트**: 달빛 연구소 공식 포털 및 마이크로 SaaS 랜딩페이지 (`dalbitai.com`)  
> **Stitch MCP 프로젝트 ID**: `projects/3749678419509937722`  
> **디자인 테마**: Celestial Moonlight Tech (밤의 치열함과 달빛의 희망)  
> **작성자**: 안 본부장 (AI 전략 본부장)

---

## 1. 디자인 비전 & 핵심 컨셉 (Design Vision & Concept)

- **핵심 슬로건**: "밤의 치열함에서 태어난 실전 AI 자동화 연구소"
- **컨셉 정의**: **Celestial Moonlight Tech (노을과 심야, 새벽의 달빛 아래서 단련된 럭셔리 다크 테크)**
- **감성적 가치**:
  1. **진정성 (Authenticity)**: 6년간 카페 운영 후 차가운 밤거리 현장에서 대리운전 콜을 대기하며 완성한 생존형 스토리텔링.
  2. **실용성 (Pragmatism)**: 현장 자영업자와 N잡러의 반복 업무를 클릭 한 번으로 끝내는 100% 현장 검증 SaaS.
  3. **지속가능성 (Sustainability)**: 일회성 유행이 아닌, 자동으로 돌아가는 AI 파이프라인.

---

## 2. 컬러 시스템 (Color Palette & Tokens)

| 토큰명 | HEX / RGBA | 역할 및 브랜드 상징성 |
| :--- | :--- | :--- |
| **Canvas Base** | `#080D1A` ~ `#0B132B` | 밤의 깊이감, B2B 신뢰감, 심야의 고요한 작업실 |
| **Surface Dark (Canvas Low)** | `#0A122A` | 메인 캔버스 배경 |
| **Surface Card (Deep Slate)** | `#1C2541` / `rgba(28, 37, 65, 0.65)` | 글래스모피즘 카드, 위젯 컨테이너 |
| **Surface Border** | `rgba(255, 255, 255, 0.08)` | 섬세한 헤어라인 테두리 |
| **Primary (Moonlight Gold)** | `#F4D35E` ~ `#EE9B00` | 달빛의 희망, 핵심 전환 CTA 버튼, 주요 하이라이트 |
| **Secondary (Astral Cyan)** | `#48CAE4` ~ `#58D6F1` | AI 신경망, 실시간 데이터 파이프라인, 상태 뱃지 |
| **Text Primary (Moonlight Tint)** | `#F8FAFC` | 100% 명확한 가독성의 백색 텍스트 |
| **Text Secondary (Starlight Slate)**| `#94A3B8` | 서브 카피, 설명문, 기술 메타데이터 |
| **Text Muted** | `#64748B` | 각주, 타임스탬프, 부가 정보 |

---

## 3. 타이포그래피 (Typography System)

1. **Headlines**: `Space Grotesk`, `Pretendard`, sans-serif (기하학적이며 단단하고 세련된 테크 서체)
2. **Body**: `Pretendard`, `Inter`, -apple-system (한국어 최적화 가독성 및 장문 서사 전달)
3. **Monospace (Telemetry & Status)**: `JetBrains Mono` (API 엔드포인트, 실시간 지표, 토큰 카운터)

### 계층 구조 (Hierarchy)
- **Hero Display**: `52px ~ 64px` (Bold 800, line-height 1.15, letter-spacing -0.03em)
- **Section Heading (H2)**: `32px ~ 40px` (Bold 700, line-height 1.25)
- **Card Title (H3)**: `20px ~ 24px` (Semi-bold 600, line-height 1.35)
- **Body Large**: `18px` (Regular 400, line-height 1.6)
- **Body Medium**: `15px ~ 16px` (Regular 400, line-height 1.55)
- **Technical Badges**: `11px ~ 12px` (Medium 500, JetBrains Mono, uppercase)

---

## 4. 엘리베이션 & 심도 (Elevation & Depth)

- **Level 0 (Canvas Void)**: `#080D1A` 깊은 방사형 우주 그라디언트 + 배경 성운 노이즈
- **Level 1 (Glow Backdrop)**:
  - **Lunar Gold Flare**: `box-shadow: 0 0 35px -5px rgba(244, 211, 94, 0.35)`
  - **Astral Cyan Glow**: `box-shadow: 0 0 45px -10px rgba(72, 202, 228, 0.25)`
- **Level 2 (Glassmorphism Cards)**:
  - `background: rgba(28, 37, 65, 0.65)`
  - `backdrop-filter: blur(20px)`
  - `border: 1px solid rgba(255, 255, 255, 0.08)`
  - `box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5)`
- **Level 3 (Modal / Floating Nav)**:
  - `background: rgba(11, 19, 43, 0.88)`
  - `backdrop-filter: blur(24px)`
  - `border: 1px solid rgba(244, 211, 94, 0.25)`

---

## 5. UI 컴포넌트 규격 (Components Guide)

### 1) 버튼 (Buttons)
- **CTA Primary**:
  - 배경: `linear-gradient(135deg, #F4D35E 0%, #EE9B00 100%)`
  - 텍스트: `#0B132B` (Bold 700)
  - 호버: 골드 글로우 증폭 (`box-shadow: 0 0 25px rgba(244, 211, 94, 0.5)`) 및 미세 확대 (scale 1.02)
- **CTA Secondary (Ghost)**:
  - 배경: `rgba(28, 37, 65, 0.6)`
  - 텍스트: `#F8FAFC`
  - 테두리: `1px solid rgba(255, 255, 255, 0.15)`
  - 호버: 사이언 테두리 발광 (`rgba(72, 202, 228, 0.6)`)

### 2) 서비스 카드 (Service Card)
- 6대 핵심 자체 서비스별 고유 아이콘 및 라이브 상태 뱃지 (`운영 중 / 이용 신청 가능`)
- 상단 1px 골드 림 악센트
- 원클릭 체험하기 및 상세 안내 모달 연동

### 3) 반응형 브레이크포인트 (Breakpoints)
- Desktop: `1024px ~ 1400px` (12열 그리드)
- Tablet: `768px ~ 1023px` (8열 그리드)
- Mobile: `320px ~ 767px` (4열 단일 스택 카드형 레이아웃)
