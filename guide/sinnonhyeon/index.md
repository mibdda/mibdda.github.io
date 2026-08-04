---
layout: default
title: 더브릿지플러스 회의실 사용 안내서
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
    color: #003366; /* 브랜드 네이비 */
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
    grid-column: 1 / -1; /* 복합기는 길어서 가로 전체 차지 */
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
    max-height: 200px;
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
    content: "\f00c"; /* FontAwesome 체크 아이콘 */
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    position: absolute;
    left: 0;
    top: 2px;
    color: #007BFF;
    font-size: 0.9rem;
  }
  /* 복합기 내부 레이아웃 */
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
  @media (max-width: 768px) {
    .printer-grid { grid-template-columns: 1fr; }
    .guide-title { font-size: 1.8rem; }
  }
</style>

<div class="guide-wrap">
  
  <div class="guide-header">
    <h1 class="guide-title">회의실 사용 안내서</h1>
    <p style="color: #6b7280; font-size: 1.1rem; margin:0;">더브릿지플러스 회의실을 더욱 편리하게 이용하는 방법</p>
  </div>

  <div class="location-box">
    <i class="fa-solid fa-map-location-dot" style="color:#ff6a00; font-size:1.4rem;"></i>
    <div>
      <span style="color:#003366; margin-right:4px;">회의실 위치 :</span> 들어오신 입구 <strong>바로 앞에 있는 방</strong>입니다.
    </div>
  </div>

  <div class="guide-grid">
    
    <div class="guide-card">
      <div class="card-header-title">
        <span class="step-badge">1</span> 회의실 상태 표시
      </div>
      <div class="guide-img-box">
        <img src="https://mibdda.github.io/assets/img/md/door-sign.JPG" alt="회의실 도어 사인">
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
        <img src="https://mibdda.github.io/assets/img/md/wifi.JPG" alt="와이파이 QR코드">
      </div>
      <ul class="guide-list">
        <li>스마트폰 카메라로 위 사진의 <strong>QR 코드</strong>를 스캔하시면 비밀번호 입력 없이 즉시 연결됩니다.</li>
      </ul>
    </div>

    <div class="guide-card">
      <div class="card-header-title">
        <span class="step-badge">3</span> 화면 공유 및 냉난방
      </div>
      <div style="display:flex; gap:12px; margin-bottom:20px;">
        <div class="guide-img-box" style="flex:1; margin-bottom:0; padding:10px;">
          <img src="https://mibdda.github.io/assets/img/md/hdmi.JPG" alt="HDMI 케이블">
        </div>
        <div class="guide-img-box" style="flex:1; margin-bottom:0; padding:10px;">
          <img src="https://mibdda.github.io/assets/img/md/remote.JPG" alt="리모컨 2종">
        </div>
      </div>
      <ul class="guide-list">
        <li><strong>화면 공유:</strong> 테이블의 빨간색 HDMI 케이블을 노트북에 연결하면 TV 화면이 즉시 출력됩니다.</li>
        <li><strong>검은색 리모컨 (BUYRUN):</strong> TV 모니터 전원 및 외부 입력 설정용</li>
        <li><strong>흰색 리모컨 (Carrier):</strong> 회의실 에어컨/냉난방기 조절용</li>
      </ul>
    </div>

    <div class="guide-card">
      <div class="card-header-title">
        <span class="step-badge">4</span> 커피머신 이용
      </div>
      <div class="guide-img-box">
        <img src="https://mibdda.github.io/assets/img/md/coffee.JPG" alt="커피머신 에스프레소 버튼">
      </div>
      <ul class="guide-list">
        <li>원활한 기기 작동과 최적의 맛을 위해, 반드시 화면 좌측 상단의 <strong>'Espresso(에스프레소)'</strong> 버튼만 눌러서 추출해 주세요.</li>
        <li>준비 해오신 컵을 사용하시거나, 정수기 우측 종이컵을 사용하셔도 됩니다.</li>
        <li>단, 종이컵을 사용하실 경우 커피가 튈 수 있으니 <strong>종이컵을 들어서 추출구 가까이</strong> 대주세요.</li>
      </ul>
    </div>

    <div class="guide-card guide-card-full">
      <div class="card-header-title">
        <span class="step-badge">5</span> 복합기 (프린터 / 스캐너) 사용
      </div>
      
      <div style="display:flex; flex-wrap:wrap; gap:20px; align-items:center; margin-bottom:24px;">
        <div class="guide-img-box" style="flex:0 0 250px; margin-bottom:0;">
          <img src="https://mibdda.github.io/assets/img/md/printer.JPG" alt="복합기 USB 포트">
        </div>
        <div style="flex:1; min-width:280px;">
          <p style="font-size:1.05rem; color:#444; line-height:1.6; margin:0;">
            회의실 이용 중 출력이나 스캔이 필요하신 경우, 복합기 우측면의 <strong>USB 포트</strong>를 활용하시면 편리합니다.<br>
            파일 형식에 따라 아래 방법을 참고해 주세요.
          </p>
        </div>
      </div>

      <div class="printer-grid">
        <div class="printer-box">
          <h4>A. USB 다이렉트 사용 <span style="font-size:0.9rem; color:#6b7280; font-weight:normal;">(PDF, JPG, 스캔)</span></h4>
          <ul class="guide-list">
            <li><strong>스캔:</strong> 스캔할 문서를 올려두고 USB를 꽂으면, 화면에서 USB를 인식해 파일이 다이렉트로 저장됩니다.</li>
            <li><strong>인쇄:</strong> USB 내에 있는 PDF나 이미지(JPG) 파일은 화면에서 바로 선택해 출력할 수 있습니다.</li>
          </ul>
        </div>
        
        <div class="printer-box">
          <h4>B. 노트북 직접 연결 <span style="font-size:0.9rem; color:#6b7280; font-weight:normal;">(HWP, PPT 등)</span></h4>
          <p style="font-size:0.95rem; color:#4b5563; margin-bottom:14px;">한글(.hwp), 파워포인트(.ppt) 등의 문서는 기기에서 바로 인식이 어려울 수 있으니 운영체제에 맞춰 연결해 주세요.</p>
          
          <div style="background:#fff; border-radius:8px; padding:12px 14px; margin-bottom:12px; border:1px solid #e5e7eb;">
            <strong style="display:block; color:#111; margin-bottom:6px;"><i class="fa-brands fa-windows" style="color:#0078D6;"></i> Windows 사용자</strong>
            <ul class="guide-list" style="font-size:0.9rem;">
              <li>신도리코 다운로드 센터 접속 (sindoh.com)</li>
              <li>제품 검색창에 <strong>D410</strong> 검색</li>
              <li>사용 중인 OS에 맞는 <strong>통합 드라이버</strong> 설치 후 인쇄</li>
            </ul>
          </div>

          <div style="background:#fff; border-radius:8px; padding:12px 14px; border:1px solid #e5e7eb;">
            <strong style="display:block; color:#111; margin-bottom:6px;"><i class="fa-brands fa-apple" style="color:#555;"></i> Mac 사용자 (IP 설정)</strong>
            <ul class="guide-list" style="font-size:0.9rem;">
              <li><code>시스템 설정</code> > <code>프린터 및 스캐너</code> > <code>추가</code></li>
              <li>상단의 지구본 모양 <strong>'IP' 탭</strong> 선택</li>
              <li>주소 입력란에 <strong>192.168.219.100</strong> 입력</li>
              <li>사용 항목에서 <strong>'일반 PostScript 프린터'</strong> 선택 후 추가</li>
            </ul>
          </div>
        </div>
      </div>
      
    </div> </div>
</div>
