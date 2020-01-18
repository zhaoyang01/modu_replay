<template>
    <el-container ref="layout">
        <el-header></el-header>
        <!-- 主要内容 -->
        <el-main>
            <div class="ui_main">
                <ui-table
                    ref="ui-table"
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
            <el-footer></el-footer>
        </el-main>
    </el-container>
</template> <script>
/* eslint-disable no-unused-vars */ import ui_table from "./table";
export default {
    name: "modu",
    components: { "ui-table": ui_table },
    data() {
        return {
            columns: [
                { key: "name", name: "姓名", width: 120 },
                { key: "name", name: "姓名", width: 120 },
                { key: "name", name: "姓名", width: 120 },
                { key: "name", name: "姓名", width: 120 }
            ],
            tableData: [
                { id: 1000000, name: "隔壁老王！" },
                { id: 1000001, name: "A" },
                { id: 1000002, name: "B" }
            ]
        };
    },
    methods: {
        /***          * @description          */ afterClick(...arg) {
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
</script>  <style lang="less"> @import "../less/index.less"; @import "../less/reset.less";  /**  * 实现页面的框架基础配置  */ .ui_main{     // min-height: calc(100% - 60px);  // 60px 指 footer 元素高度 } </style>