<template>
    <header>
        <div class="common-inner">
            <img @click="locate.href='/'" data-main-logo src="/img/main_logo.png" alt="메인 로고 이미지">
            <nav>
                <div class="nav-main-list" v-for="item in navGroup" @mouseenter="item.openStat = true" @mouseleave="item.openStat = false">
                    <p>{{ item.title }}</p>
                    <ul v-if="item.openStat == true" class="nav-sub-list">
                        <li v-for="subItem in item.childrens">
                            <router-link :to="subItem.subTo">
                                {{ subItem.subTitle }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        
    </header>
</template>

<script setup>
    const navGroup = ref([
        {
            navId: 0,
            linkTo: '',
            title: '회사소개',
            openStat: false,
            childrens: [
                { subTo: '/intro', subTitle: '인사말' },
                { subTo: '/hist', subTitle: '연혁' },
                { subTo: '/cert', subTitle: '인증서' },
                { subTo: '/path', subTitle: '오시는길' },
            ]
        },
        {
            navId: 1,
            linkTo: '',
            title: '제품소개',
            openStat: false,
            childrens: [
                { subTo: '/prod', subTitle: '제품' },
            ]
        },
        {
            navId: 2,
            linkTo: '',
            title: '고객지원',
            openStat: false,
            childrens: [
                { subTo: '/noti', subTitle: '공지사항' },
                { subTo: '/data', subTitle: '자료실' },
                { subTo: '/news', subTitle: '뉴스' },
                { subTo: '/cont', subTitle: '문의하기' },
            ]
        },
    ])

    const subOpen = ref(false);

</script>

<style lang="scss" scoped>
    header{
        @apply fixed top-0 w-full;

        height: 5rem;
        background-color:rgba(var(--white), 1);

        > .common-inner {
            @apply flex items-center;
        }
    }

    [data-main-logo] {
        @apply cursor-pointer;

        width: 3rem;

    }

    nav {
        @apply flex;

        gap: .5rem;
        margin-left: auto;
    }

    .nav-main-list {
        @apply relative cursor-pointer;

        height: fit-content;
        padding: 0.5rem;
    }

    .nav-sub-list {
        @apply flex flex-col absolute;

        top: 2.5rem;
        gap: .5rem;
    }
</style>