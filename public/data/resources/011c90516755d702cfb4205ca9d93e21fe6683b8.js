var e;
e || (e = typeof Module !== "undefined" ? Module : {});
e.Ad || (e.Ad = 0);
e.Ad++;
(function (a) {
  function b(k, p, n) {
    var q = new XMLHttpRequest();
    q.open("GET", k, !0);
    q.responseType = "arraybuffer";
    q.onprogress = function (r) {
      var l = p;
      r.total && (l = r.total);
      if (r.loaded) {
        q.je
          ? (e.Uc[k].loaded = r.loaded)
          : ((q.je = !0),
            e.Uc || (e.Uc = {}),
            (e.Uc[k] = { loaded: r.loaded, total: l }));
        var v = (l = r = 0),
          w;
        for (w in e.Uc) {
          var z = e.Uc[w];
          r += z.total;
          l += z.loaded;
          v++;
        }
        r = Math.ceil((r * e.Ad) / v);
        e.setStatus && e.setStatus("Downloading data... (" + l + "/" + r + ")");
      } else !e.Uc && e.setStatus && e.setStatus("Downloading data...");
    };
    q.onerror = function () {
      throw Error("NetworkError for: " + k);
    };
    q.onload = function () {
      if (
        200 == q.status ||
        304 == q.status ||
        206 == q.status ||
        (0 == q.status && q.response)
      )
        n(q.response);
      else throw Error(q.statusText + " : " + q.responseURL);
    };
    q.send(null);
  }
  function c(k) {
    console.error("package error:", k);
  }
  function d() {
    function k(r, l, v) {
      this.start = r;
      this.end = l;
      this.audio = v;
    }
    function p(r) {
      if (!r) throw "Loading data file failed." + Error().stack;
      if (!(r instanceof ArrayBuffer))
        throw "bad input to processPackageData" + Error().stack;
      r = new Uint8Array(r);
      k.prototype.me = r;
      r = a.files;
      for (var l = 0; l < r.length; ++l) k.prototype.Id[r[l].filename].onload();
      e.removeRunDependency(
        "datafile_011c90516755d702cfb4205ca9d93e21fe6683b8.data"
      );
    }
    e.FS_createPath("/", "models", !0, !0);
    k.prototype = {
      Id: {},
      open: function (r, l) {
        this.name = l;
        this.Id[l] = this;
        e.addRunDependency("fp " + this.name);
      },
      send: function () {},
      onload: function () {
        this.finish(this.me.subarray(this.start, this.end));
      },
      finish: function (r) {
        e.FS_createDataFile(this.name, null, r, !0, !0, !0);
        e.removeRunDependency("fp " + this.name);
        this.Id[this.name] = null;
      },
    };
    for (var n = a.files, q = 0; q < n.length; ++q)
      new k(n[q].start, n[q].end, n[q].audio).open("GET", n[q].filename);
    e.addRunDependency(
      "datafile_011c90516755d702cfb4205ca9d93e21fe6683b8.data"
    );
    e.Vd || (e.Vd = {});
    e.Vd["011c90516755d702cfb4205ca9d93e21fe6683b8.data"] = { hf: !1 };
    m ? (p(m), (m = null)) : (h = p);
  }
  if ("object" === typeof window)
    window.encodeURIComponent(
      window.location.pathname
        .toString()
        .substring(0, window.location.pathname.toString().lastIndexOf("/")) +
        "/"
    );
  else if ("undefined" !== typeof location)
    encodeURIComponent(
      location.pathname
        .toString()
        .substring(0, location.pathname.toString().lastIndexOf("/")) + "/"
    );
  else
    throw "using preloaded data can only be done on a web page or in a web worker";
  "function" !== typeof e.locateFilePackage ||
    e.locateFile ||
    ((e.locateFile = e.locateFilePackage),
    t(
      "warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)"
    ));
  var f = e.locateFile
      ? e.locateFile("011c90516755d702cfb4205ca9d93e21fe6683b8.data", "")
      : "011c90516755d702cfb4205ca9d93e21fe6683b8.data",
    g = a.remote_package_size,
    h = null,
    m = e.getPreloadedPackage ? e.getPreloadedPackage(f, g) : null;
  m ||
    b(
      f,
      g,
      function (k) {
        h ? (h(k), (h = null)) : (m = k);
      },
      c
    );
  e.calledRun ? d() : (e.preRun || (e.preRun = []), e.preRun.push(d));
})({
  files: [
    { filename: "/models/f2.xml", start: 0, end: 127521, audio: 0 },
    {
      filename:
        "/models/6b3133f0f39ff89a2a169d61176ee17cafacc5e288f334e2b64ee82892d11ccd",
      start: 127521,
      end: 1627953,
      audio: 0,
    },
    {
      filename: "/models/66388dc76dc16bc6b76b682edd218a575bf45b9b",
      start: 1627953,
      end: 1676550,
      audio: 0,
    },
    {
      filename:
        "/models/1f5b84f51ce0fcfbb76e904b7bcaa7560f601e1394a0b29367a09385312287eb",
      start: 1676550,
      end: 1688398,
      audio: 0,
    },
    {
      filename:
        "/models/a74f2afb9d20f2375ccbd14e67c094b85c89ceb608f7cf8ae04f3f646a6c5672",
      start: 1688398,
      end: 1743299,
      audio: 0,
    },
    {
      filename:
        "/models/dbd7a353f0130bb983d6ba05917e9be991d70e8f028df4b74e30bc6497ef7f71",
      start: 1743299,
      end: 1796182,
      audio: 0,
    },
    {
      filename:
        "/models/4c4774668f9b9333977fc891e7695420a0b4c27cc2c1cd3920ce9e0870e3c0e8",
      start: 1796182,
      end: 1849220,
      audio: 0,
    },
    {
      filename:
        "/models/b501893e75f62ee1707643e35b21109927b07ed5b202321c961b424cbc2e4695",
      start: 1849220,
      end: 1902154,
      audio: 0,
    },
    {
      filename:
        "/models/2b075ac1a6132b5b8a4c9ef0ba6b0cd84db7838aca9a000e50d907f40770a4ab",
      start: 1902154,
      end: 1914145,
      audio: 0,
    },
    {
      filename:
        "/models/9077d16225f9314163ef1e7db6fc7d4088bb903d134bd95f23d5591ca4dfbfca",
      start: 1914145,
      end: 1967219,
      audio: 0,
    },
    {
      filename:
        "/models/59cc2a9af81aaca2376702c2490650f4da2775fa673274db98aad41b7ef101c0",
      start: 1967219,
      end: 2019831,
      audio: 0,
    },
    {
      filename:
        "/models/b82962a4847bcf6d1bf89ea7543f83e184a1df7c4e7e3c343dd3e3e17cb9a645",
      start: 2019831,
      end: 2137885,
      audio: 0,
    },
    {
      filename:
        "/models/fd6d368a5658496536e2bfae170d1b823a3629b242cafc09784bfba4e56d8c80",
      start: 2137885,
      end: 2146827,
      audio: 0,
    },
    {
      filename:
        "/models/vu0ilin6we3lrzo5f83f7qs2jul4aq7v4aoynrmch8zfvpi8ezrfyafa4t0fx87l",
      start: 2146827,
      end: 2156358,
      audio: 0,
    },
    {
      filename:
        "/models/5b63e98b991aedabb60665503384f30bffd939decf9433883b30b78011ee501a",
      start: 2156358,
      end: 2209817,
      audio: 0,
    },
  ],
  remote_package_size: 2209817,
  package_uuid: "402487e3-4743-49f8-8d7f-46652ae6d3e4",
});
var crypto;
crypto ||
  (crypto = {
    getRandomValues: function (a) {
      for (var b = 0; b < a.length; b++) a[b] = e.eJcfPvLCbm.apply(null);
    },
  });
function aa() {
  var a = e.o1BHvPWDzd;
  a || (a = e.o1BHvPWDzd = {});
  return a;
}
function u(a, b) {
  a = e[a].apply(null, b);
  return Uint8Array.from(a);
}
e.init = function (a, b, c, d, f, g, h) {
  a = JSON.stringify(a);
  d = JSON.stringify(d);
  var m = aa();
  m.a = function (k) {
    b(k.target);
  };
  m.b = function (k) {
    b(k);
  };
  e.i(a, c, d, f, g, h);
  e.p();
};
e.f = function () {
  return e._f.apply(null, arguments).slice(0);
};
e.gu = function () {
  return e._gu();
};
e.g = function () {
  return u("_g");
};
e.c = function () {
  return u("_c");
};
e.tt = function () {
  return u("_tt");
};
e.tl = function () {
  return u("_tl");
};
e.hh = function () {
  return u("_hh");
};
e.zt = function () {
  return u("_zt");
};
e.zn = function () {
  return u("_zn");
};
e.bvs = function () {
  return u("_bvs");
};
e.nn = function () {
  return u("_nn");
};
e.vv = function () {
  return u("_vv");
};
e.jj = function () {
  return u("_jj");
};
e.sd = function () {
  e._sd();
};
e.ca = function (a) {
  aa().c = a;
  e._ca();
};
e.ww = function () {
  return u("_ww");
};
e.af = function () {
  return u("_af");
};
e.ss = function (a) {
  e._ss(a);
};
e.ee = function () {
  e._ee();
};
e.rr = function (a) {
  return u("_rr", [a]);
};
e.ws = function (a) {
  e._ws(a);
};
e.ii = function (a) {
  aa().d = a;
  e._ii();
};
e.pn = function (a) {
  aa().q = a;
  e._pn();
};
e.qq = function () {
  e._qq();
};
e.qe = function () {
  e._qe();
};
e.cc = function (a) {
  return u("_cc", [a]);
};
e.dd = function () {
  return u("_dd");
};
e.zz = function (a) {
  aa().f = a;
  e._zz();
};
e.yy = function () {
  return e._yy.apply(null, arguments).slice(0);
};
e.xx = function () {
  return e._xx();
};
e.ll = function (a) {
  e._ll(a);
};
e.ps = function () {
  e._ps();
};
e.pc = function (a) {
  aa().g = a;
  e._pc();
};
e.uu = function (a) {
  e._uu(a);
};
var ba = {},
  ca;
for (ca in e) e.hasOwnProperty(ca) && (ba[ca] = e[ca]);
var da = [],
  ea = "./this.program";
function fa(a, b) {
  throw b;
}
var ha = !1,
  ia = !1;
ha = "object" === typeof window;
ia = "function" === typeof importScripts;
var ja = "",
  ka,
  la;
if (ha || ia)
  ia
    ? (ja = self.location.href)
    : document.currentScript && (ja = document.currentScript.src),
    (ja =
      0 !== ja.indexOf("blob:") ? ja.substr(0, ja.lastIndexOf("/") + 1) : ""),
    (ka = function (a) {
      var b = new XMLHttpRequest();
      b.open("GET", a, !1);
      b.send(null);
      return b.responseText;
    }),
    ia &&
      (la = function (a) {
        var b = new XMLHttpRequest();
        b.open("GET", a, !1);
        b.responseType = "arraybuffer";
        b.send(null);
        return new Uint8Array(b.response);
      });
var ma = e.print || console.log.bind(console),
  t = e.printErr || console.warn.bind(console);
for (ca in ba) ba.hasOwnProperty(ca) && (e[ca] = ba[ca]);
ba = null;
e.arguments && (da = e.arguments);
e.thisProgram && (ea = e.thisProgram);
e.quit && (fa = e.quit);
var x = 0,
  na;
e.wasmBinary && (na = e.wasmBinary);
var noExitRuntime;
e.noExitRuntime && (noExitRuntime = e.noExitRuntime);
"object" !== typeof WebAssembly && y("no native wasm support detected");
var oa,
  pa = new WebAssembly.Table({
    initial: 4831,
    maximum: 4831,
    element: "anyfunc",
  }),
  qa = !1;
function ra(a) {
  a || y("Assertion failed: undefined");
}
var ta = "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0;
function ua(a, b, c) {
  var d = b + c;
  for (c = b; a[c] && !(c >= d); ) ++c;
  if (16 < c - b && a.subarray && ta) return ta.decode(a.subarray(b, c));
  for (d = ""; b < c; ) {
    var f = a[b++];
    if (f & 128) {
      var g = a[b++] & 63;
      if (192 == (f & 224)) d += String.fromCharCode(((f & 31) << 6) | g);
      else {
        var h = a[b++] & 63;
        f =
          224 == (f & 240)
            ? ((f & 15) << 12) | (g << 6) | h
            : ((f & 7) << 18) | (g << 12) | (h << 6) | (a[b++] & 63);
        65536 > f
          ? (d += String.fromCharCode(f))
          : ((f -= 65536),
            (d += String.fromCharCode(55296 | (f >> 10), 56320 | (f & 1023))));
      }
    } else d += String.fromCharCode(f);
  }
  return d;
}
function va(a, b) {
  return a ? ua(A, a, b) : "";
}
function wa(a, b, c, d) {
  if (!(0 < d)) return 0;
  var f = c;
  d = c + d - 1;
  for (var g = 0; g < a.length; ++g) {
    var h = a.charCodeAt(g);
    if (55296 <= h && 57343 >= h) {
      var m = a.charCodeAt(++g);
      h = (65536 + ((h & 1023) << 10)) | (m & 1023);
    }
    if (127 >= h) {
      if (c >= d) break;
      b[c++] = h;
    } else {
      if (2047 >= h) {
        if (c + 1 >= d) break;
        b[c++] = 192 | (h >> 6);
      } else {
        if (65535 >= h) {
          if (c + 2 >= d) break;
          b[c++] = 224 | (h >> 12);
        } else {
          if (c + 3 >= d) break;
          b[c++] = 240 | (h >> 18);
          b[c++] = 128 | ((h >> 12) & 63);
        }
        b[c++] = 128 | ((h >> 6) & 63);
      }
      b[c++] = 128 | (h & 63);
    }
  }
  b[c] = 0;
  return c - f;
}
function xa(a) {
  for (var b = 0, c = 0; c < a.length; ++c) {
    var d = a.charCodeAt(c);
    55296 <= d &&
      57343 >= d &&
      (d = (65536 + ((d & 1023) << 10)) | (a.charCodeAt(++c) & 1023));
    127 >= d ? ++b : (b = 2047 >= d ? b + 2 : 65535 >= d ? b + 3 : b + 4);
  }
  return b;
}
var ya =
  "undefined" !== typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;
function za(a, b) {
  var c = a >> 1;
  for (var d = c + b / 2; !(c >= d) && Aa[c]; ) ++c;
  c <<= 1;
  if (32 < c - a && ya) return ya.decode(A.subarray(a, c));
  c = 0;
  for (d = ""; ; ) {
    var f = Ba[(a + 2 * c) >> 1];
    if (0 == f || c == b / 2) return d;
    ++c;
    d += String.fromCharCode(f);
  }
}
function Ca(a, b, c) {
  void 0 === c && (c = 2147483647);
  if (2 > c) return 0;
  c -= 2;
  var d = b;
  c = c < 2 * a.length ? c / 2 : a.length;
  for (var f = 0; f < c; ++f) (Ba[b >> 1] = a.charCodeAt(f)), (b += 2);
  Ba[b >> 1] = 0;
  return b - d;
}
function Da(a) {
  return 2 * a.length;
}
function Ea(a, b) {
  for (var c = 0, d = ""; !(c >= b / 4); ) {
    var f = B[(a + 4 * c) >> 2];
    if (0 == f) break;
    ++c;
    65536 <= f
      ? ((f -= 65536),
        (d += String.fromCharCode(55296 | (f >> 10), 56320 | (f & 1023))))
      : (d += String.fromCharCode(f));
  }
  return d;
}
function Fa(a, b, c) {
  void 0 === c && (c = 2147483647);
  if (4 > c) return 0;
  var d = b;
  c = d + c - 4;
  for (var f = 0; f < a.length; ++f) {
    var g = a.charCodeAt(f);
    if (55296 <= g && 57343 >= g) {
      var h = a.charCodeAt(++f);
      g = (65536 + ((g & 1023) << 10)) | (h & 1023);
    }
    B[b >> 2] = g;
    b += 4;
    if (b + 4 > c) break;
  }
  B[b >> 2] = 0;
  return b - d;
}
function Ga(a) {
  for (var b = 0, c = 0; c < a.length; ++c) {
    var d = a.charCodeAt(c);
    55296 <= d && 57343 >= d && ++c;
    b += 4;
  }
  return b;
}
function Ha(a) {
  var b = xa(a) + 1,
    c = Ia(b);
  c && wa(a, C, c, b);
  return c;
}
function Ja(a) {
  var b = xa(a) + 1,
    c = Ka(b);
  wa(a, C, c, b);
  return c;
}
var La, C, A, Ba, Aa, B, E, Ma, Na;
function Oa(a) {
  La = a;
  e.HEAP8 = C = new Int8Array(a);
  e.HEAP16 = Ba = new Int16Array(a);
  e.HEAP32 = B = new Int32Array(a);
  e.HEAPU8 = A = new Uint8Array(a);
  e.HEAPU16 = Aa = new Uint16Array(a);
  e.HEAPU32 = E = new Uint32Array(a);
  e.HEAPF32 = Ma = new Float32Array(a);
  e.HEAPF64 = Na = new Float64Array(a);
}
var Pa = e.INITIAL_MEMORY || 134217728;
if (
  (oa = e.wasmMemory
    ? e.wasmMemory
    : new WebAssembly.Memory({ initial: Pa / 65536, maximum: 32768 }))
)
  La = oa.buffer;
Pa = La.byteLength;
Oa(La);
B[113624] = 5697552;
function Qa(a) {
  for (; 0 < a.length; ) {
    var b = a.shift();
    if ("function" == typeof b) b(e);
    else {
      var c = b.re;
      "number" === typeof c
        ? void 0 === b.zd
          ? e.dynCall_v(c)
          : e.dynCall_vi(c, b.zd)
        : c(void 0 === b.zd ? null : b.zd);
    }
  }
}
var Ra = [],
  Sa = [],
  Ta = [],
  Ua = [],
  Va = !1;
function Wa() {
  var a = e.preRun.shift();
  Ra.unshift(a);
}
var Xa = Math.abs,
  Ya = Math.ceil,
  Za = Math.floor,
  $a = Math.min,
  ab = 0,
  bb = null,
  cb = null;
