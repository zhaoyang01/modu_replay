<template>
    <div class="site-layout">
        <header :class="['bg-light', {'border-bottom': isMobile}]">
            <SiteLoading></SiteLoading>
            <SiteNav class="container-xl"></SiteNav>
        </header>
        <main class="container-xl">
            <SiteAdver v-if="!isMobile"></SiteAdver>
            <slot v-if="false"></slot>
        </main>
        <footer class="bg-dark">
            <SiteMobileNav v-if="isMobile"></SiteMobileNav>
            <SiteCopyright v-if="!isMobile"></SiteCopyright>
        </footer>
    </div>
</template>
<script>
/**
 * 网站的框架结构实现, 这里包括以下内容
 * 1.网站结构: 上下分离
 * 2.移动端组件和PC端组件的分离
 * @module SiteLayout
 * @author HT
 */
import SiteNav from "./nav";
import SiteLoading from "./loading";
import SiteMobileNav from "./mobile-nav";
import SiteAdver from "./adver";
import SiteCopyright from "./copyright";
export default {
    name: "SiteLayout",
    components: {
        SiteNav, // 导航栏（顶部）
        SiteMobileNav, // 移动端导航栏（底部）
        SiteAdver, // 巨幕广告区
        SiteLoading, // 顶部进度条
        SiteCopyright // 版权信息
    },
    data() {
        return {
            // menus,
            // adver,
            isMobile: this.$Bowser.isMobile
        };
    },
    mounted() {
        // console.log( this.$Bowser )
    },
    methods: {
        linkToSearch() {
            console.log("!! linkToSearch !!");
        }
    }
};
</script>  
<style lang="less" scoped>
.site-layout {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    .site-progress-height {
        height: 0.25rem;
    }
    main{ height: 100%; }
}
</style>