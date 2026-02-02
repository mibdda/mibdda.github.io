/* =================================================================
   script.js
   - 더브릿지플러스 메인 동작 스크립트 모음
   ================================================================= */

document.addEventListener("DOMContentLoaded", function() {
    
    // ----------------------------------------------------
    // [UI] 드로어(모바일 메뉴) 열기/닫기
    // ----------------------------------------------------
    const menuBtn = document.getElementById('menuBtn');
    const drawer = document.getElementById('drawer');
    const closeDrawerBtn = document.getElementById('closeDrawerBtn');

    function toggleDrawer() {
        if (!menuBtn || !drawer) return;
        const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
        drawer.classList.toggle('open');
        menuBtn.setAttribute('aria-expanded', !isExpanded);
    }

    if (menuBtn) menuBtn.addEventListener('click', toggleDrawer);
    if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', toggleDrawer);

    drawer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (drawer.classList.contains('open')) toggleDrawer();
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 992 && drawer.classList.contains('open')) {
            toggleDrawer();
        }
    });

    // ----------------------------------------------------
    // [UI] 네비게이션 바 스크롤 효과
    // ----------------------------------------------------
    const nav = document.querySelector('.navbar.slimbar');
    if (nav) {
        const threshold = 10;
        const sync = () => {
            const scrolled = window.scrollY > threshold;
            nav.classList.toggle('is-scrolled', scrolled);
            nav.classList.toggle('is-top', !scrolled);
        };
        sync();
        window.addEventListener('scroll', sync, { passive: true });
    }

    // ----------------------------------------------------
    // [UI] 맨 위로 가기 버튼 (To Top)
    // ----------------------------------------------------
    const toTop = document.getElementById('toTop');
    if (toTop) {
        const toggleTopBtn = () => toTop.classList.toggle('show', window.scrollY > 250);
        window.addEventListener('scroll', toggleTopBtn, { passive: true });
        toggleTopBtn();
        toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // ----------------------------------------------------
    // [UI] Fade-in 애니메이션 관찰자
    // ----------------------------------------------------
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -70px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});

// =================================================================
// [MAP] 카카오지도 설정
// =================================================================
var sinnonhyeonMap;
var seolleungMap;
var geocoder;

// 카카오 맵 로드 후 실행 (Kakao SDK가 로드된 상태여야 함)
if (typeof kakao !== 'undefined' && kakao.maps) {
    geocoder = new kakao.maps.services.Geocoder();

    // 1. 신논현점 지도 생성
    createSinnonhyeonMap();

    // 2. 탭 전환 이벤트 리스너 (지도 깨짐 방지)
    const seolleungTab = document.getElementById('seolleung-map-tab');
    let isSeolleungMapLoaded = false;

    if (seolleungTab) {
        seolleungTab.addEventListener('shown.bs.tab', function(event) {
            if (!isSeolleungMapLoaded) {
                createSeolleungMap();
                isSeolleungMapLoaded = true;
            }
            if (seolleungMap) seolleungMap.relayout();
        });
    }

    const sinnonhyeonTab = document.getElementById('sinnonhyeon-map-tab');
    if (sinnonhyeonTab) {
        sinnonhyeonTab.addEventListener('shown.bs.tab', function(event) {
            if (sinnonhyeonMap) sinnonhyeonMap.relayout();
        });
    }
}

