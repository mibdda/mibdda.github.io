---
layout: default
title: 더브릿지플러스 강남역점 회의실 사용 안내서
---

<style>
  /* 홈페이지 톤앤매너를 반영한 전용 스타일 */
  .guide-wrap {
    max-width: 900px;
    margin: 0 auto;
    padding: 40px 15px 80px;
  }
  .guide-header {
    text-align: center;
    margin-bottom: 30px;
  }
  .guide-title {
    color: #003366;
    font-weight: 900;
    font-size: 2.2rem;
    letter-spacing: -0.02em;
    margin-bottom: 10px;
  }
  .location-box {
    background: #f0f7ff;
    border-left: 5px solid #003366;
    padding: 16px 20px;
    border-radius: 12px;
    font-weight: 700;
    color: #111;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.03);
  }
  .guide-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 24px;
  }
  .guide-card {
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 20px;
    padding: 26px 22px;
    box-shadow: 0 6px 16px rgba(0,0,0,0.04);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .guide-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 26px rgba(0,0,0,0.08);
  }
  .guide-card-full {
    grid-column: 1 / -1;
  }
  .step-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    background: #003366;
    color: #fff;
    border-radius: 50%;
    font-weight: 900;
    margin-right: 12px;
    font-size: 1.1rem;
  }
  .card-header-title {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 800;
    color: #111827;
    margin-bottom: 20px;
    padding-bottom: 14px;
    border-bottom: 2px solid #f1f3f5;
  }
  .guide-img-box {
    text-align: center;
    margin-bottom: 20px;
    background: #f8f9fa;
    border-radius: 14px;
    padding: 15px;
  }
  .guide-img-box img {
    max-width: 100%;
    height: auto;
    max-height: 260px;
    border-radius: 8px;
    object-fit: contain;
  }
  .guide-list {
    list-style: none;
    padding: 0;
    margin: 0;
    color: #374151;
    font-size: 1rem;
    line-height: 1.6;
  }
  .guide-list li {
    position: relative;
    padding-left: 18px;
    margin-bottom: 10px;
    word-break: keep-all;
  }
  .guide-list li::before {
    content: "\f00c";
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    position: absolute;
    left: 0;
    top: 2px;
    color: #007BFF;
    font-size: 0.9rem;
  }
  .printer-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .printer-box {
    background: #fafafa;
    border: 1px solid #eee;
    padding: 20px;
    border-radius: 16px;
  }
  .printer-box h4 {
    font-size: 1.1rem;
    font-weight: 800;
    color: #003366;
    margin-top: 0;
    margin-bottom: 14px;
  }
  .guide-alert {
    margin-top: 18px;
    padding: 14px 16px;
    border: 1px solid #ffd8a8;
    border-radius: 12px;
    background: #fff8f0;
    color: #7c3f00;
    line-height: 1.6;
    word-break: keep-all;
  }
  .guide-link {
    color: #0056b3;
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 3px;
  }
  @media (max-width: 768px) {
    .printer-grid { grid-template-columns: 1fr; }
    .guide-title { font-size: 1.8rem; }
  }
</style>

