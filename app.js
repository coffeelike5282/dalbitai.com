/**
 * 달빛 연구소 (Moonlight Lab) - dalbitai.com
 * Core Interactive Scripts
 */

// Detail Data Dictionary for 6 SaaS Solutions
const SERVICE_DETAILS = {
  threads: {
    title: '스레드 AI 자동화 SaaS (PostEverywhere AI)',
    sub: 'Meta 공식 Graph API 기반 마케팅 무한 루프 솔루션',
    body: `
      <p style="margin-bottom: 12px;"><strong>[주요 기능 & 핵심 가치]</strong></p>
      <ul style="padding-left: 20px; margin-bottom: 16px;">
        <li>Meta 공식 Graph API를 완벽 연동하여 계정 정지 위험 없는 안전한 자동화</li>
        <li>자체 개발 알고리즘 기반 바이럴 스레드 원고 실시간 생성 및 예약 발행</li>
        <li>본문 게재 직후 쿠팡 파트너스/자사몰 링크 대댓글 자동 부착 파이프라인</li>
        <li>600명 팔로워 계정에서 직접 검증된 실전 전환율 보장</li>
      </ul>
      <p style="color: #94A3B8; font-size: 0.875rem;">상태: 현재 Meta API 연동 및 정식 런칭 준비 중 (오픈 준비 중)</p>
    `,
    actionText: '🔒 오픈 준비 중',
    actionDisabled: true
  },
  tarot: {
    title: 'AI 타로 인터랙티브 웹 (Tarot AI)',
    sub: '인공지능 기반 맞춤형 타로 리딩 & 감성 심리 상담',
    body: `
      <p style="margin-bottom: 12px;"><strong>[주요 기능 & 핵심 가치]</strong></p>
      <ul style="padding-left: 20px; margin-bottom: 16px;">
        <li>유니버설 웨이트 78장 타로 카드의 상징 체계와 LLM 심리 분석 모델 결합</li>
        <li>연애운, 재물운, 사업운, 오늘의 직관 리딩 등 다각도 스프레드 지원</li>
        <li>단순 운세를 넘어 자영업자와 고민 많은 현대인을 위한 따뜻한 감성 공감 대화</li>
      </ul>
      <p style="color: #94A3B8; font-size: 0.875rem;">운영 주소: https://tarot.coffeelike5282.com/</p>
    `,
    actionText: '웹사이트 방문하기',
    actionUrl: 'https://tarot.coffeelike5282.com/'
  },
  grind: {
    title: '커피 원두 분쇄도 측정 AI (Grind Curation)',
    sub: '컴퓨터 비전 기술을 통한 원두 입도 분석 및 브루잉 큐레이션',
    body: `
      <p style="margin-bottom: 12px;"><strong>[주요 기능 & 핵심 가치]</strong></p>
      <ul style="padding-left: 20px; margin-bottom: 16px;">
        <li>스마트폰 카메라로 원두 가루를 촬영하면 마이크론(μm) 단위 입도 추정</li>
        <li>에스프레소, 모카포트, 핸드드립, 프렌치프레스 최적 분쇄도 가이드 매칭</li>
        <li>6년간의 스페셜티 카페 추출 데이터를 알고리즘으로 전환하여 일정한 커피 맛 유지</li>
      </ul>
      <p style="color: #94A3B8; font-size: 0.875rem;">운영 주소: https://grind.coffeelike5282.com/</p>
    `,
    actionText: '웹사이트 방문하기',
    actionUrl: 'https://grind.coffeelike5282.com/'
  },
  essence: {
    title: '에센스커피 상업용 추출 솔루션 (Essence Coffee B2B)',
    sub: 'F&B 매장 원가 절감과 고농축 풍미 보존을 위한 마스터 레시피',
    body: `
      <p style="margin-bottom: 12px;"><strong>[주요 기능 & 핵심 가치]</strong></p>
      <ul style="padding-left: 20px; margin-bottom: 16px;">
        <li>매장에서 고가의 머신 없이도 대용량 고농축 커피 베이스를 안정적으로 추출</li>
        <li>원두 원가 최대 40% 절감 및 장기 보관에도 산패 없는 플레이버 보존 기술</li>
        <li>카페 및 외식업체 점주를 위한 1:1 맞춤형 추출 매뉴얼 및 장비 셋업 가이드</li>
      </ul>
      <p style="color: #94A3B8; font-size: 0.875rem;">운영 주소: https://b2b.coffeelike5282.com/</p>
    `,
    actionText: '웹사이트 방문하기',
    actionUrl: 'https://b2b.coffeelike5282.com/'
  },
  delivery: {
    title: '위치기반 배달기사 솔루션 (Delivery Driver Loc)',
    sub: '배달 라이더의 동선 최적화 및 스마트 배차 지원 시스템',
    body: `
      <p style="margin-bottom: 12px;"><strong>[주요 기능 & 핵심 가치]</strong></p>
      <ul style="padding-left: 20px; margin-bottom: 16px;">
        <li>GPS 실시간 위치 기반 주변 주문 밀집도 및 피크타임 동선 시각화</li>
        <li>배달 완료 후 빈 차로 돌아오는 회송 시간을 최소화하는 루트 최적화</li>
        <li>현장 배달 기사들의 피로도 경감과 시급 극대화를 위한 스마트 보조 도구</li>
      </ul>
      <p style="color: #94A3B8; font-size: 0.875rem;">운영 주소: https://delivery.coffeelike5282.com/</p>
    `,
    actionText: '웹사이트 방문하기',
    actionUrl: 'https://delivery.coffeelike5282.com/'
  },
  calldrive: {
    title: '위치기반 대리기사 솔루션 (CallDrive AI)',
    sub: '야간 현장 경험이 녹아있는 콜 대기 위치 최적화 및 이동 지원',
    body: `
      <p style="margin-bottom: 12px;"><strong>[주요 기능 & 핵심 가치]</strong></p>
      <ul style="padding-left: 20px; margin-bottom: 16px;">
        <li>심야 시간대별 번화가 및 아파트 단지 간 콜 발생 확률 히트맵 분석</li>
        <li>막차 시간 이후 기사들의 첫차 복귀 동선과 맞춤형 콜 연계 알고리즘</li>
        <li>직접 밤거리 현장을 뛰며 대기 시간의 고통을 겪어본 개발자가 설계한 생존 앱</li>
      </ul>
      <p style="color: #94A3B8; font-size: 0.875rem;">운영 주소: https://calldrive.coffeelike5282.com/</p>
    `,
    actionText: '웹사이트 방문하기',
    actionUrl: 'https://calldrive.coffeelike5282.com/'
  }
};

