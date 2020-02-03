<template>
    <div class="site-footer">
        <div class="site-keyLinks">
            <p></p>
        </div>
        <div class="site-copyright">
            <p>
                Designed and built with all the love in the world by
                <a rel="GitHub" :href="copyright.GitHub" target="_blank">@HT</a>.
                Maintained by the
                <a href="#" target>core team</a> with the help of
                <a href target="_blank">our contributors</a>.
            </p>
            <p>
                本项目源码受
                <a rel="license" :href="copyright.MIT" target="_blank">MIT</a> 开源协议保护，文档受
                <a rel="license" :href="copyright.CreativeCommons" target="_blank">CC BY 3.0</a> 开源协议保护。
            </p>
        </div>
    </div>
</template>

<script>
/**
 * 网站的版权信息
 * @module SiteCopyright
 * @author HT 2020/01/17
 */
import { copyright, keyLinks } from "static/config/site.json";

export default {
    name: "SiteCopyright",
    data() {
        return {
            // 链接信息
            keyLinks,
            // 版本信息
            copyright
        };
    }
};
</script>

<style lang="less" scoped>
.site-footer {
    padding: 1.25rem 0;
    text-align: center;
    p {
        margin: 0;
    }
}
</style>