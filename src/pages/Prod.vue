<template>
    <SubpHero />
    <section class="common-inner">
        <div v-for="nvItem in navGroup">
            <hgroup v-for="subNvItem in nvItem.childrens.filter((f) => f.category == getCate)">
                <h1 data-common-head-title>{{ subNvItem.subTitle }}</h1>
            </hgroup>
        </div>
        
        <div id="prodTexts">
            <div v-for="item in prodGroup.filter((c) => c.category == getCate)" data-prod-item>
                <router-link :to="{ name: 'ProdDetail', params: { id: item.index } }">
                    <div data-item-img>
                        <img :src="item.imgSrc" alt="">
                    </div>
                    <hgroup class="common-ellipsis">
                        <h2>{{ item.title }}</h2>
                        <p>{{ item.subTitle }}</p>
                    </hgroup>
                </router-link>
            </div>
        </div>
   
    </section>
</template>

<script setup>
    import SubpHero from '@/components/SubpHero.vue';
    import { useRoute } from 'vue-router'

    //store에서 영역별 데이터 import
    import { useProdStore } from '@/store/prodStore'
    import { storeToRefs } from 'pinia';
    const prodStore = useProdStore()
    const { prodGroup } = storeToRefs(prodStore)
    

    import { usehfStore } from '@/store/hfStore'
    const hfStore = usehfStore()
    const { navGroup } = storeToRefs(hfStore)


    const getParams = useRoute();
    const getCate = getParams.params.category

    console.log(getCate)
</script>

<style lang="scss" scoped>
    #prodTexts {
        @apply grid;

        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }

    [data-prod-item] {
        @apply flex flex-col cursor-pointer;

        gap: .5rem;        

        hgroup {
            @apply flex;

            user-select: none;
        }

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