function createSinnonhyeonMap() {
    const container = document.getElementById('map_sinnonhyeon');
    if (!container) return;
    
    const options = { center: new kakao.maps.LatLng(37.5665, 126.9780), level: 3 };
    sinnonhyeonMap = new kakao.maps.Map(container, options);

    const zoomControl = new kakao.maps.ZoomControl();
    sinnonhyeonMap.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    const address = '서울특별시 강남구 강남대로114길 18, 4층(논현동, 필스빌딩)';
    geocoder.addressSearch(address, function(result, status) {
        if (status === kakao.maps.services.Status.OK && result.length > 0) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            sinnonhyeonMap.setCenter(coords);
            
            const imageSrc = 'images/thebridgeplus-marker.png';
            const imageSize = new kakao.maps.Size(48, 60);
            const imageOption = { offset: new kakao.maps.Point(24, 60) };
            const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
            
            const marker = new kakao.maps.Marker({ position: coords, image: markerImage });
            marker.setMap(sinnonhyeonMap);

            const infowindow = new kakao.maps.InfoWindow({
                content: `<div style="padding:8px 13px; font-size:11px; text-align:center; width:220px;">더브릿지플러스<br>서울특별시 강남구 강남대로114길 18, 4층</div>`
            });
            infowindow.open(sinnonhyeonMap, marker);
        }
    });
}

function createSeolleungMap() {
    const container = document.getElementById('map_seolleung');
    if (!container) return;

    const options = { center: new kakao.maps.LatLng(37.5044, 127.0489), level: 3 };
    seolleungMap = new kakao.maps.Map(container, options);

    const zoomControl = new kakao.maps.ZoomControl();
    seolleungMap.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    const address = '서울특별시 강남구 선릉로92길 28, 4층';
    geocoder.addressSearch(address, function(result, status) {
        if (status === kakao.maps.services.Status.OK && result.length > 0) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            seolleungMap.setCenter(coords);

            const imageSrc = 'images/thebridgeplus-marker.png';
            const imageSize = new kakao.maps.Size(48, 60);
            const imageOption = { offset: new kakao.maps.Point(24, 60) };
            const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

            const marker = new kakao.maps.Marker({ position: coords, image: markerImage });
            marker.setMap(seolleungMap);

            const infowindow = new kakao.maps.InfoWindow({
                content: `<div style="padding:8px 13px; font-size:11px; text-align:center; width:220px;">더브릿지플러스 (선릉점)<br>서울특별시 강남구 선릉로92길 28, 4층</div>`
            });
            infowindow.open(seolleungMap, marker);
        }
    });
}


// =================================================================
// [CHANNEL IO] 채널톡 설정
// =================================================================
(function() {
    var w = window;
    if (w.ChannelIO) return;
    var ch = function() { ch.c(arguments); };
    ch.q = []; ch.c = function(args) { ch.q.push(args); };
    w.ChannelIO = ch;
    function l() {
        if (w.ChannelIOInitialized) return;
        w.ChannelIOInitialized = true;
        var s = document.createElement('script');
        s.type = 'text/javascript'; s.async = true;
        s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
    }
    if (document.readyState === 'complete') l();
    else {
        window.addEventListener('DOMContentLoaded', l, false);
        window.addEventListener('load', l, false);
    }
})();

ChannelIO('boot', {
    pluginKey: '608452ed-a477-4ecb-9b90-9cb96631cfbc'
});

ChannelIO('onShowMessenger', function() {
    // 1. 당근마켓 추적
    if(window.karrotPixel) window.karrotPixel.track('SubmitApplication');
    // 2. 구글 GTM 전송
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'event': 'channel_talk_open' });
});

// 간편 상담 버튼 클릭 시 채널톡 열기
document.addEventListener('click', function(e) {
    if (e.target.closest('#contactChannelTalkBtn')) {
        if (window.ChannelIO) ChannelIO('showMessenger');
    }
});

// 메뉴 클릭 시 해당 섹션 ID를 채널톡 페이지로 전송
document.addEventListener('click', function(e) {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href').slice(1);
    if (id) ChannelIO('setPage', { page: id });
});

// 스크롤 시 섹션 진입 감지하여 채널톡 페이지 설정
const secIds = ['services', 'pricing', 'about', 'faq', 'location', 'contact'];
const sections = secIds.map(id => document.getElementById(id)).filter(Boolean);
const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            ChannelIO('setPage', { page: entry.target.id });
        }
    });
}, { threshold: [0.6] });
sections.forEach(s => io.observe(s));


