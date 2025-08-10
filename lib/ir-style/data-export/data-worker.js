import { ExcelExportingModule as s } from "../data-modules.js";
const o = [];
function a(t) {
  return t.format === "excel";
}
const n = /* @__PURE__ */ (() => {
  let t = !1;
  return async () => {
    if (!t)
      for (t = !0; o.length; ) {
        const r = o.shift();
        try {
          a(r) && new s(r.args).export(r.data).then((e) => {
            postMessage({
              taskId: r.taskId,
              objectURL: URL.createObjectURL(e),
              hasError: !1
            });
          }).catch((e) => {
            console.error("data-worker error", e), postMessage({
              taskId: r.taskId,
              hasError: !0,
              error: e,
              objectURL: ""
            });
          });
        } catch (e) {
          console.error("data-worker error", e), postMessage({
            taskId: r.taskId,
            hasError: !0,
            error: e,
            objectURL: ""
          });
        } finally {
          t = !1;
        }
      }
  };
})();
typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && (self.onmessage = (t) => {
  const {
    command: r,
    taskItem: e
  } = t.data;
  if (r === "register-task-item")
    o.push(e), n();
  else
    throw console.error(`unknown command ${r}. Please check the docs`, e), new Error("unknown command");
});
const l = import.meta.url;
export {
  l as default
};
//# sourceMappingURL=data-worker.js.map
