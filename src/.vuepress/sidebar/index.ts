import type { SidebarConfig } from "@vuepress/theme-default";
export const sidebar: SidebarConfig = {
  "/engineering/": [
    {
      text: "webpack",
      children: ["/engineering/webpack/runtime"],
    },
  ],
  "/typescript/": [
    {
      text: "Typescript",
      children: ["/typescript/utils"],
    },
  ],
};