// =================================================================
// [FORM] 상담 신청 폼 처리 (모달)
// =================================================================
(function() {
    const FORM_SEL = '#consultModal form[action*="formResponse"]';

    function ensureIframeTarget(form) {
        let iframe = document.getElementById('gf_iframe');
        if (!iframe) {
            iframe = document.createElement('iframe');
            iframe.id = 'gf_iframe'; iframe.name = 'gf_iframe'; iframe.style.display = 'none';
            document.body.appendChild(iframe);
        }
        form.setAttribute('target', 'gf_iframe');
        return iframe;
    }

    function bindOnce() {
        const form = document.querySelector(FORM_SEL);
        if (!form || form.dataset.convBound === '1') return;
        form.dataset.convBound = '1';

        const iframe = ensureIframeTarget(form);
        let submitted = false;

        form.addEventListener('submit', (e) => {
            submitted = true;
            // 당근 전환
            try { window.karrotPixel?.track?.('Lead'); } catch (_) {}
            // 디지털캠프 전환
            try {
                const get = (sel) => (e.target.querySelector(sel)?.value ?? '');
                const name = get('input[name="entry.1727161775"]');
                const phone = get('input[name="entry.53713410"]');
                const email = get('input[name="entry.1336222686"]');
                const message = get('textarea[name="entry.701133298"]');
                const category = get('select[name="entry.989899118"]');

                if (typeof window.dcampconv_sp_1601 === 'function') {
                    window.dcampconv_sp_1601('submit', {
                        items: [{ name }, { phone }, { email }, { message }, { category }]
                    }, 'cpa');
                }
            } catch (_) {}
        });

        iframe.addEventListener('load', () => {
            if (!submitted) return;
            submitted = false;

            // 네이버 전환
            try { if (window.wcs) window.wcs.trans({ type: 'lead' }); } catch (_) {}

            // 완료 팝업 생성
            if (document.getElementById('leadConfirmOverlay')) return;
            const overlay = document.createElement('div');
            overlay.id = 'leadConfirmOverlay';
            overlay.style.cssText = 'position:fixed; inset:0; background:rgba(0,0,0,.45); z-index:999999; display:flex; align-items:center; justify-content:center;';

            const box = document.createElement('div');
            box.style.cssText = 'max-width:92vw; display:inline-block; background:#fff; border-radius:14px; padding:18px 16px; box-shadow:0 10px 30px rgba(0,0,0,.25);';

            const msg = document.createElement('div');
            msg.textContent = '상담 문의가 접수되었습니다.';
            msg.style.cssText = 'font-size:15px; color:#111; margin-bottom:14px; white-space:nowrap;';

            const btn = document.createElement('button');
            btn.type = 'button'; btn.textContent = '확인';
            btn.style.cssText = 'width:100%; padding:10px 12px; border:0; border-radius:10px; background:var(--brand-dark, #003366); color:#fff; font-weight:700; font-size:14px; cursor:pointer;';
            
            btn.addEventListener('click', () => {
                overlay.remove();
                try {
                    const modalEl = document.getElementById('consultModal');
                    const modal = window.bootstrap?.Modal?.getInstance(modalEl) || new window.bootstrap.Modal(modalEl);
                    modal.hide();
                } catch (_) {}
                setTimeout(() => { try { form.reset(); } catch (_) {} }, 1200);
            });

            box.appendChild(msg); box.appendChild(btn);
            overlay.appendChild(box); document.body.appendChild(overlay);
        });
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bindOnce);
    else bindOnce();
})();

