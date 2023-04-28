<template>
    <header>
        <img src="pb/img/main_logo.png" alt="메인 로고 이미지">
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
                { subTo: '/grt', subTitle: '인사말' },
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
        @apply flex;
    }

    nav {
        @apply flex;

        gap: .5rem;
    }

    .nav-main-list {
        height: fit-content;
    }

    .nav-sub-list {
        @apply flex flex-col;

        gap: .5rem;
    }
</style>