function db() {
  ab++;
  e.monitorRunDependencies && e.monitorRunDependencies(ab);
}
function eb() {
  ab--;
  e.monitorRunDependencies && e.monitorRunDependencies(ab);
  if (0 == ab && (null !== bb && (clearInterval(bb), (bb = null)), cb)) {
    var a = cb;
    cb = null;
    a();
  }
}
e.preloadedImages = {};
e.preloadedAudios = {};
function y(a) {
  if (e.onAbort) e.onAbort(a);
  a += "";
  t(a);
  qa = !0;
  throw new WebAssembly.RuntimeError(
    "abort(" + a + "). Build with -s ASSERTIONS=1 for more info."
  );
}
function fb() {
  var a = gb;
  return String.prototype.startsWith
    ? a.startsWith("data:application/octet-stream;base64,")
    : 0 === a.indexOf("data:application/octet-stream;base64,");
}
var gb = "011c90516755d702cfb4205ca9d93e21fe6683b8.wasm";
if (!fb()) {
  var hb = gb;
  gb = e.locateFile ? e.locateFile(hb, ja) : ja + hb;
}
function ib() {
  try {
    if (na) return new Uint8Array(na);
    if (la) return la(gb);
    throw "both async and sync fetching of the wasm failed";
  } catch (a) {
    y(a);
  }
}
function jb() {
  return na || (!ha && !ia) || "function" !== typeof fetch
    ? new Promise(function (a) {
        a(ib());
      })
    : fetch(gb, { credentials: "same-origin" })
        .then(function (a) {
          if (!a.ok) throw "failed to load wasm binary file at '" + gb + "'";
          return a.arrayBuffer();
        })
        .catch(function () {
          return ib();
        });
}
var kb, lb;
Sa.push({
  re: function () {
    mb();
  },
});
var nb;
nb = function () {
  return performance.now();
};
function ob(a) {
  B[pb() >> 2] = a;
}
function qb(a, b) {
  if (0 === a) a = Date.now();
  else if (1 === a || 4 === a) a = nb();
  else return ob(28), -1;
  B[b >> 2] = (a / 1e3) | 0;
  B[(b + 4) >> 2] = ((a % 1e3) * 1e6) | 0;
  return 0;
}
var G = {},
  rb = [];
function sb(a) {
  if (!a || G[a]) return a;
  for (var b in G)
    for (var c = +b, d = G[c].yd, f = d.length, g = 0; g < f; g++)
      if (d[g] === a) return c;
  return a;
}
function tb() {
  return 0 < tb.wd;
}
var ub = 0;
function vb(a, b) {
  for (var c = 0, d = a.length - 1; 0 <= d; d--) {
    var f = a[d];
    "." === f
      ? a.splice(d, 1)
      : ".." === f
      ? (a.splice(d, 1), c++)
      : c && (a.splice(d, 1), c--);
  }
  if (b) for (; c; c--) a.unshift("..");
  return a;
}
function wb(a) {
  var b = "/" === a.charAt(0),
    c = "/" === a.substr(-1);
  (a = vb(
    a.split("/").filter(function (d) {
      return !!d;
    }),
    !b
  ).join("/")) ||
    b ||
    (a = ".");
  a && c && (a += "/");
  return (b ? "/" : "") + a;
}
function xb(a) {
  var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
    .exec(a)
    .slice(1);
  a = b[0];
  b = b[1];
  if (!a && !b) return ".";
  b && (b = b.substr(0, b.length - 1));
  return a + b;
}
function yb(a) {
  if ("/" === a) return "/";
  var b = a.lastIndexOf("/");
  return -1 === b ? a : a.substr(b + 1);
}
function zb() {
  for (var a = "", b = !1, c = arguments.length - 1; -1 <= c && !b; c--) {
    b = 0 <= c ? arguments[c] : "/";
    if ("string" !== typeof b)
      throw new TypeError("Arguments to path.resolve must be strings");
    if (!b) return "";
    a = b + "/" + a;
    b = "/" === b.charAt(0);
  }
  a = vb(
    a.split("/").filter(function (d) {
      return !!d;
    }),
    !b
  ).join("/");
  return (b ? "/" : "") + a || ".";
}
var Ab = [];
function Bb(a, b) {
  Ab[a] = { input: [], Cc: [], Yc: b };
  Cb(a, Db);
}
var Db = {
    open: function (a) {
      var b = Ab[a.node.od];
      if (!b) throw new H(43);
      a.Bc = b;
      a.seekable = !1;
    },
    close: function (a) {
      a.Bc.Yc.flush(a.Bc);
    },
    flush: function (a) {
      a.Bc.Yc.flush(a.Bc);
    },
    read: function (a, b, c, d) {
      if (!a.Bc || !a.Bc.Yc.Rd) throw new H(60);
      for (var f = 0, g = 0; g < d; g++) {
        try {
          var h = a.Bc.Yc.Rd(a.Bc);
        } catch (m) {
          throw new H(29);
        }
        if (void 0 === h && 0 === f) throw new H(6);
        if (null === h || void 0 === h) break;
        f++;
        b[c + g] = h;
      }
      f && (a.node.timestamp = Date.now());
      return f;
    },
    write: function (a, b, c, d) {
      if (!a.Bc || !a.Bc.Yc.Fd) throw new H(60);
      try {
        for (var f = 0; f < d; f++) a.Bc.Yc.Fd(a.Bc, b[c + f]);
      } catch (g) {
        throw new H(29);
      }
      d && (a.node.timestamp = Date.now());
      return f;
    },
  },
  Fb = {
    Rd: function (a) {
      if (!a.input.length) {
        var b = null;
        "undefined" != typeof window && "function" == typeof window.prompt
          ? ((b = window.prompt("Input: ")), null !== b && (b += "\n"))
          : "function" == typeof readline &&
            ((b = readline()), null !== b && (b += "\n"));
        if (!b) return null;
        a.input = Eb(b, !0);
      }
      return a.input.shift();
    },
    Fd: function (a, b) {
      null === b || 10 === b
        ? (ma(ua(a.Cc, 0)), (a.Cc = []))
        : 0 != b && a.Cc.push(b);
    },
    flush: function (a) {
      a.Cc && 0 < a.Cc.length && (ma(ua(a.Cc, 0)), (a.Cc = []));
    },
  },
  Gb = {
    Fd: function (a, b) {
      null === b || 10 === b
        ? (t(ua(a.Cc, 0)), (a.Cc = []))
        : 0 != b && a.Cc.push(b);
    },
    flush: function (a) {
      a.Cc && 0 < a.Cc.length && (t(ua(a.Cc, 0)), (a.Cc = []));
    },
  },
  I = {
    Lc: null,
    Nc: function () {
      return I.createNode(null, "/", 16895, 0);
    },
    createNode: function (a, b, c, d) {
      if (24576 === (c & 61440) || 4096 === (c & 61440)) throw new H(63);
      I.Lc ||
        (I.Lc = {
          dir: {
            node: {
              Pc: I.vc.Pc,
              Gc: I.vc.Gc,
              ad: I.vc.ad,
              md: I.vc.md,
              Yd: I.vc.Yd,
              xd: I.vc.xd,
              qd: I.vc.qd,
              Xd: I.vc.Xd,
              rd: I.vc.rd,
            },
            stream: { Sc: I.wc.Sc },
          },
          file: {
            node: { Pc: I.vc.Pc, Gc: I.vc.Gc },
            stream: {
              Sc: I.wc.Sc,
              read: I.wc.read,
              write: I.wc.write,
              Jd: I.wc.Jd,
              Td: I.wc.Td,
              nd: I.wc.nd,
            },
          },
          link: { node: { Pc: I.vc.Pc, Gc: I.vc.Gc, cd: I.vc.cd }, stream: {} },
          Md: { node: { Pc: I.vc.Pc, Gc: I.vc.Gc }, stream: Hb },
        });
      c = Ib(a, b, c, d);
      J(c.mode)
        ? ((c.vc = I.Lc.dir.node), (c.wc = I.Lc.dir.stream), (c.uc = {}))
        : 32768 === (c.mode & 61440)
        ? ((c.vc = I.Lc.file.node),
          (c.wc = I.Lc.file.stream),
          (c.zc = 0),
          (c.uc = null))
        : 40960 === (c.mode & 61440)
        ? ((c.vc = I.Lc.link.node), (c.wc = I.Lc.link.stream))
        : 8192 === (c.mode & 61440) &&
          ((c.vc = I.Lc.Md.node), (c.wc = I.Lc.Md.stream));
      c.timestamp = Date.now();
      a && (a.uc[b] = c);
      return c;
    },
    jf: function (a) {
      if (a.uc && a.uc.subarray) {
        for (var b = [], c = 0; c < a.zc; ++c) b.push(a.uc[c]);
        return b;
      }
      return a.uc;
    },
    kf: function (a) {
      return a.uc
        ? a.uc.subarray
          ? a.uc.subarray(0, a.zc)
          : new Uint8Array(a.uc)
        : new Uint8Array(0);
    },
    Od: function (a, b) {
      var c = a.uc ? a.uc.length : 0;
      c >= b ||
        ((b = Math.max(b, (c * (1048576 > c ? 2 : 1.125)) >>> 0)),
        0 != c && (b = Math.max(b, 256)),
        (c = a.uc),
        (a.uc = new Uint8Array(b)),
        0 < a.zc && a.uc.set(c.subarray(0, a.zc), 0));
    },
    Ee: function (a, b) {
      if (a.zc != b)
        if (0 == b) (a.uc = null), (a.zc = 0);
        else {
          if (!a.uc || a.uc.subarray) {
            var c = a.uc;
            a.uc = new Uint8Array(b);
            c && a.uc.set(c.subarray(0, Math.min(b, a.zc)));
          } else if ((a.uc || (a.uc = []), a.uc.length > b)) a.uc.length = b;
          else for (; a.uc.length < b; ) a.uc.push(0);
          a.zc = b;
        }
    },
    vc: {
      Pc: function (a) {
        var b = {};
        b.gf = 8192 === (a.mode & 61440) ? a.id : 1;
        b.nf = a.id;
        b.mode = a.mode;
        b.tf = 1;
        b.uid = 0;
        b.lf = 0;
        b.od = a.od;
        b.size = J(a.mode)
          ? 4096
          : 32768 === (a.mode & 61440)
          ? a.zc
          : 40960 === (a.mode & 61440)
          ? a.link.length
          : 0;
        b.df = new Date(a.timestamp);
        b.sf = new Date(a.timestamp);
        b.ff = new Date(a.timestamp);
        b.le = 4096;
        b.ef = Math.ceil(b.size / b.le);
        return b;
      },
      Gc: function (a, b) {
        void 0 !== b.mode && (a.mode = b.mode);
        void 0 !== b.timestamp && (a.timestamp = b.timestamp);
        void 0 !== b.size && I.Ee(a, b.size);
      },
      ad: function () {
        throw Jb[44];
      },
      md: function (a, b, c, d) {
        return I.createNode(a, b, c, d);
      },
      Yd: function (a, b, c) {
        if (J(a.mode)) {
          try {
            var d = Kb(b, c);
          } catch (g) {}
          if (d) for (var f in d.uc) throw new H(55);
        }
        delete a.parent.uc[a.name];
        a.name = c;
        b.uc[c] = a;
        a.parent = b;
      },
      xd: function (a, b) {
        delete a.uc[b];
      },
      qd: function (a, b) {
        var c = Kb(a, b),
          d;
        for (d in c.uc) throw new H(55);
        delete a.uc[b];
      },
      Xd: function (a) {
        var b = [".", ".."],
          c;
        for (c in a.uc) a.uc.hasOwnProperty(c) && b.push(c);
        return b;
      },
      rd: function (a, b, c) {
        a = I.createNode(a, b, 41471, 0);
        a.link = c;
        return a;
      },
      cd: function (a) {
        if (40960 !== (a.mode & 61440)) throw new H(28);
        return a.link;
      },
    },
    wc: {
      read: function (a, b, c, d, f) {
        var g = a.node.uc;
        if (f >= a.node.zc) return 0;
        a = Math.min(a.node.zc - f, d);
        if (8 < a && g.subarray) b.set(g.subarray(f, f + a), c);
        else for (d = 0; d < a; d++) b[c + d] = g[f + d];
        return a;
      },
      write: function (a, b, c, d, f, g) {
        b.buffer === C.buffer && (g = !1);
        if (!d) return 0;
        a = a.node;
        a.timestamp = Date.now();
        if (b.subarray && (!a.uc || a.uc.subarray)) {
          if (g) return (a.uc = b.subarray(c, c + d)), (a.zc = d);
          if (0 === a.zc && 0 === f)
            return (a.uc = b.slice(c, c + d)), (a.zc = d);
          if (f + d <= a.zc) return a.uc.set(b.subarray(c, c + d), f), d;
        }
        I.Od(a, f + d);
        if (a.uc.subarray && b.subarray) a.uc.set(b.subarray(c, c + d), f);
        else for (g = 0; g < d; g++) a.uc[f + g] = b[c + g];
        a.zc = Math.max(a.zc, f + d);
        return d;
      },
      Sc: function (a, b, c) {
        1 === c
          ? (b += a.position)
          : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.zc);
        if (0 > b) throw new H(28);
        return b;
      },
      Jd: function (a, b, c) {
        I.Od(a.node, b + c);
        a.node.zc = Math.max(a.node.zc, b + c);
      },
      Td: function (a, b, c, d, f, g) {
        ra(0 === b);
        if (32768 !== (a.node.mode & 61440)) throw new H(43);
        a = a.node.uc;
        if (g & 2 || a.buffer !== La) {
          if (0 < d || d + c < a.length)
            a = a.subarray
              ? a.subarray(d, d + c)
              : Array.prototype.slice.call(a, d, d + c);
          d = !0;
          g = 16384 * Math.ceil(c / 16384);
          for (b = Ia(g); c < g; ) C[b + c++] = 0;
          c = b;
          if (!c) throw new H(48);
          C.set(a, c);
        } else (d = !1), (c = a.byteOffset);
        return { yc: c, ke: d };
      },
      nd: function (a, b, c, d, f) {
        if (32768 !== (a.node.mode & 61440)) throw new H(43);
        if (f & 2) return 0;
        I.wc.write(a, b, 0, d, c, !1);
        return 0;
      },
    },
  },
  Lb = null,
  Mb = {},
  Nb = [],
  Ob = 1,
  Pb = null,
  Qb = !0,
  L = {},
  H = null,
  Jb = {};
