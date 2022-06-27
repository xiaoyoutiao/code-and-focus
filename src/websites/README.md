---
lang: zh-CN
title: 收藏网站
description: 收藏的一些好的网站
sidebar: false
layout: BlankPage
---

<div class="wrapper">
    <div class="group" v-for="group in websiteGroups">
        <h2 class="group__title">{{ group.title }}</h2>
        <div class="list">
            <LinkCard class="link-item" v-for="item in group.list" v-bind="item"/>
        </div>
    </div>
</div>

<script setup>
import { websiteGroups } from "@temp/datas"

</script>

<style scoped>
.wrapper {
    margin: 0 auto;
    padding: 20px;
}

.link-item {
    margin: 0.9%; 
    width: 18%
}

.group {
    position: releative;
}

.group__title {
    padding: 20px;
    margin: 0;
    border: none;
}

@media (max-width: 1400px) {
    .link-item {
        margin-left: 2%;
        width: 30%;
    }

    .wrapper {
        justify-content: center;
    }
}

@media (max-width: 720px) {
    .link-item {
        margin:15px 10%;
        width: 80%
    }

    .wrapper {
        justify-content: center;
    }
}


</style>
