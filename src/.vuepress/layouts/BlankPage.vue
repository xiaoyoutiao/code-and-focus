<script setup>
import ParentLayout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";
</script>

<template>
  <ParentLayout>
    <template #page>
      <div class="blank-page">
        <Content />
      </div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.blank-page {
  padding-top: var(--navbar-height);
  padding-left: var(--sidebar-width);
}

.theme-container.no-sidebar .blank-page {
  padding-left: 0;
}
</style>
