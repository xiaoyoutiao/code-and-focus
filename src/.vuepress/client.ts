import { defineClientConfig } from "@vuepress/client";
import BlankPage from "./layouts/BlankPage.vue";

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component("BlankPage", BlankPage);
  },
  setup() {},
  rootComponents: [],
});
