// header + footer 데이터

import { defineStore } from "pinia"

export const usehfStore = defineStore('hdFt', () => {

    //Header

    const navText = ref([
        {
            navSubTexts: '고객만족 품질최고를 향한 집념으로 최선을 다하는',
            navTexts: '현대오토솔루션',
        }
    ])

    const navGroup = ref([
        
        {
            navId: 0,
            linkTo: '',
            title: '회사소개',
            subT: 'COMPANY',
            childrens: [
                { subTo: '/greet', subTitle: '인사말', groupId: 0 },
                { subTo: '/hist', subTitle: '연혁', groupId: 0 },
                { subTo: '/cert', subTitle: '인증서', groupId: 0 },
                { subTo: '/path', subTitle: '오시는길', groupId: 0 },
            ]
        },
        {
            navId: 1,
            linkTo: '',
            title: '제품소개',
            subT: 'BUSINESS',
            childrens: [
                { subTo: '/prod', subTitle: '제품', groupId: 1 },
            ]
        },
        {
            navId: 2,
            linkTo: '',
            title: '고객지원',
            subT: 'CUSTOMER',
            childrens: [
                { subTo: '/noti', subTitle: '공지사항', groupId: 2 },
                { subTo: '/data', subTitle: '자료실', groupId: 2 },
                { subTo: '/news', subTitle: '뉴스', groupId: 2 },
                { subTo: '/cont', subTitle: '문의하기', groupId: 2 },
            ]
        },
    ])

    //Footer
    const ftGroup = ref([
        {
            ftLogo : '/logo_w.png',
            address: '경남 밀양시 부북면 전사포리 사포산단 1길 90-11',
            tel: '055.000,0000',
            fax: '055.000.0001',
            cpr: 'copyright ⓒ 2023 pineit all rights reserved.',
        }
    ])
    

    return { ftGroup, navGroup, navText }
})