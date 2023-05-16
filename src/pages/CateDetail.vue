<template>
    <SubpHero />
    <section class="common-inner">
        <h1 data-common-head-title></h1>

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

</style>