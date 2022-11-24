import type { NavbarConfig } from "@vuepress/theme-default";

export const navbar: NavbarConfig = [
  { text: "主页", link: "/" },
  { text: "收藏网站", link: "/websites" },
  {
    text: "前端工程化",
    link: "/engineering",
    children: [
      {
        text: "webpack",
        children: ["/engineering/webpack/runtime"],
      },
    ],
  },
  {
    text: "Typescript",
    link: "/typescript",
    children: [
      {
        text: "Typescript",
        children: ["/typescript/utils"],
      },
    ],
  },
];
