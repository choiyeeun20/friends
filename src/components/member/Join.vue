<template>
    <div>
        <h2>회원가입</h2>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        methods : mapActions([
            'join'
        ])
    }

</script>

<style scoped>

</style>