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

const DEFAULT_IMG = "/images/default.png";

const news: IWebsiteGroupItem = {
  title: "开发新闻",
  list: [
    {
      title: "The Vue Point",
      src: "/images/the_vue_point.png",
      link: "https://blog.vuejs.org/",
      desc: "来自 Vue.js 维护者的更新、提示和意见。",
    },
    {
      title: "奇舞周刊",
      link: "https://weekly.75.team/",
      src: DEFAULT_IMG,
      desc: "收集每周前端精华文章，集结成册",
    },
  ],
};

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
const libraryToolGroup: IWebsiteGroupItem = {
  title: "开源工具",
  list: [
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
      title: "xstate",
      desc: "JavaScript中一个最受欢迎的状态机实现方案",
      src: "/images/xstate.png",
      link: "https://xstate.js.org/docs/",
    },
    {
      title: "nestjs",
      desc: "用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架。",
      src: "/images/nestjs.svg",
      link: "https://docs.nestjs.cn/",
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
    {
      title: "stackblitz",
      desc: "在线代码开发平台, vscode编辑器风格",
      src: "/images/stackblitz.png",
      link: "https://stackblitz.com/",
    },
  ],
};

const platformGroup: IWebsiteGroupItem = {
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

const animationLib: IWebsiteGroupItem = {
  title: "动画相关",
  list: [
    {
      title: "dynamicsjs",
      desc: "用于创建基于物理的动画的 JavaScript 库",
      src: "/images/dynamics.png",
      link: "http://dynamicsjs.com/",
    },
  ],
};

const otherLib: IWebsiteGroupItem = {
  title: "其他",
  list: [
    {
      title: "roadmap.sh",
      desc: "學習路線圖",
      src: DEFAULT_IMG,
      link: "https://roadmap.sh",
    },
  ],
};

export const websiteGroups: IWebsiteGroupItem[] = [
  news,
  devtoolsGroup,
  libraryGroup,
  libraryToolGroup,
  orgGroup,
  platformGroup,
  animationLib,
  otherLib,
];
