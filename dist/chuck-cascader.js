import { defineComponent as S, computed as b, openBlock as i, createElementBlock as v, normalizeClass as E, normalizeStyle as y, createCommentVNode as B, ref as $, watch as Y, resolveComponent as Z, Fragment as M, createElementVNode as f, renderList as ee, withModifiers as U, toDisplayString as P, createBlock as O, pushScopeId as le, popScopeId as oe, onMounted as ce, createTextVNode as ae, withDirectives as j, vShow as F, createVNode as te } from "vue";
const ne = {
  key: 0,
  class: "iconfont icon-success"
}, de = {
  key: 1,
  class: "iconfont icon-minus"
}, se = {
  name: "CheckBox"
}, ue = /* @__PURE__ */ S({
  ...se,
  props: {
    color: {},
    modelValue: { type: Boolean },
    childChecked: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "update:value"],
  setup(s, { emit: u }) {
    const a = s, t = b(() => a.modelValue || a.childChecked ? a.color : "white"), d = b(() => a.modelValue || a.childChecked ? a.color : "#aaa"), h = () => {
      if (a.disabled)
        return !1;
      u("update:modelValue", !a.modelValue), u("update:value", !a.modelValue);
    };
    return (k, n) => (i(), v("div", {
      class: E(["checkbox", { disabled: k.disabled }]),
      style: y(`background-color:${t.value};outline:${d.value} solid 1px`),
      onClick: h
    }, [
      k.modelValue && !k.disabled ? (i(), v("i", ne)) : B("", !0),
      k.childChecked && !k.disabled ? (i(), v("i", de)) : B("", !0)
    ], 6));
  }
});
const N = (s, u) => {
  const a = s.__vccOpts || s;
  for (const [t, d] of u)
    a[t] = d;
  return a;
}, q = /* @__PURE__ */ N(ue, [["__scopeId", "data-v-695cd852"]]), re = {
  key: 1,
  class: "iconfont icon-next"
}, ie = {
  name: "RadioBox"
}, he = /* @__PURE__ */ S({
  ...ie,
  props: {
    color: {},
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 },
    showNext: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "update:value"],
  setup(s, { emit: u }) {
    const a = s, t = () => {
      if (a.disabled || a.showNext)
        return !1;
      u("update:modelValue", !a.modelValue), u("update:value", !a.modelValue);
    };
    return (d, h) => (i(), v("div", {
      class: E(["radiobox", { disabled: d.disabled }]),
      onClick: t
    }, [
      d.modelValue ? (i(), v("i", {
        key: 0,
        class: "iconfont icon-success",
        style: y(`color: ${d.color}`)
      }, null, 4)) : B("", !0),
      !d.modelValue && d.showNext ? (i(), v("i", re)) : B("", !0)
    ], 2));
  }
});
const G = /* @__PURE__ */ N(he, [["__scopeId", "data-v-0c5a9f0c"]]), pe = ["onClick"], fe = ["onClick"], ve = {
  name: "ChuckCascaderItem"
}, _e = /* @__PURE__ */ S({
  ...ve,
  props: {
    multiple: { type: Boolean },
    activeId: {},
    depth: {},
    options: {},
    color: {},
    height: {}
  },
  emits: ["checkChange"],
  setup(s, { emit: u }) {
    const a = s, t = $(0), d = $(-1), h = (n, C, I = 1) => {
      if (C.disabled)
        return !1;
      t.value = n, I === 1 ? C.children || (C.checked = a.multiple ? !C.checked : !0, u("checkChange", C)) : u("checkChange", C);
    }, k = (n) => {
      u("checkChange", n);
    };
    return Y(
      () => a.options,
      (n) => {
        n[t.value] || (t.value = 0);
      },
      {
        immediate: !0,
        deep: !0
      }
    ), (n, C) => {
      const I = Z("ChuckCascaderItem", !0);
      return i(), v(M, null, [
        f("div", {
          class: "cascaderList",
          style: y(`width:${100 / n.depth}%;height:${n.height}`)
        }, [
          (i(!0), v(M, null, ee(n.options, (r, V) => (i(), v("div", {
            class: E(["cascaderItem", { active: V === t.value, disabled: r.disabled }]),
            key: V,
            onClick: U((m) => h(V, r), ["self"])
          }, [
            f("div", {
              style: { flex: "1" },
              onClick: U((m) => h(V, r), ["self"])
            }, P(r.label), 9, fe),
            n.multiple ? (i(), O(q, {
              key: 0,
              color: n.color,
              modelValue: r.checked,
              "onUpdate:modelValue": (m) => r.checked = m,
              childChecked: r.childChecked,
              disabled: r.disabled,
              "onUpdate:value": (m) => h(V, r, 2)
            }, null, 8, ["color", "modelValue", "onUpdate:modelValue", "childChecked", "disabled", "onUpdate:value"])) : (i(), O(G, {
              key: 1,
              color: n.color,
              modelValue: r.checked,
              "onUpdate:modelValue": (m) => r.checked = m,
              disabled: r.disabled,
              showNext: r.children && r.children.length > 0
            }, null, 8, ["color", "modelValue", "onUpdate:modelValue", "disabled", "showNext"]))
          ], 10, pe))), 128))
        ], 4),
        t.value > -1 && n.options[t.value] && n.options[t.value].children ? (i(), O(I, {
          key: 0,
          options: n.options[t.value].children ?? [],
          multiple: n.multiple,
          "active-id": d.value,
          depth: n.depth,
          onCheckChange: k,
          color: n.color,
          height: n.height
        }, null, 8, ["options", "multiple", "active-id", "depth", "color", "height"])) : B("", !0)
      ], 64);
    };
  }
});
const ke = /* @__PURE__ */ N(_e, [["__scopeId", "data-v-4f37b276"]]), Ce = (s) => (le("data-v-6072fd05"), s = s(), oe(), s), me = { class: "chuckSearch" }, ge = { class: "inner" }, ye = /* @__PURE__ */ Ce(() => /* @__PURE__ */ f("i", { class: "iconfont icon-search" }, null, -1)), Ve = ["value", "placeholder"], be = {
  name: "ChuckSearch"
}, $e = /* @__PURE__ */ S({
  ...be,
  props: {
    modelValue: {},
    placeholder: { default: "请输入搜索关键词" }
  },
  emits: ["update:modelValue"],
  setup(s, { emit: u }) {
    const a = s, t = (d) => {
      u("update:modelValue", d.target.value);
    };
    return (d, h) => (i(), v("div", me, [
      f("div", ge, [
        ye,
        f("input", {
          type: "text",
          onInput: t,
          value: a.modelValue,
          placeholder: d.placeholder
        }, null, 40, Ve)
      ])
    ]));
  }
});
const H = /* @__PURE__ */ N($e, [["__scopeId", "data-v-6072fd05"]]), Be = { class: "chuckCascaderList" }, Ie = ["onClick"], we = {
  key: 0,
  class: "iconfont icon-down"
}, Se = {
  key: 1,
  class: "iconfont icon-upward"
}, Ne = ["onClick"], Re = { class: "btns" }, Oe = {
  name: "ChuckCascader"
}, Ue = /* @__PURE__ */ S({
  ...Oe,
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
  setup(s, { expose: u, emit: a }) {
    const t = s, d = $(""), h = $(!1), k = $(null), n = $(0), C = b(() => t.multiple ? t.modelValue || [] : t.modelValue || ""), I = b(() => h.value || C.value.length ? t.color : "#333"), r = b(() => {
      const { value: e } = C;
      let l = R(t.options, !1, !1), c = e;
      return t.multiple || (c = [e]), c.map((o) => {
        L(l, o);
      }), c.map((o) => {
        z(l, o);
      }), l;
    }), V = b(() => J(t.options)), m = b(() => A(d.value, r.value)), J = (e) => {
      let l = [e], c = 0;
      for (; l.length > 0; ) {
        let o = [];
        const p = l.pop();
        (p == null ? void 0 : p.length) !== 0 && (c++, p == null || p.forEach((g) => {
          g && Array.isArray(g.children) && (o = o.concat(...g.children));
        }), o.length > 0 && l.push(o));
      }
      return c;
    }, K = () => {
      let e = [];
      const l = (c) => {
        c.map((o) => {
          o.checked ? e.push(o) : o.children && l(o.children);
        });
      };
      return l(r.value), e;
    }, z = (e, l) => {
      var c, o, p, g;
      for (let _ in e) {
        if (e[_].value === l)
          return [e[_]];
        if (e[_].children) {
          let x = z(e[_].children ?? [], l);
          if (x !== void 0)
            return e[_].checked = ((c = e[_].children) == null ? void 0 : c.filter((w) => w.checked).length) === ((o = e[_].children) == null ? void 0 : o.length), e[_].childChecked = !!((p = e[_].children) != null && p.filter((w) => w.childChecked).length || (g = e[_].children) != null && g.filter((w) => w.checked).length && !e[_].checked), x.concat(e[_]);
        }
      }
    }, L = (e, l) => {
      for (let c in e) {
        if (e[c].value === l)
          return e[c].checked = !0, e[c].children && (e[c].children = R(e[c].children ?? [], !0, !1)), e[c];
        if (e[c].children) {
          let o = L(e[c].children ?? [], l);
          if (o !== void 0)
            return o;
        }
      }
    }, A = (e, l) => {
      let c = [];
      return l.forEach((o) => {
        if (o.label.indexOf(e) > -1)
          c.push(o);
        else if (o.children && o.children.length > 0) {
          let p = A(e, o.children);
          if (p && p.length > 0) {
            let g = {
              ...o,
              children: p
            };
            c.push(g);
          }
        }
      }), c;
    }, R = (e, l, c) => e.map((o) => ({
      ...o,
      checked: l,
      childChecked: c,
      children: o.children ? R(o.children, l, c) : null
    })), T = (e) => e.map((l) => (delete l.checked, delete l.childChecked, {
      ...l,
      children: l.children ? T(l.children) : null
    })), Q = (e) => {
      if (t.multiple) {
        e.children = e.children ? R(e.children, e.checked, !1) : null, z(r.value, e.value);
        const l = K(), c = l.map((o) => o.value);
        a("update:modelValue", c), a("update:value", c, T(l));
      } else
        a("update:modelValue", e.value), a("update:value", e.value, e);
    }, D = () => {
      h.value = !h.value;
    }, W = () => {
      a("update:modelValue", null);
    }, X = () => {
      D(), a("confirm");
    };
    return ce(() => {
      var e, l;
      n.value = ((e = k.value) == null ? void 0 : e.getBoundingClientRect().top) + ((l = k.value) == null ? void 0 : l.getBoundingClientRect().height) + 2;
    }), u({
      expand: (e) => {
        h.value = e;
      }
    }), (e, l) => {
      var c;
      return i(), v("div", {
        style: { position: "relative" },
        ref_key: "chuckCascaderRef",
        ref: k
      }, [
        f("div", Be, [
          f("div", {
            class: "pullDownBtn",
            onClick: U(D, ["prevent"]),
            style: y(`color:${I.value}`)
          }, [
            ae(P((c = e.modelValue) != null && c.length ? `${e.multiple ? e.modelValue.length + "项" : e.modelValue}` : e.title) + " ", 1),
            h.value ? (i(), v("i", Se)) : (i(), v("i", we))
          ], 12, Ie),
          j(f("div", {
            class: "mask",
            style: y(`top:${n.value}px`),
            onClick: U(D, ["prevent"])
          }, null, 12, Ne), [
            [F, h.value]
          ]),
          j(f("div", {
            class: "chuckCascader",
            style: y(`z-index:${e.zIndex};top:${n.value}px`)
          }, [
            e.filterable ? (i(), O(H, {
              key: 0,
              modelValue: d.value,
              "onUpdate:modelValue": l[0] || (l[0] = (o) => d.value = o)
            }, null, 8, ["modelValue"])) : B("", !0),
            f("div", {
              class: "item",
              style: y(`height:${e.height}`)
            }, [
              te(ke, {
                options: m.value,
                multiple: e.multiple,
                "active-id": -1,
                depth: V.value,
                onCheckChange: Q,
                color: e.color,
                height: e.height
              }, null, 8, ["options", "multiple", "depth", "color", "height"])
            ], 4),
            f("div", Re, [
              f("div", {
                class: "btnItem reset",
                onClick: W
              }, "重置"),
              f("div", {
                class: "btnItem confirm",
                style: y(`background:${e.color}`),
                onClick: X
              }, "确定", 4)
            ])
          ], 4), [
            [F, h.value]
          ])
        ])
      ], 512);
    };
  }
});
const ze = /* @__PURE__ */ N(Ue, [["__scopeId", "data-v-74b69e46"]]), De = [ze, H, q, G], Ee = function(s) {
  De.forEach((u) => {
    s.component(u.name, u);
  });
}, Te = { install: Ee };
export {
  q as CheckBox,
  ze as ChuckCascader,
  H as ChuckSearch,
  G as RadioBox,
  Te as default
};
