<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>더브릿지플러스 - 연결과 확장, 그 이상의 오피스</title>
    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
      body {
        font-family: 'Noto Sans KR', sans-serif;
      }
      .navbar, .footer {
        background-color: #003366; /* 진파랑 */
      }
      .navbar .nav-link, .navbar-brand {
        color: white !important;
      }
      .btn-primary {
        background-color: #003366;
        border-color: #003366;
      }
      .btn-primary:hover {
        background-color: #002244;
        border-color: #002244;
      }
      .section-highlight {
        background-color: #66CCFF; /* 연하늘 */
      }
    </style>
  </head>
  <body>
    <!-- 네비게이션 -->
    <nav class="navbar navbar-expand-lg fixed-top shadow-sm">
      <div class="container">
        <!-- 상단 로고 -->
        <a class="navbar-brand" href="#">
          <img src="images/logotop.png" alt="더브릿지플러스 로고 상단" height="30">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link" href="#about">회사소개</a></li>
            <li class="nav-item"><a class="nav-link" href="#services">서비스</a></li>
            <li class="nav-item"><a class="nav-link" href="#pricing">가격</a></li>
            <li class="nav-item"><a class="nav-link" href="#location">위치</a></li>
            <li class="nav-item"><a class="nav-link" href="#contact">문의</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- 히어로 섹션 -->
    <header class="text-white text-center vh-100 d-flex align-items-center" style="background-color:#003366;">
      <div class="container">
        <h1 class="display-4 fw-bold">더브릿지플러스</h1>
        <p class="lead">연결과 확장, 그 이상의 오피스.</p>
        <a href="#contact" class="btn btn-primary btn-lg mt-3">상담 요청하기</a>
      </div>
    </header>

    <!-- 회사소개 -->
    <section id="about" class="py-5">
      <div class="container">
        <h2 class="fw-bold text-center mb-4">회사소개</h2>
        <div class="row justify-content-center">
          <div class="col-md-8 text-center">
            <img src="images/office1.jpg" class="img-fluid rounded mb-3" alt="사무실 전경">
            <p>더브릿지플러스는 공유오피스와 비상주 오피스를 제공하는 전문 기업입니다. 
               효율적인 공간, 안정적인 주소지, 그리고 네트워크 기회를 함께 제공합니다.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 서비스 -->
    <section id="services" class="section-highlight py-5">
      <div class="container text-center">
        <h2 class="fw-bold mb-4">서비스</h2>
        <div class="row">
          <div class="col-md-4">
            <div class="p-4 bg-white rounded shadow-sm">
              <h5 class="fw-bold">상주 오피스</h5>
              <p>전용 좌석과 24시간 출입 가능한 사무 공간</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="p-4 bg-white rounded shadow-sm">
              <h5 class="fw-bold">비상주 오피스</h5>
              <p>사업자등록지 제공 + 회의실 무료 시간 포함</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="p-4 bg-white rounded shadow-sm">
              <h5 class="fw-bold">공용회의실/라운지</h5>
              <p>필요할 때 예약 가능한 쾌적한 회의실 & 라운지</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 가격 -->
    <section id="pricing" class="py-5">
      <div class="container text-center">
        <h2 class="fw-bold mb-4">가격</h2>
        <div class="row justify-content-center">
          <div class="col-md-4">
            <div class="card shadow-sm">
              <div class="card-body">
                <h5 class="card-title">비상주 오피스</h5>
                <p class="card-text">월 50,000원</p>
                <ul class="list-unstyled">
                  <li>사업자 등록지</li>
                  <li>월 15시간 회의실 제공</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card shadow-sm">
              <div class="card-body">
                <h5 class="card-title">상주 오피스</h5>
                <p class="card-text">월 300,000원</p>
                <ul class="list-unstyled">
                  <li>개인 전용 좌석</li>
                  <li>24시간 출입</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 위치 -->
    <section id="location" class="section-highlight py-5">
      <div class="container text-center">
        <h2 class="fw-bold mb-4">위치</h2>
        <p>서울특별시 강남구 강남대로114길 18, 4층(논현동, 필스빌딩)</p>
        <img src="images/map.jpg" class="img-fluid rounded" alt="위치 지도">
      </div>
    </section>

    <!-- 문의 -->
    <section id="contact" class="py-5">
      <div class="container">
        <h2 class="fw-bold text-center mb-4">문의</h2>
        <div class="row justify-content-center">
          <div class="col-md-6">
            <form action="https://formspree.io/f/your-form-id" method="POST">
              <div class="mb-3">
                <label class="form-label">이름</label>
                <input type="text" class="form-control" name="name" required>
              </div>
              <div class="mb-3">
                <label class="form-label">이메일</label>
                <input type="email" class="form-control" name="email" required>
              </div>
              <div class="mb-3">
                <label class="form-label">메시지</label>
                <textarea class="form-control" rows="4" name="message" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary w-100">보내기</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- 푸터 -->
    <footer class="footer text-white text-center py-4">
      <div class="container small">
        <img src="images/logobottom.png" alt="더브릿지플러스 로고 하단" height="40" class="mb-3">
        <p class="mb-1">대표 : 김배기 | 사업자등록번호 : 309-88-03426</p>
        <p class="mb-1">주소 : 서울특별시 강남구 강남대로114길 18, 4층(논현동, 필스빌딩)</p>
        <p class="mb-1">전화 : 02-2135-8227</p>
        <p class="mb-0">ⓒ 더브릿지플러스 All Rights Reserved.</p>
      </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>
