<template>
    <SubpHero />
    <section class="common-inner">
        <h1 data-common-head-title>뉴스</h1>
        <div id="prodTexts">
            <div v-for="item in cate01Group" data-prod-item>
                <div data-item-img>
                    <img :src="item.imgSrc" alt="">
                </div>
                <hgroup class="common-ellipsis">
                    <h2></h2>
                    <p></p>
                </hgroup>
            </div>
        </div>
    </section>
</template>

<script setup>
    import SubpHero from '@/components/SubpHero.vue';

    //store에서 영역별 데이터 import
    import { useProdStore } from '@/store/prodStore'
    import { storeToRefs } from 'pinia';

    const prodStore = useProdStore()
    const { cate01Group } = storeToRefs(prodStore)
</script>

<style lang="scss" scoped>
    #prodTexts {
        @apply grid;

        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }

    [data-prod-item] {
        @apply flex flex-col;

        gap: .5rem;

    }

    [data-item-img] {
        border: 1px solid rgba(var(--main-clr), 1);
        aspect-ratio: 1/1;

        img {
            @apply w-full;
            
            object-fit: cover;
        }
    }

    hgroup {
        @apply flex items-end;
        
        gap: .5rem;
        -webkit-line-clamp: 1;

        h2 {
            font-size: var(--fontMT);
            font-weight: bold;
        }

        p {
            font-size: var(--fontM);
        }
    }
</style>