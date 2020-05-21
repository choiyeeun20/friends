<template>
        <div id="app">
            <Layout>
                <template #header="self">
                    <router-link to="/"><h1 id="title">{{self.title}}</h1></router-link>
                    <router-link to="/join"><span id="join">{{self.join}}</span></router-link>
                    <router-link to="/login"><span id="login">{{self.login}}</span></router-link>
                </template>
            </Layout>
                </div>
</template>


<script>
    import Layout from "../components/common/Layout"
    export default {
        components: {Layout},
    }
</script>

<style scoped>
    #title{width: 300px;margin: 0 auto}
    #login{margin-right: 50px; float: right}
    #join{margin-right: 50px; float: right}

</style>