// =================================================================
// [MAP] 카카오지도 설정
// =================================================================
var kangnamMap;
var sinnonhyeonMap;
var geocoder;

// 카카오 맵 로드 후 실행 (Kakao SDK가 로드된 상태여야 함)
if (typeof kakao !== 'undefined' && kakao.maps) {
    geocoder = new kakao.maps.services.Geocoder();

    // 1. [기존 구조 유지] 첫 화면에 꽂히는 강남역점 지도 즉시 생성
    createKangnamMap();

    // 2. [기존 구조 유지] 탭 전환 이벤트 리스너 (신논현점을 클릭할 때 지연 생성)
    const sinnonhyeonTab = document.getElementById('sinnonhyeon-map-tab');
    let isSinnonhyeonMapLoaded = false;

    if (sinnonhyeonTab) {
        sinnonhyeonTab.addEventListener('shown.bs.tab', function(event) {
            if (!isSinnonhyeonMapLoaded) {
                createSinnonhyeonMap();
                isSinnonhyeonMapLoaded = true;
            }
            if (sinnonhyeonMap) sinnonhyeonMap.relayout();
        });
    }

    const kangnamTab = document.getElementById('kangnam-map-tab');
    if (kangnamTab) {
        kangnamTab.addEventListener('shown.bs.tab', function(event) {
            if (kangnamMap) kangnamMap.relayout();
        });
    }
}

function createKangnamMap() {
    const container = document.getElementById('map_kangnam'); // 바뀐 HTML ID 매칭
    if (!container) return;

    const options = { center: new kakao.maps.LatLng(37.4979, 127.0276), level: 3 };
    kangnamMap = new kakao.maps.Map(container, options);

    const zoomControl = new kakao.maps.ZoomControl();
    kangnamMap.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    const address = '서울특별시 강남구 테헤란로6길 26';
    geocoder.addressSearch(address, function(result, status) {
        if (status === kakao.maps.services.Status.OK && result.length > 0) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            kangnamMap.setCenter(coords);

            const imageSrc = 'images/thebridgeplus-marker.png';
            const imageSize = new kakao.maps.Size(48, 60);
            const imageOption = { offset: new kakao.maps.Point(24, 60) };
            const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

            const marker = new kakao.maps.Marker({ position: coords, image: markerImage });
            marker.setMap(kangnamMap);

            const infowindow = new kakao.maps.InfoWindow({
                content: `<div style="padding:8px 13px; font-size:11px; text-align:center; width:220px;">더브릿지플러스 강남역점<br>서울특별시 강남구 테헤란로 6길 26, 3층</div>`
            });
            infowindow.open(kangnamMap, marker);
        }
    });
}

function createSinnonhyeonMap() {
    const container = document.getElementById('map_sinnonhyeon');
    if (!container) return;
    
    const options = { center: new kakao.maps.LatLng(37.5044, 127.0240), level: 3 };
    sinnonhyeonMap = new kakao.maps.Map(container, options);

    const zoomControl = new kakao.maps.ZoomControl();
    sinnonhyeonMap.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    const address = '서울특별시 강남구 강남대로114길 18';
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
                content: `<div style="padding:8px 13px; font-size:11px; text-align:center; width:220px;">더브릿지플러스 신논현점<br>서울특별시 강남구 강남대로114길 18, 4층</div>`
            });
            infowindow.open(sinnonhyeonMap, marker);
        }
    });
}