function M(a, b) {
  a = zb("/", a);
  b = b || {};
  if (!a) return { path: "", node: null };
  var c = { Qd: !0, Hd: 0 },
    d;
  for (d in c) void 0 === b[d] && (b[d] = c[d]);
  if (8 < b.Hd) throw new H(32);
  a = vb(
    a.split("/").filter(function (h) {
      return !!h;
    }),
    !1
  );
  var f = Lb;
  c = "/";
  for (d = 0; d < a.length; d++) {
    var g = d === a.length - 1;
    if (g && b.parent) break;
    f = Kb(f, a[d]);
    c = wb(c + "/" + a[d]);
    f.Wc && (!g || (g && b.Qd)) && (f = f.Wc.root);
    if (!g || b.Bd)
      for (g = 0; 40960 === (f.mode & 61440); )
        if (
          ((f = Rb(c)),
          (c = zb(xb(c), f)),
          (f = M(c, { Hd: b.Hd }).node),
          40 < g++)
        )
          throw new H(32);
  }
  return { path: c, node: f };
}
function Sb(a) {
  for (var b; ; ) {
    if (a === a.parent)
      return (
        (a = a.Nc.Ud), b ? ("/" !== a[a.length - 1] ? a + "/" + b : a + b) : a
      );
    b = b ? a.name + "/" + b : a.name;
    a = a.parent;
  }
}
function Tb(a, b) {
  for (var c = 0, d = 0; d < b.length; d++)
    c = ((c << 5) - c + b.charCodeAt(d)) | 0;
  return ((a + c) >>> 0) % Pb.length;
}
function Ub(a) {
  var b = Tb(a.parent.id, a.name);
  if (Pb[b] === a) Pb[b] = a.Xc;
  else
    for (b = Pb[b]; b; ) {
      if (b.Xc === a) {
        b.Xc = a.Xc;
        break;
      }
      b = b.Xc;
    }
}
function Kb(a, b) {
  var c;
  if ((c = (c = Vb(a, "x")) ? c : a.vc.ad ? 0 : 2)) throw new H(c, a);
  for (c = Pb[Tb(a.id, b)]; c; c = c.Xc) {
    var d = c.name;
    if (c.parent.id === a.id && d === b) return c;
  }
  return a.vc.ad(a, b);
}
function Ib(a, b, c, d) {
  a = new Wb(a, b, c, d);
  b = Tb(a.parent.id, a.name);
  a.Xc = Pb[b];
  return (Pb[b] = a);
}
function J(a) {
  return 16384 === (a & 61440);
}
var Xb = {
  r: 0,
  rs: 1052672,
  "r+": 2,
  w: 577,
  wx: 705,
  xw: 705,
  "w+": 578,
  "wx+": 706,
  "xw+": 706,
  a: 1089,
  ax: 1217,
  xa: 1217,
  "a+": 1090,
  "ax+": 1218,
  "xa+": 1218,
};
function Yb(a) {
  var b = ["r", "w", "rw"][a & 3];
  a & 512 && (b += "w");
  return b;
}
function Vb(a, b) {
  if (Qb) return 0;
  if (-1 === b.indexOf("r") || a.mode & 292) {
    if (
      (-1 !== b.indexOf("w") && !(a.mode & 146)) ||
      (-1 !== b.indexOf("x") && !(a.mode & 73))
    )
      return 2;
  } else return 2;
  return 0;
}
function Zb(a, b) {
  try {
    return Kb(a, b), 20;
  } catch (c) {}
  return Vb(a, "wx");
}
function $b(a, b, c) {
  try {
    var d = Kb(a, b);
  } catch (f) {
    return f.Fc;
  }
  if ((a = Vb(a, "wx"))) return a;
  if (c) {
    if (!J(d.mode)) return 54;
    if (d === d.parent || "/" === Sb(d)) return 10;
  } else if (J(d.mode)) return 31;
  return 0;
}
function ac(a) {
  var b = 4096;
  for (a = a || 0; a <= b; a++) if (!Nb[a]) return a;
  throw new H(33);
}
function bc(a, b) {
  cc ||
    ((cc = function () {}),
    (cc.prototype = {
      object: {
        get: function () {
          return this.node;
        },
        set: function (f) {
          this.node = f;
        },
      },
    }));
  var c = new cc(),
    d;
  for (d in a) c[d] = a[d];
  a = c;
  b = ac(b);
  a.Mc = b;
  return (Nb[b] = a);
}
var Hb = {
  open: function (a) {
    a.wc = Mb[a.node.od].wc;
    a.wc.open && a.wc.open(a);
  },
  Sc: function () {
    throw new H(70);
  },
};
function Cb(a, b) {
  Mb[a] = { wc: b };
}
function dc(a, b) {
  var c = "/" === b,
    d = !b;
  if (c && Lb) throw new H(10);
  if (!c && !d) {
    var f = M(b, { Qd: !1 });
    b = f.path;
    f = f.node;
    if (f.Wc) throw new H(10);
    if (!J(f.mode)) throw new H(54);
  }
  b = { type: a, vf: {}, Ud: b, Ae: [] };
  a = a.Nc(b);
  a.Nc = b;
  b.root = a;
  c ? (Lb = a) : f && ((f.Wc = b), f.Nc && f.Nc.Ae.push(b));
}
function ec(a, b, c) {
  var d = M(a, { parent: !0 }).node;
  a = yb(a);
  if (!a || "." === a || ".." === a) throw new H(28);
  var f = Zb(d, a);
  if (f) throw new H(f);
  if (!d.vc.md) throw new H(63);
  return d.vc.md(d, a, b, c);
}
function N(a, b) {
  return ec(a, ((void 0 !== b ? b : 511) & 1023) | 16384, 0);
}
function fc(a, b, c) {
  "undefined" === typeof c && ((c = b), (b = 438));
  return ec(a, b | 8192, c);
}
function gc(a, b) {
  if (!zb(a)) throw new H(44);
  var c = M(b, { parent: !0 }).node;
  if (!c) throw new H(44);
  b = yb(b);
  var d = Zb(c, b);
  if (d) throw new H(d);
  if (!c.vc.rd) throw new H(63);
  return c.vc.rd(c, b, a);
}
function hc(a) {
  var b = M(a, { parent: !0 }).node,
    c = yb(a),
    d = Kb(b, c),
    f = $b(b, c, !1);
  if (f) throw new H(f);
  if (!b.vc.xd) throw new H(63);
  if (d.Wc) throw new H(10);
  try {
    L.willDeletePath && L.willDeletePath(a);
  } catch (g) {
    t(
      "FS.trackingDelegate['willDeletePath']('" +
        a +
        "') threw an exception: " +
        g.message
    );
  }
  b.vc.xd(b, c);
  Ub(d);
  try {
    if (L.onDeletePath) L.onDeletePath(a);
  } catch (g) {
    t(
      "FS.trackingDelegate['onDeletePath']('" +
        a +
        "') threw an exception: " +
        g.message
    );
  }
}
function Rb(a) {
  a = M(a).node;
  if (!a) throw new H(44);
  if (!a.vc.cd) throw new H(28);
  return zb(Sb(a.parent), a.vc.cd(a));
}
function ic(a, b) {
  a = "string" === typeof a ? M(a, { Bd: !0 }).node : a;
  if (!a.vc.Gc) throw new H(63);
  a.vc.Gc(a, { mode: (b & 4095) | (a.mode & -4096), timestamp: Date.now() });
}
function jc(a, b, c, d) {
  if ("" === a) throw new H(44);
  if ("string" === typeof b) {
    var f = Xb[b];
    if ("undefined" === typeof f) throw Error("Unknown file open mode: " + b);
    b = f;
  }
  c = b & 64 ? (("undefined" === typeof c ? 438 : c) & 4095) | 32768 : 0;
  if ("object" === typeof a) var g = a;
  else {
    a = wb(a);
    try {
      g = M(a, { Bd: !(b & 131072) }).node;
    } catch (h) {}
  }
  f = !1;
  if (b & 64)
    if (g) {
      if (b & 128) throw new H(20);
    } else (g = ec(a, c, 0)), (f = !0);
  if (!g) throw new H(44);
  8192 === (g.mode & 61440) && (b &= -513);
  if (b & 65536 && !J(g.mode)) throw new H(54);
  if (
    !f &&
    (c = g
      ? 40960 === (g.mode & 61440)
        ? 32
        : J(g.mode) && ("r" !== Yb(b) || b & 512)
        ? 31
        : Vb(g, Yb(b))
      : 44)
  )
    throw new H(c);
  if (b & 512) {
    c = g;
    c = "string" === typeof c ? M(c, { Bd: !0 }).node : c;
    if (!c.vc.Gc) throw new H(63);
    if (J(c.mode)) throw new H(31);
    if (32768 !== (c.mode & 61440)) throw new H(28);
    if ((f = Vb(c, "w"))) throw new H(f);
    c.vc.Gc(c, { size: 0, timestamp: Date.now() });
  }
  b &= -131713;
  d = bc(
    {
      node: g,
      path: Sb(g),
      flags: b,
      seekable: !0,
      position: 0,
      wc: g.wc,
      Pe: [],
      error: !1,
    },
    d
  );
  d.wc.open && d.wc.open(d);
  !e.logReadFiles ||
    b & 1 ||
    (kc || (kc = {}),
    a in kc ||
      ((kc[a] = 1), t("FS.trackingDelegate error on read file: " + a)));
  try {
    L.onOpenFile &&
      ((g = 0),
      1 !== (b & 2097155) && (g |= 1),
      0 !== (b & 2097155) && (g |= 2),
      L.onOpenFile(a, g));
  } catch (h) {
    t(
      "FS.trackingDelegate['onOpenFile']('" +
        a +
        "', flags) threw an exception: " +
        h.message
    );
  }
  return d;
}
function lc(a) {
  if (null === a.Mc) throw new H(8);
  a.Cd && (a.Cd = null);
  try {
    a.wc.close && a.wc.close(a);
  } catch (b) {
    throw b;
  } finally {
    Nb[a.Mc] = null;
  }
  a.Mc = null;
}
function mc(a, b, c) {
  if (null === a.Mc) throw new H(8);
  if (!a.seekable || !a.wc.Sc) throw new H(70);
  if (0 != c && 1 != c && 2 != c) throw new H(28);
  a.position = a.wc.Sc(a, b, c);
  a.Pe = [];
}
function nc(a, b, c, d) {
  var f = C;
  if (0 > c || 0 > d) throw new H(28);
  if (null === a.Mc) throw new H(8);
  if (1 === (a.flags & 2097155)) throw new H(8);
  if (J(a.node.mode)) throw new H(31);
  if (!a.wc.read) throw new H(28);
  var g = "undefined" !== typeof d;
  if (!g) d = a.position;
  else if (!a.seekable) throw new H(70);
  b = a.wc.read(a, f, b, c, d);
  g || (a.position += b);
  return b;
}
function oc(a, b, c, d, f, g) {
  if (0 > d || 0 > f) throw new H(28);
  if (null === a.Mc) throw new H(8);
  if (0 === (a.flags & 2097155)) throw new H(8);
  if (J(a.node.mode)) throw new H(31);
  if (!a.wc.write) throw new H(28);
  a.seekable && a.flags & 1024 && mc(a, 0, 2);
  var h = "undefined" !== typeof f;
  if (!h) f = a.position;
  else if (!a.seekable) throw new H(70);
  b = a.wc.write(a, b, c, d, f, g);
  h || (a.position += b);
  try {
    if (a.path && L.onWriteToFile) L.onWriteToFile(a.path);
  } catch (m) {
    t(
      "FS.trackingDelegate['onWriteToFile']('" +
        a.path +
        "') threw an exception: " +
        m.message
    );
  }
  return b;
}
function pc() {
  H ||
    ((H = function (a, b) {
      this.node = b;
      this.Ge = function (c) {
        this.Fc = c;
      };
      this.Ge(a);
      this.message = "FS error";
    }),
    (H.prototype = Error()),
    (H.prototype.constructor = H),
    [44].forEach(function (a) {
      Jb[a] = new H(a);
      Jb[a].stack = "<generic error, no stack>";
    }));
}
var qc;
function rc(a, b) {
  var c = 0;
  a && (c |= 365);
  b && (c |= 146);
  return c;
}
function sc(a, b, c, d) {
  a = wb(("string" === typeof a ? a : Sb(a)) + "/" + b);
  return N(a, rc(c, d));
}
function tc(a, b) {
  a = "string" === typeof a ? a : Sb(a);
  for (b = b.split("/").reverse(); b.length; ) {
    var c = b.pop();
    if (c) {
      var d = wb(a + "/" + c);
      try {
        N(d);
      } catch (f) {}
      a = d;
    }
  }
  return d;
}
function uc(a, b, c, d) {
  a = wb(("string" === typeof a ? a : Sb(a)) + "/" + b);
  c = rc(c, d);
  return ec(a, ((void 0 !== c ? c : 438) & 4095) | 32768, 0);
}
function vc(a, b, c, d, f, g) {
  a = b ? wb(("string" === typeof a ? a : Sb(a)) + "/" + b) : a;
  d = rc(d, f);
  f = ec(a, ((void 0 !== d ? d : 438) & 4095) | 32768, 0);
  if (c) {
    if ("string" === typeof c) {
      a = Array(c.length);
      b = 0;
      for (var h = c.length; b < h; ++b) a[b] = c.charCodeAt(b);
      c = a;
    }
    ic(f, d | 146);
    a = jc(f, "w");
    oc(a, c, 0, c.length, 0, g);
    lc(a);
    ic(f, d);
  }
  return f;
}
function O(a, b, c, d) {
  a = wb(("string" === typeof a ? a : Sb(a)) + "/" + b);
  b = rc(!!c, !!d);
  O.Sd || (O.Sd = 64);
  var f = (O.Sd++ << 8) | 0;
  Cb(f, {
    open: function (g) {
      g.seekable = !1;
    },
    close: function () {
      d && d.buffer && d.buffer.length && d(10);
    },
    read: function (g, h, m, k) {
      for (var p = 0, n = 0; n < k; n++) {
        try {
          var q = c();
        } catch (r) {
          throw new H(29);
        }
        if (void 0 === q && 0 === p) throw new H(6);
        if (null === q || void 0 === q) break;
        p++;
        h[m + n] = q;
      }
      p && (g.node.timestamp = Date.now());
      return p;
    },
    write: function (g, h, m, k) {
      for (var p = 0; p < k; p++)
        try {
          d(h[m + p]);
        } catch (n) {
          throw new H(29);
        }
      k && (g.node.timestamp = Date.now());
      return p;
    },
  });
  return fc(a, b, f);
}
function wc(a, b, c) {
  a = wb(("string" === typeof a ? a : Sb(a)) + "/" + b);
  return gc(c, a);
}
function xc(a) {
  if (a.ye || a.ze || a.link || a.uc) return !0;
  var b = !0;
  if ("undefined" !== typeof XMLHttpRequest)
    throw Error(
      "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread."
    );
  if (ka)
    try {
      (a.uc = Eb(ka(a.url), !0)), (a.zc = a.uc.length);
    } catch (c) {
      b = !1;
    }
  else throw Error("Cannot load without read() or XMLHttpRequest.");
  b || ob(29);
  return b;
}
function yc(a, b, c, d, f) {
  function g() {
    this.Ed = !1;
    this.hd = [];
  }
  g.prototype.get = function (n) {
    if (!(n > this.length - 1 || 0 > n)) {
      var q = n % this.Nd;
      return this.jd((n / this.Nd) | 0)[q];
    }
  };
  g.prototype.Fe = function (n) {
    this.jd = n;
  };
  g.prototype.Kd = function () {
    var n = new XMLHttpRequest();
    n.open("HEAD", c, !1);
    n.send(null);
    if (!((200 <= n.status && 300 > n.status) || 304 === n.status))
      throw Error("Couldn't load " + c + ". Status: " + n.status);
    var q = Number(n.getResponseHeader("Content-length")),
      r,
      l = (r = n.getResponseHeader("Accept-Ranges")) && "bytes" === r;
    n = (r = n.getResponseHeader("Content-Encoding")) && "gzip" === r;
    var v = 1048576;
    l || (v = q);
    var w = this;
    w.Fe(function (z) {
      var D = z * v,
        F = (z + 1) * v - 1;
      F = Math.min(F, q - 1);
      if ("undefined" === typeof w.hd[z]) {
        var sa = w.hd;
        if (D > F)
          throw Error(
            "invalid range (" + D + ", " + F + ") or no bytes requested!"
          );
        if (F > q - 1)
          throw Error("only " + q + " bytes available! programmer error!");
        var K = new XMLHttpRequest();
        K.open("GET", c, !1);
        q !== v && K.setRequestHeader("Range", "bytes=" + D + "-" + F);
        "undefined" != typeof Uint8Array && (K.responseType = "arraybuffer");
        K.overrideMimeType &&
          K.overrideMimeType("text/plain; charset=x-user-defined");
        K.send(null);
        if (!((200 <= K.status && 300 > K.status) || 304 === K.status))
          throw Error("Couldn't load " + c + ". Status: " + K.status);
        D =
          void 0 !== K.response
            ? new Uint8Array(K.response || [])
            : Eb(K.responseText || "", !0);
        sa[z] = D;
      }
      if ("undefined" === typeof w.hd[z]) throw Error("doXHR failed!");
      return w.hd[z];
    });
    if (n || !q)
      (v = q = 1),
        (v = q = this.jd(0).length),
        ma(
          "LazyFiles on gzip forces download of the whole file when length is accessed"
        );
    this.ie = q;
    this.he = v;
    this.Ed = !0;
  };
  if ("undefined" !== typeof XMLHttpRequest) {
    if (!ia)
      throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
    var h = new g();
    Object.defineProperties(h, {
      length: {
        get: function () {
          this.Ed || this.Kd();
          return this.ie;
        },
      },
      Nd: {
        get: function () {
          this.Ed || this.Kd();
          return this.he;
        },
      },
    });
    var m = void 0;
  } else (m = c), (h = void 0);
  var k = uc(a, b, d, f);
  h ? (k.uc = h) : m && ((k.uc = null), (k.url = m));
  Object.defineProperties(k, {
    zc: {
      get: function () {
        return this.uc.length;
      },
    },
  });
  var p = {};
  Object.keys(k.wc).forEach(function (n) {
    var q = k.wc[n];
    p[n] = function () {
      if (!xc(k)) throw new H(29);
      return q.apply(null, arguments);
    };
  });
  p.read = function (n, q, r, l, v) {
    if (!xc(k)) throw new H(29);
    n = n.node.uc;
    if (v >= n.length) return 0;
    l = Math.min(n.length - v, l);
    if (n.slice) for (var w = 0; w < l; w++) q[r + w] = n[v + w];
    else for (w = 0; w < l; w++) q[r + w] = n.get(v + w);
    return l;
  };
  k.wc = p;
  return k;
}
function zc(a, b, c, d, f, g, h, m, k, p) {
  function n(l) {
    function v(z) {
      p && p();
      m || vc(a, b, z, d, f, k);
      g && g();
      eb(r);
    }
    var w = !1;
    e.preloadPlugins.forEach(function (z) {
      !w &&
        z.canHandle(q) &&
        (z.handle(l, q, v, function () {
          h && h();
          eb(r);
        }),
        (w = !0));
    });
    w || v(l);
  }
  Ac.mf();
  var q = b ? zb(wb(a + "/" + b)) : a,
    r = "cp " + q;
  db(r);
  "string" == typeof c
    ? Ac.cf(
        c,
        function (l) {
          n(l);
        },
        h
      )
    : n(c);
}
var P = {},
  cc,
  kc,
  Bc = {},
  Cc = void 0;
function Dc() {
  Cc += 4;
  return B[(Cc - 4) >> 2];
}
function Ec(a) {
  a = Nb[a];
  if (!a) throw new H(8);
  return a;
}
var Fc = {};
function Gc(a) {
  for (; a.length; ) {
    var b = a.pop();
    a.pop()(b);
  }
}
function Hc(a) {
  return this.fromWireType(E[a >> 2]);
}
var Ic = {},
  Jc = {},
  Kc = {};
