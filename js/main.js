// portfolio slider
const portfolioSlider = document.querySelector('.portfolio__slider');
if (portfolioSlider) {
  new Swiper(portfolioSlider, {
    navigation: {
      nextEl: ".portfolio__button-next",
      prevEl: ".portfolio__button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    slidesPerView: 1.1,
    spaceBetween: 16,
    speed: 500,
    breakpoints: {
      768: {
        slidesPerView: 1.5,
        spaceBetween: 24,
      },
      1280: {
        slidesPerView: 2.5,
        spaceBetween: 32,
      },
    },
  });
}

// reviews slider
const reviewsSlider = document.querySelector('.reviews__slider');
if (reviewsSlider) {
  new Swiper(".reviews__slider", {
    navigation: {
      nextEl: ".reviews__btn-next",
      prevEl: ".reviews__btn-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    speed: 500,
    breakpoints: {
      768: {
        slidesPerView: 1.3,
        spaceBetween: 32,
      },
      1280: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    },
  });
}

// faq accordion
const faqHeaders = document.querySelectorAll(".faq__header");
const faqHeaderItem = document.querySelector(".faq__header");

// making the first faq accordion item stay open
if (faqHeaders.length > 0) {
  window.addEventListener("load", () => {
    faqHeaderItem.classList.add("faq--active");
    faqHeaderItem.nextElementSibling.style.maxHeight = faqHeaderItem.nextElementSibling.scrollHeight + "px";
  });

  // accordion functionality
  faqHeaders.forEach(faqHeader => {
    faqHeader.addEventListener("click", () => {
      const currentlyOpenFaqHeader = document.querySelector(".faq__header.faq--active");
      if (currentlyOpenFaqHeader && currentlyOpenFaqHeader !== faqHeader) {
        currentlyOpenFaqHeader.classList.toggle("faq--active");
        currentlyOpenFaqHeader.nextElementSibling.style.maxHeight = 0;
      }

      faqHeader.classList.toggle("faq--active");

      const faqBody = faqHeader.nextElementSibling;
      if (faqHeader.classList.contains("faq--active")) {
        faqBody.style.maxHeight = faqBody.scrollHeight + "px";
      } else {
        faqBody.style.maxHeight = 0;
      }
    });
  });

}

// info tabs
const buttons = document.querySelectorAll(".info__btn");
const tabsItems = document.querySelectorAll(".info__item");

if (tabsItems.length > 0) {
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      let currentBtn = btn;
      let btnId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(btnId);

      if (!currentBtn.classList.contains("info__btn--active")) {
        buttons.forEach(btn => {
          btn.classList.remove("info__btn--active");
        })

        tabsItems.forEach(item => {
          item.classList.remove("info__item--active");
        })

        currentBtn.classList.add("info__btn--active");
        currentTab.classList.add("info__item--active");
      }
    });
  })

  // making the third tab item stay open
  document.querySelector(".info__btn:nth-child(3)").click();
}