import { defineUserConfig, defaultTheme } from "vuepress";
import { nprogressPlugin } from "@vuepress/plugin-nprogress";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { mediumZoomPlugin } from "@vuepress/plugin-medium-zoom";
import { path } from "@vuepress/utils";

import { websiteGroups } from "./datas";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Code => Value",
  description: "code of value",
  pagePatterns: ["**/*{.md,.vue}", "!.vuepress", "!node_modules"],
  dest: path.resolve(__dirname, "../../dist"),
  plugins: [
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
    navbar: [
      { text: "主页", link: "/" },
      { text: "收藏网站", link: "/websites" },
      { text: "CICD", link: "/cicd" },
    ],
  }),
});
