// header + footer 데이터

import { defineStore } from "pinia"

export const usehfStore = defineStore('hdFt', () => {

    //Header


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


    return { ftGroup }
})