<template>
    <i :class="`icon modu icon-${icon}`" style="font-size: "></i>
</template>

<script>
/**
 * icon 标签
 * @module Home
 * @author HT 2020-02-03
 */

export default {
    name: "icon",
    props: {
        icon: {
            type: "String",
            default: ""
        },
        size: {
            type: "Number",
            default: 1
        }
    },
    data() {
        return {
        };
    },
};
</script>

<style lang="less" scoped>
</style>