function Lc(a) {
  if (void 0 === a) return "_unknown";
  a = a.replace(/[^a-zA-Z0-9_]/g, "$");
  var b = a.charCodeAt(0);
  return 48 <= b && 57 >= b ? "_" + a : a;
}
function Mc(a, b) {
  a = Lc(a);
  return new Function(
    "body",
    "return function " +
      a +
      '() {\n    "use strict";    return body.apply(this, arguments);\n};\n'
  )(b);
}
function Nc(a) {
  var b = Error,
    c = Mc(a, function (d) {
      this.name = a;
      this.message = d;
      d = Error(d).stack;
      void 0 !== d &&
        (this.stack =
          this.toString() + "\n" + d.replace(/^Error(:[^\n]*)?\n/, ""));
    });
  c.prototype = Object.create(b.prototype);
  c.prototype.constructor = c;
  c.prototype.toString = function () {
    return void 0 === this.message
      ? this.name
      : this.name + ": " + this.message;
  };
  return c;
}
var Oc = void 0;
function Pc(a) {
  throw new Oc(a);
}
function Qc(a, b, c) {
  function d(m) {
    m = c(m);
    m.length !== a.length && Pc("Mismatched type converter count");
    for (var k = 0; k < a.length; ++k) Q(a[k], m[k]);
  }
  a.forEach(function (m) {
    Kc[m] = b;
  });
  var f = Array(b.length),
    g = [],
    h = 0;
  b.forEach(function (m, k) {
    Jc.hasOwnProperty(m)
      ? (f[k] = Jc[m])
      : (g.push(m),
        Ic.hasOwnProperty(m) || (Ic[m] = []),
        Ic[m].push(function () {
          f[k] = Jc[m];
          ++h;
          h === g.length && d(f);
        }));
  });
  0 === g.length && d(f);
}
function Rc(a) {
  switch (a) {
    case 1:
      return 0;
    case 2:
      return 1;
    case 4:
      return 2;
    case 8:
      return 3;
    default:
      throw new TypeError("Unknown type size: " + a);
  }
}
var Sc = void 0;
function R(a) {
  for (var b = ""; A[a]; ) b += Sc[A[a++]];
  return b;
}
var Tc = void 0;
function S(a) {
  throw new Tc(a);
}
function Q(a, b, c) {
  c = c || {};
  if (!("argPackAdvance" in b))
    throw new TypeError(
      "registerType registeredInstance requires argPackAdvance"
    );
  var d = b.name;
  a || S('type "' + d + '" must have a positive integer typeid pointer');
  if (Jc.hasOwnProperty(a)) {
    if (c.we) return;
    S("Cannot register type '" + d + "' twice");
  }
  Jc[a] = b;
  delete Kc[a];
  Ic.hasOwnProperty(a) &&
    ((b = Ic[a]),
    delete Ic[a],
    b.forEach(function (f) {
      f();
    }));
}
function Uc(a) {
  return {
    count: a.count,
    Vc: a.Vc,
    bd: a.bd,
    yc: a.yc,
    Ac: a.Ac,
    Hc: a.Hc,
    Jc: a.Jc,
  };
}
function Vc(a) {
  S(a.tc.Ac.xc.name + " instance already deleted");
}
var Wc = !1;
function Xc() {}
function Yc(a) {
  --a.count.value;
  0 === a.count.value && (a.Hc ? a.Jc.Oc(a.Hc) : a.Ac.xc.Oc(a.yc));
}
function Zc(a) {
  if ("undefined" === typeof FinalizationGroup)
    return (
      (Zc = function (b) {
        return b;
      }),
      a
    );
  Wc = new FinalizationGroup(function (b) {
    for (var c = b.next(); !c.done; c = b.next())
      (c = c.value),
        c.yc ? Yc(c) : console.warn("object already deleted: " + c.yc);
  });
  Zc = function (b) {
    Wc.register(b, b.tc, b.tc);
    return b;
  };
  Xc = function (b) {
    Wc.unregister(b.tc);
  };
  return Zc(a);
}
var $c = void 0,
  ad = [];
function bd() {
  for (; ad.length; ) {
    var a = ad.pop();
    a.tc.Vc = !1;
    a["delete"]();
  }
}
function cd() {}
var dd = {};
function ed(a, b, c) {
  if (void 0 === a[b].Dc) {
    var d = a[b];
    a[b] = function () {
      a[b].Dc.hasOwnProperty(arguments.length) ||
        S(
          "Function '" +
            c +
            "' called with an invalid number of arguments (" +
            arguments.length +
            ") - expects one of (" +
            a[b].Dc +
            ")!"
        );
      return a[b].Dc[arguments.length].apply(this, arguments);
    };
    a[b].Dc = [];
    a[b].Dc[d.gd] = d;
  }
}
function fd(a, b, c) {
  e.hasOwnProperty(a)
    ? ((void 0 === c || (void 0 !== e[a].Dc && void 0 !== e[a].Dc[c])) &&
        S("Cannot register public name '" + a + "' twice"),
      ed(e, a, a),
      e.hasOwnProperty(c) &&
        S(
          "Cannot register multiple overloads of a function with the same number of arguments (" +
            c +
            ")!"
        ),
      (e[a].Dc[c] = b))
    : ((e[a] = b), void 0 !== c && (e[a].uf = c));
}
function gd(a, b, c, d, f, g, h, m) {
  this.name = a;
  this.constructor = b;
  this.Qc = c;
  this.Oc = d;
  this.Kc = f;
  this.se = g;
  this.fd = h;
  this.oe = m;
  this.Ce = [];
}
function hd(a, b, c) {
  for (; b !== c; )
    b.fd ||
      S(
        "Expected null or instance of " +
          c.name +
          ", got an instance of " +
          b.name
      ),
      (a = b.fd(a)),
      (b = b.Kc);
  return a;
}
function id(a, b) {
  if (null === b) return this.Dd && S("null is not a valid " + this.name), 0;
  b.tc || S('Cannot pass "' + jd(b) + '" as a ' + this.name);
  b.tc.yc || S("Cannot pass deleted object as a pointer of type " + this.name);
  return hd(b.tc.yc, b.tc.Ac.xc, this.xc);
}
function kd(a, b) {
  if (null === b) {
    this.Dd && S("null is not a valid " + this.name);
    if (this.ld) {
      var c = this.Gd();
      null !== a && a.push(this.Oc, c);
      return c;
    }
    return 0;
  }
  b.tc || S('Cannot pass "' + jd(b) + '" as a ' + this.name);
  b.tc.yc || S("Cannot pass deleted object as a pointer of type " + this.name);
  !this.kd &&
    b.tc.Ac.kd &&
    S(
      "Cannot convert argument of type " +
        (b.tc.Jc ? b.tc.Jc.name : b.tc.Ac.name) +
        " to parameter type " +
        this.name
    );
  c = hd(b.tc.yc, b.tc.Ac.xc, this.xc);
  if (this.ld)
    switch (
      (void 0 === b.tc.Hc &&
        S("Passing raw pointer to smart pointer is illegal"),
      this.Ke)
    ) {
      case 0:
        b.tc.Jc === this
          ? (c = b.tc.Hc)
          : S(
              "Cannot convert argument of type " +
                (b.tc.Jc ? b.tc.Jc.name : b.tc.Ac.name) +
                " to parameter type " +
                this.name
            );
        break;
      case 1:
        c = b.tc.Hc;
        break;
      case 2:
        if (b.tc.Jc === this) c = b.tc.Hc;
        else {
          var d = b.clone();
          c = this.De(
            c,
            ld(function () {
              d["delete"]();
            })
          );
          null !== a && a.push(this.Oc, c);
        }
        break;
      default:
        S("Unsupporting sharing policy");
    }
  return c;
}
function md(a, b) {
  if (null === b) return this.Dd && S("null is not a valid " + this.name), 0;
  b.tc || S('Cannot pass "' + jd(b) + '" as a ' + this.name);
  b.tc.yc || S("Cannot pass deleted object as a pointer of type " + this.name);
  b.tc.Ac.kd &&
    S(
      "Cannot convert argument of type " +
        b.tc.Ac.name +
        " to parameter type " +
        this.name
    );
  return hd(b.tc.yc, b.tc.Ac.xc, this.xc);
}
function nd(a, b, c) {
  if (b === c) return a;
  if (void 0 === c.Kc) return null;
  a = nd(a, b, c.Kc);
  return null === a ? null : c.oe(a);
}
var od = {};
function pd(a, b) {
  for (void 0 === b && S("ptr should not be undefined"); a.Kc; )
    (b = a.fd(b)), (a = a.Kc);
  return od[b];
}
function qd(a, b) {
  (b.Ac && b.yc) || Pc("makeClassHandle requires ptr and ptrType");
  !!b.Jc !== !!b.Hc && Pc("Both smartPtrType and smartPtr must be specified");
  b.count = { value: 1 };
  return Zc(Object.create(a, { tc: { value: b } }));
}
function rd(a, b, c, d) {
  this.name = a;
  this.xc = b;
  this.Dd = c;
  this.kd = d;
  this.ld = !1;
  this.Oc = this.De = this.Gd = this.Wd = this.Ke = this.Be = void 0;
  void 0 !== b.Kc
    ? (this.toWireType = kd)
    : ((this.toWireType = d ? id : md), (this.Ic = null));
}
function sd(a, b, c) {
  e.hasOwnProperty(a) || Pc("Replacing nonexistant public symbol");
  void 0 !== e[a].Dc && void 0 !== c
    ? (e[a].Dc[c] = b)
    : ((e[a] = b), (e[a].gd = c));
}
function T(a, b) {
  a = R(a);
  var c = e["dynCall_" + a];
  for (var d = [], f = 1; f < a.length; ++f) d.push("a" + f);
  f = "return function dynCall_" + (a + "_" + b) + "(" + d.join(", ") + ") {\n";
  f +=
    "    return dynCall(rawFunction" +
    (d.length ? ", " : "") +
    d.join(", ") +
    ");\n";
  c = new Function("dynCall", "rawFunction", f + "};\n")(c, b);
  "function" !== typeof c &&
    S("unknown function pointer with signature " + a + ": " + b);
  return c;
}
var td = void 0;
function ud(a) {
  a = vd(a);
  var b = R(a);
  U(a);
  return b;
}
function wd(a, b) {
  function c(g) {
    f[g] || Jc[g] || (Kc[g] ? Kc[g].forEach(c) : (d.push(g), (f[g] = !0)));
  }
  var d = [],
    f = {};
  b.forEach(c);
  throw new td(a + ": " + d.map(ud).join([", "]));
}
function xd(a, b) {
  for (var c = [], d = 0; d < a; d++) c.push(B[(b >> 2) + d]);
  return c;
}
function yd(a) {
  var b = Function;
  if (!(b instanceof Function))
    throw new TypeError(
      "new_ called with constructor type " +
        typeof b +
        " which is not a function"
    );
  var c = Mc(b.name || "unknownFunctionName", function () {});
  c.prototype = b.prototype;
  c = new c();
  a = b.apply(c, a);
  return a instanceof Object ? a : c;
}
function zd(a, b, c, d, f) {
  var g = b.length;
  2 > g &&
    S(
      "argTypes array size mismatch! Must at least get return value and 'this' types!"
    );
  var h = null !== b[1] && null !== c,
    m = !1;
  for (c = 1; c < b.length; ++c)
    if (null !== b[c] && void 0 === b[c].Ic) {
      m = !0;
      break;
    }
  var k = "void" !== b[0].name,
    p = "",
    n = "";
  for (c = 0; c < g - 2; ++c)
    (p += (0 !== c ? ", " : "") + "arg" + c),
      (n += (0 !== c ? ", " : "") + "arg" + c + "Wired");
  a =
    "return function " +
    Lc(a) +
    "(" +
    p +
    ") {\nif (arguments.length !== " +
    (g - 2) +
    ") {\nthrowBindingError('function " +
    a +
    " called with ' + arguments.length + ' arguments, expected " +
    (g - 2) +
    " args!');\n}\n";
  m && (a += "var destructors = [];\n");
  var q = m ? "destructors" : "null";
  p = "throwBindingError invoker fn runDestructors retType classParam".split(
    " "
  );
  d = [S, d, f, Gc, b[0], b[1]];
  h && (a += "var thisWired = classParam.toWireType(" + q + ", this);\n");
  for (c = 0; c < g - 2; ++c)
    (a +=
      "var arg" +
      c +
      "Wired = argType" +
      c +
      ".toWireType(" +
      q +
      ", arg" +
      c +
      "); // " +
      b[c + 2].name +
      "\n"),
      p.push("argType" + c),
      d.push(b[c + 2]);
  h && (n = "thisWired" + (0 < n.length ? ", " : "") + n);
  a +=
    (k ? "var rv = " : "") +
    "invoker(fn" +
    (0 < n.length ? ", " : "") +
    n +
    ");\n";
  if (m) a += "runDestructors(destructors);\n";
  else
    for (c = h ? 1 : 2; c < b.length; ++c)
      (g = 1 === c ? "thisWired" : "arg" + (c - 2) + "Wired"),
        null !== b[c].Ic &&
          ((a += g + "_dtor(" + g + "); // " + b[c].name + "\n"),
          p.push(g + "_dtor"),
          d.push(b[c].Ic));
  k && (a += "var ret = retType.fromWireType(rv);\nreturn ret;\n");
  p.push(a + "}\n");
  return yd(p).apply(null, d);
}
function Ad(a, b, c) {
  a instanceof Object || S(c + ' with invalid "this": ' + a);
  a instanceof b.xc.constructor ||
    S(c + ' incompatible with "this" of type ' + a.constructor.name);
  a.tc.yc ||
    S("cannot call emscripten binding method " + c + " on deleted object");
  return hd(a.tc.yc, a.tc.Ac.xc, b.xc);
}
var Bd = [],
  V = [{}, { value: void 0 }, { value: null }, { value: !0 }, { value: !1 }];
