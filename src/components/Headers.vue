<template>
    <header :class="{'nav-back-transp': useRoute().path == '/' }">
        <div class="common-inner">
            <router-link to="/">
                <img v-if="useRoute().path == '/'" data-main-logo src="/logo_w.png" alt="메인 로고 이미지">
                <img v-else data-main-logo src="/logo_s.png" alt="메인 로고 이미지">
            </router-link>
            <nav>
                <div :class="{'nav-back-transp': useRoute().path == '/' }" class="nav-main-list" v-for="item in navGroup" @mouseenter="item.openStat = true" @mouseleave="item.openStat = false" ref="lists">                    
                    <!-- <div class="nav-main-list" v-for="item in navGroup" @mouseenter="item.openStat = true" @mouseleave="item.openStat = false" ref="lists">                     -->
                    <p>{{ item.title }}</p>
                    <ul :class="{'nav-back-transp': useRoute().path == '/' }" v-if="item.openStat == true" class="nav-sub-list">
                        <li v-for="subItem in item.childrens">
                            <router-link :to="subItem.subTo">
                                {{ subItem.subTitle }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div @click="navModalSt = !navModalSt" id="navModalBtn" :class="{'nav-modal-btn-relative': mobVerIsShow == true, 'nav-modal-opened': navModalSt == true}">
                <span :class="{'nav-btn-white': useRoute().path == '/' }"></span>
                <span :class="{'nav-btn-white': useRoute().path == '/' }"></span>
                <span :class="{'nav-btn-white': useRoute().path == '/' }"></span>
            </div>
        </div>
        <div v-if="navModalSt" id="navModal">
            <section>
                <div data-nav-modal-menus v-for="item in navGroup">
                    <p data-nav-modal-head>
                        {{ item.title }}
                        <span>{{ item.subT }}</span>
                    </p>
                    <ul data-nav-modal-list>
                        
                        <li v-for="subItem in item.childrens">
                            <router-link :to="subItem.subTo">
                                {{ subItem.subTitle }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </section>
            
        </div>
        
    </header>
</template>

<script setup>
    //store에서 영역별 데이터 import
    import { usehfStore } from '@/store/hfStore'
    import { storeToRefs } from 'pinia';

    const hfStore = usehfStore()
    const { navGroup } = storeToRefs(hfStore)

    const navModalSt = ref(false)
    var mobVerIsShow = ref(false)
    
    // 해상도 1600px 이하일 시 
    if ( matchMedia("(max-width: 1600px)").matches ) {
        mobVerIsShow.value = true
    }


    const subOpen = ref(false);

    import { useRoute } from 'vue-router'
    const route = useRoute()


    watch(route, (to, from) => {
        //페이지 이동시 메뉴팝업 닫기
        navModalSt.value = false

    })

</script>

<style lang="scss" scoped>
    header{
        @apply fixed top-0 w-full flex;

        height: 6.25rem;
        background-color: rgba(var(--white), 1);
        z-index: 9;

        > .common-inner {
            @apply flex items-center w-full;
        }
    }

    header.nav-back-transp, .nav-sub-list.nav-back-transp {
        background-color: rgba(var(--white), 0);
        color: rgb(var(--white));
    }

    .nav-main-list.nav-back-transp:hover {
        @apply relative;

        &:after {
            @apply absolute block;

            content: '';
            width: -webkit-fill-available;
            height: 2px;
            background-color: rgb(var(--white));
            bottom: .75rem;
            left: 50%;
            transform: translate(-50%);
        }

        // border-bottom: 2px solid rgb(var(--white));
        // margin-bottom: -2px;
    }

    [data-main-logo] {
        @apply cursor-pointer;

        width: 3rem;

    }

    nav {
        @apply flex;

        gap: .5rem;
        margin-left: auto;
        margin-top: 1.25rem;
    }

    .nav-main-list {
        @apply relative cursor-pointer;

        height: fit-content;
        padding: 1.5rem 1.5rem;
    }

    .nav-sub-list {
        @apply flex flex-col absolute w-full;

        top: 3rem;
        left: .75rem;
        gap: .5rem;
        z-index: 99;
        background-color: rgb(var(--white));
        padding-top: 1rem;

        li {
            padding:.25rem .75rem;
            user-select: none;

            &:hover {
                cursor: pointer;
                font-weight: 900;
            }
        }
    }

    // MODAL

    #navModalBtn {
        @apply flex flex-col cursor-pointer absolute;

        right: 3.25rem;
        gap: .31rem;
        padding: 1rem;
        margin-top: 1.25rem;

        span {
            width: 1.5rem;
            height: 2px;
            background-color: rgb(var(--black) 1);

            &.nav-btn-white {
                background-color: rgb(var(--white));
            }
        }

        &.nav-modal-btn-relative {
            @apply relative;

            right: 0;
            margin-left: 3.25rem;
        }

        &.nav-modal-opened {
            z-index: 999;

            span {
                @apply relative;

                transition: .5s;
                transform-origin: 12px -3px;
                background-color: rgb(var(--white));

                &:first-child {
                    transform: rotate(45deg);
                    
                }

                &:nth-child(2) {
                    display: none;
                }

                &:last-child {
                    transform: rotate(135deg);
                }
            }
        }
    }

    #navModal {
        @apply fixed top-0 right-0;

        width: 50vw;
        height: 100vh;
        background-color: rgba(var(--black) .8);

        [data-nav-modal-menus] {
            @apply flex flex-col;    

            color: rgb(var(--white));

            &+div {
                margin-top: 3.75rem;
            }
            
        }

        > section {
            @apply absolute;

            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

        }

    }

    [data-nav-modal-head] {
        font-size: 2rem;
        font-weight: 300;
        user-select: none;

        span {
            font-size: 1.25rem;
        }
    }

    [data-nav-modal-list] {
        @apply flex flex-col;

        top: 3rem;
        gap: 1.5rem;
        margin-top: 1.5rem;

        li {
            cursor: pointer;

            &:hover {
                font-weight: 700;
            }
        }
    }

    //mediaquery
    @media (max-width: 767px){
        nav {
            display: none;
        }

        #navModalBtn {
            margin-top: 0;
            margin-left: auto;
        }
    }

</style>