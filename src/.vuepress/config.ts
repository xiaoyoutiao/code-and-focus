import { defineUserConfig /* defaultTheme */ } from "vuepress";
import { nprogressPlugin } from "@vuepress/plugin-nprogress";
import { localTheme } from "./theme";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { path } from "@vuepress/utils";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Vuepress",
  description: "this is a vuepress website",
    pagePatterns:  ['**/*{.md,.vue}', '!.vuepress', '!node_modules'],
  plugins: [
    nprogressPlugin(),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
  ],
  theme: localTheme({
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
