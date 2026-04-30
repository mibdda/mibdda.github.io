// =================================================================
// [ROUTING] 맞춤형 홈 및 섹션 귀환 로직 (개선본)
// =================================================================
document.addEventListener("DOMContentLoaded", function() {
    const entryHome = sessionStorage.getItem('entryHome') || 'index.html';
    const currentUrl = window.location.pathname;
    const isSubPage = currentUrl.includes('biz-search') || currentUrl.includes('blog');

    // 1. 로고 클릭 처리 (기존과 동일하게 유지 - 정상 동작)
    const logoLink = document.querySelector('.navbar-brand.brand-abs');
    if (logoLink && isSubPage) {
        logoLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = '/' + entryHome;
        });
    }
});

// 2. 메뉴(해시) 링크 처리 - 이벤트 위임 방식 (문서 전체에서 클릭 감지)
document.addEventListener('click', function(e) {
    // 사용자가 클릭한 요소가 a 태그인지(또는 a 태그 안의 글자인지) 확인
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    
    // href가 있고, '#'으로 시작하며, 단순 '#'이 아닌 경우 (#pricing, #faq 등)
    if (href && href.startsWith('#') && href.length > 1) {
        const currentUrl = window.location.pathname;
        const isSubPage = currentUrl.includes('biz-search') || currentUrl.includes('blog');

        if (isSubPage) {
            e.preventDefault(); // 서브페이지에서 앵커(해시) 작동을 강제로 멈춤
            const entryHome = sessionStorage.getItem('entryHome') || 'index.html';
            
            // 진입했던 홈의 해당 섹션으로 슛! (예: /creator.html#pricing)
            window.location.href = '/' + entryHome + href; 
        }
    }
});
