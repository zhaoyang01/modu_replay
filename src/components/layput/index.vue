<template>
    <el-container ref="layout" class>
        <el-header></el-header>
        <!-- 主要内容 -->
        <el-main>
            <template ref="views">
                <div class="ui-main">
                    <ui-table
                        ref="table"
                        v-if="true"
                        :columns="columns"
                        :tableData="tableData"
                        :openIndex="true"
                        :openMultiple="true"
                        :openTools="true"
                        :total="1000"
                        @afterClick="afterClick"
                        @afterSelect="afterSelect"
                        @update="update"
                    >
                        <template slot-scope="item">
                            <div class="tools">
                                <button @click="clickBtn(item)">12345</button>
                            </div>
                        </template>
                    </ui-table>
                </div>
            </template>
        </el-main>
    </el-container>
</template>

 <script>
/* eslint-disable no-unused-vars */ import ui_table from "./table";
export default {
    name: "modu",
    components: {
        "ui-table": ui_table
    },
    data() {
        return {
            columns: [
                {
                    key: "name",
                    name: "姓名",
                    width: 120
                },
                {
                    key: "name",
                    name: "姓名",
                    width: 120
                },
                {
                    key: "name",
                    name: "姓名",
                    width: 120
                },
                {
                    key: "name",
                    name: "姓名",
                    width: 120
                }
            ],

            tableData: [
                {
                    id: 1000000,
                    name: "隔壁老王！"
                },

                {
                    id: 1000001,
                    name: "A"
                },

                {
                    id: 1000002,
                    name: "B"
                }
            ]
        };
    },
    methods: {
        /***
         * @description
         */
        afterClick(...arg) {
            console.log("==== afterClick ====", arg);
        },
        afterSelect(...arg) {
            console.log("==== afterClick ====", arg);
        },
        update() {
            let data = this.deepClone(this.tableData);
            this.tableData = data.concat(data);
        },
        deepClone(obj) {
            return JSON.parse(JSON.stringify(obj));
        },
        clickBtn(item) {
            console.log(item, 1231);
        }
    }
};
</script>  <style lang="less">
@import "../less/style.less";
@import "../less/reset.less"; /**  * 实现页面的框架基础配置  */
.ui-main {
    height: 100%;
}
</style>