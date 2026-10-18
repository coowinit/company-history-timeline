# 企业发展历程 Timeline

一个使用 HTML、CSS、JavaScript 和 Swiper 构建的响应式企业发展历程时间轴页面。

## 功能特点

- 桌面端同时显示 4 条发展历程，手机端同时显示 1 条。
- 横向时间轴、圆形节点、日期、标题和描述。
- 支持分页圆点点击、触摸滑动、键盘方向键和循环轮播。
- 隐藏轮播可视区域外的相邻滑块。
- 页面样式、页面交互和 Swiper 第三方资源分别存放，方便维护。
- 历程数据集中维护，新增或删除记录时会自动生成对应条目和分页。
- Swiper CSS 和 JavaScript 已放入项目本地，不依赖 CDN 加载这两个文件。

## 项目结构

```text
company-history-timeline/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   ├── history-timeline.css
    │   └── swiper-bundle.min.css
    └── js/
        ├── history-timeline.js
        └── swiper-bundle.min.js
```

## 本地预览

1. 下载或克隆仓库。
2. 保持 `index.html` 与 `assets/` 目录的相对位置不变。
3. 使用 Chrome、Edge 或其他现代浏览器打开 `index.html`。

页面自定义样式和脚本、Swiper 样式和脚本都从本地文件加载。

## 修改发展历程数据

打开 `assets/js/history-timeline.js`，搜索：

```js
const historyData = [
```

每条数据包含三个字段：

```js
{
  date: "2024年3月15日",
  title: "企业发展新阶段",
  description: "在这里填写对应的历程描述。"
}
```

- `date`：显示日期。
- `title`：历程标题。
- `description`：历程说明。

复制一个对象即可增加记录，删除一个对象即可移除记录。页面会根据数组自动生成时间轴条目。当前顺序由数组顺序决定，不会自动按日期排序。

## 修改样式

编辑 `assets/css/history-timeline.css`：

- 颜色变量位于文件开头的 `:root`。
- 时间轴线、日期、节点和内容样式都在该文件中。
- `@media (max-width: 767px)` 用于手机端样式。

## 修改轮播设置

Swiper 初始化代码位于 `assets/js/history-timeline.js` 底部：

- 默认手机端 `slidesPerView: 1`。
- 屏幕宽度达到 `768px` 时，`slidesPerView` 切换为 `4`。
- `loop: true` 启用循环轮播。
- `.history-swiper { overflow: hidden; }` 隐藏可视区域外的相邻滑块。

如需调整断点或每屏显示数量，请修改 Swiper 初始化配置和对应的 CSS 媒体查询，并一起测试电脑端和手机端。

## 资源说明与许可证

`assets/css/swiper-bundle.min.css` 和 `assets/js/swiper-bundle.min.js` 是 Swiper **11.2.10** 的压缩发行文件。其文件头标注发布日期为 2025 年 6 月 28 日，并采用 **MIT License**。

- Swiper 官网：https://swiperjs.com/
- Swiper 仓库：https://github.com/nolimits4web/swiper
- MIT License：https://opensource.org/license/mit/

使用或再分发 Swiper 文件时，请保留发行文件中的版权与许可证声明。项目自定义的 HTML、CSS 和 JavaScript 可根据实际需要继续修改。
