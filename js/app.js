(() => {
  "use strict";
  let e = (e, t = 500, o = 0) => {
      e.classList.contains("_slide") ||
        (e.classList.add("_slide"),
        (e.style.transitionProperty = "height, margin, padding"),
        (e.style.transitionDuration = t + "ms"),
        (e.style.height = `${e.offsetHeight}px`),
        e.offsetHeight,
        (e.style.overflow = "hidden"),
        (e.style.height = o ? `${o}px` : "0px"),
        (e.style.paddingTop = 0),
        (e.style.paddingBottom = 0),
        (e.style.marginTop = 0),
        (e.style.marginBottom = 0),
        window.setTimeout(() => {
          (e.hidden = !o),
            !o && e.style.removeProperty("height"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            !o && e.style.removeProperty("overflow"),
            e.style.removeProperty("transition-duration"),
            e.style.removeProperty("transition-property"),
            e.classList.remove("_slide");
        }, t));
    },
    t = (e, t = 500, o = 0) => {
      if (!e.classList.contains("_slide")) {
        e.classList.add("_slide"),
          (e.hidden = !e.hidden && null),
          o && e.style.removeProperty("height");
        let n = e.offsetHeight;
        (e.style.overflow = "hidden"),
          (e.style.height = o ? `${o}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          e.offsetHeight,
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = n + "px"),
          e.style.removeProperty("padding-top"),
          e.style.removeProperty("padding-bottom"),
          e.style.removeProperty("margin-top"),
          e.style.removeProperty("margin-bottom"),
          window.setTimeout(() => {
            e.style.removeProperty("height"),
              e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide");
          }, t);
      }
    },
    o = !0,
    n = (e = 500) => {
      let t = document.querySelector("body");
      if (o) {
        let n = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < n.length; e++) {
            n[e].style.paddingRight = "0px";
          }
          (t.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, e),
          (o = !1),
          setTimeout(function () {
            o = !0;
          }, e);
      }
    },
    i = (e = 500) => {
      let t = document.querySelector("body");
      if (o) {
        let n = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < n.length; e++) {
          n[e].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (t.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (o = !1),
          setTimeout(function () {
            o = !0;
          }, e);
      }
    };
  function r(e, t) {
    const o = Array.from(e).filter(function (e, o, n) {
      if (e.dataset[t]) return e.dataset[t].split(",")[0];
    });
    if (o.length) {
      const e = [];
      o.forEach((o) => {
        const n = {},
          i = o.dataset[t].split(",");
        (n.value = i[0]),
          (n.type = i[1] ? i[1].trim() : "max"),
          (n.item = o),
          e.push(n);
      });
      let n = e.map(function (e) {
        return (
          "(" + e.type + "-width: " + e.value + "px)," + e.value + "," + e.type
        );
      });
      n = (function (e) {
        return e.filter(function (e, t, o) {
          return o.indexOf(e) === t;
        });
      })(n);
      const i = [];
      if (n.length)
        return (
          n.forEach((t) => {
            const o = t.split(","),
              n = o[1],
              r = o[2],
              s = window.matchMedia(o[0]),
              l = e.filter(function (e) {
                if (e.value === n && e.type === r) return !0;
              });
            i.push({ itemsArray: l, matchMedia: s });
          }),
          i
        );
    }
  }
  let s = !1;
  setTimeout(() => {
    if (s) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    console.log("1"),
    console.log("2"),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    (function () {
      let e = document.querySelector(".icon-menu");
      e &&
        e.addEventListener("click", function (e) {
          o &&
            (((e = 500) => {
              document.documentElement.classList.contains("lock") ? n(e) : i(e);
            })(),
            document.documentElement.classList.toggle("menu-open"));
        });
    })(),
    (function () {
      const o = document.querySelectorAll("[data-showmore]");
      let n, i;
      function s(e) {
        e.forEach((e) => {
          l(e.itemsArray, e.matchMedia);
        });
      }
      function l(o, n) {
        o.forEach((o) => {
          !(function (o, n = !1) {
            const i = (o = n ? o.item : o).querySelector(
                "[data-showmore-content]"
              ),
              r = o.querySelector("[data-showmore-button]"),
              s = a(o, i);
            (n.matches || !n) &&
            s <
              (function (e) {
                let t = e.offsetHeight;
                e.style.removeProperty("height");
                let o = e.offsetHeight;
                return (e.style.height = `${t}px`), o;
              })(i)
              ? (e(i, 0, s), (r.hidden = !1))
              : (t(i, 0, s), (r.hidden = !0));
          })(o, n);
        });
      }
      function a(e, t) {
        let o = 0;
        if ("items" === (e.dataset.showmore ? e.dataset.showmore : "size")) {
          const e = t.dataset.showmoreContent ? t.dataset.showmoreContent : 3,
            n = t.children;
          for (let t = 1; t < n.length; t++) {
            if (((o += n[t - 1].offsetHeight), t === e)) break;
          }
        } else {
          o = t.dataset.showmoreContent ? t.dataset.showmoreContent : 150;
        }
        return o;
      }
      function d(o) {
        const r = o.target,
          d = o.type;
        if ("click" === d) {
          if (r.closest("[data-showmore-button]")) {
            const o = r
                .closest("[data-showmore-button]")
                .closest("[data-showmore]"),
              n = o.querySelector("[data-showmore-content]"),
              i = o.dataset.showmoreButton ? o.dataset.showmoreButton : "500",
              s = a(o, n);
            n.classList.contains("_slide") ||
              (o.classList.contains("_showmore-active")
                ? e(n, i, s)
                : t(n, i, s),
              o.classList.toggle("_showmore-active"));
          }
        } else "resize" === d && (n.length && l(n), i.length && s(i));
      }
      o.length &&
        ((n = Array.from(o).filter(function (e, t, o) {
          return !e.dataset.showmoreMedia;
        })),
        n.length && l(n),
        document.addEventListener("click", d),
        window.addEventListener("resize", d),
        (i = r(o, "showmoreMedia")),
        i.length &&
          (i.forEach((e) => {
            e.matchMedia.addEventListener("change", function () {
              l(e.itemsArray, e.matchMedia);
            });
          }),
          s(i)));
    })();
})();
