"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x2) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x2, {
    get: (a3, b2) => (typeof require !== "undefined" ? require : a3)[b2]
  }) : x2)(function(x2) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x2 + '" is not supported');
  });
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

  // node_modules/jszip/dist/jszip.min.js
  var require_jszip_min = __commonJS({
    "node_modules/jszip/dist/jszip.min.js"(exports, module) {
      !function(e7) {
        if ("object" == typeof exports && "undefined" != typeof module)
          module.exports = e7();
        else if ("function" == typeof define && define.amd)
          define([], e7);
        else {
          ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).JSZip = e7();
        }
      }(function() {
        return function s5(a3, o6, h3) {
          function u2(r4, e8) {
            if (!o6[r4]) {
              if (!a3[r4]) {
                var t3 = "function" == typeof __require && __require;
                if (!e8 && t3)
                  return t3(r4, true);
                if (l5)
                  return l5(r4, true);
                var n6 = new Error("Cannot find module '" + r4 + "'");
                throw n6.code = "MODULE_NOT_FOUND", n6;
              }
              var i5 = o6[r4] = { exports: {} };
              a3[r4][0].call(i5.exports, function(e9) {
                var t4 = a3[r4][1][e9];
                return u2(t4 || e9);
              }, i5, i5.exports, s5, a3, o6, h3);
            }
            return o6[r4].exports;
          }
          for (var l5 = "function" == typeof __require && __require, e7 = 0; e7 < h3.length; e7++)
            u2(h3[e7]);
          return u2;
        }({ 1: [function(e7, t3, r4) {
          "use strict";
          var d3 = e7("./utils"), c3 = e7("./support"), p2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          r4.encode = function(e8) {
            for (var t4, r5, n6, i5, s5, a3, o6, h3 = [], u2 = 0, l5 = e8.length, f2 = l5, c4 = "string" !== d3.getTypeOf(e8); u2 < e8.length; )
              f2 = l5 - u2, n6 = c4 ? (t4 = e8[u2++], r5 = u2 < l5 ? e8[u2++] : 0, u2 < l5 ? e8[u2++] : 0) : (t4 = e8.charCodeAt(u2++), r5 = u2 < l5 ? e8.charCodeAt(u2++) : 0, u2 < l5 ? e8.charCodeAt(u2++) : 0), i5 = t4 >> 2, s5 = (3 & t4) << 4 | r5 >> 4, a3 = 1 < f2 ? (15 & r5) << 2 | n6 >> 6 : 64, o6 = 2 < f2 ? 63 & n6 : 64, h3.push(p2.charAt(i5) + p2.charAt(s5) + p2.charAt(a3) + p2.charAt(o6));
            return h3.join("");
          }, r4.decode = function(e8) {
            var t4, r5, n6, i5, s5, a3, o6 = 0, h3 = 0, u2 = "data:";
            if (e8.substr(0, u2.length) === u2)
              throw new Error("Invalid base64 input, it looks like a data url.");
            var l5, f2 = 3 * (e8 = e8.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
            if (e8.charAt(e8.length - 1) === p2.charAt(64) && f2--, e8.charAt(e8.length - 2) === p2.charAt(64) && f2--, f2 % 1 != 0)
              throw new Error("Invalid base64 input, bad content length.");
            for (l5 = c3.uint8array ? new Uint8Array(0 | f2) : new Array(0 | f2); o6 < e8.length; )
              t4 = p2.indexOf(e8.charAt(o6++)) << 2 | (i5 = p2.indexOf(e8.charAt(o6++))) >> 4, r5 = (15 & i5) << 4 | (s5 = p2.indexOf(e8.charAt(o6++))) >> 2, n6 = (3 & s5) << 6 | (a3 = p2.indexOf(e8.charAt(o6++))), l5[h3++] = t4, 64 !== s5 && (l5[h3++] = r5), 64 !== a3 && (l5[h3++] = n6);
            return l5;
          };
        }, { "./support": 30, "./utils": 32 }], 2: [function(e7, t3, r4) {
          "use strict";
          var n6 = e7("./external"), i5 = e7("./stream/DataWorker"), s5 = e7("./stream/Crc32Probe"), a3 = e7("./stream/DataLengthProbe");
          function o6(e8, t4, r5, n7, i6) {
            this.compressedSize = e8, this.uncompressedSize = t4, this.crc32 = r5, this.compression = n7, this.compressedContent = i6;
          }
          o6.prototype = { getContentWorker: function() {
            var e8 = new i5(n6.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a3("data_length")), t4 = this;
            return e8.on("end", function() {
              if (this.streamInfo.data_length !== t4.uncompressedSize)
                throw new Error("Bug : uncompressed data size mismatch");
            }), e8;
          }, getCompressedWorker: function() {
            return new i5(n6.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
          } }, o6.createWorkerFrom = function(e8, t4, r5) {
            return e8.pipe(new s5()).pipe(new a3("uncompressedSize")).pipe(t4.compressWorker(r5)).pipe(new a3("compressedSize")).withStreamInfo("compression", t4);
          }, t3.exports = o6;
        }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(e7, t3, r4) {
          "use strict";
          var n6 = e7("./stream/GenericWorker");
          r4.STORE = { magic: "\0\0", compressWorker: function() {
            return new n6("STORE compression");
          }, uncompressWorker: function() {
            return new n6("STORE decompression");
          } }, r4.DEFLATE = e7("./flate");
        }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(e7, t3, r4) {
          "use strict";
          var n6 = e7("./utils");
          var o6 = function() {
            for (var e8, t4 = [], r5 = 0; r5 < 256; r5++) {
              e8 = r5;
              for (var n7 = 0; n7 < 8; n7++)
                e8 = 1 & e8 ? 3988292384 ^ e8 >>> 1 : e8 >>> 1;
              t4[r5] = e8;
            }
            return t4;
          }();
          t3.exports = function(e8, t4) {
            return void 0 !== e8 && e8.length ? "string" !== n6.getTypeOf(e8) ? function(e9, t5, r5, n7) {
              var i5 = o6, s5 = n7 + r5;
              e9 ^= -1;
              for (var a3 = n7; a3 < s5; a3++)
                e9 = e9 >>> 8 ^ i5[255 & (e9 ^ t5[a3])];
              return -1 ^ e9;
            }(0 | t4, e8, e8.length, 0) : function(e9, t5, r5, n7) {
              var i5 = o6, s5 = n7 + r5;
              e9 ^= -1;
              for (var a3 = n7; a3 < s5; a3++)
                e9 = e9 >>> 8 ^ i5[255 & (e9 ^ t5.charCodeAt(a3))];
              return -1 ^ e9;
            }(0 | t4, e8, e8.length, 0) : 0;
          };
        }, { "./utils": 32 }], 5: [function(e7, t3, r4) {
          "use strict";
          r4.base64 = false, r4.binary = false, r4.dir = false, r4.createFolders = true, r4.date = null, r4.compression = null, r4.compressionOptions = null, r4.comment = null, r4.unixPermissions = null, r4.dosPermissions = null;
        }, {}], 6: [function(e7, t3, r4) {
          "use strict";
          var n6 = null;
          n6 = "undefined" != typeof Promise ? Promise : e7("lie"), t3.exports = { Promise: n6 };
        }, { lie: 37 }], 7: [function(e7, t3, r4) {
          "use strict";
          var n6 = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array, i5 = e7("pako"), s5 = e7("./utils"), a3 = e7("./stream/GenericWorker"), o6 = n6 ? "uint8array" : "array";
          function h3(e8, t4) {
            a3.call(this, "FlateWorker/" + e8), this._pako = null, this._pakoAction = e8, this._pakoOptions = t4, this.meta = {};
          }
          r4.magic = "\b\0", s5.inherits(h3, a3), h3.prototype.processChunk = function(e8) {
            this.meta = e8.meta, null === this._pako && this._createPako(), this._pako.push(s5.transformTo(o6, e8.data), false);
          }, h3.prototype.flush = function() {
            a3.prototype.flush.call(this), null === this._pako && this._createPako(), this._pako.push([], true);
          }, h3.prototype.cleanUp = function() {
            a3.prototype.cleanUp.call(this), this._pako = null;
          }, h3.prototype._createPako = function() {
            this._pako = new i5[this._pakoAction]({ raw: true, level: this._pakoOptions.level || -1 });
            var t4 = this;
            this._pako.onData = function(e8) {
              t4.push({ data: e8, meta: t4.meta });
            };
          }, r4.compressWorker = function(e8) {
            return new h3("Deflate", e8);
          }, r4.uncompressWorker = function() {
            return new h3("Inflate", {});
          };
        }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(e7, t3, r4) {
          "use strict";
          function A2(e8, t4) {
            var r5, n7 = "";
            for (r5 = 0; r5 < t4; r5++)
              n7 += String.fromCharCode(255 & e8), e8 >>>= 8;
            return n7;
          }
          function n6(e8, t4, r5, n7, i6, s6) {
            var a3, o6, h3 = e8.file, u2 = e8.compression, l5 = s6 !== O.utf8encode, f2 = I2.transformTo("string", s6(h3.name)), c3 = I2.transformTo("string", O.utf8encode(h3.name)), d3 = h3.comment, p2 = I2.transformTo("string", s6(d3)), m2 = I2.transformTo("string", O.utf8encode(d3)), _2 = c3.length !== h3.name.length, g2 = m2.length !== d3.length, b2 = "", v2 = "", y2 = "", w2 = h3.dir, k2 = h3.date, x2 = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
            t4 && !r5 || (x2.crc32 = e8.crc32, x2.compressedSize = e8.compressedSize, x2.uncompressedSize = e8.uncompressedSize);
            var S3 = 0;
            t4 && (S3 |= 8), l5 || !_2 && !g2 || (S3 |= 2048);
            var z = 0, C2 = 0;
            w2 && (z |= 16), "UNIX" === i6 ? (C2 = 798, z |= function(e9, t5) {
              var r6 = e9;
              return e9 || (r6 = t5 ? 16893 : 33204), (65535 & r6) << 16;
            }(h3.unixPermissions, w2)) : (C2 = 20, z |= function(e9) {
              return 63 & (e9 || 0);
            }(h3.dosPermissions)), a3 = k2.getUTCHours(), a3 <<= 6, a3 |= k2.getUTCMinutes(), a3 <<= 5, a3 |= k2.getUTCSeconds() / 2, o6 = k2.getUTCFullYear() - 1980, o6 <<= 4, o6 |= k2.getUTCMonth() + 1, o6 <<= 5, o6 |= k2.getUTCDate(), _2 && (v2 = A2(1, 1) + A2(B(f2), 4) + c3, b2 += "up" + A2(v2.length, 2) + v2), g2 && (y2 = A2(1, 1) + A2(B(p2), 4) + m2, b2 += "uc" + A2(y2.length, 2) + y2);
            var E2 = "";
            return E2 += "\n\0", E2 += A2(S3, 2), E2 += u2.magic, E2 += A2(a3, 2), E2 += A2(o6, 2), E2 += A2(x2.crc32, 4), E2 += A2(x2.compressedSize, 4), E2 += A2(x2.uncompressedSize, 4), E2 += A2(f2.length, 2), E2 += A2(b2.length, 2), { fileRecord: R2.LOCAL_FILE_HEADER + E2 + f2 + b2, dirRecord: R2.CENTRAL_FILE_HEADER + A2(C2, 2) + E2 + A2(p2.length, 2) + "\0\0\0\0" + A2(z, 4) + A2(n7, 4) + f2 + b2 + p2 };
          }
          var I2 = e7("../utils"), i5 = e7("../stream/GenericWorker"), O = e7("../utf8"), B = e7("../crc32"), R2 = e7("../signature");
          function s5(e8, t4, r5, n7) {
            i5.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = t4, this.zipPlatform = r5, this.encodeFileName = n7, this.streamFiles = e8, this.accumulate = false, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
          }
          I2.inherits(s5, i5), s5.prototype.push = function(e8) {
            var t4 = e8.meta.percent || 0, r5 = this.entriesCount, n7 = this._sources.length;
            this.accumulate ? this.contentBuffer.push(e8) : (this.bytesWritten += e8.data.length, i5.prototype.push.call(this, { data: e8.data, meta: { currentFile: this.currentFile, percent: r5 ? (t4 + 100 * (r5 - n7 - 1)) / r5 : 100 } }));
          }, s5.prototype.openedSource = function(e8) {
            this.currentSourceOffset = this.bytesWritten, this.currentFile = e8.file.name;
            var t4 = this.streamFiles && !e8.file.dir;
            if (t4) {
              var r5 = n6(e8, t4, false, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
              this.push({ data: r5.fileRecord, meta: { percent: 0 } });
            } else
              this.accumulate = true;
          }, s5.prototype.closedSource = function(e8) {
            this.accumulate = false;
            var t4 = this.streamFiles && !e8.file.dir, r5 = n6(e8, t4, true, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
            if (this.dirRecords.push(r5.dirRecord), t4)
              this.push({ data: function(e9) {
                return R2.DATA_DESCRIPTOR + A2(e9.crc32, 4) + A2(e9.compressedSize, 4) + A2(e9.uncompressedSize, 4);
              }(e8), meta: { percent: 100 } });
            else
              for (this.push({ data: r5.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; )
                this.push(this.contentBuffer.shift());
            this.currentFile = null;
          }, s5.prototype.flush = function() {
            for (var e8 = this.bytesWritten, t4 = 0; t4 < this.dirRecords.length; t4++)
              this.push({ data: this.dirRecords[t4], meta: { percent: 100 } });
            var r5 = this.bytesWritten - e8, n7 = function(e9, t5, r6, n8, i6) {
              var s6 = I2.transformTo("string", i6(n8));
              return R2.CENTRAL_DIRECTORY_END + "\0\0\0\0" + A2(e9, 2) + A2(e9, 2) + A2(t5, 4) + A2(r6, 4) + A2(s6.length, 2) + s6;
            }(this.dirRecords.length, r5, e8, this.zipComment, this.encodeFileName);
            this.push({ data: n7, meta: { percent: 100 } });
          }, s5.prototype.prepareNextSource = function() {
            this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
          }, s5.prototype.registerPrevious = function(e8) {
            this._sources.push(e8);
            var t4 = this;
            return e8.on("data", function(e9) {
              t4.processChunk(e9);
            }), e8.on("end", function() {
              t4.closedSource(t4.previous.streamInfo), t4._sources.length ? t4.prepareNextSource() : t4.end();
            }), e8.on("error", function(e9) {
              t4.error(e9);
            }), this;
          }, s5.prototype.resume = function() {
            return !!i5.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), true) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), true));
          }, s5.prototype.error = function(e8) {
            var t4 = this._sources;
            if (!i5.prototype.error.call(this, e8))
              return false;
            for (var r5 = 0; r5 < t4.length; r5++)
              try {
                t4[r5].error(e8);
              } catch (e9) {
              }
            return true;
          }, s5.prototype.lock = function() {
            i5.prototype.lock.call(this);
            for (var e8 = this._sources, t4 = 0; t4 < e8.length; t4++)
              e8[t4].lock();
          }, t3.exports = s5;
        }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(e7, t3, r4) {
          "use strict";
          var u2 = e7("../compressions"), n6 = e7("./ZipFileWorker");
          r4.generateWorker = function(e8, a3, t4) {
            var o6 = new n6(a3.streamFiles, t4, a3.platform, a3.encodeFileName), h3 = 0;
            try {
              e8.forEach(function(e9, t5) {
                h3++;
                var r5 = function(e10, t6) {
                  var r6 = e10 || t6, n8 = u2[r6];
                  if (!n8)
                    throw new Error(r6 + " is not a valid compression method !");
                  return n8;
                }(t5.options.compression, a3.compression), n7 = t5.options.compressionOptions || a3.compressionOptions || {}, i5 = t5.dir, s5 = t5.date;
                t5._compressWorker(r5, n7).withStreamInfo("file", { name: e9, dir: i5, date: s5, comment: t5.comment || "", unixPermissions: t5.unixPermissions, dosPermissions: t5.dosPermissions }).pipe(o6);
              }), o6.entriesCount = h3;
            } catch (e9) {
              o6.error(e9);
            }
            return o6;
          };
        }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(e7, t3, r4) {
          "use strict";
          function n6() {
            if (!(this instanceof n6))
              return new n6();
            if (arguments.length)
              throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
            this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
              var e8 = new n6();
              for (var t4 in this)
                "function" != typeof this[t4] && (e8[t4] = this[t4]);
              return e8;
            };
          }
          (n6.prototype = e7("./object")).loadAsync = e7("./load"), n6.support = e7("./support"), n6.defaults = e7("./defaults"), n6.version = "3.10.1", n6.loadAsync = function(e8, t4) {
            return new n6().loadAsync(e8, t4);
          }, n6.external = e7("./external"), t3.exports = n6;
        }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(e7, t3, r4) {
          "use strict";
          var u2 = e7("./utils"), i5 = e7("./external"), n6 = e7("./utf8"), s5 = e7("./zipEntries"), a3 = e7("./stream/Crc32Probe"), l5 = e7("./nodejsUtils");
          function f2(n7) {
            return new i5.Promise(function(e8, t4) {
              var r5 = n7.decompressed.getContentWorker().pipe(new a3());
              r5.on("error", function(e9) {
                t4(e9);
              }).on("end", function() {
                r5.streamInfo.crc32 !== n7.decompressed.crc32 ? t4(new Error("Corrupted zip : CRC32 mismatch")) : e8();
              }).resume();
            });
          }
          t3.exports = function(e8, o6) {
            var h3 = this;
            return o6 = u2.extend(o6 || {}, { base64: false, checkCRC32: false, optimizedBinaryString: false, createFolders: false, decodeFileName: n6.utf8decode }), l5.isNode && l5.isStream(e8) ? i5.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : u2.prepareContent("the loaded zip file", e8, true, o6.optimizedBinaryString, o6.base64).then(function(e9) {
              var t4 = new s5(o6);
              return t4.load(e9), t4;
            }).then(function(e9) {
              var t4 = [i5.Promise.resolve(e9)], r5 = e9.files;
              if (o6.checkCRC32)
                for (var n7 = 0; n7 < r5.length; n7++)
                  t4.push(f2(r5[n7]));
              return i5.Promise.all(t4);
            }).then(function(e9) {
              for (var t4 = e9.shift(), r5 = t4.files, n7 = 0; n7 < r5.length; n7++) {
                var i6 = r5[n7], s6 = i6.fileNameStr, a4 = u2.resolve(i6.fileNameStr);
                h3.file(a4, i6.decompressed, { binary: true, optimizedBinaryString: true, date: i6.date, dir: i6.dir, comment: i6.fileCommentStr.length ? i6.fileCommentStr : null, unixPermissions: i6.unixPermissions, dosPermissions: i6.dosPermissions, createFolders: o6.createFolders }), i6.dir || (h3.file(a4).unsafeOriginalName = s6);
              }
              return t4.zipComment.length && (h3.comment = t4.zipComment), h3;
            });
          };
        }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(e7, t3, r4) {
          "use strict";
          var n6 = e7("../utils"), i5 = e7("../stream/GenericWorker");
          function s5(e8, t4) {
            i5.call(this, "Nodejs stream input adapter for " + e8), this._upstreamEnded = false, this._bindStream(t4);
          }
          n6.inherits(s5, i5), s5.prototype._bindStream = function(e8) {
            var t4 = this;
            (this._stream = e8).pause(), e8.on("data", function(e9) {
              t4.push({ data: e9, meta: { percent: 0 } });
            }).on("error", function(e9) {
              t4.isPaused ? this.generatedError = e9 : t4.error(e9);
            }).on("end", function() {
              t4.isPaused ? t4._upstreamEnded = true : t4.end();
            });
          }, s5.prototype.pause = function() {
            return !!i5.prototype.pause.call(this) && (this._stream.pause(), true);
          }, s5.prototype.resume = function() {
            return !!i5.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), true);
          }, t3.exports = s5;
        }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(e7, t3, r4) {
          "use strict";
          var i5 = e7("readable-stream").Readable;
          function n6(e8, t4, r5) {
            i5.call(this, t4), this._helper = e8;
            var n7 = this;
            e8.on("data", function(e9, t5) {
              n7.push(e9) || n7._helper.pause(), r5 && r5(t5);
            }).on("error", function(e9) {
              n7.emit("error", e9);
            }).on("end", function() {
              n7.push(null);
            });
          }
          e7("../utils").inherits(n6, i5), n6.prototype._read = function() {
            this._helper.resume();
          }, t3.exports = n6;
        }, { "../utils": 32, "readable-stream": 16 }], 14: [function(e7, t3, r4) {
          "use strict";
          t3.exports = { isNode: "undefined" != typeof Buffer, newBufferFrom: function(e8, t4) {
            if (Buffer.from && Buffer.from !== Uint8Array.from)
              return Buffer.from(e8, t4);
            if ("number" == typeof e8)
              throw new Error('The "data" argument must not be a number');
            return new Buffer(e8, t4);
          }, allocBuffer: function(e8) {
            if (Buffer.alloc)
              return Buffer.alloc(e8);
            var t4 = new Buffer(e8);
            return t4.fill(0), t4;
          }, isBuffer: function(e8) {
            return Buffer.isBuffer(e8);
          }, isStream: function(e8) {
            return e8 && "function" == typeof e8.on && "function" == typeof e8.pause && "function" == typeof e8.resume;
          } };
        }, {}], 15: [function(e7, t3, r4) {
          "use strict";
          function s5(e8, t4, r5) {
            var n7, i6 = u2.getTypeOf(t4), s6 = u2.extend(r5 || {}, f2);
            s6.date = s6.date || new Date(), null !== s6.compression && (s6.compression = s6.compression.toUpperCase()), "string" == typeof s6.unixPermissions && (s6.unixPermissions = parseInt(s6.unixPermissions, 8)), s6.unixPermissions && 16384 & s6.unixPermissions && (s6.dir = true), s6.dosPermissions && 16 & s6.dosPermissions && (s6.dir = true), s6.dir && (e8 = g2(e8)), s6.createFolders && (n7 = _2(e8)) && b2.call(this, n7, true);
            var a4 = "string" === i6 && false === s6.binary && false === s6.base64;
            r5 && void 0 !== r5.binary || (s6.binary = !a4), (t4 instanceof c3 && 0 === t4.uncompressedSize || s6.dir || !t4 || 0 === t4.length) && (s6.base64 = false, s6.binary = true, t4 = "", s6.compression = "STORE", i6 = "string");
            var o7 = null;
            o7 = t4 instanceof c3 || t4 instanceof l5 ? t4 : p2.isNode && p2.isStream(t4) ? new m2(e8, t4) : u2.prepareContent(e8, t4, s6.binary, s6.optimizedBinaryString, s6.base64);
            var h4 = new d3(e8, o7, s6);
            this.files[e8] = h4;
          }
          var i5 = e7("./utf8"), u2 = e7("./utils"), l5 = e7("./stream/GenericWorker"), a3 = e7("./stream/StreamHelper"), f2 = e7("./defaults"), c3 = e7("./compressedObject"), d3 = e7("./zipObject"), o6 = e7("./generate"), p2 = e7("./nodejsUtils"), m2 = e7("./nodejs/NodejsStreamInputAdapter"), _2 = function(e8) {
            "/" === e8.slice(-1) && (e8 = e8.substring(0, e8.length - 1));
            var t4 = e8.lastIndexOf("/");
            return 0 < t4 ? e8.substring(0, t4) : "";
          }, g2 = function(e8) {
            return "/" !== e8.slice(-1) && (e8 += "/"), e8;
          }, b2 = function(e8, t4) {
            return t4 = void 0 !== t4 ? t4 : f2.createFolders, e8 = g2(e8), this.files[e8] || s5.call(this, e8, null, { dir: true, createFolders: t4 }), this.files[e8];
          };
          function h3(e8) {
            return "[object RegExp]" === Object.prototype.toString.call(e8);
          }
          var n6 = { load: function() {
            throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
          }, forEach: function(e8) {
            var t4, r5, n7;
            for (t4 in this.files)
              n7 = this.files[t4], (r5 = t4.slice(this.root.length, t4.length)) && t4.slice(0, this.root.length) === this.root && e8(r5, n7);
          }, filter: function(r5) {
            var n7 = [];
            return this.forEach(function(e8, t4) {
              r5(e8, t4) && n7.push(t4);
            }), n7;
          }, file: function(e8, t4, r5) {
            if (1 !== arguments.length)
              return e8 = this.root + e8, s5.call(this, e8, t4, r5), this;
            if (h3(e8)) {
              var n7 = e8;
              return this.filter(function(e9, t5) {
                return !t5.dir && n7.test(e9);
              });
            }
            var i6 = this.files[this.root + e8];
            return i6 && !i6.dir ? i6 : null;
          }, folder: function(r5) {
            if (!r5)
              return this;
            if (h3(r5))
              return this.filter(function(e9, t5) {
                return t5.dir && r5.test(e9);
              });
            var e8 = this.root + r5, t4 = b2.call(this, e8), n7 = this.clone();
            return n7.root = t4.name, n7;
          }, remove: function(r5) {
            r5 = this.root + r5;
            var e8 = this.files[r5];
            if (e8 || ("/" !== r5.slice(-1) && (r5 += "/"), e8 = this.files[r5]), e8 && !e8.dir)
              delete this.files[r5];
            else
              for (var t4 = this.filter(function(e9, t5) {
                return t5.name.slice(0, r5.length) === r5;
              }), n7 = 0; n7 < t4.length; n7++)
                delete this.files[t4[n7].name];
            return this;
          }, generate: function() {
            throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
          }, generateInternalStream: function(e8) {
            var t4, r5 = {};
            try {
              if ((r5 = u2.extend(e8 || {}, { streamFiles: false, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: i5.utf8encode })).type = r5.type.toLowerCase(), r5.compression = r5.compression.toUpperCase(), "binarystring" === r5.type && (r5.type = "string"), !r5.type)
                throw new Error("No output type specified.");
              u2.checkSupport(r5.type), "darwin" !== r5.platform && "freebsd" !== r5.platform && "linux" !== r5.platform && "sunos" !== r5.platform || (r5.platform = "UNIX"), "win32" === r5.platform && (r5.platform = "DOS");
              var n7 = r5.comment || this.comment || "";
              t4 = o6.generateWorker(this, r5, n7);
            } catch (e9) {
              (t4 = new l5("error")).error(e9);
            }
            return new a3(t4, r5.type || "string", r5.mimeType);
          }, generateAsync: function(e8, t4) {
            return this.generateInternalStream(e8).accumulate(t4);
          }, generateNodeStream: function(e8, t4) {
            return (e8 = e8 || {}).type || (e8.type = "nodebuffer"), this.generateInternalStream(e8).toNodejsStream(t4);
          } };
          t3.exports = n6;
        }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(e7, t3, r4) {
          "use strict";
          t3.exports = e7("stream");
        }, { stream: void 0 }], 17: [function(e7, t3, r4) {
          "use strict";
          var n6 = e7("./DataReader");
          function i5(e8) {
            n6.call(this, e8);
            for (var t4 = 0; t4 < this.data.length; t4++)
              e8[t4] = 255 & e8[t4];
          }
          e7("../utils").inherits(i5, n6), i5.prototype.byteAt = function(e8) {
            return this.data[this.zero + e8];
          }, i5.prototype.lastIndexOfSignature = function(e8) {
            for (var t4 = e8.charCodeAt(0), r5 = e8.charCodeAt(1), n7 = e8.charCodeAt(2), i6 = e8.charCodeAt(3), s5 = this.length - 4; 0 <= s5; --s5)
              if (this.data[s5] === t4 && this.data[s5 + 1] === r5 && this.data[s5 + 2] === n7 && this.data[s5 + 3] === i6)
                return s5 - this.zero;
            return -1;
          }, i5.prototype.readAndCheckSignature = function(e8) {
            var t4 = e8.charCodeAt(0), r5 = e8.charCodeAt(1), n7 = e8.charCodeAt(2), i6 = e8.charCodeAt(3), s5 = this.readData(4);
            return t4 === s5[0] && r5 === s5[1] && n7 === s5[2] && i6 === s5[3];
          }, i5.prototype.readData = function(e8) {
            if (this.checkOffset(e8), 0 === e8)
              return [];
            var t4 = this.data.slice(this.zero + this.index, this.zero + this.index + e8);
            return this.index += e8, t4;
          }, t3.exports = i5;
        }, { "../utils": 32, "./DataReader": 18 }], 18: [function(e7, t3, r4) {
          "use strict";
          var n6 = e7("../utils");
          function i5(e8) {
            this.data = e8, this.length = e8.length, this.index = 0, this.zero = 0;
          }
          i5.prototype = { checkOffset: function(e8) {
            this.checkIndex(this.index + e8);
          }, checkIndex: function(e8) {
            if (this.length < this.zero + e8 || e8 < 0)
              throw new Error("End of data reached (data length = " + this.length + ", asked index = " + e8 + "). Corrupted zip ?");
          }, setIndex: function(e8) {
            this.checkIndex(e8), this.index = e8;
          }, skip: function(e8) {
            this.setIndex(this.index + e8);
          }, byteAt: function() {
          }, readInt: function(e8) {
            var t4, r5 = 0;
            for (this.checkOffset(e8), t4 = this.index + e8 - 1; t4 >= this.index; t4--)
              r5 = (r5 << 8) + this.byteAt(t4);
            return this.index += e8, r5;
          }, readString: function(e8) {
            return n6.transformTo("string", this.readData(e8));
          }, readData: function() {
          }, lastIndexOfSignature: function() {
          }, readAndCheckSignature: function() {
          }, readDate: function() {
            var e8 = this.readInt(4);
            return new Date(Date.UTC(1980 + (e8 >> 25 & 127), (e8 >> 21 & 15) - 1, e8 >> 16 & 31, e8 >> 11 & 31, e8 >> 5 & 63, (31 & e8) << 1));
          } }, t3.exports = i5;
        }, { "../utils": 32 }], 19: [function(e7, t3, r4) {
          "use strict";
          var n6 = e7("./Uint8ArrayReader");
          function i5(e8) {
            n6.call(this, e8);
          }
          e7("../utils").inherits(i5, n6), i5.prototype.readData = function(e8) {
            this.checkOffset(e8);
            var t4 = this.data.slice(this.zero + this.index, this.zero + this.index + e8);
            return this.index += e8, t4;
          }, t3.exports = i5;
        }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(e7, t3, r4) {
          "use strict";
          var n6 = e7("./DataReader");
          function i5(e8) {
            n6.call(this, e8);
          }
          e7("../utils").inherits(i5, n6), i5.prototype.byteAt = function(e8) {
            return this.data.charCodeAt(this.zero + e8);
          }, i5.prototype.lastIndexOfSignature = function(e8) {
            return this.data.lastIndexOf(e8) - this.zero;
          }, i5.prototype.readAndCheckSignature = function(e8) {
            return e8 === this.readData(4);
          }, i5.prototype.readData = function(e8) {
            this.checkOffset(e8);
            var t4 = this.data.slice(this.zero + this.index, this.zero + this.index + e8);
            return this.index += e8, t4;
          }, t3.exports = i5;
        }, { "../utils": 32, "./DataReader": 18 }], 21: [function(e7, t3, r4) {
          "use strict";
          var n6 = e7("./ArrayReader");
          function i5(e8) {
            n6.call(this, e8);
          }
          e7("../utils").inherits(i5, n6), i5.prototype.readData = function(e8) {
            if (this.checkOffset(e8), 0 === e8)
              return new Uint8Array(0);
            var t4 = this.data.subarray(this.zero + this.index, this.zero + this.index + e8);
            return this.index += e8, t4;
          }, t3.exports = i5;
        }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(e7, t3, r4) {
          "use strict";
          var n6 = e7("../utils"), i5 = e7("../support"), s5 = e7("./ArrayReader"), a3 = e7("./StringReader"), o6 = e7("./NodeBufferReader"), h3 = e7("./Uint8ArrayReader");
          t3.exports = function(e8) {
            var t4 = n6.getTypeOf(e8);
            return n6.checkSupport(t4), "string" !== t4 || i5.uint8array ? "nodebuffer" === t4 ? new o6(e8) : i5.uint8array ? new h3(n6.transformTo("uint8array", e8)) : new s5(n6.transformTo("array", e8)) : new a3(e8);
          };
        }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(e7, t3, r4) {
          "use strict";
          r4.LOCAL_FILE_HEADER = "PK", r4.CENTRAL_FILE_HEADER = "PK", r4.CENTRAL_DIRECTORY_END = "PK", r4.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", r4.ZIP64_CENTRAL_DIRECTORY_END = "PK", r4.DATA_DESCRIPTOR = "PK\x07\b";
        }, {}], 24: [function(e7, t3, r4) {
          "use strict";
          var n6 = e7("./GenericWorker"), i5 = e7("../utils");
          function s5(e8) {
            n6.call(this, "ConvertWorker to " + e8), this.destType = e8;
          }
          i5.inherits(s5, n6), s5.prototype.processChunk = function(e8) {
            this.push({ data: i5.transformTo(this.destType, e8.data), meta: e8.meta });
          }, t3.exports = s5;
        }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(e7, t3, r4) {
          "use strict";
          var n6 = e7("./GenericWorker"), i5 = e7("../crc32");
          function s5() {
            n6.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
          }
          e7("../utils").inherits(s5, n6), s5.prototype.processChunk = function(e8) {
            this.streamInfo.crc32 = i5(e8.data, this.streamInfo.crc32 || 0), this.push(e8);
          }, t3.exports = s5;
        }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(e7, t3, r4) {
          "use strict";
          var n6 = e7("../utils"), i5 = e7("./GenericWorker");
          function s5(e8) {
            i5.call(this, "DataLengthProbe for " + e8), this.propName = e8, this.withStreamInfo(e8, 0);
          }
          n6.inherits(s5, i5), s5.prototype.processChunk = function(e8) {
            if (e8) {
              var t4 = this.streamInfo[this.propName] || 0;
              this.streamInfo[this.propName] = t4 + e8.data.length;
            }
            i5.prototype.processChunk.call(this, e8);
          }, t3.exports = s5;
        }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(e7, t3, r4) {
          "use strict";
          var n6 = e7("../utils"), i5 = e7("./GenericWorker");
          function s5(e8) {
            i5.call(this, "DataWorker");
            var t4 = this;
            this.dataIsReady = false, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = false, e8.then(function(e9) {
              t4.dataIsReady = true, t4.data = e9, t4.max = e9 && e9.length || 0, t4.type = n6.getTypeOf(e9), t4.isPaused || t4._tickAndRepeat();
            }, function(e9) {
              t4.error(e9);
            });
          }
          n6.inherits(s5, i5), s5.prototype.cleanUp = function() {
            i5.prototype.cleanUp.call(this), this.data = null;
          }, s5.prototype.resume = function() {
            return !!i5.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = true, n6.delay(this._tickAndRepeat, [], this)), true);
          }, s5.prototype._tickAndRepeat = function() {
            this._tickScheduled = false, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (n6.delay(this._tickAndRepeat, [], this), this._tickScheduled = true));
          }, s5.prototype._tick = function() {
            if (this.isPaused || this.isFinished)
              return false;
            var e8 = null, t4 = Math.min(this.max, this.index + 16384);
            if (this.index >= this.max)
              return this.end();
            switch (this.type) {
              case "string":
                e8 = this.data.substring(this.index, t4);
                break;
              case "uint8array":
                e8 = this.data.subarray(this.index, t4);
                break;
              case "array":
              case "nodebuffer":
                e8 = this.data.slice(this.index, t4);
            }
            return this.index = t4, this.push({ data: e8, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
          }, t3.exports = s5;
        }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(e7, t3, r4) {
          "use strict";
          function n6(e8) {
            this.name = e8 || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = true, this.isFinished = false, this.isLocked = false, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
          }
          n6.prototype = { push: function(e8) {
            this.emit("data", e8);
          }, end: function() {
            if (this.isFinished)
              return false;
            this.flush();
            try {
              this.emit("end"), this.cleanUp(), this.isFinished = true;
            } catch (e8) {
              this.emit("error", e8);
            }
            return true;
          }, error: function(e8) {
            return !this.isFinished && (this.isPaused ? this.generatedError = e8 : (this.isFinished = true, this.emit("error", e8), this.previous && this.previous.error(e8), this.cleanUp()), true);
          }, on: function(e8, t4) {
            return this._listeners[e8].push(t4), this;
          }, cleanUp: function() {
            this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
          }, emit: function(e8, t4) {
            if (this._listeners[e8])
              for (var r5 = 0; r5 < this._listeners[e8].length; r5++)
                this._listeners[e8][r5].call(this, t4);
          }, pipe: function(e8) {
            return e8.registerPrevious(this);
          }, registerPrevious: function(e8) {
            if (this.isLocked)
              throw new Error("The stream '" + this + "' has already been used.");
            this.streamInfo = e8.streamInfo, this.mergeStreamInfo(), this.previous = e8;
            var t4 = this;
            return e8.on("data", function(e9) {
              t4.processChunk(e9);
            }), e8.on("end", function() {
              t4.end();
            }), e8.on("error", function(e9) {
              t4.error(e9);
            }), this;
          }, pause: function() {
            return !this.isPaused && !this.isFinished && (this.isPaused = true, this.previous && this.previous.pause(), true);
          }, resume: function() {
            if (!this.isPaused || this.isFinished)
              return false;
            var e8 = this.isPaused = false;
            return this.generatedError && (this.error(this.generatedError), e8 = true), this.previous && this.previous.resume(), !e8;
          }, flush: function() {
          }, processChunk: function(e8) {
            this.push(e8);
          }, withStreamInfo: function(e8, t4) {
            return this.extraStreamInfo[e8] = t4, this.mergeStreamInfo(), this;
          }, mergeStreamInfo: function() {
            for (var e8 in this.extraStreamInfo)
              Object.prototype.hasOwnProperty.call(this.extraStreamInfo, e8) && (this.streamInfo[e8] = this.extraStreamInfo[e8]);
          }, lock: function() {
            if (this.isLocked)
              throw new Error("The stream '" + this + "' has already been used.");
            this.isLocked = true, this.previous && this.previous.lock();
          }, toString: function() {
            var e8 = "Worker " + this.name;
            return this.previous ? this.previous + " -> " + e8 : e8;
          } }, t3.exports = n6;
        }, {}], 29: [function(e7, t3, r4) {
          "use strict";
          var h3 = e7("../utils"), i5 = e7("./ConvertWorker"), s5 = e7("./GenericWorker"), u2 = e7("../base64"), n6 = e7("../support"), a3 = e7("../external"), o6 = null;
          if (n6.nodestream)
            try {
              o6 = e7("../nodejs/NodejsStreamOutputAdapter");
            } catch (e8) {
            }
          function l5(e8, o7) {
            return new a3.Promise(function(t4, r5) {
              var n7 = [], i6 = e8._internalType, s6 = e8._outputType, a4 = e8._mimeType;
              e8.on("data", function(e9, t5) {
                n7.push(e9), o7 && o7(t5);
              }).on("error", function(e9) {
                n7 = [], r5(e9);
              }).on("end", function() {
                try {
                  var e9 = function(e10, t5, r6) {
                    switch (e10) {
                      case "blob":
                        return h3.newBlob(h3.transformTo("arraybuffer", t5), r6);
                      case "base64":
                        return u2.encode(t5);
                      default:
                        return h3.transformTo(e10, t5);
                    }
                  }(s6, function(e10, t5) {
                    var r6, n8 = 0, i7 = null, s7 = 0;
                    for (r6 = 0; r6 < t5.length; r6++)
                      s7 += t5[r6].length;
                    switch (e10) {
                      case "string":
                        return t5.join("");
                      case "array":
                        return Array.prototype.concat.apply([], t5);
                      case "uint8array":
                        for (i7 = new Uint8Array(s7), r6 = 0; r6 < t5.length; r6++)
                          i7.set(t5[r6], n8), n8 += t5[r6].length;
                        return i7;
                      case "nodebuffer":
                        return Buffer.concat(t5);
                      default:
                        throw new Error("concat : unsupported type '" + e10 + "'");
                    }
                  }(i6, n7), a4);
                  t4(e9);
                } catch (e10) {
                  r5(e10);
                }
                n7 = [];
              }).resume();
            });
          }
          function f2(e8, t4, r5) {
            var n7 = t4;
            switch (t4) {
              case "blob":
              case "arraybuffer":
                n7 = "uint8array";
                break;
              case "base64":
                n7 = "string";
            }
            try {
              this._internalType = n7, this._outputType = t4, this._mimeType = r5, h3.checkSupport(n7), this._worker = e8.pipe(new i5(n7)), e8.lock();
            } catch (e9) {
              this._worker = new s5("error"), this._worker.error(e9);
            }
          }
          f2.prototype = { accumulate: function(e8) {
            return l5(this, e8);
          }, on: function(e8, t4) {
            var r5 = this;
            return "data" === e8 ? this._worker.on(e8, function(e9) {
              t4.call(r5, e9.data, e9.meta);
            }) : this._worker.on(e8, function() {
              h3.delay(t4, arguments, r5);
            }), this;
          }, resume: function() {
            return h3.delay(this._worker.resume, [], this._worker), this;
          }, pause: function() {
            return this._worker.pause(), this;
          }, toNodejsStream: function(e8) {
            if (h3.checkSupport("nodestream"), "nodebuffer" !== this._outputType)
              throw new Error(this._outputType + " is not supported by this method");
            return new o6(this, { objectMode: "nodebuffer" !== this._outputType }, e8);
          } }, t3.exports = f2;
        }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(e7, t3, r4) {
          "use strict";
          if (r4.base64 = true, r4.array = true, r4.string = true, r4.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, r4.nodebuffer = "undefined" != typeof Buffer, r4.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer)
            r4.blob = false;
          else {
            var n6 = new ArrayBuffer(0);
            try {
              r4.blob = 0 === new Blob([n6], { type: "application/zip" }).size;
            } catch (e8) {
              try {
                var i5 = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
                i5.append(n6), r4.blob = 0 === i5.getBlob("application/zip").size;
              } catch (e9) {
                r4.blob = false;
              }
            }
          }
          try {
            r4.nodestream = !!e7("readable-stream").Readable;
          } catch (e8) {
            r4.nodestream = false;
          }
        }, { "readable-stream": 16 }], 31: [function(e7, t3, s5) {
          "use strict";
          for (var o6 = e7("./utils"), h3 = e7("./support"), r4 = e7("./nodejsUtils"), n6 = e7("./stream/GenericWorker"), u2 = new Array(256), i5 = 0; i5 < 256; i5++)
            u2[i5] = 252 <= i5 ? 6 : 248 <= i5 ? 5 : 240 <= i5 ? 4 : 224 <= i5 ? 3 : 192 <= i5 ? 2 : 1;
          u2[254] = u2[254] = 1;
          function a3() {
            n6.call(this, "utf-8 decode"), this.leftOver = null;
          }
          function l5() {
            n6.call(this, "utf-8 encode");
          }
          s5.utf8encode = function(e8) {
            return h3.nodebuffer ? r4.newBufferFrom(e8, "utf-8") : function(e9) {
              var t4, r5, n7, i6, s6, a4 = e9.length, o7 = 0;
              for (i6 = 0; i6 < a4; i6++)
                55296 == (64512 & (r5 = e9.charCodeAt(i6))) && i6 + 1 < a4 && 56320 == (64512 & (n7 = e9.charCodeAt(i6 + 1))) && (r5 = 65536 + (r5 - 55296 << 10) + (n7 - 56320), i6++), o7 += r5 < 128 ? 1 : r5 < 2048 ? 2 : r5 < 65536 ? 3 : 4;
              for (t4 = h3.uint8array ? new Uint8Array(o7) : new Array(o7), i6 = s6 = 0; s6 < o7; i6++)
                55296 == (64512 & (r5 = e9.charCodeAt(i6))) && i6 + 1 < a4 && 56320 == (64512 & (n7 = e9.charCodeAt(i6 + 1))) && (r5 = 65536 + (r5 - 55296 << 10) + (n7 - 56320), i6++), r5 < 128 ? t4[s6++] = r5 : (r5 < 2048 ? t4[s6++] = 192 | r5 >>> 6 : (r5 < 65536 ? t4[s6++] = 224 | r5 >>> 12 : (t4[s6++] = 240 | r5 >>> 18, t4[s6++] = 128 | r5 >>> 12 & 63), t4[s6++] = 128 | r5 >>> 6 & 63), t4[s6++] = 128 | 63 & r5);
              return t4;
            }(e8);
          }, s5.utf8decode = function(e8) {
            return h3.nodebuffer ? o6.transformTo("nodebuffer", e8).toString("utf-8") : function(e9) {
              var t4, r5, n7, i6, s6 = e9.length, a4 = new Array(2 * s6);
              for (t4 = r5 = 0; t4 < s6; )
                if ((n7 = e9[t4++]) < 128)
                  a4[r5++] = n7;
                else if (4 < (i6 = u2[n7]))
                  a4[r5++] = 65533, t4 += i6 - 1;
                else {
                  for (n7 &= 2 === i6 ? 31 : 3 === i6 ? 15 : 7; 1 < i6 && t4 < s6; )
                    n7 = n7 << 6 | 63 & e9[t4++], i6--;
                  1 < i6 ? a4[r5++] = 65533 : n7 < 65536 ? a4[r5++] = n7 : (n7 -= 65536, a4[r5++] = 55296 | n7 >> 10 & 1023, a4[r5++] = 56320 | 1023 & n7);
                }
              return a4.length !== r5 && (a4.subarray ? a4 = a4.subarray(0, r5) : a4.length = r5), o6.applyFromCharCode(a4);
            }(e8 = o6.transformTo(h3.uint8array ? "uint8array" : "array", e8));
          }, o6.inherits(a3, n6), a3.prototype.processChunk = function(e8) {
            var t4 = o6.transformTo(h3.uint8array ? "uint8array" : "array", e8.data);
            if (this.leftOver && this.leftOver.length) {
              if (h3.uint8array) {
                var r5 = t4;
                (t4 = new Uint8Array(r5.length + this.leftOver.length)).set(this.leftOver, 0), t4.set(r5, this.leftOver.length);
              } else
                t4 = this.leftOver.concat(t4);
              this.leftOver = null;
            }
            var n7 = function(e9, t5) {
              var r6;
              for ((t5 = t5 || e9.length) > e9.length && (t5 = e9.length), r6 = t5 - 1; 0 <= r6 && 128 == (192 & e9[r6]); )
                r6--;
              return r6 < 0 ? t5 : 0 === r6 ? t5 : r6 + u2[e9[r6]] > t5 ? r6 : t5;
            }(t4), i6 = t4;
            n7 !== t4.length && (h3.uint8array ? (i6 = t4.subarray(0, n7), this.leftOver = t4.subarray(n7, t4.length)) : (i6 = t4.slice(0, n7), this.leftOver = t4.slice(n7, t4.length))), this.push({ data: s5.utf8decode(i6), meta: e8.meta });
          }, a3.prototype.flush = function() {
            this.leftOver && this.leftOver.length && (this.push({ data: s5.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
          }, s5.Utf8DecodeWorker = a3, o6.inherits(l5, n6), l5.prototype.processChunk = function(e8) {
            this.push({ data: s5.utf8encode(e8.data), meta: e8.meta });
          }, s5.Utf8EncodeWorker = l5;
        }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(e7, t3, a3) {
          "use strict";
          var o6 = e7("./support"), h3 = e7("./base64"), r4 = e7("./nodejsUtils"), u2 = e7("./external");
          function n6(e8) {
            return e8;
          }
          function l5(e8, t4) {
            for (var r5 = 0; r5 < e8.length; ++r5)
              t4[r5] = 255 & e8.charCodeAt(r5);
            return t4;
          }
          e7("setimmediate"), a3.newBlob = function(t4, r5) {
            a3.checkSupport("blob");
            try {
              return new Blob([t4], { type: r5 });
            } catch (e8) {
              try {
                var n7 = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
                return n7.append(t4), n7.getBlob(r5);
              } catch (e9) {
                throw new Error("Bug : can't construct the Blob.");
              }
            }
          };
          var i5 = { stringifyByChunk: function(e8, t4, r5) {
            var n7 = [], i6 = 0, s6 = e8.length;
            if (s6 <= r5)
              return String.fromCharCode.apply(null, e8);
            for (; i6 < s6; )
              "array" === t4 || "nodebuffer" === t4 ? n7.push(String.fromCharCode.apply(null, e8.slice(i6, Math.min(i6 + r5, s6)))) : n7.push(String.fromCharCode.apply(null, e8.subarray(i6, Math.min(i6 + r5, s6)))), i6 += r5;
            return n7.join("");
          }, stringifyByChar: function(e8) {
            for (var t4 = "", r5 = 0; r5 < e8.length; r5++)
              t4 += String.fromCharCode(e8[r5]);
            return t4;
          }, applyCanBeUsed: { uint8array: function() {
            try {
              return o6.uint8array && 1 === String.fromCharCode.apply(null, new Uint8Array(1)).length;
            } catch (e8) {
              return false;
            }
          }(), nodebuffer: function() {
            try {
              return o6.nodebuffer && 1 === String.fromCharCode.apply(null, r4.allocBuffer(1)).length;
            } catch (e8) {
              return false;
            }
          }() } };
          function s5(e8) {
            var t4 = 65536, r5 = a3.getTypeOf(e8), n7 = true;
            if ("uint8array" === r5 ? n7 = i5.applyCanBeUsed.uint8array : "nodebuffer" === r5 && (n7 = i5.applyCanBeUsed.nodebuffer), n7)
              for (; 1 < t4; )
                try {
                  return i5.stringifyByChunk(e8, r5, t4);
                } catch (e9) {
                  t4 = Math.floor(t4 / 2);
                }
            return i5.stringifyByChar(e8);
          }
          function f2(e8, t4) {
            for (var r5 = 0; r5 < e8.length; r5++)
              t4[r5] = e8[r5];
            return t4;
          }
          a3.applyFromCharCode = s5;
          var c3 = {};
          c3.string = { string: n6, array: function(e8) {
            return l5(e8, new Array(e8.length));
          }, arraybuffer: function(e8) {
            return c3.string.uint8array(e8).buffer;
          }, uint8array: function(e8) {
            return l5(e8, new Uint8Array(e8.length));
          }, nodebuffer: function(e8) {
            return l5(e8, r4.allocBuffer(e8.length));
          } }, c3.array = { string: s5, array: n6, arraybuffer: function(e8) {
            return new Uint8Array(e8).buffer;
          }, uint8array: function(e8) {
            return new Uint8Array(e8);
          }, nodebuffer: function(e8) {
            return r4.newBufferFrom(e8);
          } }, c3.arraybuffer = { string: function(e8) {
            return s5(new Uint8Array(e8));
          }, array: function(e8) {
            return f2(new Uint8Array(e8), new Array(e8.byteLength));
          }, arraybuffer: n6, uint8array: function(e8) {
            return new Uint8Array(e8);
          }, nodebuffer: function(e8) {
            return r4.newBufferFrom(new Uint8Array(e8));
          } }, c3.uint8array = { string: s5, array: function(e8) {
            return f2(e8, new Array(e8.length));
          }, arraybuffer: function(e8) {
            return e8.buffer;
          }, uint8array: n6, nodebuffer: function(e8) {
            return r4.newBufferFrom(e8);
          } }, c3.nodebuffer = { string: s5, array: function(e8) {
            return f2(e8, new Array(e8.length));
          }, arraybuffer: function(e8) {
            return c3.nodebuffer.uint8array(e8).buffer;
          }, uint8array: function(e8) {
            return f2(e8, new Uint8Array(e8.length));
          }, nodebuffer: n6 }, a3.transformTo = function(e8, t4) {
            if (t4 = t4 || "", !e8)
              return t4;
            a3.checkSupport(e8);
            var r5 = a3.getTypeOf(t4);
            return c3[r5][e8](t4);
          }, a3.resolve = function(e8) {
            for (var t4 = e8.split("/"), r5 = [], n7 = 0; n7 < t4.length; n7++) {
              var i6 = t4[n7];
              "." === i6 || "" === i6 && 0 !== n7 && n7 !== t4.length - 1 || (".." === i6 ? r5.pop() : r5.push(i6));
            }
            return r5.join("/");
          }, a3.getTypeOf = function(e8) {
            return "string" == typeof e8 ? "string" : "[object Array]" === Object.prototype.toString.call(e8) ? "array" : o6.nodebuffer && r4.isBuffer(e8) ? "nodebuffer" : o6.uint8array && e8 instanceof Uint8Array ? "uint8array" : o6.arraybuffer && e8 instanceof ArrayBuffer ? "arraybuffer" : void 0;
          }, a3.checkSupport = function(e8) {
            if (!o6[e8.toLowerCase()])
              throw new Error(e8 + " is not supported by this platform");
          }, a3.MAX_VALUE_16BITS = 65535, a3.MAX_VALUE_32BITS = -1, a3.pretty = function(e8) {
            var t4, r5, n7 = "";
            for (r5 = 0; r5 < (e8 || "").length; r5++)
              n7 += "\\x" + ((t4 = e8.charCodeAt(r5)) < 16 ? "0" : "") + t4.toString(16).toUpperCase();
            return n7;
          }, a3.delay = function(e8, t4, r5) {
            setImmediate(function() {
              e8.apply(r5 || null, t4 || []);
            });
          }, a3.inherits = function(e8, t4) {
            function r5() {
            }
            r5.prototype = t4.prototype, e8.prototype = new r5();
          }, a3.extend = function() {
            var e8, t4, r5 = {};
            for (e8 = 0; e8 < arguments.length; e8++)
              for (t4 in arguments[e8])
                Object.prototype.hasOwnProperty.call(arguments[e8], t4) && void 0 === r5[t4] && (r5[t4] = arguments[e8][t4]);
            return r5;
          }, a3.prepareContent = function(r5, e8, n7, i6, s6) {
            return u2.Promise.resolve(e8).then(function(n8) {
              return o6.blob && (n8 instanceof Blob || -1 !== ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(n8))) && "undefined" != typeof FileReader ? new u2.Promise(function(t4, r6) {
                var e9 = new FileReader();
                e9.onload = function(e10) {
                  t4(e10.target.result);
                }, e9.onerror = function(e10) {
                  r6(e10.target.error);
                }, e9.readAsArrayBuffer(n8);
              }) : n8;
            }).then(function(e9) {
              var t4 = a3.getTypeOf(e9);
              return t4 ? ("arraybuffer" === t4 ? e9 = a3.transformTo("uint8array", e9) : "string" === t4 && (s6 ? e9 = h3.decode(e9) : n7 && true !== i6 && (e9 = function(e10) {
                return l5(e10, o6.uint8array ? new Uint8Array(e10.length) : new Array(e10.length));
              }(e9))), e9) : u2.Promise.reject(new Error("Can't read the data of '" + r5 + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
            });
          };
        }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(e7, t3, r4) {
          "use strict";
          var n6 = e7("./reader/readerFor"), i5 = e7("./utils"), s5 = e7("./signature"), a3 = e7("./zipEntry"), o6 = e7("./support");
          function h3(e8) {
            this.files = [], this.loadOptions = e8;
          }
          h3.prototype = { checkSignature: function(e8) {
            if (!this.reader.readAndCheckSignature(e8)) {
              this.reader.index -= 4;
              var t4 = this.reader.readString(4);
              throw new Error("Corrupted zip or bug: unexpected signature (" + i5.pretty(t4) + ", expected " + i5.pretty(e8) + ")");
            }
          }, isSignature: function(e8, t4) {
            var r5 = this.reader.index;
            this.reader.setIndex(e8);
            var n7 = this.reader.readString(4) === t4;
            return this.reader.setIndex(r5), n7;
          }, readBlockEndOfCentral: function() {
            this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
            var e8 = this.reader.readData(this.zipCommentLength), t4 = o6.uint8array ? "uint8array" : "array", r5 = i5.transformTo(t4, e8);
            this.zipComment = this.loadOptions.decodeFileName(r5);
          }, readBlockZip64EndOfCentral: function() {
            this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
            for (var e8, t4, r5, n7 = this.zip64EndOfCentralSize - 44; 0 < n7; )
              e8 = this.reader.readInt(2), t4 = this.reader.readInt(4), r5 = this.reader.readData(t4), this.zip64ExtensibleData[e8] = { id: e8, length: t4, value: r5 };
          }, readBlockZip64EndOfCentralLocator: function() {
            if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount)
              throw new Error("Multi-volumes zip are not supported");
          }, readLocalFiles: function() {
            var e8, t4;
            for (e8 = 0; e8 < this.files.length; e8++)
              t4 = this.files[e8], this.reader.setIndex(t4.localHeaderOffset), this.checkSignature(s5.LOCAL_FILE_HEADER), t4.readLocalPart(this.reader), t4.handleUTF8(), t4.processAttributes();
          }, readCentralDir: function() {
            var e8;
            for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(s5.CENTRAL_FILE_HEADER); )
              (e8 = new a3({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(e8);
            if (this.centralDirRecords !== this.files.length && 0 !== this.centralDirRecords && 0 === this.files.length)
              throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
          }, readEndOfCentral: function() {
            var e8 = this.reader.lastIndexOfSignature(s5.CENTRAL_DIRECTORY_END);
            if (e8 < 0)
              throw !this.isSignature(0, s5.LOCAL_FILE_HEADER) ? new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html") : new Error("Corrupted zip: can't find end of central directory");
            this.reader.setIndex(e8);
            var t4 = e8;
            if (this.checkSignature(s5.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === i5.MAX_VALUE_16BITS || this.diskWithCentralDirStart === i5.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === i5.MAX_VALUE_16BITS || this.centralDirRecords === i5.MAX_VALUE_16BITS || this.centralDirSize === i5.MAX_VALUE_32BITS || this.centralDirOffset === i5.MAX_VALUE_32BITS) {
              if (this.zip64 = true, (e8 = this.reader.lastIndexOfSignature(s5.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0)
                throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
              if (this.reader.setIndex(e8), this.checkSignature(s5.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, s5.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(s5.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0))
                throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
              this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(s5.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
            }
            var r5 = this.centralDirOffset + this.centralDirSize;
            this.zip64 && (r5 += 20, r5 += 12 + this.zip64EndOfCentralSize);
            var n7 = t4 - r5;
            if (0 < n7)
              this.isSignature(t4, s5.CENTRAL_FILE_HEADER) || (this.reader.zero = n7);
            else if (n7 < 0)
              throw new Error("Corrupted zip: missing " + Math.abs(n7) + " bytes.");
          }, prepareReader: function(e8) {
            this.reader = n6(e8);
          }, load: function(e8) {
            this.prepareReader(e8), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
          } }, t3.exports = h3;
        }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(e7, t3, r4) {
          "use strict";
          var n6 = e7("./reader/readerFor"), s5 = e7("./utils"), i5 = e7("./compressedObject"), a3 = e7("./crc32"), o6 = e7("./utf8"), h3 = e7("./compressions"), u2 = e7("./support");
          function l5(e8, t4) {
            this.options = e8, this.loadOptions = t4;
          }
          l5.prototype = { isEncrypted: function() {
            return 1 == (1 & this.bitFlag);
          }, useUTF8: function() {
            return 2048 == (2048 & this.bitFlag);
          }, readLocalPart: function(e8) {
            var t4, r5;
            if (e8.skip(22), this.fileNameLength = e8.readInt(2), r5 = e8.readInt(2), this.fileName = e8.readData(this.fileNameLength), e8.skip(r5), -1 === this.compressedSize || -1 === this.uncompressedSize)
              throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
            if (null === (t4 = function(e9) {
              for (var t5 in h3)
                if (Object.prototype.hasOwnProperty.call(h3, t5) && h3[t5].magic === e9)
                  return h3[t5];
              return null;
            }(this.compressionMethod)))
              throw new Error("Corrupted zip : compression " + s5.pretty(this.compressionMethod) + " unknown (inner file : " + s5.transformTo("string", this.fileName) + ")");
            this.decompressed = new i5(this.compressedSize, this.uncompressedSize, this.crc32, t4, e8.readData(this.compressedSize));
          }, readCentralPart: function(e8) {
            this.versionMadeBy = e8.readInt(2), e8.skip(2), this.bitFlag = e8.readInt(2), this.compressionMethod = e8.readString(2), this.date = e8.readDate(), this.crc32 = e8.readInt(4), this.compressedSize = e8.readInt(4), this.uncompressedSize = e8.readInt(4);
            var t4 = e8.readInt(2);
            if (this.extraFieldsLength = e8.readInt(2), this.fileCommentLength = e8.readInt(2), this.diskNumberStart = e8.readInt(2), this.internalFileAttributes = e8.readInt(2), this.externalFileAttributes = e8.readInt(4), this.localHeaderOffset = e8.readInt(4), this.isEncrypted())
              throw new Error("Encrypted zip are not supported");
            e8.skip(t4), this.readExtraFields(e8), this.parseZIP64ExtraField(e8), this.fileComment = e8.readData(this.fileCommentLength);
          }, processAttributes: function() {
            this.unixPermissions = null, this.dosPermissions = null;
            var e8 = this.versionMadeBy >> 8;
            this.dir = !!(16 & this.externalFileAttributes), 0 == e8 && (this.dosPermissions = 63 & this.externalFileAttributes), 3 == e8 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || "/" !== this.fileNameStr.slice(-1) || (this.dir = true);
          }, parseZIP64ExtraField: function() {
            if (this.extraFields[1]) {
              var e8 = n6(this.extraFields[1].value);
              this.uncompressedSize === s5.MAX_VALUE_32BITS && (this.uncompressedSize = e8.readInt(8)), this.compressedSize === s5.MAX_VALUE_32BITS && (this.compressedSize = e8.readInt(8)), this.localHeaderOffset === s5.MAX_VALUE_32BITS && (this.localHeaderOffset = e8.readInt(8)), this.diskNumberStart === s5.MAX_VALUE_32BITS && (this.diskNumberStart = e8.readInt(4));
            }
          }, readExtraFields: function(e8) {
            var t4, r5, n7, i6 = e8.index + this.extraFieldsLength;
            for (this.extraFields || (this.extraFields = {}); e8.index + 4 < i6; )
              t4 = e8.readInt(2), r5 = e8.readInt(2), n7 = e8.readData(r5), this.extraFields[t4] = { id: t4, length: r5, value: n7 };
            e8.setIndex(i6);
          }, handleUTF8: function() {
            var e8 = u2.uint8array ? "uint8array" : "array";
            if (this.useUTF8())
              this.fileNameStr = o6.utf8decode(this.fileName), this.fileCommentStr = o6.utf8decode(this.fileComment);
            else {
              var t4 = this.findExtraFieldUnicodePath();
              if (null !== t4)
                this.fileNameStr = t4;
              else {
                var r5 = s5.transformTo(e8, this.fileName);
                this.fileNameStr = this.loadOptions.decodeFileName(r5);
              }
              var n7 = this.findExtraFieldUnicodeComment();
              if (null !== n7)
                this.fileCommentStr = n7;
              else {
                var i6 = s5.transformTo(e8, this.fileComment);
                this.fileCommentStr = this.loadOptions.decodeFileName(i6);
              }
            }
          }, findExtraFieldUnicodePath: function() {
            var e8 = this.extraFields[28789];
            if (e8) {
              var t4 = n6(e8.value);
              return 1 !== t4.readInt(1) ? null : a3(this.fileName) !== t4.readInt(4) ? null : o6.utf8decode(t4.readData(e8.length - 5));
            }
            return null;
          }, findExtraFieldUnicodeComment: function() {
            var e8 = this.extraFields[25461];
            if (e8) {
              var t4 = n6(e8.value);
              return 1 !== t4.readInt(1) ? null : a3(this.fileComment) !== t4.readInt(4) ? null : o6.utf8decode(t4.readData(e8.length - 5));
            }
            return null;
          } }, t3.exports = l5;
        }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(e7, t3, r4) {
          "use strict";
          function n6(e8, t4, r5) {
            this.name = e8, this.dir = r5.dir, this.date = r5.date, this.comment = r5.comment, this.unixPermissions = r5.unixPermissions, this.dosPermissions = r5.dosPermissions, this._data = t4, this._dataBinary = r5.binary, this.options = { compression: r5.compression, compressionOptions: r5.compressionOptions };
          }
          var s5 = e7("./stream/StreamHelper"), i5 = e7("./stream/DataWorker"), a3 = e7("./utf8"), o6 = e7("./compressedObject"), h3 = e7("./stream/GenericWorker");
          n6.prototype = { internalStream: function(e8) {
            var t4 = null, r5 = "string";
            try {
              if (!e8)
                throw new Error("No output type specified.");
              var n7 = "string" === (r5 = e8.toLowerCase()) || "text" === r5;
              "binarystring" !== r5 && "text" !== r5 || (r5 = "string"), t4 = this._decompressWorker();
              var i6 = !this._dataBinary;
              i6 && !n7 && (t4 = t4.pipe(new a3.Utf8EncodeWorker())), !i6 && n7 && (t4 = t4.pipe(new a3.Utf8DecodeWorker()));
            } catch (e9) {
              (t4 = new h3("error")).error(e9);
            }
            return new s5(t4, r5, "");
          }, async: function(e8, t4) {
            return this.internalStream(e8).accumulate(t4);
          }, nodeStream: function(e8, t4) {
            return this.internalStream(e8 || "nodebuffer").toNodejsStream(t4);
          }, _compressWorker: function(e8, t4) {
            if (this._data instanceof o6 && this._data.compression.magic === e8.magic)
              return this._data.getCompressedWorker();
            var r5 = this._decompressWorker();
            return this._dataBinary || (r5 = r5.pipe(new a3.Utf8EncodeWorker())), o6.createWorkerFrom(r5, e8, t4);
          }, _decompressWorker: function() {
            return this._data instanceof o6 ? this._data.getContentWorker() : this._data instanceof h3 ? this._data : new i5(this._data);
          } };
          for (var u2 = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], l5 = function() {
            throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
          }, f2 = 0; f2 < u2.length; f2++)
            n6.prototype[u2[f2]] = l5;
          t3.exports = n6;
        }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(e7, l5, t3) {
          (function(t4) {
            "use strict";
            var r4, n6, e8 = t4.MutationObserver || t4.WebKitMutationObserver;
            if (e8) {
              var i5 = 0, s5 = new e8(u2), a3 = t4.document.createTextNode("");
              s5.observe(a3, { characterData: true }), r4 = function() {
                a3.data = i5 = ++i5 % 2;
              };
            } else if (t4.setImmediate || void 0 === t4.MessageChannel)
              r4 = "document" in t4 && "onreadystatechange" in t4.document.createElement("script") ? function() {
                var e9 = t4.document.createElement("script");
                e9.onreadystatechange = function() {
                  u2(), e9.onreadystatechange = null, e9.parentNode.removeChild(e9), e9 = null;
                }, t4.document.documentElement.appendChild(e9);
              } : function() {
                setTimeout(u2, 0);
              };
            else {
              var o6 = new t4.MessageChannel();
              o6.port1.onmessage = u2, r4 = function() {
                o6.port2.postMessage(0);
              };
            }
            var h3 = [];
            function u2() {
              var e9, t5;
              n6 = true;
              for (var r5 = h3.length; r5; ) {
                for (t5 = h3, h3 = [], e9 = -1; ++e9 < r5; )
                  t5[e9]();
                r5 = h3.length;
              }
              n6 = false;
            }
            l5.exports = function(e9) {
              1 !== h3.push(e9) || n6 || r4();
            };
          }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
        }, {}], 37: [function(e7, t3, r4) {
          "use strict";
          var i5 = e7("immediate");
          function u2() {
          }
          var l5 = {}, s5 = ["REJECTED"], a3 = ["FULFILLED"], n6 = ["PENDING"];
          function o6(e8) {
            if ("function" != typeof e8)
              throw new TypeError("resolver must be a function");
            this.state = n6, this.queue = [], this.outcome = void 0, e8 !== u2 && d3(this, e8);
          }
          function h3(e8, t4, r5) {
            this.promise = e8, "function" == typeof t4 && (this.onFulfilled = t4, this.callFulfilled = this.otherCallFulfilled), "function" == typeof r5 && (this.onRejected = r5, this.callRejected = this.otherCallRejected);
          }
          function f2(t4, r5, n7) {
            i5(function() {
              var e8;
              try {
                e8 = r5(n7);
              } catch (e9) {
                return l5.reject(t4, e9);
              }
              e8 === t4 ? l5.reject(t4, new TypeError("Cannot resolve promise with itself")) : l5.resolve(t4, e8);
            });
          }
          function c3(e8) {
            var t4 = e8 && e8.then;
            if (e8 && ("object" == typeof e8 || "function" == typeof e8) && "function" == typeof t4)
              return function() {
                t4.apply(e8, arguments);
              };
          }
          function d3(t4, e8) {
            var r5 = false;
            function n7(e9) {
              r5 || (r5 = true, l5.reject(t4, e9));
            }
            function i6(e9) {
              r5 || (r5 = true, l5.resolve(t4, e9));
            }
            var s6 = p2(function() {
              e8(i6, n7);
            });
            "error" === s6.status && n7(s6.value);
          }
          function p2(e8, t4) {
            var r5 = {};
            try {
              r5.value = e8(t4), r5.status = "success";
            } catch (e9) {
              r5.status = "error", r5.value = e9;
            }
            return r5;
          }
          (t3.exports = o6).prototype.finally = function(t4) {
            if ("function" != typeof t4)
              return this;
            var r5 = this.constructor;
            return this.then(function(e8) {
              return r5.resolve(t4()).then(function() {
                return e8;
              });
            }, function(e8) {
              return r5.resolve(t4()).then(function() {
                throw e8;
              });
            });
          }, o6.prototype.catch = function(e8) {
            return this.then(null, e8);
          }, o6.prototype.then = function(e8, t4) {
            if ("function" != typeof e8 && this.state === a3 || "function" != typeof t4 && this.state === s5)
              return this;
            var r5 = new this.constructor(u2);
            this.state !== n6 ? f2(r5, this.state === a3 ? e8 : t4, this.outcome) : this.queue.push(new h3(r5, e8, t4));
            return r5;
          }, h3.prototype.callFulfilled = function(e8) {
            l5.resolve(this.promise, e8);
          }, h3.prototype.otherCallFulfilled = function(e8) {
            f2(this.promise, this.onFulfilled, e8);
          }, h3.prototype.callRejected = function(e8) {
            l5.reject(this.promise, e8);
          }, h3.prototype.otherCallRejected = function(e8) {
            f2(this.promise, this.onRejected, e8);
          }, l5.resolve = function(e8, t4) {
            var r5 = p2(c3, t4);
            if ("error" === r5.status)
              return l5.reject(e8, r5.value);
            var n7 = r5.value;
            if (n7)
              d3(e8, n7);
            else {
              e8.state = a3, e8.outcome = t4;
              for (var i6 = -1, s6 = e8.queue.length; ++i6 < s6; )
                e8.queue[i6].callFulfilled(t4);
            }
            return e8;
          }, l5.reject = function(e8, t4) {
            e8.state = s5, e8.outcome = t4;
            for (var r5 = -1, n7 = e8.queue.length; ++r5 < n7; )
              e8.queue[r5].callRejected(t4);
            return e8;
          }, o6.resolve = function(e8) {
            if (e8 instanceof this)
              return e8;
            return l5.resolve(new this(u2), e8);
          }, o6.reject = function(e8) {
            var t4 = new this(u2);
            return l5.reject(t4, e8);
          }, o6.all = function(e8) {
            var r5 = this;
            if ("[object Array]" !== Object.prototype.toString.call(e8))
              return this.reject(new TypeError("must be an array"));
            var n7 = e8.length, i6 = false;
            if (!n7)
              return this.resolve([]);
            var s6 = new Array(n7), a4 = 0, t4 = -1, o7 = new this(u2);
            for (; ++t4 < n7; )
              h4(e8[t4], t4);
            return o7;
            function h4(e9, t5) {
              r5.resolve(e9).then(function(e10) {
                s6[t5] = e10, ++a4 !== n7 || i6 || (i6 = true, l5.resolve(o7, s6));
              }, function(e10) {
                i6 || (i6 = true, l5.reject(o7, e10));
              });
            }
          }, o6.race = function(e8) {
            var t4 = this;
            if ("[object Array]" !== Object.prototype.toString.call(e8))
              return this.reject(new TypeError("must be an array"));
            var r5 = e8.length, n7 = false;
            if (!r5)
              return this.resolve([]);
            var i6 = -1, s6 = new this(u2);
            for (; ++i6 < r5; )
              a4 = e8[i6], t4.resolve(a4).then(function(e9) {
                n7 || (n7 = true, l5.resolve(s6, e9));
              }, function(e9) {
                n7 || (n7 = true, l5.reject(s6, e9));
              });
            var a4;
            return s6;
          };
        }, { immediate: 36 }], 38: [function(e7, t3, r4) {
          "use strict";
          var n6 = {};
          (0, e7("./lib/utils/common").assign)(n6, e7("./lib/deflate"), e7("./lib/inflate"), e7("./lib/zlib/constants")), t3.exports = n6;
        }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(e7, t3, r4) {
          "use strict";
          var a3 = e7("./zlib/deflate"), o6 = e7("./utils/common"), h3 = e7("./utils/strings"), i5 = e7("./zlib/messages"), s5 = e7("./zlib/zstream"), u2 = Object.prototype.toString, l5 = 0, f2 = -1, c3 = 0, d3 = 8;
          function p2(e8) {
            if (!(this instanceof p2))
              return new p2(e8);
            this.options = o6.assign({ level: f2, method: d3, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: c3, to: "" }, e8 || {});
            var t4 = this.options;
            t4.raw && 0 < t4.windowBits ? t4.windowBits = -t4.windowBits : t4.gzip && 0 < t4.windowBits && t4.windowBits < 16 && (t4.windowBits += 16), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new s5(), this.strm.avail_out = 0;
            var r5 = a3.deflateInit2(this.strm, t4.level, t4.method, t4.windowBits, t4.memLevel, t4.strategy);
            if (r5 !== l5)
              throw new Error(i5[r5]);
            if (t4.header && a3.deflateSetHeader(this.strm, t4.header), t4.dictionary) {
              var n7;
              if (n7 = "string" == typeof t4.dictionary ? h3.string2buf(t4.dictionary) : "[object ArrayBuffer]" === u2.call(t4.dictionary) ? new Uint8Array(t4.dictionary) : t4.dictionary, (r5 = a3.deflateSetDictionary(this.strm, n7)) !== l5)
                throw new Error(i5[r5]);
              this._dict_set = true;
            }
          }
          function n6(e8, t4) {
            var r5 = new p2(t4);
            if (r5.push(e8, true), r5.err)
              throw r5.msg || i5[r5.err];
            return r5.result;
          }
          p2.prototype.push = function(e8, t4) {
            var r5, n7, i6 = this.strm, s6 = this.options.chunkSize;
            if (this.ended)
              return false;
            n7 = t4 === ~~t4 ? t4 : true === t4 ? 4 : 0, "string" == typeof e8 ? i6.input = h3.string2buf(e8) : "[object ArrayBuffer]" === u2.call(e8) ? i6.input = new Uint8Array(e8) : i6.input = e8, i6.next_in = 0, i6.avail_in = i6.input.length;
            do {
              if (0 === i6.avail_out && (i6.output = new o6.Buf8(s6), i6.next_out = 0, i6.avail_out = s6), 1 !== (r5 = a3.deflate(i6, n7)) && r5 !== l5)
                return this.onEnd(r5), !(this.ended = true);
              0 !== i6.avail_out && (0 !== i6.avail_in || 4 !== n7 && 2 !== n7) || ("string" === this.options.to ? this.onData(h3.buf2binstring(o6.shrinkBuf(i6.output, i6.next_out))) : this.onData(o6.shrinkBuf(i6.output, i6.next_out)));
            } while ((0 < i6.avail_in || 0 === i6.avail_out) && 1 !== r5);
            return 4 === n7 ? (r5 = a3.deflateEnd(this.strm), this.onEnd(r5), this.ended = true, r5 === l5) : 2 !== n7 || (this.onEnd(l5), !(i6.avail_out = 0));
          }, p2.prototype.onData = function(e8) {
            this.chunks.push(e8);
          }, p2.prototype.onEnd = function(e8) {
            e8 === l5 && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = o6.flattenChunks(this.chunks)), this.chunks = [], this.err = e8, this.msg = this.strm.msg;
          }, r4.Deflate = p2, r4.deflate = n6, r4.deflateRaw = function(e8, t4) {
            return (t4 = t4 || {}).raw = true, n6(e8, t4);
          }, r4.gzip = function(e8, t4) {
            return (t4 = t4 || {}).gzip = true, n6(e8, t4);
          };
        }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(e7, t3, r4) {
          "use strict";
          var c3 = e7("./zlib/inflate"), d3 = e7("./utils/common"), p2 = e7("./utils/strings"), m2 = e7("./zlib/constants"), n6 = e7("./zlib/messages"), i5 = e7("./zlib/zstream"), s5 = e7("./zlib/gzheader"), _2 = Object.prototype.toString;
          function a3(e8) {
            if (!(this instanceof a3))
              return new a3(e8);
            this.options = d3.assign({ chunkSize: 16384, windowBits: 0, to: "" }, e8 || {});
            var t4 = this.options;
            t4.raw && 0 <= t4.windowBits && t4.windowBits < 16 && (t4.windowBits = -t4.windowBits, 0 === t4.windowBits && (t4.windowBits = -15)), !(0 <= t4.windowBits && t4.windowBits < 16) || e8 && e8.windowBits || (t4.windowBits += 32), 15 < t4.windowBits && t4.windowBits < 48 && 0 == (15 & t4.windowBits) && (t4.windowBits |= 15), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new i5(), this.strm.avail_out = 0;
            var r5 = c3.inflateInit2(this.strm, t4.windowBits);
            if (r5 !== m2.Z_OK)
              throw new Error(n6[r5]);
            this.header = new s5(), c3.inflateGetHeader(this.strm, this.header);
          }
          function o6(e8, t4) {
            var r5 = new a3(t4);
            if (r5.push(e8, true), r5.err)
              throw r5.msg || n6[r5.err];
            return r5.result;
          }
          a3.prototype.push = function(e8, t4) {
            var r5, n7, i6, s6, a4, o7, h3 = this.strm, u2 = this.options.chunkSize, l5 = this.options.dictionary, f2 = false;
            if (this.ended)
              return false;
            n7 = t4 === ~~t4 ? t4 : true === t4 ? m2.Z_FINISH : m2.Z_NO_FLUSH, "string" == typeof e8 ? h3.input = p2.binstring2buf(e8) : "[object ArrayBuffer]" === _2.call(e8) ? h3.input = new Uint8Array(e8) : h3.input = e8, h3.next_in = 0, h3.avail_in = h3.input.length;
            do {
              if (0 === h3.avail_out && (h3.output = new d3.Buf8(u2), h3.next_out = 0, h3.avail_out = u2), (r5 = c3.inflate(h3, m2.Z_NO_FLUSH)) === m2.Z_NEED_DICT && l5 && (o7 = "string" == typeof l5 ? p2.string2buf(l5) : "[object ArrayBuffer]" === _2.call(l5) ? new Uint8Array(l5) : l5, r5 = c3.inflateSetDictionary(this.strm, o7)), r5 === m2.Z_BUF_ERROR && true === f2 && (r5 = m2.Z_OK, f2 = false), r5 !== m2.Z_STREAM_END && r5 !== m2.Z_OK)
                return this.onEnd(r5), !(this.ended = true);
              h3.next_out && (0 !== h3.avail_out && r5 !== m2.Z_STREAM_END && (0 !== h3.avail_in || n7 !== m2.Z_FINISH && n7 !== m2.Z_SYNC_FLUSH) || ("string" === this.options.to ? (i6 = p2.utf8border(h3.output, h3.next_out), s6 = h3.next_out - i6, a4 = p2.buf2string(h3.output, i6), h3.next_out = s6, h3.avail_out = u2 - s6, s6 && d3.arraySet(h3.output, h3.output, i6, s6, 0), this.onData(a4)) : this.onData(d3.shrinkBuf(h3.output, h3.next_out)))), 0 === h3.avail_in && 0 === h3.avail_out && (f2 = true);
            } while ((0 < h3.avail_in || 0 === h3.avail_out) && r5 !== m2.Z_STREAM_END);
            return r5 === m2.Z_STREAM_END && (n7 = m2.Z_FINISH), n7 === m2.Z_FINISH ? (r5 = c3.inflateEnd(this.strm), this.onEnd(r5), this.ended = true, r5 === m2.Z_OK) : n7 !== m2.Z_SYNC_FLUSH || (this.onEnd(m2.Z_OK), !(h3.avail_out = 0));
          }, a3.prototype.onData = function(e8) {
            this.chunks.push(e8);
          }, a3.prototype.onEnd = function(e8) {
            e8 === m2.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = d3.flattenChunks(this.chunks)), this.chunks = [], this.err = e8, this.msg = this.strm.msg;
          }, r4.Inflate = a3, r4.inflate = o6, r4.inflateRaw = function(e8, t4) {
            return (t4 = t4 || {}).raw = true, o6(e8, t4);
          }, r4.ungzip = o6;
        }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(e7, t3, r4) {
          "use strict";
          var n6 = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
          r4.assign = function(e8) {
            for (var t4 = Array.prototype.slice.call(arguments, 1); t4.length; ) {
              var r5 = t4.shift();
              if (r5) {
                if ("object" != typeof r5)
                  throw new TypeError(r5 + "must be non-object");
                for (var n7 in r5)
                  r5.hasOwnProperty(n7) && (e8[n7] = r5[n7]);
              }
            }
            return e8;
          }, r4.shrinkBuf = function(e8, t4) {
            return e8.length === t4 ? e8 : e8.subarray ? e8.subarray(0, t4) : (e8.length = t4, e8);
          };
          var i5 = { arraySet: function(e8, t4, r5, n7, i6) {
            if (t4.subarray && e8.subarray)
              e8.set(t4.subarray(r5, r5 + n7), i6);
            else
              for (var s6 = 0; s6 < n7; s6++)
                e8[i6 + s6] = t4[r5 + s6];
          }, flattenChunks: function(e8) {
            var t4, r5, n7, i6, s6, a3;
            for (t4 = n7 = 0, r5 = e8.length; t4 < r5; t4++)
              n7 += e8[t4].length;
            for (a3 = new Uint8Array(n7), t4 = i6 = 0, r5 = e8.length; t4 < r5; t4++)
              s6 = e8[t4], a3.set(s6, i6), i6 += s6.length;
            return a3;
          } }, s5 = { arraySet: function(e8, t4, r5, n7, i6) {
            for (var s6 = 0; s6 < n7; s6++)
              e8[i6 + s6] = t4[r5 + s6];
          }, flattenChunks: function(e8) {
            return [].concat.apply([], e8);
          } };
          r4.setTyped = function(e8) {
            e8 ? (r4.Buf8 = Uint8Array, r4.Buf16 = Uint16Array, r4.Buf32 = Int32Array, r4.assign(r4, i5)) : (r4.Buf8 = Array, r4.Buf16 = Array, r4.Buf32 = Array, r4.assign(r4, s5));
          }, r4.setTyped(n6);
        }, {}], 42: [function(e7, t3, r4) {
          "use strict";
          var h3 = e7("./common"), i5 = true, s5 = true;
          try {
            String.fromCharCode.apply(null, [0]);
          } catch (e8) {
            i5 = false;
          }
          try {
            String.fromCharCode.apply(null, new Uint8Array(1));
          } catch (e8) {
            s5 = false;
          }
          for (var u2 = new h3.Buf8(256), n6 = 0; n6 < 256; n6++)
            u2[n6] = 252 <= n6 ? 6 : 248 <= n6 ? 5 : 240 <= n6 ? 4 : 224 <= n6 ? 3 : 192 <= n6 ? 2 : 1;
          function l5(e8, t4) {
            if (t4 < 65537 && (e8.subarray && s5 || !e8.subarray && i5))
              return String.fromCharCode.apply(null, h3.shrinkBuf(e8, t4));
            for (var r5 = "", n7 = 0; n7 < t4; n7++)
              r5 += String.fromCharCode(e8[n7]);
            return r5;
          }
          u2[254] = u2[254] = 1, r4.string2buf = function(e8) {
            var t4, r5, n7, i6, s6, a3 = e8.length, o6 = 0;
            for (i6 = 0; i6 < a3; i6++)
              55296 == (64512 & (r5 = e8.charCodeAt(i6))) && i6 + 1 < a3 && 56320 == (64512 & (n7 = e8.charCodeAt(i6 + 1))) && (r5 = 65536 + (r5 - 55296 << 10) + (n7 - 56320), i6++), o6 += r5 < 128 ? 1 : r5 < 2048 ? 2 : r5 < 65536 ? 3 : 4;
            for (t4 = new h3.Buf8(o6), i6 = s6 = 0; s6 < o6; i6++)
              55296 == (64512 & (r5 = e8.charCodeAt(i6))) && i6 + 1 < a3 && 56320 == (64512 & (n7 = e8.charCodeAt(i6 + 1))) && (r5 = 65536 + (r5 - 55296 << 10) + (n7 - 56320), i6++), r5 < 128 ? t4[s6++] = r5 : (r5 < 2048 ? t4[s6++] = 192 | r5 >>> 6 : (r5 < 65536 ? t4[s6++] = 224 | r5 >>> 12 : (t4[s6++] = 240 | r5 >>> 18, t4[s6++] = 128 | r5 >>> 12 & 63), t4[s6++] = 128 | r5 >>> 6 & 63), t4[s6++] = 128 | 63 & r5);
            return t4;
          }, r4.buf2binstring = function(e8) {
            return l5(e8, e8.length);
          }, r4.binstring2buf = function(e8) {
            for (var t4 = new h3.Buf8(e8.length), r5 = 0, n7 = t4.length; r5 < n7; r5++)
              t4[r5] = e8.charCodeAt(r5);
            return t4;
          }, r4.buf2string = function(e8, t4) {
            var r5, n7, i6, s6, a3 = t4 || e8.length, o6 = new Array(2 * a3);
            for (r5 = n7 = 0; r5 < a3; )
              if ((i6 = e8[r5++]) < 128)
                o6[n7++] = i6;
              else if (4 < (s6 = u2[i6]))
                o6[n7++] = 65533, r5 += s6 - 1;
              else {
                for (i6 &= 2 === s6 ? 31 : 3 === s6 ? 15 : 7; 1 < s6 && r5 < a3; )
                  i6 = i6 << 6 | 63 & e8[r5++], s6--;
                1 < s6 ? o6[n7++] = 65533 : i6 < 65536 ? o6[n7++] = i6 : (i6 -= 65536, o6[n7++] = 55296 | i6 >> 10 & 1023, o6[n7++] = 56320 | 1023 & i6);
              }
            return l5(o6, n7);
          }, r4.utf8border = function(e8, t4) {
            var r5;
            for ((t4 = t4 || e8.length) > e8.length && (t4 = e8.length), r5 = t4 - 1; 0 <= r5 && 128 == (192 & e8[r5]); )
              r5--;
            return r5 < 0 ? t4 : 0 === r5 ? t4 : r5 + u2[e8[r5]] > t4 ? r5 : t4;
          };
        }, { "./common": 41 }], 43: [function(e7, t3, r4) {
          "use strict";
          t3.exports = function(e8, t4, r5, n6) {
            for (var i5 = 65535 & e8 | 0, s5 = e8 >>> 16 & 65535 | 0, a3 = 0; 0 !== r5; ) {
              for (r5 -= a3 = 2e3 < r5 ? 2e3 : r5; s5 = s5 + (i5 = i5 + t4[n6++] | 0) | 0, --a3; )
                ;
              i5 %= 65521, s5 %= 65521;
            }
            return i5 | s5 << 16 | 0;
          };
        }, {}], 44: [function(e7, t3, r4) {
          "use strict";
          t3.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
        }, {}], 45: [function(e7, t3, r4) {
          "use strict";
          var o6 = function() {
            for (var e8, t4 = [], r5 = 0; r5 < 256; r5++) {
              e8 = r5;
              for (var n6 = 0; n6 < 8; n6++)
                e8 = 1 & e8 ? 3988292384 ^ e8 >>> 1 : e8 >>> 1;
              t4[r5] = e8;
            }
            return t4;
          }();
          t3.exports = function(e8, t4, r5, n6) {
            var i5 = o6, s5 = n6 + r5;
            e8 ^= -1;
            for (var a3 = n6; a3 < s5; a3++)
              e8 = e8 >>> 8 ^ i5[255 & (e8 ^ t4[a3])];
            return -1 ^ e8;
          };
        }, {}], 46: [function(e7, t3, r4) {
          "use strict";
          var h3, c3 = e7("../utils/common"), u2 = e7("./trees"), d3 = e7("./adler32"), p2 = e7("./crc32"), n6 = e7("./messages"), l5 = 0, f2 = 4, m2 = 0, _2 = -2, g2 = -1, b2 = 4, i5 = 2, v2 = 8, y2 = 9, s5 = 286, a3 = 30, o6 = 19, w2 = 2 * s5 + 1, k2 = 15, x2 = 3, S3 = 258, z = S3 + x2 + 1, C2 = 42, E2 = 113, A2 = 1, I2 = 2, O = 3, B = 4;
          function R2(e8, t4) {
            return e8.msg = n6[t4], t4;
          }
          function T2(e8) {
            return (e8 << 1) - (4 < e8 ? 9 : 0);
          }
          function D(e8) {
            for (var t4 = e8.length; 0 <= --t4; )
              e8[t4] = 0;
          }
          function F(e8) {
            var t4 = e8.state, r5 = t4.pending;
            r5 > e8.avail_out && (r5 = e8.avail_out), 0 !== r5 && (c3.arraySet(e8.output, t4.pending_buf, t4.pending_out, r5, e8.next_out), e8.next_out += r5, t4.pending_out += r5, e8.total_out += r5, e8.avail_out -= r5, t4.pending -= r5, 0 === t4.pending && (t4.pending_out = 0));
          }
          function N2(e8, t4) {
            u2._tr_flush_block(e8, 0 <= e8.block_start ? e8.block_start : -1, e8.strstart - e8.block_start, t4), e8.block_start = e8.strstart, F(e8.strm);
          }
          function U(e8, t4) {
            e8.pending_buf[e8.pending++] = t4;
          }
          function P2(e8, t4) {
            e8.pending_buf[e8.pending++] = t4 >>> 8 & 255, e8.pending_buf[e8.pending++] = 255 & t4;
          }
          function L2(e8, t4) {
            var r5, n7, i6 = e8.max_chain_length, s6 = e8.strstart, a4 = e8.prev_length, o7 = e8.nice_match, h4 = e8.strstart > e8.w_size - z ? e8.strstart - (e8.w_size - z) : 0, u3 = e8.window, l6 = e8.w_mask, f3 = e8.prev, c4 = e8.strstart + S3, d4 = u3[s6 + a4 - 1], p3 = u3[s6 + a4];
            e8.prev_length >= e8.good_match && (i6 >>= 2), o7 > e8.lookahead && (o7 = e8.lookahead);
            do {
              if (u3[(r5 = t4) + a4] === p3 && u3[r5 + a4 - 1] === d4 && u3[r5] === u3[s6] && u3[++r5] === u3[s6 + 1]) {
                s6 += 2, r5++;
                do {
                } while (u3[++s6] === u3[++r5] && u3[++s6] === u3[++r5] && u3[++s6] === u3[++r5] && u3[++s6] === u3[++r5] && u3[++s6] === u3[++r5] && u3[++s6] === u3[++r5] && u3[++s6] === u3[++r5] && u3[++s6] === u3[++r5] && s6 < c4);
                if (n7 = S3 - (c4 - s6), s6 = c4 - S3, a4 < n7) {
                  if (e8.match_start = t4, o7 <= (a4 = n7))
                    break;
                  d4 = u3[s6 + a4 - 1], p3 = u3[s6 + a4];
                }
              }
            } while ((t4 = f3[t4 & l6]) > h4 && 0 != --i6);
            return a4 <= e8.lookahead ? a4 : e8.lookahead;
          }
          function j(e8) {
            var t4, r5, n7, i6, s6, a4, o7, h4, u3, l6, f3 = e8.w_size;
            do {
              if (i6 = e8.window_size - e8.lookahead - e8.strstart, e8.strstart >= f3 + (f3 - z)) {
                for (c3.arraySet(e8.window, e8.window, f3, f3, 0), e8.match_start -= f3, e8.strstart -= f3, e8.block_start -= f3, t4 = r5 = e8.hash_size; n7 = e8.head[--t4], e8.head[t4] = f3 <= n7 ? n7 - f3 : 0, --r5; )
                  ;
                for (t4 = r5 = f3; n7 = e8.prev[--t4], e8.prev[t4] = f3 <= n7 ? n7 - f3 : 0, --r5; )
                  ;
                i6 += f3;
              }
              if (0 === e8.strm.avail_in)
                break;
              if (a4 = e8.strm, o7 = e8.window, h4 = e8.strstart + e8.lookahead, u3 = i6, l6 = void 0, l6 = a4.avail_in, u3 < l6 && (l6 = u3), r5 = 0 === l6 ? 0 : (a4.avail_in -= l6, c3.arraySet(o7, a4.input, a4.next_in, l6, h4), 1 === a4.state.wrap ? a4.adler = d3(a4.adler, o7, l6, h4) : 2 === a4.state.wrap && (a4.adler = p2(a4.adler, o7, l6, h4)), a4.next_in += l6, a4.total_in += l6, l6), e8.lookahead += r5, e8.lookahead + e8.insert >= x2)
                for (s6 = e8.strstart - e8.insert, e8.ins_h = e8.window[s6], e8.ins_h = (e8.ins_h << e8.hash_shift ^ e8.window[s6 + 1]) & e8.hash_mask; e8.insert && (e8.ins_h = (e8.ins_h << e8.hash_shift ^ e8.window[s6 + x2 - 1]) & e8.hash_mask, e8.prev[s6 & e8.w_mask] = e8.head[e8.ins_h], e8.head[e8.ins_h] = s6, s6++, e8.insert--, !(e8.lookahead + e8.insert < x2)); )
                  ;
            } while (e8.lookahead < z && 0 !== e8.strm.avail_in);
          }
          function Z2(e8, t4) {
            for (var r5, n7; ; ) {
              if (e8.lookahead < z) {
                if (j(e8), e8.lookahead < z && t4 === l5)
                  return A2;
                if (0 === e8.lookahead)
                  break;
              }
              if (r5 = 0, e8.lookahead >= x2 && (e8.ins_h = (e8.ins_h << e8.hash_shift ^ e8.window[e8.strstart + x2 - 1]) & e8.hash_mask, r5 = e8.prev[e8.strstart & e8.w_mask] = e8.head[e8.ins_h], e8.head[e8.ins_h] = e8.strstart), 0 !== r5 && e8.strstart - r5 <= e8.w_size - z && (e8.match_length = L2(e8, r5)), e8.match_length >= x2)
                if (n7 = u2._tr_tally(e8, e8.strstart - e8.match_start, e8.match_length - x2), e8.lookahead -= e8.match_length, e8.match_length <= e8.max_lazy_match && e8.lookahead >= x2) {
                  for (e8.match_length--; e8.strstart++, e8.ins_h = (e8.ins_h << e8.hash_shift ^ e8.window[e8.strstart + x2 - 1]) & e8.hash_mask, r5 = e8.prev[e8.strstart & e8.w_mask] = e8.head[e8.ins_h], e8.head[e8.ins_h] = e8.strstart, 0 != --e8.match_length; )
                    ;
                  e8.strstart++;
                } else
                  e8.strstart += e8.match_length, e8.match_length = 0, e8.ins_h = e8.window[e8.strstart], e8.ins_h = (e8.ins_h << e8.hash_shift ^ e8.window[e8.strstart + 1]) & e8.hash_mask;
              else
                n7 = u2._tr_tally(e8, 0, e8.window[e8.strstart]), e8.lookahead--, e8.strstart++;
              if (n7 && (N2(e8, false), 0 === e8.strm.avail_out))
                return A2;
            }
            return e8.insert = e8.strstart < x2 - 1 ? e8.strstart : x2 - 1, t4 === f2 ? (N2(e8, true), 0 === e8.strm.avail_out ? O : B) : e8.last_lit && (N2(e8, false), 0 === e8.strm.avail_out) ? A2 : I2;
          }
          function W(e8, t4) {
            for (var r5, n7, i6; ; ) {
              if (e8.lookahead < z) {
                if (j(e8), e8.lookahead < z && t4 === l5)
                  return A2;
                if (0 === e8.lookahead)
                  break;
              }
              if (r5 = 0, e8.lookahead >= x2 && (e8.ins_h = (e8.ins_h << e8.hash_shift ^ e8.window[e8.strstart + x2 - 1]) & e8.hash_mask, r5 = e8.prev[e8.strstart & e8.w_mask] = e8.head[e8.ins_h], e8.head[e8.ins_h] = e8.strstart), e8.prev_length = e8.match_length, e8.prev_match = e8.match_start, e8.match_length = x2 - 1, 0 !== r5 && e8.prev_length < e8.max_lazy_match && e8.strstart - r5 <= e8.w_size - z && (e8.match_length = L2(e8, r5), e8.match_length <= 5 && (1 === e8.strategy || e8.match_length === x2 && 4096 < e8.strstart - e8.match_start) && (e8.match_length = x2 - 1)), e8.prev_length >= x2 && e8.match_length <= e8.prev_length) {
                for (i6 = e8.strstart + e8.lookahead - x2, n7 = u2._tr_tally(e8, e8.strstart - 1 - e8.prev_match, e8.prev_length - x2), e8.lookahead -= e8.prev_length - 1, e8.prev_length -= 2; ++e8.strstart <= i6 && (e8.ins_h = (e8.ins_h << e8.hash_shift ^ e8.window[e8.strstart + x2 - 1]) & e8.hash_mask, r5 = e8.prev[e8.strstart & e8.w_mask] = e8.head[e8.ins_h], e8.head[e8.ins_h] = e8.strstart), 0 != --e8.prev_length; )
                  ;
                if (e8.match_available = 0, e8.match_length = x2 - 1, e8.strstart++, n7 && (N2(e8, false), 0 === e8.strm.avail_out))
                  return A2;
              } else if (e8.match_available) {
                if ((n7 = u2._tr_tally(e8, 0, e8.window[e8.strstart - 1])) && N2(e8, false), e8.strstart++, e8.lookahead--, 0 === e8.strm.avail_out)
                  return A2;
              } else
                e8.match_available = 1, e8.strstart++, e8.lookahead--;
            }
            return e8.match_available && (n7 = u2._tr_tally(e8, 0, e8.window[e8.strstart - 1]), e8.match_available = 0), e8.insert = e8.strstart < x2 - 1 ? e8.strstart : x2 - 1, t4 === f2 ? (N2(e8, true), 0 === e8.strm.avail_out ? O : B) : e8.last_lit && (N2(e8, false), 0 === e8.strm.avail_out) ? A2 : I2;
          }
          function M2(e8, t4, r5, n7, i6) {
            this.good_length = e8, this.max_lazy = t4, this.nice_length = r5, this.max_chain = n7, this.func = i6;
          }
          function H2() {
            this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = v2, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new c3.Buf16(2 * w2), this.dyn_dtree = new c3.Buf16(2 * (2 * a3 + 1)), this.bl_tree = new c3.Buf16(2 * (2 * o6 + 1)), D(this.dyn_ltree), D(this.dyn_dtree), D(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new c3.Buf16(k2 + 1), this.heap = new c3.Buf16(2 * s5 + 1), D(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new c3.Buf16(2 * s5 + 1), D(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
          }
          function G(e8) {
            var t4;
            return e8 && e8.state ? (e8.total_in = e8.total_out = 0, e8.data_type = i5, (t4 = e8.state).pending = 0, t4.pending_out = 0, t4.wrap < 0 && (t4.wrap = -t4.wrap), t4.status = t4.wrap ? C2 : E2, e8.adler = 2 === t4.wrap ? 0 : 1, t4.last_flush = l5, u2._tr_init(t4), m2) : R2(e8, _2);
          }
          function K(e8) {
            var t4 = G(e8);
            return t4 === m2 && function(e9) {
              e9.window_size = 2 * e9.w_size, D(e9.head), e9.max_lazy_match = h3[e9.level].max_lazy, e9.good_match = h3[e9.level].good_length, e9.nice_match = h3[e9.level].nice_length, e9.max_chain_length = h3[e9.level].max_chain, e9.strstart = 0, e9.block_start = 0, e9.lookahead = 0, e9.insert = 0, e9.match_length = e9.prev_length = x2 - 1, e9.match_available = 0, e9.ins_h = 0;
            }(e8.state), t4;
          }
          function Y(e8, t4, r5, n7, i6, s6) {
            if (!e8)
              return _2;
            var a4 = 1;
            if (t4 === g2 && (t4 = 6), n7 < 0 ? (a4 = 0, n7 = -n7) : 15 < n7 && (a4 = 2, n7 -= 16), i6 < 1 || y2 < i6 || r5 !== v2 || n7 < 8 || 15 < n7 || t4 < 0 || 9 < t4 || s6 < 0 || b2 < s6)
              return R2(e8, _2);
            8 === n7 && (n7 = 9);
            var o7 = new H2();
            return (e8.state = o7).strm = e8, o7.wrap = a4, o7.gzhead = null, o7.w_bits = n7, o7.w_size = 1 << o7.w_bits, o7.w_mask = o7.w_size - 1, o7.hash_bits = i6 + 7, o7.hash_size = 1 << o7.hash_bits, o7.hash_mask = o7.hash_size - 1, o7.hash_shift = ~~((o7.hash_bits + x2 - 1) / x2), o7.window = new c3.Buf8(2 * o7.w_size), o7.head = new c3.Buf16(o7.hash_size), o7.prev = new c3.Buf16(o7.w_size), o7.lit_bufsize = 1 << i6 + 6, o7.pending_buf_size = 4 * o7.lit_bufsize, o7.pending_buf = new c3.Buf8(o7.pending_buf_size), o7.d_buf = 1 * o7.lit_bufsize, o7.l_buf = 3 * o7.lit_bufsize, o7.level = t4, o7.strategy = s6, o7.method = r5, K(e8);
          }
          h3 = [new M2(0, 0, 0, 0, function(e8, t4) {
            var r5 = 65535;
            for (r5 > e8.pending_buf_size - 5 && (r5 = e8.pending_buf_size - 5); ; ) {
              if (e8.lookahead <= 1) {
                if (j(e8), 0 === e8.lookahead && t4 === l5)
                  return A2;
                if (0 === e8.lookahead)
                  break;
              }
              e8.strstart += e8.lookahead, e8.lookahead = 0;
              var n7 = e8.block_start + r5;
              if ((0 === e8.strstart || e8.strstart >= n7) && (e8.lookahead = e8.strstart - n7, e8.strstart = n7, N2(e8, false), 0 === e8.strm.avail_out))
                return A2;
              if (e8.strstart - e8.block_start >= e8.w_size - z && (N2(e8, false), 0 === e8.strm.avail_out))
                return A2;
            }
            return e8.insert = 0, t4 === f2 ? (N2(e8, true), 0 === e8.strm.avail_out ? O : B) : (e8.strstart > e8.block_start && (N2(e8, false), e8.strm.avail_out), A2);
          }), new M2(4, 4, 8, 4, Z2), new M2(4, 5, 16, 8, Z2), new M2(4, 6, 32, 32, Z2), new M2(4, 4, 16, 16, W), new M2(8, 16, 32, 32, W), new M2(8, 16, 128, 128, W), new M2(8, 32, 128, 256, W), new M2(32, 128, 258, 1024, W), new M2(32, 258, 258, 4096, W)], r4.deflateInit = function(e8, t4) {
            return Y(e8, t4, v2, 15, 8, 0);
          }, r4.deflateInit2 = Y, r4.deflateReset = K, r4.deflateResetKeep = G, r4.deflateSetHeader = function(e8, t4) {
            return e8 && e8.state ? 2 !== e8.state.wrap ? _2 : (e8.state.gzhead = t4, m2) : _2;
          }, r4.deflate = function(e8, t4) {
            var r5, n7, i6, s6;
            if (!e8 || !e8.state || 5 < t4 || t4 < 0)
              return e8 ? R2(e8, _2) : _2;
            if (n7 = e8.state, !e8.output || !e8.input && 0 !== e8.avail_in || 666 === n7.status && t4 !== f2)
              return R2(e8, 0 === e8.avail_out ? -5 : _2);
            if (n7.strm = e8, r5 = n7.last_flush, n7.last_flush = t4, n7.status === C2)
              if (2 === n7.wrap)
                e8.adler = 0, U(n7, 31), U(n7, 139), U(n7, 8), n7.gzhead ? (U(n7, (n7.gzhead.text ? 1 : 0) + (n7.gzhead.hcrc ? 2 : 0) + (n7.gzhead.extra ? 4 : 0) + (n7.gzhead.name ? 8 : 0) + (n7.gzhead.comment ? 16 : 0)), U(n7, 255 & n7.gzhead.time), U(n7, n7.gzhead.time >> 8 & 255), U(n7, n7.gzhead.time >> 16 & 255), U(n7, n7.gzhead.time >> 24 & 255), U(n7, 9 === n7.level ? 2 : 2 <= n7.strategy || n7.level < 2 ? 4 : 0), U(n7, 255 & n7.gzhead.os), n7.gzhead.extra && n7.gzhead.extra.length && (U(n7, 255 & n7.gzhead.extra.length), U(n7, n7.gzhead.extra.length >> 8 & 255)), n7.gzhead.hcrc && (e8.adler = p2(e8.adler, n7.pending_buf, n7.pending, 0)), n7.gzindex = 0, n7.status = 69) : (U(n7, 0), U(n7, 0), U(n7, 0), U(n7, 0), U(n7, 0), U(n7, 9 === n7.level ? 2 : 2 <= n7.strategy || n7.level < 2 ? 4 : 0), U(n7, 3), n7.status = E2);
              else {
                var a4 = v2 + (n7.w_bits - 8 << 4) << 8;
                a4 |= (2 <= n7.strategy || n7.level < 2 ? 0 : n7.level < 6 ? 1 : 6 === n7.level ? 2 : 3) << 6, 0 !== n7.strstart && (a4 |= 32), a4 += 31 - a4 % 31, n7.status = E2, P2(n7, a4), 0 !== n7.strstart && (P2(n7, e8.adler >>> 16), P2(n7, 65535 & e8.adler)), e8.adler = 1;
              }
            if (69 === n7.status)
              if (n7.gzhead.extra) {
                for (i6 = n7.pending; n7.gzindex < (65535 & n7.gzhead.extra.length) && (n7.pending !== n7.pending_buf_size || (n7.gzhead.hcrc && n7.pending > i6 && (e8.adler = p2(e8.adler, n7.pending_buf, n7.pending - i6, i6)), F(e8), i6 = n7.pending, n7.pending !== n7.pending_buf_size)); )
                  U(n7, 255 & n7.gzhead.extra[n7.gzindex]), n7.gzindex++;
                n7.gzhead.hcrc && n7.pending > i6 && (e8.adler = p2(e8.adler, n7.pending_buf, n7.pending - i6, i6)), n7.gzindex === n7.gzhead.extra.length && (n7.gzindex = 0, n7.status = 73);
              } else
                n7.status = 73;
            if (73 === n7.status)
              if (n7.gzhead.name) {
                i6 = n7.pending;
                do {
                  if (n7.pending === n7.pending_buf_size && (n7.gzhead.hcrc && n7.pending > i6 && (e8.adler = p2(e8.adler, n7.pending_buf, n7.pending - i6, i6)), F(e8), i6 = n7.pending, n7.pending === n7.pending_buf_size)) {
                    s6 = 1;
                    break;
                  }
                  s6 = n7.gzindex < n7.gzhead.name.length ? 255 & n7.gzhead.name.charCodeAt(n7.gzindex++) : 0, U(n7, s6);
                } while (0 !== s6);
                n7.gzhead.hcrc && n7.pending > i6 && (e8.adler = p2(e8.adler, n7.pending_buf, n7.pending - i6, i6)), 0 === s6 && (n7.gzindex = 0, n7.status = 91);
              } else
                n7.status = 91;
            if (91 === n7.status)
              if (n7.gzhead.comment) {
                i6 = n7.pending;
                do {
                  if (n7.pending === n7.pending_buf_size && (n7.gzhead.hcrc && n7.pending > i6 && (e8.adler = p2(e8.adler, n7.pending_buf, n7.pending - i6, i6)), F(e8), i6 = n7.pending, n7.pending === n7.pending_buf_size)) {
                    s6 = 1;
                    break;
                  }
                  s6 = n7.gzindex < n7.gzhead.comment.length ? 255 & n7.gzhead.comment.charCodeAt(n7.gzindex++) : 0, U(n7, s6);
                } while (0 !== s6);
                n7.gzhead.hcrc && n7.pending > i6 && (e8.adler = p2(e8.adler, n7.pending_buf, n7.pending - i6, i6)), 0 === s6 && (n7.status = 103);
              } else
                n7.status = 103;
            if (103 === n7.status && (n7.gzhead.hcrc ? (n7.pending + 2 > n7.pending_buf_size && F(e8), n7.pending + 2 <= n7.pending_buf_size && (U(n7, 255 & e8.adler), U(n7, e8.adler >> 8 & 255), e8.adler = 0, n7.status = E2)) : n7.status = E2), 0 !== n7.pending) {
              if (F(e8), 0 === e8.avail_out)
                return n7.last_flush = -1, m2;
            } else if (0 === e8.avail_in && T2(t4) <= T2(r5) && t4 !== f2)
              return R2(e8, -5);
            if (666 === n7.status && 0 !== e8.avail_in)
              return R2(e8, -5);
            if (0 !== e8.avail_in || 0 !== n7.lookahead || t4 !== l5 && 666 !== n7.status) {
              var o7 = 2 === n7.strategy ? function(e9, t5) {
                for (var r6; ; ) {
                  if (0 === e9.lookahead && (j(e9), 0 === e9.lookahead)) {
                    if (t5 === l5)
                      return A2;
                    break;
                  }
                  if (e9.match_length = 0, r6 = u2._tr_tally(e9, 0, e9.window[e9.strstart]), e9.lookahead--, e9.strstart++, r6 && (N2(e9, false), 0 === e9.strm.avail_out))
                    return A2;
                }
                return e9.insert = 0, t5 === f2 ? (N2(e9, true), 0 === e9.strm.avail_out ? O : B) : e9.last_lit && (N2(e9, false), 0 === e9.strm.avail_out) ? A2 : I2;
              }(n7, t4) : 3 === n7.strategy ? function(e9, t5) {
                for (var r6, n8, i7, s7, a5 = e9.window; ; ) {
                  if (e9.lookahead <= S3) {
                    if (j(e9), e9.lookahead <= S3 && t5 === l5)
                      return A2;
                    if (0 === e9.lookahead)
                      break;
                  }
                  if (e9.match_length = 0, e9.lookahead >= x2 && 0 < e9.strstart && (n8 = a5[i7 = e9.strstart - 1]) === a5[++i7] && n8 === a5[++i7] && n8 === a5[++i7]) {
                    s7 = e9.strstart + S3;
                    do {
                    } while (n8 === a5[++i7] && n8 === a5[++i7] && n8 === a5[++i7] && n8 === a5[++i7] && n8 === a5[++i7] && n8 === a5[++i7] && n8 === a5[++i7] && n8 === a5[++i7] && i7 < s7);
                    e9.match_length = S3 - (s7 - i7), e9.match_length > e9.lookahead && (e9.match_length = e9.lookahead);
                  }
                  if (e9.match_length >= x2 ? (r6 = u2._tr_tally(e9, 1, e9.match_length - x2), e9.lookahead -= e9.match_length, e9.strstart += e9.match_length, e9.match_length = 0) : (r6 = u2._tr_tally(e9, 0, e9.window[e9.strstart]), e9.lookahead--, e9.strstart++), r6 && (N2(e9, false), 0 === e9.strm.avail_out))
                    return A2;
                }
                return e9.insert = 0, t5 === f2 ? (N2(e9, true), 0 === e9.strm.avail_out ? O : B) : e9.last_lit && (N2(e9, false), 0 === e9.strm.avail_out) ? A2 : I2;
              }(n7, t4) : h3[n7.level].func(n7, t4);
              if (o7 !== O && o7 !== B || (n7.status = 666), o7 === A2 || o7 === O)
                return 0 === e8.avail_out && (n7.last_flush = -1), m2;
              if (o7 === I2 && (1 === t4 ? u2._tr_align(n7) : 5 !== t4 && (u2._tr_stored_block(n7, 0, 0, false), 3 === t4 && (D(n7.head), 0 === n7.lookahead && (n7.strstart = 0, n7.block_start = 0, n7.insert = 0))), F(e8), 0 === e8.avail_out))
                return n7.last_flush = -1, m2;
            }
            return t4 !== f2 ? m2 : n7.wrap <= 0 ? 1 : (2 === n7.wrap ? (U(n7, 255 & e8.adler), U(n7, e8.adler >> 8 & 255), U(n7, e8.adler >> 16 & 255), U(n7, e8.adler >> 24 & 255), U(n7, 255 & e8.total_in), U(n7, e8.total_in >> 8 & 255), U(n7, e8.total_in >> 16 & 255), U(n7, e8.total_in >> 24 & 255)) : (P2(n7, e8.adler >>> 16), P2(n7, 65535 & e8.adler)), F(e8), 0 < n7.wrap && (n7.wrap = -n7.wrap), 0 !== n7.pending ? m2 : 1);
          }, r4.deflateEnd = function(e8) {
            var t4;
            return e8 && e8.state ? (t4 = e8.state.status) !== C2 && 69 !== t4 && 73 !== t4 && 91 !== t4 && 103 !== t4 && t4 !== E2 && 666 !== t4 ? R2(e8, _2) : (e8.state = null, t4 === E2 ? R2(e8, -3) : m2) : _2;
          }, r4.deflateSetDictionary = function(e8, t4) {
            var r5, n7, i6, s6, a4, o7, h4, u3, l6 = t4.length;
            if (!e8 || !e8.state)
              return _2;
            if (2 === (s6 = (r5 = e8.state).wrap) || 1 === s6 && r5.status !== C2 || r5.lookahead)
              return _2;
            for (1 === s6 && (e8.adler = d3(e8.adler, t4, l6, 0)), r5.wrap = 0, l6 >= r5.w_size && (0 === s6 && (D(r5.head), r5.strstart = 0, r5.block_start = 0, r5.insert = 0), u3 = new c3.Buf8(r5.w_size), c3.arraySet(u3, t4, l6 - r5.w_size, r5.w_size, 0), t4 = u3, l6 = r5.w_size), a4 = e8.avail_in, o7 = e8.next_in, h4 = e8.input, e8.avail_in = l6, e8.next_in = 0, e8.input = t4, j(r5); r5.lookahead >= x2; ) {
              for (n7 = r5.strstart, i6 = r5.lookahead - (x2 - 1); r5.ins_h = (r5.ins_h << r5.hash_shift ^ r5.window[n7 + x2 - 1]) & r5.hash_mask, r5.prev[n7 & r5.w_mask] = r5.head[r5.ins_h], r5.head[r5.ins_h] = n7, n7++, --i6; )
                ;
              r5.strstart = n7, r5.lookahead = x2 - 1, j(r5);
            }
            return r5.strstart += r5.lookahead, r5.block_start = r5.strstart, r5.insert = r5.lookahead, r5.lookahead = 0, r5.match_length = r5.prev_length = x2 - 1, r5.match_available = 0, e8.next_in = o7, e8.input = h4, e8.avail_in = a4, r5.wrap = s6, m2;
          }, r4.deflateInfo = "pako deflate (from Nodeca project)";
        }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(e7, t3, r4) {
          "use strict";
          t3.exports = function() {
            this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = false;
          };
        }, {}], 48: [function(e7, t3, r4) {
          "use strict";
          t3.exports = function(e8, t4) {
            var r5, n6, i5, s5, a3, o6, h3, u2, l5, f2, c3, d3, p2, m2, _2, g2, b2, v2, y2, w2, k2, x2, S3, z, C2;
            r5 = e8.state, n6 = e8.next_in, z = e8.input, i5 = n6 + (e8.avail_in - 5), s5 = e8.next_out, C2 = e8.output, a3 = s5 - (t4 - e8.avail_out), o6 = s5 + (e8.avail_out - 257), h3 = r5.dmax, u2 = r5.wsize, l5 = r5.whave, f2 = r5.wnext, c3 = r5.window, d3 = r5.hold, p2 = r5.bits, m2 = r5.lencode, _2 = r5.distcode, g2 = (1 << r5.lenbits) - 1, b2 = (1 << r5.distbits) - 1;
            e:
              do {
                p2 < 15 && (d3 += z[n6++] << p2, p2 += 8, d3 += z[n6++] << p2, p2 += 8), v2 = m2[d3 & g2];
                t:
                  for (; ; ) {
                    if (d3 >>>= y2 = v2 >>> 24, p2 -= y2, 0 === (y2 = v2 >>> 16 & 255))
                      C2[s5++] = 65535 & v2;
                    else {
                      if (!(16 & y2)) {
                        if (0 == (64 & y2)) {
                          v2 = m2[(65535 & v2) + (d3 & (1 << y2) - 1)];
                          continue t;
                        }
                        if (32 & y2) {
                          r5.mode = 12;
                          break e;
                        }
                        e8.msg = "invalid literal/length code", r5.mode = 30;
                        break e;
                      }
                      w2 = 65535 & v2, (y2 &= 15) && (p2 < y2 && (d3 += z[n6++] << p2, p2 += 8), w2 += d3 & (1 << y2) - 1, d3 >>>= y2, p2 -= y2), p2 < 15 && (d3 += z[n6++] << p2, p2 += 8, d3 += z[n6++] << p2, p2 += 8), v2 = _2[d3 & b2];
                      r:
                        for (; ; ) {
                          if (d3 >>>= y2 = v2 >>> 24, p2 -= y2, !(16 & (y2 = v2 >>> 16 & 255))) {
                            if (0 == (64 & y2)) {
                              v2 = _2[(65535 & v2) + (d3 & (1 << y2) - 1)];
                              continue r;
                            }
                            e8.msg = "invalid distance code", r5.mode = 30;
                            break e;
                          }
                          if (k2 = 65535 & v2, p2 < (y2 &= 15) && (d3 += z[n6++] << p2, (p2 += 8) < y2 && (d3 += z[n6++] << p2, p2 += 8)), h3 < (k2 += d3 & (1 << y2) - 1)) {
                            e8.msg = "invalid distance too far back", r5.mode = 30;
                            break e;
                          }
                          if (d3 >>>= y2, p2 -= y2, (y2 = s5 - a3) < k2) {
                            if (l5 < (y2 = k2 - y2) && r5.sane) {
                              e8.msg = "invalid distance too far back", r5.mode = 30;
                              break e;
                            }
                            if (S3 = c3, (x2 = 0) === f2) {
                              if (x2 += u2 - y2, y2 < w2) {
                                for (w2 -= y2; C2[s5++] = c3[x2++], --y2; )
                                  ;
                                x2 = s5 - k2, S3 = C2;
                              }
                            } else if (f2 < y2) {
                              if (x2 += u2 + f2 - y2, (y2 -= f2) < w2) {
                                for (w2 -= y2; C2[s5++] = c3[x2++], --y2; )
                                  ;
                                if (x2 = 0, f2 < w2) {
                                  for (w2 -= y2 = f2; C2[s5++] = c3[x2++], --y2; )
                                    ;
                                  x2 = s5 - k2, S3 = C2;
                                }
                              }
                            } else if (x2 += f2 - y2, y2 < w2) {
                              for (w2 -= y2; C2[s5++] = c3[x2++], --y2; )
                                ;
                              x2 = s5 - k2, S3 = C2;
                            }
                            for (; 2 < w2; )
                              C2[s5++] = S3[x2++], C2[s5++] = S3[x2++], C2[s5++] = S3[x2++], w2 -= 3;
                            w2 && (C2[s5++] = S3[x2++], 1 < w2 && (C2[s5++] = S3[x2++]));
                          } else {
                            for (x2 = s5 - k2; C2[s5++] = C2[x2++], C2[s5++] = C2[x2++], C2[s5++] = C2[x2++], 2 < (w2 -= 3); )
                              ;
                            w2 && (C2[s5++] = C2[x2++], 1 < w2 && (C2[s5++] = C2[x2++]));
                          }
                          break;
                        }
                    }
                    break;
                  }
              } while (n6 < i5 && s5 < o6);
            n6 -= w2 = p2 >> 3, d3 &= (1 << (p2 -= w2 << 3)) - 1, e8.next_in = n6, e8.next_out = s5, e8.avail_in = n6 < i5 ? i5 - n6 + 5 : 5 - (n6 - i5), e8.avail_out = s5 < o6 ? o6 - s5 + 257 : 257 - (s5 - o6), r5.hold = d3, r5.bits = p2;
          };
        }, {}], 49: [function(e7, t3, r4) {
          "use strict";
          var I2 = e7("../utils/common"), O = e7("./adler32"), B = e7("./crc32"), R2 = e7("./inffast"), T2 = e7("./inftrees"), D = 1, F = 2, N2 = 0, U = -2, P2 = 1, n6 = 852, i5 = 592;
          function L2(e8) {
            return (e8 >>> 24 & 255) + (e8 >>> 8 & 65280) + ((65280 & e8) << 8) + ((255 & e8) << 24);
          }
          function s5() {
            this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new I2.Buf16(320), this.work = new I2.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
          }
          function a3(e8) {
            var t4;
            return e8 && e8.state ? (t4 = e8.state, e8.total_in = e8.total_out = t4.total = 0, e8.msg = "", t4.wrap && (e8.adler = 1 & t4.wrap), t4.mode = P2, t4.last = 0, t4.havedict = 0, t4.dmax = 32768, t4.head = null, t4.hold = 0, t4.bits = 0, t4.lencode = t4.lendyn = new I2.Buf32(n6), t4.distcode = t4.distdyn = new I2.Buf32(i5), t4.sane = 1, t4.back = -1, N2) : U;
          }
          function o6(e8) {
            var t4;
            return e8 && e8.state ? ((t4 = e8.state).wsize = 0, t4.whave = 0, t4.wnext = 0, a3(e8)) : U;
          }
          function h3(e8, t4) {
            var r5, n7;
            return e8 && e8.state ? (n7 = e8.state, t4 < 0 ? (r5 = 0, t4 = -t4) : (r5 = 1 + (t4 >> 4), t4 < 48 && (t4 &= 15)), t4 && (t4 < 8 || 15 < t4) ? U : (null !== n7.window && n7.wbits !== t4 && (n7.window = null), n7.wrap = r5, n7.wbits = t4, o6(e8))) : U;
          }
          function u2(e8, t4) {
            var r5, n7;
            return e8 ? (n7 = new s5(), (e8.state = n7).window = null, (r5 = h3(e8, t4)) !== N2 && (e8.state = null), r5) : U;
          }
          var l5, f2, c3 = true;
          function j(e8) {
            if (c3) {
              var t4;
              for (l5 = new I2.Buf32(512), f2 = new I2.Buf32(32), t4 = 0; t4 < 144; )
                e8.lens[t4++] = 8;
              for (; t4 < 256; )
                e8.lens[t4++] = 9;
              for (; t4 < 280; )
                e8.lens[t4++] = 7;
              for (; t4 < 288; )
                e8.lens[t4++] = 8;
              for (T2(D, e8.lens, 0, 288, l5, 0, e8.work, { bits: 9 }), t4 = 0; t4 < 32; )
                e8.lens[t4++] = 5;
              T2(F, e8.lens, 0, 32, f2, 0, e8.work, { bits: 5 }), c3 = false;
            }
            e8.lencode = l5, e8.lenbits = 9, e8.distcode = f2, e8.distbits = 5;
          }
          function Z2(e8, t4, r5, n7) {
            var i6, s6 = e8.state;
            return null === s6.window && (s6.wsize = 1 << s6.wbits, s6.wnext = 0, s6.whave = 0, s6.window = new I2.Buf8(s6.wsize)), n7 >= s6.wsize ? (I2.arraySet(s6.window, t4, r5 - s6.wsize, s6.wsize, 0), s6.wnext = 0, s6.whave = s6.wsize) : (n7 < (i6 = s6.wsize - s6.wnext) && (i6 = n7), I2.arraySet(s6.window, t4, r5 - n7, i6, s6.wnext), (n7 -= i6) ? (I2.arraySet(s6.window, t4, r5 - n7, n7, 0), s6.wnext = n7, s6.whave = s6.wsize) : (s6.wnext += i6, s6.wnext === s6.wsize && (s6.wnext = 0), s6.whave < s6.wsize && (s6.whave += i6))), 0;
          }
          r4.inflateReset = o6, r4.inflateReset2 = h3, r4.inflateResetKeep = a3, r4.inflateInit = function(e8) {
            return u2(e8, 15);
          }, r4.inflateInit2 = u2, r4.inflate = function(e8, t4) {
            var r5, n7, i6, s6, a4, o7, h4, u3, l6, f3, c4, d3, p2, m2, _2, g2, b2, v2, y2, w2, k2, x2, S3, z, C2 = 0, E2 = new I2.Buf8(4), A2 = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
            if (!e8 || !e8.state || !e8.output || !e8.input && 0 !== e8.avail_in)
              return U;
            12 === (r5 = e8.state).mode && (r5.mode = 13), a4 = e8.next_out, i6 = e8.output, h4 = e8.avail_out, s6 = e8.next_in, n7 = e8.input, o7 = e8.avail_in, u3 = r5.hold, l6 = r5.bits, f3 = o7, c4 = h4, x2 = N2;
            e:
              for (; ; )
                switch (r5.mode) {
                  case P2:
                    if (0 === r5.wrap) {
                      r5.mode = 13;
                      break;
                    }
                    for (; l6 < 16; ) {
                      if (0 === o7)
                        break e;
                      o7--, u3 += n7[s6++] << l6, l6 += 8;
                    }
                    if (2 & r5.wrap && 35615 === u3) {
                      E2[r5.check = 0] = 255 & u3, E2[1] = u3 >>> 8 & 255, r5.check = B(r5.check, E2, 2, 0), l6 = u3 = 0, r5.mode = 2;
                      break;
                    }
                    if (r5.flags = 0, r5.head && (r5.head.done = false), !(1 & r5.wrap) || (((255 & u3) << 8) + (u3 >> 8)) % 31) {
                      e8.msg = "incorrect header check", r5.mode = 30;
                      break;
                    }
                    if (8 != (15 & u3)) {
                      e8.msg = "unknown compression method", r5.mode = 30;
                      break;
                    }
                    if (l6 -= 4, k2 = 8 + (15 & (u3 >>>= 4)), 0 === r5.wbits)
                      r5.wbits = k2;
                    else if (k2 > r5.wbits) {
                      e8.msg = "invalid window size", r5.mode = 30;
                      break;
                    }
                    r5.dmax = 1 << k2, e8.adler = r5.check = 1, r5.mode = 512 & u3 ? 10 : 12, l6 = u3 = 0;
                    break;
                  case 2:
                    for (; l6 < 16; ) {
                      if (0 === o7)
                        break e;
                      o7--, u3 += n7[s6++] << l6, l6 += 8;
                    }
                    if (r5.flags = u3, 8 != (255 & r5.flags)) {
                      e8.msg = "unknown compression method", r5.mode = 30;
                      break;
                    }
                    if (57344 & r5.flags) {
                      e8.msg = "unknown header flags set", r5.mode = 30;
                      break;
                    }
                    r5.head && (r5.head.text = u3 >> 8 & 1), 512 & r5.flags && (E2[0] = 255 & u3, E2[1] = u3 >>> 8 & 255, r5.check = B(r5.check, E2, 2, 0)), l6 = u3 = 0, r5.mode = 3;
                  case 3:
                    for (; l6 < 32; ) {
                      if (0 === o7)
                        break e;
                      o7--, u3 += n7[s6++] << l6, l6 += 8;
                    }
                    r5.head && (r5.head.time = u3), 512 & r5.flags && (E2[0] = 255 & u3, E2[1] = u3 >>> 8 & 255, E2[2] = u3 >>> 16 & 255, E2[3] = u3 >>> 24 & 255, r5.check = B(r5.check, E2, 4, 0)), l6 = u3 = 0, r5.mode = 4;
                  case 4:
                    for (; l6 < 16; ) {
                      if (0 === o7)
                        break e;
                      o7--, u3 += n7[s6++] << l6, l6 += 8;
                    }
                    r5.head && (r5.head.xflags = 255 & u3, r5.head.os = u3 >> 8), 512 & r5.flags && (E2[0] = 255 & u3, E2[1] = u3 >>> 8 & 255, r5.check = B(r5.check, E2, 2, 0)), l6 = u3 = 0, r5.mode = 5;
                  case 5:
                    if (1024 & r5.flags) {
                      for (; l6 < 16; ) {
                        if (0 === o7)
                          break e;
                        o7--, u3 += n7[s6++] << l6, l6 += 8;
                      }
                      r5.length = u3, r5.head && (r5.head.extra_len = u3), 512 & r5.flags && (E2[0] = 255 & u3, E2[1] = u3 >>> 8 & 255, r5.check = B(r5.check, E2, 2, 0)), l6 = u3 = 0;
                    } else
                      r5.head && (r5.head.extra = null);
                    r5.mode = 6;
                  case 6:
                    if (1024 & r5.flags && (o7 < (d3 = r5.length) && (d3 = o7), d3 && (r5.head && (k2 = r5.head.extra_len - r5.length, r5.head.extra || (r5.head.extra = new Array(r5.head.extra_len)), I2.arraySet(r5.head.extra, n7, s6, d3, k2)), 512 & r5.flags && (r5.check = B(r5.check, n7, d3, s6)), o7 -= d3, s6 += d3, r5.length -= d3), r5.length))
                      break e;
                    r5.length = 0, r5.mode = 7;
                  case 7:
                    if (2048 & r5.flags) {
                      if (0 === o7)
                        break e;
                      for (d3 = 0; k2 = n7[s6 + d3++], r5.head && k2 && r5.length < 65536 && (r5.head.name += String.fromCharCode(k2)), k2 && d3 < o7; )
                        ;
                      if (512 & r5.flags && (r5.check = B(r5.check, n7, d3, s6)), o7 -= d3, s6 += d3, k2)
                        break e;
                    } else
                      r5.head && (r5.head.name = null);
                    r5.length = 0, r5.mode = 8;
                  case 8:
                    if (4096 & r5.flags) {
                      if (0 === o7)
                        break e;
                      for (d3 = 0; k2 = n7[s6 + d3++], r5.head && k2 && r5.length < 65536 && (r5.head.comment += String.fromCharCode(k2)), k2 && d3 < o7; )
                        ;
                      if (512 & r5.flags && (r5.check = B(r5.check, n7, d3, s6)), o7 -= d3, s6 += d3, k2)
                        break e;
                    } else
                      r5.head && (r5.head.comment = null);
                    r5.mode = 9;
                  case 9:
                    if (512 & r5.flags) {
                      for (; l6 < 16; ) {
                        if (0 === o7)
                          break e;
                        o7--, u3 += n7[s6++] << l6, l6 += 8;
                      }
                      if (u3 !== (65535 & r5.check)) {
                        e8.msg = "header crc mismatch", r5.mode = 30;
                        break;
                      }
                      l6 = u3 = 0;
                    }
                    r5.head && (r5.head.hcrc = r5.flags >> 9 & 1, r5.head.done = true), e8.adler = r5.check = 0, r5.mode = 12;
                    break;
                  case 10:
                    for (; l6 < 32; ) {
                      if (0 === o7)
                        break e;
                      o7--, u3 += n7[s6++] << l6, l6 += 8;
                    }
                    e8.adler = r5.check = L2(u3), l6 = u3 = 0, r5.mode = 11;
                  case 11:
                    if (0 === r5.havedict)
                      return e8.next_out = a4, e8.avail_out = h4, e8.next_in = s6, e8.avail_in = o7, r5.hold = u3, r5.bits = l6, 2;
                    e8.adler = r5.check = 1, r5.mode = 12;
                  case 12:
                    if (5 === t4 || 6 === t4)
                      break e;
                  case 13:
                    if (r5.last) {
                      u3 >>>= 7 & l6, l6 -= 7 & l6, r5.mode = 27;
                      break;
                    }
                    for (; l6 < 3; ) {
                      if (0 === o7)
                        break e;
                      o7--, u3 += n7[s6++] << l6, l6 += 8;
                    }
                    switch (r5.last = 1 & u3, l6 -= 1, 3 & (u3 >>>= 1)) {
                      case 0:
                        r5.mode = 14;
                        break;
                      case 1:
                        if (j(r5), r5.mode = 20, 6 !== t4)
                          break;
                        u3 >>>= 2, l6 -= 2;
                        break e;
                      case 2:
                        r5.mode = 17;
                        break;
                      case 3:
                        e8.msg = "invalid block type", r5.mode = 30;
                    }
                    u3 >>>= 2, l6 -= 2;
                    break;
                  case 14:
                    for (u3 >>>= 7 & l6, l6 -= 7 & l6; l6 < 32; ) {
                      if (0 === o7)
                        break e;
                      o7--, u3 += n7[s6++] << l6, l6 += 8;
                    }
                    if ((65535 & u3) != (u3 >>> 16 ^ 65535)) {
                      e8.msg = "invalid stored block lengths", r5.mode = 30;
                      break;
                    }
                    if (r5.length = 65535 & u3, l6 = u3 = 0, r5.mode = 15, 6 === t4)
                      break e;
                  case 15:
                    r5.mode = 16;
                  case 16:
                    if (d3 = r5.length) {
                      if (o7 < d3 && (d3 = o7), h4 < d3 && (d3 = h4), 0 === d3)
                        break e;
                      I2.arraySet(i6, n7, s6, d3, a4), o7 -= d3, s6 += d3, h4 -= d3, a4 += d3, r5.length -= d3;
                      break;
                    }
                    r5.mode = 12;
                    break;
                  case 17:
                    for (; l6 < 14; ) {
                      if (0 === o7)
                        break e;
                      o7--, u3 += n7[s6++] << l6, l6 += 8;
                    }
                    if (r5.nlen = 257 + (31 & u3), u3 >>>= 5, l6 -= 5, r5.ndist = 1 + (31 & u3), u3 >>>= 5, l6 -= 5, r5.ncode = 4 + (15 & u3), u3 >>>= 4, l6 -= 4, 286 < r5.nlen || 30 < r5.ndist) {
                      e8.msg = "too many length or distance symbols", r5.mode = 30;
                      break;
                    }
                    r5.have = 0, r5.mode = 18;
                  case 18:
                    for (; r5.have < r5.ncode; ) {
                      for (; l6 < 3; ) {
                        if (0 === o7)
                          break e;
                        o7--, u3 += n7[s6++] << l6, l6 += 8;
                      }
                      r5.lens[A2[r5.have++]] = 7 & u3, u3 >>>= 3, l6 -= 3;
                    }
                    for (; r5.have < 19; )
                      r5.lens[A2[r5.have++]] = 0;
                    if (r5.lencode = r5.lendyn, r5.lenbits = 7, S3 = { bits: r5.lenbits }, x2 = T2(0, r5.lens, 0, 19, r5.lencode, 0, r5.work, S3), r5.lenbits = S3.bits, x2) {
                      e8.msg = "invalid code lengths set", r5.mode = 30;
                      break;
                    }
                    r5.have = 0, r5.mode = 19;
                  case 19:
                    for (; r5.have < r5.nlen + r5.ndist; ) {
                      for (; g2 = (C2 = r5.lencode[u3 & (1 << r5.lenbits) - 1]) >>> 16 & 255, b2 = 65535 & C2, !((_2 = C2 >>> 24) <= l6); ) {
                        if (0 === o7)
                          break e;
                        o7--, u3 += n7[s6++] << l6, l6 += 8;
                      }
                      if (b2 < 16)
                        u3 >>>= _2, l6 -= _2, r5.lens[r5.have++] = b2;
                      else {
                        if (16 === b2) {
                          for (z = _2 + 2; l6 < z; ) {
                            if (0 === o7)
                              break e;
                            o7--, u3 += n7[s6++] << l6, l6 += 8;
                          }
                          if (u3 >>>= _2, l6 -= _2, 0 === r5.have) {
                            e8.msg = "invalid bit length repeat", r5.mode = 30;
                            break;
                          }
                          k2 = r5.lens[r5.have - 1], d3 = 3 + (3 & u3), u3 >>>= 2, l6 -= 2;
                        } else if (17 === b2) {
                          for (z = _2 + 3; l6 < z; ) {
                            if (0 === o7)
                              break e;
                            o7--, u3 += n7[s6++] << l6, l6 += 8;
                          }
                          l6 -= _2, k2 = 0, d3 = 3 + (7 & (u3 >>>= _2)), u3 >>>= 3, l6 -= 3;
                        } else {
                          for (z = _2 + 7; l6 < z; ) {
                            if (0 === o7)
                              break e;
                            o7--, u3 += n7[s6++] << l6, l6 += 8;
                          }
                          l6 -= _2, k2 = 0, d3 = 11 + (127 & (u3 >>>= _2)), u3 >>>= 7, l6 -= 7;
                        }
                        if (r5.have + d3 > r5.nlen + r5.ndist) {
                          e8.msg = "invalid bit length repeat", r5.mode = 30;
                          break;
                        }
                        for (; d3--; )
                          r5.lens[r5.have++] = k2;
                      }
                    }
                    if (30 === r5.mode)
                      break;
                    if (0 === r5.lens[256]) {
                      e8.msg = "invalid code -- missing end-of-block", r5.mode = 30;
                      break;
                    }
                    if (r5.lenbits = 9, S3 = { bits: r5.lenbits }, x2 = T2(D, r5.lens, 0, r5.nlen, r5.lencode, 0, r5.work, S3), r5.lenbits = S3.bits, x2) {
                      e8.msg = "invalid literal/lengths set", r5.mode = 30;
                      break;
                    }
                    if (r5.distbits = 6, r5.distcode = r5.distdyn, S3 = { bits: r5.distbits }, x2 = T2(F, r5.lens, r5.nlen, r5.ndist, r5.distcode, 0, r5.work, S3), r5.distbits = S3.bits, x2) {
                      e8.msg = "invalid distances set", r5.mode = 30;
                      break;
                    }
                    if (r5.mode = 20, 6 === t4)
                      break e;
                  case 20:
                    r5.mode = 21;
                  case 21:
                    if (6 <= o7 && 258 <= h4) {
                      e8.next_out = a4, e8.avail_out = h4, e8.next_in = s6, e8.avail_in = o7, r5.hold = u3, r5.bits = l6, R2(e8, c4), a4 = e8.next_out, i6 = e8.output, h4 = e8.avail_out, s6 = e8.next_in, n7 = e8.input, o7 = e8.avail_in, u3 = r5.hold, l6 = r5.bits, 12 === r5.mode && (r5.back = -1);
                      break;
                    }
                    for (r5.back = 0; g2 = (C2 = r5.lencode[u3 & (1 << r5.lenbits) - 1]) >>> 16 & 255, b2 = 65535 & C2, !((_2 = C2 >>> 24) <= l6); ) {
                      if (0 === o7)
                        break e;
                      o7--, u3 += n7[s6++] << l6, l6 += 8;
                    }
                    if (g2 && 0 == (240 & g2)) {
                      for (v2 = _2, y2 = g2, w2 = b2; g2 = (C2 = r5.lencode[w2 + ((u3 & (1 << v2 + y2) - 1) >> v2)]) >>> 16 & 255, b2 = 65535 & C2, !(v2 + (_2 = C2 >>> 24) <= l6); ) {
                        if (0 === o7)
                          break e;
                        o7--, u3 += n7[s6++] << l6, l6 += 8;
                      }
                      u3 >>>= v2, l6 -= v2, r5.back += v2;
                    }
                    if (u3 >>>= _2, l6 -= _2, r5.back += _2, r5.length = b2, 0 === g2) {
                      r5.mode = 26;
                      break;
                    }
                    if (32 & g2) {
                      r5.back = -1, r5.mode = 12;
                      break;
                    }
                    if (64 & g2) {
                      e8.msg = "invalid literal/length code", r5.mode = 30;
                      break;
                    }
                    r5.extra = 15 & g2, r5.mode = 22;
                  case 22:
                    if (r5.extra) {
                      for (z = r5.extra; l6 < z; ) {
                        if (0 === o7)
                          break e;
                        o7--, u3 += n7[s6++] << l6, l6 += 8;
                      }
                      r5.length += u3 & (1 << r5.extra) - 1, u3 >>>= r5.extra, l6 -= r5.extra, r5.back += r5.extra;
                    }
                    r5.was = r5.length, r5.mode = 23;
                  case 23:
                    for (; g2 = (C2 = r5.distcode[u3 & (1 << r5.distbits) - 1]) >>> 16 & 255, b2 = 65535 & C2, !((_2 = C2 >>> 24) <= l6); ) {
                      if (0 === o7)
                        break e;
                      o7--, u3 += n7[s6++] << l6, l6 += 8;
                    }
                    if (0 == (240 & g2)) {
                      for (v2 = _2, y2 = g2, w2 = b2; g2 = (C2 = r5.distcode[w2 + ((u3 & (1 << v2 + y2) - 1) >> v2)]) >>> 16 & 255, b2 = 65535 & C2, !(v2 + (_2 = C2 >>> 24) <= l6); ) {
                        if (0 === o7)
                          break e;
                        o7--, u3 += n7[s6++] << l6, l6 += 8;
                      }
                      u3 >>>= v2, l6 -= v2, r5.back += v2;
                    }
                    if (u3 >>>= _2, l6 -= _2, r5.back += _2, 64 & g2) {
                      e8.msg = "invalid distance code", r5.mode = 30;
                      break;
                    }
                    r5.offset = b2, r5.extra = 15 & g2, r5.mode = 24;
                  case 24:
                    if (r5.extra) {
                      for (z = r5.extra; l6 < z; ) {
                        if (0 === o7)
                          break e;
                        o7--, u3 += n7[s6++] << l6, l6 += 8;
                      }
                      r5.offset += u3 & (1 << r5.extra) - 1, u3 >>>= r5.extra, l6 -= r5.extra, r5.back += r5.extra;
                    }
                    if (r5.offset > r5.dmax) {
                      e8.msg = "invalid distance too far back", r5.mode = 30;
                      break;
                    }
                    r5.mode = 25;
                  case 25:
                    if (0 === h4)
                      break e;
                    if (d3 = c4 - h4, r5.offset > d3) {
                      if ((d3 = r5.offset - d3) > r5.whave && r5.sane) {
                        e8.msg = "invalid distance too far back", r5.mode = 30;
                        break;
                      }
                      p2 = d3 > r5.wnext ? (d3 -= r5.wnext, r5.wsize - d3) : r5.wnext - d3, d3 > r5.length && (d3 = r5.length), m2 = r5.window;
                    } else
                      m2 = i6, p2 = a4 - r5.offset, d3 = r5.length;
                    for (h4 < d3 && (d3 = h4), h4 -= d3, r5.length -= d3; i6[a4++] = m2[p2++], --d3; )
                      ;
                    0 === r5.length && (r5.mode = 21);
                    break;
                  case 26:
                    if (0 === h4)
                      break e;
                    i6[a4++] = r5.length, h4--, r5.mode = 21;
                    break;
                  case 27:
                    if (r5.wrap) {
                      for (; l6 < 32; ) {
                        if (0 === o7)
                          break e;
                        o7--, u3 |= n7[s6++] << l6, l6 += 8;
                      }
                      if (c4 -= h4, e8.total_out += c4, r5.total += c4, c4 && (e8.adler = r5.check = r5.flags ? B(r5.check, i6, c4, a4 - c4) : O(r5.check, i6, c4, a4 - c4)), c4 = h4, (r5.flags ? u3 : L2(u3)) !== r5.check) {
                        e8.msg = "incorrect data check", r5.mode = 30;
                        break;
                      }
                      l6 = u3 = 0;
                    }
                    r5.mode = 28;
                  case 28:
                    if (r5.wrap && r5.flags) {
                      for (; l6 < 32; ) {
                        if (0 === o7)
                          break e;
                        o7--, u3 += n7[s6++] << l6, l6 += 8;
                      }
                      if (u3 !== (4294967295 & r5.total)) {
                        e8.msg = "incorrect length check", r5.mode = 30;
                        break;
                      }
                      l6 = u3 = 0;
                    }
                    r5.mode = 29;
                  case 29:
                    x2 = 1;
                    break e;
                  case 30:
                    x2 = -3;
                    break e;
                  case 31:
                    return -4;
                  case 32:
                  default:
                    return U;
                }
            return e8.next_out = a4, e8.avail_out = h4, e8.next_in = s6, e8.avail_in = o7, r5.hold = u3, r5.bits = l6, (r5.wsize || c4 !== e8.avail_out && r5.mode < 30 && (r5.mode < 27 || 4 !== t4)) && Z2(e8, e8.output, e8.next_out, c4 - e8.avail_out) ? (r5.mode = 31, -4) : (f3 -= e8.avail_in, c4 -= e8.avail_out, e8.total_in += f3, e8.total_out += c4, r5.total += c4, r5.wrap && c4 && (e8.adler = r5.check = r5.flags ? B(r5.check, i6, c4, e8.next_out - c4) : O(r5.check, i6, c4, e8.next_out - c4)), e8.data_type = r5.bits + (r5.last ? 64 : 0) + (12 === r5.mode ? 128 : 0) + (20 === r5.mode || 15 === r5.mode ? 256 : 0), (0 == f3 && 0 === c4 || 4 === t4) && x2 === N2 && (x2 = -5), x2);
          }, r4.inflateEnd = function(e8) {
            if (!e8 || !e8.state)
              return U;
            var t4 = e8.state;
            return t4.window && (t4.window = null), e8.state = null, N2;
          }, r4.inflateGetHeader = function(e8, t4) {
            var r5;
            return e8 && e8.state ? 0 == (2 & (r5 = e8.state).wrap) ? U : ((r5.head = t4).done = false, N2) : U;
          }, r4.inflateSetDictionary = function(e8, t4) {
            var r5, n7 = t4.length;
            return e8 && e8.state ? 0 !== (r5 = e8.state).wrap && 11 !== r5.mode ? U : 11 === r5.mode && O(1, t4, n7, 0) !== r5.check ? -3 : Z2(e8, t4, n7, n7) ? (r5.mode = 31, -4) : (r5.havedict = 1, N2) : U;
          }, r4.inflateInfo = "pako inflate (from Nodeca project)";
        }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(e7, t3, r4) {
          "use strict";
          var D = e7("../utils/common"), F = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], N2 = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], U = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], P2 = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
          t3.exports = function(e8, t4, r5, n6, i5, s5, a3, o6) {
            var h3, u2, l5, f2, c3, d3, p2, m2, _2, g2 = o6.bits, b2 = 0, v2 = 0, y2 = 0, w2 = 0, k2 = 0, x2 = 0, S3 = 0, z = 0, C2 = 0, E2 = 0, A2 = null, I2 = 0, O = new D.Buf16(16), B = new D.Buf16(16), R2 = null, T2 = 0;
            for (b2 = 0; b2 <= 15; b2++)
              O[b2] = 0;
            for (v2 = 0; v2 < n6; v2++)
              O[t4[r5 + v2]]++;
            for (k2 = g2, w2 = 15; 1 <= w2 && 0 === O[w2]; w2--)
              ;
            if (w2 < k2 && (k2 = w2), 0 === w2)
              return i5[s5++] = 20971520, i5[s5++] = 20971520, o6.bits = 1, 0;
            for (y2 = 1; y2 < w2 && 0 === O[y2]; y2++)
              ;
            for (k2 < y2 && (k2 = y2), b2 = z = 1; b2 <= 15; b2++)
              if (z <<= 1, (z -= O[b2]) < 0)
                return -1;
            if (0 < z && (0 === e8 || 1 !== w2))
              return -1;
            for (B[1] = 0, b2 = 1; b2 < 15; b2++)
              B[b2 + 1] = B[b2] + O[b2];
            for (v2 = 0; v2 < n6; v2++)
              0 !== t4[r5 + v2] && (a3[B[t4[r5 + v2]]++] = v2);
            if (d3 = 0 === e8 ? (A2 = R2 = a3, 19) : 1 === e8 ? (A2 = F, I2 -= 257, R2 = N2, T2 -= 257, 256) : (A2 = U, R2 = P2, -1), b2 = y2, c3 = s5, S3 = v2 = E2 = 0, l5 = -1, f2 = (C2 = 1 << (x2 = k2)) - 1, 1 === e8 && 852 < C2 || 2 === e8 && 592 < C2)
              return 1;
            for (; ; ) {
              for (p2 = b2 - S3, _2 = a3[v2] < d3 ? (m2 = 0, a3[v2]) : a3[v2] > d3 ? (m2 = R2[T2 + a3[v2]], A2[I2 + a3[v2]]) : (m2 = 96, 0), h3 = 1 << b2 - S3, y2 = u2 = 1 << x2; i5[c3 + (E2 >> S3) + (u2 -= h3)] = p2 << 24 | m2 << 16 | _2 | 0, 0 !== u2; )
                ;
              for (h3 = 1 << b2 - 1; E2 & h3; )
                h3 >>= 1;
              if (0 !== h3 ? (E2 &= h3 - 1, E2 += h3) : E2 = 0, v2++, 0 == --O[b2]) {
                if (b2 === w2)
                  break;
                b2 = t4[r5 + a3[v2]];
              }
              if (k2 < b2 && (E2 & f2) !== l5) {
                for (0 === S3 && (S3 = k2), c3 += y2, z = 1 << (x2 = b2 - S3); x2 + S3 < w2 && !((z -= O[x2 + S3]) <= 0); )
                  x2++, z <<= 1;
                if (C2 += 1 << x2, 1 === e8 && 852 < C2 || 2 === e8 && 592 < C2)
                  return 1;
                i5[l5 = E2 & f2] = k2 << 24 | x2 << 16 | c3 - s5 | 0;
              }
            }
            return 0 !== E2 && (i5[c3 + E2] = b2 - S3 << 24 | 64 << 16 | 0), o6.bits = k2, 0;
          };
        }, { "../utils/common": 41 }], 51: [function(e7, t3, r4) {
          "use strict";
          t3.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
        }, {}], 52: [function(e7, t3, r4) {
          "use strict";
          var i5 = e7("../utils/common"), o6 = 0, h3 = 1;
          function n6(e8) {
            for (var t4 = e8.length; 0 <= --t4; )
              e8[t4] = 0;
          }
          var s5 = 0, a3 = 29, u2 = 256, l5 = u2 + 1 + a3, f2 = 30, c3 = 19, _2 = 2 * l5 + 1, g2 = 15, d3 = 16, p2 = 7, m2 = 256, b2 = 16, v2 = 17, y2 = 18, w2 = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], k2 = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], x2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], S3 = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], z = new Array(2 * (l5 + 2));
          n6(z);
          var C2 = new Array(2 * f2);
          n6(C2);
          var E2 = new Array(512);
          n6(E2);
          var A2 = new Array(256);
          n6(A2);
          var I2 = new Array(a3);
          n6(I2);
          var O, B, R2, T2 = new Array(f2);
          function D(e8, t4, r5, n7, i6) {
            this.static_tree = e8, this.extra_bits = t4, this.extra_base = r5, this.elems = n7, this.max_length = i6, this.has_stree = e8 && e8.length;
          }
          function F(e8, t4) {
            this.dyn_tree = e8, this.max_code = 0, this.stat_desc = t4;
          }
          function N2(e8) {
            return e8 < 256 ? E2[e8] : E2[256 + (e8 >>> 7)];
          }
          function U(e8, t4) {
            e8.pending_buf[e8.pending++] = 255 & t4, e8.pending_buf[e8.pending++] = t4 >>> 8 & 255;
          }
          function P2(e8, t4, r5) {
            e8.bi_valid > d3 - r5 ? (e8.bi_buf |= t4 << e8.bi_valid & 65535, U(e8, e8.bi_buf), e8.bi_buf = t4 >> d3 - e8.bi_valid, e8.bi_valid += r5 - d3) : (e8.bi_buf |= t4 << e8.bi_valid & 65535, e8.bi_valid += r5);
          }
          function L2(e8, t4, r5) {
            P2(e8, r5[2 * t4], r5[2 * t4 + 1]);
          }
          function j(e8, t4) {
            for (var r5 = 0; r5 |= 1 & e8, e8 >>>= 1, r5 <<= 1, 0 < --t4; )
              ;
            return r5 >>> 1;
          }
          function Z2(e8, t4, r5) {
            var n7, i6, s6 = new Array(g2 + 1), a4 = 0;
            for (n7 = 1; n7 <= g2; n7++)
              s6[n7] = a4 = a4 + r5[n7 - 1] << 1;
            for (i6 = 0; i6 <= t4; i6++) {
              var o7 = e8[2 * i6 + 1];
              0 !== o7 && (e8[2 * i6] = j(s6[o7]++, o7));
            }
          }
          function W(e8) {
            var t4;
            for (t4 = 0; t4 < l5; t4++)
              e8.dyn_ltree[2 * t4] = 0;
            for (t4 = 0; t4 < f2; t4++)
              e8.dyn_dtree[2 * t4] = 0;
            for (t4 = 0; t4 < c3; t4++)
              e8.bl_tree[2 * t4] = 0;
            e8.dyn_ltree[2 * m2] = 1, e8.opt_len = e8.static_len = 0, e8.last_lit = e8.matches = 0;
          }
          function M2(e8) {
            8 < e8.bi_valid ? U(e8, e8.bi_buf) : 0 < e8.bi_valid && (e8.pending_buf[e8.pending++] = e8.bi_buf), e8.bi_buf = 0, e8.bi_valid = 0;
          }
          function H2(e8, t4, r5, n7) {
            var i6 = 2 * t4, s6 = 2 * r5;
            return e8[i6] < e8[s6] || e8[i6] === e8[s6] && n7[t4] <= n7[r5];
          }
          function G(e8, t4, r5) {
            for (var n7 = e8.heap[r5], i6 = r5 << 1; i6 <= e8.heap_len && (i6 < e8.heap_len && H2(t4, e8.heap[i6 + 1], e8.heap[i6], e8.depth) && i6++, !H2(t4, n7, e8.heap[i6], e8.depth)); )
              e8.heap[r5] = e8.heap[i6], r5 = i6, i6 <<= 1;
            e8.heap[r5] = n7;
          }
          function K(e8, t4, r5) {
            var n7, i6, s6, a4, o7 = 0;
            if (0 !== e8.last_lit)
              for (; n7 = e8.pending_buf[e8.d_buf + 2 * o7] << 8 | e8.pending_buf[e8.d_buf + 2 * o7 + 1], i6 = e8.pending_buf[e8.l_buf + o7], o7++, 0 === n7 ? L2(e8, i6, t4) : (L2(e8, (s6 = A2[i6]) + u2 + 1, t4), 0 !== (a4 = w2[s6]) && P2(e8, i6 -= I2[s6], a4), L2(e8, s6 = N2(--n7), r5), 0 !== (a4 = k2[s6]) && P2(e8, n7 -= T2[s6], a4)), o7 < e8.last_lit; )
                ;
            L2(e8, m2, t4);
          }
          function Y(e8, t4) {
            var r5, n7, i6, s6 = t4.dyn_tree, a4 = t4.stat_desc.static_tree, o7 = t4.stat_desc.has_stree, h4 = t4.stat_desc.elems, u3 = -1;
            for (e8.heap_len = 0, e8.heap_max = _2, r5 = 0; r5 < h4; r5++)
              0 !== s6[2 * r5] ? (e8.heap[++e8.heap_len] = u3 = r5, e8.depth[r5] = 0) : s6[2 * r5 + 1] = 0;
            for (; e8.heap_len < 2; )
              s6[2 * (i6 = e8.heap[++e8.heap_len] = u3 < 2 ? ++u3 : 0)] = 1, e8.depth[i6] = 0, e8.opt_len--, o7 && (e8.static_len -= a4[2 * i6 + 1]);
            for (t4.max_code = u3, r5 = e8.heap_len >> 1; 1 <= r5; r5--)
              G(e8, s6, r5);
            for (i6 = h4; r5 = e8.heap[1], e8.heap[1] = e8.heap[e8.heap_len--], G(e8, s6, 1), n7 = e8.heap[1], e8.heap[--e8.heap_max] = r5, e8.heap[--e8.heap_max] = n7, s6[2 * i6] = s6[2 * r5] + s6[2 * n7], e8.depth[i6] = (e8.depth[r5] >= e8.depth[n7] ? e8.depth[r5] : e8.depth[n7]) + 1, s6[2 * r5 + 1] = s6[2 * n7 + 1] = i6, e8.heap[1] = i6++, G(e8, s6, 1), 2 <= e8.heap_len; )
              ;
            e8.heap[--e8.heap_max] = e8.heap[1], function(e9, t5) {
              var r6, n8, i7, s7, a5, o8, h5 = t5.dyn_tree, u4 = t5.max_code, l6 = t5.stat_desc.static_tree, f3 = t5.stat_desc.has_stree, c4 = t5.stat_desc.extra_bits, d4 = t5.stat_desc.extra_base, p3 = t5.stat_desc.max_length, m3 = 0;
              for (s7 = 0; s7 <= g2; s7++)
                e9.bl_count[s7] = 0;
              for (h5[2 * e9.heap[e9.heap_max] + 1] = 0, r6 = e9.heap_max + 1; r6 < _2; r6++)
                p3 < (s7 = h5[2 * h5[2 * (n8 = e9.heap[r6]) + 1] + 1] + 1) && (s7 = p3, m3++), h5[2 * n8 + 1] = s7, u4 < n8 || (e9.bl_count[s7]++, a5 = 0, d4 <= n8 && (a5 = c4[n8 - d4]), o8 = h5[2 * n8], e9.opt_len += o8 * (s7 + a5), f3 && (e9.static_len += o8 * (l6[2 * n8 + 1] + a5)));
              if (0 !== m3) {
                do {
                  for (s7 = p3 - 1; 0 === e9.bl_count[s7]; )
                    s7--;
                  e9.bl_count[s7]--, e9.bl_count[s7 + 1] += 2, e9.bl_count[p3]--, m3 -= 2;
                } while (0 < m3);
                for (s7 = p3; 0 !== s7; s7--)
                  for (n8 = e9.bl_count[s7]; 0 !== n8; )
                    u4 < (i7 = e9.heap[--r6]) || (h5[2 * i7 + 1] !== s7 && (e9.opt_len += (s7 - h5[2 * i7 + 1]) * h5[2 * i7], h5[2 * i7 + 1] = s7), n8--);
              }
            }(e8, t4), Z2(s6, u3, e8.bl_count);
          }
          function X(e8, t4, r5) {
            var n7, i6, s6 = -1, a4 = t4[1], o7 = 0, h4 = 7, u3 = 4;
            for (0 === a4 && (h4 = 138, u3 = 3), t4[2 * (r5 + 1) + 1] = 65535, n7 = 0; n7 <= r5; n7++)
              i6 = a4, a4 = t4[2 * (n7 + 1) + 1], ++o7 < h4 && i6 === a4 || (o7 < u3 ? e8.bl_tree[2 * i6] += o7 : 0 !== i6 ? (i6 !== s6 && e8.bl_tree[2 * i6]++, e8.bl_tree[2 * b2]++) : o7 <= 10 ? e8.bl_tree[2 * v2]++ : e8.bl_tree[2 * y2]++, s6 = i6, u3 = (o7 = 0) === a4 ? (h4 = 138, 3) : i6 === a4 ? (h4 = 6, 3) : (h4 = 7, 4));
          }
          function V2(e8, t4, r5) {
            var n7, i6, s6 = -1, a4 = t4[1], o7 = 0, h4 = 7, u3 = 4;
            for (0 === a4 && (h4 = 138, u3 = 3), n7 = 0; n7 <= r5; n7++)
              if (i6 = a4, a4 = t4[2 * (n7 + 1) + 1], !(++o7 < h4 && i6 === a4)) {
                if (o7 < u3)
                  for (; L2(e8, i6, e8.bl_tree), 0 != --o7; )
                    ;
                else
                  0 !== i6 ? (i6 !== s6 && (L2(e8, i6, e8.bl_tree), o7--), L2(e8, b2, e8.bl_tree), P2(e8, o7 - 3, 2)) : o7 <= 10 ? (L2(e8, v2, e8.bl_tree), P2(e8, o7 - 3, 3)) : (L2(e8, y2, e8.bl_tree), P2(e8, o7 - 11, 7));
                s6 = i6, u3 = (o7 = 0) === a4 ? (h4 = 138, 3) : i6 === a4 ? (h4 = 6, 3) : (h4 = 7, 4);
              }
          }
          n6(T2);
          var q = false;
          function J(e8, t4, r5, n7) {
            P2(e8, (s5 << 1) + (n7 ? 1 : 0), 3), function(e9, t5, r6, n8) {
              M2(e9), n8 && (U(e9, r6), U(e9, ~r6)), i5.arraySet(e9.pending_buf, e9.window, t5, r6, e9.pending), e9.pending += r6;
            }(e8, t4, r5, true);
          }
          r4._tr_init = function(e8) {
            q || (function() {
              var e9, t4, r5, n7, i6, s6 = new Array(g2 + 1);
              for (n7 = r5 = 0; n7 < a3 - 1; n7++)
                for (I2[n7] = r5, e9 = 0; e9 < 1 << w2[n7]; e9++)
                  A2[r5++] = n7;
              for (A2[r5 - 1] = n7, n7 = i6 = 0; n7 < 16; n7++)
                for (T2[n7] = i6, e9 = 0; e9 < 1 << k2[n7]; e9++)
                  E2[i6++] = n7;
              for (i6 >>= 7; n7 < f2; n7++)
                for (T2[n7] = i6 << 7, e9 = 0; e9 < 1 << k2[n7] - 7; e9++)
                  E2[256 + i6++] = n7;
              for (t4 = 0; t4 <= g2; t4++)
                s6[t4] = 0;
              for (e9 = 0; e9 <= 143; )
                z[2 * e9 + 1] = 8, e9++, s6[8]++;
              for (; e9 <= 255; )
                z[2 * e9 + 1] = 9, e9++, s6[9]++;
              for (; e9 <= 279; )
                z[2 * e9 + 1] = 7, e9++, s6[7]++;
              for (; e9 <= 287; )
                z[2 * e9 + 1] = 8, e9++, s6[8]++;
              for (Z2(z, l5 + 1, s6), e9 = 0; e9 < f2; e9++)
                C2[2 * e9 + 1] = 5, C2[2 * e9] = j(e9, 5);
              O = new D(z, w2, u2 + 1, l5, g2), B = new D(C2, k2, 0, f2, g2), R2 = new D(new Array(0), x2, 0, c3, p2);
            }(), q = true), e8.l_desc = new F(e8.dyn_ltree, O), e8.d_desc = new F(e8.dyn_dtree, B), e8.bl_desc = new F(e8.bl_tree, R2), e8.bi_buf = 0, e8.bi_valid = 0, W(e8);
          }, r4._tr_stored_block = J, r4._tr_flush_block = function(e8, t4, r5, n7) {
            var i6, s6, a4 = 0;
            0 < e8.level ? (2 === e8.strm.data_type && (e8.strm.data_type = function(e9) {
              var t5, r6 = 4093624447;
              for (t5 = 0; t5 <= 31; t5++, r6 >>>= 1)
                if (1 & r6 && 0 !== e9.dyn_ltree[2 * t5])
                  return o6;
              if (0 !== e9.dyn_ltree[18] || 0 !== e9.dyn_ltree[20] || 0 !== e9.dyn_ltree[26])
                return h3;
              for (t5 = 32; t5 < u2; t5++)
                if (0 !== e9.dyn_ltree[2 * t5])
                  return h3;
              return o6;
            }(e8)), Y(e8, e8.l_desc), Y(e8, e8.d_desc), a4 = function(e9) {
              var t5;
              for (X(e9, e9.dyn_ltree, e9.l_desc.max_code), X(e9, e9.dyn_dtree, e9.d_desc.max_code), Y(e9, e9.bl_desc), t5 = c3 - 1; 3 <= t5 && 0 === e9.bl_tree[2 * S3[t5] + 1]; t5--)
                ;
              return e9.opt_len += 3 * (t5 + 1) + 5 + 5 + 4, t5;
            }(e8), i6 = e8.opt_len + 3 + 7 >>> 3, (s6 = e8.static_len + 3 + 7 >>> 3) <= i6 && (i6 = s6)) : i6 = s6 = r5 + 5, r5 + 4 <= i6 && -1 !== t4 ? J(e8, t4, r5, n7) : 4 === e8.strategy || s6 === i6 ? (P2(e8, 2 + (n7 ? 1 : 0), 3), K(e8, z, C2)) : (P2(e8, 4 + (n7 ? 1 : 0), 3), function(e9, t5, r6, n8) {
              var i7;
              for (P2(e9, t5 - 257, 5), P2(e9, r6 - 1, 5), P2(e9, n8 - 4, 4), i7 = 0; i7 < n8; i7++)
                P2(e9, e9.bl_tree[2 * S3[i7] + 1], 3);
              V2(e9, e9.dyn_ltree, t5 - 1), V2(e9, e9.dyn_dtree, r6 - 1);
            }(e8, e8.l_desc.max_code + 1, e8.d_desc.max_code + 1, a4 + 1), K(e8, e8.dyn_ltree, e8.dyn_dtree)), W(e8), n7 && M2(e8);
          }, r4._tr_tally = function(e8, t4, r5) {
            return e8.pending_buf[e8.d_buf + 2 * e8.last_lit] = t4 >>> 8 & 255, e8.pending_buf[e8.d_buf + 2 * e8.last_lit + 1] = 255 & t4, e8.pending_buf[e8.l_buf + e8.last_lit] = 255 & r5, e8.last_lit++, 0 === t4 ? e8.dyn_ltree[2 * r5]++ : (e8.matches++, t4--, e8.dyn_ltree[2 * (A2[r5] + u2 + 1)]++, e8.dyn_dtree[2 * N2(t4)]++), e8.last_lit === e8.lit_bufsize - 1;
          }, r4._tr_align = function(e8) {
            P2(e8, 2, 3), L2(e8, m2, z), function(e9) {
              16 === e9.bi_valid ? (U(e9, e9.bi_buf), e9.bi_buf = 0, e9.bi_valid = 0) : 8 <= e9.bi_valid && (e9.pending_buf[e9.pending++] = 255 & e9.bi_buf, e9.bi_buf >>= 8, e9.bi_valid -= 8);
            }(e8);
          };
        }, { "../utils/common": 41 }], 53: [function(e7, t3, r4) {
          "use strict";
          t3.exports = function() {
            this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
          };
        }, {}], 54: [function(e7, t3, r4) {
          (function(e8) {
            !function(r5, n6) {
              "use strict";
              if (!r5.setImmediate) {
                var i5, s5, t4, a3, o6 = 1, h3 = {}, u2 = false, l5 = r5.document, e9 = Object.getPrototypeOf && Object.getPrototypeOf(r5);
                e9 = e9 && e9.setTimeout ? e9 : r5, i5 = "[object process]" === {}.toString.call(r5.process) ? function(e10) {
                  process.nextTick(function() {
                    c3(e10);
                  });
                } : function() {
                  if (r5.postMessage && !r5.importScripts) {
                    var e10 = true, t5 = r5.onmessage;
                    return r5.onmessage = function() {
                      e10 = false;
                    }, r5.postMessage("", "*"), r5.onmessage = t5, e10;
                  }
                }() ? (a3 = "setImmediate$" + Math.random() + "$", r5.addEventListener ? r5.addEventListener("message", d3, false) : r5.attachEvent("onmessage", d3), function(e10) {
                  r5.postMessage(a3 + e10, "*");
                }) : r5.MessageChannel ? ((t4 = new MessageChannel()).port1.onmessage = function(e10) {
                  c3(e10.data);
                }, function(e10) {
                  t4.port2.postMessage(e10);
                }) : l5 && "onreadystatechange" in l5.createElement("script") ? (s5 = l5.documentElement, function(e10) {
                  var t5 = l5.createElement("script");
                  t5.onreadystatechange = function() {
                    c3(e10), t5.onreadystatechange = null, s5.removeChild(t5), t5 = null;
                  }, s5.appendChild(t5);
                }) : function(e10) {
                  setTimeout(c3, 0, e10);
                }, e9.setImmediate = function(e10) {
                  "function" != typeof e10 && (e10 = new Function("" + e10));
                  for (var t5 = new Array(arguments.length - 1), r6 = 0; r6 < t5.length; r6++)
                    t5[r6] = arguments[r6 + 1];
                  var n7 = { callback: e10, args: t5 };
                  return h3[o6] = n7, i5(o6), o6++;
                }, e9.clearImmediate = f2;
              }
              function f2(e10) {
                delete h3[e10];
              }
              function c3(e10) {
                if (u2)
                  setTimeout(c3, 0, e10);
                else {
                  var t5 = h3[e10];
                  if (t5) {
                    u2 = true;
                    try {
                      !function(e11) {
                        var t6 = e11.callback, r6 = e11.args;
                        switch (r6.length) {
                          case 0:
                            t6();
                            break;
                          case 1:
                            t6(r6[0]);
                            break;
                          case 2:
                            t6(r6[0], r6[1]);
                            break;
                          case 3:
                            t6(r6[0], r6[1], r6[2]);
                            break;
                          default:
                            t6.apply(n6, r6);
                        }
                      }(t5);
                    } finally {
                      f2(e10), u2 = false;
                    }
                  }
                }
              }
              function d3(e10) {
                e10.source === r5 && "string" == typeof e10.data && 0 === e10.data.indexOf(a3) && c3(+e10.data.slice(a3.length));
              }
            }("undefined" == typeof self ? void 0 === e8 ? this : e8 : self);
          }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
        }, {}] }, {}, [10])(10);
      });
    }
  });

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
    user-select: none;
  }
  li:hover {
    background-color: var(--secondary-color-hover);
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
        const newSelectionStart = selectionStart + markdownSymbol.length + 1;
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
        this.handleFileRender(file);
      };
      this.handleDrop = (event) => {
        event.preventDefault();
        if (!event.dataTransfer)
          return;
        const { files } = event.dataTransfer;
        const filesArray = Array.from(files);
        for (const file of filesArray) {
          const { type } = file;
          const regex = /(image|video)\/.*/;
          if (!regex.test(type))
            continue;
          this.handleFileRender(file);
        }
      };
      this.handleFileRender = (file) => {
        const objectURL = URL.createObjectURL(file);
        const markdown = `![${file.name}](${objectURL} "${file.name}")`;
        const { selectionStart, selectionEnd, value } = this.textarea;
        const textUntilSelectionStart = value.substring(0, selectionStart);
        const textAfterSelectionEnd = value.substring(selectionEnd);
        const newLine = "\n";
        this.textarea.value = textUntilSelectionStart + newLine + markdown + textAfterSelectionEnd + newLine;
        this.triggerInputEvent();
        this.renderToLightDom();
        this.textarea.focus();
        const newSelectionStart = selectionStart + markdown.length + 1;
        this.textarea.setSelectionRange(newSelectionStart, newSelectionStart);
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
      <textarea name=${this.name} autocomplete="off" maxlength="5000" @drop=${this.handleDrop}></textarea>
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

  // src/application/helpers/index.ts
  var collectImages = (text) => {
    const matches = Array.from(text.matchAll(/!\[.*\]\(blob:(.*) "(.*)"\)/g));
    console.log(matches);
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
  var convertStringToBlob = (string) => new Blob([string], { type: "text/plain; charset=UTF-8" });
  var renderMarkdown = (input) => new Promise((resolve, reject) => {
    marked(input, (error, result) => {
      if (error)
        return reject(error);
      resolve(result);
    });
  });

  // src/application/renderer.ts
  var import_jszip = __toESM(require_jszip_min());
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
    collectImages(value).then((filenamesAndBlobs) => {
      const zip = new import_jszip.default();
      const blob = convertStringToBlob(value);
      zip.file("markdown.md", blob);
      for (const [filename, blob2] of filenamesAndBlobs) {
        zip.file(filename, blob2);
      }
      return zip.generateAsync({ type: "blob" });
    }).then((zipBlob) => {
      const blobUrl = URL.createObjectURL(zipBlob);
      anchor.href = blobUrl;
      anchor.download = "article.zip";
      anchor.click();
    });
  });
  var cache = window.localStorage.getItem("cache");
  if (cache) {
    editor.innerHTML = cache;
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
