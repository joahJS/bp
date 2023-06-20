// 회사소개 메뉴 내 모든 서브메뉴 데이터

import { defineStore } from "pinia"

export const useIntroStore = defineStore('intro', () => {

    //인사말
    const grtGroup = ref([
        {
            img: '/ceo_sample.jpg',
            title: '성실, 근면, 창조',
            subT: "사훈 아래 고객만족 품질최고를 향한 집념으로 최선을 다하고 있는 저희 '주식회사 소나무정보기술' 홈페이지를 찾아주신 고객 여러분께 감사드립니다.",
            children: [
                {texts: "본사는 핫스탬핑 공법으로 차량용 충격 보강재의 개발 및 생산을 전문으로 하고 있으며, 축적된 기술력과 품질로 지속적으로 성장하여, 업계 선두주자로 위치하고 있습니다. 주식회사 소나무정보기술은 최고의 품질과 더 나은 환경경영을 실천하기 위해 고객 여러분의 곁에서 항상 최선을 다할 것을 약속드리겠습니다."},
                {texts: "충족과 변화를 요구하는 시대에 발맞추어, 인성과 기본을 갖춘 임직원은 고객을 만족시키는 품질과 납기 그리고 최상의 경쟁력으로 제품을 공급하기 위하여 끊임없이 노력하고 있으며, 내실 성장을 바탕으로 '고객이 찾는 회사'로 만들고자 최선을 다할 것입니다."},
                {texts: "다가오는 미래에 대비하고 고객과 생각을 같이하는 '꿈과 희망의 주식회사 소나무정보기술'이 될 것을 약속드리며, 여러분의 한결 같은 격려와 성원을 부탁드립니다."},
                {texts: "감사합니다."}
            ],
            position: '주식회사 소나무정보기술 대표이사',
            name: '최재영',
        },
    ])

    const hsGroup = ref([
        {
            years: '21',
            hists: [
                { text: '회사설립' }
            ]
        },
        {
            years: '22',
            hists: [
                { text: '산업통상자원부 지원 연구개발사업자 선정' },
                { text: '국내최초 `친환경 자원 순환형(재활용성) 드라이아이스 포장재` 개발 출시' },
                { text: '국내최초 녹색기술인증 `재생수지 사용 친환경 농업용 멀칭필름` 개발 출시' },
                { text: '국내최초 녹색기술인증 `재생수지 사용 친환경 아이스팩 포장재` 개발 출시' },
                { text: '국내최초 `마스크용 친환경 재활용성 코팅종이 포장재` 개발 출시' },
                { text: '환경부 지원 연구개발사업자 선정(폐비닐 재생이용 친환경 포장재 및 자동차부품용 소재 개발 및 사업화)' },
            ]
        },
        {
            years: '23',
            hists: [
                { text: '국내최초 녹색기술인증 `전자레인지 사용 가능 친환경 재활용성 컵라면 종이용기` 개발 출시' },
                { text: '농업진흥청 지원 연구개발사업자 선정(폐비닐 유래 재생수지 60wt% 사용 친환경 고강인성 멀칭필름 개발)' },
            ]
        },
    ])

    const certGroup = ref([
        {
            thumImg: '/img/iso_logo.png',
            title: '품질경영시스템 인증서',
            subTitle: 'ISO 9001:2015',
            detailImg: '/img/iso.jpg',
            detailView: false
            
        },
        {
            thumImg: '/img/logo_gs.jpg',
            title: '소프트웨어 품질인증서',
            subTitle: '스마트가드레일 시스템 모니터링',
            detailImg: '/img/gs.jpg',
            detailView: false
        },
    ])

    const pathGroup = ref([
        {
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.6097521447805!2d129.03095927715802!3d35.141410972766344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568ebb40a6cf031%3A0xf255b7423a881690!2zKOyjvCnshozrgpjrrLTsoJXrs7TquLDsiKA!5e0!3m2!1sko!2skr!4v1683783864134!5m2!1sko!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
            title: '본사',
            locate: '부산광역시 부산진구 가야동 467번지 산학협력관 331호',
            mail: 'support@pineit.co.kr',
            call: '051-714-0034',
        },
    ])


    return { grtGroup, hsGroup, certGroup, pathGroup }
})