// =================================================================
// [LOGIC] 가격표 및 모달 데이터 바인딩
// =================================================================
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("consultModal");
    const modalTitle = modal.querySelector(".modal-title");
    const textarea = modal.querySelector("#inquiryDetails");
    const inquirySelect = document.getElementById("inquiryCategory");

    const basePrice = { "개인사업자": 45000, "법인사업자": 55000 };

    function resetGeneralMode() {
        modalTitle.innerHTML = "상담 신청하기";
        textarea.value = "";
        if (inquirySelect) inquirySelect.value = "";
    }

    document.querySelectorAll(".open-general").forEach(btn => btn.addEventListener("click", resetGeneralMode));

    document.querySelectorAll(".open-combo").forEach(btn => {
        btn.addEventListener("click", () => {
            if (inquirySelect) inquirySelect.value = "비상주";
            const combo = btn.dataset.combo;

            if (combo === "A") {
                modalTitle.innerHTML = `
                    <div style="font-size:20px; font-weight:700;">결합 A형 상담 신청</div>
                    <div style="font-size:14px; margin-top:4px; color:#555;">비상주 월 요금 <span class="price-new">10,000원 할인</span> <span class="price-desc-inline">(개인, 12개월 계약 기준)</span></div>
                    <div style="font-size:13px; margin-top:4px; color:#666;">법인설립 대행 수수료 <span class="diag-strike">평균 550,000원</span> <span class="combo-arrow">→</span> <span class="price-new">0원</span></div>
                `;
                textarea.value = `결합A형 상담을 요청합니다.\n(추가 문의는 아래 작성해주세요.)`;
            } else if (combo === "B") {
                modalTitle.innerHTML = `
                    <div style="font-size:20px; font-weight:700;">결합 B형 상담 신청</div>
                    <div style="font-size:14px; margin-top:4px; color:#555;">비상주 월 요금 <span class="price-new">10,000원 할인</span> <span class="price-desc-inline">(개인, 12개월 계약 기준)</span></div>
                    <div style="font-size:13px; margin-top:4px; color:#666;">자금 상담: 적합성 진단 리포트 · 준비서류 체크리스트 · 신청 루트 제안(1~3개)</div>
                `;
                textarea.value = `결합B형 상담을 요청합니다.\n(추가 문의는 아래 작성해주세요.)`;
            }
        });
    });

    document.querySelectorAll(".open-plan").forEach(btn => {
        btn.addEventListener("click", () => {
            const type = btn.dataset.type;
            const planName = btn.dataset.planName;
            const monthly = Number(btn.dataset.monthly);
            const months = Number(btn.dataset.months);

            if (type === "상주오피스") {
                if (inquirySelect) inquirySelect.value = "상주";
                const deposit = monthly * 2;
                modalTitle.innerHTML = `
                    <div style="font-size:20px; font-weight:700;">상주오피스 ${planName} 요금제</div>
                    <div style="font-size:14px; margin-top:4px; color:#555;">월 ${monthly.toLocaleString()}원 · 보증금 ${deposit.toLocaleString()}원</div>
                `;
                textarea.value = `상주오피스 ${planName} 상담을 요청합니다.\n(추가 문의는 아래 작성해주세요.)`;
                return;
            }

            if (inquirySelect) inquirySelect.value = "비상주";
            
            let total;
            if (type === "개인사업자" && planName === "24개월") total = 500000;
            else if (type === "개인사업자" && planName === "36개월") total = 650000;
            else if (type === "법인사업자" && planName === "24개월") total = 750000;
            else if (type === "법인사업자" && planName === "36개월") total = 1000000;
            else total = monthly * months;

            const normal = basePrice[type] * months;
            let discountRate = Math.round((1 - (total / normal)) * 100);
            let discountText = (planName !== "3개월") ? ` · 할인율 ${discountRate}% (3개월 대비)` : "";
            let bestLabel = (planName === "12개월") ? ` <span style="color:#0d6efd; font-weight:700; font-size:14px;">BEST</span>` : "";

            modalTitle.innerHTML = `
                <div style="font-size:20px; font-weight:700;">${type} ${planName} 요금제${bestLabel}</div>
                <div style="font-size:14px; margin-top:4px; color:#555;">월 ${monthly.toLocaleString()}원 · 총액 ${total.toLocaleString()}원${discountText}</div>
            `;
            textarea.value = `${type} ${planName} 상담을 요청합니다.\n(추가 문의는 아래 작성해주세요.)`;
        });
    });
});

