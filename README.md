# 企业发展历程时间轴

一个使用 HTML、CSS、JavaScript 和 Swiper 构建的响应式企业发展历程组件展示库，提供两种可独立预览的时间轴布局。

## 在线预览

打开仓库首页的 `index.html`，选择想查看的样式：

| 效果 | 说明 | 预览入口 |
|---|---|---|
| 经典时间轴 | 日期、节点、标题和描述沿时间轴排列 | [查看经典时间轴](demos/timeline/) |
| 卡片时间轴 | 卡片位于时间轴上方，日期和分类位于下方 | [查看卡片时间轴](demos/cards/) |

## 效果特点

### 经典时间轴

- 电脑端每屏显示 4 条历程，手机端每屏显示 1 条。
- 日期、时间轴节点、标题和描述依次排列。
- 支持分页圆点点击、触摸滑动、键盘方向键和循环轮播。
- 隐藏轮播可视区域外的相邻滑块。

### 卡片时间轴

- 电脑端每屏显示 4 张卡片，手机端每屏显示 1 张卡片。
- 白色圆角卡片带底部三角指示，时间轴节点位于卡片下方。
- 日期和分类显示在时间轴下方。
- 卡片底部位置保持稳定；描述较长时，卡片向上扩展，避免向下挤压时间轴。
- 已缩小手机端底部分页圆点与上方内容的间距。
- 支持分页圆点点击、触摸滑动、键盘方向键和循环轮播。

## 项目结构

```text
company-history-timeline/
├── index.html
├── README.md
├── assets/
│   ├── css/
│   │   ├── history-timeline.css
│   │   ├── history-cards.css
│   │   └── swiper-bundle.min.css
│   └── js/
│       ├── history-timeline.js
│       ├── history-cards.js
│       └── swiper-bundle.min.js
└── demos/
    ├── timeline/
    │   └── index.html
    └── cards/
        └── index.html
```

两个示例页面共用根目录的 Swiper 文件。每个示例的布局样式和数据逻辑分别维护，减少重复资源，方便后续扩展。

## 本地预览

1. 下载或克隆仓库。
2. 保持 `index.html`、`assets/` 和 `demos/` 的相对位置不变。
3. 使用 Chrome、Edge 等现代浏览器打开根目录的 `index.html`。
4. 点击首页的两张预览卡片，分别查看经典时间轴和卡片时间轴。

项目使用相对路径加载本地 CSS、JavaScript 和 Swiper 文件，不需要依赖 CDN 加载轮播库。

## 修改经典时间轴内容

编辑 `assets/js/history-timeline.js`，找到 `historyData` 数组。每条记录包含：

- `date`：日期
- `title`：标题
- `description`：描述

数组顺序就是展示顺序，不会自动按日期排序。

## 修改卡片时间轴内容

编辑 `assets/js/history-cards.js`，找到 `historyData` 数组。每条记录包含：

- `title`：卡片标题
- `description`：卡片说明
- `date`：日期
- `category`：时间轴下方的分类

复制一个对象即可新增记录，删除一个对象即可移除记录。显示顺序遵循数组顺序。

## 修改样式与轮播

- 经典时间轴样式：`assets/css/history-timeline.css`
- 卡片时间轴样式：`assets/css/history-cards.css`
- 两个示例的数据和 Swiper 初始化：分别位于对应的 `assets/js/` 文件中
- 当前响应式断点为 `768px`：桌面端每屏 4 条，手机端每屏 1 条

调整卡片定位、时间轴线位置或轮播断点后，请同时检查桌面端、手机端和较长描述的显示效果。

## 第三方资源与许可证

`assets/css/swiper-bundle.min.css` 和 `assets/js/swiper-bundle.min.js` 是 Swiper 11.2.10 的发行文件，采用 MIT License。请保留发行文件中的原有版权与许可证声明。

- 官网：https://swiperjs.com/
- GitHub：https://github.com/nolimits4web/swiper
- MIT License：https://opensource.org/license/mit/

项目自定义的 HTML、CSS 和 JavaScript 可根据实际需要继续修改。
