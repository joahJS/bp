// 공지사항 데이터

import { defineStore } from 'pinia'

export const useNoticeStore = defineStore('notice', () => {

    // 리스트
    const noticeGroup = ref([
        {
            index: 0,
            title: '홈페이지 단장!',
            regMonth: '10',
            regDay: '11',
            year: '2022',
            modals: false,
            img: '',
            text: [
                { 
                    texts: `본 사의 홈페이지가 새롭게 단장되었습니다.
                            많은 관심 부탁드립니다.` 
                },
            ]
        },
        {
            index: 1,
            title: '본사 이전 안내',
            regMonth: '12',
            regDay: '25',
            year: '2022',
            modals: false,
            img: '',
            text: [
                { 
                    texts: `2022 12/25 일자로 본사를 이전하게 되었습니다.
                            저희 임직원 일동은 새로운 마음가짐으로 정진하여 더욱 발전된 모습을 보여드릴 수 있도록 꾸준히 노력하겠습니다.
                            감사합니다.` 
                },
            ]
        },
        {
            index: 2,
            title: '2023년 새해가 밝았습니다.',
            regMonth: '01',
            regDay: '01',
            year: '2023',
            modals: false,
            img: '/subp_back.jpg',
            text: [
                { 
                    texts: `지난해 보내주신 따뜻한 성원과 관심 덕분에 2022년을 무사히 보낼 수 있었습니다.
                            다가오는 2023년에도 원하시는 일 모두 이루시고 건강한 한 해 되시기를 기원합니다.
                            감사합니다.` 
                },
            ]
        },
        {
            index: 3,
            title: '현대솔루션 공휴일 안내',
            regMonth: '04',
            regDay: '01',
            year: '2023',
            modals: false,
            img: '/ceo_sample.jpg',
            text: [
                { 
                    texts: `2023 04/01 현대솔루션 워크샵이 진행되는 관계로 모든 업무가 중단될 예정입니다.
                            일정에 참고바랍니다. 감사합니다.` 
                },
            ]
        },
    ])

    // 상세

    return { noticeGroup }

})