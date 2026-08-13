// lili pensa demais — interações mínimas (menu mobile, carrossel, idioma)
document.addEventListener("DOMContentLoaded", function () {
  // menu hambúrguer
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // carrossel das estantes
  document.querySelectorAll(".shelf-wrap").forEach(function (wrap) {
    var track = wrap.querySelector(".shelf-track");
    var prev = wrap.querySelector(".shelf-nav.prev");
    var next = wrap.querySelector(".shelf-nav.next");
    if (!track) return;
    var step = function () {
      var card = track.querySelector(".card-square");
      return card ? card.offsetWidth + 20 : 170;
    };
    if (prev) prev.addEventListener("click", function () {
      track.scrollBy({ left: -step() * 2, behavior: "smooth" });
    });
    if (next) next.addEventListener("click", function () {
      track.scrollBy({ left: step() * 2, behavior: "smooth" });
    });
  });

  // switch de idioma nos pensamentos
  document.querySelectorAll(".pensamento-page .lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var lang = btn.dataset.lang;
      document.querySelectorAll(".pensamento-page .lang-btn").forEach(function (b) {
        var active = b === btn;
        b.classList.toggle("active", active);
        b.setAttribute("aria-pressed", active ? "true" : "false");
      });
      var pt = document.querySelector(".pensamento-page .lang-pt");
      var en = document.querySelector(".pensamento-page .lang-en");
      if (pt) pt.hidden = lang !== "pt";
      if (en) en.hidden = lang !== "en";
      var title = document.querySelector(".pensamento-page .hero-title");
      if (title) title.textContent = lang === "pt" ? title.dataset.pt : title.dataset.en;
    });
  });
});