// =================================================================
// [MODAL] 평면도 및 사진 모달
// =================================================================
document.addEventListener("DOMContentLoaded", () => {
    const hotspots = document.querySelectorAll(".room-hotspot");
    const roomPhoto = document.getElementById("roomPhoto");
    const roomPhotoModal = document.getElementById("roomPhotoModal");

    if (hotspots.length > 0 && roomPhoto && roomPhotoModal) {
        hotspots.forEach(btn => {
            btn.addEventListener("click", () => {
                const id = btn.dataset.room;
                roomPhoto.src = "images/" + id + ".jpg";
                const modal = new bootstrap.Modal(roomPhotoModal);
                modal.show();
            });
        });

        roomPhoto.addEventListener("click", () => {
            const modal = bootstrap.Modal.getInstance(roomPhotoModal);
            modal.hide();
        });
    }
});

// =================================================================
// [USP TAB] 특장점 탭 슬라이더
// =================================================================
(function() {
    const USP_DATA = [
        { title:"실사 대응 전문", subtitle:"관공서 실사가 나오면 어떻게 대응할까?", desc:"👉 실사 대응 경험이 있는 담당자가 상주하며 준비부터 운영까지 안내합니다.", img:"images/usp-inspection-support.png" },
        { title:"정책자금 무료 체크", subtitle:"내게 맞는 정책자금이나 사업자금 확보방법은 뭐가 있을까?", desc:"👉 정책자금·보증·바우처 안내부터 자격 조건, 신청 준비까지 전문가가 함께 도와드립니다!", img:"images/usp-policy-fund-check.png" },
        { title:"세무 연계 혜택", subtitle:"세무·회계 같은 사업주 필수 서비스도 연계가 가능할까?", desc:"👉 세무,법무등 사업자에게 필요한 모든 상담과 서비스 연계 시 저렴한 비용으로 구성합니다.", img:"images/usp-tax-benefit.png" },
        { title:"회의실·OA 이용", subtitle:"비상주 고객인데, 사무실 미팅룸,OA존은 이용 가능할까?", desc:"👉 비상주 고객도 회의실과 OA 환경을 예약하여 이용할 수 있습니다.", img:"images/usp-meeting-oa.png" }
    ];

    const tabsEl = document.getElementById("uspTabs");
    const panelsEl = document.getElementById("uspPanels");
    if(!tabsEl || !panelsEl) return;

    let currentIndex = 0;
    let timer = null;
    let isAnimating = false;
    const AUTO_INTERVAL = 6500;

    function isMobile(){ return window.innerWidth <= 576; }
    function idxPrev(i){ return (i - 1 + USP_DATA.length) % USP_DATA.length; }
    function idxNext(i){ return (i + 1) % USP_DATA.length; }

    function slideDurationMs(){
        const v = getComputedStyle(document.documentElement).getPropertyValue("--usp-slide-dur").trim();
        if(!v) return 900;
        if(v.endsWith("ms")) return parseFloat(v);
        if(v.endsWith("s")) return parseFloat(v) * 1000;
        return 900;
    }

    function renderTabs(){
        tabsEl.innerHTML = "";
        USP_DATA.forEach((d, i) => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "usp-tab" + (i === currentIndex ? " active" : "");
            btn.textContent = d.title;
            btn.addEventListener("click", () => slideTo(i));
            tabsEl.appendChild(btn);
        });

        if (isMobile()){
            requestAnimationFrame(() => {
                const active = tabsEl.querySelector(".usp-tab.active");
                if (!active) return;
                const c = tabsEl;
                const aRect = active.getBoundingClientRect();
                const cRect = c.getBoundingClientRect();
                const pad = 8;
                const fullyVisible = aRect.left >= cRect.left + pad && aRect.right <= cRect.right - pad;
                if (!fullyVisible) c.scrollTo({ left: active.offsetLeft - 2, behavior: "smooth" });
            });
        }
    }

    function makePanel(role){
        const el = document.createElement("div");
        el.className = "usp-panel " + role;
        el.innerHTML = `<img src="" alt=""><div class="usp-text"><h3></h3><p></p></div>`;
        return el;
    }

    let panelPrev = makePanel("prev");
    let panelMain = makePanel("active");
    let panelNext = makePanel("next");

    panelsEl.innerHTML = "";
    panelsEl.appendChild(panelPrev);
    panelsEl.appendChild(panelMain);
    panelsEl.appendChild(panelNext);

    function fillPanel(panelEl, idx){
        const d = USP_DATA[idx];
        const img = panelEl.querySelector("img");
        const h3 = panelEl.querySelector(".usp-text h3");
        const p = panelEl.querySelector(".usp-text p");
        img.src = d.img; img.alt = d.title;
        h3.textContent = d.subtitle; p.textContent = d.desc;
    }

    function initPanels(){
        panelsEl.classList.add("no-anim");
        fillPanel(panelPrev, idxPrev(currentIndex));
        fillPanel(panelMain, currentIndex);
        fillPanel(panelNext, idxNext(currentIndex));
        panelPrev.className = "usp-panel prev";
        panelMain.className = "usp-panel active";
        panelNext.className = "usp-panel next";
        requestAnimationFrame(() => { panelsEl.classList.remove("no-anim"); });
    }

    function slideTo(targetIdx){
        if(isAnimating || targetIdx === currentIndex) return;
        isAnimating = true;
        fillPanel(panelNext, targetIdx);
        requestAnimationFrame(() => {
            panelMain.className = "usp-panel prev";
            panelNext.className = "usp-panel active";
        });
        const dur = slideDurationMs();
        window.setTimeout(() => {
            currentIndex = targetIdx;
            const oldPrev = panelPrev;
            panelPrev = panelMain;
            panelMain = panelNext;
            panelNext = oldPrev;
            panelsEl.classList.add("no-anim");
            panelPrev.className = "usp-panel prev";
            panelMain.className = "usp-panel active";
            panelNext.className = "usp-panel next";
            fillPanel(panelNext, idxNext(currentIndex));
            requestAnimationFrame(() => { panelsEl.classList.remove("no-anim"); });
            renderTabs();
            isAnimating = false;
        }, dur + 40);
    }

    function startAuto(){ stopAuto(); timer = setInterval(() => { slideTo(idxNext(currentIndex)); }, AUTO_INTERVAL); }
    function stopAuto(){ if(timer){ clearInterval(timer); timer = null; } }

    let resizeTick = null;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTick);
        resizeTick = setTimeout(() => { renderTabs(); initPanels(); }, 120);
    });

    function enablePanelSwipe(){
        let sx=0, sy=0, tracking=false;
        panelsEl.addEventListener("pointerdown", (e) => {
            if(!isMobile()) return;
            tracking = true; sx = e.clientX; sy = e.clientY;
            stopAuto();
            try { panelsEl.setPointerCapture(e.pointerId); } catch(_) {}
        }, { passive:true });

        function end(e){
            if(!tracking) return;
            tracking = false;
            const dx = e.clientX - sx;
            const dy = e.clientY - sy;
            if(Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.2){
                if(dx < 0) slideTo(idxNext(currentIndex));
                else slideTo(idxPrev(currentIndex));
            }
            startAuto();
        }
        panelsEl.addEventListener("pointerup", end, { passive:true });
        panelsEl.addEventListener("pointercancel", end, { passive:true });
    }

    document.addEventListener("DOMContentLoaded", () => {
        renderTabs(); initPanels(); enablePanelSwipe(); startAuto();
    });
})();


