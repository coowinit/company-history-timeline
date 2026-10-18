    /*
     * 修改这里即可维护发展历程。
     * date：日期；title：标题；description：描述。
     * 数据顺序就是页面展示顺序，不会自动调整日期。
     */
    const historyData = [
      {
        date: "2023年5月21日",
        title: "WordPress 6.2 发布",
        description: "短短四个月，我们就突破了另一个里程碑——9万名满意用户。"
      },
      {
        date: "2023年5月19日",
        title: "全新积木发布！",
        description: "隆重推出 6 款全新的 Gutenberg 区块，助您轻松设计精美网站。"
      },
      {
        date: "2023年6月29日",
        title: "新版本：专业版",
        description: "我们即将推出专业版：我们将为您带来一系列专为 Gutenberg 设计的独家高级模块。"
      },
      {
        date: "2023年5月21日",
        title: "9万+活跃安装量",
        description: "短短四个月，我们就突破了另一个里程碑——9万名满意用户。"
      },
      {
        date: "2023年8月12日",
        title: "持续优化产品体验",
        description: "不断完善产品功能与使用体验，让网站搭建更加轻松高效。"
      },
      {
        date: "2023年10月06日",
        title: "开启新的成长阶段",
        description: "持续探索更灵活的设计方式，为用户提供更多创作可能。"
      }
    ];

    const iconMarkup = `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M17.5 3H6.5A2.5 2.5 0 0 0 4 5.5v13A2.5 2.5 0 0 0 6.5 21h11a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 17.5 3ZM12 7a2.1 2.1 0 1 1 0 4.2A2.1 2.1 0 0 1 12 7Zm4.2 9.4H7.8c.2-2 1.9-3.4 4.2-3.4s4 1.4 4.2 3.4Z"/>
      </svg>`;

    const historyList = document.getElementById("history-list");

    historyList.innerHTML = historyData.map((item) => `
      <article class="swiper-slide history-item">
        <time class="history-date">${item.date}</time>
        <div class="history-marker">${iconMarkup}</div>
        <div class="history-content">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
      </article>
    `).join("");

    if (typeof Swiper !== "undefined") {
      new Swiper(".history-swiper", {
        loop: true,
        speed: 550,
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
      document.querySelector(".history-pagination").innerHTML =
        '<span style="color:#6876ad;font-size:13px">轮播库加载失败，请检查网络连接。</span>';
    }
