import { defineUserConfig, defaultTheme } from "vuepress";
import { nprogressPlugin } from "@vuepress/plugin-nprogress";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { mediumZoomPlugin } from "@vuepress/plugin-medium-zoom";
// import { docsearchPlugin } from "@vuepress/plugin-docsearch";

import { path } from "@vuepress/utils";
import { websiteGroups } from "./datas";

import { sidebar } from "./sidebar";
import { navbar } from "./navbar";

export default defineUserConfig({
  lang: "zh-CN",
  title: "<Code />",
  description: "一个前端开发者的工作和学习记录",
  pagePatterns: ["**/*{.md,.vue}", "!.vuepress", "!node_modules"],
  dest: path.resolve(__dirname, "../../dist"),
  plugins: [
    // docsearchPlugin({
    //   appId: "111",
    //   apiKey: "111",
    //   indexName: "111",
    // }),
    nprogressPlugin(),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
    mediumZoomPlugin({
      selector: ":not(a) > img",
    }),
  ],
  async onPrepared(app) {
    await app.writeTemp(
      "datas.js",
      `export const websiteGroups = ${JSON.stringify(websiteGroups)}`
    );
  },
  theme: defaultTheme({
    logo: "https://wac-cdn.atlassian.com/dam/jcr:a9271a17-3092-4c55-9054-2b8546e889b8/Logo-Circle_Pendo_2x.png?cdnVersion=365",
    lastUpdated: true,
    lastUpdatedText: "上次更新",
    navbar,
    sidebar,
  }),
});
