<template>
    <b-progress :value="loadingProgress" variant="success" class="site-progress-height"></b-progress>
</template>

<script>
/**
 * 网站的加载进度条? 大约是的那
 * @module SiteAdver
 * @author HT 2020/01/17
 */

export default {
    name: "SiteLoading",
    data() {
        return {
            loadingProgress: 100
        };
    },
    watch: {
        // 此处应有进度的模拟监听
    },
    method: {}
};
</script>

<style lang="less" scoped>
</style>