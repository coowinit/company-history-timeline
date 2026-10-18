/*
 * 企业发展历程卡片时间轴
 * 修改 historyData 数组即可维护卡片内容。
 */
const historyData = [
  {
    title: "8万活跃安装量",
    description: "短短四个月，我们就跨越了另一个里程碑——8万名满意用户！",
    date: "2023年4月19日",
    category: "设计"
  },
  {
    title: "WORDPRESS 6.2 发布",
    description: "短短四个月，我们就突破了另一个里程碑——9万名满意用户。",
    date: "2023年5月21日",
    category: "内容写作"
  },
  {
    title: "新版本：专业版",
    description: "我们即将推出专业版：我们将为您带来一系列专为 Gutenberg 设计的独家高级模块。",
    date: "2023年6月29日",
    category: "设计"
  },
  {
    title: "9万+主动安装量",
    description: "短短四个月，我们就突破了另一个里程碑——9个月满意的用户。",
    date: "2023年5月21日",
    category: "设计"
  },
  {
    title: "持续优化产品体验",
    description: "不断完善产品功能与使用体验，让网站搭建更加轻松高效。",
    date: "2023年8月12日",
    category: "产品研发"
  },
  {
    title: "开启新的成长阶段",
    description: "持续探索更灵活的设计方式，为用户提供更多创作可能。",
    date: "2023年10月06日",
    category: "企业发展"
  }
];

const list = document.getElementById("history-list");

list.innerHTML = historyData.map((item) => `
  <article class="swiper-slide history-item">
    <div class="history-card">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </div>
    <div class="history-marker" aria-hidden="true"></div>
    <time class="history-date">${item.date}</time>
    <h4 class="history-category">${item.category}</h4>
  </article>
`).join("");

if (typeof Swiper !== "undefined") {
  new Swiper(".history-swiper", {
    loop: true,
    speed: 500,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    watchOverflow: true,
    grabCursor: true,
    keyboard: { enabled: true, onlyInViewport: true },
    a11y: { enabled: true },
    pagination: {
      el: ".history-pagination",
      clickable: true,
      bulletElement: "button"
    },
    breakpoints: {
      768: { slidesPerView: 4, slidesPerGroup: 1 }
    }
  });
} else {
  document.querySelector(".history-pagination").textContent =
    "轮播库加载失败，请检查本地文件路径。";
}
