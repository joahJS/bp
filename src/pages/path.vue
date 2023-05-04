<template>
    <SubpHero />
        <section class="common-inner">
            <h1 data-common-head-title>오시는길</h1>
        </section>
</template>

<script setup>
    import SubpHero from '@/components/SubpHero.vue';
    //store에서 영역별 데이터 import
    import { useIntroStore } from '@/store/introsStore'
    import { storeToRefs } from 'pinia';

    const introStore = useIntroStore()
    const { pathGroup } = storeToRefs(introStore)

</script>

<style lang="scss" scoped>
    
</style>