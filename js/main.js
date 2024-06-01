function blockScroll() {
  scrollY = window.pageYOffset;
  document.body.style.top = `-${window.pageYOffset}px`;
  document.body.style.position = "fixed";
  document.body.style.width = "100%";
}
function unblockScroll() {
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.width = "";
  window.scrollTo(0, scrollY);
}

blockScroll();

const percentsArray = [
  [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
    49, 50,
  ],
  [60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71],
  [79, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
  [100],
];
let i = 0;

let preloaderLoading = window.setInterval(function () {
  let percArr = percentsArray[i];
  let percNumber = percArr[Math.floor(Math.random() * percArr.length)];


  if (percNumber != 100) {
    document.querySelector(".preloader__list").style.width = `${
      percNumber - 10
    }svw`;
  } else {
    document.querySelector(".preloader__list").style.width = `${percNumber}svw`;
  }

  i++;
}, 500);

window.onload = function () {
  window.setTimeout(() => {
    document.body.classList.add("loaded_hiding");
    unblockScroll();
    clearInterval(preloaderLoading);
    window.setTimeout(function () {
      document.body.classList.add("loaded");
      document.body.classList.remove("loaded_hiding");
    }, 500);
  }, 2500);
};



wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
  }
                  )
  wow.init();