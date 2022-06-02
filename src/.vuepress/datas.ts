interface IWebsite {
  title: string;
  desc: string;
  src: string;
  link: string;
}

interface IWebsiteGroupItem {
  title: string;
  list: IWebsite[];
}

const devtoolsGroup: IWebsiteGroupItem = {
  title: "开发工具",
  list: [
    {
      title: "cubic-bezier",
      desc: "贝塞尔曲线预览工具",
      src: "/images/cubic-bezier.png",
      link: "http://cubic-bezier.com/",
    },
    {
      title: "regex101",
      desc: "正则表达式调试工具",
      src: "/images/regex101.png",
      link: "https://regex101.com/",
    },
    {
      title: "astexplorer",
      desc: "AST编译预览工具",
      src: "/images/astexplorer.png",
      link: "https://astexplorer.net/",
    },
    {
      title: "typescript lang",
      desc: "查找npm库的类型声明包",
      src: "/images/typescriptlang.png",
      link: "https://www.typescriptlang.org/",
    },
    {
      title: "openbase",
      desc: "开源包搜索平台",
      src: "/images/openbase.png",
      link: "https://openbase.com/",
    },
    {
      title: "npm.devtool.tech",
      desc: "npm包搜索在线执行工具",
      src: "/images/npm.devtool.tech.png",
      link: "https://npm.devtool.tech/",
    },
    {
      title: "codelf",
      desc: "人工智能变量名搜索器",
      src: "/images/codelf.png",
      link: "https://unbug.github.io/codelf/",
    },
    {
      title: "unpkg",
      desc: "unpkg 是一个快速的全球内容交付网络，适用于npm上的所有内容",
      src: "/images/unpkg.png",
      link: "https://unpkg.com/",
    },
  ],
};
const libraryGroup: IWebsiteGroupItem = {
  title: "开源库",
  list: [
    {
      title: "vue3",
      desc: "vue3最新文档, 使用vuepress next重构",
      src: "/images/staging-cn.vuejs.png",
      link: "https://staging-cn.vuejs.org/",
    },
    {
      title: "postcss",
      desc: "是一个用 JavaScript 工具和插件转换 CSS 代码的工具",
      src: "/images/postcss.png",
      link: "https://www.postcss.com.cn/",
    },
    {
      title: "西瓜视频播放器",
      desc: "一款带解析器、能节省流量的HTML5视频播放器",
      src: "/images/v2.h5player.bytedance.png",
      link: "https://v2.h5player.bytedance.com/",
    },
    {
      title: "npkill",
      desc: "快速、安全的查找和删除node_modules文件夹",
      src: "/images/npkill.png",
      link: "https://npkill.js.org/",
    },
  ],
};
const orgGroup: IWebsiteGroupItem = {
  title: "技术社区",
  list: [
    {
      title: "v2ex",
      desc: "V2EX是一个面向程序员、极客人群的分享交流社区",
      src: "/images/v2ex.png",
      link: "https://www.v2ex.com/",
    },
    {
      title: "CodePen",
      desc: "CodePen 是一个社交开发环境。从本质上讲，它允许您在浏览器中编写代码，并在构建时查看其结果",
      src: "/images/codepen.png",
      link: "https://codepen.io/",
    },
  ],
};
const platformGroup = {
  title: "设计平台",
  list: [
    {
      title: "iconfont",
      desc: "阿里妈妈MUX倾力打造的矢量图标管理、交流平台",
      src: "/images/iconfont.png",
      link: "https://www.iconfont.cn/",
    },
    {
      title: "iconpark",
      desc: "IconPark是字节跳动出品的开源图标库",
      src: "/images/iconpark.png",
      link: "https://iconpark.oceanengine.com/",
    },
    {
      title: "Pinterest",
      desc: "Pinterest 是一个以视觉方式发现创意点子的地方, 使用瀑布流方式浏览资源",
      src: "/images/pinterest.png",
      link: "https://www.pinterest.com/",
    },
  ],
};

export const websiteGroups: IWebsiteGroupItem[] = [
  devtoolsGroup,
  libraryGroup,
  orgGroup,
  platformGroup,
];
