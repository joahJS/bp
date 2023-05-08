<template>
    <SubpHero />
        <section class="common-inner">
            <h1 data-common-head-title>인증서</h1>
            <div id="cerTexts">
                <div @click="item.detailView = !item.detailView" v-for="item in certGroup" data-cert-item>
                    <article>
                        <img data-cert-thumnail :src="item.thumImg" alt="">
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.subTitle }}</p>
                    </article>
                    <div data-cert-detail-view v-if="item.detailView">
                        <div data-cert-detail-body>
                            <img :src="item.detailImg" alt="인증서 상세보기 이미지">
                            <p data-cert-detail-close>클릭하여 닫기</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script setup>
    import SubpHero from '@/components/SubpHero.vue';
    //store에서 영역별 데이터 import
    import { useIntroStore } from '@/store/introsStore'
    import { storeToRefs } from 'pinia';

    const introStore = useIntroStore()
    const { certGroup } = storeToRefs(introStore)

</script>

<style lang="scss" scoped>
    #cerTexts {
        @apply grid;

        gap: 1.75rem;
        grid-template-columns: repeat(4, 1fr);
        
    }

    [data-cert-item] {
        

        background-color: rgba(var(--black) .075);
        aspect-ratio: 1/1;

        [data-cert-thumnail] {
            border-radius: 50%;
            width: 8.5rem;
            aspect-ratio: 1/1;
            object-fit: cover;
            margin-bottom: 1.75rem;
        }

        h3 {
            font-size: 1.125rem;
            font-weight: bold;
            margin-bottom:.35rem;
        }

        p {
            font-size: 1.125rem;
        }

        > article {
            @apply flex flex-col justify-center items-center cursor-pointer;

            height: -webkit-fill-available;

            &:hover {
                opacity: .75;
            }
        }
    }

    [data-cert-detail-view] {
        @apply fixed top-0 left-0;

        width: 100vw;
        height: 100vh;
        background-color: rgba(var(--black) .85);
        z-index: 9;

        [data-cert-detail-body] {
            @apply absolute;

            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            img {
                @apply w-full;

                object-fit: cover;
                height: 80vh;
            }
        }

        [data-cert-detail-close] {
            @apply absolute cursor-pointer;

            bottom: -2rem;
            right: 0;
            color: rgba(var(--white), 1);
        }
    }
</style>