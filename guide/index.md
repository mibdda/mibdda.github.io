---
layout: default
title: 이용 가이드
description: 더브릿지플러스 강남역점과 신논현점의 시설 이용 안내입니다.
permalink: /guide/
---

<style>
  /* =========================================================
     GUIDE INDEX
     ========================================================= */

  .guide-index {
    min-height: 100vh;
    padding: 140px 20px 90px;
    background:
      linear-gradient(
        180deg,
        var(--offwhite, #f7f9fb) 0%,
        #ffffff 100%
      );
  }

  .guide-index__inner {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
  }

  .guide-index__header {
    margin-bottom: 48px;
    text-align: center;
  }

  .guide-index__eyebrow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 14px;
    padding: 7px 14px;
    border-radius: 999px;
    background: rgba(0, 51, 102, 0.08);
    color: var(--brand-dark, #003366);
    font-size: 0.85rem;
    font-weight: 700;
  }

  .guide-index__title {
    margin: 0;
    color: #111827;
    font-size: clamp(2rem, 4vw, 2.8rem);
    font-weight: 800;
    letter-spacing: -0.04em;
  }

  .guide-index__description {
    margin: 16px 0 0;
    color: #6b7280;
    font-size: 1.05rem;
    line-height: 1.7;
    word-break: keep-all;
  }

  .guide-index__grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 28px;
  }

  .guide-branch {
    display: flex;
    flex-direction: column;
    min-width: 0;
    overflow: hidden;
    border: 1px solid #e5e7eb;
    border-radius: 24px;
    background: #ffffff;
    color: inherit;
    text-decoration: none;
    box-shadow: 0 10px 30px rgba(0, 51, 102, 0.07);
    transition:
      transform 0.25s ease,
      box-shadow 0.25s ease,
      border-color 0.25s ease;
  }

  .guide-branch:hover {
    transform: translateY(-6px);
    border-color: rgba(0, 51, 102, 0.28);
    color: inherit;
    box-shadow: 0 18px 42px rgba(0, 51, 102, 0.13);
  }

  .guide-branch:focus-visible {
    outline: 3px solid var(--brand-sky, #66ccff);
    outline-offset: 4px;
  }

  .guide-branch__image-wrap {
    position: relative;
    height: 260px;
    overflow: hidden;
    background: #e9eef3;
  }

  .guide-branch__image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.45s ease;
  }

  .guide-branch:hover .guide-branch__image {
    transform: scale(1.04);
  }

  .guide-branch__label {
    position: absolute;
    top: 18px;
    left: 18px;
    padding: 7px 12px;
    border-radius: 999px;
    background: rgba(0, 0, 0, 0.68);
    color: #ffffff;
    font-size: 0.82rem;
    font-weight: 700;
    backdrop-filter: blur(5px);
  }

  .guide-branch__body {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 30px;
  }

  .guide-branch__name {
    margin: 0;
    color: #111827;
    font-size: 1.65rem;
    font-weight: 800;
    letter-spacing: -0.03em;
  }

  .guide-branch__address {
    margin: 10px 0 0;
    color: #6b7280;
    font-size: 0.98rem;
    line-height: 1.5;
  }

  .guide-branch__chips {
    display: flex;
    flex-wrap: wrap;
    gap: 9px;
    margin: 24px 0 30px;
  }

  .guide-branch__chip {
    padding: 7px 13px;
    border: 1px solid #d9dee5;
    border-radius: 999px;
    background: #f8fafc;
    color: #374151;
    font-size: 0.9rem;
    font-weight: 600;
  }

  .guide-branch__link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
    padding-top: 22px;
    border-top: 1px solid #eef0f3;
    color: var(--brand-dark, #003366);
    font-weight: 800;
  }

  .guide-branch__arrow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: rgba(0, 51, 102, 0.08);
    font-size: 1.1rem;
    transition:
      transform 0.2s ease,
      background-color 0.2s ease;
  }

  .guide-branch:hover .guide-branch__arrow {
    transform: translateX(4px);
    background: rgba(0, 51, 102, 0.14);
  }

  .guide-index__notice {
    margin: 36px auto 0;
    padding: 16px 20px;
    border-radius: 14px;
    background: rgba(102, 204, 255, 0.12);
    color: #374151;
    font-size: 0.92rem;
    line-height: 1.6;
    text-align: center;
  }

  @media (max-width: 767.98px) {
    .guide-index {
      padding: 115px 16px 60px;
    }

    .guide-index__header {
      margin-bottom: 30px;
    }

    .guide-index__description {
      font-size: 0.96rem;
    }

    .guide-index__grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .guide-branch {
      border-radius: 20px;
    }

    .guide-branch__image-wrap {
      height: 210px;
    }

    .guide-branch__body {
      padding: 24px 22px;
    }

    .guide-branch__name {
      font-size: 1.45rem;
    }

    .guide-branch__chips {
      margin: 20px 0 24px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .guide-branch,
    .guide-branch__image,
    .guide-branch__arrow {
      transition: none;
    }
  }
</style>

<section class="guide-index" aria-labelledby="guide-title">
  <div class="guide-index__inner">

    <header class="guide-index__header">
      <div class="guide-index__eyebrow">THE BRIDGE PLUS GUIDE</div>

      <h1 class="guide-index__title" id="guide-title">
        어느 지점을 이용하시나요?
      </h1>

      <p class="guide-index__description">
        지점을 선택하면 회의실, 복합기, Wi-Fi 등<br>
        해당 공간의 이용 안내를 바로 확인할 수 있습니다.
      </p>
    </header>

    <div class="guide-index__grid">

      <!-- 강남역점 -->
      <a
        class="guide-branch"
        href="/guide/gangnam/"
        aria-label="강남역점 이용 가이드 보기"
      >
        <div class="guide-branch__image-wrap">
          <img
            class="guide-branch__image"
            src="/images/kangnam1.png"
            alt="더브릿지플러스 강남역점 내부 공간"
          >
          <span class="guide-branch__label">강남역 도보권</span>
        </div>

        <div class="guide-branch__body">
          <h2 class="guide-branch__name">강남역점</h2>

          <p class="guide-branch__address">
            서울 강남구 테헤란로6길 26, 3층
          </p>

          <div class="guide-branch__chips" aria-label="강남역점 안내 항목">
            <span class="guide-branch__chip">회의실</span>
            <span class="guide-branch__chip">Wi-Fi</span>
            <span class="guide-branch__chip">복합기</span>
            <span class="guide-branch__chip">커피머신</span>
          </div>

          <div class="guide-branch__link">
            <span>강남역점 이용 가이드</span>
            <span class="guide-branch__arrow" aria-hidden="true">→</span>
          </div>
        </div>
      </a>

      <!-- 신논현점 -->
      <a
        class="guide-branch"
        href="/guide/sinnonhyeon/"
        aria-label="신논현점 이용 가이드 보기"
      >
        <div class="guide-branch__image-wrap">
          <img
            class="guide-branch__image"
            src="/images/about1.jpg"
            alt="더브릿지플러스 신논현점 내부 공간"
          >
          <span class="guide-branch__label">신논현역 도보권</span>
        </div>

        <div class="guide-branch__body">
          <h2 class="guide-branch__name">신논현점</h2>

          <p class="guide-branch__address">
            서울 강남구 강남대로114길 18, 4층
          </p>

          <div class="guide-branch__chips" aria-label="신논현점 안내 항목">
            <span class="guide-branch__chip">회의실</span>
            <span class="guide-branch__chip">Wi-Fi</span>
            <span class="guide-branch__chip">복합기</span>
            <span class="guide-branch__chip">커피머신</span>
          </div>

          <div class="guide-branch__link">
            <span>신논현점 이용 가이드</span>
            <span class="guide-branch__arrow" aria-hidden="true">→</span>
          </div>
        </div>
      </a>

    </div>

    <p class="guide-index__notice">
      이용 중 도움이 필요한 경우 현장 관리자에게 문의해 주세요.
    </p>

  </div>
</section>