function Cd(a) {
  4 < a && 0 === --V[a].Tc && ((V[a] = void 0), Bd.push(a));
}
function ld(a) {
  switch (a) {
    case void 0:
      return 1;
    case null:
      return 2;
    case !0:
      return 3;
    case !1:
      return 4;
    default:
      var b = Bd.length ? Bd.pop() : V.length;
      V[b] = { Tc: 1, value: a };
      return b;
  }
}
function Dd(a, b, c) {
  switch (b) {
    case 0:
      return function (d) {
        return this.fromWireType((c ? C : A)[d]);
      };
    case 1:
      return function (d) {
        return this.fromWireType((c ? Ba : Aa)[d >> 1]);
      };
    case 2:
      return function (d) {
        return this.fromWireType((c ? B : E)[d >> 2]);
      };
    default:
      throw new TypeError("Unknown integer type: " + a);
  }
}
function Ed(a, b) {
  var c = Jc[a];
  void 0 === c && S(b + " has unknown type " + ud(a));
  return c;
}
function jd(a) {
  if (null === a) return "null";
  var b = typeof a;
  return "object" === b || "array" === b || "function" === b
    ? a.toString()
    : "" + a;
}
function Fd(a, b) {
  switch (b) {
    case 2:
      return function (c) {
        return this.fromWireType(Ma[c >> 2]);
      };
    case 3:
      return function (c) {
        return this.fromWireType(Na[c >> 3]);
      };
    default:
      throw new TypeError("Unknown float type: " + a);
  }
}
function Gd(a, b, c) {
  switch (b) {
    case 0:
      return c
        ? function (d) {
            return C[d];
          }
        : function (d) {
            return A[d];
          };
    case 1:
      return c
        ? function (d) {
            return Ba[d >> 1];
          }
        : function (d) {
            return Aa[d >> 1];
          };
    case 2:
      return c
        ? function (d) {
            return B[d >> 2];
          }
        : function (d) {
            return E[d >> 2];
          };
    default:
      throw new TypeError("Unknown integer type: " + a);
  }
}
function Hd(a) {
  a || S("Cannot use deleted val. handle = " + a);
  return V[a].value;
}
function W(a) {
  a = eval(va(a));
  if (null == a) return 0;
  a += "";
  var b = xa(a);
  if (!W.bufferSize || W.bufferSize < b + 1)
    W.bufferSize && U(W.buffer),
      (W.bufferSize = b + 1),
      (W.buffer = Ia(W.bufferSize));
  wa(a, A, W.buffer, W.bufferSize);
  return W.buffer;
}
var Id = {};
function Jd() {
  if (!Kd) {
    var a = {
        USER: "web_user",
        LOGNAME: "web_user",
        PATH: "/",
        PWD: "/",
        HOME: "/home/web_user",
        LANG:
          (
            ("object" === typeof navigator &&
              navigator.languages &&
              navigator.languages[0]) ||
            "C"
          ).replace("-", "_") + ".UTF-8",
        _: ea || "./this.program",
      },
      b;
    for (b in Id) a[b] = Id[b];
    var c = [];
    for (b in a) c.push(b + "=" + a[b]);
    Kd = c;
  }
  return Kd;
}
var Kd;
function Ld() {
  function a(g) {
    return (g = g.toTimeString().match(/\(([A-Za-z ]+)\)$/)) ? g[1] : "GMT";
  }
  if (!Md) {
    Md = !0;
    B[Nd() >> 2] = 60 * new Date().getTimezoneOffset();
    var b = new Date().getFullYear(),
      c = new Date(b, 0, 1);
    b = new Date(b, 6, 1);
    B[Od() >> 2] = Number(c.getTimezoneOffset() != b.getTimezoneOffset());
    var d = a(c),
      f = a(b);
    d = Ha(d);
    f = Ha(f);
    b.getTimezoneOffset() < c.getTimezoneOffset()
      ? ((B[Pd() >> 2] = d), (B[(Pd() + 4) >> 2] = f))
      : ((B[Pd() >> 2] = f), (B[(Pd() + 4) >> 2] = d));
  }
}
var Md;
function Qd(a) {
  return 0 === a % 4 && (0 !== a % 100 || 0 === a % 400);
}
function Rd(a, b) {
  for (var c = 0, d = 0; d <= b; c += a[d++]);
  return c;
}
var Sd = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  Td = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Ud(a, b) {
  for (a = new Date(a.getTime()); 0 < b; ) {
    var c = a.getMonth(),
      d = (Qd(a.getFullYear()) ? Sd : Td)[c];
    if (b > d - a.getDate())
      (b -= d - a.getDate() + 1),
        a.setDate(1),
        11 > c
          ? a.setMonth(c + 1)
          : (a.setMonth(0), a.setFullYear(a.getFullYear() + 1));
    else {
      a.setDate(a.getDate() + b);
      break;
    }
  }
  return a;
}
function Vd(a, b, c, d) {
  function f(l, v, w) {
    for (l = "number" === typeof l ? l.toString() : l || ""; l.length < v; )
      l = w[0] + l;
    return l;
  }
  function g(l, v) {
    return f(l, v, "0");
  }
  function h(l, v) {
    function w(D) {
      return 0 > D ? -1 : 0 < D ? 1 : 0;
    }
    var z;
    0 === (z = w(l.getFullYear() - v.getFullYear())) &&
      0 === (z = w(l.getMonth() - v.getMonth())) &&
      (z = w(l.getDate() - v.getDate()));
    return z;
  }
  function m(l) {
    switch (l.getDay()) {
      case 0:
        return new Date(l.getFullYear() - 1, 11, 29);
      case 1:
        return l;
      case 2:
        return new Date(l.getFullYear(), 0, 3);
      case 3:
        return new Date(l.getFullYear(), 0, 2);
      case 4:
        return new Date(l.getFullYear(), 0, 1);
      case 5:
        return new Date(l.getFullYear() - 1, 11, 31);
      case 6:
        return new Date(l.getFullYear() - 1, 11, 30);
    }
  }
  function k(l) {
    l = Ud(new Date(l.Ec + 1900, 0, 1), l.vd);
    var v = new Date(l.getFullYear() + 1, 0, 4),
      w = m(new Date(l.getFullYear(), 0, 4));
    v = m(v);
    return 0 >= h(w, l)
      ? 0 >= h(v, l)
        ? l.getFullYear() + 1
        : l.getFullYear()
      : l.getFullYear() - 1;
  }
  var p = B[(d + 40) >> 2];
  d = {
    Ne: B[d >> 2],
    Me: B[(d + 4) >> 2],
    td: B[(d + 8) >> 2],
    ed: B[(d + 12) >> 2],
    Zc: B[(d + 16) >> 2],
    Ec: B[(d + 20) >> 2],
    ud: B[(d + 24) >> 2],
    vd: B[(d + 28) >> 2],
    xf: B[(d + 32) >> 2],
    Le: B[(d + 36) >> 2],
    Oe: p ? va(p) : "",
  };
  c = va(c);
  p = {
    "%c": "%a %b %d %H:%M:%S %Y",
    "%D": "%m/%d/%y",
    "%F": "%Y-%m-%d",
    "%h": "%b",
    "%r": "%I:%M:%S %p",
    "%R": "%H:%M",
    "%T": "%H:%M:%S",
    "%x": "%m/%d/%y",
    "%X": "%H:%M:%S",
    "%Ec": "%c",
    "%EC": "%C",
    "%Ex": "%m/%d/%y",
    "%EX": "%H:%M:%S",
    "%Ey": "%y",
    "%EY": "%Y",
    "%Od": "%d",
    "%Oe": "%e",
    "%OH": "%H",
    "%OI": "%I",
    "%Om": "%m",
    "%OM": "%M",
    "%OS": "%S",
    "%Ou": "%u",
    "%OU": "%U",
    "%OV": "%V",
    "%Ow": "%w",
    "%OW": "%W",
    "%Oy": "%y",
  };
  for (var n in p) c = c.replace(new RegExp(n, "g"), p[n]);
  var q = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    r =
      "January February March April May June July August September October November December".split(
        " "
      );
  p = {
    "%a": function (l) {
      return q[l.ud].substring(0, 3);
    },
    "%A": function (l) {
      return q[l.ud];
    },
    "%b": function (l) {
      return r[l.Zc].substring(0, 3);
    },
    "%B": function (l) {
      return r[l.Zc];
    },
    "%C": function (l) {
      return g(((l.Ec + 1900) / 100) | 0, 2);
    },
    "%d": function (l) {
      return g(l.ed, 2);
    },
    "%e": function (l) {
      return f(l.ed, 2, " ");
    },
    "%g": function (l) {
      return k(l).toString().substring(2);
    },
    "%G": function (l) {
      return k(l);
    },
    "%H": function (l) {
      return g(l.td, 2);
    },
    "%I": function (l) {
      l = l.td;
      0 == l ? (l = 12) : 12 < l && (l -= 12);
      return g(l, 2);
    },
    "%j": function (l) {
      return g(l.ed + Rd(Qd(l.Ec + 1900) ? Sd : Td, l.Zc - 1), 3);
    },
    "%m": function (l) {
      return g(l.Zc + 1, 2);
    },
    "%M": function (l) {
      return g(l.Me, 2);
    },
    "%n": function () {
      return "\n";
    },
    "%p": function (l) {
      return 0 <= l.td && 12 > l.td ? "AM" : "PM";
    },
    "%S": function (l) {
      return g(l.Ne, 2);
    },
    "%t": function () {
      return "\t";
    },
    "%u": function (l) {
      return l.ud || 7;
    },
    "%U": function (l) {
      var v = new Date(l.Ec + 1900, 0, 1),
        w = 0 === v.getDay() ? v : Ud(v, 7 - v.getDay());
      l = new Date(l.Ec + 1900, l.Zc, l.ed);
      return 0 > h(w, l)
        ? g(
            Math.ceil(
              (31 -
                w.getDate() +
                (Rd(Qd(l.getFullYear()) ? Sd : Td, l.getMonth() - 1) - 31) +
                l.getDate()) /
                7
            ),
            2
          )
        : 0 === h(w, v)
        ? "01"
        : "00";
    },
    "%V": function (l) {
      var v = new Date(l.Ec + 1901, 0, 4),
        w = m(new Date(l.Ec + 1900, 0, 4));
      v = m(v);
      var z = Ud(new Date(l.Ec + 1900, 0, 1), l.vd);
      return 0 > h(z, w)
        ? "53"
        : 0 >= h(v, z)
        ? "01"
        : g(
            Math.ceil(
              (w.getFullYear() < l.Ec + 1900
                ? l.vd + 32 - w.getDate()
                : l.vd + 1 - w.getDate()) / 7
            ),
            2
          );
    },
    "%w": function (l) {
      return l.ud;
    },
    "%W": function (l) {
      var v = new Date(l.Ec, 0, 1),
        w =
          1 === v.getDay()
            ? v
            : Ud(v, 0 === v.getDay() ? 1 : 7 - v.getDay() + 1);
      l = new Date(l.Ec + 1900, l.Zc, l.ed);
      return 0 > h(w, l)
        ? g(
            Math.ceil(
              (31 -
                w.getDate() +
                (Rd(Qd(l.getFullYear()) ? Sd : Td, l.getMonth() - 1) - 31) +
                l.getDate()) /
                7
            ),
            2
          )
        : 0 === h(w, v)
        ? "01"
        : "00";
    },
    "%y": function (l) {
      return (l.Ec + 1900).toString().substring(2);
    },
    "%Y": function (l) {
      return l.Ec + 1900;
    },
    "%z": function (l) {
      l = l.Le;
      var v = 0 <= l;
      l = Math.abs(l) / 60;
      return (
        (v ? "+" : "-") + String("0000" + ((l / 60) * 100 + (l % 60))).slice(-4)
      );
    },
    "%Z": function (l) {
      return l.Oe;
    },
    "%%": function () {
      return "%";
    },
  };
  for (n in p)
    0 <= c.indexOf(n) && (c = c.replace(new RegExp(n, "g"), p[n](d)));
  n = Eb(c, !1);
  if (n.length > b) return 0;
  C.set(n, a);
  return n.length - 1;
}
function Wb(a, b, c, d) {
  a || (a = this);
  this.parent = a;
  this.Nc = a.Nc;
  this.Wc = null;
  this.id = Ob++;
  this.name = b;
  this.mode = c;
  this.vc = {};
  this.wc = {};
  this.od = d;
}
Object.defineProperties(Wb.prototype, {
  read: {
    get: function () {
      return 365 === (this.mode & 365);
    },
    set: function (a) {
      a ? (this.mode |= 365) : (this.mode &= -366);
    },
  },
  write: {
    get: function () {
      return 146 === (this.mode & 146);
    },
    set: function (a) {
      a ? (this.mode |= 146) : (this.mode &= -147);
    },
  },
  ze: {
    get: function () {
      return J(this.mode);
    },
  },
  ye: {
    get: function () {
      return 8192 === (this.mode & 61440);
    },
  },
});
pc();
Pb = Array(4096);
dc(I, "/");
N("/tmp");
N("/home");
N("/home/web_user");
(function () {
  N("/dev");
  Cb(259, {
    read: function () {
      return 0;
    },
    write: function (c, d, f, g) {
      return g;
    },
  });
  fc("/dev/null", 259);
  Bb(1280, Fb);
  Bb(1536, Gb);
  fc("/dev/tty", 1280);
  fc("/dev/tty1", 1536);
  if (
    "object" === typeof crypto &&
    "function" === typeof crypto.getRandomValues
  ) {
    var a = new Uint8Array(1);
    var b = function () {
      crypto.getRandomValues(a);
      return a[0];
    };
  }
  b ||
    (b = function () {
      y("random_device");
    });
  O("/dev", "random", b);
  O("/dev", "urandom", b);
  N("/dev/shm");
  N("/dev/shm/tmp");
})();
N("/proc");
N("/proc/self");
N("/proc/self/fd");
dc(
  {
    Nc: function () {
      var a = Ib("/proc/self", "fd", 16895, 73);
      a.vc = {
        ad: function (b, c) {
          var d = Nb[+c];
          if (!d) throw new H(8);
          b = {
            parent: null,
            Nc: { Ud: "fake" },
            vc: {
              cd: function () {
                return d.path;
              },
            },
          };
          return (b.parent = b);
        },
      };
      return a;
    },
  },
  "/proc/self/fd"
);
var Ac;
e.FS_createFolder = sc;
e.FS_createPath = tc;
e.FS_createDataFile = vc;
e.FS_createPreloadedFile = zc;
e.FS_createLazyFile = yc;
e.FS_createLink = wc;
e.FS_createDevice = O;
e.FS_unlink = hc;
Oc = e.InternalError = Nc("InternalError");
for (var Wd = Array(256), Xd = 0; 256 > Xd; ++Xd)
  Wd[Xd] = String.fromCharCode(Xd);
