"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x3) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x3, {
    get: (a4, b3) => (typeof require !== "undefined" ? require : a4)[b3]
  }) : x3)(function(x3) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x3 + '" is not supported');
  });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i6 = decorators.length - 1, decorator; i6 >= 0; i6--)
      if (decorator = decorators[i6])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };
  var __accessCheck = (obj, member, msg) => {
    if (!member.has(obj))
      throw TypeError("Cannot " + msg);
  };
  var __privateGet = (obj, member, getter) => {
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
  };
  var __privateAdd = (obj, member, value) => {
    if (member.has(obj))
      throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e8) {
          reject(e8);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e8) {
          reject(e8);
        }
      };
      var step = (x3) => x3.done ? resolve(x3.value) : Promise.resolve(x3.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

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
  function changeDefaults(newDefaults) {
    defaults = newDefaults;
  }
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
  function unescape(html) {
    return html.replace(unescapeTest, (_3, n7) => {
      n7 = n7.toLowerCase();
      if (n7 === "colon")
        return ":";
      if (n7.charAt(0) === "#") {
        return n7.charAt(1) === "x" ? String.fromCharCode(parseInt(n7.substring(2), 16)) : String.fromCharCode(+n7.substring(1));
      }
      return "";
    });
  }
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
  function cleanUrl(sanitize, base, href) {
    if (sanitize) {
      let prot;
      try {
        prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, "").toLowerCase();
      } catch (e8) {
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
    } catch (e8) {
      return null;
    }
    return href;
  }
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
  function merge(obj) {
    let i6 = 1, target, key;
    for (; i6 < arguments.length; i6++) {
      target = arguments[i6];
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
    let i6 = 0;
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
    for (; i6 < cells.length; i6++) {
      cells[i6] = cells[i6].trim().replace(/\\\|/g, "|");
    }
    return cells;
  }
  function rtrim(str, c4, invert) {
    const l6 = str.length;
    if (l6 === 0) {
      return "";
    }
    let suffLen = 0;
    while (suffLen < l6) {
      const currChar = str.charAt(l6 - suffLen - 1);
      if (currChar === c4 && !invert) {
        suffLen++;
      } else if (currChar !== c4 && invert) {
        suffLen++;
      } else {
        break;
      }
    }
    return str.slice(0, l6 - suffLen);
  }
  function findClosingBracket(str, b3) {
    if (str.indexOf(b3[1]) === -1) {
      return -1;
    }
    const l6 = str.length;
    let level = 0, i6 = 0;
    for (; i6 < l6; i6++) {
      if (str[i6] === "\\") {
        i6++;
      } else if (str[i6] === b3[0]) {
        level++;
      } else if (str[i6] === b3[1]) {
        level--;
        if (level < 0) {
          return i6;
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
  function smartypants(text) {
    return text.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C").replace(/"/g, "\u201D").replace(/\.{3}/g, "\u2026");
  }
  function mangle(text) {
    let out = "", i6, ch;
    const l6 = text.length;
    for (i6 = 0; i6 < l6; i6++) {
      ch = text.charCodeAt(i6);
      if (Math.random() > 0.5) {
        ch = "x" + ch.toString(16);
      }
      out += "&#" + ch + ";";
    }
    return out;
  }
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
      } catch (e8) {
        return callback(e8);
      }
      const done = function(err) {
        let out;
        if (!err) {
          try {
            if (opt.walkTokens) {
              marked.walkTokens(tokens, opt.walkTokens);
            }
            out = Parser.parse(tokens, opt);
          } catch (e8) {
            err = e8;
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
    function onError(e8) {
      e8.message += "\nPlease report this to https://github.com/markedjs/marked.";
      if (opt.silent) {
        return "<p>An error occurred:</p><pre>" + escape(e8.message + "", true) + "</pre>";
      }
      throw e8;
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
    } catch (e8) {
      onError(e8);
    }
  }
  var defaults, escapeTest, escapeReplace, escapeTestNoEncode, escapeReplaceNoEncode, escapeReplacements, getEscapeReplacement, unescapeTest, caret, nonWordAndColonTest, originIndependentUrl, baseUrls, justDomain, protocol, domain, noopTest, Tokenizer, block, inline, Lexer, Renderer, TextRenderer, Slugger, Parser, options, setOptions, use, walkTokens, parseInline, parser, lexer;
  var init_marked_esm = __esm({
    "node_modules/marked/lib/marked.esm.js"() {
      defaults = getDefaults();
      escapeTest = /[&<>"']/;
      escapeReplace = /[&<>"']/g;
      escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
      escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
      escapeReplacements = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };
      getEscapeReplacement = (ch) => escapeReplacements[ch];
      unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
      caret = /(^|[^\[])\^/g;
      nonWordAndColonTest = /[^\w:]/g;
      originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
      baseUrls = {};
      justDomain = /^[^:]+:\/*[^/]*$/;
      protocol = /^([^:]+:)[\s\S]*$/;
      domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;
      noopTest = { exec: function noopTest2() {
      } };
      Tokenizer = class {
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
            let raw, istask, ischecked, indent, i6, blankLine, endsWithBlankLine, line, nextLine, rawLine, itemContents, endEarly;
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
            const l6 = list.items.length;
            for (i6 = 0; i6 < l6; i6++) {
              this.lexer.state.top = false;
              list.items[i6].tokens = this.lexer.blockTokens(list.items[i6].text, []);
              const spacers = list.items[i6].tokens.filter((t5) => t5.type === "space");
              const hasMultipleLineBreaks = spacers.every((t5) => {
                const chars = t5.raw.split("");
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
                list.items[i6].loose = true;
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
              header: splitCells(cap[1]).map((c4) => {
                return { text: c4 };
              }),
              align: cap[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
              rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, "").split("\n") : []
            };
            if (item.header.length === item.align.length) {
              item.raw = cap[0];
              let l6 = item.align.length;
              let i6, j, k3, row;
              for (i6 = 0; i6 < l6; i6++) {
                if (/^ *-+: *$/.test(item.align[i6])) {
                  item.align[i6] = "right";
                } else if (/^ *:-+: *$/.test(item.align[i6])) {
                  item.align[i6] = "center";
                } else if (/^ *:-+ *$/.test(item.align[i6])) {
                  item.align[i6] = "left";
                } else {
                  item.align[i6] = null;
                }
              }
              l6 = item.rows.length;
              for (i6 = 0; i6 < l6; i6++) {
                item.rows[i6] = splitCells(item.rows[i6], item.header.length).map((c4) => {
                  return { text: c4 };
                });
              }
              l6 = item.header.length;
              for (j = 0; j < l6; j++) {
                item.header[j].tokens = this.lexer.inline(item.header[j].text);
              }
              l6 = item.rows.length;
              for (j = 0; j < l6; j++) {
                row = item.rows[j];
                for (k3 = 0; k3 < row.length; k3++) {
                  row[k3].tokens = this.lexer.inline(row[k3].text);
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
      block = {
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
      inline = {
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
      Lexer = class {
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
            src = src.replace(/^( *)(\t+)/gm, (_3, leading, tabs) => {
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
      Renderer = class {
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
      TextRenderer = class {
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
      Slugger = class {
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
      Parser = class {
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
          let out = "", i6, j, k3, l22, l32, row, cell, header, body, token, ordered, start, loose, itemBody, item, checked, task, checkbox, ret;
          const l6 = tokens.length;
          for (i6 = 0; i6 < l6; i6++) {
            token = tokens[i6];
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
                  for (k3 = 0; k3 < l32; k3++) {
                    cell += this.renderer.tablecell(
                      this.parseInline(row[k3].tokens),
                      { header: false, align: token.align[k3] }
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
                while (i6 + 1 < l6 && tokens[i6 + 1].type === "text") {
                  token = tokens[++i6];
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
          let out = "", i6, token, ret;
          const l6 = tokens.length;
          for (i6 = 0; i6 < l6; i6++) {
            token = tokens[i6];
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
        } catch (e8) {
          e8.message += "\nPlease report this to https://github.com/markedjs/marked.";
          if (opt.silent) {
            return "<p>An error occurred:</p><pre>" + escape(e8.message + "", true) + "</pre>";
          }
          throw e8;
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
      options = marked.options;
      setOptions = marked.setOptions;
      use = marked.use;
      walkTokens = marked.walkTokens;
      parseInline = marked.parseInline;
      parser = Parser.parse;
      lexer = Lexer.lex;
    }
  });

  // src/application/helpers/index.ts
  var collectImages, convertStringToBlob, renderMarkdown;
  var init_helpers = __esm({
    "src/application/helpers/index.ts"() {
      "use strict";
      init_marked_esm();
      collectImages = (text) => {
        const matches = Array.from(text.matchAll(/!\[.*\]\(blob:(.*) "(.*)"\)/g));
        const imageFilenamesAndUrls = matches.map((match) => [
          "blob:" + match[1],
          match[2]
        ]);
        const imageBlobPromises = imageFilenamesAndUrls.map(
          ([url, name]) => fetch(url).then((result) => result.blob()).then((blob) => [name, blob])
        );
        return Promise.allSettled(imageBlobPromises).then(
          (results) => results.reduce((prev, result) => {
            if (result.status !== "fulfilled")
              return prev;
            return [...prev, result.value];
          }, [])
        );
      };
      convertStringToBlob = (string) => new Blob([string], { type: "text/plain; charset=UTF-8" });
      renderMarkdown = (input) => new Promise((resolve, reject) => {
        marked(input, (error, result) => {
          if (error)
            return reject(error);
          resolve(result);
        });
      });
    }
  });

  // node_modules/jszip/dist/jszip.min.js
  var require_jszip_min = __commonJS({
    "node_modules/jszip/dist/jszip.min.js"(exports, module) {
      !function(e8) {
        if ("object" == typeof exports && "undefined" != typeof module)
          module.exports = e8();
        else if ("function" == typeof define && define.amd)
          define([], e8);
        else {
          ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).JSZip = e8();
        }
      }(function() {
        return function s6(a4, o7, h4) {
          function u3(r5, e9) {
            if (!o7[r5]) {
              if (!a4[r5]) {
                var t5 = "function" == typeof __require && __require;
                if (!e9 && t5)
                  return t5(r5, true);
                if (l6)
                  return l6(r5, true);
                var n7 = new Error("Cannot find module '" + r5 + "'");
                throw n7.code = "MODULE_NOT_FOUND", n7;
              }
              var i6 = o7[r5] = { exports: {} };
              a4[r5][0].call(i6.exports, function(e10) {
                var t6 = a4[r5][1][e10];
                return u3(t6 || e10);
              }, i6, i6.exports, s6, a4, o7, h4);
            }
            return o7[r5].exports;
          }
          for (var l6 = "function" == typeof __require && __require, e8 = 0; e8 < h4.length; e8++)
            u3(h4[e8]);
          return u3;
        }({ 1: [function(e8, t5, r5) {
          "use strict";
          var d4 = e8("./utils"), c4 = e8("./support"), p3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          r5.encode = function(e9) {
            for (var t6, r6, n7, i6, s6, a4, o7, h4 = [], u3 = 0, l6 = e9.length, f3 = l6, c5 = "string" !== d4.getTypeOf(e9); u3 < e9.length; )
              f3 = l6 - u3, n7 = c5 ? (t6 = e9[u3++], r6 = u3 < l6 ? e9[u3++] : 0, u3 < l6 ? e9[u3++] : 0) : (t6 = e9.charCodeAt(u3++), r6 = u3 < l6 ? e9.charCodeAt(u3++) : 0, u3 < l6 ? e9.charCodeAt(u3++) : 0), i6 = t6 >> 2, s6 = (3 & t6) << 4 | r6 >> 4, a4 = 1 < f3 ? (15 & r6) << 2 | n7 >> 6 : 64, o7 = 2 < f3 ? 63 & n7 : 64, h4.push(p3.charAt(i6) + p3.charAt(s6) + p3.charAt(a4) + p3.charAt(o7));
            return h4.join("");
          }, r5.decode = function(e9) {
            var t6, r6, n7, i6, s6, a4, o7 = 0, h4 = 0, u3 = "data:";
            if (e9.substr(0, u3.length) === u3)
              throw new Error("Invalid base64 input, it looks like a data url.");
            var l6, f3 = 3 * (e9 = e9.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
            if (e9.charAt(e9.length - 1) === p3.charAt(64) && f3--, e9.charAt(e9.length - 2) === p3.charAt(64) && f3--, f3 % 1 != 0)
              throw new Error("Invalid base64 input, bad content length.");
            for (l6 = c4.uint8array ? new Uint8Array(0 | f3) : new Array(0 | f3); o7 < e9.length; )
              t6 = p3.indexOf(e9.charAt(o7++)) << 2 | (i6 = p3.indexOf(e9.charAt(o7++))) >> 4, r6 = (15 & i6) << 4 | (s6 = p3.indexOf(e9.charAt(o7++))) >> 2, n7 = (3 & s6) << 6 | (a4 = p3.indexOf(e9.charAt(o7++))), l6[h4++] = t6, 64 !== s6 && (l6[h4++] = r6), 64 !== a4 && (l6[h4++] = n7);
            return l6;
          };
        }, { "./support": 30, "./utils": 32 }], 2: [function(e8, t5, r5) {
          "use strict";
          var n7 = e8("./external"), i6 = e8("./stream/DataWorker"), s6 = e8("./stream/Crc32Probe"), a4 = e8("./stream/DataLengthProbe");
          function o7(e9, t6, r6, n8, i7) {
            this.compressedSize = e9, this.uncompressedSize = t6, this.crc32 = r6, this.compression = n8, this.compressedContent = i7;
          }
          o7.prototype = { getContentWorker: function() {
            var e9 = new i6(n7.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a4("data_length")), t6 = this;
            return e9.on("end", function() {
              if (this.streamInfo.data_length !== t6.uncompressedSize)
                throw new Error("Bug : uncompressed data size mismatch");
            }), e9;
          }, getCompressedWorker: function() {
            return new i6(n7.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
          } }, o7.createWorkerFrom = function(e9, t6, r6) {
            return e9.pipe(new s6()).pipe(new a4("uncompressedSize")).pipe(t6.compressWorker(r6)).pipe(new a4("compressedSize")).withStreamInfo("compression", t6);
          }, t5.exports = o7;
        }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(e8, t5, r5) {
          "use strict";
          var n7 = e8("./stream/GenericWorker");
          r5.STORE = { magic: "\0\0", compressWorker: function() {
            return new n7("STORE compression");
          }, uncompressWorker: function() {
            return new n7("STORE decompression");
          } }, r5.DEFLATE = e8("./flate");
        }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(e8, t5, r5) {
          "use strict";
          var n7 = e8("./utils");
          var o7 = function() {
            for (var e9, t6 = [], r6 = 0; r6 < 256; r6++) {
              e9 = r6;
              for (var n8 = 0; n8 < 8; n8++)
                e9 = 1 & e9 ? 3988292384 ^ e9 >>> 1 : e9 >>> 1;
              t6[r6] = e9;
            }
            return t6;
          }();
          t5.exports = function(e9, t6) {
            return void 0 !== e9 && e9.length ? "string" !== n7.getTypeOf(e9) ? function(e10, t7, r6, n8) {
              var i6 = o7, s6 = n8 + r6;
              e10 ^= -1;
              for (var a4 = n8; a4 < s6; a4++)
                e10 = e10 >>> 8 ^ i6[255 & (e10 ^ t7[a4])];
              return -1 ^ e10;
            }(0 | t6, e9, e9.length, 0) : function(e10, t7, r6, n8) {
              var i6 = o7, s6 = n8 + r6;
              e10 ^= -1;
              for (var a4 = n8; a4 < s6; a4++)
                e10 = e10 >>> 8 ^ i6[255 & (e10 ^ t7.charCodeAt(a4))];
              return -1 ^ e10;
            }(0 | t6, e9, e9.length, 0) : 0;
          };
        }, { "./utils": 32 }], 5: [function(e8, t5, r5) {
          "use strict";
          r5.base64 = false, r5.binary = false, r5.dir = false, r5.createFolders = true, r5.date = null, r5.compression = null, r5.compressionOptions = null, r5.comment = null, r5.unixPermissions = null, r5.dosPermissions = null;
        }, {}], 6: [function(e8, t5, r5) {
          "use strict";
          var n7 = null;
          n7 = "undefined" != typeof Promise ? Promise : e8("lie"), t5.exports = { Promise: n7 };
        }, { lie: 37 }], 7: [function(e8, t5, r5) {
          "use strict";
          var n7 = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array, i6 = e8("pako"), s6 = e8("./utils"), a4 = e8("./stream/GenericWorker"), o7 = n7 ? "uint8array" : "array";
          function h4(e9, t6) {
            a4.call(this, "FlateWorker/" + e9), this._pako = null, this._pakoAction = e9, this._pakoOptions = t6, this.meta = {};
          }
          r5.magic = "\b\0", s6.inherits(h4, a4), h4.prototype.processChunk = function(e9) {
            this.meta = e9.meta, null === this._pako && this._createPako(), this._pako.push(s6.transformTo(o7, e9.data), false);
          }, h4.prototype.flush = function() {
            a4.prototype.flush.call(this), null === this._pako && this._createPako(), this._pako.push([], true);
          }, h4.prototype.cleanUp = function() {
            a4.prototype.cleanUp.call(this), this._pako = null;
          }, h4.prototype._createPako = function() {
            this._pako = new i6[this._pakoAction]({ raw: true, level: this._pakoOptions.level || -1 });
            var t6 = this;
            this._pako.onData = function(e9) {
              t6.push({ data: e9, meta: t6.meta });
            };
          }, r5.compressWorker = function(e9) {
            return new h4("Deflate", e9);
          }, r5.uncompressWorker = function() {
            return new h4("Inflate", {});
          };
        }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(e8, t5, r5) {
          "use strict";
          function A3(e9, t6) {
            var r6, n8 = "";
            for (r6 = 0; r6 < t6; r6++)
              n8 += String.fromCharCode(255 & e9), e9 >>>= 8;
            return n8;
          }
          function n7(e9, t6, r6, n8, i7, s7) {
            var a4, o7, h4 = e9.file, u3 = e9.compression, l6 = s7 !== O.utf8encode, f3 = I3.transformTo("string", s7(h4.name)), c4 = I3.transformTo("string", O.utf8encode(h4.name)), d4 = h4.comment, p3 = I3.transformTo("string", s7(d4)), m3 = I3.transformTo("string", O.utf8encode(d4)), _3 = c4.length !== h4.name.length, g3 = m3.length !== d4.length, b3 = "", v3 = "", y3 = "", w3 = h4.dir, k3 = h4.date, x3 = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
            t6 && !r6 || (x3.crc32 = e9.crc32, x3.compressedSize = e9.compressedSize, x3.uncompressedSize = e9.uncompressedSize);
            var S4 = 0;
            t6 && (S4 |= 8), l6 || !_3 && !g3 || (S4 |= 2048);
            var z2 = 0, C3 = 0;
            w3 && (z2 |= 16), "UNIX" === i7 ? (C3 = 798, z2 |= function(e10, t7) {
              var r7 = e10;
              return e10 || (r7 = t7 ? 16893 : 33204), (65535 & r7) << 16;
            }(h4.unixPermissions, w3)) : (C3 = 20, z2 |= function(e10) {
              return 63 & (e10 || 0);
            }(h4.dosPermissions)), a4 = k3.getUTCHours(), a4 <<= 6, a4 |= k3.getUTCMinutes(), a4 <<= 5, a4 |= k3.getUTCSeconds() / 2, o7 = k3.getUTCFullYear() - 1980, o7 <<= 4, o7 |= k3.getUTCMonth() + 1, o7 <<= 5, o7 |= k3.getUTCDate(), _3 && (v3 = A3(1, 1) + A3(B(f3), 4) + c4, b3 += "up" + A3(v3.length, 2) + v3), g3 && (y3 = A3(1, 1) + A3(B(p3), 4) + m3, b3 += "uc" + A3(y3.length, 2) + y3);
            var E3 = "";
            return E3 += "\n\0", E3 += A3(S4, 2), E3 += u3.magic, E3 += A3(a4, 2), E3 += A3(o7, 2), E3 += A3(x3.crc32, 4), E3 += A3(x3.compressedSize, 4), E3 += A3(x3.uncompressedSize, 4), E3 += A3(f3.length, 2), E3 += A3(b3.length, 2), { fileRecord: R3.LOCAL_FILE_HEADER + E3 + f3 + b3, dirRecord: R3.CENTRAL_FILE_HEADER + A3(C3, 2) + E3 + A3(p3.length, 2) + "\0\0\0\0" + A3(z2, 4) + A3(n8, 4) + f3 + b3 + p3 };
          }
          var I3 = e8("../utils"), i6 = e8("../stream/GenericWorker"), O = e8("../utf8"), B = e8("../crc32"), R3 = e8("../signature");
          function s6(e9, t6, r6, n8) {
            i6.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = t6, this.zipPlatform = r6, this.encodeFileName = n8, this.streamFiles = e9, this.accumulate = false, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
          }
          I3.inherits(s6, i6), s6.prototype.push = function(e9) {
            var t6 = e9.meta.percent || 0, r6 = this.entriesCount, n8 = this._sources.length;
            this.accumulate ? this.contentBuffer.push(e9) : (this.bytesWritten += e9.data.length, i6.prototype.push.call(this, { data: e9.data, meta: { currentFile: this.currentFile, percent: r6 ? (t6 + 100 * (r6 - n8 - 1)) / r6 : 100 } }));
          }, s6.prototype.openedSource = function(e9) {
            this.currentSourceOffset = this.bytesWritten, this.currentFile = e9.file.name;
            var t6 = this.streamFiles && !e9.file.dir;
            if (t6) {
              var r6 = n7(e9, t6, false, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
              this.push({ data: r6.fileRecord, meta: { percent: 0 } });
            } else
              this.accumulate = true;
          }, s6.prototype.closedSource = function(e9) {
            this.accumulate = false;
            var t6 = this.streamFiles && !e9.file.dir, r6 = n7(e9, t6, true, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
            if (this.dirRecords.push(r6.dirRecord), t6)
              this.push({ data: function(e10) {
                return R3.DATA_DESCRIPTOR + A3(e10.crc32, 4) + A3(e10.compressedSize, 4) + A3(e10.uncompressedSize, 4);
              }(e9), meta: { percent: 100 } });
            else
              for (this.push({ data: r6.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; )
                this.push(this.contentBuffer.shift());
            this.currentFile = null;
          }, s6.prototype.flush = function() {
            for (var e9 = this.bytesWritten, t6 = 0; t6 < this.dirRecords.length; t6++)
              this.push({ data: this.dirRecords[t6], meta: { percent: 100 } });
            var r6 = this.bytesWritten - e9, n8 = function(e10, t7, r7, n9, i7) {
              var s7 = I3.transformTo("string", i7(n9));
              return R3.CENTRAL_DIRECTORY_END + "\0\0\0\0" + A3(e10, 2) + A3(e10, 2) + A3(t7, 4) + A3(r7, 4) + A3(s7.length, 2) + s7;
            }(this.dirRecords.length, r6, e9, this.zipComment, this.encodeFileName);
            this.push({ data: n8, meta: { percent: 100 } });
          }, s6.prototype.prepareNextSource = function() {
            this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
          }, s6.prototype.registerPrevious = function(e9) {
            this._sources.push(e9);
            var t6 = this;
            return e9.on("data", function(e10) {
              t6.processChunk(e10);
            }), e9.on("end", function() {
              t6.closedSource(t6.previous.streamInfo), t6._sources.length ? t6.prepareNextSource() : t6.end();
            }), e9.on("error", function(e10) {
              t6.error(e10);
            }), this;
          }, s6.prototype.resume = function() {
            return !!i6.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), true) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), true));
          }, s6.prototype.error = function(e9) {
            var t6 = this._sources;
            if (!i6.prototype.error.call(this, e9))
              return false;
            for (var r6 = 0; r6 < t6.length; r6++)
              try {
                t6[r6].error(e9);
              } catch (e10) {
              }
            return true;
          }, s6.prototype.lock = function() {
            i6.prototype.lock.call(this);
            for (var e9 = this._sources, t6 = 0; t6 < e9.length; t6++)
              e9[t6].lock();
          }, t5.exports = s6;
        }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(e8, t5, r5) {
          "use strict";
          var u3 = e8("../compressions"), n7 = e8("./ZipFileWorker");
          r5.generateWorker = function(e9, a4, t6) {
            var o7 = new n7(a4.streamFiles, t6, a4.platform, a4.encodeFileName), h4 = 0;
            try {
              e9.forEach(function(e10, t7) {
                h4++;
                var r6 = function(e11, t8) {
                  var r7 = e11 || t8, n9 = u3[r7];
                  if (!n9)
                    throw new Error(r7 + " is not a valid compression method !");
                  return n9;
                }(t7.options.compression, a4.compression), n8 = t7.options.compressionOptions || a4.compressionOptions || {}, i6 = t7.dir, s6 = t7.date;
                t7._compressWorker(r6, n8).withStreamInfo("file", { name: e10, dir: i6, date: s6, comment: t7.comment || "", unixPermissions: t7.unixPermissions, dosPermissions: t7.dosPermissions }).pipe(o7);
              }), o7.entriesCount = h4;
            } catch (e10) {
              o7.error(e10);
            }
            return o7;
          };
        }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(e8, t5, r5) {
          "use strict";
          function n7() {
            if (!(this instanceof n7))
              return new n7();
            if (arguments.length)
              throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
            this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
              var e9 = new n7();
              for (var t6 in this)
                "function" != typeof this[t6] && (e9[t6] = this[t6]);
              return e9;
            };
          }
          (n7.prototype = e8("./object")).loadAsync = e8("./load"), n7.support = e8("./support"), n7.defaults = e8("./defaults"), n7.version = "3.10.1", n7.loadAsync = function(e9, t6) {
            return new n7().loadAsync(e9, t6);
          }, n7.external = e8("./external"), t5.exports = n7;
        }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(e8, t5, r5) {
          "use strict";
          var u3 = e8("./utils"), i6 = e8("./external"), n7 = e8("./utf8"), s6 = e8("./zipEntries"), a4 = e8("./stream/Crc32Probe"), l6 = e8("./nodejsUtils");
          function f3(n8) {
            return new i6.Promise(function(e9, t6) {
              var r6 = n8.decompressed.getContentWorker().pipe(new a4());
              r6.on("error", function(e10) {
                t6(e10);
              }).on("end", function() {
                r6.streamInfo.crc32 !== n8.decompressed.crc32 ? t6(new Error("Corrupted zip : CRC32 mismatch")) : e9();
              }).resume();
            });
          }
          t5.exports = function(e9, o7) {
            var h4 = this;
            return o7 = u3.extend(o7 || {}, { base64: false, checkCRC32: false, optimizedBinaryString: false, createFolders: false, decodeFileName: n7.utf8decode }), l6.isNode && l6.isStream(e9) ? i6.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : u3.prepareContent("the loaded zip file", e9, true, o7.optimizedBinaryString, o7.base64).then(function(e10) {
              var t6 = new s6(o7);
              return t6.load(e10), t6;
            }).then(function(e10) {
              var t6 = [i6.Promise.resolve(e10)], r6 = e10.files;
              if (o7.checkCRC32)
                for (var n8 = 0; n8 < r6.length; n8++)
                  t6.push(f3(r6[n8]));
              return i6.Promise.all(t6);
            }).then(function(e10) {
              for (var t6 = e10.shift(), r6 = t6.files, n8 = 0; n8 < r6.length; n8++) {
                var i7 = r6[n8], s7 = i7.fileNameStr, a5 = u3.resolve(i7.fileNameStr);
                h4.file(a5, i7.decompressed, { binary: true, optimizedBinaryString: true, date: i7.date, dir: i7.dir, comment: i7.fileCommentStr.length ? i7.fileCommentStr : null, unixPermissions: i7.unixPermissions, dosPermissions: i7.dosPermissions, createFolders: o7.createFolders }), i7.dir || (h4.file(a5).unsafeOriginalName = s7);
              }
              return t6.zipComment.length && (h4.comment = t6.zipComment), h4;
            });
          };
        }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(e8, t5, r5) {
          "use strict";
          var n7 = e8("../utils"), i6 = e8("../stream/GenericWorker");
          function s6(e9, t6) {
            i6.call(this, "Nodejs stream input adapter for " + e9), this._upstreamEnded = false, this._bindStream(t6);
          }
          n7.inherits(s6, i6), s6.prototype._bindStream = function(e9) {
            var t6 = this;
            (this._stream = e9).pause(), e9.on("data", function(e10) {
              t6.push({ data: e10, meta: { percent: 0 } });
            }).on("error", function(e10) {
              t6.isPaused ? this.generatedError = e10 : t6.error(e10);
            }).on("end", function() {
              t6.isPaused ? t6._upstreamEnded = true : t6.end();
            });
          }, s6.prototype.pause = function() {
            return !!i6.prototype.pause.call(this) && (this._stream.pause(), true);
          }, s6.prototype.resume = function() {
            return !!i6.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), true);
          }, t5.exports = s6;
        }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(e8, t5, r5) {
          "use strict";
          var i6 = e8("readable-stream").Readable;
          function n7(e9, t6, r6) {
            i6.call(this, t6), this._helper = e9;
            var n8 = this;
            e9.on("data", function(e10, t7) {
              n8.push(e10) || n8._helper.pause(), r6 && r6(t7);
            }).on("error", function(e10) {
              n8.emit("error", e10);
            }).on("end", function() {
              n8.push(null);
            });
          }
          e8("../utils").inherits(n7, i6), n7.prototype._read = function() {
            this._helper.resume();
          }, t5.exports = n7;
        }, { "../utils": 32, "readable-stream": 16 }], 14: [function(e8, t5, r5) {
          "use strict";
          t5.exports = { isNode: "undefined" != typeof Buffer, newBufferFrom: function(e9, t6) {
            if (Buffer.from && Buffer.from !== Uint8Array.from)
              return Buffer.from(e9, t6);
            if ("number" == typeof e9)
              throw new Error('The "data" argument must not be a number');
            return new Buffer(e9, t6);
          }, allocBuffer: function(e9) {
            if (Buffer.alloc)
              return Buffer.alloc(e9);
            var t6 = new Buffer(e9);
            return t6.fill(0), t6;
          }, isBuffer: function(e9) {
            return Buffer.isBuffer(e9);
          }, isStream: function(e9) {
            return e9 && "function" == typeof e9.on && "function" == typeof e9.pause && "function" == typeof e9.resume;
          } };
        }, {}], 15: [function(e8, t5, r5) {
          "use strict";
          function s6(e9, t6, r6) {
            var n8, i7 = u3.getTypeOf(t6), s7 = u3.extend(r6 || {}, f3);
            s7.date = s7.date || new Date(), null !== s7.compression && (s7.compression = s7.compression.toUpperCase()), "string" == typeof s7.unixPermissions && (s7.unixPermissions = parseInt(s7.unixPermissions, 8)), s7.unixPermissions && 16384 & s7.unixPermissions && (s7.dir = true), s7.dosPermissions && 16 & s7.dosPermissions && (s7.dir = true), s7.dir && (e9 = g3(e9)), s7.createFolders && (n8 = _3(e9)) && b3.call(this, n8, true);
            var a5 = "string" === i7 && false === s7.binary && false === s7.base64;
            r6 && void 0 !== r6.binary || (s7.binary = !a5), (t6 instanceof c4 && 0 === t6.uncompressedSize || s7.dir || !t6 || 0 === t6.length) && (s7.base64 = false, s7.binary = true, t6 = "", s7.compression = "STORE", i7 = "string");
            var o8 = null;
            o8 = t6 instanceof c4 || t6 instanceof l6 ? t6 : p3.isNode && p3.isStream(t6) ? new m3(e9, t6) : u3.prepareContent(e9, t6, s7.binary, s7.optimizedBinaryString, s7.base64);
            var h5 = new d4(e9, o8, s7);
            this.files[e9] = h5;
          }
          var i6 = e8("./utf8"), u3 = e8("./utils"), l6 = e8("./stream/GenericWorker"), a4 = e8("./stream/StreamHelper"), f3 = e8("./defaults"), c4 = e8("./compressedObject"), d4 = e8("./zipObject"), o7 = e8("./generate"), p3 = e8("./nodejsUtils"), m3 = e8("./nodejs/NodejsStreamInputAdapter"), _3 = function(e9) {
            "/" === e9.slice(-1) && (e9 = e9.substring(0, e9.length - 1));
            var t6 = e9.lastIndexOf("/");
            return 0 < t6 ? e9.substring(0, t6) : "";
          }, g3 = function(e9) {
            return "/" !== e9.slice(-1) && (e9 += "/"), e9;
          }, b3 = function(e9, t6) {
            return t6 = void 0 !== t6 ? t6 : f3.createFolders, e9 = g3(e9), this.files[e9] || s6.call(this, e9, null, { dir: true, createFolders: t6 }), this.files[e9];
          };
          function h4(e9) {
            return "[object RegExp]" === Object.prototype.toString.call(e9);
          }
          var n7 = { load: function() {
            throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
          }, forEach: function(e9) {
            var t6, r6, n8;
            for (t6 in this.files)
              n8 = this.files[t6], (r6 = t6.slice(this.root.length, t6.length)) && t6.slice(0, this.root.length) === this.root && e9(r6, n8);
          }, filter: function(r6) {
            var n8 = [];
            return this.forEach(function(e9, t6) {
              r6(e9, t6) && n8.push(t6);
            }), n8;
          }, file: function(e9, t6, r6) {
            if (1 !== arguments.length)
              return e9 = this.root + e9, s6.call(this, e9, t6, r6), this;
            if (h4(e9)) {
              var n8 = e9;
              return this.filter(function(e10, t7) {
                return !t7.dir && n8.test(e10);
              });
            }
            var i7 = this.files[this.root + e9];
            return i7 && !i7.dir ? i7 : null;
          }, folder: function(r6) {
            if (!r6)
              return this;
            if (h4(r6))
              return this.filter(function(e10, t7) {
                return t7.dir && r6.test(e10);
              });
            var e9 = this.root + r6, t6 = b3.call(this, e9), n8 = this.clone();
            return n8.root = t6.name, n8;
          }, remove: function(r6) {
            r6 = this.root + r6;
            var e9 = this.files[r6];
            if (e9 || ("/" !== r6.slice(-1) && (r6 += "/"), e9 = this.files[r6]), e9 && !e9.dir)
              delete this.files[r6];
            else
              for (var t6 = this.filter(function(e10, t7) {
                return t7.name.slice(0, r6.length) === r6;
              }), n8 = 0; n8 < t6.length; n8++)
                delete this.files[t6[n8].name];
            return this;
          }, generate: function() {
            throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
          }, generateInternalStream: function(e9) {
            var t6, r6 = {};
            try {
              if ((r6 = u3.extend(e9 || {}, { streamFiles: false, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: i6.utf8encode })).type = r6.type.toLowerCase(), r6.compression = r6.compression.toUpperCase(), "binarystring" === r6.type && (r6.type = "string"), !r6.type)
                throw new Error("No output type specified.");
              u3.checkSupport(r6.type), "darwin" !== r6.platform && "freebsd" !== r6.platform && "linux" !== r6.platform && "sunos" !== r6.platform || (r6.platform = "UNIX"), "win32" === r6.platform && (r6.platform = "DOS");
              var n8 = r6.comment || this.comment || "";
              t6 = o7.generateWorker(this, r6, n8);
            } catch (e10) {
              (t6 = new l6("error")).error(e10);
            }
            return new a4(t6, r6.type || "string", r6.mimeType);
          }, generateAsync: function(e9, t6) {
            return this.generateInternalStream(e9).accumulate(t6);
          }, generateNodeStream: function(e9, t6) {
            return (e9 = e9 || {}).type || (e9.type = "nodebuffer"), this.generateInternalStream(e9).toNodejsStream(t6);
          } };
          t5.exports = n7;
        }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(e8, t5, r5) {
          "use strict";
          t5.exports = e8("stream");
        }, { stream: void 0 }], 17: [function(e8, t5, r5) {
          "use strict";
          var n7 = e8("./DataReader");
          function i6(e9) {
            n7.call(this, e9);
            for (var t6 = 0; t6 < this.data.length; t6++)
              e9[t6] = 255 & e9[t6];
          }
          e8("../utils").inherits(i6, n7), i6.prototype.byteAt = function(e9) {
            return this.data[this.zero + e9];
          }, i6.prototype.lastIndexOfSignature = function(e9) {
            for (var t6 = e9.charCodeAt(0), r6 = e9.charCodeAt(1), n8 = e9.charCodeAt(2), i7 = e9.charCodeAt(3), s6 = this.length - 4; 0 <= s6; --s6)
              if (this.data[s6] === t6 && this.data[s6 + 1] === r6 && this.data[s6 + 2] === n8 && this.data[s6 + 3] === i7)
                return s6 - this.zero;
            return -1;
          }, i6.prototype.readAndCheckSignature = function(e9) {
            var t6 = e9.charCodeAt(0), r6 = e9.charCodeAt(1), n8 = e9.charCodeAt(2), i7 = e9.charCodeAt(3), s6 = this.readData(4);
            return t6 === s6[0] && r6 === s6[1] && n8 === s6[2] && i7 === s6[3];
          }, i6.prototype.readData = function(e9) {
            if (this.checkOffset(e9), 0 === e9)
              return [];
            var t6 = this.data.slice(this.zero + this.index, this.zero + this.index + e9);
            return this.index += e9, t6;
          }, t5.exports = i6;
        }, { "../utils": 32, "./DataReader": 18 }], 18: [function(e8, t5, r5) {
          "use strict";
          var n7 = e8("../utils");
          function i6(e9) {
            this.data = e9, this.length = e9.length, this.index = 0, this.zero = 0;
          }
          i6.prototype = { checkOffset: function(e9) {
            this.checkIndex(this.index + e9);
          }, checkIndex: function(e9) {
            if (this.length < this.zero + e9 || e9 < 0)
              throw new Error("End of data reached (data length = " + this.length + ", asked index = " + e9 + "). Corrupted zip ?");
          }, setIndex: function(e9) {
            this.checkIndex(e9), this.index = e9;
          }, skip: function(e9) {
            this.setIndex(this.index + e9);
          }, byteAt: function() {
          }, readInt: function(e9) {
            var t6, r6 = 0;
            for (this.checkOffset(e9), t6 = this.index + e9 - 1; t6 >= this.index; t6--)
              r6 = (r6 << 8) + this.byteAt(t6);
            return this.index += e9, r6;
          }, readString: function(e9) {
            return n7.transformTo("string", this.readData(e9));
          }, readData: function() {
          }, lastIndexOfSignature: function() {
          }, readAndCheckSignature: function() {
          }, readDate: function() {
            var e9 = this.readInt(4);
            return new Date(Date.UTC(1980 + (e9 >> 25 & 127), (e9 >> 21 & 15) - 1, e9 >> 16 & 31, e9 >> 11 & 31, e9 >> 5 & 63, (31 & e9) << 1));
          } }, t5.exports = i6;
        }, { "../utils": 32 }], 19: [function(e8, t5, r5) {
          "use strict";
          var n7 = e8("./Uint8ArrayReader");
          function i6(e9) {
            n7.call(this, e9);
          }
          e8("../utils").inherits(i6, n7), i6.prototype.readData = function(e9) {
            this.checkOffset(e9);
            var t6 = this.data.slice(this.zero + this.index, this.zero + this.index + e9);
            return this.index += e9, t6;
          }, t5.exports = i6;
        }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(e8, t5, r5) {
          "use strict";
          var n7 = e8("./DataReader");
          function i6(e9) {
            n7.call(this, e9);
          }
          e8("../utils").inherits(i6, n7), i6.prototype.byteAt = function(e9) {
            return this.data.charCodeAt(this.zero + e9);
          }, i6.prototype.lastIndexOfSignature = function(e9) {
            return this.data.lastIndexOf(e9) - this.zero;
          }, i6.prototype.readAndCheckSignature = function(e9) {
            return e9 === this.readData(4);
          }, i6.prototype.readData = function(e9) {
            this.checkOffset(e9);
            var t6 = this.data.slice(this.zero + this.index, this.zero + this.index + e9);
            return this.index += e9, t6;
          }, t5.exports = i6;
        }, { "../utils": 32, "./DataReader": 18 }], 21: [function(e8, t5, r5) {
          "use strict";
          var n7 = e8("./ArrayReader");
          function i6(e9) {
            n7.call(this, e9);
          }
          e8("../utils").inherits(i6, n7), i6.prototype.readData = function(e9) {
            if (this.checkOffset(e9), 0 === e9)
              return new Uint8Array(0);
            var t6 = this.data.subarray(this.zero + this.index, this.zero + this.index + e9);
            return this.index += e9, t6;
          }, t5.exports = i6;
        }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(e8, t5, r5) {
          "use strict";
          var n7 = e8("../utils"), i6 = e8("../support"), s6 = e8("./ArrayReader"), a4 = e8("./StringReader"), o7 = e8("./NodeBufferReader"), h4 = e8("./Uint8ArrayReader");
          t5.exports = function(e9) {
            var t6 = n7.getTypeOf(e9);
            return n7.checkSupport(t6), "string" !== t6 || i6.uint8array ? "nodebuffer" === t6 ? new o7(e9) : i6.uint8array ? new h4(n7.transformTo("uint8array", e9)) : new s6(n7.transformTo("array", e9)) : new a4(e9);
          };
        }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(e8, t5, r5) {
          "use strict";
          r5.LOCAL_FILE_HEADER = "PK", r5.CENTRAL_FILE_HEADER = "PK", r5.CENTRAL_DIRECTORY_END = "PK", r5.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", r5.ZIP64_CENTRAL_DIRECTORY_END = "PK", r5.DATA_DESCRIPTOR = "PK\x07\b";
        }, {}], 24: [function(e8, t5, r5) {
          "use strict";
          var n7 = e8("./GenericWorker"), i6 = e8("../utils");
          function s6(e9) {
            n7.call(this, "ConvertWorker to " + e9), this.destType = e9;
          }
          i6.inherits(s6, n7), s6.prototype.processChunk = function(e9) {
            this.push({ data: i6.transformTo(this.destType, e9.data), meta: e9.meta });
          }, t5.exports = s6;
        }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(e8, t5, r5) {
          "use strict";
          var n7 = e8("./GenericWorker"), i6 = e8("../crc32");
          function s6() {
            n7.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
          }
          e8("../utils").inherits(s6, n7), s6.prototype.processChunk = function(e9) {
            this.streamInfo.crc32 = i6(e9.data, this.streamInfo.crc32 || 0), this.push(e9);
          }, t5.exports = s6;
        }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(e8, t5, r5) {
          "use strict";
          var n7 = e8("../utils"), i6 = e8("./GenericWorker");
          function s6(e9) {
            i6.call(this, "DataLengthProbe for " + e9), this.propName = e9, this.withStreamInfo(e9, 0);
          }
          n7.inherits(s6, i6), s6.prototype.processChunk = function(e9) {
            if (e9) {
              var t6 = this.streamInfo[this.propName] || 0;
              this.streamInfo[this.propName] = t6 + e9.data.length;
            }
            i6.prototype.processChunk.call(this, e9);
          }, t5.exports = s6;
        }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(e8, t5, r5) {
          "use strict";
          var n7 = e8("../utils"), i6 = e8("./GenericWorker");
          function s6(e9) {
            i6.call(this, "DataWorker");
            var t6 = this;
            this.dataIsReady = false, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = false, e9.then(function(e10) {
              t6.dataIsReady = true, t6.data = e10, t6.max = e10 && e10.length || 0, t6.type = n7.getTypeOf(e10), t6.isPaused || t6._tickAndRepeat();
            }, function(e10) {
              t6.error(e10);
            });
          }
          n7.inherits(s6, i6), s6.prototype.cleanUp = function() {
            i6.prototype.cleanUp.call(this), this.data = null;
          }, s6.prototype.resume = function() {
            return !!i6.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = true, n7.delay(this._tickAndRepeat, [], this)), true);
          }, s6.prototype._tickAndRepeat = function() {
            this._tickScheduled = false, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (n7.delay(this._tickAndRepeat, [], this), this._tickScheduled = true));
          }, s6.prototype._tick = function() {
            if (this.isPaused || this.isFinished)
              return false;
            var e9 = null, t6 = Math.min(this.max, this.index + 16384);
            if (this.index >= this.max)
              return this.end();
            switch (this.type) {
              case "string":
                e9 = this.data.substring(this.index, t6);
                break;
              case "uint8array":
                e9 = this.data.subarray(this.index, t6);
                break;
              case "array":
              case "nodebuffer":
                e9 = this.data.slice(this.index, t6);
            }
            return this.index = t6, this.push({ data: e9, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
          }, t5.exports = s6;
        }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(e8, t5, r5) {
          "use strict";
          function n7(e9) {
            this.name = e9 || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = true, this.isFinished = false, this.isLocked = false, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
          }
          n7.prototype = { push: function(e9) {
            this.emit("data", e9);
          }, end: function() {
            if (this.isFinished)
              return false;
            this.flush();
            try {
              this.emit("end"), this.cleanUp(), this.isFinished = true;
            } catch (e9) {
              this.emit("error", e9);
            }
            return true;
          }, error: function(e9) {
            return !this.isFinished && (this.isPaused ? this.generatedError = e9 : (this.isFinished = true, this.emit("error", e9), this.previous && this.previous.error(e9), this.cleanUp()), true);
          }, on: function(e9, t6) {
            return this._listeners[e9].push(t6), this;
          }, cleanUp: function() {
            this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
          }, emit: function(e9, t6) {
            if (this._listeners[e9])
              for (var r6 = 0; r6 < this._listeners[e9].length; r6++)
                this._listeners[e9][r6].call(this, t6);
          }, pipe: function(e9) {
            return e9.registerPrevious(this);
          }, registerPrevious: function(e9) {
            if (this.isLocked)
              throw new Error("The stream '" + this + "' has already been used.");
            this.streamInfo = e9.streamInfo, this.mergeStreamInfo(), this.previous = e9;
            var t6 = this;
            return e9.on("data", function(e10) {
              t6.processChunk(e10);
            }), e9.on("end", function() {
              t6.end();
            }), e9.on("error", function(e10) {
              t6.error(e10);
            }), this;
          }, pause: function() {
            return !this.isPaused && !this.isFinished && (this.isPaused = true, this.previous && this.previous.pause(), true);
          }, resume: function() {
            if (!this.isPaused || this.isFinished)
              return false;
            var e9 = this.isPaused = false;
            return this.generatedError && (this.error(this.generatedError), e9 = true), this.previous && this.previous.resume(), !e9;
          }, flush: function() {
          }, processChunk: function(e9) {
            this.push(e9);
          }, withStreamInfo: function(e9, t6) {
            return this.extraStreamInfo[e9] = t6, this.mergeStreamInfo(), this;
          }, mergeStreamInfo: function() {
            for (var e9 in this.extraStreamInfo)
              Object.prototype.hasOwnProperty.call(this.extraStreamInfo, e9) && (this.streamInfo[e9] = this.extraStreamInfo[e9]);
          }, lock: function() {
            if (this.isLocked)
              throw new Error("The stream '" + this + "' has already been used.");
            this.isLocked = true, this.previous && this.previous.lock();
          }, toString: function() {
            var e9 = "Worker " + this.name;
            return this.previous ? this.previous + " -> " + e9 : e9;
          } }, t5.exports = n7;
        }, {}], 29: [function(e8, t5, r5) {
          "use strict";
          var h4 = e8("../utils"), i6 = e8("./ConvertWorker"), s6 = e8("./GenericWorker"), u3 = e8("../base64"), n7 = e8("../support"), a4 = e8("../external"), o7 = null;
          if (n7.nodestream)
            try {
              o7 = e8("../nodejs/NodejsStreamOutputAdapter");
            } catch (e9) {
            }
          function l6(e9, o8) {
            return new a4.Promise(function(t6, r6) {
              var n8 = [], i7 = e9._internalType, s7 = e9._outputType, a5 = e9._mimeType;
              e9.on("data", function(e10, t7) {
                n8.push(e10), o8 && o8(t7);
              }).on("error", function(e10) {
                n8 = [], r6(e10);
              }).on("end", function() {
                try {
                  var e10 = function(e11, t7, r7) {
                    switch (e11) {
                      case "blob":
                        return h4.newBlob(h4.transformTo("arraybuffer", t7), r7);
                      case "base64":
                        return u3.encode(t7);
                      default:
                        return h4.transformTo(e11, t7);
                    }
                  }(s7, function(e11, t7) {
                    var r7, n9 = 0, i8 = null, s8 = 0;
                    for (r7 = 0; r7 < t7.length; r7++)
                      s8 += t7[r7].length;
                    switch (e11) {
                      case "string":
                        return t7.join("");
                      case "array":
                        return Array.prototype.concat.apply([], t7);
                      case "uint8array":
                        for (i8 = new Uint8Array(s8), r7 = 0; r7 < t7.length; r7++)
                          i8.set(t7[r7], n9), n9 += t7[r7].length;
                        return i8;
                      case "nodebuffer":
                        return Buffer.concat(t7);
                      default:
                        throw new Error("concat : unsupported type '" + e11 + "'");
                    }
                  }(i7, n8), a5);
                  t6(e10);
                } catch (e11) {
                  r6(e11);
                }
                n8 = [];
              }).resume();
            });
          }
          function f3(e9, t6, r6) {
            var n8 = t6;
            switch (t6) {
              case "blob":
              case "arraybuffer":
                n8 = "uint8array";
                break;
              case "base64":
                n8 = "string";
            }
            try {
              this._internalType = n8, this._outputType = t6, this._mimeType = r6, h4.checkSupport(n8), this._worker = e9.pipe(new i6(n8)), e9.lock();
            } catch (e10) {
              this._worker = new s6("error"), this._worker.error(e10);
            }
          }
          f3.prototype = { accumulate: function(e9) {
            return l6(this, e9);
          }, on: function(e9, t6) {
            var r6 = this;
            return "data" === e9 ? this._worker.on(e9, function(e10) {
              t6.call(r6, e10.data, e10.meta);
            }) : this._worker.on(e9, function() {
              h4.delay(t6, arguments, r6);
            }), this;
          }, resume: function() {
            return h4.delay(this._worker.resume, [], this._worker), this;
          }, pause: function() {
            return this._worker.pause(), this;
          }, toNodejsStream: function(e9) {
            if (h4.checkSupport("nodestream"), "nodebuffer" !== this._outputType)
              throw new Error(this._outputType + " is not supported by this method");
            return new o7(this, { objectMode: "nodebuffer" !== this._outputType }, e9);
          } }, t5.exports = f3;
        }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(e8, t5, r5) {
          "use strict";
          if (r5.base64 = true, r5.array = true, r5.string = true, r5.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, r5.nodebuffer = "undefined" != typeof Buffer, r5.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer)
            r5.blob = false;
          else {
            var n7 = new ArrayBuffer(0);
            try {
              r5.blob = 0 === new Blob([n7], { type: "application/zip" }).size;
            } catch (e9) {
              try {
                var i6 = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
                i6.append(n7), r5.blob = 0 === i6.getBlob("application/zip").size;
              } catch (e10) {
                r5.blob = false;
              }
            }
          }
          try {
            r5.nodestream = !!e8("readable-stream").Readable;
          } catch (e9) {
            r5.nodestream = false;
          }
        }, { "readable-stream": 16 }], 31: [function(e8, t5, s6) {
          "use strict";
          for (var o7 = e8("./utils"), h4 = e8("./support"), r5 = e8("./nodejsUtils"), n7 = e8("./stream/GenericWorker"), u3 = new Array(256), i6 = 0; i6 < 256; i6++)
            u3[i6] = 252 <= i6 ? 6 : 248 <= i6 ? 5 : 240 <= i6 ? 4 : 224 <= i6 ? 3 : 192 <= i6 ? 2 : 1;
          u3[254] = u3[254] = 1;
          function a4() {
            n7.call(this, "utf-8 decode"), this.leftOver = null;
          }
          function l6() {
            n7.call(this, "utf-8 encode");
          }
          s6.utf8encode = function(e9) {
            return h4.nodebuffer ? r5.newBufferFrom(e9, "utf-8") : function(e10) {
              var t6, r6, n8, i7, s7, a5 = e10.length, o8 = 0;
              for (i7 = 0; i7 < a5; i7++)
                55296 == (64512 & (r6 = e10.charCodeAt(i7))) && i7 + 1 < a5 && 56320 == (64512 & (n8 = e10.charCodeAt(i7 + 1))) && (r6 = 65536 + (r6 - 55296 << 10) + (n8 - 56320), i7++), o8 += r6 < 128 ? 1 : r6 < 2048 ? 2 : r6 < 65536 ? 3 : 4;
              for (t6 = h4.uint8array ? new Uint8Array(o8) : new Array(o8), i7 = s7 = 0; s7 < o8; i7++)
                55296 == (64512 & (r6 = e10.charCodeAt(i7))) && i7 + 1 < a5 && 56320 == (64512 & (n8 = e10.charCodeAt(i7 + 1))) && (r6 = 65536 + (r6 - 55296 << 10) + (n8 - 56320), i7++), r6 < 128 ? t6[s7++] = r6 : (r6 < 2048 ? t6[s7++] = 192 | r6 >>> 6 : (r6 < 65536 ? t6[s7++] = 224 | r6 >>> 12 : (t6[s7++] = 240 | r6 >>> 18, t6[s7++] = 128 | r6 >>> 12 & 63), t6[s7++] = 128 | r6 >>> 6 & 63), t6[s7++] = 128 | 63 & r6);
              return t6;
            }(e9);
          }, s6.utf8decode = function(e9) {
            return h4.nodebuffer ? o7.transformTo("nodebuffer", e9).toString("utf-8") : function(e10) {
              var t6, r6, n8, i7, s7 = e10.length, a5 = new Array(2 * s7);
              for (t6 = r6 = 0; t6 < s7; )
                if ((n8 = e10[t6++]) < 128)
                  a5[r6++] = n8;
                else if (4 < (i7 = u3[n8]))
                  a5[r6++] = 65533, t6 += i7 - 1;
                else {
                  for (n8 &= 2 === i7 ? 31 : 3 === i7 ? 15 : 7; 1 < i7 && t6 < s7; )
                    n8 = n8 << 6 | 63 & e10[t6++], i7--;
                  1 < i7 ? a5[r6++] = 65533 : n8 < 65536 ? a5[r6++] = n8 : (n8 -= 65536, a5[r6++] = 55296 | n8 >> 10 & 1023, a5[r6++] = 56320 | 1023 & n8);
                }
              return a5.length !== r6 && (a5.subarray ? a5 = a5.subarray(0, r6) : a5.length = r6), o7.applyFromCharCode(a5);
            }(e9 = o7.transformTo(h4.uint8array ? "uint8array" : "array", e9));
          }, o7.inherits(a4, n7), a4.prototype.processChunk = function(e9) {
            var t6 = o7.transformTo(h4.uint8array ? "uint8array" : "array", e9.data);
            if (this.leftOver && this.leftOver.length) {
              if (h4.uint8array) {
                var r6 = t6;
                (t6 = new Uint8Array(r6.length + this.leftOver.length)).set(this.leftOver, 0), t6.set(r6, this.leftOver.length);
              } else
                t6 = this.leftOver.concat(t6);
              this.leftOver = null;
            }
            var n8 = function(e10, t7) {
              var r7;
              for ((t7 = t7 || e10.length) > e10.length && (t7 = e10.length), r7 = t7 - 1; 0 <= r7 && 128 == (192 & e10[r7]); )
                r7--;
              return r7 < 0 ? t7 : 0 === r7 ? t7 : r7 + u3[e10[r7]] > t7 ? r7 : t7;
            }(t6), i7 = t6;
            n8 !== t6.length && (h4.uint8array ? (i7 = t6.subarray(0, n8), this.leftOver = t6.subarray(n8, t6.length)) : (i7 = t6.slice(0, n8), this.leftOver = t6.slice(n8, t6.length))), this.push({ data: s6.utf8decode(i7), meta: e9.meta });
          }, a4.prototype.flush = function() {
            this.leftOver && this.leftOver.length && (this.push({ data: s6.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
          }, s6.Utf8DecodeWorker = a4, o7.inherits(l6, n7), l6.prototype.processChunk = function(e9) {
            this.push({ data: s6.utf8encode(e9.data), meta: e9.meta });
          }, s6.Utf8EncodeWorker = l6;
        }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(e8, t5, a4) {
          "use strict";
          var o7 = e8("./support"), h4 = e8("./base64"), r5 = e8("./nodejsUtils"), u3 = e8("./external");
          function n7(e9) {
            return e9;
          }
          function l6(e9, t6) {
            for (var r6 = 0; r6 < e9.length; ++r6)
              t6[r6] = 255 & e9.charCodeAt(r6);
            return t6;
          }
          e8("setimmediate"), a4.newBlob = function(t6, r6) {
            a4.checkSupport("blob");
            try {
              return new Blob([t6], { type: r6 });
            } catch (e9) {
              try {
                var n8 = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
                return n8.append(t6), n8.getBlob(r6);
              } catch (e10) {
                throw new Error("Bug : can't construct the Blob.");
              }
            }
          };
          var i6 = { stringifyByChunk: function(e9, t6, r6) {
            var n8 = [], i7 = 0, s7 = e9.length;
            if (s7 <= r6)
              return String.fromCharCode.apply(null, e9);
            for (; i7 < s7; )
              "array" === t6 || "nodebuffer" === t6 ? n8.push(String.fromCharCode.apply(null, e9.slice(i7, Math.min(i7 + r6, s7)))) : n8.push(String.fromCharCode.apply(null, e9.subarray(i7, Math.min(i7 + r6, s7)))), i7 += r6;
            return n8.join("");
          }, stringifyByChar: function(e9) {
            for (var t6 = "", r6 = 0; r6 < e9.length; r6++)
              t6 += String.fromCharCode(e9[r6]);
            return t6;
          }, applyCanBeUsed: { uint8array: function() {
            try {
              return o7.uint8array && 1 === String.fromCharCode.apply(null, new Uint8Array(1)).length;
            } catch (e9) {
              return false;
            }
          }(), nodebuffer: function() {
            try {
              return o7.nodebuffer && 1 === String.fromCharCode.apply(null, r5.allocBuffer(1)).length;
            } catch (e9) {
              return false;
            }
          }() } };
          function s6(e9) {
            var t6 = 65536, r6 = a4.getTypeOf(e9), n8 = true;
            if ("uint8array" === r6 ? n8 = i6.applyCanBeUsed.uint8array : "nodebuffer" === r6 && (n8 = i6.applyCanBeUsed.nodebuffer), n8)
              for (; 1 < t6; )
                try {
                  return i6.stringifyByChunk(e9, r6, t6);
                } catch (e10) {
                  t6 = Math.floor(t6 / 2);
                }
            return i6.stringifyByChar(e9);
          }
          function f3(e9, t6) {
            for (var r6 = 0; r6 < e9.length; r6++)
              t6[r6] = e9[r6];
            return t6;
          }
          a4.applyFromCharCode = s6;
          var c4 = {};
          c4.string = { string: n7, array: function(e9) {
            return l6(e9, new Array(e9.length));
          }, arraybuffer: function(e9) {
            return c4.string.uint8array(e9).buffer;
          }, uint8array: function(e9) {
            return l6(e9, new Uint8Array(e9.length));
          }, nodebuffer: function(e9) {
            return l6(e9, r5.allocBuffer(e9.length));
          } }, c4.array = { string: s6, array: n7, arraybuffer: function(e9) {
            return new Uint8Array(e9).buffer;
          }, uint8array: function(e9) {
            return new Uint8Array(e9);
          }, nodebuffer: function(e9) {
            return r5.newBufferFrom(e9);
          } }, c4.arraybuffer = { string: function(e9) {
            return s6(new Uint8Array(e9));
          }, array: function(e9) {
            return f3(new Uint8Array(e9), new Array(e9.byteLength));
          }, arraybuffer: n7, uint8array: function(e9) {
            return new Uint8Array(e9);
          }, nodebuffer: function(e9) {
            return r5.newBufferFrom(new Uint8Array(e9));
          } }, c4.uint8array = { string: s6, array: function(e9) {
            return f3(e9, new Array(e9.length));
          }, arraybuffer: function(e9) {
            return e9.buffer;
          }, uint8array: n7, nodebuffer: function(e9) {
            return r5.newBufferFrom(e9);
          } }, c4.nodebuffer = { string: s6, array: function(e9) {
            return f3(e9, new Array(e9.length));
          }, arraybuffer: function(e9) {
            return c4.nodebuffer.uint8array(e9).buffer;
          }, uint8array: function(e9) {
            return f3(e9, new Uint8Array(e9.length));
          }, nodebuffer: n7 }, a4.transformTo = function(e9, t6) {
            if (t6 = t6 || "", !e9)
              return t6;
            a4.checkSupport(e9);
            var r6 = a4.getTypeOf(t6);
            return c4[r6][e9](t6);
          }, a4.resolve = function(e9) {
            for (var t6 = e9.split("/"), r6 = [], n8 = 0; n8 < t6.length; n8++) {
              var i7 = t6[n8];
              "." === i7 || "" === i7 && 0 !== n8 && n8 !== t6.length - 1 || (".." === i7 ? r6.pop() : r6.push(i7));
            }
            return r6.join("/");
          }, a4.getTypeOf = function(e9) {
            return "string" == typeof e9 ? "string" : "[object Array]" === Object.prototype.toString.call(e9) ? "array" : o7.nodebuffer && r5.isBuffer(e9) ? "nodebuffer" : o7.uint8array && e9 instanceof Uint8Array ? "uint8array" : o7.arraybuffer && e9 instanceof ArrayBuffer ? "arraybuffer" : void 0;
          }, a4.checkSupport = function(e9) {
            if (!o7[e9.toLowerCase()])
              throw new Error(e9 + " is not supported by this platform");
          }, a4.MAX_VALUE_16BITS = 65535, a4.MAX_VALUE_32BITS = -1, a4.pretty = function(e9) {
            var t6, r6, n8 = "";
            for (r6 = 0; r6 < (e9 || "").length; r6++)
              n8 += "\\x" + ((t6 = e9.charCodeAt(r6)) < 16 ? "0" : "") + t6.toString(16).toUpperCase();
            return n8;
          }, a4.delay = function(e9, t6, r6) {
            setImmediate(function() {
              e9.apply(r6 || null, t6 || []);
            });
          }, a4.inherits = function(e9, t6) {
            function r6() {
            }
            r6.prototype = t6.prototype, e9.prototype = new r6();
          }, a4.extend = function() {
            var e9, t6, r6 = {};
            for (e9 = 0; e9 < arguments.length; e9++)
              for (t6 in arguments[e9])
                Object.prototype.hasOwnProperty.call(arguments[e9], t6) && void 0 === r6[t6] && (r6[t6] = arguments[e9][t6]);
            return r6;
          }, a4.prepareContent = function(r6, e9, n8, i7, s7) {
            return u3.Promise.resolve(e9).then(function(n9) {
              return o7.blob && (n9 instanceof Blob || -1 !== ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(n9))) && "undefined" != typeof FileReader ? new u3.Promise(function(t6, r7) {
                var e10 = new FileReader();
                e10.onload = function(e11) {
                  t6(e11.target.result);
                }, e10.onerror = function(e11) {
                  r7(e11.target.error);
                }, e10.readAsArrayBuffer(n9);
              }) : n9;
            }).then(function(e10) {
              var t6 = a4.getTypeOf(e10);
              return t6 ? ("arraybuffer" === t6 ? e10 = a4.transformTo("uint8array", e10) : "string" === t6 && (s7 ? e10 = h4.decode(e10) : n8 && true !== i7 && (e10 = function(e11) {
                return l6(e11, o7.uint8array ? new Uint8Array(e11.length) : new Array(e11.length));
              }(e10))), e10) : u3.Promise.reject(new Error("Can't read the data of '" + r6 + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
            });
          };
        }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(e8, t5, r5) {
          "use strict";
          var n7 = e8("./reader/readerFor"), i6 = e8("./utils"), s6 = e8("./signature"), a4 = e8("./zipEntry"), o7 = e8("./support");
          function h4(e9) {
            this.files = [], this.loadOptions = e9;
          }
          h4.prototype = { checkSignature: function(e9) {
            if (!this.reader.readAndCheckSignature(e9)) {
              this.reader.index -= 4;
              var t6 = this.reader.readString(4);
              throw new Error("Corrupted zip or bug: unexpected signature (" + i6.pretty(t6) + ", expected " + i6.pretty(e9) + ")");
            }
          }, isSignature: function(e9, t6) {
            var r6 = this.reader.index;
            this.reader.setIndex(e9);
            var n8 = this.reader.readString(4) === t6;
            return this.reader.setIndex(r6), n8;
          }, readBlockEndOfCentral: function() {
            this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
            var e9 = this.reader.readData(this.zipCommentLength), t6 = o7.uint8array ? "uint8array" : "array", r6 = i6.transformTo(t6, e9);
            this.zipComment = this.loadOptions.decodeFileName(r6);
          }, readBlockZip64EndOfCentral: function() {
            this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
            for (var e9, t6, r6, n8 = this.zip64EndOfCentralSize - 44; 0 < n8; )
              e9 = this.reader.readInt(2), t6 = this.reader.readInt(4), r6 = this.reader.readData(t6), this.zip64ExtensibleData[e9] = { id: e9, length: t6, value: r6 };
          }, readBlockZip64EndOfCentralLocator: function() {
            if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount)
              throw new Error("Multi-volumes zip are not supported");
          }, readLocalFiles: function() {
            var e9, t6;
            for (e9 = 0; e9 < this.files.length; e9++)
              t6 = this.files[e9], this.reader.setIndex(t6.localHeaderOffset), this.checkSignature(s6.LOCAL_FILE_HEADER), t6.readLocalPart(this.reader), t6.handleUTF8(), t6.processAttributes();
          }, readCentralDir: function() {
            var e9;
            for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(s6.CENTRAL_FILE_HEADER); )
              (e9 = new a4({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(e9);
            if (this.centralDirRecords !== this.files.length && 0 !== this.centralDirRecords && 0 === this.files.length)
              throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
          }, readEndOfCentral: function() {
            var e9 = this.reader.lastIndexOfSignature(s6.CENTRAL_DIRECTORY_END);
            if (e9 < 0)
              throw !this.isSignature(0, s6.LOCAL_FILE_HEADER) ? new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html") : new Error("Corrupted zip: can't find end of central directory");
            this.reader.setIndex(e9);
            var t6 = e9;
            if (this.checkSignature(s6.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === i6.MAX_VALUE_16BITS || this.diskWithCentralDirStart === i6.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === i6.MAX_VALUE_16BITS || this.centralDirRecords === i6.MAX_VALUE_16BITS || this.centralDirSize === i6.MAX_VALUE_32BITS || this.centralDirOffset === i6.MAX_VALUE_32BITS) {
              if (this.zip64 = true, (e9 = this.reader.lastIndexOfSignature(s6.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0)
                throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
              if (this.reader.setIndex(e9), this.checkSignature(s6.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, s6.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(s6.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0))
                throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
              this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(s6.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
            }
            var r6 = this.centralDirOffset + this.centralDirSize;
            this.zip64 && (r6 += 20, r6 += 12 + this.zip64EndOfCentralSize);
            var n8 = t6 - r6;
            if (0 < n8)
              this.isSignature(t6, s6.CENTRAL_FILE_HEADER) || (this.reader.zero = n8);
            else if (n8 < 0)
              throw new Error("Corrupted zip: missing " + Math.abs(n8) + " bytes.");
          }, prepareReader: function(e9) {
            this.reader = n7(e9);
          }, load: function(e9) {
            this.prepareReader(e9), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
          } }, t5.exports = h4;
        }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(e8, t5, r5) {
          "use strict";
          var n7 = e8("./reader/readerFor"), s6 = e8("./utils"), i6 = e8("./compressedObject"), a4 = e8("./crc32"), o7 = e8("./utf8"), h4 = e8("./compressions"), u3 = e8("./support");
          function l6(e9, t6) {
            this.options = e9, this.loadOptions = t6;
          }
          l6.prototype = { isEncrypted: function() {
            return 1 == (1 & this.bitFlag);
          }, useUTF8: function() {
            return 2048 == (2048 & this.bitFlag);
          }, readLocalPart: function(e9) {
            var t6, r6;
            if (e9.skip(22), this.fileNameLength = e9.readInt(2), r6 = e9.readInt(2), this.fileName = e9.readData(this.fileNameLength), e9.skip(r6), -1 === this.compressedSize || -1 === this.uncompressedSize)
              throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
            if (null === (t6 = function(e10) {
              for (var t7 in h4)
                if (Object.prototype.hasOwnProperty.call(h4, t7) && h4[t7].magic === e10)
                  return h4[t7];
              return null;
            }(this.compressionMethod)))
              throw new Error("Corrupted zip : compression " + s6.pretty(this.compressionMethod) + " unknown (inner file : " + s6.transformTo("string", this.fileName) + ")");
            this.decompressed = new i6(this.compressedSize, this.uncompressedSize, this.crc32, t6, e9.readData(this.compressedSize));
          }, readCentralPart: function(e9) {
            this.versionMadeBy = e9.readInt(2), e9.skip(2), this.bitFlag = e9.readInt(2), this.compressionMethod = e9.readString(2), this.date = e9.readDate(), this.crc32 = e9.readInt(4), this.compressedSize = e9.readInt(4), this.uncompressedSize = e9.readInt(4);
            var t6 = e9.readInt(2);
            if (this.extraFieldsLength = e9.readInt(2), this.fileCommentLength = e9.readInt(2), this.diskNumberStart = e9.readInt(2), this.internalFileAttributes = e9.readInt(2), this.externalFileAttributes = e9.readInt(4), this.localHeaderOffset = e9.readInt(4), this.isEncrypted())
              throw new Error("Encrypted zip are not supported");
            e9.skip(t6), this.readExtraFields(e9), this.parseZIP64ExtraField(e9), this.fileComment = e9.readData(this.fileCommentLength);
          }, processAttributes: function() {
            this.unixPermissions = null, this.dosPermissions = null;
            var e9 = this.versionMadeBy >> 8;
            this.dir = !!(16 & this.externalFileAttributes), 0 == e9 && (this.dosPermissions = 63 & this.externalFileAttributes), 3 == e9 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || "/" !== this.fileNameStr.slice(-1) || (this.dir = true);
          }, parseZIP64ExtraField: function() {
            if (this.extraFields[1]) {
              var e9 = n7(this.extraFields[1].value);
              this.uncompressedSize === s6.MAX_VALUE_32BITS && (this.uncompressedSize = e9.readInt(8)), this.compressedSize === s6.MAX_VALUE_32BITS && (this.compressedSize = e9.readInt(8)), this.localHeaderOffset === s6.MAX_VALUE_32BITS && (this.localHeaderOffset = e9.readInt(8)), this.diskNumberStart === s6.MAX_VALUE_32BITS && (this.diskNumberStart = e9.readInt(4));
            }
          }, readExtraFields: function(e9) {
            var t6, r6, n8, i7 = e9.index + this.extraFieldsLength;
            for (this.extraFields || (this.extraFields = {}); e9.index + 4 < i7; )
              t6 = e9.readInt(2), r6 = e9.readInt(2), n8 = e9.readData(r6), this.extraFields[t6] = { id: t6, length: r6, value: n8 };
            e9.setIndex(i7);
          }, handleUTF8: function() {
            var e9 = u3.uint8array ? "uint8array" : "array";
            if (this.useUTF8())
              this.fileNameStr = o7.utf8decode(this.fileName), this.fileCommentStr = o7.utf8decode(this.fileComment);
            else {
              var t6 = this.findExtraFieldUnicodePath();
              if (null !== t6)
                this.fileNameStr = t6;
              else {
                var r6 = s6.transformTo(e9, this.fileName);
                this.fileNameStr = this.loadOptions.decodeFileName(r6);
              }
              var n8 = this.findExtraFieldUnicodeComment();
              if (null !== n8)
                this.fileCommentStr = n8;
              else {
                var i7 = s6.transformTo(e9, this.fileComment);
                this.fileCommentStr = this.loadOptions.decodeFileName(i7);
              }
            }
          }, findExtraFieldUnicodePath: function() {
            var e9 = this.extraFields[28789];
            if (e9) {
              var t6 = n7(e9.value);
              return 1 !== t6.readInt(1) ? null : a4(this.fileName) !== t6.readInt(4) ? null : o7.utf8decode(t6.readData(e9.length - 5));
            }
            return null;
          }, findExtraFieldUnicodeComment: function() {
            var e9 = this.extraFields[25461];
            if (e9) {
              var t6 = n7(e9.value);
              return 1 !== t6.readInt(1) ? null : a4(this.fileComment) !== t6.readInt(4) ? null : o7.utf8decode(t6.readData(e9.length - 5));
            }
            return null;
          } }, t5.exports = l6;
        }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(e8, t5, r5) {
          "use strict";
          function n7(e9, t6, r6) {
            this.name = e9, this.dir = r6.dir, this.date = r6.date, this.comment = r6.comment, this.unixPermissions = r6.unixPermissions, this.dosPermissions = r6.dosPermissions, this._data = t6, this._dataBinary = r6.binary, this.options = { compression: r6.compression, compressionOptions: r6.compressionOptions };
          }
          var s6 = e8("./stream/StreamHelper"), i6 = e8("./stream/DataWorker"), a4 = e8("./utf8"), o7 = e8("./compressedObject"), h4 = e8("./stream/GenericWorker");
          n7.prototype = { internalStream: function(e9) {
            var t6 = null, r6 = "string";
            try {
              if (!e9)
                throw new Error("No output type specified.");
              var n8 = "string" === (r6 = e9.toLowerCase()) || "text" === r6;
              "binarystring" !== r6 && "text" !== r6 || (r6 = "string"), t6 = this._decompressWorker();
              var i7 = !this._dataBinary;
              i7 && !n8 && (t6 = t6.pipe(new a4.Utf8EncodeWorker())), !i7 && n8 && (t6 = t6.pipe(new a4.Utf8DecodeWorker()));
            } catch (e10) {
              (t6 = new h4("error")).error(e10);
            }
            return new s6(t6, r6, "");
          }, async: function(e9, t6) {
            return this.internalStream(e9).accumulate(t6);
          }, nodeStream: function(e9, t6) {
            return this.internalStream(e9 || "nodebuffer").toNodejsStream(t6);
          }, _compressWorker: function(e9, t6) {
            if (this._data instanceof o7 && this._data.compression.magic === e9.magic)
              return this._data.getCompressedWorker();
            var r6 = this._decompressWorker();
            return this._dataBinary || (r6 = r6.pipe(new a4.Utf8EncodeWorker())), o7.createWorkerFrom(r6, e9, t6);
          }, _decompressWorker: function() {
            return this._data instanceof o7 ? this._data.getContentWorker() : this._data instanceof h4 ? this._data : new i6(this._data);
          } };
          for (var u3 = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], l6 = function() {
            throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
          }, f3 = 0; f3 < u3.length; f3++)
            n7.prototype[u3[f3]] = l6;
          t5.exports = n7;
        }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(e8, l6, t5) {
          (function(t6) {
            "use strict";
            var r5, n7, e9 = t6.MutationObserver || t6.WebKitMutationObserver;
            if (e9) {
              var i6 = 0, s6 = new e9(u3), a4 = t6.document.createTextNode("");
              s6.observe(a4, { characterData: true }), r5 = function() {
                a4.data = i6 = ++i6 % 2;
              };
            } else if (t6.setImmediate || void 0 === t6.MessageChannel)
              r5 = "document" in t6 && "onreadystatechange" in t6.document.createElement("script") ? function() {
                var e10 = t6.document.createElement("script");
                e10.onreadystatechange = function() {
                  u3(), e10.onreadystatechange = null, e10.parentNode.removeChild(e10), e10 = null;
                }, t6.document.documentElement.appendChild(e10);
              } : function() {
                setTimeout(u3, 0);
              };
            else {
              var o7 = new t6.MessageChannel();
              o7.port1.onmessage = u3, r5 = function() {
                o7.port2.postMessage(0);
              };
            }
            var h4 = [];
            function u3() {
              var e10, t7;
              n7 = true;
              for (var r6 = h4.length; r6; ) {
                for (t7 = h4, h4 = [], e10 = -1; ++e10 < r6; )
                  t7[e10]();
                r6 = h4.length;
              }
              n7 = false;
            }
            l6.exports = function(e10) {
              1 !== h4.push(e10) || n7 || r5();
            };
          }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
        }, {}], 37: [function(e8, t5, r5) {
          "use strict";
          var i6 = e8("immediate");
          function u3() {
          }
          var l6 = {}, s6 = ["REJECTED"], a4 = ["FULFILLED"], n7 = ["PENDING"];
          function o7(e9) {
            if ("function" != typeof e9)
              throw new TypeError("resolver must be a function");
            this.state = n7, this.queue = [], this.outcome = void 0, e9 !== u3 && d4(this, e9);
          }
          function h4(e9, t6, r6) {
            this.promise = e9, "function" == typeof t6 && (this.onFulfilled = t6, this.callFulfilled = this.otherCallFulfilled), "function" == typeof r6 && (this.onRejected = r6, this.callRejected = this.otherCallRejected);
          }
          function f3(t6, r6, n8) {
            i6(function() {
              var e9;
              try {
                e9 = r6(n8);
              } catch (e10) {
                return l6.reject(t6, e10);
              }
              e9 === t6 ? l6.reject(t6, new TypeError("Cannot resolve promise with itself")) : l6.resolve(t6, e9);
            });
          }
          function c4(e9) {
            var t6 = e9 && e9.then;
            if (e9 && ("object" == typeof e9 || "function" == typeof e9) && "function" == typeof t6)
              return function() {
                t6.apply(e9, arguments);
              };
          }
          function d4(t6, e9) {
            var r6 = false;
            function n8(e10) {
              r6 || (r6 = true, l6.reject(t6, e10));
            }
            function i7(e10) {
              r6 || (r6 = true, l6.resolve(t6, e10));
            }
            var s7 = p3(function() {
              e9(i7, n8);
            });
            "error" === s7.status && n8(s7.value);
          }
          function p3(e9, t6) {
            var r6 = {};
            try {
              r6.value = e9(t6), r6.status = "success";
            } catch (e10) {
              r6.status = "error", r6.value = e10;
            }
            return r6;
          }
          (t5.exports = o7).prototype.finally = function(t6) {
            if ("function" != typeof t6)
              return this;
            var r6 = this.constructor;
            return this.then(function(e9) {
              return r6.resolve(t6()).then(function() {
                return e9;
              });
            }, function(e9) {
              return r6.resolve(t6()).then(function() {
                throw e9;
              });
            });
          }, o7.prototype.catch = function(e9) {
            return this.then(null, e9);
          }, o7.prototype.then = function(e9, t6) {
            if ("function" != typeof e9 && this.state === a4 || "function" != typeof t6 && this.state === s6)
              return this;
            var r6 = new this.constructor(u3);
            this.state !== n7 ? f3(r6, this.state === a4 ? e9 : t6, this.outcome) : this.queue.push(new h4(r6, e9, t6));
            return r6;
          }, h4.prototype.callFulfilled = function(e9) {
            l6.resolve(this.promise, e9);
          }, h4.prototype.otherCallFulfilled = function(e9) {
            f3(this.promise, this.onFulfilled, e9);
          }, h4.prototype.callRejected = function(e9) {
            l6.reject(this.promise, e9);
          }, h4.prototype.otherCallRejected = function(e9) {
            f3(this.promise, this.onRejected, e9);
          }, l6.resolve = function(e9, t6) {
            var r6 = p3(c4, t6);
            if ("error" === r6.status)
              return l6.reject(e9, r6.value);
            var n8 = r6.value;
            if (n8)
              d4(e9, n8);
            else {
              e9.state = a4, e9.outcome = t6;
              for (var i7 = -1, s7 = e9.queue.length; ++i7 < s7; )
                e9.queue[i7].callFulfilled(t6);
            }
            return e9;
          }, l6.reject = function(e9, t6) {
            e9.state = s6, e9.outcome = t6;
            for (var r6 = -1, n8 = e9.queue.length; ++r6 < n8; )
              e9.queue[r6].callRejected(t6);
            return e9;
          }, o7.resolve = function(e9) {
            if (e9 instanceof this)
              return e9;
            return l6.resolve(new this(u3), e9);
          }, o7.reject = function(e9) {
            var t6 = new this(u3);
            return l6.reject(t6, e9);
          }, o7.all = function(e9) {
            var r6 = this;
            if ("[object Array]" !== Object.prototype.toString.call(e9))
              return this.reject(new TypeError("must be an array"));
            var n8 = e9.length, i7 = false;
            if (!n8)
              return this.resolve([]);
            var s7 = new Array(n8), a5 = 0, t6 = -1, o8 = new this(u3);
            for (; ++t6 < n8; )
              h5(e9[t6], t6);
            return o8;
            function h5(e10, t7) {
              r6.resolve(e10).then(function(e11) {
                s7[t7] = e11, ++a5 !== n8 || i7 || (i7 = true, l6.resolve(o8, s7));
              }, function(e11) {
                i7 || (i7 = true, l6.reject(o8, e11));
              });
            }
          }, o7.race = function(e9) {
            var t6 = this;
            if ("[object Array]" !== Object.prototype.toString.call(e9))
              return this.reject(new TypeError("must be an array"));
            var r6 = e9.length, n8 = false;
            if (!r6)
              return this.resolve([]);
            var i7 = -1, s7 = new this(u3);
            for (; ++i7 < r6; )
              a5 = e9[i7], t6.resolve(a5).then(function(e10) {
                n8 || (n8 = true, l6.resolve(s7, e10));
              }, function(e10) {
                n8 || (n8 = true, l6.reject(s7, e10));
              });
            var a5;
            return s7;
          };
        }, { immediate: 36 }], 38: [function(e8, t5, r5) {
          "use strict";
          var n7 = {};
          (0, e8("./lib/utils/common").assign)(n7, e8("./lib/deflate"), e8("./lib/inflate"), e8("./lib/zlib/constants")), t5.exports = n7;
        }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(e8, t5, r5) {
          "use strict";
          var a4 = e8("./zlib/deflate"), o7 = e8("./utils/common"), h4 = e8("./utils/strings"), i6 = e8("./zlib/messages"), s6 = e8("./zlib/zstream"), u3 = Object.prototype.toString, l6 = 0, f3 = -1, c4 = 0, d4 = 8;
          function p3(e9) {
            if (!(this instanceof p3))
              return new p3(e9);
            this.options = o7.assign({ level: f3, method: d4, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: c4, to: "" }, e9 || {});
            var t6 = this.options;
            t6.raw && 0 < t6.windowBits ? t6.windowBits = -t6.windowBits : t6.gzip && 0 < t6.windowBits && t6.windowBits < 16 && (t6.windowBits += 16), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new s6(), this.strm.avail_out = 0;
            var r6 = a4.deflateInit2(this.strm, t6.level, t6.method, t6.windowBits, t6.memLevel, t6.strategy);
            if (r6 !== l6)
              throw new Error(i6[r6]);
            if (t6.header && a4.deflateSetHeader(this.strm, t6.header), t6.dictionary) {
              var n8;
              if (n8 = "string" == typeof t6.dictionary ? h4.string2buf(t6.dictionary) : "[object ArrayBuffer]" === u3.call(t6.dictionary) ? new Uint8Array(t6.dictionary) : t6.dictionary, (r6 = a4.deflateSetDictionary(this.strm, n8)) !== l6)
                throw new Error(i6[r6]);
              this._dict_set = true;
            }
          }
          function n7(e9, t6) {
            var r6 = new p3(t6);
            if (r6.push(e9, true), r6.err)
              throw r6.msg || i6[r6.err];
            return r6.result;
          }
          p3.prototype.push = function(e9, t6) {
            var r6, n8, i7 = this.strm, s7 = this.options.chunkSize;
            if (this.ended)
              return false;
            n8 = t6 === ~~t6 ? t6 : true === t6 ? 4 : 0, "string" == typeof e9 ? i7.input = h4.string2buf(e9) : "[object ArrayBuffer]" === u3.call(e9) ? i7.input = new Uint8Array(e9) : i7.input = e9, i7.next_in = 0, i7.avail_in = i7.input.length;
            do {
              if (0 === i7.avail_out && (i7.output = new o7.Buf8(s7), i7.next_out = 0, i7.avail_out = s7), 1 !== (r6 = a4.deflate(i7, n8)) && r6 !== l6)
                return this.onEnd(r6), !(this.ended = true);
              0 !== i7.avail_out && (0 !== i7.avail_in || 4 !== n8 && 2 !== n8) || ("string" === this.options.to ? this.onData(h4.buf2binstring(o7.shrinkBuf(i7.output, i7.next_out))) : this.onData(o7.shrinkBuf(i7.output, i7.next_out)));
            } while ((0 < i7.avail_in || 0 === i7.avail_out) && 1 !== r6);
            return 4 === n8 ? (r6 = a4.deflateEnd(this.strm), this.onEnd(r6), this.ended = true, r6 === l6) : 2 !== n8 || (this.onEnd(l6), !(i7.avail_out = 0));
          }, p3.prototype.onData = function(e9) {
            this.chunks.push(e9);
          }, p3.prototype.onEnd = function(e9) {
            e9 === l6 && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = o7.flattenChunks(this.chunks)), this.chunks = [], this.err = e9, this.msg = this.strm.msg;
          }, r5.Deflate = p3, r5.deflate = n7, r5.deflateRaw = function(e9, t6) {
            return (t6 = t6 || {}).raw = true, n7(e9, t6);
          }, r5.gzip = function(e9, t6) {
            return (t6 = t6 || {}).gzip = true, n7(e9, t6);
          };
        }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(e8, t5, r5) {
          "use strict";
          var c4 = e8("./zlib/inflate"), d4 = e8("./utils/common"), p3 = e8("./utils/strings"), m3 = e8("./zlib/constants"), n7 = e8("./zlib/messages"), i6 = e8("./zlib/zstream"), s6 = e8("./zlib/gzheader"), _3 = Object.prototype.toString;
          function a4(e9) {
            if (!(this instanceof a4))
              return new a4(e9);
            this.options = d4.assign({ chunkSize: 16384, windowBits: 0, to: "" }, e9 || {});
            var t6 = this.options;
            t6.raw && 0 <= t6.windowBits && t6.windowBits < 16 && (t6.windowBits = -t6.windowBits, 0 === t6.windowBits && (t6.windowBits = -15)), !(0 <= t6.windowBits && t6.windowBits < 16) || e9 && e9.windowBits || (t6.windowBits += 32), 15 < t6.windowBits && t6.windowBits < 48 && 0 == (15 & t6.windowBits) && (t6.windowBits |= 15), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new i6(), this.strm.avail_out = 0;
            var r6 = c4.inflateInit2(this.strm, t6.windowBits);
            if (r6 !== m3.Z_OK)
              throw new Error(n7[r6]);
            this.header = new s6(), c4.inflateGetHeader(this.strm, this.header);
          }
          function o7(e9, t6) {
            var r6 = new a4(t6);
            if (r6.push(e9, true), r6.err)
              throw r6.msg || n7[r6.err];
            return r6.result;
          }
          a4.prototype.push = function(e9, t6) {
            var r6, n8, i7, s7, a5, o8, h4 = this.strm, u3 = this.options.chunkSize, l6 = this.options.dictionary, f3 = false;
            if (this.ended)
              return false;
            n8 = t6 === ~~t6 ? t6 : true === t6 ? m3.Z_FINISH : m3.Z_NO_FLUSH, "string" == typeof e9 ? h4.input = p3.binstring2buf(e9) : "[object ArrayBuffer]" === _3.call(e9) ? h4.input = new Uint8Array(e9) : h4.input = e9, h4.next_in = 0, h4.avail_in = h4.input.length;
            do {
              if (0 === h4.avail_out && (h4.output = new d4.Buf8(u3), h4.next_out = 0, h4.avail_out = u3), (r6 = c4.inflate(h4, m3.Z_NO_FLUSH)) === m3.Z_NEED_DICT && l6 && (o8 = "string" == typeof l6 ? p3.string2buf(l6) : "[object ArrayBuffer]" === _3.call(l6) ? new Uint8Array(l6) : l6, r6 = c4.inflateSetDictionary(this.strm, o8)), r6 === m3.Z_BUF_ERROR && true === f3 && (r6 = m3.Z_OK, f3 = false), r6 !== m3.Z_STREAM_END && r6 !== m3.Z_OK)
                return this.onEnd(r6), !(this.ended = true);
              h4.next_out && (0 !== h4.avail_out && r6 !== m3.Z_STREAM_END && (0 !== h4.avail_in || n8 !== m3.Z_FINISH && n8 !== m3.Z_SYNC_FLUSH) || ("string" === this.options.to ? (i7 = p3.utf8border(h4.output, h4.next_out), s7 = h4.next_out - i7, a5 = p3.buf2string(h4.output, i7), h4.next_out = s7, h4.avail_out = u3 - s7, s7 && d4.arraySet(h4.output, h4.output, i7, s7, 0), this.onData(a5)) : this.onData(d4.shrinkBuf(h4.output, h4.next_out)))), 0 === h4.avail_in && 0 === h4.avail_out && (f3 = true);
            } while ((0 < h4.avail_in || 0 === h4.avail_out) && r6 !== m3.Z_STREAM_END);
            return r6 === m3.Z_STREAM_END && (n8 = m3.Z_FINISH), n8 === m3.Z_FINISH ? (r6 = c4.inflateEnd(this.strm), this.onEnd(r6), this.ended = true, r6 === m3.Z_OK) : n8 !== m3.Z_SYNC_FLUSH || (this.onEnd(m3.Z_OK), !(h4.avail_out = 0));
          }, a4.prototype.onData = function(e9) {
            this.chunks.push(e9);
          }, a4.prototype.onEnd = function(e9) {
            e9 === m3.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = d4.flattenChunks(this.chunks)), this.chunks = [], this.err = e9, this.msg = this.strm.msg;
          }, r5.Inflate = a4, r5.inflate = o7, r5.inflateRaw = function(e9, t6) {
            return (t6 = t6 || {}).raw = true, o7(e9, t6);
          }, r5.ungzip = o7;
        }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(e8, t5, r5) {
          "use strict";
          var n7 = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
          r5.assign = function(e9) {
            for (var t6 = Array.prototype.slice.call(arguments, 1); t6.length; ) {
              var r6 = t6.shift();
              if (r6) {
                if ("object" != typeof r6)
                  throw new TypeError(r6 + "must be non-object");
                for (var n8 in r6)
                  r6.hasOwnProperty(n8) && (e9[n8] = r6[n8]);
              }
            }
            return e9;
          }, r5.shrinkBuf = function(e9, t6) {
            return e9.length === t6 ? e9 : e9.subarray ? e9.subarray(0, t6) : (e9.length = t6, e9);
          };
          var i6 = { arraySet: function(e9, t6, r6, n8, i7) {
            if (t6.subarray && e9.subarray)
              e9.set(t6.subarray(r6, r6 + n8), i7);
            else
              for (var s7 = 0; s7 < n8; s7++)
                e9[i7 + s7] = t6[r6 + s7];
          }, flattenChunks: function(e9) {
            var t6, r6, n8, i7, s7, a4;
            for (t6 = n8 = 0, r6 = e9.length; t6 < r6; t6++)
              n8 += e9[t6].length;
            for (a4 = new Uint8Array(n8), t6 = i7 = 0, r6 = e9.length; t6 < r6; t6++)
              s7 = e9[t6], a4.set(s7, i7), i7 += s7.length;
            return a4;
          } }, s6 = { arraySet: function(e9, t6, r6, n8, i7) {
            for (var s7 = 0; s7 < n8; s7++)
              e9[i7 + s7] = t6[r6 + s7];
          }, flattenChunks: function(e9) {
            return [].concat.apply([], e9);
          } };
          r5.setTyped = function(e9) {
            e9 ? (r5.Buf8 = Uint8Array, r5.Buf16 = Uint16Array, r5.Buf32 = Int32Array, r5.assign(r5, i6)) : (r5.Buf8 = Array, r5.Buf16 = Array, r5.Buf32 = Array, r5.assign(r5, s6));
          }, r5.setTyped(n7);
        }, {}], 42: [function(e8, t5, r5) {
          "use strict";
          var h4 = e8("./common"), i6 = true, s6 = true;
          try {
            String.fromCharCode.apply(null, [0]);
          } catch (e9) {
            i6 = false;
          }
          try {
            String.fromCharCode.apply(null, new Uint8Array(1));
          } catch (e9) {
            s6 = false;
          }
          for (var u3 = new h4.Buf8(256), n7 = 0; n7 < 256; n7++)
            u3[n7] = 252 <= n7 ? 6 : 248 <= n7 ? 5 : 240 <= n7 ? 4 : 224 <= n7 ? 3 : 192 <= n7 ? 2 : 1;
          function l6(e9, t6) {
            if (t6 < 65537 && (e9.subarray && s6 || !e9.subarray && i6))
              return String.fromCharCode.apply(null, h4.shrinkBuf(e9, t6));
            for (var r6 = "", n8 = 0; n8 < t6; n8++)
              r6 += String.fromCharCode(e9[n8]);
            return r6;
          }
          u3[254] = u3[254] = 1, r5.string2buf = function(e9) {
            var t6, r6, n8, i7, s7, a4 = e9.length, o7 = 0;
            for (i7 = 0; i7 < a4; i7++)
              55296 == (64512 & (r6 = e9.charCodeAt(i7))) && i7 + 1 < a4 && 56320 == (64512 & (n8 = e9.charCodeAt(i7 + 1))) && (r6 = 65536 + (r6 - 55296 << 10) + (n8 - 56320), i7++), o7 += r6 < 128 ? 1 : r6 < 2048 ? 2 : r6 < 65536 ? 3 : 4;
            for (t6 = new h4.Buf8(o7), i7 = s7 = 0; s7 < o7; i7++)
              55296 == (64512 & (r6 = e9.charCodeAt(i7))) && i7 + 1 < a4 && 56320 == (64512 & (n8 = e9.charCodeAt(i7 + 1))) && (r6 = 65536 + (r6 - 55296 << 10) + (n8 - 56320), i7++), r6 < 128 ? t6[s7++] = r6 : (r6 < 2048 ? t6[s7++] = 192 | r6 >>> 6 : (r6 < 65536 ? t6[s7++] = 224 | r6 >>> 12 : (t6[s7++] = 240 | r6 >>> 18, t6[s7++] = 128 | r6 >>> 12 & 63), t6[s7++] = 128 | r6 >>> 6 & 63), t6[s7++] = 128 | 63 & r6);
            return t6;
          }, r5.buf2binstring = function(e9) {
            return l6(e9, e9.length);
          }, r5.binstring2buf = function(e9) {
            for (var t6 = new h4.Buf8(e9.length), r6 = 0, n8 = t6.length; r6 < n8; r6++)
              t6[r6] = e9.charCodeAt(r6);
            return t6;
          }, r5.buf2string = function(e9, t6) {
            var r6, n8, i7, s7, a4 = t6 || e9.length, o7 = new Array(2 * a4);
            for (r6 = n8 = 0; r6 < a4; )
              if ((i7 = e9[r6++]) < 128)
                o7[n8++] = i7;
              else if (4 < (s7 = u3[i7]))
                o7[n8++] = 65533, r6 += s7 - 1;
              else {
                for (i7 &= 2 === s7 ? 31 : 3 === s7 ? 15 : 7; 1 < s7 && r6 < a4; )
                  i7 = i7 << 6 | 63 & e9[r6++], s7--;
                1 < s7 ? o7[n8++] = 65533 : i7 < 65536 ? o7[n8++] = i7 : (i7 -= 65536, o7[n8++] = 55296 | i7 >> 10 & 1023, o7[n8++] = 56320 | 1023 & i7);
              }
            return l6(o7, n8);
          }, r5.utf8border = function(e9, t6) {
            var r6;
            for ((t6 = t6 || e9.length) > e9.length && (t6 = e9.length), r6 = t6 - 1; 0 <= r6 && 128 == (192 & e9[r6]); )
              r6--;
            return r6 < 0 ? t6 : 0 === r6 ? t6 : r6 + u3[e9[r6]] > t6 ? r6 : t6;
          };
        }, { "./common": 41 }], 43: [function(e8, t5, r5) {
          "use strict";
          t5.exports = function(e9, t6, r6, n7) {
            for (var i6 = 65535 & e9 | 0, s6 = e9 >>> 16 & 65535 | 0, a4 = 0; 0 !== r6; ) {
              for (r6 -= a4 = 2e3 < r6 ? 2e3 : r6; s6 = s6 + (i6 = i6 + t6[n7++] | 0) | 0, --a4; )
                ;
              i6 %= 65521, s6 %= 65521;
            }
            return i6 | s6 << 16 | 0;
          };
        }, {}], 44: [function(e8, t5, r5) {
          "use strict";
          t5.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
        }, {}], 45: [function(e8, t5, r5) {
          "use strict";
          var o7 = function() {
            for (var e9, t6 = [], r6 = 0; r6 < 256; r6++) {
              e9 = r6;
              for (var n7 = 0; n7 < 8; n7++)
                e9 = 1 & e9 ? 3988292384 ^ e9 >>> 1 : e9 >>> 1;
              t6[r6] = e9;
            }
            return t6;
          }();
          t5.exports = function(e9, t6, r6, n7) {
            var i6 = o7, s6 = n7 + r6;
            e9 ^= -1;
            for (var a4 = n7; a4 < s6; a4++)
              e9 = e9 >>> 8 ^ i6[255 & (e9 ^ t6[a4])];
            return -1 ^ e9;
          };
        }, {}], 46: [function(e8, t5, r5) {
          "use strict";
          var h4, c4 = e8("../utils/common"), u3 = e8("./trees"), d4 = e8("./adler32"), p3 = e8("./crc32"), n7 = e8("./messages"), l6 = 0, f3 = 4, m3 = 0, _3 = -2, g3 = -1, b3 = 4, i6 = 2, v3 = 8, y3 = 9, s6 = 286, a4 = 30, o7 = 19, w3 = 2 * s6 + 1, k3 = 15, x3 = 3, S4 = 258, z2 = S4 + x3 + 1, C3 = 42, E3 = 113, A3 = 1, I3 = 2, O = 3, B = 4;
          function R3(e9, t6) {
            return e9.msg = n7[t6], t6;
          }
          function T3(e9) {
            return (e9 << 1) - (4 < e9 ? 9 : 0);
          }
          function D(e9) {
            for (var t6 = e9.length; 0 <= --t6; )
              e9[t6] = 0;
          }
          function F(e9) {
            var t6 = e9.state, r6 = t6.pending;
            r6 > e9.avail_out && (r6 = e9.avail_out), 0 !== r6 && (c4.arraySet(e9.output, t6.pending_buf, t6.pending_out, r6, e9.next_out), e9.next_out += r6, t6.pending_out += r6, e9.total_out += r6, e9.avail_out -= r6, t6.pending -= r6, 0 === t6.pending && (t6.pending_out = 0));
          }
          function N3(e9, t6) {
            u3._tr_flush_block(e9, 0 <= e9.block_start ? e9.block_start : -1, e9.strstart - e9.block_start, t6), e9.block_start = e9.strstart, F(e9.strm);
          }
          function U(e9, t6) {
            e9.pending_buf[e9.pending++] = t6;
          }
          function P3(e9, t6) {
            e9.pending_buf[e9.pending++] = t6 >>> 8 & 255, e9.pending_buf[e9.pending++] = 255 & t6;
          }
          function L2(e9, t6) {
            var r6, n8, i7 = e9.max_chain_length, s7 = e9.strstart, a5 = e9.prev_length, o8 = e9.nice_match, h5 = e9.strstart > e9.w_size - z2 ? e9.strstart - (e9.w_size - z2) : 0, u4 = e9.window, l7 = e9.w_mask, f4 = e9.prev, c5 = e9.strstart + S4, d5 = u4[s7 + a5 - 1], p4 = u4[s7 + a5];
            e9.prev_length >= e9.good_match && (i7 >>= 2), o8 > e9.lookahead && (o8 = e9.lookahead);
            do {
              if (u4[(r6 = t6) + a5] === p4 && u4[r6 + a5 - 1] === d5 && u4[r6] === u4[s7] && u4[++r6] === u4[s7 + 1]) {
                s7 += 2, r6++;
                do {
                } while (u4[++s7] === u4[++r6] && u4[++s7] === u4[++r6] && u4[++s7] === u4[++r6] && u4[++s7] === u4[++r6] && u4[++s7] === u4[++r6] && u4[++s7] === u4[++r6] && u4[++s7] === u4[++r6] && u4[++s7] === u4[++r6] && s7 < c5);
                if (n8 = S4 - (c5 - s7), s7 = c5 - S4, a5 < n8) {
                  if (e9.match_start = t6, o8 <= (a5 = n8))
                    break;
                  d5 = u4[s7 + a5 - 1], p4 = u4[s7 + a5];
                }
              }
            } while ((t6 = f4[t6 & l7]) > h5 && 0 != --i7);
            return a5 <= e9.lookahead ? a5 : e9.lookahead;
          }
          function j(e9) {
            var t6, r6, n8, i7, s7, a5, o8, h5, u4, l7, f4 = e9.w_size;
            do {
              if (i7 = e9.window_size - e9.lookahead - e9.strstart, e9.strstart >= f4 + (f4 - z2)) {
                for (c4.arraySet(e9.window, e9.window, f4, f4, 0), e9.match_start -= f4, e9.strstart -= f4, e9.block_start -= f4, t6 = r6 = e9.hash_size; n8 = e9.head[--t6], e9.head[t6] = f4 <= n8 ? n8 - f4 : 0, --r6; )
                  ;
                for (t6 = r6 = f4; n8 = e9.prev[--t6], e9.prev[t6] = f4 <= n8 ? n8 - f4 : 0, --r6; )
                  ;
                i7 += f4;
              }
              if (0 === e9.strm.avail_in)
                break;
              if (a5 = e9.strm, o8 = e9.window, h5 = e9.strstart + e9.lookahead, u4 = i7, l7 = void 0, l7 = a5.avail_in, u4 < l7 && (l7 = u4), r6 = 0 === l7 ? 0 : (a5.avail_in -= l7, c4.arraySet(o8, a5.input, a5.next_in, l7, h5), 1 === a5.state.wrap ? a5.adler = d4(a5.adler, o8, l7, h5) : 2 === a5.state.wrap && (a5.adler = p3(a5.adler, o8, l7, h5)), a5.next_in += l7, a5.total_in += l7, l7), e9.lookahead += r6, e9.lookahead + e9.insert >= x3)
                for (s7 = e9.strstart - e9.insert, e9.ins_h = e9.window[s7], e9.ins_h = (e9.ins_h << e9.hash_shift ^ e9.window[s7 + 1]) & e9.hash_mask; e9.insert && (e9.ins_h = (e9.ins_h << e9.hash_shift ^ e9.window[s7 + x3 - 1]) & e9.hash_mask, e9.prev[s7 & e9.w_mask] = e9.head[e9.ins_h], e9.head[e9.ins_h] = s7, s7++, e9.insert--, !(e9.lookahead + e9.insert < x3)); )
                  ;
            } while (e9.lookahead < z2 && 0 !== e9.strm.avail_in);
          }
          function Z2(e9, t6) {
            for (var r6, n8; ; ) {
              if (e9.lookahead < z2) {
                if (j(e9), e9.lookahead < z2 && t6 === l6)
                  return A3;
                if (0 === e9.lookahead)
                  break;
              }
              if (r6 = 0, e9.lookahead >= x3 && (e9.ins_h = (e9.ins_h << e9.hash_shift ^ e9.window[e9.strstart + x3 - 1]) & e9.hash_mask, r6 = e9.prev[e9.strstart & e9.w_mask] = e9.head[e9.ins_h], e9.head[e9.ins_h] = e9.strstart), 0 !== r6 && e9.strstart - r6 <= e9.w_size - z2 && (e9.match_length = L2(e9, r6)), e9.match_length >= x3)
                if (n8 = u3._tr_tally(e9, e9.strstart - e9.match_start, e9.match_length - x3), e9.lookahead -= e9.match_length, e9.match_length <= e9.max_lazy_match && e9.lookahead >= x3) {
                  for (e9.match_length--; e9.strstart++, e9.ins_h = (e9.ins_h << e9.hash_shift ^ e9.window[e9.strstart + x3 - 1]) & e9.hash_mask, r6 = e9.prev[e9.strstart & e9.w_mask] = e9.head[e9.ins_h], e9.head[e9.ins_h] = e9.strstart, 0 != --e9.match_length; )
                    ;
                  e9.strstart++;
                } else
                  e9.strstart += e9.match_length, e9.match_length = 0, e9.ins_h = e9.window[e9.strstart], e9.ins_h = (e9.ins_h << e9.hash_shift ^ e9.window[e9.strstart + 1]) & e9.hash_mask;
              else
                n8 = u3._tr_tally(e9, 0, e9.window[e9.strstart]), e9.lookahead--, e9.strstart++;
              if (n8 && (N3(e9, false), 0 === e9.strm.avail_out))
                return A3;
            }
            return e9.insert = e9.strstart < x3 - 1 ? e9.strstart : x3 - 1, t6 === f3 ? (N3(e9, true), 0 === e9.strm.avail_out ? O : B) : e9.last_lit && (N3(e9, false), 0 === e9.strm.avail_out) ? A3 : I3;
          }
          function W(e9, t6) {
            for (var r6, n8, i7; ; ) {
              if (e9.lookahead < z2) {
                if (j(e9), e9.lookahead < z2 && t6 === l6)
                  return A3;
                if (0 === e9.lookahead)
                  break;
              }
              if (r6 = 0, e9.lookahead >= x3 && (e9.ins_h = (e9.ins_h << e9.hash_shift ^ e9.window[e9.strstart + x3 - 1]) & e9.hash_mask, r6 = e9.prev[e9.strstart & e9.w_mask] = e9.head[e9.ins_h], e9.head[e9.ins_h] = e9.strstart), e9.prev_length = e9.match_length, e9.prev_match = e9.match_start, e9.match_length = x3 - 1, 0 !== r6 && e9.prev_length < e9.max_lazy_match && e9.strstart - r6 <= e9.w_size - z2 && (e9.match_length = L2(e9, r6), e9.match_length <= 5 && (1 === e9.strategy || e9.match_length === x3 && 4096 < e9.strstart - e9.match_start) && (e9.match_length = x3 - 1)), e9.prev_length >= x3 && e9.match_length <= e9.prev_length) {
                for (i7 = e9.strstart + e9.lookahead - x3, n8 = u3._tr_tally(e9, e9.strstart - 1 - e9.prev_match, e9.prev_length - x3), e9.lookahead -= e9.prev_length - 1, e9.prev_length -= 2; ++e9.strstart <= i7 && (e9.ins_h = (e9.ins_h << e9.hash_shift ^ e9.window[e9.strstart + x3 - 1]) & e9.hash_mask, r6 = e9.prev[e9.strstart & e9.w_mask] = e9.head[e9.ins_h], e9.head[e9.ins_h] = e9.strstart), 0 != --e9.prev_length; )
                  ;
                if (e9.match_available = 0, e9.match_length = x3 - 1, e9.strstart++, n8 && (N3(e9, false), 0 === e9.strm.avail_out))
                  return A3;
              } else if (e9.match_available) {
                if ((n8 = u3._tr_tally(e9, 0, e9.window[e9.strstart - 1])) && N3(e9, false), e9.strstart++, e9.lookahead--, 0 === e9.strm.avail_out)
                  return A3;
              } else
                e9.match_available = 1, e9.strstart++, e9.lookahead--;
            }
            return e9.match_available && (n8 = u3._tr_tally(e9, 0, e9.window[e9.strstart - 1]), e9.match_available = 0), e9.insert = e9.strstart < x3 - 1 ? e9.strstart : x3 - 1, t6 === f3 ? (N3(e9, true), 0 === e9.strm.avail_out ? O : B) : e9.last_lit && (N3(e9, false), 0 === e9.strm.avail_out) ? A3 : I3;
          }
          function M3(e9, t6, r6, n8, i7) {
            this.good_length = e9, this.max_lazy = t6, this.nice_length = r6, this.max_chain = n8, this.func = i7;
          }
          function H3() {
            this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = v3, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new c4.Buf16(2 * w3), this.dyn_dtree = new c4.Buf16(2 * (2 * a4 + 1)), this.bl_tree = new c4.Buf16(2 * (2 * o7 + 1)), D(this.dyn_ltree), D(this.dyn_dtree), D(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new c4.Buf16(k3 + 1), this.heap = new c4.Buf16(2 * s6 + 1), D(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new c4.Buf16(2 * s6 + 1), D(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
          }
          function G(e9) {
            var t6;
            return e9 && e9.state ? (e9.total_in = e9.total_out = 0, e9.data_type = i6, (t6 = e9.state).pending = 0, t6.pending_out = 0, t6.wrap < 0 && (t6.wrap = -t6.wrap), t6.status = t6.wrap ? C3 : E3, e9.adler = 2 === t6.wrap ? 0 : 1, t6.last_flush = l6, u3._tr_init(t6), m3) : R3(e9, _3);
          }
          function K(e9) {
            var t6 = G(e9);
            return t6 === m3 && function(e10) {
              e10.window_size = 2 * e10.w_size, D(e10.head), e10.max_lazy_match = h4[e10.level].max_lazy, e10.good_match = h4[e10.level].good_length, e10.nice_match = h4[e10.level].nice_length, e10.max_chain_length = h4[e10.level].max_chain, e10.strstart = 0, e10.block_start = 0, e10.lookahead = 0, e10.insert = 0, e10.match_length = e10.prev_length = x3 - 1, e10.match_available = 0, e10.ins_h = 0;
            }(e9.state), t6;
          }
          function Y(e9, t6, r6, n8, i7, s7) {
            if (!e9)
              return _3;
            var a5 = 1;
            if (t6 === g3 && (t6 = 6), n8 < 0 ? (a5 = 0, n8 = -n8) : 15 < n8 && (a5 = 2, n8 -= 16), i7 < 1 || y3 < i7 || r6 !== v3 || n8 < 8 || 15 < n8 || t6 < 0 || 9 < t6 || s7 < 0 || b3 < s7)
              return R3(e9, _3);
            8 === n8 && (n8 = 9);
            var o8 = new H3();
            return (e9.state = o8).strm = e9, o8.wrap = a5, o8.gzhead = null, o8.w_bits = n8, o8.w_size = 1 << o8.w_bits, o8.w_mask = o8.w_size - 1, o8.hash_bits = i7 + 7, o8.hash_size = 1 << o8.hash_bits, o8.hash_mask = o8.hash_size - 1, o8.hash_shift = ~~((o8.hash_bits + x3 - 1) / x3), o8.window = new c4.Buf8(2 * o8.w_size), o8.head = new c4.Buf16(o8.hash_size), o8.prev = new c4.Buf16(o8.w_size), o8.lit_bufsize = 1 << i7 + 6, o8.pending_buf_size = 4 * o8.lit_bufsize, o8.pending_buf = new c4.Buf8(o8.pending_buf_size), o8.d_buf = 1 * o8.lit_bufsize, o8.l_buf = 3 * o8.lit_bufsize, o8.level = t6, o8.strategy = s7, o8.method = r6, K(e9);
          }
          h4 = [new M3(0, 0, 0, 0, function(e9, t6) {
            var r6 = 65535;
            for (r6 > e9.pending_buf_size - 5 && (r6 = e9.pending_buf_size - 5); ; ) {
              if (e9.lookahead <= 1) {
                if (j(e9), 0 === e9.lookahead && t6 === l6)
                  return A3;
                if (0 === e9.lookahead)
                  break;
              }
              e9.strstart += e9.lookahead, e9.lookahead = 0;
              var n8 = e9.block_start + r6;
              if ((0 === e9.strstart || e9.strstart >= n8) && (e9.lookahead = e9.strstart - n8, e9.strstart = n8, N3(e9, false), 0 === e9.strm.avail_out))
                return A3;
              if (e9.strstart - e9.block_start >= e9.w_size - z2 && (N3(e9, false), 0 === e9.strm.avail_out))
                return A3;
            }
            return e9.insert = 0, t6 === f3 ? (N3(e9, true), 0 === e9.strm.avail_out ? O : B) : (e9.strstart > e9.block_start && (N3(e9, false), e9.strm.avail_out), A3);
          }), new M3(4, 4, 8, 4, Z2), new M3(4, 5, 16, 8, Z2), new M3(4, 6, 32, 32, Z2), new M3(4, 4, 16, 16, W), new M3(8, 16, 32, 32, W), new M3(8, 16, 128, 128, W), new M3(8, 32, 128, 256, W), new M3(32, 128, 258, 1024, W), new M3(32, 258, 258, 4096, W)], r5.deflateInit = function(e9, t6) {
            return Y(e9, t6, v3, 15, 8, 0);
          }, r5.deflateInit2 = Y, r5.deflateReset = K, r5.deflateResetKeep = G, r5.deflateSetHeader = function(e9, t6) {
            return e9 && e9.state ? 2 !== e9.state.wrap ? _3 : (e9.state.gzhead = t6, m3) : _3;
          }, r5.deflate = function(e9, t6) {
            var r6, n8, i7, s7;
            if (!e9 || !e9.state || 5 < t6 || t6 < 0)
              return e9 ? R3(e9, _3) : _3;
            if (n8 = e9.state, !e9.output || !e9.input && 0 !== e9.avail_in || 666 === n8.status && t6 !== f3)
              return R3(e9, 0 === e9.avail_out ? -5 : _3);
            if (n8.strm = e9, r6 = n8.last_flush, n8.last_flush = t6, n8.status === C3)
              if (2 === n8.wrap)
                e9.adler = 0, U(n8, 31), U(n8, 139), U(n8, 8), n8.gzhead ? (U(n8, (n8.gzhead.text ? 1 : 0) + (n8.gzhead.hcrc ? 2 : 0) + (n8.gzhead.extra ? 4 : 0) + (n8.gzhead.name ? 8 : 0) + (n8.gzhead.comment ? 16 : 0)), U(n8, 255 & n8.gzhead.time), U(n8, n8.gzhead.time >> 8 & 255), U(n8, n8.gzhead.time >> 16 & 255), U(n8, n8.gzhead.time >> 24 & 255), U(n8, 9 === n8.level ? 2 : 2 <= n8.strategy || n8.level < 2 ? 4 : 0), U(n8, 255 & n8.gzhead.os), n8.gzhead.extra && n8.gzhead.extra.length && (U(n8, 255 & n8.gzhead.extra.length), U(n8, n8.gzhead.extra.length >> 8 & 255)), n8.gzhead.hcrc && (e9.adler = p3(e9.adler, n8.pending_buf, n8.pending, 0)), n8.gzindex = 0, n8.status = 69) : (U(n8, 0), U(n8, 0), U(n8, 0), U(n8, 0), U(n8, 0), U(n8, 9 === n8.level ? 2 : 2 <= n8.strategy || n8.level < 2 ? 4 : 0), U(n8, 3), n8.status = E3);
              else {
                var a5 = v3 + (n8.w_bits - 8 << 4) << 8;
                a5 |= (2 <= n8.strategy || n8.level < 2 ? 0 : n8.level < 6 ? 1 : 6 === n8.level ? 2 : 3) << 6, 0 !== n8.strstart && (a5 |= 32), a5 += 31 - a5 % 31, n8.status = E3, P3(n8, a5), 0 !== n8.strstart && (P3(n8, e9.adler >>> 16), P3(n8, 65535 & e9.adler)), e9.adler = 1;
              }
            if (69 === n8.status)
              if (n8.gzhead.extra) {
                for (i7 = n8.pending; n8.gzindex < (65535 & n8.gzhead.extra.length) && (n8.pending !== n8.pending_buf_size || (n8.gzhead.hcrc && n8.pending > i7 && (e9.adler = p3(e9.adler, n8.pending_buf, n8.pending - i7, i7)), F(e9), i7 = n8.pending, n8.pending !== n8.pending_buf_size)); )
                  U(n8, 255 & n8.gzhead.extra[n8.gzindex]), n8.gzindex++;
                n8.gzhead.hcrc && n8.pending > i7 && (e9.adler = p3(e9.adler, n8.pending_buf, n8.pending - i7, i7)), n8.gzindex === n8.gzhead.extra.length && (n8.gzindex = 0, n8.status = 73);
              } else
                n8.status = 73;
            if (73 === n8.status)
              if (n8.gzhead.name) {
                i7 = n8.pending;
                do {
                  if (n8.pending === n8.pending_buf_size && (n8.gzhead.hcrc && n8.pending > i7 && (e9.adler = p3(e9.adler, n8.pending_buf, n8.pending - i7, i7)), F(e9), i7 = n8.pending, n8.pending === n8.pending_buf_size)) {
                    s7 = 1;
                    break;
                  }
                  s7 = n8.gzindex < n8.gzhead.name.length ? 255 & n8.gzhead.name.charCodeAt(n8.gzindex++) : 0, U(n8, s7);
                } while (0 !== s7);
                n8.gzhead.hcrc && n8.pending > i7 && (e9.adler = p3(e9.adler, n8.pending_buf, n8.pending - i7, i7)), 0 === s7 && (n8.gzindex = 0, n8.status = 91);
              } else
                n8.status = 91;
            if (91 === n8.status)
              if (n8.gzhead.comment) {
                i7 = n8.pending;
                do {
                  if (n8.pending === n8.pending_buf_size && (n8.gzhead.hcrc && n8.pending > i7 && (e9.adler = p3(e9.adler, n8.pending_buf, n8.pending - i7, i7)), F(e9), i7 = n8.pending, n8.pending === n8.pending_buf_size)) {
                    s7 = 1;
                    break;
                  }
                  s7 = n8.gzindex < n8.gzhead.comment.length ? 255 & n8.gzhead.comment.charCodeAt(n8.gzindex++) : 0, U(n8, s7);
                } while (0 !== s7);
                n8.gzhead.hcrc && n8.pending > i7 && (e9.adler = p3(e9.adler, n8.pending_buf, n8.pending - i7, i7)), 0 === s7 && (n8.status = 103);
              } else
                n8.status = 103;
            if (103 === n8.status && (n8.gzhead.hcrc ? (n8.pending + 2 > n8.pending_buf_size && F(e9), n8.pending + 2 <= n8.pending_buf_size && (U(n8, 255 & e9.adler), U(n8, e9.adler >> 8 & 255), e9.adler = 0, n8.status = E3)) : n8.status = E3), 0 !== n8.pending) {
              if (F(e9), 0 === e9.avail_out)
                return n8.last_flush = -1, m3;
            } else if (0 === e9.avail_in && T3(t6) <= T3(r6) && t6 !== f3)
              return R3(e9, -5);
            if (666 === n8.status && 0 !== e9.avail_in)
              return R3(e9, -5);
            if (0 !== e9.avail_in || 0 !== n8.lookahead || t6 !== l6 && 666 !== n8.status) {
              var o8 = 2 === n8.strategy ? function(e10, t7) {
                for (var r7; ; ) {
                  if (0 === e10.lookahead && (j(e10), 0 === e10.lookahead)) {
                    if (t7 === l6)
                      return A3;
                    break;
                  }
                  if (e10.match_length = 0, r7 = u3._tr_tally(e10, 0, e10.window[e10.strstart]), e10.lookahead--, e10.strstart++, r7 && (N3(e10, false), 0 === e10.strm.avail_out))
                    return A3;
                }
                return e10.insert = 0, t7 === f3 ? (N3(e10, true), 0 === e10.strm.avail_out ? O : B) : e10.last_lit && (N3(e10, false), 0 === e10.strm.avail_out) ? A3 : I3;
              }(n8, t6) : 3 === n8.strategy ? function(e10, t7) {
                for (var r7, n9, i8, s8, a6 = e10.window; ; ) {
                  if (e10.lookahead <= S4) {
                    if (j(e10), e10.lookahead <= S4 && t7 === l6)
                      return A3;
                    if (0 === e10.lookahead)
                      break;
                  }
                  if (e10.match_length = 0, e10.lookahead >= x3 && 0 < e10.strstart && (n9 = a6[i8 = e10.strstart - 1]) === a6[++i8] && n9 === a6[++i8] && n9 === a6[++i8]) {
                    s8 = e10.strstart + S4;
                    do {
                    } while (n9 === a6[++i8] && n9 === a6[++i8] && n9 === a6[++i8] && n9 === a6[++i8] && n9 === a6[++i8] && n9 === a6[++i8] && n9 === a6[++i8] && n9 === a6[++i8] && i8 < s8);
                    e10.match_length = S4 - (s8 - i8), e10.match_length > e10.lookahead && (e10.match_length = e10.lookahead);
                  }
                  if (e10.match_length >= x3 ? (r7 = u3._tr_tally(e10, 1, e10.match_length - x3), e10.lookahead -= e10.match_length, e10.strstart += e10.match_length, e10.match_length = 0) : (r7 = u3._tr_tally(e10, 0, e10.window[e10.strstart]), e10.lookahead--, e10.strstart++), r7 && (N3(e10, false), 0 === e10.strm.avail_out))
                    return A3;
                }
                return e10.insert = 0, t7 === f3 ? (N3(e10, true), 0 === e10.strm.avail_out ? O : B) : e10.last_lit && (N3(e10, false), 0 === e10.strm.avail_out) ? A3 : I3;
              }(n8, t6) : h4[n8.level].func(n8, t6);
              if (o8 !== O && o8 !== B || (n8.status = 666), o8 === A3 || o8 === O)
                return 0 === e9.avail_out && (n8.last_flush = -1), m3;
              if (o8 === I3 && (1 === t6 ? u3._tr_align(n8) : 5 !== t6 && (u3._tr_stored_block(n8, 0, 0, false), 3 === t6 && (D(n8.head), 0 === n8.lookahead && (n8.strstart = 0, n8.block_start = 0, n8.insert = 0))), F(e9), 0 === e9.avail_out))
                return n8.last_flush = -1, m3;
            }
            return t6 !== f3 ? m3 : n8.wrap <= 0 ? 1 : (2 === n8.wrap ? (U(n8, 255 & e9.adler), U(n8, e9.adler >> 8 & 255), U(n8, e9.adler >> 16 & 255), U(n8, e9.adler >> 24 & 255), U(n8, 255 & e9.total_in), U(n8, e9.total_in >> 8 & 255), U(n8, e9.total_in >> 16 & 255), U(n8, e9.total_in >> 24 & 255)) : (P3(n8, e9.adler >>> 16), P3(n8, 65535 & e9.adler)), F(e9), 0 < n8.wrap && (n8.wrap = -n8.wrap), 0 !== n8.pending ? m3 : 1);
          }, r5.deflateEnd = function(e9) {
            var t6;
            return e9 && e9.state ? (t6 = e9.state.status) !== C3 && 69 !== t6 && 73 !== t6 && 91 !== t6 && 103 !== t6 && t6 !== E3 && 666 !== t6 ? R3(e9, _3) : (e9.state = null, t6 === E3 ? R3(e9, -3) : m3) : _3;
          }, r5.deflateSetDictionary = function(e9, t6) {
            var r6, n8, i7, s7, a5, o8, h5, u4, l7 = t6.length;
            if (!e9 || !e9.state)
              return _3;
            if (2 === (s7 = (r6 = e9.state).wrap) || 1 === s7 && r6.status !== C3 || r6.lookahead)
              return _3;
            for (1 === s7 && (e9.adler = d4(e9.adler, t6, l7, 0)), r6.wrap = 0, l7 >= r6.w_size && (0 === s7 && (D(r6.head), r6.strstart = 0, r6.block_start = 0, r6.insert = 0), u4 = new c4.Buf8(r6.w_size), c4.arraySet(u4, t6, l7 - r6.w_size, r6.w_size, 0), t6 = u4, l7 = r6.w_size), a5 = e9.avail_in, o8 = e9.next_in, h5 = e9.input, e9.avail_in = l7, e9.next_in = 0, e9.input = t6, j(r6); r6.lookahead >= x3; ) {
              for (n8 = r6.strstart, i7 = r6.lookahead - (x3 - 1); r6.ins_h = (r6.ins_h << r6.hash_shift ^ r6.window[n8 + x3 - 1]) & r6.hash_mask, r6.prev[n8 & r6.w_mask] = r6.head[r6.ins_h], r6.head[r6.ins_h] = n8, n8++, --i7; )
                ;
              r6.strstart = n8, r6.lookahead = x3 - 1, j(r6);
            }
            return r6.strstart += r6.lookahead, r6.block_start = r6.strstart, r6.insert = r6.lookahead, r6.lookahead = 0, r6.match_length = r6.prev_length = x3 - 1, r6.match_available = 0, e9.next_in = o8, e9.input = h5, e9.avail_in = a5, r6.wrap = s7, m3;
          }, r5.deflateInfo = "pako deflate (from Nodeca project)";
        }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(e8, t5, r5) {
          "use strict";
          t5.exports = function() {
            this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = false;
          };
        }, {}], 48: [function(e8, t5, r5) {
          "use strict";
          t5.exports = function(e9, t6) {
            var r6, n7, i6, s6, a4, o7, h4, u3, l6, f3, c4, d4, p3, m3, _3, g3, b3, v3, y3, w3, k3, x3, S4, z2, C3;
            r6 = e9.state, n7 = e9.next_in, z2 = e9.input, i6 = n7 + (e9.avail_in - 5), s6 = e9.next_out, C3 = e9.output, a4 = s6 - (t6 - e9.avail_out), o7 = s6 + (e9.avail_out - 257), h4 = r6.dmax, u3 = r6.wsize, l6 = r6.whave, f3 = r6.wnext, c4 = r6.window, d4 = r6.hold, p3 = r6.bits, m3 = r6.lencode, _3 = r6.distcode, g3 = (1 << r6.lenbits) - 1, b3 = (1 << r6.distbits) - 1;
            e:
              do {
                p3 < 15 && (d4 += z2[n7++] << p3, p3 += 8, d4 += z2[n7++] << p3, p3 += 8), v3 = m3[d4 & g3];
                t:
                  for (; ; ) {
                    if (d4 >>>= y3 = v3 >>> 24, p3 -= y3, 0 === (y3 = v3 >>> 16 & 255))
                      C3[s6++] = 65535 & v3;
                    else {
                      if (!(16 & y3)) {
                        if (0 == (64 & y3)) {
                          v3 = m3[(65535 & v3) + (d4 & (1 << y3) - 1)];
                          continue t;
                        }
                        if (32 & y3) {
                          r6.mode = 12;
                          break e;
                        }
                        e9.msg = "invalid literal/length code", r6.mode = 30;
                        break e;
                      }
                      w3 = 65535 & v3, (y3 &= 15) && (p3 < y3 && (d4 += z2[n7++] << p3, p3 += 8), w3 += d4 & (1 << y3) - 1, d4 >>>= y3, p3 -= y3), p3 < 15 && (d4 += z2[n7++] << p3, p3 += 8, d4 += z2[n7++] << p3, p3 += 8), v3 = _3[d4 & b3];
                      r:
                        for (; ; ) {
                          if (d4 >>>= y3 = v3 >>> 24, p3 -= y3, !(16 & (y3 = v3 >>> 16 & 255))) {
                            if (0 == (64 & y3)) {
                              v3 = _3[(65535 & v3) + (d4 & (1 << y3) - 1)];
                              continue r;
                            }
                            e9.msg = "invalid distance code", r6.mode = 30;
                            break e;
                          }
                          if (k3 = 65535 & v3, p3 < (y3 &= 15) && (d4 += z2[n7++] << p3, (p3 += 8) < y3 && (d4 += z2[n7++] << p3, p3 += 8)), h4 < (k3 += d4 & (1 << y3) - 1)) {
                            e9.msg = "invalid distance too far back", r6.mode = 30;
                            break e;
                          }
                          if (d4 >>>= y3, p3 -= y3, (y3 = s6 - a4) < k3) {
                            if (l6 < (y3 = k3 - y3) && r6.sane) {
                              e9.msg = "invalid distance too far back", r6.mode = 30;
                              break e;
                            }
                            if (S4 = c4, (x3 = 0) === f3) {
                              if (x3 += u3 - y3, y3 < w3) {
                                for (w3 -= y3; C3[s6++] = c4[x3++], --y3; )
                                  ;
                                x3 = s6 - k3, S4 = C3;
                              }
                            } else if (f3 < y3) {
                              if (x3 += u3 + f3 - y3, (y3 -= f3) < w3) {
                                for (w3 -= y3; C3[s6++] = c4[x3++], --y3; )
                                  ;
                                if (x3 = 0, f3 < w3) {
                                  for (w3 -= y3 = f3; C3[s6++] = c4[x3++], --y3; )
                                    ;
                                  x3 = s6 - k3, S4 = C3;
                                }
                              }
                            } else if (x3 += f3 - y3, y3 < w3) {
                              for (w3 -= y3; C3[s6++] = c4[x3++], --y3; )
                                ;
                              x3 = s6 - k3, S4 = C3;
                            }
                            for (; 2 < w3; )
                              C3[s6++] = S4[x3++], C3[s6++] = S4[x3++], C3[s6++] = S4[x3++], w3 -= 3;
                            w3 && (C3[s6++] = S4[x3++], 1 < w3 && (C3[s6++] = S4[x3++]));
                          } else {
                            for (x3 = s6 - k3; C3[s6++] = C3[x3++], C3[s6++] = C3[x3++], C3[s6++] = C3[x3++], 2 < (w3 -= 3); )
                              ;
                            w3 && (C3[s6++] = C3[x3++], 1 < w3 && (C3[s6++] = C3[x3++]));
                          }
                          break;
                        }
                    }
                    break;
                  }
              } while (n7 < i6 && s6 < o7);
            n7 -= w3 = p3 >> 3, d4 &= (1 << (p3 -= w3 << 3)) - 1, e9.next_in = n7, e9.next_out = s6, e9.avail_in = n7 < i6 ? i6 - n7 + 5 : 5 - (n7 - i6), e9.avail_out = s6 < o7 ? o7 - s6 + 257 : 257 - (s6 - o7), r6.hold = d4, r6.bits = p3;
          };
        }, {}], 49: [function(e8, t5, r5) {
          "use strict";
          var I3 = e8("../utils/common"), O = e8("./adler32"), B = e8("./crc32"), R3 = e8("./inffast"), T3 = e8("./inftrees"), D = 1, F = 2, N3 = 0, U = -2, P3 = 1, n7 = 852, i6 = 592;
          function L2(e9) {
            return (e9 >>> 24 & 255) + (e9 >>> 8 & 65280) + ((65280 & e9) << 8) + ((255 & e9) << 24);
          }
          function s6() {
            this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new I3.Buf16(320), this.work = new I3.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
          }
          function a4(e9) {
            var t6;
            return e9 && e9.state ? (t6 = e9.state, e9.total_in = e9.total_out = t6.total = 0, e9.msg = "", t6.wrap && (e9.adler = 1 & t6.wrap), t6.mode = P3, t6.last = 0, t6.havedict = 0, t6.dmax = 32768, t6.head = null, t6.hold = 0, t6.bits = 0, t6.lencode = t6.lendyn = new I3.Buf32(n7), t6.distcode = t6.distdyn = new I3.Buf32(i6), t6.sane = 1, t6.back = -1, N3) : U;
          }
          function o7(e9) {
            var t6;
            return e9 && e9.state ? ((t6 = e9.state).wsize = 0, t6.whave = 0, t6.wnext = 0, a4(e9)) : U;
          }
          function h4(e9, t6) {
            var r6, n8;
            return e9 && e9.state ? (n8 = e9.state, t6 < 0 ? (r6 = 0, t6 = -t6) : (r6 = 1 + (t6 >> 4), t6 < 48 && (t6 &= 15)), t6 && (t6 < 8 || 15 < t6) ? U : (null !== n8.window && n8.wbits !== t6 && (n8.window = null), n8.wrap = r6, n8.wbits = t6, o7(e9))) : U;
          }
          function u3(e9, t6) {
            var r6, n8;
            return e9 ? (n8 = new s6(), (e9.state = n8).window = null, (r6 = h4(e9, t6)) !== N3 && (e9.state = null), r6) : U;
          }
          var l6, f3, c4 = true;
          function j(e9) {
            if (c4) {
              var t6;
              for (l6 = new I3.Buf32(512), f3 = new I3.Buf32(32), t6 = 0; t6 < 144; )
                e9.lens[t6++] = 8;
              for (; t6 < 256; )
                e9.lens[t6++] = 9;
              for (; t6 < 280; )
                e9.lens[t6++] = 7;
              for (; t6 < 288; )
                e9.lens[t6++] = 8;
              for (T3(D, e9.lens, 0, 288, l6, 0, e9.work, { bits: 9 }), t6 = 0; t6 < 32; )
                e9.lens[t6++] = 5;
              T3(F, e9.lens, 0, 32, f3, 0, e9.work, { bits: 5 }), c4 = false;
            }
            e9.lencode = l6, e9.lenbits = 9, e9.distcode = f3, e9.distbits = 5;
          }
          function Z2(e9, t6, r6, n8) {
            var i7, s7 = e9.state;
            return null === s7.window && (s7.wsize = 1 << s7.wbits, s7.wnext = 0, s7.whave = 0, s7.window = new I3.Buf8(s7.wsize)), n8 >= s7.wsize ? (I3.arraySet(s7.window, t6, r6 - s7.wsize, s7.wsize, 0), s7.wnext = 0, s7.whave = s7.wsize) : (n8 < (i7 = s7.wsize - s7.wnext) && (i7 = n8), I3.arraySet(s7.window, t6, r6 - n8, i7, s7.wnext), (n8 -= i7) ? (I3.arraySet(s7.window, t6, r6 - n8, n8, 0), s7.wnext = n8, s7.whave = s7.wsize) : (s7.wnext += i7, s7.wnext === s7.wsize && (s7.wnext = 0), s7.whave < s7.wsize && (s7.whave += i7))), 0;
          }
          r5.inflateReset = o7, r5.inflateReset2 = h4, r5.inflateResetKeep = a4, r5.inflateInit = function(e9) {
            return u3(e9, 15);
          }, r5.inflateInit2 = u3, r5.inflate = function(e9, t6) {
            var r6, n8, i7, s7, a5, o8, h5, u4, l7, f4, c5, d4, p3, m3, _3, g3, b3, v3, y3, w3, k3, x3, S4, z2, C3 = 0, E3 = new I3.Buf8(4), A3 = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
            if (!e9 || !e9.state || !e9.output || !e9.input && 0 !== e9.avail_in)
              return U;
            12 === (r6 = e9.state).mode && (r6.mode = 13), a5 = e9.next_out, i7 = e9.output, h5 = e9.avail_out, s7 = e9.next_in, n8 = e9.input, o8 = e9.avail_in, u4 = r6.hold, l7 = r6.bits, f4 = o8, c5 = h5, x3 = N3;
            e:
              for (; ; )
                switch (r6.mode) {
                  case P3:
                    if (0 === r6.wrap) {
                      r6.mode = 13;
                      break;
                    }
                    for (; l7 < 16; ) {
                      if (0 === o8)
                        break e;
                      o8--, u4 += n8[s7++] << l7, l7 += 8;
                    }
                    if (2 & r6.wrap && 35615 === u4) {
                      E3[r6.check = 0] = 255 & u4, E3[1] = u4 >>> 8 & 255, r6.check = B(r6.check, E3, 2, 0), l7 = u4 = 0, r6.mode = 2;
                      break;
                    }
                    if (r6.flags = 0, r6.head && (r6.head.done = false), !(1 & r6.wrap) || (((255 & u4) << 8) + (u4 >> 8)) % 31) {
                      e9.msg = "incorrect header check", r6.mode = 30;
                      break;
                    }
                    if (8 != (15 & u4)) {
                      e9.msg = "unknown compression method", r6.mode = 30;
                      break;
                    }
                    if (l7 -= 4, k3 = 8 + (15 & (u4 >>>= 4)), 0 === r6.wbits)
                      r6.wbits = k3;
                    else if (k3 > r6.wbits) {
                      e9.msg = "invalid window size", r6.mode = 30;
                      break;
                    }
                    r6.dmax = 1 << k3, e9.adler = r6.check = 1, r6.mode = 512 & u4 ? 10 : 12, l7 = u4 = 0;
                    break;
                  case 2:
                    for (; l7 < 16; ) {
                      if (0 === o8)
                        break e;
                      o8--, u4 += n8[s7++] << l7, l7 += 8;
                    }
                    if (r6.flags = u4, 8 != (255 & r6.flags)) {
                      e9.msg = "unknown compression method", r6.mode = 30;
                      break;
                    }
                    if (57344 & r6.flags) {
                      e9.msg = "unknown header flags set", r6.mode = 30;
                      break;
                    }
                    r6.head && (r6.head.text = u4 >> 8 & 1), 512 & r6.flags && (E3[0] = 255 & u4, E3[1] = u4 >>> 8 & 255, r6.check = B(r6.check, E3, 2, 0)), l7 = u4 = 0, r6.mode = 3;
                  case 3:
                    for (; l7 < 32; ) {
                      if (0 === o8)
                        break e;
                      o8--, u4 += n8[s7++] << l7, l7 += 8;
                    }
                    r6.head && (r6.head.time = u4), 512 & r6.flags && (E3[0] = 255 & u4, E3[1] = u4 >>> 8 & 255, E3[2] = u4 >>> 16 & 255, E3[3] = u4 >>> 24 & 255, r6.check = B(r6.check, E3, 4, 0)), l7 = u4 = 0, r6.mode = 4;
                  case 4:
                    for (; l7 < 16; ) {
                      if (0 === o8)
                        break e;
                      o8--, u4 += n8[s7++] << l7, l7 += 8;
                    }
                    r6.head && (r6.head.xflags = 255 & u4, r6.head.os = u4 >> 8), 512 & r6.flags && (E3[0] = 255 & u4, E3[1] = u4 >>> 8 & 255, r6.check = B(r6.check, E3, 2, 0)), l7 = u4 = 0, r6.mode = 5;
                  case 5:
                    if (1024 & r6.flags) {
                      for (; l7 < 16; ) {
                        if (0 === o8)
                          break e;
                        o8--, u4 += n8[s7++] << l7, l7 += 8;
                      }
                      r6.length = u4, r6.head && (r6.head.extra_len = u4), 512 & r6.flags && (E3[0] = 255 & u4, E3[1] = u4 >>> 8 & 255, r6.check = B(r6.check, E3, 2, 0)), l7 = u4 = 0;
                    } else
                      r6.head && (r6.head.extra = null);
                    r6.mode = 6;
                  case 6:
                    if (1024 & r6.flags && (o8 < (d4 = r6.length) && (d4 = o8), d4 && (r6.head && (k3 = r6.head.extra_len - r6.length, r6.head.extra || (r6.head.extra = new Array(r6.head.extra_len)), I3.arraySet(r6.head.extra, n8, s7, d4, k3)), 512 & r6.flags && (r6.check = B(r6.check, n8, d4, s7)), o8 -= d4, s7 += d4, r6.length -= d4), r6.length))
                      break e;
                    r6.length = 0, r6.mode = 7;
                  case 7:
                    if (2048 & r6.flags) {
                      if (0 === o8)
                        break e;
                      for (d4 = 0; k3 = n8[s7 + d4++], r6.head && k3 && r6.length < 65536 && (r6.head.name += String.fromCharCode(k3)), k3 && d4 < o8; )
                        ;
                      if (512 & r6.flags && (r6.check = B(r6.check, n8, d4, s7)), o8 -= d4, s7 += d4, k3)
                        break e;
                    } else
                      r6.head && (r6.head.name = null);
                    r6.length = 0, r6.mode = 8;
                  case 8:
                    if (4096 & r6.flags) {
                      if (0 === o8)
                        break e;
                      for (d4 = 0; k3 = n8[s7 + d4++], r6.head && k3 && r6.length < 65536 && (r6.head.comment += String.fromCharCode(k3)), k3 && d4 < o8; )
                        ;
                      if (512 & r6.flags && (r6.check = B(r6.check, n8, d4, s7)), o8 -= d4, s7 += d4, k3)
                        break e;
                    } else
                      r6.head && (r6.head.comment = null);
                    r6.mode = 9;
                  case 9:
                    if (512 & r6.flags) {
                      for (; l7 < 16; ) {
                        if (0 === o8)
                          break e;
                        o8--, u4 += n8[s7++] << l7, l7 += 8;
                      }
                      if (u4 !== (65535 & r6.check)) {
                        e9.msg = "header crc mismatch", r6.mode = 30;
                        break;
                      }
                      l7 = u4 = 0;
                    }
                    r6.head && (r6.head.hcrc = r6.flags >> 9 & 1, r6.head.done = true), e9.adler = r6.check = 0, r6.mode = 12;
                    break;
                  case 10:
                    for (; l7 < 32; ) {
                      if (0 === o8)
                        break e;
                      o8--, u4 += n8[s7++] << l7, l7 += 8;
                    }
                    e9.adler = r6.check = L2(u4), l7 = u4 = 0, r6.mode = 11;
                  case 11:
                    if (0 === r6.havedict)
                      return e9.next_out = a5, e9.avail_out = h5, e9.next_in = s7, e9.avail_in = o8, r6.hold = u4, r6.bits = l7, 2;
                    e9.adler = r6.check = 1, r6.mode = 12;
                  case 12:
                    if (5 === t6 || 6 === t6)
                      break e;
                  case 13:
                    if (r6.last) {
                      u4 >>>= 7 & l7, l7 -= 7 & l7, r6.mode = 27;
                      break;
                    }
                    for (; l7 < 3; ) {
                      if (0 === o8)
                        break e;
                      o8--, u4 += n8[s7++] << l7, l7 += 8;
                    }
                    switch (r6.last = 1 & u4, l7 -= 1, 3 & (u4 >>>= 1)) {
                      case 0:
                        r6.mode = 14;
                        break;
                      case 1:
                        if (j(r6), r6.mode = 20, 6 !== t6)
                          break;
                        u4 >>>= 2, l7 -= 2;
                        break e;
                      case 2:
                        r6.mode = 17;
                        break;
                      case 3:
                        e9.msg = "invalid block type", r6.mode = 30;
                    }
                    u4 >>>= 2, l7 -= 2;
                    break;
                  case 14:
                    for (u4 >>>= 7 & l7, l7 -= 7 & l7; l7 < 32; ) {
                      if (0 === o8)
                        break e;
                      o8--, u4 += n8[s7++] << l7, l7 += 8;
                    }
                    if ((65535 & u4) != (u4 >>> 16 ^ 65535)) {
                      e9.msg = "invalid stored block lengths", r6.mode = 30;
                      break;
                    }
                    if (r6.length = 65535 & u4, l7 = u4 = 0, r6.mode = 15, 6 === t6)
                      break e;
                  case 15:
                    r6.mode = 16;
                  case 16:
                    if (d4 = r6.length) {
                      if (o8 < d4 && (d4 = o8), h5 < d4 && (d4 = h5), 0 === d4)
                        break e;
                      I3.arraySet(i7, n8, s7, d4, a5), o8 -= d4, s7 += d4, h5 -= d4, a5 += d4, r6.length -= d4;
                      break;
                    }
                    r6.mode = 12;
                    break;
                  case 17:
                    for (; l7 < 14; ) {
                      if (0 === o8)
                        break e;
                      o8--, u4 += n8[s7++] << l7, l7 += 8;
                    }
                    if (r6.nlen = 257 + (31 & u4), u4 >>>= 5, l7 -= 5, r6.ndist = 1 + (31 & u4), u4 >>>= 5, l7 -= 5, r6.ncode = 4 + (15 & u4), u4 >>>= 4, l7 -= 4, 286 < r6.nlen || 30 < r6.ndist) {
                      e9.msg = "too many length or distance symbols", r6.mode = 30;
                      break;
                    }
                    r6.have = 0, r6.mode = 18;
                  case 18:
                    for (; r6.have < r6.ncode; ) {
                      for (; l7 < 3; ) {
                        if (0 === o8)
                          break e;
                        o8--, u4 += n8[s7++] << l7, l7 += 8;
                      }
                      r6.lens[A3[r6.have++]] = 7 & u4, u4 >>>= 3, l7 -= 3;
                    }
                    for (; r6.have < 19; )
                      r6.lens[A3[r6.have++]] = 0;
                    if (r6.lencode = r6.lendyn, r6.lenbits = 7, S4 = { bits: r6.lenbits }, x3 = T3(0, r6.lens, 0, 19, r6.lencode, 0, r6.work, S4), r6.lenbits = S4.bits, x3) {
                      e9.msg = "invalid code lengths set", r6.mode = 30;
                      break;
                    }
                    r6.have = 0, r6.mode = 19;
                  case 19:
                    for (; r6.have < r6.nlen + r6.ndist; ) {
                      for (; g3 = (C3 = r6.lencode[u4 & (1 << r6.lenbits) - 1]) >>> 16 & 255, b3 = 65535 & C3, !((_3 = C3 >>> 24) <= l7); ) {
                        if (0 === o8)
                          break e;
                        o8--, u4 += n8[s7++] << l7, l7 += 8;
                      }
                      if (b3 < 16)
                        u4 >>>= _3, l7 -= _3, r6.lens[r6.have++] = b3;
                      else {
                        if (16 === b3) {
                          for (z2 = _3 + 2; l7 < z2; ) {
                            if (0 === o8)
                              break e;
                            o8--, u4 += n8[s7++] << l7, l7 += 8;
                          }
                          if (u4 >>>= _3, l7 -= _3, 0 === r6.have) {
                            e9.msg = "invalid bit length repeat", r6.mode = 30;
                            break;
                          }
                          k3 = r6.lens[r6.have - 1], d4 = 3 + (3 & u4), u4 >>>= 2, l7 -= 2;
                        } else if (17 === b3) {
                          for (z2 = _3 + 3; l7 < z2; ) {
                            if (0 === o8)
                              break e;
                            o8--, u4 += n8[s7++] << l7, l7 += 8;
                          }
                          l7 -= _3, k3 = 0, d4 = 3 + (7 & (u4 >>>= _3)), u4 >>>= 3, l7 -= 3;
                        } else {
                          for (z2 = _3 + 7; l7 < z2; ) {
                            if (0 === o8)
                              break e;
                            o8--, u4 += n8[s7++] << l7, l7 += 8;
                          }
                          l7 -= _3, k3 = 0, d4 = 11 + (127 & (u4 >>>= _3)), u4 >>>= 7, l7 -= 7;
                        }
                        if (r6.have + d4 > r6.nlen + r6.ndist) {
                          e9.msg = "invalid bit length repeat", r6.mode = 30;
                          break;
                        }
                        for (; d4--; )
                          r6.lens[r6.have++] = k3;
                      }
                    }
                    if (30 === r6.mode)
                      break;
                    if (0 === r6.lens[256]) {
                      e9.msg = "invalid code -- missing end-of-block", r6.mode = 30;
                      break;
                    }
                    if (r6.lenbits = 9, S4 = { bits: r6.lenbits }, x3 = T3(D, r6.lens, 0, r6.nlen, r6.lencode, 0, r6.work, S4), r6.lenbits = S4.bits, x3) {
                      e9.msg = "invalid literal/lengths set", r6.mode = 30;
                      break;
                    }
                    if (r6.distbits = 6, r6.distcode = r6.distdyn, S4 = { bits: r6.distbits }, x3 = T3(F, r6.lens, r6.nlen, r6.ndist, r6.distcode, 0, r6.work, S4), r6.distbits = S4.bits, x3) {
                      e9.msg = "invalid distances set", r6.mode = 30;
                      break;
                    }
                    if (r6.mode = 20, 6 === t6)
                      break e;
                  case 20:
                    r6.mode = 21;
                  case 21:
                    if (6 <= o8 && 258 <= h5) {
                      e9.next_out = a5, e9.avail_out = h5, e9.next_in = s7, e9.avail_in = o8, r6.hold = u4, r6.bits = l7, R3(e9, c5), a5 = e9.next_out, i7 = e9.output, h5 = e9.avail_out, s7 = e9.next_in, n8 = e9.input, o8 = e9.avail_in, u4 = r6.hold, l7 = r6.bits, 12 === r6.mode && (r6.back = -1);
                      break;
                    }
                    for (r6.back = 0; g3 = (C3 = r6.lencode[u4 & (1 << r6.lenbits) - 1]) >>> 16 & 255, b3 = 65535 & C3, !((_3 = C3 >>> 24) <= l7); ) {
                      if (0 === o8)
                        break e;
                      o8--, u4 += n8[s7++] << l7, l7 += 8;
                    }
                    if (g3 && 0 == (240 & g3)) {
                      for (v3 = _3, y3 = g3, w3 = b3; g3 = (C3 = r6.lencode[w3 + ((u4 & (1 << v3 + y3) - 1) >> v3)]) >>> 16 & 255, b3 = 65535 & C3, !(v3 + (_3 = C3 >>> 24) <= l7); ) {
                        if (0 === o8)
                          break e;
                        o8--, u4 += n8[s7++] << l7, l7 += 8;
                      }
                      u4 >>>= v3, l7 -= v3, r6.back += v3;
                    }
                    if (u4 >>>= _3, l7 -= _3, r6.back += _3, r6.length = b3, 0 === g3) {
                      r6.mode = 26;
                      break;
                    }
                    if (32 & g3) {
                      r6.back = -1, r6.mode = 12;
                      break;
                    }
                    if (64 & g3) {
                      e9.msg = "invalid literal/length code", r6.mode = 30;
                      break;
                    }
                    r6.extra = 15 & g3, r6.mode = 22;
                  case 22:
                    if (r6.extra) {
                      for (z2 = r6.extra; l7 < z2; ) {
                        if (0 === o8)
                          break e;
                        o8--, u4 += n8[s7++] << l7, l7 += 8;
                      }
                      r6.length += u4 & (1 << r6.extra) - 1, u4 >>>= r6.extra, l7 -= r6.extra, r6.back += r6.extra;
                    }
                    r6.was = r6.length, r6.mode = 23;
                  case 23:
                    for (; g3 = (C3 = r6.distcode[u4 & (1 << r6.distbits) - 1]) >>> 16 & 255, b3 = 65535 & C3, !((_3 = C3 >>> 24) <= l7); ) {
                      if (0 === o8)
                        break e;
                      o8--, u4 += n8[s7++] << l7, l7 += 8;
                    }
                    if (0 == (240 & g3)) {
                      for (v3 = _3, y3 = g3, w3 = b3; g3 = (C3 = r6.distcode[w3 + ((u4 & (1 << v3 + y3) - 1) >> v3)]) >>> 16 & 255, b3 = 65535 & C3, !(v3 + (_3 = C3 >>> 24) <= l7); ) {
                        if (0 === o8)
                          break e;
                        o8--, u4 += n8[s7++] << l7, l7 += 8;
                      }
                      u4 >>>= v3, l7 -= v3, r6.back += v3;
                    }
                    if (u4 >>>= _3, l7 -= _3, r6.back += _3, 64 & g3) {
                      e9.msg = "invalid distance code", r6.mode = 30;
                      break;
                    }
                    r6.offset = b3, r6.extra = 15 & g3, r6.mode = 24;
                  case 24:
                    if (r6.extra) {
                      for (z2 = r6.extra; l7 < z2; ) {
                        if (0 === o8)
                          break e;
                        o8--, u4 += n8[s7++] << l7, l7 += 8;
                      }
                      r6.offset += u4 & (1 << r6.extra) - 1, u4 >>>= r6.extra, l7 -= r6.extra, r6.back += r6.extra;
                    }
                    if (r6.offset > r6.dmax) {
                      e9.msg = "invalid distance too far back", r6.mode = 30;
                      break;
                    }
                    r6.mode = 25;
                  case 25:
                    if (0 === h5)
                      break e;
                    if (d4 = c5 - h5, r6.offset > d4) {
                      if ((d4 = r6.offset - d4) > r6.whave && r6.sane) {
                        e9.msg = "invalid distance too far back", r6.mode = 30;
                        break;
                      }
                      p3 = d4 > r6.wnext ? (d4 -= r6.wnext, r6.wsize - d4) : r6.wnext - d4, d4 > r6.length && (d4 = r6.length), m3 = r6.window;
                    } else
                      m3 = i7, p3 = a5 - r6.offset, d4 = r6.length;
                    for (h5 < d4 && (d4 = h5), h5 -= d4, r6.length -= d4; i7[a5++] = m3[p3++], --d4; )
                      ;
                    0 === r6.length && (r6.mode = 21);
                    break;
                  case 26:
                    if (0 === h5)
                      break e;
                    i7[a5++] = r6.length, h5--, r6.mode = 21;
                    break;
                  case 27:
                    if (r6.wrap) {
                      for (; l7 < 32; ) {
                        if (0 === o8)
                          break e;
                        o8--, u4 |= n8[s7++] << l7, l7 += 8;
                      }
                      if (c5 -= h5, e9.total_out += c5, r6.total += c5, c5 && (e9.adler = r6.check = r6.flags ? B(r6.check, i7, c5, a5 - c5) : O(r6.check, i7, c5, a5 - c5)), c5 = h5, (r6.flags ? u4 : L2(u4)) !== r6.check) {
                        e9.msg = "incorrect data check", r6.mode = 30;
                        break;
                      }
                      l7 = u4 = 0;
                    }
                    r6.mode = 28;
                  case 28:
                    if (r6.wrap && r6.flags) {
                      for (; l7 < 32; ) {
                        if (0 === o8)
                          break e;
                        o8--, u4 += n8[s7++] << l7, l7 += 8;
                      }
                      if (u4 !== (4294967295 & r6.total)) {
                        e9.msg = "incorrect length check", r6.mode = 30;
                        break;
                      }
                      l7 = u4 = 0;
                    }
                    r6.mode = 29;
                  case 29:
                    x3 = 1;
                    break e;
                  case 30:
                    x3 = -3;
                    break e;
                  case 31:
                    return -4;
                  case 32:
                  default:
                    return U;
                }
            return e9.next_out = a5, e9.avail_out = h5, e9.next_in = s7, e9.avail_in = o8, r6.hold = u4, r6.bits = l7, (r6.wsize || c5 !== e9.avail_out && r6.mode < 30 && (r6.mode < 27 || 4 !== t6)) && Z2(e9, e9.output, e9.next_out, c5 - e9.avail_out) ? (r6.mode = 31, -4) : (f4 -= e9.avail_in, c5 -= e9.avail_out, e9.total_in += f4, e9.total_out += c5, r6.total += c5, r6.wrap && c5 && (e9.adler = r6.check = r6.flags ? B(r6.check, i7, c5, e9.next_out - c5) : O(r6.check, i7, c5, e9.next_out - c5)), e9.data_type = r6.bits + (r6.last ? 64 : 0) + (12 === r6.mode ? 128 : 0) + (20 === r6.mode || 15 === r6.mode ? 256 : 0), (0 == f4 && 0 === c5 || 4 === t6) && x3 === N3 && (x3 = -5), x3);
          }, r5.inflateEnd = function(e9) {
            if (!e9 || !e9.state)
              return U;
            var t6 = e9.state;
            return t6.window && (t6.window = null), e9.state = null, N3;
          }, r5.inflateGetHeader = function(e9, t6) {
            var r6;
            return e9 && e9.state ? 0 == (2 & (r6 = e9.state).wrap) ? U : ((r6.head = t6).done = false, N3) : U;
          }, r5.inflateSetDictionary = function(e9, t6) {
            var r6, n8 = t6.length;
            return e9 && e9.state ? 0 !== (r6 = e9.state).wrap && 11 !== r6.mode ? U : 11 === r6.mode && O(1, t6, n8, 0) !== r6.check ? -3 : Z2(e9, t6, n8, n8) ? (r6.mode = 31, -4) : (r6.havedict = 1, N3) : U;
          }, r5.inflateInfo = "pako inflate (from Nodeca project)";
        }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(e8, t5, r5) {
          "use strict";
          var D = e8("../utils/common"), F = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], N3 = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], U = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], P3 = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
          t5.exports = function(e9, t6, r6, n7, i6, s6, a4, o7) {
            var h4, u3, l6, f3, c4, d4, p3, m3, _3, g3 = o7.bits, b3 = 0, v3 = 0, y3 = 0, w3 = 0, k3 = 0, x3 = 0, S4 = 0, z2 = 0, C3 = 0, E3 = 0, A3 = null, I3 = 0, O = new D.Buf16(16), B = new D.Buf16(16), R3 = null, T3 = 0;
            for (b3 = 0; b3 <= 15; b3++)
              O[b3] = 0;
            for (v3 = 0; v3 < n7; v3++)
              O[t6[r6 + v3]]++;
            for (k3 = g3, w3 = 15; 1 <= w3 && 0 === O[w3]; w3--)
              ;
            if (w3 < k3 && (k3 = w3), 0 === w3)
              return i6[s6++] = 20971520, i6[s6++] = 20971520, o7.bits = 1, 0;
            for (y3 = 1; y3 < w3 && 0 === O[y3]; y3++)
              ;
            for (k3 < y3 && (k3 = y3), b3 = z2 = 1; b3 <= 15; b3++)
              if (z2 <<= 1, (z2 -= O[b3]) < 0)
                return -1;
            if (0 < z2 && (0 === e9 || 1 !== w3))
              return -1;
            for (B[1] = 0, b3 = 1; b3 < 15; b3++)
              B[b3 + 1] = B[b3] + O[b3];
            for (v3 = 0; v3 < n7; v3++)
              0 !== t6[r6 + v3] && (a4[B[t6[r6 + v3]]++] = v3);
            if (d4 = 0 === e9 ? (A3 = R3 = a4, 19) : 1 === e9 ? (A3 = F, I3 -= 257, R3 = N3, T3 -= 257, 256) : (A3 = U, R3 = P3, -1), b3 = y3, c4 = s6, S4 = v3 = E3 = 0, l6 = -1, f3 = (C3 = 1 << (x3 = k3)) - 1, 1 === e9 && 852 < C3 || 2 === e9 && 592 < C3)
              return 1;
            for (; ; ) {
              for (p3 = b3 - S4, _3 = a4[v3] < d4 ? (m3 = 0, a4[v3]) : a4[v3] > d4 ? (m3 = R3[T3 + a4[v3]], A3[I3 + a4[v3]]) : (m3 = 96, 0), h4 = 1 << b3 - S4, y3 = u3 = 1 << x3; i6[c4 + (E3 >> S4) + (u3 -= h4)] = p3 << 24 | m3 << 16 | _3 | 0, 0 !== u3; )
                ;
              for (h4 = 1 << b3 - 1; E3 & h4; )
                h4 >>= 1;
              if (0 !== h4 ? (E3 &= h4 - 1, E3 += h4) : E3 = 0, v3++, 0 == --O[b3]) {
                if (b3 === w3)
                  break;
                b3 = t6[r6 + a4[v3]];
              }
              if (k3 < b3 && (E3 & f3) !== l6) {
                for (0 === S4 && (S4 = k3), c4 += y3, z2 = 1 << (x3 = b3 - S4); x3 + S4 < w3 && !((z2 -= O[x3 + S4]) <= 0); )
                  x3++, z2 <<= 1;
                if (C3 += 1 << x3, 1 === e9 && 852 < C3 || 2 === e9 && 592 < C3)
                  return 1;
                i6[l6 = E3 & f3] = k3 << 24 | x3 << 16 | c4 - s6 | 0;
              }
            }
            return 0 !== E3 && (i6[c4 + E3] = b3 - S4 << 24 | 64 << 16 | 0), o7.bits = k3, 0;
          };
        }, { "../utils/common": 41 }], 51: [function(e8, t5, r5) {
          "use strict";
          t5.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
        }, {}], 52: [function(e8, t5, r5) {
          "use strict";
          var i6 = e8("../utils/common"), o7 = 0, h4 = 1;
          function n7(e9) {
            for (var t6 = e9.length; 0 <= --t6; )
              e9[t6] = 0;
          }
          var s6 = 0, a4 = 29, u3 = 256, l6 = u3 + 1 + a4, f3 = 30, c4 = 19, _3 = 2 * l6 + 1, g3 = 15, d4 = 16, p3 = 7, m3 = 256, b3 = 16, v3 = 17, y3 = 18, w3 = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], k3 = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], x3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], S4 = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], z2 = new Array(2 * (l6 + 2));
          n7(z2);
          var C3 = new Array(2 * f3);
          n7(C3);
          var E3 = new Array(512);
          n7(E3);
          var A3 = new Array(256);
          n7(A3);
          var I3 = new Array(a4);
          n7(I3);
          var O, B, R3, T3 = new Array(f3);
          function D(e9, t6, r6, n8, i7) {
            this.static_tree = e9, this.extra_bits = t6, this.extra_base = r6, this.elems = n8, this.max_length = i7, this.has_stree = e9 && e9.length;
          }
          function F(e9, t6) {
            this.dyn_tree = e9, this.max_code = 0, this.stat_desc = t6;
          }
          function N3(e9) {
            return e9 < 256 ? E3[e9] : E3[256 + (e9 >>> 7)];
          }
          function U(e9, t6) {
            e9.pending_buf[e9.pending++] = 255 & t6, e9.pending_buf[e9.pending++] = t6 >>> 8 & 255;
          }
          function P3(e9, t6, r6) {
            e9.bi_valid > d4 - r6 ? (e9.bi_buf |= t6 << e9.bi_valid & 65535, U(e9, e9.bi_buf), e9.bi_buf = t6 >> d4 - e9.bi_valid, e9.bi_valid += r6 - d4) : (e9.bi_buf |= t6 << e9.bi_valid & 65535, e9.bi_valid += r6);
          }
          function L2(e9, t6, r6) {
            P3(e9, r6[2 * t6], r6[2 * t6 + 1]);
          }
          function j(e9, t6) {
            for (var r6 = 0; r6 |= 1 & e9, e9 >>>= 1, r6 <<= 1, 0 < --t6; )
              ;
            return r6 >>> 1;
          }
          function Z2(e9, t6, r6) {
            var n8, i7, s7 = new Array(g3 + 1), a5 = 0;
            for (n8 = 1; n8 <= g3; n8++)
              s7[n8] = a5 = a5 + r6[n8 - 1] << 1;
            for (i7 = 0; i7 <= t6; i7++) {
              var o8 = e9[2 * i7 + 1];
              0 !== o8 && (e9[2 * i7] = j(s7[o8]++, o8));
            }
          }
          function W(e9) {
            var t6;
            for (t6 = 0; t6 < l6; t6++)
              e9.dyn_ltree[2 * t6] = 0;
            for (t6 = 0; t6 < f3; t6++)
              e9.dyn_dtree[2 * t6] = 0;
            for (t6 = 0; t6 < c4; t6++)
              e9.bl_tree[2 * t6] = 0;
            e9.dyn_ltree[2 * m3] = 1, e9.opt_len = e9.static_len = 0, e9.last_lit = e9.matches = 0;
          }
          function M3(e9) {
            8 < e9.bi_valid ? U(e9, e9.bi_buf) : 0 < e9.bi_valid && (e9.pending_buf[e9.pending++] = e9.bi_buf), e9.bi_buf = 0, e9.bi_valid = 0;
          }
          function H3(e9, t6, r6, n8) {
            var i7 = 2 * t6, s7 = 2 * r6;
            return e9[i7] < e9[s7] || e9[i7] === e9[s7] && n8[t6] <= n8[r6];
          }
          function G(e9, t6, r6) {
            for (var n8 = e9.heap[r6], i7 = r6 << 1; i7 <= e9.heap_len && (i7 < e9.heap_len && H3(t6, e9.heap[i7 + 1], e9.heap[i7], e9.depth) && i7++, !H3(t6, n8, e9.heap[i7], e9.depth)); )
              e9.heap[r6] = e9.heap[i7], r6 = i7, i7 <<= 1;
            e9.heap[r6] = n8;
          }
          function K(e9, t6, r6) {
            var n8, i7, s7, a5, o8 = 0;
            if (0 !== e9.last_lit)
              for (; n8 = e9.pending_buf[e9.d_buf + 2 * o8] << 8 | e9.pending_buf[e9.d_buf + 2 * o8 + 1], i7 = e9.pending_buf[e9.l_buf + o8], o8++, 0 === n8 ? L2(e9, i7, t6) : (L2(e9, (s7 = A3[i7]) + u3 + 1, t6), 0 !== (a5 = w3[s7]) && P3(e9, i7 -= I3[s7], a5), L2(e9, s7 = N3(--n8), r6), 0 !== (a5 = k3[s7]) && P3(e9, n8 -= T3[s7], a5)), o8 < e9.last_lit; )
                ;
            L2(e9, m3, t6);
          }
          function Y(e9, t6) {
            var r6, n8, i7, s7 = t6.dyn_tree, a5 = t6.stat_desc.static_tree, o8 = t6.stat_desc.has_stree, h5 = t6.stat_desc.elems, u4 = -1;
            for (e9.heap_len = 0, e9.heap_max = _3, r6 = 0; r6 < h5; r6++)
              0 !== s7[2 * r6] ? (e9.heap[++e9.heap_len] = u4 = r6, e9.depth[r6] = 0) : s7[2 * r6 + 1] = 0;
            for (; e9.heap_len < 2; )
              s7[2 * (i7 = e9.heap[++e9.heap_len] = u4 < 2 ? ++u4 : 0)] = 1, e9.depth[i7] = 0, e9.opt_len--, o8 && (e9.static_len -= a5[2 * i7 + 1]);
            for (t6.max_code = u4, r6 = e9.heap_len >> 1; 1 <= r6; r6--)
              G(e9, s7, r6);
            for (i7 = h5; r6 = e9.heap[1], e9.heap[1] = e9.heap[e9.heap_len--], G(e9, s7, 1), n8 = e9.heap[1], e9.heap[--e9.heap_max] = r6, e9.heap[--e9.heap_max] = n8, s7[2 * i7] = s7[2 * r6] + s7[2 * n8], e9.depth[i7] = (e9.depth[r6] >= e9.depth[n8] ? e9.depth[r6] : e9.depth[n8]) + 1, s7[2 * r6 + 1] = s7[2 * n8 + 1] = i7, e9.heap[1] = i7++, G(e9, s7, 1), 2 <= e9.heap_len; )
              ;
            e9.heap[--e9.heap_max] = e9.heap[1], function(e10, t7) {
              var r7, n9, i8, s8, a6, o9, h6 = t7.dyn_tree, u5 = t7.max_code, l7 = t7.stat_desc.static_tree, f4 = t7.stat_desc.has_stree, c5 = t7.stat_desc.extra_bits, d5 = t7.stat_desc.extra_base, p4 = t7.stat_desc.max_length, m4 = 0;
              for (s8 = 0; s8 <= g3; s8++)
                e10.bl_count[s8] = 0;
              for (h6[2 * e10.heap[e10.heap_max] + 1] = 0, r7 = e10.heap_max + 1; r7 < _3; r7++)
                p4 < (s8 = h6[2 * h6[2 * (n9 = e10.heap[r7]) + 1] + 1] + 1) && (s8 = p4, m4++), h6[2 * n9 + 1] = s8, u5 < n9 || (e10.bl_count[s8]++, a6 = 0, d5 <= n9 && (a6 = c5[n9 - d5]), o9 = h6[2 * n9], e10.opt_len += o9 * (s8 + a6), f4 && (e10.static_len += o9 * (l7[2 * n9 + 1] + a6)));
              if (0 !== m4) {
                do {
                  for (s8 = p4 - 1; 0 === e10.bl_count[s8]; )
                    s8--;
                  e10.bl_count[s8]--, e10.bl_count[s8 + 1] += 2, e10.bl_count[p4]--, m4 -= 2;
                } while (0 < m4);
                for (s8 = p4; 0 !== s8; s8--)
                  for (n9 = e10.bl_count[s8]; 0 !== n9; )
                    u5 < (i8 = e10.heap[--r7]) || (h6[2 * i8 + 1] !== s8 && (e10.opt_len += (s8 - h6[2 * i8 + 1]) * h6[2 * i8], h6[2 * i8 + 1] = s8), n9--);
              }
            }(e9, t6), Z2(s7, u4, e9.bl_count);
          }
          function X(e9, t6, r6) {
            var n8, i7, s7 = -1, a5 = t6[1], o8 = 0, h5 = 7, u4 = 4;
            for (0 === a5 && (h5 = 138, u4 = 3), t6[2 * (r6 + 1) + 1] = 65535, n8 = 0; n8 <= r6; n8++)
              i7 = a5, a5 = t6[2 * (n8 + 1) + 1], ++o8 < h5 && i7 === a5 || (o8 < u4 ? e9.bl_tree[2 * i7] += o8 : 0 !== i7 ? (i7 !== s7 && e9.bl_tree[2 * i7]++, e9.bl_tree[2 * b3]++) : o8 <= 10 ? e9.bl_tree[2 * v3]++ : e9.bl_tree[2 * y3]++, s7 = i7, u4 = (o8 = 0) === a5 ? (h5 = 138, 3) : i7 === a5 ? (h5 = 6, 3) : (h5 = 7, 4));
          }
          function V3(e9, t6, r6) {
            var n8, i7, s7 = -1, a5 = t6[1], o8 = 0, h5 = 7, u4 = 4;
            for (0 === a5 && (h5 = 138, u4 = 3), n8 = 0; n8 <= r6; n8++)
              if (i7 = a5, a5 = t6[2 * (n8 + 1) + 1], !(++o8 < h5 && i7 === a5)) {
                if (o8 < u4)
                  for (; L2(e9, i7, e9.bl_tree), 0 != --o8; )
                    ;
                else
                  0 !== i7 ? (i7 !== s7 && (L2(e9, i7, e9.bl_tree), o8--), L2(e9, b3, e9.bl_tree), P3(e9, o8 - 3, 2)) : o8 <= 10 ? (L2(e9, v3, e9.bl_tree), P3(e9, o8 - 3, 3)) : (L2(e9, y3, e9.bl_tree), P3(e9, o8 - 11, 7));
                s7 = i7, u4 = (o8 = 0) === a5 ? (h5 = 138, 3) : i7 === a5 ? (h5 = 6, 3) : (h5 = 7, 4);
              }
          }
          n7(T3);
          var q = false;
          function J(e9, t6, r6, n8) {
            P3(e9, (s6 << 1) + (n8 ? 1 : 0), 3), function(e10, t7, r7, n9) {
              M3(e10), n9 && (U(e10, r7), U(e10, ~r7)), i6.arraySet(e10.pending_buf, e10.window, t7, r7, e10.pending), e10.pending += r7;
            }(e9, t6, r6, true);
          }
          r5._tr_init = function(e9) {
            q || (function() {
              var e10, t6, r6, n8, i7, s7 = new Array(g3 + 1);
              for (n8 = r6 = 0; n8 < a4 - 1; n8++)
                for (I3[n8] = r6, e10 = 0; e10 < 1 << w3[n8]; e10++)
                  A3[r6++] = n8;
              for (A3[r6 - 1] = n8, n8 = i7 = 0; n8 < 16; n8++)
                for (T3[n8] = i7, e10 = 0; e10 < 1 << k3[n8]; e10++)
                  E3[i7++] = n8;
              for (i7 >>= 7; n8 < f3; n8++)
                for (T3[n8] = i7 << 7, e10 = 0; e10 < 1 << k3[n8] - 7; e10++)
                  E3[256 + i7++] = n8;
              for (t6 = 0; t6 <= g3; t6++)
                s7[t6] = 0;
              for (e10 = 0; e10 <= 143; )
                z2[2 * e10 + 1] = 8, e10++, s7[8]++;
              for (; e10 <= 255; )
                z2[2 * e10 + 1] = 9, e10++, s7[9]++;
              for (; e10 <= 279; )
                z2[2 * e10 + 1] = 7, e10++, s7[7]++;
              for (; e10 <= 287; )
                z2[2 * e10 + 1] = 8, e10++, s7[8]++;
              for (Z2(z2, l6 + 1, s7), e10 = 0; e10 < f3; e10++)
                C3[2 * e10 + 1] = 5, C3[2 * e10] = j(e10, 5);
              O = new D(z2, w3, u3 + 1, l6, g3), B = new D(C3, k3, 0, f3, g3), R3 = new D(new Array(0), x3, 0, c4, p3);
            }(), q = true), e9.l_desc = new F(e9.dyn_ltree, O), e9.d_desc = new F(e9.dyn_dtree, B), e9.bl_desc = new F(e9.bl_tree, R3), e9.bi_buf = 0, e9.bi_valid = 0, W(e9);
          }, r5._tr_stored_block = J, r5._tr_flush_block = function(e9, t6, r6, n8) {
            var i7, s7, a5 = 0;
            0 < e9.level ? (2 === e9.strm.data_type && (e9.strm.data_type = function(e10) {
              var t7, r7 = 4093624447;
              for (t7 = 0; t7 <= 31; t7++, r7 >>>= 1)
                if (1 & r7 && 0 !== e10.dyn_ltree[2 * t7])
                  return o7;
              if (0 !== e10.dyn_ltree[18] || 0 !== e10.dyn_ltree[20] || 0 !== e10.dyn_ltree[26])
                return h4;
              for (t7 = 32; t7 < u3; t7++)
                if (0 !== e10.dyn_ltree[2 * t7])
                  return h4;
              return o7;
            }(e9)), Y(e9, e9.l_desc), Y(e9, e9.d_desc), a5 = function(e10) {
              var t7;
              for (X(e10, e10.dyn_ltree, e10.l_desc.max_code), X(e10, e10.dyn_dtree, e10.d_desc.max_code), Y(e10, e10.bl_desc), t7 = c4 - 1; 3 <= t7 && 0 === e10.bl_tree[2 * S4[t7] + 1]; t7--)
                ;
              return e10.opt_len += 3 * (t7 + 1) + 5 + 5 + 4, t7;
            }(e9), i7 = e9.opt_len + 3 + 7 >>> 3, (s7 = e9.static_len + 3 + 7 >>> 3) <= i7 && (i7 = s7)) : i7 = s7 = r6 + 5, r6 + 4 <= i7 && -1 !== t6 ? J(e9, t6, r6, n8) : 4 === e9.strategy || s7 === i7 ? (P3(e9, 2 + (n8 ? 1 : 0), 3), K(e9, z2, C3)) : (P3(e9, 4 + (n8 ? 1 : 0), 3), function(e10, t7, r7, n9) {
              var i8;
              for (P3(e10, t7 - 257, 5), P3(e10, r7 - 1, 5), P3(e10, n9 - 4, 4), i8 = 0; i8 < n9; i8++)
                P3(e10, e10.bl_tree[2 * S4[i8] + 1], 3);
              V3(e10, e10.dyn_ltree, t7 - 1), V3(e10, e10.dyn_dtree, r7 - 1);
            }(e9, e9.l_desc.max_code + 1, e9.d_desc.max_code + 1, a5 + 1), K(e9, e9.dyn_ltree, e9.dyn_dtree)), W(e9), n8 && M3(e9);
          }, r5._tr_tally = function(e9, t6, r6) {
            return e9.pending_buf[e9.d_buf + 2 * e9.last_lit] = t6 >>> 8 & 255, e9.pending_buf[e9.d_buf + 2 * e9.last_lit + 1] = 255 & t6, e9.pending_buf[e9.l_buf + e9.last_lit] = 255 & r6, e9.last_lit++, 0 === t6 ? e9.dyn_ltree[2 * r6]++ : (e9.matches++, t6--, e9.dyn_ltree[2 * (A3[r6] + u3 + 1)]++, e9.dyn_dtree[2 * N3(t6)]++), e9.last_lit === e9.lit_bufsize - 1;
          }, r5._tr_align = function(e9) {
            P3(e9, 2, 3), L2(e9, m3, z2), function(e10) {
              16 === e10.bi_valid ? (U(e10, e10.bi_buf), e10.bi_buf = 0, e10.bi_valid = 0) : 8 <= e10.bi_valid && (e10.pending_buf[e10.pending++] = 255 & e10.bi_buf, e10.bi_buf >>= 8, e10.bi_valid -= 8);
            }(e9);
          };
        }, { "../utils/common": 41 }], 53: [function(e8, t5, r5) {
          "use strict";
          t5.exports = function() {
            this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
          };
        }, {}], 54: [function(e8, t5, r5) {
          (function(e9) {
            !function(r6, n7) {
              "use strict";
              if (!r6.setImmediate) {
                var i6, s6, t6, a4, o7 = 1, h4 = {}, u3 = false, l6 = r6.document, e10 = Object.getPrototypeOf && Object.getPrototypeOf(r6);
                e10 = e10 && e10.setTimeout ? e10 : r6, i6 = "[object process]" === {}.toString.call(r6.process) ? function(e11) {
                  process.nextTick(function() {
                    c4(e11);
                  });
                } : function() {
                  if (r6.postMessage && !r6.importScripts) {
                    var e11 = true, t7 = r6.onmessage;
                    return r6.onmessage = function() {
                      e11 = false;
                    }, r6.postMessage("", "*"), r6.onmessage = t7, e11;
                  }
                }() ? (a4 = "setImmediate$" + Math.random() + "$", r6.addEventListener ? r6.addEventListener("message", d4, false) : r6.attachEvent("onmessage", d4), function(e11) {
                  r6.postMessage(a4 + e11, "*");
                }) : r6.MessageChannel ? ((t6 = new MessageChannel()).port1.onmessage = function(e11) {
                  c4(e11.data);
                }, function(e11) {
                  t6.port2.postMessage(e11);
                }) : l6 && "onreadystatechange" in l6.createElement("script") ? (s6 = l6.documentElement, function(e11) {
                  var t7 = l6.createElement("script");
                  t7.onreadystatechange = function() {
                    c4(e11), t7.onreadystatechange = null, s6.removeChild(t7), t7 = null;
                  }, s6.appendChild(t7);
                }) : function(e11) {
                  setTimeout(c4, 0, e11);
                }, e10.setImmediate = function(e11) {
                  "function" != typeof e11 && (e11 = new Function("" + e11));
                  for (var t7 = new Array(arguments.length - 1), r7 = 0; r7 < t7.length; r7++)
                    t7[r7] = arguments[r7 + 1];
                  var n8 = { callback: e11, args: t7 };
                  return h4[o7] = n8, i6(o7), o7++;
                }, e10.clearImmediate = f3;
              }
              function f3(e11) {
                delete h4[e11];
              }
              function c4(e11) {
                if (u3)
                  setTimeout(c4, 0, e11);
                else {
                  var t7 = h4[e11];
                  if (t7) {
                    u3 = true;
                    try {
                      !function(e12) {
                        var t8 = e12.callback, r7 = e12.args;
                        switch (r7.length) {
                          case 0:
                            t8();
                            break;
                          case 1:
                            t8(r7[0]);
                            break;
                          case 2:
                            t8(r7[0], r7[1]);
                            break;
                          case 3:
                            t8(r7[0], r7[1], r7[2]);
                            break;
                          default:
                            t8.apply(n7, r7);
                        }
                      }(t7);
                    } finally {
                      f3(e11), u3 = false;
                    }
                  }
                }
              }
              function d4(e11) {
                e11.source === r6 && "string" == typeof e11.data && 0 === e11.data.indexOf(a4) && c4(+e11.data.slice(a4.length));
              }
            }("undefined" == typeof self ? void 0 === e9 ? this : e9 : self);
          }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
        }, {}] }, {}, [10])(10);
      });
    }
  });

  // src/application/scripts/save-buttons.ts
  var require_save_buttons = __commonJS({
    "src/application/scripts/save-buttons.ts"(exports) {
      "use strict";
      init_helpers();
      var import_jszip2 = __toESM(require_jszip_min());
      var editor3 = document.querySelector("lit-markdown-editor");
      var saveButton2 = document.querySelector("button#save");
      var saveImagesButton2 = document.querySelector("button#save-images");
      saveButton2.addEventListener("click", () => __async(exports, null, function* () {
        const value = editor3.value;
        const blob = convertStringToBlob(value);
        const cacheKey = "filename";
        const fileNameCache = window.localStorage.getItem(cacheKey);
        const newFileHandle = yield window.showSaveFilePicker({
          suggestedName: fileNameCache != null ? fileNameCache : "article.md"
        });
        window.localStorage.setItem(cacheKey, newFileHandle.name);
        const writeableStream = yield newFileHandle.createWritable();
        yield writeableStream.write(blob);
        yield writeableStream.close();
      }));
      var zipFileHandle;
      saveImagesButton2.addEventListener("click", () => __async(exports, null, function* () {
        const value = editor3.value;
        const filenamesAndBlobs = yield collectImages(value);
        const zip = new import_jszip2.default();
        const markdownBlob = convertStringToBlob(value);
        zip.file("markdown.md", markdownBlob);
        for (const [filename, blob] of filenamesAndBlobs) {
          zip.file(filename, blob);
        }
        const zipBlob = yield zip.generateAsync({ type: "blob" });
        const cacheKey = "filename-zip";
        const fileNameCache = window.localStorage.getItem(cacheKey);
        zipFileHandle || (zipFileHandle = yield window.showSaveFilePicker({
          suggestedName: fileNameCache != null ? fileNameCache : "article.zip"
        }));
        const { name } = zipFileHandle;
        if (fileNameCache !== name)
          window.localStorage.setItem(cacheKey, name);
        animateActivation(saveImagesButton2);
        const writeableStream = yield zipFileHandle.createWritable();
        yield writeableStream.write(zipBlob);
        yield writeableStream.close();
      }));
      var elementTimerMap = /* @__PURE__ */ new Map();
      var animateActivation = (element) => {
        const className = "activated";
        element.classList.add(className);
        const oldTimer = elementTimerMap.get(element);
        if (oldTimer) {
          elementTimerMap.delete(element);
          clearTimeout(oldTimer);
        }
        const timer2 = setTimeout(() => element.classList.remove(className), 1e3);
        elementTimerMap.set(element, timer2);
      };
    }
  });

  // node_modules/tslib/tslib.js
  var require_tslib = __commonJS({
    "node_modules/tslib/tslib.js"(exports, module) {
      var __extends2;
      var __assign2;
      var __rest2;
      var __decorate3;
      var __param2;
      var __metadata2;
      var __awaiter2;
      var __generator2;
      var __exportStar2;
      var __values2;
      var __read2;
      var __spread2;
      var __spreadArrays2;
      var __spreadArray2;
      var __await2;
      var __asyncGenerator2;
      var __asyncDelegator2;
      var __asyncValues2;
      var __makeTemplateObject2;
      var __importStar2;
      var __importDefault2;
      var __classPrivateFieldGet3;
      var __classPrivateFieldSet3;
      var __classPrivateFieldIn2;
      var __createBinding2;
      (function(factory) {
        var root2 = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) {
          define("tslib", ["exports"], function(exports2) {
            factory(createExporter(root2, createExporter(exports2)));
          });
        } else if (typeof module === "object" && typeof module.exports === "object") {
          factory(createExporter(root2, createExporter(module.exports)));
        } else {
          factory(createExporter(root2));
        }
        function createExporter(exports2, previous) {
          if (exports2 !== root2) {
            if (typeof Object.create === "function") {
              Object.defineProperty(exports2, "__esModule", { value: true });
            } else {
              exports2.__esModule = true;
            }
          }
          return function(id, v3) {
            return exports2[id] = previous ? previous(id, v3) : v3;
          };
        }
      })(function(exporter) {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d4, b3) {
          d4.__proto__ = b3;
        } || function(d4, b3) {
          for (var p3 in b3)
            if (Object.prototype.hasOwnProperty.call(b3, p3))
              d4[p3] = b3[p3];
        };
        __extends2 = function(d4, b3) {
          if (typeof b3 !== "function" && b3 !== null)
            throw new TypeError("Class extends value " + String(b3) + " is not a constructor or null");
          extendStatics(d4, b3);
          function __() {
            this.constructor = d4;
          }
          d4.prototype = b3 === null ? Object.create(b3) : (__.prototype = b3.prototype, new __());
        };
        __assign2 = Object.assign || function(t5) {
          for (var s6, i6 = 1, n7 = arguments.length; i6 < n7; i6++) {
            s6 = arguments[i6];
            for (var p3 in s6)
              if (Object.prototype.hasOwnProperty.call(s6, p3))
                t5[p3] = s6[p3];
          }
          return t5;
        };
        __rest2 = function(s6, e8) {
          var t5 = {};
          for (var p3 in s6)
            if (Object.prototype.hasOwnProperty.call(s6, p3) && e8.indexOf(p3) < 0)
              t5[p3] = s6[p3];
          if (s6 != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i6 = 0, p3 = Object.getOwnPropertySymbols(s6); i6 < p3.length; i6++) {
              if (e8.indexOf(p3[i6]) < 0 && Object.prototype.propertyIsEnumerable.call(s6, p3[i6]))
                t5[p3[i6]] = s6[p3[i6]];
            }
          return t5;
        };
        __decorate3 = function(decorators, target, key, desc) {
          var c4 = arguments.length, r5 = c4 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
          if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r5 = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i6 = decorators.length - 1; i6 >= 0; i6--)
              if (d4 = decorators[i6])
                r5 = (c4 < 3 ? d4(r5) : c4 > 3 ? d4(target, key, r5) : d4(target, key)) || r5;
          return c4 > 3 && r5 && Object.defineProperty(target, key, r5), r5;
        };
        __param2 = function(paramIndex, decorator) {
          return function(target, key) {
            decorator(target, key, paramIndex);
          };
        };
        __metadata2 = function(metadataKey, metadataValue) {
          if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
        };
        __awaiter2 = function(thisArg, _arguments, P3, generator) {
          function adopt(value) {
            return value instanceof P3 ? value : new P3(function(resolve) {
              resolve(value);
            });
          }
          return new (P3 || (P3 = Promise))(function(resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e8) {
                reject(e8);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e8) {
                reject(e8);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };
        __generator2 = function(thisArg, body) {
          var _3 = { label: 0, sent: function() {
            if (t5[0] & 1)
              throw t5[1];
            return t5[1];
          }, trys: [], ops: [] }, f3, y3, t5, g3;
          return g3 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g3[Symbol.iterator] = function() {
            return this;
          }), g3;
          function verb(n7) {
            return function(v3) {
              return step([n7, v3]);
            };
          }
          function step(op) {
            if (f3)
              throw new TypeError("Generator is already executing.");
            while (_3)
              try {
                if (f3 = 1, y3 && (t5 = op[0] & 2 ? y3["return"] : op[0] ? y3["throw"] || ((t5 = y3["return"]) && t5.call(y3), 0) : y3.next) && !(t5 = t5.call(y3, op[1])).done)
                  return t5;
                if (y3 = 0, t5)
                  op = [op[0] & 2, t5.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t5 = op;
                    break;
                  case 4:
                    _3.label++;
                    return { value: op[1], done: false };
                  case 5:
                    _3.label++;
                    y3 = op[1];
                    op = [0];
                    continue;
                  case 7:
                    op = _3.ops.pop();
                    _3.trys.pop();
                    continue;
                  default:
                    if (!(t5 = _3.trys, t5 = t5.length > 0 && t5[t5.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                      _3 = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t5 || op[1] > t5[0] && op[1] < t5[3])) {
                      _3.label = op[1];
                      break;
                    }
                    if (op[0] === 6 && _3.label < t5[1]) {
                      _3.label = t5[1];
                      t5 = op;
                      break;
                    }
                    if (t5 && _3.label < t5[2]) {
                      _3.label = t5[2];
                      _3.ops.push(op);
                      break;
                    }
                    if (t5[2])
                      _3.ops.pop();
                    _3.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _3);
              } catch (e8) {
                op = [6, e8];
                y3 = 0;
              } finally {
                f3 = t5 = 0;
              }
            if (op[0] & 5)
              throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        };
        __exportStar2 = function(m3, o7) {
          for (var p3 in m3)
            if (p3 !== "default" && !Object.prototype.hasOwnProperty.call(o7, p3))
              __createBinding2(o7, m3, p3);
        };
        __createBinding2 = Object.create ? function(o7, m3, k3, k22) {
          if (k22 === void 0)
            k22 = k3;
          var desc = Object.getOwnPropertyDescriptor(m3, k3);
          if (!desc || ("get" in desc ? !m3.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function() {
              return m3[k3];
            } };
          }
          Object.defineProperty(o7, k22, desc);
        } : function(o7, m3, k3, k22) {
          if (k22 === void 0)
            k22 = k3;
          o7[k22] = m3[k3];
        };
        __values2 = function(o7) {
          var s6 = typeof Symbol === "function" && Symbol.iterator, m3 = s6 && o7[s6], i6 = 0;
          if (m3)
            return m3.call(o7);
          if (o7 && typeof o7.length === "number")
            return {
              next: function() {
                if (o7 && i6 >= o7.length)
                  o7 = void 0;
                return { value: o7 && o7[i6++], done: !o7 };
              }
            };
          throw new TypeError(s6 ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
        __read2 = function(o7, n7) {
          var m3 = typeof Symbol === "function" && o7[Symbol.iterator];
          if (!m3)
            return o7;
          var i6 = m3.call(o7), r5, ar = [], e8;
          try {
            while ((n7 === void 0 || n7-- > 0) && !(r5 = i6.next()).done)
              ar.push(r5.value);
          } catch (error) {
            e8 = { error };
          } finally {
            try {
              if (r5 && !r5.done && (m3 = i6["return"]))
                m3.call(i6);
            } finally {
              if (e8)
                throw e8.error;
            }
          }
          return ar;
        };
        __spread2 = function() {
          for (var ar = [], i6 = 0; i6 < arguments.length; i6++)
            ar = ar.concat(__read2(arguments[i6]));
          return ar;
        };
        __spreadArrays2 = function() {
          for (var s6 = 0, i6 = 0, il = arguments.length; i6 < il; i6++)
            s6 += arguments[i6].length;
          for (var r5 = Array(s6), k3 = 0, i6 = 0; i6 < il; i6++)
            for (var a4 = arguments[i6], j = 0, jl = a4.length; j < jl; j++, k3++)
              r5[k3] = a4[j];
          return r5;
        };
        __spreadArray2 = function(to, from, pack) {
          if (pack || arguments.length === 2)
            for (var i6 = 0, l6 = from.length, ar; i6 < l6; i6++) {
              if (ar || !(i6 in from)) {
                if (!ar)
                  ar = Array.prototype.slice.call(from, 0, i6);
                ar[i6] = from[i6];
              }
            }
          return to.concat(ar || Array.prototype.slice.call(from));
        };
        __await2 = function(v3) {
          return this instanceof __await2 ? (this.v = v3, this) : new __await2(v3);
        };
        __asyncGenerator2 = function(thisArg, _arguments, generator) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var g3 = generator.apply(thisArg, _arguments || []), i6, q = [];
          return i6 = {}, verb("next"), verb("throw"), verb("return"), i6[Symbol.asyncIterator] = function() {
            return this;
          }, i6;
          function verb(n7) {
            if (g3[n7])
              i6[n7] = function(v3) {
                return new Promise(function(a4, b3) {
                  q.push([n7, v3, a4, b3]) > 1 || resume(n7, v3);
                });
              };
          }
          function resume(n7, v3) {
            try {
              step(g3[n7](v3));
            } catch (e8) {
              settle(q[0][3], e8);
            }
          }
          function step(r5) {
            r5.value instanceof __await2 ? Promise.resolve(r5.value.v).then(fulfill, reject) : settle(q[0][2], r5);
          }
          function fulfill(value) {
            resume("next", value);
          }
          function reject(value) {
            resume("throw", value);
          }
          function settle(f3, v3) {
            if (f3(v3), q.shift(), q.length)
              resume(q[0][0], q[0][1]);
          }
        };
        __asyncDelegator2 = function(o7) {
          var i6, p3;
          return i6 = {}, verb("next"), verb("throw", function(e8) {
            throw e8;
          }), verb("return"), i6[Symbol.iterator] = function() {
            return this;
          }, i6;
          function verb(n7, f3) {
            i6[n7] = o7[n7] ? function(v3) {
              return (p3 = !p3) ? { value: __await2(o7[n7](v3)), done: n7 === "return" } : f3 ? f3(v3) : v3;
            } : f3;
          }
        };
        __asyncValues2 = function(o7) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var m3 = o7[Symbol.asyncIterator], i6;
          return m3 ? m3.call(o7) : (o7 = typeof __values2 === "function" ? __values2(o7) : o7[Symbol.iterator](), i6 = {}, verb("next"), verb("throw"), verb("return"), i6[Symbol.asyncIterator] = function() {
            return this;
          }, i6);
          function verb(n7) {
            i6[n7] = o7[n7] && function(v3) {
              return new Promise(function(resolve, reject) {
                v3 = o7[n7](v3), settle(resolve, reject, v3.done, v3.value);
              });
            };
          }
          function settle(resolve, reject, d4, v3) {
            Promise.resolve(v3).then(function(v4) {
              resolve({ value: v4, done: d4 });
            }, reject);
          }
        };
        __makeTemplateObject2 = function(cooked, raw) {
          if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
          } else {
            cooked.raw = raw;
          }
          return cooked;
        };
        var __setModuleDefault = Object.create ? function(o7, v3) {
          Object.defineProperty(o7, "default", { enumerable: true, value: v3 });
        } : function(o7, v3) {
          o7["default"] = v3;
        };
        __importStar2 = function(mod) {
          if (mod && mod.__esModule)
            return mod;
          var result = {};
          if (mod != null) {
            for (var k3 in mod)
              if (k3 !== "default" && Object.prototype.hasOwnProperty.call(mod, k3))
                __createBinding2(result, mod, k3);
          }
          __setModuleDefault(result, mod);
          return result;
        };
        __importDefault2 = function(mod) {
          return mod && mod.__esModule ? mod : { "default": mod };
        };
        __classPrivateFieldGet3 = function(receiver, state, kind, f3) {
          if (kind === "a" && !f3)
            throw new TypeError("Private accessor was defined without a getter");
          if (typeof state === "function" ? receiver !== state || !f3 : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return kind === "m" ? f3 : kind === "a" ? f3.call(receiver) : f3 ? f3.value : state.get(receiver);
        };
        __classPrivateFieldSet3 = function(receiver, state, value, kind, f3) {
          if (kind === "m")
            throw new TypeError("Private method is not writable");
          if (kind === "a" && !f3)
            throw new TypeError("Private accessor was defined without a setter");
          if (typeof state === "function" ? receiver !== state || !f3 : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return kind === "a" ? f3.call(receiver, value) : f3 ? f3.value = value : state.set(receiver, value), value;
        };
        __classPrivateFieldIn2 = function(state, receiver) {
          if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
            throw new TypeError("Cannot use 'in' operator on non-object");
          return typeof state === "function" ? receiver === state : state.has(receiver);
        };
        exporter("__extends", __extends2);
        exporter("__assign", __assign2);
        exporter("__rest", __rest2);
        exporter("__decorate", __decorate3);
        exporter("__param", __param2);
        exporter("__metadata", __metadata2);
        exporter("__awaiter", __awaiter2);
        exporter("__generator", __generator2);
        exporter("__exportStar", __exportStar2);
        exporter("__createBinding", __createBinding2);
        exporter("__values", __values2);
        exporter("__read", __read2);
        exporter("__spread", __spread2);
        exporter("__spreadArrays", __spreadArrays2);
        exporter("__spreadArray", __spreadArray2);
        exporter("__await", __await2);
        exporter("__asyncGenerator", __asyncGenerator2);
        exporter("__asyncDelegator", __asyncDelegator2);
        exporter("__asyncValues", __asyncValues2);
        exporter("__makeTemplateObject", __makeTemplateObject2);
        exporter("__importStar", __importStar2);
        exporter("__importDefault", __importDefault2);
        exporter("__classPrivateFieldGet", __classPrivateFieldGet3);
        exporter("__classPrivateFieldSet", __classPrivateFieldSet3);
        exporter("__classPrivateFieldIn", __classPrivateFieldIn2);
      });
    }
  });

  // node_modules/@lit/reactive-element/css-tag.js
  var t = window;
  var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s = Symbol();
  var n = /* @__PURE__ */ new WeakMap();
  var o = class {
    constructor(t5, e8, n7) {
      if (this._$cssResult$ = true, n7 !== s)
        throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t5, this.t = e8;
    }
    get styleSheet() {
      let t5 = this.o;
      const s6 = this.t;
      if (e && void 0 === t5) {
        const e8 = void 0 !== s6 && 1 === s6.length;
        e8 && (t5 = n.get(s6)), void 0 === t5 && ((this.o = t5 = new CSSStyleSheet()).replaceSync(this.cssText), e8 && n.set(s6, t5));
      }
      return t5;
    }
    toString() {
      return this.cssText;
    }
  };
  var r = (t5) => new o("string" == typeof t5 ? t5 : t5 + "", void 0, s);
  var i = (t5, ...e8) => {
    const n7 = 1 === t5.length ? t5[0] : e8.reduce((e9, s6, n8) => e9 + ((t6) => {
      if (true === t6._$cssResult$)
        return t6.cssText;
      if ("number" == typeof t6)
        return t6;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t6 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s6) + t5[n8 + 1], t5[0]);
    return new o(n7, t5, s);
  };
  var S = (s6, n7) => {
    e ? s6.adoptedStyleSheets = n7.map((t5) => t5 instanceof CSSStyleSheet ? t5 : t5.styleSheet) : n7.forEach((e8) => {
      const n8 = document.createElement("style"), o7 = t.litNonce;
      void 0 !== o7 && n8.setAttribute("nonce", o7), n8.textContent = e8.cssText, s6.appendChild(n8);
    });
  };
  var c = e ? (t5) => t5 : (t5) => t5 instanceof CSSStyleSheet ? ((t6) => {
    let e8 = "";
    for (const s6 of t6.cssRules)
      e8 += s6.cssText;
    return r(e8);
  })(t5) : t5;

  // node_modules/@lit/reactive-element/reactive-element.js
  var s2;
  var e2 = window;
  var r2 = e2.trustedTypes;
  var h = r2 ? r2.emptyScript : "";
  var o2 = e2.reactiveElementPolyfillSupport;
  var n2 = { toAttribute(t5, i6) {
    switch (i6) {
      case Boolean:
        t5 = t5 ? h : null;
        break;
      case Object:
      case Array:
        t5 = null == t5 ? t5 : JSON.stringify(t5);
    }
    return t5;
  }, fromAttribute(t5, i6) {
    let s6 = t5;
    switch (i6) {
      case Boolean:
        s6 = null !== t5;
        break;
      case Number:
        s6 = null === t5 ? null : Number(t5);
        break;
      case Object:
      case Array:
        try {
          s6 = JSON.parse(t5);
        } catch (t6) {
          s6 = null;
        }
    }
    return s6;
  } };
  var a = (t5, i6) => i6 !== t5 && (i6 == i6 || t5 == t5);
  var l = { attribute: true, type: String, converter: n2, reflect: false, hasChanged: a };
  var d = class extends HTMLElement {
    constructor() {
      super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this.u();
    }
    static addInitializer(t5) {
      var i6;
      null !== (i6 = this.h) && void 0 !== i6 || (this.h = []), this.h.push(t5);
    }
    static get observedAttributes() {
      this.finalize();
      const t5 = [];
      return this.elementProperties.forEach((i6, s6) => {
        const e8 = this._$Ep(s6, i6);
        void 0 !== e8 && (this._$Ev.set(e8, s6), t5.push(e8));
      }), t5;
    }
    static createProperty(t5, i6 = l) {
      if (i6.state && (i6.attribute = false), this.finalize(), this.elementProperties.set(t5, i6), !i6.noAccessor && !this.prototype.hasOwnProperty(t5)) {
        const s6 = "symbol" == typeof t5 ? Symbol() : "__" + t5, e8 = this.getPropertyDescriptor(t5, s6, i6);
        void 0 !== e8 && Object.defineProperty(this.prototype, t5, e8);
      }
    }
    static getPropertyDescriptor(t5, i6, s6) {
      return { get() {
        return this[i6];
      }, set(e8) {
        const r5 = this[t5];
        this[i6] = e8, this.requestUpdate(t5, r5, s6);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t5) {
      return this.elementProperties.get(t5) || l;
    }
    static finalize() {
      if (this.hasOwnProperty("finalized"))
        return false;
      this.finalized = true;
      const t5 = Object.getPrototypeOf(this);
      if (t5.finalize(), this.elementProperties = new Map(t5.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
        const t6 = this.properties, i6 = [...Object.getOwnPropertyNames(t6), ...Object.getOwnPropertySymbols(t6)];
        for (const s6 of i6)
          this.createProperty(s6, t6[s6]);
      }
      return this.elementStyles = this.finalizeStyles(this.styles), true;
    }
    static finalizeStyles(i6) {
      const s6 = [];
      if (Array.isArray(i6)) {
        const e8 = new Set(i6.flat(1 / 0).reverse());
        for (const i7 of e8)
          s6.unshift(c(i7));
      } else
        void 0 !== i6 && s6.push(c(i6));
      return s6;
    }
    static _$Ep(t5, i6) {
      const s6 = i6.attribute;
      return false === s6 ? void 0 : "string" == typeof s6 ? s6 : "string" == typeof t5 ? t5.toLowerCase() : void 0;
    }
    u() {
      var t5;
      this._$E_ = new Promise((t6) => this.enableUpdating = t6), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), null === (t5 = this.constructor.h) || void 0 === t5 || t5.forEach((t6) => t6(this));
    }
    addController(t5) {
      var i6, s6;
      (null !== (i6 = this._$ES) && void 0 !== i6 ? i6 : this._$ES = []).push(t5), void 0 !== this.renderRoot && this.isConnected && (null === (s6 = t5.hostConnected) || void 0 === s6 || s6.call(t5));
    }
    removeController(t5) {
      var i6;
      null === (i6 = this._$ES) || void 0 === i6 || i6.splice(this._$ES.indexOf(t5) >>> 0, 1);
    }
    _$Eg() {
      this.constructor.elementProperties.forEach((t5, i6) => {
        this.hasOwnProperty(i6) && (this._$Ei.set(i6, this[i6]), delete this[i6]);
      });
    }
    createRenderRoot() {
      var t5;
      const s6 = null !== (t5 = this.shadowRoot) && void 0 !== t5 ? t5 : this.attachShadow(this.constructor.shadowRootOptions);
      return S(s6, this.constructor.elementStyles), s6;
    }
    connectedCallback() {
      var t5;
      void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), null === (t5 = this._$ES) || void 0 === t5 || t5.forEach((t6) => {
        var i6;
        return null === (i6 = t6.hostConnected) || void 0 === i6 ? void 0 : i6.call(t6);
      });
    }
    enableUpdating(t5) {
    }
    disconnectedCallback() {
      var t5;
      null === (t5 = this._$ES) || void 0 === t5 || t5.forEach((t6) => {
        var i6;
        return null === (i6 = t6.hostDisconnected) || void 0 === i6 ? void 0 : i6.call(t6);
      });
    }
    attributeChangedCallback(t5, i6, s6) {
      this._$AK(t5, s6);
    }
    _$EO(t5, i6, s6 = l) {
      var e8;
      const r5 = this.constructor._$Ep(t5, s6);
      if (void 0 !== r5 && true === s6.reflect) {
        const h4 = (void 0 !== (null === (e8 = s6.converter) || void 0 === e8 ? void 0 : e8.toAttribute) ? s6.converter : n2).toAttribute(i6, s6.type);
        this._$El = t5, null == h4 ? this.removeAttribute(r5) : this.setAttribute(r5, h4), this._$El = null;
      }
    }
    _$AK(t5, i6) {
      var s6;
      const e8 = this.constructor, r5 = e8._$Ev.get(t5);
      if (void 0 !== r5 && this._$El !== r5) {
        const t6 = e8.getPropertyOptions(r5), h4 = "function" == typeof t6.converter ? { fromAttribute: t6.converter } : void 0 !== (null === (s6 = t6.converter) || void 0 === s6 ? void 0 : s6.fromAttribute) ? t6.converter : n2;
        this._$El = r5, this[r5] = h4.fromAttribute(i6, t6.type), this._$El = null;
      }
    }
    requestUpdate(t5, i6, s6) {
      let e8 = true;
      void 0 !== t5 && (((s6 = s6 || this.constructor.getPropertyOptions(t5)).hasChanged || a)(this[t5], i6) ? (this._$AL.has(t5) || this._$AL.set(t5, i6), true === s6.reflect && this._$El !== t5 && (void 0 === this._$EC && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t5, s6))) : e8 = false), !this.isUpdatePending && e8 && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
      this.isUpdatePending = true;
      try {
        await this._$E_;
      } catch (t6) {
        Promise.reject(t6);
      }
      const t5 = this.scheduleUpdate();
      return null != t5 && await t5, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var t5;
      if (!this.isUpdatePending)
        return;
      this.hasUpdated, this._$Ei && (this._$Ei.forEach((t6, i7) => this[i7] = t6), this._$Ei = void 0);
      let i6 = false;
      const s6 = this._$AL;
      try {
        i6 = this.shouldUpdate(s6), i6 ? (this.willUpdate(s6), null === (t5 = this._$ES) || void 0 === t5 || t5.forEach((t6) => {
          var i7;
          return null === (i7 = t6.hostUpdate) || void 0 === i7 ? void 0 : i7.call(t6);
        }), this.update(s6)) : this._$Ek();
      } catch (t6) {
        throw i6 = false, this._$Ek(), t6;
      }
      i6 && this._$AE(s6);
    }
    willUpdate(t5) {
    }
    _$AE(t5) {
      var i6;
      null === (i6 = this._$ES) || void 0 === i6 || i6.forEach((t6) => {
        var i7;
        return null === (i7 = t6.hostUpdated) || void 0 === i7 ? void 0 : i7.call(t6);
      }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t5)), this.updated(t5);
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
    shouldUpdate(t5) {
      return true;
    }
    update(t5) {
      void 0 !== this._$EC && (this._$EC.forEach((t6, i6) => this._$EO(i6, this[i6], t6)), this._$EC = void 0), this._$Ek();
    }
    updated(t5) {
    }
    firstUpdated(t5) {
    }
  };
  d.finalized = true, d.elementProperties = /* @__PURE__ */ new Map(), d.elementStyles = [], d.shadowRootOptions = { mode: "open" }, null == o2 || o2({ ReactiveElement: d }), (null !== (s2 = e2.reactiveElementVersions) && void 0 !== s2 ? s2 : e2.reactiveElementVersions = []).push("1.4.1");

  // node_modules/lit-html/lit-html.js
  var t2;
  var i2 = window;
  var s3 = i2.trustedTypes;
  var e3 = s3 ? s3.createPolicy("lit-html", { createHTML: (t5) => t5 }) : void 0;
  var o3 = `lit$${(Math.random() + "").slice(9)}$`;
  var n3 = "?" + o3;
  var l2 = `<${n3}>`;
  var h2 = document;
  var r3 = (t5 = "") => h2.createComment(t5);
  var d2 = (t5) => null === t5 || "object" != typeof t5 && "function" != typeof t5;
  var u = Array.isArray;
  var c2 = (t5) => u(t5) || "function" == typeof (null == t5 ? void 0 : t5[Symbol.iterator]);
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
  var g = (t5) => (i6, ...s6) => ({ _$litType$: t5, strings: i6, values: s6 });
  var y = g(1);
  var w = g(2);
  var x = Symbol.for("lit-noChange");
  var b = Symbol.for("lit-nothing");
  var T = /* @__PURE__ */ new WeakMap();
  var A = (t5, i6, s6) => {
    var e8, o7;
    const n7 = null !== (e8 = null == s6 ? void 0 : s6.renderBefore) && void 0 !== e8 ? e8 : i6;
    let l6 = n7._$litPart$;
    if (void 0 === l6) {
      const t6 = null !== (o7 = null == s6 ? void 0 : s6.renderBefore) && void 0 !== o7 ? o7 : null;
      n7._$litPart$ = l6 = new S2(i6.insertBefore(r3(), t6), t6, void 0, null != s6 ? s6 : {});
    }
    return l6._$AI(t5), l6;
  };
  var E = h2.createTreeWalker(h2, 129, null, false);
  var C = (t5, i6) => {
    const s6 = t5.length - 1, n7 = [];
    let h4, r5 = 2 === i6 ? "<svg>" : "", d4 = v;
    for (let i7 = 0; i7 < s6; i7++) {
      const s7 = t5[i7];
      let e8, u4, c4 = -1, g3 = 0;
      for (; g3 < s7.length && (d4.lastIndex = g3, u4 = d4.exec(s7), null !== u4); )
        g3 = d4.lastIndex, d4 === v ? "!--" === u4[1] ? d4 = a2 : void 0 !== u4[1] ? d4 = f : void 0 !== u4[2] ? ($.test(u4[2]) && (h4 = RegExp("</" + u4[2], "g")), d4 = _) : void 0 !== u4[3] && (d4 = _) : d4 === _ ? ">" === u4[0] ? (d4 = null != h4 ? h4 : v, c4 = -1) : void 0 === u4[1] ? c4 = -2 : (c4 = d4.lastIndex - u4[2].length, e8 = u4[1], d4 = void 0 === u4[3] ? _ : '"' === u4[3] ? p : m) : d4 === p || d4 === m ? d4 = _ : d4 === a2 || d4 === f ? d4 = v : (d4 = _, h4 = void 0);
      const y3 = d4 === _ && t5[i7 + 1].startsWith("/>") ? " " : "";
      r5 += d4 === v ? s7 + l2 : c4 >= 0 ? (n7.push(e8), s7.slice(0, c4) + "$lit$" + s7.slice(c4) + o3 + y3) : s7 + o3 + (-2 === c4 ? (n7.push(void 0), i7) : y3);
    }
    const u3 = r5 + (t5[s6] || "<?>") + (2 === i6 ? "</svg>" : "");
    if (!Array.isArray(t5) || !t5.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return [void 0 !== e3 ? e3.createHTML(u3) : u3, n7];
  };
  var P = class {
    constructor({ strings: t5, _$litType$: i6 }, e8) {
      let l6;
      this.parts = [];
      let h4 = 0, d4 = 0;
      const u3 = t5.length - 1, c4 = this.parts, [v3, a4] = C(t5, i6);
      if (this.el = P.createElement(v3, e8), E.currentNode = this.el.content, 2 === i6) {
        const t6 = this.el.content, i7 = t6.firstChild;
        i7.remove(), t6.append(...i7.childNodes);
      }
      for (; null !== (l6 = E.nextNode()) && c4.length < u3; ) {
        if (1 === l6.nodeType) {
          if (l6.hasAttributes()) {
            const t6 = [];
            for (const i7 of l6.getAttributeNames())
              if (i7.endsWith("$lit$") || i7.startsWith(o3)) {
                const s6 = a4[d4++];
                if (t6.push(i7), void 0 !== s6) {
                  const t7 = l6.getAttribute(s6.toLowerCase() + "$lit$").split(o3), i8 = /([.?@])?(.*)/.exec(s6);
                  c4.push({ type: 1, index: h4, name: i8[2], strings: t7, ctor: "." === i8[1] ? R : "?" === i8[1] ? H : "@" === i8[1] ? I : M });
                } else
                  c4.push({ type: 6, index: h4 });
              }
            for (const i7 of t6)
              l6.removeAttribute(i7);
          }
          if ($.test(l6.tagName)) {
            const t6 = l6.textContent.split(o3), i7 = t6.length - 1;
            if (i7 > 0) {
              l6.textContent = s3 ? s3.emptyScript : "";
              for (let s6 = 0; s6 < i7; s6++)
                l6.append(t6[s6], r3()), E.nextNode(), c4.push({ type: 2, index: ++h4 });
              l6.append(t6[i7], r3());
            }
          }
        } else if (8 === l6.nodeType)
          if (l6.data === n3)
            c4.push({ type: 2, index: h4 });
          else {
            let t6 = -1;
            for (; -1 !== (t6 = l6.data.indexOf(o3, t6 + 1)); )
              c4.push({ type: 7, index: h4 }), t6 += o3.length - 1;
          }
        h4++;
      }
    }
    static createElement(t5, i6) {
      const s6 = h2.createElement("template");
      return s6.innerHTML = t5, s6;
    }
  };
  function V(t5, i6, s6 = t5, e8) {
    var o7, n7, l6, h4;
    if (i6 === x)
      return i6;
    let r5 = void 0 !== e8 ? null === (o7 = s6._$Cl) || void 0 === o7 ? void 0 : o7[e8] : s6._$Cu;
    const u3 = d2(i6) ? void 0 : i6._$litDirective$;
    return (null == r5 ? void 0 : r5.constructor) !== u3 && (null === (n7 = null == r5 ? void 0 : r5._$AO) || void 0 === n7 || n7.call(r5, false), void 0 === u3 ? r5 = void 0 : (r5 = new u3(t5), r5._$AT(t5, s6, e8)), void 0 !== e8 ? (null !== (l6 = (h4 = s6)._$Cl) && void 0 !== l6 ? l6 : h4._$Cl = [])[e8] = r5 : s6._$Cu = r5), void 0 !== r5 && (i6 = V(t5, r5._$AS(t5, i6.values), r5, e8)), i6;
  }
  var N = class {
    constructor(t5, i6) {
      this.v = [], this._$AN = void 0, this._$AD = t5, this._$AM = i6;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    p(t5) {
      var i6;
      const { el: { content: s6 }, parts: e8 } = this._$AD, o7 = (null !== (i6 = null == t5 ? void 0 : t5.creationScope) && void 0 !== i6 ? i6 : h2).importNode(s6, true);
      E.currentNode = o7;
      let n7 = E.nextNode(), l6 = 0, r5 = 0, d4 = e8[0];
      for (; void 0 !== d4; ) {
        if (l6 === d4.index) {
          let i7;
          2 === d4.type ? i7 = new S2(n7, n7.nextSibling, this, t5) : 1 === d4.type ? i7 = new d4.ctor(n7, d4.name, d4.strings, this, t5) : 6 === d4.type && (i7 = new L(n7, this, t5)), this.v.push(i7), d4 = e8[++r5];
        }
        l6 !== (null == d4 ? void 0 : d4.index) && (n7 = E.nextNode(), l6++);
      }
      return o7;
    }
    m(t5) {
      let i6 = 0;
      for (const s6 of this.v)
        void 0 !== s6 && (void 0 !== s6.strings ? (s6._$AI(t5, s6, i6), i6 += s6.strings.length - 2) : s6._$AI(t5[i6])), i6++;
    }
  };
  var S2 = class {
    constructor(t5, i6, s6, e8) {
      var o7;
      this.type = 2, this._$AH = b, this._$AN = void 0, this._$AA = t5, this._$AB = i6, this._$AM = s6, this.options = e8, this._$C_ = null === (o7 = null == e8 ? void 0 : e8.isConnected) || void 0 === o7 || o7;
    }
    get _$AU() {
      var t5, i6;
      return null !== (i6 = null === (t5 = this._$AM) || void 0 === t5 ? void 0 : t5._$AU) && void 0 !== i6 ? i6 : this._$C_;
    }
    get parentNode() {
      let t5 = this._$AA.parentNode;
      const i6 = this._$AM;
      return void 0 !== i6 && 11 === t5.nodeType && (t5 = i6.parentNode), t5;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t5, i6 = this) {
      t5 = V(this, t5, i6), d2(t5) ? t5 === b || null == t5 || "" === t5 ? (this._$AH !== b && this._$AR(), this._$AH = b) : t5 !== this._$AH && t5 !== x && this.$(t5) : void 0 !== t5._$litType$ ? this.T(t5) : void 0 !== t5.nodeType ? this.k(t5) : c2(t5) ? this.O(t5) : this.$(t5);
    }
    S(t5, i6 = this._$AB) {
      return this._$AA.parentNode.insertBefore(t5, i6);
    }
    k(t5) {
      this._$AH !== t5 && (this._$AR(), this._$AH = this.S(t5));
    }
    $(t5) {
      this._$AH !== b && d2(this._$AH) ? this._$AA.nextSibling.data = t5 : this.k(h2.createTextNode(t5)), this._$AH = t5;
    }
    T(t5) {
      var i6;
      const { values: s6, _$litType$: e8 } = t5, o7 = "number" == typeof e8 ? this._$AC(t5) : (void 0 === e8.el && (e8.el = P.createElement(e8.h, this.options)), e8);
      if ((null === (i6 = this._$AH) || void 0 === i6 ? void 0 : i6._$AD) === o7)
        this._$AH.m(s6);
      else {
        const t6 = new N(o7, this), i7 = t6.p(this.options);
        t6.m(s6), this.k(i7), this._$AH = t6;
      }
    }
    _$AC(t5) {
      let i6 = T.get(t5.strings);
      return void 0 === i6 && T.set(t5.strings, i6 = new P(t5)), i6;
    }
    O(t5) {
      u(this._$AH) || (this._$AH = [], this._$AR());
      const i6 = this._$AH;
      let s6, e8 = 0;
      for (const o7 of t5)
        e8 === i6.length ? i6.push(s6 = new S2(this.S(r3()), this.S(r3()), this, this.options)) : s6 = i6[e8], s6._$AI(o7), e8++;
      e8 < i6.length && (this._$AR(s6 && s6._$AB.nextSibling, e8), i6.length = e8);
    }
    _$AR(t5 = this._$AA.nextSibling, i6) {
      var s6;
      for (null === (s6 = this._$AP) || void 0 === s6 || s6.call(this, false, true, i6); t5 && t5 !== this._$AB; ) {
        const i7 = t5.nextSibling;
        t5.remove(), t5 = i7;
      }
    }
    setConnected(t5) {
      var i6;
      void 0 === this._$AM && (this._$C_ = t5, null === (i6 = this._$AP) || void 0 === i6 || i6.call(this, t5));
    }
  };
  var M = class {
    constructor(t5, i6, s6, e8, o7) {
      this.type = 1, this._$AH = b, this._$AN = void 0, this.element = t5, this.name = i6, this._$AM = e8, this.options = o7, s6.length > 2 || "" !== s6[0] || "" !== s6[1] ? (this._$AH = Array(s6.length - 1).fill(new String()), this.strings = s6) : this._$AH = b;
    }
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t5, i6 = this, s6, e8) {
      const o7 = this.strings;
      let n7 = false;
      if (void 0 === o7)
        t5 = V(this, t5, i6, 0), n7 = !d2(t5) || t5 !== this._$AH && t5 !== x, n7 && (this._$AH = t5);
      else {
        const e9 = t5;
        let l6, h4;
        for (t5 = o7[0], l6 = 0; l6 < o7.length - 1; l6++)
          h4 = V(this, e9[s6 + l6], i6, l6), h4 === x && (h4 = this._$AH[l6]), n7 || (n7 = !d2(h4) || h4 !== this._$AH[l6]), h4 === b ? t5 = b : t5 !== b && (t5 += (null != h4 ? h4 : "") + o7[l6 + 1]), this._$AH[l6] = h4;
      }
      n7 && !e8 && this.P(t5);
    }
    P(t5) {
      t5 === b ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t5 ? t5 : "");
    }
  };
  var R = class extends M {
    constructor() {
      super(...arguments), this.type = 3;
    }
    P(t5) {
      this.element[this.name] = t5 === b ? void 0 : t5;
    }
  };
  var k = s3 ? s3.emptyScript : "";
  var H = class extends M {
    constructor() {
      super(...arguments), this.type = 4;
    }
    P(t5) {
      t5 && t5 !== b ? this.element.setAttribute(this.name, k) : this.element.removeAttribute(this.name);
    }
  };
  var I = class extends M {
    constructor(t5, i6, s6, e8, o7) {
      super(t5, i6, s6, e8, o7), this.type = 5;
    }
    _$AI(t5, i6 = this) {
      var s6;
      if ((t5 = null !== (s6 = V(this, t5, i6, 0)) && void 0 !== s6 ? s6 : b) === x)
        return;
      const e8 = this._$AH, o7 = t5 === b && e8 !== b || t5.capture !== e8.capture || t5.once !== e8.once || t5.passive !== e8.passive, n7 = t5 !== b && (e8 === b || o7);
      o7 && this.element.removeEventListener(this.name, this, e8), n7 && this.element.addEventListener(this.name, this, t5), this._$AH = t5;
    }
    handleEvent(t5) {
      var i6, s6;
      "function" == typeof this._$AH ? this._$AH.call(null !== (s6 = null === (i6 = this.options) || void 0 === i6 ? void 0 : i6.host) && void 0 !== s6 ? s6 : this.element, t5) : this._$AH.handleEvent(t5);
    }
  };
  var L = class {
    constructor(t5, i6, s6) {
      this.element = t5, this.type = 6, this._$AN = void 0, this._$AM = i6, this.options = s6;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t5) {
      V(this, t5);
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
      var t5, e8;
      const i6 = super.createRenderRoot();
      return null !== (t5 = (e8 = this.renderOptions).renderBefore) && void 0 !== t5 || (e8.renderBefore = i6.firstChild), i6;
    }
    update(t5) {
      const i6 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t5), this._$Do = A(i6, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      var t5;
      super.connectedCallback(), null === (t5 = this._$Do) || void 0 === t5 || t5.setConnected(true);
    }
    disconnectedCallback() {
      var t5;
      super.disconnectedCallback(), null === (t5 = this._$Do) || void 0 === t5 || t5.setConnected(false);
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
  var e4 = (e8) => (n7) => "function" == typeof n7 ? ((e9, n8) => (customElements.define(e9, n8), n8))(e8, n7) : ((e9, n8) => {
    const { kind: t5, elements: s6 } = n8;
    return { kind: t5, elements: s6, finisher(n9) {
      customElements.define(e9, n9);
    } };
  })(e8, n7);

  // node_modules/@lit/reactive-element/decorators/property.js
  var i3 = (i6, e8) => "method" === e8.kind && e8.descriptor && !("value" in e8.descriptor) ? { ...e8, finisher(n7) {
    n7.createProperty(e8.key, i6);
  } } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e8.key, initializer() {
    "function" == typeof e8.initializer && (this[e8.key] = e8.initializer.call(this));
  }, finisher(n7) {
    n7.createProperty(e8.key, i6);
  } };
  function e5(e8) {
    return (n7, t5) => void 0 !== t5 ? ((i6, e9, n8) => {
      e9.constructor.createProperty(n8, i6);
    })(e8, n7, t5) : i3(e8, n7);
  }

  // node_modules/@lit/reactive-element/decorators/state.js
  function t3(t5) {
    return e5({ ...t5, state: true });
  }

  // node_modules/@lit/reactive-element/decorators/base.js
  var o5 = ({ finisher: e8, descriptor: t5 }) => (o7, n7) => {
    var r5;
    if (void 0 === n7) {
      const n8 = null !== (r5 = o7.originalKey) && void 0 !== r5 ? r5 : o7.key, i6 = null != t5 ? { kind: "method", placement: "prototype", key: n8, descriptor: t5(o7.key) } : { ...o7, key: n8 };
      return null != e8 && (i6.finisher = function(t6) {
        e8(t6, n8);
      }), i6;
    }
    {
      const r6 = o7.constructor;
      void 0 !== t5 && Object.defineProperty(o7, n7, t5(n7)), null == e8 || e8(r6, n7);
    }
  };

  // node_modules/@lit/reactive-element/decorators/query.js
  function i4(i6, n7) {
    return o5({ descriptor: (o7) => {
      const t5 = { get() {
        var o8, n8;
        return null !== (n8 = null === (o8 = this.renderRoot) || void 0 === o8 ? void 0 : o8.querySelector(i6)) && void 0 !== n8 ? n8 : null;
      }, enumerable: true, configurable: true };
      if (n7) {
        const n8 = "symbol" == typeof o7 ? Symbol() : "__" + o7;
        t5.get = function() {
          var o8, t6;
          return void 0 === this[n8] && (this[n8] = null !== (t6 = null === (o8 = this.renderRoot) || void 0 === o8 ? void 0 : o8.querySelector(i6)) && void 0 !== t6 ? t6 : null), this[n8];
        };
      }
      return t5;
    } });
  }

  // node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
  var n5;
  var e6 = null != (null === (n5 = window.HTMLSlotElement) || void 0 === n5 ? void 0 : n5.prototype.assignedElements) ? (o7, n7) => o7.assignedElements(n7) : (o7, n7) => o7.assignedNodes(n7).filter((o8) => o8.nodeType === Node.ELEMENT_NODE);

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
  var tagName = "table-icon";
  var TableIcon = class extends s4 {
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

  // node_modules/lit-markdown-editor/lib/icons/link-icon.js
  var tagName2 = "link-icon";
  var LinkIcon = class extends s4 {
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

  // node_modules/lit-markdown-editor/lib/helpers/index.js
  var loadComponent = (tagName9, elementDefinition) => {
    if (window.customElements.get(tagName9))
      return;
    customElements.define(tagName9, elementDefinition);
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
    flex-direction: column;
    height: 100%;
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
    min-width: 35px;
    user-select: none;
  }
  li:hover {
    background-color: var(--secondary-color-hover);
  }
  li em, li strong {
    margin: 0 auto;
  }

  textarea {
    border: 1px solid var(--secondary-color);
    border-radius: 0px;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    height: 100%;
    padding: 0.5rem;
    max-width: 100%;
    min-width: 367px;
    margin: 0;
    outline: none;
  }
`;

  // node_modules/lit-markdown-editor/lib/icons/new-picture-icon.js
  var tagName3 = "new-picture-icon";
  var NewPictureIcon = class extends s4 {
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

  // node_modules/lit-markdown-editor/lib/icons/loading-icon.js
  var tagName4 = "loading-icon";
  var LoadingIcon = class extends s4 {
    render() {
      return y`<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0, 0, 24, 24">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"
      />
    </svg>`;
    }
  };
  LoadingIcon.styles = [
    icon_default,
    i`
      svg {
        animation: spin 2s linear infinite;
      }

      @keyframes spin {
        100% {
          transform: rotate(360deg);
        }
      }
    `
  ];

  // node_modules/lit-markdown-editor/lib/icons/bullet-list-icon.js
  var tagName5 = "bullet-list-icon";
  var BulletListIcon = class extends s4 {
    render() {
      return y`<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0, 0, 48, 48">
      <path
        d="M8.55 39q-1.05 0-1.8-.725T6 36.55q0-1.05.75-1.8t1.8-.75q1 0 1.725.75.725.75.725 1.8 0 1-.725 1.725Q9.55 39 8.55 39ZM16 38v-3h26v3ZM8.55 26.5q-1.05 0-1.8-.725T6 24q0-1.05.75-1.775.75-.725 1.8-.725 1 0 1.725.75Q11 23 11 24t-.725 1.75q-.725.75-1.725.75Zm7.45-1v-3h26v3ZM8.5 14q-1.05 0-1.775-.725Q6 12.55 6 11.5q0-1.05.725-1.775Q7.45 9 8.5 9q1.05 0 1.775.725Q11 10.45 11 11.5q0 1.05-.725 1.775Q9.55 14 8.5 14Zm7.5-1v-3h26v3Z"
      />
    </svg>`;
    }
  };
  BulletListIcon.styles = [icon_default];

  // node_modules/lit-markdown-editor/lib/icons/number-list-icon.js
  var tagName6 = "number-list-icon";
  var NumberListIcon = class extends s4 {
    render() {
      return y`<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0, 0, 48, 48">
      <path
        d="M6 40v-1.7h4.2V37H8.1v-1.7h2.1V34H6v-1.7h5.9V40Zm10.45-2.45v-3H42v3ZM6 27.85v-1.6l3.75-4.4H6v-1.7h5.9v1.6l-3.8 4.4h3.8v1.7Zm10.45-2.45v-3H42v3ZM8.1 15.8V9.7H6V8h3.8v7.8Zm8.35-2.55v-3H42v3Z"
      />
    </svg>`;
    }
  };
  NumberListIcon.styles = [icon_default];

  // node_modules/lit-markdown-editor/lib/index.js
  var __decorate = function(decorators, target, key, desc) {
    var c4 = arguments.length, r5 = c4 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r5 = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i6 = decorators.length - 1; i6 >= 0; i6--)
        if (d4 = decorators[i6])
          r5 = (c4 < 3 ? d4(r5) : c4 > 3 ? d4(target, key, r5) : d4(target, key)) || r5;
    return c4 > 3 && r5 && Object.defineProperty(target, key, r5), r5;
  };
  var __classPrivateFieldGet = function(receiver, state, kind, f3) {
    if (kind === "a" && !f3)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f3 : !state.has(receiver))
      throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f3 : kind === "a" ? f3.call(receiver) : f3 ? f3.value : state.get(receiver);
  };
  var __classPrivateFieldSet = function(receiver, state, value, kind, f3) {
    if (kind === "m")
      throw new TypeError("Private method is not writable");
    if (kind === "a" && !f3)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f3 : !state.has(receiver))
      throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f3.call(receiver, value) : f3 ? f3.value = value : state.set(receiver, value), value;
  };
  var _LitMarkdownEditor_required;
  var tagName7 = "lit-markdown-editor";
  var LitMarkdownEditor = class LitMarkdownEditor2 extends s4 {
    constructor() {
      super();
      this.controller = new AbortController();
      this.loading = false;
      this.name = "";
      this.minlength = "";
      this.maxlength = "";
      _LitMarkdownEditor_required.set(this, false);
      this.handleHeaderClick = (event) => {
        var _a;
        const target = event.currentTarget;
        if (!(target instanceof HTMLElement))
          throw TypeError();
        const id = target.id;
        const markdownSymbol = (_a = this.markdownMap.get(id)) !== null && _a !== void 0 ? _a : "";
        const { selectionStart, value } = this.textarea;
        const isFullParagraph = selectionStart ? value.at(selectionStart - 1) === "\n" : true;
        const newText = `${isFullParagraph ? "" : "\n"}${markdownSymbol} `;
        const padding = markdownSymbol.length + 2;
        this.appendTextToTextArea(newText, padding);
      };
      this.handleModifierClick = (event) => {
        var _a;
        const target = event.currentTarget;
        if (!(target instanceof HTMLElement))
          throw TypeError();
        const id = target.id;
        const markdownSymbol = (_a = this.markdownMap.get(id)) !== null && _a !== void 0 ? _a : "";
        const { selectionStart, selectionEnd, value } = this.textarea;
        const newValue = ` ${markdownSymbol}${value.substring(selectionStart, selectionEnd)}${markdownSymbol} `;
        const padding = markdownSymbol.length + 1;
        this.appendTextToTextArea(newValue, padding);
      };
      this.handleTemplateClick = (event) => {
        var _a;
        const target = event.currentTarget;
        if (!(target instanceof HTMLElement))
          throw TypeError();
        const id = target.id;
        const markdownSymbol = (_a = this.markdownMap.get(id)) !== null && _a !== void 0 ? _a : "";
        const newLine = "\n";
        const newValue = newLine + markdownSymbol + newLine;
        this.appendTextToTextArea(newValue);
      };
      this.handleLinkClick = () => {
        const { selectionStart, selectionEnd, value } = this.textarea;
        const selectedText = value.substring(selectionStart, selectionEnd);
        const markdown = `[${selectedText ? selectedText : "URL"}](https://)`;
        this.appendTextToTextArea(markdown);
        const startOfURL = selectionStart + 1 + (selectedText ? selectedText.length : 3) + 2;
        this.textarea.setSelectionRange(startOfURL, startOfURL + 8);
      };
      this.handleAddPictureClick = () => {
        if (this.loading)
          return;
        this.fileInput.click();
      };
      this.handleFileInput = (event) => {
        event.stopPropagation();
        const { files } = this.fileInput;
        if (!files)
          throw Error("No files object was found on input");
        const file = files[0];
        if (!file || file.size === 0)
          return;
        this.loading = true;
        this.provideFileURL(file).then((url) => this.renderImageToTextArea(file, url)).finally(() => {
          this.loading = false;
          this.fileInput.value = "";
        });
      };
      this.handleDrop = (event) => {
        event.preventDefault();
        if (this.loading || !event.dataTransfer)
          return;
        const { files } = event.dataTransfer;
        const filesArray = Array.from(files);
        const regex = /(image|video)\/.*/;
        const filteredFiles = filesArray.filter(({ type }) => regex.test(type));
        this.loading = true;
        Promise.all(filteredFiles.map((file) => {
          return this.provideFileURL(file).then((url) => this.renderImageToTextArea(file, url));
        })).finally(() => {
          this.loading = false;
        });
      };
      this.handleKeydown = (event) => {
        if (event.isComposing)
          return;
        if (event.key !== "Enter")
          return;
        const { selectionStart, value } = this.textarea;
        const startOfParagraph = value.lastIndexOf("\n", selectionStart - 2);
        const currentParagraph = value.slice(startOfParagraph + 1, selectionStart);
        const olRegex = /^([1-9][0-9]*). [^\n ]+/;
        const isOl = currentParagraph.match(olRegex);
        const ulRegex = / - [^\n ]+/;
        const isUl = currentParagraph.match(ulRegex);
        const isEmptyUlOrOl = /^(([1-9][0-9]*).| -) +$/.test(currentParagraph);
        if (isOl || isUl || isEmptyUlOrOl) {
          event.preventDefault();
          if (isEmptyUlOrOl && "execCommand" in document) {
            this.textarea.focus();
            this.textarea.setSelectionRange(startOfParagraph + 1, selectionStart);
            return document.execCommand("delete", false);
          }
          const symbol = isOl ? `
${Number(isOl[1]) + 1}. ` : "\n - ";
          this.appendTextToTextArea(symbol, symbol.length);
        }
      };
      const elementInternalsSupported = "attachInternals" in this;
      this.internals = elementInternalsSupported ? this.attachInternals() : null;
      this.markdownMap = /* @__PURE__ */ new Map([
        ["h1", "#"],
        ["h2", "##"],
        ["h3", "###"],
        ["h4", "####"],
        ["h5", "#####"],
        ["ul", " -"],
        ["ol", "1."],
        ["i", "_"],
        ["b", "**"],
        ["table", "| A | B |\n| --- | --- |\n| a | b |"]
      ]);
      loadComponent(tagName, TableIcon);
      loadComponent(tagName2, LinkIcon);
      loadComponent(tagName3, NewPictureIcon);
      loadComponent(tagName4, LoadingIcon);
      loadComponent(tagName5, BulletListIcon);
      loadComponent(tagName6, NumberListIcon);
    }
    get required() {
      return __classPrivateFieldGet(this, _LitMarkdownEditor_required, "f");
    }
    set required(newVal) {
      __classPrivateFieldSet(this, _LitMarkdownEditor_required, newVal, "f");
      this.internals && (this.internals.ariaRequired = String(this.required));
      this.renderToLightDom();
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
      this.triggerInputEvent();
    }
    firstUpdated(_changedProperties) {
      var _a;
      super.firstUpdated(_changedProperties);
      this.value = (_a = this.textContent) !== null && _a !== void 0 ? _a : "";
      this.renderToLightDom();
      this.textarea.addEventListener("input", () => {
        this.renderToLightDom();
      }, { signal: this.controller.signal });
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.controller.abort();
    }
    appendTextToTextArea(textToAdd, selectionPadding = 1) {
      const { selectionStart, selectionEnd, value } = this.textarea;
      const newSelectionStart = selectionStart + selectionPadding;
      const execCommandSupported = "execCommand" in document;
      if (execCommandSupported) {
        this.textarea.focus();
        this.textarea.setSelectionRange(selectionStart, selectionEnd);
        const succeeded = document.execCommand("insertText", false, textToAdd);
        if (succeeded) {
          this.textarea.setSelectionRange(newSelectionStart, newSelectionStart);
          return;
        }
      }
      const textUntilSelectionStart = value.substring(0, selectionStart);
      const textAfterSelectionEnd = value.substring(selectionEnd);
      this.value = textUntilSelectionStart + textToAdd + textAfterSelectionEnd;
      this.textarea.focus();
      this.textarea.setSelectionRange(newSelectionStart, newSelectionStart);
    }
    renderImageToTextArea(file, url) {
      const markdown = `![${file.name}](${url} "${file.name}")`;
      const padding = markdown.length + 1;
      this.appendTextToTextArea(markdown, padding);
    }
    provideFileURL(file) {
      const objectURL = URL.createObjectURL(file);
      return Promise.resolve(objectURL);
    }
    triggerInputEvent() {
      this.dispatchEvent(new Event("input", { composed: true }));
    }
    renderToLightDom() {
      if (!this.textarea)
        return;
      if (!this.internals) {
        A(y`<textarea
          slot="input"
          name=${this.name}
          hidden
          .value=${this.value}
          ?required=${this.required}
        ></textarea>`, this);
        return;
      }
      this.internals.setFormValue(this.value);
      if (this.required && this.value.length === 0)
        return this.internals.setValidity({ valueMissing: true }, "Editor is empty.", this.textarea);
      const maxlengthNum = Number(this.maxlength);
      if (Boolean(maxlengthNum) && this.value.length > maxlengthNum)
        return this.internals.setValidity({ tooLong: true }, `Max character length is ${this.maxlength} characters. Current character length is ${this.value.length}.`, this.textarea);
      const minlengthNum = Number(this.minlength);
      if (Boolean(minlengthNum) && this.value.length < minlengthNum)
        return this.internals.setValidity({ tooShort: true }, `At least ${this.minlength} characters are required.`, this.textarea);
      this.internals.setValidity({});
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
          <li @click=${this.handleHeaderClick} id="ul"><bullet-list-icon></bullet-list-icon></li>
          <li @click=${this.handleHeaderClick} id="ol"><number-list-icon></number-list-icon></li>
          <li @click=${this.handleModifierClick} id="i"><em>i</em></li>
          <li @click=${this.handleModifierClick} id="b"><strong>B</strong></li>
          <li @click=${this.handleTemplateClick} id="table">
            <table-icon></table-icon>
          </li>
          <li @click=${this.handleLinkClick} id="link">
            <link-icon></link-icon>
          </li>
          <li @click=${this.handleAddPictureClick} style="position: relative;">
            ${this.loading ? y`<loading-icon small black></loading-icon>` : y`<new-picture-icon></new-picture-icon>`}
          </li>
        </ul>
      </nav>
      <textarea name=${this.name} autocomplete="off" @drop=${this.handleDrop} @keydown=${this.handleKeydown}></textarea>
      <slot name="input"></slot>
    `;
    }
  };
  _LitMarkdownEditor_required = /* @__PURE__ */ new WeakMap();
  LitMarkdownEditor.formAssociated = true;
  LitMarkdownEditor.styles = [globalStyles, form_default, markdownStyles];
  __decorate([
    t3()
  ], LitMarkdownEditor.prototype, "loading", void 0);
  __decorate([
    e5({ attribute: "name" })
  ], LitMarkdownEditor.prototype, "name", void 0);
  __decorate([
    e5({ attribute: "minlength" })
  ], LitMarkdownEditor.prototype, "minlength", void 0);
  __decorate([
    e5({ attribute: "maxlength" })
  ], LitMarkdownEditor.prototype, "maxlength", void 0);
  __decorate([
    i4("textarea")
  ], LitMarkdownEditor.prototype, "textarea", void 0);
  __decorate([
    i4("input#add-file")
  ], LitMarkdownEditor.prototype, "fileInput", void 0);
  __decorate([
    e5({ attribute: "required", type: Boolean })
  ], LitMarkdownEditor.prototype, "required", null);
  LitMarkdownEditor = __decorate([
    e4(tagName7)
  ], LitMarkdownEditor);

  // node_modules/lit/node_modules/lit-html/lit-html.js
  var t4;
  var i5 = window;
  var s5 = i5.trustedTypes;
  var e7 = s5 ? s5.createPolicy("lit-html", { createHTML: (t5) => t5 }) : void 0;
  var o6 = `lit$${(Math.random() + "").slice(9)}$`;
  var n6 = "?" + o6;
  var l5 = `<${n6}>`;
  var h3 = document;
  var r4 = (t5 = "") => h3.createComment(t5);
  var d3 = (t5) => null === t5 || "object" != typeof t5 && "function" != typeof t5;
  var u2 = Array.isArray;
  var c3 = (t5) => u2(t5) || "function" == typeof (null == t5 ? void 0 : t5[Symbol.iterator]);
  var v2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var a3 = /-->/g;
  var f2 = />/g;
  var _2 = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var m2 = /'/g;
  var p2 = /"/g;
  var $2 = /^(?:script|style|textarea|title)$/i;
  var g2 = (t5) => (i6, ...s6) => ({ _$litType$: t5, strings: i6, values: s6 });
  var y2 = g2(1);
  var w2 = g2(2);
  var x2 = Symbol.for("lit-noChange");
  var b2 = Symbol.for("lit-nothing");
  var T2 = /* @__PURE__ */ new WeakMap();
  var A2 = h3.createTreeWalker(h3, 129, null, false);
  var E2 = (t5, i6) => {
    const s6 = t5.length - 1, n7 = [];
    let h4, r5 = 2 === i6 ? "<svg>" : "", d4 = v2;
    for (let i7 = 0; i7 < s6; i7++) {
      const s7 = t5[i7];
      let e8, u4, c4 = -1, g3 = 0;
      for (; g3 < s7.length && (d4.lastIndex = g3, u4 = d4.exec(s7), null !== u4); )
        g3 = d4.lastIndex, d4 === v2 ? "!--" === u4[1] ? d4 = a3 : void 0 !== u4[1] ? d4 = f2 : void 0 !== u4[2] ? ($2.test(u4[2]) && (h4 = RegExp("</" + u4[2], "g")), d4 = _2) : void 0 !== u4[3] && (d4 = _2) : d4 === _2 ? ">" === u4[0] ? (d4 = null != h4 ? h4 : v2, c4 = -1) : void 0 === u4[1] ? c4 = -2 : (c4 = d4.lastIndex - u4[2].length, e8 = u4[1], d4 = void 0 === u4[3] ? _2 : '"' === u4[3] ? p2 : m2) : d4 === p2 || d4 === m2 ? d4 = _2 : d4 === a3 || d4 === f2 ? d4 = v2 : (d4 = _2, h4 = void 0);
      const y3 = d4 === _2 && t5[i7 + 1].startsWith("/>") ? " " : "";
      r5 += d4 === v2 ? s7 + l5 : c4 >= 0 ? (n7.push(e8), s7.slice(0, c4) + "$lit$" + s7.slice(c4) + o6 + y3) : s7 + o6 + (-2 === c4 ? (n7.push(void 0), i7) : y3);
    }
    const u3 = r5 + (t5[s6] || "<?>") + (2 === i6 ? "</svg>" : "");
    if (!Array.isArray(t5) || !t5.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return [void 0 !== e7 ? e7.createHTML(u3) : u3, n7];
  };
  var C2 = class {
    constructor({ strings: t5, _$litType$: i6 }, e8) {
      let l6;
      this.parts = [];
      let h4 = 0, d4 = 0;
      const u3 = t5.length - 1, c4 = this.parts, [v3, a4] = E2(t5, i6);
      if (this.el = C2.createElement(v3, e8), A2.currentNode = this.el.content, 2 === i6) {
        const t6 = this.el.content, i7 = t6.firstChild;
        i7.remove(), t6.append(...i7.childNodes);
      }
      for (; null !== (l6 = A2.nextNode()) && c4.length < u3; ) {
        if (1 === l6.nodeType) {
          if (l6.hasAttributes()) {
            const t6 = [];
            for (const i7 of l6.getAttributeNames())
              if (i7.endsWith("$lit$") || i7.startsWith(o6)) {
                const s6 = a4[d4++];
                if (t6.push(i7), void 0 !== s6) {
                  const t7 = l6.getAttribute(s6.toLowerCase() + "$lit$").split(o6), i8 = /([.?@])?(.*)/.exec(s6);
                  c4.push({ type: 1, index: h4, name: i8[2], strings: t7, ctor: "." === i8[1] ? M2 : "?" === i8[1] ? k2 : "@" === i8[1] ? H2 : S3 });
                } else
                  c4.push({ type: 6, index: h4 });
              }
            for (const i7 of t6)
              l6.removeAttribute(i7);
          }
          if ($2.test(l6.tagName)) {
            const t6 = l6.textContent.split(o6), i7 = t6.length - 1;
            if (i7 > 0) {
              l6.textContent = s5 ? s5.emptyScript : "";
              for (let s6 = 0; s6 < i7; s6++)
                l6.append(t6[s6], r4()), A2.nextNode(), c4.push({ type: 2, index: ++h4 });
              l6.append(t6[i7], r4());
            }
          }
        } else if (8 === l6.nodeType)
          if (l6.data === n6)
            c4.push({ type: 2, index: h4 });
          else {
            let t6 = -1;
            for (; -1 !== (t6 = l6.data.indexOf(o6, t6 + 1)); )
              c4.push({ type: 7, index: h4 }), t6 += o6.length - 1;
          }
        h4++;
      }
    }
    static createElement(t5, i6) {
      const s6 = h3.createElement("template");
      return s6.innerHTML = t5, s6;
    }
  };
  function P2(t5, i6, s6 = t5, e8) {
    var o7, n7, l6, h4;
    if (i6 === x2)
      return i6;
    let r5 = void 0 !== e8 ? null === (o7 = s6._$Co) || void 0 === o7 ? void 0 : o7[e8] : s6._$Cl;
    const u3 = d3(i6) ? void 0 : i6._$litDirective$;
    return (null == r5 ? void 0 : r5.constructor) !== u3 && (null === (n7 = null == r5 ? void 0 : r5._$AO) || void 0 === n7 || n7.call(r5, false), void 0 === u3 ? r5 = void 0 : (r5 = new u3(t5), r5._$AT(t5, s6, e8)), void 0 !== e8 ? (null !== (l6 = (h4 = s6)._$Co) && void 0 !== l6 ? l6 : h4._$Co = [])[e8] = r5 : s6._$Cl = r5), void 0 !== r5 && (i6 = P2(t5, r5._$AS(t5, i6.values), r5, e8)), i6;
  }
  var V2 = class {
    constructor(t5, i6) {
      this.u = [], this._$AN = void 0, this._$AD = t5, this._$AM = i6;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    v(t5) {
      var i6;
      const { el: { content: s6 }, parts: e8 } = this._$AD, o7 = (null !== (i6 = null == t5 ? void 0 : t5.creationScope) && void 0 !== i6 ? i6 : h3).importNode(s6, true);
      A2.currentNode = o7;
      let n7 = A2.nextNode(), l6 = 0, r5 = 0, d4 = e8[0];
      for (; void 0 !== d4; ) {
        if (l6 === d4.index) {
          let i7;
          2 === d4.type ? i7 = new N2(n7, n7.nextSibling, this, t5) : 1 === d4.type ? i7 = new d4.ctor(n7, d4.name, d4.strings, this, t5) : 6 === d4.type && (i7 = new I2(n7, this, t5)), this.u.push(i7), d4 = e8[++r5];
        }
        l6 !== (null == d4 ? void 0 : d4.index) && (n7 = A2.nextNode(), l6++);
      }
      return o7;
    }
    p(t5) {
      let i6 = 0;
      for (const s6 of this.u)
        void 0 !== s6 && (void 0 !== s6.strings ? (s6._$AI(t5, s6, i6), i6 += s6.strings.length - 2) : s6._$AI(t5[i6])), i6++;
    }
  };
  var N2 = class {
    constructor(t5, i6, s6, e8) {
      var o7;
      this.type = 2, this._$AH = b2, this._$AN = void 0, this._$AA = t5, this._$AB = i6, this._$AM = s6, this.options = e8, this._$Cm = null === (o7 = null == e8 ? void 0 : e8.isConnected) || void 0 === o7 || o7;
    }
    get _$AU() {
      var t5, i6;
      return null !== (i6 = null === (t5 = this._$AM) || void 0 === t5 ? void 0 : t5._$AU) && void 0 !== i6 ? i6 : this._$Cm;
    }
    get parentNode() {
      let t5 = this._$AA.parentNode;
      const i6 = this._$AM;
      return void 0 !== i6 && 11 === t5.nodeType && (t5 = i6.parentNode), t5;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t5, i6 = this) {
      t5 = P2(this, t5, i6), d3(t5) ? t5 === b2 || null == t5 || "" === t5 ? (this._$AH !== b2 && this._$AR(), this._$AH = b2) : t5 !== this._$AH && t5 !== x2 && this.g(t5) : void 0 !== t5._$litType$ ? this.$(t5) : void 0 !== t5.nodeType ? this.T(t5) : c3(t5) ? this.k(t5) : this.g(t5);
    }
    O(t5, i6 = this._$AB) {
      return this._$AA.parentNode.insertBefore(t5, i6);
    }
    T(t5) {
      this._$AH !== t5 && (this._$AR(), this._$AH = this.O(t5));
    }
    g(t5) {
      this._$AH !== b2 && d3(this._$AH) ? this._$AA.nextSibling.data = t5 : this.T(h3.createTextNode(t5)), this._$AH = t5;
    }
    $(t5) {
      var i6;
      const { values: s6, _$litType$: e8 } = t5, o7 = "number" == typeof e8 ? this._$AC(t5) : (void 0 === e8.el && (e8.el = C2.createElement(e8.h, this.options)), e8);
      if ((null === (i6 = this._$AH) || void 0 === i6 ? void 0 : i6._$AD) === o7)
        this._$AH.p(s6);
      else {
        const t6 = new V2(o7, this), i7 = t6.v(this.options);
        t6.p(s6), this.T(i7), this._$AH = t6;
      }
    }
    _$AC(t5) {
      let i6 = T2.get(t5.strings);
      return void 0 === i6 && T2.set(t5.strings, i6 = new C2(t5)), i6;
    }
    k(t5) {
      u2(this._$AH) || (this._$AH = [], this._$AR());
      const i6 = this._$AH;
      let s6, e8 = 0;
      for (const o7 of t5)
        e8 === i6.length ? i6.push(s6 = new N2(this.O(r4()), this.O(r4()), this, this.options)) : s6 = i6[e8], s6._$AI(o7), e8++;
      e8 < i6.length && (this._$AR(s6 && s6._$AB.nextSibling, e8), i6.length = e8);
    }
    _$AR(t5 = this._$AA.nextSibling, i6) {
      var s6;
      for (null === (s6 = this._$AP) || void 0 === s6 || s6.call(this, false, true, i6); t5 && t5 !== this._$AB; ) {
        const i7 = t5.nextSibling;
        t5.remove(), t5 = i7;
      }
    }
    setConnected(t5) {
      var i6;
      void 0 === this._$AM && (this._$Cm = t5, null === (i6 = this._$AP) || void 0 === i6 || i6.call(this, t5));
    }
  };
  var S3 = class {
    constructor(t5, i6, s6, e8, o7) {
      this.type = 1, this._$AH = b2, this._$AN = void 0, this.element = t5, this.name = i6, this._$AM = e8, this.options = o7, s6.length > 2 || "" !== s6[0] || "" !== s6[1] ? (this._$AH = Array(s6.length - 1).fill(new String()), this.strings = s6) : this._$AH = b2;
    }
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t5, i6 = this, s6, e8) {
      const o7 = this.strings;
      let n7 = false;
      if (void 0 === o7)
        t5 = P2(this, t5, i6, 0), n7 = !d3(t5) || t5 !== this._$AH && t5 !== x2, n7 && (this._$AH = t5);
      else {
        const e9 = t5;
        let l6, h4;
        for (t5 = o7[0], l6 = 0; l6 < o7.length - 1; l6++)
          h4 = P2(this, e9[s6 + l6], i6, l6), h4 === x2 && (h4 = this._$AH[l6]), n7 || (n7 = !d3(h4) || h4 !== this._$AH[l6]), h4 === b2 ? t5 = b2 : t5 !== b2 && (t5 += (null != h4 ? h4 : "") + o7[l6 + 1]), this._$AH[l6] = h4;
      }
      n7 && !e8 && this.j(t5);
    }
    j(t5) {
      t5 === b2 ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t5 ? t5 : "");
    }
  };
  var M2 = class extends S3 {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t5) {
      this.element[this.name] = t5 === b2 ? void 0 : t5;
    }
  };
  var R2 = s5 ? s5.emptyScript : "";
  var k2 = class extends S3 {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t5) {
      t5 && t5 !== b2 ? this.element.setAttribute(this.name, R2) : this.element.removeAttribute(this.name);
    }
  };
  var H2 = class extends S3 {
    constructor(t5, i6, s6, e8, o7) {
      super(t5, i6, s6, e8, o7), this.type = 5;
    }
    _$AI(t5, i6 = this) {
      var s6;
      if ((t5 = null !== (s6 = P2(this, t5, i6, 0)) && void 0 !== s6 ? s6 : b2) === x2)
        return;
      const e8 = this._$AH, o7 = t5 === b2 && e8 !== b2 || t5.capture !== e8.capture || t5.once !== e8.once || t5.passive !== e8.passive, n7 = t5 !== b2 && (e8 === b2 || o7);
      o7 && this.element.removeEventListener(this.name, this, e8), n7 && this.element.addEventListener(this.name, this, t5), this._$AH = t5;
    }
    handleEvent(t5) {
      var i6, s6;
      "function" == typeof this._$AH ? this._$AH.call(null !== (s6 = null === (i6 = this.options) || void 0 === i6 ? void 0 : i6.host) && void 0 !== s6 ? s6 : this.element, t5) : this._$AH.handleEvent(t5);
    }
  };
  var I2 = class {
    constructor(t5, i6, s6) {
      this.element = t5, this.type = 6, this._$AN = void 0, this._$AM = i6, this.options = s6;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t5) {
      P2(this, t5);
    }
  };
  var z = i5.litHtmlPolyfillSupport;
  null == z || z(C2, N2), (null !== (t4 = i5.litHtmlVersions) && void 0 !== t4 ? t4 : i5.litHtmlVersions = []).push("2.4.0");

  // src/application/components/styles/index.ts
  var globalStyles2 = i`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
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

  // src/application/components/base-modal.ts
  var tagName8 = "base-modal";
  var _stopPropagation, _closeModal;
  var BaseModal = class extends s4 {
    constructor() {
      super(...arguments);
      this.modalTitle = "";
      this.show = false;
      __privateAdd(this, _stopPropagation, (event) => event.stopPropagation());
      __privateAdd(this, _closeModal, () => {
        this.removeAttribute("show");
        this.dispatchEvent(new Event("close", { bubbles: false }));
      });
    }
    render() {
      return y`
      <div @mousedown=${__privateGet(this, _closeModal)} id="backdrop" class="modal">
        <div @mousedown=${__privateGet(this, _stopPropagation)} id="modal-container">
          <header>
            <h1 id="title">${this.modalTitle}</h1>
            <svg
              @click=${__privateGet(this, _closeModal)}
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              width="48"
              viewBox="0, 0, 48, 48"
            >
              <path
                d="M12.45 37.65 10.35 35.55 21.9 24 10.35 12.45 12.45 10.35 24 21.9 35.55 10.35 37.65 12.45 26.1 24 37.65 35.55 35.55 37.65 24 26.1Z"
              />
            </svg>
          </header>
          <div id="modal-content">
            <slot></slot>
            <slot name="buttons"></slot>
          </div>
        </div>
      </div>
    `;
    }
  };
  _stopPropagation = new WeakMap();
  _closeModal = new WeakMap();
  BaseModal.styles = [
    globalStyles2,
    i`
      :host {
        --secondary-color: rgb(214, 214, 214);
      }

      :host([show]) #backdrop {
        display: flex;
        animation: fadeIn forwards 0.3s;
      }
      #backdrop {
        display: none;
        position: fixed;
        opacity: 0;
        z-index: 10;
        left: 0;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.4);
        animation: fadeOut forwards 0.3s;
      }
      #modal-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        background: white;
        border: 1px white solid;
        border-radius: 10px;
        padding: 1rem;
        width: 90%;
        max-width: 450px;
        max-height: 70%;
        margin: auto;
        overflow-y: auto;
      }

      ::slotted(button) {
        flex: 0 1 45%;
        min-height: "50px";
      }

      slot[name="buttons"] {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      #title {
        font-size: 1.5rem;
      }

      header {
        border-bottom: 1px solid var(--secondary-color);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
      }

      svg {
        height: 34px;
        width: auto;
        cursor: pointer;
        fill: var(--secondary-color);
      }

      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }

      @keyframes fadeOut {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
    `
  ];
  __decorateClass([
    e5({ attribute: "modal-title" })
  ], BaseModal.prototype, "modalTitle", 2);
  __decorateClass([
    e5({ attribute: true, reflect: true, type: Boolean })
  ], BaseModal.prototype, "show", 2);
  BaseModal = __decorateClass([
    e4(tagName8)
  ], BaseModal);

  // src/application/renderer.ts
  var import_save_buttons = __toESM(require_save_buttons());

  // src/application/helpers/load-zip.ts
  var import_jszip = __toESM(require_jszip_min());
  var loadZipFile = (file) => import_jszip.default.loadAsync(file).then((contents) => {
    const { files } = contents;
    const fileNames = Object.keys(files);
    const regex = /.*\.md$/;
    const articleFileName = fileNames.find((name) => regex.test(name));
    if (!articleFileName)
      throw Error("No markdown file was found in archive.");
    const markdownFile = files[articleFileName];
    return markdownFile.async("text").then((markdownRaw) => {
      const markdownImageRegex = /\!\[.*\]\(blob:file:.* "(.*)"\)/g;
      const imageFileNamesRegexMatches = Array.from(
        markdownRaw.matchAll(markdownImageRegex)
      );
      if (!imageFileNamesRegexMatches.length)
        return Promise.resolve(markdownRaw);
      const imageFileNames = imageFileNamesRegexMatches.map(
        ([_3, fileName]) => fileName
      );
      const openImagePromises = imageFileNames.reduce(
        (prev, fileName) => {
          const file2 = files[fileName];
          if (!file2)
            return prev;
          const promise = file2.async("blob").then((blob) => [fileName, blob]);
          return [...prev, promise];
        },
        []
      );
      return Promise.allSettled(openImagePromises).then((results) => {
        const imageBlobMap = results.reduce(
          (prev, result) => {
            if (result.status === "rejected")
              return prev;
            const [name, blob] = result.value;
            prev.set(name, blob);
            return prev;
          },
          /* @__PURE__ */ new Map()
        );
        let replacedMarkdown = markdownRaw;
        for (const [match, fileName] of imageFileNamesRegexMatches) {
          const blob = imageBlobMap.get(fileName);
          if (!blob)
            throw Error("Image blob not in map.");
          const newObjectURL = URL.createObjectURL(blob);
          const newImageMarkdown = match.replace(
            /blob:file:.* "/,
            newObjectURL + ' "'
          );
          replacedMarkdown = replacedMarkdown.replace(match, newImageMarkdown);
        }
        return Promise.resolve(replacedMarkdown);
      });
    });
  });
  var load_zip_default = loadZipFile;

  // src/application/scripts/open-button.ts
  var editor = document.querySelector("lit-markdown-editor");
  var openButton = document.querySelector("button#open");
  var handleOpenClick = () => {
    const pickerOpts = {
      types: [
        {
          accept: {
            "text/plain": [".md"],
            "application/zip": [".zip"]
          }
        }
      ],
      excludeAcceptAllOption: true,
      multiple: false
    };
    window.showOpenFilePicker(pickerOpts).then(([fileHandler]) => fileHandler.getFile()).then((file) => {
      if (!(file && file.size))
        return;
      const regex = /.*\.md$/;
      if (regex.test(file.name)) {
        return file.text().then((markdown) => {
          if (!markdown.length)
            return;
          editor.value = markdown;
        });
      }
      load_zip_default(file).then((markdown) => {
        editor.value = markdown;
      });
    });
  };
  openButton.addEventListener("click", handleOpenClick);

  // node_modules/tslib/modules/index.js
  var import_tslib = __toESM(require_tslib(), 1);
  var {
    __extends,
    __assign,
    __rest,
    __decorate: __decorate2,
    __param,
    __metadata,
    __awaiter,
    __generator,
    __exportStar,
    __createBinding,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet: __classPrivateFieldGet2,
    __classPrivateFieldSet: __classPrivateFieldSet2,
    __classPrivateFieldIn
  } = import_tslib.default;

  // node_modules/rxjs/dist/esm5/internal/util/isFunction.js
  function isFunction(value) {
    return typeof value === "function";
  }

  // node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js
  function createErrorClass(createImpl) {
    var _super = function(instance) {
      Error.call(instance);
      instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
  }

  // node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js
  var UnsubscriptionError = createErrorClass(function(_super) {
    return function UnsubscriptionErrorImpl(errors) {
      _super(this);
      this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i6) {
        return i6 + 1 + ") " + err.toString();
      }).join("\n  ") : "";
      this.name = "UnsubscriptionError";
      this.errors = errors;
    };
  });

  // node_modules/rxjs/dist/esm5/internal/util/arrRemove.js
  function arrRemove(arr, item) {
    if (arr) {
      var index = arr.indexOf(item);
      0 <= index && arr.splice(index, 1);
    }
  }

  // node_modules/rxjs/dist/esm5/internal/Subscription.js
  var Subscription = function() {
    function Subscription2(initialTeardown) {
      this.initialTeardown = initialTeardown;
      this.closed = false;
      this._parentage = null;
      this._finalizers = null;
    }
    Subscription2.prototype.unsubscribe = function() {
      var e_1, _a, e_2, _b;
      var errors;
      if (!this.closed) {
        this.closed = true;
        var _parentage = this._parentage;
        if (_parentage) {
          this._parentage = null;
          if (Array.isArray(_parentage)) {
            try {
              for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                var parent_1 = _parentage_1_1.value;
                parent_1.remove(this);
              }
            } catch (e_1_1) {
              e_1 = { error: e_1_1 };
            } finally {
              try {
                if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return))
                  _a.call(_parentage_1);
              } finally {
                if (e_1)
                  throw e_1.error;
              }
            }
          } else {
            _parentage.remove(this);
          }
        }
        var initialFinalizer = this.initialTeardown;
        if (isFunction(initialFinalizer)) {
          try {
            initialFinalizer();
          } catch (e8) {
            errors = e8 instanceof UnsubscriptionError ? e8.errors : [e8];
          }
        }
        var _finalizers = this._finalizers;
        if (_finalizers) {
          this._finalizers = null;
          try {
            for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
              var finalizer = _finalizers_1_1.value;
              try {
                execFinalizer(finalizer);
              } catch (err) {
                errors = errors !== null && errors !== void 0 ? errors : [];
                if (err instanceof UnsubscriptionError) {
                  errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                } else {
                  errors.push(err);
                }
              }
            }
          } catch (e_2_1) {
            e_2 = { error: e_2_1 };
          } finally {
            try {
              if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return))
                _b.call(_finalizers_1);
            } finally {
              if (e_2)
                throw e_2.error;
            }
          }
        }
        if (errors) {
          throw new UnsubscriptionError(errors);
        }
      }
    };
    Subscription2.prototype.add = function(teardown) {
      var _a;
      if (teardown && teardown !== this) {
        if (this.closed) {
          execFinalizer(teardown);
        } else {
          if (teardown instanceof Subscription2) {
            if (teardown.closed || teardown._hasParent(this)) {
              return;
            }
            teardown._addParent(this);
          }
          (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
        }
      }
    };
    Subscription2.prototype._hasParent = function(parent) {
      var _parentage = this._parentage;
      return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
    };
    Subscription2.prototype._addParent = function(parent) {
      var _parentage = this._parentage;
      this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
    };
    Subscription2.prototype._removeParent = function(parent) {
      var _parentage = this._parentage;
      if (_parentage === parent) {
        this._parentage = null;
      } else if (Array.isArray(_parentage)) {
        arrRemove(_parentage, parent);
      }
    };
    Subscription2.prototype.remove = function(teardown) {
      var _finalizers = this._finalizers;
      _finalizers && arrRemove(_finalizers, teardown);
      if (teardown instanceof Subscription2) {
        teardown._removeParent(this);
      }
    };
    Subscription2.EMPTY = function() {
      var empty = new Subscription2();
      empty.closed = true;
      return empty;
    }();
    return Subscription2;
  }();
  var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
  function isSubscription(value) {
    return value instanceof Subscription || value && "closed" in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe);
  }
  function execFinalizer(finalizer) {
    if (isFunction(finalizer)) {
      finalizer();
    } else {
      finalizer.unsubscribe();
    }
  }

  // node_modules/rxjs/dist/esm5/internal/config.js
  var config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: void 0,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false
  };

  // node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js
  var timeoutProvider = {
    setTimeout: function(handler, timeout) {
      var args = [];
      for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
      }
      var delegate = timeoutProvider.delegate;
      if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
        return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout], __read(args)));
      }
      return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
    },
    clearTimeout: function(handle) {
      var delegate = timeoutProvider.delegate;
      return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
    },
    delegate: void 0
  };

  // node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js
  function reportUnhandledError(err) {
    timeoutProvider.setTimeout(function() {
      var onUnhandledError = config.onUnhandledError;
      if (onUnhandledError) {
        onUnhandledError(err);
      } else {
        throw err;
      }
    });
  }

  // node_modules/rxjs/dist/esm5/internal/util/noop.js
  function noop() {
  }

  // node_modules/rxjs/dist/esm5/internal/NotificationFactories.js
  var COMPLETE_NOTIFICATION = function() {
    return createNotification("C", void 0, void 0);
  }();
  function errorNotification(error) {
    return createNotification("E", void 0, error);
  }
  function nextNotification(value) {
    return createNotification("N", value, void 0);
  }
  function createNotification(kind, value, error) {
    return {
      kind,
      value,
      error
    };
  }

  // node_modules/rxjs/dist/esm5/internal/util/errorContext.js
  var context = null;
  function errorContext(cb) {
    if (config.useDeprecatedSynchronousErrorHandling) {
      var isRoot = !context;
      if (isRoot) {
        context = { errorThrown: false, error: null };
      }
      cb();
      if (isRoot) {
        var _a = context, errorThrown = _a.errorThrown, error = _a.error;
        context = null;
        if (errorThrown) {
          throw error;
        }
      }
    } else {
      cb();
    }
  }
  function captureError(err) {
    if (config.useDeprecatedSynchronousErrorHandling && context) {
      context.errorThrown = true;
      context.error = err;
    }
  }

  // node_modules/rxjs/dist/esm5/internal/Subscriber.js
  var Subscriber = function(_super) {
    __extends(Subscriber2, _super);
    function Subscriber2(destination) {
      var _this = _super.call(this) || this;
      _this.isStopped = false;
      if (destination) {
        _this.destination = destination;
        if (isSubscription(destination)) {
          destination.add(_this);
        }
      } else {
        _this.destination = EMPTY_OBSERVER;
      }
      return _this;
    }
    Subscriber2.create = function(next, error, complete) {
      return new SafeSubscriber(next, error, complete);
    };
    Subscriber2.prototype.next = function(value) {
      if (this.isStopped) {
        handleStoppedNotification(nextNotification(value), this);
      } else {
        this._next(value);
      }
    };
    Subscriber2.prototype.error = function(err) {
      if (this.isStopped) {
        handleStoppedNotification(errorNotification(err), this);
      } else {
        this.isStopped = true;
        this._error(err);
      }
    };
    Subscriber2.prototype.complete = function() {
      if (this.isStopped) {
        handleStoppedNotification(COMPLETE_NOTIFICATION, this);
      } else {
        this.isStopped = true;
        this._complete();
      }
    };
    Subscriber2.prototype.unsubscribe = function() {
      if (!this.closed) {
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
        this.destination = null;
      }
    };
    Subscriber2.prototype._next = function(value) {
      this.destination.next(value);
    };
    Subscriber2.prototype._error = function(err) {
      try {
        this.destination.error(err);
      } finally {
        this.unsubscribe();
      }
    };
    Subscriber2.prototype._complete = function() {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    };
    return Subscriber2;
  }(Subscription);
  var _bind = Function.prototype.bind;
  function bind(fn, thisArg) {
    return _bind.call(fn, thisArg);
  }
  var ConsumerObserver = function() {
    function ConsumerObserver2(partialObserver) {
      this.partialObserver = partialObserver;
    }
    ConsumerObserver2.prototype.next = function(value) {
      var partialObserver = this.partialObserver;
      if (partialObserver.next) {
        try {
          partialObserver.next(value);
        } catch (error) {
          handleUnhandledError(error);
        }
      }
    };
    ConsumerObserver2.prototype.error = function(err) {
      var partialObserver = this.partialObserver;
      if (partialObserver.error) {
        try {
          partialObserver.error(err);
        } catch (error) {
          handleUnhandledError(error);
        }
      } else {
        handleUnhandledError(err);
      }
    };
    ConsumerObserver2.prototype.complete = function() {
      var partialObserver = this.partialObserver;
      if (partialObserver.complete) {
        try {
          partialObserver.complete();
        } catch (error) {
          handleUnhandledError(error);
        }
      }
    };
    return ConsumerObserver2;
  }();
  var SafeSubscriber = function(_super) {
    __extends(SafeSubscriber2, _super);
    function SafeSubscriber2(observerOrNext, error, complete) {
      var _this = _super.call(this) || this;
      var partialObserver;
      if (isFunction(observerOrNext) || !observerOrNext) {
        partialObserver = {
          next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : void 0,
          error: error !== null && error !== void 0 ? error : void 0,
          complete: complete !== null && complete !== void 0 ? complete : void 0
        };
      } else {
        var context_1;
        if (_this && config.useDeprecatedNextContext) {
          context_1 = Object.create(observerOrNext);
          context_1.unsubscribe = function() {
            return _this.unsubscribe();
          };
          partialObserver = {
            next: observerOrNext.next && bind(observerOrNext.next, context_1),
            error: observerOrNext.error && bind(observerOrNext.error, context_1),
            complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
          };
        } else {
          partialObserver = observerOrNext;
        }
      }
      _this.destination = new ConsumerObserver(partialObserver);
      return _this;
    }
    return SafeSubscriber2;
  }(Subscriber);
  function handleUnhandledError(error) {
    if (config.useDeprecatedSynchronousErrorHandling) {
      captureError(error);
    } else {
      reportUnhandledError(error);
    }
  }
  function defaultErrorHandler(err) {
    throw err;
  }
  function handleStoppedNotification(notification, subscriber) {
    var onStoppedNotification = config.onStoppedNotification;
    onStoppedNotification && timeoutProvider.setTimeout(function() {
      return onStoppedNotification(notification, subscriber);
    });
  }
  var EMPTY_OBSERVER = {
    closed: true,
    next: noop,
    error: defaultErrorHandler,
    complete: noop
  };

  // node_modules/rxjs/dist/esm5/internal/symbol/observable.js
  var observable = function() {
    return typeof Symbol === "function" && Symbol.observable || "@@observable";
  }();

  // node_modules/rxjs/dist/esm5/internal/util/identity.js
  function identity(x3) {
    return x3;
  }

  // node_modules/rxjs/dist/esm5/internal/util/pipe.js
  function pipeFromArray(fns) {
    if (fns.length === 0) {
      return identity;
    }
    if (fns.length === 1) {
      return fns[0];
    }
    return function piped(input) {
      return fns.reduce(function(prev, fn) {
        return fn(prev);
      }, input);
    };
  }

  // node_modules/rxjs/dist/esm5/internal/Observable.js
  var Observable = function() {
    function Observable2(subscribe) {
      if (subscribe) {
        this._subscribe = subscribe;
      }
    }
    Observable2.prototype.lift = function(operator) {
      var observable2 = new Observable2();
      observable2.source = this;
      observable2.operator = operator;
      return observable2;
    };
    Observable2.prototype.subscribe = function(observerOrNext, error, complete) {
      var _this = this;
      var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
      errorContext(function() {
        var _a = _this, operator = _a.operator, source = _a.source;
        subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
      });
      return subscriber;
    };
    Observable2.prototype._trySubscribe = function(sink) {
      try {
        return this._subscribe(sink);
      } catch (err) {
        sink.error(err);
      }
    };
    Observable2.prototype.forEach = function(next, promiseCtor) {
      var _this = this;
      promiseCtor = getPromiseCtor(promiseCtor);
      return new promiseCtor(function(resolve, reject) {
        var subscriber = new SafeSubscriber({
          next: function(value) {
            try {
              next(value);
            } catch (err) {
              reject(err);
              subscriber.unsubscribe();
            }
          },
          error: reject,
          complete: resolve
        });
        _this.subscribe(subscriber);
      });
    };
    Observable2.prototype._subscribe = function(subscriber) {
      var _a;
      return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable2.prototype[observable] = function() {
      return this;
    };
    Observable2.prototype.pipe = function() {
      var operations = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        operations[_i] = arguments[_i];
      }
      return pipeFromArray(operations)(this);
    };
    Observable2.prototype.toPromise = function(promiseCtor) {
      var _this = this;
      promiseCtor = getPromiseCtor(promiseCtor);
      return new promiseCtor(function(resolve, reject) {
        var value;
        _this.subscribe(function(x3) {
          return value = x3;
        }, function(err) {
          return reject(err);
        }, function() {
          return resolve(value);
        });
      });
    };
    Observable2.create = function(subscribe) {
      return new Observable2(subscribe);
    };
    return Observable2;
  }();
  function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
  }
  function isObserver(value) {
    return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
  }
  function isSubscriber(value) {
    return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
  }

  // node_modules/rxjs/dist/esm5/internal/util/lift.js
  function hasLift(source) {
    return isFunction(source === null || source === void 0 ? void 0 : source.lift);
  }
  function operate(init) {
    return function(source) {
      if (hasLift(source)) {
        return source.lift(function(liftedSource) {
          try {
            return init(liftedSource, this);
          } catch (err) {
            this.error(err);
          }
        });
      }
      throw new TypeError("Unable to lift unknown Observable type");
    };
  }

  // node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js
  function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
    return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
  }
  var OperatorSubscriber = function(_super) {
    __extends(OperatorSubscriber2, _super);
    function OperatorSubscriber2(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
      var _this = _super.call(this, destination) || this;
      _this.onFinalize = onFinalize;
      _this.shouldUnsubscribe = shouldUnsubscribe;
      _this._next = onNext ? function(value) {
        try {
          onNext(value);
        } catch (err) {
          destination.error(err);
        }
      } : _super.prototype._next;
      _this._error = onError ? function(err) {
        try {
          onError(err);
        } catch (err2) {
          destination.error(err2);
        } finally {
          this.unsubscribe();
        }
      } : _super.prototype._error;
      _this._complete = onComplete ? function() {
        try {
          onComplete();
        } catch (err) {
          destination.error(err);
        } finally {
          this.unsubscribe();
        }
      } : _super.prototype._complete;
      return _this;
    }
    OperatorSubscriber2.prototype.unsubscribe = function() {
      var _a;
      if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
        var closed_1 = this.closed;
        _super.prototype.unsubscribe.call(this);
        !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
      }
    };
    return OperatorSubscriber2;
  }(Subscriber);

  // node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js
  var dateTimestampProvider = {
    now: function() {
      return (dateTimestampProvider.delegate || Date).now();
    },
    delegate: void 0
  };

  // node_modules/rxjs/dist/esm5/internal/scheduler/Action.js
  var Action = function(_super) {
    __extends(Action2, _super);
    function Action2(scheduler, work) {
      return _super.call(this) || this;
    }
    Action2.prototype.schedule = function(state, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      return this;
    };
    return Action2;
  }(Subscription);

  // node_modules/rxjs/dist/esm5/internal/scheduler/intervalProvider.js
  var intervalProvider = {
    setInterval: function(handler, timeout) {
      var args = [];
      for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
      }
      var delegate = intervalProvider.delegate;
      if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
        return delegate.setInterval.apply(delegate, __spreadArray([handler, timeout], __read(args)));
      }
      return setInterval.apply(void 0, __spreadArray([handler, timeout], __read(args)));
    },
    clearInterval: function(handle) {
      var delegate = intervalProvider.delegate;
      return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
    },
    delegate: void 0
  };

  // node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js
  var AsyncAction = function(_super) {
    __extends(AsyncAction2, _super);
    function AsyncAction2(scheduler, work) {
      var _this = _super.call(this, scheduler, work) || this;
      _this.scheduler = scheduler;
      _this.work = work;
      _this.pending = false;
      return _this;
    }
    AsyncAction2.prototype.schedule = function(state, delay) {
      var _a;
      if (delay === void 0) {
        delay = 0;
      }
      if (this.closed) {
        return this;
      }
      this.state = state;
      var id = this.id;
      var scheduler = this.scheduler;
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, delay);
      }
      this.pending = true;
      this.delay = delay;
      this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
      return this;
    };
    AsyncAction2.prototype.requestAsyncId = function(scheduler, _id, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      return intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction2.prototype.recycleAsyncId = function(_scheduler, id, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      if (delay != null && this.delay === delay && this.pending === false) {
        return id;
      }
      if (id != null) {
        intervalProvider.clearInterval(id);
      }
      return void 0;
    };
    AsyncAction2.prototype.execute = function(state, delay) {
      if (this.closed) {
        return new Error("executing a cancelled action");
      }
      this.pending = false;
      var error = this._execute(state, delay);
      if (error) {
        return error;
      } else if (this.pending === false && this.id != null) {
        this.id = this.recycleAsyncId(this.scheduler, this.id, null);
      }
    };
    AsyncAction2.prototype._execute = function(state, _delay) {
      var errored = false;
      var errorValue;
      try {
        this.work(state);
      } catch (e8) {
        errored = true;
        errorValue = e8 ? e8 : new Error("Scheduled action threw falsy error");
      }
      if (errored) {
        this.unsubscribe();
        return errorValue;
      }
    };
    AsyncAction2.prototype.unsubscribe = function() {
      if (!this.closed) {
        var _a = this, id = _a.id, scheduler = _a.scheduler;
        var actions = scheduler.actions;
        this.work = this.state = this.scheduler = null;
        this.pending = false;
        arrRemove(actions, this);
        if (id != null) {
          this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
        _super.prototype.unsubscribe.call(this);
      }
    };
    return AsyncAction2;
  }(Action);

  // node_modules/rxjs/dist/esm5/internal/Scheduler.js
  var Scheduler = function() {
    function Scheduler2(schedulerActionCtor, now) {
      if (now === void 0) {
        now = Scheduler2.now;
      }
      this.schedulerActionCtor = schedulerActionCtor;
      this.now = now;
    }
    Scheduler2.prototype.schedule = function(work, delay, state) {
      if (delay === void 0) {
        delay = 0;
      }
      return new this.schedulerActionCtor(this, work).schedule(state, delay);
    };
    Scheduler2.now = dateTimestampProvider.now;
    return Scheduler2;
  }();

  // node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js
  var AsyncScheduler = function(_super) {
    __extends(AsyncScheduler2, _super);
    function AsyncScheduler2(SchedulerAction, now) {
      if (now === void 0) {
        now = Scheduler.now;
      }
      var _this = _super.call(this, SchedulerAction, now) || this;
      _this.actions = [];
      _this._active = false;
      return _this;
    }
    AsyncScheduler2.prototype.flush = function(action) {
      var actions = this.actions;
      if (this._active) {
        actions.push(action);
        return;
      }
      var error;
      this._active = true;
      do {
        if (error = action.execute(action.state, action.delay)) {
          break;
        }
      } while (action = actions.shift());
      this._active = false;
      if (error) {
        while (action = actions.shift()) {
          action.unsubscribe();
        }
        throw error;
      }
    };
    return AsyncScheduler2;
  }(Scheduler);

  // node_modules/rxjs/dist/esm5/internal/scheduler/async.js
  var asyncScheduler = new AsyncScheduler(AsyncAction);
  var async = asyncScheduler;

  // node_modules/rxjs/dist/esm5/internal/util/isScheduler.js
  function isScheduler(value) {
    return value && isFunction(value.schedule);
  }

  // node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js
  var isArrayLike = function(x3) {
    return x3 && typeof x3.length === "number" && typeof x3 !== "function";
  };

  // node_modules/rxjs/dist/esm5/internal/util/isPromise.js
  function isPromise(value) {
    return isFunction(value === null || value === void 0 ? void 0 : value.then);
  }

  // node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js
  function isInteropObservable(input) {
    return isFunction(input[observable]);
  }

  // node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js
  function isAsyncIterable(obj) {
    return Symbol.asyncIterator && isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
  }

  // node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js
  function createInvalidObservableTypeError(input) {
    return new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
  }

  // node_modules/rxjs/dist/esm5/internal/symbol/iterator.js
  function getSymbolIterator() {
    if (typeof Symbol !== "function" || !Symbol.iterator) {
      return "@@iterator";
    }
    return Symbol.iterator;
  }
  var iterator = getSymbolIterator();

  // node_modules/rxjs/dist/esm5/internal/util/isIterable.js
  function isIterable(input) {
    return isFunction(input === null || input === void 0 ? void 0 : input[iterator]);
  }

  // node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js
  function readableStreamLikeToAsyncGenerator(readableStream) {
    return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
      var reader, _a, value, done;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            reader = readableStream.getReader();
            _b.label = 1;
          case 1:
            _b.trys.push([1, , 9, 10]);
            _b.label = 2;
          case 2:
            if (false)
              return [3, 8];
            return [4, __await(reader.read())];
          case 3:
            _a = _b.sent(), value = _a.value, done = _a.done;
            if (!done)
              return [3, 5];
            return [4, __await(void 0)];
          case 4:
            return [2, _b.sent()];
          case 5:
            return [4, __await(value)];
          case 6:
            return [4, _b.sent()];
          case 7:
            _b.sent();
            return [3, 2];
          case 8:
            return [3, 10];
          case 9:
            reader.releaseLock();
            return [7];
          case 10:
            return [2];
        }
      });
    });
  }
  function isReadableStreamLike(obj) {
    return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
  }

  // node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js
  function innerFrom(input) {
    if (input instanceof Observable) {
      return input;
    }
    if (input != null) {
      if (isInteropObservable(input)) {
        return fromInteropObservable(input);
      }
      if (isArrayLike(input)) {
        return fromArrayLike(input);
      }
      if (isPromise(input)) {
        return fromPromise(input);
      }
      if (isAsyncIterable(input)) {
        return fromAsyncIterable(input);
      }
      if (isIterable(input)) {
        return fromIterable(input);
      }
      if (isReadableStreamLike(input)) {
        return fromReadableStreamLike(input);
      }
    }
    throw createInvalidObservableTypeError(input);
  }
  function fromInteropObservable(obj) {
    return new Observable(function(subscriber) {
      var obs = obj[observable]();
      if (isFunction(obs.subscribe)) {
        return obs.subscribe(subscriber);
      }
      throw new TypeError("Provided object does not correctly implement Symbol.observable");
    });
  }
  function fromArrayLike(array) {
    return new Observable(function(subscriber) {
      for (var i6 = 0; i6 < array.length && !subscriber.closed; i6++) {
        subscriber.next(array[i6]);
      }
      subscriber.complete();
    });
  }
  function fromPromise(promise) {
    return new Observable(function(subscriber) {
      promise.then(function(value) {
        if (!subscriber.closed) {
          subscriber.next(value);
          subscriber.complete();
        }
      }, function(err) {
        return subscriber.error(err);
      }).then(null, reportUnhandledError);
    });
  }
  function fromIterable(iterable) {
    return new Observable(function(subscriber) {
      var e_1, _a;
      try {
        for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
          var value = iterable_1_1.value;
          subscriber.next(value);
          if (subscriber.closed) {
            return;
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return))
            _a.call(iterable_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      subscriber.complete();
    });
  }
  function fromAsyncIterable(asyncIterable) {
    return new Observable(function(subscriber) {
      process2(asyncIterable, subscriber).catch(function(err) {
        return subscriber.error(err);
      });
    });
  }
  function fromReadableStreamLike(readableStream) {
    return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
  }
  function process2(asyncIterable, subscriber) {
    var asyncIterable_1, asyncIterable_1_1;
    var e_2, _a;
    return __awaiter(this, void 0, void 0, function() {
      var value, e_2_1;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            _b.trys.push([0, 5, 6, 11]);
            asyncIterable_1 = __asyncValues(asyncIterable);
            _b.label = 1;
          case 1:
            return [4, asyncIterable_1.next()];
          case 2:
            if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done))
              return [3, 4];
            value = asyncIterable_1_1.value;
            subscriber.next(value);
            if (subscriber.closed) {
              return [2];
            }
            _b.label = 3;
          case 3:
            return [3, 1];
          case 4:
            return [3, 11];
          case 5:
            e_2_1 = _b.sent();
            e_2 = { error: e_2_1 };
            return [3, 11];
          case 6:
            _b.trys.push([6, , 9, 10]);
            if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return)))
              return [3, 8];
            return [4, _a.call(asyncIterable_1)];
          case 7:
            _b.sent();
            _b.label = 8;
          case 8:
            return [3, 10];
          case 9:
            if (e_2)
              throw e_2.error;
            return [7];
          case 10:
            return [7];
          case 11:
            subscriber.complete();
            return [2];
        }
      });
    });
  }

  // node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js
  function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
    if (delay === void 0) {
      delay = 0;
    }
    if (repeat === void 0) {
      repeat = false;
    }
    var scheduleSubscription = scheduler.schedule(function() {
      work();
      if (repeat) {
        parentSubscription.add(this.schedule(null, delay));
      } else {
        this.unsubscribe();
      }
    }, delay);
    parentSubscription.add(scheduleSubscription);
    if (!repeat) {
      return scheduleSubscription;
    }
  }

  // node_modules/rxjs/dist/esm5/internal/util/isDate.js
  function isValidDate(value) {
    return value instanceof Date && !isNaN(value);
  }

  // node_modules/rxjs/dist/esm5/internal/operators/map.js
  function map(project, thisArg) {
    return operate(function(source, subscriber) {
      var index = 0;
      source.subscribe(createOperatorSubscriber(subscriber, function(value) {
        subscriber.next(project.call(thisArg, value, index++));
      }));
    });
  }

  // node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js
  var isArray = Array.isArray;
  function callOrApply(fn, args) {
    return isArray(args) ? fn.apply(void 0, __spreadArray([], __read(args))) : fn(args);
  }
  function mapOneOrManyArgs(fn) {
    return map(function(args) {
      return callOrApply(fn, args);
    });
  }

  // node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js
  function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
    var buffer = [];
    var active = 0;
    var index = 0;
    var isComplete = false;
    var checkComplete = function() {
      if (isComplete && !buffer.length && !active) {
        subscriber.complete();
      }
    };
    var outerNext = function(value) {
      return active < concurrent ? doInnerSub(value) : buffer.push(value);
    };
    var doInnerSub = function(value) {
      expand && subscriber.next(value);
      active++;
      var innerComplete = false;
      innerFrom(project(value, index++)).subscribe(createOperatorSubscriber(subscriber, function(innerValue) {
        onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
        if (expand) {
          outerNext(innerValue);
        } else {
          subscriber.next(innerValue);
        }
      }, function() {
        innerComplete = true;
      }, void 0, function() {
        if (innerComplete) {
          try {
            active--;
            var _loop_1 = function() {
              var bufferedValue = buffer.shift();
              if (innerSubScheduler) {
                executeSchedule(subscriber, innerSubScheduler, function() {
                  return doInnerSub(bufferedValue);
                });
              } else {
                doInnerSub(bufferedValue);
              }
            };
            while (buffer.length && active < concurrent) {
              _loop_1();
            }
            checkComplete();
          } catch (err) {
            subscriber.error(err);
          }
        }
      }));
    };
    source.subscribe(createOperatorSubscriber(subscriber, outerNext, function() {
      isComplete = true;
      checkComplete();
    }));
    return function() {
      additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
    };
  }

  // node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js
  function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) {
      concurrent = Infinity;
    }
    if (isFunction(resultSelector)) {
      return mergeMap(function(a4, i6) {
        return map(function(b3, ii) {
          return resultSelector(a4, b3, i6, ii);
        })(innerFrom(project(a4, i6)));
      }, concurrent);
    } else if (typeof resultSelector === "number") {
      concurrent = resultSelector;
    }
    return operate(function(source, subscriber) {
      return mergeInternals(source, subscriber, project, concurrent);
    });
  }

  // node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js
  var nodeEventEmitterMethods = ["addListener", "removeListener"];
  var eventTargetMethods = ["addEventListener", "removeEventListener"];
  var jqueryMethods = ["on", "off"];
  function fromEvent(target, eventName, options2, resultSelector) {
    if (isFunction(options2)) {
      resultSelector = options2;
      options2 = void 0;
    }
    if (resultSelector) {
      return fromEvent(target, eventName, options2).pipe(mapOneOrManyArgs(resultSelector));
    }
    var _a = __read(isEventTarget(target) ? eventTargetMethods.map(function(methodName) {
      return function(handler) {
        return target[methodName](eventName, handler, options2);
      };
    }) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [], 2), add = _a[0], remove = _a[1];
    if (!add) {
      if (isArrayLike(target)) {
        return mergeMap(function(subTarget) {
          return fromEvent(subTarget, eventName, options2);
        })(innerFrom(target));
      }
    }
    if (!add) {
      throw new TypeError("Invalid event target");
    }
    return new Observable(function(subscriber) {
      var handler = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return subscriber.next(1 < args.length ? args : args[0]);
      };
      add(handler);
      return function() {
        return remove(handler);
      };
    });
  }
  function toCommonHandlerRegistry(target, eventName) {
    return function(methodName) {
      return function(handler) {
        return target[methodName](eventName, handler);
      };
    };
  }
  function isNodeStyleEventEmitter(target) {
    return isFunction(target.addListener) && isFunction(target.removeListener);
  }
  function isJQueryStyleEventEmitter(target) {
    return isFunction(target.on) && isFunction(target.off);
  }
  function isEventTarget(target) {
    return isFunction(target.addEventListener) && isFunction(target.removeEventListener);
  }

  // node_modules/rxjs/dist/esm5/internal/observable/timer.js
  function timer(dueTime, intervalOrScheduler, scheduler) {
    if (dueTime === void 0) {
      dueTime = 0;
    }
    if (scheduler === void 0) {
      scheduler = async;
    }
    var intervalDuration = -1;
    if (intervalOrScheduler != null) {
      if (isScheduler(intervalOrScheduler)) {
        scheduler = intervalOrScheduler;
      } else {
        intervalDuration = intervalOrScheduler;
      }
    }
    return new Observable(function(subscriber) {
      var due = isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
      if (due < 0) {
        due = 0;
      }
      var n7 = 0;
      return scheduler.schedule(function() {
        if (!subscriber.closed) {
          subscriber.next(n7++);
          if (0 <= intervalDuration) {
            this.schedule(void 0, intervalDuration);
          } else {
            subscriber.complete();
          }
        }
      }, due);
    });
  }

  // node_modules/rxjs/dist/esm5/internal/observable/interval.js
  function interval(period, scheduler) {
    if (period === void 0) {
      period = 0;
    }
    if (scheduler === void 0) {
      scheduler = asyncScheduler;
    }
    if (period < 0) {
      period = 0;
    }
    return timer(period, period, scheduler);
  }

  // node_modules/rxjs/dist/esm5/internal/operators/filter.js
  function filter(predicate, thisArg) {
    return operate(function(source, subscriber) {
      var index = 0;
      source.subscribe(createOperatorSubscriber(subscriber, function(value) {
        return predicate.call(thisArg, value, index++) && subscriber.next(value);
      }));
    });
  }

  // node_modules/rxjs/dist/esm5/internal/operators/sample.js
  function sample(notifier) {
    return operate(function(source, subscriber) {
      var hasValue = false;
      var lastValue = null;
      source.subscribe(createOperatorSubscriber(subscriber, function(value) {
        hasValue = true;
        lastValue = value;
      }));
      notifier.subscribe(createOperatorSubscriber(subscriber, function() {
        if (hasValue) {
          hasValue = false;
          var value = lastValue;
          lastValue = null;
          subscriber.next(value);
        }
      }, noop));
    });
  }

  // node_modules/rxjs/dist/esm5/internal/operators/sampleTime.js
  function sampleTime(period, scheduler) {
    if (scheduler === void 0) {
      scheduler = asyncScheduler;
    }
    return sample(interval(period, scheduler));
  }

  // src/application/scripts/keyboard-shortcuts.ts
  var saveButton = document.querySelector("button#save");
  var saveImagesButton = document.querySelector("button#save-images");
  var openButton2 = document.querySelector("button#open");
  var keydown$ = fromEvent(document, "keydown");
  var metaKeyPressed$ = keydown$.pipe(filter((event) => event.metaKey));
  metaKeyPressed$.pipe(filter((event) => event.key.toUpperCase() === "S")).subscribe((event) => {
    event.preventDefault();
    const shiftPressed = event.shiftKey;
    if (shiftPressed)
      return saveImagesButton.dispatchEvent(new Event("click"));
    return saveButton.dispatchEvent(new Event("click"));
  });
  metaKeyPressed$.pipe(filter((event) => event.key.toUpperCase() === "O")).subscribe((event) => {
    event.preventDefault();
    openButton2.dispatchEvent(new Event("click"));
  });
  metaKeyPressed$.pipe(filter((event) => event.key.toUpperCase() === "R")).subscribe((event) => {
    event.preventDefault();
  });

  // src/application/renderer.ts
  init_helpers();
  var root = document.getElementById("root");
  var editor2 = document.querySelector("lit-markdown-editor");
  var article = document.querySelector("article");
  var editorInput$ = fromEvent(editor2, "input");
  editorInput$.pipe(
    sampleTime(200),
    map((event) => {
      const target = event.target;
      if (!(target instanceof LitMarkdownEditor))
        throw TypeError();
      return target.value;
    })
  ).subscribe((value) => {
    window.localStorage.setItem("cache", value);
    renderMarkdown(value).then((rawHTML) => {
      article.innerHTML = rawHTML;
    });
  });
  var cache = window.localStorage.getItem("cache");
  if (cache) {
    new Promise((resolve) => {
      const modal = document.createElement(tagName8);
      modal.toggleAttribute("show", true);
      modal.modalTitle = "Restore old data?";
      modal.addEventListener("close", () => resolve(true), { once: true });
      const yesButton = document.createElement("button");
      const noButton = document.createElement("button");
      yesButton.textContent = "Yes";
      noButton.textContent = "No";
      yesButton.setAttribute("slot", "buttons");
      noButton.setAttribute("slot", "buttons");
      modal.append(yesButton, noButton);
      root.append(modal);
      yesButton.addEventListener(
        "click",
        () => {
          editor2.updateComplete.then(() => {
            editor2.value = cache;
            return resolve(true);
          });
        },
        { once: true }
      );
      noButton.addEventListener("click", () => resolve(true), { once: true });
    }).finally(() => root.innerHTML = "");
  }
})();
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/
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
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