// =================================================================
// [PRICING] 모바일 가격표 탭
// =================================================================
(function(){
    const BREAKPOINT = 991.98;
    const pricing = document.getElementById("pricing");
    if(!pricing) return;

    const tabs = pricing.querySelectorAll(".pm-tab");
    const groups = pricing.querySelectorAll(".pricing-group");
    const mobileMoreBtn = pricing.querySelector("#pricingMoreBtn");
    let activeTab = "personal";
    let mobileExpanded = false;

    function isMobile() { return window.innerWidth <= BREAKPOINT; }

    function updateVisibility(group) {
        const mobileMode = isMobile();
        const isExpanded = mobileMode ? mobileExpanded : group.classList.contains('dt-expanded');
        const cols = group.querySelectorAll(".five-col");
        cols.forEach(col => {
            const btn = col.querySelector(".open-plan");
            const months = btn ? Number(btn.dataset.months) : NaN;
            const isFeatured = (months === 12 || months === 24);
            col.style.display = (isExpanded || isFeatured) ? "" : "none";
        });
        if (!mobileMode) {
            group.classList.toggle('dt-featured-view', !isExpanded);
            const btn = group.querySelector(".btn-dt-more");
            if(btn) btn.textContent = isExpanded ? "요금 접기" : "전체 요금 보기";
        }
    }

    function apply() {
        const mobileMode = isMobile();
        groups.forEach(group => {
            if (mobileMode) {
                const isTarget = group.dataset.group === activeTab;
                group.style.setProperty('display', isTarget ? 'block' : 'none', 'important');
                if (isTarget) updateVisibility(group);
            } else {
                group.style.setProperty('display', 'flex', 'important');
                updateVisibility(group);
            }
        });
        if (mobileMoreBtn) {
            mobileMoreBtn.style.display = mobileMode ? "inline-block" : "none";
            mobileMoreBtn.textContent = mobileExpanded ? "요금 접기" : "전체 요금 보기";
        }
    }

    pricing.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-dt-more")) {
            const group = e.target.closest('.pricing-group');
            if (group) {
                group.classList.toggle('dt-expanded');
                updateVisibility(group);
            }
        }
    });

    tabs.forEach(t => t.addEventListener("click", () => {
        activeTab = t.dataset.target; mobileExpanded = false;
        tabs.forEach(tab => tab.classList.toggle("active", tab === t));
        apply();
    }));

    if (mobileMoreBtn) mobileMoreBtn.addEventListener("click", () => {
        mobileExpanded = !mobileExpanded; apply();
    });

    window.addEventListener("resize", apply);
    apply();
})();