Sc = Wd;
Tc = e.BindingError = Nc("BindingError");
cd.prototype.isAliasOf = function (a) {
  if (!(this instanceof cd && a instanceof cd)) return !1;
  var b = this.tc.Ac.xc,
    c = this.tc.yc,
    d = a.tc.Ac.xc;
  for (a = a.tc.yc; b.Kc; ) (c = b.fd(c)), (b = b.Kc);
  for (; d.Kc; ) (a = d.fd(a)), (d = d.Kc);
  return b === d && c === a;
};
cd.prototype.clone = function () {
  this.tc.yc || Vc(this);
  if (this.tc.bd) return (this.tc.count.value += 1), this;
  var a = Zc(
    Object.create(Object.getPrototypeOf(this), { tc: { value: Uc(this.tc) } })
  );
  a.tc.count.value += 1;
  a.tc.Vc = !1;
  return a;
};
cd.prototype["delete"] = function () {
  this.tc.yc || Vc(this);
  this.tc.Vc && !this.tc.bd && S("Object already scheduled for deletion");
  Xc(this);
  Yc(this.tc);
  this.tc.bd || ((this.tc.Hc = void 0), (this.tc.yc = void 0));
};
cd.prototype.isDeleted = function () {
  return !this.tc.yc;
};
cd.prototype.deleteLater = function () {
  this.tc.yc || Vc(this);
  this.tc.Vc && !this.tc.bd && S("Object already scheduled for deletion");
  ad.push(this);
  1 === ad.length && $c && $c(bd);
  this.tc.Vc = !0;
  return this;
};
rd.prototype.te = function (a) {
  this.Wd && (a = this.Wd(a));
  return a;
};
rd.prototype.$c = function (a) {
  this.Oc && this.Oc(a);
};
rd.prototype.argPackAdvance = 8;
rd.prototype.readValueFromPointer = Hc;
rd.prototype.deleteObject = function (a) {
  if (null !== a) a["delete"]();
};
rd.prototype.fromWireType = function (a) {
  function b() {
    return this.ld
      ? qd(this.xc.Qc, { Ac: this.Be, yc: c, Jc: this, Hc: a })
      : qd(this.xc.Qc, { Ac: this, yc: a });
  }
  var c = this.te(a);
  if (!c) return this.$c(a), null;
  var d = pd(this.xc, c);
  if (void 0 !== d) {
    if (0 === d.tc.count.value) return (d.tc.yc = c), (d.tc.Hc = a), d.clone();
    d = d.clone();
    this.$c(a);
    return d;
  }
  d = this.xc.se(c);
  d = dd[d];
  if (!d) return b.call(this);
  d = this.kd ? d.ne : d.pointerType;
  var f = nd(c, this.xc, d.xc);
  return null === f
    ? b.call(this)
    : this.ld
    ? qd(d.xc.Qc, { Ac: d, yc: f, Jc: this, Hc: a })
    : qd(d.xc.Qc, { Ac: d, yc: f });
};
e.getInheritedInstanceCount = function () {
  return Object.keys(od).length;
};
e.getLiveInheritedInstances = function () {
  var a = [],
    b;
  for (b in od) od.hasOwnProperty(b) && a.push(od[b]);
  return a;
};
e.flushPendingDeletes = bd;
e.setDelayFunction = function (a) {
  $c = a;
  ad.length && $c && $c(bd);
};
td = e.UnboundTypeError = Nc("UnboundTypeError");
e.count_emval_handles = function () {
  for (var a = 0, b = 5; b < V.length; ++b) void 0 !== V[b] && ++a;
  return a;
};
e.get_first_emval = function () {
  for (var a = 5; a < V.length; ++a) if (void 0 !== V[a]) return V[a];
  return null;
};
function Eb(a, b) {
  var c = Array(xa(a) + 1);
  a = wa(a, c, 0, c.length);
  b && (c.length = a);
  return c;
}
var De = {
  Wa: function (a, b) {
    return qb(a, b);
  },
  b: function (a) {
    return Ia(a);
  },
  t: function (a) {
    var b = G[a];
    b && !b.Ld && ((b.Ld = !0), tb.wd--);
    b && (b.pd = !1);
    rb.push(a);
    (b = sb(a)) && G[b].Tc++;
    return a;
  },
  v: function () {
    X(0);
    var a = rb.pop();
    if (a) {
      if ((a = sb(a))) {
        var b = G[a];
        b.Tc--;
        0 !== b.Tc ||
          b.pd ||
          (b.$c && e.dynCall_ii(b.$c, a), delete G[a], U(a));
      }
      ub = 0;
    }
  },
  d: function () {
    var a = ub;
    if (!a) return (x = 0);
    var b = G[a],
      c = b.type;
    if (!c) return (x = 0), a | 0;
    var d = Array.prototype.slice.call(arguments);
    ___cxa_is_pointer_type(c);
    B[113664] = a;
    a = 454656;
    for (var f = 0; f < d.length; f++)
      if (d[f] && ___cxa_can_catch(d[f], c, a))
        return (a = B[a >> 2]), b.yd.push(a), (x = d[f]), a | 0;
    a = B[a >> 2];
    x = c;
    return a | 0;
  },
  j: function () {
    var a = ub;
    if (!a) return (x = 0);
    var b = G[a],
      c = b.type;
    if (!c) return (x = 0), a | 0;
    var d = Array.prototype.slice.call(arguments);
    ___cxa_is_pointer_type(c);
    B[113664] = a;
    a = 454656;
    for (var f = 0; f < d.length; f++)
      if (d[f] && ___cxa_can_catch(d[f], c, a))
        return (a = B[a >> 2]), b.yd.push(a), (x = d[f]), a | 0;
    a = B[a >> 2];
    x = c;
    return a | 0;
  },
  J: function (a) {
    return U(a);
  },
  da: function () {
    var a = rb.pop();
    a = sb(a);
    G[a].pd || (rb.push(a), (G[a].pd = !0));
    ub = a;
    throw a;
  },
  c: function (a, b, c) {
    G[a] = { yc: a, yd: [a], type: b, $c: c, Tc: 0, Ld: !1, pd: !1 };
    ub = a;
    "uncaught_exception" in tb ? tb.wd++ : (tb.wd = 1);
    throw a;
  },
  Va: function () {
    return tb.wd;
  },
  Ua: function () {
    ob(63);
    return -1;
  },
  f: function (a) {
    ub || (ub = a);
    throw a;
  },
  ca: function (a, b, c) {
    Cc = c;
    try {
      var d = Ec(a);
      switch (b) {
        case 0:
          var f = Dc();
          return 0 > f ? -28 : jc(d.path, d.flags, 0, f).Mc;
        case 1:
        case 2:
          return 0;
        case 3:
          return d.flags;
        case 4:
          return (f = Dc()), (d.flags |= f), 0;
        case 12:
          return (f = Dc()), (Ba[(f + 0) >> 1] = 2), 0;
        case 13:
        case 14:
          return 0;
        case 16:
        case 8:
          return -28;
        case 9:
          return ob(28), -1;
        default:
          return -28;
      }
    } catch (g) {
      return ("undefined" !== typeof P && g instanceof H) || y(g), -g.Fc;
    }
  },
  Sa: function () {
    return 42;
  },
  Pa: function (a, b, c) {
    Cc = c;
    try {
      var d = Ec(a);
      switch (b) {
        case 21509:
        case 21505:
          return d.Bc ? 0 : -59;
        case 21510:
        case 21511:
        case 21512:
        case 21506:
        case 21507:
        case 21508:
          return d.Bc ? 0 : -59;
        case 21519:
          if (!d.Bc) return -59;
          var f = Dc();
          return (B[f >> 2] = 0);
        case 21520:
          return d.Bc ? -28 : -59;
        case 21531:
          a = f = Dc();
          if (!d.wc.xe) throw new H(59);
          return d.wc.xe(d, b, a);
        case 21523:
          return d.Bc ? 0 : -59;
        case 21524:
          return d.Bc ? 0 : -59;
        default:
          y("bad ioctl syscall " + b);
      }
    } catch (g) {
      return ("undefined" !== typeof P && g instanceof H) || y(g), -g.Fc;
    }
  },
  Oa: function (a, b) {
    try {
      if (-1 === (a | 0) || 0 === b) var c = -28;
      else {
        var d = Bc[a];
        if (d && b === d.qf) {
          var f = Nb[d.Mc];
          d.wf & 2 &&
            f &&
            f.wc.nd &&
            f.wc.nd(f, A.slice(a, a + b), d.offset, b, d.flags);
          Bc[a] = null;
          d.ke && U(d.rf);
        }
        c = 0;
      }
      return c;
    } catch (g) {
      return ("undefined" !== typeof P && g instanceof H) || y(g), -g.Fc;
    }
  },
  ba: function (a, b, c) {
    Cc = c;
    try {
      var d = va(a),
        f = Dc();
      return jc(d, b, f).Mc;
    } catch (g) {
      return ("undefined" !== typeof P && g instanceof H) || y(g), -g.Fc;
    }
  },
  Ra: function (a, b, c) {
    try {
      var d = Ec(a);
      return nc(d, b, c);
    } catch (f) {
      return ("undefined" !== typeof P && f instanceof H) || y(f), -f.Fc;
    }
  },
  Qa: function (a) {
    try {
      a = va(a);
      var b = M(a, { parent: !0 }).node,
        c = yb(a),
        d = Kb(b, c),
        f = $b(b, c, !0);
      if (f) throw new H(f);
      if (!b.vc.qd) throw new H(63);
      if (d.Wc) throw new H(10);
      try {
        L.willDeletePath && L.willDeletePath(a);
      } catch (g) {
        t(
          "FS.trackingDelegate['willDeletePath']('" +
            a +
            "') threw an exception: " +
            g.message
        );
      }
      b.vc.qd(b, c);
      Ub(d);
      try {
        if (L.onDeletePath) L.onDeletePath(a);
      } catch (g) {
        t(
          "FS.trackingDelegate['onDeletePath']('" +
            a +
            "') threw an exception: " +
            g.message
        );
      }
      return 0;
    } catch (g) {
      return ("undefined" !== typeof P && g instanceof H) || y(g), -g.Fc;
    }
  },
  Ta: function (a) {
    try {
      return (a = va(a)), hc(a), 0;
    } catch (b) {
      return ("undefined" !== typeof P && b instanceof H) || y(b), -b.Fc;
    }
  },
  M: function (a) {
    var b = Fc[a];
    delete Fc[a];
    var c = b.Gd,
      d = b.Oc,
      f = b.Pd,
      g = f
        .map(function (h) {
          return h.ve;
        })
        .concat(
          f.map(function (h) {
            return h.Ie;
          })
        );
    Qc([a], g, function (h) {
      var m = {};
      f.forEach(function (k, p) {
        var n = h[p],
          q = k.jd,
          r = k.ue,
          l = h[p + f.length],
          v = k.He,
          w = k.Je;
        m[k.pe] = {
          read: function (z) {
            return n.fromWireType(q(r, z));
          },
          write: function (z, D) {
            var F = [];
            v(w, z, l.toWireType(F, D));
            Gc(F);
          },
        };
      });
      return [
        {
          name: b.name,
          fromWireType: function (k) {
            var p = {},
              n;
            for (n in m) p[n] = m[n].read(k);
            d(k);
            return p;
          },
          toWireType: function (k, p) {
            for (var n in m)
              if (!(n in p)) throw new TypeError('Missing field:  "' + n + '"');
            var q = c();
            for (n in m) m[n].write(q, p[n]);
            null !== k && k.push(d, q);
            return q;
          },
          argPackAdvance: 8,
          readValueFromPointer: Hc,
          Ic: d,
        },
      ];
    });
  },
  Ka: function (a, b, c, d, f) {
    var g = Rc(c);
    b = R(b);
    Q(a, {
      name: b,
      fromWireType: function (h) {
        return !!h;
      },
      toWireType: function (h, m) {
        return m ? d : f;
      },
      argPackAdvance: 8,
      readValueFromPointer: function (h) {
        if (1 === c) var m = C;
        else if (2 === c) m = Ba;
        else if (4 === c) m = B;
        else throw new TypeError("Unknown boolean type size: " + b);
        return this.fromWireType(m[h >> g]);
      },
      Ic: null,
    });
  },
  y: function (a, b, c, d, f, g, h, m, k, p, n, q, r) {
    n = R(n);
    g = T(f, g);
    m && (m = T(h, m));
    p && (p = T(k, p));
    r = T(q, r);
    var l = Lc(n);
    fd(l, function () {
      wd("Cannot construct " + n + " due to unbound types", [d]);
    });
    Qc([a, b, c], d ? [d] : [], function (v) {
      v = v[0];
      if (d) {
        var w = v.xc;
        var z = w.Qc;
      } else z = cd.prototype;
      v = Mc(l, function () {
        if (Object.getPrototypeOf(this) !== D)
          throw new Tc("Use 'new' to construct " + n);
        if (void 0 === F.Rc) throw new Tc(n + " has no accessible constructor");
        var K = F.Rc[arguments.length];
        if (void 0 === K)
          throw new Tc(
            "Tried to invoke ctor of " +
              n +
              " with invalid number of parameters (" +
              arguments.length +
              ") - expected (" +
              Object.keys(F.Rc).toString() +
              ") parameters instead!"
          );
        return K.apply(this, arguments);
      });
      var D = Object.create(z, { constructor: { value: v } });
      v.prototype = D;
      var F = new gd(n, v, D, r, w, g, m, p);
      w = new rd(n, F, !0, !1);
      z = new rd(n + "*", F, !1, !1);
      var sa = new rd(n + " const*", F, !1, !0);
      dd[a] = { pointerType: z, ne: sa };
      sd(l, v);
      return [w, z, sa];
    });
  },
  I: function (a, b, c, d, f, g) {
    ra(0 < b);
    var h = xd(b, c);
    f = T(d, f);
    var m = [g],
      k = [];
    Qc([], [a], function (p) {
      p = p[0];
      var n = "constructor " + p.name;
      void 0 === p.xc.Rc && (p.xc.Rc = []);
      if (void 0 !== p.xc.Rc[b - 1])
        throw new Tc(
          "Cannot register multiple constructors with identical number of parameters (" +
            (b - 1) +
            ") for class '" +
            p.name +
            "'! Overload resolution is currently only performed using the parameter count, not actual type info!"
        );
      p.xc.Rc[b - 1] = function () {
        wd("Cannot construct " + p.name + " due to unbound types", h);
      };
      Qc([], h, function (q) {
        p.xc.Rc[b - 1] = function () {
          arguments.length !== b - 1 &&
            S(
              n +
                " called with " +
                arguments.length +
                " arguments, expected " +
                (b - 1)
            );
          k.length = 0;
          m.length = b;
          for (var r = 1; r < b; ++r)
            m[r] = q[r].toWireType(k, arguments[r - 1]);
          r = f.apply(null, m);
          Gc(k);
          return q[0].fromWireType(r);
        };
        return [];
      });
      return [];
    });
  },
  o: function (a, b, c, d, f, g, h, m) {
    var k = xd(c, d);
    b = R(b);
    g = T(f, g);
    Qc([], [a], function (p) {
      function n() {
        wd("Cannot call " + q + " due to unbound types", k);
      }
      p = p[0];
      var q = p.name + "." + b;
      m && p.xc.Ce.push(b);
      var r = p.xc.Qc,
        l = r[b];
      void 0 === l ||
      (void 0 === l.Dc && l.className !== p.name && l.gd === c - 2)
        ? ((n.gd = c - 2), (n.className = p.name), (r[b] = n))
        : (ed(r, b, q), (r[b].Dc[c - 2] = n));
      Qc([], k, function (v) {
        v = zd(q, v, p, g, h);
        void 0 === r[b].Dc
          ? ((v.gd = c - 2), (r[b] = v))
          : (r[b].Dc[c - 2] = v);
        return [];
      });
      return [];
    });
  },
  n: function (a, b, c, d, f, g, h, m, k, p) {
    b = R(b);
    f = T(d, f);
    Qc([], [a], function (n) {
      n = n[0];
      var q = n.name + "." + b,
        r = {
          get: function () {
            wd("Cannot access " + q + " due to unbound types", [c, h]);
          },
          enumerable: !0,
          configurable: !0,
        };
      r.set = k
        ? function () {
            wd("Cannot access " + q + " due to unbound types", [c, h]);
          }
        : function () {
            S(q + " is a read-only property");
          };
      Object.defineProperty(n.xc.Qc, b, r);
      Qc([], k ? [c, h] : [c], function (l) {
        var v = l[0],
          w = {
            get: function () {
              var D = Ad(this, n, q + " getter");
              return v.fromWireType(f(g, D));
            },
            enumerable: !0,
          };
        if (k) {
          k = T(m, k);
          var z = l[1];
          w.set = function (D) {
            var F = Ad(this, n, q + " setter"),
              sa = [];
            k(p, F, z.toWireType(sa, D));
            Gc(sa);
          };
        }
        Object.defineProperty(n.xc.Qc, b, w);
        return [];
      });
      return [];
    });
  },
  Ja: function (a, b) {
    b = R(b);
    Q(a, {
      name: b,
      fromWireType: function (c) {
        var d = V[c].value;
        Cd(c);
        return d;
      },
      toWireType: function (c, d) {
        return ld(d);
      },
      argPackAdvance: 8,
      readValueFromPointer: Hc,
      Ic: null,
    });
  },
  H: function (a, b, c, d) {
    function f() {}
    c = Rc(c);
    b = R(b);
    f.values = {};
    Q(a, {
      name: b,
      constructor: f,
      fromWireType: function (g) {
        return this.constructor.values[g];
      },
      toWireType: function (g, h) {
        return h.value;
      },
      argPackAdvance: 8,
      readValueFromPointer: Dd(b, c, d),
      Ic: null,
    });
    fd(b, f);
  },
  G: function (a, b, c) {
    var d = Ed(a, "enum");
    b = R(b);
    a = d.constructor;
    d = Object.create(d.constructor.prototype, {
      value: { value: c },
      constructor: { value: Mc(d.name + "_" + b, function () {}) },
    });
    a.values[c] = d;
    a[b] = d;
  },
  aa: function (a, b, c) {
    c = Rc(c);
    b = R(b);
    Q(a, {
      name: b,
      fromWireType: function (d) {
        return d;
      },
      toWireType: function (d, f) {
        if ("number" !== typeof f && "boolean" !== typeof f)
          throw new TypeError('Cannot convert "' + jd(f) + '" to ' + this.name);
        return f;
      },
      argPackAdvance: 8,
      readValueFromPointer: Fd(b, c),
      Ic: null,
    });
  },
  u: function (a, b, c, d, f, g) {
    var h = xd(b, c);
    a = R(a);
    f = T(d, f);
    fd(
      a,
      function () {
        wd("Cannot call " + a + " due to unbound types", h);
      },
      b - 1
    );
    Qc([], h, function (m) {
      sd(a, zd(a, [m[0], null].concat(m.slice(1)), null, f, g), b - 1);
      return [];
    });
  },
  A: function (a, b, c, d, f) {
    function g(p) {
      return p;
    }
    b = R(b);
    -1 === f && (f = 4294967295);
    var h = Rc(c);
    if (0 === d) {
      var m = 32 - 8 * c;
      g = function (p) {
        return (p << m) >>> m;
      };
    }
    var k = -1 != b.indexOf("unsigned");
    Q(a, {
      name: b,
      fromWireType: g,
      toWireType: function (p, n) {
        if ("number" !== typeof n && "boolean" !== typeof n)
          throw new TypeError('Cannot convert "' + jd(n) + '" to ' + this.name);
        if (n < d || n > f)
          throw new TypeError(
            'Passing a number "' +
              jd(n) +
              '" from JS side to C/C++ side to an argument of type "' +
              b +
              '", which is outside the valid range [' +
              d +
              ", " +
              f +
              "]!"
          );
        return k ? n >>> 0 : n | 0;
      },
      argPackAdvance: 8,
      readValueFromPointer: Gd(b, h, 0 !== d),
      Ic: null,
    });
  },
  x: function (a, b, c) {
    function d(g) {
      g >>= 2;
      var h = E;
      return new f(La, h[g + 1], h[g]);
    }
    var f = [
      Int8Array,
      Uint8Array,
      Int16Array,
      Uint16Array,
      Int32Array,
      Uint32Array,
      Float32Array,
      Float64Array,
    ][b];
    c = R(c);
    Q(
      a,
      { name: c, fromWireType: d, argPackAdvance: 8, readValueFromPointer: d },
      { we: !0 }
    );
  },
  $: function (a, b) {
    b = R(b);
    var c = "std::string" === b;
    Q(a, {
      name: b,
      fromWireType: function (d) {
        var f = E[d >> 2];
        if (c)
          for (var g = d + 4, h = 0; h <= f; ++h) {
            var m = d + 4 + h;
            if (h == f || 0 == A[m]) {
              g = va(g, m - g);
              if (void 0 === k) var k = g;
              else (k += String.fromCharCode(0)), (k += g);
              g = m + 1;
            }
          }
        else {
          k = Array(f);
          for (h = 0; h < f; ++h) k[h] = String.fromCharCode(A[d + 4 + h]);
          k = k.join("");
        }
        U(d);
        return k;
      },
      toWireType: function (d, f) {
        f instanceof ArrayBuffer && (f = new Uint8Array(f));
        var g = "string" === typeof f;
        g ||
          f instanceof Uint8Array ||
          f instanceof Uint8ClampedArray ||
          f instanceof Int8Array ||
          S("Cannot pass non-string to std::string");
        var h = (
            c && g
              ? function () {
                  return xa(f);
                }
              : function () {
                  return f.length;
                }
          )(),
          m = Ia(4 + h + 1);
        E[m >> 2] = h;
        if (c && g) wa(f, A, m + 4, h + 1);
        else if (g)
          for (g = 0; g < h; ++g) {
            var k = f.charCodeAt(g);
            255 < k &&
              (U(m),
              S("String has UTF-16 code units that do not fit in 8 bits"));
            A[m + 4 + g] = k;
          }
        else for (g = 0; g < h; ++g) A[m + 4 + g] = f[g];
        null !== d && d.push(U, m);
        return m;
      },
      argPackAdvance: 8,
      readValueFromPointer: Hc,
      Ic: function (d) {
        U(d);
      },
    });
  },
  S: function (a, b, c) {
    c = R(c);
    if (2 === b) {
      var d = za;
      var f = Ca;
      var g = Da;
      var h = function () {
        return Aa;
      };
      var m = 1;
    } else
      4 === b &&
        ((d = Ea),
        (f = Fa),
        (g = Ga),
        (h = function () {
          return E;
        }),
        (m = 2));
    Q(a, {
      name: c,
      fromWireType: function (k) {
        for (var p = E[k >> 2], n = h(), q, r = k + 4, l = 0; l <= p; ++l) {
          var v = k + 4 + l * b;
          if (l == p || 0 == n[v >> m])
            (r = d(r, v - r)),
              void 0 === q
                ? (q = r)
                : ((q += String.fromCharCode(0)), (q += r)),
              (r = v + b);
        }
        U(k);
        return q;
      },
      toWireType: function (k, p) {
        "string" !== typeof p &&
          S("Cannot pass non-string to C++ string type " + c);
        var n = g(p),
          q = Ia(4 + n + b);
        E[q >> 2] = n >> m;
        f(p, q + 4, n + b);
        null !== k && k.push(U, q);
        return q;
      },
      argPackAdvance: 8,
      readValueFromPointer: Hc,
      Ic: function (k) {
        U(k);
      },
    });
  },
  L: function (a, b, c, d, f, g) {
    Fc[a] = { name: R(b), Gd: T(c, d), Oc: T(f, g), Pd: [] };
  },
  z: function (a, b, c, d, f, g, h, m, k, p) {
    Fc[a].Pd.push({
      pe: R(b),
      ve: c,
      jd: T(d, f),
      ue: g,
      Ie: h,
      He: T(m, k),
      Je: p,
    });
  },
  Ia: function (a, b) {
    b = R(b);
    Q(a, {
      pf: !0,
      name: b,
      argPackAdvance: 0,
      fromWireType: function () {},
      toWireType: function () {},
    });
  },
  Ha: Cd,
  Ga: function (a) {
    4 < a && (V[a].Tc += 1);
  },
  Fa: function () {
    return ld([]);
  },
  Ea: function (a, b, c) {
    a = Hd(a);
    b = Hd(b);
    c = Hd(c);
    a[b] = c;
  },
  K: function (a, b) {
    a = Ed(a, "_emval_take_value");
    a = a.readValueFromPointer(b);
    return ld(a);
  },
  Q: function () {
    y();
  },
  Da: qb,
  Ca: function (a, b) {
    return a - b;
  },
  Ba: nb,
  p: function (a, b) {
    X(a, b || 1);
    throw "longjmp";
  },
  Aa: function (a, b, c) {
    A.copyWithin(a, b, b + c);
  },
  za: function (a) {
    a >>>= 0;
    var b = A.length;
    if (2147483648 < a) return !1;
    for (var c = 1; 4 >= c; c *= 2) {
      var d = b * (1 + 0.2 / c);
      d = Math.min(d, a + 100663296);
      d = Math.max(16777216, a, d);
      0 < d % 65536 && (d += 65536 - (d % 65536));
      a: {
        try {
          oa.grow((Math.min(2147483648, d) - La.byteLength + 65535) >>> 16);
          Oa(oa.buffer);
          var f = 1;
          break a;
        } catch (g) {}
        f = void 0;
      }
      if (f) return !0;
    }
    return !1;
  },
  ya: W,
  Na: function (a, b) {
    var c = 0;
    Jd().forEach(function (d, f) {
      var g = b + c;
      f = B[(a + 4 * f) >> 2] = g;
      for (g = 0; g < d.length; ++g) C[f++ >> 0] = d.charCodeAt(g);
      C[f >> 0] = 0;
      c += d.length + 1;
    });
    return 0;
  },
  Ma: function (a, b) {
    var c = Jd();
    B[a >> 2] = c.length;
    var d = 0;
    c.forEach(function (f) {
      d += f.length + 1;
    });
    B[b >> 2] = d;
    return 0;
  },
  xa: function (a) {
    Yd(a);
  },
  U: function (a) {
    try {
      var b = Ec(a);
      lc(b);
      return 0;
    } catch (c) {
      return ("undefined" !== typeof P && c instanceof H) || y(c), c.Fc;
    }
  },
  La: function (a, b, c, d) {
    try {
      a: {
        for (var f = Ec(a), g = (a = 0); g < c; g++) {
          var h = B[(b + (8 * g + 4)) >> 2],
            m = nc(f, B[(b + 8 * g) >> 2], h, void 0);
          if (0 > m) {
            var k = -1;
            break a;
          }
          a += m;
          if (m < h) break;
        }
        k = a;
      }
      B[d >> 2] = k;
      return 0;
    } catch (p) {
      return ("undefined" !== typeof P && p instanceof H) || y(p), p.Fc;
    }
  },
  oa: function (a, b, c, d, f) {
    try {
      var g = Ec(a);
      a = 4294967296 * c + (b >>> 0);
      if (-9007199254740992 >= a || 9007199254740992 <= a) return -61;
      mc(g, a, d);
      lb = [
        g.position >>> 0,
        ((kb = g.position),
        1 <= +Xa(kb)
          ? 0 < kb
            ? ($a(+Za(kb / 4294967296), 4294967295) | 0) >>> 0
            : ~~+Ya((kb - +(~~kb >>> 0)) / 4294967296) >>> 0
          : 0),
      ];
      B[f >> 2] = lb[0];
      B[(f + 4) >> 2] = lb[1];
      g.Cd && 0 === a && 0 === d && (g.Cd = null);
      return 0;
    } catch (h) {
      return ("undefined" !== typeof P && h instanceof H) || y(h), h.Fc;
    }
  },
  T: function (a, b, c, d) {
    try {
      a: {
        for (var f = Ec(a), g = (a = 0); g < c; g++) {
          var h = oc(
            f,
            C,
            B[(b + 8 * g) >> 2],
            B[(b + (8 * g + 4)) >> 2],
            void 0
          );
          if (0 > h) {
            var m = -1;
            break a;
          }
          a += h;
        }
        m = a;
      }
      B[d >> 2] = m;
      return 0;
    } catch (k) {
      return ("undefined" !== typeof P && k instanceof H) || y(k), k.Fc;
    }
  },
  a: function () {
    return x | 0;
  },
  wa: function (a) {
    var b = Date.now();
    B[a >> 2] = (b / 1e3) | 0;
    B[(a + 4) >> 2] = ((b % 1e3) * 1e3) | 0;
    return 0;
  },
  R: Zd,
  _: $d,
  r: ae,
  e: be,
  h: ce,
  s: de,
  l: ee,
  Z: fe,
  F: ge,
  C: he,
  Y: ie,
  va: je,
  P: ke,
  na: le,
  ma: me,
  la: ne,
  k: oe,
  m: pe,
  g: qe,
  ua: re,
  ta: se,
  sa: te,
  q: ue,
  E: ve,
  O: we,
  ra: xe,
  w: ye,
  qa: ze,
  D: Ae,
  N: Be,
  ka: Ce,
  pa: function () {
    var a = location.hostname,
      b = xa(a) + 1,
      c = Ia(b);
    wa(a, A, c, b + 1);
    return c;
  },
  memory: oa,
  ja: function (a) {
    Ld();
    var b = new Date(
        B[(a + 20) >> 2] + 1900,
        B[(a + 16) >> 2],
        B[(a + 12) >> 2],
        B[(a + 8) >> 2],
        B[(a + 4) >> 2],
        B[a >> 2],
        0
      ),
      c = B[(a + 32) >> 2],
      d = b.getTimezoneOffset(),
      f = new Date(b.getFullYear(), 0, 1),
      g = new Date(b.getFullYear(), 6, 1).getTimezoneOffset(),
      h = f.getTimezoneOffset(),
      m = Math.min(h, g);
    0 > c
      ? (B[(a + 32) >> 2] = Number(g != h && m == d))
      : 0 < c != (m == d) &&
        ((g = Math.max(h, g)),
        b.setTime(b.getTime() + 6e4 * ((0 < c ? m : g) - d)));
    B[(a + 24) >> 2] = b.getDay();
    B[(a + 28) >> 2] = ((b.getTime() - f.getTime()) / 864e5) | 0;
    return (b.getTime() / 1e3) | 0;
  },
  X: function () {},
  ia: function () {},
  ha: function () {},
  W: function (a) {
    a = +a;
    return 0 <= a ? +Za(a + 0.5) : +Ya(a - 0.5);
  },
  B: function (a) {
    a = +a;
    return 0 <= a ? +Za(a + 0.5) : +Ya(a - 0.5);
  },
  i: function (a) {
    x = a | 0;
  },
  ga: function (a, b, c, d) {
    return Vd(a, b, c, d);
  },
  fa: function (a, b, c) {
    function d() {
      function r(l, v, w) {
        return "number" !== typeof l || isNaN(l)
          ? v
          : l >= v
          ? l <= w
            ? l
            : w
          : v;
      }
      return {
        year: r(B[(c + 20) >> 2] + 1900, 1970, 9999),
        month: r(B[(c + 16) >> 2], 0, 11),
        day: r(B[(c + 12) >> 2], 1, 31),
        hour: r(B[(c + 8) >> 2], 0, 23),
        min: r(B[(c + 4) >> 2], 0, 59),
        Zd: r(B[c >> 2], 0, 59),
      };
    }
    for (var f = va(b), g = 0; 25 > g; ++g)
      f = f.replace(
        new RegExp("\\" + "\\!@#$^&*()+=-[]/{}|:<>?,."[g], "g"),
        "\\" + "\\!@#$^&*()+=-[]/{}|:<>?,."[g]
      );
    b = {
      "%A": "%a",
      "%B": "%b",
      "%c": "%a %b %d %H:%M:%S %Y",
      "%D": "%m\\/%d\\/%y",
      "%e": "%d",
      "%F": "%Y-%m-%d",
      "%h": "%b",
      "%R": "%H\\:%M",
      "%r": "%I\\:%M\\:%S\\s%p",
      "%T": "%H\\:%M\\:%S",
      "%x": "%m\\/%d\\/(?:%y|%Y)",
      "%X": "%H\\:%M\\:%S",
    };
    for (var h in b) f = f.replace(h, b[h]);
    g = {
      "%a": "(?:Sun(?:day)?)|(?:Mon(?:day)?)|(?:Tue(?:sday)?)|(?:Wed(?:nesday)?)|(?:Thu(?:rsday)?)|(?:Fri(?:day)?)|(?:Sat(?:urday)?)",
      "%b": "(?:Jan(?:uary)?)|(?:Feb(?:ruary)?)|(?:Mar(?:ch)?)|(?:Apr(?:il)?)|May|(?:Jun(?:e)?)|(?:Jul(?:y)?)|(?:Aug(?:ust)?)|(?:Sep(?:tember)?)|(?:Oct(?:ober)?)|(?:Nov(?:ember)?)|(?:Dec(?:ember)?)",
      "%C": "\\d\\d",
      "%d": "0[1-9]|[1-9](?!\\d)|1\\d|2\\d|30|31",
      "%H": "\\d(?!\\d)|[0,1]\\d|20|21|22|23",
      "%I": "\\d(?!\\d)|0\\d|10|11|12",
      "%j": "00[1-9]|0?[1-9](?!\\d)|0?[1-9]\\d(?!\\d)|[1,2]\\d\\d|3[0-6]\\d",
      "%m": "0[1-9]|[1-9](?!\\d)|10|11|12",
      "%M": "0\\d|\\d(?!\\d)|[1-5]\\d",
      "%n": "\\s",
      "%p": "AM|am|PM|pm|A\\.M\\.|a\\.m\\.|P\\.M\\.|p\\.m\\.",
      "%S": "0\\d|\\d(?!\\d)|[1-5]\\d|60",
      "%U": "0\\d|\\d(?!\\d)|[1-4]\\d|50|51|52|53",
      "%W": "0\\d|\\d(?!\\d)|[1-4]\\d|50|51|52|53",
      "%w": "[0-6]",
      "%y": "\\d\\d",
      "%Y": "\\d\\d\\d\\d",
      "%%": "%",
      "%t": "\\s",
    };
    var m = {
      Ue: 0,
      Te: 1,
      Xe: 2,
      Qe: 3,
      Ye: 4,
      We: 5,
      Ve: 6,
      Re: 7,
      bf: 8,
      $e: 9,
      Ze: 10,
      Se: 11,
    };
    h = { ce: 0, ae: 1, fe: 2, ge: 3, de: 4, $d: 5, be: 6 };
    b = { ae: 0, fe: 1, ge: 2, de: 3, $d: 4, be: 5, ce: 6 };
    for (var k in g) f = f.replace(k, "(" + k + g[k] + ")");
    var p = [];
    for (g = f.indexOf("%"); 0 <= g; g = f.indexOf("%"))
      p.push(f[g + 1]), (f = f.replace(new RegExp("\\%" + f[g + 1], "g"), ""));
    var n = new RegExp("^" + f, "i").exec(va(a));
    if (n) {
      k = d();
      g = function (r) {
        r = p.indexOf(r);
        if (0 <= r) return n[r + 1];
      };
      if ((f = g("S"))) k.Zd = parseInt(f);
      if ((f = g("M"))) k.min = parseInt(f);
      if ((f = g("H"))) k.hour = parseInt(f);
      else if ((f = g("I"))) {
        var q = parseInt(f);
        if ((f = g("p"))) q += "P" === f.toUpperCase()[0] ? 12 : 0;
        k.hour = q;
      }
      if ((f = g("Y"))) k.year = parseInt(f);
      else if ((f = g("y")))
        (q = parseInt(f)),
          (q = (f = g("C"))
            ? q + 100 * parseInt(f)
            : q + (69 > q ? 2e3 : 1900)),
          (k.year = q);
      if ((f = g("m"))) k.month = parseInt(f) - 1;
      else if ((f = g("b"))) k.month = m[f.substring(0, 3).toUpperCase()] || 0;
      if ((f = g("d"))) k.day = parseInt(f);
      else if ((f = g("j")))
        for (h = parseInt(f), b = Qd(k.year), m = 0; 12 > m; ++m)
          (f = Rd(b ? Sd : Td, m - 1)),
            h <= f + (b ? Sd : Td)[m] && (k.day = h - f);
      else if ((f = g("a")))
        if (((m = f.substring(0, 3).toUpperCase()), (f = g("U"))))
          (h = h[m]),
            (b = parseInt(f)),
            (m = new Date(k.year, 0, 1)),
            (h =
              0 === m.getDay()
                ? Ud(m, h + 7 * (b - 1))
                : Ud(m, 7 - m.getDay() + h + 7 * (b - 1))),
            (k.day = h.getDate()),
            (k.month = h.getMonth());
        else if ((f = g("W")))
          (h = b[m]),
            (b = parseInt(f)),
            (m = new Date(k.year, 0, 1)),
            (h =
              1 === m.getDay()
                ? Ud(m, h + 7 * (b - 1))
                : Ud(m, 7 - m.getDay() + 1 + h + 7 * (b - 1))),
            (k.day = h.getDate()),
            (k.month = h.getMonth());
      k = new Date(k.year, k.month, k.day, k.hour, k.min, k.Zd, 0);
      B[c >> 2] = k.getSeconds();
      B[(c + 4) >> 2] = k.getMinutes();
      B[(c + 8) >> 2] = k.getHours();
      B[(c + 12) >> 2] = k.getDate();
      B[(c + 16) >> 2] = k.getMonth();
      B[(c + 20) >> 2] = k.getFullYear() - 1900;
      B[(c + 24) >> 2] = k.getDay();
      B[(c + 28) >> 2] =
        Rd(Qd(k.getFullYear()) ? Sd : Td, k.getMonth() - 1) + k.getDate() - 1;
      B[(c + 32) >> 2] = 0;
      return a + Eb(n[0]).length - 1;
    }
    return 0;
  },
  V: function (a) {
    switch (a) {
      case 30:
        return 16384;
      case 85:
        return 131072;
      case 132:
      case 133:
      case 12:
      case 137:
      case 138:
      case 15:
      case 235:
      case 16:
      case 17:
      case 18:
      case 19:
      case 20:
      case 149:
      case 13:
      case 10:
      case 236:
      case 153:
      case 9:
      case 21:
      case 22:
      case 159:
      case 154:
      case 14:
      case 77:
      case 78:
      case 139:
      case 80:
      case 81:
      case 82:
      case 68:
      case 67:
      case 164:
      case 11:
      case 29:
      case 47:
      case 48:
      case 95:
      case 52:
      case 51:
      case 46:
      case 79:
        return 200809;
      case 27:
      case 246:
      case 127:
      case 128:
      case 23:
      case 24:
      case 160:
      case 161:
      case 181:
      case 182:
      case 242:
      case 183:
      case 184:
      case 243:
      case 244:
      case 245:
      case 165:
      case 178:
      case 179:
      case 49:
      case 50:
      case 168:
      case 169:
      case 175:
      case 170:
      case 171:
      case 172:
      case 97:
      case 76:
      case 32:
      case 173:
      case 35:
        return -1;
      case 176:
      case 177:
      case 7:
      case 155:
      case 8:
      case 157:
      case 125:
      case 126:
      case 92:
      case 93:
      case 129:
      case 130:
      case 131:
      case 94:
      case 91:
        return 1;
      case 74:
      case 60:
      case 69:
      case 70:
      case 4:
        return 1024;
      case 31:
      case 42:
      case 72:
        return 32;
      case 87:
      case 26:
      case 33:
        return 2147483647;
      case 34:
      case 1:
        return 47839;
      case 38:
      case 36:
        return 99;
      case 43:
      case 37:
        return 2048;
      case 0:
        return 2097152;
      case 3:
        return 65536;
      case 28:
        return 32768;
      case 44:
        return 32767;
      case 75:
        return 16384;
      case 39:
        return 1e3;
      case 89:
        return 700;
      case 71:
        return 256;
      case 40:
        return 255;
      case 2:
        return 100;
      case 180:
        return 64;
      case 25:
        return 20;
      case 5:
        return 16;
      case 6:
        return 6;
      case 73:
        return 4;
      case 84:
        return "object" === typeof navigator
          ? navigator.hardwareConcurrency || 1
          : 1;
    }
    ob(28);
    return -1;
  },
  table: pa,
  ea: function (a) {
    var b = (Date.now() / 1e3) | 0;
    a && (B[a >> 2] = b);
    return b;
  },
};
(function () {
  function a(f) {
    e.asm = f.exports;
    eb("wasm-instantiate");
  }
  function b(f) {
    a(f.instance);
  }
  function c(f) {
    return jb()
      .then(function (g) {
        return WebAssembly.instantiate(g, d);
      })
      .then(f, function (g) {
        t("failed to asynchronously prepare wasm: " + g);
        y(g);
      });
  }
  var d = { a: De };
  db("wasm-instantiate");
  if (e.instantiateWasm)
    try {
      return e.instantiateWasm(d, a);
    } catch (f) {
      return t("Module.instantiateWasm callback failed with error: " + f), !1;
    }
  (function () {
    if (
      na ||
      "function" !== typeof WebAssembly.instantiateStreaming ||
      fb() ||
      "function" !== typeof fetch
    )
      return c(b);
    fetch(gb, { credentials: "same-origin" }).then(function (f) {
      return WebAssembly.instantiateStreaming(f, d).then(b, function (g) {
        t("wasm streaming compile failed: " + g);
        t("falling back to ArrayBuffer instantiation");
        return c(b);
      });
    });
  })();
  return {};
})();
var mb = (e.___wasm_call_ctors = function () {
    return (mb = e.___wasm_call_ctors = e.asm.Xa).apply(null, arguments);
  }),
  pb = (e.___errno_location = function () {
    return (pb = e.___errno_location = e.asm.Ya).apply(null, arguments);
  }),
  U = (e._free = function () {
    return (U = e._free = e.asm.Za).apply(null, arguments);
  }),
  Ia = (e._malloc = function () {
    return (Ia = e._malloc = e.asm._a).apply(null, arguments);
  });
