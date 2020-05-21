<template>
    <div>
        <h3>로그인</h3>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        methods :mapActions([
            'login'
        ])


    }
</script>

<style scoped>

</style>