<template>
    <div class="site-adver">
        <div class="jumbotron" v-show="show">
            <b-button-close class="jumbotron-close" @click="handleClose"></b-button-close>
            <div class="jumbotron-wrap">
                <!-- 这里展示的书本巨幕 -->
                <div class="jumbotron-book" v-if="adver.default" @click="handeBookLink">
                    <div class="book-cover">
                        <img :src="RandomBook.imgURL" :alt="RandomBook.title" />
                    </div>
                    <div class="book-content">
                        <h2 class="display-6" alt="书名">{{RandomBook.title}}</h2>
                        <p class="lead" alt="作品信息">
                            <span>{{`作者：${RandomBook["author"] || "佚名"}`}}</span>
                            <span>{{`类型：${articleType[ RandomBook["type"] ].name}`}}</span>
                        </p>
                        <p class="book-introduce" alt="描述">{{RandomBook.introduce}}</p>
                    </div>
                </div>
                <!-- 这里展示的图片巨幕 -->
                <div v-else></div>
            </div>
        </div>
    </div>
</template>
<script>
/**
 * 网站的广告页面
 * 注意！巨幕的存在仅作为PC端的内容
 * @module SiteAdver
 * @author HT 2020/01/17
 */

import { articleType } from "static/config/dict.json";
import { adver } from "static/config/site.json";
import original from "static/data/originals.json";
export default {
    name: "SiteAdver",
    data() {
        return {
            show: true,
            adver,
            original,
            articleType
        };
    },
    computed: {
        // 随机获得一本原著信息
        RandomBook: function() {
            const index = parseInt(Math.random() * original.length, 10);
            const obj = original[index];
            return {
                ...obj,
                introduce: obj["introduce"].slice(0, 200) + " ..." // 重置介绍信息
            };
        }
    },
    methods: {
        /**
         * 实现巨幕的关闭
         * X 分钟内不会再次显示
         * @method handleClose
         */

        handleClose() {
            this.show = false;
        },
        /**
         * * 实现书本的链接
         * * @method handeBookLink
         * * @param {Object} opts 关于书本的信息
         */

        handeBookLink(opts) {
            // this.$router.push({ path: opts });
            console.log(opts);
            return false;
        }
    }
};
</script>  
<style lang="less" scoped>
// 巨幕和榉木框架的样式
.jumbotron {
    position: relative;
    padding: 2rem 4rem;
    margin-bottom: 1rem;
    .jumbotron-close {
        position: absolute;
        top: 0.5rem;
        right: 1rem;
    }
} // 巨幕中的书籍样式
.jumbotron-book {
    display: flex;
    width: 100%;
    height: 15rem;
    .book-cover {
        width: auto;
        order: 0;
        img {
            object-fit: cover;
            height: 100%;
        }
    }
    .book-content {
        padding: 1.5rem 0 1.5rem 2rem;
        order: 1;
        .lead > span:not(:first-child) {
            margin-left: 1em;
        }
        .book-introduce {
            max-height: 6rem;
            text-indent: 2em;
            overflow: hidden;
        }
    }
}
</style>