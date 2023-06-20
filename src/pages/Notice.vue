<template>
    <SubpHero />
    <section id="histBody" class="common-inner">
        <h1 data-common-head-title>공지사항</h1>
        <div id="notiTexts" class="ani_down">
            <!-- item -->            
            <div v-for="item in noticeGroup" data-notice-item @click="[isOpened = true, getNum(item.index)]">                
                <div data-notice-item-dates>
                    <h2>{{ item.regMonth }}</h2>
                    <h2>{{ item.regDay }}</h2>
                </div>
                <div data-notice-item-texts>
                    <h3>{{ item.title }}</h3>
                    <p v-for="subItem in item.text">{{ subItem.texts }}</p>
                </div>
            </div>
            <!-- item end -->
            
            <!-- 상세페이지 modal -->
            <div data-notice-modal v-for="mdItem in noticeGroup[modalId]" v-if="isOpened">
                <div data-notice-modal-texts>
                    <div data-notice-item-dates>
                        <h2>{{ noticeGroup[modalId].regMonth }}</h2>
                        <h2>{{ noticeGroup[modalId].regDay }}</h2>
                        <p>{{ noticeGroup[modalId].year }}</p>
                    </div>
                    <div data-notice-item-texts>
                        <h3>{{ noticeGroup[modalId].title }}</h3>
                        <img v-if="noticeGroup[modalId].img != ''" :src="noticeGroup[modalId].img" alt="">
                        <p v-for="mdSubItem in noticeGroup[modalId].text">{{ mdSubItem.texts }}</p>
                    </div>
                    <button @click="isOpened = !isOpened" class="common-button-style">
                        <font-awesome-icon icon="fa-regular fa-circle-xmark" />
                    </button>
                </div>
            </div>
            <!-- 상세페이지 modal end -->
        </div>
    </section>
</template>

<script setup>
    import SubpHero from '@/components/SubpHero.vue';

    //store에서 영역별 데이터 import
    import { useNoticeStore } from '@/store/noticeStore'
    import { storeToRefs } from 'pinia';
    import { watch } from 'vue';

    
    const isOpened = ref(false)

    const noticeStore = useNoticeStore()
    const { noticeGroup } = storeToRefs(noticeStore)

    let modalId = ref()

    function getNum(e) {
        modalId = e
        
    }


    
</script>

<style lang="scss" scoped>
    #notiTexts {
        @apply grid;

        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;      
    }

    [data-notice-item] {
        @apply flex flex-col cursor-pointer;

        padding: 1rem 2rem;
        background-color: rgba(var(--black) .075);
        border-radius: .5rem;

        & * {
            user-select: none;
        }

        &:hover {
            background-color: rgba(var(--main-clr), 1);

            & * {
                color: rgba(var(--white), 1);
            }

            [data-notice-item-dates] {
                border-bottom: 1px solid rgba(var(--white), 1);
            }
        }
    }

    [data-notice-item-dates] {
        @apply flex flex-col;

        border-bottom: 1px solid rgba(var(--black) 1);
        padding-bottom: 1.5rem;

        h2 {
            font-size: 2rem;
            font-weight: normal;
            text-align: right;
            line-height: 1.35;
        }
    }

    [data-notice-item-texts] {
        @apply flex flex-col overflow-scroll;

        max-height: 50vh;

        h3 {
            font-weight: bold;
            margin-top: 2rem;
            font-size: var(--fontMT);
        }

        p {
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            margin-top: 2rem;
            height: 4.5rem;
        }

        img {
            margin-top: 2rem;
            aspect-ratio: 16/9;
            object-fit: contain;
            object-position: left;
        }


    }

    //상세페이지 modal
    [data-notice-modal] {
        @apply fixed top-0 left-0;

        cursor: auto;
        width: 100vw;
        height: 100vh;
        background-color: rgba(var(--black) .15);
        z-index: 10;

        [data-notice-item-texts] {

            h3 {
                font-size: 2rem;
                margin-top: 3rem;
            }

            p {
                margin-top: 3rem;
                overflow: visible;
                height: auto;
                display: block;
            }
            
            &::-webkit-scrollbar {
                width: .35rem;
                display: block;
            }

            &::-webkit-scrollbar-thumb {
                background: rgba(var(--main-clr), .1);
                border-radius: .5rem;
                
            }
        }

        [data-notice-item-dates] {
            padding-bottom: 2rem;
            border-bottom: 3px solid rgba(var(--main-clr), 1);

            p {
                text-align: right;
                margin-top: .5rem;
                opacity: .5;
            }
        }

        button {
            @apply absolute;

            bottom: 2rem;
            right: 3rem;
        }
        
    }

    [data-notice-modal-texts] {
        @apply fixed;

        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(var(--white), 1);
        padding: 2.5rem;
        width: calc(100% - 1rem);
        min-width: 50vw;
        max-width: 60rem;
        height: 75vh;
        border-radius: 0.5rem;
        
    }

    //mediaquery
    @media (max-width: 1279px){
        #notiTexts {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
        }


    }

    @media (max-width: 767px){
        #notiTexts {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
        }

        [data-notice-item] {
            padding: 1.5rem 2rem;
        }

        [data-notice-item-texts] {
            h3 {
                margin-top: 1.5rem;
            }
        }

        [data-notice-item-dates] {

            h2 {
                font-size: var(--fontST);
            }
        }

        [data-notice-modal] {

            [data-notice-item-dates] {
                padding-bottom: 1rem;
            }

            [data-notice-modal-texts] {
                padding: 1.5rem 1.5rem 5rem 1.5rem;
                min-height: 50vh;
                max-height: 75vh;
                height: auto;

                h3 {
                    font-size: var(--fontMT);
                }

                p {
                    font-size: var(--fontM);
                }

            }

            [data-notice-item-texts] {

                h3 {
                    margin-top: 2rem;
                }

                p {
                    line-height: 1.75;
                }
            }
        }
    }

    @media (max-width: 500px){
        #notiTexts {
            grid-template-columns: 1fr;
            gap: 1rem;
        }
    }



</style>