e._main = function () {
  return (e._main = e.asm.$a).apply(null, arguments);
};
var vd = (e.___getTypeName = function () {
  return (vd = e.___getTypeName = e.asm.ab).apply(null, arguments);
});
e.___embind_register_native_and_builtin_types = function () {
  return (e.___embind_register_native_and_builtin_types = e.asm.bb).apply(
    null,
    arguments
  );
};
var Pd = (e.__get_tzname = function () {
    return (Pd = e.__get_tzname = e.asm.cb).apply(null, arguments);
  }),
  Od = (e.__get_daylight = function () {
    return (Od = e.__get_daylight = e.asm.db).apply(null, arguments);
  }),
  Nd = (e.__get_timezone = function () {
    return (Nd = e.__get_timezone = e.asm.eb).apply(null, arguments);
  }),
  X = (e._setThrew = function () {
    return (X = e._setThrew = e.asm.fb).apply(null, arguments);
  }),
  Y = (e.stackSave = function () {
    return (Y = e.stackSave = e.asm.gb).apply(null, arguments);
  }),
  Z = (e.stackRestore = function () {
    return (Z = e.stackRestore = e.asm.hb).apply(null, arguments);
  }),
  Ka = (e.stackAlloc = function () {
    return (Ka = e.stackAlloc = e.asm.ib).apply(null, arguments);
  }),
  Ee = (e.dynCall_v = function () {
    return (Ee = e.dynCall_v = e.asm.jb).apply(null, arguments);
  }),
  Fe = (e.dynCall_vi = function () {
    return (Fe = e.dynCall_vi = e.asm.kb).apply(null, arguments);
  }),
  Ge = (e.dynCall_vii = function () {
    return (Ge = e.dynCall_vii = e.asm.lb).apply(null, arguments);
  }),
  He = (e.dynCall_viii = function () {
    return (He = e.dynCall_viii = e.asm.mb).apply(null, arguments);
  }),
  Ie = (e.dynCall_viiii = function () {
    return (Ie = e.dynCall_viiii = e.asm.nb).apply(null, arguments);
  }),
  Je = (e.dynCall_viiiii = function () {
    return (Je = e.dynCall_viiiii = e.asm.ob).apply(null, arguments);
  }),
  Ke = (e.dynCall_viiiiii = function () {
    return (Ke = e.dynCall_viiiiii = e.asm.pb).apply(null, arguments);
  }),
  Le = (e.dynCall_viiiiiii = function () {
    return (Le = e.dynCall_viiiiiii = e.asm.qb).apply(null, arguments);
  }),
  Me = (e.dynCall_viiiiiiiii = function () {
    return (Me = e.dynCall_viiiiiiiii = e.asm.rb).apply(null, arguments);
  }),
  Ne = (e.dynCall_viiiiiiiiii = function () {
    return (Ne = e.dynCall_viiiiiiiiii = e.asm.sb).apply(null, arguments);
  }),
  Oe = (e.dynCall_viiiiiiiiiiiiiii = function () {
    return (Oe = e.dynCall_viiiiiiiiiiiiiii = e.asm.tb).apply(null, arguments);
  }),
  Pe = (e.dynCall_viijii = function () {
    return (Pe = e.dynCall_viijii = e.asm.ub).apply(null, arguments);
  }),
  Qe = (e.dynCall_viif = function () {
    return (Qe = e.dynCall_viif = e.asm.vb).apply(null, arguments);
  }),
  Re = (e.dynCall_viid = function () {
    return (Re = e.dynCall_viid = e.asm.wb).apply(null, arguments);
  }),
  Se = (e.dynCall_viidd = function () {
    return (Se = e.dynCall_viidd = e.asm.xb).apply(null, arguments);
  }),
  Te = (e.dynCall_i = function () {
    return (Te = e.dynCall_i = e.asm.yb).apply(null, arguments);
  }),
  Ue = (e.dynCall_ii = function () {
    return (Ue = e.dynCall_ii = e.asm.zb).apply(null, arguments);
  }),
  Ve = (e.dynCall_iii = function () {
    return (Ve = e.dynCall_iii = e.asm.Ab).apply(null, arguments);
  }),
  We = (e.dynCall_iiii = function () {
    return (We = e.dynCall_iiii = e.asm.Bb).apply(null, arguments);
  }),
  Xe = (e.dynCall_iiiii = function () {
    return (Xe = e.dynCall_iiiii = e.asm.Cb).apply(null, arguments);
  }),
  Ye = (e.dynCall_iiiiii = function () {
    return (Ye = e.dynCall_iiiiii = e.asm.Db).apply(null, arguments);
  }),
  Ze = (e.dynCall_iiiiiii = function () {
    return (Ze = e.dynCall_iiiiiii = e.asm.Eb).apply(null, arguments);
  }),
  $e = (e.dynCall_iiiiiiii = function () {
    return ($e = e.dynCall_iiiiiiii = e.asm.Fb).apply(null, arguments);
  }),
  af = (e.dynCall_iiiiiiiiii = function () {
    return (af = e.dynCall_iiiiiiiiii = e.asm.Gb).apply(null, arguments);
  });
