import { i as o } from "./env-C8721KGO.js";
import { a, z as s } from "./css-akUkFMHX.js";
const d = /* @__PURE__ */ (() => {
  const i = [
    "floating",
    "drawer",
    "dialog",
    "message",
    "popover",
    "toast"
  ];
  function r(t) {
    return `ir_${t}`;
  }
  function n(t) {
    const e = document.createElement("div");
    return e.id = r(t), e.classList.add(a.position.fixed, s[t]), e;
  }
  return (t) => {
    i.filter((e) => !document.getElementById(r(e))).forEach((e) => t.appendChild(n(e)));
  };
})();
o() && d(document.body);
//# sourceMappingURL=_init-DX98z8UA.js.map
