// =================================================================
// [ROUTING] 타 도메인/새 창에서도 진입점 유지하는 무적 라우팅
// =================================================================
// [중요] 블로그(인사이트)가 깃허브 페이지(github.io)처럼 완전히 다른 주소라면, 
// 돌아갈 곳을 찾지 못하므로 아래에 더브릿지플러스 메인 주소를 꼭 적어주세요.
// 같은 도메인의 서브 폴더(/blog) 형태라면 비워두셔도 됩니다.
const MAIN_DOMAIN_URL = 'https://www.thebridgeplus.co.kr'; 

document.addEventListener("DOMContentLoaded", function() {
    // 1. URL 꼬리표(?ref=seller) 낚아채기: 별도 도메인(블로그) 도착 시 강제 저장
    const urlParams = new URLSearchParams(window.location.search);
    const ref = urlParams.get('ref');
    if (ref) {
        sessionStorage.setItem('entryHome', ref + '.html');
    }

    const entryHome = sessionStorage.getItem('entryHome') || 'index.html';
    const currentUrl = window.location.pathname;
    const isSubPage = currentUrl.includes('biz-search') || currentUrl.includes('blog');

    // 2. 서브페이지로 떠날 때 모든 링크에 꼬리표 미리 달아두기
    const pageName = entryHome.replace('.html', '');
    document.querySelectorAll('a[href*="/blog"], a[href*="biz-search"]').forEach(link => {
        let href = link.getAttribute('href');
        // 이미 꼬리표가 있거나 앵커(#) 링크면 패스
        if (href && !href.includes('?ref=') && !href.startsWith('#')) {
            const separator = href.includes('?') ? '&' : '?';
            link.setAttribute('href', href + separator + 'ref=' + pageName);
        }
    });

    // 3. 로고 클릭 시 복귀
    const logoLink = document.querySelector('.navbar-brand.brand-abs');
    if (logoLink && isSubPage) {
        logoLink.addEventListener('click', function(e) {
            e.preventDefault();
            const base = MAIN_DOMAIN_URL || window.location.origin;
            window.location.href = base + '/' + entryHome;
        });
    }
});

// 4. 메뉴(해시 #) 링크 클릭 시 복귀 (요금조회, FAQ 등)
document.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    
    if (href && href.startsWith('#') && href.length > 1) {
        const currentUrl = window.location.pathname;
        const isSubPage = currentUrl.includes('biz-search') || currentUrl.includes('blog');

        if (isSubPage) {
            e.preventDefault();
            const entryHome = sessionStorage.getItem('entryHome') || 'index.html';
            const base = MAIN_DOMAIN_URL || window.location.origin;
            
            // 타 도메인에서 메인 도메인의 특정 해시로 정확히 슛!
            window.location.href = base + '/' + entryHome + href; 
        }
    }
});