// Header Scroll Event
window.addEventListener('scroll', () => {
  const header = document.getElementById('siteHeader');
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Modal Management
function openApplyModal(serviceName) {
  const modal = document.getElementById('applyModal');
  const select = document.getElementById('appliedService');
  const title = document.getElementById('modalServiceTitle');
  
  if (serviceName) {
    title.innerText = `[${serviceName}] 신청 및 문의`;
    if (select) {
      for (let option of select.options) {
        if (option.value === serviceName) {
          select.value = serviceName;
          break;
        }
      }
    }
  } else {
    title.innerText = '솔루션 이용 및 제휴 신청';
  }
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeApplyModal() {
  const modal = document.getElementById('applyModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function openDetailModal(key) {
  const item = SERVICE_DETAILS[key];
  if (!item) return;

  const modal = document.getElementById('detailModal');
  document.getElementById('detailModalTitle').innerText = item.title;
  document.getElementById('detailModalSubtitle').innerText = item.sub;
  document.getElementById('detailModalBody').innerHTML = item.body;

  const actionBtn = document.getElementById('detailModalActionBtn');
  actionBtn.innerText = item.actionText;
  
  if (item.actionDisabled) {
    actionBtn.disabled = true;
    actionBtn.style.opacity = '0.55';
    actionBtn.style.cursor = 'not-allowed';
    actionBtn.style.pointerEvents = 'none';
    actionBtn.onclick = null;
  } else {
    actionBtn.disabled = false;
    actionBtn.style.opacity = '';
    actionBtn.style.cursor = '';
    actionBtn.style.pointerEvents = '';
    actionBtn.onclick = () => {
      closeDetailModal();
      if (item.actionUrl) {
        window.open(item.actionUrl, '_blank');
      } else {
        openApplyModal(item.actionValue || item.title);
      }
    };
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeDetailModal() {
  const modal = document.getElementById('detailModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Close Modals on clicking outside or ESC
window.addEventListener('click', (e) => {
  const applyModal = document.getElementById('applyModal');
  const detailModal = document.getElementById('detailModal');
  if (e.target === applyModal) closeApplyModal();
  if (e.target === detailModal) closeDetailModal();
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeApplyModal();
    closeDetailModal();
  }
});

// Form Submission Handling
function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('applicantName').value.trim();
  const contact = document.getElementById('applicantContact').value.trim();
  const service = document.getElementById('appliedService').value;
  const message = document.getElementById('applicantMessage').value.trim();

  // Save to localStorage simulation
  const submission = {
    name,
    contact,
    service,
    message,
    submittedAt: new Date().toISOString()
  };

  try {
    const existing = JSON.parse(localStorage.getItem('dalbitai_leads') || '[]');
    existing.push(submission);
    localStorage.setItem('dalbitai_leads', JSON.stringify(existing));
  } catch (err) {
    console.error('Storage error:', err);
  }

  closeApplyModal();
  e.target.reset();
  showToast(`감사합니다 ${name}님! [${service}] 신청이 접수되었습니다. 곧 연락드리겠습니다.`);
}

// Toast Function
function showToast(msg) {
  const toast = document.getElementById('toastNotice');
  const toastMsg = document.getElementById('toastMessage');
  toastMsg.innerText = msg;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

// Prevent selection on drag / context menu for non-inputs
document.addEventListener('selectstart', (e) => {
  const tag = e.target.tagName ? e.target.tagName.toLowerCase() : '';
  if (tag !== 'input' && tag !== 'textarea' && !e.target.isContentEditable) {
    e.preventDefault();
  }
});

// Expose globals for inline attributes
window.openApplyModal = openApplyModal;
window.closeApplyModal = closeApplyModal;
window.openDetailModal = openDetailModal;
window.closeDetailModal = closeDetailModal;
window.handleFormSubmit = handleFormSubmit;
window.showToast = showToast;
