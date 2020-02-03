<template>
    <div class="site-nav">
        <b-navbar toggleable="lg" type="light" variant="light">
            <!-- mobile left icon
            <b-icon class="hidden-lg" icon="search" font-scale="2" @click="handleNavLeft"></b-icon>
            -->
            <!-- 站点标识 -->
            <b-navbar-brand href="#" title="Cthulu & Kepper">Cthulu & Kepper</b-navbar-brand>
            <!-- mobile right icon 
            <b-icon class="hidden-lg" icon="person-fill" font-scale="2.5" @click="handleNavRight"></b-icon>
            -->
            <!-- 可以被折叠的按钮列表 -->
            <b-collapse is-nav>
                <!-- Left aligned nav items -->
                <b-navbar-nav>
                    <!-- 这是菜单列表 -->
                    <b-nav-item
                        v-for="(item, index) in menus"
                        :class="[{active: SiteNavActive === index}]"
                        :href="item.link || '#'"
                        :key="`SiteNav${index}`"
                        :title="item.link ? item.label : '开发小哥努力加班中...' "
                    >{{item.label}}</b-nav-item>
                    <!-- 这是检索条件 -->
                    <b-nav-item class="site-nav-supply"></b-nav-item>
                    <b-nav-form>
                        <b-form-input
                            type="search"
                            class="site-nav-keyword"
                            placeholder="请输入模组或者作者关键字"
                        ></b-form-input>
                    </b-nav-form>
                </b-navbar-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-button variant="success" size="sm" disabled>
                        <strong>Sign in</strong>
                    </b-button>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template> 
<script>
/**
 * * 网站的顶部导航栏
 * * @module SiteNav
 * * @author HT 2020/01/17
 * */

import { menus } from "static/config/site.json";
export default {
    name: "SiteNav",
    data() {
        return {
            // 导航菜单
            menus,
            // 站点的选中
            SiteNavActive: 0
        };
    },
    methods: {
        /**
         * * 左侧按钮点击事件
         * * 一般的实现：链接检索页面
         *  * @method handleNavLeft
         *  */

        handleNavLeft() {
            this.$emit("handleNavLeft");
            this.$router.push({
                path: this.menus.filter(item => item.asSearch)[0].link
            });
            console.log("!! linkToSearch !!");
        },
        /**
         * * 右侧按钮点击事件
         *  * 一般的实现：链接登陆页面
         *  * @method handleNavLeft
         *  */

        handleNavRight() {
            // token 存在进入个人中心
            // 或者进入 login 页面
            this.$router.push({ path: "/login" });
            console.log("!! linkToLogin !!");
        }
    }
};
</script>
<style lang="less" scoped>
@btn-success-color: #28a745;
@btn-success-hover: #218838;

.site-nav {
    // 模块选中
    /deep/ .nav-item.active > .nav-link {
        color: @btn-success-color;
        font-weight: 600;
        &:hover {
            color: @btn-success-hover;
        }
    }

    // 检索关键字
    .navbar-nav {
        position: relative;
        .site-nav-keyword,
        .site-nav-supply {
            width: 20rem;
            margin-left: 1em;
        }

        .site-nav-keyword {
            position: absolute;
            right: 0;
            transition: width 0.1s;
            &:focus {
                width: 100%;
            }
        }
    }
}
</style>