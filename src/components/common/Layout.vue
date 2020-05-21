<template>
    <div id="wrapper">
        <header>
            <slot name ="header"
                :title ="title"
                :login = "login"
                :join ="join"></slot>
        </header>

    </div>
</template>

<script>
    export default {
        name: "Layout",
        data(){
            return {
                title: '비대면 이사전문업체',
                login: '업체용 로그인',
                join: '업체용 회원가입'
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    #wrapper {
        padding: 5px;
        width: 960px;
        margin: 20px auto;
    }
    header {
        height: 100px;
        padding: 0 15px;
    }
    header, footer {
        padding: 1% 4%;
    }
    header, #content, #middle, #sidebar {
        margin-bottom: 5px;
    }
    #pagewrap, header, #content, #middle, #sidebar, footer {
        border: solid 1px #ccc;
    }
</style>