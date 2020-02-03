<template>
    <div class="site-mobile-nav">
        <b-nav class="border-top" type="light" variant="light">
            <b-nav-item
                v-for="(item, index) in menus"
                :class="[{active: SiteNavActive === index}]"
                :href="item.link || '#'"
                :key="`SiteNav${index}`"
                :title="item.link ? item.label : '开发小哥努力加班中...' "
            >{{item.label}}</b-nav-item>
        </b-nav>
    </div>
</template>
<script>
/**
 * 网站的底部的导航栏
 * @module SiteMobileNav
 * @author HT 2020/01/21
 */
import { menus } from "static/config/site.json";

export default {
    name: "SiteMobileNav",
    data() {
        return {
            // 导航菜单
            menus,
            // 站点的选中
            SiteNavActive: 0
        };
    },
    methods: {}
};
</script>

<style lang="less" scoped>
@btn-success-color: #28a745;
@btn-success-hover: #218838;

.site-mobile-nav {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    .nav {
        display: flex;
        padding: 0.5rem;

        // 模块选中
        /deep/ .nav-item {
            flex: 1;
            .nav-link {
                color: rgba(0, 0, 0, 0.9);
                font-size: 1.25rem;
                text-align: center;
            }
            &.active > .nav-link {
                color: @btn-success-color;
                font-weight: 600;
            }
        }
    }
}
</style>
