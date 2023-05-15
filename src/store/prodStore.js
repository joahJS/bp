//제품소개 데이터

import { defineStore } from 'pinia'

export const useProdStore = defineStore('prod', () => {


    const cate01Group = ref([
        {
            index: '0',
            imgSrc: '/prod/prod_sample01.png',
            detailImg: '/prod/prod_detail_sample01.png',
            title: '스티프너',
            subTitle: 'Stiffener',
        },
        {
            index: '1',
            imgSrc: '/prod/prod_sample02.png',
            detailImg: '/prod/prod_detail_sample02.png',
            title: '도어 임팩트 빔',
            subTitle: 'Door Impact Beam',
        },
        {
            index: '2',
            imgSrc: '/prod/prod_sample03.png',
            detailImg: '/prod/prod_detail_sample03.png',
            title: '후방범퍼 빔',
            subTitle: 'Bumper Back Beam',
        },
    ])


    return { cate01Group }
})