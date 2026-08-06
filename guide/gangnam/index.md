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
  .printer-steps {
    list-style: none;
    padding: 0;
    margin: 0;
    counter-reset: printer-step;
  }
  .printer-steps > li {
    position: relative;
    padding-left: 46px;
    margin-bottom: 22px;
    color: #374151;
    line-height: 1.7;
    word-break: keep-all;
  }
  .printer-steps > li::before {
    counter-increment: printer-step;
    content: counter(printer-step);
    position: absolute;
    left: 0;
    top: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #003366;
    color: #fff;
    font-size: 0.9rem;
    font-weight: 800;
  }
  .printer-setting-box {
    margin-top: 12px;
    padding: 14px 16px;
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    line-height: 1.85;
  }
  .driver-note {
    margin: 12px 0 18px;
    padding: 13px 15px;
    border-radius: 10px;
    background: #eef6ff;
    border: 1px solid #cfe3ff;
    color: #1f3f66;
    line-height: 1.65;
    word-break: keep-all;
  }
  .guide-img-caption {
    margin: 10px 0 0;
    color: #6b7280;
    font-size: 0.88rem;
    line-height: 1.5;
    text-align: center;
  }
  .os-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
    margin-top: 18px;
  }
  .os-card {
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 16px;
  }
  .os-title {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #111827;
    font-weight: 800;
    margin-bottom: 10px;
  }
  .manual-install-btn {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    margin-top: 10px;
    padding: 8px 13px;
    border: 1px solid #6b7280;
    border-radius: 8px;
    background: #fff;
    color: #374151;
    font-size: 0.9rem;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease;
  }
  .manual-install-btn:hover {
    background: #374151;
    color: #fff;
  }
  .usb-warning {
    margin-top: 14px;
    padding: 12px 14px;
    border: 1px solid #ffd8a8;
    border-radius: 10px;
    background: #fff8f0;
    color: #7c3f00;
    font-size: 0.94rem;
    line-height: 1.6;
    word-break: keep-all;
  }
  .modal-guide-note {
    margin-bottom: 18px;
    padding: 13px 15px;
    border: 1px solid #cfe3ff;
    border-radius: 10px;
    background: #eef6ff;
    color: #1f3f66;
    line-height: 1.65;
    word-break: keep-all;
  }
  @media (max-width: 768px) {
    .printer-grid { grid-template-columns: 1fr; }
    .os-grid { grid-template-columns: 1fr; }
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
            강남역점 복합기는 USB 다이렉트와 노트북 네트워크 연결 방식으로 이용할 수 있습니다.<br>
            두 방식 모두 <strong>사용자 ID와 비밀번호</strong>가 필요하므로,
            이용 전에 현장 관리자에게 계정 정보를 요청해 주세요.
          </p>
        </div>
      </div>

      <div class="printer-grid">

        <!-- USB 다이렉트 -->
        <div class="printer-box" style="grid-column:1 / -1;">
          <h4>
            A. USB 다이렉트 사용
            <span style="font-size:0.9rem; color:#6b7280; font-weight:normal;">
              (PDF, JPG, 스캔)
            </span>
          </h4>

          <ul class="guide-list">
            <li>
              <strong>스캔:</strong>
              스캔할 문서를 복합기에 올려두고 USB 메모리를 연결한 뒤,
              복합기 화면에서 USB 저장 메뉴를 선택합니다.
            </li>
            <li>
              <strong>인쇄:</strong>
              USB 메모리에 저장된 PDF 또는 JPG 파일은 복합기 화면에서 선택해 출력할 수 있습니다.
            </li>
            <li>
              한글(.hwp), 파워포인트(.ppt) 등은 USB에서 바로 열리지 않을 수 있으므로
              PDF로 변환하거나 아래 노트북 출력 방법을 이용해 주세요.
            </li>
          </ul>

          <div class="usb-warning">
            <strong><i class="fa-solid fa-lock"></i> 사용자 인증 필요</strong><br>
            USB 다이렉트 인쇄와 스캔도 복합기 화면에서 사용자 ID와 비밀번호 입력이 필요합니다.
            계정 정보는 현장 관리자에게 요청해 주세요.
          </div>
        </div>

        <!-- 노트북 출력 -->
        <div class="printer-box" style="grid-column:1 / -1;">
          <h4>
            B. 노트북에서 출력
            <span style="font-size:0.9rem; color:#6b7280; font-weight:normal;">
              (HWP, PPT, PDF 등)
            </span>
          </h4>

          <p style="font-size:0.95rem; color:#4b5563; margin-bottom:14px;">
            노트북을 강남역점 Wi-Fi에 연결한 뒤 운영체제에 맞는 방법으로 복합기를 추가해 주세요.
          </p>

          <div class="os-grid">

            <!-- Windows -->
            <div class="os-card">
              <div class="os-title">
                <i class="fa-brands fa-windows" style="color:#0078D6; font-size:1.15rem;"></i>
                Windows 사용자
              </div>

              <ul class="guide-list" style="font-size:0.92rem;">
                <li>
                  아래 페이지에서 <strong>자동설치드라이버(FAX_PS_PCL)</strong>를 다운로드합니다.<br>

                  <a
                    class="guide-link"
                    href="https://www.tids.co.kr/sub/sub02_01.php?boardid=download&amp;category=&amp;etc3=&amp;cat_no=&amp;etc1=1&amp;etc2=108&amp;x=44&amp;y=15"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    강남역점 복합기 자동설치 드라이버
                  </a>
                </li>

                <li>다운로드한 압축 파일을 해제한 뒤 설치 프로그램을 실행합니다.</li>

                <li>
                  검색 결과에서 IP 주소가 <strong>172.30.1.200</strong>인 복합기를 선택해
                  설치를 완료합니다.
                </li>

                <li>
                  설치가 끝나면 <code>제어판</code> &gt;
                  <code>하드웨어 및 소리</code> &gt;
                  <code>장치 및 프린터</code>에서 설치된 복합기를
                  마우스 오른쪽 버튼으로 클릭하고 <strong>인쇄 기본 설정</strong>을 엽니다.
                </li>

                <li>
                  <strong>기본 설정</strong> 탭에서
                  <strong>인증/부문 관리</strong>를 선택한 뒤
                  <strong>등록된 사용자</strong>에 사용자 ID와 비밀번호를 입력합니다.
                </li>

                <li>
                  사용자 ID와 비밀번호는 현장 관리자에게 요청해 주세요.
                  입력 후 <strong>확인</strong>을 눌러 설정을 저장합니다.
                </li>
              </ul>

              <button
                type="button"
                class="manual-install-btn"
                data-bs-toggle="modal"
                data-bs-target="#printerManualModal"
              >
                <i class="fa-solid fa-circle-question"></i>
                자동 설치가 안 돼요
              </button>
            </div>

            <!-- Mac -->
            <div class="os-card">
              <div class="os-title">
                <i class="fa-brands fa-apple" style="color:#555; font-size:1.2rem;"></i>
                Mac 사용자
              </div>

              <ul class="guide-list" style="font-size:0.92rem;">
                <li>
                  <code>시스템 설정</code> &gt;
                  <code>프린터 및 스캐너</code> &gt;
                  <code>프린터, 스캐너 또는 팩스 추가</code>로 이동합니다.
                </li>
                <li>상단의 <strong>IP</strong> 탭을 선택합니다.</li>
                <li>주소에 <strong>172.30.1.200</strong>을 입력합니다.</li>
                <li>사용 항목에서 강남역점 복합기와 호환되는 드라이버를 선택해 추가합니다.</li>
                <li>설치가 끝나면 현장 관리자에게 사용자 인증 설정을 요청해 주세요.</li>
              </ul>
            </div>

          </div>
        </div>

      </div>

      <div class="guide-alert">
        <strong><i class="fa-solid fa-circle-exclamation"></i> 출력 계정 안내</strong><br>
        USB 다이렉트와 노트북 출력 모두 사용자 ID와 비밀번호가 필요합니다.
        계정 정보는 공개 홈페이지에 제공하지 않으므로
        <strong>현장 관리자에게 요청해 주세요.</strong>
      </div>
    </div>
  </div>
</div>

<!-- Windows 프린터 수동 설치 모달 -->
<div
  class="modal fade"
  id="printerManualModal"
  tabindex="-1"
  aria-labelledby="printerManualModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog modal-lg modal-dialog-scrollable modal-dialog-centered">
    <div class="modal-content">

      <div class="modal-header">
        <h2 class="modal-title fs-5" id="printerManualModalLabel">
          Windows 프린터 수동 설치 방법
        </h2>

        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="닫기"
        ></button>
      </div>

      <div class="modal-body">

        <div class="modal-guide-note">
          자동설치 프로그램에서 복합기를 찾지 못할 때만 아래 방법을 이용해 주세요.
          복합기 IP 주소는 <strong>172.30.1.200</strong>입니다.
        </div>

        <ol class="printer-steps">
          <li>
            드라이버 다운로드 페이지에서 사용 중인 Windows의 비트 수에 맞는
            <strong>C368_Series_PCL 드라이버</strong>를 다운로드합니다.
          </li>

          <li>
            다운로드한 압축 파일을 마우스 오른쪽 버튼으로 클릭한 뒤
            <strong>모두 압축 풀기</strong>를 선택합니다.
            이후 드라이버 파일을 선택해야 하므로 압축을 푼 폴더 위치를 기억해 주세요.
          </li>

          <li>
            Windows의 <strong>제어판</strong>을 열고
            <code>하드웨어 및 소리</code> &gt;
            <code>장치 및 프린터</code>로 이동한 뒤
            <strong>프린터 추가</strong>를 선택합니다.
          </li>

          <li>
            프린터 검색 화면에서
            <strong>원하는 프린터가 목록에 없습니다</strong>를 선택합니다.
          </li>

          <li>
            <strong>TCP/IP 주소 또는 호스트 이름으로 프린터 추가</strong>를 선택합니다.
          </li>

          <li>
            아래와 같이 입력합니다.

            <div class="printer-setting-box">
              <strong>장치 유형:</strong> TCP/IP 장치<br>
              <strong>호스트 이름 또는 IP 주소:</strong> 172.30.1.200<br>
              <strong>포트 이름:</strong> 자동으로 입력된 값을 그대로 사용
            </div>

            포트 이름이 자동으로 입력되지 않으면
            <strong>IP_172.30.1.200</strong>으로 입력해 주세요.<br>
            <strong>프린터를 검색하고 사용할 드라이버를 자동으로 선택</strong>은
            체크하지 않고 다음 단계로 진행합니다.
          </li>
        </ol>

        <div class="guide-img-box" style="margin:4px 0 24px; padding:10px;">
          <img
            src="https://mibdda.github.io/assets/img/md/gangnam-printer-setting.png"
            alt="강남역점 복합기 TCP IP 주소 입력 및 인증 설정 화면"
            style="display:block; width:100%; max-height:none; object-fit:contain;"
          >
          <p class="guide-img-caption">
            왼쪽: TCP/IP 주소 입력 화면 · 오른쪽: 설치 완료 후 인증/부문 관리 화면
          </p>
        </div>

        <ol class="printer-steps" style="counter-reset:printer-step 6;">
          <li>
            프린터 드라이버 선택 화면에서
            <strong>디스크 있음</strong> 또는 <strong>찾아보기</strong>를 선택합니다.
            압축을 풀어 둔 C368 Series PCL 드라이버 폴더에서
            <strong>.inf 파일</strong>을 선택합니다.
          </li>

          <li>
            목록에 표시되는
            <strong>KONICA MINOLTA C368 Series PCL</strong> 계열 드라이버를 선택하고
            화면 안내에 따라 설치를 완료합니다.
          </li>

          <li>
            설치된 복합기를 마우스 오른쪽 버튼으로 클릭하고
            <strong>인쇄 기본 설정</strong>을 엽니다.
          </li>

          <li>
            <strong>기본 설정</strong> 탭의
            <strong>인증/부문 관리</strong>에서 사용자 ID와 비밀번호를 입력해야 합니다.
            계정 정보는 현장 관리자에게 요청해 주세요.
          </li>
        </ol>

      </div>

      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          닫기
        </button>
      </div>

    </div>
  </div>
</div>