// =================================================================
// [REVIEW] 고객후기 무한 스크롤
// =================================================================
(function(){
    const marquee = document.getElementById('reviewsMarquee');
    const track = document.getElementById('reviewsTrack');
    const group = document.getElementById('reviewsGroup');
    if(!marquee || !track || !group || track.dataset.ready === '1') return;
    track.dataset.ready = '1';

    const clone = group.cloneNode(true);
    clone.removeAttribute('id'); clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);

    function recalcSpeed(){
        const groupWidth = group.scrollWidth || 1;
        const pxPerSec = 60; 
        let sec = groupWidth / pxPerSec;
        sec = Math.max(32, Math.min(90, sec));
        marquee.style.setProperty('--reviews-speed', sec + 's');
    }

    recalcSpeed();
    let r = null;
    window.addEventListener('resize', function(){ clearTimeout(r); r = setTimeout(recalcSpeed, 120); });

    let t=null;
    const pause = ()=>{ track.style.animationPlayState='paused'; clearTimeout(t); };
    const resume= ()=>{ clearTimeout(t); t=setTimeout(()=>track.style.animationPlayState='running', 900); };

    marquee.addEventListener('pointerdown', pause, {passive:true});
    marquee.addEventListener('pointerup', resume, {passive:true});
    marquee.addEventListener('pointercancel', resume, {passive:true});

    document.addEventListener('visibilitychange', function(){
        track.style.animationPlayState = document.hidden ? 'paused' : 'running';
    });
})();