e.dynCall_iiiiiiiiiii = function () {
  return (e.dynCall_iiiiiiiiiii = e.asm.Hb).apply(null, arguments);
};
var bf = (e.dynCall_iiiiiiiiiiii = function () {
  return (bf = e.dynCall_iiiiiiiiiiii = e.asm.Ib).apply(null, arguments);
});
e.dynCall_iiiiiiiiiiiii = function () {
  return (e.dynCall_iiiiiiiiiiiii = e.asm.Jb).apply(null, arguments);
};
var cf = (e.dynCall_iiiiij = function () {
    return (cf = e.dynCall_iiiiij = e.asm.Kb).apply(null, arguments);
  }),
  df = (e.dynCall_iiiiid = function () {
    return (df = e.dynCall_iiiiid = e.asm.Lb).apply(null, arguments);
  }),
  ef = (e.dynCall_jii = function () {
    return (ef = e.dynCall_jii = e.asm.Mb).apply(null, arguments);
  }),
  ff = (e.dynCall_jiiii = function () {
    return (ff = e.dynCall_jiiii = e.asm.Nb).apply(null, arguments);
  }),
  gf = (e.dynCall_fiii = function () {
    return (gf = e.dynCall_fiii = e.asm.Ob).apply(null, arguments);
  }),
  hf = (e.dynCall_diii = function () {
    return (hf = e.dynCall_diii = e.asm.Pb).apply(null, arguments);
  });
e.dynCall_ji = function () {
  return (e.dynCall_ji = e.asm.Qb).apply(null, arguments);
};
e.dynCall_dii = function () {
  return (e.dynCall_dii = e.asm.Rb).apply(null, arguments);
};
e.dynCall_fii = function () {
  return (e.dynCall_fii = e.asm.Sb).apply(null, arguments);
};
e.dynCall_viiidiiii = function () {
  return (e.dynCall_viiidiiii = e.asm.Tb).apply(null, arguments);
};
e.dynCall_viiiidiiii = function () {
  return (e.dynCall_viiiidiiii = e.asm.Ub).apply(null, arguments);
};
e.dynCall_viiiiidiiiii = function () {
  return (e.dynCall_viiiiidiiiii = e.asm.Vb).apply(null, arguments);
};
e.dynCall_viiiidiii = function () {
  return (e.dynCall_viiiidiii = e.asm.Wb).apply(null, arguments);
};
e.dynCall_viiidiii = function () {
  return (e.dynCall_viiidiii = e.asm.Xb).apply(null, arguments);
};
e.dynCall_viiiidiiddi = function () {
  return (e.dynCall_viiiidiiddi = e.asm.Yb).apply(null, arguments);
};
e.dynCall_viiidiiddi = function () {
  return (e.dynCall_viiidiiddi = e.asm.Zb).apply(null, arguments);
};
e.dynCall_viiiiidii = function () {
  return (e.dynCall_viiiiidii = e.asm._b).apply(null, arguments);
};
e.dynCall_viiiidi = function () {
  return (e.dynCall_viiiidi = e.asm.$b).apply(null, arguments);
};
e.dynCall_viiiiiiii = function () {
  return (e.dynCall_viiiiiiii = e.asm.ac).apply(null, arguments);
};
e.dynCall_viiiiiiiiidd = function () {
  return (e.dynCall_viiiiiiiiidd = e.asm.bc).apply(null, arguments);
};
e.dynCall_viiiiiiiddi = function () {
  return (e.dynCall_viiiiiiiddi = e.asm.cc).apply(null, arguments);
};
e.dynCall_viiiiiiiiiiddi = function () {
  return (e.dynCall_viiiiiiiiiiddi = e.asm.dc).apply(null, arguments);
};
e.dynCall_viiid = function () {
  return (e.dynCall_viiid = e.asm.ec).apply(null, arguments);
};
e.dynCall_iiiiiiiii = function () {
  return (e.dynCall_iiiiiiiii = e.asm.fc).apply(null, arguments);
};
e.dynCall_viiiid = function () {
  return (e.dynCall_viiiid = e.asm.gc).apply(null, arguments);
};
e.dynCall_viidi = function () {
  return (e.dynCall_viidi = e.asm.hc).apply(null, arguments);
};
e.dynCall_vidii = function () {
  return (e.dynCall_vidii = e.asm.ic).apply(null, arguments);
};
e.dynCall_fiiii = function () {
  return (e.dynCall_fiiii = e.asm.jc).apply(null, arguments);
};
e.dynCall_di = function () {
  return (e.dynCall_di = e.asm.kc).apply(null, arguments);
};
e.dynCall_vid = function () {
  return (e.dynCall_vid = e.asm.lc).apply(null, arguments);
};
e.dynCall_diiii = function () {
  return (e.dynCall_diiii = e.asm.mc).apply(null, arguments);
};
e.dynCall_jiji = function () {
  return (e.dynCall_jiji = e.asm.nc).apply(null, arguments);
};
e.dynCall_iidiiii = function () {
  return (e.dynCall_iidiiii = e.asm.oc).apply(null, arguments);
};
e.dynCall_iiiiijj = function () {
  return (e.dynCall_iiiiijj = e.asm.pc).apply(null, arguments);
};
e.dynCall_iiiiiijj = function () {
  return (e.dynCall_iiiiiijj = e.asm.qc).apply(null, arguments);
};
e.dynCall_iiiij = function () {
  return (e.dynCall_iiiij = e.asm.rc).apply(null, arguments);
};
e.dynCall_vij = function () {
  return (e.dynCall_vij = e.asm.sc).apply(null, arguments);
};
function pe(a, b) {
  var c = Y();
  try {
    Fe(a, b);
  } catch (d) {
    Z(c);
    if (d !== d + 0 && "longjmp" !== d) throw d;
    X(1, 0);
  }
}
function be(a, b) {
  var c = Y();
  try {
    return Ue(a, b);
  } catch (d) {
    Z(c);
    if (d !== d + 0 && "longjmp" !== d) throw d;
    X(1, 0);
  }
}
function ue(a, b, c, d) {
  var f = Y();
  try {
    He(a, b, c, d);
  } catch (g) {
    Z(f);
    if (g !== g + 0 && "longjmp" !== g) throw g;
    X(1, 0);
  }
}
function ce(a, b, c) {
  var d = Y();
  try {
    return Ve(a, b, c);
  } catch (f) {
    Z(d);
    if (f !== f + 0 && "longjmp" !== f) throw f;
    X(1, 0);
  }
}
function qe(a, b, c) {
  var d = Y();
  try {
    Ge(a, b, c);
  } catch (f) {
    Z(d);
    if (f !== f + 0 && "longjmp" !== f) throw f;
    X(1, 0);
  }
}
function ee(a, b, c, d, f) {
  var g = Y();
  try {
    return Xe(a, b, c, d, f);
  } catch (h) {
    Z(g);
    if (h !== h + 0 && "longjmp" !== h) throw h;
    X(1, 0);
  }
}
function de(a, b, c, d) {
  var f = Y();
  try {
    return We(a, b, c, d);
  } catch (g) {
    Z(f);
    if (g !== g + 0 && "longjmp" !== g) throw g;
    X(1, 0);
  }
}
function we(a, b, c, d, f, g) {
  var h = Y();
  try {
    Je(a, b, c, d, f, g);
  } catch (m) {
    Z(h);
    if (m !== m + 0 && "longjmp" !== m) throw m;
    X(1, 0);
  }
}
function xe(a, b, c, d, f, g, h) {
  var m = Y();
  try {
    Ke(a, b, c, d, f, g, h);
  } catch (k) {
    Z(m);
    if (k !== k + 0 && "longjmp" !== k) throw k;
    X(1, 0);
  }
}
function je(a, b, c, d, f, g, h, m, k, p) {
  var n = Y();
  try {
    return af(a, b, c, d, f, g, h, m, k, p);
  } catch (q) {
    Z(n);
    if (q !== q + 0 && "longjmp" !== q) throw q;
    X(1, 0);
  }
}
function ge(a, b, c, d, f, g) {
  var h = Y();
  try {
    return Ye(a, b, c, d, f, g);
  } catch (m) {
    Z(h);
    if (m !== m + 0 && "longjmp" !== m) throw m;
    X(1, 0);
  }
}
function se(a, b, c, d, f) {
  var g = Y();
  try {
    Se(a, b, c, d, f);
  } catch (h) {
    Z(g);
    if (h !== h + 0 && "longjmp" !== h) throw h;
    X(1, 0);
  }
}
function ve(a, b, c, d, f) {
  var g = Y();
  try {
    Ie(a, b, c, d, f);
  } catch (h) {
    Z(g);
    if (h !== h + 0 && "longjmp" !== h) throw h;
    X(1, 0);
  }
}
function ze(a, b, c, d, f, g, h, m, k, p) {
  var n = Y();
  try {
    Me(a, b, c, d, f, g, h, m, k, p);
  } catch (q) {
    Z(n);
    if (q !== q + 0 && "longjmp" !== q) throw q;
    X(1, 0);
  }
}
function ae(a) {
  var b = Y();
  try {
    return Te(a);
  } catch (c) {
    Z(b);
    if (c !== c + 0 && "longjmp" !== c) throw c;
    X(1, 0);
  }
}
function oe(a) {
  var b = Y();
  try {
    Ee(a);
  } catch (c) {
    Z(b);
    if (c !== c + 0 && "longjmp" !== c) throw c;
    X(1, 0);
  }
}
function fe(a, b, c, d, f, g) {
  var h = Y();
  try {
    return df(a, b, c, d, f, g);
  } catch (m) {
    Z(h);
    if (m !== m + 0 && "longjmp" !== m) throw m;
    X(1, 0);
  }
}
function ie(a, b, c, d, f, g, h, m) {
  var k = Y();
  try {
    return $e(a, b, c, d, f, g, h, m);
  } catch (p) {
    Z(k);
    if (p !== p + 0 && "longjmp" !== p) throw p;
    X(1, 0);
  }
}
function $d(a, b, c, d) {
  var f = Y();
  try {
    return gf(a, b, c, d);
  } catch (g) {
    Z(f);
    if (g !== g + 0 && "longjmp" !== g) throw g;
    X(1, 0);
  }
}
function Zd(a, b, c, d) {
  var f = Y();
  try {
    return hf(a, b, c, d);
  } catch (g) {
    Z(f);
    if (g !== g + 0 && "longjmp" !== g) throw g;
    X(1, 0);
  }
}
function ye(a, b, c, d, f, g, h, m) {
  var k = Y();
  try {
    Le(a, b, c, d, f, g, h, m);
  } catch (p) {
    Z(k);
    if (p !== p + 0 && "longjmp" !== p) throw p;
    X(1, 0);
  }
}
function he(a, b, c, d, f, g, h) {
  var m = Y();
  try {
    return Ze(a, b, c, d, f, g, h);
  } catch (k) {
    Z(m);
    if (k !== k + 0 && "longjmp" !== k) throw k;
    X(1, 0);
  }
}
function ke(a, b, c, d, f, g, h, m, k, p, n, q) {
  var r = Y();
  try {
    return bf(a, b, c, d, f, g, h, m, k, p, n, q);
  } catch (l) {
    Z(r);
    if (l !== l + 0 && "longjmp" !== l) throw l;
    X(1, 0);
  }
}
function Ae(a, b, c, d, f, g, h, m, k, p, n) {
  var q = Y();
  try {
    Ne(a, b, c, d, f, g, h, m, k, p, n);
  } catch (r) {
    Z(q);
    if (r !== r + 0 && "longjmp" !== r) throw r;
    X(1, 0);
  }
}
function Be(a, b, c, d, f, g, h, m, k, p, n, q, r, l, v, w) {
  var z = Y();
  try {
    Oe(a, b, c, d, f, g, h, m, k, p, n, q, r, l, v, w);
  } catch (D) {
    Z(z);
    if (D !== D + 0 && "longjmp" !== D) throw D;
    X(1, 0);
  }
}
function te(a, b, c, d) {
  var f = Y();
  try {
    Qe(a, b, c, d);
  } catch (g) {
    Z(f);
    if (g !== g + 0 && "longjmp" !== g) throw g;
    X(1, 0);
  }
}
function re(a, b, c, d) {
  var f = Y();
  try {
    Re(a, b, c, d);
  } catch (g) {
    Z(f);
    if (g !== g + 0 && "longjmp" !== g) throw g;
    X(1, 0);
  }
}
function me(a, b, c) {
  var d = Y();
  try {
    return ef(a, b, c);
  } catch (f) {
    Z(d);
    if (f !== f + 0 && "longjmp" !== f) throw f;
    X(1, 0);
  }
}
function Ce(a, b, c, d, f, g, h) {
  var m = Y();
  try {
    Pe(a, b, c, d, f, g, h);
  } catch (k) {
    Z(m);
    if (k !== k + 0 && "longjmp" !== k) throw k;
    X(1, 0);
  }
}
function le(a, b, c, d, f, g, h) {
  var m = Y();
  try {
    return cf(a, b, c, d, f, g, h);
  } catch (k) {
    Z(m);
    if (k !== k + 0 && "longjmp" !== k) throw k;
    X(1, 0);
  }
}
function ne(a, b, c, d, f) {
  var g = Y();
  try {
    return ff(a, b, c, d, f);
  } catch (h) {
    Z(g);
    if (h !== h + 0 && "longjmp" !== h) throw h;
    X(1, 0);
  }
}
e.getMemory = function (a) {
  if (Va) a = Ia(a);
  else {
    var b = B[113624];
    B[113624] = (b + a + 15) & -16;
    a = b;
  }
  return a;
};
e.addRunDependency = db;
e.removeRunDependency = eb;
e.FS_createFolder = sc;
e.FS_createPath = tc;
e.FS_createDataFile = vc;
e.FS_createPreloadedFile = zc;
e.FS_createLazyFile = yc;
e.FS_createLink = wc;
e.FS_createDevice = O;
e.FS_unlink = hc;
var jf;
function kf(a) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + a + ")";
  this.status = a;
}
cb = function lf() {
  jf || mf();
  jf || (cb = lf);
};
function mf(a) {
  function b() {
    if (!jf && ((jf = !0), (e.calledRun = !0), !qa)) {
      Va = !0;
      e.noFSInit ||
        qc ||
        ((qc = !0),
        pc(),
        (e.stdin = e.stdin),
        (e.stdout = e.stdout),
        (e.stderr = e.stderr),
        e.stdin ? O("/dev", "stdin", e.stdin) : gc("/dev/tty", "/dev/stdin"),
        e.stdout
          ? O("/dev", "stdout", null, e.stdout)
          : gc("/dev/tty", "/dev/stdout"),
        e.stderr
          ? O("/dev", "stderr", null, e.stderr)
          : gc("/dev/tty1", "/dev/stderr"),
        jc("/dev/stdin", "r"),
        jc("/dev/stdout", "w"),
        jc("/dev/stderr", "w"));
      Qa(Sa);
      Qb = !1;
      Qa(Ta);
      if (e.onRuntimeInitialized) e.onRuntimeInitialized();
      if (nf) {
        var c = a,
          d = e._main;
        c = c || [];
        var f = c.length + 1,
          g = Ka(4 * (f + 1));
        B[g >> 2] = Ja(ea);
        for (var h = 1; h < f; h++) B[(g >> 2) + h] = Ja(c[h - 1]);
        B[(g >> 2) + f] = 0;
        try {
          var m = d(f, g);
          Yd(m, !0);
        } catch (k) {
          k instanceof kf ||
            ("unwind" == k
              ? (noExitRuntime = !0)
              : ((c = k) &&
                  "object" === typeof k &&
                  k.stack &&
                  (c = [k, k.stack]),
                t("exception thrown: " + c),
                fa(1, k)));
        } finally {
        }
      }
      if (e.postRun)
        for (
          "function" == typeof e.postRun && (e.postRun = [e.postRun]);
          e.postRun.length;

        )
          (c = e.postRun.shift()), Ua.unshift(c);
      Qa(Ua);
    }
  }
  a = a || da;
  if (!(0 < ab)) {
    if (e.preRun)
      for (
        "function" == typeof e.preRun && (e.preRun = [e.preRun]);
        e.preRun.length;

      )
        Wa();
    Qa(Ra);
    0 < ab ||
      (e.setStatus
        ? (e.setStatus("Running..."),
          setTimeout(function () {
            setTimeout(function () {
              e.setStatus("");
            }, 1);
            b();
          }, 1))
        : b());
  }
}
e.run = mf;
function Yd(a, b) {
  if (!b || !noExitRuntime || 0 !== a) {
    if (!noExitRuntime && ((qa = !0), e.onExit)) e.onExit(a);
    fa(a, new kf(a));
  }
}
if (e.preInit)
  for (
    "function" == typeof e.preInit && (e.preInit = [e.preInit]);
    0 < e.preInit.length;

  )
    e.preInit.pop()();
var nf = !0;
e.noInitialRun && (nf = !1);
noExitRuntime = !0;
mf();
