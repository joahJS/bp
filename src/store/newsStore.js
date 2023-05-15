//뉴스 데이터

import { defineStore } from 'pinia'

export const useNewsStore = defineStore('news', () => {

    const newsGroup = ref([
        {
            imgSrc: '/news/news_sample.jpg',
            reporter: 'abc통신',
            title: '황사·미세먼지·특보 따로 관리...미세먼지 대처 가능해?',
            linkTo: 'http://www.pineit.co.kr',
            subTexts: `미세먼지 문제가 이렇게 심각하지만 예보와 특보 체계는 엉망입니다. 황사는 기상청이, 미세먼지는 국립환경과학원이 담당하는데, 특보는 또 각 지자체에서 발령한다고 합니다.`,
        },
        {
            imgSrc: '/news/news_sample.jpg',
            reporter: 'abc통신',
            title: '황사·미세먼지·특보 따로 관리...미세먼지 대처 가능해?',
            linkTo: 'http://www.pineit.co.kr',
            subTexts: `미세먼지 문제가 이렇게 심각하지만 예보와 특보 체계는 엉망입니다. 황사는 기상청이, 미세먼지는 국립환경과학원이 담당하는데, 특보는 또 각 지자체에서 발령한다고 합니다.`,
        },
    ])

    return { newsGroup }
})