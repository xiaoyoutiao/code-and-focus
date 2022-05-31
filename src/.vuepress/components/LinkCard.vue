<template>
  <div class="link">
    <img class="preview" :src="src" />
    <div class="content" @click="openPage">
      <span class="title" :title="link">{{ title }}</span>
      <span class="desc" :title="desc">{{ desc }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const { title, desc, link, src } = defineProps({
  title: {
    type: String,
    dafault: "",
  },
  desc: {
    type: String,
    dafault: "",
  },
  link: {
    type: String,
    dafault: "",
  },
  src: {
    type: String,
    dafault: "",
  },
});

const openPage = () => {
  window.open(link);
};
</script>

<style scoped>
.link {
  display: inline-block;
  box-shadow: 0 0 12px var(--c-border);
  cursor: pointer;
  transition: all 0.2s ease;
}

.preview {
  width: 100%;
  height: 160px;
  background-color: #f5f5f5;
  object-fit: cover;
}

.content {
  box-sizing: border-box;
  border-top: 1px solid #f1f1f1;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0 10px 5px;
}

.title {
  font-size: 20px;
  font-weight: 500;
  line-height: 35px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: all 0.2s ease-in;
  transform-origin: left;
}

.link:hover {
  transform: translateY(-10px);
}

.link:hover .title {
  font-size: 22px;
}

.desc {
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
