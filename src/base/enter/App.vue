<template>
    <div id="app">
        <SiteLayout>
            <router-view ></router-view>
        </SiteLayout>
    </div>
</template>

<script>
import SiteLayout from "@/components/site/layout"

export default {
    name: "App",
    components: {
        SiteLayout,      // 页面的框架
    }
};
</script>

<style>
#app {
    position: relative;
    width: 100%;
    height: 100%;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
