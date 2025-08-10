import { ExcelExportingModule as c } from "./data-modules.js";
import { v as k } from "./chunks/v4-CKZ6klMF.js";
const s = [];
function d(e) {
  return e.format === "excel";
}
const i = /* @__PURE__ */ (() => {
  let e = !1;
  return async () => {
    if (!e)
      for (e = !0; s.length; ) {
        const t = s.shift();
        try {
          d(t) && new c(t.args).export(t.data).then((r) => {
            postMessage({
              taskId: t.taskId,
              objectURL: URL.createObjectURL(r),
              hasError: !1
            });
          }).catch((r) => {
            console.error("data-worker error", r), postMessage({
              taskId: t.taskId,
              hasError: !0,
              error: r,
              objectURL: ""
            });
          });
        } catch (r) {
          console.error("data-worker error", r), postMessage({
            taskId: t.taskId,
            hasError: !0,
            error: r,
            objectURL: ""
          });
        } finally {
          e = !1;
        }
      }
  };
})();
typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && (self.onmessage = (e) => {
  const {
    command: t,
    taskItem: r
  } = e.data;
  if (t === "register-task-item")
    s.push(r), i();
  else
    throw console.error(`unknown command ${t}. Please check the docs`, r), new Error("unknown command");
});
const l = import.meta.url, a = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ (() => {
  let e = null;
  function t(r) {
    const o = a.get(r);
    if (!o)
      throw new Error(`'${r}' taskLog is not defined`);
    return o;
  }
  return () => (e || (e = new Worker(
    new URL(l),
    {
      name: "ir-data-exporting-worker",
      type: "module"
    }
  )), e.onmessage = (r) => {
    const o = r.data;
    if (!o.taskId)
      throw console.error(o), new Error("taskId is not defined.");
    const n = t(o.taskId);
    o.hasError ? n.reject(o.error ?? new Error("unknown error")) : n.resolve(o.objectURL), a.delete(o.taskId);
  }, e.onerror = (r) => {
  }, e);
})();
function f(e) {
  return new Promise((t, r) => {
    const o = u();
    a.set(e.taskId, {
      taskId: e.taskId,
      createdDateTick: Date.now(),
      resolve: t,
      reject: r
    }), o.postMessage({
      command: "register-task-item",
      taskItem: e
    });
  });
}
function w(e) {
  return f(
    {
      taskId: k(),
      data: e.data,
      format: e.format,
      args: e.args
    }
  );
}
export {
  w as requestExportingData
};
//# sourceMappingURL=data-export.js.map
