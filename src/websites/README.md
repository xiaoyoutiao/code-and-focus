---
lang: zh-CN
title: 收藏网站
description: 收藏的一些好的网站
sidebar: false
layout: BlankPage
---

<div class="wrapper">
    <LinkCard class="link-item" v-for="item in list" v-bind="item"/>
</div>

<script setup>
// const enum TAGS {
//     DEVTOOL,
//     VUE
//     ORG
// }

const list = [
{ title: "cubic-bezier", desc: "贝塞尔曲线预览工具", src: '/images/cubic-bezier.png', link: "http://cubic-bezier.com/" },
{ title: "regex101", desc: "正则表达式调试工具", src: "/images/regex101.png", link: "https://regex101.com/" },
{ title: "astexplorer", desc: "AST编译预览工具", src: "/images/astexplorer.png", link: "https://astexplorer.net/" },
{ title: "vue3文档", desc: "vue3最新文档, 使用vuepress next重构", src: "/images/staging-cn.vuejs.png", link: "https://staging-cn.vuejs.org/" },
]

</script>

<style scoped>
.wrapper {
    /* display: flex;
    flex-wrap: wrap; */
    margin: 0 auto;
    padding: 20px;
}

.link-item {
    margin: 15px; 
    width: 345px
}

@media (max-width: 720px) {
    .wrapper {
        justify-content: center;
    }
}


</style>
