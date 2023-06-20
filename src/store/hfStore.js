// header + footer 데이터

import { defineStore } from "pinia"

export const usehfStore = defineStore('hdFt', () => {

    //Header

    const navText = ref([
        {
            navSubTexts: '고객만족과 최고의 품질최을 향한 집념으로 최선을 다하는',
            navTexts: '(주)소나무정보기술',
        }
    ])

    const navGroup = ref([
        
        {
            navId: 0,
            linkTo: '',
            title: '회사소개',
            subT: 'COMPANY',
            childrens: [
                { subTo: '/greet', subTitle: '인사말' },
                { subTo: '/hist', subTitle: '연혁' },
                { subTo: '/cert', subTitle: '인증서' },
                { subTo: '/path', subTitle: '오시는길' },
            ]
        },
        {
            navId: 1,
            linkTo: '',
            title: '제품소개',
            subT: 'BUSINESS',
            childrens: [
                { subTo: '/prod', subTitle: '스티프너', category: 'stiffener' },
                { subTo: '/prod', subTitle: '도어 임팩트 빔', category: 'doorImpactBeam' },
                { subTo: '/prod', subTitle: '후방범퍼 빔', category: 'bumperBackBeam' },
            ]
        },
        {
            navId: 2,
            linkTo: '',
            title: '고객지원',
            subT: 'CUSTOMER',
            childrens: [
                { subTo: '/noti', subTitle: '공지사항' },
                { subTo: '/data', subTitle: '자료실' },
                { subTo: '/news', subTitle: '뉴스' },
                { subTo: '/cont', subTitle: '문의하기' },
            ]
        },
    ])

    //Footer
    const ftGroup = ref([
        {
            ftLogo : '/CI_header_white.svg',
            address: '경남 밀양시 부북면 전사포리 사포산단 1길 90-11',
            tel: '055.000,0000',
            fax: '055.000.0001',
            cpr: 'copyright ⓒ 2023 pineit all rights reserved.',
        }
    ])
    

    return { ftGroup, navGroup, navText }
})