<div class="guide-wrap">

  <div class="guide-header">
    <h1 class="guide-title">강남역점 회의실 사용 안내서</h1>
    <p style="color: #6b7280; font-size: 1.1rem; margin:0;">더브릿지플러스 회의실을 더욱 편리하게 이용하는 방법</p>
  </div>

  <div class="location-box">
    <i class="fa-solid fa-map-location-dot" style="color:#ff6a00; font-size:1.4rem;"></i>
    <div>
      <span style="color:#003366; margin-right:4px;">회의실 위치 :</span>
      강남역점 <strong>3층 회의실</strong>입니다.
    </div>
  </div>

  <div class="guide-grid">

    <div class="guide-card">
      <div class="card-header-title">
        <span class="step-badge">1</span> 회의실 상태 표시
      </div>
      <div class="guide-img-box">
        <img src="https://mibdda.github.io/assets/img/md/door-sign.JPG" alt="강남역점 회의실 도어 사인">
      </div>
      <ul class="guide-list">
        <li>방에 들어가실 때 입구에 부착된 도어 사인 슬라이드를 밀어 <strong>'공실'에서 '회의중'으로</strong> 변경해 주세요.</li>
        <li>퇴실 시 다음 이용자를 위해 다시 <strong>'공실'</strong>로 원상복구 부탁드립니다.</li>
      </ul>
    </div>

    <div class="guide-card">
      <div class="card-header-title">
        <span class="step-badge">2</span> 와이파이 (Wi-Fi) 연결
      </div>
      <div class="guide-img-box">
        <img src="https://mibdda.github.io/assets/img/md/gangnam_wifi.JPG" alt="강남역점 와이파이 아이디와 비밀번호">
      </div>
      <ul class="guide-list">
        <li>위 사진에 표시된 <strong>Wi-Fi ID와 비밀번호</strong>를 확인해 직접 연결해 주세요.</li>
        <li>영문 대·소문자와 숫자를 구분하여 입력해 주세요.</li>
      </ul>
    </div>

    <div class="guide-card">
      <div class="card-header-title">
        <span class="step-badge">3</span> 전등 스위치 및 냉난방기 조절
      </div>
      <div class="guide-img-box">
        <img src="https://mibdda.github.io/assets/img/md/gangnam_swich.JPG" alt="강남역점 회의실 전등 스위치와 냉난방기 리모컨">
      </div>
      <ul class="guide-list">
        <li><strong>전등 사용:</strong> 가운데 있는 4개의 전등 스위치 중 <strong>'메인'</strong> 스위치를 켜면 회의실 전등을 사용할 수 있습니다.</li>
        <li><strong>냉난방 조절:</strong> 오른쪽에 비치된 리모컨으로 회의실과 연결된 <strong>중앙복도 에어컨</strong>을 조절해 주세요.</li>
        <li>퇴실 시 전등과 냉난방기 작동 상태를 한 번 확인해 주세요.</li>
      </ul>
    </div>

    <div class="guide-card">
      <div class="card-header-title">
        <span class="step-badge">4</span> 커피머신 이용
      </div>
      <div class="guide-img-box">
        <img src="https://mibdda.github.io/assets/img/md/gangnam_coffee.JPG" alt="강남역점 커피머신">
      </div>
      <ul class="guide-list">
        <li>원활한 기기 작동과 최적의 맛을 위해, 반드시 화면 좌측 상단의 <strong>'Espresso(에스프레소)'</strong> 버튼만 눌러서 추출해 주세요.</li>
        <li>준비해 오신 컵을 사용하시거나, 정수기 우측 종이컵을 사용하셔도 됩니다.</li>
        <li>종이컵을 사용하실 경우 커피가 튈 수 있으니 <strong>종이컵을 들어 추출구 가까이</strong> 대주세요.</li>
      </ul>
    </div>

    <div class="guide-card guide-card-full">
      <div class="card-header-title">
        <span class="step-badge">5</span> 복합기 (프린터 / 스캐너) 사용
      </div>

      <div style="display:flex; flex-wrap:wrap; gap:20px; align-items:center; margin-bottom:24px;">
        <div class="guide-img-box" style="flex:0 0 250px; margin-bottom:0;">
          <img src="https://mibdda.github.io/assets/img/md/gangnam_printer.JPG" alt="강남역점 복합기">
        </div>
        <div style="flex:1; min-width:280px;">
          <p style="font-size:1.05rem; color:#444; line-height:1.6; margin:0;">
            강남역점 복합기는 네트워크로 연결할 수 있으나, 출력 시 <strong>사용자 ID와 비밀번호</strong>가 필요합니다.<br>
            드라이버 설치와 기본 연결 방법은 아래 내용을 참고해 주세요.
          </p>
        </div>
      </div>

      <div class="printer-grid">
        <div class="printer-box">
          <h4>A. Windows 사용자</h4>
          <ul class="guide-list">
            <li>
              <a class="guide-link" href="https://www.tids.co.kr/sub/sub02_01.php?boardid=download&amp;category=&amp;etc3=C258&amp;cat_no=&amp;etc1=&amp;etc2=&amp;x=0&amp;y=0" target="_blank" rel="noopener noreferrer">
                C258 드라이버 다운로드 페이지
              </a>에 접속합니다.
            </li>
            <li>사용 중인 Windows 버전과 비트 수에 맞는 <strong>PCL 드라이버</strong>를 설치합니다.</li>
            <li>프린터 주소는 <strong>172.30.1.200</strong>으로 설정합니다.</li>
          </ul>
        </div>

        <div class="printer-box">
          <h4>B. Mac 사용자</h4>
          <ul class="guide-list">
            <li><code>시스템 설정</code> &gt; <code>프린터 및 스캐너</code> &gt; <code>프린터, 스캐너 또는 팩스 추가</code>로 이동합니다.</li>
            <li>상단의 <strong>IP</strong> 탭을 선택합니다.</li>
            <li>주소 입력란에 <strong>172.30.1.200</strong>을 입력합니다.</li>
            <li>강남역점 복합기와 호환되는 드라이버를 선택해 추가합니다.</li>
          </ul>
        </div>
      </div>

      <div class="guide-alert">
        <strong><i class="fa-solid fa-circle-exclamation"></i> 출력 요청 안내</strong><br>
        강남역점 복합기는 출력할 때 사용자 ID와 비밀번호 입력이 필요합니다.
        보안과 계정 관리를 위해 <strong>실제 출력은 현장 관리자에게 요청해 주세요.</strong>
      </div>

    </div>
  </div>
</div>
