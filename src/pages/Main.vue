<template>
    <section id="mainSection">
        <div data-main-catch-phrase class="common-inner">
            <div>
                <p>고객을 먼저 생각하고, 고객이 만족하는</p>    
            </div>
            <div data-main-catch-bottom>    
                <h1>HYUNDAI AUTO SOLUTION</h1>
                <div></div>
            </div>
            
        </div>
        <p></p>
    </section>
</template>

<script setup>


    
    
</script>

<style lang="scss" scoped>
    #mainSection {
        @apply fixed;

        top:0;
        left:0;
        width: 100vw;
        height: 100vh;
        background-image: url('/img/main_back.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        z-index: -1;
    }

    [data-main-catch-phrase] {
        @apply flex flex-col w-full absolute;

        top: 50%;
        left: 50%;
        gap: 1rem;

        p {
            font-size: 1.25rem;
            font-weight: 100;
        }

        h1 {
            font-size: 2.5rem;
        }

        > div {
            color: rgb(var(--white));
            transform: translate(-50%, -50%);

        }

        [data-main-catch-bottom] {
            @apply grid;

            grid-template-columns: max-content 1fr;
            align-items: center;
            gap: 1rem;

            div {
                height: 2px;
                background-color: rgb(var(--white));
                
            }
        }
    }

    
</style>