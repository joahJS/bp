<template>
    <footer v-if="useRoute().path !== '/'" v-for="item in ftGroup">
        <div class="common-inner">
            <img data-ft-logo :src="item.ftLogo" alt="logo-footer">
            <section>
                <ul data-ft-menus>
                    <li>개인정보 처리방침</li>
                    <li>이용약관</li>
                    <li>공지사항</li>
                </ul>
                <article>
                    <p>{{ item.address }}</p>
                    <p>TEL : {{ item.tel }}</p>
                    <p>FAX : {{ item.fax }}</p>
                </article>
                <p>{{ item.cpr }}</p>
            </section>
        </div>
        
    </footer>
</template>

<script setup>
    import { useRoute } from 'vue-router'
    //store에서 영역별 데이터 import
    import { usehfStore } from '@/store/hfStore'
    import { storeToRefs } from 'pinia';

    const hfStore = usehfStore()
    const { ftGroup } = storeToRefs(hfStore)

</script>

<style lang="scss" scoped>
    footer {
        @apply w-full flex;

        padding: 2rem 0;
        background-color: rgba(var(--black) .753);
        color: rgb(var(--white));
        font-weight: 100;

        > .common-inner {
            @apply flex w-full;

            gap: 2rem;

            img {
                width: 4rem;
            }
        }

        section {
            @apply flex flex-col;

            gap: 1.5rem;

            p {
                user-select: none;
                line-height: 1.7;
            }
        }
    }

    [data-ft-menus] {
        @apply flex;

        gap: 1.25rem;

        li {
            @apply cursor-pointer;

            &+li:before {
                content: '';
                display: inline-block;
                width: 1px;
                height: .75rem;
                background-color: rgb(var(--white));
                margin-right: 1.25rem;
            }
        }
    }

    [data-ft-logo] {
        @apply object-contain;

        user-select: none;
        pointer-events: none;
    }

    //mediaquery
    @media screen and (max-width: 767px) {
        footer {

            font-size: var(--fontM);
            > .common-inner {
                @apply flex-col;

                [data-ft-logo] {
                    margin: 0 auto;
                }
            }
        }

        
    }


</style>