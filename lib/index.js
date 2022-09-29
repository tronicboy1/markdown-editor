"use strict";
(() => {
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e7) {
          reject(e7);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e7) {
          reject(e7);
        }
      };
      var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/@lit/reactive-element/css-tag.js
  var t = window;
  var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s = Symbol();
  var n = /* @__PURE__ */ new WeakMap();
  var o = class {
    constructor(t3, e7, n6) {
      if (this._$cssResult$ = true, n6 !== s)
        throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t3, this.t = e7;
    }
    get styleSheet() {
      let t3 = this.o;
      const s5 = this.t;
      if (e && void 0 === t3) {
        const e7 = void 0 !== s5 && 1 === s5.length;
        e7 && (t3 = n.get(s5)), void 0 === t3 && ((this.o = t3 = new CSSStyleSheet()).replaceSync(this.cssText), e7 && n.set(s5, t3));
      }
      return t3;
    }
    toString() {
      return this.cssText;
    }
  };
  var r = (t3) => new o("string" == typeof t3 ? t3 : t3 + "", void 0, s);
  var i = (t3, ...e7) => {
    const n6 = 1 === t3.length ? t3[0] : e7.reduce((e8, s5, n7) => e8 + ((t4) => {
      if (true === t4._$cssResult$)
        return t4.cssText;
      if ("number" == typeof t4)
        return t4;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s5) + t3[n7 + 1], t3[0]);
    return new o(n6, t3, s);
  };
  var S = (s5, n6) => {
    e ? s5.adoptedStyleSheets = n6.map((t3) => t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet) : n6.forEach((e7) => {
      const n7 = document.createElement("style"), o6 = t.litNonce;
      void 0 !== o6 && n7.setAttribute("nonce", o6), n7.textContent = e7.cssText, s5.appendChild(n7);
    });
  };
  var c = e ? (t3) => t3 : (t3) => t3 instanceof CSSStyleSheet ? ((t4) => {
    let e7 = "";
    for (const s5 of t4.cssRules)
      e7 += s5.cssText;
    return r(e7);
  })(t3) : t3;

  // node_modules/@lit/reactive-element/reactive-element.js
  var s2;
  var e2 = window;
  var r2 = e2.trustedTypes;
  var h = r2 ? r2.emptyScript : "";
  var o2 = e2.reactiveElementPolyfillSupport;
  var n2 = { toAttribute(t3, i5) {
    switch (i5) {
      case Boolean:
        t3 = t3 ? h : null;
        break;
      case Object:
      case Array:
        t3 = null == t3 ? t3 : JSON.stringify(t3);
    }
    return t3;
  }, fromAttribute(t3, i5) {
    let s5 = t3;
    switch (i5) {
      case Boolean:
        s5 = null !== t3;
        break;
      case Number:
        s5 = null === t3 ? null : Number(t3);
        break;
      case Object:
      case Array:
        try {
          s5 = JSON.parse(t3);
        } catch (t4) {
          s5 = null;
        }
    }
    return s5;
  } };
  var a = (t3, i5) => i5 !== t3 && (i5 == i5 || t3 == t3);
  var l = { attribute: true, type: String, converter: n2, reflect: false, hasChanged: a };
  var d = class extends HTMLElement {
    constructor() {
      super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this.u();
    }
    static addInitializer(t3) {
      var i5;
      null !== (i5 = this.h) && void 0 !== i5 || (this.h = []), this.h.push(t3);
    }
    static get observedAttributes() {
      this.finalize();
      const t3 = [];
      return this.elementProperties.forEach((i5, s5) => {
        const e7 = this._$Ep(s5, i5);
        void 0 !== e7 && (this._$Ev.set(e7, s5), t3.push(e7));
      }), t3;
    }
    static createProperty(t3, i5 = l) {
      if (i5.state && (i5.attribute = false), this.finalize(), this.elementProperties.set(t3, i5), !i5.noAccessor && !this.prototype.hasOwnProperty(t3)) {
        const s5 = "symbol" == typeof t3 ? Symbol() : "__" + t3, e7 = this.getPropertyDescriptor(t3, s5, i5);
        void 0 !== e7 && Object.defineProperty(this.prototype, t3, e7);
      }
    }
    static getPropertyDescriptor(t3, i5, s5) {
      return { get() {
        return this[i5];
      }, set(e7) {
        const r4 = this[t3];
        this[i5] = e7, this.requestUpdate(t3, r4, s5);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t3) {
      return this.elementProperties.get(t3) || l;
    }
    static finalize() {
      if (this.hasOwnProperty("finalized"))
        return false;
      this.finalized = true;
      const t3 = Object.getPrototypeOf(this);
      if (t3.finalize(), this.elementProperties = new Map(t3.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
        const t4 = this.properties, i5 = [...Object.getOwnPropertyNames(t4), ...Object.getOwnPropertySymbols(t4)];
        for (const s5 of i5)
          this.createProperty(s5, t4[s5]);
      }
      return this.elementStyles = this.finalizeStyles(this.styles), true;
    }
    static finalizeStyles(i5) {
      const s5 = [];
      if (Array.isArray(i5)) {
        const e7 = new Set(i5.flat(1 / 0).reverse());
        for (const i6 of e7)
          s5.unshift(c(i6));
      } else
        void 0 !== i5 && s5.push(c(i5));
      return s5;
    }
    static _$Ep(t3, i5) {
      const s5 = i5.attribute;
      return false === s5 ? void 0 : "string" == typeof s5 ? s5 : "string" == typeof t3 ? t3.toLowerCase() : void 0;
    }
    u() {
      var t3;
      this._$E_ = new Promise((t4) => this.enableUpdating = t4), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), null === (t3 = this.constructor.h) || void 0 === t3 || t3.forEach((t4) => t4(this));
    }
    addController(t3) {
      var i5, s5;
      (null !== (i5 = this._$ES) && void 0 !== i5 ? i5 : this._$ES = []).push(t3), void 0 !== this.renderRoot && this.isConnected && (null === (s5 = t3.hostConnected) || void 0 === s5 || s5.call(t3));
    }
    removeController(t3) {
      var i5;
      null === (i5 = this._$ES) || void 0 === i5 || i5.splice(this._$ES.indexOf(t3) >>> 0, 1);
    }
    _$Eg() {
      this.constructor.elementProperties.forEach((t3, i5) => {
        this.hasOwnProperty(i5) && (this._$Ei.set(i5, this[i5]), delete this[i5]);
      });
    }
    createRenderRoot() {
      var t3;
      const s5 = null !== (t3 = this.shadowRoot) && void 0 !== t3 ? t3 : this.attachShadow(this.constructor.shadowRootOptions);
      return S(s5, this.constructor.elementStyles), s5;
    }
    connectedCallback() {
      var t3;
      void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), null === (t3 = this._$ES) || void 0 === t3 || t3.forEach((t4) => {
        var i5;
        return null === (i5 = t4.hostConnected) || void 0 === i5 ? void 0 : i5.call(t4);
      });
    }
    enableUpdating(t3) {
    }
    disconnectedCallback() {
      var t3;
      null === (t3 = this._$ES) || void 0 === t3 || t3.forEach((t4) => {
        var i5;
        return null === (i5 = t4.hostDisconnected) || void 0 === i5 ? void 0 : i5.call(t4);
      });
    }
    attributeChangedCallback(t3, i5, s5) {
      this._$AK(t3, s5);
    }
    _$EO(t3, i5, s5 = l) {
      var e7;
      const r4 = this.constructor._$Ep(t3, s5);
      if (void 0 !== r4 && true === s5.reflect) {
        const h3 = (void 0 !== (null === (e7 = s5.converter) || void 0 === e7 ? void 0 : e7.toAttribute) ? s5.converter : n2).toAttribute(i5, s5.type);
        this._$El = t3, null == h3 ? this.removeAttribute(r4) : this.setAttribute(r4, h3), this._$El = null;
      }
    }
    _$AK(t3, i5) {
      var s5;
      const e7 = this.constructor, r4 = e7._$Ev.get(t3);
      if (void 0 !== r4 && this._$El !== r4) {
        const t4 = e7.getPropertyOptions(r4), h3 = "function" == typeof t4.converter ? { fromAttribute: t4.converter } : void 0 !== (null === (s5 = t4.converter) || void 0 === s5 ? void 0 : s5.fromAttribute) ? t4.converter : n2;
        this._$El = r4, this[r4] = h3.fromAttribute(i5, t4.type), this._$El = null;
      }
    }
    requestUpdate(t3, i5, s5) {
      let e7 = true;
      void 0 !== t3 && (((s5 = s5 || this.constructor.getPropertyOptions(t3)).hasChanged || a)(this[t3], i5) ? (this._$AL.has(t3) || this._$AL.set(t3, i5), true === s5.reflect && this._$El !== t3 && (void 0 === this._$EC && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t3, s5))) : e7 = false), !this.isUpdatePending && e7 && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
      this.isUpdatePending = true;
      try {
        await this._$E_;
      } catch (t4) {
        Promise.reject(t4);
      }
      const t3 = this.scheduleUpdate();
      return null != t3 && await t3, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var t3;
      if (!this.isUpdatePending)
        return;
      this.hasUpdated, this._$Ei && (this._$Ei.forEach((t4, i6) => this[i6] = t4), this._$Ei = void 0);
      let i5 = false;
      const s5 = this._$AL;
      try {
        i5 = this.shouldUpdate(s5), i5 ? (this.willUpdate(s5), null === (t3 = this._$ES) || void 0 === t3 || t3.forEach((t4) => {
          var i6;
          return null === (i6 = t4.hostUpdate) || void 0 === i6 ? void 0 : i6.call(t4);
        }), this.update(s5)) : this._$Ek();
      } catch (t4) {
        throw i5 = false, this._$Ek(), t4;
      }
      i5 && this._$AE(s5);
    }
    willUpdate(t3) {
    }
    _$AE(t3) {
      var i5;
      null === (i5 = this._$ES) || void 0 === i5 || i5.forEach((t4) => {
        var i6;
        return null === (i6 = t4.hostUpdated) || void 0 === i6 ? void 0 : i6.call(t4);
      }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
    }
    _$Ek() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$E_;
    }
    shouldUpdate(t3) {
      return true;
    }
    update(t3) {
      void 0 !== this._$EC && (this._$EC.forEach((t4, i5) => this._$EO(i5, this[i5], t4)), this._$EC = void 0), this._$Ek();
    }
    updated(t3) {
    }
    firstUpdated(t3) {
    }
  };
  d.finalized = true, d.elementProperties = /* @__PURE__ */ new Map(), d.elementStyles = [], d.shadowRootOptions = { mode: "open" }, null == o2 || o2({ ReactiveElement: d }), (null !== (s2 = e2.reactiveElementVersions) && void 0 !== s2 ? s2 : e2.reactiveElementVersions = []).push("1.4.1");

  // node_modules/lit-html/lit-html.js
  var t2;
  var i2 = window;
  var s3 = i2.trustedTypes;
  var e3 = s3 ? s3.createPolicy("lit-html", { createHTML: (t3) => t3 }) : void 0;
  var o3 = `lit$${(Math.random() + "").slice(9)}$`;
  var n3 = "?" + o3;
  var l2 = `<${n3}>`;
  var h2 = document;
  var r3 = (t3 = "") => h2.createComment(t3);
  var d2 = (t3) => null === t3 || "object" != typeof t3 && "function" != typeof t3;
  var u = Array.isArray;
  var c2 = (t3) => u(t3) || "function" == typeof (null == t3 ? void 0 : t3[Symbol.iterator]);
  var v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var a2 = /-->/g;
  var f = />/g;
  var _ = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var m = /'/g;
  var p = /"/g;
  var $ = /^(?:script|style|textarea|title)$/i;
  var g = (t3) => (i5, ...s5) => ({ _$litType$: t3, strings: i5, values: s5 });
  var y = g(1);
  var w = g(2);
  var x = Symbol.for("lit-noChange");
  var b = Symbol.for("lit-nothing");
  var T = /* @__PURE__ */ new WeakMap();
  var A = (t3, i5, s5) => {
    var e7, o6;
    const n6 = null !== (e7 = null == s5 ? void 0 : s5.renderBefore) && void 0 !== e7 ? e7 : i5;
    let l5 = n6._$litPart$;
    if (void 0 === l5) {
      const t4 = null !== (o6 = null == s5 ? void 0 : s5.renderBefore) && void 0 !== o6 ? o6 : null;
      n6._$litPart$ = l5 = new S2(i5.insertBefore(r3(), t4), t4, void 0, null != s5 ? s5 : {});
    }
    return l5._$AI(t3), l5;
  };
  var E = h2.createTreeWalker(h2, 129, null, false);
  var C = (t3, i5) => {
    const s5 = t3.length - 1, n6 = [];
    let h3, r4 = 2 === i5 ? "<svg>" : "", d3 = v;
    for (let i6 = 0; i6 < s5; i6++) {
      const s6 = t3[i6];
      let e7, u3, c3 = -1, g2 = 0;
      for (; g2 < s6.length && (d3.lastIndex = g2, u3 = d3.exec(s6), null !== u3); )
        g2 = d3.lastIndex, d3 === v ? "!--" === u3[1] ? d3 = a2 : void 0 !== u3[1] ? d3 = f : void 0 !== u3[2] ? ($.test(u3[2]) && (h3 = RegExp("</" + u3[2], "g")), d3 = _) : void 0 !== u3[3] && (d3 = _) : d3 === _ ? ">" === u3[0] ? (d3 = null != h3 ? h3 : v, c3 = -1) : void 0 === u3[1] ? c3 = -2 : (c3 = d3.lastIndex - u3[2].length, e7 = u3[1], d3 = void 0 === u3[3] ? _ : '"' === u3[3] ? p : m) : d3 === p || d3 === m ? d3 = _ : d3 === a2 || d3 === f ? d3 = v : (d3 = _, h3 = void 0);
      const y2 = d3 === _ && t3[i6 + 1].startsWith("/>") ? " " : "";
      r4 += d3 === v ? s6 + l2 : c3 >= 0 ? (n6.push(e7), s6.slice(0, c3) + "$lit$" + s6.slice(c3) + o3 + y2) : s6 + o3 + (-2 === c3 ? (n6.push(void 0), i6) : y2);
    }
    const u2 = r4 + (t3[s5] || "<?>") + (2 === i5 ? "</svg>" : "");
    if (!Array.isArray(t3) || !t3.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return [void 0 !== e3 ? e3.createHTML(u2) : u2, n6];
  };
  var P = class {
    constructor({ strings: t3, _$litType$: i5 }, e7) {
      let l5;
      this.parts = [];
      let h3 = 0, d3 = 0;
      const u2 = t3.length - 1, c3 = this.parts, [v2, a3] = C(t3, i5);
      if (this.el = P.createElement(v2, e7), E.currentNode = this.el.content, 2 === i5) {
        const t4 = this.el.content, i6 = t4.firstChild;
        i6.remove(), t4.append(...i6.childNodes);
      }
      for (; null !== (l5 = E.nextNode()) && c3.length < u2; ) {
        if (1 === l5.nodeType) {
          if (l5.hasAttributes()) {
            const t4 = [];
            for (const i6 of l5.getAttributeNames())
              if (i6.endsWith("$lit$") || i6.startsWith(o3)) {
                const s5 = a3[d3++];
                if (t4.push(i6), void 0 !== s5) {
                  const t5 = l5.getAttribute(s5.toLowerCase() + "$lit$").split(o3), i7 = /([.?@])?(.*)/.exec(s5);
                  c3.push({ type: 1, index: h3, name: i7[2], strings: t5, ctor: "." === i7[1] ? R : "?" === i7[1] ? H : "@" === i7[1] ? I : M });
                } else
                  c3.push({ type: 6, index: h3 });
              }
            for (const i6 of t4)
              l5.removeAttribute(i6);
          }
          if ($.test(l5.tagName)) {
            const t4 = l5.textContent.split(o3), i6 = t4.length - 1;
            if (i6 > 0) {
              l5.textContent = s3 ? s3.emptyScript : "";
              for (let s5 = 0; s5 < i6; s5++)
                l5.append(t4[s5], r3()), E.nextNode(), c3.push({ type: 2, index: ++h3 });
              l5.append(t4[i6], r3());
            }
          }
        } else if (8 === l5.nodeType)
          if (l5.data === n3)
            c3.push({ type: 2, index: h3 });
          else {
            let t4 = -1;
            for (; -1 !== (t4 = l5.data.indexOf(o3, t4 + 1)); )
              c3.push({ type: 7, index: h3 }), t4 += o3.length - 1;
          }
        h3++;
      }
    }
    static createElement(t3, i5) {
      const s5 = h2.createElement("template");
      return s5.innerHTML = t3, s5;
    }
  };
  function V(t3, i5, s5 = t3, e7) {
    var o6, n6, l5, h3;
    if (i5 === x)
      return i5;
    let r4 = void 0 !== e7 ? null === (o6 = s5._$Cl) || void 0 === o6 ? void 0 : o6[e7] : s5._$Cu;
    const u2 = d2(i5) ? void 0 : i5._$litDirective$;
    return (null == r4 ? void 0 : r4.constructor) !== u2 && (null === (n6 = null == r4 ? void 0 : r4._$AO) || void 0 === n6 || n6.call(r4, false), void 0 === u2 ? r4 = void 0 : (r4 = new u2(t3), r4._$AT(t3, s5, e7)), void 0 !== e7 ? (null !== (l5 = (h3 = s5)._$Cl) && void 0 !== l5 ? l5 : h3._$Cl = [])[e7] = r4 : s5._$Cu = r4), void 0 !== r4 && (i5 = V(t3, r4._$AS(t3, i5.values), r4, e7)), i5;
  }
  var N = class {
    constructor(t3, i5) {
      this.v = [], this._$AN = void 0, this._$AD = t3, this._$AM = i5;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    p(t3) {
      var i5;
      const { el: { content: s5 }, parts: e7 } = this._$AD, o6 = (null !== (i5 = null == t3 ? void 0 : t3.creationScope) && void 0 !== i5 ? i5 : h2).importNode(s5, true);
      E.currentNode = o6;
      let n6 = E.nextNode(), l5 = 0, r4 = 0, d3 = e7[0];
      for (; void 0 !== d3; ) {
        if (l5 === d3.index) {
          let i6;
          2 === d3.type ? i6 = new S2(n6, n6.nextSibling, this, t3) : 1 === d3.type ? i6 = new d3.ctor(n6, d3.name, d3.strings, this, t3) : 6 === d3.type && (i6 = new L(n6, this, t3)), this.v.push(i6), d3 = e7[++r4];
        }
        l5 !== (null == d3 ? void 0 : d3.index) && (n6 = E.nextNode(), l5++);
      }
      return o6;
    }
    m(t3) {
      let i5 = 0;
      for (const s5 of this.v)
        void 0 !== s5 && (void 0 !== s5.strings ? (s5._$AI(t3, s5, i5), i5 += s5.strings.length - 2) : s5._$AI(t3[i5])), i5++;
    }
  };
  var S2 = class {
    constructor(t3, i5, s5, e7) {
      var o6;
      this.type = 2, this._$AH = b, this._$AN = void 0, this._$AA = t3, this._$AB = i5, this._$AM = s5, this.options = e7, this._$C_ = null === (o6 = null == e7 ? void 0 : e7.isConnected) || void 0 === o6 || o6;
    }
    get _$AU() {
      var t3, i5;
      return null !== (i5 = null === (t3 = this._$AM) || void 0 === t3 ? void 0 : t3._$AU) && void 0 !== i5 ? i5 : this._$C_;
    }
    get parentNode() {
      let t3 = this._$AA.parentNode;
      const i5 = this._$AM;
      return void 0 !== i5 && 11 === t3.nodeType && (t3 = i5.parentNode), t3;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t3, i5 = this) {
      t3 = V(this, t3, i5), d2(t3) ? t3 === b || null == t3 || "" === t3 ? (this._$AH !== b && this._$AR(), this._$AH = b) : t3 !== this._$AH && t3 !== x && this.$(t3) : void 0 !== t3._$litType$ ? this.T(t3) : void 0 !== t3.nodeType ? this.k(t3) : c2(t3) ? this.O(t3) : this.$(t3);
    }
    S(t3, i5 = this._$AB) {
      return this._$AA.parentNode.insertBefore(t3, i5);
    }
    k(t3) {
      this._$AH !== t3 && (this._$AR(), this._$AH = this.S(t3));
    }
    $(t3) {
      this._$AH !== b && d2(this._$AH) ? this._$AA.nextSibling.data = t3 : this.k(h2.createTextNode(t3)), this._$AH = t3;
    }
    T(t3) {
      var i5;
      const { values: s5, _$litType$: e7 } = t3, o6 = "number" == typeof e7 ? this._$AC(t3) : (void 0 === e7.el && (e7.el = P.createElement(e7.h, this.options)), e7);
      if ((null === (i5 = this._$AH) || void 0 === i5 ? void 0 : i5._$AD) === o6)
        this._$AH.m(s5);
      else {
        const t4 = new N(o6, this), i6 = t4.p(this.options);
        t4.m(s5), this.k(i6), this._$AH = t4;
      }
    }
    _$AC(t3) {
      let i5 = T.get(t3.strings);
      return void 0 === i5 && T.set(t3.strings, i5 = new P(t3)), i5;
    }
    O(t3) {
      u(this._$AH) || (this._$AH = [], this._$AR());
      const i5 = this._$AH;
      let s5, e7 = 0;
      for (const o6 of t3)
        e7 === i5.length ? i5.push(s5 = new S2(this.S(r3()), this.S(r3()), this, this.options)) : s5 = i5[e7], s5._$AI(o6), e7++;
      e7 < i5.length && (this._$AR(s5 && s5._$AB.nextSibling, e7), i5.length = e7);
    }
    _$AR(t3 = this._$AA.nextSibling, i5) {
      var s5;
      for (null === (s5 = this._$AP) || void 0 === s5 || s5.call(this, false, true, i5); t3 && t3 !== this._$AB; ) {
        const i6 = t3.nextSibling;
        t3.remove(), t3 = i6;
      }
    }
    setConnected(t3) {
      var i5;
      void 0 === this._$AM && (this._$C_ = t3, null === (i5 = this._$AP) || void 0 === i5 || i5.call(this, t3));
    }
  };
  var M = class {
    constructor(t3, i5, s5, e7, o6) {
      this.type = 1, this._$AH = b, this._$AN = void 0, this.element = t3, this.name = i5, this._$AM = e7, this.options = o6, s5.length > 2 || "" !== s5[0] || "" !== s5[1] ? (this._$AH = Array(s5.length - 1).fill(new String()), this.strings = s5) : this._$AH = b;
    }
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t3, i5 = this, s5, e7) {
      const o6 = this.strings;
      let n6 = false;
      if (void 0 === o6)
        t3 = V(this, t3, i5, 0), n6 = !d2(t3) || t3 !== this._$AH && t3 !== x, n6 && (this._$AH = t3);
      else {
        const e8 = t3;
        let l5, h3;
        for (t3 = o6[0], l5 = 0; l5 < o6.length - 1; l5++)
          h3 = V(this, e8[s5 + l5], i5, l5), h3 === x && (h3 = this._$AH[l5]), n6 || (n6 = !d2(h3) || h3 !== this._$AH[l5]), h3 === b ? t3 = b : t3 !== b && (t3 += (null != h3 ? h3 : "") + o6[l5 + 1]), this._$AH[l5] = h3;
      }
      n6 && !e7 && this.P(t3);
    }
    P(t3) {
      t3 === b ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t3 ? t3 : "");
    }
  };
  var R = class extends M {
    constructor() {
      super(...arguments), this.type = 3;
    }
    P(t3) {
      this.element[this.name] = t3 === b ? void 0 : t3;
    }
  };
  var k = s3 ? s3.emptyScript : "";
  var H = class extends M {
    constructor() {
      super(...arguments), this.type = 4;
    }
    P(t3) {
      t3 && t3 !== b ? this.element.setAttribute(this.name, k) : this.element.removeAttribute(this.name);
    }
  };
  var I = class extends M {
    constructor(t3, i5, s5, e7, o6) {
      super(t3, i5, s5, e7, o6), this.type = 5;
    }
    _$AI(t3, i5 = this) {
      var s5;
      if ((t3 = null !== (s5 = V(this, t3, i5, 0)) && void 0 !== s5 ? s5 : b) === x)
        return;
      const e7 = this._$AH, o6 = t3 === b && e7 !== b || t3.capture !== e7.capture || t3.once !== e7.once || t3.passive !== e7.passive, n6 = t3 !== b && (e7 === b || o6);
      o6 && this.element.removeEventListener(this.name, this, e7), n6 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
    }
    handleEvent(t3) {
      var i5, s5;
      "function" == typeof this._$AH ? this._$AH.call(null !== (s5 = null === (i5 = this.options) || void 0 === i5 ? void 0 : i5.host) && void 0 !== s5 ? s5 : this.element, t3) : this._$AH.handleEvent(t3);
    }
  };
  var L = class {
    constructor(t3, i5, s5) {
      this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s5;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t3) {
      V(this, t3);
    }
  };
  var Z = i2.litHtmlPolyfillSupport;
  null == Z || Z(P, S2), (null !== (t2 = i2.litHtmlVersions) && void 0 !== t2 ? t2 : i2.litHtmlVersions = []).push("2.3.1");

  // node_modules/lit-element/lit-element.js
  var l3;
  var o4;
  var s4 = class extends d {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      var t3, e7;
      const i5 = super.createRenderRoot();
      return null !== (t3 = (e7 = this.renderOptions).renderBefore) && void 0 !== t3 || (e7.renderBefore = i5.firstChild), i5;
    }
    update(t3) {
      const i5 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this._$Do = A(i5, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      var t3;
      super.connectedCallback(), null === (t3 = this._$Do) || void 0 === t3 || t3.setConnected(true);
    }
    disconnectedCallback() {
      var t3;
      super.disconnectedCallback(), null === (t3 = this._$Do) || void 0 === t3 || t3.setConnected(false);
    }
    render() {
      return x;
    }
  };
  s4.finalized = true, s4._$litElement$ = true, null === (l3 = globalThis.litElementHydrateSupport) || void 0 === l3 || l3.call(globalThis, { LitElement: s4 });
  var n4 = globalThis.litElementPolyfillSupport;
  null == n4 || n4({ LitElement: s4 });
  (null !== (o4 = globalThis.litElementVersions) && void 0 !== o4 ? o4 : globalThis.litElementVersions = []).push("3.2.2");

  // node_modules/@lit/reactive-element/decorators/custom-element.js
  var e4 = (e7) => (n6) => "function" == typeof n6 ? ((e8, n7) => (customElements.define(e8, n7), n7))(e7, n6) : ((e8, n7) => {
    const { kind: t3, elements: s5 } = n7;
    return { kind: t3, elements: s5, finisher(n8) {
      customElements.define(e8, n8);
    } };
  })(e7, n6);

  // node_modules/@lit/reactive-element/decorators/property.js
  var i3 = (i5, e7) => "method" === e7.kind && e7.descriptor && !("value" in e7.descriptor) ? { ...e7, finisher(n6) {
    n6.createProperty(e7.key, i5);
  } } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e7.key, initializer() {
    "function" == typeof e7.initializer && (this[e7.key] = e7.initializer.call(this));
  }, finisher(n6) {
    n6.createProperty(e7.key, i5);
  } };
  function e5(e7) {
    return (n6, t3) => void 0 !== t3 ? ((i5, e8, n7) => {
      e8.constructor.createProperty(n7, i5);
    })(e7, n6, t3) : i3(e7, n6);
  }

  // node_modules/@lit/reactive-element/decorators/base.js
  var o5 = ({ finisher: e7, descriptor: t3 }) => (o6, n6) => {
    var r4;
    if (void 0 === n6) {
      const n7 = null !== (r4 = o6.originalKey) && void 0 !== r4 ? r4 : o6.key, i5 = null != t3 ? { kind: "method", placement: "prototype", key: n7, descriptor: t3(o6.key) } : { ...o6, key: n7 };
      return null != e7 && (i5.finisher = function(t4) {
        e7(t4, n7);
      }), i5;
    }
    {
      const r5 = o6.constructor;
      void 0 !== t3 && Object.defineProperty(o6, n6, t3(n6)), null == e7 || e7(r5, n6);
    }
  };

  // node_modules/@lit/reactive-element/decorators/query.js
  function i4(i5, n6) {
    return o5({ descriptor: (o6) => {
      const t3 = { get() {
        var o7, n7;
        return null !== (n7 = null === (o7 = this.renderRoot) || void 0 === o7 ? void 0 : o7.querySelector(i5)) && void 0 !== n7 ? n7 : null;
      }, enumerable: true, configurable: true };
      if (n6) {
        const n7 = "symbol" == typeof o6 ? Symbol() : "__" + o6;
        t3.get = function() {
          var o7, t4;
          return void 0 === this[n7] && (this[n7] = null !== (t4 = null === (o7 = this.renderRoot) || void 0 === o7 ? void 0 : o7.querySelector(i5)) && void 0 !== t4 ? t4 : null), this[n7];
        };
      }
      return t3;
    } });
  }

  // node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
  var n5;
  var e6 = null != (null === (n5 = window.HTMLSlotElement) || void 0 === n5 ? void 0 : n5.prototype.assignedElements) ? (o6, n6) => o6.assignedElements(n6) : (o6, n6) => o6.assignedNodes(n6).filter((o7) => o7.nodeType === Node.ELEMENT_NODE);

  // node_modules/lit-markdown-editor/lib/styles/icon.js
  var iconStyles = i`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-height: 100%;
  }
  svg {
    width: auto;
    max-height: 100%;
  }
`;
  var icon_default = iconStyles;

  // node_modules/lit-markdown-editor/lib/icons/table-icon.js
  var __decorate = function(decorators, target, key, desc) {
    var c3 = arguments.length, r4 = c3 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r4 = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i5 = decorators.length - 1; i5 >= 0; i5--)
        if (d3 = decorators[i5])
          r4 = (c3 < 3 ? d3(r4) : c3 > 3 ? d3(target, key, r4) : d3(target, key)) || r4;
    return c3 > 3 && r4 && Object.defineProperty(target, key, r4), r4;
  };
  var tagName = "table-icon";
  var TableIcon = class TableIcon2 extends s4 {
    render() {
      return y`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      width="48"
      viewBox="0, 0, 48, 48"
    >
      <path
        d="M6 42V6h36v36Zm3-25h30V9H9Zm11 11h8v-8h-8Zm0 11h8v-8h-8ZM9 28h8v-8H9Zm22 0h8v-8h-8ZM9 39h8v-8H9Zm22 0h8v-8h-8Z"
      />
    </svg>`;
    }
  };
  TableIcon.styles = [icon_default];
  TableIcon = __decorate([
    e4(tagName)
  ], TableIcon);

  // node_modules/lit-markdown-editor/lib/icons/link-icon.js
  var __decorate2 = function(decorators, target, key, desc) {
    var c3 = arguments.length, r4 = c3 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r4 = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i5 = decorators.length - 1; i5 >= 0; i5--)
        if (d3 = decorators[i5])
          r4 = (c3 < 3 ? d3(r4) : c3 > 3 ? d3(target, key, r4) : d3(target, key)) || r4;
    return c3 > 3 && r4 && Object.defineProperty(target, key, r4), r4;
  };
  var tagName2 = "link-icon";
  var LinkIcon = class LinkIcon2 extends s4 {
    render() {
      return y`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      width="48"
      viewBox="0, 0, 48, 48"
    >
      <path
        d="M22.5 34H14q-4.15 0-7.075-2.925T4 24q0-4.15 2.925-7.075T14 14h8.5v3H14q-2.9 0-4.95 2.05Q7 21.1 7 24q0 2.9 2.05 4.95Q11.1 31 14 31h8.5Zm-6.25-8.5v-3h15.5v3ZM25.5 34v-3H34q2.9 0 4.95-2.05Q41 26.9 41 24q0-2.9-2.05-4.95Q36.9 17 34 17h-8.5v-3H34q4.15 0 7.075 2.925T44 24q0 4.15-2.925 7.075T34 34Z"
      />
    </svg>`;
    }
  };
  LinkIcon.styles = [icon_default];
  LinkIcon = __decorate2([
    e4(tagName2)
  ], LinkIcon);

  // node_modules/lit-markdown-editor/lib/helpers/index.js
  var loadComponent = (tagName5, elementDefinition) => {
    if (window.customElements.get(tagName5))
      return;
    customElements.define(tagName5, elementDefinition);
  };

  // node_modules/lit-markdown-editor/lib/styles/index.js
  var globalStyles = i`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
      Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    --secondary-color: rgb(214, 214, 214);
    --secondary-color-hover: rgb(224, 224, 224);
    --radius: 4px;
  }
`;

  // node_modules/lit-markdown-editor/lib/styles/form.js
  var formStyles = i`
  div {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 1rem auto;
  }

  div input {
    border: 1px solid rgb(214, 214, 214);
    border-radius: 4px;
    height: 40px;
    padding: 1rem;
  }

  div textarea {
    border: 1px solid rgb(214, 214, 214);
    border-radius: 4px;
    height: 200px;
    padding: 1rem;
  }

  input[type="file"] {
    opacity: 0;
    width: 0.1px;
    height: 0.1px;
    position: absolute;
  }

  .file-label {
    background-color: white;
    border: 1px solid rgb(214, 214, 214);
    border-radius: 8px;
    width: 80%;
    text-align: center;
    padding: 0.5rem 1rem;
    margin: 0 auto;
    cursor: pointer;
  }
`;
  var form_default = formStyles;

  // node_modules/lit-markdown-editor/lib/styles/markdown.js
  var markdownStyles = i`
  :host {
    display: flex;
    width: 100%;
    max-width: 100%;
    flex-direction: column;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
    margin: 0;
    padding: 0 4px;
    width: 100%;
    height: 40px;
    list-style-type: none;
    border: 1px solid var(--secondary-color);
    border-radius: var(--radius);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    background-color: var(--secondary-color);
  }

  li {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem;
    margin: 0;
    color: black;
    cursor: pointer;
    border-radius: var(--radius);
    max-height: 35px;
    max-width: 38px;
  }
  li:hover {
    background-color: var(--secondary-color-hover);
  }

  textarea {
    border: 1px solid var(--secondary-color);
    border-radius: 0px;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    min-height: 30vh;
    padding: 0.5rem;
    max-width: 100%;
    min-width: 100%;
    margin: 0;
    outline: none;
  }
`;

  // node_modules/lit-markdown-editor/lib/icons/new-picture-icon.js
  var __decorate3 = function(decorators, target, key, desc) {
    var c3 = arguments.length, r4 = c3 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r4 = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i5 = decorators.length - 1; i5 >= 0; i5--)
        if (d3 = decorators[i5])
          r4 = (c3 < 3 ? d3(r4) : c3 > 3 ? d3(target, key, r4) : d3(target, key)) || r4;
    return c3 > 3 && r4 && Object.defineProperty(target, key, r4), r4;
  };
  var tagName3 = "new-picture-icon";
  var NewPictureIcon = class NewPictureIcon2 extends s4 {
    render() {
      return y`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      width="48"
      viewBox="0, 0, 48, 48"
    >
      <path
        d="M29.45 6v3H9v30h30V18.6h3V39q0 1.2-.9 2.1-.9.9-2.1.9H9q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6ZM38 6v4.05h4.05v3H38v4.05h-3v-4.05h-4.05v-3H35V6ZM12 33.9h24l-7.2-9.6-6.35 8.35-4.7-6.2ZM9 9v30V9Z"
      />
    </svg>`;
    }
  };
  NewPictureIcon.styles = [icon_default];
  NewPictureIcon = __decorate3([
    e4(tagName3)
  ], NewPictureIcon);

  // node_modules/lit-markdown-editor/lib/index.js
  var __decorate4 = function(decorators, target, key, desc) {
    var c3 = arguments.length, r4 = c3 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r4 = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i5 = decorators.length - 1; i5 >= 0; i5--)
        if (d3 = decorators[i5])
          r4 = (c3 < 3 ? d3(r4) : c3 > 3 ? d3(target, key, r4) : d3(target, key)) || r4;
    return c3 > 3 && r4 && Object.defineProperty(target, key, r4), r4;
  };
  var __classPrivateFieldSet = function(receiver, state, value, kind, f2) {
    if (kind === "m")
      throw new TypeError("Private method is not writable");
    if (kind === "a" && !f2)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver))
      throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f2.call(receiver, value) : f2 ? f2.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet = function(receiver, state, kind, f2) {
    if (kind === "a" && !f2)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver))
      throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f2 : kind === "a" ? f2.call(receiver) : f2 ? f2.value : state.get(receiver);
  };
  var _LitMarkdownEditor_markdownMap;
  var _LitMarkdownEditor_controller;
  var tagName4 = "lit-markdown-editor";
  var LitMarkdownEditor = class LitMarkdownEditor2 extends s4 {
    constructor() {
      super();
      _LitMarkdownEditor_markdownMap.set(this, void 0);
      _LitMarkdownEditor_controller.set(this, new AbortController());
      this.name = "";
      this.required = false;
      this.handleHeaderClick = (event) => {
        var _a;
        const target = event.currentTarget;
        if (!(target instanceof HTMLElement))
          throw TypeError();
        const id = target.id;
        const markdownSymbol = (_a = __classPrivateFieldGet(this, _LitMarkdownEditor_markdownMap, "f").get(id)) !== null && _a !== void 0 ? _a : "";
        const { selectionStart, value } = this.textarea;
        const isFullParagraph = selectionStart ? value.at(selectionStart - 1) === "\n" : true;
        const newValue = `${value.substring(0, selectionStart)}${isFullParagraph ? "" : "\n"}${markdownSymbol} ${value.substring(selectionStart)}`;
        this.textarea.value = newValue;
        this.textarea.focus();
        const newSelectionStart = selectionStart + markdownSymbol.length + 2;
        this.textarea.setSelectionRange(newSelectionStart, newSelectionStart);
        this.triggerInputEvent();
      };
      this.handleModifierClick = (event) => {
        var _a;
        const target = event.currentTarget;
        if (!(target instanceof HTMLElement))
          throw TypeError();
        const id = target.id;
        const markdownSymbol = (_a = __classPrivateFieldGet(this, _LitMarkdownEditor_markdownMap, "f").get(id)) !== null && _a !== void 0 ? _a : "";
        const { selectionStart, selectionEnd, value } = this.textarea;
        const newValue = `${value.substring(0, selectionStart)} ${markdownSymbol}${value.substring(selectionStart, selectionEnd)}${markdownSymbol} ${value.substring(selectionEnd)}`;
        this.textarea.value = newValue;
        this.textarea.focus();
        const newSelectionStart = selectionStart + markdownSymbol.length;
        this.textarea.setSelectionRange(newSelectionStart, newSelectionStart);
        this.triggerInputEvent();
      };
      this.handleTemplateClick = (event) => {
        var _a;
        const target = event.currentTarget;
        if (!(target instanceof HTMLElement))
          throw TypeError();
        const id = target.id;
        const markdownSymbol = (_a = __classPrivateFieldGet(this, _LitMarkdownEditor_markdownMap, "f").get(id)) !== null && _a !== void 0 ? _a : "";
        const { selectionStart, value } = this.textarea;
        const newLine = "\n";
        const newValue = value.substring(0, selectionStart) + newLine + markdownSymbol + newLine + value.substring(selectionStart);
        this.textarea.value = newValue;
        this.textarea.focus();
        this.textarea.setSelectionRange(selectionStart, selectionStart);
        this.triggerInputEvent();
      };
      this.handleAddPictureClick = () => {
        this.fileInput.click();
      };
      this.handleFileInput = () => {
        const { files } = this.fileInput;
        if (!files)
          throw Error("No files object was found on input");
        const file = files[0];
        if (!file || file.size === 0)
          return;
        const objectURL = URL.createObjectURL(file);
        const markdown = `![${file.name}](${objectURL} "${file.name}")`;
        const { selectionStart, selectionEnd, value } = this.textarea;
        const textUntilSelectionStart = value.substring(0, selectionStart);
        const textAfterSelectionEnd = value.substring(selectionEnd);
        const newLine = "\n";
        this.textarea.value = textUntilSelectionStart + newLine + markdown + textAfterSelectionEnd + newLine;
        this.triggerInputEvent();
        this.renderToLightDom();
      };
      __classPrivateFieldSet(this, _LitMarkdownEditor_markdownMap, /* @__PURE__ */ new Map([
        ["h1", "#"],
        ["h2", "##"],
        ["h3", "###"],
        ["h4", "####"],
        ["h5", "#####"],
        ["i", "_"],
        ["b", "**"],
        ["table", "| A | B |\n| --- | --- |\n| a | b |"],
        ["link", '[URL]("https://")']
      ]), "f");
      loadComponent(tagName, TableIcon);
      loadComponent(tagName2, LinkIcon);
      loadComponent(tagName3, NewPictureIcon);
    }
    get value() {
      var _a, _b;
      return (_b = (_a = this.textarea) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : "";
    }
    set value(value) {
      if (typeof value !== "string")
        throw TypeError("Value must be string.");
      if (!this.textarea)
        throw Error("Cannot set textarea value before render.");
      this.textarea.value = value;
      this.renderToLightDom();
    }
    connectedCallback() {
      super.connectedCallback();
      this.renderToLightDom();
    }
    firstUpdated(_changedProperties) {
      var _a;
      super.firstUpdated(_changedProperties);
      this.value = (_a = this.textContent) !== null && _a !== void 0 ? _a : "";
      this.textarea.addEventListener("input", () => {
        this.renderToLightDom();
      }, { signal: __classPrivateFieldGet(this, _LitMarkdownEditor_controller, "f").signal });
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      __classPrivateFieldGet(this, _LitMarkdownEditor_controller, "f").abort();
    }
    triggerInputEvent() {
      this.dispatchEvent(new Event("input", { composed: true }));
    }
    renderToLightDom() {
      A(y`<textarea slot="input" name=${this.name} hidden .value=${this.value} ?required=${this.required}></textarea>`, this);
    }
    render() {
      return y`
      <input @input=${this.handleFileInput} id="add-file" type="file" hidden accept="image/*" />
      <nav>
        <ul>
          <li @click=${this.handleHeaderClick} id="h1">H1</li>
          <li @click=${this.handleHeaderClick} id="h2">H2</li>
          <li @click=${this.handleHeaderClick} id="h3">H3</li>
          <li @click=${this.handleHeaderClick} id="h4">H4</li>
          <li @click=${this.handleHeaderClick} id="h5">H5</li>
          <li @click=${this.handleModifierClick} id="i"><em>i</em></li>
          <li @click=${this.handleModifierClick} id="b"><strong>B</strong></li>
          <li @click=${this.handleTemplateClick} id="table">
            <table-icon></table-icon>
          </li>
          <li @click=${this.handleTemplateClick} id="link">
            <link-icon></link-icon>
          </li>
          <li @click=${this.handleAddPictureClick} style="position: relative;">
            <new-picture-icon></new-picture-icon>
          </li>
        </ul>
      </nav>
      <textarea name=${this.name} autocomplete="off" maxlength="5000"></textarea>
      <slot name="input"></slot>
    `;
    }
  };
  _LitMarkdownEditor_markdownMap = /* @__PURE__ */ new WeakMap(), _LitMarkdownEditor_controller = /* @__PURE__ */ new WeakMap();
  LitMarkdownEditor.styles = [globalStyles, form_default, markdownStyles];
  __decorate4([
    e5({ attribute: "name" })
  ], LitMarkdownEditor.prototype, "name", void 0);
  __decorate4([
    e5({ attribute: "required", type: Boolean })
  ], LitMarkdownEditor.prototype, "required", void 0);
  __decorate4([
    i4("textarea")
  ], LitMarkdownEditor.prototype, "textarea", void 0);
  __decorate4([
    i4("input#add-file")
  ], LitMarkdownEditor.prototype, "fileInput", void 0);
  LitMarkdownEditor = __decorate4([
    e4(tagName4)
  ], LitMarkdownEditor);

  // src/application/helpers.ts
  var readFileAsDataString = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const { result } = reader;
      if (typeof result !== "string")
        throw TypeError();
      resolve(result);
    });
    reader.addEventListener("error", () => reject(reader.error));
    reader.readAsDataURL(file);
  });
  var buildMapOfImages = (text) => __async(void 0, null, function* () {
    const imageBlobUrls = Array.from(
      text.matchAll(/!\[.*\]\(blob:(.*) ".*"\)/g)
    ).map((match) => "blob:" + match[1]);
    const imageMap = /* @__PURE__ */ new Map();
    for (const url of imageBlobUrls) {
      const blob = yield getImageBlob(url);
      if (!blob)
        continue;
      const dataString = yield readFileAsDataString(blob);
      imageMap.set(url, dataString);
    }
    return imageMap;
  });
  var replaceBlobURLsWithDataString = (text) => __async(void 0, null, function* () {
    const imageDataStringMap = yield buildMapOfImages(text);
    const matches = text.matchAll(/!\[.*\]\((.*) ".*"\)/g);
    let replacedText = text;
    for (const [hit, url] of matches) {
      const image = imageDataStringMap.get(url);
      if (!image)
        continue;
      replacedText = replacedText.replace(url, image);
    }
    return replacedText;
  });
  var getImageBlob = (url) => fetch(url).then(
    (result) => result.blob(),
    () => null
  );

  // node_modules/marked/lib/marked.esm.js
  function getDefaults() {
    return {
      async: false,
      baseUrl: null,
      breaks: false,
      extensions: null,
      gfm: true,
      headerIds: true,
      headerPrefix: "",
      highlight: null,
      langPrefix: "language-",
      mangle: true,
      pedantic: false,
      renderer: null,
      sanitize: false,
      sanitizer: null,
      silent: false,
      smartLists: false,
      smartypants: false,
      tokenizer: null,
      walkTokens: null,
      xhtml: false
    };
  }
  var defaults = getDefaults();
  function changeDefaults(newDefaults) {
    defaults = newDefaults;
  }
  var escapeTest = /[&<>"']/;
  var escapeReplace = /[&<>"']/g;
  var escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
  var escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
  var escapeReplacements = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  };
  var getEscapeReplacement = (ch) => escapeReplacements[ch];
  function escape(html, encode) {
    if (encode) {
      if (escapeTest.test(html)) {
        return html.replace(escapeReplace, getEscapeReplacement);
      }
    } else {
      if (escapeTestNoEncode.test(html)) {
        return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
      }
    }
    return html;
  }
  var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
  function unescape(html) {
    return html.replace(unescapeTest, (_2, n6) => {
      n6 = n6.toLowerCase();
      if (n6 === "colon")
        return ":";
      if (n6.charAt(0) === "#") {
        return n6.charAt(1) === "x" ? String.fromCharCode(parseInt(n6.substring(2), 16)) : String.fromCharCode(+n6.substring(1));
      }
      return "";
    });
  }
  var caret = /(^|[^\[])\^/g;
  function edit(regex, opt) {
    regex = typeof regex === "string" ? regex : regex.source;
    opt = opt || "";
    const obj = {
      replace: (name, val) => {
        val = val.source || val;
        val = val.replace(caret, "$1");
        regex = regex.replace(name, val);
        return obj;
      },
      getRegex: () => {
        return new RegExp(regex, opt);
      }
    };
    return obj;
  }
  var nonWordAndColonTest = /[^\w:]/g;
  var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
  function cleanUrl(sanitize, base, href) {
    if (sanitize) {
      let prot;
      try {
        prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, "").toLowerCase();
      } catch (e7) {
        return null;
      }
      if (prot.indexOf("javascript:") === 0 || prot.indexOf("vbscript:") === 0 || prot.indexOf("data:") === 0) {
        return null;
      }
    }
    if (base && !originIndependentUrl.test(href)) {
      href = resolveUrl(base, href);
    }
    try {
      href = encodeURI(href).replace(/%25/g, "%");
    } catch (e7) {
      return null;
    }
    return href;
  }
  var baseUrls = {};
  var justDomain = /^[^:]+:\/*[^/]*$/;
  var protocol = /^([^:]+:)[\s\S]*$/;
  var domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;
  function resolveUrl(base, href) {
    if (!baseUrls[" " + base]) {
      if (justDomain.test(base)) {
        baseUrls[" " + base] = base + "/";
      } else {
        baseUrls[" " + base] = rtrim(base, "/", true);
      }
    }
    base = baseUrls[" " + base];
    const relativeBase = base.indexOf(":") === -1;
    if (href.substring(0, 2) === "//") {
      if (relativeBase) {
        return href;
      }
      return base.replace(protocol, "$1") + href;
    } else if (href.charAt(0) === "/") {
      if (relativeBase) {
        return href;
      }
      return base.replace(domain, "$1") + href;
    } else {
      return base + href;
    }
  }
  var noopTest = { exec: function noopTest2() {
  } };
  function merge(obj) {
    let i5 = 1, target, key;
    for (; i5 < arguments.length; i5++) {
      target = arguments[i5];
      for (key in target) {
        if (Object.prototype.hasOwnProperty.call(target, key)) {
          obj[key] = target[key];
        }
      }
    }
    return obj;
  }
  function splitCells(tableRow, count) {
    const row = tableRow.replace(/\|/g, (match, offset, str) => {
      let escaped = false, curr = offset;
      while (--curr >= 0 && str[curr] === "\\")
        escaped = !escaped;
      if (escaped) {
        return "|";
      } else {
        return " |";
      }
    }), cells = row.split(/ \|/);
    let i5 = 0;
    if (!cells[0].trim()) {
      cells.shift();
    }
    if (cells.length > 0 && !cells[cells.length - 1].trim()) {
      cells.pop();
    }
    if (cells.length > count) {
      cells.splice(count);
    } else {
      while (cells.length < count)
        cells.push("");
    }
    for (; i5 < cells.length; i5++) {
      cells[i5] = cells[i5].trim().replace(/\\\|/g, "|");
    }
    return cells;
  }
  function rtrim(str, c3, invert) {
    const l5 = str.length;
    if (l5 === 0) {
      return "";
    }
    let suffLen = 0;
    while (suffLen < l5) {
      const currChar = str.charAt(l5 - suffLen - 1);
      if (currChar === c3 && !invert) {
        suffLen++;
      } else if (currChar !== c3 && invert) {
        suffLen++;
      } else {
        break;
      }
    }
    return str.slice(0, l5 - suffLen);
  }
  function findClosingBracket(str, b2) {
    if (str.indexOf(b2[1]) === -1) {
      return -1;
    }
    const l5 = str.length;
    let level = 0, i5 = 0;
    for (; i5 < l5; i5++) {
      if (str[i5] === "\\") {
        i5++;
      } else if (str[i5] === b2[0]) {
        level++;
      } else if (str[i5] === b2[1]) {
        level--;
        if (level < 0) {
          return i5;
        }
      }
    }
    return -1;
  }
  function checkSanitizeDeprecation(opt) {
    if (opt && opt.sanitize && !opt.silent) {
      console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
    }
  }
  function repeatString(pattern, count) {
    if (count < 1) {
      return "";
    }
    let result = "";
    while (count > 1) {
      if (count & 1) {
        result += pattern;
      }
      count >>= 1;
      pattern += pattern;
    }
    return result + pattern;
  }
  function outputLink(cap, link, raw, lexer2) {
    const href = link.href;
    const title = link.title ? escape(link.title) : null;
    const text = cap[1].replace(/\\([\[\]])/g, "$1");
    if (cap[0].charAt(0) !== "!") {
      lexer2.state.inLink = true;
      const token = {
        type: "link",
        raw,
        href,
        title,
        text,
        tokens: lexer2.inlineTokens(text)
      };
      lexer2.state.inLink = false;
      return token;
    }
    return {
      type: "image",
      raw,
      href,
      title,
      text: escape(text)
    };
  }
  function indentCodeCompensation(raw, text) {
    const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
    if (matchIndentToCode === null) {
      return text;
    }
    const indentToCode = matchIndentToCode[1];
    return text.split("\n").map((node) => {
      const matchIndentInNode = node.match(/^\s+/);
      if (matchIndentInNode === null) {
        return node;
      }
      const [indentInNode] = matchIndentInNode;
      if (indentInNode.length >= indentToCode.length) {
        return node.slice(indentToCode.length);
      }
      return node;
    }).join("\n");
  }
  var Tokenizer = class {
    constructor(options2) {
      this.options = options2 || defaults;
    }
    space(src) {
      const cap = this.rules.block.newline.exec(src);
      if (cap && cap[0].length > 0) {
        return {
          type: "space",
          raw: cap[0]
        };
      }
    }
    code(src) {
      const cap = this.rules.block.code.exec(src);
      if (cap) {
        const text = cap[0].replace(/^ {1,4}/gm, "");
        return {
          type: "code",
          raw: cap[0],
          codeBlockStyle: "indented",
          text: !this.options.pedantic ? rtrim(text, "\n") : text
        };
      }
    }
    fences(src) {
      const cap = this.rules.block.fences.exec(src);
      if (cap) {
        const raw = cap[0];
        const text = indentCodeCompensation(raw, cap[3] || "");
        return {
          type: "code",
          raw,
          lang: cap[2] ? cap[2].trim() : cap[2],
          text
        };
      }
    }
    heading(src) {
      const cap = this.rules.block.heading.exec(src);
      if (cap) {
        let text = cap[2].trim();
        if (/#$/.test(text)) {
          const trimmed = rtrim(text, "#");
          if (this.options.pedantic) {
            text = trimmed.trim();
          } else if (!trimmed || / $/.test(trimmed)) {
            text = trimmed.trim();
          }
        }
        return {
          type: "heading",
          raw: cap[0],
          depth: cap[1].length,
          text,
          tokens: this.lexer.inline(text)
        };
      }
    }
    hr(src) {
      const cap = this.rules.block.hr.exec(src);
      if (cap) {
        return {
          type: "hr",
          raw: cap[0]
        };
      }
    }
    blockquote(src) {
      const cap = this.rules.block.blockquote.exec(src);
      if (cap) {
        const text = cap[0].replace(/^ *>[ \t]?/gm, "");
        return {
          type: "blockquote",
          raw: cap[0],
          tokens: this.lexer.blockTokens(text, []),
          text
        };
      }
    }
    list(src) {
      let cap = this.rules.block.list.exec(src);
      if (cap) {
        let raw, istask, ischecked, indent, i5, blankLine, endsWithBlankLine, line, nextLine, rawLine, itemContents, endEarly;
        let bull = cap[1].trim();
        const isordered = bull.length > 1;
        const list = {
          type: "list",
          raw: "",
          ordered: isordered,
          start: isordered ? +bull.slice(0, -1) : "",
          loose: false,
          items: []
        };
        bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
        if (this.options.pedantic) {
          bull = isordered ? bull : "[*+-]";
        }
        const itemRegex = new RegExp(`^( {0,3}${bull})((?:[	 ][^\\n]*)?(?:\\n|$))`);
        while (src) {
          endEarly = false;
          if (!(cap = itemRegex.exec(src))) {
            break;
          }
          if (this.rules.block.hr.test(src)) {
            break;
          }
          raw = cap[0];
          src = src.substring(raw.length);
          line = cap[2].split("\n", 1)[0];
          nextLine = src.split("\n", 1)[0];
          if (this.options.pedantic) {
            indent = 2;
            itemContents = line.trimLeft();
          } else {
            indent = cap[2].search(/[^ ]/);
            indent = indent > 4 ? 1 : indent;
            itemContents = line.slice(indent);
            indent += cap[1].length;
          }
          blankLine = false;
          if (!line && /^ *$/.test(nextLine)) {
            raw += nextLine + "\n";
            src = src.substring(nextLine.length + 1);
            endEarly = true;
          }
          if (!endEarly) {
            const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`);
            const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
            const fencesBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`);
            const headingBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`);
            while (src) {
              rawLine = src.split("\n", 1)[0];
              line = rawLine;
              if (this.options.pedantic) {
                line = line.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ");
              }
              if (fencesBeginRegex.test(line)) {
                break;
              }
              if (headingBeginRegex.test(line)) {
                break;
              }
              if (nextBulletRegex.test(line)) {
                break;
              }
              if (hrRegex.test(src)) {
                break;
              }
              if (line.search(/[^ ]/) >= indent || !line.trim()) {
                itemContents += "\n" + line.slice(indent);
              } else if (!blankLine) {
                itemContents += "\n" + line;
              } else {
                break;
              }
              if (!blankLine && !line.trim()) {
                blankLine = true;
              }
              raw += rawLine + "\n";
              src = src.substring(rawLine.length + 1);
            }
          }
          if (!list.loose) {
            if (endsWithBlankLine) {
              list.loose = true;
            } else if (/\n *\n *$/.test(raw)) {
              endsWithBlankLine = true;
            }
          }
          if (this.options.gfm) {
            istask = /^\[[ xX]\] /.exec(itemContents);
            if (istask) {
              ischecked = istask[0] !== "[ ] ";
              itemContents = itemContents.replace(/^\[[ xX]\] +/, "");
            }
          }
          list.items.push({
            type: "list_item",
            raw,
            task: !!istask,
            checked: ischecked,
            loose: false,
            text: itemContents
          });
          list.raw += raw;
        }
        list.items[list.items.length - 1].raw = raw.trimRight();
        list.items[list.items.length - 1].text = itemContents.trimRight();
        list.raw = list.raw.trimRight();
        const l5 = list.items.length;
        for (i5 = 0; i5 < l5; i5++) {
          this.lexer.state.top = false;
          list.items[i5].tokens = this.lexer.blockTokens(list.items[i5].text, []);
          const spacers = list.items[i5].tokens.filter((t3) => t3.type === "space");
          const hasMultipleLineBreaks = spacers.every((t3) => {
            const chars = t3.raw.split("");
            let lineBreaks = 0;
            for (const char of chars) {
              if (char === "\n") {
                lineBreaks += 1;
              }
              if (lineBreaks > 1) {
                return true;
              }
            }
            return false;
          });
          if (!list.loose && spacers.length && hasMultipleLineBreaks) {
            list.loose = true;
            list.items[i5].loose = true;
          }
        }
        return list;
      }
    }
    html(src) {
      const cap = this.rules.block.html.exec(src);
      if (cap) {
        const token = {
          type: "html",
          raw: cap[0],
          pre: !this.options.sanitizer && (cap[1] === "pre" || cap[1] === "script" || cap[1] === "style"),
          text: cap[0]
        };
        if (this.options.sanitize) {
          const text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]);
          token.type = "paragraph";
          token.text = text;
          token.tokens = this.lexer.inline(text);
        }
        return token;
      }
    }
    def(src) {
      const cap = this.rules.block.def.exec(src);
      if (cap) {
        if (cap[3])
          cap[3] = cap[3].substring(1, cap[3].length - 1);
        const tag = cap[1].toLowerCase().replace(/\s+/g, " ");
        return {
          type: "def",
          tag,
          raw: cap[0],
          href: cap[2],
          title: cap[3]
        };
      }
    }
    table(src) {
      const cap = this.rules.block.table.exec(src);
      if (cap) {
        const item = {
          type: "table",
          header: splitCells(cap[1]).map((c3) => {
            return { text: c3 };
          }),
          align: cap[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
          rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, "").split("\n") : []
        };
        if (item.header.length === item.align.length) {
          item.raw = cap[0];
          let l5 = item.align.length;
          let i5, j, k2, row;
          for (i5 = 0; i5 < l5; i5++) {
            if (/^ *-+: *$/.test(item.align[i5])) {
              item.align[i5] = "right";
            } else if (/^ *:-+: *$/.test(item.align[i5])) {
              item.align[i5] = "center";
            } else if (/^ *:-+ *$/.test(item.align[i5])) {
              item.align[i5] = "left";
            } else {
              item.align[i5] = null;
            }
          }
          l5 = item.rows.length;
          for (i5 = 0; i5 < l5; i5++) {
            item.rows[i5] = splitCells(item.rows[i5], item.header.length).map((c3) => {
              return { text: c3 };
            });
          }
          l5 = item.header.length;
          for (j = 0; j < l5; j++) {
            item.header[j].tokens = this.lexer.inline(item.header[j].text);
          }
          l5 = item.rows.length;
          for (j = 0; j < l5; j++) {
            row = item.rows[j];
            for (k2 = 0; k2 < row.length; k2++) {
              row[k2].tokens = this.lexer.inline(row[k2].text);
            }
          }
          return item;
        }
      }
    }
    lheading(src) {
      const cap = this.rules.block.lheading.exec(src);
      if (cap) {
        return {
          type: "heading",
          raw: cap[0],
          depth: cap[2].charAt(0) === "=" ? 1 : 2,
          text: cap[1],
          tokens: this.lexer.inline(cap[1])
        };
      }
    }
    paragraph(src) {
      const cap = this.rules.block.paragraph.exec(src);
      if (cap) {
        const text = cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1];
        return {
          type: "paragraph",
          raw: cap[0],
          text,
          tokens: this.lexer.inline(text)
        };
      }
    }
    text(src) {
      const cap = this.rules.block.text.exec(src);
      if (cap) {
        return {
          type: "text",
          raw: cap[0],
          text: cap[0],
          tokens: this.lexer.inline(cap[0])
        };
      }
    }
    escape(src) {
      const cap = this.rules.inline.escape.exec(src);
      if (cap) {
        return {
          type: "escape",
          raw: cap[0],
          text: escape(cap[1])
        };
      }
    }
    tag(src) {
      const cap = this.rules.inline.tag.exec(src);
      if (cap) {
        if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
          this.lexer.state.inLink = true;
        } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
          this.lexer.state.inLink = false;
        }
        if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          this.lexer.state.inRawBlock = true;
        } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          this.lexer.state.inRawBlock = false;
        }
        return {
          type: this.options.sanitize ? "text" : "html",
          raw: cap[0],
          inLink: this.lexer.state.inLink,
          inRawBlock: this.lexer.state.inRawBlock,
          text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0]
        };
      }
    }
    link(src) {
      const cap = this.rules.inline.link.exec(src);
      if (cap) {
        const trimmedUrl = cap[2].trim();
        if (!this.options.pedantic && /^</.test(trimmedUrl)) {
          if (!/>$/.test(trimmedUrl)) {
            return;
          }
          const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
          if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
            return;
          }
        } else {
          const lastParenIndex = findClosingBracket(cap[2], "()");
          if (lastParenIndex > -1) {
            const start = cap[0].indexOf("!") === 0 ? 5 : 4;
            const linkLen = start + cap[1].length + lastParenIndex;
            cap[2] = cap[2].substring(0, lastParenIndex);
            cap[0] = cap[0].substring(0, linkLen).trim();
            cap[3] = "";
          }
        }
        let href = cap[2];
        let title = "";
        if (this.options.pedantic) {
          const link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
          if (link) {
            href = link[1];
            title = link[3];
          }
        } else {
          title = cap[3] ? cap[3].slice(1, -1) : "";
        }
        href = href.trim();
        if (/^</.test(href)) {
          if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
            href = href.slice(1);
          } else {
            href = href.slice(1, -1);
          }
        }
        return outputLink(cap, {
          href: href ? href.replace(this.rules.inline._escapes, "$1") : href,
          title: title ? title.replace(this.rules.inline._escapes, "$1") : title
        }, cap[0], this.lexer);
      }
    }
    reflink(src, links) {
      let cap;
      if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
        let link = (cap[2] || cap[1]).replace(/\s+/g, " ");
        link = links[link.toLowerCase()];
        if (!link || !link.href) {
          const text = cap[0].charAt(0);
          return {
            type: "text",
            raw: text,
            text
          };
        }
        return outputLink(cap, link, cap[0], this.lexer);
      }
    }
    emStrong(src, maskedSrc, prevChar = "") {
      let match = this.rules.inline.emStrong.lDelim.exec(src);
      if (!match)
        return;
      if (match[3] && prevChar.match(/[\p{L}\p{N}]/u))
        return;
      const nextChar = match[1] || match[2] || "";
      if (!nextChar || nextChar && (prevChar === "" || this.rules.inline.punctuation.exec(prevChar))) {
        const lLength = match[0].length - 1;
        let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
        const endReg = match[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
        endReg.lastIndex = 0;
        maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
        while ((match = endReg.exec(maskedSrc)) != null) {
          rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
          if (!rDelim)
            continue;
          rLength = rDelim.length;
          if (match[3] || match[4]) {
            delimTotal += rLength;
            continue;
          } else if (match[5] || match[6]) {
            if (lLength % 3 && !((lLength + rLength) % 3)) {
              midDelimTotal += rLength;
              continue;
            }
          }
          delimTotal -= rLength;
          if (delimTotal > 0)
            continue;
          rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
          if (Math.min(lLength, rLength) % 2) {
            const text2 = src.slice(1, lLength + match.index + rLength);
            return {
              type: "em",
              raw: src.slice(0, lLength + match.index + rLength + 1),
              text: text2,
              tokens: this.lexer.inlineTokens(text2)
            };
          }
          const text = src.slice(2, lLength + match.index + rLength - 1);
          return {
            type: "strong",
            raw: src.slice(0, lLength + match.index + rLength + 1),
            text,
            tokens: this.lexer.inlineTokens(text)
          };
        }
      }
    }
    codespan(src) {
      const cap = this.rules.inline.code.exec(src);
      if (cap) {
        let text = cap[2].replace(/\n/g, " ");
        const hasNonSpaceChars = /[^ ]/.test(text);
        const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
        if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
          text = text.substring(1, text.length - 1);
        }
        text = escape(text, true);
        return {
          type: "codespan",
          raw: cap[0],
          text
        };
      }
    }
    br(src) {
      const cap = this.rules.inline.br.exec(src);
      if (cap) {
        return {
          type: "br",
          raw: cap[0]
        };
      }
    }
    del(src) {
      const cap = this.rules.inline.del.exec(src);
      if (cap) {
        return {
          type: "del",
          raw: cap[0],
          text: cap[2],
          tokens: this.lexer.inlineTokens(cap[2])
        };
      }
    }
    autolink(src, mangle2) {
      const cap = this.rules.inline.autolink.exec(src);
      if (cap) {
        let text, href;
        if (cap[2] === "@") {
          text = escape(this.options.mangle ? mangle2(cap[1]) : cap[1]);
          href = "mailto:" + text;
        } else {
          text = escape(cap[1]);
          href = text;
        }
        return {
          type: "link",
          raw: cap[0],
          text,
          href,
          tokens: [
            {
              type: "text",
              raw: text,
              text
            }
          ]
        };
      }
    }
    url(src, mangle2) {
      let cap;
      if (cap = this.rules.inline.url.exec(src)) {
        let text, href;
        if (cap[2] === "@") {
          text = escape(this.options.mangle ? mangle2(cap[0]) : cap[0]);
          href = "mailto:" + text;
        } else {
          let prevCapZero;
          do {
            prevCapZero = cap[0];
            cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
          } while (prevCapZero !== cap[0]);
          text = escape(cap[0]);
          if (cap[1] === "www.") {
            href = "http://" + text;
          } else {
            href = text;
          }
        }
        return {
          type: "link",
          raw: cap[0],
          text,
          href,
          tokens: [
            {
              type: "text",
              raw: text,
              text
            }
          ]
        };
      }
    }
    inlineText(src, smartypants2) {
      const cap = this.rules.inline.text.exec(src);
      if (cap) {
        let text;
        if (this.lexer.state.inRawBlock) {
          text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
        } else {
          text = escape(this.options.smartypants ? smartypants2(cap[0]) : cap[0]);
        }
        return {
          type: "text",
          raw: cap[0],
          text
        };
      }
    }
  };
  var block = {
    newline: /^(?: *(?:\n|$))+/,
    code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
    fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
    hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
    heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
    blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
    list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
    html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
    def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
    table: noopTest,
    lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
    _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
    text: /^[^\n]+/
  };
  block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
  block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
  block.def = edit(block.def).replace("label", block._label).replace("title", block._title).getRegex();
  block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
  block.listItemStart = edit(/^( *)(bull) */).replace("bull", block.bullet).getRegex();
  block.list = edit(block.list).replace(/bull/g, block.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + block.def.source + ")").getRegex();
  block._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
  block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
  block.html = edit(block.html, "i").replace("comment", block._comment).replace("tag", block._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
  block.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
  block.blockquote = edit(block.blockquote).replace("paragraph", block.paragraph).getRegex();
  block.normal = merge({}, block);
  block.gfm = merge({}, block.normal, {
    table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
  });
  block.gfm.table = edit(block.gfm.table).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
  block.gfm.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", block.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
  block.pedantic = merge({}, block.normal, {
    html: edit(
      `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
    ).replace("comment", block._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: noopTest,
    paragraph: edit(block.normal._paragraph).replace("hr", block.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", block.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
  });
  var inline = {
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: noopTest,
    tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
    link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
    reflink: /^!?\[(label)\]\[(ref)\]/,
    nolink: /^!?\[(ref)\](?:\[\])?/,
    reflinkSearch: "reflink|nolink(?!\\()",
    emStrong: {
      lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
      rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
      rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
    },
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    br: /^( {2,}|\\)\n(?!\s*$)/,
    del: noopTest,
    text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
    punctuation: /^([\spunctuation])/
  };
  inline._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";
  inline.punctuation = edit(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex();
  inline.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
  inline.escapedEmSt = /\\\*|\\_/g;
  inline._comment = edit(block._comment).replace("(?:-->|$)", "-->").getRegex();
  inline.emStrong.lDelim = edit(inline.emStrong.lDelim).replace(/punct/g, inline._punctuation).getRegex();
  inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, "g").replace(/punct/g, inline._punctuation).getRegex();
  inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, "g").replace(/punct/g, inline._punctuation).getRegex();
  inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
  inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
  inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
  inline.autolink = edit(inline.autolink).replace("scheme", inline._scheme).replace("email", inline._email).getRegex();
  inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
  inline.tag = edit(inline.tag).replace("comment", inline._comment).replace("attribute", inline._attribute).getRegex();
  inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
  inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
  inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
  inline.link = edit(inline.link).replace("label", inline._label).replace("href", inline._href).replace("title", inline._title).getRegex();
  inline.reflink = edit(inline.reflink).replace("label", inline._label).replace("ref", block._label).getRegex();
  inline.nolink = edit(inline.nolink).replace("ref", block._label).getRegex();
  inline.reflinkSearch = edit(inline.reflinkSearch, "g").replace("reflink", inline.reflink).replace("nolink", inline.nolink).getRegex();
  inline.normal = merge({}, inline);
  inline.pedantic = merge({}, inline.normal, {
    strong: {
      start: /^__|\*\*/,
      middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
      endAst: /\*\*(?!\*)/g,
      endUnd: /__(?!_)/g
    },
    em: {
      start: /^_|\*/,
      middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
      endAst: /\*(?!\*)/g,
      endUnd: /_(?!_)/g
    },
    link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", inline._label).getRegex(),
    reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", inline._label).getRegex()
  });
  inline.gfm = merge({}, inline.normal, {
    escape: edit(inline.escape).replace("])", "~|])").getRegex(),
    _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
    url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
    _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
  });
  inline.gfm.url = edit(inline.gfm.url, "i").replace("email", inline.gfm._extended_email).getRegex();
  inline.breaks = merge({}, inline.gfm, {
    br: edit(inline.br).replace("{2,}", "*").getRegex(),
    text: edit(inline.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
  });
  function smartypants(text) {
    return text.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C").replace(/"/g, "\u201D").replace(/\.{3}/g, "\u2026");
  }
  function mangle(text) {
    let out = "", i5, ch;
    const l5 = text.length;
    for (i5 = 0; i5 < l5; i5++) {
      ch = text.charCodeAt(i5);
      if (Math.random() > 0.5) {
        ch = "x" + ch.toString(16);
      }
      out += "&#" + ch + ";";
    }
    return out;
  }
  var Lexer = class {
    constructor(options2) {
      this.tokens = [];
      this.tokens.links = /* @__PURE__ */ Object.create(null);
      this.options = options2 || defaults;
      this.options.tokenizer = this.options.tokenizer || new Tokenizer();
      this.tokenizer = this.options.tokenizer;
      this.tokenizer.options = this.options;
      this.tokenizer.lexer = this;
      this.inlineQueue = [];
      this.state = {
        inLink: false,
        inRawBlock: false,
        top: true
      };
      const rules = {
        block: block.normal,
        inline: inline.normal
      };
      if (this.options.pedantic) {
        rules.block = block.pedantic;
        rules.inline = inline.pedantic;
      } else if (this.options.gfm) {
        rules.block = block.gfm;
        if (this.options.breaks) {
          rules.inline = inline.breaks;
        } else {
          rules.inline = inline.gfm;
        }
      }
      this.tokenizer.rules = rules;
    }
    static get rules() {
      return {
        block,
        inline
      };
    }
    static lex(src, options2) {
      const lexer2 = new Lexer(options2);
      return lexer2.lex(src);
    }
    static lexInline(src, options2) {
      const lexer2 = new Lexer(options2);
      return lexer2.inlineTokens(src);
    }
    lex(src) {
      src = src.replace(/\r\n|\r/g, "\n");
      this.blockTokens(src, this.tokens);
      let next;
      while (next = this.inlineQueue.shift()) {
        this.inlineTokens(next.src, next.tokens);
      }
      return this.tokens;
    }
    blockTokens(src, tokens = []) {
      if (this.options.pedantic) {
        src = src.replace(/\t/g, "    ").replace(/^ +$/gm, "");
      } else {
        src = src.replace(/^( *)(\t+)/gm, (_2, leading, tabs) => {
          return leading + "    ".repeat(tabs.length);
        });
      }
      let token, lastToken, cutSrc, lastParagraphClipped;
      while (src) {
        if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((extTokenizer) => {
          if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return true;
          }
          return false;
        })) {
          continue;
        }
        if (token = this.tokenizer.space(src)) {
          src = src.substring(token.raw.length);
          if (token.raw.length === 1 && tokens.length > 0) {
            tokens[tokens.length - 1].raw += "\n";
          } else {
            tokens.push(token);
          }
          continue;
        }
        if (token = this.tokenizer.code(src)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];
          if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
            lastToken.raw += "\n" + token.raw;
            lastToken.text += "\n" + token.text;
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else {
            tokens.push(token);
          }
          continue;
        }
        if (token = this.tokenizer.fences(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.heading(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.hr(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.blockquote(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.list(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.html(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.def(src)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];
          if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
            lastToken.raw += "\n" + token.raw;
            lastToken.text += "\n" + token.raw;
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else if (!this.tokens.links[token.tag]) {
            this.tokens.links[token.tag] = {
              href: token.href,
              title: token.title
            };
          }
          continue;
        }
        if (token = this.tokenizer.table(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.lheading(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        cutSrc = src;
        if (this.options.extensions && this.options.extensions.startBlock) {
          let startIndex = Infinity;
          const tempSrc = src.slice(1);
          let tempStart;
          this.options.extensions.startBlock.forEach(function(getStartIndex) {
            tempStart = getStartIndex.call({ lexer: this }, tempSrc);
            if (typeof tempStart === "number" && tempStart >= 0) {
              startIndex = Math.min(startIndex, tempStart);
            }
          });
          if (startIndex < Infinity && startIndex >= 0) {
            cutSrc = src.substring(0, startIndex + 1);
          }
        }
        if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
          lastToken = tokens[tokens.length - 1];
          if (lastParagraphClipped && lastToken.type === "paragraph") {
            lastToken.raw += "\n" + token.raw;
            lastToken.text += "\n" + token.text;
            this.inlineQueue.pop();
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else {
            tokens.push(token);
          }
          lastParagraphClipped = cutSrc.length !== src.length;
          src = src.substring(token.raw.length);
          continue;
        }
        if (token = this.tokenizer.text(src)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];
          if (lastToken && lastToken.type === "text") {
            lastToken.raw += "\n" + token.raw;
            lastToken.text += "\n" + token.text;
            this.inlineQueue.pop();
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else {
            tokens.push(token);
          }
          continue;
        }
        if (src) {
          const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
          if (this.options.silent) {
            console.error(errMsg);
            break;
          } else {
            throw new Error(errMsg);
          }
        }
      }
      this.state.top = true;
      return tokens;
    }
    inline(src, tokens = []) {
      this.inlineQueue.push({ src, tokens });
      return tokens;
    }
    inlineTokens(src, tokens = []) {
      let token, lastToken, cutSrc;
      let maskedSrc = src;
      let match;
      let keepPrevChar, prevChar;
      if (this.tokens.links) {
        const links = Object.keys(this.tokens.links);
        if (links.length > 0) {
          while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
            if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) {
              maskedSrc = maskedSrc.slice(0, match.index) + "[" + repeatString("a", match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
            }
          }
        }
      }
      while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
        maskedSrc = maskedSrc.slice(0, match.index) + "[" + repeatString("a", match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
      }
      while ((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
        maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
      }
      while (src) {
        if (!keepPrevChar) {
          prevChar = "";
        }
        keepPrevChar = false;
        if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((extTokenizer) => {
          if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return true;
          }
          return false;
        })) {
          continue;
        }
        if (token = this.tokenizer.escape(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.tag(src)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];
          if (lastToken && token.type === "text" && lastToken.type === "text") {
            lastToken.raw += token.raw;
            lastToken.text += token.text;
          } else {
            tokens.push(token);
          }
          continue;
        }
        if (token = this.tokenizer.link(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.reflink(src, this.tokens.links)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];
          if (lastToken && token.type === "text" && lastToken.type === "text") {
            lastToken.raw += token.raw;
            lastToken.text += token.text;
          } else {
            tokens.push(token);
          }
          continue;
        }
        if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.codespan(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.br(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.del(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.autolink(src, mangle)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (!this.state.inLink && (token = this.tokenizer.url(src, mangle))) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        cutSrc = src;
        if (this.options.extensions && this.options.extensions.startInline) {
          let startIndex = Infinity;
          const tempSrc = src.slice(1);
          let tempStart;
          this.options.extensions.startInline.forEach(function(getStartIndex) {
            tempStart = getStartIndex.call({ lexer: this }, tempSrc);
            if (typeof tempStart === "number" && tempStart >= 0) {
              startIndex = Math.min(startIndex, tempStart);
            }
          });
          if (startIndex < Infinity && startIndex >= 0) {
            cutSrc = src.substring(0, startIndex + 1);
          }
        }
        if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
          src = src.substring(token.raw.length);
          if (token.raw.slice(-1) !== "_") {
            prevChar = token.raw.slice(-1);
          }
          keepPrevChar = true;
          lastToken = tokens[tokens.length - 1];
          if (lastToken && lastToken.type === "text") {
            lastToken.raw += token.raw;
            lastToken.text += token.text;
          } else {
            tokens.push(token);
          }
          continue;
        }
        if (src) {
          const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
          if (this.options.silent) {
            console.error(errMsg);
            break;
          } else {
            throw new Error(errMsg);
          }
        }
      }
      return tokens;
    }
  };
  var Renderer = class {
    constructor(options2) {
      this.options = options2 || defaults;
    }
    code(code, infostring, escaped) {
      const lang = (infostring || "").match(/\S*/)[0];
      if (this.options.highlight) {
        const out = this.options.highlight(code, lang);
        if (out != null && out !== code) {
          escaped = true;
          code = out;
        }
      }
      code = code.replace(/\n$/, "") + "\n";
      if (!lang) {
        return "<pre><code>" + (escaped ? code : escape(code, true)) + "</code></pre>\n";
      }
      return '<pre><code class="' + this.options.langPrefix + escape(lang, true) + '">' + (escaped ? code : escape(code, true)) + "</code></pre>\n";
    }
    blockquote(quote) {
      return `<blockquote>
${quote}</blockquote>
`;
    }
    html(html) {
      return html;
    }
    heading(text, level, raw, slugger) {
      if (this.options.headerIds) {
        const id = this.options.headerPrefix + slugger.slug(raw);
        return `<h${level} id="${id}">${text}</h${level}>
`;
      }
      return `<h${level}>${text}</h${level}>
`;
    }
    hr() {
      return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
    }
    list(body, ordered, start) {
      const type = ordered ? "ol" : "ul", startatt = ordered && start !== 1 ? ' start="' + start + '"' : "";
      return "<" + type + startatt + ">\n" + body + "</" + type + ">\n";
    }
    listitem(text) {
      return `<li>${text}</li>
`;
    }
    checkbox(checked) {
      return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
    }
    paragraph(text) {
      return `<p>${text}</p>
`;
    }
    table(header, body) {
      if (body)
        body = `<tbody>${body}</tbody>`;
      return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
    }
    tablerow(content) {
      return `<tr>
${content}</tr>
`;
    }
    tablecell(content, flags) {
      const type = flags.header ? "th" : "td";
      const tag = flags.align ? `<${type} align="${flags.align}">` : `<${type}>`;
      return tag + content + `</${type}>
`;
    }
    strong(text) {
      return `<strong>${text}</strong>`;
    }
    em(text) {
      return `<em>${text}</em>`;
    }
    codespan(text) {
      return `<code>${text}</code>`;
    }
    br() {
      return this.options.xhtml ? "<br/>" : "<br>";
    }
    del(text) {
      return `<del>${text}</del>`;
    }
    link(href, title, text) {
      href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
      if (href === null) {
        return text;
      }
      let out = '<a href="' + escape(href) + '"';
      if (title) {
        out += ' title="' + title + '"';
      }
      out += ">" + text + "</a>";
      return out;
    }
    image(href, title, text) {
      href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
      if (href === null) {
        return text;
      }
      let out = `<img src="${href}" alt="${text}"`;
      if (title) {
        out += ` title="${title}"`;
      }
      out += this.options.xhtml ? "/>" : ">";
      return out;
    }
    text(text) {
      return text;
    }
  };
  var TextRenderer = class {
    strong(text) {
      return text;
    }
    em(text) {
      return text;
    }
    codespan(text) {
      return text;
    }
    del(text) {
      return text;
    }
    html(text) {
      return text;
    }
    text(text) {
      return text;
    }
    link(href, title, text) {
      return "" + text;
    }
    image(href, title, text) {
      return "" + text;
    }
    br() {
      return "";
    }
  };
  var Slugger = class {
    constructor() {
      this.seen = {};
    }
    serialize(value) {
      return value.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
    }
    getNextSafeSlug(originalSlug, isDryRun) {
      let slug = originalSlug;
      let occurenceAccumulator = 0;
      if (this.seen.hasOwnProperty(slug)) {
        occurenceAccumulator = this.seen[originalSlug];
        do {
          occurenceAccumulator++;
          slug = originalSlug + "-" + occurenceAccumulator;
        } while (this.seen.hasOwnProperty(slug));
      }
      if (!isDryRun) {
        this.seen[originalSlug] = occurenceAccumulator;
        this.seen[slug] = 0;
      }
      return slug;
    }
    slug(value, options2 = {}) {
      const slug = this.serialize(value);
      return this.getNextSafeSlug(slug, options2.dryrun);
    }
  };
  var Parser = class {
    constructor(options2) {
      this.options = options2 || defaults;
      this.options.renderer = this.options.renderer || new Renderer();
      this.renderer = this.options.renderer;
      this.renderer.options = this.options;
      this.textRenderer = new TextRenderer();
      this.slugger = new Slugger();
    }
    static parse(tokens, options2) {
      const parser2 = new Parser(options2);
      return parser2.parse(tokens);
    }
    static parseInline(tokens, options2) {
      const parser2 = new Parser(options2);
      return parser2.parseInline(tokens);
    }
    parse(tokens, top = true) {
      let out = "", i5, j, k2, l22, l32, row, cell, header, body, token, ordered, start, loose, itemBody, item, checked, task, checkbox, ret;
      const l5 = tokens.length;
      for (i5 = 0; i5 < l5; i5++) {
        token = tokens[i5];
        if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
          ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
          if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(token.type)) {
            out += ret || "";
            continue;
          }
        }
        switch (token.type) {
          case "space": {
            continue;
          }
          case "hr": {
            out += this.renderer.hr();
            continue;
          }
          case "heading": {
            out += this.renderer.heading(
              this.parseInline(token.tokens),
              token.depth,
              unescape(this.parseInline(token.tokens, this.textRenderer)),
              this.slugger
            );
            continue;
          }
          case "code": {
            out += this.renderer.code(
              token.text,
              token.lang,
              token.escaped
            );
            continue;
          }
          case "table": {
            header = "";
            cell = "";
            l22 = token.header.length;
            for (j = 0; j < l22; j++) {
              cell += this.renderer.tablecell(
                this.parseInline(token.header[j].tokens),
                { header: true, align: token.align[j] }
              );
            }
            header += this.renderer.tablerow(cell);
            body = "";
            l22 = token.rows.length;
            for (j = 0; j < l22; j++) {
              row = token.rows[j];
              cell = "";
              l32 = row.length;
              for (k2 = 0; k2 < l32; k2++) {
                cell += this.renderer.tablecell(
                  this.parseInline(row[k2].tokens),
                  { header: false, align: token.align[k2] }
                );
              }
              body += this.renderer.tablerow(cell);
            }
            out += this.renderer.table(header, body);
            continue;
          }
          case "blockquote": {
            body = this.parse(token.tokens);
            out += this.renderer.blockquote(body);
            continue;
          }
          case "list": {
            ordered = token.ordered;
            start = token.start;
            loose = token.loose;
            l22 = token.items.length;
            body = "";
            for (j = 0; j < l22; j++) {
              item = token.items[j];
              checked = item.checked;
              task = item.task;
              itemBody = "";
              if (item.task) {
                checkbox = this.renderer.checkbox(checked);
                if (loose) {
                  if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
                    item.tokens[0].text = checkbox + " " + item.tokens[0].text;
                    if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
                      item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
                    }
                  } else {
                    item.tokens.unshift({
                      type: "text",
                      text: checkbox
                    });
                  }
                } else {
                  itemBody += checkbox;
                }
              }
              itemBody += this.parse(item.tokens, loose);
              body += this.renderer.listitem(itemBody, task, checked);
            }
            out += this.renderer.list(body, ordered, start);
            continue;
          }
          case "html": {
            out += this.renderer.html(token.text);
            continue;
          }
          case "paragraph": {
            out += this.renderer.paragraph(this.parseInline(token.tokens));
            continue;
          }
          case "text": {
            body = token.tokens ? this.parseInline(token.tokens) : token.text;
            while (i5 + 1 < l5 && tokens[i5 + 1].type === "text") {
              token = tokens[++i5];
              body += "\n" + (token.tokens ? this.parseInline(token.tokens) : token.text);
            }
            out += top ? this.renderer.paragraph(body) : body;
            continue;
          }
          default: {
            const errMsg = 'Token with "' + token.type + '" type was not found.';
            if (this.options.silent) {
              console.error(errMsg);
              return;
            } else {
              throw new Error(errMsg);
            }
          }
        }
      }
      return out;
    }
    parseInline(tokens, renderer) {
      renderer = renderer || this.renderer;
      let out = "", i5, token, ret;
      const l5 = tokens.length;
      for (i5 = 0; i5 < l5; i5++) {
        token = tokens[i5];
        if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
          ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
          if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(token.type)) {
            out += ret || "";
            continue;
          }
        }
        switch (token.type) {
          case "escape": {
            out += renderer.text(token.text);
            break;
          }
          case "html": {
            out += renderer.html(token.text);
            break;
          }
          case "link": {
            out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
            break;
          }
          case "image": {
            out += renderer.image(token.href, token.title, token.text);
            break;
          }
          case "strong": {
            out += renderer.strong(this.parseInline(token.tokens, renderer));
            break;
          }
          case "em": {
            out += renderer.em(this.parseInline(token.tokens, renderer));
            break;
          }
          case "codespan": {
            out += renderer.codespan(token.text);
            break;
          }
          case "br": {
            out += renderer.br();
            break;
          }
          case "del": {
            out += renderer.del(this.parseInline(token.tokens, renderer));
            break;
          }
          case "text": {
            out += renderer.text(token.text);
            break;
          }
          default: {
            const errMsg = 'Token with "' + token.type + '" type was not found.';
            if (this.options.silent) {
              console.error(errMsg);
              return;
            } else {
              throw new Error(errMsg);
            }
          }
        }
      }
      return out;
    }
  };
  function marked(src, opt, callback) {
    if (typeof src === "undefined" || src === null) {
      throw new Error("marked(): input parameter is undefined or null");
    }
    if (typeof src !== "string") {
      throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected");
    }
    if (typeof opt === "function") {
      callback = opt;
      opt = null;
    }
    opt = merge({}, marked.defaults, opt || {});
    checkSanitizeDeprecation(opt);
    if (callback) {
      const highlight = opt.highlight;
      let tokens;
      try {
        tokens = Lexer.lex(src, opt);
      } catch (e7) {
        return callback(e7);
      }
      const done = function(err) {
        let out;
        if (!err) {
          try {
            if (opt.walkTokens) {
              marked.walkTokens(tokens, opt.walkTokens);
            }
            out = Parser.parse(tokens, opt);
          } catch (e7) {
            err = e7;
          }
        }
        opt.highlight = highlight;
        return err ? callback(err) : callback(null, out);
      };
      if (!highlight || highlight.length < 3) {
        return done();
      }
      delete opt.highlight;
      if (!tokens.length)
        return done();
      let pending = 0;
      marked.walkTokens(tokens, function(token) {
        if (token.type === "code") {
          pending++;
          setTimeout(() => {
            highlight(token.text, token.lang, function(err, code) {
              if (err) {
                return done(err);
              }
              if (code != null && code !== token.text) {
                token.text = code;
                token.escaped = true;
              }
              pending--;
              if (pending === 0) {
                done();
              }
            });
          }, 0);
        }
      });
      if (pending === 0) {
        done();
      }
      return;
    }
    function onError(e7) {
      e7.message += "\nPlease report this to https://github.com/markedjs/marked.";
      if (opt.silent) {
        return "<p>An error occurred:</p><pre>" + escape(e7.message + "", true) + "</pre>";
      }
      throw e7;
    }
    try {
      const tokens = Lexer.lex(src, opt);
      if (opt.walkTokens) {
        if (opt.async) {
          return Promise.all(marked.walkTokens(tokens, opt.walkTokens)).then(() => {
            return Parser.parse(tokens, opt);
          }).catch(onError);
        }
        marked.walkTokens(tokens, opt.walkTokens);
      }
      return Parser.parse(tokens, opt);
    } catch (e7) {
      onError(e7);
    }
  }
  marked.options = marked.setOptions = function(opt) {
    merge(marked.defaults, opt);
    changeDefaults(marked.defaults);
    return marked;
  };
  marked.getDefaults = getDefaults;
  marked.defaults = defaults;
  marked.use = function(...args) {
    const opts = merge({}, ...args);
    const extensions = marked.defaults.extensions || { renderers: {}, childTokens: {} };
    let hasExtensions;
    args.forEach((pack) => {
      if (pack.extensions) {
        hasExtensions = true;
        pack.extensions.forEach((ext) => {
          if (!ext.name) {
            throw new Error("extension name required");
          }
          if (ext.renderer) {
            const prevRenderer = extensions.renderers ? extensions.renderers[ext.name] : null;
            if (prevRenderer) {
              extensions.renderers[ext.name] = function(...args2) {
                let ret = ext.renderer.apply(this, args2);
                if (ret === false) {
                  ret = prevRenderer.apply(this, args2);
                }
                return ret;
              };
            } else {
              extensions.renderers[ext.name] = ext.renderer;
            }
          }
          if (ext.tokenizer) {
            if (!ext.level || ext.level !== "block" && ext.level !== "inline") {
              throw new Error("extension level must be 'block' or 'inline'");
            }
            if (extensions[ext.level]) {
              extensions[ext.level].unshift(ext.tokenizer);
            } else {
              extensions[ext.level] = [ext.tokenizer];
            }
            if (ext.start) {
              if (ext.level === "block") {
                if (extensions.startBlock) {
                  extensions.startBlock.push(ext.start);
                } else {
                  extensions.startBlock = [ext.start];
                }
              } else if (ext.level === "inline") {
                if (extensions.startInline) {
                  extensions.startInline.push(ext.start);
                } else {
                  extensions.startInline = [ext.start];
                }
              }
            }
          }
          if (ext.childTokens) {
            extensions.childTokens[ext.name] = ext.childTokens;
          }
        });
      }
      if (pack.renderer) {
        const renderer = marked.defaults.renderer || new Renderer();
        for (const prop in pack.renderer) {
          const prevRenderer = renderer[prop];
          renderer[prop] = (...args2) => {
            let ret = pack.renderer[prop].apply(renderer, args2);
            if (ret === false) {
              ret = prevRenderer.apply(renderer, args2);
            }
            return ret;
          };
        }
        opts.renderer = renderer;
      }
      if (pack.tokenizer) {
        const tokenizer = marked.defaults.tokenizer || new Tokenizer();
        for (const prop in pack.tokenizer) {
          const prevTokenizer = tokenizer[prop];
          tokenizer[prop] = (...args2) => {
            let ret = pack.tokenizer[prop].apply(tokenizer, args2);
            if (ret === false) {
              ret = prevTokenizer.apply(tokenizer, args2);
            }
            return ret;
          };
        }
        opts.tokenizer = tokenizer;
      }
      if (pack.walkTokens) {
        const walkTokens2 = marked.defaults.walkTokens;
        opts.walkTokens = function(token) {
          let values = [];
          values.push(pack.walkTokens.call(this, token));
          if (walkTokens2) {
            values = values.concat(walkTokens2.call(this, token));
          }
          return values;
        };
      }
      if (hasExtensions) {
        opts.extensions = extensions;
      }
      marked.setOptions(opts);
    });
  };
  marked.walkTokens = function(tokens, callback) {
    let values = [];
    for (const token of tokens) {
      values = values.concat(callback.call(marked, token));
      switch (token.type) {
        case "table": {
          for (const cell of token.header) {
            values = values.concat(marked.walkTokens(cell.tokens, callback));
          }
          for (const row of token.rows) {
            for (const cell of row) {
              values = values.concat(marked.walkTokens(cell.tokens, callback));
            }
          }
          break;
        }
        case "list": {
          values = values.concat(marked.walkTokens(token.items, callback));
          break;
        }
        default: {
          if (marked.defaults.extensions && marked.defaults.extensions.childTokens && marked.defaults.extensions.childTokens[token.type]) {
            marked.defaults.extensions.childTokens[token.type].forEach(function(childTokens) {
              values = values.concat(marked.walkTokens(token[childTokens], callback));
            });
          } else if (token.tokens) {
            values = values.concat(marked.walkTokens(token.tokens, callback));
          }
        }
      }
    }
    return values;
  };
  marked.parseInline = function(src, opt) {
    if (typeof src === "undefined" || src === null) {
      throw new Error("marked.parseInline(): input parameter is undefined or null");
    }
    if (typeof src !== "string") {
      throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected");
    }
    opt = merge({}, marked.defaults, opt || {});
    checkSanitizeDeprecation(opt);
    try {
      const tokens = Lexer.lexInline(src, opt);
      if (opt.walkTokens) {
        marked.walkTokens(tokens, opt.walkTokens);
      }
      return Parser.parseInline(tokens, opt);
    } catch (e7) {
      e7.message += "\nPlease report this to https://github.com/markedjs/marked.";
      if (opt.silent) {
        return "<p>An error occurred:</p><pre>" + escape(e7.message + "", true) + "</pre>";
      }
      throw e7;
    }
  };
  marked.Parser = Parser;
  marked.parser = Parser.parse;
  marked.Renderer = Renderer;
  marked.TextRenderer = TextRenderer;
  marked.Lexer = Lexer;
  marked.lexer = Lexer.lex;
  marked.Tokenizer = Tokenizer;
  marked.Slugger = Slugger;
  marked.parse = marked;
  var options = marked.options;
  var setOptions = marked.setOptions;
  var use = marked.use;
  var walkTokens = marked.walkTokens;
  var parseInline = marked.parseInline;
  var parser = Parser.parse;
  var lexer = Lexer.lex;

  // src/application/index.ts
  var renderMarkdown = (input) => new Promise((resolve, reject) => {
    marked(input, (error, result) => {
      if (error)
        return reject(error);
      resolve(result);
    });
  });
  var editor = document.querySelector(
    "lit-markdown-editor"
  );
  var article = document.querySelector("article");
  editor.addEventListener("input", () => {
    const value = editor.value;
    window.localStorage.setItem("cache", value);
    renderMarkdown(value).then((rawHTML) => {
      article.innerHTML = rawHTML;
    });
  });
  var convertStringToBlob = (string) => new Blob([string], { type: "text/plain; charset=UTF-8" });
  var saveButton = document.querySelector("button#save");
  var anchor = document.querySelector("a");
  var saveImagesButton = document.querySelector("button#save-images");
  saveButton.addEventListener("click", () => {
    const value = editor.value;
    const blob = convertStringToBlob(value);
    const blobUrl = URL.createObjectURL(blob);
    anchor.href = blobUrl;
    anchor.download = "article.md";
    anchor.click();
  });
  saveImagesButton.addEventListener("click", () => {
    const value = editor.value;
    replaceBlobURLsWithDataString(value).then((markdownWithImages) => {
      const blob = convertStringToBlob(markdownWithImages);
      const blobUrl = URL.createObjectURL(blob);
      anchor.href = blobUrl;
      anchor.download = "article.md";
      anchor.click();
    });
  });
  var cache = window.localStorage.getItem("cache");
  if (cache) {
    editor.innerHTML = cache;
  }
})();
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
