import { defineComponent as w, computed as V, openBlock as r, createElementBlock as p, normalizeClass as E, normalizeStyle as y, createCommentVNode as b, ref as I, watch as Q, resolveComponent as W, Fragment as M, createElementVNode as v, renderList as X, withModifiers as Y, createTextVNode as T, toDisplayString as j, createBlock as N, pushScopeId as Z, popScopeId as x, withDirectives as ee, createVNode as le, vShow as ce, onMounted as oe, onBeforeUnmount as ae } from "vue";
const te = {
  key: 0,
  class: "iconfont icon-success"
}, ne = {
  key: 1,
  class: "iconfont icon-minus"
}, de = {
  name: "CheckBox"
}, se = /* @__PURE__ */ w({
  ...de,
  props: {
    color: {},
    modelValue: { type: Boolean },
    childChecked: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "update:value"],
  setup(u, { emit: n }) {
    const a = u, s = V(() => a.modelValue || a.childChecked ? a.color : "white"), d = V(() => a.modelValue || a.childChecked ? a.color : "#aaa"), m = () => {
      if (a.disabled)
        return !1;
      n("update:modelValue", !a.modelValue), n("update:value", !a.modelValue);
    };
    return (_, t) => (r(), p("div", {
      class: E(["checkbox", { disabled: _.disabled }]),
      style: y(`background-color:${s.value};outline:${d.value} solid 1px`),
      onClick: m
    }, [
      _.modelValue && !_.disabled ? (r(), p("i", te)) : b("", !0),
      _.childChecked && !_.disabled ? (r(), p("i", ne)) : b("", !0)
    ], 6));
  }
});
const S = (u, n) => {
  const a = u.__vccOpts || u;
  for (const [s, d] of n)
    a[s] = d;
  return a;
}, F = /* @__PURE__ */ S(se, [["__scopeId", "data-v-695cd852"]]), ue = {
  key: 1,
  class: "iconfont icon-next"
}, re = {
  name: "RadioBox"
}, ie = /* @__PURE__ */ w({
  ...re,
  props: {
    color: {},
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 },
    showNext: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "update:value"],
  setup(u, { emit: n }) {
    const a = u, s = () => {
      if (a.disabled)
        return !1;
      n("update:modelValue", !a.modelValue), n("update:value", !a.modelValue);
    };
    return (d, m) => (r(), p("div", {
      class: E(["radiobox", { disabled: d.disabled }]),
      onClick: s
    }, [
      d.modelValue ? (r(), p("i", {
        key: 0,
        class: "iconfont icon-success",
        style: y(`color: ${d.color}`)
      }, null, 4)) : b("", !0),
      !d.modelValue && d.showNext ? (r(), p("i", ue)) : b("", !0)
    ], 2));
  }
});
const H = /* @__PURE__ */ S(ie, [["__scopeId", "data-v-0491a2b3"]]), he = ["onClick"], pe = {
  name: "ChuckCascaderItem"
}, fe = /* @__PURE__ */ w({
  ...pe,
  props: {
    multiple: { type: Boolean },
    activeId: {},
    depth: {},
    options: {},
    color: {},
    height: {}
  },
  emits: ["checkChange"],
  setup(u, { emit: n }) {
    const a = u, s = I(0), d = I(-1), m = (t, C) => {
      if (C.disabled)
        return !1;
      s.value = -1, s.value = t, C.children || (C.checked = a.multiple ? !C.checked : !0, n("checkChange", C));
    }, _ = (t) => {
      n("checkChange", t);
    };
    return Q(
      () => a.options,
      (t) => {
        t[s.value] || (s.value = 0);
      },
      {
        immediate: !0,
        deep: !0
      }
    ), (t, C) => {
      const U = W("ChuckCascaderItem", !0);
      return r(), p(M, null, [
        v("div", {
          class: "cascaderList",
          style: y(`width:${100 / t.depth}%;height:${t.height}`)
        }, [
          (r(!0), p(M, null, X(t.options, (i, $) => (r(), p("div", {
            class: E(["cascaderItem", { active: $ === s.value, disabled: i.disabled }]),
            key: $,
            onClick: Y((k) => m($, i), ["self"])
          }, [
            T(j(i.label) + " ", 1),
            t.multiple ? (r(), N(F, {
              key: 0,
              color: t.color,
              modelValue: i.checked,
              "onUpdate:modelValue": (k) => i.checked = k,
              childChecked: i.childChecked,
              disabled: i.disabled,
              "onUpdate:value": (k) => _(i)
            }, null, 8, ["color", "modelValue", "onUpdate:modelValue", "childChecked", "disabled", "onUpdate:value"])) : (r(), N(H, {
              key: 1,
              color: t.color,
              modelValue: i.checked,
              "onUpdate:modelValue": (k) => i.checked = k,
              disabled: i.disabled,
              showNext: i.children && i.children.length > 0
            }, null, 8, ["color", "modelValue", "onUpdate:modelValue", "disabled", "showNext"]))
          ], 10, he))), 128))
        ], 4),
        s.value > -1 && t.options[s.value] && t.options[s.value].children ? (r(), N(U, {
          key: 0,
          options: t.options[s.value].children ?? [],
          multiple: t.multiple,
          "active-id": d.value,
          depth: t.depth,
          onCheckChange: _,
          color: t.color,
          height: t.height
        }, null, 8, ["options", "multiple", "active-id", "depth", "color", "height"])) : b("", !0)
      ], 64);
    };
  }
});
const ve = /* @__PURE__ */ S(fe, [["__scopeId", "data-v-68f94828"]]), _e = (u) => (Z("data-v-bac9b484"), u = u(), x(), u), ke = { class: "chuckSearch" }, me = { class: "inner" }, Ce = /* @__PURE__ */ _e(() => /* @__PURE__ */ v("i", { class: "iconfont icon-search" }, null, -1)), ge = ["value", "placeholder"], Ve = {
  name: "ChuckSearch"
}, ye = /* @__PURE__ */ w({
  ...Ve,
  props: {
    modelValue: {},
    placeholder: { default: "请输入搜索关键词" }
  },
  emits: ["update:modelValue"],
  setup(u, { emit: n }) {
    const a = u, s = (d) => {
      n("update:modelValue", d.target.value);
    };
    return (d, m) => (r(), p("div", ke, [
      v("div", me, [
        Ce,
        v("input", {
          type: "text",
          onInput: s,
          value: a.modelValue,
          placeholder: d.placeholder
        }, null, 40, ge)
      ])
    ]));
  }
});
const P = /* @__PURE__ */ S(ye, [["__scopeId", "data-v-bac9b484"]]), be = { class: "chuckCascaderList" }, $e = {
  key: 0,
  class: "iconfont icon-down"
}, Be = {
  key: 1,
  class: "iconfont icon-upward"
}, Ie = { class: "btns" }, we = {
  name: "ChuckCascader"
}, Se = /* @__PURE__ */ w({
  ...we,
  props: {
    multiple: { type: Boolean, default: !1 },
    options: {},
    color: { default: "#1989fa" },
    title: { default: "请选择" },
    modelValue: {},
    height: { default: "250px" },
    zIndex: { default: 2023 },
    filterable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "update:value", "confirm"],
  setup(u, { emit: n }) {
    const a = u, s = I(""), d = I(!1), m = V(() => a.multiple ? a.modelValue || [] : a.modelValue || ""), _ = V(() => d.value || m.value.length ? a.color : "#333"), t = V(() => {
      const { value: e } = m;
      let l = O(a.options, !1, !1), o = e;
      return a.multiple || (o = [e]), o.map((c) => {
        L(l, c);
      }), o.map((c) => {
        k(l, c);
      }), l;
    }), C = V(() => i(a.options)), U = V(() => R(s.value, t.value)), i = (e) => {
      let l = [e], o = 0;
      for (; l.length > 0; ) {
        let c = [];
        const h = l.pop();
        (h == null ? void 0 : h.length) !== 0 && (o++, h == null || h.forEach((g) => {
          g && Array.isArray(g.children) && (c = c.concat(...g.children));
        }), c.length > 0 && l.push(c));
      }
      return o;
    }, $ = () => {
      let e = [];
      const l = (o) => {
        o.map((c) => {
          c.checked ? e.push(c) : c.children && l(c.children);
        });
      };
      return l(t.value), e;
    }, k = (e, l) => {
      var o, c, h, g;
      for (let f in e) {
        if (e[f].value === l)
          return [e[f]];
        if (e[f].children) {
          let A = k(e[f].children ?? [], l);
          if (A !== void 0)
            return e[f].checked = ((o = e[f].children) == null ? void 0 : o.filter((B) => B.checked).length) === ((c = e[f].children) == null ? void 0 : c.length), e[f].childChecked = !!((h = e[f].children) != null && h.filter((B) => B.childChecked).length || (g = e[f].children) != null && g.filter((B) => B.checked).length && !e[f].checked), A.concat(e[f]);
        }
      }
    }, L = (e, l) => {
      for (let o in e) {
        if (e[o].value === l)
          return e[o].checked = !0, e[o].children && (e[o].children = O(e[o].children ?? [], !0, !1)), e[o];
        if (e[o].children) {
          let c = L(e[o].children ?? [], l);
          if (c !== void 0)
            return c;
        }
      }
    }, R = (e, l) => {
      let o = [];
      return l.forEach((c) => {
        if (c.label.indexOf(e) > -1)
          o.push(c);
        else if (c.children && c.children.length > 0) {
          let h = R(e, c.children);
          if (h && h.length > 0) {
            let g = {
              ...c,
              children: h
            };
            o.push(g);
          }
        }
      }), o;
    }, O = (e, l, o) => e.map((c) => ({
      ...c,
      checked: l,
      childChecked: o,
      children: c.children ? O(c.children, l, o) : null
    })), z = (e) => e.map((l) => (delete l.checked, delete l.childChecked, {
      ...l,
      children: l.children ? z(l.children) : null
    })), q = (e) => {
      if (a.multiple) {
        e.children = e.children ? O(e.children, e.checked, !1) : null, k(t.value, e.value);
        const l = $(), o = l.map((c) => c.value);
        n("update:modelValue", o), n("update:value", o, z(l));
      } else
        n("update:modelValue", e.value), n("update:value", e.value, e);
    }, D = () => {
      d.value = !d.value;
    }, G = () => {
      n("update:modelValue", null);
    }, J = () => {
      D(), n("confirm");
    }, K = ((e) => {
      const l = I(null), o = (c) => {
        const { target: h } = c;
        h.contains(l.value) && e(c);
      };
      return oe(() => {
        l && document.addEventListener("click", o);
      }), ae(() => {
        document.removeEventListener("click", o);
      }), l;
    })(() => {
      d.value = !1;
    });
    return (e, l) => {
      var o;
      return r(), p("div", {
        style: { position: "relative" },
        ref_key: "chuckCascader",
        ref: K
      }, [
        v("div", be, [
          v("div", {
            class: "pullDownBtn",
            onClick: D,
            style: y(`color:${_.value}`)
          }, [
            T(j((o = e.modelValue) != null && o.length ? `${e.multiple ? e.modelValue.length + "项" : e.modelValue}` : e.title) + " ", 1),
            d.value ? (r(), p("i", Be)) : (r(), p("i", $e))
          ], 4),
          ee(v("div", {
            class: "chuckCascader",
            style: y(`z-index:${e.zIndex}`)
          }, [
            e.filterable ? (r(), N(P, {
              key: 0,
              modelValue: s.value,
              "onUpdate:modelValue": l[0] || (l[0] = (c) => s.value = c)
            }, null, 8, ["modelValue"])) : b("", !0),
            v("div", {
              class: "item",
              style: y(`height:${e.height}`)
            }, [
              le(ve, {
                options: U.value,
                multiple: e.multiple,
                "active-id": -1,
                depth: C.value,
                onCheckChange: q,
                color: e.color,
                height: e.height
              }, null, 8, ["options", "multiple", "depth", "color", "height"])
            ], 4),
            v("div", Ie, [
              v("div", {
                class: "btnItem reset",
                onClick: G
              }, "重置"),
              v("div", {
                class: "btnItem confirm",
                style: y(`background:${e.color}`),
                onClick: J
              }, "确定", 4)
            ])
          ], 4), [
            [ce, d.value]
          ])
        ])
      ], 512);
    };
  }
});
const Oe = /* @__PURE__ */ S(Se, [["__scopeId", "data-v-3df44254"]]), Ne = [Oe, P, F, H], Ue = function(u) {
  Ne.forEach((n) => {
    u.component(n.name, n);
  });
}, Re = { install: Ue };
export {
  F as CheckBox,
  Oe as ChuckCascader,
  P as ChuckSearch,
  H as RadioBox,
  Re as default
};
