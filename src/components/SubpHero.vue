<template>
    <section id="subpHero">
        <h2 data-subp-header> </h2>
        <ul data-subp-tap>
            <li></li>
        </ul>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    #subpHero {
        @apply w-full relative;

        margin-top: 6.25rem;
        height: 31.25rem;
        background-image: url(/subp_back.jpg);
        background-position: center center;
        background-size: cover;

    }

    [data-subp-header] {
        @apply absolute;

        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 5rem;
        color: rgb(var(--white));
    }

    [data-subp-tap] {
        @apply flex;

        li {
            @apply flex justify-center items-center;

            background-color: rgba(var(--white), .8);
            border-radius: .25rem .25rem 0 0;
            width: 10rem;
        }
    }
</style>