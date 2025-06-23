import Tn, { useDebugValue as Id, createElement as Kv, useRef as zt, useContext as cu, useState as Ve, useMemo as Oo, useEffect as Ut, memo as jl, useCallback as bs, createContext as Nl, Suspense as Hv, Fragment as zv } from "react";
import { Input as lr, Tree as Gv, Modal as lu, Alert as dr, theme as nr, Breadcrumb as Jv, Spin as vo, Menu as Yv, Tooltip as sn, Space as Xv, Button as St, Flex as st, Tag as fl, Table as Qv, Form as Mt, Typography as An, Select as vs, Row as Rp, Col as hl, Slider as Zv, InputNumber as jp, Switch as eu, Card as $l, notification as ex, Dropdown as Np, Tabs as tx } from "antd";
import { LoadingOutlined as nx, ExclamationCircleFilled as rx, CloseCircleFilled as ix, CheckCircleFilled as sx, SearchOutlined as ox, CheckOutlined as ax, CloseOutlined as ux, EditOutlined as cx, DeleteOutlined as lx, CaretDownOutlined as fx, CaretRightOutlined as hx, QuestionCircleOutlined as hi, BugOutlined as dx, PlusOutlined as px, EllipsisOutlined as gx } from "@ant-design/icons";
import { useQuery as Mn, useQueries as yx } from "@tanstack/react-query";
import { matchPath as Ml, Link as $p, useNavigate as To, useLocation as mx } from "react-router-dom";
function wx(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Mp = { exports: {} }, Xt = Mp.exports = {}, Ar, Er;
function dl() {
  throw new Error("setTimeout has not been defined");
}
function pl() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? Ar = setTimeout : Ar = dl;
  } catch {
    Ar = dl;
  }
  try {
    typeof clearTimeout == "function" ? Er = clearTimeout : Er = pl;
  } catch {
    Er = pl;
  }
})();
function Up(e) {
  if (Ar === setTimeout)
    return setTimeout(e, 0);
  if ((Ar === dl || !Ar) && setTimeout)
    return Ar = setTimeout, setTimeout(e, 0);
  try {
    return Ar(e, 0);
  } catch {
    try {
      return Ar.call(null, e, 0);
    } catch {
      return Ar.call(this, e, 0);
    }
  }
}
function bx(e) {
  if (Er === clearTimeout)
    return clearTimeout(e);
  if ((Er === pl || !Er) && clearTimeout)
    return Er = clearTimeout, clearTimeout(e);
  try {
    return Er(e);
  } catch {
    try {
      return Er.call(null, e);
    } catch {
      return Er.call(this, e);
    }
  }
}
var Mr = [], ys = !1, Oi, Va = -1;
function vx() {
  !ys || !Oi || (ys = !1, Oi.length ? Mr = Oi.concat(Mr) : Va = -1, Mr.length && Vp());
}
function Vp() {
  if (!ys) {
    var e = Up(vx);
    ys = !0;
    for (var t = Mr.length; t; ) {
      for (Oi = Mr, Mr = []; ++Va < t; )
        Oi && Oi[Va].run();
      Va = -1, t = Mr.length;
    }
    Oi = null, ys = !1, bx(e);
  }
}
Xt.nextTick = function(e) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var n = 1; n < arguments.length; n++)
      t[n - 1] = arguments[n];
  Mr.push(new qp(e, t)), Mr.length === 1 && !ys && Up(Vp);
};
function qp(e, t) {
  this.fun = e, this.array = t;
}
qp.prototype.run = function() {
  this.fun.apply(null, this.array);
};
Xt.title = "browser";
Xt.browser = !0;
Xt.env = {};
Xt.argv = [];
Xt.version = "";
Xt.versions = {};
function Wr() {
}
Xt.on = Wr;
Xt.addListener = Wr;
Xt.once = Wr;
Xt.off = Wr;
Xt.removeListener = Wr;
Xt.removeAllListeners = Wr;
Xt.emit = Wr;
Xt.prependListener = Wr;
Xt.prependOnceListener = Wr;
Xt.listeners = function(e) {
  return [];
};
Xt.binding = function(e) {
  throw new Error("process.binding is not supported");
};
Xt.cwd = function() {
  return "/";
};
Xt.chdir = function(e) {
  throw new Error("process.chdir is not supported");
};
Xt.umask = function() {
  return 0;
};
var xx = Mp.exports;
const Qe = /* @__PURE__ */ wx(xx);
var On = function() {
  return On = Object.assign || function(t) {
    for (var n, i = 1, o = arguments.length; i < o; i++) {
      n = arguments[i];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, On.apply(this, arguments);
};
function xs(e, t, n) {
  if (n || arguments.length === 2) for (var i = 0, o = t.length, a; i < o; i++)
    (a || !(i in t)) && (a || (a = Array.prototype.slice.call(t, 0, i)), a[i] = t[i]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Ax(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Ex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Sx = /* @__PURE__ */ Ax(
  function(e) {
    return Ex.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), hr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ul(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Bt = "-ms-", go = "-moz-", yt = "-webkit-", Wp = "comm", fu = "rule", Vl = "decl", Cx = "@import", _x = "@namespace", Kp = "@keyframes", kx = "@layer", Hp = Math.abs, ql = String.fromCharCode, gl = Object.assign;
function Ox(e, t) {
  return rn(e, 0) ^ 45 ? (((t << 2 ^ rn(e, 0)) << 2 ^ rn(e, 1)) << 2 ^ rn(e, 2)) << 2 ^ rn(e, 3) : 0;
}
function zp(e) {
  return e.trim();
}
function $r(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Je(e, t, n) {
  return e.replace(t, n);
}
function qa(e, t, n) {
  return e.indexOf(t, n);
}
function rn(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ri(e, t, n) {
  return e.slice(t, n);
}
function fr(e) {
  return e.length;
}
function Gp(e) {
  return e.length;
}
function co(e, t) {
  return t.push(e), e;
}
function Tx(e, t) {
  return e.map(t).join("");
}
function Fd(e, t) {
  return e.filter(function(n) {
    return !$r(n, t);
  });
}
var hu = 1, As = 1, Jp = 0, er = 0, Qt = 0, Ts = "";
function du(e, t, n, i, o, a, u, l) {
  return { value: e, root: t, parent: n, type: i, props: o, children: a, line: hu, column: As, length: u, return: "", siblings: l };
}
function ai(e, t) {
  return gl(du("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function as(e) {
  for (; e.root; )
    e = ai(e.root, { children: [e] });
  co(e, e.siblings);
}
function Ix() {
  return Qt;
}
function Fx() {
  return Qt = er > 0 ? rn(Ts, --er) : 0, As--, Qt === 10 && (As = 1, hu--), Qt;
}
function pr() {
  return Qt = er < Jp ? rn(Ts, er++) : 0, As++, Qt === 10 && (As = 1, hu++), Qt;
}
function ui() {
  return rn(Ts, er);
}
function Wa() {
  return er;
}
function pu(e, t) {
  return Ri(Ts, e, t);
}
function xo(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Bx(e) {
  return hu = As = 1, Jp = fr(Ts = e), er = 0, [];
}
function Dx(e) {
  return Ts = "", e;
}
function Vc(e) {
  return zp(pu(er - 1, yl(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Lx(e) {
  for (; (Qt = ui()) && Qt < 33; )
    pr();
  return xo(e) > 2 || xo(Qt) > 3 ? "" : " ";
}
function Px(e, t) {
  for (; --t && pr() && !(Qt < 48 || Qt > 102 || Qt > 57 && Qt < 65 || Qt > 70 && Qt < 97); )
    ;
  return pu(e, Wa() + (t < 6 && ui() == 32 && pr() == 32));
}
function yl(e) {
  for (; pr(); )
    switch (Qt) {
      case e:
        return er;
      case 34:
      case 39:
        e !== 34 && e !== 39 && yl(Qt);
        break;
      case 40:
        e === 41 && yl(e);
        break;
      case 92:
        pr();
        break;
    }
  return er;
}
function Rx(e, t) {
  for (; pr() && e + Qt !== 57; )
    if (e + Qt === 84 && ui() === 47)
      break;
  return "/*" + pu(t, er - 1) + "*" + ql(e === 47 ? e : pr());
}
function jx(e) {
  for (; !xo(ui()); )
    pr();
  return pu(e, er);
}
function Nx(e) {
  return Dx(Ka("", null, null, null, [""], e = Bx(e), 0, [0], e));
}
function Ka(e, t, n, i, o, a, u, l, f) {
  for (var d = 0, g = 0, p = u, v = 0, _ = 0, A = 0, E = 1, b = 1, D = 1, j = 0, C = "", O = o, F = a, L = i, T = C; b; )
    switch (A = j, j = pr()) {
      case 40:
        if (A != 108 && rn(T, p - 1) == 58) {
          qa(T += Je(Vc(j), "&", "&\f"), "&\f", Hp(d ? l[d - 1] : 0)) != -1 && (D = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        T += Vc(j);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        T += Lx(A);
        break;
      case 92:
        T += Px(Wa() - 1, 7);
        continue;
      case 47:
        switch (ui()) {
          case 42:
          case 47:
            co($x(Rx(pr(), Wa()), t, n, f), f), (xo(A || 1) == 5 || xo(ui() || 1) == 5) && fr(T) && Ri(T, -1, void 0) !== " " && (T += " ");
            break;
          default:
            T += "/";
        }
        break;
      case 123 * E:
        l[d++] = fr(T) * D;
      case 125 * E:
      case 59:
      case 0:
        switch (j) {
          case 0:
          case 125:
            b = 0;
          case 59 + g:
            D == -1 && (T = Je(T, /\f/g, "")), _ > 0 && (fr(T) - p || E === 0 && A === 47) && co(_ > 32 ? Dd(T + ";", i, n, p - 1, f) : Dd(Je(T, " ", "") + ";", i, n, p - 2, f), f);
            break;
          case 59:
            T += ";";
          default:
            if (co(L = Bd(T, t, n, d, g, o, l, C, O = [], F = [], p, a), a), j === 123)
              if (g === 0)
                Ka(T, t, L, L, O, a, p, l, F);
              else {
                switch (v) {
                  case 99:
                    if (rn(T, 3) === 110) break;
                  case 108:
                    if (rn(T, 2) === 97) break;
                  default:
                    g = 0;
                  case 100:
                  case 109:
                  case 115:
                }
                g ? Ka(e, L, L, i && co(Bd(e, L, L, 0, 0, o, l, C, o, O = [], p, F), F), o, F, p, l, i ? O : F) : Ka(T, L, L, L, [""], F, 0, l, F);
              }
        }
        d = g = _ = 0, E = D = 1, C = T = "", p = u;
        break;
      case 58:
        p = 1 + fr(T), _ = A;
      default:
        if (E < 1) {
          if (j == 123)
            --E;
          else if (j == 125 && E++ == 0 && Fx() == 125)
            continue;
        }
        switch (T += ql(j), j * E) {
          case 38:
            D = g > 0 ? 1 : (T += "\f", -1);
            break;
          case 44:
            l[d++] = (fr(T) - 1) * D, D = 1;
            break;
          case 64:
            ui() === 45 && (T += Vc(pr())), v = ui(), g = p = fr(C = T += jx(Wa())), j++;
            break;
          case 45:
            A === 45 && fr(T) == 2 && (E = 0);
        }
    }
  return a;
}
function Bd(e, t, n, i, o, a, u, l, f, d, g, p) {
  for (var v = o - 1, _ = o === 0 ? a : [""], A = Gp(_), E = 0, b = 0, D = 0; E < i; ++E)
    for (var j = 0, C = Ri(e, v + 1, v = Hp(b = u[E])), O = e; j < A; ++j)
      (O = zp(b > 0 ? _[j] + " " + C : Je(C, /&\f/g, _[j]))) && (f[D++] = O);
  return du(e, t, n, o === 0 ? fu : l, f, d, g, p);
}
function $x(e, t, n, i) {
  return du(e, t, n, Wp, ql(Ix()), Ri(e, 2, -2), 0, i);
}
function Dd(e, t, n, i, o) {
  return du(e, t, n, Vl, Ri(e, 0, i), Ri(e, i + 1, -1), i, o);
}
function Yp(e, t, n) {
  switch (Ox(e, t)) {
    case 5103:
      return yt + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
      return yt + e + e;
    case 4855:
      return yt + e.replace("add", "source-over").replace("substract", "source-out").replace("intersect", "source-in").replace("exclude", "xor") + e;
    case 4789:
      return go + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return yt + e + go + e + Bt + e + e;
    case 5936:
      switch (rn(e, t + 11)) {
        case 114:
          return yt + e + Bt + Je(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return yt + e + Bt + Je(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return yt + e + Bt + Je(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return yt + e + Bt + e + e;
    case 6165:
      return yt + e + Bt + "flex-" + e + e;
    case 5187:
      return yt + e + Je(e, /(\w+).+(:[^]+)/, yt + "box-$1$2" + Bt + "flex-$1$2") + e;
    case 5443:
      return yt + e + Bt + "flex-item-" + Je(e, /flex-|-self/g, "") + ($r(e, /flex-|baseline/) ? "" : Bt + "grid-row-" + Je(e, /flex-|-self/g, "")) + e;
    case 4675:
      return yt + e + Bt + "flex-line-pack" + Je(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return yt + e + Bt + Je(e, "shrink", "negative") + e;
    case 5292:
      return yt + e + Bt + Je(e, "basis", "preferred-size") + e;
    case 6060:
      return yt + "box-" + Je(e, "-grow", "") + yt + e + Bt + Je(e, "grow", "positive") + e;
    case 4554:
      return yt + Je(e, /([^-])(transform)/g, "$1" + yt + "$2") + e;
    case 6187:
      return Je(Je(Je(e, /(zoom-|grab)/, yt + "$1"), /(image-set)/, yt + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Je(e, /(image-set\([^]*)/, yt + "$1$`$1");
    case 4968:
      return Je(Je(e, /(.+:)(flex-)?(.*)/, yt + "box-pack:$3" + Bt + "flex-pack:$3"), /space-between/, "justify") + yt + e + e;
    case 4200:
      if (!$r(e, /flex-|baseline/)) return Bt + "grid-column-align" + Ri(e, t) + e;
      break;
    case 2592:
    case 3360:
      return Bt + Je(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n && n.some(function(i, o) {
        return t = o, $r(i.props, /grid-\w+-end/);
      }) ? ~qa(e + (n = n[t].value), "span", 0) ? e : Bt + Je(e, "-start", "") + e + Bt + "grid-row-span:" + (~qa(n, "span", 0) ? $r(n, /\d+/) : +$r(n, /\d+/) - +$r(e, /\d+/)) + ";" : Bt + Je(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n && n.some(function(i) {
        return $r(i.props, /grid-\w+-start/);
      }) ? e : Bt + Je(Je(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Je(e, /(.+)-inline(.+)/, yt + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (fr(e) - 1 - t > 6)
        switch (rn(e, t + 1)) {
          case 109:
            if (rn(e, t + 4) !== 45)
              break;
          case 102:
            return Je(e, /(.+:)(.+)-([^]+)/, "$1" + yt + "$2-$3$1" + go + (rn(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~qa(e, "stretch", 0) ? Yp(Je(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return Je(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(i, o, a, u, l, f, d) {
        return Bt + o + ":" + a + d + (u ? Bt + o + "-span:" + (l ? f : +f - +a) + d : "") + e;
      });
    case 4949:
      if (rn(e, t + 6) === 121)
        return Je(e, ":", ":" + yt) + e;
      break;
    case 6444:
      switch (rn(e, rn(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return Je(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + yt + (rn(e, 14) === 45 ? "inline-" : "") + "box$3$1" + yt + "$2$3$1" + Bt + "$2box$3") + e;
        case 100:
          return Je(e, ":", ":" + Bt) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return Je(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function tu(e, t) {
  for (var n = "", i = 0; i < e.length; i++)
    n += t(e[i], i, e, t) || "";
  return n;
}
function Mx(e, t, n, i) {
  switch (e.type) {
    case kx:
      if (e.children.length) break;
    case Cx:
    case _x:
    case Vl:
      return e.return = e.return || e.value;
    case Wp:
      return "";
    case Kp:
      return e.return = e.value + "{" + tu(e.children, i) + "}";
    case fu:
      if (!fr(e.value = e.props.join(","))) return "";
  }
  return fr(n = tu(e.children, i)) ? e.return = e.value + "{" + n + "}" : "";
}
function Ux(e) {
  var t = Gp(e);
  return function(n, i, o, a) {
    for (var u = "", l = 0; l < t; l++)
      u += e[l](n, i, o, a) || "";
    return u;
  };
}
function Vx(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function qx(e, t, n, i) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Vl:
        e.return = Yp(e.value, e.length, n);
        return;
      case Kp:
        return tu([ai(e, { value: Je(e.value, "@", "@" + yt) })], i);
      case fu:
        if (e.length)
          return Tx(n = e.props, function(o) {
            switch ($r(o, i = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                as(ai(e, { props: [Je(o, /:(read-\w+)/, ":" + go + "$1")] })), as(ai(e, { props: [o] })), gl(e, { props: Fd(n, i) });
                break;
              case "::placeholder":
                as(ai(e, { props: [Je(o, /:(plac\w+)/, ":" + yt + "input-$1")] })), as(ai(e, { props: [Je(o, /:(plac\w+)/, ":" + go + "$1")] })), as(ai(e, { props: [Je(o, /:(plac\w+)/, Bt + "input-$1")] })), as(ai(e, { props: [o] })), gl(e, { props: Fd(n, i) });
                break;
            }
            return "";
          });
    }
}
var Wx = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, ji = typeof Qe < "u" && Qe.env !== void 0 && (Qe.env.REACT_APP_SC_ATTR || Qe.env.SC_ATTR) || "data-styled", Wl = typeof window < "u" && "HTMLElement" in window, Kx = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof Qe < "u" && Qe.env !== void 0 && Qe.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && Qe.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? Qe.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && Qe.env.REACT_APP_SC_DISABLE_SPEEDY : typeof Qe < "u" && Qe.env !== void 0 && Qe.env.SC_DISABLE_SPEEDY !== void 0 && Qe.env.SC_DISABLE_SPEEDY !== "" ? Qe.env.SC_DISABLE_SPEEDY !== "false" && Qe.env.SC_DISABLE_SPEEDY : Qe.env.NODE_ENV !== "production"), Ld = /invalid hook call/i, Fa = /* @__PURE__ */ new Set(), Hx = function(e, t) {
  if (Qe.env.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", i = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var a = !0;
      console.error = function(u) {
        for (var l = [], f = 1; f < arguments.length; f++) l[f - 1] = arguments[f];
        Ld.test(u) ? (a = !1, Fa.delete(i)) : o.apply(void 0, xs([u], l, !1));
      }, zt(), a && !Fa.has(i) && (console.warn(i), Fa.add(i));
    } catch (u) {
      Ld.test(u.message) && Fa.delete(i);
    } finally {
      console.error = o;
    }
  }
}, gu = Object.freeze([]), Es = Object.freeze({});
function zx(e, t, n) {
  return n === void 0 && (n = Es), e.theme !== n.theme && e.theme || t || n.theme;
}
var ml = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Gx = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Jx = /(^-|-$)/g;
function Pd(e) {
  return e.replace(Gx, "-").replace(Jx, "");
}
var Yx = /(a)(d)/gi, Rd = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function wl(e) {
  var t, n = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = Rd(t % 52) + n;
  return (Rd(t % 52) + n).replace(Yx, "$1-$2");
}
var qc, _i = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Xp = function(e) {
  return _i(5381, e);
};
function Xx(e) {
  return wl(Xp(e) >>> 0);
}
function Qp(e) {
  return Qe.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Wc(e) {
  return typeof e == "string" && (Qe.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Zp = typeof Symbol == "function" && Symbol.for, e0 = Zp ? Symbol.for("react.memo") : 60115, Qx = Zp ? Symbol.for("react.forward_ref") : 60112, Zx = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, eA = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, t0 = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, tA = ((qc = {})[Qx] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, qc[e0] = t0, qc);
function jd(e) {
  return ("type" in (t = e) && t.type.$$typeof) === e0 ? t0 : "$$typeof" in e ? tA[e.$$typeof] : Zx;
  var t;
}
var nA = Object.defineProperty, rA = Object.getOwnPropertyNames, Nd = Object.getOwnPropertySymbols, iA = Object.getOwnPropertyDescriptor, sA = Object.getPrototypeOf, $d = Object.prototype;
function n0(e, t, n) {
  if (typeof t != "string") {
    if ($d) {
      var i = sA(t);
      i && i !== $d && n0(e, i, n);
    }
    var o = rA(t);
    Nd && (o = o.concat(Nd(t)));
    for (var a = jd(e), u = jd(t), l = 0; l < o.length; ++l) {
      var f = o[l];
      if (!(f in eA || n && n[f] || u && f in u || a && f in a)) {
        var d = iA(t, f);
        try {
          nA(e, f, d);
        } catch {
        }
      }
    }
  }
  return e;
}
function Ss(e) {
  return typeof e == "function";
}
function Kl(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Ti(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Md(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], i = 1; i < e.length; i++) n += e[i];
  return n;
}
function Cs(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function bl(e, t, n) {
  if (n === void 0 && (n = !1), !n && !Cs(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var i = 0; i < t.length; i++) e[i] = bl(e[i], t[i]);
  else if (Cs(t)) for (var i in t) e[i] = bl(e[i], t[i]);
  return e;
}
function Hl(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var oA = Qe.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function aA() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], i = [], o = 1, a = e.length; o < a; o += 1) i.push(e[o]);
  return i.forEach(function(u) {
    n = n.replace(/%[a-z]/, u);
  }), n;
}
function Is(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return Qe.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(aA.apply(void 0, xs([oA[e]], t, !1)).trim());
}
var uA = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var n = 0, i = 0; i < t; i++) n += this.groupSizes[i];
    return n;
  }, e.prototype.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var i = this.groupSizes, o = i.length, a = o; t >= a; ) if ((a <<= 1) < 0) throw Is(16, "".concat(t));
      this.groupSizes = new Uint32Array(a), this.groupSizes.set(i), this.length = a;
      for (var u = o; u < a; u++) this.groupSizes[u] = 0;
    }
    for (var l = this.indexOfGroup(t + 1), f = (u = 0, n.length); u < f; u++) this.tag.insertRule(l, n[u]) && (this.groupSizes[t]++, l++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], i = this.indexOfGroup(t), o = i + n;
      this.groupSizes[t] = 0;
      for (var a = i; a < o; a++) this.tag.deleteRule(i);
    }
  }, e.prototype.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0) return n;
    for (var i = this.groupSizes[t], o = this.indexOfGroup(t), a = o + i, u = o; u < a; u++) n += "".concat(this.tag.getRule(u)).concat(`/*!sc*/
`);
    return n;
  }, e;
}(), Ha = /* @__PURE__ */ new Map(), nu = /* @__PURE__ */ new Map(), Kc = 1, Ba = function(e) {
  if (Ha.has(e)) return Ha.get(e);
  for (; nu.has(Kc); ) Kc++;
  var t = Kc++;
  if (Qe.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1073741824)) throw Is(16, "".concat(t));
  return Ha.set(e, t), nu.set(t, e), t;
}, cA = function(e, t) {
  Ha.set(e, t), nu.set(t, e);
}, lA = "style[".concat(ji, "][").concat("data-styled-version", '="').concat("6.0.7", '"]'), fA = new RegExp("^".concat(ji, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), hA = function(e, t, n) {
  for (var i, o = n.split(","), a = 0, u = o.length; a < u; a++) (i = o[a]) && e.registerName(t, i);
}, dA = function(e, t) {
  for (var n, i = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(`/*!sc*/
`), o = [], a = 0, u = i.length; a < u; a++) {
    var l = i[a].trim();
    if (l) {
      var f = l.match(fA);
      if (f) {
        var d = 0 | parseInt(f[1], 10), g = f[2];
        d !== 0 && (cA(g, d), hA(e, g, f[3]), e.getTag().insertRules(d, o)), o.length = 0;
      } else o.push(l);
    }
  }
};
function pA() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var r0 = function(e) {
  var t = document.head, n = e || t, i = document.createElement("style"), o = function(l) {
    var f = Array.from(l.querySelectorAll("style[".concat(ji, "]")));
    return f[f.length - 1];
  }(n), a = o !== void 0 ? o.nextSibling : null;
  i.setAttribute(ji, "active"), i.setAttribute("data-styled-version", "6.0.7");
  var u = pA();
  return u && i.setAttribute("nonce", u), n.insertBefore(i, a), i;
}, gA = function() {
  function e(t) {
    this.element = r0(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet) return n.sheet;
      for (var i = document.styleSheets, o = 0, a = i.length; o < a; o++) {
        var u = i[o];
        if (u.ownerNode === n) return u;
      }
      throw Is(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    try {
      return this.sheet.insertRule(n, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var n = this.sheet.cssRules[t];
    return n && n.cssText ? n.cssText : "";
  }, e;
}(), yA = function() {
  function e(t) {
    this.element = r0(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var i = document.createTextNode(n);
      return this.element.insertBefore(i, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), mA = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), Ud = Wl, wA = { isServer: !Wl, useCSSOMInjection: !Kx }, i0 = function() {
  function e(t, n, i) {
    t === void 0 && (t = Es), n === void 0 && (n = {});
    var o = this;
    this.options = On(On({}, wA), t), this.gs = n, this.names = new Map(i), this.server = !!t.isServer, !this.server && Wl && Ud && (Ud = !1, function(a) {
      for (var u = document.querySelectorAll(lA), l = 0, f = u.length; l < f; l++) {
        var d = u[l];
        d && d.getAttribute(ji) !== "active" && (dA(a, d), d.parentNode && d.parentNode.removeChild(d));
      }
    }(this)), Hl(this, function() {
      return function(a) {
        for (var u = a.getTag(), l = u.length, f = "", d = function(p) {
          var v = function(D) {
            return nu.get(D);
          }(p);
          if (v === void 0) return "continue";
          var _ = a.names.get(v), A = u.getGroup(p);
          if (_ === void 0 || A.length === 0) return "continue";
          var E = "".concat(ji, ".g").concat(p, '[id="').concat(v, '"]'), b = "";
          _ !== void 0 && _.forEach(function(D) {
            D.length > 0 && (b += "".concat(D, ","));
          }), f += "".concat(A).concat(E, '{content:"').concat(b, '"}').concat(`/*!sc*/
`);
        }, g = 0; g < l; g++) d(g);
        return f;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return Ba(t);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(On(On({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var i = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new mA(o) : i ? new gA(o) : new yA(o);
    }(this.options), new uA(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, e.prototype.registerName = function(t, n) {
    if (Ba(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var i = /* @__PURE__ */ new Set();
      i.add(n), this.names.set(t, i);
    }
  }, e.prototype.insertRules = function(t, n, i) {
    this.registerName(t, n), this.getTag().insertRules(Ba(t), i);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(Ba(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), bA = /&/g, vA = /^\s*\/\/.*$/gm;
function s0(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(i) {
      return "".concat(t, " ").concat(i);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = s0(n.children, t)), n;
  });
}
function xA(e) {
  var t, n, i, o = Es, a = o.options, u = a === void 0 ? Es : a, l = o.plugins, f = l === void 0 ? gu : l, d = function(v, _, A) {
    return A === n || A.startsWith(n) && A.endsWith(n) && A.replaceAll(n, "").length > 0 ? ".".concat(t) : v;
  }, g = f.slice();
  g.push(function(v) {
    v.type === fu && v.value.includes("&") && (v.props[0] = v.props[0].replace(bA, n).replace(i, d));
  }), u.prefix && g.push(qx), g.push(Mx);
  var p = function(v, _, A, E) {
    _ === void 0 && (_ = ""), A === void 0 && (A = ""), E === void 0 && (E = "&"), t = E, n = _, i = new RegExp("\\".concat(n, "\\b"), "g");
    var b = v.replace(vA, ""), D = Nx(A || _ ? "".concat(A, " ").concat(_, " { ").concat(b, " }") : b);
    u.namespace && (D = s0(D, u.namespace));
    var j = [];
    return tu(D, Ux(g.concat(Vx(function(C) {
      return j.push(C);
    })))), j;
  };
  return p.hash = f.length ? f.reduce(function(v, _) {
    return _.name || Is(15), _i(v, _.name);
  }, 5381).toString() : "", p;
}
var AA = new i0(), vl = xA(), o0 = Tn.createContext({ shouldForwardProp: void 0, styleSheet: AA, stylis: vl });
o0.Consumer;
Tn.createContext(void 0);
function Vd() {
  return cu(o0);
}
var qd = function() {
  function e(t, n) {
    var i = this;
    this.inject = function(o, a) {
      a === void 0 && (a = vl);
      var u = i.name + a.hash;
      o.hasNameForId(i.id, u) || o.insertRules(i.id, u, a(i.rules, u, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, Hl(this, function() {
      throw Is(12, String(i.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = vl), this.name + t.hash;
  }, e;
}(), EA = function(e) {
  return e >= "A" && e <= "Z";
};
function Wd(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var i = e[n];
    if (n === 1 && i === "-" && e[0] === "-") return e;
    EA(i) ? t += "-" + i.toLowerCase() : t += i;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var a0 = function(e) {
  return e == null || e === !1 || e === "";
}, u0 = function(e) {
  var t, n, i = [];
  for (var o in e) {
    var a = e[o];
    e.hasOwnProperty(o) && !a0(a) && (Array.isArray(a) && a.isCss || Ss(a) ? i.push("".concat(Wd(o), ":"), a, ";") : Cs(a) ? i.push.apply(i, xs(xs(["".concat(o, " {")], u0(a), !1), ["}"], !1)) : i.push("".concat(Wd(o), ": ").concat((t = o, (n = a) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in Wx || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return i;
};
function Bi(e, t, n, i) {
  if (a0(e)) return [];
  if (Kl(e)) return [".".concat(e.styledComponentId)];
  if (Ss(e)) {
    if (!Ss(a = e) || a.prototype && a.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return Qe.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof qd || Cs(o) || o === null || console.error("".concat(Qp(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Bi(o, t, n, i);
  }
  var a;
  return e instanceof qd ? n ? (e.inject(n, i), [e.getName(i)]) : [e] : Cs(e) ? u0(e) : Array.isArray(e) ? Array.prototype.concat.apply(gu, e.map(function(u) {
    return Bi(u, t, n, i);
  })) : [e.toString()];
}
function SA(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Ss(n) && !Kl(n)) return !1;
  }
  return !0;
}
var CA = Xp("6.0.7"), _A = function() {
  function e(t, n, i) {
    this.rules = t, this.staticRulesId = "", this.isStatic = Qe.env.NODE_ENV === "production" && (i === void 0 || i.isStatic) && SA(t), this.componentId = n, this.baseHash = _i(CA, n), this.baseStyle = i, i0.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, i) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, i) : "";
    if (this.isStatic && !i.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = Ti(o, this.staticRulesId);
    else {
      var a = Md(Bi(this.rules, t, n, i)), u = wl(_i(this.baseHash, a) >>> 0);
      if (!n.hasNameForId(this.componentId, u)) {
        var l = i(a, ".".concat(u), void 0, this.componentId);
        n.insertRules(this.componentId, u, l);
      }
      o = Ti(o, u), this.staticRulesId = u;
    }
    else {
      for (var f = _i(this.baseHash, i.hash), d = "", g = 0; g < this.rules.length; g++) {
        var p = this.rules[g];
        if (typeof p == "string") d += p, Qe.env.NODE_ENV !== "production" && (f = _i(f, p));
        else if (p) {
          var v = Md(Bi(p, t, n, i));
          f = _i(f, v), d += v;
        }
      }
      if (d) {
        var _ = wl(f >>> 0);
        n.hasNameForId(this.componentId, _) || n.insertRules(this.componentId, _, i(d, ".".concat(_), void 0, this.componentId)), o = Ti(o, _);
      }
    }
    return o;
  }, e;
}(), c0 = Tn.createContext(void 0);
c0.Consumer;
var Hc = {}, Kd = /* @__PURE__ */ new Set();
function kA(e, t, n) {
  var i = Kl(e), o = e, a = !Wc(e), u = t.attrs, l = u === void 0 ? gu : u, f = t.componentId, d = f === void 0 ? function(O, F) {
    var L = typeof O != "string" ? "sc" : Pd(O);
    Hc[L] = (Hc[L] || 0) + 1;
    var T = "".concat(L, "-").concat(Xx("6.0.7" + L + Hc[L]));
    return F ? "".concat(F, "-").concat(T) : T;
  }(t.displayName, t.parentComponentId) : f, g = t.displayName, p = g === void 0 ? function(O) {
    return Wc(O) ? "styled.".concat(O) : "Styled(".concat(Qp(O), ")");
  }(e) : g, v = t.displayName && t.componentId ? "".concat(Pd(t.displayName), "-").concat(t.componentId) : t.componentId || d, _ = i && o.attrs ? o.attrs.concat(l).filter(Boolean) : l, A = t.shouldForwardProp;
  if (i && o.shouldForwardProp) {
    var E = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var b = t.shouldForwardProp;
      A = function(O, F) {
        return E(O, F) && b(O, F);
      };
    } else A = E;
  }
  var D = new _A(n, v, i ? o.componentStyle : void 0);
  function j(O, F) {
    return function(L, T, q) {
      var J = L.attrs, oe = L.componentStyle, ae = L.defaultProps, he = L.foldedComponentIds, de = L.styledComponentId, Ae = L.target, fe = Tn.useContext(c0), Be = Vd(), be = L.shouldForwardProp || Be.shouldForwardProp;
      Qe.env.NODE_ENV !== "production" && Id(de);
      var ve = function(X, ie, Te) {
        for (var Me, Ee = On(On({}, ie), { className: void 0, theme: Te }), Ie = 0; Ie < X.length; Ie += 1) {
          var _e = Ss(Me = X[Ie]) ? Me(Ee) : Me;
          for (var De in _e) Ee[De] = De === "className" ? Ti(Ee[De], _e[De]) : De === "style" ? On(On({}, Ee[De]), _e[De]) : _e[De];
        }
        return ie.className && (Ee.className = Ti(Ee.className, ie.className)), Ee;
      }(J, T, zx(T, fe, ae) || Es), We = ve.as || Ae, we = {};
      for (var pe in ve) ve[pe] === void 0 || pe[0] === "$" || pe === "as" || pe === "theme" || (pe === "forwardedAs" ? we.as = ve.forwardedAs : be && !be(pe, We) || (we[pe] = ve[pe], be || Qe.env.NODE_ENV !== "development" || Sx(pe) || Kd.has(pe) || !ml.has(We) || (Kd.add(pe), console.warn('styled-components: it looks like an unknown prop "'.concat(pe, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var je = function(X, ie) {
        var Te = Vd(), Me = X.generateAndInjectStyles(ie, Te.styleSheet, Te.stylis);
        return Qe.env.NODE_ENV !== "production" && Id(Me), Me;
      }(oe, ve);
      Qe.env.NODE_ENV !== "production" && L.warnTooManyClasses && L.warnTooManyClasses(je);
      var G = Ti(he, de);
      return je && (G += " " + je), ve.className && (G += " " + ve.className), we[Wc(We) && !ml.has(We) ? "class" : "className"] = G, we.ref = q, Kv(We, we);
    }(C, O, F);
  }
  Qe.env.NODE_ENV !== "production" && (j.displayName = p);
  var C = Tn.forwardRef(j);
  return C.attrs = _, C.componentStyle = D, C.shouldForwardProp = A, Qe.env.NODE_ENV !== "production" && (C.displayName = p), C.foldedComponentIds = i ? Ti(o.foldedComponentIds, o.styledComponentId) : "", C.styledComponentId = v, C.target = i ? o.target : e, Object.defineProperty(C, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(O) {
    this._foldedDefaultProps = i ? function(F) {
      for (var L = [], T = 1; T < arguments.length; T++) L[T - 1] = arguments[T];
      for (var q = 0, J = L; q < J.length; q++) bl(F, J[q], !0);
      return F;
    }({}, o.defaultProps, O) : O;
  } }), Qe.env.NODE_ENV !== "production" && (Hx(p, v), C.warnTooManyClasses = /* @__PURE__ */ function(O, F) {
    var L = {}, T = !1;
    return function(q) {
      if (!T && (L[q] = !0, Object.keys(L).length >= 200)) {
        var J = F ? ' with the id of "'.concat(F, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(O).concat(J, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), T = !0, L = {};
      }
    };
  }(p, v)), Hl(C, function() {
    return ".".concat(C.styledComponentId);
  }), a && n0(C, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), C;
}
function Hd(e, t) {
  for (var n = [e[0]], i = 0, o = t.length; i < o; i += 1) n.push(t[i], e[i + 1]);
  return n;
}
var zd = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function OA(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (Ss(e) || Cs(e)) {
    var i = e;
    return zd(Bi(Hd(gu, xs([i], t, !0))));
  }
  var o = e;
  return t.length === 0 && o.length === 1 && typeof o[0] == "string" ? Bi(o) : zd(Bi(Hd(o, t)));
}
function xl(e, t, n) {
  if (n === void 0 && (n = Es), !t) throw Is(1, t);
  var i = function(o) {
    for (var a = [], u = 1; u < arguments.length; u++) a[u - 1] = arguments[u];
    return e(t, n, OA.apply(void 0, xs([o], a, !1)));
  };
  return i.attrs = function(o) {
    return xl(e, t, On(On({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, i.withConfig = function(o) {
    return xl(e, t, On(On({}, n), o));
  }, i;
}
var l0 = function(e) {
  return xl(kA, e);
}, Ze = l0;
ml.forEach(function(e) {
  Ze[e] = l0(e);
});
Qe.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Da = "__sc-".concat(ji, "__");
Qe.env.NODE_ENV !== "production" && Qe.env.NODE_ENV !== "test" && typeof window < "u" && (window[Da] || (window[Da] = 0), window[Da] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Da] += 1);
const Ur = Ze.div`
  height: ${({ $space: e, $spaceMob: t, $samespace: n }) => t || (e && n ? e : 24)}px;
  width: 100%;

  @media (min-width: 1024px) {
    height: ${({ $space: e }) => e ?? "48"}px;
  }
`;
var Al = { exports: {} }, so = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gd;
function TA() {
  if (Gd) return so;
  Gd = 1;
  var e = Tn, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(l, f, d) {
    var g, p = {}, v = null, _ = null;
    d !== void 0 && (v = "" + d), f.key !== void 0 && (v = "" + f.key), f.ref !== void 0 && (_ = f.ref);
    for (g in f) i.call(f, g) && !a.hasOwnProperty(g) && (p[g] = f[g]);
    if (l && l.defaultProps) for (g in f = l.defaultProps, f) p[g] === void 0 && (p[g] = f[g]);
    return { $$typeof: t, type: l, key: v, ref: _, props: p, _owner: o.current };
  }
  return so.Fragment = n, so.jsx = u, so.jsxs = u, so;
}
var oo = {}, Jd;
function IA() {
  return Jd || (Jd = 1, Qe.env.NODE_ENV !== "production" && function() {
    var e = Tn, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), l = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), A = Symbol.iterator, E = "@@iterator";
    function b(M) {
      if (M === null || typeof M != "object")
        return null;
      var ue = A && M[A] || M[E];
      return typeof ue == "function" ? ue : null;
    }
    var D = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(M) {
      {
        for (var ue = arguments.length, ye = new Array(ue > 1 ? ue - 1 : 0), Oe = 1; Oe < ue; Oe++)
          ye[Oe - 1] = arguments[Oe];
        C("error", M, ye);
      }
    }
    function C(M, ue, ye) {
      {
        var Oe = D.ReactDebugCurrentFrame, ct = Oe.getStackAddendum();
        ct !== "" && (ue += "%s", ye = ye.concat([ct]));
        var lt = ye.map(function(Xe) {
          return String(Xe);
        });
        lt.unshift("Warning: " + ue), Function.prototype.apply.call(console[M], console, lt);
      }
    }
    var O = !1, F = !1, L = !1, T = !1, q = !1, J;
    J = Symbol.for("react.module.reference");
    function oe(M) {
      return !!(typeof M == "string" || typeof M == "function" || M === i || M === a || q || M === o || M === d || M === g || T || M === _ || O || F || L || typeof M == "object" && M !== null && (M.$$typeof === v || M.$$typeof === p || M.$$typeof === u || M.$$typeof === l || M.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      M.$$typeof === J || M.getModuleId !== void 0));
    }
    function ae(M, ue, ye) {
      var Oe = M.displayName;
      if (Oe)
        return Oe;
      var ct = ue.displayName || ue.name || "";
      return ct !== "" ? ye + "(" + ct + ")" : ye;
    }
    function he(M) {
      return M.displayName || "Context";
    }
    function de(M) {
      if (M == null)
        return null;
      if (typeof M.tag == "number" && j("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof M == "function")
        return M.displayName || M.name || null;
      if (typeof M == "string")
        return M;
      switch (M) {
        case i:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case d:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof M == "object")
        switch (M.$$typeof) {
          case l:
            var ue = M;
            return he(ue) + ".Consumer";
          case u:
            var ye = M;
            return he(ye._context) + ".Provider";
          case f:
            return ae(M, M.render, "ForwardRef");
          case p:
            var Oe = M.displayName || null;
            return Oe !== null ? Oe : de(M.type) || "Memo";
          case v: {
            var ct = M, lt = ct._payload, Xe = ct._init;
            try {
              return de(Xe(lt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ae = Object.assign, fe = 0, Be, be, ve, We, we, pe, je;
    function G() {
    }
    G.__reactDisabledLog = !0;
    function X() {
      {
        if (fe === 0) {
          Be = console.log, be = console.info, ve = console.warn, We = console.error, we = console.group, pe = console.groupCollapsed, je = console.groupEnd;
          var M = {
            configurable: !0,
            enumerable: !0,
            value: G,
            writable: !0
          };
          Object.defineProperties(console, {
            info: M,
            log: M,
            warn: M,
            error: M,
            group: M,
            groupCollapsed: M,
            groupEnd: M
          });
        }
        fe++;
      }
    }
    function ie() {
      {
        if (fe--, fe === 0) {
          var M = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ae({}, M, {
              value: Be
            }),
            info: Ae({}, M, {
              value: be
            }),
            warn: Ae({}, M, {
              value: ve
            }),
            error: Ae({}, M, {
              value: We
            }),
            group: Ae({}, M, {
              value: we
            }),
            groupCollapsed: Ae({}, M, {
              value: pe
            }),
            groupEnd: Ae({}, M, {
              value: je
            })
          });
        }
        fe < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Te = D.ReactCurrentDispatcher, Me;
    function Ee(M, ue, ye) {
      {
        if (Me === void 0)
          try {
            throw Error();
          } catch (ct) {
            var Oe = ct.stack.trim().match(/\n( *(at )?)/);
            Me = Oe && Oe[1] || "";
          }
        return `
` + Me + M;
      }
    }
    var Ie = !1, _e;
    {
      var De = typeof WeakMap == "function" ? WeakMap : Map;
      _e = new De();
    }
    function _t(M, ue) {
      if (!M || Ie)
        return "";
      {
        var ye = _e.get(M);
        if (ye !== void 0)
          return ye;
      }
      var Oe;
      Ie = !0;
      var ct = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var lt;
      lt = Te.current, Te.current = null, X();
      try {
        if (ue) {
          var Xe = function() {
            throw Error();
          };
          if (Object.defineProperty(Xe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Xe, []);
            } catch (qt) {
              Oe = qt;
            }
            Reflect.construct(M, [], Xe);
          } else {
            try {
              Xe.call();
            } catch (qt) {
              Oe = qt;
            }
            M.call(Xe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (qt) {
            Oe = qt;
          }
          M();
        }
      } catch (qt) {
        if (qt && Oe && typeof qt.stack == "string") {
          for (var ze = qt.stack.split(`
`), Zt = Oe.stack.split(`
`), It = ze.length - 1, Dt = Zt.length - 1; It >= 1 && Dt >= 0 && ze[It] !== Zt[Dt]; )
            Dt--;
          for (; It >= 1 && Dt >= 0; It--, Dt--)
            if (ze[It] !== Zt[Dt]) {
              if (It !== 1 || Dt !== 1)
                do
                  if (It--, Dt--, Dt < 0 || ze[It] !== Zt[Dt]) {
                    var hn = `
` + ze[It].replace(" at new ", " at ");
                    return M.displayName && hn.includes("<anonymous>") && (hn = hn.replace("<anonymous>", M.displayName)), typeof M == "function" && _e.set(M, hn), hn;
                  }
                while (It >= 1 && Dt >= 0);
              break;
            }
        }
      } finally {
        Ie = !1, Te.current = lt, ie(), Error.prepareStackTrace = ct;
      }
      var Fn = M ? M.displayName || M.name : "", ir = Fn ? Ee(Fn) : "";
      return typeof M == "function" && _e.set(M, ir), ir;
    }
    function on(M, ue, ye) {
      return _t(M, !1);
    }
    function Rt(M) {
      var ue = M.prototype;
      return !!(ue && ue.isReactComponent);
    }
    function jt(M, ue, ye) {
      if (M == null)
        return "";
      if (typeof M == "function")
        return _t(M, Rt(M));
      if (typeof M == "string")
        return Ee(M);
      switch (M) {
        case d:
          return Ee("Suspense");
        case g:
          return Ee("SuspenseList");
      }
      if (typeof M == "object")
        switch (M.$$typeof) {
          case f:
            return on(M.render);
          case p:
            return jt(M.type, ue, ye);
          case v: {
            var Oe = M, ct = Oe._payload, lt = Oe._init;
            try {
              return jt(lt(ct), ue, ye);
            } catch {
            }
          }
        }
      return "";
    }
    var Nt = Object.prototype.hasOwnProperty, wt = {}, In = D.ReactDebugCurrentFrame;
    function En(M) {
      if (M) {
        var ue = M._owner, ye = jt(M.type, M._source, ue ? ue.type : null);
        In.setExtraStackFrame(ye);
      } else
        In.setExtraStackFrame(null);
    }
    function Se(M, ue, ye, Oe, ct) {
      {
        var lt = Function.call.bind(Nt);
        for (var Xe in M)
          if (lt(M, Xe)) {
            var ze = void 0;
            try {
              if (typeof M[Xe] != "function") {
                var Zt = Error((Oe || "React class") + ": " + ye + " type `" + Xe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof M[Xe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Zt.name = "Invariant Violation", Zt;
              }
              ze = M[Xe](ue, Xe, Oe, ye, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (It) {
              ze = It;
            }
            ze && !(ze instanceof Error) && (En(ct), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Oe || "React class", ye, Xe, typeof ze), En(null)), ze instanceof Error && !(ze.message in wt) && (wt[ze.message] = !0, En(ct), j("Failed %s type: %s", ye, ze.message), En(null));
          }
      }
    }
    var Fe = Array.isArray;
    function ce(M) {
      return Fe(M);
    }
    function vt(M) {
      {
        var ue = typeof Symbol == "function" && Symbol.toStringTag, ye = ue && M[Symbol.toStringTag] || M.constructor.name || "Object";
        return ye;
      }
    }
    function xt(M) {
      try {
        return At(M), !1;
      } catch {
        return !0;
      }
    }
    function At(M) {
      return "" + M;
    }
    function et(M) {
      if (xt(M))
        return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", vt(M)), At(M);
    }
    var ge = D.ReactCurrentOwner, Ce = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, at, I;
    function y(M) {
      if (Nt.call(M, "ref")) {
        var ue = Object.getOwnPropertyDescriptor(M, "ref").get;
        if (ue && ue.isReactWarning)
          return !1;
      }
      return M.ref !== void 0;
    }
    function w(M) {
      if (Nt.call(M, "key")) {
        var ue = Object.getOwnPropertyDescriptor(M, "key").get;
        if (ue && ue.isReactWarning)
          return !1;
      }
      return M.key !== void 0;
    }
    function R(M, ue) {
      typeof M.ref == "string" && ge.current;
    }
    function V(M, ue) {
      {
        var ye = function() {
          at || (at = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ue));
        };
        ye.isReactWarning = !0, Object.defineProperty(M, "key", {
          get: ye,
          configurable: !0
        });
      }
    }
    function z(M, ue) {
      {
        var ye = function() {
          I || (I = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ue));
        };
        ye.isReactWarning = !0, Object.defineProperty(M, "ref", {
          get: ye,
          configurable: !0
        });
      }
    }
    var Q = function(M, ue, ye, Oe, ct, lt, Xe) {
      var ze = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: M,
        key: ue,
        ref: ye,
        props: Xe,
        // Record the component responsible for creating this element.
        _owner: lt
      };
      return ze._store = {}, Object.defineProperty(ze._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ze, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Oe
      }), Object.defineProperty(ze, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ct
      }), Object.freeze && (Object.freeze(ze.props), Object.freeze(ze)), ze;
    };
    function Ne(M, ue, ye, Oe, ct) {
      {
        var lt, Xe = {}, ze = null, Zt = null;
        ye !== void 0 && (et(ye), ze = "" + ye), w(ue) && (et(ue.key), ze = "" + ue.key), y(ue) && (Zt = ue.ref, R(ue, ct));
        for (lt in ue)
          Nt.call(ue, lt) && !Ce.hasOwnProperty(lt) && (Xe[lt] = ue[lt]);
        if (M && M.defaultProps) {
          var It = M.defaultProps;
          for (lt in It)
            Xe[lt] === void 0 && (Xe[lt] = It[lt]);
        }
        if (ze || Zt) {
          var Dt = typeof M == "function" ? M.displayName || M.name || "Unknown" : M;
          ze && V(Xe, Dt), Zt && z(Xe, Dt);
        }
        return Q(M, ze, Zt, ct, Oe, ge.current, Xe);
      }
    }
    var dt = D.ReactCurrentOwner, ut = D.ReactDebugCurrentFrame;
    function ft(M) {
      if (M) {
        var ue = M._owner, ye = jt(M.type, M._source, ue ? ue.type : null);
        ut.setExtraStackFrame(ye);
      } else
        ut.setExtraStackFrame(null);
    }
    var rt;
    rt = !1;
    function Hr(M) {
      return typeof M == "object" && M !== null && M.$$typeof === t;
    }
    function di() {
      {
        if (dt.current) {
          var M = de(dt.current.type);
          if (M)
            return `

Check the render method of \`` + M + "`.";
        }
        return "";
      }
    }
    function Vi(M) {
      return "";
    }
    var qi = {};
    function Wi(M) {
      {
        var ue = di();
        if (!ue) {
          var ye = typeof M == "string" ? M : M.displayName || M.name;
          ye && (ue = `

Check the top-level render call using <` + ye + ">.");
        }
        return ue;
      }
    }
    function zr(M, ue) {
      {
        if (!M._store || M._store.validated || M.key != null)
          return;
        M._store.validated = !0;
        var ye = Wi(ue);
        if (qi[ye])
          return;
        qi[ye] = !0;
        var Oe = "";
        M && M._owner && M._owner !== dt.current && (Oe = " It was passed a child from " + de(M._owner.type) + "."), ft(M), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ye, Oe), ft(null);
      }
    }
    function pi(M, ue) {
      {
        if (typeof M != "object")
          return;
        if (ce(M))
          for (var ye = 0; ye < M.length; ye++) {
            var Oe = M[ye];
            Hr(Oe) && zr(Oe, ue);
          }
        else if (Hr(M))
          M._store && (M._store.validated = !0);
        else if (M) {
          var ct = b(M);
          if (typeof ct == "function" && ct !== M.entries)
            for (var lt = ct.call(M), Xe; !(Xe = lt.next()).done; )
              Hr(Xe.value) && zr(Xe.value, ue);
        }
      }
    }
    function js(M) {
      {
        var ue = M.type;
        if (ue == null || typeof ue == "string")
          return;
        var ye;
        if (typeof ue == "function")
          ye = ue.propTypes;
        else if (typeof ue == "object" && (ue.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ue.$$typeof === p))
          ye = ue.propTypes;
        else
          return;
        if (ye) {
          var Oe = de(ue);
          Se(ye, M.props, "prop", Oe, M);
        } else if (ue.PropTypes !== void 0 && !rt) {
          rt = !0;
          var ct = de(ue);
          j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ct || "Unknown");
        }
        typeof ue.getDefaultProps == "function" && !ue.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ns(M) {
      {
        for (var ue = Object.keys(M.props), ye = 0; ye < ue.length; ye++) {
          var Oe = ue[ye];
          if (Oe !== "children" && Oe !== "key") {
            ft(M), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Oe), ft(null);
            break;
          }
        }
        M.ref !== null && (ft(M), j("Invalid attribute `ref` supplied to `React.Fragment`."), ft(null));
      }
    }
    var Tr = {};
    function rr(M, ue, ye, Oe, ct, lt) {
      {
        var Xe = oe(M);
        if (!Xe) {
          var ze = "";
          (M === void 0 || typeof M == "object" && M !== null && Object.keys(M).length === 0) && (ze += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Zt = Vi();
          Zt ? ze += Zt : ze += di();
          var It;
          M === null ? It = "null" : ce(M) ? It = "array" : M !== void 0 && M.$$typeof === t ? (It = "<" + (de(M.type) || "Unknown") + " />", ze = " Did you accidentally export a JSX literal instead of a component?") : It = typeof M, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", It, ze);
        }
        var Dt = Ne(M, ue, ye, ct, lt);
        if (Dt == null)
          return Dt;
        if (Xe) {
          var hn = ue.children;
          if (hn !== void 0)
            if (Oe)
              if (ce(hn)) {
                for (var Fn = 0; Fn < hn.length; Fn++)
                  pi(hn[Fn], M);
                Object.freeze && Object.freeze(hn);
              } else
                j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              pi(hn, M);
        }
        if (Nt.call(ue, "key")) {
          var ir = de(M), qt = Object.keys(ue).filter(function(Vs) {
            return Vs !== "key";
          }), gi = qt.length > 0 ? "{key: someKey, " + qt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Tr[ir + gi]) {
            var Us = qt.length > 0 ? "{" + qt.join(": ..., ") + ": ...}" : "{}";
            j(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, gi, ir, Us, ir), Tr[ir + gi] = !0;
          }
        }
        return M === i ? Ns(Dt) : js(Dt), Dt;
      }
    }
    function Gr(M, ue, ye) {
      return rr(M, ue, ye, !0);
    }
    function $s(M, ue, ye) {
      return rr(M, ue, ye, !1);
    }
    var Ms = $s, yn = Gr;
    oo.Fragment = i, oo.jsx = Ms, oo.jsxs = yn;
  }()), oo;
}
Qe.env.NODE_ENV === "production" ? Al.exports = TA() : Al.exports = IA();
var x = Al.exports;
const FA = Ze.div`
  .ant-tree-switcher {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`, BA = {
  CustomTreeProvider: FA
}, { Search: DA } = lr, _4 = ({ treeData: e, onSelect: t }) => {
  const [n, i] = Ve([]), [o, a] = Ve(""), u = (f) => {
    const { value: d } = f.target, g = {}, p = (b, D) => {
      b.forEach((j) => {
        g[j.key] = D, j.children && p(j.children, j.key);
      });
    };
    p(e, null);
    const v = (b) => {
      const D = [];
      let j = g[b];
      for (; j; )
        D.push(j), j = g[j];
      return D;
    }, _ = [], A = (b) => {
      b.forEach((D) => {
        if (D.title.toLowerCase().includes(d.toLowerCase())) {
          _.push(D.key);
          const C = v(D.key);
          _.push(...C);
        }
        D.children && A(D.children);
      });
    };
    A(e);
    const E = Array.from(new Set(_)).filter(Boolean);
    i(E), a(d);
  }, l = (f) => f.map((d) => {
    const g = d.title, p = g.toLowerCase().indexOf(o.toLowerCase()), v = g.substring(0, p), _ = g.substring(p + o.length), A = p > -1 ? /* @__PURE__ */ x.jsxs("span", { children: [
      v,
      /* @__PURE__ */ x.jsx("span", { style: { color: "#f50" }, children: o }),
      _
    ] }) : /* @__PURE__ */ x.jsx("span", { children: g });
    return d.children ? { ...d, title: A, children: l(d.children) } : { ...d, title: A };
  });
  return /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    /* @__PURE__ */ x.jsx(DA, { style: { marginBottom: 8 }, placeholder: "Search", onChange: u }),
    /* @__PURE__ */ x.jsx(BA.CustomTreeProvider, { children: /* @__PURE__ */ x.jsx(
      Gv,
      {
        treeData: l(e),
        expandedKeys: n,
        onExpand: (f) => {
          i(f);
        },
        onSelect: (f, d) => {
          t && t(f, d), n.includes(d.node.key) ? i([...n.filter((g) => g !== d.node.key)]) : i([...n, d.node.key]);
        }
      }
    ) })
  ] });
}, LA = globalThis || void 0 || self;
function f0(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: PA } = Object.prototype, { getPrototypeOf: zl } = Object, yu = /* @__PURE__ */ ((e) => (t) => {
  const n = PA.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), kr = (e) => (e = e.toLowerCase(), (t) => yu(t) === e), mu = (e) => (t) => typeof t === e, { isArray: Fs } = Array, Ao = mu("undefined");
function RA(e) {
  return e !== null && !Ao(e) && e.constructor !== null && !Ao(e.constructor) && Xn(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const h0 = kr("ArrayBuffer");
function jA(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && h0(e.buffer), t;
}
const NA = mu("string"), Xn = mu("function"), d0 = mu("number"), wu = (e) => e !== null && typeof e == "object", $A = (e) => e === !0 || e === !1, za = (e) => {
  if (yu(e) !== "object")
    return !1;
  const t = zl(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, MA = kr("Date"), UA = kr("File"), VA = kr("Blob"), qA = kr("FileList"), WA = (e) => wu(e) && Xn(e.pipe), KA = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Xn(e.append) && ((t = yu(e)) === "formdata" || // detect form-data instance
  t === "object" && Xn(e.toString) && e.toString() === "[object FormData]"));
}, HA = kr("URLSearchParams"), zA = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Io(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let i, o;
  if (typeof e != "object" && (e = [e]), Fs(e))
    for (i = 0, o = e.length; i < o; i++)
      t.call(null, e[i], i, e);
  else {
    const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e), u = a.length;
    let l;
    for (i = 0; i < u; i++)
      l = a[i], t.call(null, e[l], l, e);
  }
}
function p0(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let i = n.length, o;
  for (; i-- > 0; )
    if (o = n[i], t === o.toLowerCase())
      return o;
  return null;
}
const g0 = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : LA, y0 = (e) => !Ao(e) && e !== g0;
function El() {
  const { caseless: e } = y0(this) && this || {}, t = {}, n = (i, o) => {
    const a = e && p0(t, o) || o;
    za(t[a]) && za(i) ? t[a] = El(t[a], i) : za(i) ? t[a] = El({}, i) : Fs(i) ? t[a] = i.slice() : t[a] = i;
  };
  for (let i = 0, o = arguments.length; i < o; i++)
    arguments[i] && Io(arguments[i], n);
  return t;
}
const GA = (e, t, n, { allOwnKeys: i } = {}) => (Io(t, (o, a) => {
  n && Xn(o) ? e[a] = f0(o, n) : e[a] = o;
}, { allOwnKeys: i }), e), JA = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), YA = (e, t, n, i) => {
  e.prototype = Object.create(t.prototype, i), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, XA = (e, t, n, i) => {
  let o, a, u;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
      u = o[a], (!i || i(u, e, t)) && !l[u] && (t[u] = e[u], l[u] = !0);
    e = n !== !1 && zl(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, QA = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const i = e.indexOf(t, n);
  return i !== -1 && i === n;
}, ZA = (e) => {
  if (!e) return null;
  if (Fs(e)) return e;
  let t = e.length;
  if (!d0(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, eE = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && zl(Uint8Array)), tE = (e, t) => {
  const i = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = i.next()) && !o.done; ) {
    const a = o.value;
    t.call(e, a[0], a[1]);
  }
}, nE = (e, t) => {
  let n;
  const i = [];
  for (; (n = e.exec(t)) !== null; )
    i.push(n);
  return i;
}, rE = kr("HTMLFormElement"), iE = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, i, o) {
    return i.toUpperCase() + o;
  }
), Yd = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), sE = kr("RegExp"), m0 = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), i = {};
  Io(n, (o, a) => {
    t(o, a, e) !== !1 && (i[a] = o);
  }), Object.defineProperties(e, i);
}, oE = (e) => {
  m0(e, (t, n) => {
    if (Xn(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const i = e[n];
    if (Xn(i)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, aE = (e, t) => {
  const n = {}, i = (o) => {
    o.forEach((a) => {
      n[a] = !0;
    });
  };
  return Fs(e) ? i(e) : i(String(e).split(t)), n;
}, uE = () => {
}, cE = (e, t) => (e = +e, Number.isFinite(e) ? e : t), zc = "abcdefghijklmnopqrstuvwxyz", Xd = "0123456789", w0 = {
  DIGIT: Xd,
  ALPHA: zc,
  ALPHA_DIGIT: zc + zc.toUpperCase() + Xd
}, lE = (e = 16, t = w0.ALPHA_DIGIT) => {
  let n = "";
  const { length: i } = t;
  for (; e--; )
    n += t[Math.random() * i | 0];
  return n;
};
function fE(e) {
  return !!(e && Xn(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const hE = (e) => {
  const t = new Array(10), n = (i, o) => {
    if (wu(i)) {
      if (t.indexOf(i) >= 0)
        return;
      if (!("toJSON" in i)) {
        t[o] = i;
        const a = Fs(i) ? [] : {};
        return Io(i, (u, l) => {
          const f = n(u, o + 1);
          !Ao(f) && (a[l] = f);
        }), t[o] = void 0, a;
      }
    }
    return i;
  };
  return n(e, 0);
}, dE = kr("AsyncFunction"), pE = (e) => e && (wu(e) || Xn(e)) && Xn(e.then) && Xn(e.catch), te = {
  isArray: Fs,
  isArrayBuffer: h0,
  isBuffer: RA,
  isFormData: KA,
  isArrayBufferView: jA,
  isString: NA,
  isNumber: d0,
  isBoolean: $A,
  isObject: wu,
  isPlainObject: za,
  isUndefined: Ao,
  isDate: MA,
  isFile: UA,
  isBlob: VA,
  isRegExp: sE,
  isFunction: Xn,
  isStream: WA,
  isURLSearchParams: HA,
  isTypedArray: eE,
  isFileList: qA,
  forEach: Io,
  merge: El,
  extend: GA,
  trim: zA,
  stripBOM: JA,
  inherits: YA,
  toFlatObject: XA,
  kindOf: yu,
  kindOfTest: kr,
  endsWith: QA,
  toArray: ZA,
  forEachEntry: tE,
  matchAll: nE,
  isHTMLForm: rE,
  hasOwnProperty: Yd,
  hasOwnProp: Yd,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: m0,
  freezeMethods: oE,
  toObjectSet: aE,
  toCamelCase: iE,
  noop: uE,
  toFiniteNumber: cE,
  findKey: p0,
  global: g0,
  isContextDefined: y0,
  ALPHABET: w0,
  generateString: lE,
  isSpecCompliantForm: fE,
  toJSONObject: hE,
  isAsyncFn: dE,
  isThenable: pE
};
var b0 = {}, bu = {};
bu.byteLength = mE;
bu.toByteArray = bE;
bu.fromByteArray = AE;
var Sr = [], Jn = [], gE = typeof Uint8Array < "u" ? Uint8Array : Array, Gc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var us = 0, yE = Gc.length; us < yE; ++us)
  Sr[us] = Gc[us], Jn[Gc.charCodeAt(us)] = us;
Jn[45] = 62;
Jn[95] = 63;
function v0(e) {
  var t = e.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var n = e.indexOf("=");
  n === -1 && (n = t);
  var i = n === t ? 0 : 4 - n % 4;
  return [n, i];
}
function mE(e) {
  var t = v0(e), n = t[0], i = t[1];
  return (n + i) * 3 / 4 - i;
}
function wE(e, t, n) {
  return (t + n) * 3 / 4 - n;
}
function bE(e) {
  var t, n = v0(e), i = n[0], o = n[1], a = new gE(wE(e, i, o)), u = 0, l = o > 0 ? i - 4 : i, f;
  for (f = 0; f < l; f += 4)
    t = Jn[e.charCodeAt(f)] << 18 | Jn[e.charCodeAt(f + 1)] << 12 | Jn[e.charCodeAt(f + 2)] << 6 | Jn[e.charCodeAt(f + 3)], a[u++] = t >> 16 & 255, a[u++] = t >> 8 & 255, a[u++] = t & 255;
  return o === 2 && (t = Jn[e.charCodeAt(f)] << 2 | Jn[e.charCodeAt(f + 1)] >> 4, a[u++] = t & 255), o === 1 && (t = Jn[e.charCodeAt(f)] << 10 | Jn[e.charCodeAt(f + 1)] << 4 | Jn[e.charCodeAt(f + 2)] >> 2, a[u++] = t >> 8 & 255, a[u++] = t & 255), a;
}
function vE(e) {
  return Sr[e >> 18 & 63] + Sr[e >> 12 & 63] + Sr[e >> 6 & 63] + Sr[e & 63];
}
function xE(e, t, n) {
  for (var i, o = [], a = t; a < n; a += 3)
    i = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (e[a + 2] & 255), o.push(vE(i));
  return o.join("");
}
function AE(e) {
  for (var t, n = e.length, i = n % 3, o = [], a = 16383, u = 0, l = n - i; u < l; u += a)
    o.push(xE(e, u, u + a > l ? l : u + a));
  return i === 1 ? (t = e[n - 1], o.push(
    Sr[t >> 2] + Sr[t << 4 & 63] + "=="
  )) : i === 2 && (t = (e[n - 2] << 8) + e[n - 1], o.push(
    Sr[t >> 10] + Sr[t >> 4 & 63] + Sr[t << 2 & 63] + "="
  )), o.join("");
}
var Gl = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Gl.read = function(e, t, n, i, o) {
  var a, u, l = o * 8 - i - 1, f = (1 << l) - 1, d = f >> 1, g = -7, p = n ? o - 1 : 0, v = n ? -1 : 1, _ = e[t + p];
  for (p += v, a = _ & (1 << -g) - 1, _ >>= -g, g += l; g > 0; a = a * 256 + e[t + p], p += v, g -= 8)
    ;
  for (u = a & (1 << -g) - 1, a >>= -g, g += i; g > 0; u = u * 256 + e[t + p], p += v, g -= 8)
    ;
  if (a === 0)
    a = 1 - d;
  else {
    if (a === f)
      return u ? NaN : (_ ? -1 : 1) * (1 / 0);
    u = u + Math.pow(2, i), a = a - d;
  }
  return (_ ? -1 : 1) * u * Math.pow(2, a - i);
};
Gl.write = function(e, t, n, i, o, a) {
  var u, l, f, d = a * 8 - o - 1, g = (1 << d) - 1, p = g >> 1, v = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, _ = i ? 0 : a - 1, A = i ? 1 : -1, E = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (l = isNaN(t) ? 1 : 0, u = g) : (u = Math.floor(Math.log(t) / Math.LN2), t * (f = Math.pow(2, -u)) < 1 && (u--, f *= 2), u + p >= 1 ? t += v / f : t += v * Math.pow(2, 1 - p), t * f >= 2 && (u++, f /= 2), u + p >= g ? (l = 0, u = g) : u + p >= 1 ? (l = (t * f - 1) * Math.pow(2, o), u = u + p) : (l = t * Math.pow(2, p - 1) * Math.pow(2, o), u = 0)); o >= 8; e[n + _] = l & 255, _ += A, l /= 256, o -= 8)
    ;
  for (u = u << o | l, d += o; d > 0; e[n + _] = u & 255, _ += A, u /= 256, d -= 8)
    ;
  e[n + _ - A] |= E * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(e) {
  const t = bu, n = Gl, i = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = g, e.SlowBuffer = F, e.INSPECT_MAX_BYTES = 50;
  const o = 2147483647;
  e.kMaxLength = o;
  const { Uint8Array: a, ArrayBuffer: u, SharedArrayBuffer: l } = globalThis;
  g.TYPED_ARRAY_SUPPORT = f(), !g.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function f() {
    try {
      const I = new a(1), y = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(y, a.prototype), Object.setPrototypeOf(I, y), I.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(g.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (g.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(g.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (g.isBuffer(this))
        return this.byteOffset;
    }
  });
  function d(I) {
    if (I > o)
      throw new RangeError('The value "' + I + '" is invalid for option "size"');
    const y = new a(I);
    return Object.setPrototypeOf(y, g.prototype), y;
  }
  function g(I, y, w) {
    if (typeof I == "number") {
      if (typeof y == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return A(I);
    }
    return p(I, y, w);
  }
  g.poolSize = 8192;
  function p(I, y, w) {
    if (typeof I == "string")
      return E(I, y);
    if (u.isView(I))
      return D(I);
    if (I == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof I
      );
    if (At(I, u) || I && At(I.buffer, u) || typeof l < "u" && (At(I, l) || I && At(I.buffer, l)))
      return j(I, y, w);
    if (typeof I == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const R = I.valueOf && I.valueOf();
    if (R != null && R !== I)
      return g.from(R, y, w);
    const V = C(I);
    if (V) return V;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof I[Symbol.toPrimitive] == "function")
      return g.from(I[Symbol.toPrimitive]("string"), y, w);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof I
    );
  }
  g.from = function(I, y, w) {
    return p(I, y, w);
  }, Object.setPrototypeOf(g.prototype, a.prototype), Object.setPrototypeOf(g, a);
  function v(I) {
    if (typeof I != "number")
      throw new TypeError('"size" argument must be of type number');
    if (I < 0)
      throw new RangeError('The value "' + I + '" is invalid for option "size"');
  }
  function _(I, y, w) {
    return v(I), I <= 0 ? d(I) : y !== void 0 ? typeof w == "string" ? d(I).fill(y, w) : d(I).fill(y) : d(I);
  }
  g.alloc = function(I, y, w) {
    return _(I, y, w);
  };
  function A(I) {
    return v(I), d(I < 0 ? 0 : O(I) | 0);
  }
  g.allocUnsafe = function(I) {
    return A(I);
  }, g.allocUnsafeSlow = function(I) {
    return A(I);
  };
  function E(I, y) {
    if ((typeof y != "string" || y === "") && (y = "utf8"), !g.isEncoding(y))
      throw new TypeError("Unknown encoding: " + y);
    const w = L(I, y) | 0;
    let R = d(w);
    const V = R.write(I, y);
    return V !== w && (R = R.slice(0, V)), R;
  }
  function b(I) {
    const y = I.length < 0 ? 0 : O(I.length) | 0, w = d(y);
    for (let R = 0; R < y; R += 1)
      w[R] = I[R] & 255;
    return w;
  }
  function D(I) {
    if (At(I, a)) {
      const y = new a(I);
      return j(y.buffer, y.byteOffset, y.byteLength);
    }
    return b(I);
  }
  function j(I, y, w) {
    if (y < 0 || I.byteLength < y)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (I.byteLength < y + (w || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let R;
    return y === void 0 && w === void 0 ? R = new a(I) : w === void 0 ? R = new a(I, y) : R = new a(I, y, w), Object.setPrototypeOf(R, g.prototype), R;
  }
  function C(I) {
    if (g.isBuffer(I)) {
      const y = O(I.length) | 0, w = d(y);
      return w.length === 0 || I.copy(w, 0, 0, y), w;
    }
    if (I.length !== void 0)
      return typeof I.length != "number" || et(I.length) ? d(0) : b(I);
    if (I.type === "Buffer" && Array.isArray(I.data))
      return b(I.data);
  }
  function O(I) {
    if (I >= o)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
    return I | 0;
  }
  function F(I) {
    return +I != I && (I = 0), g.alloc(+I);
  }
  g.isBuffer = function(y) {
    return y != null && y._isBuffer === !0 && y !== g.prototype;
  }, g.compare = function(y, w) {
    if (At(y, a) && (y = g.from(y, y.offset, y.byteLength)), At(w, a) && (w = g.from(w, w.offset, w.byteLength)), !g.isBuffer(y) || !g.isBuffer(w))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (y === w) return 0;
    let R = y.length, V = w.length;
    for (let z = 0, Q = Math.min(R, V); z < Q; ++z)
      if (y[z] !== w[z]) {
        R = y[z], V = w[z];
        break;
      }
    return R < V ? -1 : V < R ? 1 : 0;
  }, g.isEncoding = function(y) {
    switch (String(y).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, g.concat = function(y, w) {
    if (!Array.isArray(y))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (y.length === 0)
      return g.alloc(0);
    let R;
    if (w === void 0)
      for (w = 0, R = 0; R < y.length; ++R)
        w += y[R].length;
    const V = g.allocUnsafe(w);
    let z = 0;
    for (R = 0; R < y.length; ++R) {
      let Q = y[R];
      if (At(Q, a))
        z + Q.length > V.length ? (g.isBuffer(Q) || (Q = g.from(Q)), Q.copy(V, z)) : a.prototype.set.call(
          V,
          Q,
          z
        );
      else if (g.isBuffer(Q))
        Q.copy(V, z);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      z += Q.length;
    }
    return V;
  };
  function L(I, y) {
    if (g.isBuffer(I))
      return I.length;
    if (u.isView(I) || At(I, u))
      return I.byteLength;
    if (typeof I != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof I
      );
    const w = I.length, R = arguments.length > 2 && arguments[2] === !0;
    if (!R && w === 0) return 0;
    let V = !1;
    for (; ; )
      switch (y) {
        case "ascii":
        case "latin1":
        case "binary":
          return w;
        case "utf8":
        case "utf-8":
          return Se(I).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return w * 2;
        case "hex":
          return w >>> 1;
        case "base64":
          return vt(I).length;
        default:
          if (V)
            return R ? -1 : Se(I).length;
          y = ("" + y).toLowerCase(), V = !0;
      }
  }
  g.byteLength = L;
  function T(I, y, w) {
    let R = !1;
    if ((y === void 0 || y < 0) && (y = 0), y > this.length || ((w === void 0 || w > this.length) && (w = this.length), w <= 0) || (w >>>= 0, y >>>= 0, w <= y))
      return "";
    for (I || (I = "utf8"); ; )
      switch (I) {
        case "hex":
          return je(this, y, w);
        case "utf8":
        case "utf-8":
          return be(this, y, w);
        case "ascii":
          return we(this, y, w);
        case "latin1":
        case "binary":
          return pe(this, y, w);
        case "base64":
          return Be(this, y, w);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return G(this, y, w);
        default:
          if (R) throw new TypeError("Unknown encoding: " + I);
          I = (I + "").toLowerCase(), R = !0;
      }
  }
  g.prototype._isBuffer = !0;
  function q(I, y, w) {
    const R = I[y];
    I[y] = I[w], I[w] = R;
  }
  g.prototype.swap16 = function() {
    const y = this.length;
    if (y % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let w = 0; w < y; w += 2)
      q(this, w, w + 1);
    return this;
  }, g.prototype.swap32 = function() {
    const y = this.length;
    if (y % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let w = 0; w < y; w += 4)
      q(this, w, w + 3), q(this, w + 1, w + 2);
    return this;
  }, g.prototype.swap64 = function() {
    const y = this.length;
    if (y % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let w = 0; w < y; w += 8)
      q(this, w, w + 7), q(this, w + 1, w + 6), q(this, w + 2, w + 5), q(this, w + 3, w + 4);
    return this;
  }, g.prototype.toString = function() {
    const y = this.length;
    return y === 0 ? "" : arguments.length === 0 ? be(this, 0, y) : T.apply(this, arguments);
  }, g.prototype.toLocaleString = g.prototype.toString, g.prototype.equals = function(y) {
    if (!g.isBuffer(y)) throw new TypeError("Argument must be a Buffer");
    return this === y ? !0 : g.compare(this, y) === 0;
  }, g.prototype.inspect = function() {
    let y = "";
    const w = e.INSPECT_MAX_BYTES;
    return y = this.toString("hex", 0, w).replace(/(.{2})/g, "$1 ").trim(), this.length > w && (y += " ... "), "<Buffer " + y + ">";
  }, i && (g.prototype[i] = g.prototype.inspect), g.prototype.compare = function(y, w, R, V, z) {
    if (At(y, a) && (y = g.from(y, y.offset, y.byteLength)), !g.isBuffer(y))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof y
      );
    if (w === void 0 && (w = 0), R === void 0 && (R = y ? y.length : 0), V === void 0 && (V = 0), z === void 0 && (z = this.length), w < 0 || R > y.length || V < 0 || z > this.length)
      throw new RangeError("out of range index");
    if (V >= z && w >= R)
      return 0;
    if (V >= z)
      return -1;
    if (w >= R)
      return 1;
    if (w >>>= 0, R >>>= 0, V >>>= 0, z >>>= 0, this === y) return 0;
    let Q = z - V, Ne = R - w;
    const dt = Math.min(Q, Ne), ut = this.slice(V, z), ft = y.slice(w, R);
    for (let rt = 0; rt < dt; ++rt)
      if (ut[rt] !== ft[rt]) {
        Q = ut[rt], Ne = ft[rt];
        break;
      }
    return Q < Ne ? -1 : Ne < Q ? 1 : 0;
  };
  function J(I, y, w, R, V) {
    if (I.length === 0) return -1;
    if (typeof w == "string" ? (R = w, w = 0) : w > 2147483647 ? w = 2147483647 : w < -2147483648 && (w = -2147483648), w = +w, et(w) && (w = V ? 0 : I.length - 1), w < 0 && (w = I.length + w), w >= I.length) {
      if (V) return -1;
      w = I.length - 1;
    } else if (w < 0)
      if (V) w = 0;
      else return -1;
    if (typeof y == "string" && (y = g.from(y, R)), g.isBuffer(y))
      return y.length === 0 ? -1 : oe(I, y, w, R, V);
    if (typeof y == "number")
      return y = y & 255, typeof a.prototype.indexOf == "function" ? V ? a.prototype.indexOf.call(I, y, w) : a.prototype.lastIndexOf.call(I, y, w) : oe(I, [y], w, R, V);
    throw new TypeError("val must be string, number or Buffer");
  }
  function oe(I, y, w, R, V) {
    let z = 1, Q = I.length, Ne = y.length;
    if (R !== void 0 && (R = String(R).toLowerCase(), R === "ucs2" || R === "ucs-2" || R === "utf16le" || R === "utf-16le")) {
      if (I.length < 2 || y.length < 2)
        return -1;
      z = 2, Q /= 2, Ne /= 2, w /= 2;
    }
    function dt(ft, rt) {
      return z === 1 ? ft[rt] : ft.readUInt16BE(rt * z);
    }
    let ut;
    if (V) {
      let ft = -1;
      for (ut = w; ut < Q; ut++)
        if (dt(I, ut) === dt(y, ft === -1 ? 0 : ut - ft)) {
          if (ft === -1 && (ft = ut), ut - ft + 1 === Ne) return ft * z;
        } else
          ft !== -1 && (ut -= ut - ft), ft = -1;
    } else
      for (w + Ne > Q && (w = Q - Ne), ut = w; ut >= 0; ut--) {
        let ft = !0;
        for (let rt = 0; rt < Ne; rt++)
          if (dt(I, ut + rt) !== dt(y, rt)) {
            ft = !1;
            break;
          }
        if (ft) return ut;
      }
    return -1;
  }
  g.prototype.includes = function(y, w, R) {
    return this.indexOf(y, w, R) !== -1;
  }, g.prototype.indexOf = function(y, w, R) {
    return J(this, y, w, R, !0);
  }, g.prototype.lastIndexOf = function(y, w, R) {
    return J(this, y, w, R, !1);
  };
  function ae(I, y, w, R) {
    w = Number(w) || 0;
    const V = I.length - w;
    R ? (R = Number(R), R > V && (R = V)) : R = V;
    const z = y.length;
    R > z / 2 && (R = z / 2);
    let Q;
    for (Q = 0; Q < R; ++Q) {
      const Ne = parseInt(y.substr(Q * 2, 2), 16);
      if (et(Ne)) return Q;
      I[w + Q] = Ne;
    }
    return Q;
  }
  function he(I, y, w, R) {
    return xt(Se(y, I.length - w), I, w, R);
  }
  function de(I, y, w, R) {
    return xt(Fe(y), I, w, R);
  }
  function Ae(I, y, w, R) {
    return xt(vt(y), I, w, R);
  }
  function fe(I, y, w, R) {
    return xt(ce(y, I.length - w), I, w, R);
  }
  g.prototype.write = function(y, w, R, V) {
    if (w === void 0)
      V = "utf8", R = this.length, w = 0;
    else if (R === void 0 && typeof w == "string")
      V = w, R = this.length, w = 0;
    else if (isFinite(w))
      w = w >>> 0, isFinite(R) ? (R = R >>> 0, V === void 0 && (V = "utf8")) : (V = R, R = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const z = this.length - w;
    if ((R === void 0 || R > z) && (R = z), y.length > 0 && (R < 0 || w < 0) || w > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    V || (V = "utf8");
    let Q = !1;
    for (; ; )
      switch (V) {
        case "hex":
          return ae(this, y, w, R);
        case "utf8":
        case "utf-8":
          return he(this, y, w, R);
        case "ascii":
        case "latin1":
        case "binary":
          return de(this, y, w, R);
        case "base64":
          return Ae(this, y, w, R);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return fe(this, y, w, R);
        default:
          if (Q) throw new TypeError("Unknown encoding: " + V);
          V = ("" + V).toLowerCase(), Q = !0;
      }
  }, g.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function Be(I, y, w) {
    return y === 0 && w === I.length ? t.fromByteArray(I) : t.fromByteArray(I.slice(y, w));
  }
  function be(I, y, w) {
    w = Math.min(I.length, w);
    const R = [];
    let V = y;
    for (; V < w; ) {
      const z = I[V];
      let Q = null, Ne = z > 239 ? 4 : z > 223 ? 3 : z > 191 ? 2 : 1;
      if (V + Ne <= w) {
        let dt, ut, ft, rt;
        switch (Ne) {
          case 1:
            z < 128 && (Q = z);
            break;
          case 2:
            dt = I[V + 1], (dt & 192) === 128 && (rt = (z & 31) << 6 | dt & 63, rt > 127 && (Q = rt));
            break;
          case 3:
            dt = I[V + 1], ut = I[V + 2], (dt & 192) === 128 && (ut & 192) === 128 && (rt = (z & 15) << 12 | (dt & 63) << 6 | ut & 63, rt > 2047 && (rt < 55296 || rt > 57343) && (Q = rt));
            break;
          case 4:
            dt = I[V + 1], ut = I[V + 2], ft = I[V + 3], (dt & 192) === 128 && (ut & 192) === 128 && (ft & 192) === 128 && (rt = (z & 15) << 18 | (dt & 63) << 12 | (ut & 63) << 6 | ft & 63, rt > 65535 && rt < 1114112 && (Q = rt));
        }
      }
      Q === null ? (Q = 65533, Ne = 1) : Q > 65535 && (Q -= 65536, R.push(Q >>> 10 & 1023 | 55296), Q = 56320 | Q & 1023), R.push(Q), V += Ne;
    }
    return We(R);
  }
  const ve = 4096;
  function We(I) {
    const y = I.length;
    if (y <= ve)
      return String.fromCharCode.apply(String, I);
    let w = "", R = 0;
    for (; R < y; )
      w += String.fromCharCode.apply(
        String,
        I.slice(R, R += ve)
      );
    return w;
  }
  function we(I, y, w) {
    let R = "";
    w = Math.min(I.length, w);
    for (let V = y; V < w; ++V)
      R += String.fromCharCode(I[V] & 127);
    return R;
  }
  function pe(I, y, w) {
    let R = "";
    w = Math.min(I.length, w);
    for (let V = y; V < w; ++V)
      R += String.fromCharCode(I[V]);
    return R;
  }
  function je(I, y, w) {
    const R = I.length;
    (!y || y < 0) && (y = 0), (!w || w < 0 || w > R) && (w = R);
    let V = "";
    for (let z = y; z < w; ++z)
      V += ge[I[z]];
    return V;
  }
  function G(I, y, w) {
    const R = I.slice(y, w);
    let V = "";
    for (let z = 0; z < R.length - 1; z += 2)
      V += String.fromCharCode(R[z] + R[z + 1] * 256);
    return V;
  }
  g.prototype.slice = function(y, w) {
    const R = this.length;
    y = ~~y, w = w === void 0 ? R : ~~w, y < 0 ? (y += R, y < 0 && (y = 0)) : y > R && (y = R), w < 0 ? (w += R, w < 0 && (w = 0)) : w > R && (w = R), w < y && (w = y);
    const V = this.subarray(y, w);
    return Object.setPrototypeOf(V, g.prototype), V;
  };
  function X(I, y, w) {
    if (I % 1 !== 0 || I < 0) throw new RangeError("offset is not uint");
    if (I + y > w) throw new RangeError("Trying to access beyond buffer length");
  }
  g.prototype.readUintLE = g.prototype.readUIntLE = function(y, w, R) {
    y = y >>> 0, w = w >>> 0, R || X(y, w, this.length);
    let V = this[y], z = 1, Q = 0;
    for (; ++Q < w && (z *= 256); )
      V += this[y + Q] * z;
    return V;
  }, g.prototype.readUintBE = g.prototype.readUIntBE = function(y, w, R) {
    y = y >>> 0, w = w >>> 0, R || X(y, w, this.length);
    let V = this[y + --w], z = 1;
    for (; w > 0 && (z *= 256); )
      V += this[y + --w] * z;
    return V;
  }, g.prototype.readUint8 = g.prototype.readUInt8 = function(y, w) {
    return y = y >>> 0, w || X(y, 1, this.length), this[y];
  }, g.prototype.readUint16LE = g.prototype.readUInt16LE = function(y, w) {
    return y = y >>> 0, w || X(y, 2, this.length), this[y] | this[y + 1] << 8;
  }, g.prototype.readUint16BE = g.prototype.readUInt16BE = function(y, w) {
    return y = y >>> 0, w || X(y, 2, this.length), this[y] << 8 | this[y + 1];
  }, g.prototype.readUint32LE = g.prototype.readUInt32LE = function(y, w) {
    return y = y >>> 0, w || X(y, 4, this.length), (this[y] | this[y + 1] << 8 | this[y + 2] << 16) + this[y + 3] * 16777216;
  }, g.prototype.readUint32BE = g.prototype.readUInt32BE = function(y, w) {
    return y = y >>> 0, w || X(y, 4, this.length), this[y] * 16777216 + (this[y + 1] << 16 | this[y + 2] << 8 | this[y + 3]);
  }, g.prototype.readBigUInt64LE = Ce(function(y) {
    y = y >>> 0, Nt(y, "offset");
    const w = this[y], R = this[y + 7];
    (w === void 0 || R === void 0) && wt(y, this.length - 8);
    const V = w + this[++y] * 2 ** 8 + this[++y] * 2 ** 16 + this[++y] * 2 ** 24, z = this[++y] + this[++y] * 2 ** 8 + this[++y] * 2 ** 16 + R * 2 ** 24;
    return BigInt(V) + (BigInt(z) << BigInt(32));
  }), g.prototype.readBigUInt64BE = Ce(function(y) {
    y = y >>> 0, Nt(y, "offset");
    const w = this[y], R = this[y + 7];
    (w === void 0 || R === void 0) && wt(y, this.length - 8);
    const V = w * 2 ** 24 + this[++y] * 2 ** 16 + this[++y] * 2 ** 8 + this[++y], z = this[++y] * 2 ** 24 + this[++y] * 2 ** 16 + this[++y] * 2 ** 8 + R;
    return (BigInt(V) << BigInt(32)) + BigInt(z);
  }), g.prototype.readIntLE = function(y, w, R) {
    y = y >>> 0, w = w >>> 0, R || X(y, w, this.length);
    let V = this[y], z = 1, Q = 0;
    for (; ++Q < w && (z *= 256); )
      V += this[y + Q] * z;
    return z *= 128, V >= z && (V -= Math.pow(2, 8 * w)), V;
  }, g.prototype.readIntBE = function(y, w, R) {
    y = y >>> 0, w = w >>> 0, R || X(y, w, this.length);
    let V = w, z = 1, Q = this[y + --V];
    for (; V > 0 && (z *= 256); )
      Q += this[y + --V] * z;
    return z *= 128, Q >= z && (Q -= Math.pow(2, 8 * w)), Q;
  }, g.prototype.readInt8 = function(y, w) {
    return y = y >>> 0, w || X(y, 1, this.length), this[y] & 128 ? (255 - this[y] + 1) * -1 : this[y];
  }, g.prototype.readInt16LE = function(y, w) {
    y = y >>> 0, w || X(y, 2, this.length);
    const R = this[y] | this[y + 1] << 8;
    return R & 32768 ? R | 4294901760 : R;
  }, g.prototype.readInt16BE = function(y, w) {
    y = y >>> 0, w || X(y, 2, this.length);
    const R = this[y + 1] | this[y] << 8;
    return R & 32768 ? R | 4294901760 : R;
  }, g.prototype.readInt32LE = function(y, w) {
    return y = y >>> 0, w || X(y, 4, this.length), this[y] | this[y + 1] << 8 | this[y + 2] << 16 | this[y + 3] << 24;
  }, g.prototype.readInt32BE = function(y, w) {
    return y = y >>> 0, w || X(y, 4, this.length), this[y] << 24 | this[y + 1] << 16 | this[y + 2] << 8 | this[y + 3];
  }, g.prototype.readBigInt64LE = Ce(function(y) {
    y = y >>> 0, Nt(y, "offset");
    const w = this[y], R = this[y + 7];
    (w === void 0 || R === void 0) && wt(y, this.length - 8);
    const V = this[y + 4] + this[y + 5] * 2 ** 8 + this[y + 6] * 2 ** 16 + (R << 24);
    return (BigInt(V) << BigInt(32)) + BigInt(w + this[++y] * 2 ** 8 + this[++y] * 2 ** 16 + this[++y] * 2 ** 24);
  }), g.prototype.readBigInt64BE = Ce(function(y) {
    y = y >>> 0, Nt(y, "offset");
    const w = this[y], R = this[y + 7];
    (w === void 0 || R === void 0) && wt(y, this.length - 8);
    const V = (w << 24) + // Overflow
    this[++y] * 2 ** 16 + this[++y] * 2 ** 8 + this[++y];
    return (BigInt(V) << BigInt(32)) + BigInt(this[++y] * 2 ** 24 + this[++y] * 2 ** 16 + this[++y] * 2 ** 8 + R);
  }), g.prototype.readFloatLE = function(y, w) {
    return y = y >>> 0, w || X(y, 4, this.length), n.read(this, y, !0, 23, 4);
  }, g.prototype.readFloatBE = function(y, w) {
    return y = y >>> 0, w || X(y, 4, this.length), n.read(this, y, !1, 23, 4);
  }, g.prototype.readDoubleLE = function(y, w) {
    return y = y >>> 0, w || X(y, 8, this.length), n.read(this, y, !0, 52, 8);
  }, g.prototype.readDoubleBE = function(y, w) {
    return y = y >>> 0, w || X(y, 8, this.length), n.read(this, y, !1, 52, 8);
  };
  function ie(I, y, w, R, V, z) {
    if (!g.isBuffer(I)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (y > V || y < z) throw new RangeError('"value" argument is out of bounds');
    if (w + R > I.length) throw new RangeError("Index out of range");
  }
  g.prototype.writeUintLE = g.prototype.writeUIntLE = function(y, w, R, V) {
    if (y = +y, w = w >>> 0, R = R >>> 0, !V) {
      const Ne = Math.pow(2, 8 * R) - 1;
      ie(this, y, w, R, Ne, 0);
    }
    let z = 1, Q = 0;
    for (this[w] = y & 255; ++Q < R && (z *= 256); )
      this[w + Q] = y / z & 255;
    return w + R;
  }, g.prototype.writeUintBE = g.prototype.writeUIntBE = function(y, w, R, V) {
    if (y = +y, w = w >>> 0, R = R >>> 0, !V) {
      const Ne = Math.pow(2, 8 * R) - 1;
      ie(this, y, w, R, Ne, 0);
    }
    let z = R - 1, Q = 1;
    for (this[w + z] = y & 255; --z >= 0 && (Q *= 256); )
      this[w + z] = y / Q & 255;
    return w + R;
  }, g.prototype.writeUint8 = g.prototype.writeUInt8 = function(y, w, R) {
    return y = +y, w = w >>> 0, R || ie(this, y, w, 1, 255, 0), this[w] = y & 255, w + 1;
  }, g.prototype.writeUint16LE = g.prototype.writeUInt16LE = function(y, w, R) {
    return y = +y, w = w >>> 0, R || ie(this, y, w, 2, 65535, 0), this[w] = y & 255, this[w + 1] = y >>> 8, w + 2;
  }, g.prototype.writeUint16BE = g.prototype.writeUInt16BE = function(y, w, R) {
    return y = +y, w = w >>> 0, R || ie(this, y, w, 2, 65535, 0), this[w] = y >>> 8, this[w + 1] = y & 255, w + 2;
  }, g.prototype.writeUint32LE = g.prototype.writeUInt32LE = function(y, w, R) {
    return y = +y, w = w >>> 0, R || ie(this, y, w, 4, 4294967295, 0), this[w + 3] = y >>> 24, this[w + 2] = y >>> 16, this[w + 1] = y >>> 8, this[w] = y & 255, w + 4;
  }, g.prototype.writeUint32BE = g.prototype.writeUInt32BE = function(y, w, R) {
    return y = +y, w = w >>> 0, R || ie(this, y, w, 4, 4294967295, 0), this[w] = y >>> 24, this[w + 1] = y >>> 16, this[w + 2] = y >>> 8, this[w + 3] = y & 255, w + 4;
  };
  function Te(I, y, w, R, V) {
    jt(y, R, V, I, w, 7);
    let z = Number(y & BigInt(4294967295));
    I[w++] = z, z = z >> 8, I[w++] = z, z = z >> 8, I[w++] = z, z = z >> 8, I[w++] = z;
    let Q = Number(y >> BigInt(32) & BigInt(4294967295));
    return I[w++] = Q, Q = Q >> 8, I[w++] = Q, Q = Q >> 8, I[w++] = Q, Q = Q >> 8, I[w++] = Q, w;
  }
  function Me(I, y, w, R, V) {
    jt(y, R, V, I, w, 7);
    let z = Number(y & BigInt(4294967295));
    I[w + 7] = z, z = z >> 8, I[w + 6] = z, z = z >> 8, I[w + 5] = z, z = z >> 8, I[w + 4] = z;
    let Q = Number(y >> BigInt(32) & BigInt(4294967295));
    return I[w + 3] = Q, Q = Q >> 8, I[w + 2] = Q, Q = Q >> 8, I[w + 1] = Q, Q = Q >> 8, I[w] = Q, w + 8;
  }
  g.prototype.writeBigUInt64LE = Ce(function(y, w = 0) {
    return Te(this, y, w, BigInt(0), BigInt("0xffffffffffffffff"));
  }), g.prototype.writeBigUInt64BE = Ce(function(y, w = 0) {
    return Me(this, y, w, BigInt(0), BigInt("0xffffffffffffffff"));
  }), g.prototype.writeIntLE = function(y, w, R, V) {
    if (y = +y, w = w >>> 0, !V) {
      const dt = Math.pow(2, 8 * R - 1);
      ie(this, y, w, R, dt - 1, -dt);
    }
    let z = 0, Q = 1, Ne = 0;
    for (this[w] = y & 255; ++z < R && (Q *= 256); )
      y < 0 && Ne === 0 && this[w + z - 1] !== 0 && (Ne = 1), this[w + z] = (y / Q >> 0) - Ne & 255;
    return w + R;
  }, g.prototype.writeIntBE = function(y, w, R, V) {
    if (y = +y, w = w >>> 0, !V) {
      const dt = Math.pow(2, 8 * R - 1);
      ie(this, y, w, R, dt - 1, -dt);
    }
    let z = R - 1, Q = 1, Ne = 0;
    for (this[w + z] = y & 255; --z >= 0 && (Q *= 256); )
      y < 0 && Ne === 0 && this[w + z + 1] !== 0 && (Ne = 1), this[w + z] = (y / Q >> 0) - Ne & 255;
    return w + R;
  }, g.prototype.writeInt8 = function(y, w, R) {
    return y = +y, w = w >>> 0, R || ie(this, y, w, 1, 127, -128), y < 0 && (y = 255 + y + 1), this[w] = y & 255, w + 1;
  }, g.prototype.writeInt16LE = function(y, w, R) {
    return y = +y, w = w >>> 0, R || ie(this, y, w, 2, 32767, -32768), this[w] = y & 255, this[w + 1] = y >>> 8, w + 2;
  }, g.prototype.writeInt16BE = function(y, w, R) {
    return y = +y, w = w >>> 0, R || ie(this, y, w, 2, 32767, -32768), this[w] = y >>> 8, this[w + 1] = y & 255, w + 2;
  }, g.prototype.writeInt32LE = function(y, w, R) {
    return y = +y, w = w >>> 0, R || ie(this, y, w, 4, 2147483647, -2147483648), this[w] = y & 255, this[w + 1] = y >>> 8, this[w + 2] = y >>> 16, this[w + 3] = y >>> 24, w + 4;
  }, g.prototype.writeInt32BE = function(y, w, R) {
    return y = +y, w = w >>> 0, R || ie(this, y, w, 4, 2147483647, -2147483648), y < 0 && (y = 4294967295 + y + 1), this[w] = y >>> 24, this[w + 1] = y >>> 16, this[w + 2] = y >>> 8, this[w + 3] = y & 255, w + 4;
  }, g.prototype.writeBigInt64LE = Ce(function(y, w = 0) {
    return Te(this, y, w, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), g.prototype.writeBigInt64BE = Ce(function(y, w = 0) {
    return Me(this, y, w, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function Ee(I, y, w, R, V, z) {
    if (w + R > I.length) throw new RangeError("Index out of range");
    if (w < 0) throw new RangeError("Index out of range");
  }
  function Ie(I, y, w, R, V) {
    return y = +y, w = w >>> 0, V || Ee(I, y, w, 4), n.write(I, y, w, R, 23, 4), w + 4;
  }
  g.prototype.writeFloatLE = function(y, w, R) {
    return Ie(this, y, w, !0, R);
  }, g.prototype.writeFloatBE = function(y, w, R) {
    return Ie(this, y, w, !1, R);
  };
  function _e(I, y, w, R, V) {
    return y = +y, w = w >>> 0, V || Ee(I, y, w, 8), n.write(I, y, w, R, 52, 8), w + 8;
  }
  g.prototype.writeDoubleLE = function(y, w, R) {
    return _e(this, y, w, !0, R);
  }, g.prototype.writeDoubleBE = function(y, w, R) {
    return _e(this, y, w, !1, R);
  }, g.prototype.copy = function(y, w, R, V) {
    if (!g.isBuffer(y)) throw new TypeError("argument should be a Buffer");
    if (R || (R = 0), !V && V !== 0 && (V = this.length), w >= y.length && (w = y.length), w || (w = 0), V > 0 && V < R && (V = R), V === R || y.length === 0 || this.length === 0) return 0;
    if (w < 0)
      throw new RangeError("targetStart out of bounds");
    if (R < 0 || R >= this.length) throw new RangeError("Index out of range");
    if (V < 0) throw new RangeError("sourceEnd out of bounds");
    V > this.length && (V = this.length), y.length - w < V - R && (V = y.length - w + R);
    const z = V - R;
    return this === y && typeof a.prototype.copyWithin == "function" ? this.copyWithin(w, R, V) : a.prototype.set.call(
      y,
      this.subarray(R, V),
      w
    ), z;
  }, g.prototype.fill = function(y, w, R, V) {
    if (typeof y == "string") {
      if (typeof w == "string" ? (V = w, w = 0, R = this.length) : typeof R == "string" && (V = R, R = this.length), V !== void 0 && typeof V != "string")
        throw new TypeError("encoding must be a string");
      if (typeof V == "string" && !g.isEncoding(V))
        throw new TypeError("Unknown encoding: " + V);
      if (y.length === 1) {
        const Q = y.charCodeAt(0);
        (V === "utf8" && Q < 128 || V === "latin1") && (y = Q);
      }
    } else typeof y == "number" ? y = y & 255 : typeof y == "boolean" && (y = Number(y));
    if (w < 0 || this.length < w || this.length < R)
      throw new RangeError("Out of range index");
    if (R <= w)
      return this;
    w = w >>> 0, R = R === void 0 ? this.length : R >>> 0, y || (y = 0);
    let z;
    if (typeof y == "number")
      for (z = w; z < R; ++z)
        this[z] = y;
    else {
      const Q = g.isBuffer(y) ? y : g.from(y, V), Ne = Q.length;
      if (Ne === 0)
        throw new TypeError('The value "' + y + '" is invalid for argument "value"');
      for (z = 0; z < R - w; ++z)
        this[z + w] = Q[z % Ne];
    }
    return this;
  };
  const De = {};
  function _t(I, y, w) {
    De[I] = class extends w {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: y.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${I}]`, this.stack, delete this.name;
      }
      get code() {
        return I;
      }
      set code(V) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: V,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${I}]: ${this.message}`;
      }
    };
  }
  _t(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(I) {
      return I ? `${I} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), _t(
    "ERR_INVALID_ARG_TYPE",
    function(I, y) {
      return `The "${I}" argument must be of type number. Received type ${typeof y}`;
    },
    TypeError
  ), _t(
    "ERR_OUT_OF_RANGE",
    function(I, y, w) {
      let R = `The value of "${I}" is out of range.`, V = w;
      return Number.isInteger(w) && Math.abs(w) > 2 ** 32 ? V = on(String(w)) : typeof w == "bigint" && (V = String(w), (w > BigInt(2) ** BigInt(32) || w < -(BigInt(2) ** BigInt(32))) && (V = on(V)), V += "n"), R += ` It must be ${y}. Received ${V}`, R;
    },
    RangeError
  );
  function on(I) {
    let y = "", w = I.length;
    const R = I[0] === "-" ? 1 : 0;
    for (; w >= R + 4; w -= 3)
      y = `_${I.slice(w - 3, w)}${y}`;
    return `${I.slice(0, w)}${y}`;
  }
  function Rt(I, y, w) {
    Nt(y, "offset"), (I[y] === void 0 || I[y + w] === void 0) && wt(y, I.length - (w + 1));
  }
  function jt(I, y, w, R, V, z) {
    if (I > w || I < y) {
      const Q = typeof y == "bigint" ? "n" : "";
      let Ne;
      throw y === 0 || y === BigInt(0) ? Ne = `>= 0${Q} and < 2${Q} ** ${(z + 1) * 8}${Q}` : Ne = `>= -(2${Q} ** ${(z + 1) * 8 - 1}${Q}) and < 2 ** ${(z + 1) * 8 - 1}${Q}`, new De.ERR_OUT_OF_RANGE("value", Ne, I);
    }
    Rt(R, V, z);
  }
  function Nt(I, y) {
    if (typeof I != "number")
      throw new De.ERR_INVALID_ARG_TYPE(y, "number", I);
  }
  function wt(I, y, w) {
    throw Math.floor(I) !== I ? (Nt(I, w), new De.ERR_OUT_OF_RANGE("offset", "an integer", I)) : y < 0 ? new De.ERR_BUFFER_OUT_OF_BOUNDS() : new De.ERR_OUT_OF_RANGE(
      "offset",
      `>= 0 and <= ${y}`,
      I
    );
  }
  const In = /[^+/0-9A-Za-z-_]/g;
  function En(I) {
    if (I = I.split("=")[0], I = I.trim().replace(In, ""), I.length < 2) return "";
    for (; I.length % 4 !== 0; )
      I = I + "=";
    return I;
  }
  function Se(I, y) {
    y = y || 1 / 0;
    let w;
    const R = I.length;
    let V = null;
    const z = [];
    for (let Q = 0; Q < R; ++Q) {
      if (w = I.charCodeAt(Q), w > 55295 && w < 57344) {
        if (!V) {
          if (w > 56319) {
            (y -= 3) > -1 && z.push(239, 191, 189);
            continue;
          } else if (Q + 1 === R) {
            (y -= 3) > -1 && z.push(239, 191, 189);
            continue;
          }
          V = w;
          continue;
        }
        if (w < 56320) {
          (y -= 3) > -1 && z.push(239, 191, 189), V = w;
          continue;
        }
        w = (V - 55296 << 10 | w - 56320) + 65536;
      } else V && (y -= 3) > -1 && z.push(239, 191, 189);
      if (V = null, w < 128) {
        if ((y -= 1) < 0) break;
        z.push(w);
      } else if (w < 2048) {
        if ((y -= 2) < 0) break;
        z.push(
          w >> 6 | 192,
          w & 63 | 128
        );
      } else if (w < 65536) {
        if ((y -= 3) < 0) break;
        z.push(
          w >> 12 | 224,
          w >> 6 & 63 | 128,
          w & 63 | 128
        );
      } else if (w < 1114112) {
        if ((y -= 4) < 0) break;
        z.push(
          w >> 18 | 240,
          w >> 12 & 63 | 128,
          w >> 6 & 63 | 128,
          w & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return z;
  }
  function Fe(I) {
    const y = [];
    for (let w = 0; w < I.length; ++w)
      y.push(I.charCodeAt(w) & 255);
    return y;
  }
  function ce(I, y) {
    let w, R, V;
    const z = [];
    for (let Q = 0; Q < I.length && !((y -= 2) < 0); ++Q)
      w = I.charCodeAt(Q), R = w >> 8, V = w % 256, z.push(V), z.push(R);
    return z;
  }
  function vt(I) {
    return t.toByteArray(En(I));
  }
  function xt(I, y, w, R) {
    let V;
    for (V = 0; V < R && !(V + w >= y.length || V >= I.length); ++V)
      y[V + w] = I[V];
    return V;
  }
  function At(I, y) {
    return I instanceof y || I != null && I.constructor != null && I.constructor.name != null && I.constructor.name === y.name;
  }
  function et(I) {
    return I !== I;
  }
  const ge = function() {
    const I = "0123456789abcdef", y = new Array(256);
    for (let w = 0; w < 16; ++w) {
      const R = w * 16;
      for (let V = 0; V < 16; ++V)
        y[R + V] = I[w] + I[V];
    }
    return y;
  }();
  function Ce(I) {
    return typeof BigInt > "u" ? at : I;
  }
  function at() {
    throw new Error("BigInt not supported");
  }
})(b0);
const EE = b0.Buffer;
function ht(e, t, n, i, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), i && (this.request = i), o && (this.response = o);
}
te.inherits(ht, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: te.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const x0 = ht.prototype, A0 = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  A0[e] = { value: e };
});
Object.defineProperties(ht, A0);
Object.defineProperty(x0, "isAxiosError", { value: !0 });
ht.from = (e, t, n, i, o, a) => {
  const u = Object.create(x0);
  return te.toFlatObject(e, u, function(f) {
    return f !== Error.prototype;
  }, (l) => l !== "isAxiosError"), ht.call(u, e.message, t, n, i, o), u.cause = e, u.name = e.name, a && Object.assign(u, a), u;
};
const SE = null;
function Sl(e) {
  return te.isPlainObject(e) || te.isArray(e);
}
function E0(e) {
  return te.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Qd(e, t, n) {
  return e ? e.concat(t).map(function(o, a) {
    return o = E0(o), !n && a ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function CE(e) {
  return te.isArray(e) && !e.some(Sl);
}
const _E = te.toFlatObject(te, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function vu(e, t, n) {
  if (!te.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = te.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(E, b) {
    return !te.isUndefined(b[E]);
  });
  const i = n.metaTokens, o = n.visitor || g, a = n.dots, u = n.indexes, f = (n.Blob || typeof Blob < "u" && Blob) && te.isSpecCompliantForm(t);
  if (!te.isFunction(o))
    throw new TypeError("visitor must be a function");
  function d(A) {
    if (A === null) return "";
    if (te.isDate(A))
      return A.toISOString();
    if (!f && te.isBlob(A))
      throw new ht("Blob is not supported. Use a Buffer instead.");
    return te.isArrayBuffer(A) || te.isTypedArray(A) ? f && typeof Blob == "function" ? new Blob([A]) : EE.from(A) : A;
  }
  function g(A, E, b) {
    let D = A;
    if (A && !b && typeof A == "object") {
      if (te.endsWith(E, "{}"))
        E = i ? E : E.slice(0, -2), A = JSON.stringify(A);
      else if (te.isArray(A) && CE(A) || (te.isFileList(A) || te.endsWith(E, "[]")) && (D = te.toArray(A)))
        return E = E0(E), D.forEach(function(C, O) {
          !(te.isUndefined(C) || C === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            u === !0 ? Qd([E], O, a) : u === null ? E : E + "[]",
            d(C)
          );
        }), !1;
    }
    return Sl(A) ? !0 : (t.append(Qd(b, E, a), d(A)), !1);
  }
  const p = [], v = Object.assign(_E, {
    defaultVisitor: g,
    convertValue: d,
    isVisitable: Sl
  });
  function _(A, E) {
    if (!te.isUndefined(A)) {
      if (p.indexOf(A) !== -1)
        throw Error("Circular reference detected in " + E.join("."));
      p.push(A), te.forEach(A, function(D, j) {
        (!(te.isUndefined(D) || D === null) && o.call(
          t,
          D,
          te.isString(j) ? j.trim() : j,
          E,
          v
        )) === !0 && _(D, E ? E.concat(j) : [j]);
      }), p.pop();
    }
  }
  if (!te.isObject(e))
    throw new TypeError("data must be an object");
  return _(e), t;
}
function Zd(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(i) {
    return t[i];
  });
}
function Jl(e, t) {
  this._pairs = [], e && vu(e, this, t);
}
const S0 = Jl.prototype;
S0.append = function(t, n) {
  this._pairs.push([t, n]);
};
S0.toString = function(t) {
  const n = t ? function(i) {
    return t.call(this, i, Zd);
  } : Zd;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function kE(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function C0(e, t, n) {
  if (!t)
    return e;
  const i = n && n.encode || kE, o = n && n.serialize;
  let a;
  if (o ? a = o(t, n) : a = te.isURLSearchParams(t) ? t.toString() : new Jl(t, n).toString(i), a) {
    const u = e.indexOf("#");
    u !== -1 && (e = e.slice(0, u)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class ep {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, i) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: i ? i.synchronous : !1,
      runWhen: i ? i.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    te.forEach(this.handlers, function(i) {
      i !== null && t(i);
    });
  }
}
const _0 = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, OE = typeof URLSearchParams < "u" ? URLSearchParams : Jl, TE = typeof FormData < "u" ? FormData : null, IE = typeof Blob < "u" ? Blob : null, FE = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), BE = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Cr = {
  classes: {
    URLSearchParams: OE,
    FormData: TE,
    Blob: IE
  },
  isStandardBrowserEnv: FE,
  isStandardBrowserWebWorkerEnv: BE,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function DE(e, t) {
  return vu(e, new Cr.classes.URLSearchParams(), Object.assign({
    visitor: function(n, i, o, a) {
      return Cr.isNode && te.isBuffer(n) ? (this.append(i, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function LE(e) {
  return te.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function PE(e) {
  const t = {}, n = Object.keys(e);
  let i;
  const o = n.length;
  let a;
  for (i = 0; i < o; i++)
    a = n[i], t[a] = e[a];
  return t;
}
function k0(e) {
  function t(n, i, o, a) {
    let u = n[a++];
    const l = Number.isFinite(+u), f = a >= n.length;
    return u = !u && te.isArray(o) ? o.length : u, f ? (te.hasOwnProp(o, u) ? o[u] = [o[u], i] : o[u] = i, !l) : ((!o[u] || !te.isObject(o[u])) && (o[u] = []), t(n, i, o[u], a) && te.isArray(o[u]) && (o[u] = PE(o[u])), !l);
  }
  if (te.isFormData(e) && te.isFunction(e.entries)) {
    const n = {};
    return te.forEachEntry(e, (i, o) => {
      t(LE(i), o, n, 0);
    }), n;
  }
  return null;
}
const RE = {
  "Content-Type": void 0
};
function jE(e, t, n) {
  if (te.isString(e))
    try {
      return (t || JSON.parse)(e), te.trim(e);
    } catch (i) {
      if (i.name !== "SyntaxError")
        throw i;
    }
  return (n || JSON.stringify)(e);
}
const Bs = {
  transitional: _0,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const i = n.getContentType() || "", o = i.indexOf("application/json") > -1, a = te.isObject(t);
    if (a && te.isHTMLForm(t) && (t = new FormData(t)), te.isFormData(t))
      return o && o ? JSON.stringify(k0(t)) : t;
    if (te.isArrayBuffer(t) || te.isBuffer(t) || te.isStream(t) || te.isFile(t) || te.isBlob(t))
      return t;
    if (te.isArrayBufferView(t))
      return t.buffer;
    if (te.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (a) {
      if (i.indexOf("application/x-www-form-urlencoded") > -1)
        return DE(t, this.formSerializer).toString();
      if ((l = te.isFileList(t)) || i.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return vu(
          l ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return a || o ? (n.setContentType("application/json", !1), jE(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Bs.transitional, i = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (t && te.isString(t) && (i && !this.responseType || o)) {
      const u = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (u)
          throw l.name === "SyntaxError" ? ht.from(l, ht.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Cr.classes.FormData,
    Blob: Cr.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
te.forEach(["delete", "get", "head"], function(t) {
  Bs.headers[t] = {};
});
te.forEach(["post", "put", "patch"], function(t) {
  Bs.headers[t] = te.merge(RE);
});
const NE = te.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), $E = (e) => {
  const t = {};
  let n, i, o;
  return e && e.split(`
`).forEach(function(u) {
    o = u.indexOf(":"), n = u.substring(0, o).trim().toLowerCase(), i = u.substring(o + 1).trim(), !(!n || t[n] && NE[n]) && (n === "set-cookie" ? t[n] ? t[n].push(i) : t[n] = [i] : t[n] = t[n] ? t[n] + ", " + i : i);
  }), t;
}, tp = Symbol("internals");
function ao(e) {
  return e && String(e).trim().toLowerCase();
}
function Ga(e) {
  return e === !1 || e == null ? e : te.isArray(e) ? e.map(Ga) : String(e);
}
function ME(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let i;
  for (; i = n.exec(e); )
    t[i[1]] = i[2];
  return t;
}
const UE = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Jc(e, t, n, i, o) {
  if (te.isFunction(i))
    return i.call(this, t, n);
  if (o && (t = n), !!te.isString(t)) {
    if (te.isString(i))
      return t.indexOf(i) !== -1;
    if (te.isRegExp(i))
      return i.test(t);
  }
}
function VE(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, i) => n.toUpperCase() + i);
}
function qE(e, t) {
  const n = te.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((i) => {
    Object.defineProperty(e, i + n, {
      value: function(o, a, u) {
        return this[i].call(this, t, o, a, u);
      },
      configurable: !0
    });
  });
}
let Qn = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, i) {
    const o = this;
    function a(l, f, d) {
      const g = ao(f);
      if (!g)
        throw new Error("header name must be a non-empty string");
      const p = te.findKey(o, g);
      (!p || o[p] === void 0 || d === !0 || d === void 0 && o[p] !== !1) && (o[p || f] = Ga(l));
    }
    const u = (l, f) => te.forEach(l, (d, g) => a(d, g, f));
    return te.isPlainObject(t) || t instanceof this.constructor ? u(t, n) : te.isString(t) && (t = t.trim()) && !UE(t) ? u($E(t), n) : t != null && a(n, t, i), this;
  }
  get(t, n) {
    if (t = ao(t), t) {
      const i = te.findKey(this, t);
      if (i) {
        const o = this[i];
        if (!n)
          return o;
        if (n === !0)
          return ME(o);
        if (te.isFunction(n))
          return n.call(this, o, i);
        if (te.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = ao(t), t) {
      const i = te.findKey(this, t);
      return !!(i && this[i] !== void 0 && (!n || Jc(this, this[i], i, n)));
    }
    return !1;
  }
  delete(t, n) {
    const i = this;
    let o = !1;
    function a(u) {
      if (u = ao(u), u) {
        const l = te.findKey(i, u);
        l && (!n || Jc(i, i[l], l, n)) && (delete i[l], o = !0);
      }
    }
    return te.isArray(t) ? t.forEach(a) : a(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let i = n.length, o = !1;
    for (; i--; ) {
      const a = n[i];
      (!t || Jc(this, this[a], a, t, !0)) && (delete this[a], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, i = {};
    return te.forEach(this, (o, a) => {
      const u = te.findKey(i, a);
      if (u) {
        n[u] = Ga(o), delete n[a];
        return;
      }
      const l = t ? VE(a) : String(a).trim();
      l !== a && delete n[a], n[l] = Ga(o), i[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return te.forEach(this, (i, o) => {
      i != null && i !== !1 && (n[o] = t && te.isArray(i) ? i.join(", ") : i);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const i = new this(t);
    return n.forEach((o) => i.set(o)), i;
  }
  static accessor(t) {
    const i = (this[tp] = this[tp] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function a(u) {
      const l = ao(u);
      i[l] || (qE(o, u), i[l] = !0);
    }
    return te.isArray(t) ? t.forEach(a) : a(t), this;
  }
};
Qn.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
te.freezeMethods(Qn.prototype);
te.freezeMethods(Qn);
function Yc(e, t) {
  const n = this || Bs, i = t || n, o = Qn.from(i.headers);
  let a = i.data;
  return te.forEach(e, function(l) {
    a = l.call(n, a, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), a;
}
function O0(e) {
  return !!(e && e.__CANCEL__);
}
function Fo(e, t, n) {
  ht.call(this, e ?? "canceled", ht.ERR_CANCELED, t, n), this.name = "CanceledError";
}
te.inherits(Fo, ht, {
  __CANCEL__: !0
});
function WE(e, t, n) {
  const i = n.config.validateStatus;
  !n.status || !i || i(n.status) ? e(n) : t(new ht(
    "Request failed with status code " + n.status,
    [ht.ERR_BAD_REQUEST, ht.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const KE = Cr.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  /* @__PURE__ */ function() {
    return {
      write: function(n, i, o, a, u, l) {
        const f = [];
        f.push(n + "=" + encodeURIComponent(i)), te.isNumber(o) && f.push("expires=" + new Date(o).toGMTString()), te.isString(a) && f.push("path=" + a), te.isString(u) && f.push("domain=" + u), l === !0 && f.push("secure"), document.cookie = f.join("; ");
      },
      read: function(n) {
        const i = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
        return i ? decodeURIComponent(i[3]) : null;
      },
      remove: function(n) {
        this.write(n, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }()
);
function HE(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function zE(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function T0(e, t) {
  return e && !HE(t) ? zE(e, t) : t;
}
const GE = Cr.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let i;
    function o(a) {
      let u = a;
      return t && (n.setAttribute("href", u), u = n.href), n.setAttribute("href", u), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return i = o(window.location.href), function(u) {
      const l = te.isString(u) ? o(u) : u;
      return l.protocol === i.protocol && l.host === i.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
);
function JE(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function YE(e, t) {
  e = e || 10;
  const n = new Array(e), i = new Array(e);
  let o = 0, a = 0, u;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const d = Date.now(), g = i[a];
    u || (u = d), n[o] = f, i[o] = d;
    let p = a, v = 0;
    for (; p !== o; )
      v += n[p++], p = p % e;
    if (o = (o + 1) % e, o === a && (a = (a + 1) % e), d - u < t)
      return;
    const _ = g && d - g;
    return _ ? Math.round(v * 1e3 / _) : void 0;
  };
}
function np(e, t) {
  let n = 0;
  const i = YE(50, 250);
  return (o) => {
    const a = o.loaded, u = o.lengthComputable ? o.total : void 0, l = a - n, f = i(l), d = a <= u;
    n = a;
    const g = {
      loaded: a,
      total: u,
      progress: u ? a / u : void 0,
      bytes: l,
      rate: f || void 0,
      estimated: f && u && d ? (u - a) / f : void 0,
      event: o
    };
    g[t ? "download" : "upload"] = !0, e(g);
  };
}
const XE = typeof XMLHttpRequest < "u", QE = XE && function(e) {
  return new Promise(function(n, i) {
    let o = e.data;
    const a = Qn.from(e.headers).normalize(), u = e.responseType;
    let l;
    function f() {
      e.cancelToken && e.cancelToken.unsubscribe(l), e.signal && e.signal.removeEventListener("abort", l);
    }
    te.isFormData(o) && (Cr.isStandardBrowserEnv || Cr.isStandardBrowserWebWorkerEnv ? a.setContentType(!1) : a.setContentType("multipart/form-data;", !1));
    let d = new XMLHttpRequest();
    if (e.auth) {
      const _ = e.auth.username || "", A = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      a.set("Authorization", "Basic " + btoa(_ + ":" + A));
    }
    const g = T0(e.baseURL, e.url);
    d.open(e.method.toUpperCase(), C0(g, e.params, e.paramsSerializer), !0), d.timeout = e.timeout;
    function p() {
      if (!d)
        return;
      const _ = Qn.from(
        "getAllResponseHeaders" in d && d.getAllResponseHeaders()
      ), E = {
        data: !u || u === "text" || u === "json" ? d.responseText : d.response,
        status: d.status,
        statusText: d.statusText,
        headers: _,
        config: e,
        request: d
      };
      WE(function(D) {
        n(D), f();
      }, function(D) {
        i(D), f();
      }, E), d = null;
    }
    if ("onloadend" in d ? d.onloadend = p : d.onreadystatechange = function() {
      !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(p);
    }, d.onabort = function() {
      d && (i(new ht("Request aborted", ht.ECONNABORTED, e, d)), d = null);
    }, d.onerror = function() {
      i(new ht("Network Error", ht.ERR_NETWORK, e, d)), d = null;
    }, d.ontimeout = function() {
      let A = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const E = e.transitional || _0;
      e.timeoutErrorMessage && (A = e.timeoutErrorMessage), i(new ht(
        A,
        E.clarifyTimeoutError ? ht.ETIMEDOUT : ht.ECONNABORTED,
        e,
        d
      )), d = null;
    }, Cr.isStandardBrowserEnv) {
      const _ = (e.withCredentials || GE(g)) && e.xsrfCookieName && KE.read(e.xsrfCookieName);
      _ && a.set(e.xsrfHeaderName, _);
    }
    o === void 0 && a.setContentType(null), "setRequestHeader" in d && te.forEach(a.toJSON(), function(A, E) {
      d.setRequestHeader(E, A);
    }), te.isUndefined(e.withCredentials) || (d.withCredentials = !!e.withCredentials), u && u !== "json" && (d.responseType = e.responseType), typeof e.onDownloadProgress == "function" && d.addEventListener("progress", np(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", np(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = (_) => {
      d && (i(!_ || _.type ? new Fo(null, e, d) : _), d.abort(), d = null);
    }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
    const v = JE(g);
    if (v && Cr.protocols.indexOf(v) === -1) {
      i(new ht("Unsupported protocol " + v + ":", ht.ERR_BAD_REQUEST, e));
      return;
    }
    d.send(o || null);
  });
}, Ja = {
  http: SE,
  xhr: QE
};
te.forEach(Ja, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const ZE = {
  getAdapter: (e) => {
    e = te.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, i;
    for (let o = 0; o < t && (n = e[o], !(i = te.isString(n) ? Ja[n.toLowerCase()] : n)); o++)
      ;
    if (!i)
      throw i === !1 ? new ht(
        `Adapter ${n} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        te.hasOwnProp(Ja, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`
      );
    if (!te.isFunction(i))
      throw new TypeError("adapter is not a function");
    return i;
  },
  adapters: Ja
};
function Xc(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Fo(null, e);
}
function rp(e) {
  return Xc(e), e.headers = Qn.from(e.headers), e.data = Yc.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), ZE.getAdapter(e.adapter || Bs.adapter)(e).then(function(i) {
    return Xc(e), i.data = Yc.call(
      e,
      e.transformResponse,
      i
    ), i.headers = Qn.from(i.headers), i;
  }, function(i) {
    return O0(i) || (Xc(e), i && i.response && (i.response.data = Yc.call(
      e,
      e.transformResponse,
      i.response
    ), i.response.headers = Qn.from(i.response.headers))), Promise.reject(i);
  });
}
const ip = (e) => e instanceof Qn ? e.toJSON() : e;
function _s(e, t) {
  t = t || {};
  const n = {};
  function i(d, g, p) {
    return te.isPlainObject(d) && te.isPlainObject(g) ? te.merge.call({ caseless: p }, d, g) : te.isPlainObject(g) ? te.merge({}, g) : te.isArray(g) ? g.slice() : g;
  }
  function o(d, g, p) {
    if (te.isUndefined(g)) {
      if (!te.isUndefined(d))
        return i(void 0, d, p);
    } else return i(d, g, p);
  }
  function a(d, g) {
    if (!te.isUndefined(g))
      return i(void 0, g);
  }
  function u(d, g) {
    if (te.isUndefined(g)) {
      if (!te.isUndefined(d))
        return i(void 0, d);
    } else return i(void 0, g);
  }
  function l(d, g, p) {
    if (p in t)
      return i(d, g);
    if (p in e)
      return i(void 0, d);
  }
  const f = {
    url: a,
    method: a,
    data: a,
    baseURL: u,
    transformRequest: u,
    transformResponse: u,
    paramsSerializer: u,
    timeout: u,
    timeoutMessage: u,
    withCredentials: u,
    adapter: u,
    responseType: u,
    xsrfCookieName: u,
    xsrfHeaderName: u,
    onUploadProgress: u,
    onDownloadProgress: u,
    decompress: u,
    maxContentLength: u,
    maxBodyLength: u,
    beforeRedirect: u,
    transport: u,
    httpAgent: u,
    httpsAgent: u,
    cancelToken: u,
    socketPath: u,
    responseEncoding: u,
    validateStatus: l,
    headers: (d, g) => o(ip(d), ip(g), !0)
  };
  return te.forEach(Object.keys(Object.assign({}, e, t)), function(g) {
    const p = f[g] || o, v = p(e[g], t[g], g);
    te.isUndefined(v) && p !== l || (n[g] = v);
  }), n;
}
const I0 = "1.4.0", Yl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Yl[e] = function(i) {
    return typeof i === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const sp = {};
Yl.transitional = function(t, n, i) {
  function o(a, u) {
    return "[Axios v" + I0 + "] Transitional option '" + a + "'" + u + (i ? ". " + i : "");
  }
  return (a, u, l) => {
    if (t === !1)
      throw new ht(
        o(u, " has been removed" + (n ? " in " + n : "")),
        ht.ERR_DEPRECATED
      );
    return n && !sp[u] && (sp[u] = !0, console.warn(
      o(
        u,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(a, u, l) : !0;
  };
};
function eS(e, t, n) {
  if (typeof e != "object")
    throw new ht("options must be an object", ht.ERR_BAD_OPTION_VALUE);
  const i = Object.keys(e);
  let o = i.length;
  for (; o-- > 0; ) {
    const a = i[o], u = t[a];
    if (u) {
      const l = e[a], f = l === void 0 || u(l, a, e);
      if (f !== !0)
        throw new ht("option " + a + " must be " + f, ht.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new ht("Unknown option " + a, ht.ERR_BAD_OPTION);
  }
}
const Cl = {
  assertOptions: eS,
  validators: Yl
}, si = Cl.validators;
let Di = class {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new ep(),
      response: new ep()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = _s(this.defaults, n);
    const { transitional: i, paramsSerializer: o, headers: a } = n;
    i !== void 0 && Cl.assertOptions(i, {
      silentJSONParsing: si.transitional(si.boolean),
      forcedJSONParsing: si.transitional(si.boolean),
      clarifyTimeoutError: si.transitional(si.boolean)
    }, !1), o != null && (te.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Cl.assertOptions(o, {
      encode: si.function,
      serialize: si.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let u;
    u = a && te.merge(
      a.common,
      a[n.method]
    ), u && te.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (A) => {
        delete a[A];
      }
    ), n.headers = Qn.concat(u, a);
    const l = [];
    let f = !0;
    this.interceptors.request.forEach(function(E) {
      typeof E.runWhen == "function" && E.runWhen(n) === !1 || (f = f && E.synchronous, l.unshift(E.fulfilled, E.rejected));
    });
    const d = [];
    this.interceptors.response.forEach(function(E) {
      d.push(E.fulfilled, E.rejected);
    });
    let g, p = 0, v;
    if (!f) {
      const A = [rp.bind(this), void 0];
      for (A.unshift.apply(A, l), A.push.apply(A, d), v = A.length, g = Promise.resolve(n); p < v; )
        g = g.then(A[p++], A[p++]);
      return g;
    }
    v = l.length;
    let _ = n;
    for (p = 0; p < v; ) {
      const A = l[p++], E = l[p++];
      try {
        _ = A(_);
      } catch (b) {
        E.call(this, b);
        break;
      }
    }
    try {
      g = rp.call(this, _);
    } catch (A) {
      return Promise.reject(A);
    }
    for (p = 0, v = d.length; p < v; )
      g = g.then(d[p++], d[p++]);
    return g;
  }
  getUri(t) {
    t = _s(this.defaults, t);
    const n = T0(t.baseURL, t.url);
    return C0(n, t.params, t.paramsSerializer);
  }
};
te.forEach(["delete", "get", "head", "options"], function(t) {
  Di.prototype[t] = function(n, i) {
    return this.request(_s(i || {}, {
      method: t,
      url: n,
      data: (i || {}).data
    }));
  };
});
te.forEach(["post", "put", "patch"], function(t) {
  function n(i) {
    return function(a, u, l) {
      return this.request(_s(l || {}, {
        method: t,
        headers: i ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: u
      }));
    };
  }
  Di.prototype[t] = n(), Di.prototype[t + "Form"] = n(!0);
});
let tS = class F0 {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(a) {
      n = a;
    });
    const i = this;
    this.promise.then((o) => {
      if (!i._listeners) return;
      let a = i._listeners.length;
      for (; a-- > 0; )
        i._listeners[a](o);
      i._listeners = null;
    }), this.promise.then = (o) => {
      let a;
      const u = new Promise((l) => {
        i.subscribe(l), a = l;
      }).then(o);
      return u.cancel = function() {
        i.unsubscribe(a);
      }, u;
    }, t(function(a, u, l) {
      i.reason || (i.reason = new Fo(a, u, l), n(i.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new F0(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function nS(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function rS(e) {
  return te.isObject(e) && e.isAxiosError === !0;
}
const _l = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(_l).forEach(([e, t]) => {
  _l[t] = e;
});
function B0(e) {
  const t = new Di(e), n = f0(Di.prototype.request, t);
  return te.extend(n, Di.prototype, t, { allOwnKeys: !0 }), te.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return B0(_s(e, o));
  }, n;
}
const nt = B0(Bs);
nt.Axios = Di;
nt.CanceledError = Fo;
nt.CancelToken = tS;
nt.isCancel = O0;
nt.VERSION = I0;
nt.toFormData = vu;
nt.AxiosError = ht;
nt.Cancel = nt.CanceledError;
nt.all = function(t) {
  return Promise.all(t);
};
nt.spread = nS;
nt.isAxiosError = rS;
nt.mergeConfig = _s;
nt.AxiosHeaders = Qn;
nt.formToJSON = (e) => k0(te.isHTMLForm(e) ? new FormData(e) : e);
nt.HttpStatusCode = _l;
nt.default = nt;
const {
  Axios: I4,
  AxiosError: F4,
  CanceledError: B4,
  isCancel: D4,
  CancelToken: L4,
  VERSION: P4,
  all: R4,
  Cancel: j4,
  isAxiosError: ru,
  spread: N4,
  toFormData: $4,
  AxiosHeaders: M4,
  HttpStatusCode: U4,
  formToJSON: V4,
  mergeConfig: q4
} = nt, Xl = async ({
  endpoint: e,
  body: t
}) => nt.post(e, JSON.stringify(t), {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  }
}), Ql = async ({
  endpoint: e,
  body: t
}) => nt.put(e, JSON.stringify(t), {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  }
}), D0 = async ({ endpoint: e }) => nt.delete(e), L0 = ({ name: e, onClose: t, endpoint: n }) => {
  const [i, o] = Ve(), [a, u] = Ve(!1), l = () => {
    u(!0), o(void 0), D0({ endpoint: n }).then(() => {
      u(!1), o(void 0), t();
    }).catch((f) => {
      u(!1), o(f);
    });
  };
  return /* @__PURE__ */ x.jsx(
    lu,
    {
      title: `Delete «${e}»`,
      open: !0,
      onOk: () => l(),
      onCancel: () => {
        t(), u(!1), o(void 0);
      },
      okText: "Delete",
      confirmLoading: a,
      okButtonProps: { danger: !0 },
      width: 400,
      children: i && /* @__PURE__ */ x.jsx(dr, { type: "error", message: "Error while delete", description: i?.response?.data?.message })
    }
  );
}, W4 = ({ data: e, onClose: t }) => {
  const [n, i] = Ve(), [o, a] = Ve(!1), u = () => {
    a(!0), i(void 0);
    const l = e.map(({ endpoint: f }) => D0({ endpoint: f }));
    Promise.all(l).then(() => {
      t(), a(!1), i(void 0);
    }).catch((f) => {
      a(!1), i(f);
    });
  };
  return /* @__PURE__ */ x.jsx(
    lu,
    {
      title: "Delete selected",
      open: !0,
      onOk: () => u(),
      onCancel: () => {
        t(), a(!1), i(void 0);
      },
      okText: "Delete",
      confirmLoading: o,
      okButtonProps: { danger: !0 },
      width: 400,
      children: n && /* @__PURE__ */ x.jsx(dr, { type: "error", message: "Error while delete", description: n?.response?.data?.message })
    }
  );
}, iS = () => {
  const { token: e } = nr.useToken();
  return /* @__PURE__ */ x.jsx("svg", { width: "18", height: "19", viewBox: "0 0 18 19", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ x.jsx(
    "path",
    {
      d: "M17.25 3.5H14.25V1.625C14.25 0.797656 13.5773 0.125 12.75 0.125H5.25C4.42266 0.125 3.75 0.797656 3.75 1.625V3.5H0.75C0.335156 3.5 0 3.83516 0 4.25V5C0 5.10313 0.084375 5.1875 0.1875 5.1875H1.60312L2.18203 17.4453C2.21953 18.2445 2.88047 18.875 3.67969 18.875H14.3203C15.1219 18.875 15.7805 18.2469 15.818 17.4453L16.3969 5.1875H17.8125C17.9156 5.1875 18 5.10313 18 5V4.25C18 3.83516 17.6648 3.5 17.25 3.5ZM12.5625 3.5H5.4375V1.8125H12.5625V3.5Z",
      fill: e.colorText
    }
  ) });
}, sS = () => {
  const { token: e } = nr.useToken();
  return /* @__PURE__ */ x.jsx("svg", { width: "18", height: "19", viewBox: "0 0 18 19", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ x.jsx(
    "path",
    {
      d: "M17.28 16.79H0.72C0.32175 16.79 0 17.1117 0 17.51V18.32C0 18.419 0.081 18.5 0.18 18.5H17.82C17.919 18.5 18 18.419 18 18.32V17.51C18 17.1117 17.6783 16.79 17.28 16.79ZM3.27825 14.9C3.32325 14.9 3.36825 14.8955 3.41325 14.8888L7.19775 14.225C7.24275 14.216 7.2855 14.1958 7.317 14.162L16.8547 4.62425C16.8756 4.60343 16.8922 4.57871 16.9034 4.55149C16.9147 4.52427 16.9205 4.49509 16.9205 4.46562C16.9205 4.43616 16.9147 4.40698 16.9034 4.37976C16.8922 4.35254 16.8756 4.32782 16.8547 4.307L13.1153 0.56525C13.0725 0.5225 13.0163 0.5 12.9555 0.5C12.8948 0.5 12.8385 0.5225 12.7958 0.56525L3.258 10.103C3.22425 10.1367 3.204 10.1772 3.195 10.2222L2.53125 14.0067C2.50936 14.1273 2.51718 14.2513 2.55404 14.3682C2.59089 14.485 2.65566 14.5911 2.74275 14.6772C2.89125 14.8212 3.078 14.9 3.27825 14.9Z",
      fill: e.colorText
    }
  ) });
}, oS = () => /* @__PURE__ */ x.jsxs("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ x.jsx("g", { clipPath: "url(#clip0_186_9937)", children: /* @__PURE__ */ x.jsx(
    "path",
    {
      d: "M6.33719 9.39777L11.0528 3.36027C11.0652 3.34449 11.073 3.32553 11.0751 3.30557C11.0772 3.2856 11.0737 3.26544 11.0649 3.2474C11.056 3.22936 11.0423 3.21417 11.0253 3.20357C11.0082 3.19298 10.9885 3.18741 10.9684 3.1875L9.93317 3.1875C9.86754 3.1875 9.8046 3.2183 9.76442 3.2692L5.99969 8.09063L2.23495 3.2692C2.19478 3.21697 2.13183 3.1875 2.0662 3.1875L1.03094 3.1875C0.941204 3.1875 0.89165 3.29063 0.946561 3.36027L5.66219 9.39777C5.70221 9.44908 5.75342 9.4906 5.8119 9.51915C5.87038 9.5477 5.93461 9.56254 5.99969 9.56254C6.06477 9.56254 6.12899 9.5477 6.18747 9.51915C6.24596 9.4906 6.29716 9.44908 6.33719 9.39777Z",
      fill: "currentColor"
    }
  ) }),
  /* @__PURE__ */ x.jsx("defs", { children: /* @__PURE__ */ x.jsx("clipPath", { id: "clip0_186_9937", children: /* @__PURE__ */ x.jsx("rect", { width: "12", height: "12", fill: "white", transform: "translate(12) rotate(90)" }) }) })
] }), aS = () => /* @__PURE__ */ x.jsxs("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ x.jsx("g", { clipPath: "url(#clip0_186_11488)", children: /* @__PURE__ */ x.jsx(
    "path",
    {
      d: "M5.66281 2.60223L0.947189 8.63973C0.934768 8.65551 0.92705 8.67447 0.924919 8.69443C0.922788 8.7144 0.926332 8.73456 0.935143 8.7526C0.943955 8.77064 0.957676 8.78583 0.974732 8.79643C0.991787 8.80702 1.01149 8.81259 1.03156 8.8125L2.06683 8.8125C2.13246 8.8125 2.1954 8.7817 2.23558 8.7308L6.00031 3.90937L9.76505 8.7308C9.80522 8.78303 9.86817 8.8125 9.9338 8.8125L10.9691 8.8125C11.0588 8.8125 11.1083 8.70937 11.0534 8.63973L6.33781 2.60223C6.29779 2.55092 6.24658 2.5094 6.1881 2.48085C6.12962 2.4523 6.06539 2.43746 6.00031 2.43746C5.93523 2.43746 5.87101 2.4523 5.81253 2.48085C5.75404 2.5094 5.70284 2.55092 5.66281 2.60223Z",
      fill: "currentColor"
    }
  ) }),
  /* @__PURE__ */ x.jsx("defs", { children: /* @__PURE__ */ x.jsx("clipPath", { id: "clip0_186_11488", children: /* @__PURE__ */ x.jsx("rect", { width: "12", height: "12", fill: "white", transform: "translate(0 12) rotate(-90)" }) }) })
] }), uS = () => {
  const { token: e } = nr.useToken();
  return /* @__PURE__ */ x.jsxs("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ x.jsxs("g", { clipPath: "url(#clip0_294_13557)", children: [
      /* @__PURE__ */ x.jsx(
        "path",
        {
          d: "M0.568356 1.62165L1.19782 2.11384C2.05608 1.01674 3.3909 0.3125 4.88978 0.3125C7.47795 0.3125 9.57282 2.40513 9.57617 4.99442C9.57952 7.58594 7.48019 9.6875 4.88978 9.6875C2.86635 9.6875 1.14202 8.40402 0.485765 6.60603C0.469025 6.55915 0.493578 6.5067 0.540453 6.49107L1.17327 6.27344C1.19533 6.26588 1.21948 6.26725 1.24054 6.27726C1.26161 6.28727 1.27792 6.30513 1.28599 6.32701C1.30608 6.38281 1.3284 6.43862 1.35184 6.4933C1.54492 6.95089 1.8217 7.36161 2.17438 7.71429C2.52421 8.06478 2.93841 8.34445 3.39425 8.53795C3.86635 8.73772 4.36969 8.83929 4.88755 8.83929C5.40653 8.83929 5.90876 8.73772 6.38086 8.53795C6.83713 8.34526 7.25148 8.06549 7.60072 7.71429C7.9515 7.3645 8.23087 6.9498 8.42327 6.4933C8.62304 6.02009 8.72461 5.51786 8.72461 4.99888C8.72461 4.47991 8.62304 3.97768 8.42327 3.50446C8.23019 3.04688 7.9534 2.63616 7.60072 2.28348C7.24804 1.9308 6.83733 1.65402 6.38086 1.45982C5.90876 1.26004 5.40541 1.15848 4.88755 1.15848C4.36858 1.15848 3.86635 1.26004 3.39425 1.45982C2.93797 1.65251 2.52362 1.93228 2.17438 2.28348C2.06389 2.39397 1.9601 2.51116 1.86411 2.63393L2.53599 3.15848C2.54928 3.16877 2.5594 3.18259 2.56519 3.19837C2.57097 3.21415 2.57219 3.23125 2.56869 3.24768C2.56519 3.26412 2.55712 3.27924 2.54542 3.2913C2.53371 3.30336 2.51884 3.31187 2.50251 3.31585L0.542685 3.79576C0.486881 3.80915 0.432195 3.76674 0.432195 3.70982L0.423265 1.69085C0.424381 1.61719 0.51032 1.57589 0.568356 1.62165Z",
          fill: e.colorPrimary
        }
      ),
      /* @__PURE__ */ x.jsx("circle", { cx: "4.99935", cy: "5.00033", r: "2.08333", fill: e.colorPrimary })
    ] }),
    /* @__PURE__ */ x.jsx("defs", { children: /* @__PURE__ */ x.jsx("clipPath", { id: "clip0_294_13557", children: /* @__PURE__ */ x.jsx("rect", { width: "10", height: "10", fill: "white" }) }) })
  ] });
}, cS = () => {
  const { token: e } = nr.useToken();
  return /* @__PURE__ */ x.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ x.jsx("g", { clipPath: "url(#clip0_661_14605)", children: /* @__PURE__ */ x.jsx(
      "path",
      {
        d: "M14.6751 8.38707C14.9751 7.99064 15.1412 7.50492 15.1412 6.99957C15.1412 6.19778 14.693 5.43885 13.9715 5.01564C13.7858 4.9067 13.5744 4.84937 13.359 4.84957H9.0769L9.18404 2.65492C9.20904 2.12457 9.02154 1.621 8.65726 1.23707C8.47848 1.04783 8.2628 0.897269 8.02353 0.794683C7.78427 0.692098 7.52651 0.63967 7.26618 0.640638C6.33761 0.640638 5.51618 1.26564 5.26976 2.16028L3.73583 7.71385H1.4269C1.11083 7.71385 0.855469 7.96921 0.855469 8.28528V14.7853C0.855469 15.1014 1.11083 15.3567 1.4269 15.3567H12.1644C12.3287 15.3567 12.4894 15.3246 12.6376 15.2603C13.4876 14.8978 14.0358 14.0674 14.0358 13.146C14.0358 12.921 14.0037 12.6996 13.9394 12.4853C14.2394 12.0889 14.4055 11.6031 14.4055 11.0978C14.4055 10.8728 14.3733 10.6514 14.309 10.4371C14.609 10.0406 14.7751 9.55492 14.7751 9.04957C14.7715 8.82457 14.7394 8.60135 14.6751 8.38707ZM2.14118 14.071V8.99957H3.58761V14.071H2.14118ZM13.5055 7.76742L13.1144 8.10671L13.3626 8.56028C13.4444 8.70969 13.4868 8.87746 13.4858 9.04778C13.4858 9.34242 13.3573 9.62278 13.1358 9.81564L12.7448 10.1549L12.993 10.6085C13.0747 10.7579 13.1171 10.9257 13.1162 11.096C13.1162 11.3906 12.9876 11.671 12.7662 11.8639L12.3751 12.2031L12.6233 12.6567C12.7051 12.8061 12.7475 12.9739 12.7465 13.1442C12.7465 13.5442 12.5108 13.9049 12.1465 14.0692H4.73047V8.94242L6.50726 2.50492C6.55307 2.33992 6.65142 2.19436 6.7874 2.09027C6.92339 1.98619 7.08959 1.92927 7.26083 1.92814C7.39654 1.92814 7.53047 1.96742 7.63761 2.04778C7.8144 2.17992 7.90904 2.37992 7.89833 2.59242L7.7269 6.13528H13.3412C13.659 6.32992 13.8555 6.6585 13.8555 6.99957C13.8555 7.29421 13.7269 7.57278 13.5055 7.76742Z",
        fill: e.colorSuccess
      }
    ) }),
    /* @__PURE__ */ x.jsx("defs", { children: /* @__PURE__ */ x.jsx("clipPath", { id: "clip0_661_14605", children: /* @__PURE__ */ x.jsx("rect", { width: "16", height: "16", fill: "white" }) }) })
  ] });
}, lS = {
  success: /* @__PURE__ */ x.jsx(sx, {}),
  error: /* @__PURE__ */ x.jsx(ix, {}),
  warning: /* @__PURE__ */ x.jsx(rx, {}),
  validating: /* @__PURE__ */ x.jsx(nx, {})
}, Ni = () => ({
  ...lS,
  success: /* @__PURE__ */ x.jsx(cS, {})
}), P0 = () => {
  const { token: e } = nr.useToken();
  return /* @__PURE__ */ x.jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ x.jsx(
    "path",
    {
      d: "M8.53558 1.57227H7.46415C7.36891 1.57227 7.32129 1.61988 7.32129 1.71512V7.32227H2.00028C1.90504 7.32227 1.85742 7.36988 1.85742 7.46512V8.53655C1.85742 8.63179 1.90504 8.67941 2.00028 8.67941H7.32129V14.2866C7.32129 14.3818 7.36891 14.4294 7.46415 14.4294H8.53558C8.63081 14.4294 8.67843 14.3818 8.67843 14.2866V8.67941H14.0003C14.0955 8.67941 14.1431 8.63179 14.1431 8.53655V7.46512C14.1431 7.36988 14.0955 7.32227 14.0003 7.32227H8.67843V1.71512C8.67843 1.61988 8.63081 1.57227 8.53558 1.57227Z",
      fill: e.colorText
    }
  ) });
}, gn = () => {
  const { token: e } = nr.useToken();
  return /* @__PURE__ */ x.jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ x.jsx(
    "path",
    {
      d: "M14.4277 7.32227H1.57059C1.49202 7.32227 1.42773 7.38655 1.42773 7.46512V8.53655C1.42773 8.61512 1.49202 8.67941 1.57059 8.67941H14.4277C14.5063 8.67941 14.5706 8.61512 14.5706 8.53655V7.46512C14.5706 7.38655 14.5063 7.32227 14.4277 7.32227Z",
      fill: e.colorText
    }
  ) });
}, fS = () => {
  const { token: e } = nr.useToken();
  return /* @__PURE__ */ x.jsx("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ x.jsx(
    "path",
    {
      d: "M11.375 6.34375H10.4453V3.28125C10.4453 2.31465 9.66191 1.53125 8.69531 1.53125H5.30469C4.33809 1.53125 3.55469 2.31465 3.55469 3.28125V6.34375H2.625C2.38301 6.34375 2.1875 6.53926 2.1875 6.78125V12.0312C2.1875 12.2732 2.38301 12.4688 2.625 12.4688H11.375C11.617 12.4688 11.8125 12.2732 11.8125 12.0312V6.78125C11.8125 6.53926 11.617 6.34375 11.375 6.34375ZM7.38281 9.58398V10.3086C7.38281 10.3687 7.33359 10.418 7.27344 10.418H6.72656C6.66641 10.418 6.61719 10.3687 6.61719 10.3086V9.58398C6.50433 9.50296 6.42009 9.38821 6.3766 9.25626C6.33311 9.12431 6.33261 8.98197 6.37517 8.84972C6.41773 8.71746 6.50115 8.60213 6.61344 8.52031C6.72572 8.43848 6.86107 8.3944 7 8.3944C7.13893 8.3944 7.27428 8.43848 7.38656 8.52031C7.49885 8.60213 7.58227 8.71746 7.62483 8.84972C7.66739 8.98197 7.66689 9.12431 7.6234 9.25626C7.57991 9.38821 7.49567 9.50296 7.38281 9.58398ZM9.46094 6.34375H4.53906V3.28125C4.53906 2.85879 4.88223 2.51562 5.30469 2.51562H8.69531C9.11777 2.51562 9.46094 2.85879 9.46094 3.28125V6.34375Z",
      fill: e.colorPrimary
    }
  ) });
}, hS = () => {
  const { token: e } = nr.useToken();
  return /* @__PURE__ */ x.jsx("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ x.jsx(
    "path",
    {
      d: "M11.375 6.34375H4.53906V3.28125C4.53906 2.85879 4.88223 2.51562 5.30469 2.51562H8.69531C9.11777 2.51562 9.46094 2.85879 9.46094 3.28125V4.21094C9.46094 4.27109 9.51016 4.32031 9.57031 4.32031H10.3359C10.3961 4.32031 10.4453 4.27109 10.4453 4.21094V3.28125C10.4453 2.31465 9.66191 1.53125 8.69531 1.53125H5.30469C4.33809 1.53125 3.55469 2.31465 3.55469 3.28125V6.34375H2.625C2.38301 6.34375 2.1875 6.53926 2.1875 6.78125V12.0312C2.1875 12.2732 2.38301 12.4688 2.625 12.4688H11.375C11.617 12.4688 11.8125 12.2732 11.8125 12.0312V6.78125C11.8125 6.53926 11.617 6.34375 11.375 6.34375ZM7.38281 9.58398V10.3086C7.38281 10.3687 7.33359 10.418 7.27344 10.418H6.72656C6.66641 10.418 6.61719 10.3687 6.61719 10.3086V9.58398C6.50433 9.50296 6.42009 9.38821 6.3766 9.25626C6.33311 9.12431 6.33261 8.98197 6.37517 8.84972C6.41773 8.71746 6.50115 8.60213 6.61344 8.52031C6.72572 8.43848 6.86107 8.3944 7 8.3944C7.13893 8.3944 7.27428 8.43848 7.38656 8.52031C7.49885 8.60213 7.58227 8.71746 7.62483 8.84972C7.66739 8.98197 7.66689 9.12431 7.6234 9.25626C7.57991 9.38821 7.49567 9.50296 7.38281 9.58398Z",
      fill: e.colorText
    }
  ) });
}, dS = Ze.div`
  border: 1px solid ${({ $borderColor: e }) => e};
  border-radius: 6px;
  background-color: ${({ $bgColor: e }) => e};
  width: 100%;
  height: 100%;
  padding: 24px;
  flex-grow: ${({ $flexGrow: e }) => e};
  display: ${({ $displayFlex: e }) => e ? "flex" : "block"};
  flex-flow: ${({ $flexFlow: e }) => e};
`, pS = {
  ContentContainer: dS
}, gS = ({ children: e, flexGrow: t, displayFlex: n, flexFlow: i }) => {
  const { token: o } = nr.useToken();
  return /* @__PURE__ */ x.jsx(
    pS.ContentContainer,
    {
      $flexGrow: t,
      $bgColor: o.colorBgContainer,
      $borderColor: o.colorBorder,
      $displayFlex: n,
      $flexFlow: i,
      children: e
    }
  );
}, yS = async ({ uri: e }) => nt.get(e), fn = ({
  uri: e,
  queryKey: t,
  refetchInterval: n,
  isEnabled: i
}) => Mn({
  queryKey: t,
  queryFn: async () => {
    const o = await yS({
      uri: e
    }), a = JSON.parse(JSON.stringify(o.data));
    return a.metadata?.resourceVersion && delete a.metadata.resourceVersion, a;
  },
  refetchInterval: n !== void 0 ? n : 5e3,
  enabled: i
}), Ot = ({
  template: e,
  replaceValues: t
}) => e.replaceAll(/{(.*?)}/g, (n, i) => t[i] || ""), mS = ({
  rawLinks: e,
  replaceValues: t
}) => e.map(({ key: n, label: i, link: o }) => ({
  key: n,
  title: o ? /* @__PURE__ */ x.jsx(
    $p,
    {
      to: Ot({
        template: o,
        replaceValues: t
      }),
      children: Ot({
        template: i,
        replaceValues: t
      })
    }
  ) : Ot({
    template: i,
    replaceValues: t
  })
})), wS = ({
  data: e,
  replaceValues: t,
  pathname: n
}) => e.map(({ pathToMatch: o, breadcrumbItems: a }) => ({
  pathToMatch: Ot({
    template: o,
    replaceValues: t
  }),
  breadcrumbItems: mS({
    rawLinks: a,
    replaceValues: t
  })
})).find(({ pathToMatch: o }) => Ml(o, n)), bS = Ze.div`
  min-height: 22px;
  width: 100%;
`, kl = {
  HeightDiv: bS
}, vS = ({ data: e, replaceValues: t, pathname: n }) => {
  const i = e?.items.map(({ spec: a }) => a);
  if (!i)
    return null;
  const o = wS({
    data: i,
    replaceValues: t,
    pathname: n
  });
  return o ? /* @__PURE__ */ x.jsx(kl.HeightDiv, { children: /* @__PURE__ */ x.jsx(Jv, { separator: ">", items: o.breadcrumbItems }) }) : /* @__PURE__ */ x.jsx(kl.HeightDiv, {});
}, K4 = ({
  uri: e,
  refetchInterval: t,
  isEnabled: n,
  replaceValues: i,
  pathname: o
}) => {
  const {
    data: a,
    isError: u,
    isLoading: l
  } = fn({
    uri: e,
    refetchInterval: t,
    queryKey: ["breadcrumb", e],
    isEnabled: n
  });
  return u ? null : l ? /* @__PURE__ */ x.jsx(kl.HeightDiv, { children: /* @__PURE__ */ x.jsx(vo, {}) }) : a ? /* @__PURE__ */ x.jsx(vS, { data: a, replaceValues: i, pathname: o }) : null;
}, R0 = ({
  rawLinks: e,
  replaceValues: t
}) => e.map(({ key: n, label: i, link: o, children: a }) => {
  const u = o ? Ot({ template: o, replaceValues: t }) : void 0;
  return {
    key: n,
    label: u ? /* @__PURE__ */ x.jsx($p, { to: u, children: i }) : i,
    internalMetaLink: u,
    children: a ? R0({
      rawLinks: a,
      replaceValues: t
    }) : void 0
  };
}), xS = (e, t) => {
  const n = (i, o) => i.flatMap((a) => {
    const u = [...o, a.key ? a.key : String(a.key)], l = a.internalMetaLink?.startsWith("/") ? a.internalMetaLink.slice(1) : a.internalMetaLink, f = t.startsWith("/") ? t.slice(1) : t, d = l === f || l && u && l.includes(f) ? u : [];
    let g = [];
    return "children" in a && a.children && (g = n(a.children, u)), [...d, ...g];
  });
  return n(e, []);
}, AS = ({
  data: e,
  replaceValues: t,
  pathname: n
}) => {
  const o = e.map(({ pathToMatch: l, menuItems: f }) => ({
    pathToMatch: Ot({
      template: l,
      replaceValues: t
    }),
    menuItems: R0({
      rawLinks: f,
      replaceValues: t
    })
  })).find(({ pathToMatch: l }) => Ml(l, n));
  if (!o)
    return;
  const u = (o?.menuItems ? xS(o?.menuItems, n) : []).map((l) => typeof l == "string" ? l : String(l));
  return { ...o, selectedKeys: u };
}, ES = Ze(Yv)`
  margin-top: ${({ $noMarginTop: e }) => e ? "0" : "16px"};
  font-size: 14px;
  line-height: 24px;
  border: 0;
  /* stylelint-disable declaration-no-important */
  border-inline-end: 0 !important;
  /* stylelint-enable declaration-no-important */

  .ant-menu-submenu-expand-icon {
    width: 16px;
  }

  && .ant-menu-item-only-child {
    /* stylelint-disable declaration-no-important */

    /* padding-left: 24px !important; */
  }

  && .ant-menu-sub .ant-menu-item {
    margin: 0 !important;
  }
`, SS = {
  CustomMenu: ES
}, CS = ({ data: e, replaceValues: t, pathname: n, noMarginTop: i }) => {
  const o = e?.items.map(({ spec: u }) => u);
  if (!o)
    return null;
  const a = AS({
    data: o,
    replaceValues: t,
    pathname: n
  });
  return a ? /* @__PURE__ */ x.jsx(
    SS.CustomMenu,
    {
      selectedKeys: a.selectedKeys,
      onSelect: () => {
      },
      onDeselect: () => {
      },
      mode: "inline",
      items: a.menuItems,
      $noMarginTop: i
    }
  ) : null;
}, H4 = ({
  uri: e,
  refetchInterval: t,
  isEnabled: n,
  replaceValues: i,
  pathname: o,
  hidden: a,
  noMarginTop: u
}) => {
  const {
    data: l,
    isError: f,
    isLoading: d
  } = fn({
    uri: e,
    refetchInterval: t,
    queryKey: ["sidebar", e],
    isEnabled: n
  });
  return f ? null : d ? /* @__PURE__ */ x.jsx(vo, {}) : !l || a ? null : /* @__PURE__ */ x.jsx(CS, { data: l, replaceValues: i, pathname: o, noMarginTop: u });
};
var iu = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
iu.exports;
(function(e, t) {
  (function() {
    var n, i = "4.17.21", o = 200, a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", u = "Expected a function", l = "Invalid `variable` option passed into `_.template`", f = "__lodash_hash_undefined__", d = 500, g = "__lodash_placeholder__", p = 1, v = 2, _ = 4, A = 1, E = 2, b = 1, D = 2, j = 4, C = 8, O = 16, F = 32, L = 64, T = 128, q = 256, J = 512, oe = 30, ae = "...", he = 800, de = 16, Ae = 1, fe = 2, Be = 3, be = 1 / 0, ve = 9007199254740991, We = 17976931348623157e292, we = NaN, pe = 4294967295, je = pe - 1, G = pe >>> 1, X = [
      ["ary", T],
      ["bind", b],
      ["bindKey", D],
      ["curry", C],
      ["curryRight", O],
      ["flip", J],
      ["partial", F],
      ["partialRight", L],
      ["rearg", q]
    ], ie = "[object Arguments]", Te = "[object Array]", Me = "[object AsyncFunction]", Ee = "[object Boolean]", Ie = "[object Date]", _e = "[object DOMException]", De = "[object Error]", _t = "[object Function]", on = "[object GeneratorFunction]", Rt = "[object Map]", jt = "[object Number]", Nt = "[object Null]", wt = "[object Object]", In = "[object Promise]", En = "[object Proxy]", Se = "[object RegExp]", Fe = "[object Set]", ce = "[object String]", vt = "[object Symbol]", xt = "[object Undefined]", At = "[object WeakMap]", et = "[object WeakSet]", ge = "[object ArrayBuffer]", Ce = "[object DataView]", at = "[object Float32Array]", I = "[object Float64Array]", y = "[object Int8Array]", w = "[object Int16Array]", R = "[object Int32Array]", V = "[object Uint8Array]", z = "[object Uint8ClampedArray]", Q = "[object Uint16Array]", Ne = "[object Uint32Array]", dt = /\b__p \+= '';/g, ut = /\b(__p \+=) '' \+/g, ft = /(__e\(.*?\)|\b__t\)) \+\n'';/g, rt = /&(?:amp|lt|gt|quot|#39);/g, Hr = /[&<>"']/g, di = RegExp(rt.source), Vi = RegExp(Hr.source), qi = /<%-([\s\S]+?)%>/g, Wi = /<%([\s\S]+?)%>/g, zr = /<%=([\s\S]+?)%>/g, pi = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, js = /^\w*$/, Ns = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Tr = /[\\^$.*+?()[\]{}|]/g, rr = RegExp(Tr.source), Gr = /^\s+/, $s = /\s/, Ms = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, yn = /\{\n\/\* \[wrapped with (.+)\] \*/, M = /,? & /, ue = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, ye = /[()=,{}\[\]\/\s]/, Oe = /\\(\\)?/g, ct = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, lt = /\w*$/, Xe = /^[-+]0x[0-9a-f]+$/i, ze = /^0b[01]+$/i, Zt = /^\[object .+?Constructor\]$/, It = /^0o[0-7]+$/i, Dt = /^(?:0|[1-9]\d*)$/, hn = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Fn = /($^)/, ir = /['\n\r\u2028\u2029\\]/g, qt = "\\ud800-\\udfff", gi = "\\u0300-\\u036f", Us = "\\ufe20-\\ufe2f", Vs = "\\u20d0-\\u20ff", $o = gi + Us + Vs, Mo = "\\u2700-\\u27bf", Uo = "a-z\\xdf-\\xf6\\xf8-\\xff", Fu = "\\xac\\xb1\\xd7\\xf7", Bu = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Du = "\\u2000-\\u206f", Lu = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Bn = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ki = "\\ufe0e\\ufe0f", qs = Fu + Bu + Du + Lu, Hi = "['’]", Pu = "[" + qt + "]", Jr = "[" + qs + "]", zi = "[" + $o + "]", Vo = "\\d+", qo = "[" + Mo + "]", Wo = "[" + Uo + "]", Ko = "[^" + qt + qs + Vo + Mo + Uo + Bn + "]", h = "\\ud83c[\\udffb-\\udfff]", S = "(?:" + zi + "|" + h + ")", N = "[^" + qt + "]", W = "(?:\\ud83c[\\udde6-\\uddff]){2}", ee = "[\\ud800-\\udbff][\\udc00-\\udfff]", le = "[" + Bn + "]", Ke = "\\u200d", pt = "(?:" + Wo + "|" + Ko + ")", en = "(?:" + le + "|" + Ko + ")", Wt = "(?:" + Hi + "(?:d|ll|m|re|s|t|ve))?", bf = "(?:" + Hi + "(?:D|LL|M|RE|S|T|VE))?", vf = S + "?", xf = "[" + Ki + "]?", Jg = "(?:" + Ke + "(?:" + [N, W, ee].join("|") + ")" + xf + vf + ")*", Yg = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Xg = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Af = xf + vf + Jg, Qg = "(?:" + [qo, W, ee].join("|") + ")" + Af, Zg = "(?:" + [N + zi + "?", zi, W, ee, Pu].join("|") + ")", e1 = RegExp(Hi, "g"), t1 = RegExp(zi, "g"), Ru = RegExp(h + "(?=" + h + ")|" + Zg + Af, "g"), n1 = RegExp([
      le + "?" + Wo + "+" + Wt + "(?=" + [Jr, le, "$"].join("|") + ")",
      en + "+" + bf + "(?=" + [Jr, le + pt, "$"].join("|") + ")",
      le + "?" + pt + "+" + Wt,
      le + "+" + bf,
      Xg,
      Yg,
      Vo,
      Qg
    ].join("|"), "g"), r1 = RegExp("[" + Ke + qt + $o + Ki + "]"), i1 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, s1 = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], o1 = -1, Ft = {};
    Ft[at] = Ft[I] = Ft[y] = Ft[w] = Ft[R] = Ft[V] = Ft[z] = Ft[Q] = Ft[Ne] = !0, Ft[ie] = Ft[Te] = Ft[ge] = Ft[Ee] = Ft[Ce] = Ft[Ie] = Ft[De] = Ft[_t] = Ft[Rt] = Ft[jt] = Ft[wt] = Ft[Se] = Ft[Fe] = Ft[ce] = Ft[At] = !1;
    var kt = {};
    kt[ie] = kt[Te] = kt[ge] = kt[Ce] = kt[Ee] = kt[Ie] = kt[at] = kt[I] = kt[y] = kt[w] = kt[R] = kt[Rt] = kt[jt] = kt[wt] = kt[Se] = kt[Fe] = kt[ce] = kt[vt] = kt[V] = kt[z] = kt[Q] = kt[Ne] = !0, kt[De] = kt[_t] = kt[At] = !1;
    var a1 = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, u1 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, c1 = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, l1 = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, f1 = parseFloat, h1 = parseInt, Ef = typeof hr == "object" && hr && hr.Object === Object && hr, d1 = typeof self == "object" && self && self.Object === Object && self, un = Ef || d1 || Function("return this")(), ju = t && !t.nodeType && t, yi = ju && !0 && e && !e.nodeType && e, Sf = yi && yi.exports === ju, Nu = Sf && Ef.process, Un = function() {
      try {
        var K = yi && yi.require && yi.require("util").types;
        return K || Nu && Nu.binding && Nu.binding("util");
      } catch {
      }
    }(), Cf = Un && Un.isArrayBuffer, _f = Un && Un.isDate, kf = Un && Un.isMap, Of = Un && Un.isRegExp, Tf = Un && Un.isSet, If = Un && Un.isTypedArray;
    function Dn(K, Z, Y) {
      switch (Y.length) {
        case 0:
          return K.call(Z);
        case 1:
          return K.call(Z, Y[0]);
        case 2:
          return K.call(Z, Y[0], Y[1]);
        case 3:
          return K.call(Z, Y[0], Y[1], Y[2]);
      }
      return K.apply(Z, Y);
    }
    function p1(K, Z, Y, xe) {
      for (var $e = -1, gt = K == null ? 0 : K.length; ++$e < gt; ) {
        var tn = K[$e];
        Z(xe, tn, Y(tn), K);
      }
      return xe;
    }
    function Vn(K, Z) {
      for (var Y = -1, xe = K == null ? 0 : K.length; ++Y < xe && Z(K[Y], Y, K) !== !1; )
        ;
      return K;
    }
    function g1(K, Z) {
      for (var Y = K == null ? 0 : K.length; Y-- && Z(K[Y], Y, K) !== !1; )
        ;
      return K;
    }
    function Ff(K, Z) {
      for (var Y = -1, xe = K == null ? 0 : K.length; ++Y < xe; )
        if (!Z(K[Y], Y, K))
          return !1;
      return !0;
    }
    function Yr(K, Z) {
      for (var Y = -1, xe = K == null ? 0 : K.length, $e = 0, gt = []; ++Y < xe; ) {
        var tn = K[Y];
        Z(tn, Y, K) && (gt[$e++] = tn);
      }
      return gt;
    }
    function Ho(K, Z) {
      var Y = K == null ? 0 : K.length;
      return !!Y && Gi(K, Z, 0) > -1;
    }
    function $u(K, Z, Y) {
      for (var xe = -1, $e = K == null ? 0 : K.length; ++xe < $e; )
        if (Y(Z, K[xe]))
          return !0;
      return !1;
    }
    function Lt(K, Z) {
      for (var Y = -1, xe = K == null ? 0 : K.length, $e = Array(xe); ++Y < xe; )
        $e[Y] = Z(K[Y], Y, K);
      return $e;
    }
    function Xr(K, Z) {
      for (var Y = -1, xe = Z.length, $e = K.length; ++Y < xe; )
        K[$e + Y] = Z[Y];
      return K;
    }
    function Mu(K, Z, Y, xe) {
      var $e = -1, gt = K == null ? 0 : K.length;
      for (xe && gt && (Y = K[++$e]); ++$e < gt; )
        Y = Z(Y, K[$e], $e, K);
      return Y;
    }
    function y1(K, Z, Y, xe) {
      var $e = K == null ? 0 : K.length;
      for (xe && $e && (Y = K[--$e]); $e--; )
        Y = Z(Y, K[$e], $e, K);
      return Y;
    }
    function Uu(K, Z) {
      for (var Y = -1, xe = K == null ? 0 : K.length; ++Y < xe; )
        if (Z(K[Y], Y, K))
          return !0;
      return !1;
    }
    var m1 = Vu("length");
    function w1(K) {
      return K.split("");
    }
    function b1(K) {
      return K.match(ue) || [];
    }
    function Bf(K, Z, Y) {
      var xe;
      return Y(K, function($e, gt, tn) {
        if (Z($e, gt, tn))
          return xe = gt, !1;
      }), xe;
    }
    function zo(K, Z, Y, xe) {
      for (var $e = K.length, gt = Y + (xe ? 1 : -1); xe ? gt-- : ++gt < $e; )
        if (Z(K[gt], gt, K))
          return gt;
      return -1;
    }
    function Gi(K, Z, Y) {
      return Z === Z ? F1(K, Z, Y) : zo(K, Df, Y);
    }
    function v1(K, Z, Y, xe) {
      for (var $e = Y - 1, gt = K.length; ++$e < gt; )
        if (xe(K[$e], Z))
          return $e;
      return -1;
    }
    function Df(K) {
      return K !== K;
    }
    function Lf(K, Z) {
      var Y = K == null ? 0 : K.length;
      return Y ? Wu(K, Z) / Y : we;
    }
    function Vu(K) {
      return function(Z) {
        return Z == null ? n : Z[K];
      };
    }
    function qu(K) {
      return function(Z) {
        return K == null ? n : K[Z];
      };
    }
    function Pf(K, Z, Y, xe, $e) {
      return $e(K, function(gt, tn, Ct) {
        Y = xe ? (xe = !1, gt) : Z(Y, gt, tn, Ct);
      }), Y;
    }
    function x1(K, Z) {
      var Y = K.length;
      for (K.sort(Z); Y--; )
        K[Y] = K[Y].value;
      return K;
    }
    function Wu(K, Z) {
      for (var Y, xe = -1, $e = K.length; ++xe < $e; ) {
        var gt = Z(K[xe]);
        gt !== n && (Y = Y === n ? gt : Y + gt);
      }
      return Y;
    }
    function Ku(K, Z) {
      for (var Y = -1, xe = Array(K); ++Y < K; )
        xe[Y] = Z(Y);
      return xe;
    }
    function A1(K, Z) {
      return Lt(Z, function(Y) {
        return [Y, K[Y]];
      });
    }
    function Rf(K) {
      return K && K.slice(0, Mf(K) + 1).replace(Gr, "");
    }
    function Ln(K) {
      return function(Z) {
        return K(Z);
      };
    }
    function Hu(K, Z) {
      return Lt(Z, function(Y) {
        return K[Y];
      });
    }
    function Ws(K, Z) {
      return K.has(Z);
    }
    function jf(K, Z) {
      for (var Y = -1, xe = K.length; ++Y < xe && Gi(Z, K[Y], 0) > -1; )
        ;
      return Y;
    }
    function Nf(K, Z) {
      for (var Y = K.length; Y-- && Gi(Z, K[Y], 0) > -1; )
        ;
      return Y;
    }
    function E1(K, Z) {
      for (var Y = K.length, xe = 0; Y--; )
        K[Y] === Z && ++xe;
      return xe;
    }
    var S1 = qu(a1), C1 = qu(u1);
    function _1(K) {
      return "\\" + l1[K];
    }
    function k1(K, Z) {
      return K == null ? n : K[Z];
    }
    function Ji(K) {
      return r1.test(K);
    }
    function O1(K) {
      return i1.test(K);
    }
    function T1(K) {
      for (var Z, Y = []; !(Z = K.next()).done; )
        Y.push(Z.value);
      return Y;
    }
    function zu(K) {
      var Z = -1, Y = Array(K.size);
      return K.forEach(function(xe, $e) {
        Y[++Z] = [$e, xe];
      }), Y;
    }
    function $f(K, Z) {
      return function(Y) {
        return K(Z(Y));
      };
    }
    function Qr(K, Z) {
      for (var Y = -1, xe = K.length, $e = 0, gt = []; ++Y < xe; ) {
        var tn = K[Y];
        (tn === Z || tn === g) && (K[Y] = g, gt[$e++] = Y);
      }
      return gt;
    }
    function Go(K) {
      var Z = -1, Y = Array(K.size);
      return K.forEach(function(xe) {
        Y[++Z] = xe;
      }), Y;
    }
    function I1(K) {
      var Z = -1, Y = Array(K.size);
      return K.forEach(function(xe) {
        Y[++Z] = [xe, xe];
      }), Y;
    }
    function F1(K, Z, Y) {
      for (var xe = Y - 1, $e = K.length; ++xe < $e; )
        if (K[xe] === Z)
          return xe;
      return -1;
    }
    function B1(K, Z, Y) {
      for (var xe = Y + 1; xe--; )
        if (K[xe] === Z)
          return xe;
      return xe;
    }
    function Yi(K) {
      return Ji(K) ? L1(K) : m1(K);
    }
    function sr(K) {
      return Ji(K) ? P1(K) : w1(K);
    }
    function Mf(K) {
      for (var Z = K.length; Z-- && $s.test(K.charAt(Z)); )
        ;
      return Z;
    }
    var D1 = qu(c1);
    function L1(K) {
      for (var Z = Ru.lastIndex = 0; Ru.test(K); )
        ++Z;
      return Z;
    }
    function P1(K) {
      return K.match(Ru) || [];
    }
    function R1(K) {
      return K.match(n1) || [];
    }
    var j1 = function K(Z) {
      Z = Z == null ? un : Xi.defaults(un.Object(), Z, Xi.pick(un, s1));
      var Y = Z.Array, xe = Z.Date, $e = Z.Error, gt = Z.Function, tn = Z.Math, Ct = Z.Object, Gu = Z.RegExp, N1 = Z.String, qn = Z.TypeError, Jo = Y.prototype, $1 = gt.prototype, Qi = Ct.prototype, Yo = Z["__core-js_shared__"], Xo = $1.toString, Et = Qi.hasOwnProperty, M1 = 0, Uf = function() {
        var r = /[^.]+$/.exec(Yo && Yo.keys && Yo.keys.IE_PROTO || "");
        return r ? "Symbol(src)_1." + r : "";
      }(), Qo = Qi.toString, U1 = Xo.call(Ct), V1 = un._, q1 = Gu(
        "^" + Xo.call(Et).replace(Tr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Zo = Sf ? Z.Buffer : n, Zr = Z.Symbol, ea = Z.Uint8Array, Vf = Zo ? Zo.allocUnsafe : n, ta = $f(Ct.getPrototypeOf, Ct), qf = Ct.create, Wf = Qi.propertyIsEnumerable, na = Jo.splice, Kf = Zr ? Zr.isConcatSpreadable : n, Ks = Zr ? Zr.iterator : n, mi = Zr ? Zr.toStringTag : n, ra = function() {
        try {
          var r = Ai(Ct, "defineProperty");
          return r({}, "", {}), r;
        } catch {
        }
      }(), W1 = Z.clearTimeout !== un.clearTimeout && Z.clearTimeout, K1 = xe && xe.now !== un.Date.now && xe.now, H1 = Z.setTimeout !== un.setTimeout && Z.setTimeout, ia = tn.ceil, sa = tn.floor, Ju = Ct.getOwnPropertySymbols, z1 = Zo ? Zo.isBuffer : n, Hf = Z.isFinite, G1 = Jo.join, J1 = $f(Ct.keys, Ct), nn = tn.max, dn = tn.min, Y1 = xe.now, X1 = Z.parseInt, zf = tn.random, Q1 = Jo.reverse, Yu = Ai(Z, "DataView"), Hs = Ai(Z, "Map"), Xu = Ai(Z, "Promise"), Zi = Ai(Z, "Set"), zs = Ai(Z, "WeakMap"), Gs = Ai(Ct, "create"), oa = zs && new zs(), es = {}, Z1 = Ei(Yu), ey = Ei(Hs), ty = Ei(Xu), ny = Ei(Zi), ry = Ei(zs), aa = Zr ? Zr.prototype : n, Js = aa ? aa.valueOf : n, Gf = aa ? aa.toString : n;
      function B(r) {
        if (Vt(r) && !Ue(r) && !(r instanceof it)) {
          if (r instanceof Wn)
            return r;
          if (Et.call(r, "__wrapped__"))
            return Jh(r);
        }
        return new Wn(r);
      }
      var ts = /* @__PURE__ */ function() {
        function r() {
        }
        return function(s) {
          if (!$t(s))
            return {};
          if (qf)
            return qf(s);
          r.prototype = s;
          var c = new r();
          return r.prototype = n, c;
        };
      }();
      function ua() {
      }
      function Wn(r, s) {
        this.__wrapped__ = r, this.__actions__ = [], this.__chain__ = !!s, this.__index__ = 0, this.__values__ = n;
      }
      B.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: qi,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Wi,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: zr,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: B
        }
      }, B.prototype = ua.prototype, B.prototype.constructor = B, Wn.prototype = ts(ua.prototype), Wn.prototype.constructor = Wn;
      function it(r) {
        this.__wrapped__ = r, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = pe, this.__views__ = [];
      }
      function iy() {
        var r = new it(this.__wrapped__);
        return r.__actions__ = Sn(this.__actions__), r.__dir__ = this.__dir__, r.__filtered__ = this.__filtered__, r.__iteratees__ = Sn(this.__iteratees__), r.__takeCount__ = this.__takeCount__, r.__views__ = Sn(this.__views__), r;
      }
      function sy() {
        if (this.__filtered__) {
          var r = new it(this);
          r.__dir__ = -1, r.__filtered__ = !0;
        } else
          r = this.clone(), r.__dir__ *= -1;
        return r;
      }
      function oy() {
        var r = this.__wrapped__.value(), s = this.__dir__, c = Ue(r), m = s < 0, k = c ? r.length : 0, P = wm(0, k, this.__views__), $ = P.start, U = P.end, H = U - $, ne = m ? U : $ - 1, re = this.__iteratees__, se = re.length, me = 0, ke = dn(H, this.__takeCount__);
        if (!c || !m && k == H && ke == H)
          return wh(r, this.__actions__);
        var Pe = [];
        e:
          for (; H-- && me < ke; ) {
            ne += s;
            for (var Ge = -1, Re = r[ne]; ++Ge < se; ) {
              var tt = re[Ge], ot = tt.iteratee, jn = tt.type, bn = ot(Re);
              if (jn == fe)
                Re = bn;
              else if (!bn) {
                if (jn == Ae)
                  continue e;
                break e;
              }
            }
            Pe[me++] = Re;
          }
        return Pe;
      }
      it.prototype = ts(ua.prototype), it.prototype.constructor = it;
      function wi(r) {
        var s = -1, c = r == null ? 0 : r.length;
        for (this.clear(); ++s < c; ) {
          var m = r[s];
          this.set(m[0], m[1]);
        }
      }
      function ay() {
        this.__data__ = Gs ? Gs(null) : {}, this.size = 0;
      }
      function uy(r) {
        var s = this.has(r) && delete this.__data__[r];
        return this.size -= s ? 1 : 0, s;
      }
      function cy(r) {
        var s = this.__data__;
        if (Gs) {
          var c = s[r];
          return c === f ? n : c;
        }
        return Et.call(s, r) ? s[r] : n;
      }
      function ly(r) {
        var s = this.__data__;
        return Gs ? s[r] !== n : Et.call(s, r);
      }
      function fy(r, s) {
        var c = this.__data__;
        return this.size += this.has(r) ? 0 : 1, c[r] = Gs && s === n ? f : s, this;
      }
      wi.prototype.clear = ay, wi.prototype.delete = uy, wi.prototype.get = cy, wi.prototype.has = ly, wi.prototype.set = fy;
      function Ir(r) {
        var s = -1, c = r == null ? 0 : r.length;
        for (this.clear(); ++s < c; ) {
          var m = r[s];
          this.set(m[0], m[1]);
        }
      }
      function hy() {
        this.__data__ = [], this.size = 0;
      }
      function dy(r) {
        var s = this.__data__, c = ca(s, r);
        if (c < 0)
          return !1;
        var m = s.length - 1;
        return c == m ? s.pop() : na.call(s, c, 1), --this.size, !0;
      }
      function py(r) {
        var s = this.__data__, c = ca(s, r);
        return c < 0 ? n : s[c][1];
      }
      function gy(r) {
        return ca(this.__data__, r) > -1;
      }
      function yy(r, s) {
        var c = this.__data__, m = ca(c, r);
        return m < 0 ? (++this.size, c.push([r, s])) : c[m][1] = s, this;
      }
      Ir.prototype.clear = hy, Ir.prototype.delete = dy, Ir.prototype.get = py, Ir.prototype.has = gy, Ir.prototype.set = yy;
      function Fr(r) {
        var s = -1, c = r == null ? 0 : r.length;
        for (this.clear(); ++s < c; ) {
          var m = r[s];
          this.set(m[0], m[1]);
        }
      }
      function my() {
        this.size = 0, this.__data__ = {
          hash: new wi(),
          map: new (Hs || Ir)(),
          string: new wi()
        };
      }
      function wy(r) {
        var s = xa(this, r).delete(r);
        return this.size -= s ? 1 : 0, s;
      }
      function by(r) {
        return xa(this, r).get(r);
      }
      function vy(r) {
        return xa(this, r).has(r);
      }
      function xy(r, s) {
        var c = xa(this, r), m = c.size;
        return c.set(r, s), this.size += c.size == m ? 0 : 1, this;
      }
      Fr.prototype.clear = my, Fr.prototype.delete = wy, Fr.prototype.get = by, Fr.prototype.has = vy, Fr.prototype.set = xy;
      function bi(r) {
        var s = -1, c = r == null ? 0 : r.length;
        for (this.__data__ = new Fr(); ++s < c; )
          this.add(r[s]);
      }
      function Ay(r) {
        return this.__data__.set(r, f), this;
      }
      function Ey(r) {
        return this.__data__.has(r);
      }
      bi.prototype.add = bi.prototype.push = Ay, bi.prototype.has = Ey;
      function or(r) {
        var s = this.__data__ = new Ir(r);
        this.size = s.size;
      }
      function Sy() {
        this.__data__ = new Ir(), this.size = 0;
      }
      function Cy(r) {
        var s = this.__data__, c = s.delete(r);
        return this.size = s.size, c;
      }
      function _y(r) {
        return this.__data__.get(r);
      }
      function ky(r) {
        return this.__data__.has(r);
      }
      function Oy(r, s) {
        var c = this.__data__;
        if (c instanceof Ir) {
          var m = c.__data__;
          if (!Hs || m.length < o - 1)
            return m.push([r, s]), this.size = ++c.size, this;
          c = this.__data__ = new Fr(m);
        }
        return c.set(r, s), this.size = c.size, this;
      }
      or.prototype.clear = Sy, or.prototype.delete = Cy, or.prototype.get = _y, or.prototype.has = ky, or.prototype.set = Oy;
      function Jf(r, s) {
        var c = Ue(r), m = !c && Si(r), k = !c && !m && ii(r), P = !c && !m && !k && ss(r), $ = c || m || k || P, U = $ ? Ku(r.length, N1) : [], H = U.length;
        for (var ne in r)
          (s || Et.call(r, ne)) && !($ && // Safari 9 has enumerable `arguments.length` in strict mode.
          (ne == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          k && (ne == "offset" || ne == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          P && (ne == "buffer" || ne == "byteLength" || ne == "byteOffset") || // Skip index properties.
          Pr(ne, H))) && U.push(ne);
        return U;
      }
      function Yf(r) {
        var s = r.length;
        return s ? r[uc(0, s - 1)] : n;
      }
      function Ty(r, s) {
        return Aa(Sn(r), vi(s, 0, r.length));
      }
      function Iy(r) {
        return Aa(Sn(r));
      }
      function Qu(r, s, c) {
        (c !== n && !ar(r[s], c) || c === n && !(s in r)) && Br(r, s, c);
      }
      function Ys(r, s, c) {
        var m = r[s];
        (!(Et.call(r, s) && ar(m, c)) || c === n && !(s in r)) && Br(r, s, c);
      }
      function ca(r, s) {
        for (var c = r.length; c--; )
          if (ar(r[c][0], s))
            return c;
        return -1;
      }
      function Fy(r, s, c, m) {
        return ei(r, function(k, P, $) {
          s(m, k, c(k), $);
        }), m;
      }
      function Xf(r, s) {
        return r && wr(s, an(s), r);
      }
      function By(r, s) {
        return r && wr(s, _n(s), r);
      }
      function Br(r, s, c) {
        s == "__proto__" && ra ? ra(r, s, {
          configurable: !0,
          enumerable: !0,
          value: c,
          writable: !0
        }) : r[s] = c;
      }
      function Zu(r, s) {
        for (var c = -1, m = s.length, k = Y(m), P = r == null; ++c < m; )
          k[c] = P ? n : Dc(r, s[c]);
        return k;
      }
      function vi(r, s, c) {
        return r === r && (c !== n && (r = r <= c ? r : c), s !== n && (r = r >= s ? r : s)), r;
      }
      function Kn(r, s, c, m, k, P) {
        var $, U = s & p, H = s & v, ne = s & _;
        if (c && ($ = k ? c(r, m, k, P) : c(r)), $ !== n)
          return $;
        if (!$t(r))
          return r;
        var re = Ue(r);
        if (re) {
          if ($ = vm(r), !U)
            return Sn(r, $);
        } else {
          var se = pn(r), me = se == _t || se == on;
          if (ii(r))
            return xh(r, U);
          if (se == wt || se == ie || me && !k) {
            if ($ = H || me ? {} : Mh(r), !U)
              return H ? cm(r, By($, r)) : um(r, Xf($, r));
          } else {
            if (!kt[se])
              return k ? r : {};
            $ = xm(r, se, U);
          }
        }
        P || (P = new or());
        var ke = P.get(r);
        if (ke)
          return ke;
        P.set(r, $), gd(r) ? r.forEach(function(Re) {
          $.add(Kn(Re, s, c, Re, r, P));
        }) : dd(r) && r.forEach(function(Re, tt) {
          $.set(tt, Kn(Re, s, c, tt, r, P));
        });
        var Pe = ne ? H ? bc : wc : H ? _n : an, Ge = re ? n : Pe(r);
        return Vn(Ge || r, function(Re, tt) {
          Ge && (tt = Re, Re = r[tt]), Ys($, tt, Kn(Re, s, c, tt, r, P));
        }), $;
      }
      function Dy(r) {
        var s = an(r);
        return function(c) {
          return Qf(c, r, s);
        };
      }
      function Qf(r, s, c) {
        var m = c.length;
        if (r == null)
          return !m;
        for (r = Ct(r); m--; ) {
          var k = c[m], P = s[k], $ = r[k];
          if ($ === n && !(k in r) || !P($))
            return !1;
        }
        return !0;
      }
      function Zf(r, s, c) {
        if (typeof r != "function")
          throw new qn(u);
        return ro(function() {
          r.apply(n, c);
        }, s);
      }
      function Xs(r, s, c, m) {
        var k = -1, P = Ho, $ = !0, U = r.length, H = [], ne = s.length;
        if (!U)
          return H;
        c && (s = Lt(s, Ln(c))), m ? (P = $u, $ = !1) : s.length >= o && (P = Ws, $ = !1, s = new bi(s));
        e:
          for (; ++k < U; ) {
            var re = r[k], se = c == null ? re : c(re);
            if (re = m || re !== 0 ? re : 0, $ && se === se) {
              for (var me = ne; me--; )
                if (s[me] === se)
                  continue e;
              H.push(re);
            } else P(s, se, m) || H.push(re);
          }
        return H;
      }
      var ei = _h(mr), eh = _h(tc, !0);
      function Ly(r, s) {
        var c = !0;
        return ei(r, function(m, k, P) {
          return c = !!s(m, k, P), c;
        }), c;
      }
      function la(r, s, c) {
        for (var m = -1, k = r.length; ++m < k; ) {
          var P = r[m], $ = s(P);
          if ($ != null && (U === n ? $ === $ && !Rn($) : c($, U)))
            var U = $, H = P;
        }
        return H;
      }
      function Py(r, s, c, m) {
        var k = r.length;
        for (c = He(c), c < 0 && (c = -c > k ? 0 : k + c), m = m === n || m > k ? k : He(m), m < 0 && (m += k), m = c > m ? 0 : md(m); c < m; )
          r[c++] = s;
        return r;
      }
      function th(r, s) {
        var c = [];
        return ei(r, function(m, k, P) {
          s(m, k, P) && c.push(m);
        }), c;
      }
      function cn(r, s, c, m, k) {
        var P = -1, $ = r.length;
        for (c || (c = Em), k || (k = []); ++P < $; ) {
          var U = r[P];
          s > 0 && c(U) ? s > 1 ? cn(U, s - 1, c, m, k) : Xr(k, U) : m || (k[k.length] = U);
        }
        return k;
      }
      var ec = kh(), nh = kh(!0);
      function mr(r, s) {
        return r && ec(r, s, an);
      }
      function tc(r, s) {
        return r && nh(r, s, an);
      }
      function fa(r, s) {
        return Yr(s, function(c) {
          return Rr(r[c]);
        });
      }
      function xi(r, s) {
        s = ni(s, r);
        for (var c = 0, m = s.length; r != null && c < m; )
          r = r[br(s[c++])];
        return c && c == m ? r : n;
      }
      function rh(r, s, c) {
        var m = s(r);
        return Ue(r) ? m : Xr(m, c(r));
      }
      function mn(r) {
        return r == null ? r === n ? xt : Nt : mi && mi in Ct(r) ? mm(r) : Im(r);
      }
      function nc(r, s) {
        return r > s;
      }
      function Ry(r, s) {
        return r != null && Et.call(r, s);
      }
      function jy(r, s) {
        return r != null && s in Ct(r);
      }
      function Ny(r, s, c) {
        return r >= dn(s, c) && r < nn(s, c);
      }
      function rc(r, s, c) {
        for (var m = c ? $u : Ho, k = r[0].length, P = r.length, $ = P, U = Y(P), H = 1 / 0, ne = []; $--; ) {
          var re = r[$];
          $ && s && (re = Lt(re, Ln(s))), H = dn(re.length, H), U[$] = !c && (s || k >= 120 && re.length >= 120) ? new bi($ && re) : n;
        }
        re = r[0];
        var se = -1, me = U[0];
        e:
          for (; ++se < k && ne.length < H; ) {
            var ke = re[se], Pe = s ? s(ke) : ke;
            if (ke = c || ke !== 0 ? ke : 0, !(me ? Ws(me, Pe) : m(ne, Pe, c))) {
              for ($ = P; --$; ) {
                var Ge = U[$];
                if (!(Ge ? Ws(Ge, Pe) : m(r[$], Pe, c)))
                  continue e;
              }
              me && me.push(Pe), ne.push(ke);
            }
          }
        return ne;
      }
      function $y(r, s, c, m) {
        return mr(r, function(k, P, $) {
          s(m, c(k), P, $);
        }), m;
      }
      function Qs(r, s, c) {
        s = ni(s, r), r = Wh(r, s);
        var m = r == null ? r : r[br(zn(s))];
        return m == null ? n : Dn(m, r, c);
      }
      function ih(r) {
        return Vt(r) && mn(r) == ie;
      }
      function My(r) {
        return Vt(r) && mn(r) == ge;
      }
      function Uy(r) {
        return Vt(r) && mn(r) == Ie;
      }
      function Zs(r, s, c, m, k) {
        return r === s ? !0 : r == null || s == null || !Vt(r) && !Vt(s) ? r !== r && s !== s : Vy(r, s, c, m, Zs, k);
      }
      function Vy(r, s, c, m, k, P) {
        var $ = Ue(r), U = Ue(s), H = $ ? Te : pn(r), ne = U ? Te : pn(s);
        H = H == ie ? wt : H, ne = ne == ie ? wt : ne;
        var re = H == wt, se = ne == wt, me = H == ne;
        if (me && ii(r)) {
          if (!ii(s))
            return !1;
          $ = !0, re = !1;
        }
        if (me && !re)
          return P || (P = new or()), $ || ss(r) ? jh(r, s, c, m, k, P) : gm(r, s, H, c, m, k, P);
        if (!(c & A)) {
          var ke = re && Et.call(r, "__wrapped__"), Pe = se && Et.call(s, "__wrapped__");
          if (ke || Pe) {
            var Ge = ke ? r.value() : r, Re = Pe ? s.value() : s;
            return P || (P = new or()), k(Ge, Re, c, m, P);
          }
        }
        return me ? (P || (P = new or()), ym(r, s, c, m, k, P)) : !1;
      }
      function qy(r) {
        return Vt(r) && pn(r) == Rt;
      }
      function ic(r, s, c, m) {
        var k = c.length, P = k, $ = !m;
        if (r == null)
          return !P;
        for (r = Ct(r); k--; ) {
          var U = c[k];
          if ($ && U[2] ? U[1] !== r[U[0]] : !(U[0] in r))
            return !1;
        }
        for (; ++k < P; ) {
          U = c[k];
          var H = U[0], ne = r[H], re = U[1];
          if ($ && U[2]) {
            if (ne === n && !(H in r))
              return !1;
          } else {
            var se = new or();
            if (m)
              var me = m(ne, re, H, r, s, se);
            if (!(me === n ? Zs(re, ne, A | E, m, se) : me))
              return !1;
          }
        }
        return !0;
      }
      function sh(r) {
        if (!$t(r) || Cm(r))
          return !1;
        var s = Rr(r) ? q1 : Zt;
        return s.test(Ei(r));
      }
      function Wy(r) {
        return Vt(r) && mn(r) == Se;
      }
      function Ky(r) {
        return Vt(r) && pn(r) == Fe;
      }
      function Hy(r) {
        return Vt(r) && Oa(r.length) && !!Ft[mn(r)];
      }
      function oh(r) {
        return typeof r == "function" ? r : r == null ? kn : typeof r == "object" ? Ue(r) ? ch(r[0], r[1]) : uh(r) : Od(r);
      }
      function sc(r) {
        if (!no(r))
          return J1(r);
        var s = [];
        for (var c in Ct(r))
          Et.call(r, c) && c != "constructor" && s.push(c);
        return s;
      }
      function zy(r) {
        if (!$t(r))
          return Tm(r);
        var s = no(r), c = [];
        for (var m in r)
          m == "constructor" && (s || !Et.call(r, m)) || c.push(m);
        return c;
      }
      function oc(r, s) {
        return r < s;
      }
      function ah(r, s) {
        var c = -1, m = Cn(r) ? Y(r.length) : [];
        return ei(r, function(k, P, $) {
          m[++c] = s(k, P, $);
        }), m;
      }
      function uh(r) {
        var s = xc(r);
        return s.length == 1 && s[0][2] ? Vh(s[0][0], s[0][1]) : function(c) {
          return c === r || ic(c, r, s);
        };
      }
      function ch(r, s) {
        return Ec(r) && Uh(s) ? Vh(br(r), s) : function(c) {
          var m = Dc(c, r);
          return m === n && m === s ? Lc(c, r) : Zs(s, m, A | E);
        };
      }
      function ha(r, s, c, m, k) {
        r !== s && ec(s, function(P, $) {
          if (k || (k = new or()), $t(P))
            Gy(r, s, $, c, ha, m, k);
          else {
            var U = m ? m(Cc(r, $), P, $ + "", r, s, k) : n;
            U === n && (U = P), Qu(r, $, U);
          }
        }, _n);
      }
      function Gy(r, s, c, m, k, P, $) {
        var U = Cc(r, c), H = Cc(s, c), ne = $.get(H);
        if (ne) {
          Qu(r, c, ne);
          return;
        }
        var re = P ? P(U, H, c + "", r, s, $) : n, se = re === n;
        if (se) {
          var me = Ue(H), ke = !me && ii(H), Pe = !me && !ke && ss(H);
          re = H, me || ke || Pe ? Ue(U) ? re = U : Kt(U) ? re = Sn(U) : ke ? (se = !1, re = xh(H, !0)) : Pe ? (se = !1, re = Ah(H, !0)) : re = [] : io(H) || Si(H) ? (re = U, Si(U) ? re = wd(U) : (!$t(U) || Rr(U)) && (re = Mh(H))) : se = !1;
        }
        se && ($.set(H, re), k(re, H, m, P, $), $.delete(H)), Qu(r, c, re);
      }
      function lh(r, s) {
        var c = r.length;
        if (c)
          return s += s < 0 ? c : 0, Pr(s, c) ? r[s] : n;
      }
      function fh(r, s, c) {
        s.length ? s = Lt(s, function(P) {
          return Ue(P) ? function($) {
            return xi($, P.length === 1 ? P[0] : P);
          } : P;
        }) : s = [kn];
        var m = -1;
        s = Lt(s, Ln(Le()));
        var k = ah(r, function(P, $, U) {
          var H = Lt(s, function(ne) {
            return ne(P);
          });
          return { criteria: H, index: ++m, value: P };
        });
        return x1(k, function(P, $) {
          return am(P, $, c);
        });
      }
      function Jy(r, s) {
        return hh(r, s, function(c, m) {
          return Lc(r, m);
        });
      }
      function hh(r, s, c) {
        for (var m = -1, k = s.length, P = {}; ++m < k; ) {
          var $ = s[m], U = xi(r, $);
          c(U, $) && eo(P, ni($, r), U);
        }
        return P;
      }
      function Yy(r) {
        return function(s) {
          return xi(s, r);
        };
      }
      function ac(r, s, c, m) {
        var k = m ? v1 : Gi, P = -1, $ = s.length, U = r;
        for (r === s && (s = Sn(s)), c && (U = Lt(r, Ln(c))); ++P < $; )
          for (var H = 0, ne = s[P], re = c ? c(ne) : ne; (H = k(U, re, H, m)) > -1; )
            U !== r && na.call(U, H, 1), na.call(r, H, 1);
        return r;
      }
      function dh(r, s) {
        for (var c = r ? s.length : 0, m = c - 1; c--; ) {
          var k = s[c];
          if (c == m || k !== P) {
            var P = k;
            Pr(k) ? na.call(r, k, 1) : fc(r, k);
          }
        }
        return r;
      }
      function uc(r, s) {
        return r + sa(zf() * (s - r + 1));
      }
      function Xy(r, s, c, m) {
        for (var k = -1, P = nn(ia((s - r) / (c || 1)), 0), $ = Y(P); P--; )
          $[m ? P : ++k] = r, r += c;
        return $;
      }
      function cc(r, s) {
        var c = "";
        if (!r || s < 1 || s > ve)
          return c;
        do
          s % 2 && (c += r), s = sa(s / 2), s && (r += r);
        while (s);
        return c;
      }
      function Ye(r, s) {
        return _c(qh(r, s, kn), r + "");
      }
      function Qy(r) {
        return Yf(os(r));
      }
      function Zy(r, s) {
        var c = os(r);
        return Aa(c, vi(s, 0, c.length));
      }
      function eo(r, s, c, m) {
        if (!$t(r))
          return r;
        s = ni(s, r);
        for (var k = -1, P = s.length, $ = P - 1, U = r; U != null && ++k < P; ) {
          var H = br(s[k]), ne = c;
          if (H === "__proto__" || H === "constructor" || H === "prototype")
            return r;
          if (k != $) {
            var re = U[H];
            ne = m ? m(re, H, U) : n, ne === n && (ne = $t(re) ? re : Pr(s[k + 1]) ? [] : {});
          }
          Ys(U, H, ne), U = U[H];
        }
        return r;
      }
      var ph = oa ? function(r, s) {
        return oa.set(r, s), r;
      } : kn, em = ra ? function(r, s) {
        return ra(r, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Rc(s),
          writable: !0
        });
      } : kn;
      function tm(r) {
        return Aa(os(r));
      }
      function Hn(r, s, c) {
        var m = -1, k = r.length;
        s < 0 && (s = -s > k ? 0 : k + s), c = c > k ? k : c, c < 0 && (c += k), k = s > c ? 0 : c - s >>> 0, s >>>= 0;
        for (var P = Y(k); ++m < k; )
          P[m] = r[m + s];
        return P;
      }
      function nm(r, s) {
        var c;
        return ei(r, function(m, k, P) {
          return c = s(m, k, P), !c;
        }), !!c;
      }
      function da(r, s, c) {
        var m = 0, k = r == null ? m : r.length;
        if (typeof s == "number" && s === s && k <= G) {
          for (; m < k; ) {
            var P = m + k >>> 1, $ = r[P];
            $ !== null && !Rn($) && (c ? $ <= s : $ < s) ? m = P + 1 : k = P;
          }
          return k;
        }
        return lc(r, s, kn, c);
      }
      function lc(r, s, c, m) {
        var k = 0, P = r == null ? 0 : r.length;
        if (P === 0)
          return 0;
        s = c(s);
        for (var $ = s !== s, U = s === null, H = Rn(s), ne = s === n; k < P; ) {
          var re = sa((k + P) / 2), se = c(r[re]), me = se !== n, ke = se === null, Pe = se === se, Ge = Rn(se);
          if ($)
            var Re = m || Pe;
          else ne ? Re = Pe && (m || me) : U ? Re = Pe && me && (m || !ke) : H ? Re = Pe && me && !ke && (m || !Ge) : ke || Ge ? Re = !1 : Re = m ? se <= s : se < s;
          Re ? k = re + 1 : P = re;
        }
        return dn(P, je);
      }
      function gh(r, s) {
        for (var c = -1, m = r.length, k = 0, P = []; ++c < m; ) {
          var $ = r[c], U = s ? s($) : $;
          if (!c || !ar(U, H)) {
            var H = U;
            P[k++] = $ === 0 ? 0 : $;
          }
        }
        return P;
      }
      function yh(r) {
        return typeof r == "number" ? r : Rn(r) ? we : +r;
      }
      function Pn(r) {
        if (typeof r == "string")
          return r;
        if (Ue(r))
          return Lt(r, Pn) + "";
        if (Rn(r))
          return Gf ? Gf.call(r) : "";
        var s = r + "";
        return s == "0" && 1 / r == -1 / 0 ? "-0" : s;
      }
      function ti(r, s, c) {
        var m = -1, k = Ho, P = r.length, $ = !0, U = [], H = U;
        if (c)
          $ = !1, k = $u;
        else if (P >= o) {
          var ne = s ? null : dm(r);
          if (ne)
            return Go(ne);
          $ = !1, k = Ws, H = new bi();
        } else
          H = s ? [] : U;
        e:
          for (; ++m < P; ) {
            var re = r[m], se = s ? s(re) : re;
            if (re = c || re !== 0 ? re : 0, $ && se === se) {
              for (var me = H.length; me--; )
                if (H[me] === se)
                  continue e;
              s && H.push(se), U.push(re);
            } else k(H, se, c) || (H !== U && H.push(se), U.push(re));
          }
        return U;
      }
      function fc(r, s) {
        return s = ni(s, r), r = Wh(r, s), r == null || delete r[br(zn(s))];
      }
      function mh(r, s, c, m) {
        return eo(r, s, c(xi(r, s)), m);
      }
      function pa(r, s, c, m) {
        for (var k = r.length, P = m ? k : -1; (m ? P-- : ++P < k) && s(r[P], P, r); )
          ;
        return c ? Hn(r, m ? 0 : P, m ? P + 1 : k) : Hn(r, m ? P + 1 : 0, m ? k : P);
      }
      function wh(r, s) {
        var c = r;
        return c instanceof it && (c = c.value()), Mu(s, function(m, k) {
          return k.func.apply(k.thisArg, Xr([m], k.args));
        }, c);
      }
      function hc(r, s, c) {
        var m = r.length;
        if (m < 2)
          return m ? ti(r[0]) : [];
        for (var k = -1, P = Y(m); ++k < m; )
          for (var $ = r[k], U = -1; ++U < m; )
            U != k && (P[k] = Xs(P[k] || $, r[U], s, c));
        return ti(cn(P, 1), s, c);
      }
      function bh(r, s, c) {
        for (var m = -1, k = r.length, P = s.length, $ = {}; ++m < k; ) {
          var U = m < P ? s[m] : n;
          c($, r[m], U);
        }
        return $;
      }
      function dc(r) {
        return Kt(r) ? r : [];
      }
      function pc(r) {
        return typeof r == "function" ? r : kn;
      }
      function ni(r, s) {
        return Ue(r) ? r : Ec(r, s) ? [r] : Gh(bt(r));
      }
      var rm = Ye;
      function ri(r, s, c) {
        var m = r.length;
        return c = c === n ? m : c, !s && c >= m ? r : Hn(r, s, c);
      }
      var vh = W1 || function(r) {
        return un.clearTimeout(r);
      };
      function xh(r, s) {
        if (s)
          return r.slice();
        var c = r.length, m = Vf ? Vf(c) : new r.constructor(c);
        return r.copy(m), m;
      }
      function gc(r) {
        var s = new r.constructor(r.byteLength);
        return new ea(s).set(new ea(r)), s;
      }
      function im(r, s) {
        var c = s ? gc(r.buffer) : r.buffer;
        return new r.constructor(c, r.byteOffset, r.byteLength);
      }
      function sm(r) {
        var s = new r.constructor(r.source, lt.exec(r));
        return s.lastIndex = r.lastIndex, s;
      }
      function om(r) {
        return Js ? Ct(Js.call(r)) : {};
      }
      function Ah(r, s) {
        var c = s ? gc(r.buffer) : r.buffer;
        return new r.constructor(c, r.byteOffset, r.length);
      }
      function Eh(r, s) {
        if (r !== s) {
          var c = r !== n, m = r === null, k = r === r, P = Rn(r), $ = s !== n, U = s === null, H = s === s, ne = Rn(s);
          if (!U && !ne && !P && r > s || P && $ && H && !U && !ne || m && $ && H || !c && H || !k)
            return 1;
          if (!m && !P && !ne && r < s || ne && c && k && !m && !P || U && c && k || !$ && k || !H)
            return -1;
        }
        return 0;
      }
      function am(r, s, c) {
        for (var m = -1, k = r.criteria, P = s.criteria, $ = k.length, U = c.length; ++m < $; ) {
          var H = Eh(k[m], P[m]);
          if (H) {
            if (m >= U)
              return H;
            var ne = c[m];
            return H * (ne == "desc" ? -1 : 1);
          }
        }
        return r.index - s.index;
      }
      function Sh(r, s, c, m) {
        for (var k = -1, P = r.length, $ = c.length, U = -1, H = s.length, ne = nn(P - $, 0), re = Y(H + ne), se = !m; ++U < H; )
          re[U] = s[U];
        for (; ++k < $; )
          (se || k < P) && (re[c[k]] = r[k]);
        for (; ne--; )
          re[U++] = r[k++];
        return re;
      }
      function Ch(r, s, c, m) {
        for (var k = -1, P = r.length, $ = -1, U = c.length, H = -1, ne = s.length, re = nn(P - U, 0), se = Y(re + ne), me = !m; ++k < re; )
          se[k] = r[k];
        for (var ke = k; ++H < ne; )
          se[ke + H] = s[H];
        for (; ++$ < U; )
          (me || k < P) && (se[ke + c[$]] = r[k++]);
        return se;
      }
      function Sn(r, s) {
        var c = -1, m = r.length;
        for (s || (s = Y(m)); ++c < m; )
          s[c] = r[c];
        return s;
      }
      function wr(r, s, c, m) {
        var k = !c;
        c || (c = {});
        for (var P = -1, $ = s.length; ++P < $; ) {
          var U = s[P], H = m ? m(c[U], r[U], U, c, r) : n;
          H === n && (H = r[U]), k ? Br(c, U, H) : Ys(c, U, H);
        }
        return c;
      }
      function um(r, s) {
        return wr(r, Ac(r), s);
      }
      function cm(r, s) {
        return wr(r, Nh(r), s);
      }
      function ga(r, s) {
        return function(c, m) {
          var k = Ue(c) ? p1 : Fy, P = s ? s() : {};
          return k(c, r, Le(m, 2), P);
        };
      }
      function ns(r) {
        return Ye(function(s, c) {
          var m = -1, k = c.length, P = k > 1 ? c[k - 1] : n, $ = k > 2 ? c[2] : n;
          for (P = r.length > 3 && typeof P == "function" ? (k--, P) : n, $ && wn(c[0], c[1], $) && (P = k < 3 ? n : P, k = 1), s = Ct(s); ++m < k; ) {
            var U = c[m];
            U && r(s, U, m, P);
          }
          return s;
        });
      }
      function _h(r, s) {
        return function(c, m) {
          if (c == null)
            return c;
          if (!Cn(c))
            return r(c, m);
          for (var k = c.length, P = s ? k : -1, $ = Ct(c); (s ? P-- : ++P < k) && m($[P], P, $) !== !1; )
            ;
          return c;
        };
      }
      function kh(r) {
        return function(s, c, m) {
          for (var k = -1, P = Ct(s), $ = m(s), U = $.length; U--; ) {
            var H = $[r ? U : ++k];
            if (c(P[H], H, P) === !1)
              break;
          }
          return s;
        };
      }
      function lm(r, s, c) {
        var m = s & b, k = to(r);
        function P() {
          var $ = this && this !== un && this instanceof P ? k : r;
          return $.apply(m ? c : this, arguments);
        }
        return P;
      }
      function Oh(r) {
        return function(s) {
          s = bt(s);
          var c = Ji(s) ? sr(s) : n, m = c ? c[0] : s.charAt(0), k = c ? ri(c, 1).join("") : s.slice(1);
          return m[r]() + k;
        };
      }
      function rs(r) {
        return function(s) {
          return Mu(_d(Cd(s).replace(e1, "")), r, "");
        };
      }
      function to(r) {
        return function() {
          var s = arguments;
          switch (s.length) {
            case 0:
              return new r();
            case 1:
              return new r(s[0]);
            case 2:
              return new r(s[0], s[1]);
            case 3:
              return new r(s[0], s[1], s[2]);
            case 4:
              return new r(s[0], s[1], s[2], s[3]);
            case 5:
              return new r(s[0], s[1], s[2], s[3], s[4]);
            case 6:
              return new r(s[0], s[1], s[2], s[3], s[4], s[5]);
            case 7:
              return new r(s[0], s[1], s[2], s[3], s[4], s[5], s[6]);
          }
          var c = ts(r.prototype), m = r.apply(c, s);
          return $t(m) ? m : c;
        };
      }
      function fm(r, s, c) {
        var m = to(r);
        function k() {
          for (var P = arguments.length, $ = Y(P), U = P, H = is(k); U--; )
            $[U] = arguments[U];
          var ne = P < 3 && $[0] !== H && $[P - 1] !== H ? [] : Qr($, H);
          if (P -= ne.length, P < c)
            return Dh(
              r,
              s,
              ya,
              k.placeholder,
              n,
              $,
              ne,
              n,
              n,
              c - P
            );
          var re = this && this !== un && this instanceof k ? m : r;
          return Dn(re, this, $);
        }
        return k;
      }
      function Th(r) {
        return function(s, c, m) {
          var k = Ct(s);
          if (!Cn(s)) {
            var P = Le(c, 3);
            s = an(s), c = function(U) {
              return P(k[U], U, k);
            };
          }
          var $ = r(s, c, m);
          return $ > -1 ? k[P ? s[$] : $] : n;
        };
      }
      function Ih(r) {
        return Lr(function(s) {
          var c = s.length, m = c, k = Wn.prototype.thru;
          for (r && s.reverse(); m--; ) {
            var P = s[m];
            if (typeof P != "function")
              throw new qn(u);
            if (k && !$ && va(P) == "wrapper")
              var $ = new Wn([], !0);
          }
          for (m = $ ? m : c; ++m < c; ) {
            P = s[m];
            var U = va(P), H = U == "wrapper" ? vc(P) : n;
            H && Sc(H[0]) && H[1] == (T | C | F | q) && !H[4].length && H[9] == 1 ? $ = $[va(H[0])].apply($, H[3]) : $ = P.length == 1 && Sc(P) ? $[U]() : $.thru(P);
          }
          return function() {
            var ne = arguments, re = ne[0];
            if ($ && ne.length == 1 && Ue(re))
              return $.plant(re).value();
            for (var se = 0, me = c ? s[se].apply(this, ne) : re; ++se < c; )
              me = s[se].call(this, me);
            return me;
          };
        });
      }
      function ya(r, s, c, m, k, P, $, U, H, ne) {
        var re = s & T, se = s & b, me = s & D, ke = s & (C | O), Pe = s & J, Ge = me ? n : to(r);
        function Re() {
          for (var tt = arguments.length, ot = Y(tt), jn = tt; jn--; )
            ot[jn] = arguments[jn];
          if (ke)
            var bn = is(Re), Nn = E1(ot, bn);
          if (m && (ot = Sh(ot, m, k, ke)), P && (ot = Ch(ot, P, $, ke)), tt -= Nn, ke && tt < ne) {
            var Ht = Qr(ot, bn);
            return Dh(
              r,
              s,
              ya,
              Re.placeholder,
              c,
              ot,
              Ht,
              U,
              H,
              ne - tt
            );
          }
          var ur = se ? c : this, Nr = me ? ur[r] : r;
          return tt = ot.length, U ? ot = Fm(ot, U) : Pe && tt > 1 && ot.reverse(), re && H < tt && (ot.length = H), this && this !== un && this instanceof Re && (Nr = Ge || to(Nr)), Nr.apply(ur, ot);
        }
        return Re;
      }
      function Fh(r, s) {
        return function(c, m) {
          return $y(c, r, s(m), {});
        };
      }
      function ma(r, s) {
        return function(c, m) {
          var k;
          if (c === n && m === n)
            return s;
          if (c !== n && (k = c), m !== n) {
            if (k === n)
              return m;
            typeof c == "string" || typeof m == "string" ? (c = Pn(c), m = Pn(m)) : (c = yh(c), m = yh(m)), k = r(c, m);
          }
          return k;
        };
      }
      function yc(r) {
        return Lr(function(s) {
          return s = Lt(s, Ln(Le())), Ye(function(c) {
            var m = this;
            return r(s, function(k) {
              return Dn(k, m, c);
            });
          });
        });
      }
      function wa(r, s) {
        s = s === n ? " " : Pn(s);
        var c = s.length;
        if (c < 2)
          return c ? cc(s, r) : s;
        var m = cc(s, ia(r / Yi(s)));
        return Ji(s) ? ri(sr(m), 0, r).join("") : m.slice(0, r);
      }
      function hm(r, s, c, m) {
        var k = s & b, P = to(r);
        function $() {
          for (var U = -1, H = arguments.length, ne = -1, re = m.length, se = Y(re + H), me = this && this !== un && this instanceof $ ? P : r; ++ne < re; )
            se[ne] = m[ne];
          for (; H--; )
            se[ne++] = arguments[++U];
          return Dn(me, k ? c : this, se);
        }
        return $;
      }
      function Bh(r) {
        return function(s, c, m) {
          return m && typeof m != "number" && wn(s, c, m) && (c = m = n), s = jr(s), c === n ? (c = s, s = 0) : c = jr(c), m = m === n ? s < c ? 1 : -1 : jr(m), Xy(s, c, m, r);
        };
      }
      function ba(r) {
        return function(s, c) {
          return typeof s == "string" && typeof c == "string" || (s = Gn(s), c = Gn(c)), r(s, c);
        };
      }
      function Dh(r, s, c, m, k, P, $, U, H, ne) {
        var re = s & C, se = re ? $ : n, me = re ? n : $, ke = re ? P : n, Pe = re ? n : P;
        s |= re ? F : L, s &= ~(re ? L : F), s & j || (s &= -4);
        var Ge = [
          r,
          s,
          k,
          ke,
          se,
          Pe,
          me,
          U,
          H,
          ne
        ], Re = c.apply(n, Ge);
        return Sc(r) && Kh(Re, Ge), Re.placeholder = m, Hh(Re, r, s);
      }
      function mc(r) {
        var s = tn[r];
        return function(c, m) {
          if (c = Gn(c), m = m == null ? 0 : dn(He(m), 292), m && Hf(c)) {
            var k = (bt(c) + "e").split("e"), P = s(k[0] + "e" + (+k[1] + m));
            return k = (bt(P) + "e").split("e"), +(k[0] + "e" + (+k[1] - m));
          }
          return s(c);
        };
      }
      var dm = Zi && 1 / Go(new Zi([, -0]))[1] == be ? function(r) {
        return new Zi(r);
      } : $c;
      function Lh(r) {
        return function(s) {
          var c = pn(s);
          return c == Rt ? zu(s) : c == Fe ? I1(s) : A1(s, r(s));
        };
      }
      function Dr(r, s, c, m, k, P, $, U) {
        var H = s & D;
        if (!H && typeof r != "function")
          throw new qn(u);
        var ne = m ? m.length : 0;
        if (ne || (s &= -97, m = k = n), $ = $ === n ? $ : nn(He($), 0), U = U === n ? U : He(U), ne -= k ? k.length : 0, s & L) {
          var re = m, se = k;
          m = k = n;
        }
        var me = H ? n : vc(r), ke = [
          r,
          s,
          c,
          m,
          k,
          re,
          se,
          P,
          $,
          U
        ];
        if (me && Om(ke, me), r = ke[0], s = ke[1], c = ke[2], m = ke[3], k = ke[4], U = ke[9] = ke[9] === n ? H ? 0 : r.length : nn(ke[9] - ne, 0), !U && s & (C | O) && (s &= -25), !s || s == b)
          var Pe = lm(r, s, c);
        else s == C || s == O ? Pe = fm(r, s, U) : (s == F || s == (b | F)) && !k.length ? Pe = hm(r, s, c, m) : Pe = ya.apply(n, ke);
        var Ge = me ? ph : Kh;
        return Hh(Ge(Pe, ke), r, s);
      }
      function Ph(r, s, c, m) {
        return r === n || ar(r, Qi[c]) && !Et.call(m, c) ? s : r;
      }
      function Rh(r, s, c, m, k, P) {
        return $t(r) && $t(s) && (P.set(s, r), ha(r, s, n, Rh, P), P.delete(s)), r;
      }
      function pm(r) {
        return io(r) ? n : r;
      }
      function jh(r, s, c, m, k, P) {
        var $ = c & A, U = r.length, H = s.length;
        if (U != H && !($ && H > U))
          return !1;
        var ne = P.get(r), re = P.get(s);
        if (ne && re)
          return ne == s && re == r;
        var se = -1, me = !0, ke = c & E ? new bi() : n;
        for (P.set(r, s), P.set(s, r); ++se < U; ) {
          var Pe = r[se], Ge = s[se];
          if (m)
            var Re = $ ? m(Ge, Pe, se, s, r, P) : m(Pe, Ge, se, r, s, P);
          if (Re !== n) {
            if (Re)
              continue;
            me = !1;
            break;
          }
          if (ke) {
            if (!Uu(s, function(tt, ot) {
              if (!Ws(ke, ot) && (Pe === tt || k(Pe, tt, c, m, P)))
                return ke.push(ot);
            })) {
              me = !1;
              break;
            }
          } else if (!(Pe === Ge || k(Pe, Ge, c, m, P))) {
            me = !1;
            break;
          }
        }
        return P.delete(r), P.delete(s), me;
      }
      function gm(r, s, c, m, k, P, $) {
        switch (c) {
          case Ce:
            if (r.byteLength != s.byteLength || r.byteOffset != s.byteOffset)
              return !1;
            r = r.buffer, s = s.buffer;
          case ge:
            return !(r.byteLength != s.byteLength || !P(new ea(r), new ea(s)));
          case Ee:
          case Ie:
          case jt:
            return ar(+r, +s);
          case De:
            return r.name == s.name && r.message == s.message;
          case Se:
          case ce:
            return r == s + "";
          case Rt:
            var U = zu;
          case Fe:
            var H = m & A;
            if (U || (U = Go), r.size != s.size && !H)
              return !1;
            var ne = $.get(r);
            if (ne)
              return ne == s;
            m |= E, $.set(r, s);
            var re = jh(U(r), U(s), m, k, P, $);
            return $.delete(r), re;
          case vt:
            if (Js)
              return Js.call(r) == Js.call(s);
        }
        return !1;
      }
      function ym(r, s, c, m, k, P) {
        var $ = c & A, U = wc(r), H = U.length, ne = wc(s), re = ne.length;
        if (H != re && !$)
          return !1;
        for (var se = H; se--; ) {
          var me = U[se];
          if (!($ ? me in s : Et.call(s, me)))
            return !1;
        }
        var ke = P.get(r), Pe = P.get(s);
        if (ke && Pe)
          return ke == s && Pe == r;
        var Ge = !0;
        P.set(r, s), P.set(s, r);
        for (var Re = $; ++se < H; ) {
          me = U[se];
          var tt = r[me], ot = s[me];
          if (m)
            var jn = $ ? m(ot, tt, me, s, r, P) : m(tt, ot, me, r, s, P);
          if (!(jn === n ? tt === ot || k(tt, ot, c, m, P) : jn)) {
            Ge = !1;
            break;
          }
          Re || (Re = me == "constructor");
        }
        if (Ge && !Re) {
          var bn = r.constructor, Nn = s.constructor;
          bn != Nn && "constructor" in r && "constructor" in s && !(typeof bn == "function" && bn instanceof bn && typeof Nn == "function" && Nn instanceof Nn) && (Ge = !1);
        }
        return P.delete(r), P.delete(s), Ge;
      }
      function Lr(r) {
        return _c(qh(r, n, Qh), r + "");
      }
      function wc(r) {
        return rh(r, an, Ac);
      }
      function bc(r) {
        return rh(r, _n, Nh);
      }
      var vc = oa ? function(r) {
        return oa.get(r);
      } : $c;
      function va(r) {
        for (var s = r.name + "", c = es[s], m = Et.call(es, s) ? c.length : 0; m--; ) {
          var k = c[m], P = k.func;
          if (P == null || P == r)
            return k.name;
        }
        return s;
      }
      function is(r) {
        var s = Et.call(B, "placeholder") ? B : r;
        return s.placeholder;
      }
      function Le() {
        var r = B.iteratee || jc;
        return r = r === jc ? oh : r, arguments.length ? r(arguments[0], arguments[1]) : r;
      }
      function xa(r, s) {
        var c = r.__data__;
        return Sm(s) ? c[typeof s == "string" ? "string" : "hash"] : c.map;
      }
      function xc(r) {
        for (var s = an(r), c = s.length; c--; ) {
          var m = s[c], k = r[m];
          s[c] = [m, k, Uh(k)];
        }
        return s;
      }
      function Ai(r, s) {
        var c = k1(r, s);
        return sh(c) ? c : n;
      }
      function mm(r) {
        var s = Et.call(r, mi), c = r[mi];
        try {
          r[mi] = n;
          var m = !0;
        } catch {
        }
        var k = Qo.call(r);
        return m && (s ? r[mi] = c : delete r[mi]), k;
      }
      var Ac = Ju ? function(r) {
        return r == null ? [] : (r = Ct(r), Yr(Ju(r), function(s) {
          return Wf.call(r, s);
        }));
      } : Mc, Nh = Ju ? function(r) {
        for (var s = []; r; )
          Xr(s, Ac(r)), r = ta(r);
        return s;
      } : Mc, pn = mn;
      (Yu && pn(new Yu(new ArrayBuffer(1))) != Ce || Hs && pn(new Hs()) != Rt || Xu && pn(Xu.resolve()) != In || Zi && pn(new Zi()) != Fe || zs && pn(new zs()) != At) && (pn = function(r) {
        var s = mn(r), c = s == wt ? r.constructor : n, m = c ? Ei(c) : "";
        if (m)
          switch (m) {
            case Z1:
              return Ce;
            case ey:
              return Rt;
            case ty:
              return In;
            case ny:
              return Fe;
            case ry:
              return At;
          }
        return s;
      });
      function wm(r, s, c) {
        for (var m = -1, k = c.length; ++m < k; ) {
          var P = c[m], $ = P.size;
          switch (P.type) {
            case "drop":
              r += $;
              break;
            case "dropRight":
              s -= $;
              break;
            case "take":
              s = dn(s, r + $);
              break;
            case "takeRight":
              r = nn(r, s - $);
              break;
          }
        }
        return { start: r, end: s };
      }
      function bm(r) {
        var s = r.match(yn);
        return s ? s[1].split(M) : [];
      }
      function $h(r, s, c) {
        s = ni(s, r);
        for (var m = -1, k = s.length, P = !1; ++m < k; ) {
          var $ = br(s[m]);
          if (!(P = r != null && c(r, $)))
            break;
          r = r[$];
        }
        return P || ++m != k ? P : (k = r == null ? 0 : r.length, !!k && Oa(k) && Pr($, k) && (Ue(r) || Si(r)));
      }
      function vm(r) {
        var s = r.length, c = new r.constructor(s);
        return s && typeof r[0] == "string" && Et.call(r, "index") && (c.index = r.index, c.input = r.input), c;
      }
      function Mh(r) {
        return typeof r.constructor == "function" && !no(r) ? ts(ta(r)) : {};
      }
      function xm(r, s, c) {
        var m = r.constructor;
        switch (s) {
          case ge:
            return gc(r);
          case Ee:
          case Ie:
            return new m(+r);
          case Ce:
            return im(r, c);
          case at:
          case I:
          case y:
          case w:
          case R:
          case V:
          case z:
          case Q:
          case Ne:
            return Ah(r, c);
          case Rt:
            return new m();
          case jt:
          case ce:
            return new m(r);
          case Se:
            return sm(r);
          case Fe:
            return new m();
          case vt:
            return om(r);
        }
      }
      function Am(r, s) {
        var c = s.length;
        if (!c)
          return r;
        var m = c - 1;
        return s[m] = (c > 1 ? "& " : "") + s[m], s = s.join(c > 2 ? ", " : " "), r.replace(Ms, `{
/* [wrapped with ` + s + `] */
`);
      }
      function Em(r) {
        return Ue(r) || Si(r) || !!(Kf && r && r[Kf]);
      }
      function Pr(r, s) {
        var c = typeof r;
        return s = s ?? ve, !!s && (c == "number" || c != "symbol" && Dt.test(r)) && r > -1 && r % 1 == 0 && r < s;
      }
      function wn(r, s, c) {
        if (!$t(c))
          return !1;
        var m = typeof s;
        return (m == "number" ? Cn(c) && Pr(s, c.length) : m == "string" && s in c) ? ar(c[s], r) : !1;
      }
      function Ec(r, s) {
        if (Ue(r))
          return !1;
        var c = typeof r;
        return c == "number" || c == "symbol" || c == "boolean" || r == null || Rn(r) ? !0 : js.test(r) || !pi.test(r) || s != null && r in Ct(s);
      }
      function Sm(r) {
        var s = typeof r;
        return s == "string" || s == "number" || s == "symbol" || s == "boolean" ? r !== "__proto__" : r === null;
      }
      function Sc(r) {
        var s = va(r), c = B[s];
        if (typeof c != "function" || !(s in it.prototype))
          return !1;
        if (r === c)
          return !0;
        var m = vc(c);
        return !!m && r === m[0];
      }
      function Cm(r) {
        return !!Uf && Uf in r;
      }
      var _m = Yo ? Rr : Uc;
      function no(r) {
        var s = r && r.constructor, c = typeof s == "function" && s.prototype || Qi;
        return r === c;
      }
      function Uh(r) {
        return r === r && !$t(r);
      }
      function Vh(r, s) {
        return function(c) {
          return c == null ? !1 : c[r] === s && (s !== n || r in Ct(c));
        };
      }
      function km(r) {
        var s = _a(r, function(m) {
          return c.size === d && c.clear(), m;
        }), c = s.cache;
        return s;
      }
      function Om(r, s) {
        var c = r[1], m = s[1], k = c | m, P = k < (b | D | T), $ = m == T && c == C || m == T && c == q && r[7].length <= s[8] || m == (T | q) && s[7].length <= s[8] && c == C;
        if (!(P || $))
          return r;
        m & b && (r[2] = s[2], k |= c & b ? 0 : j);
        var U = s[3];
        if (U) {
          var H = r[3];
          r[3] = H ? Sh(H, U, s[4]) : U, r[4] = H ? Qr(r[3], g) : s[4];
        }
        return U = s[5], U && (H = r[5], r[5] = H ? Ch(H, U, s[6]) : U, r[6] = H ? Qr(r[5], g) : s[6]), U = s[7], U && (r[7] = U), m & T && (r[8] = r[8] == null ? s[8] : dn(r[8], s[8])), r[9] == null && (r[9] = s[9]), r[0] = s[0], r[1] = k, r;
      }
      function Tm(r) {
        var s = [];
        if (r != null)
          for (var c in Ct(r))
            s.push(c);
        return s;
      }
      function Im(r) {
        return Qo.call(r);
      }
      function qh(r, s, c) {
        return s = nn(s === n ? r.length - 1 : s, 0), function() {
          for (var m = arguments, k = -1, P = nn(m.length - s, 0), $ = Y(P); ++k < P; )
            $[k] = m[s + k];
          k = -1;
          for (var U = Y(s + 1); ++k < s; )
            U[k] = m[k];
          return U[s] = c($), Dn(r, this, U);
        };
      }
      function Wh(r, s) {
        return s.length < 2 ? r : xi(r, Hn(s, 0, -1));
      }
      function Fm(r, s) {
        for (var c = r.length, m = dn(s.length, c), k = Sn(r); m--; ) {
          var P = s[m];
          r[m] = Pr(P, c) ? k[P] : n;
        }
        return r;
      }
      function Cc(r, s) {
        if (!(s === "constructor" && typeof r[s] == "function") && s != "__proto__")
          return r[s];
      }
      var Kh = zh(ph), ro = H1 || function(r, s) {
        return un.setTimeout(r, s);
      }, _c = zh(em);
      function Hh(r, s, c) {
        var m = s + "";
        return _c(r, Am(m, Bm(bm(m), c)));
      }
      function zh(r) {
        var s = 0, c = 0;
        return function() {
          var m = Y1(), k = de - (m - c);
          if (c = m, k > 0) {
            if (++s >= he)
              return arguments[0];
          } else
            s = 0;
          return r.apply(n, arguments);
        };
      }
      function Aa(r, s) {
        var c = -1, m = r.length, k = m - 1;
        for (s = s === n ? m : s; ++c < s; ) {
          var P = uc(c, k), $ = r[P];
          r[P] = r[c], r[c] = $;
        }
        return r.length = s, r;
      }
      var Gh = km(function(r) {
        var s = [];
        return r.charCodeAt(0) === 46 && s.push(""), r.replace(Ns, function(c, m, k, P) {
          s.push(k ? P.replace(Oe, "$1") : m || c);
        }), s;
      });
      function br(r) {
        if (typeof r == "string" || Rn(r))
          return r;
        var s = r + "";
        return s == "0" && 1 / r == -1 / 0 ? "-0" : s;
      }
      function Ei(r) {
        if (r != null) {
          try {
            return Xo.call(r);
          } catch {
          }
          try {
            return r + "";
          } catch {
          }
        }
        return "";
      }
      function Bm(r, s) {
        return Vn(X, function(c) {
          var m = "_." + c[0];
          s & c[1] && !Ho(r, m) && r.push(m);
        }), r.sort();
      }
      function Jh(r) {
        if (r instanceof it)
          return r.clone();
        var s = new Wn(r.__wrapped__, r.__chain__);
        return s.__actions__ = Sn(r.__actions__), s.__index__ = r.__index__, s.__values__ = r.__values__, s;
      }
      function Dm(r, s, c) {
        (c ? wn(r, s, c) : s === n) ? s = 1 : s = nn(He(s), 0);
        var m = r == null ? 0 : r.length;
        if (!m || s < 1)
          return [];
        for (var k = 0, P = 0, $ = Y(ia(m / s)); k < m; )
          $[P++] = Hn(r, k, k += s);
        return $;
      }
      function Lm(r) {
        for (var s = -1, c = r == null ? 0 : r.length, m = 0, k = []; ++s < c; ) {
          var P = r[s];
          P && (k[m++] = P);
        }
        return k;
      }
      function Pm() {
        var r = arguments.length;
        if (!r)
          return [];
        for (var s = Y(r - 1), c = arguments[0], m = r; m--; )
          s[m - 1] = arguments[m];
        return Xr(Ue(c) ? Sn(c) : [c], cn(s, 1));
      }
      var Rm = Ye(function(r, s) {
        return Kt(r) ? Xs(r, cn(s, 1, Kt, !0)) : [];
      }), jm = Ye(function(r, s) {
        var c = zn(s);
        return Kt(c) && (c = n), Kt(r) ? Xs(r, cn(s, 1, Kt, !0), Le(c, 2)) : [];
      }), Nm = Ye(function(r, s) {
        var c = zn(s);
        return Kt(c) && (c = n), Kt(r) ? Xs(r, cn(s, 1, Kt, !0), n, c) : [];
      });
      function $m(r, s, c) {
        var m = r == null ? 0 : r.length;
        return m ? (s = c || s === n ? 1 : He(s), Hn(r, s < 0 ? 0 : s, m)) : [];
      }
      function Mm(r, s, c) {
        var m = r == null ? 0 : r.length;
        return m ? (s = c || s === n ? 1 : He(s), s = m - s, Hn(r, 0, s < 0 ? 0 : s)) : [];
      }
      function Um(r, s) {
        return r && r.length ? pa(r, Le(s, 3), !0, !0) : [];
      }
      function Vm(r, s) {
        return r && r.length ? pa(r, Le(s, 3), !0) : [];
      }
      function qm(r, s, c, m) {
        var k = r == null ? 0 : r.length;
        return k ? (c && typeof c != "number" && wn(r, s, c) && (c = 0, m = k), Py(r, s, c, m)) : [];
      }
      function Yh(r, s, c) {
        var m = r == null ? 0 : r.length;
        if (!m)
          return -1;
        var k = c == null ? 0 : He(c);
        return k < 0 && (k = nn(m + k, 0)), zo(r, Le(s, 3), k);
      }
      function Xh(r, s, c) {
        var m = r == null ? 0 : r.length;
        if (!m)
          return -1;
        var k = m - 1;
        return c !== n && (k = He(c), k = c < 0 ? nn(m + k, 0) : dn(k, m - 1)), zo(r, Le(s, 3), k, !0);
      }
      function Qh(r) {
        var s = r == null ? 0 : r.length;
        return s ? cn(r, 1) : [];
      }
      function Wm(r) {
        var s = r == null ? 0 : r.length;
        return s ? cn(r, be) : [];
      }
      function Km(r, s) {
        var c = r == null ? 0 : r.length;
        return c ? (s = s === n ? 1 : He(s), cn(r, s)) : [];
      }
      function Hm(r) {
        for (var s = -1, c = r == null ? 0 : r.length, m = {}; ++s < c; ) {
          var k = r[s];
          m[k[0]] = k[1];
        }
        return m;
      }
      function Zh(r) {
        return r && r.length ? r[0] : n;
      }
      function zm(r, s, c) {
        var m = r == null ? 0 : r.length;
        if (!m)
          return -1;
        var k = c == null ? 0 : He(c);
        return k < 0 && (k = nn(m + k, 0)), Gi(r, s, k);
      }
      function Gm(r) {
        var s = r == null ? 0 : r.length;
        return s ? Hn(r, 0, -1) : [];
      }
      var Jm = Ye(function(r) {
        var s = Lt(r, dc);
        return s.length && s[0] === r[0] ? rc(s) : [];
      }), Ym = Ye(function(r) {
        var s = zn(r), c = Lt(r, dc);
        return s === zn(c) ? s = n : c.pop(), c.length && c[0] === r[0] ? rc(c, Le(s, 2)) : [];
      }), Xm = Ye(function(r) {
        var s = zn(r), c = Lt(r, dc);
        return s = typeof s == "function" ? s : n, s && c.pop(), c.length && c[0] === r[0] ? rc(c, n, s) : [];
      });
      function Qm(r, s) {
        return r == null ? "" : G1.call(r, s);
      }
      function zn(r) {
        var s = r == null ? 0 : r.length;
        return s ? r[s - 1] : n;
      }
      function Zm(r, s, c) {
        var m = r == null ? 0 : r.length;
        if (!m)
          return -1;
        var k = m;
        return c !== n && (k = He(c), k = k < 0 ? nn(m + k, 0) : dn(k, m - 1)), s === s ? B1(r, s, k) : zo(r, Df, k, !0);
      }
      function e2(r, s) {
        return r && r.length ? lh(r, He(s)) : n;
      }
      var t2 = Ye(ed);
      function ed(r, s) {
        return r && r.length && s && s.length ? ac(r, s) : r;
      }
      function n2(r, s, c) {
        return r && r.length && s && s.length ? ac(r, s, Le(c, 2)) : r;
      }
      function r2(r, s, c) {
        return r && r.length && s && s.length ? ac(r, s, n, c) : r;
      }
      var i2 = Lr(function(r, s) {
        var c = r == null ? 0 : r.length, m = Zu(r, s);
        return dh(r, Lt(s, function(k) {
          return Pr(k, c) ? +k : k;
        }).sort(Eh)), m;
      });
      function s2(r, s) {
        var c = [];
        if (!(r && r.length))
          return c;
        var m = -1, k = [], P = r.length;
        for (s = Le(s, 3); ++m < P; ) {
          var $ = r[m];
          s($, m, r) && (c.push($), k.push(m));
        }
        return dh(r, k), c;
      }
      function kc(r) {
        return r == null ? r : Q1.call(r);
      }
      function o2(r, s, c) {
        var m = r == null ? 0 : r.length;
        return m ? (c && typeof c != "number" && wn(r, s, c) ? (s = 0, c = m) : (s = s == null ? 0 : He(s), c = c === n ? m : He(c)), Hn(r, s, c)) : [];
      }
      function a2(r, s) {
        return da(r, s);
      }
      function u2(r, s, c) {
        return lc(r, s, Le(c, 2));
      }
      function c2(r, s) {
        var c = r == null ? 0 : r.length;
        if (c) {
          var m = da(r, s);
          if (m < c && ar(r[m], s))
            return m;
        }
        return -1;
      }
      function l2(r, s) {
        return da(r, s, !0);
      }
      function f2(r, s, c) {
        return lc(r, s, Le(c, 2), !0);
      }
      function h2(r, s) {
        var c = r == null ? 0 : r.length;
        if (c) {
          var m = da(r, s, !0) - 1;
          if (ar(r[m], s))
            return m;
        }
        return -1;
      }
      function d2(r) {
        return r && r.length ? gh(r) : [];
      }
      function p2(r, s) {
        return r && r.length ? gh(r, Le(s, 2)) : [];
      }
      function g2(r) {
        var s = r == null ? 0 : r.length;
        return s ? Hn(r, 1, s) : [];
      }
      function y2(r, s, c) {
        return r && r.length ? (s = c || s === n ? 1 : He(s), Hn(r, 0, s < 0 ? 0 : s)) : [];
      }
      function m2(r, s, c) {
        var m = r == null ? 0 : r.length;
        return m ? (s = c || s === n ? 1 : He(s), s = m - s, Hn(r, s < 0 ? 0 : s, m)) : [];
      }
      function w2(r, s) {
        return r && r.length ? pa(r, Le(s, 3), !1, !0) : [];
      }
      function b2(r, s) {
        return r && r.length ? pa(r, Le(s, 3)) : [];
      }
      var v2 = Ye(function(r) {
        return ti(cn(r, 1, Kt, !0));
      }), x2 = Ye(function(r) {
        var s = zn(r);
        return Kt(s) && (s = n), ti(cn(r, 1, Kt, !0), Le(s, 2));
      }), A2 = Ye(function(r) {
        var s = zn(r);
        return s = typeof s == "function" ? s : n, ti(cn(r, 1, Kt, !0), n, s);
      });
      function E2(r) {
        return r && r.length ? ti(r) : [];
      }
      function S2(r, s) {
        return r && r.length ? ti(r, Le(s, 2)) : [];
      }
      function C2(r, s) {
        return s = typeof s == "function" ? s : n, r && r.length ? ti(r, n, s) : [];
      }
      function Oc(r) {
        if (!(r && r.length))
          return [];
        var s = 0;
        return r = Yr(r, function(c) {
          if (Kt(c))
            return s = nn(c.length, s), !0;
        }), Ku(s, function(c) {
          return Lt(r, Vu(c));
        });
      }
      function td(r, s) {
        if (!(r && r.length))
          return [];
        var c = Oc(r);
        return s == null ? c : Lt(c, function(m) {
          return Dn(s, n, m);
        });
      }
      var _2 = Ye(function(r, s) {
        return Kt(r) ? Xs(r, s) : [];
      }), k2 = Ye(function(r) {
        return hc(Yr(r, Kt));
      }), O2 = Ye(function(r) {
        var s = zn(r);
        return Kt(s) && (s = n), hc(Yr(r, Kt), Le(s, 2));
      }), T2 = Ye(function(r) {
        var s = zn(r);
        return s = typeof s == "function" ? s : n, hc(Yr(r, Kt), n, s);
      }), I2 = Ye(Oc);
      function F2(r, s) {
        return bh(r || [], s || [], Ys);
      }
      function B2(r, s) {
        return bh(r || [], s || [], eo);
      }
      var D2 = Ye(function(r) {
        var s = r.length, c = s > 1 ? r[s - 1] : n;
        return c = typeof c == "function" ? (r.pop(), c) : n, td(r, c);
      });
      function nd(r) {
        var s = B(r);
        return s.__chain__ = !0, s;
      }
      function L2(r, s) {
        return s(r), r;
      }
      function Ea(r, s) {
        return s(r);
      }
      var P2 = Lr(function(r) {
        var s = r.length, c = s ? r[0] : 0, m = this.__wrapped__, k = function(P) {
          return Zu(P, r);
        };
        return s > 1 || this.__actions__.length || !(m instanceof it) || !Pr(c) ? this.thru(k) : (m = m.slice(c, +c + (s ? 1 : 0)), m.__actions__.push({
          func: Ea,
          args: [k],
          thisArg: n
        }), new Wn(m, this.__chain__).thru(function(P) {
          return s && !P.length && P.push(n), P;
        }));
      });
      function R2() {
        return nd(this);
      }
      function j2() {
        return new Wn(this.value(), this.__chain__);
      }
      function N2() {
        this.__values__ === n && (this.__values__ = yd(this.value()));
        var r = this.__index__ >= this.__values__.length, s = r ? n : this.__values__[this.__index__++];
        return { done: r, value: s };
      }
      function $2() {
        return this;
      }
      function M2(r) {
        for (var s, c = this; c instanceof ua; ) {
          var m = Jh(c);
          m.__index__ = 0, m.__values__ = n, s ? k.__wrapped__ = m : s = m;
          var k = m;
          c = c.__wrapped__;
        }
        return k.__wrapped__ = r, s;
      }
      function U2() {
        var r = this.__wrapped__;
        if (r instanceof it) {
          var s = r;
          return this.__actions__.length && (s = new it(this)), s = s.reverse(), s.__actions__.push({
            func: Ea,
            args: [kc],
            thisArg: n
          }), new Wn(s, this.__chain__);
        }
        return this.thru(kc);
      }
      function V2() {
        return wh(this.__wrapped__, this.__actions__);
      }
      var q2 = ga(function(r, s, c) {
        Et.call(r, c) ? ++r[c] : Br(r, c, 1);
      });
      function W2(r, s, c) {
        var m = Ue(r) ? Ff : Ly;
        return c && wn(r, s, c) && (s = n), m(r, Le(s, 3));
      }
      function K2(r, s) {
        var c = Ue(r) ? Yr : th;
        return c(r, Le(s, 3));
      }
      var H2 = Th(Yh), z2 = Th(Xh);
      function G2(r, s) {
        return cn(Sa(r, s), 1);
      }
      function J2(r, s) {
        return cn(Sa(r, s), be);
      }
      function Y2(r, s, c) {
        return c = c === n ? 1 : He(c), cn(Sa(r, s), c);
      }
      function rd(r, s) {
        var c = Ue(r) ? Vn : ei;
        return c(r, Le(s, 3));
      }
      function id(r, s) {
        var c = Ue(r) ? g1 : eh;
        return c(r, Le(s, 3));
      }
      var X2 = ga(function(r, s, c) {
        Et.call(r, c) ? r[c].push(s) : Br(r, c, [s]);
      });
      function Q2(r, s, c, m) {
        r = Cn(r) ? r : os(r), c = c && !m ? He(c) : 0;
        var k = r.length;
        return c < 0 && (c = nn(k + c, 0)), Ta(r) ? c <= k && r.indexOf(s, c) > -1 : !!k && Gi(r, s, c) > -1;
      }
      var Z2 = Ye(function(r, s, c) {
        var m = -1, k = typeof s == "function", P = Cn(r) ? Y(r.length) : [];
        return ei(r, function($) {
          P[++m] = k ? Dn(s, $, c) : Qs($, s, c);
        }), P;
      }), ew = ga(function(r, s, c) {
        Br(r, c, s);
      });
      function Sa(r, s) {
        var c = Ue(r) ? Lt : ah;
        return c(r, Le(s, 3));
      }
      function tw(r, s, c, m) {
        return r == null ? [] : (Ue(s) || (s = s == null ? [] : [s]), c = m ? n : c, Ue(c) || (c = c == null ? [] : [c]), fh(r, s, c));
      }
      var nw = ga(function(r, s, c) {
        r[c ? 0 : 1].push(s);
      }, function() {
        return [[], []];
      });
      function rw(r, s, c) {
        var m = Ue(r) ? Mu : Pf, k = arguments.length < 3;
        return m(r, Le(s, 4), c, k, ei);
      }
      function iw(r, s, c) {
        var m = Ue(r) ? y1 : Pf, k = arguments.length < 3;
        return m(r, Le(s, 4), c, k, eh);
      }
      function sw(r, s) {
        var c = Ue(r) ? Yr : th;
        return c(r, ka(Le(s, 3)));
      }
      function ow(r) {
        var s = Ue(r) ? Yf : Qy;
        return s(r);
      }
      function aw(r, s, c) {
        (c ? wn(r, s, c) : s === n) ? s = 1 : s = He(s);
        var m = Ue(r) ? Ty : Zy;
        return m(r, s);
      }
      function uw(r) {
        var s = Ue(r) ? Iy : tm;
        return s(r);
      }
      function cw(r) {
        if (r == null)
          return 0;
        if (Cn(r))
          return Ta(r) ? Yi(r) : r.length;
        var s = pn(r);
        return s == Rt || s == Fe ? r.size : sc(r).length;
      }
      function lw(r, s, c) {
        var m = Ue(r) ? Uu : nm;
        return c && wn(r, s, c) && (s = n), m(r, Le(s, 3));
      }
      var fw = Ye(function(r, s) {
        if (r == null)
          return [];
        var c = s.length;
        return c > 1 && wn(r, s[0], s[1]) ? s = [] : c > 2 && wn(s[0], s[1], s[2]) && (s = [s[0]]), fh(r, cn(s, 1), []);
      }), Ca = K1 || function() {
        return un.Date.now();
      };
      function hw(r, s) {
        if (typeof s != "function")
          throw new qn(u);
        return r = He(r), function() {
          if (--r < 1)
            return s.apply(this, arguments);
        };
      }
      function sd(r, s, c) {
        return s = c ? n : s, s = r && s == null ? r.length : s, Dr(r, T, n, n, n, n, s);
      }
      function od(r, s) {
        var c;
        if (typeof s != "function")
          throw new qn(u);
        return r = He(r), function() {
          return --r > 0 && (c = s.apply(this, arguments)), r <= 1 && (s = n), c;
        };
      }
      var Tc = Ye(function(r, s, c) {
        var m = b;
        if (c.length) {
          var k = Qr(c, is(Tc));
          m |= F;
        }
        return Dr(r, m, s, c, k);
      }), ad = Ye(function(r, s, c) {
        var m = b | D;
        if (c.length) {
          var k = Qr(c, is(ad));
          m |= F;
        }
        return Dr(s, m, r, c, k);
      });
      function ud(r, s, c) {
        s = c ? n : s;
        var m = Dr(r, C, n, n, n, n, n, s);
        return m.placeholder = ud.placeholder, m;
      }
      function cd(r, s, c) {
        s = c ? n : s;
        var m = Dr(r, O, n, n, n, n, n, s);
        return m.placeholder = cd.placeholder, m;
      }
      function ld(r, s, c) {
        var m, k, P, $, U, H, ne = 0, re = !1, se = !1, me = !0;
        if (typeof r != "function")
          throw new qn(u);
        s = Gn(s) || 0, $t(c) && (re = !!c.leading, se = "maxWait" in c, P = se ? nn(Gn(c.maxWait) || 0, s) : P, me = "trailing" in c ? !!c.trailing : me);
        function ke(Ht) {
          var ur = m, Nr = k;
          return m = k = n, ne = Ht, $ = r.apply(Nr, ur), $;
        }
        function Pe(Ht) {
          return ne = Ht, U = ro(tt, s), re ? ke(Ht) : $;
        }
        function Ge(Ht) {
          var ur = Ht - H, Nr = Ht - ne, Td = s - ur;
          return se ? dn(Td, P - Nr) : Td;
        }
        function Re(Ht) {
          var ur = Ht - H, Nr = Ht - ne;
          return H === n || ur >= s || ur < 0 || se && Nr >= P;
        }
        function tt() {
          var Ht = Ca();
          if (Re(Ht))
            return ot(Ht);
          U = ro(tt, Ge(Ht));
        }
        function ot(Ht) {
          return U = n, me && m ? ke(Ht) : (m = k = n, $);
        }
        function jn() {
          U !== n && vh(U), ne = 0, m = H = k = U = n;
        }
        function bn() {
          return U === n ? $ : ot(Ca());
        }
        function Nn() {
          var Ht = Ca(), ur = Re(Ht);
          if (m = arguments, k = this, H = Ht, ur) {
            if (U === n)
              return Pe(H);
            if (se)
              return vh(U), U = ro(tt, s), ke(H);
          }
          return U === n && (U = ro(tt, s)), $;
        }
        return Nn.cancel = jn, Nn.flush = bn, Nn;
      }
      var dw = Ye(function(r, s) {
        return Zf(r, 1, s);
      }), pw = Ye(function(r, s, c) {
        return Zf(r, Gn(s) || 0, c);
      });
      function gw(r) {
        return Dr(r, J);
      }
      function _a(r, s) {
        if (typeof r != "function" || s != null && typeof s != "function")
          throw new qn(u);
        var c = function() {
          var m = arguments, k = s ? s.apply(this, m) : m[0], P = c.cache;
          if (P.has(k))
            return P.get(k);
          var $ = r.apply(this, m);
          return c.cache = P.set(k, $) || P, $;
        };
        return c.cache = new (_a.Cache || Fr)(), c;
      }
      _a.Cache = Fr;
      function ka(r) {
        if (typeof r != "function")
          throw new qn(u);
        return function() {
          var s = arguments;
          switch (s.length) {
            case 0:
              return !r.call(this);
            case 1:
              return !r.call(this, s[0]);
            case 2:
              return !r.call(this, s[0], s[1]);
            case 3:
              return !r.call(this, s[0], s[1], s[2]);
          }
          return !r.apply(this, s);
        };
      }
      function yw(r) {
        return od(2, r);
      }
      var mw = rm(function(r, s) {
        s = s.length == 1 && Ue(s[0]) ? Lt(s[0], Ln(Le())) : Lt(cn(s, 1), Ln(Le()));
        var c = s.length;
        return Ye(function(m) {
          for (var k = -1, P = dn(m.length, c); ++k < P; )
            m[k] = s[k].call(this, m[k]);
          return Dn(r, this, m);
        });
      }), Ic = Ye(function(r, s) {
        var c = Qr(s, is(Ic));
        return Dr(r, F, n, s, c);
      }), fd = Ye(function(r, s) {
        var c = Qr(s, is(fd));
        return Dr(r, L, n, s, c);
      }), ww = Lr(function(r, s) {
        return Dr(r, q, n, n, n, s);
      });
      function bw(r, s) {
        if (typeof r != "function")
          throw new qn(u);
        return s = s === n ? s : He(s), Ye(r, s);
      }
      function vw(r, s) {
        if (typeof r != "function")
          throw new qn(u);
        return s = s == null ? 0 : nn(He(s), 0), Ye(function(c) {
          var m = c[s], k = ri(c, 0, s);
          return m && Xr(k, m), Dn(r, this, k);
        });
      }
      function xw(r, s, c) {
        var m = !0, k = !0;
        if (typeof r != "function")
          throw new qn(u);
        return $t(c) && (m = "leading" in c ? !!c.leading : m, k = "trailing" in c ? !!c.trailing : k), ld(r, s, {
          leading: m,
          maxWait: s,
          trailing: k
        });
      }
      function Aw(r) {
        return sd(r, 1);
      }
      function Ew(r, s) {
        return Ic(pc(s), r);
      }
      function Sw() {
        if (!arguments.length)
          return [];
        var r = arguments[0];
        return Ue(r) ? r : [r];
      }
      function Cw(r) {
        return Kn(r, _);
      }
      function _w(r, s) {
        return s = typeof s == "function" ? s : n, Kn(r, _, s);
      }
      function kw(r) {
        return Kn(r, p | _);
      }
      function Ow(r, s) {
        return s = typeof s == "function" ? s : n, Kn(r, p | _, s);
      }
      function Tw(r, s) {
        return s == null || Qf(r, s, an(s));
      }
      function ar(r, s) {
        return r === s || r !== r && s !== s;
      }
      var Iw = ba(nc), Fw = ba(function(r, s) {
        return r >= s;
      }), Si = ih(/* @__PURE__ */ function() {
        return arguments;
      }()) ? ih : function(r) {
        return Vt(r) && Et.call(r, "callee") && !Wf.call(r, "callee");
      }, Ue = Y.isArray, Bw = Cf ? Ln(Cf) : My;
      function Cn(r) {
        return r != null && Oa(r.length) && !Rr(r);
      }
      function Kt(r) {
        return Vt(r) && Cn(r);
      }
      function Dw(r) {
        return r === !0 || r === !1 || Vt(r) && mn(r) == Ee;
      }
      var ii = z1 || Uc, Lw = _f ? Ln(_f) : Uy;
      function Pw(r) {
        return Vt(r) && r.nodeType === 1 && !io(r);
      }
      function Rw(r) {
        if (r == null)
          return !0;
        if (Cn(r) && (Ue(r) || typeof r == "string" || typeof r.splice == "function" || ii(r) || ss(r) || Si(r)))
          return !r.length;
        var s = pn(r);
        if (s == Rt || s == Fe)
          return !r.size;
        if (no(r))
          return !sc(r).length;
        for (var c in r)
          if (Et.call(r, c))
            return !1;
        return !0;
      }
      function jw(r, s) {
        return Zs(r, s);
      }
      function Nw(r, s, c) {
        c = typeof c == "function" ? c : n;
        var m = c ? c(r, s) : n;
        return m === n ? Zs(r, s, n, c) : !!m;
      }
      function Fc(r) {
        if (!Vt(r))
          return !1;
        var s = mn(r);
        return s == De || s == _e || typeof r.message == "string" && typeof r.name == "string" && !io(r);
      }
      function $w(r) {
        return typeof r == "number" && Hf(r);
      }
      function Rr(r) {
        if (!$t(r))
          return !1;
        var s = mn(r);
        return s == _t || s == on || s == Me || s == En;
      }
      function hd(r) {
        return typeof r == "number" && r == He(r);
      }
      function Oa(r) {
        return typeof r == "number" && r > -1 && r % 1 == 0 && r <= ve;
      }
      function $t(r) {
        var s = typeof r;
        return r != null && (s == "object" || s == "function");
      }
      function Vt(r) {
        return r != null && typeof r == "object";
      }
      var dd = kf ? Ln(kf) : qy;
      function Mw(r, s) {
        return r === s || ic(r, s, xc(s));
      }
      function Uw(r, s, c) {
        return c = typeof c == "function" ? c : n, ic(r, s, xc(s), c);
      }
      function Vw(r) {
        return pd(r) && r != +r;
      }
      function qw(r) {
        if (_m(r))
          throw new $e(a);
        return sh(r);
      }
      function Ww(r) {
        return r === null;
      }
      function Kw(r) {
        return r == null;
      }
      function pd(r) {
        return typeof r == "number" || Vt(r) && mn(r) == jt;
      }
      function io(r) {
        if (!Vt(r) || mn(r) != wt)
          return !1;
        var s = ta(r);
        if (s === null)
          return !0;
        var c = Et.call(s, "constructor") && s.constructor;
        return typeof c == "function" && c instanceof c && Xo.call(c) == U1;
      }
      var Bc = Of ? Ln(Of) : Wy;
      function Hw(r) {
        return hd(r) && r >= -9007199254740991 && r <= ve;
      }
      var gd = Tf ? Ln(Tf) : Ky;
      function Ta(r) {
        return typeof r == "string" || !Ue(r) && Vt(r) && mn(r) == ce;
      }
      function Rn(r) {
        return typeof r == "symbol" || Vt(r) && mn(r) == vt;
      }
      var ss = If ? Ln(If) : Hy;
      function zw(r) {
        return r === n;
      }
      function Gw(r) {
        return Vt(r) && pn(r) == At;
      }
      function Jw(r) {
        return Vt(r) && mn(r) == et;
      }
      var Yw = ba(oc), Xw = ba(function(r, s) {
        return r <= s;
      });
      function yd(r) {
        if (!r)
          return [];
        if (Cn(r))
          return Ta(r) ? sr(r) : Sn(r);
        if (Ks && r[Ks])
          return T1(r[Ks]());
        var s = pn(r), c = s == Rt ? zu : s == Fe ? Go : os;
        return c(r);
      }
      function jr(r) {
        if (!r)
          return r === 0 ? r : 0;
        if (r = Gn(r), r === be || r === -1 / 0) {
          var s = r < 0 ? -1 : 1;
          return s * We;
        }
        return r === r ? r : 0;
      }
      function He(r) {
        var s = jr(r), c = s % 1;
        return s === s ? c ? s - c : s : 0;
      }
      function md(r) {
        return r ? vi(He(r), 0, pe) : 0;
      }
      function Gn(r) {
        if (typeof r == "number")
          return r;
        if (Rn(r))
          return we;
        if ($t(r)) {
          var s = typeof r.valueOf == "function" ? r.valueOf() : r;
          r = $t(s) ? s + "" : s;
        }
        if (typeof r != "string")
          return r === 0 ? r : +r;
        r = Rf(r);
        var c = ze.test(r);
        return c || It.test(r) ? h1(r.slice(2), c ? 2 : 8) : Xe.test(r) ? we : +r;
      }
      function wd(r) {
        return wr(r, _n(r));
      }
      function Qw(r) {
        return r ? vi(He(r), -9007199254740991, ve) : r === 0 ? r : 0;
      }
      function bt(r) {
        return r == null ? "" : Pn(r);
      }
      var Zw = ns(function(r, s) {
        if (no(s) || Cn(s)) {
          wr(s, an(s), r);
          return;
        }
        for (var c in s)
          Et.call(s, c) && Ys(r, c, s[c]);
      }), bd = ns(function(r, s) {
        wr(s, _n(s), r);
      }), Ia = ns(function(r, s, c, m) {
        wr(s, _n(s), r, m);
      }), eb = ns(function(r, s, c, m) {
        wr(s, an(s), r, m);
      }), tb = Lr(Zu);
      function nb(r, s) {
        var c = ts(r);
        return s == null ? c : Xf(c, s);
      }
      var rb = Ye(function(r, s) {
        r = Ct(r);
        var c = -1, m = s.length, k = m > 2 ? s[2] : n;
        for (k && wn(s[0], s[1], k) && (m = 1); ++c < m; )
          for (var P = s[c], $ = _n(P), U = -1, H = $.length; ++U < H; ) {
            var ne = $[U], re = r[ne];
            (re === n || ar(re, Qi[ne]) && !Et.call(r, ne)) && (r[ne] = P[ne]);
          }
        return r;
      }), ib = Ye(function(r) {
        return r.push(n, Rh), Dn(vd, n, r);
      });
      function sb(r, s) {
        return Bf(r, Le(s, 3), mr);
      }
      function ob(r, s) {
        return Bf(r, Le(s, 3), tc);
      }
      function ab(r, s) {
        return r == null ? r : ec(r, Le(s, 3), _n);
      }
      function ub(r, s) {
        return r == null ? r : nh(r, Le(s, 3), _n);
      }
      function cb(r, s) {
        return r && mr(r, Le(s, 3));
      }
      function lb(r, s) {
        return r && tc(r, Le(s, 3));
      }
      function fb(r) {
        return r == null ? [] : fa(r, an(r));
      }
      function hb(r) {
        return r == null ? [] : fa(r, _n(r));
      }
      function Dc(r, s, c) {
        var m = r == null ? n : xi(r, s);
        return m === n ? c : m;
      }
      function db(r, s) {
        return r != null && $h(r, s, Ry);
      }
      function Lc(r, s) {
        return r != null && $h(r, s, jy);
      }
      var pb = Fh(function(r, s, c) {
        s != null && typeof s.toString != "function" && (s = Qo.call(s)), r[s] = c;
      }, Rc(kn)), gb = Fh(function(r, s, c) {
        s != null && typeof s.toString != "function" && (s = Qo.call(s)), Et.call(r, s) ? r[s].push(c) : r[s] = [c];
      }, Le), yb = Ye(Qs);
      function an(r) {
        return Cn(r) ? Jf(r) : sc(r);
      }
      function _n(r) {
        return Cn(r) ? Jf(r, !0) : zy(r);
      }
      function mb(r, s) {
        var c = {};
        return s = Le(s, 3), mr(r, function(m, k, P) {
          Br(c, s(m, k, P), m);
        }), c;
      }
      function wb(r, s) {
        var c = {};
        return s = Le(s, 3), mr(r, function(m, k, P) {
          Br(c, k, s(m, k, P));
        }), c;
      }
      var bb = ns(function(r, s, c) {
        ha(r, s, c);
      }), vd = ns(function(r, s, c, m) {
        ha(r, s, c, m);
      }), vb = Lr(function(r, s) {
        var c = {};
        if (r == null)
          return c;
        var m = !1;
        s = Lt(s, function(P) {
          return P = ni(P, r), m || (m = P.length > 1), P;
        }), wr(r, bc(r), c), m && (c = Kn(c, p | v | _, pm));
        for (var k = s.length; k--; )
          fc(c, s[k]);
        return c;
      });
      function xb(r, s) {
        return xd(r, ka(Le(s)));
      }
      var Ab = Lr(function(r, s) {
        return r == null ? {} : Jy(r, s);
      });
      function xd(r, s) {
        if (r == null)
          return {};
        var c = Lt(bc(r), function(m) {
          return [m];
        });
        return s = Le(s), hh(r, c, function(m, k) {
          return s(m, k[0]);
        });
      }
      function Eb(r, s, c) {
        s = ni(s, r);
        var m = -1, k = s.length;
        for (k || (k = 1, r = n); ++m < k; ) {
          var P = r == null ? n : r[br(s[m])];
          P === n && (m = k, P = c), r = Rr(P) ? P.call(r) : P;
        }
        return r;
      }
      function Sb(r, s, c) {
        return r == null ? r : eo(r, s, c);
      }
      function Cb(r, s, c, m) {
        return m = typeof m == "function" ? m : n, r == null ? r : eo(r, s, c, m);
      }
      var Ad = Lh(an), Ed = Lh(_n);
      function _b(r, s, c) {
        var m = Ue(r), k = m || ii(r) || ss(r);
        if (s = Le(s, 4), c == null) {
          var P = r && r.constructor;
          k ? c = m ? new P() : [] : $t(r) ? c = Rr(P) ? ts(ta(r)) : {} : c = {};
        }
        return (k ? Vn : mr)(r, function($, U, H) {
          return s(c, $, U, H);
        }), c;
      }
      function kb(r, s) {
        return r == null ? !0 : fc(r, s);
      }
      function Ob(r, s, c) {
        return r == null ? r : mh(r, s, pc(c));
      }
      function Tb(r, s, c, m) {
        return m = typeof m == "function" ? m : n, r == null ? r : mh(r, s, pc(c), m);
      }
      function os(r) {
        return r == null ? [] : Hu(r, an(r));
      }
      function Ib(r) {
        return r == null ? [] : Hu(r, _n(r));
      }
      function Fb(r, s, c) {
        return c === n && (c = s, s = n), c !== n && (c = Gn(c), c = c === c ? c : 0), s !== n && (s = Gn(s), s = s === s ? s : 0), vi(Gn(r), s, c);
      }
      function Bb(r, s, c) {
        return s = jr(s), c === n ? (c = s, s = 0) : c = jr(c), r = Gn(r), Ny(r, s, c);
      }
      function Db(r, s, c) {
        if (c && typeof c != "boolean" && wn(r, s, c) && (s = c = n), c === n && (typeof s == "boolean" ? (c = s, s = n) : typeof r == "boolean" && (c = r, r = n)), r === n && s === n ? (r = 0, s = 1) : (r = jr(r), s === n ? (s = r, r = 0) : s = jr(s)), r > s) {
          var m = r;
          r = s, s = m;
        }
        if (c || r % 1 || s % 1) {
          var k = zf();
          return dn(r + k * (s - r + f1("1e-" + ((k + "").length - 1))), s);
        }
        return uc(r, s);
      }
      var Lb = rs(function(r, s, c) {
        return s = s.toLowerCase(), r + (c ? Sd(s) : s);
      });
      function Sd(r) {
        return Pc(bt(r).toLowerCase());
      }
      function Cd(r) {
        return r = bt(r), r && r.replace(hn, S1).replace(t1, "");
      }
      function Pb(r, s, c) {
        r = bt(r), s = Pn(s);
        var m = r.length;
        c = c === n ? m : vi(He(c), 0, m);
        var k = c;
        return c -= s.length, c >= 0 && r.slice(c, k) == s;
      }
      function Rb(r) {
        return r = bt(r), r && Vi.test(r) ? r.replace(Hr, C1) : r;
      }
      function jb(r) {
        return r = bt(r), r && rr.test(r) ? r.replace(Tr, "\\$&") : r;
      }
      var Nb = rs(function(r, s, c) {
        return r + (c ? "-" : "") + s.toLowerCase();
      }), $b = rs(function(r, s, c) {
        return r + (c ? " " : "") + s.toLowerCase();
      }), Mb = Oh("toLowerCase");
      function Ub(r, s, c) {
        r = bt(r), s = He(s);
        var m = s ? Yi(r) : 0;
        if (!s || m >= s)
          return r;
        var k = (s - m) / 2;
        return wa(sa(k), c) + r + wa(ia(k), c);
      }
      function Vb(r, s, c) {
        r = bt(r), s = He(s);
        var m = s ? Yi(r) : 0;
        return s && m < s ? r + wa(s - m, c) : r;
      }
      function qb(r, s, c) {
        r = bt(r), s = He(s);
        var m = s ? Yi(r) : 0;
        return s && m < s ? wa(s - m, c) + r : r;
      }
      function Wb(r, s, c) {
        return c || s == null ? s = 0 : s && (s = +s), X1(bt(r).replace(Gr, ""), s || 0);
      }
      function Kb(r, s, c) {
        return (c ? wn(r, s, c) : s === n) ? s = 1 : s = He(s), cc(bt(r), s);
      }
      function Hb() {
        var r = arguments, s = bt(r[0]);
        return r.length < 3 ? s : s.replace(r[1], r[2]);
      }
      var zb = rs(function(r, s, c) {
        return r + (c ? "_" : "") + s.toLowerCase();
      });
      function Gb(r, s, c) {
        return c && typeof c != "number" && wn(r, s, c) && (s = c = n), c = c === n ? pe : c >>> 0, c ? (r = bt(r), r && (typeof s == "string" || s != null && !Bc(s)) && (s = Pn(s), !s && Ji(r)) ? ri(sr(r), 0, c) : r.split(s, c)) : [];
      }
      var Jb = rs(function(r, s, c) {
        return r + (c ? " " : "") + Pc(s);
      });
      function Yb(r, s, c) {
        return r = bt(r), c = c == null ? 0 : vi(He(c), 0, r.length), s = Pn(s), r.slice(c, c + s.length) == s;
      }
      function Xb(r, s, c) {
        var m = B.templateSettings;
        c && wn(r, s, c) && (s = n), r = bt(r), s = Ia({}, s, m, Ph);
        var k = Ia({}, s.imports, m.imports, Ph), P = an(k), $ = Hu(k, P), U, H, ne = 0, re = s.interpolate || Fn, se = "__p += '", me = Gu(
          (s.escape || Fn).source + "|" + re.source + "|" + (re === zr ? ct : Fn).source + "|" + (s.evaluate || Fn).source + "|$",
          "g"
        ), ke = "//# sourceURL=" + (Et.call(s, "sourceURL") ? (s.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++o1 + "]") + `
`;
        r.replace(me, function(Re, tt, ot, jn, bn, Nn) {
          return ot || (ot = jn), se += r.slice(ne, Nn).replace(ir, _1), tt && (U = !0, se += `' +
__e(` + tt + `) +
'`), bn && (H = !0, se += `';
` + bn + `;
__p += '`), ot && (se += `' +
((__t = (` + ot + `)) == null ? '' : __t) +
'`), ne = Nn + Re.length, Re;
        }), se += `';
`;
        var Pe = Et.call(s, "variable") && s.variable;
        if (!Pe)
          se = `with (obj) {
` + se + `
}
`;
        else if (ye.test(Pe))
          throw new $e(l);
        se = (H ? se.replace(dt, "") : se).replace(ut, "$1").replace(ft, "$1;"), se = "function(" + (Pe || "obj") + `) {
` + (Pe ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (U ? ", __e = _.escape" : "") + (H ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + se + `return __p
}`;
        var Ge = kd(function() {
          return gt(P, ke + "return " + se).apply(n, $);
        });
        if (Ge.source = se, Fc(Ge))
          throw Ge;
        return Ge;
      }
      function Qb(r) {
        return bt(r).toLowerCase();
      }
      function Zb(r) {
        return bt(r).toUpperCase();
      }
      function ev(r, s, c) {
        if (r = bt(r), r && (c || s === n))
          return Rf(r);
        if (!r || !(s = Pn(s)))
          return r;
        var m = sr(r), k = sr(s), P = jf(m, k), $ = Nf(m, k) + 1;
        return ri(m, P, $).join("");
      }
      function tv(r, s, c) {
        if (r = bt(r), r && (c || s === n))
          return r.slice(0, Mf(r) + 1);
        if (!r || !(s = Pn(s)))
          return r;
        var m = sr(r), k = Nf(m, sr(s)) + 1;
        return ri(m, 0, k).join("");
      }
      function nv(r, s, c) {
        if (r = bt(r), r && (c || s === n))
          return r.replace(Gr, "");
        if (!r || !(s = Pn(s)))
          return r;
        var m = sr(r), k = jf(m, sr(s));
        return ri(m, k).join("");
      }
      function rv(r, s) {
        var c = oe, m = ae;
        if ($t(s)) {
          var k = "separator" in s ? s.separator : k;
          c = "length" in s ? He(s.length) : c, m = "omission" in s ? Pn(s.omission) : m;
        }
        r = bt(r);
        var P = r.length;
        if (Ji(r)) {
          var $ = sr(r);
          P = $.length;
        }
        if (c >= P)
          return r;
        var U = c - Yi(m);
        if (U < 1)
          return m;
        var H = $ ? ri($, 0, U).join("") : r.slice(0, U);
        if (k === n)
          return H + m;
        if ($ && (U += H.length - U), Bc(k)) {
          if (r.slice(U).search(k)) {
            var ne, re = H;
            for (k.global || (k = Gu(k.source, bt(lt.exec(k)) + "g")), k.lastIndex = 0; ne = k.exec(re); )
              var se = ne.index;
            H = H.slice(0, se === n ? U : se);
          }
        } else if (r.indexOf(Pn(k), U) != U) {
          var me = H.lastIndexOf(k);
          me > -1 && (H = H.slice(0, me));
        }
        return H + m;
      }
      function iv(r) {
        return r = bt(r), r && di.test(r) ? r.replace(rt, D1) : r;
      }
      var sv = rs(function(r, s, c) {
        return r + (c ? " " : "") + s.toUpperCase();
      }), Pc = Oh("toUpperCase");
      function _d(r, s, c) {
        return r = bt(r), s = c ? n : s, s === n ? O1(r) ? R1(r) : b1(r) : r.match(s) || [];
      }
      var kd = Ye(function(r, s) {
        try {
          return Dn(r, n, s);
        } catch (c) {
          return Fc(c) ? c : new $e(c);
        }
      }), ov = Lr(function(r, s) {
        return Vn(s, function(c) {
          c = br(c), Br(r, c, Tc(r[c], r));
        }), r;
      });
      function av(r) {
        var s = r == null ? 0 : r.length, c = Le();
        return r = s ? Lt(r, function(m) {
          if (typeof m[1] != "function")
            throw new qn(u);
          return [c(m[0]), m[1]];
        }) : [], Ye(function(m) {
          for (var k = -1; ++k < s; ) {
            var P = r[k];
            if (Dn(P[0], this, m))
              return Dn(P[1], this, m);
          }
        });
      }
      function uv(r) {
        return Dy(Kn(r, p));
      }
      function Rc(r) {
        return function() {
          return r;
        };
      }
      function cv(r, s) {
        return r == null || r !== r ? s : r;
      }
      var lv = Ih(), fv = Ih(!0);
      function kn(r) {
        return r;
      }
      function jc(r) {
        return oh(typeof r == "function" ? r : Kn(r, p));
      }
      function hv(r) {
        return uh(Kn(r, p));
      }
      function dv(r, s) {
        return ch(r, Kn(s, p));
      }
      var pv = Ye(function(r, s) {
        return function(c) {
          return Qs(c, r, s);
        };
      }), gv = Ye(function(r, s) {
        return function(c) {
          return Qs(r, c, s);
        };
      });
      function Nc(r, s, c) {
        var m = an(s), k = fa(s, m);
        c == null && !($t(s) && (k.length || !m.length)) && (c = s, s = r, r = this, k = fa(s, an(s)));
        var P = !($t(c) && "chain" in c) || !!c.chain, $ = Rr(r);
        return Vn(k, function(U) {
          var H = s[U];
          r[U] = H, $ && (r.prototype[U] = function() {
            var ne = this.__chain__;
            if (P || ne) {
              var re = r(this.__wrapped__), se = re.__actions__ = Sn(this.__actions__);
              return se.push({ func: H, args: arguments, thisArg: r }), re.__chain__ = ne, re;
            }
            return H.apply(r, Xr([this.value()], arguments));
          });
        }), r;
      }
      function yv() {
        return un._ === this && (un._ = V1), this;
      }
      function $c() {
      }
      function mv(r) {
        return r = He(r), Ye(function(s) {
          return lh(s, r);
        });
      }
      var wv = yc(Lt), bv = yc(Ff), vv = yc(Uu);
      function Od(r) {
        return Ec(r) ? Vu(br(r)) : Yy(r);
      }
      function xv(r) {
        return function(s) {
          return r == null ? n : xi(r, s);
        };
      }
      var Av = Bh(), Ev = Bh(!0);
      function Mc() {
        return [];
      }
      function Uc() {
        return !1;
      }
      function Sv() {
        return {};
      }
      function Cv() {
        return "";
      }
      function _v() {
        return !0;
      }
      function kv(r, s) {
        if (r = He(r), r < 1 || r > ve)
          return [];
        var c = pe, m = dn(r, pe);
        s = Le(s), r -= pe;
        for (var k = Ku(m, s); ++c < r; )
          s(c);
        return k;
      }
      function Ov(r) {
        return Ue(r) ? Lt(r, br) : Rn(r) ? [r] : Sn(Gh(bt(r)));
      }
      function Tv(r) {
        var s = ++M1;
        return bt(r) + s;
      }
      var Iv = ma(function(r, s) {
        return r + s;
      }, 0), Fv = mc("ceil"), Bv = ma(function(r, s) {
        return r / s;
      }, 1), Dv = mc("floor");
      function Lv(r) {
        return r && r.length ? la(r, kn, nc) : n;
      }
      function Pv(r, s) {
        return r && r.length ? la(r, Le(s, 2), nc) : n;
      }
      function Rv(r) {
        return Lf(r, kn);
      }
      function jv(r, s) {
        return Lf(r, Le(s, 2));
      }
      function Nv(r) {
        return r && r.length ? la(r, kn, oc) : n;
      }
      function $v(r, s) {
        return r && r.length ? la(r, Le(s, 2), oc) : n;
      }
      var Mv = ma(function(r, s) {
        return r * s;
      }, 1), Uv = mc("round"), Vv = ma(function(r, s) {
        return r - s;
      }, 0);
      function qv(r) {
        return r && r.length ? Wu(r, kn) : 0;
      }
      function Wv(r, s) {
        return r && r.length ? Wu(r, Le(s, 2)) : 0;
      }
      return B.after = hw, B.ary = sd, B.assign = Zw, B.assignIn = bd, B.assignInWith = Ia, B.assignWith = eb, B.at = tb, B.before = od, B.bind = Tc, B.bindAll = ov, B.bindKey = ad, B.castArray = Sw, B.chain = nd, B.chunk = Dm, B.compact = Lm, B.concat = Pm, B.cond = av, B.conforms = uv, B.constant = Rc, B.countBy = q2, B.create = nb, B.curry = ud, B.curryRight = cd, B.debounce = ld, B.defaults = rb, B.defaultsDeep = ib, B.defer = dw, B.delay = pw, B.difference = Rm, B.differenceBy = jm, B.differenceWith = Nm, B.drop = $m, B.dropRight = Mm, B.dropRightWhile = Um, B.dropWhile = Vm, B.fill = qm, B.filter = K2, B.flatMap = G2, B.flatMapDeep = J2, B.flatMapDepth = Y2, B.flatten = Qh, B.flattenDeep = Wm, B.flattenDepth = Km, B.flip = gw, B.flow = lv, B.flowRight = fv, B.fromPairs = Hm, B.functions = fb, B.functionsIn = hb, B.groupBy = X2, B.initial = Gm, B.intersection = Jm, B.intersectionBy = Ym, B.intersectionWith = Xm, B.invert = pb, B.invertBy = gb, B.invokeMap = Z2, B.iteratee = jc, B.keyBy = ew, B.keys = an, B.keysIn = _n, B.map = Sa, B.mapKeys = mb, B.mapValues = wb, B.matches = hv, B.matchesProperty = dv, B.memoize = _a, B.merge = bb, B.mergeWith = vd, B.method = pv, B.methodOf = gv, B.mixin = Nc, B.negate = ka, B.nthArg = mv, B.omit = vb, B.omitBy = xb, B.once = yw, B.orderBy = tw, B.over = wv, B.overArgs = mw, B.overEvery = bv, B.overSome = vv, B.partial = Ic, B.partialRight = fd, B.partition = nw, B.pick = Ab, B.pickBy = xd, B.property = Od, B.propertyOf = xv, B.pull = t2, B.pullAll = ed, B.pullAllBy = n2, B.pullAllWith = r2, B.pullAt = i2, B.range = Av, B.rangeRight = Ev, B.rearg = ww, B.reject = sw, B.remove = s2, B.rest = bw, B.reverse = kc, B.sampleSize = aw, B.set = Sb, B.setWith = Cb, B.shuffle = uw, B.slice = o2, B.sortBy = fw, B.sortedUniq = d2, B.sortedUniqBy = p2, B.split = Gb, B.spread = vw, B.tail = g2, B.take = y2, B.takeRight = m2, B.takeRightWhile = w2, B.takeWhile = b2, B.tap = L2, B.throttle = xw, B.thru = Ea, B.toArray = yd, B.toPairs = Ad, B.toPairsIn = Ed, B.toPath = Ov, B.toPlainObject = wd, B.transform = _b, B.unary = Aw, B.union = v2, B.unionBy = x2, B.unionWith = A2, B.uniq = E2, B.uniqBy = S2, B.uniqWith = C2, B.unset = kb, B.unzip = Oc, B.unzipWith = td, B.update = Ob, B.updateWith = Tb, B.values = os, B.valuesIn = Ib, B.without = _2, B.words = _d, B.wrap = Ew, B.xor = k2, B.xorBy = O2, B.xorWith = T2, B.zip = I2, B.zipObject = F2, B.zipObjectDeep = B2, B.zipWith = D2, B.entries = Ad, B.entriesIn = Ed, B.extend = bd, B.extendWith = Ia, Nc(B, B), B.add = Iv, B.attempt = kd, B.camelCase = Lb, B.capitalize = Sd, B.ceil = Fv, B.clamp = Fb, B.clone = Cw, B.cloneDeep = kw, B.cloneDeepWith = Ow, B.cloneWith = _w, B.conformsTo = Tw, B.deburr = Cd, B.defaultTo = cv, B.divide = Bv, B.endsWith = Pb, B.eq = ar, B.escape = Rb, B.escapeRegExp = jb, B.every = W2, B.find = H2, B.findIndex = Yh, B.findKey = sb, B.findLast = z2, B.findLastIndex = Xh, B.findLastKey = ob, B.floor = Dv, B.forEach = rd, B.forEachRight = id, B.forIn = ab, B.forInRight = ub, B.forOwn = cb, B.forOwnRight = lb, B.get = Dc, B.gt = Iw, B.gte = Fw, B.has = db, B.hasIn = Lc, B.head = Zh, B.identity = kn, B.includes = Q2, B.indexOf = zm, B.inRange = Bb, B.invoke = yb, B.isArguments = Si, B.isArray = Ue, B.isArrayBuffer = Bw, B.isArrayLike = Cn, B.isArrayLikeObject = Kt, B.isBoolean = Dw, B.isBuffer = ii, B.isDate = Lw, B.isElement = Pw, B.isEmpty = Rw, B.isEqual = jw, B.isEqualWith = Nw, B.isError = Fc, B.isFinite = $w, B.isFunction = Rr, B.isInteger = hd, B.isLength = Oa, B.isMap = dd, B.isMatch = Mw, B.isMatchWith = Uw, B.isNaN = Vw, B.isNative = qw, B.isNil = Kw, B.isNull = Ww, B.isNumber = pd, B.isObject = $t, B.isObjectLike = Vt, B.isPlainObject = io, B.isRegExp = Bc, B.isSafeInteger = Hw, B.isSet = gd, B.isString = Ta, B.isSymbol = Rn, B.isTypedArray = ss, B.isUndefined = zw, B.isWeakMap = Gw, B.isWeakSet = Jw, B.join = Qm, B.kebabCase = Nb, B.last = zn, B.lastIndexOf = Zm, B.lowerCase = $b, B.lowerFirst = Mb, B.lt = Yw, B.lte = Xw, B.max = Lv, B.maxBy = Pv, B.mean = Rv, B.meanBy = jv, B.min = Nv, B.minBy = $v, B.stubArray = Mc, B.stubFalse = Uc, B.stubObject = Sv, B.stubString = Cv, B.stubTrue = _v, B.multiply = Mv, B.nth = e2, B.noConflict = yv, B.noop = $c, B.now = Ca, B.pad = Ub, B.padEnd = Vb, B.padStart = qb, B.parseInt = Wb, B.random = Db, B.reduce = rw, B.reduceRight = iw, B.repeat = Kb, B.replace = Hb, B.result = Eb, B.round = Uv, B.runInContext = K, B.sample = ow, B.size = cw, B.snakeCase = zb, B.some = lw, B.sortedIndex = a2, B.sortedIndexBy = u2, B.sortedIndexOf = c2, B.sortedLastIndex = l2, B.sortedLastIndexBy = f2, B.sortedLastIndexOf = h2, B.startCase = Jb, B.startsWith = Yb, B.subtract = Vv, B.sum = qv, B.sumBy = Wv, B.template = Xb, B.times = kv, B.toFinite = jr, B.toInteger = He, B.toLength = md, B.toLower = Qb, B.toNumber = Gn, B.toSafeInteger = Qw, B.toString = bt, B.toUpper = Zb, B.trim = ev, B.trimEnd = tv, B.trimStart = nv, B.truncate = rv, B.unescape = iv, B.uniqueId = Tv, B.upperCase = sv, B.upperFirst = Pc, B.each = rd, B.eachRight = id, B.first = Zh, Nc(B, function() {
        var r = {};
        return mr(B, function(s, c) {
          Et.call(B.prototype, c) || (r[c] = s);
        }), r;
      }(), { chain: !1 }), B.VERSION = i, Vn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(r) {
        B[r].placeholder = B;
      }), Vn(["drop", "take"], function(r, s) {
        it.prototype[r] = function(c) {
          c = c === n ? 1 : nn(He(c), 0);
          var m = this.__filtered__ && !s ? new it(this) : this.clone();
          return m.__filtered__ ? m.__takeCount__ = dn(c, m.__takeCount__) : m.__views__.push({
            size: dn(c, pe),
            type: r + (m.__dir__ < 0 ? "Right" : "")
          }), m;
        }, it.prototype[r + "Right"] = function(c) {
          return this.reverse()[r](c).reverse();
        };
      }), Vn(["filter", "map", "takeWhile"], function(r, s) {
        var c = s + 1, m = c == Ae || c == Be;
        it.prototype[r] = function(k) {
          var P = this.clone();
          return P.__iteratees__.push({
            iteratee: Le(k, 3),
            type: c
          }), P.__filtered__ = P.__filtered__ || m, P;
        };
      }), Vn(["head", "last"], function(r, s) {
        var c = "take" + (s ? "Right" : "");
        it.prototype[r] = function() {
          return this[c](1).value()[0];
        };
      }), Vn(["initial", "tail"], function(r, s) {
        var c = "drop" + (s ? "" : "Right");
        it.prototype[r] = function() {
          return this.__filtered__ ? new it(this) : this[c](1);
        };
      }), it.prototype.compact = function() {
        return this.filter(kn);
      }, it.prototype.find = function(r) {
        return this.filter(r).head();
      }, it.prototype.findLast = function(r) {
        return this.reverse().find(r);
      }, it.prototype.invokeMap = Ye(function(r, s) {
        return typeof r == "function" ? new it(this) : this.map(function(c) {
          return Qs(c, r, s);
        });
      }), it.prototype.reject = function(r) {
        return this.filter(ka(Le(r)));
      }, it.prototype.slice = function(r, s) {
        r = He(r);
        var c = this;
        return c.__filtered__ && (r > 0 || s < 0) ? new it(c) : (r < 0 ? c = c.takeRight(-r) : r && (c = c.drop(r)), s !== n && (s = He(s), c = s < 0 ? c.dropRight(-s) : c.take(s - r)), c);
      }, it.prototype.takeRightWhile = function(r) {
        return this.reverse().takeWhile(r).reverse();
      }, it.prototype.toArray = function() {
        return this.take(pe);
      }, mr(it.prototype, function(r, s) {
        var c = /^(?:filter|find|map|reject)|While$/.test(s), m = /^(?:head|last)$/.test(s), k = B[m ? "take" + (s == "last" ? "Right" : "") : s], P = m || /^find/.test(s);
        k && (B.prototype[s] = function() {
          var $ = this.__wrapped__, U = m ? [1] : arguments, H = $ instanceof it, ne = U[0], re = H || Ue($), se = function(tt) {
            var ot = k.apply(B, Xr([tt], U));
            return m && me ? ot[0] : ot;
          };
          re && c && typeof ne == "function" && ne.length != 1 && (H = re = !1);
          var me = this.__chain__, ke = !!this.__actions__.length, Pe = P && !me, Ge = H && !ke;
          if (!P && re) {
            $ = Ge ? $ : new it(this);
            var Re = r.apply($, U);
            return Re.__actions__.push({ func: Ea, args: [se], thisArg: n }), new Wn(Re, me);
          }
          return Pe && Ge ? r.apply(this, U) : (Re = this.thru(se), Pe ? m ? Re.value()[0] : Re.value() : Re);
        });
      }), Vn(["pop", "push", "shift", "sort", "splice", "unshift"], function(r) {
        var s = Jo[r], c = /^(?:push|sort|unshift)$/.test(r) ? "tap" : "thru", m = /^(?:pop|shift)$/.test(r);
        B.prototype[r] = function() {
          var k = arguments;
          if (m && !this.__chain__) {
            var P = this.value();
            return s.apply(Ue(P) ? P : [], k);
          }
          return this[c](function($) {
            return s.apply(Ue($) ? $ : [], k);
          });
        };
      }), mr(it.prototype, function(r, s) {
        var c = B[s];
        if (c) {
          var m = c.name + "";
          Et.call(es, m) || (es[m] = []), es[m].push({ name: s, func: c });
        }
      }), es[ya(n, D).name] = [{
        name: "wrapper",
        func: n
      }], it.prototype.clone = iy, it.prototype.reverse = sy, it.prototype.value = oy, B.prototype.at = P2, B.prototype.chain = R2, B.prototype.commit = j2, B.prototype.next = N2, B.prototype.plant = M2, B.prototype.reverse = U2, B.prototype.toJSON = B.prototype.valueOf = B.prototype.value = V2, B.prototype.first = B.prototype.head, Ks && (B.prototype[Ks] = $2), B;
    }, Xi = j1();
    yi ? ((yi.exports = Xi)._ = Xi, ju._ = Xi) : un._ = Xi;
  }).call(hr);
})(iu, iu.exports);
var Li = iu.exports;
const mt = /* @__PURE__ */ Ul(Li), _S = Ze.div`
  max-width: ${({ $maxWidth: e }) => e}px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`, kS = {
  ShortenedText: _S
}, cs = ({ text: e, trimLength: t, maxWidth: n = 200 }) => {
  if (t) {
    const i = e.substring(0, t);
    return /* @__PURE__ */ x.jsx(sn, { title: e, placement: "top", children: i });
  }
  return /* @__PURE__ */ x.jsx(sn, { title: e, children: /* @__PURE__ */ x.jsx(kS.ShortenedText, { $maxWidth: n, children: e }) });
}, OS = ({
  setSelectedKeys: e,
  selectedKeys: t,
  confirm: n,
  clearFilters: i,
  close: o
}) => {
  const a = (l, f) => {
    f({ closeDropdown: !1 });
  }, u = (l) => {
    l();
  };
  return /* @__PURE__ */ x.jsxs("div", { style: { padding: 8 }, onKeyDown: (l) => l.stopPropagation(), children: [
    /* @__PURE__ */ x.jsx(
      lr,
      {
        placeholder: "search",
        value: t[0],
        onChange: (l) => {
          e(l.target.value ? [l.target.value] : []), a(l.target.value ? [l.target.value] : [], n);
        },
        onPressEnter: () => a(t, n),
        style: { marginBottom: 8, display: "block" }
      }
    ),
    /* @__PURE__ */ x.jsxs(Xv, { children: [
      /* @__PURE__ */ x.jsx(
        St,
        {
          onClick: () => {
            i && (i(), u(i)), a([], n);
          },
          size: "small",
          style: { width: 90 },
          children: "Reset"
        }
      ),
      /* @__PURE__ */ x.jsx(
        St,
        {
          type: "link",
          size: "small",
          onClick: () => {
            o();
          },
          children: "close"
        }
      )
    ] })
  ] });
}, TS = Ze.div`
  td {
    cursor: ${({ $isCursorPointer: e }) => e && "pointer"};
  }

  && .ant-table-container {
    border: ${({ $borderless: e, $isDark: t }) => e ? "0" : t ? " 1px solid rgba(255, 255, 255, 0.10)" : " 1px solid #EAEAEC"};
    border-bottom: 0;
  }

  && .ant-table-cell {
    font-size: 14px;
    line-height: 22px;
    padding: 10px 16px;
  }

  && thead .ant-table-cell {
    padding: 10px 16px;
  }

  && .controls {
    padding: 9px 12px;
  }

  && .ant-table-pagination {
    border: ${({ $borderless: e, $isDark: t }) => e ? "0" : t ? "1px solid rgba(255, 255, 255, 0.10)" : "1px solid #EAEAEC"};
    border-radius: 0 0 8px 8px;
    border-top: 0;
    margin: 0;
    padding: 8px 16px;
  }

  && .ant-pagination-total-text {
    position: ${({ $isTotalLeft: e }) => e ? "initial" : "absolute"};
    right: 16px;
  }

  && .ant-table-expanded-row-fixed {
    width: auto !important;
  }
`, IS = Ze.div`
  && .ant-table-row .hideable {
    display: none;
  }

  && .ant-table-row:hover .hideable {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 4px;
  }
`, op = {
  TableContainer: TS,
  HideableControls: IS
}, ap = Ze(St)`
  height: 24px !important;
`, FS = Ze.div`
  text-align: ${({ $align: e }) => e};
`, up = ({ tags: e, trimLength: t }) => {
  const n = (i) => i.map((o) => /* @__PURE__ */ x.jsx(fl, { style: { margin: 0, flexShrink: 0 }, children: o }, o));
  return t && t < e.length ? /* @__PURE__ */ x.jsxs(st, { wrap: "nowrap", gap: "4px", children: [
    n(e.slice(0, t)),
    /* @__PURE__ */ x.jsx(sn, { title: /* @__PURE__ */ x.jsx(x.Fragment, { children: n(e.slice(t)) }), children: /* @__PURE__ */ x.jsxs(fl, { children: [
      "+",
      e.length - t
    ] }, "more") })
  ] }) : /* @__PURE__ */ x.jsx(st, { wrap: "nowrap", gap: "4px", children: n(e) });
}, BS = (e) => Object.entries(e).every(([, t]) => t === null || typeof t != "object"), DS = ({
  columns: e,
  additionalPrinterColumnsUndefinedValues: t,
  additionalPrinterColumnsTrimLengths: n,
  additionalPrinterColumnsColWidths: i
}) => {
  if (e)
    return e.map((o) => {
      const a = t?.find(({ key: f }) => f === o.key)?.value, u = n?.find(({ key: f }) => f === o.key)?.value, l = i?.find(({ key: f }) => f === o.key)?.value;
      return {
        ...o,
        render: (f) => typeof f == "object" && !Array.isArray(f) ? BS(f) ? /* @__PURE__ */ x.jsx(
          up,
          {
            tags: Object.entries(f).map(([d, g]) => `${d}: ${String(g)}`),
            trimLength: u
          }
        ) : /* @__PURE__ */ x.jsx(cs, { trimLength: u, text: JSON.stringify(f) }) : Array.isArray(f) ? f.every((d) => d && !Array.isArray(d)) ? /* @__PURE__ */ x.jsx(up, { tags: f.map((d) => d.toLocaleString()), trimLength: u }) : /* @__PURE__ */ x.jsx(cs, { trimLength: u, text: f.join(", ") }) : typeof f == "boolean" ? f ? /* @__PURE__ */ x.jsx(ax, { style: { color: "green" } }) : /* @__PURE__ */ x.jsx(ux, { style: { color: "red" } }) : typeof f == "number" ? /* @__PURE__ */ x.jsx(cs, { trimLength: u, text: String(f) }) : typeof f == "string" ? /* @__PURE__ */ x.jsx(cs, { trimLength: u, text: f }) : f === void 0 && o.key && t && a ? /* @__PURE__ */ x.jsx(cs, { trimLength: u, text: a }) : /* @__PURE__ */ x.jsx(cs, { trimLength: u, text: `Raw: ${JSON.stringify(f)}` }),
        width: l,
        filterDropdown: ({ setSelectedKeys: f, selectedKeys: d, confirm: g, clearFilters: p, close: v }) => /* @__PURE__ */ x.jsx(
          OS,
          {
            setSelectedKeys: f,
            selectedKeys: d,
            confirm: g,
            clearFilters: p,
            close: v
          }
        ),
        filterIcon: (f) => /* @__PURE__ */ x.jsx(ox, { style: { color: f ? "#1677ff" : void 0 } }),
        onFilter: (f, d) => {
          const { dataIndex: g } = o, p = Array.isArray(g) ? Li.get(d, g) : d[g];
          if (typeof p == "object" && !Array.isArray(p))
            return JSON.stringify(p).toLowerCase().includes(f.toLowerCase());
          if (Array.isArray(p))
            return p.some((v) => v.toLowerCase().includes(f.toLowerCase()));
          if (typeof p == "boolean") {
            const v = f.toLowerCase() === "true";
            return p === v;
          }
          return typeof p == "number" ? String(p).includes(f.toLowerCase()) : typeof p == "string" ? p.toLowerCase().includes(f.toLowerCase()) : !1;
        },
        sorter: (f, d) => {
          const { dataIndex: g } = o, p = Array.isArray(g) ? Li.get(f, g) : f[g], v = Array.isArray(g) ? Li.get(d, g) : d[g];
          return typeof p == "object" && !Array.isArray(p) && p !== null ? typeof v == "object" && !Array.isArray(v) && v !== null ? Object.keys(p).length - Object.keys(v).length : Object.keys(p).length ? -1 : 1 : Array.isArray(p) ? Array.isArray(v) ? p.length - v.length : p.length ? -1 : 1 : typeof p == "boolean" ? p === v ? 0 : p ? -1 : 1 : typeof p == "number" ? typeof v == "number" ? p - v : p ? -1 : 1 : typeof p == "string" ? typeof v == "string" ? p.localeCompare(v) : p ? -1 : 1 : 0;
        }
      };
    });
}, LS = ({
  enrichedColumns: e,
  navigate: t,
  baseprefix: n,
  editIcon: i,
  deleteIcon: o
}) => {
  if (e)
    return [
      ...e,
      {
        title: "",
        dataIndex: "internalDataForControls",
        key: "controls",
        className: "controls",
        width: 120,
        render: (a) => /* @__PURE__ */ x.jsxs(FS, { $align: "right", className: "hideable", children: [
          /* @__PURE__ */ x.jsx(
            ap,
            {
              type: "text",
              size: "small",
              onClick: (u) => {
                u.stopPropagation(), t(
                  `${n}/${a.cluster}${a.namespace ? `/${a.namespace}` : ""}${a.syntheticProject ? `/${a.syntheticProject}` : ""}/${a.pathPrefix}/${a.apiGroupAndVersion}/${a.typeName}/${a.entryName}?backlink=${a.backlink}`
                );
              },
              icon: i || /* @__PURE__ */ x.jsx(cx, { size: 14 }),
              disabled: !a.permissions.canUpdate
            }
          ),
          /* @__PURE__ */ x.jsx(
            ap,
            {
              type: "text",
              size: "small",
              onClick: (u) => {
                u.stopPropagation(), a.onDeleteHandle(
                  a.entryName,
                  `${a.deletePathPrefix}/${a.apiGroupAndVersion}${a.namespace ? `/namespaces/${a.namespace}` : ""}/${a.typeName}/${a.entryName}`
                );
              },
              icon: o || /* @__PURE__ */ x.jsx(lx, { size: 14 }),
              disabled: !a.permissions.canDelete
            }
          )
        ] })
      }
    ];
}, PS = ({
  theme: e,
  baseprefix: t,
  dataSource: n,
  columns: i,
  pathToNavigate: o,
  recordKeysForNavigation: a,
  additionalPrinterColumnsUndefinedValues: u,
  additionalPrinterColumnsTrimLengths: l,
  additionalPrinterColumnsColWidths: f,
  selectData: d,
  withoutControls: g = !1,
  tableProps: p
}) => {
  const v = To();
  if (!i)
    return null;
  const _ = DS({
    columns: i,
    additionalPrinterColumnsUndefinedValues: u,
    additionalPrinterColumnsTrimLengths: l,
    additionalPrinterColumnsColWidths: f
  });
  if (!_)
    return null;
  const A = g ? _ : LS({
    enrichedColumns: _,
    navigate: v,
    baseprefix: t,
    editIcon: p?.editIcon,
    deleteIcon: p?.deleteIcon
  });
  if (!A)
    return null;
  const E = (b) => `Total: ${b}`;
  return /* @__PURE__ */ x.jsx(
    op.TableContainer,
    {
      $isDark: e === "dark",
      $isCursorPointer: !!o,
      $borderless: p?.borderless,
      $isTotalLeft: p?.isTotalLeft,
      children: /* @__PURE__ */ x.jsx(op.HideableControls, { children: /* @__PURE__ */ x.jsx(
        Qv,
        {
          dataSource: n,
          columns: A,
          pagination: {
            position: p?.paginationPosition || ["bottomLeft"],
            showSizeChanger: !0,
            defaultPageSize: 10,
            hideOnSinglePage: !1,
            showTotal: E
          },
          scroll: { x: "max-content" },
          rowSelection: d ? {
            type: "checkbox",
            selectedRowKeys: d.selectedRowKeys,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange: (b, D) => {
              d.onChange(
                b,
                D.map(({ internalDataForControls: j }) => ({
                  name: j.entryName,
                  endpoint: `${j.deletePathPrefix}/${j.apiGroupAndVersion}${j.namespace ? `/namespaces/${j.namespace}` : ""}/${j.typeName}/${j.entryName}`
                }))
              );
            }
          } : void 0,
          onRow: (b) => ({
            onClick: () => {
              if (o && a) {
                const D = Li.get(b, a), j = typeof D == "string" ? D : JSON.stringify(D), C = o.replaceAll("~recordValue~", j);
                v(C);
              }
            }
          })
        }
      ) })
    }
  );
};
function La(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var j0 = { exports: {} };
/*! jsonpath 1.1.1 */
(function(e, t) {
  (function(n) {
    e.exports = n();
  })(function() {
    return function n(i, o, a) {
      function u(d, g) {
        if (!o[d]) {
          if (!i[d]) {
            var p = typeof La == "function" && La;
            if (!g && p) return p(d, !0);
            if (l) return l(d, !0);
            var v = new Error("Cannot find module '" + d + "'");
            throw v.code = "MODULE_NOT_FOUND", v;
          }
          var _ = o[d] = { exports: {} };
          i[d][0].call(_.exports, function(A) {
            var E = i[d][1][A];
            return u(E || A);
          }, _, _.exports, n, i, o, a);
        }
        return o[d].exports;
      }
      for (var l = typeof La == "function" && La, f = 0; f < a.length; f++) u(a[f]);
      return u;
    }({ "./aesprim": [function(n, i, o) {
      (function(a, u) {
        u(typeof o < "u" ? o : a.esprima = {});
      })(this, function(a) {
        var u, l, f, d, g, p, v, _, A, E, b, D, j, C, O, F, L, T;
        u = {
          BooleanLiteral: 1,
          EOF: 2,
          Identifier: 3,
          Keyword: 4,
          NullLiteral: 5,
          NumericLiteral: 6,
          Punctuator: 7,
          StringLiteral: 8,
          RegularExpression: 9
        }, l = {}, l[u.BooleanLiteral] = "Boolean", l[u.EOF] = "<end>", l[u.Identifier] = "Identifier", l[u.Keyword] = "Keyword", l[u.NullLiteral] = "Null", l[u.NumericLiteral] = "Numeric", l[u.Punctuator] = "Punctuator", l[u.StringLiteral] = "String", l[u.RegularExpression] = "RegularExpression", f = [
          "(",
          "{",
          "[",
          "in",
          "typeof",
          "instanceof",
          "new",
          "return",
          "case",
          "delete",
          "throw",
          "void",
          // assignment operators
          "=",
          "+=",
          "-=",
          "*=",
          "/=",
          "%=",
          "<<=",
          ">>=",
          ">>>=",
          "&=",
          "|=",
          "^=",
          ",",
          // binary/unary operators
          "+",
          "-",
          "*",
          "/",
          "%",
          "++",
          "--",
          "<<",
          ">>",
          ">>>",
          "&",
          "|",
          "^",
          "!",
          "~",
          "&&",
          "||",
          "?",
          ":",
          "===",
          "==",
          ">=",
          "<=",
          "<",
          ">",
          "!=",
          "!=="
        ], d = {
          AssignmentExpression: "AssignmentExpression",
          ArrayExpression: "ArrayExpression",
          BlockStatement: "BlockStatement",
          BinaryExpression: "BinaryExpression",
          BreakStatement: "BreakStatement",
          CallExpression: "CallExpression",
          CatchClause: "CatchClause",
          ConditionalExpression: "ConditionalExpression",
          ContinueStatement: "ContinueStatement",
          DoWhileStatement: "DoWhileStatement",
          DebuggerStatement: "DebuggerStatement",
          EmptyStatement: "EmptyStatement",
          ExpressionStatement: "ExpressionStatement",
          ForStatement: "ForStatement",
          ForInStatement: "ForInStatement",
          FunctionDeclaration: "FunctionDeclaration",
          FunctionExpression: "FunctionExpression",
          Identifier: "Identifier",
          IfStatement: "IfStatement",
          Literal: "Literal",
          LabeledStatement: "LabeledStatement",
          LogicalExpression: "LogicalExpression",
          MemberExpression: "MemberExpression",
          NewExpression: "NewExpression",
          ObjectExpression: "ObjectExpression",
          Program: "Program",
          Property: "Property",
          ReturnStatement: "ReturnStatement",
          SequenceExpression: "SequenceExpression",
          SwitchStatement: "SwitchStatement",
          SwitchCase: "SwitchCase",
          ThisExpression: "ThisExpression",
          ThrowStatement: "ThrowStatement",
          TryStatement: "TryStatement",
          UnaryExpression: "UnaryExpression",
          UpdateExpression: "UpdateExpression",
          VariableDeclaration: "VariableDeclaration",
          VariableDeclarator: "VariableDeclarator",
          WhileStatement: "WhileStatement",
          WithStatement: "WithStatement"
        }, g = {
          Data: 1,
          Get: 2,
          Set: 4
        }, p = {
          UnexpectedToken: "Unexpected token %0",
          UnexpectedNumber: "Unexpected number",
          UnexpectedString: "Unexpected string",
          UnexpectedIdentifier: "Unexpected identifier",
          UnexpectedReserved: "Unexpected reserved word",
          UnexpectedEOS: "Unexpected end of input",
          NewlineAfterThrow: "Illegal newline after throw",
          InvalidRegExp: "Invalid regular expression",
          UnterminatedRegExp: "Invalid regular expression: missing /",
          InvalidLHSInAssignment: "Invalid left-hand side in assignment",
          InvalidLHSInForIn: "Invalid left-hand side in for-in",
          MultipleDefaultsInSwitch: "More than one default clause in switch statement",
          NoCatchOrFinally: "Missing catch or finally after try",
          UnknownLabel: "Undefined label '%0'",
          Redeclaration: "%0 '%1' has already been declared",
          IllegalContinue: "Illegal continue statement",
          IllegalBreak: "Illegal break statement",
          IllegalReturn: "Illegal return statement",
          StrictModeWith: "Strict mode code may not include a with statement",
          StrictCatchVariable: "Catch variable may not be eval or arguments in strict mode",
          StrictVarName: "Variable name may not be eval or arguments in strict mode",
          StrictParamName: "Parameter name eval or arguments is not allowed in strict mode",
          StrictParamDupe: "Strict mode function may not have duplicate parameter names",
          StrictFunctionName: "Function name may not be eval or arguments in strict mode",
          StrictOctalLiteral: "Octal literals are not allowed in strict mode.",
          StrictDelete: "Delete of an unqualified identifier in strict mode.",
          StrictDuplicateProperty: "Duplicate data property in object literal not allowed in strict mode",
          AccessorDataProperty: "Object literal may not have data and accessor property with the same name",
          AccessorGetSet: "Object literal may not have multiple get/set accessors with the same name",
          StrictLHSAssignment: "Assignment to eval or arguments is not allowed in strict mode",
          StrictLHSPostfix: "Postfix increment/decrement may not have eval or arguments operand in strict mode",
          StrictLHSPrefix: "Prefix increment/decrement may not have eval or arguments operand in strict mode",
          StrictReservedWord: "Use of future reserved word in strict mode"
        }, v = {
          NonAsciiIdentifierStart: new RegExp("[ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]"),
          NonAsciiIdentifierPart: new RegExp("[ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ̀-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ҃-҇Ҋ-ԧԱ-Ֆՙա-և֑-ׇֽֿׁׂׅׄא-תװ-ײؐ-ؚؠ-٩ٮ-ۓە-ۜ۟-۪ۨ-ۼۿܐ-݊ݍ-ޱ߀-ߵߺࠀ-࠭ࡀ-࡛ࢠࢢ-ࢬࣤ-ࣾऀ-ॣ०-९ॱ-ॷॹ-ॿঁ-ঃঅ-ঌএঐও-নপ-রলশ-হ়-ৄেৈো-ৎৗড়ঢ়য়-ৣ০-ৱਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹ਼ਾ-ੂੇੈੋ-੍ੑਖ਼-ੜਫ਼੦-ੵઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હ઼-ૅે-ૉો-્ૐૠ-ૣ૦-૯ଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହ଼-ୄେୈୋ-୍ୖୗଡ଼ଢ଼ୟ-ୣ୦-୯ୱஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-்ௐௗ௦-௯ఁ-ఃఅ-ఌఎ-ఐఒ-నప-ళవ-హఽ-ౄె-ైొ-్ౕౖౘౙౠ-ౣ౦-౯ಂಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ಼-ೄೆ-ೈೊ-್ೕೖೞೠ-ೣ೦-೯ೱೲംഃഅ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൎൗൠ-ൣ൦-൯ൺ-ൿංඃඅ-ඖක-නඳ-රලව-ෆ්ා-ුූෘ-ෟෲෳก-ฺเ-๎๐-๙ກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ູົ-ຽເ-ໄໆ່-ໍ໐-໙ໜ-ໟༀ༘༙༠-༩༹༵༷༾-ཇཉ-ཬཱ-྄྆-ྗྙ-ྼ࿆က-၉ၐ-ႝႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፝-፟ᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-᜔ᜠ-᜴ᝀ-ᝓᝠ-ᝬᝮ-ᝰᝲᝳក-៓ៗៜ៝០-៩᠋-᠍᠐-᠙ᠠ-ᡷᢀ-ᢪᢰ-ᣵᤀ-ᤜᤠ-ᤫᤰ-᤻᥆-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉ᧐-᧙ᨀ-ᨛᨠ-ᩞ᩠-᩿᩼-᪉᪐-᪙ᪧᬀ-ᭋ᭐-᭙᭫-᭳ᮀ-᯳ᰀ-᰷᱀-᱉ᱍ-ᱽ᳐-᳔᳒-ᳶᴀ-ᷦ᷼-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‌‍‿⁀⁔ⁱⁿₐ-ₜ⃐-⃥⃜⃡-⃰ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯ⵿-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⷠ-ⷿⸯ々-〇〡-〯〱-〵〸-〼ぁ-ゖ゙゚ゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘫꙀ-꙯ꙴ-꙽ꙿ-ꚗꚟ-꛱ꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠧꡀ-ꡳꢀ-꣄꣐-꣙꣠-ꣷꣻ꤀-꤭ꤰ-꥓ꥠ-ꥼꦀ-꧀ꧏ-꧙ꨀ-ꨶꩀ-ꩍ꩐-꩙ꩠ-ꩶꩺꩻꪀ-ꫂꫛ-ꫝꫠ-ꫯꫲ-꫶ꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯪ꯬꯭꯰-꯹가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ︀-️︠-︦︳︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]")
        };
        function q(h, S) {
          if (!h)
            throw new Error("ASSERT: " + S);
        }
        function J(h) {
          return h >= 48 && h <= 57;
        }
        function oe(h) {
          return "0123456789abcdefABCDEF".indexOf(h) >= 0;
        }
        function ae(h) {
          return "01234567".indexOf(h) >= 0;
        }
        function he(h) {
          return h === 32 || h === 9 || h === 11 || h === 12 || h === 160 || h >= 5760 && [5760, 6158, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279].indexOf(h) >= 0;
        }
        function de(h) {
          return h === 10 || h === 13 || h === 8232 || h === 8233;
        }
        function Ae(h) {
          return h == 64 || h === 36 || h === 95 || // $ (dollar) and _ (underscore)
          h >= 65 && h <= 90 || // A..Z
          h >= 97 && h <= 122 || // a..z
          h === 92 || // \ (backslash)
          h >= 128 && v.NonAsciiIdentifierStart.test(String.fromCharCode(h));
        }
        function fe(h) {
          return h === 36 || h === 95 || // $ (dollar) and _ (underscore)
          h >= 65 && h <= 90 || // A..Z
          h >= 97 && h <= 122 || // a..z
          h >= 48 && h <= 57 || // 0..9
          h === 92 || // \ (backslash)
          h >= 128 && v.NonAsciiIdentifierPart.test(String.fromCharCode(h));
        }
        function Be(h) {
          switch (h) {
            case "class":
            case "enum":
            case "export":
            case "extends":
            case "import":
            case "super":
              return !0;
            default:
              return !1;
          }
        }
        function be(h) {
          switch (h) {
            case "implements":
            case "interface":
            case "package":
            case "private":
            case "protected":
            case "public":
            case "static":
            case "yield":
            case "let":
              return !0;
            default:
              return !1;
          }
        }
        function ve(h) {
          return h === "eval" || h === "arguments";
        }
        function We(h) {
          if (E && be(h))
            return !0;
          switch (h.length) {
            case 2:
              return h === "if" || h === "in" || h === "do";
            case 3:
              return h === "var" || h === "for" || h === "new" || h === "try" || h === "let";
            case 4:
              return h === "this" || h === "else" || h === "case" || h === "void" || h === "with" || h === "enum";
            case 5:
              return h === "while" || h === "break" || h === "catch" || h === "throw" || h === "const" || h === "yield" || h === "class" || h === "super";
            case 6:
              return h === "return" || h === "typeof" || h === "delete" || h === "switch" || h === "export" || h === "import";
            case 7:
              return h === "default" || h === "finally" || h === "extends";
            case 8:
              return h === "function" || h === "continue" || h === "debugger";
            case 10:
              return h === "instanceof";
            default:
              return !1;
          }
        }
        function we(h, S, N, W, ee) {
          var le;
          q(typeof N == "number", "Comment must have valid position"), !(L.lastCommentStart >= N) && (L.lastCommentStart = N, le = {
            type: h,
            value: S
          }, T.range && (le.range = [N, W]), T.loc && (le.loc = ee), T.comments.push(le), T.attachComment && (T.leadingComments.push(le), T.trailingComments.push(le)));
        }
        function pe(h) {
          var S, N, W, ee;
          for (S = b - h, N = {
            start: {
              line: D,
              column: b - j - h
            }
          }; b < C; )
            if (W = A.charCodeAt(b), ++b, de(W)) {
              T.comments && (ee = A.slice(S + h, b - 1), N.end = {
                line: D,
                column: b - j - 1
              }, we("Line", ee, S, b - 1, N)), W === 13 && A.charCodeAt(b) === 10 && ++b, ++D, j = b;
              return;
            }
          T.comments && (ee = A.slice(S + h, b), N.end = {
            line: D,
            column: b - j
          }, we("Line", ee, S, b, N));
        }
        function je() {
          var h, S, N, W;
          for (T.comments && (h = b - 2, S = {
            start: {
              line: D,
              column: b - j - 2
            }
          }); b < C; )
            if (N = A.charCodeAt(b), de(N))
              N === 13 && A.charCodeAt(b + 1) === 10 && ++b, ++D, ++b, j = b, b >= C && ge({}, p.UnexpectedToken, "ILLEGAL");
            else if (N === 42) {
              if (A.charCodeAt(b + 1) === 47) {
                ++b, ++b, T.comments && (W = A.slice(h + 2, b - 2), S.end = {
                  line: D,
                  column: b - j
                }, we("Block", W, h, b, S));
                return;
              }
              ++b;
            } else
              ++b;
          ge({}, p.UnexpectedToken, "ILLEGAL");
        }
        function G() {
          var h, S;
          for (S = b === 0; b < C; )
            if (h = A.charCodeAt(b), he(h))
              ++b;
            else if (de(h))
              ++b, h === 13 && A.charCodeAt(b) === 10 && ++b, ++D, j = b, S = !0;
            else if (h === 47)
              if (h = A.charCodeAt(b + 1), h === 47)
                ++b, ++b, pe(2), S = !0;
              else if (h === 42)
                ++b, ++b, je();
              else
                break;
            else if (S && h === 45)
              if (A.charCodeAt(b + 1) === 45 && A.charCodeAt(b + 2) === 62)
                b += 3, pe(3);
              else
                break;
            else if (h === 60)
              if (A.slice(b + 1, b + 4) === "!--")
                ++b, ++b, ++b, ++b, pe(4);
              else
                break;
            else
              break;
        }
        function X(h) {
          var S, N, W, ee = 0;
          for (N = h === "u" ? 4 : 2, S = 0; S < N; ++S)
            if (b < C && oe(A[b]))
              W = A[b++], ee = ee * 16 + "0123456789abcdef".indexOf(W.toLowerCase());
            else
              return "";
          return String.fromCharCode(ee);
        }
        function ie() {
          var h, S;
          for (h = A.charCodeAt(b++), S = String.fromCharCode(h), h === 92 && (A.charCodeAt(b) !== 117 && ge({}, p.UnexpectedToken, "ILLEGAL"), ++b, h = X("u"), (!h || h === "\\" || !Ae(h.charCodeAt(0))) && ge({}, p.UnexpectedToken, "ILLEGAL"), S = h); b < C && (h = A.charCodeAt(b), !!fe(h)); )
            ++b, S += String.fromCharCode(h), h === 92 && (S = S.substr(0, S.length - 1), A.charCodeAt(b) !== 117 && ge({}, p.UnexpectedToken, "ILLEGAL"), ++b, h = X("u"), (!h || h === "\\" || !fe(h.charCodeAt(0))) && ge({}, p.UnexpectedToken, "ILLEGAL"), S += h);
          return S;
        }
        function Te() {
          var h, S;
          for (h = b++; b < C; ) {
            if (S = A.charCodeAt(b), S === 92)
              return b = h, ie();
            if (fe(S))
              ++b;
            else
              break;
          }
          return A.slice(h, b);
        }
        function Me() {
          var h, S, N;
          return h = b, S = A.charCodeAt(b) === 92 ? ie() : Te(), S.length === 1 ? N = u.Identifier : We(S) ? N = u.Keyword : S === "null" ? N = u.NullLiteral : S === "true" || S === "false" ? N = u.BooleanLiteral : N = u.Identifier, {
            type: N,
            value: S,
            lineNumber: D,
            lineStart: j,
            start: h,
            end: b
          };
        }
        function Ee() {
          var h = b, S = A.charCodeAt(b), N, W = A[b], ee, le, Ke;
          switch (S) {
            case 46:
            case 40:
            case 41:
            case 59:
            case 44:
            case 123:
            case 125:
            case 91:
            case 93:
            case 58:
            case 63:
            case 126:
              return ++b, T.tokenize && (S === 40 ? T.openParenToken = T.tokens.length : S === 123 && (T.openCurlyToken = T.tokens.length)), {
                type: u.Punctuator,
                value: String.fromCharCode(S),
                lineNumber: D,
                lineStart: j,
                start: h,
                end: b
              };
            default:
              if (N = A.charCodeAt(b + 1), N === 61)
                switch (S) {
                  case 43:
                  case 45:
                  case 47:
                  case 60:
                  case 62:
                  case 94:
                  case 124:
                  case 37:
                  case 38:
                  case 42:
                    return b += 2, {
                      type: u.Punctuator,
                      value: String.fromCharCode(S) + String.fromCharCode(N),
                      lineNumber: D,
                      lineStart: j,
                      start: h,
                      end: b
                    };
                  case 33:
                  case 61:
                    return b += 2, A.charCodeAt(b) === 61 && ++b, {
                      type: u.Punctuator,
                      value: A.slice(h, b),
                      lineNumber: D,
                      lineStart: j,
                      start: h,
                      end: b
                    };
                }
          }
          if (Ke = A.substr(b, 4), Ke === ">>>=")
            return b += 4, {
              type: u.Punctuator,
              value: Ke,
              lineNumber: D,
              lineStart: j,
              start: h,
              end: b
            };
          if (le = Ke.substr(0, 3), le === ">>>" || le === "<<=" || le === ">>=")
            return b += 3, {
              type: u.Punctuator,
              value: le,
              lineNumber: D,
              lineStart: j,
              start: h,
              end: b
            };
          if (ee = le.substr(0, 2), W === ee[1] && "+-<>&|".indexOf(W) >= 0 || ee === "=>")
            return b += 2, {
              type: u.Punctuator,
              value: ee,
              lineNumber: D,
              lineStart: j,
              start: h,
              end: b
            };
          if ("<>=!+-*%&|^/".indexOf(W) >= 0)
            return ++b, {
              type: u.Punctuator,
              value: W,
              lineNumber: D,
              lineStart: j,
              start: h,
              end: b
            };
          ge({}, p.UnexpectedToken, "ILLEGAL");
        }
        function Ie(h) {
          for (var S = ""; b < C && oe(A[b]); )
            S += A[b++];
          return S.length === 0 && ge({}, p.UnexpectedToken, "ILLEGAL"), Ae(A.charCodeAt(b)) && ge({}, p.UnexpectedToken, "ILLEGAL"), {
            type: u.NumericLiteral,
            value: parseInt("0x" + S, 16),
            lineNumber: D,
            lineStart: j,
            start: h,
            end: b
          };
        }
        function _e(h) {
          for (var S = "0" + A[b++]; b < C && ae(A[b]); )
            S += A[b++];
          return (Ae(A.charCodeAt(b)) || J(A.charCodeAt(b))) && ge({}, p.UnexpectedToken, "ILLEGAL"), {
            type: u.NumericLiteral,
            value: parseInt(S, 8),
            octal: !0,
            lineNumber: D,
            lineStart: j,
            start: h,
            end: b
          };
        }
        function De() {
          var h, S, N;
          if (N = A[b], q(
            J(N.charCodeAt(0)) || N === ".",
            "Numeric literal must start with a decimal digit or a decimal point"
          ), S = b, h = "", N !== ".") {
            if (h = A[b++], N = A[b], h === "0") {
              if (N === "x" || N === "X")
                return ++b, Ie(S);
              if (ae(N))
                return _e(S);
              N && J(N.charCodeAt(0)) && ge({}, p.UnexpectedToken, "ILLEGAL");
            }
            for (; J(A.charCodeAt(b)); )
              h += A[b++];
            N = A[b];
          }
          if (N === ".") {
            for (h += A[b++]; J(A.charCodeAt(b)); )
              h += A[b++];
            N = A[b];
          }
          if (N === "e" || N === "E")
            if (h += A[b++], N = A[b], (N === "+" || N === "-") && (h += A[b++]), J(A.charCodeAt(b)))
              for (; J(A.charCodeAt(b)); )
                h += A[b++];
            else
              ge({}, p.UnexpectedToken, "ILLEGAL");
          return Ae(A.charCodeAt(b)) && ge({}, p.UnexpectedToken, "ILLEGAL"), {
            type: u.NumericLiteral,
            value: parseFloat(h),
            lineNumber: D,
            lineStart: j,
            start: S,
            end: b
          };
        }
        function _t() {
          var h = "", S, N, W, ee, le, Ke, pt = !1, en, Wt;
          for (en = D, Wt = j, S = A[b], q(
            S === "'" || S === '"',
            "String literal must starts with a quote"
          ), N = b, ++b; b < C; )
            if (W = A[b++], W === S) {
              S = "";
              break;
            } else if (W === "\\")
              if (W = A[b++], !W || !de(W.charCodeAt(0)))
                switch (W) {
                  case "u":
                  case "x":
                    Ke = b, le = X(W), le ? h += le : (b = Ke, h += W);
                    break;
                  case "n":
                    h += `
`;
                    break;
                  case "r":
                    h += "\r";
                    break;
                  case "t":
                    h += "	";
                    break;
                  case "b":
                    h += "\b";
                    break;
                  case "f":
                    h += "\f";
                    break;
                  case "v":
                    h += "\v";
                    break;
                  default:
                    ae(W) ? (ee = "01234567".indexOf(W), ee !== 0 && (pt = !0), b < C && ae(A[b]) && (pt = !0, ee = ee * 8 + "01234567".indexOf(A[b++]), "0123".indexOf(W) >= 0 && b < C && ae(A[b]) && (ee = ee * 8 + "01234567".indexOf(A[b++]))), h += String.fromCharCode(ee)) : h += W;
                    break;
                }
              else
                ++D, W === "\r" && A[b] === `
` && ++b, j = b;
            else {
              if (de(W.charCodeAt(0)))
                break;
              h += W;
            }
          return S !== "" && ge({}, p.UnexpectedToken, "ILLEGAL"), {
            type: u.StringLiteral,
            value: h,
            octal: pt,
            startLineNumber: en,
            startLineStart: Wt,
            lineNumber: D,
            lineStart: j,
            start: N,
            end: b
          };
        }
        function on(h, S) {
          var N;
          try {
            N = new RegExp(h, S);
          } catch {
            ge({}, p.InvalidRegExp);
          }
          return N;
        }
        function Rt() {
          var h, S, N, W, ee;
          for (h = A[b], q(h === "/", "Regular expression literal must start with a slash"), S = A[b++], N = !1, W = !1; b < C; )
            if (h = A[b++], S += h, h === "\\")
              h = A[b++], de(h.charCodeAt(0)) && ge({}, p.UnterminatedRegExp), S += h;
            else if (de(h.charCodeAt(0)))
              ge({}, p.UnterminatedRegExp);
            else if (N)
              h === "]" && (N = !1);
            else if (h === "/") {
              W = !0;
              break;
            } else h === "[" && (N = !0);
          return W || ge({}, p.UnterminatedRegExp), ee = S.substr(1, S.length - 2), {
            value: ee,
            literal: S
          };
        }
        function jt() {
          var h, S, N, W;
          for (S = "", N = ""; b < C && (h = A[b], !!fe(h.charCodeAt(0))); )
            if (++b, h === "\\" && b < C)
              if (h = A[b], h === "u") {
                if (++b, W = b, h = X("u"), h)
                  for (N += h, S += "\\u"; W < b; ++W)
                    S += A[W];
                else
                  b = W, N += "u", S += "\\u";
                Ce({}, p.UnexpectedToken, "ILLEGAL");
              } else
                S += "\\", Ce({}, p.UnexpectedToken, "ILLEGAL");
            else
              N += h, S += h;
          return {
            value: N,
            literal: S
          };
        }
        function Nt() {
          var h, S, N, W;
          return F = null, G(), h = b, S = Rt(), N = jt(), W = on(S.value, N.value), T.tokenize ? {
            type: u.RegularExpression,
            value: W,
            lineNumber: D,
            lineStart: j,
            start: h,
            end: b
          } : {
            literal: S.literal + N.literal,
            value: W,
            start: h,
            end: b
          };
        }
        function wt() {
          var h, S, N, W;
          return G(), h = b, S = {
            start: {
              line: D,
              column: b - j
            }
          }, N = Nt(), S.end = {
            line: D,
            column: b - j
          }, T.tokenize || (T.tokens.length > 0 && (W = T.tokens[T.tokens.length - 1], W.range[0] === h && W.type === "Punctuator" && (W.value === "/" || W.value === "/=") && T.tokens.pop()), T.tokens.push({
            type: "RegularExpression",
            value: N.literal,
            range: [h, b],
            loc: S
          })), N;
        }
        function In(h) {
          return h.type === u.Identifier || h.type === u.Keyword || h.type === u.BooleanLiteral || h.type === u.NullLiteral;
        }
        function En() {
          var h, S;
          if (h = T.tokens[T.tokens.length - 1], !h)
            return wt();
          if (h.type === "Punctuator") {
            if (h.value === "]")
              return Ee();
            if (h.value === ")")
              return S = T.tokens[T.openParenToken - 1], S && S.type === "Keyword" && (S.value === "if" || S.value === "while" || S.value === "for" || S.value === "with") ? wt() : Ee();
            if (h.value === "}") {
              if (T.tokens[T.openCurlyToken - 3] && T.tokens[T.openCurlyToken - 3].type === "Keyword") {
                if (S = T.tokens[T.openCurlyToken - 4], !S)
                  return Ee();
              } else if (T.tokens[T.openCurlyToken - 4] && T.tokens[T.openCurlyToken - 4].type === "Keyword") {
                if (S = T.tokens[T.openCurlyToken - 5], !S)
                  return wt();
              } else
                return Ee();
              return f.indexOf(S.value) >= 0 ? Ee() : wt();
            }
            return wt();
          }
          return h.type === "Keyword" ? wt() : Ee();
        }
        function Se() {
          var h;
          return G(), b >= C ? {
            type: u.EOF,
            lineNumber: D,
            lineStart: j,
            start: b,
            end: b
          } : (h = A.charCodeAt(b), Ae(h) ? Me() : h === 40 || h === 41 || h === 59 ? Ee() : h === 39 || h === 34 ? _t() : h === 46 ? J(A.charCodeAt(b + 1)) ? De() : Ee() : J(h) ? De() : T.tokenize && h === 47 ? En() : Ee());
        }
        function Fe() {
          var h, S, N;
          return G(), h = {
            start: {
              line: D,
              column: b - j
            }
          }, S = Se(), h.end = {
            line: D,
            column: b - j
          }, S.type !== u.EOF && (N = A.slice(S.start, S.end), T.tokens.push({
            type: l[S.type],
            value: N,
            range: [S.start, S.end],
            loc: h
          })), S;
        }
        function ce() {
          var h;
          return h = F, b = h.end, D = h.lineNumber, j = h.lineStart, F = typeof T.tokens < "u" ? Fe() : Se(), b = h.end, D = h.lineNumber, j = h.lineStart, h;
        }
        function vt() {
          var h, S, N;
          h = b, S = D, N = j, F = typeof T.tokens < "u" ? Fe() : Se(), b = h, D = S, j = N;
        }
        function xt(h, S) {
          this.line = h, this.column = S;
        }
        function At(h, S, N, W) {
          this.start = new xt(h, S), this.end = new xt(N, W);
        }
        _ = {
          name: "SyntaxTree",
          processComment: function(h) {
            var S, N;
            if (!(h.type === d.Program && h.body.length > 0)) {
              for (T.trailingComments.length > 0 ? T.trailingComments[0].range[0] >= h.range[1] ? (N = T.trailingComments, T.trailingComments = []) : T.trailingComments.length = 0 : T.bottomRightStack.length > 0 && T.bottomRightStack[T.bottomRightStack.length - 1].trailingComments && T.bottomRightStack[T.bottomRightStack.length - 1].trailingComments[0].range[0] >= h.range[1] && (N = T.bottomRightStack[T.bottomRightStack.length - 1].trailingComments, delete T.bottomRightStack[T.bottomRightStack.length - 1].trailingComments); T.bottomRightStack.length > 0 && T.bottomRightStack[T.bottomRightStack.length - 1].range[0] >= h.range[0]; )
                S = T.bottomRightStack.pop();
              S ? S.leadingComments && S.leadingComments[S.leadingComments.length - 1].range[1] <= h.range[0] && (h.leadingComments = S.leadingComments, delete S.leadingComments) : T.leadingComments.length > 0 && T.leadingComments[T.leadingComments.length - 1].range[1] <= h.range[0] && (h.leadingComments = T.leadingComments, T.leadingComments = []), N && (h.trailingComments = N), T.bottomRightStack.push(h);
            }
          },
          markEnd: function(h, S) {
            return T.range && (h.range = [S.start, b]), T.loc && (h.loc = new At(
              S.startLineNumber === void 0 ? S.lineNumber : S.startLineNumber,
              S.start - (S.startLineStart === void 0 ? S.lineStart : S.startLineStart),
              D,
              b - j
            ), this.postProcess(h)), T.attachComment && this.processComment(h), h;
          },
          postProcess: function(h) {
            return T.source && (h.loc.source = T.source), h;
          },
          createArrayExpression: function(h) {
            return {
              type: d.ArrayExpression,
              elements: h
            };
          },
          createAssignmentExpression: function(h, S, N) {
            return {
              type: d.AssignmentExpression,
              operator: h,
              left: S,
              right: N
            };
          },
          createBinaryExpression: function(h, S, N) {
            var W = h === "||" || h === "&&" ? d.LogicalExpression : d.BinaryExpression;
            return {
              type: W,
              operator: h,
              left: S,
              right: N
            };
          },
          createBlockStatement: function(h) {
            return {
              type: d.BlockStatement,
              body: h
            };
          },
          createBreakStatement: function(h) {
            return {
              type: d.BreakStatement,
              label: h
            };
          },
          createCallExpression: function(h, S) {
            return {
              type: d.CallExpression,
              callee: h,
              arguments: S
            };
          },
          createCatchClause: function(h, S) {
            return {
              type: d.CatchClause,
              param: h,
              body: S
            };
          },
          createConditionalExpression: function(h, S, N) {
            return {
              type: d.ConditionalExpression,
              test: h,
              consequent: S,
              alternate: N
            };
          },
          createContinueStatement: function(h) {
            return {
              type: d.ContinueStatement,
              label: h
            };
          },
          createDebuggerStatement: function() {
            return {
              type: d.DebuggerStatement
            };
          },
          createDoWhileStatement: function(h, S) {
            return {
              type: d.DoWhileStatement,
              body: h,
              test: S
            };
          },
          createEmptyStatement: function() {
            return {
              type: d.EmptyStatement
            };
          },
          createExpressionStatement: function(h) {
            return {
              type: d.ExpressionStatement,
              expression: h
            };
          },
          createForStatement: function(h, S, N, W) {
            return {
              type: d.ForStatement,
              init: h,
              test: S,
              update: N,
              body: W
            };
          },
          createForInStatement: function(h, S, N) {
            return {
              type: d.ForInStatement,
              left: h,
              right: S,
              body: N,
              each: !1
            };
          },
          createFunctionDeclaration: function(h, S, N, W) {
            return {
              type: d.FunctionDeclaration,
              id: h,
              params: S,
              defaults: N,
              body: W,
              rest: null,
              generator: !1,
              expression: !1
            };
          },
          createFunctionExpression: function(h, S, N, W) {
            return {
              type: d.FunctionExpression,
              id: h,
              params: S,
              defaults: N,
              body: W,
              rest: null,
              generator: !1,
              expression: !1
            };
          },
          createIdentifier: function(h) {
            return {
              type: d.Identifier,
              name: h
            };
          },
          createIfStatement: function(h, S, N) {
            return {
              type: d.IfStatement,
              test: h,
              consequent: S,
              alternate: N
            };
          },
          createLabeledStatement: function(h, S) {
            return {
              type: d.LabeledStatement,
              label: h,
              body: S
            };
          },
          createLiteral: function(h) {
            return {
              type: d.Literal,
              value: h.value,
              raw: A.slice(h.start, h.end)
            };
          },
          createMemberExpression: function(h, S, N) {
            return {
              type: d.MemberExpression,
              computed: h === "[",
              object: S,
              property: N
            };
          },
          createNewExpression: function(h, S) {
            return {
              type: d.NewExpression,
              callee: h,
              arguments: S
            };
          },
          createObjectExpression: function(h) {
            return {
              type: d.ObjectExpression,
              properties: h
            };
          },
          createPostfixExpression: function(h, S) {
            return {
              type: d.UpdateExpression,
              operator: h,
              argument: S,
              prefix: !1
            };
          },
          createProgram: function(h) {
            return {
              type: d.Program,
              body: h
            };
          },
          createProperty: function(h, S, N) {
            return {
              type: d.Property,
              key: S,
              value: N,
              kind: h
            };
          },
          createReturnStatement: function(h) {
            return {
              type: d.ReturnStatement,
              argument: h
            };
          },
          createSequenceExpression: function(h) {
            return {
              type: d.SequenceExpression,
              expressions: h
            };
          },
          createSwitchCase: function(h, S) {
            return {
              type: d.SwitchCase,
              test: h,
              consequent: S
            };
          },
          createSwitchStatement: function(h, S) {
            return {
              type: d.SwitchStatement,
              discriminant: h,
              cases: S
            };
          },
          createThisExpression: function() {
            return {
              type: d.ThisExpression
            };
          },
          createThrowStatement: function(h) {
            return {
              type: d.ThrowStatement,
              argument: h
            };
          },
          createTryStatement: function(h, S, N, W) {
            return {
              type: d.TryStatement,
              block: h,
              guardedHandlers: S,
              handlers: N,
              finalizer: W
            };
          },
          createUnaryExpression: function(h, S) {
            return h === "++" || h === "--" ? {
              type: d.UpdateExpression,
              operator: h,
              argument: S,
              prefix: !0
            } : {
              type: d.UnaryExpression,
              operator: h,
              argument: S,
              prefix: !0
            };
          },
          createVariableDeclaration: function(h, S) {
            return {
              type: d.VariableDeclaration,
              declarations: h,
              kind: S
            };
          },
          createVariableDeclarator: function(h, S) {
            return {
              type: d.VariableDeclarator,
              id: h,
              init: S
            };
          },
          createWhileStatement: function(h, S) {
            return {
              type: d.WhileStatement,
              test: h,
              body: S
            };
          },
          createWithStatement: function(h, S) {
            return {
              type: d.WithStatement,
              object: h,
              body: S
            };
          }
        };
        function et() {
          var h, S, N, W;
          return h = b, S = D, N = j, G(), W = D !== S, b = h, D = S, j = N, W;
        }
        function ge(h, S) {
          var N, W = Array.prototype.slice.call(arguments, 2), ee = S.replace(
            /%(\d)/g,
            function(le, Ke) {
              return q(Ke < W.length, "Message reference must be in range"), W[Ke];
            }
          );
          throw typeof h.lineNumber == "number" ? (N = new Error("Line " + h.lineNumber + ": " + ee), N.index = h.start, N.lineNumber = h.lineNumber, N.column = h.start - j + 1) : (N = new Error("Line " + D + ": " + ee), N.index = b, N.lineNumber = D, N.column = b - j + 1), N.description = ee, N;
        }
        function Ce() {
          try {
            ge.apply(null, arguments);
          } catch (h) {
            if (T.errors)
              T.errors.push(h);
            else
              throw h;
          }
        }
        function at(h) {
          if (h.type === u.EOF && ge(h, p.UnexpectedEOS), h.type === u.NumericLiteral && ge(h, p.UnexpectedNumber), h.type === u.StringLiteral && ge(h, p.UnexpectedString), h.type === u.Identifier && ge(h, p.UnexpectedIdentifier), h.type === u.Keyword) {
            if (Be(h.value))
              ge(h, p.UnexpectedReserved);
            else if (E && be(h.value)) {
              Ce(h, p.StrictReservedWord);
              return;
            }
            ge(h, p.UnexpectedToken, h.value);
          }
          ge(h, p.UnexpectedToken, h.value);
        }
        function I(h) {
          var S = ce();
          (S.type !== u.Punctuator || S.value !== h) && at(S);
        }
        function y(h) {
          var S = ce();
          (S.type !== u.Keyword || S.value !== h) && at(S);
        }
        function w(h) {
          return F.type === u.Punctuator && F.value === h;
        }
        function R(h) {
          return F.type === u.Keyword && F.value === h;
        }
        function V() {
          var h;
          return F.type !== u.Punctuator ? !1 : (h = F.value, h === "=" || h === "*=" || h === "/=" || h === "%=" || h === "+=" || h === "-=" || h === "<<=" || h === ">>=" || h === ">>>=" || h === "&=" || h === "^=" || h === "|=");
        }
        function z() {
          var h;
          if (A.charCodeAt(b) === 59 || w(";")) {
            ce();
            return;
          }
          h = D, G(), D === h && F.type !== u.EOF && !w("}") && at(F);
        }
        function Q(h) {
          return h.type === d.Identifier || h.type === d.MemberExpression;
        }
        function Ne() {
          var h = [], S;
          for (S = F, I("["); !w("]"); )
            w(",") ? (ce(), h.push(null)) : (h.push(yn()), w("]") || I(","));
          return ce(), O.markEnd(O.createArrayExpression(h), S);
        }
        function dt(h, S) {
          var N, W, ee;
          return N = E, ee = F, W = Ki(), S && E && ve(h[0].name) && Ce(S, p.StrictParamName), E = N, O.markEnd(O.createFunctionExpression(null, h, [], W), ee);
        }
        function ut() {
          var h, S;
          return S = F, h = ce(), h.type === u.StringLiteral || h.type === u.NumericLiteral ? (E && h.octal && Ce(h, p.StrictOctalLiteral), O.markEnd(O.createLiteral(h), S)) : O.markEnd(O.createIdentifier(h.value), S);
        }
        function ft() {
          var h, S, N, W, ee, le;
          if (h = F, le = F, h.type === u.Identifier)
            return N = ut(), h.value === "get" && !w(":") ? (S = ut(), I("("), I(")"), W = dt([]), O.markEnd(O.createProperty("get", S, W), le)) : h.value === "set" && !w(":") ? (S = ut(), I("("), h = F, h.type !== u.Identifier ? (I(")"), Ce(h, p.UnexpectedToken, h.value), W = dt([])) : (ee = [Oe()], I(")"), W = dt(ee, h)), O.markEnd(O.createProperty("set", S, W), le)) : (I(":"), W = yn(), O.markEnd(O.createProperty("init", N, W), le));
          if (h.type === u.EOF || h.type === u.Punctuator)
            at(h);
          else
            return S = ut(), I(":"), W = yn(), O.markEnd(O.createProperty("init", S, W), le);
        }
        function rt() {
          var h = [], S, N, W, ee, le = {}, Ke = String, pt;
          for (pt = F, I("{"); !w("}"); )
            S = ft(), S.key.type === d.Identifier ? N = S.key.name : N = Ke(S.key.value), ee = S.kind === "init" ? g.Data : S.kind === "get" ? g.Get : g.Set, W = "$" + N, Object.prototype.hasOwnProperty.call(le, W) ? (le[W] === g.Data ? E && ee === g.Data ? Ce({}, p.StrictDuplicateProperty) : ee !== g.Data && Ce({}, p.AccessorDataProperty) : ee === g.Data ? Ce({}, p.AccessorDataProperty) : le[W] & ee && Ce({}, p.AccessorGetSet), le[W] |= ee) : le[W] = ee, h.push(S), w("}") || I(",");
          return I("}"), O.markEnd(O.createObjectExpression(h), pt);
        }
        function Hr() {
          var h;
          return I("("), h = M(), I(")"), h;
        }
        function di() {
          var h, S, N, W;
          if (w("("))
            return Hr();
          if (w("["))
            return Ne();
          if (w("{"))
            return rt();
          if (h = F.type, W = F, h === u.Identifier)
            N = O.createIdentifier(ce().value);
          else if (h === u.StringLiteral || h === u.NumericLiteral)
            E && F.octal && Ce(F, p.StrictOctalLiteral), N = O.createLiteral(ce());
          else if (h === u.Keyword) {
            if (R("function"))
              return Pu();
            R("this") ? (ce(), N = O.createThisExpression()) : at(ce());
          } else h === u.BooleanLiteral ? (S = ce(), S.value = S.value === "true", N = O.createLiteral(S)) : h === u.NullLiteral ? (S = ce(), S.value = null, N = O.createLiteral(S)) : w("/") || w("/=") ? (typeof T.tokens < "u" ? N = O.createLiteral(wt()) : N = O.createLiteral(Nt()), vt()) : at(ce());
          return O.markEnd(N, W);
        }
        function Vi() {
          var h = [];
          if (I("("), !w(")"))
            for (; b < C && (h.push(yn()), !w(")")); )
              I(",");
          return I(")"), h;
        }
        function qi() {
          var h, S;
          return S = F, h = ce(), In(h) || at(h), O.markEnd(O.createIdentifier(h.value), S);
        }
        function Wi() {
          return I("."), qi();
        }
        function zr() {
          var h;
          return I("["), h = M(), I("]"), h;
        }
        function pi() {
          var h, S, N;
          return N = F, y("new"), h = Ns(), S = w("(") ? Vi() : [], O.markEnd(O.createNewExpression(h, S), N);
        }
        function js() {
          var h, S, N, W, ee;
          for (ee = F, h = L.allowIn, L.allowIn = !0, S = R("new") ? pi() : di(), L.allowIn = h; ; ) {
            if (w("."))
              W = Wi(), S = O.createMemberExpression(".", S, W);
            else if (w("("))
              N = Vi(), S = O.createCallExpression(S, N);
            else if (w("["))
              W = zr(), S = O.createMemberExpression("[", S, W);
            else
              break;
            O.markEnd(S, ee);
          }
          return S;
        }
        function Ns() {
          var h, S, N, W;
          for (W = F, h = L.allowIn, S = R("new") ? pi() : di(), L.allowIn = h; w(".") || w("["); )
            w("[") ? (N = zr(), S = O.createMemberExpression("[", S, N)) : (N = Wi(), S = O.createMemberExpression(".", S, N)), O.markEnd(S, W);
          return S;
        }
        function Tr() {
          var h, S, N = F;
          return h = js(), F.type === u.Punctuator && (w("++") || w("--")) && !et() && (E && h.type === d.Identifier && ve(h.name) && Ce({}, p.StrictLHSPostfix), Q(h) || Ce({}, p.InvalidLHSInAssignment), S = ce(), h = O.markEnd(O.createPostfixExpression(S.value, h), N)), h;
        }
        function rr() {
          var h, S, N;
          return F.type !== u.Punctuator && F.type !== u.Keyword ? S = Tr() : w("++") || w("--") ? (N = F, h = ce(), S = rr(), E && S.type === d.Identifier && ve(S.name) && Ce({}, p.StrictLHSPrefix), Q(S) || Ce({}, p.InvalidLHSInAssignment), S = O.createUnaryExpression(h.value, S), S = O.markEnd(S, N)) : w("+") || w("-") || w("~") || w("!") ? (N = F, h = ce(), S = rr(), S = O.createUnaryExpression(h.value, S), S = O.markEnd(S, N)) : R("delete") || R("void") || R("typeof") ? (N = F, h = ce(), S = rr(), S = O.createUnaryExpression(h.value, S), S = O.markEnd(S, N), E && S.operator === "delete" && S.argument.type === d.Identifier && Ce({}, p.StrictDelete)) : S = Tr(), S;
        }
        function Gr(h, S) {
          var N = 0;
          if (h.type !== u.Punctuator && h.type !== u.Keyword)
            return 0;
          switch (h.value) {
            case "||":
              N = 1;
              break;
            case "&&":
              N = 2;
              break;
            case "|":
              N = 3;
              break;
            case "^":
              N = 4;
              break;
            case "&":
              N = 5;
              break;
            case "==":
            case "!=":
            case "===":
            case "!==":
              N = 6;
              break;
            case "<":
            case ">":
            case "<=":
            case ">=":
            case "instanceof":
              N = 7;
              break;
            case "in":
              N = S ? 7 : 0;
              break;
            case "<<":
            case ">>":
            case ">>>":
              N = 8;
              break;
            case "+":
            case "-":
              N = 9;
              break;
            case "*":
            case "/":
            case "%":
              N = 11;
              break;
          }
          return N;
        }
        function $s() {
          var h, S, N, W, ee, le, Ke, pt, en, Wt;
          if (h = F, en = rr(), W = F, ee = Gr(W, L.allowIn), ee === 0)
            return en;
          for (W.prec = ee, ce(), S = [h, F], Ke = rr(), le = [en, W, Ke]; (ee = Gr(F, L.allowIn)) > 0; ) {
            for (; le.length > 2 && ee <= le[le.length - 2].prec; )
              Ke = le.pop(), pt = le.pop().value, en = le.pop(), N = O.createBinaryExpression(pt, en, Ke), S.pop(), h = S[S.length - 1], O.markEnd(N, h), le.push(N);
            W = ce(), W.prec = ee, le.push(W), S.push(F), N = rr(), le.push(N);
          }
          for (Wt = le.length - 1, N = le[Wt], S.pop(); Wt > 1; )
            N = O.createBinaryExpression(le[Wt - 1].value, le[Wt - 2], N), Wt -= 2, h = S.pop(), O.markEnd(N, h);
          return N;
        }
        function Ms() {
          var h, S, N, W, ee;
          return ee = F, h = $s(), w("?") && (ce(), S = L.allowIn, L.allowIn = !0, N = yn(), L.allowIn = S, I(":"), W = yn(), h = O.createConditionalExpression(h, N, W), O.markEnd(h, ee)), h;
        }
        function yn() {
          var h, S, N, W, ee;
          return h = F, ee = F, W = S = Ms(), V() && (Q(S) || Ce({}, p.InvalidLHSInAssignment), E && S.type === d.Identifier && ve(S.name) && Ce(h, p.StrictLHSAssignment), h = ce(), N = yn(), W = O.markEnd(O.createAssignmentExpression(h.value, S, N), ee)), W;
        }
        function M() {
          var h, S = F;
          if (h = yn(), w(",")) {
            for (h = O.createSequenceExpression([h]); b < C && w(","); )
              ce(), h.expressions.push(yn());
            O.markEnd(h, S);
          }
          return h;
        }
        function ue() {
          for (var h = [], S; b < C && !(w("}") || (S = Jr(), typeof S > "u")); )
            h.push(S);
          return h;
        }
        function ye() {
          var h, S;
          return S = F, I("{"), h = ue(), I("}"), O.markEnd(O.createBlockStatement(h), S);
        }
        function Oe() {
          var h, S;
          return S = F, h = ce(), h.type !== u.Identifier && at(h), O.markEnd(O.createIdentifier(h.value), S);
        }
        function ct(h) {
          var S = null, N, W;
          return W = F, N = Oe(), E && ve(N.name) && Ce({}, p.StrictVarName), h === "const" ? (I("="), S = yn()) : w("=") && (ce(), S = yn()), O.markEnd(O.createVariableDeclarator(N, S), W);
        }
        function lt(h) {
          var S = [];
          do {
            if (S.push(ct(h)), !w(","))
              break;
            ce();
          } while (b < C);
          return S;
        }
        function Xe() {
          var h;
          return y("var"), h = lt(), z(), O.createVariableDeclaration(h, "var");
        }
        function ze(h) {
          var S, N;
          return N = F, y(h), S = lt(h), z(), O.markEnd(O.createVariableDeclaration(S, h), N);
        }
        function Zt() {
          return I(";"), O.createEmptyStatement();
        }
        function It() {
          var h = M();
          return z(), O.createExpressionStatement(h);
        }
        function Dt() {
          var h, S, N;
          return y("if"), I("("), h = M(), I(")"), S = Bn(), R("else") ? (ce(), N = Bn()) : N = null, O.createIfStatement(h, S, N);
        }
        function hn() {
          var h, S, N;
          return y("do"), N = L.inIteration, L.inIteration = !0, h = Bn(), L.inIteration = N, y("while"), I("("), S = M(), I(")"), w(";") && ce(), O.createDoWhileStatement(h, S);
        }
        function Fn() {
          var h, S, N;
          return y("while"), I("("), h = M(), I(")"), N = L.inIteration, L.inIteration = !0, S = Bn(), L.inIteration = N, O.createWhileStatement(h, S);
        }
        function ir() {
          var h, S, N;
          return N = F, h = ce(), S = lt(), O.markEnd(O.createVariableDeclaration(S, h.value), N);
        }
        function qt() {
          var h, S, N, W, ee, le, Ke;
          return h = S = N = null, y("for"), I("("), w(";") ? ce() : (R("var") || R("let") ? (L.allowIn = !1, h = ir(), L.allowIn = !0, h.declarations.length === 1 && R("in") && (ce(), W = h, ee = M(), h = null)) : (L.allowIn = !1, h = M(), L.allowIn = !0, R("in") && (Q(h) || Ce({}, p.InvalidLHSInForIn), ce(), W = h, ee = M(), h = null)), typeof W > "u" && I(";")), typeof W > "u" && (w(";") || (S = M()), I(";"), w(")") || (N = M())), I(")"), Ke = L.inIteration, L.inIteration = !0, le = Bn(), L.inIteration = Ke, typeof W > "u" ? O.createForStatement(h, S, N, le) : O.createForInStatement(W, ee, le);
        }
        function gi() {
          var h = null, S;
          return y("continue"), A.charCodeAt(b) === 59 ? (ce(), L.inIteration || ge({}, p.IllegalContinue), O.createContinueStatement(null)) : et() ? (L.inIteration || ge({}, p.IllegalContinue), O.createContinueStatement(null)) : (F.type === u.Identifier && (h = Oe(), S = "$" + h.name, Object.prototype.hasOwnProperty.call(L.labelSet, S) || ge({}, p.UnknownLabel, h.name)), z(), h === null && !L.inIteration && ge({}, p.IllegalContinue), O.createContinueStatement(h));
        }
        function Us() {
          var h = null, S;
          return y("break"), A.charCodeAt(b) === 59 ? (ce(), L.inIteration || L.inSwitch || ge({}, p.IllegalBreak), O.createBreakStatement(null)) : et() ? (L.inIteration || L.inSwitch || ge({}, p.IllegalBreak), O.createBreakStatement(null)) : (F.type === u.Identifier && (h = Oe(), S = "$" + h.name, Object.prototype.hasOwnProperty.call(L.labelSet, S) || ge({}, p.UnknownLabel, h.name)), z(), h === null && !(L.inIteration || L.inSwitch) && ge({}, p.IllegalBreak), O.createBreakStatement(h));
        }
        function Vs() {
          var h = null;
          return y("return"), L.inFunctionBody || Ce({}, p.IllegalReturn), A.charCodeAt(b) === 32 && Ae(A.charCodeAt(b + 1)) ? (h = M(), z(), O.createReturnStatement(h)) : et() ? O.createReturnStatement(null) : (w(";") || !w("}") && F.type !== u.EOF && (h = M()), z(), O.createReturnStatement(h));
        }
        function $o() {
          var h, S;
          return E && (G(), Ce({}, p.StrictModeWith)), y("with"), I("("), h = M(), I(")"), S = Bn(), O.createWithStatement(h, S);
        }
        function Mo() {
          var h, S = [], N, W;
          for (W = F, R("default") ? (ce(), h = null) : (y("case"), h = M()), I(":"); b < C && !(w("}") || R("default") || R("case")); )
            N = Bn(), S.push(N);
          return O.markEnd(O.createSwitchCase(h, S), W);
        }
        function Uo() {
          var h, S, N, W, ee;
          if (y("switch"), I("("), h = M(), I(")"), I("{"), S = [], w("}"))
            return ce(), O.createSwitchStatement(h, S);
          for (W = L.inSwitch, L.inSwitch = !0, ee = !1; b < C && !w("}"); )
            N = Mo(), N.test === null && (ee && ge({}, p.MultipleDefaultsInSwitch), ee = !0), S.push(N);
          return L.inSwitch = W, I("}"), O.createSwitchStatement(h, S);
        }
        function Fu() {
          var h;
          return y("throw"), et() && ge({}, p.NewlineAfterThrow), h = M(), z(), O.createThrowStatement(h);
        }
        function Bu() {
          var h, S, N;
          return N = F, y("catch"), I("("), w(")") && at(F), h = Oe(), E && ve(h.name) && Ce({}, p.StrictCatchVariable), I(")"), S = ye(), O.markEnd(O.createCatchClause(h, S), N);
        }
        function Du() {
          var h, S = [], N = null;
          return y("try"), h = ye(), R("catch") && S.push(Bu()), R("finally") && (ce(), N = ye()), S.length === 0 && !N && ge({}, p.NoCatchOrFinally), O.createTryStatement(h, [], S, N);
        }
        function Lu() {
          return y("debugger"), z(), O.createDebuggerStatement();
        }
        function Bn() {
          var h = F.type, S, N, W, ee;
          if (h === u.EOF && at(F), h === u.Punctuator && F.value === "{")
            return ye();
          if (ee = F, h === u.Punctuator)
            switch (F.value) {
              case ";":
                return O.markEnd(Zt(), ee);
              case "(":
                return O.markEnd(It(), ee);
            }
          if (h === u.Keyword)
            switch (F.value) {
              case "break":
                return O.markEnd(Us(), ee);
              case "continue":
                return O.markEnd(gi(), ee);
              case "debugger":
                return O.markEnd(Lu(), ee);
              case "do":
                return O.markEnd(hn(), ee);
              case "for":
                return O.markEnd(qt(), ee);
              case "function":
                return O.markEnd(Hi(), ee);
              case "if":
                return O.markEnd(Dt(), ee);
              case "return":
                return O.markEnd(Vs(), ee);
              case "switch":
                return O.markEnd(Uo(), ee);
              case "throw":
                return O.markEnd(Fu(), ee);
              case "try":
                return O.markEnd(Du(), ee);
              case "var":
                return O.markEnd(Xe(), ee);
              case "while":
                return O.markEnd(Fn(), ee);
              case "with":
                return O.markEnd($o(), ee);
            }
          return S = M(), S.type === d.Identifier && w(":") ? (ce(), W = "$" + S.name, Object.prototype.hasOwnProperty.call(L.labelSet, W) && ge({}, p.Redeclaration, "Label", S.name), L.labelSet[W] = !0, N = Bn(), delete L.labelSet[W], O.markEnd(O.createLabeledStatement(S, N), ee)) : (z(), O.markEnd(O.createExpressionStatement(S), ee));
        }
        function Ki() {
          var h, S = [], N, W, ee, le, Ke, pt, en, Wt;
          for (Wt = F, I("{"); b < C && !(F.type !== u.StringLiteral || (N = F, h = Jr(), S.push(h), h.expression.type !== d.Literal)); )
            W = A.slice(N.start + 1, N.end - 1), W === "use strict" ? (E = !0, ee && Ce(ee, p.StrictOctalLiteral)) : !ee && N.octal && (ee = N);
          for (le = L.labelSet, Ke = L.inIteration, pt = L.inSwitch, en = L.inFunctionBody, L.labelSet = {}, L.inIteration = !1, L.inSwitch = !1, L.inFunctionBody = !0; b < C && !(w("}") || (h = Jr(), typeof h > "u")); )
            S.push(h);
          return I("}"), L.labelSet = le, L.inIteration = Ke, L.inSwitch = pt, L.inFunctionBody = en, O.markEnd(O.createBlockStatement(S), Wt);
        }
        function qs(h) {
          var S, N = [], W, ee, le, Ke, pt;
          if (I("("), !w(")"))
            for (le = {}; b < C && (W = F, S = Oe(), Ke = "$" + W.value, E ? (ve(W.value) && (ee = W, pt = p.StrictParamName), Object.prototype.hasOwnProperty.call(le, Ke) && (ee = W, pt = p.StrictParamDupe)) : h || (ve(W.value) ? (h = W, pt = p.StrictParamName) : be(W.value) ? (h = W, pt = p.StrictReservedWord) : Object.prototype.hasOwnProperty.call(le, Ke) && (h = W, pt = p.StrictParamDupe)), N.push(S), le[Ke] = !0, !w(")")); )
              I(",");
          return I(")"), {
            params: N,
            stricted: ee,
            firstRestricted: h,
            message: pt
          };
        }
        function Hi() {
          var h, S = [], N, W, ee, le, Ke, pt, en, Wt;
          return Wt = F, y("function"), W = F, h = Oe(), E ? ve(W.value) && Ce(W, p.StrictFunctionName) : ve(W.value) ? (Ke = W, pt = p.StrictFunctionName) : be(W.value) && (Ke = W, pt = p.StrictReservedWord), le = qs(Ke), S = le.params, ee = le.stricted, Ke = le.firstRestricted, le.message && (pt = le.message), en = E, N = Ki(), E && Ke && ge(Ke, pt), E && ee && Ce(ee, pt), E = en, O.markEnd(O.createFunctionDeclaration(h, S, [], N), Wt);
        }
        function Pu() {
          var h, S = null, N, W, ee, le, Ke = [], pt, en, Wt;
          return Wt = F, y("function"), w("(") || (h = F, S = Oe(), E ? ve(h.value) && Ce(h, p.StrictFunctionName) : ve(h.value) ? (W = h, ee = p.StrictFunctionName) : be(h.value) && (W = h, ee = p.StrictReservedWord)), le = qs(W), Ke = le.params, N = le.stricted, W = le.firstRestricted, le.message && (ee = le.message), en = E, pt = Ki(), E && W && ge(W, ee), E && N && Ce(N, ee), E = en, O.markEnd(O.createFunctionExpression(S, Ke, [], pt), Wt);
        }
        function Jr() {
          if (F.type === u.Keyword)
            switch (F.value) {
              case "const":
              case "let":
                return ze(F.value);
              case "function":
                return Hi();
              default:
                return Bn();
            }
          if (F.type !== u.EOF)
            return Bn();
        }
        function zi() {
          for (var h, S = [], N, W, ee; b < C && (N = F, !(N.type !== u.StringLiteral || (h = Jr(), S.push(h), h.expression.type !== d.Literal))); )
            W = A.slice(N.start + 1, N.end - 1), W === "use strict" ? (E = !0, ee && Ce(ee, p.StrictOctalLiteral)) : !ee && N.octal && (ee = N);
          for (; b < C && (h = Jr(), !(typeof h > "u")); )
            S.push(h);
          return S;
        }
        function Vo() {
          var h, S;
          return G(), vt(), S = F, E = !1, h = zi(), O.markEnd(O.createProgram(h), S);
        }
        function qo() {
          var h, S, N, W = [];
          for (h = 0; h < T.tokens.length; ++h)
            S = T.tokens[h], N = {
              type: S.type,
              value: S.value
            }, T.range && (N.range = S.range), T.loc && (N.loc = S.loc), W.push(N);
          T.tokens = W;
        }
        function Wo(h, S) {
          var N, W, ee;
          N = String, typeof h != "string" && !(h instanceof String) && (h = N(h)), O = _, A = h, b = 0, D = A.length > 0 ? 1 : 0, j = 0, C = A.length, F = null, L = {
            allowIn: !0,
            labelSet: {},
            inFunctionBody: !1,
            inIteration: !1,
            inSwitch: !1,
            lastCommentStart: -1
          }, T = {}, S = S || {}, S.tokens = !0, T.tokens = [], T.tokenize = !0, T.openParenToken = -1, T.openCurlyToken = -1, T.range = typeof S.range == "boolean" && S.range, T.loc = typeof S.loc == "boolean" && S.loc, typeof S.comment == "boolean" && S.comment && (T.comments = []), typeof S.tolerant == "boolean" && S.tolerant && (T.errors = []);
          try {
            if (vt(), F.type === u.EOF)
              return T.tokens;
            for (W = ce(); F.type !== u.EOF; )
              try {
                W = ce();
              } catch (le) {
                if (W = F, T.errors) {
                  T.errors.push(le);
                  break;
                } else
                  throw le;
              }
            qo(), ee = T.tokens, typeof T.comments < "u" && (ee.comments = T.comments), typeof T.errors < "u" && (ee.errors = T.errors);
          } catch (le) {
            throw le;
          } finally {
            T = {};
          }
          return ee;
        }
        function Ko(h, S) {
          var N, W;
          W = String, typeof h != "string" && !(h instanceof String) && (h = W(h)), O = _, A = h, b = 0, D = A.length > 0 ? 1 : 0, j = 0, C = A.length, F = null, L = {
            allowIn: !0,
            labelSet: {},
            inFunctionBody: !1,
            inIteration: !1,
            inSwitch: !1,
            lastCommentStart: -1
          }, T = {}, typeof S < "u" && (T.range = typeof S.range == "boolean" && S.range, T.loc = typeof S.loc == "boolean" && S.loc, T.attachComment = typeof S.attachComment == "boolean" && S.attachComment, T.loc && S.source !== null && S.source !== void 0 && (T.source = W(S.source)), typeof S.tokens == "boolean" && S.tokens && (T.tokens = []), typeof S.comment == "boolean" && S.comment && (T.comments = []), typeof S.tolerant == "boolean" && S.tolerant && (T.errors = []), T.attachComment && (T.range = !0, T.comments = [], T.bottomRightStack = [], T.trailingComments = [], T.leadingComments = []));
          try {
            N = Vo(), typeof T.comments < "u" && (N.comments = T.comments), typeof T.tokens < "u" && (qo(), N.tokens = T.tokens), typeof T.errors < "u" && (N.errors = T.errors);
          } catch (ee) {
            throw ee;
          } finally {
            T = {};
          }
          return N;
        }
        a.version = "1.2.2", a.tokenize = Wo, a.parse = Ko, a.Syntax = function() {
          var h, S = {};
          typeof Object.create == "function" && (S = /* @__PURE__ */ Object.create(null));
          for (h in d)
            d.hasOwnProperty(h) && (S[h] = d[h]);
          return typeof Object.freeze == "function" && Object.freeze(S), S;
        }();
      });
    }, {}], 1: [function(n, i, o) {
      (function(a) {
        var u = function() {
          var l = {
            trace: function() {
            },
            yy: {},
            symbols_: { error: 2, JSON_PATH: 3, DOLLAR: 4, PATH_COMPONENTS: 5, LEADING_CHILD_MEMBER_EXPRESSION: 6, PATH_COMPONENT: 7, MEMBER_COMPONENT: 8, SUBSCRIPT_COMPONENT: 9, CHILD_MEMBER_COMPONENT: 10, DESCENDANT_MEMBER_COMPONENT: 11, DOT: 12, MEMBER_EXPRESSION: 13, DOT_DOT: 14, STAR: 15, IDENTIFIER: 16, SCRIPT_EXPRESSION: 17, INTEGER: 18, END: 19, CHILD_SUBSCRIPT_COMPONENT: 20, DESCENDANT_SUBSCRIPT_COMPONENT: 21, "[": 22, SUBSCRIPT: 23, "]": 24, SUBSCRIPT_EXPRESSION: 25, SUBSCRIPT_EXPRESSION_LIST: 26, SUBSCRIPT_EXPRESSION_LISTABLE: 27, ",": 28, STRING_LITERAL: 29, ARRAY_SLICE: 30, FILTER_EXPRESSION: 31, QQ_STRING: 32, Q_STRING: 33, $accept: 0, $end: 1 },
            terminals_: { 2: "error", 4: "DOLLAR", 12: "DOT", 14: "DOT_DOT", 15: "STAR", 16: "IDENTIFIER", 17: "SCRIPT_EXPRESSION", 18: "INTEGER", 19: "END", 22: "[", 24: "]", 28: ",", 30: "ARRAY_SLICE", 31: "FILTER_EXPRESSION", 32: "QQ_STRING", 33: "Q_STRING" },
            productions_: [0, [3, 1], [3, 2], [3, 1], [3, 2], [5, 1], [5, 2], [7, 1], [7, 1], [8, 1], [8, 1], [10, 2], [6, 1], [11, 2], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [9, 1], [9, 1], [20, 3], [21, 4], [23, 1], [23, 1], [26, 1], [26, 3], [27, 1], [27, 1], [27, 1], [25, 1], [25, 1], [25, 1], [29, 1], [29, 1]],
            performAction: function(v, _, A, E, b, D, j) {
              E.ast || (E.ast = f, f.initialize());
              var C = D.length - 1;
              switch (b) {
                case 1:
                  return E.ast.set({ expression: { type: "root", value: D[C] } }), E.ast.unshift(), E.ast.yield();
                case 2:
                  return E.ast.set({ expression: { type: "root", value: D[C - 1] } }), E.ast.unshift(), E.ast.yield();
                case 3:
                  return E.ast.unshift(), E.ast.yield();
                case 4:
                  return E.ast.set({ operation: "member", scope: "child", expression: { type: "identifier", value: D[C - 1] } }), E.ast.unshift(), E.ast.yield();
                case 5:
                  break;
                case 6:
                  break;
                case 7:
                  E.ast.set({ operation: "member" }), E.ast.push();
                  break;
                case 8:
                  E.ast.set({ operation: "subscript" }), E.ast.push();
                  break;
                case 9:
                  E.ast.set({ scope: "child" });
                  break;
                case 10:
                  E.ast.set({ scope: "descendant" });
                  break;
                case 11:
                  break;
                case 12:
                  E.ast.set({ scope: "child", operation: "member" });
                  break;
                case 13:
                  break;
                case 14:
                  E.ast.set({ expression: { type: "wildcard", value: D[C] } });
                  break;
                case 15:
                  E.ast.set({ expression: { type: "identifier", value: D[C] } });
                  break;
                case 16:
                  E.ast.set({ expression: { type: "script_expression", value: D[C] } });
                  break;
                case 17:
                  E.ast.set({ expression: { type: "numeric_literal", value: parseInt(D[C]) } });
                  break;
                case 18:
                  break;
                case 19:
                  E.ast.set({ scope: "child" });
                  break;
                case 20:
                  E.ast.set({ scope: "descendant" });
                  break;
                case 21:
                  break;
                case 22:
                  break;
                case 23:
                  break;
                case 24:
                  D[C].length > 1 ? E.ast.set({ expression: { type: "union", value: D[C] } }) : this.$ = D[C];
                  break;
                case 25:
                  this.$ = [D[C]];
                  break;
                case 26:
                  this.$ = D[C - 2].concat(D[C]);
                  break;
                case 27:
                  this.$ = { expression: { type: "numeric_literal", value: parseInt(D[C]) } }, E.ast.set(this.$);
                  break;
                case 28:
                  this.$ = { expression: { type: "string_literal", value: D[C] } }, E.ast.set(this.$);
                  break;
                case 29:
                  this.$ = { expression: { type: "slice", value: D[C] } }, E.ast.set(this.$);
                  break;
                case 30:
                  this.$ = { expression: { type: "wildcard", value: D[C] } }, E.ast.set(this.$);
                  break;
                case 31:
                  this.$ = { expression: { type: "script_expression", value: D[C] } }, E.ast.set(this.$);
                  break;
                case 32:
                  this.$ = { expression: { type: "filter_expression", value: D[C] } }, E.ast.set(this.$);
                  break;
                case 33:
                  this.$ = D[C];
                  break;
                case 34:
                  this.$ = D[C];
                  break;
              }
            },
            table: [{ 3: 1, 4: [1, 2], 6: 3, 13: 4, 15: [1, 5], 16: [1, 6], 17: [1, 7], 18: [1, 8], 19: [1, 9] }, { 1: [3] }, { 1: [2, 1], 5: 10, 7: 11, 8: 12, 9: 13, 10: 14, 11: 15, 12: [1, 18], 14: [1, 19], 20: 16, 21: 17, 22: [1, 20] }, { 1: [2, 3], 5: 21, 7: 11, 8: 12, 9: 13, 10: 14, 11: 15, 12: [1, 18], 14: [1, 19], 20: 16, 21: 17, 22: [1, 20] }, { 1: [2, 12], 12: [2, 12], 14: [2, 12], 22: [2, 12] }, { 1: [2, 14], 12: [2, 14], 14: [2, 14], 22: [2, 14] }, { 1: [2, 15], 12: [2, 15], 14: [2, 15], 22: [2, 15] }, { 1: [2, 16], 12: [2, 16], 14: [2, 16], 22: [2, 16] }, { 1: [2, 17], 12: [2, 17], 14: [2, 17], 22: [2, 17] }, { 1: [2, 18], 12: [2, 18], 14: [2, 18], 22: [2, 18] }, { 1: [2, 2], 7: 22, 8: 12, 9: 13, 10: 14, 11: 15, 12: [1, 18], 14: [1, 19], 20: 16, 21: 17, 22: [1, 20] }, { 1: [2, 5], 12: [2, 5], 14: [2, 5], 22: [2, 5] }, { 1: [2, 7], 12: [2, 7], 14: [2, 7], 22: [2, 7] }, { 1: [2, 8], 12: [2, 8], 14: [2, 8], 22: [2, 8] }, { 1: [2, 9], 12: [2, 9], 14: [2, 9], 22: [2, 9] }, { 1: [2, 10], 12: [2, 10], 14: [2, 10], 22: [2, 10] }, { 1: [2, 19], 12: [2, 19], 14: [2, 19], 22: [2, 19] }, { 1: [2, 20], 12: [2, 20], 14: [2, 20], 22: [2, 20] }, { 13: 23, 15: [1, 5], 16: [1, 6], 17: [1, 7], 18: [1, 8], 19: [1, 9] }, { 13: 24, 15: [1, 5], 16: [1, 6], 17: [1, 7], 18: [1, 8], 19: [1, 9], 22: [1, 25] }, { 15: [1, 29], 17: [1, 30], 18: [1, 33], 23: 26, 25: 27, 26: 28, 27: 32, 29: 34, 30: [1, 35], 31: [1, 31], 32: [1, 36], 33: [1, 37] }, { 1: [2, 4], 7: 22, 8: 12, 9: 13, 10: 14, 11: 15, 12: [1, 18], 14: [1, 19], 20: 16, 21: 17, 22: [1, 20] }, { 1: [2, 6], 12: [2, 6], 14: [2, 6], 22: [2, 6] }, { 1: [2, 11], 12: [2, 11], 14: [2, 11], 22: [2, 11] }, { 1: [2, 13], 12: [2, 13], 14: [2, 13], 22: [2, 13] }, { 15: [1, 29], 17: [1, 30], 18: [1, 33], 23: 38, 25: 27, 26: 28, 27: 32, 29: 34, 30: [1, 35], 31: [1, 31], 32: [1, 36], 33: [1, 37] }, { 24: [1, 39] }, { 24: [2, 23] }, { 24: [2, 24], 28: [1, 40] }, { 24: [2, 30] }, { 24: [2, 31] }, { 24: [2, 32] }, { 24: [2, 25], 28: [2, 25] }, { 24: [2, 27], 28: [2, 27] }, { 24: [2, 28], 28: [2, 28] }, { 24: [2, 29], 28: [2, 29] }, { 24: [2, 33], 28: [2, 33] }, { 24: [2, 34], 28: [2, 34] }, { 24: [1, 41] }, { 1: [2, 21], 12: [2, 21], 14: [2, 21], 22: [2, 21] }, { 18: [1, 33], 27: 42, 29: 34, 30: [1, 35], 32: [1, 36], 33: [1, 37] }, { 1: [2, 22], 12: [2, 22], 14: [2, 22], 22: [2, 22] }, { 24: [2, 26], 28: [2, 26] }],
            defaultActions: { 27: [2, 23], 29: [2, 30], 30: [2, 31], 31: [2, 32] },
            parseError: function(v, _) {
              if (_.recoverable)
                this.trace(v);
              else
                throw new Error(v);
            },
            parse: function(v) {
              var _ = this, A = [0], E = [null], b = [], D = this.table, j = "", C = 0, O = 0, F = 2, L = 1, T = b.slice.call(arguments, 1);
              this.lexer.setInput(v), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
              var q = this.lexer.yylloc;
              b.push(q);
              var J = this.lexer.options && this.lexer.options.ranges;
              typeof this.yy.parseError == "function" ? this.parseError = this.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
              function oe() {
                var pe;
                return pe = _.lexer.lex() || L, typeof pe != "number" && (pe = _.symbols_[pe] || pe), pe;
              }
              for (var ae, he, de, Ae, fe = {}, Be, be, ve, We; ; ) {
                if (he = A[A.length - 1], this.defaultActions[he] ? de = this.defaultActions[he] : ((ae === null || typeof ae > "u") && (ae = oe()), de = D[he] && D[he][ae]), typeof de > "u" || !de.length || !de[0]) {
                  var we = "";
                  We = [];
                  for (Be in D[he])
                    this.terminals_[Be] && Be > F && We.push("'" + this.terminals_[Be] + "'");
                  this.lexer.showPosition ? we = "Parse error on line " + (C + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + We.join(", ") + ", got '" + (this.terminals_[ae] || ae) + "'" : we = "Parse error on line " + (C + 1) + ": Unexpected " + (ae == L ? "end of input" : "'" + (this.terminals_[ae] || ae) + "'"), this.parseError(we, {
                    text: this.lexer.match,
                    token: this.terminals_[ae] || ae,
                    line: this.lexer.yylineno,
                    loc: q,
                    expected: We
                  });
                }
                if (de[0] instanceof Array && de.length > 1)
                  throw new Error("Parse Error: multiple actions possible at state: " + he + ", token: " + ae);
                switch (de[0]) {
                  case 1:
                    A.push(ae), E.push(this.lexer.yytext), b.push(this.lexer.yylloc), A.push(de[1]), ae = null, O = this.lexer.yyleng, j = this.lexer.yytext, C = this.lexer.yylineno, q = this.lexer.yylloc;
                    break;
                  case 2:
                    if (be = this.productions_[de[1]][1], fe.$ = E[E.length - be], fe._$ = {
                      first_line: b[b.length - (be || 1)].first_line,
                      last_line: b[b.length - 1].last_line,
                      first_column: b[b.length - (be || 1)].first_column,
                      last_column: b[b.length - 1].last_column
                    }, J && (fe._$.range = [
                      b[b.length - (be || 1)].range[0],
                      b[b.length - 1].range[1]
                    ]), Ae = this.performAction.apply(fe, [
                      j,
                      O,
                      C,
                      this.yy,
                      de[1],
                      E,
                      b
                    ].concat(T)), typeof Ae < "u")
                      return Ae;
                    be && (A = A.slice(0, -1 * be * 2), E = E.slice(0, -1 * be), b = b.slice(0, -1 * be)), A.push(this.productions_[de[1]][0]), E.push(fe.$), b.push(fe._$), ve = D[A[A.length - 2]][A[A.length - 1]], A.push(ve);
                    break;
                  case 3:
                    return !0;
                }
              }
              return !0;
            }
          }, f = {
            initialize: function() {
              this._nodes = [], this._node = {}, this._stash = [];
            },
            set: function(p) {
              for (var v in p) this._node[v] = p[v];
              return this._node;
            },
            node: function(p) {
              return arguments.length && (this._node = p), this._node;
            },
            push: function() {
              this._nodes.push(this._node), this._node = {};
            },
            unshift: function() {
              this._nodes.unshift(this._node), this._node = {};
            },
            yield: function() {
              var p = this._nodes;
              return this.initialize(), p;
            }
          }, d = /* @__PURE__ */ function() {
            var p = {
              EOF: 1,
              parseError: function(_, A) {
                if (this.yy.parser)
                  this.yy.parser.parseError(_, A);
                else
                  throw new Error(_);
              },
              // resets the lexer, sets new input
              setInput: function(v) {
                return this._input = v, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
                  first_line: 1,
                  first_column: 0,
                  last_line: 1,
                  last_column: 0
                }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
              },
              // consumes and returns one char from the input
              input: function() {
                var v = this._input[0];
                this.yytext += v, this.yyleng++, this.offset++, this.match += v, this.matched += v;
                var _ = v.match(/(?:\r\n?|\n).*/g);
                return _ ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), v;
              },
              // unshifts one char (or a string) into the input
              unput: function(v) {
                var _ = v.length, A = v.split(/(?:\r\n?|\n)/g);
                this._input = v + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - _ - 1), this.offset -= _;
                var E = this.match.split(/(?:\r\n?|\n)/g);
                this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), A.length - 1 && (this.yylineno -= A.length - 1);
                var b = this.yylloc.range;
                return this.yylloc = {
                  first_line: this.yylloc.first_line,
                  last_line: this.yylineno + 1,
                  first_column: this.yylloc.first_column,
                  last_column: A ? (A.length === E.length ? this.yylloc.first_column : 0) + E[E.length - A.length].length - A[0].length : this.yylloc.first_column - _
                }, this.options.ranges && (this.yylloc.range = [b[0], b[0] + this.yyleng - _]), this.yyleng = this.yytext.length, this;
              },
              // When called from action, caches matched text and appends it on next action
              more: function() {
                return this._more = !0, this;
              },
              // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
              reject: function() {
                if (this.options.backtrack_lexer)
                  this._backtrack = !0;
                else
                  return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
                    text: "",
                    token: null,
                    line: this.yylineno
                  });
                return this;
              },
              // retain first n characters of the match
              less: function(v) {
                this.unput(this.match.slice(v));
              },
              // displays already matched input, i.e. for error messages
              pastInput: function() {
                var v = this.matched.substr(0, this.matched.length - this.match.length);
                return (v.length > 20 ? "..." : "") + v.substr(-20).replace(/\n/g, "");
              },
              // displays upcoming input, i.e. for error messages
              upcomingInput: function() {
                var v = this.match;
                return v.length < 20 && (v += this._input.substr(0, 20 - v.length)), (v.substr(0, 20) + (v.length > 20 ? "..." : "")).replace(/\n/g, "");
              },
              // displays the character position where the lexing error occurred, i.e. for error messages
              showPosition: function() {
                var v = this.pastInput(), _ = new Array(v.length + 1).join("-");
                return v + this.upcomingInput() + `
` + _ + "^";
              },
              // test the lexed token: return FALSE when not a match, otherwise return token
              test_match: function(v, _) {
                var A, E, b;
                if (this.options.backtrack_lexer && (b = {
                  yylineno: this.yylineno,
                  yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                  },
                  yytext: this.yytext,
                  match: this.match,
                  matches: this.matches,
                  matched: this.matched,
                  yyleng: this.yyleng,
                  offset: this.offset,
                  _more: this._more,
                  _input: this._input,
                  yy: this.yy,
                  conditionStack: this.conditionStack.slice(0),
                  done: this.done
                }, this.options.ranges && (b.yylloc.range = this.yylloc.range.slice(0))), E = v[0].match(/(?:\r\n?|\n).*/g), E && (this.yylineno += E.length), this.yylloc = {
                  first_line: this.yylloc.last_line,
                  last_line: this.yylineno + 1,
                  first_column: this.yylloc.last_column,
                  last_column: E ? E[E.length - 1].length - E[E.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + v[0].length
                }, this.yytext += v[0], this.match += v[0], this.matches = v, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(v[0].length), this.matched += v[0], A = this.performAction.call(this, this.yy, this, _, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), A)
                  return A;
                if (this._backtrack) {
                  for (var D in b)
                    this[D] = b[D];
                  return !1;
                }
                return !1;
              },
              // return next match in input
              next: function() {
                if (this.done)
                  return this.EOF;
                this._input || (this.done = !0);
                var v, _, A, E;
                this._more || (this.yytext = "", this.match = "");
                for (var b = this._currentRules(), D = 0; D < b.length; D++)
                  if (A = this._input.match(this.rules[b[D]]), A && (!_ || A[0].length > _[0].length)) {
                    if (_ = A, E = D, this.options.backtrack_lexer) {
                      if (v = this.test_match(A, b[D]), v !== !1)
                        return v;
                      if (this._backtrack) {
                        _ = !1;
                        continue;
                      } else
                        return !1;
                    } else if (!this.options.flex)
                      break;
                  }
                return _ ? (v = this.test_match(_, b[E]), v !== !1 ? v : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
                  text: "",
                  token: null,
                  line: this.yylineno
                });
              },
              // return next match that has a token
              lex: function() {
                var _ = this.next();
                return _ || this.lex();
              },
              // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
              begin: function(_) {
                this.conditionStack.push(_);
              },
              // pop the previously active lexer condition state off the condition stack
              popState: function() {
                var _ = this.conditionStack.length - 1;
                return _ > 0 ? this.conditionStack.pop() : this.conditionStack[0];
              },
              // produce the lexer rule set which is active for the currently active lexer condition state
              _currentRules: function() {
                return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
              },
              // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
              topState: function(_) {
                return _ = this.conditionStack.length - 1 - Math.abs(_ || 0), _ >= 0 ? this.conditionStack[_] : "INITIAL";
              },
              // alias for begin(condition)
              pushState: function(_) {
                this.begin(_);
              },
              // return the number of states currently on the stack
              stateStackSize: function() {
                return this.conditionStack.length;
              },
              options: {},
              performAction: function(_, A, E, b) {
                switch (E) {
                  case 0:
                    return 4;
                  case 1:
                    return 14;
                  case 2:
                    return 12;
                  case 3:
                    return 15;
                  case 4:
                    return 16;
                  case 5:
                    return 22;
                  case 6:
                    return 24;
                  case 7:
                    return 28;
                  case 8:
                    return 30;
                  case 9:
                    return 18;
                  case 10:
                    return A.yytext = A.yytext.substr(1, A.yyleng - 2), 32;
                  case 11:
                    return A.yytext = A.yytext.substr(1, A.yyleng - 2), 33;
                  case 12:
                    return 17;
                  case 13:
                    return 31;
                }
              },
              rules: [/^(?:\$)/, /^(?:\.\.)/, /^(?:\.)/, /^(?:\*)/, /^(?:[a-zA-Z_]+[a-zA-Z0-9_]*)/, /^(?:\[)/, /^(?:\])/, /^(?:,)/, /^(?:((-?(?:0|[1-9][0-9]*)))?\:((-?(?:0|[1-9][0-9]*)))?(\:((-?(?:0|[1-9][0-9]*)))?)?)/, /^(?:(-?(?:0|[1-9][0-9]*)))/, /^(?:"(?:\\["bfnrt/\\]|\\u[a-fA-F0-9]{4}|[^"\\])*")/, /^(?:'(?:\\['bfnrt/\\]|\\u[a-fA-F0-9]{4}|[^'\\])*')/, /^(?:\(.+?\)(?=\]))/, /^(?:\?\(.+?\)(?=\]))/],
              conditions: { INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], inclusive: !0 } }
            };
            return p;
          }();
          l.lexer = d;
          function g() {
            this.yy = {};
          }
          return g.prototype = l, l.Parser = g, new g();
        }();
        typeof n < "u" && typeof o < "u" && (o.parser = u, o.Parser = u.Parser, o.parse = function() {
          return u.parse.apply(u, arguments);
        }, o.main = function(f) {
          f[1] || (console.log("Usage: " + f[0] + " FILE"), a.exit(1));
          var d = n("fs").readFileSync(n("path").normalize(f[1]), "utf8");
          return o.parser.parse(d);
        }, typeof i < "u" && n.main === i && o.main(a.argv.slice(1)));
      }).call(this, n("_process"));
    }, { _process: 14, fs: 12, path: 13 }], 2: [function(n, i, o) {
      i.exports = {
        identifier: "[a-zA-Z_]+[a-zA-Z0-9_]*",
        integer: "-?(?:0|[1-9][0-9]*)",
        qq_string: '"(?:\\\\["bfnrt/\\\\]|\\\\u[a-fA-F0-9]{4}|[^"\\\\])*"',
        q_string: "'(?:\\\\['bfnrt/\\\\]|\\\\u[a-fA-F0-9]{4}|[^'\\\\])*'"
      };
    }, {}], 3: [function(n, i, o) {
      var a = n("./dict"), u = n("fs"), l = {
        lex: {
          macros: {
            esc: "\\\\",
            int: a.integer
          },
          rules: [
            ["\\$", "return 'DOLLAR'"],
            ["\\.\\.", "return 'DOT_DOT'"],
            ["\\.", "return 'DOT'"],
            ["\\*", "return 'STAR'"],
            [a.identifier, "return 'IDENTIFIER'"],
            ["\\[", "return '['"],
            ["\\]", "return ']'"],
            [",", "return ','"],
            ["({int})?\\:({int})?(\\:({int})?)?", "return 'ARRAY_SLICE'"],
            ["{int}", "return 'INTEGER'"],
            [a.qq_string, "yytext = yytext.substr(1,yyleng-2); return 'QQ_STRING';"],
            [a.q_string, "yytext = yytext.substr(1,yyleng-2); return 'Q_STRING';"],
            ["\\(.+?\\)(?=\\])", "return 'SCRIPT_EXPRESSION'"],
            ["\\?\\(.+?\\)(?=\\])", "return 'FILTER_EXPRESSION'"]
          ]
        },
        start: "JSON_PATH",
        bnf: {
          JSON_PATH: [
            ["DOLLAR", 'yy.ast.set({ expression: { type: "root", value: $1 } }); yy.ast.unshift(); return yy.ast.yield()'],
            ["DOLLAR PATH_COMPONENTS", 'yy.ast.set({ expression: { type: "root", value: $1 } }); yy.ast.unshift(); return yy.ast.yield()'],
            ["LEADING_CHILD_MEMBER_EXPRESSION", "yy.ast.unshift(); return yy.ast.yield()"],
            ["LEADING_CHILD_MEMBER_EXPRESSION PATH_COMPONENTS", 'yy.ast.set({ operation: "member", scope: "child", expression: { type: "identifier", value: $1 }}); yy.ast.unshift(); return yy.ast.yield()']
          ],
          PATH_COMPONENTS: [
            ["PATH_COMPONENT", ""],
            ["PATH_COMPONENTS PATH_COMPONENT", ""]
          ],
          PATH_COMPONENT: [
            ["MEMBER_COMPONENT", 'yy.ast.set({ operation: "member" }); yy.ast.push()'],
            ["SUBSCRIPT_COMPONENT", 'yy.ast.set({ operation: "subscript" }); yy.ast.push() ']
          ],
          MEMBER_COMPONENT: [
            ["CHILD_MEMBER_COMPONENT", 'yy.ast.set({ scope: "child" })'],
            ["DESCENDANT_MEMBER_COMPONENT", 'yy.ast.set({ scope: "descendant" })']
          ],
          CHILD_MEMBER_COMPONENT: [
            ["DOT MEMBER_EXPRESSION", ""]
          ],
          LEADING_CHILD_MEMBER_EXPRESSION: [
            ["MEMBER_EXPRESSION", 'yy.ast.set({ scope: "child", operation: "member" })']
          ],
          DESCENDANT_MEMBER_COMPONENT: [
            ["DOT_DOT MEMBER_EXPRESSION", ""]
          ],
          MEMBER_EXPRESSION: [
            ["STAR", 'yy.ast.set({ expression: { type: "wildcard", value: $1 } })'],
            ["IDENTIFIER", 'yy.ast.set({ expression: { type: "identifier", value: $1 } })'],
            ["SCRIPT_EXPRESSION", 'yy.ast.set({ expression: { type: "script_expression", value: $1 } })'],
            ["INTEGER", 'yy.ast.set({ expression: { type: "numeric_literal", value: parseInt($1) } })'],
            ["END", ""]
          ],
          SUBSCRIPT_COMPONENT: [
            ["CHILD_SUBSCRIPT_COMPONENT", 'yy.ast.set({ scope: "child" })'],
            ["DESCENDANT_SUBSCRIPT_COMPONENT", 'yy.ast.set({ scope: "descendant" })']
          ],
          CHILD_SUBSCRIPT_COMPONENT: [
            ["[ SUBSCRIPT ]", ""]
          ],
          DESCENDANT_SUBSCRIPT_COMPONENT: [
            ["DOT_DOT [ SUBSCRIPT ]", ""]
          ],
          SUBSCRIPT: [
            ["SUBSCRIPT_EXPRESSION", ""],
            ["SUBSCRIPT_EXPRESSION_LIST", '$1.length > 1? yy.ast.set({ expression: { type: "union", value: $1 } }) : $$ = $1']
          ],
          SUBSCRIPT_EXPRESSION_LIST: [
            ["SUBSCRIPT_EXPRESSION_LISTABLE", "$$ = [$1]"],
            ["SUBSCRIPT_EXPRESSION_LIST , SUBSCRIPT_EXPRESSION_LISTABLE", "$$ = $1.concat($3)"]
          ],
          SUBSCRIPT_EXPRESSION_LISTABLE: [
            ["INTEGER", '$$ = { expression: { type: "numeric_literal", value: parseInt($1) } }; yy.ast.set($$)'],
            ["STRING_LITERAL", '$$ = { expression: { type: "string_literal", value: $1 } }; yy.ast.set($$)'],
            ["ARRAY_SLICE", '$$ = { expression: { type: "slice", value: $1 } }; yy.ast.set($$)']
          ],
          SUBSCRIPT_EXPRESSION: [
            ["STAR", '$$ = { expression: { type: "wildcard", value: $1 } }; yy.ast.set($$)'],
            ["SCRIPT_EXPRESSION", '$$ = { expression: { type: "script_expression", value: $1 } }; yy.ast.set($$)'],
            ["FILTER_EXPRESSION", '$$ = { expression: { type: "filter_expression", value: $1 } }; yy.ast.set($$)']
          ],
          STRING_LITERAL: [
            ["QQ_STRING", "$$ = $1"],
            ["Q_STRING", "$$ = $1"]
          ]
        }
      };
      u.readFileSync && (l.moduleInclude = u.readFileSync(n.resolve("../include/module.js")), l.actionInclude = u.readFileSync(n.resolve("../include/action.js"))), i.exports = l;
    }, { "./dict": 2, fs: 12 }], 4: [function(n, i, o) {
      var a = n("./aesprim"), u = n("./slice"), l = n("static-eval"), f = n("underscore").uniq, d = function() {
        return this.initialize.apply(this, arguments);
      };
      d.prototype.initialize = function() {
        this.traverse = _(!0), this.descend = _();
      }, d.prototype.keys = Object.keys, d.prototype.resolve = function(C) {
        var O = [C.operation, C.scope, C.expression.type].join("-"), F = this._fns[O];
        if (!F) throw new Error("couldn't resolve key: " + O);
        return F.bind(this);
      }, d.prototype.register = function(C, O) {
        if (!O instanceof Function)
          throw new Error("handler must be a function");
        this._fns[C] = O;
      }, d.prototype._fns = {
        "member-child-identifier": function(C, O) {
          var F = C.expression.value, L = O.value;
          if (L instanceof Object && F in L)
            return [{ value: L[F], path: O.path.concat(F) }];
        },
        "member-descendant-identifier": E(function(C, O, F) {
          return C == F;
        }),
        "subscript-child-numeric_literal": A(function(C, O, F) {
          return C === F;
        }),
        "member-child-numeric_literal": A(function(C, O, F) {
          return String(C) === String(F);
        }),
        "subscript-descendant-numeric_literal": E(function(C, O, F) {
          return C === F;
        }),
        "member-child-wildcard": A(function() {
          return !0;
        }),
        "member-descendant-wildcard": E(function() {
          return !0;
        }),
        "subscript-descendant-wildcard": E(function() {
          return !0;
        }),
        "subscript-child-wildcard": A(function() {
          return !0;
        }),
        "subscript-child-slice": function(C, O) {
          if (p(O.value)) {
            var F = C.expression.value.split(":").map(j), L = O.value.map(function(T, q) {
              return { value: T, path: O.path.concat(q) };
            });
            return u.apply(null, [L].concat(F));
          }
        },
        "subscript-child-union": function(C, O) {
          var F = [];
          return C.expression.value.forEach(function(L) {
            var T = { operation: "subscript", scope: "child", expression: L.expression }, q = this.resolve(T), J = q(T, O);
            J && (F = F.concat(J));
          }, this), D(F);
        },
        "subscript-descendant-union": function(C, O, F) {
          var L = n(".."), T = this, q = [], J = L.nodes(O, "$..*").slice(1);
          return J.forEach(function(oe) {
            q.length >= F || C.expression.value.forEach(function(ae) {
              var he = { operation: "subscript", scope: "child", expression: ae.expression }, de = T.resolve(he), Ae = de(he, oe);
              q = q.concat(Ae);
            });
          }), D(q);
        },
        "subscript-child-filter_expression": function(C, O, F) {
          var L = C.expression.value.slice(2, -1), T = a.parse(L).body[0].expression, q = function(J, oe) {
            return b(T, { "@": oe });
          };
          return this.descend(O, null, q, F);
        },
        "subscript-descendant-filter_expression": function(C, O, F) {
          var L = C.expression.value.slice(2, -1), T = a.parse(L).body[0].expression, q = function(J, oe) {
            return b(T, { "@": oe });
          };
          return this.traverse(O, null, q, F);
        },
        "subscript-child-script_expression": function(C, O) {
          var F = C.expression.value.slice(1, -1);
          return g(O, F, "$[{{value}}]");
        },
        "member-child-script_expression": function(C, O) {
          var F = C.expression.value.slice(1, -1);
          return g(O, F, "$.{{value}}");
        },
        "member-descendant-script_expression": function(C, O) {
          var F = C.expression.value.slice(1, -1);
          return g(O, F, "$..value");
        }
      }, d.prototype._fns["subscript-child-string_literal"] = d.prototype._fns["member-child-identifier"], d.prototype._fns["member-descendant-numeric_literal"] = d.prototype._fns["subscript-descendant-string_literal"] = d.prototype._fns["member-descendant-identifier"];
      function g(C, O, F) {
        var L = n("./index"), T = a.parse(O).body[0].expression, q = b(T, { "@": C.value }), J = F.replace(/\{\{\s*value\s*\}\}/g, q), oe = L.nodes(C.value, J);
        return oe.forEach(function(ae) {
          ae.path = C.path.concat(ae.path.slice(1));
        }), oe;
      }
      function p(C) {
        return Array.isArray(C);
      }
      function v(C) {
        return C && !(C instanceof Array) && C instanceof Object;
      }
      function _(C) {
        return function(O, F, L, T) {
          var q = O.value, J = O.path, oe = [], ae = function(he, de) {
            p(he) ? (he.forEach(function(Ae, fe) {
              oe.length >= T || L(fe, Ae, F) && oe.push({ path: de.concat(fe), value: Ae });
            }), he.forEach(function(Ae, fe) {
              oe.length >= T || C && ae(Ae, de.concat(fe));
            })) : v(he) && (this.keys(he).forEach(function(Ae) {
              oe.length >= T || L(Ae, he[Ae], F) && oe.push({ path: de.concat(Ae), value: he[Ae] });
            }), this.keys(he).forEach(function(Ae) {
              oe.length >= T || C && ae(he[Ae], de.concat(Ae));
            }));
          }.bind(this);
          return ae(q, J), oe;
        };
      }
      function A(C) {
        return function(O, F, L) {
          return this.descend(F, O.expression.value, C, L);
        };
      }
      function E(C) {
        return function(O, F, L) {
          return this.traverse(F, O.expression.value, C, L);
        };
      }
      function b() {
        try {
          return l.apply(this, arguments);
        } catch {
        }
      }
      function D(C) {
        return C = C.filter(function(O) {
          return O;
        }), f(
          C,
          function(O) {
            return O.path.map(function(F) {
              return String(F).replace("-", "--");
            }).join("-");
          }
        );
      }
      function j(C) {
        var O = String(C);
        return O.match(/^-?[0-9]+$/) ? parseInt(O) : null;
      }
      i.exports = d;
    }, { "..": "jsonpath", "./aesprim": "./aesprim", "./index": 5, "./slice": 7, "static-eval": 15, underscore: 12 }], 5: [function(n, i, o) {
      var a = n("assert"), u = n("./dict"), l = n("./parser"), f = n("./handlers"), d = function() {
        this.initialize.apply(this, arguments);
      };
      d.prototype.initialize = function() {
        this.parser = new l(), this.handlers = new f();
      }, d.prototype.parse = function(v) {
        return a.ok(g(v), "we need a path"), this.parser.parse(v);
      }, d.prototype.parent = function(v, _) {
        a.ok(v instanceof Object, "obj needs to be an object"), a.ok(_, "we need a path");
        var A = this.nodes(v, _)[0];
        return A.path.pop(), this.value(v, A.path);
      }, d.prototype.apply = function(v, _, A) {
        a.ok(v instanceof Object, "obj needs to be an object"), a.ok(_, "we need a path"), a.equal(typeof A, "function", "fn needs to be function");
        var E = this.nodes(v, _).sort(function(b, D) {
          return D.path.length - b.path.length;
        });
        return E.forEach(function(b) {
          var D = b.path.pop(), j = this.value(v, this.stringify(b.path)), C = b.value = A.call(v, j[D]);
          j[D] = C;
        }, this), E;
      }, d.prototype.value = function(v, _, A) {
        if (a.ok(v instanceof Object, "obj needs to be an object"), a.ok(_, "we need a path"), arguments.length >= 3) {
          var E = this.nodes(v, _).shift();
          if (!E) return this._vivify(v, _, A);
          var b = E.path.slice(-1).shift(), D = this.parent(v, this.stringify(E.path));
          D[b] = A;
        }
        return this.query(v, this.stringify(_), 1).shift();
      }, d.prototype._vivify = function(v, _, A) {
        var E = this;
        a.ok(v instanceof Object, "obj needs to be an object"), a.ok(_, "we need a path");
        var b = this.parser.parse(_).map(function(j) {
          return j.expression.value;
        }), D = function(j, C) {
          var O = j.pop(), F = E.value(v, j);
          F || (D(j.concat(), typeof O == "string" ? {} : []), F = E.value(v, j)), F[O] = C;
        };
        return D(b, A), this.query(v, _)[0];
      }, d.prototype.query = function(v, _, A) {
        a.ok(v instanceof Object, "obj needs to be an object"), a.ok(g(_), "we need a path");
        var E = this.nodes(v, _, A).map(function(b) {
          return b.value;
        });
        return E;
      }, d.prototype.paths = function(v, _, A) {
        a.ok(v instanceof Object, "obj needs to be an object"), a.ok(_, "we need a path");
        var E = this.nodes(v, _, A).map(function(b) {
          return b.path;
        });
        return E;
      }, d.prototype.nodes = function(v, _, A) {
        if (a.ok(v instanceof Object, "obj needs to be an object"), a.ok(_, "we need a path"), A === 0) return [];
        var E = this.parser.parse(_), b = this.handlers, D = [{ path: ["$"], value: v }], j = [];
        return E.length && E[0].expression.type == "root" && E.shift(), E.length ? (E.forEach(function(C, O) {
          if (!(j.length >= A)) {
            var F = b.resolve(C), L = [];
            D.forEach(function(T) {
              if (!(j.length >= A)) {
                var q = F(C, T, A);
                O == E.length - 1 ? j = j.concat(q || []) : L = L.concat(q || []);
              }
            }), D = L;
          }
        }), A ? j.slice(0, A) : j) : D;
      }, d.prototype.stringify = function(v) {
        a.ok(v, "we need a path");
        var _ = "$", A = {
          "descendant-member": "..{{value}}",
          "child-member": ".{{value}}",
          "descendant-subscript": "..[{{value}}]",
          "child-subscript": "[{{value}}]"
        };
        return v = this._normalize(v), v.forEach(function(E) {
          if (E.expression.type != "root") {
            var b = [E.scope, E.operation].join("-"), D = A[b], j;
            if (E.expression.type == "string_literal" ? j = JSON.stringify(E.expression.value) : j = E.expression.value, !D) throw new Error("couldn't find template " + b);
            _ += D.replace(/{{value}}/, j);
          }
        }), _;
      }, d.prototype._normalize = function(v) {
        if (a.ok(v, "we need a path"), typeof v == "string")
          return this.parser.parse(v);
        if (Array.isArray(v) && typeof v[0] == "string") {
          var _ = [{ expression: { type: "root", value: "$" } }];
          return v.forEach(function(A, E) {
            if (!(A == "$" && E === 0))
              if (typeof A == "string" && A.match("^" + u.identifier + "$"))
                _.push({
                  operation: "member",
                  scope: "child",
                  expression: { value: A, type: "identifier" }
                });
              else {
                var b = typeof A == "number" ? "numeric_literal" : "string_literal";
                _.push({
                  operation: "subscript",
                  scope: "child",
                  expression: { value: A, type: b }
                });
              }
          }), _;
        } else if (Array.isArray(v) && typeof v[0] == "object")
          return v;
        throw new Error("couldn't understand path " + v);
      };
      function g(v) {
        return Object.prototype.toString.call(v) == "[object String]";
      }
      d.Handlers = f, d.Parser = l;
      var p = new d();
      p.JSONPath = d, i.exports = p;
    }, { "./dict": 2, "./handlers": 4, "./parser": 6, assert: 8 }], 6: [function(n, i, o) {
      var a = n("./grammar"), u = n("../generated/parser"), l = function() {
        var f = new u.Parser(), d = f.parseError;
        return f.yy.parseError = function() {
          f.yy.ast && f.yy.ast.initialize(), d.apply(f, arguments);
        }, f;
      };
      l.grammar = a, i.exports = l;
    }, { "../generated/parser": 1, "./grammar": 3 }], 7: [function(n, i, o) {
      i.exports = function(u, l, f, d) {
        if (typeof l == "string") throw new Error("start cannot be a string");
        if (typeof f == "string") throw new Error("end cannot be a string");
        if (typeof d == "string") throw new Error("step cannot be a string");
        var g = u.length;
        if (d === 0) throw new Error("step cannot be zero");
        if (d = d ? a(d) : 1, l = l < 0 ? g + l : l, f = f < 0 ? g + f : f, l = a(l === 0 ? 0 : l || (d > 0 ? 0 : g - 1)), f = a(f === 0 ? 0 : f || (d > 0 ? g : -1)), l = d > 0 ? Math.max(0, l) : Math.min(g, l), f = d > 0 ? Math.min(f, g) : Math.max(-1, f), d > 0 && f <= l) return [];
        if (d < 0 && l <= f) return [];
        for (var p = [], v = l; v != f && !(d < 0 && v <= f || d > 0 && v >= f); v += d)
          p.push(u[v]);
        return p;
      };
      function a(u) {
        return String(u).match(/^[0-9]+$/) ? parseInt(u) : Number.isFinite(u) ? parseInt(u, 10) : 0;
      }
    }, {}], 8: [function(n, i, o) {
      var a = n("util/"), u = Array.prototype.slice, l = Object.prototype.hasOwnProperty, f = i.exports = _;
      f.AssertionError = function(F) {
        this.name = "AssertionError", this.actual = F.actual, this.expected = F.expected, this.operator = F.operator, F.message ? (this.message = F.message, this.generatedMessage = !1) : (this.message = p(this), this.generatedMessage = !0);
        var L = F.stackStartFunction || v;
        if (Error.captureStackTrace)
          Error.captureStackTrace(this, L);
        else {
          var T = new Error();
          if (T.stack) {
            var q = T.stack, J = L.name, oe = q.indexOf(`
` + J);
            if (oe >= 0) {
              var ae = q.indexOf(`
`, oe + 1);
              q = q.substring(ae + 1);
            }
            this.stack = q;
          }
        }
      }, a.inherits(f.AssertionError, Error);
      function d(O, F) {
        return a.isUndefined(F) ? "" + F : a.isNumber(F) && !isFinite(F) || a.isFunction(F) || a.isRegExp(F) ? F.toString() : F;
      }
      function g(O, F) {
        return a.isString(O) ? O.length < F ? O : O.slice(0, F) : O;
      }
      function p(O) {
        return g(JSON.stringify(O.actual, d), 128) + " " + O.operator + " " + g(JSON.stringify(O.expected, d), 128);
      }
      function v(O, F, L, T, q) {
        throw new f.AssertionError({
          message: L,
          actual: O,
          expected: F,
          operator: T,
          stackStartFunction: q
        });
      }
      f.fail = v;
      function _(O, F) {
        O || v(O, !0, F, "==", f.ok);
      }
      f.ok = _, f.equal = function(F, L, T) {
        F != L && v(F, L, T, "==", f.equal);
      }, f.notEqual = function(F, L, T) {
        F == L && v(F, L, T, "!=", f.notEqual);
      }, f.deepEqual = function(F, L, T) {
        A(F, L) || v(F, L, T, "deepEqual", f.deepEqual);
      };
      function A(O, F) {
        if (O === F)
          return !0;
        if (a.isBuffer(O) && a.isBuffer(F)) {
          if (O.length != F.length) return !1;
          for (var L = 0; L < O.length; L++)
            if (O[L] !== F[L]) return !1;
          return !0;
        } else return a.isDate(O) && a.isDate(F) ? O.getTime() === F.getTime() : a.isRegExp(O) && a.isRegExp(F) ? O.source === F.source && O.global === F.global && O.multiline === F.multiline && O.lastIndex === F.lastIndex && O.ignoreCase === F.ignoreCase : !a.isObject(O) && !a.isObject(F) ? O == F : b(O, F);
      }
      function E(O) {
        return Object.prototype.toString.call(O) == "[object Arguments]";
      }
      function b(O, F) {
        if (a.isNullOrUndefined(O) || a.isNullOrUndefined(F) || O.prototype !== F.prototype) return !1;
        if (a.isPrimitive(O) || a.isPrimitive(F))
          return O === F;
        var L = E(O), T = E(F);
        if (L && !T || !L && T)
          return !1;
        if (L)
          return O = u.call(O), F = u.call(F), A(O, F);
        var q = C(O), J = C(F), oe, ae;
        if (q.length != J.length)
          return !1;
        for (q.sort(), J.sort(), ae = q.length - 1; ae >= 0; ae--)
          if (q[ae] != J[ae])
            return !1;
        for (ae = q.length - 1; ae >= 0; ae--)
          if (oe = q[ae], !A(O[oe], F[oe])) return !1;
        return !0;
      }
      f.notDeepEqual = function(F, L, T) {
        A(F, L) && v(F, L, T, "notDeepEqual", f.notDeepEqual);
      }, f.strictEqual = function(F, L, T) {
        F !== L && v(F, L, T, "===", f.strictEqual);
      }, f.notStrictEqual = function(F, L, T) {
        F === L && v(F, L, T, "!==", f.notStrictEqual);
      };
      function D(O, F) {
        return !O || !F ? !1 : Object.prototype.toString.call(F) == "[object RegExp]" ? F.test(O) : O instanceof F ? !0 : F.call({}, O) === !0;
      }
      function j(O, F, L, T) {
        var q;
        a.isString(L) && (T = L, L = null);
        try {
          F();
        } catch (J) {
          q = J;
        }
        if (T = (L && L.name ? " (" + L.name + ")." : ".") + (T ? " " + T : "."), O && !q && v(q, L, "Missing expected exception" + T), !O && D(q, L) && v(q, L, "Got unwanted exception" + T), O && q && L && !D(q, L) || !O && q)
          throw q;
      }
      f.throws = function(O, F, L) {
        j.apply(this, [!0].concat(u.call(arguments)));
      }, f.doesNotThrow = function(O, F) {
        j.apply(this, [!1].concat(u.call(arguments)));
      }, f.ifError = function(O) {
        if (O)
          throw O;
      };
      var C = Object.keys || function(O) {
        var F = [];
        for (var L in O)
          l.call(O, L) && F.push(L);
        return F;
      };
    }, { "util/": 11 }], 9: [function(n, i, o) {
      typeof Object.create == "function" ? i.exports = function(u, l) {
        u.super_ = l, u.prototype = Object.create(l.prototype, {
          constructor: {
            value: u,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        });
      } : i.exports = function(u, l) {
        u.super_ = l;
        var f = function() {
        };
        f.prototype = l.prototype, u.prototype = new f(), u.prototype.constructor = u;
      };
    }, {}], 10: [function(n, i, o) {
      i.exports = function(u) {
        return u && typeof u == "object" && typeof u.copy == "function" && typeof u.fill == "function" && typeof u.readUInt8 == "function";
      };
    }, {}], 11: [function(n, i, o) {
      (function(a, u) {
        var l = /%[sdj%]/g;
        o.format = function(G) {
          if (!J(G)) {
            for (var X = [], ie = 0; ie < arguments.length; ie++)
              X.push(g(arguments[ie]));
            return X.join(" ");
          }
          for (var ie = 1, Te = arguments, Me = Te.length, Ee = String(G).replace(l, function(_e) {
            if (_e === "%%") return "%";
            if (ie >= Me) return _e;
            switch (_e) {
              case "%s":
                return String(Te[ie++]);
              case "%d":
                return Number(Te[ie++]);
              case "%j":
                try {
                  return JSON.stringify(Te[ie++]);
                } catch {
                  return "[Circular]";
                }
              default:
                return _e;
            }
          }), Ie = Te[ie]; ie < Me; Ie = Te[++ie])
            L(Ie) || !de(Ie) ? Ee += " " + Ie : Ee += " " + g(Ie);
          return Ee;
        }, o.deprecate = function(G, X) {
          if (ae(u.process))
            return function() {
              return o.deprecate(G, X).apply(this, arguments);
            };
          if (a.noDeprecation === !0)
            return G;
          var ie = !1;
          function Te() {
            if (!ie) {
              if (a.throwDeprecation)
                throw new Error(X);
              a.traceDeprecation ? console.trace(X) : console.error(X), ie = !0;
            }
            return G.apply(this, arguments);
          }
          return Te;
        };
        var f = {}, d;
        o.debuglog = function(G) {
          if (ae(d) && (d = a.env.NODE_DEBUG || ""), G = G.toUpperCase(), !f[G])
            if (new RegExp("\\b" + G + "\\b", "i").test(d)) {
              var X = a.pid;
              f[G] = function() {
                var ie = o.format.apply(o, arguments);
                console.error("%s %d: %s", G, X, ie);
              };
            } else
              f[G] = function() {
              };
          return f[G];
        };
        function g(G, X) {
          var ie = {
            seen: [],
            stylize: v
          };
          return arguments.length >= 3 && (ie.depth = arguments[2]), arguments.length >= 4 && (ie.colors = arguments[3]), F(X) ? ie.showHidden = X : X && o._extend(ie, X), ae(ie.showHidden) && (ie.showHidden = !1), ae(ie.depth) && (ie.depth = 2), ae(ie.colors) && (ie.colors = !1), ae(ie.customInspect) && (ie.customInspect = !0), ie.colors && (ie.stylize = p), A(ie, G, ie.depth);
        }
        o.inspect = g, g.colors = {
          bold: [1, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          white: [37, 39],
          grey: [90, 39],
          black: [30, 39],
          blue: [34, 39],
          cyan: [36, 39],
          green: [32, 39],
          magenta: [35, 39],
          red: [31, 39],
          yellow: [33, 39]
        }, g.styles = {
          special: "cyan",
          number: "yellow",
          boolean: "yellow",
          undefined: "grey",
          null: "bold",
          string: "green",
          date: "magenta",
          // "name": intentionally not styling
          regexp: "red"
        };
        function p(G, X) {
          var ie = g.styles[X];
          return ie ? "\x1B[" + g.colors[ie][0] + "m" + G + "\x1B[" + g.colors[ie][1] + "m" : G;
        }
        function v(G, X) {
          return G;
        }
        function _(G) {
          var X = {};
          return G.forEach(function(ie, Te) {
            X[ie] = !0;
          }), X;
        }
        function A(G, X, ie) {
          if (G.customInspect && X && Be(X.inspect) && // Filter out the util module, it's inspect function is special
          X.inspect !== o.inspect && // Also filter out any prototype objects using the circular check.
          !(X.constructor && X.constructor.prototype === X)) {
            var Te = X.inspect(ie, G);
            return J(Te) || (Te = A(G, Te, ie)), Te;
          }
          var Me = E(G, X);
          if (Me)
            return Me;
          var Ee = Object.keys(X), Ie = _(Ee);
          if (G.showHidden && (Ee = Object.getOwnPropertyNames(X)), fe(X) && (Ee.indexOf("message") >= 0 || Ee.indexOf("description") >= 0))
            return b(X);
          if (Ee.length === 0) {
            if (Be(X)) {
              var _e = X.name ? ": " + X.name : "";
              return G.stylize("[Function" + _e + "]", "special");
            }
            if (he(X))
              return G.stylize(RegExp.prototype.toString.call(X), "regexp");
            if (Ae(X))
              return G.stylize(Date.prototype.toString.call(X), "date");
            if (fe(X))
              return b(X);
          }
          var De = "", _t = !1, on = ["{", "}"];
          if (O(X) && (_t = !0, on = ["[", "]"]), Be(X)) {
            var Rt = X.name ? ": " + X.name : "";
            De = " [Function" + Rt + "]";
          }
          if (he(X) && (De = " " + RegExp.prototype.toString.call(X)), Ae(X) && (De = " " + Date.prototype.toUTCString.call(X)), fe(X) && (De = " " + b(X)), Ee.length === 0 && (!_t || X.length == 0))
            return on[0] + De + on[1];
          if (ie < 0)
            return he(X) ? G.stylize(RegExp.prototype.toString.call(X), "regexp") : G.stylize("[Object]", "special");
          G.seen.push(X);
          var jt;
          return _t ? jt = D(G, X, ie, Ie, Ee) : jt = Ee.map(function(Nt) {
            return j(G, X, ie, Ie, Nt, _t);
          }), G.seen.pop(), C(jt, De, on);
        }
        function E(G, X) {
          if (ae(X))
            return G.stylize("undefined", "undefined");
          if (J(X)) {
            var ie = "'" + JSON.stringify(X).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
            return G.stylize(ie, "string");
          }
          if (q(X))
            return G.stylize("" + X, "number");
          if (F(X))
            return G.stylize("" + X, "boolean");
          if (L(X))
            return G.stylize("null", "null");
        }
        function b(G) {
          return "[" + Error.prototype.toString.call(G) + "]";
        }
        function D(G, X, ie, Te, Me) {
          for (var Ee = [], Ie = 0, _e = X.length; Ie < _e; ++Ie)
            je(X, String(Ie)) ? Ee.push(j(
              G,
              X,
              ie,
              Te,
              String(Ie),
              !0
            )) : Ee.push("");
          return Me.forEach(function(De) {
            De.match(/^\d+$/) || Ee.push(j(
              G,
              X,
              ie,
              Te,
              De,
              !0
            ));
          }), Ee;
        }
        function j(G, X, ie, Te, Me, Ee) {
          var Ie, _e, De;
          if (De = Object.getOwnPropertyDescriptor(X, Me) || { value: X[Me] }, De.get ? De.set ? _e = G.stylize("[Getter/Setter]", "special") : _e = G.stylize("[Getter]", "special") : De.set && (_e = G.stylize("[Setter]", "special")), je(Te, Me) || (Ie = "[" + Me + "]"), _e || (G.seen.indexOf(De.value) < 0 ? (L(ie) ? _e = A(G, De.value, null) : _e = A(G, De.value, ie - 1), _e.indexOf(`
`) > -1 && (Ee ? _e = _e.split(`
`).map(function(_t) {
            return "  " + _t;
          }).join(`
`).substr(2) : _e = `
` + _e.split(`
`).map(function(_t) {
            return "   " + _t;
          }).join(`
`))) : _e = G.stylize("[Circular]", "special")), ae(Ie)) {
            if (Ee && Me.match(/^\d+$/))
              return _e;
            Ie = JSON.stringify("" + Me), Ie.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (Ie = Ie.substr(1, Ie.length - 2), Ie = G.stylize(Ie, "name")) : (Ie = Ie.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), Ie = G.stylize(Ie, "string"));
          }
          return Ie + ": " + _e;
        }
        function C(G, X, ie) {
          var Te = G.reduce(function(Me, Ee) {
            return Ee.indexOf(`
`) >= 0, Me + Ee.replace(/\u001b\[\d\d?m/g, "").length + 1;
          }, 0);
          return Te > 60 ? ie[0] + (X === "" ? "" : X + `
 `) + " " + G.join(`,
  `) + " " + ie[1] : ie[0] + X + " " + G.join(", ") + " " + ie[1];
        }
        function O(G) {
          return Array.isArray(G);
        }
        o.isArray = O;
        function F(G) {
          return typeof G == "boolean";
        }
        o.isBoolean = F;
        function L(G) {
          return G === null;
        }
        o.isNull = L;
        function T(G) {
          return G == null;
        }
        o.isNullOrUndefined = T;
        function q(G) {
          return typeof G == "number";
        }
        o.isNumber = q;
        function J(G) {
          return typeof G == "string";
        }
        o.isString = J;
        function oe(G) {
          return typeof G == "symbol";
        }
        o.isSymbol = oe;
        function ae(G) {
          return G === void 0;
        }
        o.isUndefined = ae;
        function he(G) {
          return de(G) && ve(G) === "[object RegExp]";
        }
        o.isRegExp = he;
        function de(G) {
          return typeof G == "object" && G !== null;
        }
        o.isObject = de;
        function Ae(G) {
          return de(G) && ve(G) === "[object Date]";
        }
        o.isDate = Ae;
        function fe(G) {
          return de(G) && (ve(G) === "[object Error]" || G instanceof Error);
        }
        o.isError = fe;
        function Be(G) {
          return typeof G == "function";
        }
        o.isFunction = Be;
        function be(G) {
          return G === null || typeof G == "boolean" || typeof G == "number" || typeof G == "string" || typeof G == "symbol" || // ES6 symbol
          typeof G > "u";
        }
        o.isPrimitive = be, o.isBuffer = n("./support/isBuffer");
        function ve(G) {
          return Object.prototype.toString.call(G);
        }
        function We(G) {
          return G < 10 ? "0" + G.toString(10) : G.toString(10);
        }
        var we = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ];
        function pe() {
          var G = /* @__PURE__ */ new Date(), X = [
            We(G.getHours()),
            We(G.getMinutes()),
            We(G.getSeconds())
          ].join(":");
          return [G.getDate(), we[G.getMonth()], X].join(" ");
        }
        o.log = function() {
          console.log("%s - %s", pe(), o.format.apply(o, arguments));
        }, o.inherits = n("inherits"), o._extend = function(G, X) {
          if (!X || !de(X)) return G;
          for (var ie = Object.keys(X), Te = ie.length; Te--; )
            G[ie[Te]] = X[ie[Te]];
          return G;
        };
        function je(G, X) {
          return Object.prototype.hasOwnProperty.call(G, X);
        }
      }).call(this, n("_process"), typeof hr < "u" ? hr : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, { "./support/isBuffer": 10, _process: 14, inherits: 9 }], 12: [function(n, i, o) {
    }, {}], 13: [function(n, i, o) {
      (function(a) {
        function u(g, p) {
          for (var v = 0, _ = g.length - 1; _ >= 0; _--) {
            var A = g[_];
            A === "." ? g.splice(_, 1) : A === ".." ? (g.splice(_, 1), v++) : v && (g.splice(_, 1), v--);
          }
          if (p)
            for (; v--; v)
              g.unshift("..");
          return g;
        }
        o.resolve = function() {
          for (var g = "", p = !1, v = arguments.length - 1; v >= -1 && !p; v--) {
            var _ = v >= 0 ? arguments[v] : a.cwd();
            if (typeof _ != "string")
              throw new TypeError("Arguments to path.resolve must be strings");
            if (!_)
              continue;
            g = _ + "/" + g, p = _.charAt(0) === "/";
          }
          return g = u(f(g.split("/"), function(A) {
            return !!A;
          }), !p).join("/"), (p ? "/" : "") + g || ".";
        }, o.normalize = function(g) {
          var p = o.isAbsolute(g), v = d(g, -1) === "/";
          return g = u(f(g.split("/"), function(_) {
            return !!_;
          }), !p).join("/"), !g && !p && (g = "."), g && v && (g += "/"), (p ? "/" : "") + g;
        }, o.isAbsolute = function(g) {
          return g.charAt(0) === "/";
        }, o.join = function() {
          var g = Array.prototype.slice.call(arguments, 0);
          return o.normalize(f(g, function(p, v) {
            if (typeof p != "string")
              throw new TypeError("Arguments to path.join must be strings");
            return p;
          }).join("/"));
        }, o.relative = function(g, p) {
          g = o.resolve(g).substr(1), p = o.resolve(p).substr(1);
          function v(C) {
            for (var O = 0; O < C.length && C[O] === ""; O++)
              ;
            for (var F = C.length - 1; F >= 0 && C[F] === ""; F--)
              ;
            return O > F ? [] : C.slice(O, F - O + 1);
          }
          for (var _ = v(g.split("/")), A = v(p.split("/")), E = Math.min(_.length, A.length), b = E, D = 0; D < E; D++)
            if (_[D] !== A[D]) {
              b = D;
              break;
            }
          for (var j = [], D = b; D < _.length; D++)
            j.push("..");
          return j = j.concat(A.slice(b)), j.join("/");
        }, o.sep = "/", o.delimiter = ":", o.dirname = function(g) {
          if (typeof g != "string" && (g = g + ""), g.length === 0) return ".";
          for (var p = g.charCodeAt(0), v = p === 47, _ = -1, A = !0, E = g.length - 1; E >= 1; --E)
            if (p = g.charCodeAt(E), p === 47) {
              if (!A) {
                _ = E;
                break;
              }
            } else
              A = !1;
          return _ === -1 ? v ? "/" : "." : v && _ === 1 ? "/" : g.slice(0, _);
        };
        function l(g) {
          typeof g != "string" && (g = g + "");
          var p = 0, v = -1, _ = !0, A;
          for (A = g.length - 1; A >= 0; --A)
            if (g.charCodeAt(A) === 47) {
              if (!_) {
                p = A + 1;
                break;
              }
            } else v === -1 && (_ = !1, v = A + 1);
          return v === -1 ? "" : g.slice(p, v);
        }
        o.basename = function(g, p) {
          var v = l(g);
          return p && v.substr(-1 * p.length) === p && (v = v.substr(0, v.length - p.length)), v;
        }, o.extname = function(g) {
          typeof g != "string" && (g = g + "");
          for (var p = -1, v = 0, _ = -1, A = !0, E = 0, b = g.length - 1; b >= 0; --b) {
            var D = g.charCodeAt(b);
            if (D === 47) {
              if (!A) {
                v = b + 1;
                break;
              }
              continue;
            }
            _ === -1 && (A = !1, _ = b + 1), D === 46 ? p === -1 ? p = b : E !== 1 && (E = 1) : p !== -1 && (E = -1);
          }
          return p === -1 || _ === -1 || // We saw a non-dot character immediately before the dot
          E === 0 || // The (right-most) trimmed path component is exactly '..'
          E === 1 && p === _ - 1 && p === v + 1 ? "" : g.slice(p, _);
        };
        function f(g, p) {
          if (g.filter) return g.filter(p);
          for (var v = [], _ = 0; _ < g.length; _++)
            p(g[_], _, g) && v.push(g[_]);
          return v;
        }
        var d = "ab".substr(-1) === "b" ? function(g, p, v) {
          return g.substr(p, v);
        } : function(g, p, v) {
          return p < 0 && (p = g.length + p), g.substr(p, v);
        };
      }).call(this, n("_process"));
    }, { _process: 14 }], 14: [function(n, i, o) {
      var a = i.exports = {}, u, l;
      function f() {
        throw new Error("setTimeout has not been defined");
      }
      function d() {
        throw new Error("clearTimeout has not been defined");
      }
      (function() {
        try {
          typeof setTimeout == "function" ? u = setTimeout : u = f;
        } catch {
          u = f;
        }
        try {
          typeof clearTimeout == "function" ? l = clearTimeout : l = d;
        } catch {
          l = d;
        }
      })();
      function g(O) {
        if (u === setTimeout)
          return setTimeout(O, 0);
        if ((u === f || !u) && setTimeout)
          return u = setTimeout, setTimeout(O, 0);
        try {
          return u(O, 0);
        } catch {
          try {
            return u.call(null, O, 0);
          } catch {
            return u.call(this, O, 0);
          }
        }
      }
      function p(O) {
        if (l === clearTimeout)
          return clearTimeout(O);
        if ((l === d || !l) && clearTimeout)
          return l = clearTimeout, clearTimeout(O);
        try {
          return l(O);
        } catch {
          try {
            return l.call(null, O);
          } catch {
            return l.call(this, O);
          }
        }
      }
      var v = [], _ = !1, A, E = -1;
      function b() {
        !_ || !A || (_ = !1, A.length ? v = A.concat(v) : E = -1, v.length && D());
      }
      function D() {
        if (!_) {
          var O = g(b);
          _ = !0;
          for (var F = v.length; F; ) {
            for (A = v, v = []; ++E < F; )
              A && A[E].run();
            E = -1, F = v.length;
          }
          A = null, _ = !1, p(O);
        }
      }
      a.nextTick = function(O) {
        var F = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var L = 1; L < arguments.length; L++)
            F[L - 1] = arguments[L];
        v.push(new j(O, F)), v.length === 1 && !_ && g(D);
      };
      function j(O, F) {
        this.fun = O, this.array = F;
      }
      j.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {};
      function C() {
      }
      a.on = C, a.addListener = C, a.once = C, a.off = C, a.removeListener = C, a.removeAllListeners = C, a.emit = C, a.prependListener = C, a.prependOnceListener = C, a.listeners = function(O) {
        return [];
      }, a.binding = function(O) {
        throw new Error("process.binding is not supported");
      }, a.cwd = function() {
        return "/";
      }, a.chdir = function(O) {
        throw new Error("process.chdir is not supported");
      }, a.umask = function() {
        return 0;
      };
    }, {}], 15: [function(n, i, o) {
      var a = n("escodegen").generate;
      i.exports = function(u, l) {
        l || (l = {});
        var f = {}, d = function g(p, v) {
          if (p.type === "Literal")
            return p.value;
          if (p.type === "UnaryExpression") {
            var _ = g(p.argument);
            return p.operator === "+" ? +_ : p.operator === "-" ? -_ : p.operator === "~" ? ~_ : p.operator === "!" ? !_ : f;
          } else if (p.type === "ArrayExpression") {
            for (var A = [], E = 0, b = p.elements.length; E < b; E++) {
              var D = g(p.elements[E]);
              if (D === f) return f;
              A.push(D);
            }
            return A;
          } else if (p.type === "ObjectExpression") {
            for (var j = {}, E = 0; E < p.properties.length; E++) {
              var C = p.properties[E], O = C.value === null ? C.value : g(C.value);
              if (O === f) return f;
              j[C.key.value || C.key.name] = O;
            }
            return j;
          } else if (p.type === "BinaryExpression" || p.type === "LogicalExpression") {
            var b = g(p.left);
            if (b === f) return f;
            var F = g(p.right);
            if (F === f) return f;
            var L = p.operator;
            return L === "==" ? b == F : L === "===" ? b === F : L === "!=" ? b != F : L === "!==" ? b !== F : L === "+" ? b + F : L === "-" ? b - F : L === "*" ? b * F : L === "/" ? b / F : L === "%" ? b % F : L === "<" ? b < F : L === "<=" ? b <= F : L === ">" ? b > F : L === ">=" ? b >= F : L === "|" ? b | F : L === "&" ? b & F : L === "^" ? b ^ F : L === "&&" ? b && F : L === "||" ? b || F : f;
          } else {
            if (p.type === "Identifier")
              return {}.hasOwnProperty.call(l, p.name) ? l[p.name] : f;
            if (p.type === "ThisExpression")
              return {}.hasOwnProperty.call(l, "this") ? l.this : f;
            if (p.type === "CallExpression") {
              var T = g(p.callee);
              if (T === f || typeof T != "function") return f;
              var q = p.callee.object ? g(p.callee.object) : f;
              q === f && (q = null);
              for (var J = [], E = 0, b = p.arguments.length; E < b; E++) {
                var D = g(p.arguments[E]);
                if (D === f) return f;
                J.push(D);
              }
              return T.apply(q, J);
            } else if (p.type === "MemberExpression") {
              var j = g(p.object);
              if (j === f || typeof j == "function")
                return f;
              if (p.property.type === "Identifier")
                return j[p.property.name];
              var C = g(p.property);
              return C === f ? f : j[C];
            } else if (p.type === "ConditionalExpression") {
              var _ = g(p.test);
              return _ === f ? f : g(_ ? p.consequent : p.alternate);
            } else if (p.type === "ExpressionStatement") {
              var _ = g(p.expression);
              return _ === f ? f : _;
            } else {
              if (p.type === "ReturnStatement")
                return g(p.argument);
              if (p.type === "FunctionExpression") {
                var oe = p.body.body, ae = {};
                Object.keys(l).forEach(function(we) {
                  ae[we] = l[we];
                });
                for (var E = 0; E < p.params.length; E++) {
                  var he = p.params[E];
                  if (he.type == "Identifier")
                    l[he.name] = null;
                  else return f;
                }
                for (var E in oe)
                  if (g(oe[E]) === f)
                    return f;
                l = ae;
                var de = Object.keys(l), Ae = de.map(function(we) {
                  return l[we];
                });
                return Function(de.join(", "), "return " + a(p)).apply(null, Ae);
              } else if (p.type === "TemplateLiteral") {
                for (var fe = "", E = 0; E < p.expressions.length; E++)
                  fe += g(p.quasis[E]), fe += g(p.expressions[E]);
                return fe += g(p.quasis[E]), fe;
              } else if (p.type === "TaggedTemplateExpression") {
                var Be = g(p.tag), be = p.quasi, ve = be.quasis.map(g), We = be.expressions.map(g);
                return Be.apply(null, [ve].concat(We));
              } else return p.type === "TemplateElement" ? p.value.cooked : f;
            }
          }
        }(u);
        return d === f ? void 0 : d;
      };
    }, { escodegen: 12 }], jsonpath: [function(n, i, o) {
      i.exports = n("./lib/index");
    }, { "./lib/index": 5 }] }, {}, ["jsonpath"])("jsonpath");
  });
})(j0);
var RS = j0.exports;
const N0 = /* @__PURE__ */ Ul(RS), jS = ({
  dataItems: e,
  resourceSchema: t,
  dataForControls: n,
  additionalPrinterColumns: i
}) => {
  const o = [];
  let a = [];
  i ? a = i.map(({ name: l, jsonPath: f }) => {
    let d = "";
    f.includes("[") && (d = JSON.stringify(f), o.push({ dataIndex: d, jsonPath: f }));
    const g = f.split(".").slice(1);
    return {
      title: l,
      dataIndex: d || g,
      key: l
    };
  }) : t && (a = [
    ...Object.keys(t).map((l) => ({
      title: l,
      dataIndex: l,
      key: l
    }))
  ]);
  let u;
  return i ? (u = e.map((l) => {
    if (typeof l == "object") {
      if (!Array.isArray(l) && l.metadata && typeof l.metadata == "object" && !Array.isArray(l.metadata) && l.metadata.name && n) {
        const f = {
          cluster: n.cluster,
          syntheticProject: n.syntheticProject,
          pathPrefix: n.pathPrefix,
          apiGroupAndVersion: n.apiVersion,
          typeName: n.typeName,
          entryName: l.metadata.name,
          namespace: l.metadata.namespace || void 0,
          backlink: n.backlink,
          deletePathPrefix: n.deletePathPrefix,
          onDeleteHandle: n.onDeleteHandle,
          permissions: n.permissions
        };
        return {
          key: l.metadata.name,
          ...l,
          internalDataForControls: f
        };
      }
      return { key: JSON.stringify(l), ...l };
    }
    return {};
  }), o.length > 0 && (u = u.map((l) => {
    const f = {};
    return o.forEach(({ dataIndex: d, jsonPath: g }) => {
      const p = N0.query(l, `$${g}`);
      f[d] = Array.isArray(p) && p.length === 1 ? p[0] : p;
    }), typeof l == "object" ? { ...l, ...f } : { ...f };
  }))) : u = e.map((l) => {
    if (typeof l == "object" && !Array.isArray(l) && l.spec && typeof l.spec == "object") {
      if (!Array.isArray(l) && l.metadata && typeof l.metadata == "object" && !Array.isArray(l.metadata) && l.metadata.name && n) {
        const f = {
          cluster: n.cluster,
          synthetichProject: n.syntheticProject,
          pathPrefix: n.pathPrefix,
          apiGroupAndVersion: n.apiVersion,
          typeName: n.typeName,
          entryName: l.metadata.name,
          namespace: l.metadata.namespace || void 0,
          backlink: n.backlink,
          deletePathPrefix: n.deletePathPrefix,
          onDeleteHandle: n.onDeleteHandle,
          permissions: n.permissions
        };
        return {
          key: l.metadata.name,
          ...l.spec,
          internalDataForControls: f
        };
      }
      return { key: JSON.stringify(l.spec), ...l.spec };
    }
    return {};
  }), { dataSource: u, columns: a };
}, z4 = ({
  theme: e,
  baseprefix: t,
  dataItems: n,
  resourceSchema: i,
  dataForControls: o,
  additionalPrinterColumns: a,
  pathToNavigate: u,
  recordKeysForNavigation: l,
  additionalPrinterColumnsUndefinedValues: f,
  additionalPrinterColumnsTrimLengths: d,
  additionalPrinterColumnsColWidths: g,
  selectData: p,
  tableProps: v
}) => {
  if (!i && !a)
    return null;
  const { dataSource: _, columns: A } = jS({
    dataItems: n,
    resourceSchema: i,
    dataForControls: o,
    additionalPrinterColumns: a
  });
  return /* @__PURE__ */ x.jsx(
    PS,
    {
      theme: e,
      baseprefix: t,
      dataSource: _,
      columns: A,
      pathToNavigate: u,
      recordKeysForNavigation: l,
      additionalPrinterColumnsUndefinedValues: f,
      additionalPrinterColumnsTrimLengths: d,
      additionalPrinterColumnsColWidths: g,
      selectData: p,
      tableProps: v
    }
  );
};
var NS = "Expected a function", cp = NaN, $S = "[object Symbol]", MS = /^\s+|\s+$/g, US = /^[-+]0x[0-9a-f]+$/i, VS = /^0b[01]+$/i, qS = /^0o[0-7]+$/i, WS = parseInt, KS = typeof hr == "object" && hr && hr.Object === Object && hr, HS = typeof self == "object" && self && self.Object === Object && self, zS = KS || HS || Function("return this")(), GS = Object.prototype, JS = GS.toString, YS = Math.max, XS = Math.min, Qc = function() {
  return zS.Date.now();
};
function QS(e, t, n) {
  var i, o, a, u, l, f, d = 0, g = !1, p = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(NS);
  t = lp(t) || 0, Ol(n) && (g = !!n.leading, p = "maxWait" in n, a = p ? YS(lp(n.maxWait) || 0, t) : a, v = "trailing" in n ? !!n.trailing : v);
  function _(L) {
    var T = i, q = o;
    return i = o = void 0, d = L, u = e.apply(q, T), u;
  }
  function A(L) {
    return d = L, l = setTimeout(D, t), g ? _(L) : u;
  }
  function E(L) {
    var T = L - f, q = L - d, J = t - T;
    return p ? XS(J, a - q) : J;
  }
  function b(L) {
    var T = L - f, q = L - d;
    return f === void 0 || T >= t || T < 0 || p && q >= a;
  }
  function D() {
    var L = Qc();
    if (b(L))
      return j(L);
    l = setTimeout(D, E(L));
  }
  function j(L) {
    return l = void 0, v && i ? _(L) : (i = o = void 0, u);
  }
  function C() {
    l !== void 0 && clearTimeout(l), d = 0, i = f = o = l = void 0;
  }
  function O() {
    return l === void 0 ? u : j(Qc());
  }
  function F() {
    var L = Qc(), T = b(L);
    if (i = arguments, o = this, f = L, T) {
      if (l === void 0)
        return A(f);
      if (p)
        return l = setTimeout(D, t), _(f);
    }
    return l === void 0 && (l = setTimeout(D, t)), u;
  }
  return F.cancel = C, F.flush = O, F;
}
function Ol(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function ZS(e) {
  return !!e && typeof e == "object";
}
function eC(e) {
  return typeof e == "symbol" || ZS(e) && JS.call(e) == $S;
}
function lp(e) {
  if (typeof e == "number")
    return e;
  if (eC(e))
    return cp;
  if (Ol(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Ol(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(MS, "");
  var n = VS.test(e);
  return n || qS.test(e) ? WS(e.slice(2), n ? 2 : 8) : US.test(e) ? cp : +e;
}
var tC = QS;
const fp = /* @__PURE__ */ Ul(tC);
function nC(e) {
  const t = zt(e);
  t.current = e, Ut(
    () => () => {
      t.current();
    },
    []
  );
}
function rC(e, t = 500, n) {
  const i = zt();
  nC(() => {
    i.current && i.current.cancel();
  });
  const o = Oo(() => {
    const a = fp(e, t, n), u = (...l) => a(...l);
    return u.cancel = () => {
      a.cancel();
    }, u.isPending = () => !!i.current, u.flush = () => a.flush(), u;
  }, [e, t, n]);
  return Ut(() => {
    i.current = fp(e, t, n);
  }, [e, t, n]), o;
}
const iC = async ({
  clusterName: e,
  body: t
}) => {
  const n = JSON.stringify({
    apiVersion: "authorization.k8s.io/v1",
    kind: "SelfSubjectAccessReview",
    spec: {
      resourceAttributes: {
        ...t
      }
    }
  });
  return nt.post(`/api/clusters/${e}/k8s/apis/authorization.k8s.io/v1/selfsubjectaccessreviews`, n, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  });
}, Pi = ({
  clusterName: e,
  namespace: t,
  apiGroup: n,
  typeName: i,
  verb: o,
  refetchInterval: a,
  enabler: u
}) => Mn({
  queryKey: ["usePermissions", e, t, n, i, o],
  queryFn: async () => (await iC({
    clusterName: e,
    body: {
      namespace: t,
      group: n,
      resource: i,
      verb: o
    }
  })).data,
  refetchInterval: a !== void 0 ? a : 5e3,
  enabled: u || !0
}), $0 = (e, t) => (typeof t?.label == "string" ? t.label : "").toLowerCase().includes(e.toLowerCase()), Ya = (e, t, n = []) => {
  const i = (a, u) => a.length !== u.length ? !1 : a.every((l, f) => l === u[f]), o = (a) => t.some(
    (u) => i(a, Array.isArray(u) ? u : [u])
  );
  return typeof e == "object" && !Array.isArray(e) && e !== null && Object.keys(e).forEach((a) => {
    const u = [...n, a];
    if (typeof e[a] == "object" && !Array.isArray(e[a]) && e[a] !== null)
      Ya(e[a], t, u), Object.keys(e[a]).length === 0 && !o(u) && delete e[a];
    else {
      const l = (typeof e[a] == "string" || Array.isArray(e[a])) && e[a].length === 0, f = e[a] === void 0;
      (l || f) && !o(u) && delete e[a];
    }
  }), e;
}, yo = (e) => (typeof e == "object" && !Array.isArray(e) && e !== null && Object.keys(e).forEach((t) => {
  t === "nodeNameBecauseOfSuddenBug" && (e.nodeName = e[t], delete e[t]), typeof e[t] == "object" && !Array.isArray(e[t]) && e[t] !== null && yo(e[t]);
}), typeof e == "object" && Array.isArray(e) && e !== null && typeof typeof e[0] == "object" && !Array.isArray(e[0]) && e[0] !== null && (e = e.map((t) => yo(t))), e), Tl = (e) => (typeof e == "object" && !Array.isArray(e) && e !== null && Object.keys(e).forEach((t) => {
  t === "nodeName" && (e.nodeNameBecauseOfSuddenBug = e[t], delete e[t]), typeof e[t] == "object" && !Array.isArray(e[t]) && e[t] !== null && Tl(e[t]);
}), typeof e == "object" && Array.isArray(e) && e !== null && typeof typeof e[0] == "object" && !Array.isArray(e[0]) && e[0] !== null && (e = e.map((t) => Tl(t))), e);
function su(e, t) {
  const n = 10 ** t;
  return Math.floor(e * n) / n;
}
const G4 = (e, t) => {
  let n = parseFloat(t.replace(/[a-zA-Zа-яА-Я]/g, ""));
  if (e === "cpu")
    return t.endsWith("m") && (n /= 1e3), su(n, 1);
  if (t.endsWith("m"))
    n /= 1e3;
  else if (t.endsWith("k"))
    n /= 1e6;
  else if (t.endsWith("M"))
    n /= 1e3;
  else if (t.endsWith("G"))
    n /= 1;
  else if (t.endsWith("T"))
    n *= 1e3;
  else if (t.endsWith("Ki"))
    n /= 1024, n /= 1e6;
  else if (t.endsWith("Mi"))
    n /= 1e3, n /= 1e3;
  else if (/^\d+(\.\d+)?$/.test(t))
    n /= 1e9;
  else
    throw new Error("Invalid value");
  return su(n, 1);
}, M0 = (e) => {
  if (typeof e == "string") {
    let t = parseFloat(e.replace(/[a-zA-Zа-яА-Я]/g, ""));
    return e.endsWith("m") && (t /= 1e3), su(t, 1);
  }
  return 0;
}, U0 = (e) => {
  if (typeof e == "string") {
    let t = parseFloat(e.replace(/[a-zA-Zа-яА-Я]/g, ""));
    if (e.endsWith("k"))
      t /= 1e6;
    else if (e.endsWith("m"))
      t /= 1e3;
    else if (e.endsWith("M"))
      t /= 1e3;
    else if (e.endsWith("G"))
      t /= 1;
    else if (e.endsWith("T"))
      t *= 1e3;
    else if (e.endsWith("P"))
      t *= 1e6;
    else if (e.endsWith("E"))
      t *= 1e9;
    else if (e.endsWith("Ki"))
      t *= 1024 / 1e9;
    else if (e.endsWith("Mi"))
      t /= 1048.576;
    else if (e.endsWith("Gi"))
      t *= 1.073741824;
    else if (e.endsWith("Ti"))
      t *= 1.099511628;
    else if (e.endsWith("Pi"))
      t *= 1.125899907;
    else if (e.endsWith("Ei"))
      t *= 1.152921505;
    else
      throw new Error("Invalid value");
    return su(t, 1);
  }
  return 0;
}, Eo = (e, t, n, i = []) => {
  let o = [];
  if (typeof e != "object" || e === null)
    return o;
  e[t] === n && o.push([...i]);
  for (const a in e)
    if (e.hasOwnProperty(a)) {
      const u = e[a];
      if (typeof u == "object" && u !== null) {
        const l = [...i, a], f = Eo(u, t, n, l);
        o = o.concat(f);
      }
    }
  return o;
}, Zc = (e, t) => {
  const n = mt.cloneDeep(e), i = Eo(t, "type", "rangeInputCpu");
  return Eo(t, "type", "rangeInputMemory").forEach((a) => {
    const u = a.filter((f) => typeof f == "string").filter((f) => f !== "properties"), l = mt.get(n, u);
    (l || l === 0) && mt.set(n, u, `${l}G`);
  }), i.forEach((a) => {
    const u = a.filter((f) => typeof f == "string").filter((f) => f !== "properties"), l = mt.get(n, u);
    (l || l === 0) && mt.set(n, u, `${parseFloat(l)}`);
  }), n;
}, hp = (e, t) => {
  const n = mt.cloneDeep(e), i = Eo(t, "type", "rangeInputCpu");
  return Eo(t, "type", "rangeInputMemory").forEach((a) => {
    const u = a.filter((f) => typeof f == "string").filter((f) => f !== "properties"), l = mt.get(n, u);
    (l || l === 0) && mt.set(n, u, U0(l));
  }), i.forEach((a) => {
    const u = a.filter((f) => typeof f == "string").filter((f) => f !== "properties"), l = mt.get(n, u);
    (l || l === 0) && mt.set(n, u, M0(l));
  }), n;
}, V0 = (e, t = []) => (Array.isArray(e) ? e.map((i, o) => [o, i]) : Object.entries(e)).flatMap(([i, o]) => {
  const a = [...t, i];
  return typeof o == "object" && o !== null ? [a, ...V0(o, a)] : [a];
}), sC = (e) => e.map((t, n) => e.slice(0, n + 1));
function oC(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function dp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function pp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dp(Object(n), !0).forEach(function(i) {
      oC(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : dp(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function aC(e, t) {
  if (e == null) return {};
  var n = {}, i = Object.keys(e), o, a;
  for (a = 0; a < i.length; a++)
    o = i[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function uC(e, t) {
  if (e == null) return {};
  var n = aC(e, t), i, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      i = a[o], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (n[i] = e[i]);
  }
  return n;
}
function cC(e, t) {
  return lC(e) || fC(e, t) || hC(e, t) || dC();
}
function lC(e) {
  if (Array.isArray(e)) return e;
}
function fC(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var n = [], i = !0, o = !1, a = void 0;
    try {
      for (var u = e[Symbol.iterator](), l; !(i = (l = u.next()).done) && (n.push(l.value), !(t && n.length === t)); i = !0)
        ;
    } catch (f) {
      o = !0, a = f;
    } finally {
      try {
        !i && u.return != null && u.return();
      } finally {
        if (o) throw a;
      }
    }
    return n;
  }
}
function hC(e, t) {
  if (e) {
    if (typeof e == "string") return gp(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return gp(e, t);
  }
}
function gp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function dC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pC(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function yp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function mp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yp(Object(n), !0).forEach(function(i) {
      pC(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yp(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function gC() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(i) {
    return t.reduceRight(function(o, a) {
      return a(o);
    }, i);
  };
}
function lo(e) {
  return function t() {
    for (var n = this, i = arguments.length, o = new Array(i), a = 0; a < i; a++)
      o[a] = arguments[a];
    return o.length >= e.length ? e.apply(this, o) : function() {
      for (var u = arguments.length, l = new Array(u), f = 0; f < u; f++)
        l[f] = arguments[f];
      return t.apply(n, [].concat(o, l));
    };
  };
}
function ou(e) {
  return {}.toString.call(e).includes("Object");
}
function yC(e) {
  return !Object.keys(e).length;
}
function So(e) {
  return typeof e == "function";
}
function mC(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function wC(e, t) {
  return ou(t) || ci("changeType"), Object.keys(t).some(function(n) {
    return !mC(e, n);
  }) && ci("changeField"), t;
}
function bC(e) {
  So(e) || ci("selectorType");
}
function vC(e) {
  So(e) || ou(e) || ci("handlerType"), ou(e) && Object.values(e).some(function(t) {
    return !So(t);
  }) && ci("handlersType");
}
function xC(e) {
  e || ci("initialIsRequired"), ou(e) || ci("initialType"), yC(e) && ci("initialContent");
}
function AC(e, t) {
  throw new Error(e[t] || e.default);
}
var EC = {
  initialIsRequired: "initial state is required",
  initialType: "initial state should be an object",
  initialContent: "initial state shouldn't be an empty object",
  handlerType: "handler should be an object or a function",
  handlersType: "all handlers should be a functions",
  selectorType: "selector should be a function",
  changeType: "provided value of changes should be an object",
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  default: "an unknown error accured in `state-local` package"
}, ci = lo(AC)(EC), Pa = {
  changes: wC,
  selector: bC,
  handler: vC,
  initial: xC
};
function SC(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  Pa.initial(e), Pa.handler(t);
  var n = {
    current: e
  }, i = lo(kC)(n, t), o = lo(_C)(n), a = lo(Pa.changes)(e), u = lo(CC)(n);
  function l() {
    var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(g) {
      return g;
    };
    return Pa.selector(d), d(n.current);
  }
  function f(d) {
    gC(i, o, a, u)(d);
  }
  return [l, f];
}
function CC(e, t) {
  return So(t) ? t(e.current) : t;
}
function _C(e, t) {
  return e.current = mp(mp({}, e.current), t), t;
}
function kC(e, t, n) {
  return So(t) ? t(e.current) : Object.keys(n).forEach(function(i) {
    var o;
    return (o = t[i]) === null || o === void 0 ? void 0 : o.call(t, e.current[i]);
  }), n;
}
var OC = {
  create: SC
}, TC = {
  paths: {
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"
  }
};
function IC(e) {
  return function t() {
    for (var n = this, i = arguments.length, o = new Array(i), a = 0; a < i; a++)
      o[a] = arguments[a];
    return o.length >= e.length ? e.apply(this, o) : function() {
      for (var u = arguments.length, l = new Array(u), f = 0; f < u; f++)
        l[f] = arguments[f];
      return t.apply(n, [].concat(o, l));
    };
  };
}
function FC(e) {
  return {}.toString.call(e).includes("Object");
}
function BC(e) {
  return e || wp("configIsRequired"), FC(e) || wp("configType"), e.urls ? (DC(), {
    paths: {
      vs: e.urls.monacoBase
    }
  }) : e;
}
function DC() {
  console.warn(q0.deprecation);
}
function LC(e, t) {
  throw new Error(e[t] || e.default);
}
var q0 = {
  configIsRequired: "the configuration object is required",
  configType: "the configuration object should be an object",
  default: "an unknown error accured in `@monaco-editor/loader` package",
  deprecation: `Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `
}, wp = IC(LC)(q0), PC = {
  config: BC
}, RC = function() {
  for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
    n[i] = arguments[i];
  return function(o) {
    return n.reduceRight(function(a, u) {
      return u(a);
    }, o);
  };
};
function W0(e, t) {
  return Object.keys(t).forEach(function(n) {
    t[n] instanceof Object && e[n] && Object.assign(t[n], W0(e[n], t[n]));
  }), pp(pp({}, e), t);
}
var jC = {
  type: "cancelation",
  msg: "operation is manually canceled"
};
function el(e) {
  var t = !1, n = new Promise(function(i, o) {
    e.then(function(a) {
      return t ? o(jC) : i(a);
    }), e.catch(o);
  });
  return n.cancel = function() {
    return t = !0;
  }, n;
}
var NC = OC.create({
  config: TC,
  isInitialized: !1,
  resolve: null,
  reject: null,
  monaco: null
}), K0 = cC(NC, 2), Bo = K0[0], xu = K0[1];
function $C(e) {
  var t = PC.config(e), n = t.monaco, i = uC(t, ["monaco"]);
  xu(function(o) {
    return {
      config: W0(o.config, i),
      monaco: n
    };
  });
}
function MC() {
  var e = Bo(function(t) {
    var n = t.monaco, i = t.isInitialized, o = t.resolve;
    return {
      monaco: n,
      isInitialized: i,
      resolve: o
    };
  });
  if (!e.isInitialized) {
    if (xu({
      isInitialized: !0
    }), e.monaco)
      return e.resolve(e.monaco), el(tl);
    if (window.monaco && window.monaco.editor)
      return H0(window.monaco), e.resolve(window.monaco), el(tl);
    RC(UC, qC)(WC);
  }
  return el(tl);
}
function UC(e) {
  return document.body.appendChild(e);
}
function VC(e) {
  var t = document.createElement("script");
  return e && (t.src = e), t;
}
function qC(e) {
  var t = Bo(function(i) {
    var o = i.config, a = i.reject;
    return {
      config: o,
      reject: a
    };
  }), n = VC("".concat(t.config.paths.vs, "/loader.js"));
  return n.onload = function() {
    return e();
  }, n.onerror = t.reject, n;
}
function WC() {
  var e = Bo(function(n) {
    var i = n.config, o = n.resolve, a = n.reject;
    return {
      config: i,
      resolve: o,
      reject: a
    };
  }), t = window.require;
  t.config(e.config), t(["vs/editor/editor.main"], function(n) {
    H0(n), e.resolve(n);
  }, function(n) {
    e.reject(n);
  });
}
function H0(e) {
  Bo().monaco || xu({
    monaco: e
  });
}
function KC() {
  return Bo(function(e) {
    var t = e.monaco;
    return t;
  });
}
var tl = new Promise(function(e, t) {
  return xu({
    resolve: e,
    reject: t
  });
}), Co = {
  config: $C,
  init: MC,
  __getMonacoInstance: KC
}, HC = { wrapper: { display: "flex", position: "relative", textAlign: "initial" }, fullWidth: { width: "100%" }, hide: { display: "none" } }, nl = HC, zC = { container: { display: "flex", height: "100%", width: "100%", justifyContent: "center", alignItems: "center" } }, GC = zC;
function JC({ children: e }) {
  return Tn.createElement("div", { style: GC.container }, e);
}
var YC = JC, XC = YC;
function QC({ width: e, height: t, isEditorReady: n, loading: i, _ref: o, className: a, wrapperProps: u }) {
  return Tn.createElement("section", { style: { ...nl.wrapper, width: e, height: t }, ...u }, !n && Tn.createElement(XC, null, i), Tn.createElement("div", { ref: o, style: { ...nl.fullWidth, ...!n && nl.hide }, className: a }));
}
var ZC = QC, z0 = jl(ZC);
function e3(e) {
  Ut(e, []);
}
var Zl = e3;
function t3(e, t, n = !0) {
  let i = zt(!0);
  Ut(i.current || !n ? () => {
    i.current = !1;
  } : e, t);
}
var $n = t3;
function mo() {
}
function hs(e, t, n, i) {
  return n3(e, i) || r3(e, t, n, i);
}
function n3(e, t) {
  return e.editor.getModel(G0(e, t));
}
function r3(e, t, n, i) {
  return e.editor.createModel(t, n, i ? G0(e, i) : void 0);
}
function G0(e, t) {
  return e.Uri.parse(t);
}
function i3({ original: e, modified: t, language: n, originalLanguage: i, modifiedLanguage: o, originalModelPath: a, modifiedModelPath: u, keepCurrentOriginalModel: l = !1, keepCurrentModifiedModel: f = !1, theme: d = "light", loading: g = "Loading...", options: p = {}, height: v = "100%", width: _ = "100%", className: A, wrapperProps: E = {}, beforeMount: b = mo, onMount: D = mo }) {
  let [j, C] = Ve(!1), [O, F] = Ve(!0), L = zt(null), T = zt(null), q = zt(null), J = zt(D), oe = zt(b), ae = zt(!1);
  Zl(() => {
    let fe = Co.init();
    return fe.then((Be) => (T.current = Be) && F(!1)).catch((Be) => Be?.type !== "cancelation" && console.error("Monaco initialization: error:", Be)), () => L.current ? Ae() : fe.cancel();
  }), $n(() => {
    if (L.current && T.current) {
      let fe = L.current.getOriginalEditor(), Be = hs(T.current, e || "", i || n || "text", a || "");
      Be !== fe.getModel() && fe.setModel(Be);
    }
  }, [a], j), $n(() => {
    if (L.current && T.current) {
      let fe = L.current.getModifiedEditor(), Be = hs(T.current, t || "", o || n || "text", u || "");
      Be !== fe.getModel() && fe.setModel(Be);
    }
  }, [u], j), $n(() => {
    let fe = L.current.getModifiedEditor();
    fe.getOption(T.current.editor.EditorOption.readOnly) ? fe.setValue(t || "") : t !== fe.getValue() && (fe.executeEdits("", [{ range: fe.getModel().getFullModelRange(), text: t || "", forceMoveMarkers: !0 }]), fe.pushUndoStop());
  }, [t], j), $n(() => {
    L.current?.getModel()?.original.setValue(e || "");
  }, [e], j), $n(() => {
    let { original: fe, modified: Be } = L.current.getModel();
    T.current.editor.setModelLanguage(fe, i || n || "text"), T.current.editor.setModelLanguage(Be, o || n || "text");
  }, [n, i, o], j), $n(() => {
    T.current?.editor.setTheme(d);
  }, [d], j), $n(() => {
    L.current?.updateOptions(p);
  }, [p], j);
  let he = bs(() => {
    if (!T.current) return;
    oe.current(T.current);
    let fe = hs(T.current, e || "", i || n || "text", a || ""), Be = hs(T.current, t || "", o || n || "text", u || "");
    L.current?.setModel({ original: fe, modified: Be });
  }, [n, t, o, e, i, a, u]), de = bs(() => {
    !ae.current && q.current && (L.current = T.current.editor.createDiffEditor(q.current, { automaticLayout: !0, ...p }), he(), T.current?.editor.setTheme(d), C(!0), ae.current = !0);
  }, [p, d, he]);
  Ut(() => {
    j && J.current(L.current, T.current);
  }, [j]), Ut(() => {
    !O && !j && de();
  }, [O, j, de]);
  function Ae() {
    let fe = L.current?.getModel();
    l || fe?.original?.dispose(), f || fe?.modified?.dispose(), L.current?.dispose();
  }
  return Tn.createElement(z0, { width: _, height: v, isEditorReady: j, loading: g, _ref: q, className: A, wrapperProps: E });
}
var s3 = i3, o3 = jl(s3);
function a3() {
  let [e, t] = Ve(Co.__getMonacoInstance());
  return Zl(() => {
    let n;
    return e || (n = Co.init(), n.then((i) => {
      t(i);
    })), () => n?.cancel();
  }), e;
}
var u3 = a3;
function c3(e) {
  let t = zt();
  return Ut(() => {
    t.current = e;
  }, [e]), t.current;
}
var l3 = c3, Ra = /* @__PURE__ */ new Map();
function f3({ defaultValue: e, defaultLanguage: t, defaultPath: n, value: i, language: o, path: a, theme: u = "light", line: l, loading: f = "Loading...", options: d = {}, overrideServices: g = {}, saveViewState: p = !0, keepCurrentModel: v = !1, width: _ = "100%", height: A = "100%", className: E, wrapperProps: b = {}, beforeMount: D = mo, onMount: j = mo, onChange: C, onValidate: O = mo }) {
  let [F, L] = Ve(!1), [T, q] = Ve(!0), J = zt(null), oe = zt(null), ae = zt(null), he = zt(j), de = zt(D), Ae = zt(), fe = zt(i), Be = l3(a), be = zt(!1), ve = zt(!1);
  Zl(() => {
    let pe = Co.init();
    return pe.then((je) => (J.current = je) && q(!1)).catch((je) => je?.type !== "cancelation" && console.error("Monaco initialization: error:", je)), () => oe.current ? we() : pe.cancel();
  }), $n(() => {
    let pe = hs(J.current, e || i || "", t || o || "", a || n || "");
    pe !== oe.current?.getModel() && (p && Ra.set(Be, oe.current?.saveViewState()), oe.current?.setModel(pe), p && oe.current?.restoreViewState(Ra.get(a)));
  }, [a], F), $n(() => {
    oe.current?.updateOptions(d);
  }, [d], F), $n(() => {
    !oe.current || i === void 0 || (oe.current.getOption(J.current.editor.EditorOption.readOnly) ? oe.current.setValue(i) : i !== oe.current.getValue() && (ve.current = !0, oe.current.executeEdits("", [{ range: oe.current.getModel().getFullModelRange(), text: i, forceMoveMarkers: !0 }]), oe.current.pushUndoStop(), ve.current = !1));
  }, [i], F), $n(() => {
    let pe = oe.current?.getModel();
    pe && o && J.current?.editor.setModelLanguage(pe, o);
  }, [o], F), $n(() => {
    l !== void 0 && oe.current?.revealLine(l);
  }, [l], F), $n(() => {
    J.current?.editor.setTheme(u);
  }, [u], F);
  let We = bs(() => {
    if (!(!ae.current || !J.current) && !be.current) {
      de.current(J.current);
      let pe = a || n, je = hs(J.current, i || e || "", t || o || "", pe || "");
      oe.current = J.current?.editor.create(ae.current, { model: je, automaticLayout: !0, ...d }, g), p && oe.current.restoreViewState(Ra.get(pe)), J.current.editor.setTheme(u), l !== void 0 && oe.current.revealLine(l), L(!0), be.current = !0;
    }
  }, [e, t, n, i, o, a, d, g, p, u, l]);
  Ut(() => {
    F && he.current(oe.current, J.current);
  }, [F]), Ut(() => {
    !T && !F && We();
  }, [T, F, We]), fe.current = i, Ut(() => {
    F && C && (Ae.current?.dispose(), Ae.current = oe.current?.onDidChangeModelContent((pe) => {
      ve.current || C(oe.current.getValue(), pe);
    }));
  }, [F, C]), Ut(() => {
    if (F) {
      let pe = J.current.editor.onDidChangeMarkers((je) => {
        let G = oe.current.getModel()?.uri;
        if (G && je.find((X) => X.path === G.path)) {
          let X = J.current.editor.getModelMarkers({ resource: G });
          O?.(X);
        }
      });
      return () => {
        pe?.dispose();
      };
    }
    return () => {
    };
  }, [F, O]);
  function we() {
    Ae.current?.dispose(), v ? p && Ra.set(a, oe.current.saveViewState()) : oe.current.getModel()?.dispose(), oe.current.dispose();
  }
  return Tn.createElement(z0, { width: _, height: A, isEditorReady: F, loading: f, _ref: ae, className: E, wrapperProps: b });
}
var h3 = f3, J0 = jl(h3), ef = J0;
const d3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DiffEditor: o3,
  Editor: J0,
  default: ef,
  loader: Co,
  useMonaco: u3
}, Symbol.toStringTag, { value: "Module" })), tf = Symbol.for("yaml.alias"), Il = Symbol.for("yaml.document"), li = Symbol.for("yaml.map"), Y0 = Symbol.for("yaml.pair"), _r = Symbol.for("yaml.scalar"), Ds = Symbol.for("yaml.seq"), tr = Symbol.for("yaml.node.type"), Ls = (e) => !!e && typeof e == "object" && e[tr] === tf, Do = (e) => !!e && typeof e == "object" && e[tr] === Il, Lo = (e) => !!e && typeof e == "object" && e[tr] === li, Yt = (e) => !!e && typeof e == "object" && e[tr] === Y0, Tt = (e) => !!e && typeof e == "object" && e[tr] === _r, Po = (e) => !!e && typeof e == "object" && e[tr] === Ds;
function Gt(e) {
  if (e && typeof e == "object")
    switch (e[tr]) {
      case li:
      case Ds:
        return !0;
    }
  return !1;
}
function Jt(e) {
  if (e && typeof e == "object")
    switch (e[tr]) {
      case tf:
      case li:
      case _r:
      case Ds:
        return !0;
    }
  return !1;
}
const p3 = (e) => (Tt(e) || Gt(e)) && !!e.anchor, Ci = Symbol("break visit"), g3 = Symbol("skip children"), wo = Symbol("remove node");
function $i(e, t) {
  const n = y3(t);
  Do(e) ? ds(null, e.contents, n, Object.freeze([e])) === wo && (e.contents = null) : ds(null, e, n, Object.freeze([]));
}
$i.BREAK = Ci;
$i.SKIP = g3;
$i.REMOVE = wo;
function ds(e, t, n, i) {
  const o = m3(e, t, n, i);
  if (Jt(o) || Yt(o))
    return w3(e, i, o), ds(e, o, n, i);
  if (typeof o != "symbol") {
    if (Gt(t)) {
      i = Object.freeze(i.concat(t));
      for (let a = 0; a < t.items.length; ++a) {
        const u = ds(a, t.items[a], n, i);
        if (typeof u == "number")
          a = u - 1;
        else {
          if (u === Ci)
            return Ci;
          u === wo && (t.items.splice(a, 1), a -= 1);
        }
      }
    } else if (Yt(t)) {
      i = Object.freeze(i.concat(t));
      const a = ds("key", t.key, n, i);
      if (a === Ci)
        return Ci;
      a === wo && (t.key = null);
      const u = ds("value", t.value, n, i);
      if (u === Ci)
        return Ci;
      u === wo && (t.value = null);
    }
  }
  return o;
}
function y3(e) {
  return typeof e == "object" && (e.Collection || e.Node || e.Value) ? Object.assign({
    Alias: e.Node,
    Map: e.Node,
    Scalar: e.Node,
    Seq: e.Node
  }, e.Value && {
    Map: e.Value,
    Scalar: e.Value,
    Seq: e.Value
  }, e.Collection && {
    Map: e.Collection,
    Seq: e.Collection
  }, e) : e;
}
function m3(e, t, n, i) {
  if (typeof n == "function")
    return n(e, t, i);
  if (Lo(t))
    return n.Map?.(e, t, i);
  if (Po(t))
    return n.Seq?.(e, t, i);
  if (Yt(t))
    return n.Pair?.(e, t, i);
  if (Tt(t))
    return n.Scalar?.(e, t, i);
  if (Ls(t))
    return n.Alias?.(e, t, i);
}
function w3(e, t, n) {
  const i = t[t.length - 1];
  if (Gt(i))
    i.items[e] = n;
  else if (Yt(i))
    e === "key" ? i.key = n : i.value = n;
  else if (Do(i))
    i.contents = n;
  else {
    const o = Ls(i) ? "alias" : "scalar";
    throw new Error(`Cannot replace node with ${o} parent`);
  }
}
const b3 = {
  "!": "%21",
  ",": "%2C",
  "[": "%5B",
  "]": "%5D",
  "{": "%7B",
  "}": "%7D"
}, v3 = (e) => e.replace(/[!,[\]{}]/g, (t) => b3[t]);
class vn {
  constructor(t, n) {
    this.docStart = null, this.docEnd = !1, this.yaml = Object.assign({}, vn.defaultYaml, t), this.tags = Object.assign({}, vn.defaultTags, n);
  }
  clone() {
    const t = new vn(this.yaml, this.tags);
    return t.docStart = this.docStart, t;
  }
  /**
   * During parsing, get a Directives instance for the current document and
   * update the stream state according to the current version's spec.
   */
  atDocument() {
    const t = new vn(this.yaml, this.tags);
    switch (this.yaml.version) {
      case "1.1":
        this.atNextDocument = !0;
        break;
      case "1.2":
        this.atNextDocument = !1, this.yaml = {
          explicit: vn.defaultYaml.explicit,
          version: "1.2"
        }, this.tags = Object.assign({}, vn.defaultTags);
        break;
    }
    return t;
  }
  /**
   * @param onError - May be called even if the action was successful
   * @returns `true` on success
   */
  add(t, n) {
    this.atNextDocument && (this.yaml = { explicit: vn.defaultYaml.explicit, version: "1.1" }, this.tags = Object.assign({}, vn.defaultTags), this.atNextDocument = !1);
    const i = t.trim().split(/[ \t]+/), o = i.shift();
    switch (o) {
      case "%TAG": {
        if (i.length !== 2 && (n(0, "%TAG directive should contain exactly two parts"), i.length < 2))
          return !1;
        const [a, u] = i;
        return this.tags[a] = u, !0;
      }
      case "%YAML": {
        if (this.yaml.explicit = !0, i.length !== 1)
          return n(0, "%YAML directive should contain exactly one part"), !1;
        const [a] = i;
        if (a === "1.1" || a === "1.2")
          return this.yaml.version = a, !0;
        {
          const u = /^\d+\.\d+$/.test(a);
          return n(6, `Unsupported YAML version ${a}`, u), !1;
        }
      }
      default:
        return n(0, `Unknown directive ${o}`, !0), !1;
    }
  }
  /**
   * Resolves a tag, matching handles to those defined in %TAG directives.
   *
   * @returns Resolved tag, which may also be the non-specific tag `'!'` or a
   *   `'!local'` tag, or `null` if unresolvable.
   */
  tagName(t, n) {
    if (t === "!")
      return "!";
    if (t[0] !== "!")
      return n(`Not a valid tag: ${t}`), null;
    if (t[1] === "<") {
      const u = t.slice(2, -1);
      return u === "!" || u === "!!" ? (n(`Verbatim tags aren't resolved, so ${t} is invalid.`), null) : (t[t.length - 1] !== ">" && n("Verbatim tags must end with a >"), u);
    }
    const [, i, o] = t.match(/^(.*!)([^!]*)$/s);
    o || n(`The ${t} tag has no suffix`);
    const a = this.tags[i];
    if (a)
      try {
        return a + decodeURIComponent(o);
      } catch (u) {
        return n(String(u)), null;
      }
    return i === "!" ? t : (n(`Could not resolve tag: ${t}`), null);
  }
  /**
   * Given a fully resolved tag, returns its printable string form,
   * taking into account current tag prefixes and defaults.
   */
  tagString(t) {
    for (const [n, i] of Object.entries(this.tags))
      if (t.startsWith(i))
        return n + v3(t.substring(i.length));
    return t[0] === "!" ? t : `!<${t}>`;
  }
  toString(t) {
    const n = this.yaml.explicit ? [`%YAML ${this.yaml.version || "1.2"}`] : [], i = Object.entries(this.tags);
    let o;
    if (t && i.length > 0 && Jt(t.contents)) {
      const a = {};
      $i(t.contents, (u, l) => {
        Jt(l) && l.tag && (a[l.tag] = !0);
      }), o = Object.keys(a);
    } else
      o = [];
    for (const [a, u] of i)
      a === "!!" && u === "tag:yaml.org,2002:" || (!t || o.some((l) => l.startsWith(u))) && n.push(`%TAG ${a} ${u}`);
    return n.join(`
`);
  }
}
vn.defaultYaml = { explicit: !1, version: "1.2" };
vn.defaultTags = { "!!": "tag:yaml.org,2002:" };
function X0(e) {
  if (/[\x00-\x19\s,[\]{}]/.test(e)) {
    const n = `Anchor must not contain whitespace or control characters: ${JSON.stringify(e)}`;
    throw new Error(n);
  }
  return !0;
}
function Q0(e) {
  const t = /* @__PURE__ */ new Set();
  return $i(e, {
    Value(n, i) {
      i.anchor && t.add(i.anchor);
    }
  }), t;
}
function Z0(e, t) {
  for (let n = 1; ; ++n) {
    const i = `${e}${n}`;
    if (!t.has(i))
      return i;
  }
}
function x3(e, t) {
  const n = [], i = /* @__PURE__ */ new Map();
  let o = null;
  return {
    onAnchor: (a) => {
      n.push(a), o || (o = Q0(e));
      const u = Z0(t, o);
      return o.add(u), u;
    },
    /**
     * With circular references, the source node is only resolved after all
     * of its child nodes are. This is why anchors are set only after all of
     * the nodes have been created.
     */
    setAnchors: () => {
      for (const a of n) {
        const u = i.get(a);
        if (typeof u == "object" && u.anchor && (Tt(u.node) || Gt(u.node)))
          u.node.anchor = u.anchor;
        else {
          const l = new Error("Failed to resolve repeated object (this should not happen)");
          throw l.source = a, l;
        }
      }
    },
    sourceObjects: i
  };
}
function ps(e, t, n, i) {
  if (i && typeof i == "object")
    if (Array.isArray(i))
      for (let o = 0, a = i.length; o < a; ++o) {
        const u = i[o], l = ps(e, i, String(o), u);
        l === void 0 ? delete i[o] : l !== u && (i[o] = l);
      }
    else if (i instanceof Map)
      for (const o of Array.from(i.keys())) {
        const a = i.get(o), u = ps(e, i, o, a);
        u === void 0 ? i.delete(o) : u !== a && i.set(o, u);
      }
    else if (i instanceof Set)
      for (const o of Array.from(i)) {
        const a = ps(e, i, o, o);
        a === void 0 ? i.delete(o) : a !== o && (i.delete(o), i.add(a));
      }
    else
      for (const [o, a] of Object.entries(i)) {
        const u = ps(e, i, o, a);
        u === void 0 ? delete i[o] : u !== a && (i[o] = u);
      }
  return e.call(t, n, i);
}
function Zn(e, t, n) {
  if (Array.isArray(e))
    return e.map((i, o) => Zn(i, String(o), n));
  if (e && typeof e.toJSON == "function") {
    if (!n || !p3(e))
      return e.toJSON(t, n);
    const i = { aliasCount: 0, count: 1, res: void 0 };
    n.anchors.set(e, i), n.onCreate = (a) => {
      i.res = a, delete n.onCreate;
    };
    const o = e.toJSON(t, n);
    return n.onCreate && n.onCreate(o), o;
  }
  return typeof e == "bigint" && !n?.keep ? Number(e) : e;
}
class nf {
  constructor(t) {
    Object.defineProperty(this, tr, { value: t });
  }
  /** Create a copy of this node.  */
  clone() {
    const t = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
    return this.range && (t.range = this.range.slice()), t;
  }
  /** A plain JavaScript representation of this node. */
  toJS(t, { mapAsMap: n, maxAliasCount: i, onAnchor: o, reviver: a } = {}) {
    if (!Do(t))
      throw new TypeError("A document argument is required");
    const u = {
      anchors: /* @__PURE__ */ new Map(),
      doc: t,
      keep: !0,
      mapAsMap: n === !0,
      mapKeyWarned: !1,
      maxAliasCount: typeof i == "number" ? i : 100
    }, l = Zn(this, "", u);
    if (typeof o == "function")
      for (const { count: f, res: d } of u.anchors.values())
        o(d, f);
    return typeof a == "function" ? ps(a, { "": l }, "", l) : l;
  }
}
class rf extends nf {
  constructor(t) {
    super(tf), this.source = t, Object.defineProperty(this, "tag", {
      set() {
        throw new Error("Alias nodes cannot have tags");
      }
    });
  }
  /**
   * Resolve the value of this alias within `doc`, finding the last
   * instance of the `source` anchor before this node.
   */
  resolve(t) {
    let n;
    return $i(t, {
      Node: (i, o) => {
        if (o === this)
          return $i.BREAK;
        o.anchor === this.source && (n = o);
      }
    }), n;
  }
  toJSON(t, n) {
    if (!n)
      return { source: this.source };
    const { anchors: i, doc: o, maxAliasCount: a } = n, u = this.resolve(o);
    if (!u) {
      const f = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
      throw new ReferenceError(f);
    }
    let l = i.get(u);
    if (l || (Zn(u, null, n), l = i.get(u)), !l || l.res === void 0) {
      const f = "This should not happen: Alias anchor was not resolved?";
      throw new ReferenceError(f);
    }
    if (a >= 0 && (l.count += 1, l.aliasCount === 0 && (l.aliasCount = Xa(o, u, i)), l.count * l.aliasCount > a)) {
      const f = "Excessive alias count indicates a resource exhaustion attack";
      throw new ReferenceError(f);
    }
    return l.res;
  }
  toString(t, n, i) {
    const o = `*${this.source}`;
    if (t) {
      if (X0(this.source), t.options.verifyAliasOrder && !t.anchors.has(this.source)) {
        const a = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
        throw new Error(a);
      }
      if (t.implicitKey)
        return `${o} `;
    }
    return o;
  }
}
function Xa(e, t, n) {
  if (Ls(t)) {
    const i = t.resolve(e), o = n && i && n.get(i);
    return o ? o.count * o.aliasCount : 0;
  } else if (Gt(t)) {
    let i = 0;
    for (const o of t.items) {
      const a = Xa(e, o, n);
      a > i && (i = a);
    }
    return i;
  } else if (Yt(t)) {
    const i = Xa(e, t.key, n), o = Xa(e, t.value, n);
    return Math.max(i, o);
  }
  return 1;
}
const eg = (e) => !e || typeof e != "function" && typeof e != "object";
class qe extends nf {
  constructor(t) {
    super(_r), this.value = t;
  }
  toJSON(t, n) {
    return n?.keep ? this.value : Zn(this.value, t, n);
  }
  toString() {
    return String(this.value);
  }
}
qe.BLOCK_FOLDED = "BLOCK_FOLDED";
qe.BLOCK_LITERAL = "BLOCK_LITERAL";
qe.PLAIN = "PLAIN";
qe.QUOTE_DOUBLE = "QUOTE_DOUBLE";
qe.QUOTE_SINGLE = "QUOTE_SINGLE";
const A3 = "tag:yaml.org,2002:";
function E3(e, t, n) {
  if (t) {
    const i = n.filter((a) => a.tag === t), o = i.find((a) => !a.format) ?? i[0];
    if (!o)
      throw new Error(`Tag ${t} not found`);
    return o;
  }
  return n.find((i) => i.identify?.(e) && !i.format);
}
function _o(e, t, n) {
  if (Do(e) && (e = e.contents), Jt(e))
    return e;
  if (Yt(e)) {
    const p = n.schema[li].createNode?.(n.schema, null, n);
    return p.items.push(e), p;
  }
  (e instanceof String || e instanceof Number || e instanceof Boolean || typeof BigInt < "u" && e instanceof BigInt) && (e = e.valueOf());
  const { aliasDuplicateObjects: i, onAnchor: o, onTagObj: a, schema: u, sourceObjects: l } = n;
  let f;
  if (i && e && typeof e == "object") {
    if (f = l.get(e), f)
      return f.anchor || (f.anchor = o(e)), new rf(f.anchor);
    f = { anchor: null, node: null }, l.set(e, f);
  }
  t?.startsWith("!!") && (t = A3 + t.slice(2));
  let d = E3(e, t, u.tags);
  if (!d) {
    if (e && typeof e.toJSON == "function" && (e = e.toJSON()), !e || typeof e != "object") {
      const p = new qe(e);
      return f && (f.node = p), p;
    }
    d = e instanceof Map ? u[li] : Symbol.iterator in Object(e) ? u[Ds] : u[li];
  }
  a && (a(d), delete n.onTagObj);
  const g = d?.createNode ? d.createNode(n.schema, e, n) : typeof d?.nodeClass?.from == "function" ? d.nodeClass.from(n.schema, e, n) : new qe(e);
  return t ? g.tag = t : d.default || (g.tag = d.tag), f && (f.node = g), g;
}
function au(e, t, n) {
  let i = n;
  for (let o = t.length - 1; o >= 0; --o) {
    const a = t[o];
    if (typeof a == "number" && Number.isInteger(a) && a >= 0) {
      const u = [];
      u[a] = i, i = u;
    } else
      i = /* @__PURE__ */ new Map([[a, i]]);
  }
  return _o(i, void 0, {
    aliasDuplicateObjects: !1,
    keepUndefined: !1,
    onAnchor: () => {
      throw new Error("This should not happen, please report a bug.");
    },
    schema: e,
    sourceObjects: /* @__PURE__ */ new Map()
  });
}
const fo = (e) => e == null || typeof e == "object" && !!e[Symbol.iterator]().next().done;
class tg extends nf {
  constructor(t, n) {
    super(t), Object.defineProperty(this, "schema", {
      value: n,
      configurable: !0,
      enumerable: !1,
      writable: !0
    });
  }
  /**
   * Create a copy of this collection.
   *
   * @param schema - If defined, overwrites the original's schema
   */
  clone(t) {
    const n = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
    return t && (n.schema = t), n.items = n.items.map((i) => Jt(i) || Yt(i) ? i.clone(t) : i), this.range && (n.range = this.range.slice()), n;
  }
  /**
   * Adds a value to the collection. For `!!map` and `!!omap` the value must
   * be a Pair instance or a `{ key, value }` object, which may not have a key
   * that already exists in the map.
   */
  addIn(t, n) {
    if (fo(t))
      this.add(n);
    else {
      const [i, ...o] = t, a = this.get(i, !0);
      if (Gt(a))
        a.addIn(o, n);
      else if (a === void 0 && this.schema)
        this.set(i, au(this.schema, o, n));
      else
        throw new Error(`Expected YAML collection at ${i}. Remaining path: ${o}`);
    }
  }
  /**
   * Removes a value from the collection.
   * @returns `true` if the item was found and removed.
   */
  deleteIn(t) {
    const [n, ...i] = t;
    if (i.length === 0)
      return this.delete(n);
    const o = this.get(n, !0);
    if (Gt(o))
      return o.deleteIn(i);
    throw new Error(`Expected YAML collection at ${n}. Remaining path: ${i}`);
  }
  /**
   * Returns item at `key`, or `undefined` if not found. By default unwraps
   * scalar values from their surrounding node; to disable set `keepScalar` to
   * `true` (collections are always returned intact).
   */
  getIn(t, n) {
    const [i, ...o] = t, a = this.get(i, !0);
    return o.length === 0 ? !n && Tt(a) ? a.value : a : Gt(a) ? a.getIn(o, n) : void 0;
  }
  hasAllNullValues(t) {
    return this.items.every((n) => {
      if (!Yt(n))
        return !1;
      const i = n.value;
      return i == null || t && Tt(i) && i.value == null && !i.commentBefore && !i.comment && !i.tag;
    });
  }
  /**
   * Checks if the collection includes a value with the key `key`.
   */
  hasIn(t) {
    const [n, ...i] = t;
    if (i.length === 0)
      return this.has(n);
    const o = this.get(n, !0);
    return Gt(o) ? o.hasIn(i) : !1;
  }
  /**
   * Sets a value in this collection. For `!!set`, `value` needs to be a
   * boolean to add/remove the item from the set.
   */
  setIn(t, n) {
    const [i, ...o] = t;
    if (o.length === 0)
      this.set(i, n);
    else {
      const a = this.get(i, !0);
      if (Gt(a))
        a.setIn(o, n);
      else if (a === void 0 && this.schema)
        this.set(i, au(this.schema, o, n));
      else
        throw new Error(`Expected YAML collection at ${i}. Remaining path: ${o}`);
    }
  }
}
const S3 = (e) => e.replace(/^(?!$)(?: $)?/gm, "#");
function Vr(e, t) {
  return /^\n+$/.test(e) ? e.substring(1) : t ? e.replace(/^(?! *$)/gm, t) : e;
}
const Ii = (e, t, n) => e.endsWith(`
`) ? Vr(n, t) : n.includes(`
`) ? `
` + Vr(n, t) : (e.endsWith(" ") ? "" : " ") + n, ng = "flow", Fl = "block", Qa = "quoted";
function Au(e, t, n = "flow", { indentAtStart: i, lineWidth: o = 80, minContentWidth: a = 20, onFold: u, onOverflow: l } = {}) {
  if (!o || o < 0)
    return e;
  o < a && (a = 0);
  const f = Math.max(1 + a, 1 + o - t.length);
  if (e.length <= f)
    return e;
  const d = [], g = {};
  let p = o - t.length;
  typeof i == "number" && (i > o - Math.max(2, a) ? d.push(0) : p = o - i);
  let v, _, A = !1, E = -1, b = -1, D = -1;
  n === Fl && (E = bp(e, E, t.length), E !== -1 && (p = E + f));
  for (let C; C = e[E += 1]; ) {
    if (n === Qa && C === "\\") {
      switch (b = E, e[E + 1]) {
        case "x":
          E += 3;
          break;
        case "u":
          E += 5;
          break;
        case "U":
          E += 9;
          break;
        default:
          E += 1;
      }
      D = E;
    }
    if (C === `
`)
      n === Fl && (E = bp(e, E, t.length)), p = E + t.length + f, v = void 0;
    else {
      if (C === " " && _ && _ !== " " && _ !== `
` && _ !== "	") {
        const O = e[E + 1];
        O && O !== " " && O !== `
` && O !== "	" && (v = E);
      }
      if (E >= p)
        if (v)
          d.push(v), p = v + f, v = void 0;
        else if (n === Qa) {
          for (; _ === " " || _ === "	"; )
            _ = C, C = e[E += 1], A = !0;
          const O = E > D + 1 ? E - 2 : b - 1;
          if (g[O])
            return e;
          d.push(O), g[O] = !0, p = O + f, v = void 0;
        } else
          A = !0;
    }
    _ = C;
  }
  if (A && l && l(), d.length === 0)
    return e;
  u && u();
  let j = e.slice(0, d[0]);
  for (let C = 0; C < d.length; ++C) {
    const O = d[C], F = d[C + 1] || e.length;
    O === 0 ? j = `
${t}${e.slice(0, F)}` : (n === Qa && g[O] && (j += `${e[O]}\\`), j += `
${t}${e.slice(O + 1, F)}`);
  }
  return j;
}
function bp(e, t, n) {
  let i = t, o = t + 1, a = e[o];
  for (; a === " " || a === "	"; )
    if (t < o + n)
      a = e[++t];
    else {
      do
        a = e[++t];
      while (a && a !== `
`);
      i = t, o = t + 1, a = e[o];
    }
  return i;
}
const Eu = (e, t) => ({
  indentAtStart: t ? e.indent.length : e.indentAtStart,
  lineWidth: e.options.lineWidth,
  minContentWidth: e.options.minContentWidth
}), Su = (e) => /^(%|---|\.\.\.)/m.test(e);
function C3(e, t, n) {
  if (!t || t < 0)
    return !1;
  const i = t - n, o = e.length;
  if (o <= i)
    return !1;
  for (let a = 0, u = 0; a < o; ++a)
    if (e[a] === `
`) {
      if (a - u > i)
        return !0;
      if (u = a + 1, o - u <= i)
        return !1;
    }
  return !0;
}
function bo(e, t) {
  const n = JSON.stringify(e);
  if (t.options.doubleQuotedAsJSON)
    return n;
  const { implicitKey: i } = t, o = t.options.doubleQuotedMinMultiLineLength, a = t.indent || (Su(e) ? "  " : "");
  let u = "", l = 0;
  for (let f = 0, d = n[f]; d; d = n[++f])
    if (d === " " && n[f + 1] === "\\" && n[f + 2] === "n" && (u += n.slice(l, f) + "\\ ", f += 1, l = f, d = "\\"), d === "\\")
      switch (n[f + 1]) {
        case "u":
          {
            u += n.slice(l, f);
            const g = n.substr(f + 2, 4);
            switch (g) {
              case "0000":
                u += "\\0";
                break;
              case "0007":
                u += "\\a";
                break;
              case "000b":
                u += "\\v";
                break;
              case "001b":
                u += "\\e";
                break;
              case "0085":
                u += "\\N";
                break;
              case "00a0":
                u += "\\_";
                break;
              case "2028":
                u += "\\L";
                break;
              case "2029":
                u += "\\P";
                break;
              default:
                g.substr(0, 2) === "00" ? u += "\\x" + g.substr(2) : u += n.substr(f, 6);
            }
            f += 5, l = f + 1;
          }
          break;
        case "n":
          if (i || n[f + 2] === '"' || n.length < o)
            f += 1;
          else {
            for (u += n.slice(l, f) + `

`; n[f + 2] === "\\" && n[f + 3] === "n" && n[f + 4] !== '"'; )
              u += `
`, f += 2;
            u += a, n[f + 2] === " " && (u += "\\"), f += 1, l = f + 1;
          }
          break;
        default:
          f += 1;
      }
  return u = l ? u + n.slice(l) : n, i ? u : Au(u, a, Qa, Eu(t, !1));
}
function Bl(e, t) {
  if (t.options.singleQuote === !1 || t.implicitKey && e.includes(`
`) || /[ \t]\n|\n[ \t]/.test(e))
    return bo(e, t);
  const n = t.indent || (Su(e) ? "  " : ""), i = "'" + e.replace(/'/g, "''").replace(/\n+/g, `$&
${n}`) + "'";
  return t.implicitKey ? i : Au(i, n, ng, Eu(t, !1));
}
function gs(e, t) {
  const { singleQuote: n } = t.options;
  let i;
  if (n === !1)
    i = bo;
  else {
    const o = e.includes('"'), a = e.includes("'");
    o && !a ? i = Bl : a && !o ? i = bo : i = n ? Bl : bo;
  }
  return i(e, t);
}
let Dl;
try {
  Dl = new RegExp(`(^|(?<!
))
+(?!
|$)`, "g");
} catch {
  Dl = /\n+(?!\n|$)/g;
}
function Za({ comment: e, type: t, value: n }, i, o, a) {
  const { blockQuote: u, commentString: l, lineWidth: f } = i.options;
  if (!u || /\n[\t ]+$/.test(n) || /^\s*$/.test(n))
    return gs(n, i);
  const d = i.indent || (i.forceBlockIndent || Su(n) ? "  " : ""), g = u === "literal" ? !0 : u === "folded" || t === qe.BLOCK_FOLDED ? !1 : t === qe.BLOCK_LITERAL ? !0 : !C3(n, f, d.length);
  if (!n)
    return g ? `|
` : `>
`;
  let p, v;
  for (v = n.length; v > 0; --v) {
    const F = n[v - 1];
    if (F !== `
` && F !== "	" && F !== " ")
      break;
  }
  let _ = n.substring(v);
  const A = _.indexOf(`
`);
  A === -1 ? p = "-" : n === _ || A !== _.length - 1 ? (p = "+", a && a()) : p = "", _ && (n = n.slice(0, -_.length), _[_.length - 1] === `
` && (_ = _.slice(0, -1)), _ = _.replace(Dl, `$&${d}`));
  let E = !1, b, D = -1;
  for (b = 0; b < n.length; ++b) {
    const F = n[b];
    if (F === " ")
      E = !0;
    else if (F === `
`)
      D = b;
    else
      break;
  }
  let j = n.substring(0, D < b ? D + 1 : b);
  j && (n = n.substring(j.length), j = j.replace(/\n+/g, `$&${d}`));
  let O = (E ? d ? "2" : "1" : "") + p;
  if (e && (O += " " + l(e.replace(/ ?[\r\n]+/g, " ")), o && o()), !g) {
    const F = n.replace(/\n+/g, `
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, "$1$2").replace(/\n+/g, `$&${d}`);
    let L = !1;
    const T = Eu(i, !0);
    u !== "folded" && t !== qe.BLOCK_FOLDED && (T.onOverflow = () => {
      L = !0;
    });
    const q = Au(`${j}${F}${_}`, d, Fl, T);
    if (!L)
      return `>${O}
${d}${q}`;
  }
  return n = n.replace(/\n+/g, `$&${d}`), `|${O}
${d}${j}${n}${_}`;
}
function _3(e, t, n, i) {
  const { type: o, value: a } = e, { actualString: u, implicitKey: l, indent: f, indentStep: d, inFlow: g } = t;
  if (l && a.includes(`
`) || g && /[[\]{},]/.test(a))
    return gs(a, t);
  if (!a || /^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(a))
    return l || g || !a.includes(`
`) ? gs(a, t) : Za(e, t, n, i);
  if (!l && !g && o !== qe.PLAIN && a.includes(`
`))
    return Za(e, t, n, i);
  if (Su(a)) {
    if (f === "")
      return t.forceBlockIndent = !0, Za(e, t, n, i);
    if (l && f === d)
      return gs(a, t);
  }
  const p = a.replace(/\n+/g, `$&
${f}`);
  if (u) {
    const v = (E) => E.default && E.tag !== "tag:yaml.org,2002:str" && E.test?.test(p), { compat: _, tags: A } = t.doc.schema;
    if (A.some(v) || _?.some(v))
      return gs(a, t);
  }
  return l ? p : Au(p, f, ng, Eu(t, !1));
}
function sf(e, t, n, i) {
  const { implicitKey: o, inFlow: a } = t, u = typeof e.value == "string" ? e : Object.assign({}, e, { value: String(e.value) });
  let { type: l } = e;
  l !== qe.QUOTE_DOUBLE && /[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(u.value) && (l = qe.QUOTE_DOUBLE);
  const f = (g) => {
    switch (g) {
      case qe.BLOCK_FOLDED:
      case qe.BLOCK_LITERAL:
        return o || a ? gs(u.value, t) : Za(u, t, n, i);
      case qe.QUOTE_DOUBLE:
        return bo(u.value, t);
      case qe.QUOTE_SINGLE:
        return Bl(u.value, t);
      case qe.PLAIN:
        return _3(u, t, n, i);
      default:
        return null;
    }
  };
  let d = f(l);
  if (d === null) {
    const { defaultKeyType: g, defaultStringType: p } = t.options, v = o && g || p;
    if (d = f(v), d === null)
      throw new Error(`Unsupported default string type ${v}`);
  }
  return d;
}
function rg(e, t) {
  const n = Object.assign({
    blockQuote: !0,
    commentString: S3,
    defaultKeyType: null,
    defaultStringType: "PLAIN",
    directives: null,
    doubleQuotedAsJSON: !1,
    doubleQuotedMinMultiLineLength: 40,
    falseStr: "false",
    flowCollectionPadding: !0,
    indentSeq: !0,
    lineWidth: 80,
    minContentWidth: 20,
    nullStr: "null",
    simpleKeys: !1,
    singleQuote: null,
    trueStr: "true",
    verifyAliasOrder: !0
  }, e.schema.toStringOptions, t);
  let i;
  switch (n.collectionStyle) {
    case "block":
      i = !1;
      break;
    case "flow":
      i = !0;
      break;
    default:
      i = null;
  }
  return {
    anchors: /* @__PURE__ */ new Set(),
    doc: e,
    flowCollectionPadding: n.flowCollectionPadding ? " " : "",
    indent: "",
    indentStep: typeof n.indent == "number" ? " ".repeat(n.indent) : "  ",
    inFlow: i,
    options: n
  };
}
function k3(e, t) {
  if (t.tag) {
    const o = e.filter((a) => a.tag === t.tag);
    if (o.length > 0)
      return o.find((a) => a.format === t.format) ?? o[0];
  }
  let n, i;
  if (Tt(t)) {
    i = t.value;
    let o = e.filter((a) => a.identify?.(i));
    if (o.length > 1) {
      const a = o.filter((u) => u.test);
      a.length > 0 && (o = a);
    }
    n = o.find((a) => a.format === t.format) ?? o.find((a) => !a.format);
  } else
    i = t, n = e.find((o) => o.nodeClass && i instanceof o.nodeClass);
  if (!n) {
    const o = i?.constructor?.name ?? typeof i;
    throw new Error(`Tag not resolved for ${o} value`);
  }
  return n;
}
function O3(e, t, { anchors: n, doc: i }) {
  if (!i.directives)
    return "";
  const o = [], a = (Tt(e) || Gt(e)) && e.anchor;
  a && X0(a) && (n.add(a), o.push(`&${a}`));
  const u = e.tag ? e.tag : t.default ? null : t.tag;
  return u && o.push(i.directives.tagString(u)), o.join(" ");
}
function ks(e, t, n, i) {
  if (Yt(e))
    return e.toString(t, n, i);
  if (Ls(e)) {
    if (t.doc.directives)
      return e.toString(t);
    if (t.resolvedAliases?.has(e))
      throw new TypeError("Cannot stringify circular structure without alias nodes");
    t.resolvedAliases ? t.resolvedAliases.add(e) : t.resolvedAliases = /* @__PURE__ */ new Set([e]), e = e.resolve(t.doc);
  }
  let o;
  const a = Jt(e) ? e : t.doc.createNode(e, { onTagObj: (f) => o = f });
  o || (o = k3(t.doc.schema.tags, a));
  const u = O3(a, o, t);
  u.length > 0 && (t.indentAtStart = (t.indentAtStart ?? 0) + u.length + 1);
  const l = typeof o.stringify == "function" ? o.stringify(a, t, n, i) : Tt(a) ? sf(a, t, n, i) : a.toString(t, n, i);
  return u ? Tt(a) || l[0] === "{" || l[0] === "[" ? `${u} ${l}` : `${u}
${t.indent}${l}` : l;
}
function T3({ key: e, value: t }, n, i, o) {
  const { allNullValues: a, doc: u, indent: l, indentStep: f, options: { commentString: d, indentSeq: g, simpleKeys: p } } = n;
  let v = Jt(e) && e.comment || null;
  if (p) {
    if (v)
      throw new Error("With simple keys, key nodes cannot have comments");
    if (Gt(e) || !Jt(e) && typeof e == "object") {
      const T = "With simple keys, collection cannot be used as a key value";
      throw new Error(T);
    }
  }
  let _ = !p && (!e || v && t == null && !n.inFlow || Gt(e) || (Tt(e) ? e.type === qe.BLOCK_FOLDED || e.type === qe.BLOCK_LITERAL : typeof e == "object"));
  n = Object.assign({}, n, {
    allNullValues: !1,
    implicitKey: !_ && (p || !a),
    indent: l + f
  });
  let A = !1, E = !1, b = ks(e, n, () => A = !0, () => E = !0);
  if (!_ && !n.inFlow && b.length > 1024) {
    if (p)
      throw new Error("With simple keys, single line scalar must not span more than 1024 characters");
    _ = !0;
  }
  if (n.inFlow) {
    if (a || t == null)
      return A && i && i(), b === "" ? "?" : _ ? `? ${b}` : b;
  } else if (a && !p || t == null && _)
    return b = `? ${b}`, v && !A ? b += Ii(b, n.indent, d(v)) : E && o && o(), b;
  A && (v = null), _ ? (v && (b += Ii(b, n.indent, d(v))), b = `? ${b}
${l}:`) : (b = `${b}:`, v && (b += Ii(b, n.indent, d(v))));
  let D, j, C;
  Jt(t) ? (D = !!t.spaceBefore, j = t.commentBefore, C = t.comment) : (D = !1, j = null, C = null, t && typeof t == "object" && (t = u.createNode(t))), n.implicitKey = !1, !_ && !v && Tt(t) && (n.indentAtStart = b.length + 1), E = !1, !g && f.length >= 2 && !n.inFlow && !_ && Po(t) && !t.flow && !t.tag && !t.anchor && (n.indent = n.indent.substring(2));
  let O = !1;
  const F = ks(t, n, () => O = !0, () => E = !0);
  let L = " ";
  if (v || D || j) {
    if (L = D ? `
` : "", j) {
      const T = d(j);
      L += `
${Vr(T, n.indent)}`;
    }
    F === "" && !n.inFlow ? L === `
` && (L = `

`) : L += `
${n.indent}`;
  } else if (!_ && Gt(t)) {
    const T = F[0], q = F.indexOf(`
`), J = q !== -1, oe = n.inFlow ?? t.flow ?? t.items.length === 0;
    if (J || !oe) {
      let ae = !1;
      if (J && (T === "&" || T === "!")) {
        let he = F.indexOf(" ");
        T === "&" && he !== -1 && he < q && F[he + 1] === "!" && (he = F.indexOf(" ", he + 1)), (he === -1 || q < he) && (ae = !0);
      }
      ae || (L = `
${n.indent}`);
    }
  } else (F === "" || F[0] === `
`) && (L = "");
  return b += L + F, n.inFlow ? O && i && i() : C && !O ? b += Ii(b, n.indent, d(C)) : E && o && o(), b;
}
function ig(e, t) {
  (e === "debug" || e === "warn") && console.warn(t);
}
const ja = "<<", qr = {
  identify: (e) => e === ja || typeof e == "symbol" && e.description === ja,
  default: "key",
  tag: "tag:yaml.org,2002:merge",
  test: /^<<$/,
  resolve: () => Object.assign(new qe(Symbol(ja)), {
    addToJSMap: sg
  }),
  stringify: () => ja
}, I3 = (e, t) => (qr.identify(t) || Tt(t) && (!t.type || t.type === qe.PLAIN) && qr.identify(t.value)) && e?.doc.schema.tags.some((n) => n.tag === qr.tag && n.default);
function sg(e, t, n) {
  if (n = e && Ls(n) ? n.resolve(e.doc) : n, Po(n))
    for (const i of n.items)
      rl(e, t, i);
  else if (Array.isArray(n))
    for (const i of n)
      rl(e, t, i);
  else
    rl(e, t, n);
}
function rl(e, t, n) {
  const i = e && Ls(n) ? n.resolve(e.doc) : n;
  if (!Lo(i))
    throw new Error("Merge sources must be maps or map aliases");
  const o = i.toJSON(null, e, Map);
  for (const [a, u] of o)
    t instanceof Map ? t.has(a) || t.set(a, u) : t instanceof Set ? t.add(a) : Object.prototype.hasOwnProperty.call(t, a) || Object.defineProperty(t, a, {
      value: u,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  return t;
}
function og(e, t, { key: n, value: i }) {
  if (Jt(n) && n.addToJSMap)
    n.addToJSMap(e, t, i);
  else if (I3(e, n))
    sg(e, t, i);
  else {
    const o = Zn(n, "", e);
    if (t instanceof Map)
      t.set(o, Zn(i, o, e));
    else if (t instanceof Set)
      t.add(o);
    else {
      const a = F3(n, o, e), u = Zn(i, a, e);
      a in t ? Object.defineProperty(t, a, {
        value: u,
        writable: !0,
        enumerable: !0,
        configurable: !0
      }) : t[a] = u;
    }
  }
  return t;
}
function F3(e, t, n) {
  if (t === null)
    return "";
  if (typeof t != "object")
    return String(t);
  if (Jt(e) && n?.doc) {
    const i = rg(n.doc, {});
    i.anchors = /* @__PURE__ */ new Set();
    for (const a of n.anchors.keys())
      i.anchors.add(a.anchor);
    i.inFlow = !0, i.inStringifyKey = !0;
    const o = e.toString(i);
    if (!n.mapKeyWarned) {
      let a = JSON.stringify(o);
      a.length > 40 && (a = a.substring(0, 36) + '..."'), ig(n.doc.options.logLevel, `Keys with collection values will be stringified due to JS Object restrictions: ${a}. Set mapAsMap: true to use object keys.`), n.mapKeyWarned = !0;
    }
    return o;
  }
  return JSON.stringify(t);
}
function of(e, t, n) {
  const i = _o(e, void 0, n), o = _o(t, void 0, n);
  return new xn(i, o);
}
class xn {
  constructor(t, n = null) {
    Object.defineProperty(this, tr, { value: Y0 }), this.key = t, this.value = n;
  }
  clone(t) {
    let { key: n, value: i } = this;
    return Jt(n) && (n = n.clone(t)), Jt(i) && (i = i.clone(t)), new xn(n, i);
  }
  toJSON(t, n) {
    const i = n?.mapAsMap ? /* @__PURE__ */ new Map() : {};
    return og(n, i, this);
  }
  toString(t, n, i) {
    return t?.doc ? T3(this, t, n, i) : JSON.stringify(this);
  }
}
function ag(e, t, n) {
  return (t.inFlow ?? e.flow ? D3 : B3)(e, t, n);
}
function B3({ comment: e, items: t }, n, { blockItemPrefix: i, flowChars: o, itemIndent: a, onChompKeep: u, onComment: l }) {
  const { indent: f, options: { commentString: d } } = n, g = Object.assign({}, n, { indent: a, type: null });
  let p = !1;
  const v = [];
  for (let A = 0; A < t.length; ++A) {
    const E = t[A];
    let b = null;
    if (Jt(E))
      !p && E.spaceBefore && v.push(""), uu(n, v, E.commentBefore, p), E.comment && (b = E.comment);
    else if (Yt(E)) {
      const j = Jt(E.key) ? E.key : null;
      j && (!p && j.spaceBefore && v.push(""), uu(n, v, j.commentBefore, p));
    }
    p = !1;
    let D = ks(E, g, () => b = null, () => p = !0);
    b && (D += Ii(D, a, d(b))), p && b && (p = !1), v.push(i + D);
  }
  let _;
  if (v.length === 0)
    _ = o.start + o.end;
  else {
    _ = v[0];
    for (let A = 1; A < v.length; ++A) {
      const E = v[A];
      _ += E ? `
${f}${E}` : `
`;
    }
  }
  return e ? (_ += `
` + Vr(d(e), f), l && l()) : p && u && u(), _;
}
function D3({ items: e }, t, { flowChars: n, itemIndent: i }) {
  const { indent: o, indentStep: a, flowCollectionPadding: u, options: { commentString: l } } = t;
  i += a;
  const f = Object.assign({}, t, {
    indent: i,
    inFlow: !0,
    type: null
  });
  let d = !1, g = 0;
  const p = [];
  for (let A = 0; A < e.length; ++A) {
    const E = e[A];
    let b = null;
    if (Jt(E))
      E.spaceBefore && p.push(""), uu(t, p, E.commentBefore, !1), E.comment && (b = E.comment);
    else if (Yt(E)) {
      const j = Jt(E.key) ? E.key : null;
      j && (j.spaceBefore && p.push(""), uu(t, p, j.commentBefore, !1), j.comment && (d = !0));
      const C = Jt(E.value) ? E.value : null;
      C ? (C.comment && (b = C.comment), C.commentBefore && (d = !0)) : E.value == null && j?.comment && (b = j.comment);
    }
    b && (d = !0);
    let D = ks(E, f, () => b = null);
    A < e.length - 1 && (D += ","), b && (D += Ii(D, i, l(b))), !d && (p.length > g || D.includes(`
`)) && (d = !0), p.push(D), g = p.length;
  }
  const { start: v, end: _ } = n;
  if (p.length === 0)
    return v + _;
  if (!d) {
    const A = p.reduce((E, b) => E + b.length + 2, 2);
    d = t.options.lineWidth > 0 && A > t.options.lineWidth;
  }
  if (d) {
    let A = v;
    for (const E of p)
      A += E ? `
${a}${o}${E}` : `
`;
    return `${A}
${o}${_}`;
  } else
    return `${v}${u}${p.join(" ")}${u}${_}`;
}
function uu({ indent: e, options: { commentString: t } }, n, i, o) {
  if (i && o && (i = i.replace(/^\n+/, "")), i) {
    const a = Vr(t(i), e);
    n.push(a.trimStart());
  }
}
function Fi(e, t) {
  const n = Tt(t) ? t.value : t;
  for (const i of e)
    if (Yt(i) && (i.key === t || i.key === n || Tt(i.key) && i.key.value === n))
      return i;
}
class Yn extends tg {
  static get tagName() {
    return "tag:yaml.org,2002:map";
  }
  constructor(t) {
    super(li, t), this.items = [];
  }
  /**
   * A generic collection parsing method that can be extended
   * to other node classes that inherit from YAMLMap
   */
  static from(t, n, i) {
    const { keepUndefined: o, replacer: a } = i, u = new this(t), l = (f, d) => {
      if (typeof a == "function")
        d = a.call(n, f, d);
      else if (Array.isArray(a) && !a.includes(f))
        return;
      (d !== void 0 || o) && u.items.push(of(f, d, i));
    };
    if (n instanceof Map)
      for (const [f, d] of n)
        l(f, d);
    else if (n && typeof n == "object")
      for (const f of Object.keys(n))
        l(f, n[f]);
    return typeof t.sortMapEntries == "function" && u.items.sort(t.sortMapEntries), u;
  }
  /**
   * Adds a value to the collection.
   *
   * @param overwrite - If not set `true`, using a key that is already in the
   *   collection will throw. Otherwise, overwrites the previous value.
   */
  add(t, n) {
    let i;
    Yt(t) ? i = t : !t || typeof t != "object" || !("key" in t) ? i = new xn(t, t?.value) : i = new xn(t.key, t.value);
    const o = Fi(this.items, i.key), a = this.schema?.sortMapEntries;
    if (o) {
      if (!n)
        throw new Error(`Key ${i.key} already set`);
      Tt(o.value) && eg(i.value) ? o.value.value = i.value : o.value = i.value;
    } else if (a) {
      const u = this.items.findIndex((l) => a(i, l) < 0);
      u === -1 ? this.items.push(i) : this.items.splice(u, 0, i);
    } else
      this.items.push(i);
  }
  delete(t) {
    const n = Fi(this.items, t);
    return n ? this.items.splice(this.items.indexOf(n), 1).length > 0 : !1;
  }
  get(t, n) {
    const o = Fi(this.items, t)?.value;
    return (!n && Tt(o) ? o.value : o) ?? void 0;
  }
  has(t) {
    return !!Fi(this.items, t);
  }
  set(t, n) {
    this.add(new xn(t, n), !0);
  }
  /**
   * @param ctx - Conversion context, originally set in Document#toJS()
   * @param {Class} Type - If set, forces the returned collection type
   * @returns Instance of Type, Map, or Object
   */
  toJSON(t, n, i) {
    const o = i ? new i() : n?.mapAsMap ? /* @__PURE__ */ new Map() : {};
    n?.onCreate && n.onCreate(o);
    for (const a of this.items)
      og(n, o, a);
    return o;
  }
  toString(t, n, i) {
    if (!t)
      return JSON.stringify(this);
    for (const o of this.items)
      if (!Yt(o))
        throw new Error(`Map items must all be pairs; found ${JSON.stringify(o)} instead`);
    return !t.allNullValues && this.hasAllNullValues(!1) && (t = Object.assign({}, t, { allNullValues: !0 })), ag(this, t, {
      blockItemPrefix: "",
      flowChars: { start: "{", end: "}" },
      itemIndent: t.indent || "",
      onChompKeep: i,
      onComment: n
    });
  }
}
const Ps = {
  collection: "map",
  default: !0,
  nodeClass: Yn,
  tag: "tag:yaml.org,2002:map",
  resolve(e, t) {
    return Lo(e) || t("Expected a mapping for this tag"), e;
  },
  createNode: (e, t, n) => Yn.from(e, t, n)
};
class Mi extends tg {
  static get tagName() {
    return "tag:yaml.org,2002:seq";
  }
  constructor(t) {
    super(Ds, t), this.items = [];
  }
  add(t) {
    this.items.push(t);
  }
  /**
   * Removes a value from the collection.
   *
   * `key` must contain a representation of an integer for this to succeed.
   * It may be wrapped in a `Scalar`.
   *
   * @returns `true` if the item was found and removed.
   */
  delete(t) {
    const n = Na(t);
    return typeof n != "number" ? !1 : this.items.splice(n, 1).length > 0;
  }
  get(t, n) {
    const i = Na(t);
    if (typeof i != "number")
      return;
    const o = this.items[i];
    return !n && Tt(o) ? o.value : o;
  }
  /**
   * Checks if the collection includes a value with the key `key`.
   *
   * `key` must contain a representation of an integer for this to succeed.
   * It may be wrapped in a `Scalar`.
   */
  has(t) {
    const n = Na(t);
    return typeof n == "number" && n < this.items.length;
  }
  /**
   * Sets a value in this collection. For `!!set`, `value` needs to be a
   * boolean to add/remove the item from the set.
   *
   * If `key` does not contain a representation of an integer, this will throw.
   * It may be wrapped in a `Scalar`.
   */
  set(t, n) {
    const i = Na(t);
    if (typeof i != "number")
      throw new Error(`Expected a valid index, not ${t}.`);
    const o = this.items[i];
    Tt(o) && eg(n) ? o.value = n : this.items[i] = n;
  }
  toJSON(t, n) {
    const i = [];
    n?.onCreate && n.onCreate(i);
    let o = 0;
    for (const a of this.items)
      i.push(Zn(a, String(o++), n));
    return i;
  }
  toString(t, n, i) {
    return t ? ag(this, t, {
      blockItemPrefix: "- ",
      flowChars: { start: "[", end: "]" },
      itemIndent: (t.indent || "") + "  ",
      onChompKeep: i,
      onComment: n
    }) : JSON.stringify(this);
  }
  static from(t, n, i) {
    const { replacer: o } = i, a = new this(t);
    if (n && Symbol.iterator in Object(n)) {
      let u = 0;
      for (let l of n) {
        if (typeof o == "function") {
          const f = n instanceof Set ? l : String(u++);
          l = o.call(n, f, l);
        }
        a.items.push(_o(l, void 0, i));
      }
    }
    return a;
  }
}
function Na(e) {
  let t = Tt(e) ? e.value : e;
  return t && typeof t == "string" && (t = Number(t)), typeof t == "number" && Number.isInteger(t) && t >= 0 ? t : null;
}
const Rs = {
  collection: "seq",
  default: !0,
  nodeClass: Mi,
  tag: "tag:yaml.org,2002:seq",
  resolve(e, t) {
    return Po(e) || t("Expected a sequence for this tag"), e;
  },
  createNode: (e, t, n) => Mi.from(e, t, n)
}, Cu = {
  identify: (e) => typeof e == "string",
  default: !0,
  tag: "tag:yaml.org,2002:str",
  resolve: (e) => e,
  stringify(e, t, n, i) {
    return t = Object.assign({ actualString: !0 }, t), sf(e, t, n, i);
  }
}, _u = {
  identify: (e) => e == null,
  createNode: () => new qe(null),
  default: !0,
  tag: "tag:yaml.org,2002:null",
  test: /^(?:~|[Nn]ull|NULL)?$/,
  resolve: () => new qe(null),
  stringify: ({ source: e }, t) => typeof e == "string" && _u.test.test(e) ? e : t.options.nullStr
}, af = {
  identify: (e) => typeof e == "boolean",
  default: !0,
  tag: "tag:yaml.org,2002:bool",
  test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
  resolve: (e) => new qe(e[0] === "t" || e[0] === "T"),
  stringify({ source: e, value: t }, n) {
    if (e && af.test.test(e)) {
      const i = e[0] === "t" || e[0] === "T";
      if (t === i)
        return e;
    }
    return t ? n.options.trueStr : n.options.falseStr;
  }
};
function gr({ format: e, minFractionDigits: t, tag: n, value: i }) {
  if (typeof i == "bigint")
    return String(i);
  const o = typeof i == "number" ? i : Number(i);
  if (!isFinite(o))
    return isNaN(o) ? ".nan" : o < 0 ? "-.inf" : ".inf";
  let a = JSON.stringify(i);
  if (!e && t && (!n || n === "tag:yaml.org,2002:float") && /^\d/.test(a)) {
    let u = a.indexOf(".");
    u < 0 && (u = a.length, a += ".");
    let l = t - (a.length - u - 1);
    for (; l-- > 0; )
      a += "0";
  }
  return a;
}
const ug = {
  identify: (e) => typeof e == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
  resolve: (e) => e.slice(-3).toLowerCase() === "nan" ? NaN : e[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
  stringify: gr
}, cg = {
  identify: (e) => typeof e == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  format: "EXP",
  test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,
  resolve: (e) => parseFloat(e),
  stringify(e) {
    const t = Number(e.value);
    return isFinite(t) ? t.toExponential() : gr(e);
  }
}, lg = {
  identify: (e) => typeof e == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  test: /^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,
  resolve(e) {
    const t = new qe(parseFloat(e)), n = e.indexOf(".");
    return n !== -1 && e[e.length - 1] === "0" && (t.minFractionDigits = e.length - n - 1), t;
  },
  stringify: gr
}, ku = (e) => typeof e == "bigint" || Number.isInteger(e), uf = (e, t, n, { intAsBigInt: i }) => i ? BigInt(e) : parseInt(e.substring(t), n);
function fg(e, t, n) {
  const { value: i } = e;
  return ku(i) && i >= 0 ? n + i.toString(t) : gr(e);
}
const hg = {
  identify: (e) => ku(e) && e >= 0,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  format: "OCT",
  test: /^0o[0-7]+$/,
  resolve: (e, t, n) => uf(e, 2, 8, n),
  stringify: (e) => fg(e, 8, "0o")
}, dg = {
  identify: ku,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  test: /^[-+]?[0-9]+$/,
  resolve: (e, t, n) => uf(e, 0, 10, n),
  stringify: gr
}, pg = {
  identify: (e) => ku(e) && e >= 0,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  format: "HEX",
  test: /^0x[0-9a-fA-F]+$/,
  resolve: (e, t, n) => uf(e, 2, 16, n),
  stringify: (e) => fg(e, 16, "0x")
}, L3 = [
  Ps,
  Rs,
  Cu,
  _u,
  af,
  hg,
  dg,
  pg,
  ug,
  cg,
  lg
];
function vp(e) {
  return typeof e == "bigint" || Number.isInteger(e);
}
const $a = ({ value: e }) => JSON.stringify(e), P3 = [
  {
    identify: (e) => typeof e == "string",
    default: !0,
    tag: "tag:yaml.org,2002:str",
    resolve: (e) => e,
    stringify: $a
  },
  {
    identify: (e) => e == null,
    createNode: () => new qe(null),
    default: !0,
    tag: "tag:yaml.org,2002:null",
    test: /^null$/,
    resolve: () => null,
    stringify: $a
  },
  {
    identify: (e) => typeof e == "boolean",
    default: !0,
    tag: "tag:yaml.org,2002:bool",
    test: /^true$|^false$/,
    resolve: (e) => e === "true",
    stringify: $a
  },
  {
    identify: vp,
    default: !0,
    tag: "tag:yaml.org,2002:int",
    test: /^-?(?:0|[1-9][0-9]*)$/,
    resolve: (e, t, { intAsBigInt: n }) => n ? BigInt(e) : parseInt(e, 10),
    stringify: ({ value: e }) => vp(e) ? e.toString() : JSON.stringify(e)
  },
  {
    identify: (e) => typeof e == "number",
    default: !0,
    tag: "tag:yaml.org,2002:float",
    test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
    resolve: (e) => parseFloat(e),
    stringify: $a
  }
], R3 = {
  default: !0,
  tag: "",
  test: /^/,
  resolve(e, t) {
    return t(`Unresolved plain scalar ${JSON.stringify(e)}`), e;
  }
}, j3 = [Ps, Rs].concat(P3, R3), cf = {
  identify: (e) => e instanceof Uint8Array,
  // Buffer inherits from Uint8Array
  default: !1,
  tag: "tag:yaml.org,2002:binary",
  /**
   * Returns a Buffer in node and an Uint8Array in browsers
   *
   * To use the resulting buffer as an image, you'll want to do something like:
   *
   *   const blob = new Blob([buffer], { type: 'image/jpeg' })
   *   document.querySelector('#photo').src = URL.createObjectURL(blob)
   */
  resolve(e, t) {
    if (typeof atob == "function") {
      const n = atob(e.replace(/[\n\r]/g, "")), i = new Uint8Array(n.length);
      for (let o = 0; o < n.length; ++o)
        i[o] = n.charCodeAt(o);
      return i;
    } else
      return t("This environment does not support reading binary tags; either Buffer or atob is required"), e;
  },
  stringify({ comment: e, type: t, value: n }, i, o, a) {
    const u = n;
    let l;
    if (typeof btoa == "function") {
      let f = "";
      for (let d = 0; d < u.length; ++d)
        f += String.fromCharCode(u[d]);
      l = btoa(f);
    } else
      throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");
    if (t || (t = qe.BLOCK_LITERAL), t !== qe.QUOTE_DOUBLE) {
      const f = Math.max(i.options.lineWidth - i.indent.length, i.options.minContentWidth), d = Math.ceil(l.length / f), g = new Array(d);
      for (let p = 0, v = 0; p < d; ++p, v += f)
        g[p] = l.substr(v, f);
      l = g.join(t === qe.BLOCK_LITERAL ? `
` : " ");
    }
    return sf({ comment: e, type: t, value: l }, i, o, a);
  }
};
function gg(e, t) {
  if (Po(e))
    for (let n = 0; n < e.items.length; ++n) {
      let i = e.items[n];
      if (!Yt(i)) {
        if (Lo(i)) {
          i.items.length > 1 && t("Each pair must have its own sequence indicator");
          const o = i.items[0] || new xn(new qe(null));
          if (i.commentBefore && (o.key.commentBefore = o.key.commentBefore ? `${i.commentBefore}
${o.key.commentBefore}` : i.commentBefore), i.comment) {
            const a = o.value ?? o.key;
            a.comment = a.comment ? `${i.comment}
${a.comment}` : i.comment;
          }
          i = o;
        }
        e.items[n] = Yt(i) ? i : new xn(i);
      }
    }
  else
    t("Expected a sequence for this tag");
  return e;
}
function yg(e, t, n) {
  const { replacer: i } = n, o = new Mi(e);
  o.tag = "tag:yaml.org,2002:pairs";
  let a = 0;
  if (t && Symbol.iterator in Object(t))
    for (let u of t) {
      typeof i == "function" && (u = i.call(t, String(a++), u));
      let l, f;
      if (Array.isArray(u))
        if (u.length === 2)
          l = u[0], f = u[1];
        else
          throw new TypeError(`Expected [key, value] tuple: ${u}`);
      else if (u && u instanceof Object) {
        const d = Object.keys(u);
        if (d.length === 1)
          l = d[0], f = u[l];
        else
          throw new TypeError(`Expected tuple with one key, not ${d.length} keys`);
      } else
        l = u;
      o.items.push(of(l, f, n));
    }
  return o;
}
const lf = {
  collection: "seq",
  default: !1,
  tag: "tag:yaml.org,2002:pairs",
  resolve: gg,
  createNode: yg
};
class ms extends Mi {
  constructor() {
    super(), this.add = Yn.prototype.add.bind(this), this.delete = Yn.prototype.delete.bind(this), this.get = Yn.prototype.get.bind(this), this.has = Yn.prototype.has.bind(this), this.set = Yn.prototype.set.bind(this), this.tag = ms.tag;
  }
  /**
   * If `ctx` is given, the return type is actually `Map<unknown, unknown>`,
   * but TypeScript won't allow widening the signature of a child method.
   */
  toJSON(t, n) {
    if (!n)
      return super.toJSON(t);
    const i = /* @__PURE__ */ new Map();
    n?.onCreate && n.onCreate(i);
    for (const o of this.items) {
      let a, u;
      if (Yt(o) ? (a = Zn(o.key, "", n), u = Zn(o.value, a, n)) : a = Zn(o, "", n), i.has(a))
        throw new Error("Ordered maps must not include duplicate keys");
      i.set(a, u);
    }
    return i;
  }
  static from(t, n, i) {
    const o = yg(t, n, i), a = new this();
    return a.items = o.items, a;
  }
}
ms.tag = "tag:yaml.org,2002:omap";
const ff = {
  collection: "seq",
  identify: (e) => e instanceof Map,
  nodeClass: ms,
  default: !1,
  tag: "tag:yaml.org,2002:omap",
  resolve(e, t) {
    const n = gg(e, t), i = [];
    for (const { key: o } of n.items)
      Tt(o) && (i.includes(o.value) ? t(`Ordered maps must not include duplicate keys: ${o.value}`) : i.push(o.value));
    return Object.assign(new ms(), n);
  },
  createNode: (e, t, n) => ms.from(e, t, n)
};
function mg({ value: e, source: t }, n) {
  return t && (e ? wg : bg).test.test(t) ? t : e ? n.options.trueStr : n.options.falseStr;
}
const wg = {
  identify: (e) => e === !0,
  default: !0,
  tag: "tag:yaml.org,2002:bool",
  test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
  resolve: () => new qe(!0),
  stringify: mg
}, bg = {
  identify: (e) => e === !1,
  default: !0,
  tag: "tag:yaml.org,2002:bool",
  test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,
  resolve: () => new qe(!1),
  stringify: mg
}, N3 = {
  identify: (e) => typeof e == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
  resolve: (e) => e.slice(-3).toLowerCase() === "nan" ? NaN : e[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
  stringify: gr
}, $3 = {
  identify: (e) => typeof e == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  format: "EXP",
  test: /^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,
  resolve: (e) => parseFloat(e.replace(/_/g, "")),
  stringify(e) {
    const t = Number(e.value);
    return isFinite(t) ? t.toExponential() : gr(e);
  }
}, M3 = {
  identify: (e) => typeof e == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  test: /^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,
  resolve(e) {
    const t = new qe(parseFloat(e.replace(/_/g, ""))), n = e.indexOf(".");
    if (n !== -1) {
      const i = e.substring(n + 1).replace(/_/g, "");
      i[i.length - 1] === "0" && (t.minFractionDigits = i.length);
    }
    return t;
  },
  stringify: gr
}, Ro = (e) => typeof e == "bigint" || Number.isInteger(e);
function Ou(e, t, n, { intAsBigInt: i }) {
  const o = e[0];
  if ((o === "-" || o === "+") && (t += 1), e = e.substring(t).replace(/_/g, ""), i) {
    switch (n) {
      case 2:
        e = `0b${e}`;
        break;
      case 8:
        e = `0o${e}`;
        break;
      case 16:
        e = `0x${e}`;
        break;
    }
    const u = BigInt(e);
    return o === "-" ? BigInt(-1) * u : u;
  }
  const a = parseInt(e, n);
  return o === "-" ? -1 * a : a;
}
function hf(e, t, n) {
  const { value: i } = e;
  if (Ro(i)) {
    const o = i.toString(t);
    return i < 0 ? "-" + n + o.substr(1) : n + o;
  }
  return gr(e);
}
const U3 = {
  identify: Ro,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  format: "BIN",
  test: /^[-+]?0b[0-1_]+$/,
  resolve: (e, t, n) => Ou(e, 2, 2, n),
  stringify: (e) => hf(e, 2, "0b")
}, V3 = {
  identify: Ro,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  format: "OCT",
  test: /^[-+]?0[0-7_]+$/,
  resolve: (e, t, n) => Ou(e, 1, 8, n),
  stringify: (e) => hf(e, 8, "0")
}, q3 = {
  identify: Ro,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  test: /^[-+]?[0-9][0-9_]*$/,
  resolve: (e, t, n) => Ou(e, 0, 10, n),
  stringify: gr
}, W3 = {
  identify: Ro,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  format: "HEX",
  test: /^[-+]?0x[0-9a-fA-F_]+$/,
  resolve: (e, t, n) => Ou(e, 2, 16, n),
  stringify: (e) => hf(e, 16, "0x")
};
class ws extends Yn {
  constructor(t) {
    super(t), this.tag = ws.tag;
  }
  add(t) {
    let n;
    Yt(t) ? n = t : t && typeof t == "object" && "key" in t && "value" in t && t.value === null ? n = new xn(t.key, null) : n = new xn(t, null), Fi(this.items, n.key) || this.items.push(n);
  }
  /**
   * If `keepPair` is `true`, returns the Pair matching `key`.
   * Otherwise, returns the value of that Pair's key.
   */
  get(t, n) {
    const i = Fi(this.items, t);
    return !n && Yt(i) ? Tt(i.key) ? i.key.value : i.key : i;
  }
  set(t, n) {
    if (typeof n != "boolean")
      throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof n}`);
    const i = Fi(this.items, t);
    i && !n ? this.items.splice(this.items.indexOf(i), 1) : !i && n && this.items.push(new xn(t));
  }
  toJSON(t, n) {
    return super.toJSON(t, n, Set);
  }
  toString(t, n, i) {
    if (!t)
      return JSON.stringify(this);
    if (this.hasAllNullValues(!0))
      return super.toString(Object.assign({}, t, { allNullValues: !0 }), n, i);
    throw new Error("Set items must all have null values");
  }
  static from(t, n, i) {
    const { replacer: o } = i, a = new this(t);
    if (n && Symbol.iterator in Object(n))
      for (let u of n)
        typeof o == "function" && (u = o.call(n, u, u)), a.items.push(of(u, null, i));
    return a;
  }
}
ws.tag = "tag:yaml.org,2002:set";
const df = {
  collection: "map",
  identify: (e) => e instanceof Set,
  nodeClass: ws,
  default: !1,
  tag: "tag:yaml.org,2002:set",
  createNode: (e, t, n) => ws.from(e, t, n),
  resolve(e, t) {
    if (Lo(e)) {
      if (e.hasAllNullValues(!0))
        return Object.assign(new ws(), e);
      t("Set items must all have null values");
    } else
      t("Expected a mapping for this tag");
    return e;
  }
};
function pf(e, t) {
  const n = e[0], i = n === "-" || n === "+" ? e.substring(1) : e, o = (u) => t ? BigInt(u) : Number(u), a = i.replace(/_/g, "").split(":").reduce((u, l) => u * o(60) + o(l), o(0));
  return n === "-" ? o(-1) * a : a;
}
function vg(e) {
  let { value: t } = e, n = (u) => u;
  if (typeof t == "bigint")
    n = (u) => BigInt(u);
  else if (isNaN(t) || !isFinite(t))
    return gr(e);
  let i = "";
  t < 0 && (i = "-", t *= n(-1));
  const o = n(60), a = [t % o];
  return t < 60 ? a.unshift(0) : (t = (t - a[0]) / o, a.unshift(t % o), t >= 60 && (t = (t - a[0]) / o, a.unshift(t))), i + a.map((u) => String(u).padStart(2, "0")).join(":").replace(/000000\d*$/, "");
}
const xg = {
  identify: (e) => typeof e == "bigint" || Number.isInteger(e),
  default: !0,
  tag: "tag:yaml.org,2002:int",
  format: "TIME",
  test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,
  resolve: (e, t, { intAsBigInt: n }) => pf(e, n),
  stringify: vg
}, Ag = {
  identify: (e) => typeof e == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  format: "TIME",
  test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,
  resolve: (e) => pf(e, !1),
  stringify: vg
}, Tu = {
  identify: (e) => e instanceof Date,
  default: !0,
  tag: "tag:yaml.org,2002:timestamp",
  // If the time zone is omitted, the timestamp is assumed to be specified in UTC. The time part
  // may be omitted altogether, resulting in a date format. In such a case, the time part is
  // assumed to be 00:00:00Z (start of day, UTC).
  test: RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),
  resolve(e) {
    const t = e.match(Tu.test);
    if (!t)
      throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");
    const [, n, i, o, a, u, l] = t.map(Number), f = t[7] ? Number((t[7] + "00").substr(1, 3)) : 0;
    let d = Date.UTC(n, i - 1, o, a || 0, u || 0, l || 0, f);
    const g = t[8];
    if (g && g !== "Z") {
      let p = pf(g, !1);
      Math.abs(p) < 30 && (p *= 60), d -= 6e4 * p;
    }
    return new Date(d);
  },
  stringify: ({ value: e }) => e.toISOString().replace(/(T00:00:00)?\.000Z$/, "")
}, xp = [
  Ps,
  Rs,
  Cu,
  _u,
  wg,
  bg,
  U3,
  V3,
  q3,
  W3,
  N3,
  $3,
  M3,
  cf,
  qr,
  ff,
  lf,
  df,
  xg,
  Ag,
  Tu
], Ap = /* @__PURE__ */ new Map([
  ["core", L3],
  ["failsafe", [Ps, Rs, Cu]],
  ["json", j3],
  ["yaml11", xp],
  ["yaml-1.1", xp]
]), Ep = {
  binary: cf,
  bool: af,
  float: lg,
  floatExp: cg,
  floatNaN: ug,
  floatTime: Ag,
  int: dg,
  intHex: pg,
  intOct: hg,
  intTime: xg,
  map: Ps,
  merge: qr,
  null: _u,
  omap: ff,
  pairs: lf,
  seq: Rs,
  set: df,
  timestamp: Tu
}, K3 = {
  "tag:yaml.org,2002:binary": cf,
  "tag:yaml.org,2002:merge": qr,
  "tag:yaml.org,2002:omap": ff,
  "tag:yaml.org,2002:pairs": lf,
  "tag:yaml.org,2002:set": df,
  "tag:yaml.org,2002:timestamp": Tu
};
function il(e, t, n) {
  const i = Ap.get(t);
  if (i && !e)
    return n && !i.includes(qr) ? i.concat(qr) : i.slice();
  let o = i;
  if (!o)
    if (Array.isArray(e))
      o = [];
    else {
      const a = Array.from(Ap.keys()).filter((u) => u !== "yaml11").map((u) => JSON.stringify(u)).join(", ");
      throw new Error(`Unknown schema "${t}"; use one of ${a} or define customTags array`);
    }
  if (Array.isArray(e))
    for (const a of e)
      o = o.concat(a);
  else typeof e == "function" && (o = e(o.slice()));
  return n && (o = o.concat(qr)), o.reduce((a, u) => {
    const l = typeof u == "string" ? Ep[u] : u;
    if (!l) {
      const f = JSON.stringify(u), d = Object.keys(Ep).map((g) => JSON.stringify(g)).join(", ");
      throw new Error(`Unknown custom tag ${f}; use one of ${d}`);
    }
    return a.includes(l) || a.push(l), a;
  }, []);
}
const H3 = (e, t) => e.key < t.key ? -1 : e.key > t.key ? 1 : 0;
class gf {
  constructor({ compat: t, customTags: n, merge: i, resolveKnownTags: o, schema: a, sortMapEntries: u, toStringDefaults: l }) {
    this.compat = Array.isArray(t) ? il(t, "compat") : t ? il(null, t) : null, this.name = typeof a == "string" && a || "core", this.knownTags = o ? K3 : {}, this.tags = il(n, this.name, i), this.toStringOptions = l ?? null, Object.defineProperty(this, li, { value: Ps }), Object.defineProperty(this, _r, { value: Cu }), Object.defineProperty(this, Ds, { value: Rs }), this.sortMapEntries = typeof u == "function" ? u : u === !0 ? H3 : null;
  }
  clone() {
    const t = Object.create(gf.prototype, Object.getOwnPropertyDescriptors(this));
    return t.tags = this.tags.slice(), t;
  }
}
function z3(e, t) {
  const n = [];
  let i = t.directives === !0;
  if (t.directives !== !1 && e.directives) {
    const f = e.directives.toString(e);
    f ? (n.push(f), i = !0) : e.directives.docStart && (i = !0);
  }
  i && n.push("---");
  const o = rg(e, t), { commentString: a } = o.options;
  if (e.commentBefore) {
    n.length !== 1 && n.unshift("");
    const f = a(e.commentBefore);
    n.unshift(Vr(f, ""));
  }
  let u = !1, l = null;
  if (e.contents) {
    if (Jt(e.contents)) {
      if (e.contents.spaceBefore && i && n.push(""), e.contents.commentBefore) {
        const g = a(e.contents.commentBefore);
        n.push(Vr(g, ""));
      }
      o.forceBlockIndent = !!e.comment, l = e.contents.comment;
    }
    const f = l ? void 0 : () => u = !0;
    let d = ks(e.contents, o, () => l = null, f);
    l && (d += Ii(d, "", a(l))), (d[0] === "|" || d[0] === ">") && n[n.length - 1] === "---" ? n[n.length - 1] = `--- ${d}` : n.push(d);
  } else
    n.push(ks(e.contents, o));
  if (e.directives?.docEnd)
    if (e.comment) {
      const f = a(e.comment);
      f.includes(`
`) ? (n.push("..."), n.push(Vr(f, ""))) : n.push(`... ${f}`);
    } else
      n.push("...");
  else {
    let f = e.comment;
    f && u && (f = f.replace(/^\n+/, "")), f && ((!u || l) && n[n.length - 1] !== "" && n.push(""), n.push(Vr(a(f), "")));
  }
  return n.join(`
`) + `
`;
}
class jo {
  constructor(t, n, i) {
    this.commentBefore = null, this.comment = null, this.errors = [], this.warnings = [], Object.defineProperty(this, tr, { value: Il });
    let o = null;
    typeof n == "function" || Array.isArray(n) ? o = n : i === void 0 && n && (i = n, n = void 0);
    const a = Object.assign({
      intAsBigInt: !1,
      keepSourceTokens: !1,
      logLevel: "warn",
      prettyErrors: !0,
      strict: !0,
      stringKeys: !1,
      uniqueKeys: !0,
      version: "1.2"
    }, i);
    this.options = a;
    let { version: u } = a;
    i?._directives ? (this.directives = i._directives.atDocument(), this.directives.yaml.explicit && (u = this.directives.yaml.version)) : this.directives = new vn({ version: u }), this.setSchema(u, i), this.contents = t === void 0 ? null : this.createNode(t, o, i);
  }
  /**
   * Create a deep copy of this Document and its contents.
   *
   * Custom Node values that inherit from `Object` still refer to their original instances.
   */
  clone() {
    const t = Object.create(jo.prototype, {
      [tr]: { value: Il }
    });
    return t.commentBefore = this.commentBefore, t.comment = this.comment, t.errors = this.errors.slice(), t.warnings = this.warnings.slice(), t.options = Object.assign({}, this.options), this.directives && (t.directives = this.directives.clone()), t.schema = this.schema.clone(), t.contents = Jt(this.contents) ? this.contents.clone(t.schema) : this.contents, this.range && (t.range = this.range.slice()), t;
  }
  /** Adds a value to the document. */
  add(t) {
    ls(this.contents) && this.contents.add(t);
  }
  /** Adds a value to the document. */
  addIn(t, n) {
    ls(this.contents) && this.contents.addIn(t, n);
  }
  /**
   * Create a new `Alias` node, ensuring that the target `node` has the required anchor.
   *
   * If `node` already has an anchor, `name` is ignored.
   * Otherwise, the `node.anchor` value will be set to `name`,
   * or if an anchor with that name is already present in the document,
   * `name` will be used as a prefix for a new unique anchor.
   * If `name` is undefined, the generated anchor will use 'a' as a prefix.
   */
  createAlias(t, n) {
    if (!t.anchor) {
      const i = Q0(this);
      t.anchor = // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
      !n || i.has(n) ? Z0(n || "a", i) : n;
    }
    return new rf(t.anchor);
  }
  createNode(t, n, i) {
    let o;
    if (typeof n == "function")
      t = n.call({ "": t }, "", t), o = n;
    else if (Array.isArray(n)) {
      const b = (j) => typeof j == "number" || j instanceof String || j instanceof Number, D = n.filter(b).map(String);
      D.length > 0 && (n = n.concat(D)), o = n;
    } else i === void 0 && n && (i = n, n = void 0);
    const { aliasDuplicateObjects: a, anchorPrefix: u, flow: l, keepUndefined: f, onTagObj: d, tag: g } = i ?? {}, { onAnchor: p, setAnchors: v, sourceObjects: _ } = x3(
      this,
      // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
      u || "a"
    ), A = {
      aliasDuplicateObjects: a ?? !0,
      keepUndefined: f ?? !1,
      onAnchor: p,
      onTagObj: d,
      replacer: o,
      schema: this.schema,
      sourceObjects: _
    }, E = _o(t, g, A);
    return l && Gt(E) && (E.flow = !0), v(), E;
  }
  /**
   * Convert a key and a value into a `Pair` using the current schema,
   * recursively wrapping all values as `Scalar` or `Collection` nodes.
   */
  createPair(t, n, i = {}) {
    const o = this.createNode(t, null, i), a = this.createNode(n, null, i);
    return new xn(o, a);
  }
  /**
   * Removes a value from the document.
   * @returns `true` if the item was found and removed.
   */
  delete(t) {
    return ls(this.contents) ? this.contents.delete(t) : !1;
  }
  /**
   * Removes a value from the document.
   * @returns `true` if the item was found and removed.
   */
  deleteIn(t) {
    return fo(t) ? this.contents == null ? !1 : (this.contents = null, !0) : ls(this.contents) ? this.contents.deleteIn(t) : !1;
  }
  /**
   * Returns item at `key`, or `undefined` if not found. By default unwraps
   * scalar values from their surrounding node; to disable set `keepScalar` to
   * `true` (collections are always returned intact).
   */
  get(t, n) {
    return Gt(this.contents) ? this.contents.get(t, n) : void 0;
  }
  /**
   * Returns item at `path`, or `undefined` if not found. By default unwraps
   * scalar values from their surrounding node; to disable set `keepScalar` to
   * `true` (collections are always returned intact).
   */
  getIn(t, n) {
    return fo(t) ? !n && Tt(this.contents) ? this.contents.value : this.contents : Gt(this.contents) ? this.contents.getIn(t, n) : void 0;
  }
  /**
   * Checks if the document includes a value with the key `key`.
   */
  has(t) {
    return Gt(this.contents) ? this.contents.has(t) : !1;
  }
  /**
   * Checks if the document includes a value at `path`.
   */
  hasIn(t) {
    return fo(t) ? this.contents !== void 0 : Gt(this.contents) ? this.contents.hasIn(t) : !1;
  }
  /**
   * Sets a value in this document. For `!!set`, `value` needs to be a
   * boolean to add/remove the item from the set.
   */
  set(t, n) {
    this.contents == null ? this.contents = au(this.schema, [t], n) : ls(this.contents) && this.contents.set(t, n);
  }
  /**
   * Sets a value in this document. For `!!set`, `value` needs to be a
   * boolean to add/remove the item from the set.
   */
  setIn(t, n) {
    fo(t) ? this.contents = n : this.contents == null ? this.contents = au(this.schema, Array.from(t), n) : ls(this.contents) && this.contents.setIn(t, n);
  }
  /**
   * Change the YAML version and schema used by the document.
   * A `null` version disables support for directives, explicit tags, anchors, and aliases.
   * It also requires the `schema` option to be given as a `Schema` instance value.
   *
   * Overrides all previously set schema options.
   */
  setSchema(t, n = {}) {
    typeof t == "number" && (t = String(t));
    let i;
    switch (t) {
      case "1.1":
        this.directives ? this.directives.yaml.version = "1.1" : this.directives = new vn({ version: "1.1" }), i = { resolveKnownTags: !1, schema: "yaml-1.1" };
        break;
      case "1.2":
      case "next":
        this.directives ? this.directives.yaml.version = t : this.directives = new vn({ version: t }), i = { resolveKnownTags: !0, schema: "core" };
        break;
      case null:
        this.directives && delete this.directives, i = null;
        break;
      default: {
        const o = JSON.stringify(t);
        throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${o}`);
      }
    }
    if (n.schema instanceof Object)
      this.schema = n.schema;
    else if (i)
      this.schema = new gf(Object.assign(i, n));
    else
      throw new Error("With a null YAML version, the { schema: Schema } option is required");
  }
  // json & jsonArg are only used from toJSON()
  toJS({ json: t, jsonArg: n, mapAsMap: i, maxAliasCount: o, onAnchor: a, reviver: u } = {}) {
    const l = {
      anchors: /* @__PURE__ */ new Map(),
      doc: this,
      keep: !t,
      mapAsMap: i === !0,
      mapKeyWarned: !1,
      maxAliasCount: typeof o == "number" ? o : 100
    }, f = Zn(this.contents, n ?? "", l);
    if (typeof a == "function")
      for (const { count: d, res: g } of l.anchors.values())
        a(g, d);
    return typeof u == "function" ? ps(u, { "": f }, "", f) : f;
  }
  /**
   * A JSON representation of the document `contents`.
   *
   * @param jsonArg Used by `JSON.stringify` to indicate the array index or
   *   property name.
   */
  toJSON(t, n) {
    return this.toJS({ json: !0, jsonArg: t, mapAsMap: !1, onAnchor: n });
  }
  /** A YAML representation of the document. */
  toString(t = {}) {
    if (this.errors.length > 0)
      throw new Error("Document with errors cannot be stringified");
    if ("indent" in t && (!Number.isInteger(t.indent) || Number(t.indent) <= 0)) {
      const n = JSON.stringify(t.indent);
      throw new Error(`"indent" option must be a positive integer, not ${n}`);
    }
    return z3(this, t);
  }
}
function ls(e) {
  if (Gt(e))
    return !0;
  throw new Error("Expected a YAML collection as document contents");
}
class Eg extends Error {
  constructor(t, n, i, o) {
    super(), this.name = t, this.code = i, this.message = o, this.pos = n;
  }
}
class ho extends Eg {
  constructor(t, n, i) {
    super("YAMLParseError", t, n, i);
  }
}
class G3 extends Eg {
  constructor(t, n, i) {
    super("YAMLWarning", t, n, i);
  }
}
const Sp = (e, t) => (n) => {
  if (n.pos[0] === -1)
    return;
  n.linePos = n.pos.map((l) => t.linePos(l));
  const { line: i, col: o } = n.linePos[0];
  n.message += ` at line ${i}, column ${o}`;
  let a = o - 1, u = e.substring(t.lineStarts[i - 1], t.lineStarts[i]).replace(/[\n\r]+$/, "");
  if (a >= 60 && u.length > 80) {
    const l = Math.min(a - 39, u.length - 79);
    u = "…" + u.substring(l), a -= l - 1;
  }
  if (u.length > 80 && (u = u.substring(0, 79) + "…"), i > 1 && /^ *$/.test(u.substring(0, a))) {
    let l = e.substring(t.lineStarts[i - 2], t.lineStarts[i - 1]);
    l.length > 80 && (l = l.substring(0, 79) + `…
`), u = l + u;
  }
  if (/[^ ]/.test(u)) {
    let l = 1;
    const f = n.linePos[1];
    f && f.line === i && f.col > o && (l = Math.max(1, Math.min(f.col - o, 80 - a)));
    const d = " ".repeat(a) + "^".repeat(l);
    n.message += `:

${u}
${d}
`;
  }
};
function Os(e, { flow: t, indicator: n, next: i, offset: o, onError: a, parentIndent: u, startOnNewline: l }) {
  let f = !1, d = l, g = l, p = "", v = "", _ = !1, A = !1, E = null, b = null, D = null, j = null, C = null, O = null, F = null;
  for (const q of e)
    switch (A && (q.type !== "space" && q.type !== "newline" && q.type !== "comma" && a(q.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space"), A = !1), E && (d && q.type !== "comment" && q.type !== "newline" && a(E, "TAB_AS_INDENT", "Tabs are not allowed as indentation"), E = null), q.type) {
      case "space":
        !t && (n !== "doc-start" || i?.type !== "flow-collection") && q.source.includes("	") && (E = q), g = !0;
        break;
      case "comment": {
        g || a(q, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
        const J = q.source.substring(1) || " ";
        p ? p += v + J : p = J, v = "", d = !1;
        break;
      }
      case "newline":
        d ? p ? p += q.source : (!O || n !== "seq-item-ind") && (f = !0) : v += q.source, d = !0, _ = !0, (b || D) && (j = q), g = !0;
        break;
      case "anchor":
        b && a(q, "MULTIPLE_ANCHORS", "A node can have at most one anchor"), q.source.endsWith(":") && a(q.offset + q.source.length - 1, "BAD_ALIAS", "Anchor ending in : is ambiguous", !0), b = q, F === null && (F = q.offset), d = !1, g = !1, A = !0;
        break;
      case "tag": {
        D && a(q, "MULTIPLE_TAGS", "A node can have at most one tag"), D = q, F === null && (F = q.offset), d = !1, g = !1, A = !0;
        break;
      }
      case n:
        (b || D) && a(q, "BAD_PROP_ORDER", `Anchors and tags must be after the ${q.source} indicator`), O && a(q, "UNEXPECTED_TOKEN", `Unexpected ${q.source} in ${t ?? "collection"}`), O = q, d = n === "seq-item-ind" || n === "explicit-key-ind", g = !1;
        break;
      case "comma":
        if (t) {
          C && a(q, "UNEXPECTED_TOKEN", `Unexpected , in ${t}`), C = q, d = !1, g = !1;
          break;
        }
      default:
        a(q, "UNEXPECTED_TOKEN", `Unexpected ${q.type} token`), d = !1, g = !1;
    }
  const L = e[e.length - 1], T = L ? L.offset + L.source.length : o;
  return A && i && i.type !== "space" && i.type !== "newline" && i.type !== "comma" && (i.type !== "scalar" || i.source !== "") && a(i.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space"), E && (d && E.indent <= u || i?.type === "block-map" || i?.type === "block-seq") && a(E, "TAB_AS_INDENT", "Tabs are not allowed as indentation"), {
    comma: C,
    found: O,
    spaceBefore: f,
    comment: p,
    hasNewline: _,
    anchor: b,
    tag: D,
    newlineAfterProp: j,
    end: T,
    start: F ?? T
  };
}
function ko(e) {
  if (!e)
    return null;
  switch (e.type) {
    case "alias":
    case "scalar":
    case "double-quoted-scalar":
    case "single-quoted-scalar":
      if (e.source.includes(`
`))
        return !0;
      if (e.end) {
        for (const t of e.end)
          if (t.type === "newline")
            return !0;
      }
      return !1;
    case "flow-collection":
      for (const t of e.items) {
        for (const n of t.start)
          if (n.type === "newline")
            return !0;
        if (t.sep) {
          for (const n of t.sep)
            if (n.type === "newline")
              return !0;
        }
        if (ko(t.key) || ko(t.value))
          return !0;
      }
      return !1;
    default:
      return !0;
  }
}
function Ll(e, t, n) {
  if (t?.type === "flow-collection") {
    const i = t.end[0];
    i.indent === e && (i.source === "]" || i.source === "}") && ko(t) && n(i, "BAD_INDENT", "Flow end indicator should be more indented than parent", !0);
  }
}
function Sg(e, t, n) {
  const { uniqueKeys: i } = e.options;
  if (i === !1)
    return !1;
  const o = typeof i == "function" ? i : (a, u) => a === u || Tt(a) && Tt(u) && a.value === u.value;
  return t.some((a) => o(a.key, n));
}
const Cp = "All mapping items must start at the same column";
function J3({ composeNode: e, composeEmptyNode: t }, n, i, o, a) {
  const u = a?.nodeClass ?? Yn, l = new u(n.schema);
  n.atRoot && (n.atRoot = !1);
  let f = i.offset, d = null;
  for (const g of i.items) {
    const { start: p, key: v, sep: _, value: A } = g, E = Os(p, {
      indicator: "explicit-key-ind",
      next: v ?? _?.[0],
      offset: f,
      onError: o,
      parentIndent: i.indent,
      startOnNewline: !0
    }), b = !E.found;
    if (b) {
      if (v && (v.type === "block-seq" ? o(f, "BLOCK_AS_IMPLICIT_KEY", "A block sequence may not be used as an implicit map key") : "indent" in v && v.indent !== i.indent && o(f, "BAD_INDENT", Cp)), !E.anchor && !E.tag && !_) {
        d = E.end, E.comment && (l.comment ? l.comment += `
` + E.comment : l.comment = E.comment);
        continue;
      }
      (E.newlineAfterProp || ko(v)) && o(v ?? p[p.length - 1], "MULTILINE_IMPLICIT_KEY", "Implicit keys need to be on a single line");
    } else E.found?.indent !== i.indent && o(f, "BAD_INDENT", Cp);
    n.atKey = !0;
    const D = E.end, j = v ? e(n, v, E, o) : t(n, D, p, null, E, o);
    n.schema.compat && Ll(i.indent, v, o), n.atKey = !1, Sg(n, l.items, j) && o(D, "DUPLICATE_KEY", "Map keys must be unique");
    const C = Os(_ ?? [], {
      indicator: "map-value-ind",
      next: A,
      offset: j.range[2],
      onError: o,
      parentIndent: i.indent,
      startOnNewline: !v || v.type === "block-scalar"
    });
    if (f = C.end, C.found) {
      b && (A?.type === "block-map" && !C.hasNewline && o(f, "BLOCK_AS_IMPLICIT_KEY", "Nested mappings are not allowed in compact mappings"), n.options.strict && E.start < C.found.offset - 1024 && o(j.range, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));
      const O = A ? e(n, A, C, o) : t(n, f, _, null, C, o);
      n.schema.compat && Ll(i.indent, A, o), f = O.range[2];
      const F = new xn(j, O);
      n.options.keepSourceTokens && (F.srcToken = g), l.items.push(F);
    } else {
      b && o(j.range, "MISSING_CHAR", "Implicit map keys need to be followed by map values"), C.comment && (j.comment ? j.comment += `
` + C.comment : j.comment = C.comment);
      const O = new xn(j);
      n.options.keepSourceTokens && (O.srcToken = g), l.items.push(O);
    }
  }
  return d && d < f && o(d, "IMPOSSIBLE", "Map comment with trailing content"), l.range = [i.offset, f, d ?? f], l;
}
function Y3({ composeNode: e, composeEmptyNode: t }, n, i, o, a) {
  const u = a?.nodeClass ?? Mi, l = new u(n.schema);
  n.atRoot && (n.atRoot = !1), n.atKey && (n.atKey = !1);
  let f = i.offset, d = null;
  for (const { start: g, value: p } of i.items) {
    const v = Os(g, {
      indicator: "seq-item-ind",
      next: p,
      offset: f,
      onError: o,
      parentIndent: i.indent,
      startOnNewline: !0
    });
    if (!v.found)
      if (v.anchor || v.tag || p)
        p && p.type === "block-seq" ? o(v.end, "BAD_INDENT", "All sequence items must start at the same column") : o(f, "MISSING_CHAR", "Sequence item without - indicator");
      else {
        d = v.end, v.comment && (l.comment = v.comment);
        continue;
      }
    const _ = p ? e(n, p, v, o) : t(n, v.end, g, null, v, o);
    n.schema.compat && Ll(i.indent, p, o), f = _.range[2], l.items.push(_);
  }
  return l.range = [i.offset, f, d ?? f], l;
}
function No(e, t, n, i) {
  let o = "";
  if (e) {
    let a = !1, u = "";
    for (const l of e) {
      const { source: f, type: d } = l;
      switch (d) {
        case "space":
          a = !0;
          break;
        case "comment": {
          n && !a && i(l, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
          const g = f.substring(1) || " ";
          o ? o += u + g : o = g, u = "";
          break;
        }
        case "newline":
          o && (u += f), a = !0;
          break;
        default:
          i(l, "UNEXPECTED_TOKEN", `Unexpected ${d} at node end`);
      }
      t += f.length;
    }
  }
  return { comment: o, offset: t };
}
const sl = "Block collections are not allowed within flow collections", ol = (e) => e && (e.type === "block-map" || e.type === "block-seq");
function X3({ composeNode: e, composeEmptyNode: t }, n, i, o, a) {
  const u = i.start.source === "{", l = u ? "flow map" : "flow sequence", f = a?.nodeClass ?? (u ? Yn : Mi), d = new f(n.schema);
  d.flow = !0;
  const g = n.atRoot;
  g && (n.atRoot = !1), n.atKey && (n.atKey = !1);
  let p = i.offset + i.start.source.length;
  for (let b = 0; b < i.items.length; ++b) {
    const D = i.items[b], { start: j, key: C, sep: O, value: F } = D, L = Os(j, {
      flow: l,
      indicator: "explicit-key-ind",
      next: C ?? O?.[0],
      offset: p,
      onError: o,
      parentIndent: i.indent,
      startOnNewline: !1
    });
    if (!L.found) {
      if (!L.anchor && !L.tag && !O && !F) {
        b === 0 && L.comma ? o(L.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${l}`) : b < i.items.length - 1 && o(L.start, "UNEXPECTED_TOKEN", `Unexpected empty item in ${l}`), L.comment && (d.comment ? d.comment += `
` + L.comment : d.comment = L.comment), p = L.end;
        continue;
      }
      !u && n.options.strict && ko(C) && o(
        C,
        // checked by containsNewline()
        "MULTILINE_IMPLICIT_KEY",
        "Implicit keys of flow sequence pairs need to be on a single line"
      );
    }
    if (b === 0)
      L.comma && o(L.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${l}`);
    else if (L.comma || o(L.start, "MISSING_CHAR", `Missing , between ${l} items`), L.comment) {
      let T = "";
      e: for (const q of j)
        switch (q.type) {
          case "comma":
          case "space":
            break;
          case "comment":
            T = q.source.substring(1);
            break e;
          default:
            break e;
        }
      if (T) {
        let q = d.items[d.items.length - 1];
        Yt(q) && (q = q.value ?? q.key), q.comment ? q.comment += `
` + T : q.comment = T, L.comment = L.comment.substring(T.length + 1);
      }
    }
    if (!u && !O && !L.found) {
      const T = F ? e(n, F, L, o) : t(n, L.end, O, null, L, o);
      d.items.push(T), p = T.range[2], ol(F) && o(T.range, "BLOCK_IN_FLOW", sl);
    } else {
      n.atKey = !0;
      const T = L.end, q = C ? e(n, C, L, o) : t(n, T, j, null, L, o);
      ol(C) && o(q.range, "BLOCK_IN_FLOW", sl), n.atKey = !1;
      const J = Os(O ?? [], {
        flow: l,
        indicator: "map-value-ind",
        next: F,
        offset: q.range[2],
        onError: o,
        parentIndent: i.indent,
        startOnNewline: !1
      });
      if (J.found) {
        if (!u && !L.found && n.options.strict) {
          if (O)
            for (const he of O) {
              if (he === J.found)
                break;
              if (he.type === "newline") {
                o(he, "MULTILINE_IMPLICIT_KEY", "Implicit keys of flow sequence pairs need to be on a single line");
                break;
              }
            }
          L.start < J.found.offset - 1024 && o(J.found, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit flow sequence key");
        }
      } else F && ("source" in F && F.source && F.source[0] === ":" ? o(F, "MISSING_CHAR", `Missing space after : in ${l}`) : o(J.start, "MISSING_CHAR", `Missing , or : between ${l} items`));
      const oe = F ? e(n, F, J, o) : J.found ? t(n, J.end, O, null, J, o) : null;
      oe ? ol(F) && o(oe.range, "BLOCK_IN_FLOW", sl) : J.comment && (q.comment ? q.comment += `
` + J.comment : q.comment = J.comment);
      const ae = new xn(q, oe);
      if (n.options.keepSourceTokens && (ae.srcToken = D), u) {
        const he = d;
        Sg(n, he.items, q) && o(T, "DUPLICATE_KEY", "Map keys must be unique"), he.items.push(ae);
      } else {
        const he = new Yn(n.schema);
        he.flow = !0, he.items.push(ae);
        const de = (oe ?? q).range;
        he.range = [q.range[0], de[1], de[2]], d.items.push(he);
      }
      p = oe ? oe.range[2] : J.end;
    }
  }
  const v = u ? "}" : "]", [_, ...A] = i.end;
  let E = p;
  if (_ && _.source === v)
    E = _.offset + _.source.length;
  else {
    const b = l[0].toUpperCase() + l.substring(1), D = g ? `${b} must end with a ${v}` : `${b} in block collection must be sufficiently indented and end with a ${v}`;
    o(p, g ? "MISSING_CHAR" : "BAD_INDENT", D), _ && _.source.length !== 1 && A.unshift(_);
  }
  if (A.length > 0) {
    const b = No(A, E, n.options.strict, o);
    b.comment && (d.comment ? d.comment += `
` + b.comment : d.comment = b.comment), d.range = [i.offset, E, b.offset];
  } else
    d.range = [i.offset, E, E];
  return d;
}
function al(e, t, n, i, o, a) {
  const u = n.type === "block-map" ? J3(e, t, n, i, a) : n.type === "block-seq" ? Y3(e, t, n, i, a) : X3(e, t, n, i, a), l = u.constructor;
  return o === "!" || o === l.tagName ? (u.tag = l.tagName, u) : (o && (u.tag = o), u);
}
function Q3(e, t, n, i, o) {
  const a = i.tag, u = a ? t.directives.tagName(a.source, (v) => o(a, "TAG_RESOLVE_FAILED", v)) : null;
  if (n.type === "block-seq") {
    const { anchor: v, newlineAfterProp: _ } = i, A = v && a ? v.offset > a.offset ? v : a : v ?? a;
    A && (!_ || _.offset < A.offset) && o(A, "MISSING_CHAR", "Missing newline after block sequence props");
  }
  const l = n.type === "block-map" ? "map" : n.type === "block-seq" ? "seq" : n.start.source === "{" ? "map" : "seq";
  if (!a || !u || u === "!" || u === Yn.tagName && l === "map" || u === Mi.tagName && l === "seq")
    return al(e, t, n, o, u);
  let f = t.schema.tags.find((v) => v.tag === u && v.collection === l);
  if (!f) {
    const v = t.schema.knownTags[u];
    if (v && v.collection === l)
      t.schema.tags.push(Object.assign({}, v, { default: !1 })), f = v;
    else
      return v?.collection ? o(a, "BAD_COLLECTION_TYPE", `${v.tag} used for ${l} collection, but expects ${v.collection}`, !0) : o(a, "TAG_RESOLVE_FAILED", `Unresolved tag: ${u}`, !0), al(e, t, n, o, u);
  }
  const d = al(e, t, n, o, u, f), g = f.resolve?.(d, (v) => o(a, "TAG_RESOLVE_FAILED", v), t.options) ?? d, p = Jt(g) ? g : new qe(g);
  return p.range = d.range, p.tag = u, f?.format && (p.format = f.format), p;
}
function Z3(e, t, n) {
  const i = t.offset, o = e_(t, e.options.strict, n);
  if (!o)
    return { value: "", type: null, comment: "", range: [i, i, i] };
  const a = o.mode === ">" ? qe.BLOCK_FOLDED : qe.BLOCK_LITERAL, u = t.source ? t_(t.source) : [];
  let l = u.length;
  for (let E = u.length - 1; E >= 0; --E) {
    const b = u[E][1];
    if (b === "" || b === "\r")
      l = E;
    else
      break;
  }
  if (l === 0) {
    const E = o.chomp === "+" && u.length > 0 ? `
`.repeat(Math.max(1, u.length - 1)) : "";
    let b = i + o.length;
    return t.source && (b += t.source.length), { value: E, type: a, comment: o.comment, range: [i, b, b] };
  }
  let f = t.indent + o.indent, d = t.offset + o.length, g = 0;
  for (let E = 0; E < l; ++E) {
    const [b, D] = u[E];
    if (D === "" || D === "\r")
      o.indent === 0 && b.length > f && (f = b.length);
    else {
      b.length < f && n(d + b.length, "MISSING_CHAR", "Block scalars with more-indented leading empty lines must use an explicit indentation indicator"), o.indent === 0 && (f = b.length), g = E, f === 0 && !e.atRoot && n(d, "BAD_INDENT", "Block scalar values in collections must be indented");
      break;
    }
    d += b.length + D.length + 1;
  }
  for (let E = u.length - 1; E >= l; --E)
    u[E][0].length > f && (l = E + 1);
  let p = "", v = "", _ = !1;
  for (let E = 0; E < g; ++E)
    p += u[E][0].slice(f) + `
`;
  for (let E = g; E < l; ++E) {
    let [b, D] = u[E];
    d += b.length + D.length + 1;
    const j = D[D.length - 1] === "\r";
    if (j && (D = D.slice(0, -1)), D && b.length < f) {
      const O = `Block scalar lines must not be less indented than their ${o.indent ? "explicit indentation indicator" : "first line"}`;
      n(d - D.length - (j ? 2 : 1), "BAD_INDENT", O), b = "";
    }
    a === qe.BLOCK_LITERAL ? (p += v + b.slice(f) + D, v = `
`) : b.length > f || D[0] === "	" ? (v === " " ? v = `
` : !_ && v === `
` && (v = `

`), p += v + b.slice(f) + D, v = `
`, _ = !0) : D === "" ? v === `
` ? p += `
` : v = `
` : (p += v + D, v = " ", _ = !1);
  }
  switch (o.chomp) {
    case "-":
      break;
    case "+":
      for (let E = l; E < u.length; ++E)
        p += `
` + u[E][0].slice(f);
      p[p.length - 1] !== `
` && (p += `
`);
      break;
    default:
      p += `
`;
  }
  const A = i + o.length + t.source.length;
  return { value: p, type: a, comment: o.comment, range: [i, A, A] };
}
function e_({ offset: e, props: t }, n, i) {
  if (t[0].type !== "block-scalar-header")
    return i(t[0], "IMPOSSIBLE", "Block scalar header not found"), null;
  const { source: o } = t[0], a = o[0];
  let u = 0, l = "", f = -1;
  for (let v = 1; v < o.length; ++v) {
    const _ = o[v];
    if (!l && (_ === "-" || _ === "+"))
      l = _;
    else {
      const A = Number(_);
      !u && A ? u = A : f === -1 && (f = e + v);
    }
  }
  f !== -1 && i(f, "UNEXPECTED_TOKEN", `Block scalar header includes extra characters: ${o}`);
  let d = !1, g = "", p = o.length;
  for (let v = 1; v < t.length; ++v) {
    const _ = t[v];
    switch (_.type) {
      case "space":
        d = !0;
      case "newline":
        p += _.source.length;
        break;
      case "comment":
        n && !d && i(_, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters"), p += _.source.length, g = _.source.substring(1);
        break;
      case "error":
        i(_, "UNEXPECTED_TOKEN", _.message), p += _.source.length;
        break;
      default: {
        const A = `Unexpected token in block scalar header: ${_.type}`;
        i(_, "UNEXPECTED_TOKEN", A);
        const E = _.source;
        E && typeof E == "string" && (p += E.length);
      }
    }
  }
  return { mode: a, indent: u, chomp: l, comment: g, length: p };
}
function t_(e) {
  const t = e.split(/\n( *)/), n = t[0], i = n.match(/^( *)/), a = [i?.[1] ? [i[1], n.slice(i[1].length)] : ["", n]];
  for (let u = 1; u < t.length; u += 2)
    a.push([t[u], t[u + 1]]);
  return a;
}
function n_(e, t, n) {
  const { offset: i, type: o, source: a, end: u } = e;
  let l, f;
  const d = (v, _, A) => n(i + v, _, A);
  switch (o) {
    case "scalar":
      l = qe.PLAIN, f = r_(a, d);
      break;
    case "single-quoted-scalar":
      l = qe.QUOTE_SINGLE, f = i_(a, d);
      break;
    case "double-quoted-scalar":
      l = qe.QUOTE_DOUBLE, f = s_(a, d);
      break;
    default:
      return n(e, "UNEXPECTED_TOKEN", `Expected a flow scalar value, but found: ${o}`), {
        value: "",
        type: null,
        comment: "",
        range: [i, i + a.length, i + a.length]
      };
  }
  const g = i + a.length, p = No(u, g, t, n);
  return {
    value: f,
    type: l,
    comment: p.comment,
    range: [i, g, p.offset]
  };
}
function r_(e, t) {
  let n = "";
  switch (e[0]) {
    case "	":
      n = "a tab character";
      break;
    case ",":
      n = "flow indicator character ,";
      break;
    case "%":
      n = "directive indicator character %";
      break;
    case "|":
    case ">": {
      n = `block scalar indicator ${e[0]}`;
      break;
    }
    case "@":
    case "`": {
      n = `reserved character ${e[0]}`;
      break;
    }
  }
  return n && t(0, "BAD_SCALAR_START", `Plain value cannot start with ${n}`), Cg(e);
}
function i_(e, t) {
  return (e[e.length - 1] !== "'" || e.length === 1) && t(e.length, "MISSING_CHAR", "Missing closing 'quote"), Cg(e.slice(1, -1)).replace(/''/g, "'");
}
function Cg(e) {
  let t, n;
  try {
    t = new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`, "sy"), n = new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`, "sy");
  } catch {
    t = /(.*?)[ \t]*\r?\n/sy, n = /[ \t]*(.*?)[ \t]*\r?\n/sy;
  }
  let i = t.exec(e);
  if (!i)
    return e;
  let o = i[1], a = " ", u = t.lastIndex;
  for (n.lastIndex = u; i = n.exec(e); )
    i[1] === "" ? a === `
` ? o += a : a = `
` : (o += a + i[1], a = " "), u = n.lastIndex;
  const l = /[ \t]*(.*)/sy;
  return l.lastIndex = u, i = l.exec(e), o + a + (i?.[1] ?? "");
}
function s_(e, t) {
  let n = "";
  for (let i = 1; i < e.length - 1; ++i) {
    const o = e[i];
    if (!(o === "\r" && e[i + 1] === `
`))
      if (o === `
`) {
        const { fold: a, offset: u } = o_(e, i);
        n += a, i = u;
      } else if (o === "\\") {
        let a = e[++i];
        const u = a_[a];
        if (u)
          n += u;
        else if (a === `
`)
          for (a = e[i + 1]; a === " " || a === "	"; )
            a = e[++i + 1];
        else if (a === "\r" && e[i + 1] === `
`)
          for (a = e[++i + 1]; a === " " || a === "	"; )
            a = e[++i + 1];
        else if (a === "x" || a === "u" || a === "U") {
          const l = { x: 2, u: 4, U: 8 }[a];
          n += u_(e, i + 1, l, t), i += l;
        } else {
          const l = e.substr(i - 1, 2);
          t(i - 1, "BAD_DQ_ESCAPE", `Invalid escape sequence ${l}`), n += l;
        }
      } else if (o === " " || o === "	") {
        const a = i;
        let u = e[i + 1];
        for (; u === " " || u === "	"; )
          u = e[++i + 1];
        u !== `
` && !(u === "\r" && e[i + 2] === `
`) && (n += i > a ? e.slice(a, i + 1) : o);
      } else
        n += o;
  }
  return (e[e.length - 1] !== '"' || e.length === 1) && t(e.length, "MISSING_CHAR", 'Missing closing "quote'), n;
}
function o_(e, t) {
  let n = "", i = e[t + 1];
  for (; (i === " " || i === "	" || i === `
` || i === "\r") && !(i === "\r" && e[t + 2] !== `
`); )
    i === `
` && (n += `
`), t += 1, i = e[t + 1];
  return n || (n = " "), { fold: n, offset: t };
}
const a_ = {
  0: "\0",
  // null character
  a: "\x07",
  // bell character
  b: "\b",
  // backspace
  e: "\x1B",
  // escape character
  f: "\f",
  // form feed
  n: `
`,
  // line feed
  r: "\r",
  // carriage return
  t: "	",
  // horizontal tab
  v: "\v",
  // vertical tab
  N: "",
  // Unicode next line
  _: " ",
  // Unicode non-breaking space
  L: "\u2028",
  // Unicode line separator
  P: "\u2029",
  // Unicode paragraph separator
  " ": " ",
  '"': '"',
  "/": "/",
  "\\": "\\",
  "	": "	"
};
function u_(e, t, n, i) {
  const o = e.substr(t, n), u = o.length === n && /^[0-9a-fA-F]+$/.test(o) ? parseInt(o, 16) : NaN;
  if (isNaN(u)) {
    const l = e.substr(t - 2, n + 2);
    return i(t - 2, "BAD_DQ_ESCAPE", `Invalid escape sequence ${l}`), l;
  }
  return String.fromCodePoint(u);
}
function _g(e, t, n, i) {
  const { value: o, type: a, comment: u, range: l } = t.type === "block-scalar" ? Z3(e, t, i) : n_(t, e.options.strict, i), f = n ? e.directives.tagName(n.source, (p) => i(n, "TAG_RESOLVE_FAILED", p)) : null;
  let d;
  e.options.stringKeys && e.atKey ? d = e.schema[_r] : f ? d = c_(e.schema, o, f, n, i) : t.type === "scalar" ? d = l_(e, o, t, i) : d = e.schema[_r];
  let g;
  try {
    const p = d.resolve(o, (v) => i(n ?? t, "TAG_RESOLVE_FAILED", v), e.options);
    g = Tt(p) ? p : new qe(p);
  } catch (p) {
    const v = p instanceof Error ? p.message : String(p);
    i(n ?? t, "TAG_RESOLVE_FAILED", v), g = new qe(o);
  }
  return g.range = l, g.source = o, a && (g.type = a), f && (g.tag = f), d.format && (g.format = d.format), u && (g.comment = u), g;
}
function c_(e, t, n, i, o) {
  if (n === "!")
    return e[_r];
  const a = [];
  for (const l of e.tags)
    if (!l.collection && l.tag === n)
      if (l.default && l.test)
        a.push(l);
      else
        return l;
  for (const l of a)
    if (l.test?.test(t))
      return l;
  const u = e.knownTags[n];
  return u && !u.collection ? (e.tags.push(Object.assign({}, u, { default: !1, test: void 0 })), u) : (o(i, "TAG_RESOLVE_FAILED", `Unresolved tag: ${n}`, n !== "tag:yaml.org,2002:str"), e[_r]);
}
function l_({ atKey: e, directives: t, schema: n }, i, o, a) {
  const u = n.tags.find((l) => (l.default === !0 || e && l.default === "key") && l.test?.test(i)) || n[_r];
  if (n.compat) {
    const l = n.compat.find((f) => f.default && f.test?.test(i)) ?? n[_r];
    if (u.tag !== l.tag) {
      const f = t.tagString(u.tag), d = t.tagString(l.tag), g = `Value may be parsed as either ${f} or ${d}`;
      a(o, "TAG_RESOLVE_FAILED", g, !0);
    }
  }
  return u;
}
function f_(e, t, n) {
  if (t) {
    n === null && (n = t.length);
    for (let i = n - 1; i >= 0; --i) {
      let o = t[i];
      switch (o.type) {
        case "space":
        case "comment":
        case "newline":
          e -= o.source.length;
          continue;
      }
      for (o = t[++i]; o?.type === "space"; )
        e += o.source.length, o = t[++i];
      break;
    }
  }
  return e;
}
const h_ = { composeNode: kg, composeEmptyNode: yf };
function kg(e, t, n, i) {
  const o = e.atKey, { spaceBefore: a, comment: u, anchor: l, tag: f } = n;
  let d, g = !0;
  switch (t.type) {
    case "alias":
      d = d_(e, t, i), (l || f) && i(t, "ALIAS_PROPS", "An alias node must not specify any properties");
      break;
    case "scalar":
    case "single-quoted-scalar":
    case "double-quoted-scalar":
    case "block-scalar":
      d = _g(e, t, f, i), l && (d.anchor = l.source.substring(1));
      break;
    case "block-map":
    case "block-seq":
    case "flow-collection":
      d = Q3(h_, e, t, n, i), l && (d.anchor = l.source.substring(1));
      break;
    default: {
      const p = t.type === "error" ? t.message : `Unsupported token (type: ${t.type})`;
      i(t, "UNEXPECTED_TOKEN", p), d = yf(e, t.offset, void 0, null, n, i), g = !1;
    }
  }
  return l && d.anchor === "" && i(l, "BAD_ALIAS", "Anchor cannot be an empty string"), o && e.options.stringKeys && (!Tt(d) || typeof d.value != "string" || d.tag && d.tag !== "tag:yaml.org,2002:str") && i(f ?? t, "NON_STRING_KEY", "With stringKeys, all keys must be strings"), a && (d.spaceBefore = !0), u && (t.type === "scalar" && t.source === "" ? d.comment = u : d.commentBefore = u), e.options.keepSourceTokens && g && (d.srcToken = t), d;
}
function yf(e, t, n, i, { spaceBefore: o, comment: a, anchor: u, tag: l, end: f }, d) {
  const g = {
    type: "scalar",
    offset: f_(t, n, i),
    indent: -1,
    source: ""
  }, p = _g(e, g, l, d);
  return u && (p.anchor = u.source.substring(1), p.anchor === "" && d(u, "BAD_ALIAS", "Anchor cannot be an empty string")), o && (p.spaceBefore = !0), a && (p.comment = a, p.range[2] = f), p;
}
function d_({ options: e }, { offset: t, source: n, end: i }, o) {
  const a = new rf(n.substring(1));
  a.source === "" && o(t, "BAD_ALIAS", "Alias cannot be an empty string"), a.source.endsWith(":") && o(t + n.length - 1, "BAD_ALIAS", "Alias ending in : is ambiguous", !0);
  const u = t + n.length, l = No(i, u, e.strict, o);
  return a.range = [t, u, l.offset], l.comment && (a.comment = l.comment), a;
}
function p_(e, t, { offset: n, start: i, value: o, end: a }, u) {
  const l = Object.assign({ _directives: t }, e), f = new jo(void 0, l), d = {
    atKey: !1,
    atRoot: !0,
    directives: f.directives,
    options: f.options,
    schema: f.schema
  }, g = Os(i, {
    indicator: "doc-start",
    next: o ?? a?.[0],
    offset: n,
    onError: u,
    parentIndent: 0,
    startOnNewline: !0
  });
  g.found && (f.directives.docStart = !0, o && (o.type === "block-map" || o.type === "block-seq") && !g.hasNewline && u(g.end, "MISSING_CHAR", "Block collection cannot start on same line with directives-end marker")), f.contents = o ? kg(d, o, g, u) : yf(d, g.end, i, null, g, u);
  const p = f.contents.range[2], v = No(a, p, !1, u);
  return v.comment && (f.comment = v.comment), f.range = [n, p, v.offset], f;
}
function uo(e) {
  if (typeof e == "number")
    return [e, e + 1];
  if (Array.isArray(e))
    return e.length === 2 ? e : [e[0], e[1]];
  const { offset: t, source: n } = e;
  return [t, t + (typeof n == "string" ? n.length : 1)];
}
function _p(e) {
  let t = "", n = !1, i = !1;
  for (let o = 0; o < e.length; ++o) {
    const a = e[o];
    switch (a[0]) {
      case "#":
        t += (t === "" ? "" : i ? `

` : `
`) + (a.substring(1) || " "), n = !0, i = !1;
        break;
      case "%":
        e[o + 1]?.[0] !== "#" && (o += 1), n = !1;
        break;
      default:
        n || (i = !0), n = !1;
    }
  }
  return { comment: t, afterEmptyLine: i };
}
class g_ {
  constructor(t = {}) {
    this.doc = null, this.atDirectives = !1, this.prelude = [], this.errors = [], this.warnings = [], this.onError = (n, i, o, a) => {
      const u = uo(n);
      a ? this.warnings.push(new G3(u, i, o)) : this.errors.push(new ho(u, i, o));
    }, this.directives = new vn({ version: t.version || "1.2" }), this.options = t;
  }
  decorate(t, n) {
    const { comment: i, afterEmptyLine: o } = _p(this.prelude);
    if (i) {
      const a = t.contents;
      if (n)
        t.comment = t.comment ? `${t.comment}
${i}` : i;
      else if (o || t.directives.docStart || !a)
        t.commentBefore = i;
      else if (Gt(a) && !a.flow && a.items.length > 0) {
        let u = a.items[0];
        Yt(u) && (u = u.key);
        const l = u.commentBefore;
        u.commentBefore = l ? `${i}
${l}` : i;
      } else {
        const u = a.commentBefore;
        a.commentBefore = u ? `${i}
${u}` : i;
      }
    }
    n ? (Array.prototype.push.apply(t.errors, this.errors), Array.prototype.push.apply(t.warnings, this.warnings)) : (t.errors = this.errors, t.warnings = this.warnings), this.prelude = [], this.errors = [], this.warnings = [];
  }
  /**
   * Current stream status information.
   *
   * Mostly useful at the end of input for an empty stream.
   */
  streamInfo() {
    return {
      comment: _p(this.prelude).comment,
      directives: this.directives,
      errors: this.errors,
      warnings: this.warnings
    };
  }
  /**
   * Compose tokens into documents.
   *
   * @param forceDoc - If the stream contains no document, still emit a final document including any comments and directives that would be applied to a subsequent document.
   * @param endOffset - Should be set if `forceDoc` is also set, to set the document range end and to indicate errors correctly.
   */
  *compose(t, n = !1, i = -1) {
    for (const o of t)
      yield* this.next(o);
    yield* this.end(n, i);
  }
  /** Advance the composer by one CST token. */
  *next(t) {
    switch (t.type) {
      case "directive":
        this.directives.add(t.source, (n, i, o) => {
          const a = uo(t);
          a[0] += n, this.onError(a, "BAD_DIRECTIVE", i, o);
        }), this.prelude.push(t.source), this.atDirectives = !0;
        break;
      case "document": {
        const n = p_(this.options, this.directives, t, this.onError);
        this.atDirectives && !n.directives.docStart && this.onError(t, "MISSING_CHAR", "Missing directives-end/doc-start indicator line"), this.decorate(n, !1), this.doc && (yield this.doc), this.doc = n, this.atDirectives = !1;
        break;
      }
      case "byte-order-mark":
      case "space":
        break;
      case "comment":
      case "newline":
        this.prelude.push(t.source);
        break;
      case "error": {
        const n = t.source ? `${t.message}: ${JSON.stringify(t.source)}` : t.message, i = new ho(uo(t), "UNEXPECTED_TOKEN", n);
        this.atDirectives || !this.doc ? this.errors.push(i) : this.doc.errors.push(i);
        break;
      }
      case "doc-end": {
        if (!this.doc) {
          const i = "Unexpected doc-end without preceding document";
          this.errors.push(new ho(uo(t), "UNEXPECTED_TOKEN", i));
          break;
        }
        this.doc.directives.docEnd = !0;
        const n = No(t.end, t.offset + t.source.length, this.doc.options.strict, this.onError);
        if (this.decorate(this.doc, !0), n.comment) {
          const i = this.doc.comment;
          this.doc.comment = i ? `${i}
${n.comment}` : n.comment;
        }
        this.doc.range[2] = n.offset;
        break;
      }
      default:
        this.errors.push(new ho(uo(t), "UNEXPECTED_TOKEN", `Unsupported token ${t.type}`));
    }
  }
  /**
   * Call at end of input to yield any remaining document.
   *
   * @param forceDoc - If the stream contains no document, still emit a final document including any comments and directives that would be applied to a subsequent document.
   * @param endOffset - Should be set if `forceDoc` is also set, to set the document range end and to indicate errors correctly.
   */
  *end(t = !1, n = -1) {
    if (this.doc)
      this.decorate(this.doc, !0), yield this.doc, this.doc = null;
    else if (t) {
      const i = Object.assign({ _directives: this.directives }, this.options), o = new jo(void 0, i);
      this.atDirectives && this.onError(n, "MISSING_CHAR", "Missing directives-end indicator line"), o.range = [0, n, n], this.decorate(o, !1), yield o;
    }
  }
}
const Og = "\uFEFF", Tg = "", Ig = "", Pl = "";
function y_(e) {
  switch (e) {
    case Og:
      return "byte-order-mark";
    case Tg:
      return "doc-mode";
    case Ig:
      return "flow-error-end";
    case Pl:
      return "scalar";
    case "---":
      return "doc-start";
    case "...":
      return "doc-end";
    case "":
    case `
`:
    case `\r
`:
      return "newline";
    case "-":
      return "seq-item-ind";
    case "?":
      return "explicit-key-ind";
    case ":":
      return "map-value-ind";
    case "{":
      return "flow-map-start";
    case "}":
      return "flow-map-end";
    case "[":
      return "flow-seq-start";
    case "]":
      return "flow-seq-end";
    case ",":
      return "comma";
  }
  switch (e[0]) {
    case " ":
    case "	":
      return "space";
    case "#":
      return "comment";
    case "%":
      return "directive-line";
    case "*":
      return "alias";
    case "&":
      return "anchor";
    case "!":
      return "tag";
    case "'":
      return "single-quoted-scalar";
    case '"':
      return "double-quoted-scalar";
    case "|":
    case ">":
      return "block-scalar-header";
  }
  return null;
}
function cr(e) {
  switch (e) {
    case void 0:
    case " ":
    case `
`:
    case "\r":
    case "	":
      return !0;
    default:
      return !1;
  }
}
const kp = new Set("0123456789ABCDEFabcdef"), m_ = new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"), Ma = new Set(",[]{}"), w_ = new Set(` ,[]{}
\r	`), ul = (e) => !e || w_.has(e);
class b_ {
  constructor() {
    this.atEnd = !1, this.blockScalarIndent = -1, this.blockScalarKeep = !1, this.buffer = "", this.flowKey = !1, this.flowLevel = 0, this.indentNext = 0, this.indentValue = 0, this.lineEndPos = null, this.next = null, this.pos = 0;
  }
  /**
   * Generate YAML tokens from the `source` string. If `incomplete`,
   * a part of the last line may be left as a buffer for the next call.
   *
   * @returns A generator of lexical tokens
   */
  *lex(t, n = !1) {
    if (t) {
      if (typeof t != "string")
        throw TypeError("source is not a string");
      this.buffer = this.buffer ? this.buffer + t : t, this.lineEndPos = null;
    }
    this.atEnd = !n;
    let i = this.next ?? "stream";
    for (; i && (n || this.hasChars(1)); )
      i = yield* this.parseNext(i);
  }
  atLineEnd() {
    let t = this.pos, n = this.buffer[t];
    for (; n === " " || n === "	"; )
      n = this.buffer[++t];
    return !n || n === "#" || n === `
` ? !0 : n === "\r" ? this.buffer[t + 1] === `
` : !1;
  }
  charAt(t) {
    return this.buffer[this.pos + t];
  }
  continueScalar(t) {
    let n = this.buffer[t];
    if (this.indentNext > 0) {
      let i = 0;
      for (; n === " "; )
        n = this.buffer[++i + t];
      if (n === "\r") {
        const o = this.buffer[i + t + 1];
        if (o === `
` || !o && !this.atEnd)
          return t + i + 1;
      }
      return n === `
` || i >= this.indentNext || !n && !this.atEnd ? t + i : -1;
    }
    if (n === "-" || n === ".") {
      const i = this.buffer.substr(t, 3);
      if ((i === "---" || i === "...") && cr(this.buffer[t + 3]))
        return -1;
    }
    return t;
  }
  getLine() {
    let t = this.lineEndPos;
    return (typeof t != "number" || t !== -1 && t < this.pos) && (t = this.buffer.indexOf(`
`, this.pos), this.lineEndPos = t), t === -1 ? this.atEnd ? this.buffer.substring(this.pos) : null : (this.buffer[t - 1] === "\r" && (t -= 1), this.buffer.substring(this.pos, t));
  }
  hasChars(t) {
    return this.pos + t <= this.buffer.length;
  }
  setNext(t) {
    return this.buffer = this.buffer.substring(this.pos), this.pos = 0, this.lineEndPos = null, this.next = t, null;
  }
  peek(t) {
    return this.buffer.substr(this.pos, t);
  }
  *parseNext(t) {
    switch (t) {
      case "stream":
        return yield* this.parseStream();
      case "line-start":
        return yield* this.parseLineStart();
      case "block-start":
        return yield* this.parseBlockStart();
      case "doc":
        return yield* this.parseDocument();
      case "flow":
        return yield* this.parseFlowCollection();
      case "quoted-scalar":
        return yield* this.parseQuotedScalar();
      case "block-scalar":
        return yield* this.parseBlockScalar();
      case "plain-scalar":
        return yield* this.parsePlainScalar();
    }
  }
  *parseStream() {
    let t = this.getLine();
    if (t === null)
      return this.setNext("stream");
    if (t[0] === Og && (yield* this.pushCount(1), t = t.substring(1)), t[0] === "%") {
      let n = t.length, i = t.indexOf("#");
      for (; i !== -1; ) {
        const a = t[i - 1];
        if (a === " " || a === "	") {
          n = i - 1;
          break;
        } else
          i = t.indexOf("#", i + 1);
      }
      for (; ; ) {
        const a = t[n - 1];
        if (a === " " || a === "	")
          n -= 1;
        else
          break;
      }
      const o = (yield* this.pushCount(n)) + (yield* this.pushSpaces(!0));
      return yield* this.pushCount(t.length - o), this.pushNewline(), "stream";
    }
    if (this.atLineEnd()) {
      const n = yield* this.pushSpaces(!0);
      return yield* this.pushCount(t.length - n), yield* this.pushNewline(), "stream";
    }
    return yield Tg, yield* this.parseLineStart();
  }
  *parseLineStart() {
    const t = this.charAt(0);
    if (!t && !this.atEnd)
      return this.setNext("line-start");
    if (t === "-" || t === ".") {
      if (!this.atEnd && !this.hasChars(4))
        return this.setNext("line-start");
      const n = this.peek(3);
      if ((n === "---" || n === "...") && cr(this.charAt(3)))
        return yield* this.pushCount(3), this.indentValue = 0, this.indentNext = 0, n === "---" ? "doc" : "stream";
    }
    return this.indentValue = yield* this.pushSpaces(!1), this.indentNext > this.indentValue && !cr(this.charAt(1)) && (this.indentNext = this.indentValue), yield* this.parseBlockStart();
  }
  *parseBlockStart() {
    const [t, n] = this.peek(2);
    if (!n && !this.atEnd)
      return this.setNext("block-start");
    if ((t === "-" || t === "?" || t === ":") && cr(n)) {
      const i = (yield* this.pushCount(1)) + (yield* this.pushSpaces(!0));
      return this.indentNext = this.indentValue + 1, this.indentValue += i, yield* this.parseBlockStart();
    }
    return "doc";
  }
  *parseDocument() {
    yield* this.pushSpaces(!0);
    const t = this.getLine();
    if (t === null)
      return this.setNext("doc");
    let n = yield* this.pushIndicators();
    switch (t[n]) {
      case "#":
        yield* this.pushCount(t.length - n);
      case void 0:
        return yield* this.pushNewline(), yield* this.parseLineStart();
      case "{":
      case "[":
        return yield* this.pushCount(1), this.flowKey = !1, this.flowLevel = 1, "flow";
      case "}":
      case "]":
        return yield* this.pushCount(1), "doc";
      case "*":
        return yield* this.pushUntil(ul), "doc";
      case '"':
      case "'":
        return yield* this.parseQuotedScalar();
      case "|":
      case ">":
        return n += yield* this.parseBlockScalarHeader(), n += yield* this.pushSpaces(!0), yield* this.pushCount(t.length - n), yield* this.pushNewline(), yield* this.parseBlockScalar();
      default:
        return yield* this.parsePlainScalar();
    }
  }
  *parseFlowCollection() {
    let t, n, i = -1;
    do
      t = yield* this.pushNewline(), t > 0 ? (n = yield* this.pushSpaces(!1), this.indentValue = i = n) : n = 0, n += yield* this.pushSpaces(!0);
    while (t + n > 0);
    const o = this.getLine();
    if (o === null)
      return this.setNext("flow");
    if ((i !== -1 && i < this.indentNext && o[0] !== "#" || i === 0 && (o.startsWith("---") || o.startsWith("...")) && cr(o[3])) && !(i === this.indentNext - 1 && this.flowLevel === 1 && (o[0] === "]" || o[0] === "}")))
      return this.flowLevel = 0, yield Ig, yield* this.parseLineStart();
    let a = 0;
    for (; o[a] === ","; )
      a += yield* this.pushCount(1), a += yield* this.pushSpaces(!0), this.flowKey = !1;
    switch (a += yield* this.pushIndicators(), o[a]) {
      case void 0:
        return "flow";
      case "#":
        return yield* this.pushCount(o.length - a), "flow";
      case "{":
      case "[":
        return yield* this.pushCount(1), this.flowKey = !1, this.flowLevel += 1, "flow";
      case "}":
      case "]":
        return yield* this.pushCount(1), this.flowKey = !0, this.flowLevel -= 1, this.flowLevel ? "flow" : "doc";
      case "*":
        return yield* this.pushUntil(ul), "flow";
      case '"':
      case "'":
        return this.flowKey = !0, yield* this.parseQuotedScalar();
      case ":": {
        const u = this.charAt(1);
        if (this.flowKey || cr(u) || u === ",")
          return this.flowKey = !1, yield* this.pushCount(1), yield* this.pushSpaces(!0), "flow";
      }
      default:
        return this.flowKey = !1, yield* this.parsePlainScalar();
    }
  }
  *parseQuotedScalar() {
    const t = this.charAt(0);
    let n = this.buffer.indexOf(t, this.pos + 1);
    if (t === "'")
      for (; n !== -1 && this.buffer[n + 1] === "'"; )
        n = this.buffer.indexOf("'", n + 2);
    else
      for (; n !== -1; ) {
        let a = 0;
        for (; this.buffer[n - 1 - a] === "\\"; )
          a += 1;
        if (a % 2 === 0)
          break;
        n = this.buffer.indexOf('"', n + 1);
      }
    const i = this.buffer.substring(0, n);
    let o = i.indexOf(`
`, this.pos);
    if (o !== -1) {
      for (; o !== -1; ) {
        const a = this.continueScalar(o + 1);
        if (a === -1)
          break;
        o = i.indexOf(`
`, a);
      }
      o !== -1 && (n = o - (i[o - 1] === "\r" ? 2 : 1));
    }
    if (n === -1) {
      if (!this.atEnd)
        return this.setNext("quoted-scalar");
      n = this.buffer.length;
    }
    return yield* this.pushToIndex(n + 1, !1), this.flowLevel ? "flow" : "doc";
  }
  *parseBlockScalarHeader() {
    this.blockScalarIndent = -1, this.blockScalarKeep = !1;
    let t = this.pos;
    for (; ; ) {
      const n = this.buffer[++t];
      if (n === "+")
        this.blockScalarKeep = !0;
      else if (n > "0" && n <= "9")
        this.blockScalarIndent = Number(n) - 1;
      else if (n !== "-")
        break;
    }
    return yield* this.pushUntil((n) => cr(n) || n === "#");
  }
  *parseBlockScalar() {
    let t = this.pos - 1, n = 0, i;
    e: for (let a = this.pos; i = this.buffer[a]; ++a)
      switch (i) {
        case " ":
          n += 1;
          break;
        case `
`:
          t = a, n = 0;
          break;
        case "\r": {
          const u = this.buffer[a + 1];
          if (!u && !this.atEnd)
            return this.setNext("block-scalar");
          if (u === `
`)
            break;
        }
        default:
          break e;
      }
    if (!i && !this.atEnd)
      return this.setNext("block-scalar");
    if (n >= this.indentNext) {
      this.blockScalarIndent === -1 ? this.indentNext = n : this.indentNext = this.blockScalarIndent + (this.indentNext === 0 ? 1 : this.indentNext);
      do {
        const a = this.continueScalar(t + 1);
        if (a === -1)
          break;
        t = this.buffer.indexOf(`
`, a);
      } while (t !== -1);
      if (t === -1) {
        if (!this.atEnd)
          return this.setNext("block-scalar");
        t = this.buffer.length;
      }
    }
    let o = t + 1;
    for (i = this.buffer[o]; i === " "; )
      i = this.buffer[++o];
    if (i === "	") {
      for (; i === "	" || i === " " || i === "\r" || i === `
`; )
        i = this.buffer[++o];
      t = o - 1;
    } else if (!this.blockScalarKeep)
      do {
        let a = t - 1, u = this.buffer[a];
        u === "\r" && (u = this.buffer[--a]);
        const l = a;
        for (; u === " "; )
          u = this.buffer[--a];
        if (u === `
` && a >= this.pos && a + 1 + n > l)
          t = a;
        else
          break;
      } while (!0);
    return yield Pl, yield* this.pushToIndex(t + 1, !0), yield* this.parseLineStart();
  }
  *parsePlainScalar() {
    const t = this.flowLevel > 0;
    let n = this.pos - 1, i = this.pos - 1, o;
    for (; o = this.buffer[++i]; )
      if (o === ":") {
        const a = this.buffer[i + 1];
        if (cr(a) || t && Ma.has(a))
          break;
        n = i;
      } else if (cr(o)) {
        let a = this.buffer[i + 1];
        if (o === "\r" && (a === `
` ? (i += 1, o = `
`, a = this.buffer[i + 1]) : n = i), a === "#" || t && Ma.has(a))
          break;
        if (o === `
`) {
          const u = this.continueScalar(i + 1);
          if (u === -1)
            break;
          i = Math.max(i, u - 2);
        }
      } else {
        if (t && Ma.has(o))
          break;
        n = i;
      }
    return !o && !this.atEnd ? this.setNext("plain-scalar") : (yield Pl, yield* this.pushToIndex(n + 1, !0), t ? "flow" : "doc");
  }
  *pushCount(t) {
    return t > 0 ? (yield this.buffer.substr(this.pos, t), this.pos += t, t) : 0;
  }
  *pushToIndex(t, n) {
    const i = this.buffer.slice(this.pos, t);
    return i ? (yield i, this.pos += i.length, i.length) : (n && (yield ""), 0);
  }
  *pushIndicators() {
    switch (this.charAt(0)) {
      case "!":
        return (yield* this.pushTag()) + (yield* this.pushSpaces(!0)) + (yield* this.pushIndicators());
      case "&":
        return (yield* this.pushUntil(ul)) + (yield* this.pushSpaces(!0)) + (yield* this.pushIndicators());
      case "-":
      case "?":
      case ":": {
        const t = this.flowLevel > 0, n = this.charAt(1);
        if (cr(n) || t && Ma.has(n))
          return t ? this.flowKey && (this.flowKey = !1) : this.indentNext = this.indentValue + 1, (yield* this.pushCount(1)) + (yield* this.pushSpaces(!0)) + (yield* this.pushIndicators());
      }
    }
    return 0;
  }
  *pushTag() {
    if (this.charAt(1) === "<") {
      let t = this.pos + 2, n = this.buffer[t];
      for (; !cr(n) && n !== ">"; )
        n = this.buffer[++t];
      return yield* this.pushToIndex(n === ">" ? t + 1 : t, !1);
    } else {
      let t = this.pos + 1, n = this.buffer[t];
      for (; n; )
        if (m_.has(n))
          n = this.buffer[++t];
        else if (n === "%" && kp.has(this.buffer[t + 1]) && kp.has(this.buffer[t + 2]))
          n = this.buffer[t += 3];
        else
          break;
      return yield* this.pushToIndex(t, !1);
    }
  }
  *pushNewline() {
    const t = this.buffer[this.pos];
    return t === `
` ? yield* this.pushCount(1) : t === "\r" && this.charAt(1) === `
` ? yield* this.pushCount(2) : 0;
  }
  *pushSpaces(t) {
    let n = this.pos - 1, i;
    do
      i = this.buffer[++n];
    while (i === " " || t && i === "	");
    const o = n - this.pos;
    return o > 0 && (yield this.buffer.substr(this.pos, o), this.pos = n), o;
  }
  *pushUntil(t) {
    let n = this.pos, i = this.buffer[n];
    for (; !t(i); )
      i = this.buffer[++n];
    return yield* this.pushToIndex(n, !1);
  }
}
class v_ {
  constructor() {
    this.lineStarts = [], this.addNewLine = (t) => this.lineStarts.push(t), this.linePos = (t) => {
      let n = 0, i = this.lineStarts.length;
      for (; n < i; ) {
        const a = n + i >> 1;
        this.lineStarts[a] < t ? n = a + 1 : i = a;
      }
      if (this.lineStarts[n] === t)
        return { line: n + 1, col: 1 };
      if (n === 0)
        return { line: 0, col: t };
      const o = this.lineStarts[n - 1];
      return { line: n, col: t - o + 1 };
    };
  }
}
function ki(e, t) {
  for (let n = 0; n < e.length; ++n)
    if (e[n].type === t)
      return !0;
  return !1;
}
function Op(e) {
  for (let t = 0; t < e.length; ++t)
    switch (e[t].type) {
      case "space":
      case "comment":
      case "newline":
        break;
      default:
        return t;
    }
  return -1;
}
function Fg(e) {
  switch (e?.type) {
    case "alias":
    case "scalar":
    case "single-quoted-scalar":
    case "double-quoted-scalar":
    case "flow-collection":
      return !0;
    default:
      return !1;
  }
}
function Ua(e) {
  switch (e.type) {
    case "document":
      return e.start;
    case "block-map": {
      const t = e.items[e.items.length - 1];
      return t.sep ?? t.start;
    }
    case "block-seq":
      return e.items[e.items.length - 1].start;
    default:
      return [];
  }
}
function fs(e) {
  if (e.length === 0)
    return [];
  let t = e.length;
  e: for (; --t >= 0; )
    switch (e[t].type) {
      case "doc-start":
      case "explicit-key-ind":
      case "map-value-ind":
      case "seq-item-ind":
      case "newline":
        break e;
    }
  for (; e[++t]?.type === "space"; )
    ;
  return e.splice(t, e.length);
}
function Tp(e) {
  if (e.start.type === "flow-seq-start")
    for (const t of e.items)
      t.sep && !t.value && !ki(t.start, "explicit-key-ind") && !ki(t.sep, "map-value-ind") && (t.key && (t.value = t.key), delete t.key, Fg(t.value) ? t.value.end ? Array.prototype.push.apply(t.value.end, t.sep) : t.value.end = t.sep : Array.prototype.push.apply(t.start, t.sep), delete t.sep);
}
class x_ {
  /**
   * @param onNewLine - If defined, called separately with the start position of
   *   each new line (in `parse()`, including the start of input).
   */
  constructor(t) {
    this.atNewLine = !0, this.atScalar = !1, this.indent = 0, this.offset = 0, this.onKeyLine = !1, this.stack = [], this.source = "", this.type = "", this.lexer = new b_(), this.onNewLine = t;
  }
  /**
   * Parse `source` as a YAML stream.
   * If `incomplete`, a part of the last line may be left as a buffer for the next call.
   *
   * Errors are not thrown, but yielded as `{ type: 'error', message }` tokens.
   *
   * @returns A generator of tokens representing each directive, document, and other structure.
   */
  *parse(t, n = !1) {
    this.onNewLine && this.offset === 0 && this.onNewLine(0);
    for (const i of this.lexer.lex(t, n))
      yield* this.next(i);
    n || (yield* this.end());
  }
  /**
   * Advance the parser by the `source` of one lexical token.
   */
  *next(t) {
    if (this.source = t, this.atScalar) {
      this.atScalar = !1, yield* this.step(), this.offset += t.length;
      return;
    }
    const n = y_(t);
    if (n)
      if (n === "scalar")
        this.atNewLine = !1, this.atScalar = !0, this.type = "scalar";
      else {
        switch (this.type = n, yield* this.step(), n) {
          case "newline":
            this.atNewLine = !0, this.indent = 0, this.onNewLine && this.onNewLine(this.offset + t.length);
            break;
          case "space":
            this.atNewLine && t[0] === " " && (this.indent += t.length);
            break;
          case "explicit-key-ind":
          case "map-value-ind":
          case "seq-item-ind":
            this.atNewLine && (this.indent += t.length);
            break;
          case "doc-mode":
          case "flow-error-end":
            return;
          default:
            this.atNewLine = !1;
        }
        this.offset += t.length;
      }
    else {
      const i = `Not a YAML token: ${t}`;
      yield* this.pop({ type: "error", offset: this.offset, message: i, source: t }), this.offset += t.length;
    }
  }
  /** Call at end of input to push out any remaining constructions */
  *end() {
    for (; this.stack.length > 0; )
      yield* this.pop();
  }
  get sourceToken() {
    return {
      type: this.type,
      offset: this.offset,
      indent: this.indent,
      source: this.source
    };
  }
  *step() {
    const t = this.peek(1);
    if (this.type === "doc-end" && (!t || t.type !== "doc-end")) {
      for (; this.stack.length > 0; )
        yield* this.pop();
      this.stack.push({
        type: "doc-end",
        offset: this.offset,
        source: this.source
      });
      return;
    }
    if (!t)
      return yield* this.stream();
    switch (t.type) {
      case "document":
        return yield* this.document(t);
      case "alias":
      case "scalar":
      case "single-quoted-scalar":
      case "double-quoted-scalar":
        return yield* this.scalar(t);
      case "block-scalar":
        return yield* this.blockScalar(t);
      case "block-map":
        return yield* this.blockMap(t);
      case "block-seq":
        return yield* this.blockSequence(t);
      case "flow-collection":
        return yield* this.flowCollection(t);
      case "doc-end":
        return yield* this.documentEnd(t);
    }
    yield* this.pop();
  }
  peek(t) {
    return this.stack[this.stack.length - t];
  }
  *pop(t) {
    const n = t ?? this.stack.pop();
    if (!n)
      yield { type: "error", offset: this.offset, source: "", message: "Tried to pop an empty stack" };
    else if (this.stack.length === 0)
      yield n;
    else {
      const i = this.peek(1);
      switch (n.type === "block-scalar" ? n.indent = "indent" in i ? i.indent : 0 : n.type === "flow-collection" && i.type === "document" && (n.indent = 0), n.type === "flow-collection" && Tp(n), i.type) {
        case "document":
          i.value = n;
          break;
        case "block-scalar":
          i.props.push(n);
          break;
        case "block-map": {
          const o = i.items[i.items.length - 1];
          if (o.value) {
            i.items.push({ start: [], key: n, sep: [] }), this.onKeyLine = !0;
            return;
          } else if (o.sep)
            o.value = n;
          else {
            Object.assign(o, { key: n, sep: [] }), this.onKeyLine = !o.explicitKey;
            return;
          }
          break;
        }
        case "block-seq": {
          const o = i.items[i.items.length - 1];
          o.value ? i.items.push({ start: [], value: n }) : o.value = n;
          break;
        }
        case "flow-collection": {
          const o = i.items[i.items.length - 1];
          !o || o.value ? i.items.push({ start: [], key: n, sep: [] }) : o.sep ? o.value = n : Object.assign(o, { key: n, sep: [] });
          return;
        }
        default:
          yield* this.pop(), yield* this.pop(n);
      }
      if ((i.type === "document" || i.type === "block-map" || i.type === "block-seq") && (n.type === "block-map" || n.type === "block-seq")) {
        const o = n.items[n.items.length - 1];
        o && !o.sep && !o.value && o.start.length > 0 && Op(o.start) === -1 && (n.indent === 0 || o.start.every((a) => a.type !== "comment" || a.indent < n.indent)) && (i.type === "document" ? i.end = o.start : i.items.push({ start: o.start }), n.items.splice(-1, 1));
      }
    }
  }
  *stream() {
    switch (this.type) {
      case "directive-line":
        yield { type: "directive", offset: this.offset, source: this.source };
        return;
      case "byte-order-mark":
      case "space":
      case "comment":
      case "newline":
        yield this.sourceToken;
        return;
      case "doc-mode":
      case "doc-start": {
        const t = {
          type: "document",
          offset: this.offset,
          start: []
        };
        this.type === "doc-start" && t.start.push(this.sourceToken), this.stack.push(t);
        return;
      }
    }
    yield {
      type: "error",
      offset: this.offset,
      message: `Unexpected ${this.type} token in YAML stream`,
      source: this.source
    };
  }
  *document(t) {
    if (t.value)
      return yield* this.lineEnd(t);
    switch (this.type) {
      case "doc-start": {
        Op(t.start) !== -1 ? (yield* this.pop(), yield* this.step()) : t.start.push(this.sourceToken);
        return;
      }
      case "anchor":
      case "tag":
      case "space":
      case "comment":
      case "newline":
        t.start.push(this.sourceToken);
        return;
    }
    const n = this.startBlockValue(t);
    n ? this.stack.push(n) : yield {
      type: "error",
      offset: this.offset,
      message: `Unexpected ${this.type} token in YAML document`,
      source: this.source
    };
  }
  *scalar(t) {
    if (this.type === "map-value-ind") {
      const n = Ua(this.peek(2)), i = fs(n);
      let o;
      t.end ? (o = t.end, o.push(this.sourceToken), delete t.end) : o = [this.sourceToken];
      const a = {
        type: "block-map",
        offset: t.offset,
        indent: t.indent,
        items: [{ start: i, key: t, sep: o }]
      };
      this.onKeyLine = !0, this.stack[this.stack.length - 1] = a;
    } else
      yield* this.lineEnd(t);
  }
  *blockScalar(t) {
    switch (this.type) {
      case "space":
      case "comment":
      case "newline":
        t.props.push(this.sourceToken);
        return;
      case "scalar":
        if (t.source = this.source, this.atNewLine = !0, this.indent = 0, this.onNewLine) {
          let n = this.source.indexOf(`
`) + 1;
          for (; n !== 0; )
            this.onNewLine(this.offset + n), n = this.source.indexOf(`
`, n) + 1;
        }
        yield* this.pop();
        break;
      default:
        yield* this.pop(), yield* this.step();
    }
  }
  *blockMap(t) {
    const n = t.items[t.items.length - 1];
    switch (this.type) {
      case "newline":
        if (this.onKeyLine = !1, n.value) {
          const i = "end" in n.value ? n.value.end : void 0;
          (Array.isArray(i) ? i[i.length - 1] : void 0)?.type === "comment" ? i?.push(this.sourceToken) : t.items.push({ start: [this.sourceToken] });
        } else n.sep ? n.sep.push(this.sourceToken) : n.start.push(this.sourceToken);
        return;
      case "space":
      case "comment":
        if (n.value)
          t.items.push({ start: [this.sourceToken] });
        else if (n.sep)
          n.sep.push(this.sourceToken);
        else {
          if (this.atIndentedComment(n.start, t.indent)) {
            const o = t.items[t.items.length - 2]?.value?.end;
            if (Array.isArray(o)) {
              Array.prototype.push.apply(o, n.start), o.push(this.sourceToken), t.items.pop();
              return;
            }
          }
          n.start.push(this.sourceToken);
        }
        return;
    }
    if (this.indent >= t.indent) {
      const i = !this.onKeyLine && this.indent === t.indent, o = i && (n.sep || n.explicitKey) && this.type !== "seq-item-ind";
      let a = [];
      if (o && n.sep && !n.value) {
        const u = [];
        for (let l = 0; l < n.sep.length; ++l) {
          const f = n.sep[l];
          switch (f.type) {
            case "newline":
              u.push(l);
              break;
            case "space":
              break;
            case "comment":
              f.indent > t.indent && (u.length = 0);
              break;
            default:
              u.length = 0;
          }
        }
        u.length >= 2 && (a = n.sep.splice(u[1]));
      }
      switch (this.type) {
        case "anchor":
        case "tag":
          o || n.value ? (a.push(this.sourceToken), t.items.push({ start: a }), this.onKeyLine = !0) : n.sep ? n.sep.push(this.sourceToken) : n.start.push(this.sourceToken);
          return;
        case "explicit-key-ind":
          !n.sep && !n.explicitKey ? (n.start.push(this.sourceToken), n.explicitKey = !0) : o || n.value ? (a.push(this.sourceToken), t.items.push({ start: a, explicitKey: !0 })) : this.stack.push({
            type: "block-map",
            offset: this.offset,
            indent: this.indent,
            items: [{ start: [this.sourceToken], explicitKey: !0 }]
          }), this.onKeyLine = !0;
          return;
        case "map-value-ind":
          if (n.explicitKey)
            if (n.sep)
              if (n.value)
                t.items.push({ start: [], key: null, sep: [this.sourceToken] });
              else if (ki(n.sep, "map-value-ind"))
                this.stack.push({
                  type: "block-map",
                  offset: this.offset,
                  indent: this.indent,
                  items: [{ start: a, key: null, sep: [this.sourceToken] }]
                });
              else if (Fg(n.key) && !ki(n.sep, "newline")) {
                const u = fs(n.start), l = n.key, f = n.sep;
                f.push(this.sourceToken), delete n.key, delete n.sep, this.stack.push({
                  type: "block-map",
                  offset: this.offset,
                  indent: this.indent,
                  items: [{ start: u, key: l, sep: f }]
                });
              } else a.length > 0 ? n.sep = n.sep.concat(a, this.sourceToken) : n.sep.push(this.sourceToken);
            else if (ki(n.start, "newline"))
              Object.assign(n, { key: null, sep: [this.sourceToken] });
            else {
              const u = fs(n.start);
              this.stack.push({
                type: "block-map",
                offset: this.offset,
                indent: this.indent,
                items: [{ start: u, key: null, sep: [this.sourceToken] }]
              });
            }
          else
            n.sep ? n.value || o ? t.items.push({ start: a, key: null, sep: [this.sourceToken] }) : ki(n.sep, "map-value-ind") ? this.stack.push({
              type: "block-map",
              offset: this.offset,
              indent: this.indent,
              items: [{ start: [], key: null, sep: [this.sourceToken] }]
            }) : n.sep.push(this.sourceToken) : Object.assign(n, { key: null, sep: [this.sourceToken] });
          this.onKeyLine = !0;
          return;
        case "alias":
        case "scalar":
        case "single-quoted-scalar":
        case "double-quoted-scalar": {
          const u = this.flowScalar(this.type);
          o || n.value ? (t.items.push({ start: a, key: u, sep: [] }), this.onKeyLine = !0) : n.sep ? this.stack.push(u) : (Object.assign(n, { key: u, sep: [] }), this.onKeyLine = !0);
          return;
        }
        default: {
          const u = this.startBlockValue(t);
          if (u) {
            i && u.type !== "block-seq" && t.items.push({ start: a }), this.stack.push(u);
            return;
          }
        }
      }
    }
    yield* this.pop(), yield* this.step();
  }
  *blockSequence(t) {
    const n = t.items[t.items.length - 1];
    switch (this.type) {
      case "newline":
        if (n.value) {
          const i = "end" in n.value ? n.value.end : void 0;
          (Array.isArray(i) ? i[i.length - 1] : void 0)?.type === "comment" ? i?.push(this.sourceToken) : t.items.push({ start: [this.sourceToken] });
        } else
          n.start.push(this.sourceToken);
        return;
      case "space":
      case "comment":
        if (n.value)
          t.items.push({ start: [this.sourceToken] });
        else {
          if (this.atIndentedComment(n.start, t.indent)) {
            const o = t.items[t.items.length - 2]?.value?.end;
            if (Array.isArray(o)) {
              Array.prototype.push.apply(o, n.start), o.push(this.sourceToken), t.items.pop();
              return;
            }
          }
          n.start.push(this.sourceToken);
        }
        return;
      case "anchor":
      case "tag":
        if (n.value || this.indent <= t.indent)
          break;
        n.start.push(this.sourceToken);
        return;
      case "seq-item-ind":
        if (this.indent !== t.indent)
          break;
        n.value || ki(n.start, "seq-item-ind") ? t.items.push({ start: [this.sourceToken] }) : n.start.push(this.sourceToken);
        return;
    }
    if (this.indent > t.indent) {
      const i = this.startBlockValue(t);
      if (i) {
        this.stack.push(i);
        return;
      }
    }
    yield* this.pop(), yield* this.step();
  }
  *flowCollection(t) {
    const n = t.items[t.items.length - 1];
    if (this.type === "flow-error-end") {
      let i;
      do
        yield* this.pop(), i = this.peek(1);
      while (i && i.type === "flow-collection");
    } else if (t.end.length === 0) {
      switch (this.type) {
        case "comma":
        case "explicit-key-ind":
          !n || n.sep ? t.items.push({ start: [this.sourceToken] }) : n.start.push(this.sourceToken);
          return;
        case "map-value-ind":
          !n || n.value ? t.items.push({ start: [], key: null, sep: [this.sourceToken] }) : n.sep ? n.sep.push(this.sourceToken) : Object.assign(n, { key: null, sep: [this.sourceToken] });
          return;
        case "space":
        case "comment":
        case "newline":
        case "anchor":
        case "tag":
          !n || n.value ? t.items.push({ start: [this.sourceToken] }) : n.sep ? n.sep.push(this.sourceToken) : n.start.push(this.sourceToken);
          return;
        case "alias":
        case "scalar":
        case "single-quoted-scalar":
        case "double-quoted-scalar": {
          const o = this.flowScalar(this.type);
          !n || n.value ? t.items.push({ start: [], key: o, sep: [] }) : n.sep ? this.stack.push(o) : Object.assign(n, { key: o, sep: [] });
          return;
        }
        case "flow-map-end":
        case "flow-seq-end":
          t.end.push(this.sourceToken);
          return;
      }
      const i = this.startBlockValue(t);
      i ? this.stack.push(i) : (yield* this.pop(), yield* this.step());
    } else {
      const i = this.peek(2);
      if (i.type === "block-map" && (this.type === "map-value-ind" && i.indent === t.indent || this.type === "newline" && !i.items[i.items.length - 1].sep))
        yield* this.pop(), yield* this.step();
      else if (this.type === "map-value-ind" && i.type !== "flow-collection") {
        const o = Ua(i), a = fs(o);
        Tp(t);
        const u = t.end.splice(1, t.end.length);
        u.push(this.sourceToken);
        const l = {
          type: "block-map",
          offset: t.offset,
          indent: t.indent,
          items: [{ start: a, key: t, sep: u }]
        };
        this.onKeyLine = !0, this.stack[this.stack.length - 1] = l;
      } else
        yield* this.lineEnd(t);
    }
  }
  flowScalar(t) {
    if (this.onNewLine) {
      let n = this.source.indexOf(`
`) + 1;
      for (; n !== 0; )
        this.onNewLine(this.offset + n), n = this.source.indexOf(`
`, n) + 1;
    }
    return {
      type: t,
      offset: this.offset,
      indent: this.indent,
      source: this.source
    };
  }
  startBlockValue(t) {
    switch (this.type) {
      case "alias":
      case "scalar":
      case "single-quoted-scalar":
      case "double-quoted-scalar":
        return this.flowScalar(this.type);
      case "block-scalar-header":
        return {
          type: "block-scalar",
          offset: this.offset,
          indent: this.indent,
          props: [this.sourceToken],
          source: ""
        };
      case "flow-map-start":
      case "flow-seq-start":
        return {
          type: "flow-collection",
          offset: this.offset,
          indent: this.indent,
          start: this.sourceToken,
          items: [],
          end: []
        };
      case "seq-item-ind":
        return {
          type: "block-seq",
          offset: this.offset,
          indent: this.indent,
          items: [{ start: [this.sourceToken] }]
        };
      case "explicit-key-ind": {
        this.onKeyLine = !0;
        const n = Ua(t), i = fs(n);
        return i.push(this.sourceToken), {
          type: "block-map",
          offset: this.offset,
          indent: this.indent,
          items: [{ start: i, explicitKey: !0 }]
        };
      }
      case "map-value-ind": {
        this.onKeyLine = !0;
        const n = Ua(t), i = fs(n);
        return {
          type: "block-map",
          offset: this.offset,
          indent: this.indent,
          items: [{ start: i, key: null, sep: [this.sourceToken] }]
        };
      }
    }
    return null;
  }
  atIndentedComment(t, n) {
    return this.type !== "comment" || this.indent <= n ? !1 : t.every((i) => i.type === "newline" || i.type === "space");
  }
  *documentEnd(t) {
    this.type !== "doc-mode" && (t.end ? t.end.push(this.sourceToken) : t.end = [this.sourceToken], this.type === "newline" && (yield* this.pop()));
  }
  *lineEnd(t) {
    switch (this.type) {
      case "comma":
      case "doc-start":
      case "doc-end":
      case "flow-seq-end":
      case "flow-map-end":
      case "map-value-ind":
        yield* this.pop(), yield* this.step();
        break;
      case "newline":
        this.onKeyLine = !1;
      case "space":
      case "comment":
      default:
        t.end ? t.end.push(this.sourceToken) : t.end = [this.sourceToken], this.type === "newline" && (yield* this.pop());
    }
  }
}
function A_(e) {
  const t = e.prettyErrors !== !1;
  return { lineCounter: e.lineCounter || t && new v_() || null, prettyErrors: t };
}
function E_(e, t = {}) {
  const { lineCounter: n, prettyErrors: i } = A_(t), o = new x_(n?.addNewLine), a = new g_(t);
  let u = null;
  for (const l of a.compose(o.parse(e), !0, e.length))
    if (!u)
      u = l;
    else if (u.options.logLevel !== "silent") {
      u.errors.push(new ho(l.range.slice(0, 2), "MULTIPLE_DOCS", "Source contains multiple documents; please use YAML.parseAllDocuments()"));
      break;
    }
  return i && n && (u.errors.forEach(Sp(e, n)), u.warnings.forEach(Sp(e, n))), u;
}
function Bg(e, t, n) {
  let i;
  const o = E_(e, n);
  if (!o)
    return null;
  if (o.warnings.forEach((a) => ig(o.options.logLevel, a)), o.errors.length > 0) {
    if (o.options.logLevel !== "silent")
      throw o.errors[0];
    o.errors = [];
  }
  return o.toJS(Object.assign({ reviver: i }, n));
}
function Dg(e, t, n) {
  let i = null;
  if (Array.isArray(t) && (i = t), e === void 0) {
    const { keepUndefined: o } = {};
    if (!o)
      return;
  }
  return Do(e) && !i ? e.toString(n) : new jo(e, i, n).toString(n);
}
const S_ = Ze.div`
  height: 100%;

  .monaco-editor,
  .overflow-guard {
    border-radius: 8px;
  }
`, C_ = {
  BorderRadiusContainer: S_
}, __ = ({ theme: e, currentValues: t, onChange: n }) => {
  const [i, o] = Ve("");
  return Ut(() => {
    o(Dg(t));
  }, [t]), /* @__PURE__ */ x.jsx(C_.BorderRadiusContainer, { children: /* @__PURE__ */ x.jsx(
    ef,
    {
      defaultLanguage: "yaml",
      width: "100%",
      height: "100%",
      value: i,
      onChange: (a) => {
        n(Bg(a || "")), o(a || "");
      },
      theme: e === "dark" || e === void 0 ? "vs-dark" : "vs",
      options: {
        theme: e === "dark" || e === void 0 ? "vs-dark" : "vs"
      }
    }
  ) });
}, k_ = Ze.div`
  height: ${({ $designNewLayoutHeight: e }) => e ? `${e}px` : "75vh"};

  .monaco-editor,
  .overflow-guard {
    border-radius: 8px;
  }
`, O_ = {
  BorderRadiusContainer: k_
}, T_ = ({
  theme: e,
  cluster: t,
  prefillValuesSchema: n,
  isNameSpaced: i,
  isCreate: o,
  type: a,
  apiGroupApiVersion: u,
  typeName: l,
  backlink: f,
  designNewLayoutHeight: d
}) => {
  const g = To(), [p, v] = Ve(""), [_, A] = Ve(!1), [E, b] = Ve();
  Ut(() => {
    v(Dg(n));
  }, [n]);
  const D = () => {
    A(!0), b(void 0);
    const j = Bg(p), { namespace: C } = j.metadata, { name: O } = j.metadata, F = j, L = `/api/clusters/${t}/k8s/${a === "builtin" ? "api" : "apis"}/${u}${i ? `/namespaces/${C}` : ""}/${l}/${o ? "" : O}`;
    o ? Xl({ endpoint: L, body: F }).then((T) => {
      console.log(T), f && g(f);
    }).catch((T) => {
      console.log("Form submit error", T), A(!1), b(T);
    }) : Ql({ endpoint: L, body: F }).then((T) => {
      console.log(T), f && g(f);
    }).catch((T) => {
      console.log("Form submit error", T), A(!1), b(T);
    });
  };
  return /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    E && /* @__PURE__ */ x.jsx(dr, { message: `An error has occurred: ${E?.response?.data?.message} `, type: "error" }),
    /* @__PURE__ */ x.jsx(O_.BorderRadiusContainer, { $designNewLayoutHeight: d, children: /* @__PURE__ */ x.jsx(
      ef,
      {
        defaultLanguage: "yaml",
        width: "100%",
        height: d || "75vh",
        value: p,
        onChange: (j) => {
          v(j || "");
        },
        theme: e === "dark" || e === void 0 ? "vs-dark" : "vs",
        options: {
          theme: e === "dark" || e === void 0 ? "vs-dark" : "vs"
        }
      }
    ) }),
    /* @__PURE__ */ x.jsx(Ur, { $space: 12, $samespace: !0 }),
    /* @__PURE__ */ x.jsx(St, { type: "primary", onClick: D, loading: _, children: "Submit" })
  ] });
}, Pt = (e) => {
  if (typeof e == "string")
    return e;
  if (Array.isArray(e)) {
    const t = e.slice(-1)[0];
    return typeof t == "string" ? t : String(t);
  }
  return String(e);
}, Lg = Nl(void 0), I_ = ({ value: e, children: t }) => /* @__PURE__ */ x.jsx(Lg.Provider, { value: e, children: t }), Or = () => cu(Lg), F_ = Ze.div`
  display: flex;
  flex-direction: column;
  gap: ${({ $designNewLayout: e }) => e ? "4px" : "8px"};
  border: 1px solid ${({ $borderColor: e }) => e};
  border-radius: ${({ $designNewLayout: e }) => e ? "6px" : "8px"};
  background-color: ${({ $designNewLayout: e, $bgColor: t }) => e ? t : "initial"};
  width: 100%;
  padding: ${({ $designNewLayout: e }) => e ? "16px" : "initial"};
  margin-bottom: ${({ $designNewLayout: e }) => e ? "10px" : "16px"};
  box-shadow: ${({ $designNewLayout: e }) => e ? `
    0 6px 16px 0 #00000014,
    0 3px 6px -4px #0000001f,
    0 9px 28px 8px #0000000d` : "initial"};
`, B_ = Ze.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  cursor: pointer;
`, D_ = Ze.div`
  display: ${({ $isOpen: e }) => e ? "block" : "none"};
  padding: ${({ $designNewLayout: e }) => e ? "0" : "4px"};
`, cl = {
  Container: F_,
  TitleBar: B_,
  Content: D_
}, L_ = ({
  title: e,
  formName: t,
  expandedControls: n,
  persistedCheckbox: i,
  isAdditionalProperties: o,
  removeField: a,
  onRemoveByMinus: u,
  children: l
}) => {
  const { token: f } = nr.useToken(), d = n.expandedKeys.some((v) => JSON.stringify(v) === JSON.stringify(t)), g = Or(), p = () => {
    d ? n.onExpandClose(t) : n.onExpandOpen(t);
  };
  return /* @__PURE__ */ x.jsxs(
    cl.Container,
    {
      $designNewLayout: g,
      $borderColor: f.colorBorder,
      $bgColor: f.colorBgContainer,
      children: [
        /* @__PURE__ */ x.jsxs(st, { justify: "space-between", children: [
          /* @__PURE__ */ x.jsxs(cl.TitleBar, { onClick: () => p(), children: [
            !g && /* @__PURE__ */ x.jsx("div", { children: d ? /* @__PURE__ */ x.jsx(fx, { size: 14 }) : /* @__PURE__ */ x.jsx(hx, { size: 14 }) }),
            /* @__PURE__ */ x.jsx("div", { children: e }),
            g && /* @__PURE__ */ x.jsx("div", { children: d ? /* @__PURE__ */ x.jsx(aS, {}) : /* @__PURE__ */ x.jsx(oS, {}) })
          ] }),
          /* @__PURE__ */ x.jsxs(st, { gap: 4, children: [
            o && /* @__PURE__ */ x.jsx(St, { size: "small", type: "text", onClick: () => a(), children: /* @__PURE__ */ x.jsx(gn, {}) }),
            u && /* @__PURE__ */ x.jsx(St, { size: "small", type: "text", onClick: u, children: /* @__PURE__ */ x.jsx(gn, {}) }),
            i
          ] })
        ] }),
        /* @__PURE__ */ x.jsx(cl.Content, { $isOpen: d, $designNewLayout: g, children: l })
      ]
    }
  );
}, yr = Ze.div`
  display: ${({ $isHidden: e }) => e ? "none" : "block"};
`, Ui = ({ formName: e, persistedControls: t, type: n }) => {
  const i = t.persistedKeys.some((a) => JSON.stringify(a) === JSON.stringify(e)), o = () => {
    i ? t.onPersistUnmark(e) : t.onPersistMark(e, n);
  };
  return /* @__PURE__ */ x.jsx(yr, { $isHidden: t.isPersistedKeysShown === !1, children: /* @__PURE__ */ x.jsx(St, { size: "small", type: "text", onClick: o, children: i ? /* @__PURE__ */ x.jsx(fS, {}) : /* @__PURE__ */ x.jsx(hS, {}) }) });
}, fi = Ze(Mt.Item)`
  margin-bottom: 8px;
`, Kr = Ze.div`
  font-size: ${({ $designNewLayout: e }) => e ? "16px" : "14px"};
  line-height: ${({ $designNewLayout: e }) => e ? "24px" : "22px"};
`, P_ = ({
  name: e,
  arrKey: t,
  arrName: n,
  persistName: i,
  required: o,
  forceNonRequired: a,
  isHidden: u,
  description: l,
  isAdditionalProperties: f,
  removeField: d,
  persistedControls: g,
  customProps: p,
  urlParams: v,
  onRemoveByMinus: _
}) => {
  const A = Or(), { clusterName: E, namespace: b, syntheticProject: D, entryName: j } = v, C = Mt.useFormInstance(), O = Mt.useWatch(e === "nodeName" ? "nodeNameBecauseOfSuddenBug" : e, C), F = Ot({
    template: p.valueUri,
    replaceValues: { clusterName: E, namespace: b, syntheticProject: D, entryName: j }
  }), {
    data: L,
    isError: T,
    isLoading: q
  } = fn({
    uri: F,
    refetchInterval: !1,
    queryKey: [F || "", JSON.stringify(e)],
    isEnabled: !!F
  });
  if (q)
    return /* @__PURE__ */ x.jsx("div", { children: "Loading" });
  if (T)
    return /* @__PURE__ */ x.jsx("div", { children: "Error" });
  const J = mt.get(L, ["items"]), oe = p.criteria ? J.filter((be) => {
    const ve = mt.get(be, p.criteria?.keysToValue || []);
    return p.criteria?.type === "equals" ? ve === p.criteria?.value : ve !== p.criteria?.value;
  }) : J, ae = p.criteria?.keepPrefilled !== !1 ? J.find((be) => mt.get(be, p.keysToValue) === O) : void 0, he = ae ? [ae, ...oe] : oe, Ae = (Array.isArray(he) ? he.map((be) => ({
    value: mt.get(be, p.keysToValue),
    label: p.keysToLabel ? mt.get(be, p.keysToLabel) : mt.get(be, p.keysToValue)
  })).map(({ value: be, label: ve }) => ({
    label: typeof ve == "string" ? ve : JSON.stringify(ve),
    value: typeof be == "string" ? be : JSON.stringify(be)
  })) : []).reduce((be, ve) => (be.some((we) => we.value === ve.value) || be.push(ve), be), []), fe = e === "nodeName" ? "nodeNameBecauseOfSuddenBug" : e, Be = /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    Pt(e),
    o?.includes(Pt(e)) && /* @__PURE__ */ x.jsx(An.Text, { type: "danger", children: "*" }),
    !A && l && /* @__PURE__ */ x.jsxs(sn, { title: l, children: [
      " ",
      /* @__PURE__ */ x.jsx(hi, {})
    ] })
  ] });
  return /* @__PURE__ */ x.jsxs(yr, { $isHidden: u, children: [
    /* @__PURE__ */ x.jsxs(st, { justify: "space-between", children: [
      /* @__PURE__ */ x.jsx(Kr, { $designNewLayout: A, children: l ? /* @__PURE__ */ x.jsx(sn, { title: l, children: Be }) : Be }),
      /* @__PURE__ */ x.jsxs(st, { gap: 4, children: [
        f && /* @__PURE__ */ x.jsx(St, { size: "small", type: "text", onClick: () => d({ path: e }), children: /* @__PURE__ */ x.jsx(gn, {}) }),
        _ && /* @__PURE__ */ x.jsx(St, { size: "small", type: "text", onClick: _, children: /* @__PURE__ */ x.jsx(gn, {}) }),
        /* @__PURE__ */ x.jsx(Ui, { formName: i || e, persistedControls: g, type: "arr" })
      ] })
    ] }),
    /* @__PURE__ */ x.jsx(
      fi,
      {
        name: n || fe,
        rules: [{ required: a === !1 && o?.includes(Pt(e)) }],
        validateTrigger: "onBlur",
        hasFeedback: A ? { icons: Ni } : !0,
        children: /* @__PURE__ */ x.jsx(
          vs,
          {
            mode: p.mode,
            placeholder: "Select",
            options: Ae,
            filterOption: $0,
            allowClear: !0,
            showSearch: !0
          }
        )
      },
      t !== void 0 ? t : Array.isArray(e) ? e.slice(-1)[0] : e
    )
  ] });
}, vr = ({
  valueObj: e,
  keysToValue: t,
  logic: n
}) => {
  const i = mt.get(e, t);
  return n === "cpuLike" ? M0(i) : U0(i);
}, Ip = ({ value: e }) => Number(e.toFixed(1)), Fp = ({ valueFirst: e, valueSecond: t }) => {
  const n = e - t;
  return Number(n.toFixed(1));
}, Bp = ({ valueFirst: e, valueSecond: t }) => {
  const n = e + t;
  return Number(n.toFixed(1));
}, R_ = ({
  minMaxAndStep: e,
  minValueObj: t,
  minSubstractFirstValueObj: n,
  minSubstractSecondValueObj: i,
  minAddFirstValueObj: o,
  minAddSecondValueObj: a,
  maxValueObj: u,
  maxSubstractFirstValueObj: l,
  maxSubstractSecondValueObj: f,
  maxAddFirstValueObj: d,
  maxAddSecondValueObj: g,
  logic: p
}) => {
  let v = 0, _ = 0;
  if (e.min.type === "resourceValue" && typeof t == "object" && t !== null) {
    const A = vr({
      valueObj: t,
      keysToValue: e.min.keysToValue,
      logic: p
    });
    v = Ip({ value: A });
  }
  if (e.min.type === "substractResourceValues" && typeof n == "object" && n !== null && typeof i == "object" && i !== null) {
    const A = vr({
      valueObj: n,
      keysToValue: e.min.firstValuesKeysToValue,
      logic: p
    }), E = vr({
      valueObj: i,
      keysToValue: e.min.secondValuesKeysToValue,
      logic: p
    });
    v = Fp({ valueFirst: A, valueSecond: E });
  }
  if (e.min.type === "addResourceValues" && typeof o == "object" && o !== null && typeof a == "object" && a !== null) {
    const A = vr({
      valueObj: o,
      keysToValue: e.min.firstValuesKeysToValue,
      logic: p
    }), E = vr({
      valueObj: a,
      keysToValue: e.min.secondValuesKeysToValue,
      logic: p
    });
    v = Bp({ valueFirst: A, valueSecond: E });
  }
  if (e.min.type === "number" && (v = e.min.value), e.max.type === "resourceValue" && typeof u == "object" && u !== null) {
    const A = vr({
      valueObj: u,
      keysToValue: e.max.keysToValue,
      logic: p
    });
    _ = Ip({ value: A });
  }
  if (e.max.type === "substractResourceValues" && typeof l == "object" && l !== null && typeof f == "object" && f !== null) {
    const A = vr({
      valueObj: l,
      keysToValue: e.max.firstValuesKeysToValue,
      logic: p
    }), E = vr({
      valueObj: f,
      keysToValue: e.max.secondValuesKeysToValue,
      logic: p
    });
    _ = Fp({ valueFirst: A, valueSecond: E });
  }
  if (e.max.type === "addResourceValues" && typeof d == "object" && d !== null && typeof g == "object" && g !== null) {
    const A = vr({
      valueObj: d,
      keysToValue: e.max.firstValuesKeysToValue,
      logic: p
    }), E = vr({
      valueObj: g,
      keysToValue: e.max.secondValuesKeysToValue,
      logic: p
    });
    _ = Bp({ valueFirst: A, valueSecond: E });
  }
  return e.max.type === "number" && (_ = e.max.value), {
    minValue: v,
    maxValue: _
  };
}, j_ = ({
  name: e,
  arrKey: t,
  arrName: n,
  persistName: i,
  required: o,
  forceNonRequired: a,
  isHidden: u,
  persistedControls: l,
  description: f,
  onRemoveByMinus: d,
  initialValue: g,
  max: p,
  min: v,
  step: _ = 1,
  ...A
}) => {
  const E = Or(), [b, D] = Ve(g || v);
  Ut(() => {
    (Number.isNaN(b) || b < v) && D(v), b > p && D(p), D(b);
  }, [b, v, p]);
  const j = /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    Pt(e),
    o?.includes(Pt(e)) && /* @__PURE__ */ x.jsx(An.Text, { type: "danger", children: "*" }),
    !E && f && /* @__PURE__ */ x.jsxs(sn, { title: f, children: [
      " ",
      /* @__PURE__ */ x.jsx(hi, {})
    ] })
  ] });
  return /* @__PURE__ */ x.jsxs(yr, { $isHidden: u, children: [
    /* @__PURE__ */ x.jsxs(st, { justify: "space-between", children: [
      /* @__PURE__ */ x.jsx(Kr, { $designNewLayout: E, children: f ? /* @__PURE__ */ x.jsx(sn, { title: f, children: j }) : j }),
      /* @__PURE__ */ x.jsxs(st, { gap: 4, children: [
        d && /* @__PURE__ */ x.jsx(St, { size: "small", type: "text", onClick: d, children: /* @__PURE__ */ x.jsx(gn, {}) }),
        /* @__PURE__ */ x.jsx(Ui, { formName: i || e, persistedControls: l, type: "number" })
      ] })
    ] }),
    /* @__PURE__ */ x.jsxs(Rp, { children: [
      /* @__PURE__ */ x.jsxs(hl, { span: 12, children: [
        /* @__PURE__ */ x.jsx(
          fi,
          {
            name: n || e,
            rules: [{ required: a === !1 && o?.includes(Pt(e)) }],
            validateTrigger: "onBlur",
            hasFeedback: E ? { icons: Ni } : !0,
            children: /* @__PURE__ */ x.jsx(Zv, { min: v, max: p, step: _, ...A })
          },
          t !== void 0 ? t : Array.isArray(e) ? e.slice(-1)[0] : e
        ),
        /* @__PURE__ */ x.jsx(An.Text, { children: /* @__PURE__ */ x.jsxs(st, { justify: "space-between", children: [
          /* @__PURE__ */ x.jsx("span", { children: v }),
          /* @__PURE__ */ x.jsx("span", { children: p })
        ] }) })
      ] }),
      /* @__PURE__ */ x.jsx(hl, { span: 4, children: /* @__PURE__ */ x.jsx(
        fi,
        {
          name: n || e,
          rules: [{ required: a === !1 && o?.includes(Pt(e)) }],
          validateTrigger: "onBlur",
          hasFeedback: E ? { icons: Ni } : !0,
          children: /* @__PURE__ */ x.jsx(jp, { min: v, max: p, step: _, value: b, disabled: A.disabled })
        },
        t !== void 0 ? t : Array.isArray(e) ? e.slice(-1)[0] : e
      ) })
    ] })
  ] });
}, N_ = ({
  name: e,
  arrKey: t,
  arrName: n,
  persistName: i,
  required: o,
  forceNonRequired: a,
  isHidden: u,
  description: l,
  isEdit: f,
  persistedControls: d,
  customProps: g,
  urlParams: p,
  onRemoveByMinus: v
}) => {
  const { clusterName: _, namespace: A, syntheticProject: E, entryName: b } = p, D = f ? g.edit : g.add, j = D.min.type === "resourceValue" ? Ot({
    template: D.min.valueUri,
    replaceValues: { clusterName: _, namespace: A, syntheticProject: E, entryName: b }
  }) : void 0, C = D.min.type === "substractResourceValues" ? Ot({
    template: D.min.firstValueUri,
    replaceValues: { clusterName: _, namespace: A, syntheticProject: E, entryName: b }
  }) : void 0, O = D.min.type === "substractResourceValues" ? Ot({
    template: D.min.secondValueUri,
    replaceValues: { clusterName: _, namespace: A, syntheticProject: E, entryName: b }
  }) : void 0, F = D.min.type === "addResourceValues" ? Ot({
    template: D.min.firstValueUri,
    replaceValues: { clusterName: _, namespace: A, syntheticProject: E, entryName: b }
  }) : void 0, L = D.min.type === "addResourceValues" ? Ot({
    template: D.min.secondValueUri,
    replaceValues: { clusterName: _, namespace: A, syntheticProject: E, entryName: b }
  }) : void 0, T = D.max.type === "resourceValue" ? Ot({
    template: D.max.valueUri,
    replaceValues: { clusterName: _, namespace: A, syntheticProject: E, entryName: b }
  }) : void 0, q = D.max.type === "substractResourceValues" ? Ot({
    template: D.max.firstValueUri,
    replaceValues: { clusterName: _, namespace: A, syntheticProject: E, entryName: b }
  }) : void 0, J = D.max.type === "substractResourceValues" ? Ot({
    template: D.max.secondValueUri,
    replaceValues: { clusterName: _, namespace: A, syntheticProject: E, entryName: b }
  }) : void 0, oe = D.max.type === "addResourceValues" ? Ot({
    template: D.max.firstValueUri,
    replaceValues: { clusterName: _, namespace: A, syntheticProject: E, entryName: b }
  }) : void 0, ae = D.max.type === "addResourceValues" ? Ot({
    template: D.max.secondValueUri,
    replaceValues: { clusterName: _, namespace: A, syntheticProject: E, entryName: b }
  }) : void 0, {
    data: he,
    isError: de,
    isLoading: Ae
  } = fn({
    uri: j || "",
    refetchInterval: !1,
    queryKey: [j || "", JSON.stringify(e)],
    isEnabled: !!j
  }), {
    data: fe,
    isError: Be,
    isLoading: be
  } = fn({
    uri: C || "",
    refetchInterval: !1,
    queryKey: [C || "", JSON.stringify(e)],
    isEnabled: !!C
  }), {
    data: ve,
    isError: We,
    isLoading: we
  } = fn({
    uri: O || "",
    refetchInterval: !1,
    queryKey: [O || "", JSON.stringify(e)],
    isEnabled: !!O
  }), {
    data: pe,
    isError: je,
    isLoading: G
  } = fn({
    uri: F || "",
    refetchInterval: !1,
    queryKey: [F || "", JSON.stringify(e)],
    isEnabled: !!F
  }), {
    data: X,
    isError: ie,
    isLoading: Te
  } = fn({
    uri: L || "",
    refetchInterval: !1,
    queryKey: [L || "", JSON.stringify(e)],
    isEnabled: !!L
  }), {
    data: Me,
    isError: Ee,
    isLoading: Ie
  } = fn({
    uri: T || "",
    refetchInterval: !1,
    queryKey: [T || "", JSON.stringify(e)],
    isEnabled: !!T
  }), {
    data: _e,
    isError: De,
    isLoading: _t
  } = fn({
    uri: q || "",
    refetchInterval: !1,
    queryKey: [q || "", JSON.stringify(e)],
    isEnabled: !!q
  }), {
    data: on,
    isError: Rt,
    isLoading: jt
  } = fn({
    uri: J || "",
    refetchInterval: !1,
    queryKey: [J || "", JSON.stringify(e)],
    isEnabled: !!J
  }), {
    data: Nt,
    isError: wt,
    isLoading: In
  } = fn({
    uri: oe || "",
    refetchInterval: !1,
    queryKey: [oe || "", JSON.stringify(e)],
    isEnabled: !!oe
  }), {
    data: En,
    isError: Se,
    isLoading: Fe
  } = fn({
    uri: ae || "",
    refetchInterval: !1,
    queryKey: [ae || "", JSON.stringify(e)],
    isEnabled: !!ae
  }), { minValue: ce, maxValue: vt } = R_({
    minMaxAndStep: D,
    minValueObj: he,
    minSubstractFirstValueObj: fe,
    minSubstractSecondValueObj: ve,
    minAddFirstValueObj: pe,
    minAddSecondValueObj: X,
    maxValueObj: Me,
    maxSubstractFirstValueObj: _e,
    maxSubstractSecondValueObj: on,
    maxAddFirstValueObj: Nt,
    maxAddSecondValueObj: En,
    logic: g.logic
  }), xt = f ? g.edit.step : g.add.step;
  return D.min.type === "resourceValue" && Ae || D.min.type === "substractResourceValues" && (be || we) || D.min.type === "addResourceValues" && (G || Te) || D.max.type === "resourceValue" && Ie || D.max.type === "substractResourceValues" && (_t || jt) || D.max.type === "addResourceValues" && (In || Fe) ? /* @__PURE__ */ x.jsx("div", { children: "Loading" }) : D.min.type === "resourceValue" && de || D.min.type === "substractResourceValues" && (Be || We) || D.min.type === "addResourceValues" && (je || ie) || D.max.type === "resourceValue" && Ee || D.max.type === "substractResourceValues" && (De || Rt) || D.max.type === "addResourceValues" && (wt || Se) ? /* @__PURE__ */ x.jsx("div", { children: "Error" }) : /* @__PURE__ */ x.jsx(
    j_,
    {
      name: e,
      arrKey: t,
      arrName: n,
      persistName: i,
      required: o,
      forceNonRequired: a,
      isHidden: u,
      description: l,
      min: ce,
      max: vt,
      step: xt,
      persistedControls: d,
      onRemoveByMinus: v
    }
  );
}, $_ = ({
  name: e,
  isHidden: t,
  namespaceData: n,
  isAdditionalProperties: i,
  removeField: o
}) => {
  const a = Or();
  return n ? /* @__PURE__ */ x.jsxs(yr, { $isHidden: t, children: [
    /* @__PURE__ */ x.jsxs(st, { justify: "space-between", children: [
      /* @__PURE__ */ x.jsxs(Kr, { $designNewLayout: a, children: [
        "namespace",
        /* @__PURE__ */ x.jsx(An.Text, { type: "danger", children: "*" })
      ] }),
      /* @__PURE__ */ x.jsx(st, { gap: 4, children: i && /* @__PURE__ */ x.jsx(St, { size: "small", type: "text", onClick: () => o({ path: e }), children: /* @__PURE__ */ x.jsx(gn, {}) }) })
    ] }),
    /* @__PURE__ */ x.jsx(
      fi,
      {
        name: e,
        rules: [{ required: !0 }],
        validateTrigger: "onBlur",
        hasFeedback: a ? { icons: Ni } : !0,
        children: /* @__PURE__ */ x.jsx(
          vs,
          {
            placeholder: "Select namespace",
            options: n.selectValues,
            filterOption: n.filterSelectOptions,
            allowClear: !0,
            disabled: n.disabled,
            showSearch: !0
          }
        )
      }
    )
  ] }) : null;
}, M_ = ({
  name: e,
  arrKey: t,
  arrName: n,
  persistName: i,
  required: o,
  forceNonRequired: a,
  isHidden: u,
  description: l,
  isAdditionalProperties: f,
  removeField: d,
  persistedControls: g,
  onRemoveByMinus: p
}) => {
  const v = Or(), _ = e === "nodeName" ? "nodeNameBecauseOfSuddenBug" : e, A = /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    Pt(e),
    o?.includes(Pt(e)) && /* @__PURE__ */ x.jsx(An.Text, { type: "danger", children: "*" }),
    !v && l && /* @__PURE__ */ x.jsxs(sn, { title: l, children: [
      " ",
      /* @__PURE__ */ x.jsx(hi, {})
    ] })
  ] });
  return /* @__PURE__ */ x.jsxs(yr, { $isHidden: u, children: [
    /* @__PURE__ */ x.jsxs(st, { justify: "space-between", children: [
      /* @__PURE__ */ x.jsx(Kr, { $designNewLayout: v, children: l ? /* @__PURE__ */ x.jsx(sn, { title: l, children: A }) : A }),
      /* @__PURE__ */ x.jsxs(st, { gap: 4, children: [
        f && /* @__PURE__ */ x.jsx(St, { size: "small", type: "text", onClick: () => d({ path: e }), children: /* @__PURE__ */ x.jsx(gn, {}) }),
        p && /* @__PURE__ */ x.jsx(St, { size: "small", type: "text", onClick: p, children: /* @__PURE__ */ x.jsx(gn, {}) }),
        /* @__PURE__ */ x.jsx(Ui, { formName: i || e, persistedControls: g, type: "str" })
      ] })
    ] }),
    /* @__PURE__ */ x.jsx(
      fi,
      {
        name: n || _,
        rules: [{ required: a === !1 && o?.includes(Pt(e)) }],
        validateTrigger: "onBlur",
        hasFeedback: v ? { icons: Ni } : !0,
        children: /* @__PURE__ */ x.jsx(lr, { placeholder: Pt(e) })
      },
      t !== void 0 ? t : Array.isArray(e) ? e.slice(-1)[0] : e
    )
  ] });
}, U_ = Ze.div`
  display: flex;
`, V_ = Ze.div`
  margin-left: 4px;
  cursor: pointer;
  padding-top: 11px;
`, Dp = {
  SwitchAndCrossContainer: U_,
  CrossContainer: V_
}, q_ = ({
  name: e,
  arrKey: t,
  arrName: n,
  isHidden: i,
  description: o,
  makeValueUndefined: a,
  isAdditionalProperties: u,
  removeField: l,
  onRemoveByMinus: f
}) => {
  const d = Or(), g = /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    Pt(e),
    !d && o && /* @__PURE__ */ x.jsxs(sn, { title: o, children: [
      " ",
      /* @__PURE__ */ x.jsx(hi, {})
    ] })
  ] });
  return /* @__PURE__ */ x.jsxs(yr, { $isHidden: i, children: [
    /* @__PURE__ */ x.jsxs(st, { justify: "space-between", children: [
      /* @__PURE__ */ x.jsx(Kr, { $designNewLayout: d, children: o ? /* @__PURE__ */ x.jsx(sn, { title: o, children: g }) : g }),
      /* @__PURE__ */ x.jsxs(st, { gap: 4, children: [
        u && /* @__PURE__ */ x.jsx(St, { size: "small", type: "text", onClick: () => l({ path: e }), children: /* @__PURE__ */ x.jsx(gn, {}) }),
        f && /* @__PURE__ */ x.jsx(St, { size: "small", type: "text", onClick: f, children: /* @__PURE__ */ x.jsx(gn, {}) })
      ] })
    ] }),
    /* @__PURE__ */ x.jsxs(Dp.SwitchAndCrossContainer, { children: [
      /* @__PURE__ */ x.jsx(
        fi,
        {
          name: n || e,
          children: /* @__PURE__ */ x.jsx(eu, { size: "small" })
        },
        t !== void 0 ? t : Array.isArray(e) ? e.slice(-1)[0] : e
      ),
      /* @__PURE__ */ x.jsx(
        Dp.CrossContainer,
        {
          onClick: () => {
            a && a(e);
          },
          children: /* @__PURE__ */ x.jsx(uS, {})
        }
      )
    ] })
  ] });
}, W_ = ({
  name: e,
  arrKey: t,
  arrName: n,
  persistName: i,
  required: o,
  forceNonRequired: a,
  isHidden: u,
  description: l,
  isAdditionalProperties: f,
  removeField: d,
  options: g,
  persistedControls: p,
  onRemoveByMinus: v
}) => {
  const _ = Or(), A = e === "nodeName" ? "nodeNameBecauseOfSuddenBug" : e, E = /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    Pt(e),
    o?.includes(Pt(e)) && /* @__PURE__ */ x.jsx(An.Text, { type: "danger", children: "*" }),
    !_ && l && /* @__PURE__ */ x.jsxs(sn, { title: l, children: [
      " ",
      /* @__PURE__ */ x.jsx(hi, {})
    ] })
  ] });
  return /* @__PURE__ */ x.jsxs(yr, { $isHidden: u, children: [
    /* @__PURE__ */ x.jsxs(st, { justify: "space-between", children: [
      /* @__PURE__ */ x.jsx(Kr, { $designNewLayout: _, children: l ? /* @__PURE__ */ x.jsx(sn, { title: l, children: E }) : E }),
      /* @__PURE__ */ x.jsxs(st, { gap: 4, children: [
        f && /* @__PURE__ */ x.jsx(St, { size: "small", type: "text", onClick: () => d({ path: e }), children: /* @__PURE__ */ x.jsx(gn, {}) }),
        v && /* @__PURE__ */ x.jsx(St, { size: "small", type: "text", onClick: v, children: /* @__PURE__ */ x.jsx(gn, {}) }),
        /* @__PURE__ */ x.jsx(Ui, { formName: i || e, persistedControls: p, type: "str" })
      ] })
    ] }),
    /* @__PURE__ */ x.jsx(
      fi,
      {
        name: n || A,
        rules: [{ required: a === !1 && o?.includes(Pt(e)) }],
        validateTrigger: "onBlur",
        hasFeedback: _ ? { icons: Ni } : !0,
        children: /* @__PURE__ */ x.jsx(vs, { options: g.map((b) => ({ value: b, label: b })), placeholder: Pt(e) })
      },
      t !== void 0 ? t : Array.isArray(e) ? e.slice(-1)[0] : e
    )
  ] });
}, K_ = ({
  isNumber: e,
  name: t,
  arrKey: n,
  arrName: i,
  persistName: o,
  required: a,
  forceNonRequired: u,
  isHidden: l,
  description: f,
  isAdditionalProperties: d,
  removeField: g,
  persistedControls: p,
  onRemoveByMinus: v
}) => {
  const _ = Or(), A = /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    Pt(t),
    a?.includes(Pt(t)) && /* @__PURE__ */ x.jsx(An.Text, { type: "danger", children: "*" }),
    !_ && f && /* @__PURE__ */ x.jsxs(sn, { title: f, children: [
      " ",
      /* @__PURE__ */ x.jsx(hi, {})
    ] })
  ] });
  return /* @__PURE__ */ x.jsxs(yr, { $isHidden: l, children: [
    /* @__PURE__ */ x.jsxs(st, { justify: "space-between", children: [
      /* @__PURE__ */ x.jsx(Kr, { $designNewLayout: _, children: f ? /* @__PURE__ */ x.jsx(sn, { title: f, children: A }) : A }),
      /* @__PURE__ */ x.jsxs(st, { gap: 4, children: [
        d && /* @__PURE__ */ x.jsx(St, { size: "small", type: "text", onClick: () => g({ path: t }), children: /* @__PURE__ */ x.jsx(gn, {}) }),
        v && /* @__PURE__ */ x.jsx(St, { size: "small", type: "text", onClick: v, children: /* @__PURE__ */ x.jsx(gn, {}) }),
        /* @__PURE__ */ x.jsx(Ui, { formName: o || t, persistedControls: p, type: "number" })
      ] })
    ] }),
    /* @__PURE__ */ x.jsx(
      fi,
      {
        name: i || t,
        rules: [{ required: u === !1 && a?.includes(Pt(t)) }],
        validateTrigger: "onBlur",
        hasFeedback: _ ? { icons: Ni } : !0,
        children: /* @__PURE__ */ x.jsx(jp, { placeholder: Pt(t), step: e ? 0.1 : 1 })
      },
      n !== void 0 ? n : Array.isArray(t) ? t.slice(-1)[0] : t
    )
  ] });
}, Pg = ({
  name: e,
  persistName: t,
  selfRequired: n,
  isHidden: i,
  description: o,
  isAdditionalProperties: a,
  removeField: u,
  expandedControls: l,
  persistedControls: f,
  collapseTitle: d,
  collapseFormName: g,
  data: p,
  inputProps: v,
  onRemoveByMinus: _
}) => {
  const A = Or(), [E, b] = Ve(), D = () => {
    if (E && E.length > 0) {
      const C = v?.additionalProperties;
      v?.addField({
        path: Array.isArray(e) ? [...e, String(d)] : [e, String(d)],
        name: E,
        type: C.type,
        items: C.items,
        nestedProperties: C.properties || {},
        required: C.required
      }), b(void 0);
    }
  }, j = /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    Pt(d),
    n && /* @__PURE__ */ x.jsx(An.Text, { type: "danger", children: "*" }),
    !A && o && /* @__PURE__ */ x.jsxs(sn, { title: o, children: [
      " ",
      /* @__PURE__ */ x.jsx(hi, {})
    ] })
  ] });
  return /* @__PURE__ */ x.jsx(yr, { $isHidden: i, children: /* @__PURE__ */ x.jsxs(
    L_,
    {
      title: /* @__PURE__ */ x.jsx(Kr, { $designNewLayout: A, children: o ? /* @__PURE__ */ x.jsx(sn, { title: o, children: j }) : j }),
      formName: g,
      expandedControls: l,
      isAdditionalProperties: a,
      removeField: () => u({ path: e }),
      onRemoveByMinus: _,
      persistedCheckbox: v ? void 0 : /* @__PURE__ */ x.jsx(Ui, { formName: t || e, persistedControls: f, type: "obj" }),
      children: [
        p,
        v && /* @__PURE__ */ x.jsx(
          lr,
          {
            placeholder: "Enter field name",
            allowClear: !0,
            value: E,
            onChange: (C) => b(C.target.value),
            suffix: /* @__PURE__ */ x.jsx(St, { size: "small", type: "text", onClick: D, children: /* @__PURE__ */ x.jsx(P0, {}) })
          }
        )
      ]
    },
    Array.isArray(e) ? e.join("-") : e
  ) });
}, H_ = ({
  name: e,
  persistName: t,
  required: n,
  description: i,
  isAdditionalProperties: o,
  removeField: a,
  persistedControls: u,
  onRemoveByMinus: l
}) => {
  const f = Or(), d = /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    Pt(e),
    n?.includes(Pt(e)) && /* @__PURE__ */ x.jsx(An.Text, { type: "danger", children: "*" }),
    !f && i && /* @__PURE__ */ x.jsxs(sn, { title: i, children: [
      " ",
      /* @__PURE__ */ x.jsx(hi, {})
    ] })
  ] });
  return /* @__PURE__ */ x.jsxs(st, { justify: "space-between", children: [
    /* @__PURE__ */ x.jsx(Kr, { $designNewLayout: f, children: i ? /* @__PURE__ */ x.jsx(sn, { title: i, children: d }) : d }),
    /* @__PURE__ */ x.jsxs(st, { gap: 4, children: [
      o && /* @__PURE__ */ x.jsx(St, { size: "small", type: "text", onClick: () => a({ path: e }), children: /* @__PURE__ */ x.jsx(gn, {}) }),
      l && /* @__PURE__ */ x.jsx(St, { size: "small", type: "text", onClick: l, children: /* @__PURE__ */ x.jsx(gn, {}) }),
      /* @__PURE__ */ x.jsx(Ui, { formName: t || e, persistedControls: u, type: "arr" })
    ] })
  ] });
}, z_ = (e, t) => {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (typeof t[n] == "number" && e[n] !== String(t[n]) || e[n] !== t[n])
      return !1;
  return !0;
}, xr = (e, t) => {
  if (!e)
    return !1;
  for (const n of e)
    if (z_(n, t))
      return !0;
  return !1;
}, G_ = Ze.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ $designNewLayout: e }) => e ? "36px" : "8px"};
  height: ${({ $designNewLayoutHeight: e }) => e ? `${e}px` : "75vh"};
`, J_ = Ze.div`
  overflow-x: auto;
  scrollbar-width: thin;
`, Y_ = Ze(Mt.List)`
  margin-bottom: 8px;
`, X_ = Ze.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  background-color: ${({ $bgColor: e, $designNewLayout: t }) => t ? e : "initial"};
  border-radius: 8px;
  padding: 4px;
`, Q_ = Ze.div`
  height: ${({ $designNewLayoutHeight: e }) => e ? `${e}px` : "75vh"};
`, po = {
  ResetedFormList: Y_,
  Container: G_,
  OverflowContainer: J_,
  ControlsRowContainer: X_,
  DebugContainer: Q_
}, Rg = ({
  name: e,
  arrKey: t,
  arrName: n,
  persistName: i,
  required: o,
  forceNonRequired: a,
  isHidden: u,
  description: l,
  namespaceData: f,
  isAdditionalProperties: d,
  removeField: g,
  persistedControls: p,
  onRemoveByMinus: v
}) => Array.isArray(e) && e.length === 2 && e[0] === "metadata" && e[1] === "namespace" && f ? /* @__PURE__ */ x.jsx(
  $_,
  {
    name: e,
    isHidden: u,
    namespaceData: f,
    isAdditionalProperties: d,
    removeField: g
  }
) : /* @__PURE__ */ x.jsx(
  M_,
  {
    name: e,
    arrKey: t,
    arrName: n,
    persistName: i,
    required: o,
    forceNonRequired: a,
    isHidden: u,
    description: l,
    isAdditionalProperties: d,
    removeField: g,
    persistedControls: p,
    onRemoveByMinus: v
  }
), Z_ = ({
  name: e,
  arrKey: t,
  arrName: n,
  persistName: i,
  required: o,
  forceNonRequired: a,
  isHidden: u,
  description: l,
  isAdditionalProperties: f,
  removeField: d,
  options: g,
  persistedControls: p,
  onRemoveByMinus: v
}) => /* @__PURE__ */ x.jsx(
  W_,
  {
    name: e,
    arrKey: t,
    arrName: n,
    persistName: i,
    required: o,
    forceNonRequired: a,
    isHidden: u,
    description: l,
    isAdditionalProperties: f,
    removeField: d,
    options: g,
    persistedControls: p,
    onRemoveByMinus: v
  }
), jg = ({
  isNumber: e,
  name: t,
  arrKey: n,
  arrName: i,
  persistName: o,
  required: a,
  forceNonRequired: u,
  isHidden: l,
  description: f,
  isAdditionalProperties: d,
  removeField: g,
  persistedControls: p,
  onRemoveByMinus: v
}) => /* @__PURE__ */ x.jsx(
  K_,
  {
    isNumber: e,
    name: t,
    arrKey: n,
    arrName: i,
    persistName: o,
    required: a,
    forceNonRequired: u,
    isHidden: l,
    description: f,
    isAdditionalProperties: d,
    removeField: g,
    persistedControls: p,
    onRemoveByMinus: v
  }
), Ng = ({
  name: e,
  arrKey: t,
  arrName: n,
  persistName: i,
  required: o,
  forceNonRequired: a,
  isHidden: u,
  description: l,
  isEdit: f,
  persistedControls: d,
  customProps: g,
  urlParams: p,
  onRemoveByMinus: v
}) => /* @__PURE__ */ x.jsx(
  N_,
  {
    name: e,
    arrKey: t,
    arrName: n,
    persistName: i,
    required: o,
    forceNonRequired: a,
    isHidden: u,
    description: l,
    isEdit: f,
    customProps: g,
    persistedControls: d,
    urlParams: p,
    onRemoveByMinus: v
  }
), $g = ({
  name: e,
  arrKey: t,
  arrName: n,
  persistName: i,
  required: o,
  forceNonRequired: a,
  isHidden: u,
  description: l,
  isAdditionalProperties: f,
  removeField: d,
  persistedControls: g,
  customProps: p,
  urlParams: v,
  onRemoveByMinus: _
}) => /* @__PURE__ */ x.jsx(
  P_,
  {
    name: e,
    arrKey: t,
    arrName: n,
    persistName: i,
    required: o,
    forceNonRequired: a,
    isHidden: u,
    description: l,
    isAdditionalProperties: f,
    removeField: d,
    persistedControls: g,
    customProps: p,
    urlParams: v,
    onRemoveByMinus: _
  }
), Mg = ({
  name: e,
  arrKey: t,
  arrName: n,
  isHidden: i,
  description: o,
  makeValueUndefined: a,
  isAdditionalProperties: u,
  removeField: l,
  onRemoveByMinus: f
}) => /* @__PURE__ */ x.jsx(
  q_,
  {
    name: e,
    arrKey: t,
    arrName: n,
    isHidden: i,
    description: o,
    makeValueUndefined: a,
    isAdditionalProperties: u,
    removeField: l,
    onRemoveByMinus: f
  }
), Ug = ({
  schema: e,
  name: t,
  arrKey: n,
  arrName: i,
  expandName: o,
  persistName: a,
  required: u,
  forceNonRequired: l,
  isHidden: f,
  description: d,
  makeValueUndefined: g,
  addField: p,
  isAdditionalProperties: v,
  removeField: _,
  isEdit: A,
  expandedControls: E,
  persistedControls: b,
  urlParams: D,
  onRemoveByMinus: j
}) => e.type === "array" ? /* @__PURE__ */ x.jsxs(yr, { $isHidden: f, children: [
  /* @__PURE__ */ x.jsx(
    H_,
    {
      name: t,
      persistName: a,
      required: u,
      description: d,
      isAdditionalProperties: v,
      removeField: _,
      persistedControls: b,
      onRemoveByMinus: j
    }
  ),
  /* @__PURE__ */ x.jsx(
    po.ResetedFormList,
    {
      name: i || t,
      rules: !l && u?.includes(Pt(t)) ? [
        {
          validator: async (C, O) => {
            if (!O || O.length < 1)
              return Promise.reject(new Error("Field is required"));
          }
        }
      ] : void 0,
      children: (C, { add: O, remove: F }, { errors: L }) => /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
        C.map((T) => {
          const q = e.items?.type, J = e.items?.description, oe = e.items;
          return /* @__PURE__ */ x.jsxs("div", { children: [
            q !== "object" && /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
              q === "string" && Rg({
                name: Array.isArray(t) ? [...t, T.name] : [t, T.name],
                arrKey: T.key,
                // arrName: [field.name, getStringByName(name)],
                arrName: [T.name],
                persistName: a ? Array.isArray(a) ? [...a, T.name] : [a, T.name] : Array.isArray(t) ? [...t, T.name] : [t, T.name],
                description: J,
                removeField: _,
                persistedControls: b,
                onRemoveByMinus: () => F(T.name)
              }),
              (q === "number" || q === "integer") && jg({
                isNumber: q === "number",
                name: Array.isArray(t) ? [...t, T.name] : [t, T.name],
                arrKey: T.key,
                // arrName: [field.name, getStringByName(name)],
                arrName: [T.name],
                persistName: a ? Array.isArray(a) ? [...a, T.name] : [a, T.name] : Array.isArray(t) ? [...t, T.name] : [t, T.name],
                description: J,
                removeField: _,
                persistedControls: b,
                onRemoveByMinus: () => F(T.name)
              }),
              (q === "rangeInputCpu" || q === "rangeInputMemory") && Ng({
                name: Array.isArray(t) ? [...t, T.name] : [t, T.name],
                arrKey: T.key,
                // arrName: [field.name, getStringByName(name)],
                arrName: [T.name],
                persistName: a ? Array.isArray(a) ? [...a, T.name] : [a, T.name] : Array.isArray(t) ? [...t, T.name] : [t, T.name],
                description: J,
                isEdit: A,
                persistedControls: b,
                customProps: e.items.customProps,
                urlParams: D,
                onRemoveByMinus: () => F(T.name)
              }),
              q === "listInput" && $g({
                name: Array.isArray(t) ? [...t, T.name] : [t, T.name],
                arrKey: T.key,
                // arrName: [field.name, getStringByName(name)],
                arrName: [T.name],
                persistName: a ? Array.isArray(a) ? [...a, T.name] : [a, T.name] : Array.isArray(t) ? [...t, T.name] : [t, T.name],
                description: J,
                removeField: _,
                persistedControls: b,
                customProps: e.items.customProps,
                urlParams: D,
                onRemoveByMinus: () => F(T.name)
              }),
              q === "boolean" && Mg({
                name: Array.isArray(t) ? [...t, T.name] : [t, T.name],
                arrKey: T.key,
                // arrName: [field.name, getStringByName(name)],
                arrName: [T.name],
                description: J,
                makeValueUndefined: g,
                removeField: _,
                onRemoveByMinus: () => F(T.name)
              }),
              q === "array" && Ug({
                schema: e.items,
                name: Array.isArray(t) ? [...t, T.name] : [t, T.name],
                arrKey: T.key,
                arrName: [T.name],
                expandName: o ? Array.isArray(o) ? [...o, T.name] : [o, T.name] : Array.isArray(t) ? [...t, T.name] : [t, T.name],
                persistName: a ? Array.isArray(a) ? [...a, T.name] : [a, T.name] : Array.isArray(t) ? [...t, T.name] : [t, T.name],
                description: J,
                makeValueUndefined: g,
                addField: p,
                removeField: _,
                isEdit: A,
                expandedControls: E,
                persistedControls: b,
                urlParams: D,
                onRemoveByMinus: () => F(T.name)
              })
            ] }),
            q === "object" && oe?.properties && Vg({
              properties: oe.properties,
              name: Array.isArray(t) ? [...t, T.name] : [t, T.name],
              arrKey: T.key,
              arrName: [T.name],
              expandName: o ? Array.isArray(o) ? [...o, T.name] : [o, T.name] : Array.isArray(t) ? [...t, T.name] : [t, T.name],
              persistName: a ? Array.isArray(a) ? [...a, T.name] : [a, T.name] : Array.isArray(t) ? [...t, T.name] : [t, T.name],
              required: oe.required,
              forceNonRequired: l,
              description: J,
              makeValueUndefined: g,
              addField: p,
              isAdditionalProperties: v,
              removeField: _,
              isEdit: A,
              expandedControls: E,
              persistedControls: b,
              urlParams: D,
              onRemoveByMinus: () => F(T.name)
            })
          ] }, T.key);
        }),
        /* @__PURE__ */ x.jsxs(Mt.Item, { children: [
          /* @__PURE__ */ x.jsx(St, { type: "text", size: "small", onClick: () => O(), children: /* @__PURE__ */ x.jsx(P0, {}) }),
          /* @__PURE__ */ x.jsx(Mt.ErrorList, { errors: L })
        ] })
      ] })
    },
    n !== void 0 ? n : Array.isArray(t) ? t.slice(-1)[0] : t
  )
] }) : null, mf = ({
  properties: e,
  name: t,
  arrKey: n,
  arrName: i,
  expandName: o,
  persistName: a,
  required: u,
  forceNonRequired: l,
  isHidden: f,
  hiddenPaths: d,
  description: g,
  namespaceData: p,
  makeValueUndefined: v,
  addField: _,
  removeField: A,
  isEdit: E,
  expandedControls: b,
  persistedControls: D,
  urlParams: j
}) => /* @__PURE__ */ x.jsx(yr, { $isHidden: f, children: Object.keys(e).map((C) => {
  if (e[C].type === "string" && e[C].enum)
    return Z_({
      name: Array.isArray(t) ? [...t, String(C)] : [t, String(C)],
      arrKey: n,
      arrName: Array.isArray(i) ? [...i, String(C)] : void 0,
      persistName: a ? Array.isArray(a) ? [...a, String(C)] : [a, String(C)] : void 0,
      // required: required?.includes(getStringByName(objName)) ? [String(el)] : undefined,
      required: u?.includes(C) ? [String(C)] : void 0,
      forceNonRequired: l,
      isHidden: xr(d, Array.isArray(t) ? [...t, String(C)] : [t, String(C)]),
      description: e[C].description,
      isAdditionalProperties: e[C].isAdditionalProperties,
      removeField: A,
      persistedControls: D,
      options: e[C].enum || []
    });
  if (e[C].type === "string" && !e[C].enum || Object.keys(e[C]).includes("x-kubernetes-int-or-string"))
    return Rg({
      name: Array.isArray(t) ? [...t, String(C)] : [t, String(C)],
      arrKey: n,
      arrName: Array.isArray(i) ? [...i, String(C)] : void 0,
      persistName: a ? Array.isArray(a) ? [...a, String(C)] : [a, String(C)] : void 0,
      // required: required?.includes(getStringByName(objName)) ? [String(el)] : undefined,
      required: u?.includes(C) ? [String(C)] : void 0,
      forceNonRequired: l,
      isHidden: xr(d, Array.isArray(t) ? [...t, String(C)] : [t, String(C)]),
      description: e[C].description,
      namespaceData: p,
      isAdditionalProperties: e[C].isAdditionalProperties,
      removeField: A,
      persistedControls: D
    });
  if (e[C].type === "number" || e[C].type === "integer")
    return jg({
      isNumber: e[C].type === "number",
      name: Array.isArray(t) ? [...t, String(C)] : [t, String(C)],
      arrKey: n,
      arrName: Array.isArray(i) ? [...i, String(C)] : void 0,
      persistName: a ? Array.isArray(a) ? [...a, String(C)] : [a, String(C)] : void 0,
      // required: required?.includes(getStringByName(objName)) ? [String(el)] : undefined,
      required: u?.includes(C) ? [String(C)] : void 0,
      forceNonRequired: l,
      isHidden: xr(d, Array.isArray(t) ? [...t, String(C)] : [t, String(C)]),
      description: e[C].description,
      isAdditionalProperties: e[C].isAdditionalProperties,
      removeField: A,
      persistedControls: D
    });
  if (e[C].type === "rangeInputCpu" || e[C].type === "rangeInputMemory")
    return Ng({
      name: Array.isArray(t) ? [...t, String(C)] : [t, String(C)],
      arrKey: n,
      arrName: Array.isArray(i) ? [...i, String(C)] : void 0,
      persistName: a ? Array.isArray(a) ? [...a, String(C)] : [a, String(C)] : void 0,
      // required: required?.includes(getStringByName(objName)) ? [String(el)] : undefined,
      required: u?.includes(C) ? [String(C)] : void 0,
      forceNonRequired: l,
      isHidden: xr(d, Array.isArray(t) ? [...t, String(C)] : [t, String(C)]),
      description: e[C].description,
      isEdit: E,
      customProps: e[C].customProps,
      persistedControls: D,
      urlParams: j
    });
  if (e[C].type === "listInput")
    return $g({
      name: Array.isArray(t) ? [...t, String(C)] : [t, String(C)],
      arrKey: n,
      arrName: Array.isArray(i) ? [...i, String(C)] : void 0,
      persistName: a ? Array.isArray(a) ? [...a, String(C)] : [a, String(C)] : void 0,
      // required: required?.includes(getStringByName(objName)) ? [String(el)] : undefined,
      required: u?.includes(C) ? [String(C)] : void 0,
      forceNonRequired: l,
      isHidden: xr(d, Array.isArray(t) ? [...t, String(C)] : [t, String(C)]),
      description: e[C].description,
      customProps: e[C].customProps,
      removeField: A,
      persistedControls: D,
      urlParams: j
    });
  if (e[C].type === "boolean")
    return Mg({
      name: Array.isArray(t) ? [...t, String(C)] : [t, String(C)],
      arrKey: n,
      arrName: Array.isArray(i) ? [...i, String(C)] : void 0,
      isHidden: xr(d, Array.isArray(t) ? [...t, String(C)] : [t, String(C)]),
      description: e[C].description,
      makeValueUndefined: v,
      isAdditionalProperties: e[C].isAdditionalProperties,
      removeField: A
    });
  if (e[C].type === "array")
    return Ug({
      schema: e[C],
      name: Array.isArray(t) ? [...t, String(C)] : [t, String(C)],
      arrKey: n,
      arrName: Array.isArray(i) ? [...i, String(C)] : void 0,
      expandName: o ? Array.isArray(o) ? [...o, String(C)] : [o, String(C)] : void 0,
      persistName: a ? Array.isArray(a) ? [...a, String(C)] : [a, String(C)] : void 0,
      // required: required?.includes(getStringByName(objName)) ? [String(el)] : undefined,
      required: u?.includes(C) ? [String(C)] : void 0,
      forceNonRequired: l,
      isHidden: xr(d, Array.isArray(t) ? [...t, String(C)] : [t, String(C)]),
      description: e[C].description,
      makeValueUndefined: v,
      addField: _,
      isAdditionalProperties: e[C].isAdditionalProperties,
      removeField: A,
      isEdit: E,
      expandedControls: b,
      persistedControls: D,
      urlParams: j
    });
  if (e[C].additionalProperties) {
    const O = e[C].properties ? mf({
      properties: e[C].properties,
      name: Array.isArray(t) ? [...t, String(C)] : [t, String(C)],
      arrKey: n,
      arrName: Array.isArray(i) ? [...i, String(C)] : void 0,
      expandName: o ? Array.isArray(o) ? [...o, String(C)] : [o, String(C)] : void 0,
      persistName: a ? Array.isArray(a) ? [...a, String(C)] : [a, String(C)] : void 0,
      required: e[C].required,
      forceNonRequired: l,
      isHidden: xr(d, Array.isArray(t) ? [...t, String(C)] : [t, String(C)]),
      hiddenPaths: d,
      description: e[C].description,
      namespaceData: p,
      makeValueUndefined: v,
      addField: _,
      removeField: A,
      isEdit: E,
      expandedControls: b,
      persistedControls: D,
      urlParams: j
    }) : void 0;
    return /* @__PURE__ */ x.jsx(
      Pg,
      {
        name: t,
        persistName: a,
        isHidden: xr(d, Array.isArray(t) ? [...t, String(C)] : [t, String(C)]),
        description: g,
        removeField: A,
        expandedControls: b,
        persistedControls: D,
        collapseTitle: C,
        collapseFormName: Array.isArray(t) ? [...t, String(C)] : [t, String(C)],
        data: O,
        inputProps: {
          addField: _,
          additionalProperties: e[C]?.additionalProperties
        }
      },
      Array.isArray(t) ? [...t, String(C)].join("-") : [t, String(C)].join("-")
    );
  }
  return e[C].type === "object" && e[C].properties ? Vg({
    properties: e[C].properties,
    name: Array.isArray(t) ? [...t, String(C)] : [t, String(C)],
    arrKey: n,
    arrName: Array.isArray(i) ? [...i, String(C)] : void 0,
    expandName: o ? Array.isArray(o) ? [...o, String(C)] : [o, String(C)] : void 0,
    persistName: a ? Array.isArray(a) ? [...a, String(C)] : [a, String(C)] : void 0,
    selfRequired: u?.includes(C),
    required: e[C].required,
    forceNonRequired: l || !u?.includes(C),
    isHidden: xr(d, Array.isArray(t) ? [...t, String(C)] : [t, String(C)]),
    hiddenPaths: d,
    description: e[C].description,
    namespaceData: p,
    makeValueUndefined: v,
    addField: _,
    isAdditionalProperties: e[C].isAdditionalProperties,
    removeField: A,
    isEdit: E,
    expandedControls: b,
    persistedControls: D,
    urlParams: j
  }) : e[C].type === "object" && e[C]["x-kubernetes-preserve-unknown-fields"] ? /* @__PURE__ */ x.jsx(dr, { message: "x-kubernetes-preserve-unknown-fields", banner: !0 }, String(C)) : null;
}) }), Vg = ({
  properties: e,
  name: t,
  arrKey: n,
  arrName: i,
  expandName: o,
  persistName: a,
  selfRequired: u,
  required: l,
  forceNonRequired: f,
  isHidden: d,
  hiddenPaths: g,
  description: p,
  namespaceData: v,
  makeValueUndefined: _,
  addField: A,
  isAdditionalProperties: E,
  removeField: b,
  isEdit: D,
  expandedControls: j,
  persistedControls: C,
  urlParams: O,
  onRemoveByMinus: F
}) => {
  const L = mf({
    properties: e,
    name: t,
    arrKey: n,
    arrName: i,
    expandName: o,
    persistName: a,
    required: l,
    forceNonRequired: f,
    isHidden: d,
    hiddenPaths: g,
    description: p,
    namespaceData: v,
    makeValueUndefined: _,
    addField: A,
    removeField: b,
    isEdit: D,
    expandedControls: j,
    persistedControls: C,
    urlParams: O
  });
  return /* @__PURE__ */ x.jsx(
    Pg,
    {
      name: t,
      persistName: a,
      selfRequired: u,
      isHidden: d,
      description: p,
      isAdditionalProperties: E,
      removeField: b,
      expandedControls: j,
      persistedControls: C,
      collapseTitle: t,
      collapseFormName: o || t,
      data: L,
      onRemoveByMinus: F
    }
  );
}, Lp = (e) => {
  if (!(typeof e == "object" && e !== null))
    return !1;
  const { spec: t } = e;
  if (!(typeof t == "object" && t !== null))
    return !1;
  const { overrideType: n, values: i } = t;
  return !(typeof n != "string" || !Array.isArray(i));
}, e8 = Tn.lazy(() => Promise.resolve().then(() => d3)), t8 = ({
  cluster: e,
  theme: t,
  urlParams: n,
  urlParamsForPermissions: i,
  formsPrefillsData: o,
  staticProperties: a,
  required: u,
  hiddenPaths: l,
  expandedPaths: f,
  persistedPaths: d,
  prefillValuesSchema: g,
  prefillValueNamespaceOnly: p,
  isNameSpaced: v,
  isCreate: _,
  type: A,
  apiGroupApiVersion: E,
  kindName: b,
  typeName: D,
  backlink: j,
  designNewLayout: C,
  designNewLayoutHeight: O
}) => {
  const { token: F } = nr.useToken(), L = To(), [T] = Mt.useForm(), q = Mt.useWatch(["metadata", "namespace"], T), [J, oe] = Ve(a), [ae, he] = Ve(), de = rC(he, 500), [Ae, fe] = Ve(!1), [Be, be] = Ve(), [ve, We] = Ve(!1), [we, pe] = Ve(f || []), [je, G] = Ve(d || []), [X, ie] = Ve(!0), Te = zt(null), Me = Pi({
    apiGroup: A === "builtin" ? "" : i.apiGroup ? i.apiGroup : "",
    typeName: i.typeName || "",
    namespace: v ? q : "",
    clusterName: e,
    verb: "create",
    refetchInterval: !1,
    enabler: _ === !0
  }), Ee = Pi({
    apiGroup: A === "builtin" ? "" : i.apiGroup ? i.apiGroup : "",
    typeName: i.typeName || "",
    namespace: v ? q : "",
    clusterName: e,
    verb: "update",
    refetchInterval: !1,
    enabler: _ !== !0
  }), Ie = () => {
    if (Te.current) {
      const { scrollHeight: Se, clientHeight: Fe } = Te.current;
      Te.current.scrollTo({
        top: Se - Fe,
        behavior: "smooth"
      });
    }
    T.validateFields().then(() => {
      fe(!0), be(void 0);
      const Se = T.getFieldsValue(), Fe = Ya(Se, je), ce = yo(Fe), xt = Zc(ce, J), { namespace: At } = Fe.metadata, et = `/api/clusters/${e}/k8s/${A === "builtin" ? "" : "apis/"}${E}${v ? `/namespaces/${At}` : ""}/${D}/${_ ? "" : Fe.metadata.name}`;
      _ ? Xl({ endpoint: et, body: xt }).then((ge) => {
        console.log(ge), j && L(j);
      }).catch((ge) => {
        if (console.log("Form submit error", ge), fe(!1), ru(ge) && ge.response?.data.message.includes("Required value")) {
          const at = (ge.response?.data.message.split("is invalid: ")[1]).split(":")[0].trim().split("."), I = Array.from({ length: at.length }, (V, z) => at.slice(0, z + 1)), y = [...we, ...I], w = /* @__PURE__ */ new Set(), R = y.filter((V) => {
            const z = Array.isArray(V) ? JSON.stringify(V) : V;
            return w.has(z) ? !1 : (w.add(z), !0);
          });
          pe([...R]);
        }
        be(ge);
      }) : Ql({ endpoint: et, body: xt }).then((ge) => {
        console.log(ge), j && L(j);
      }).catch((ge) => {
        if (console.log("Form submit error", ge), fe(!1), ru(ge) && ge.response?.data.message.includes("Required value")) {
          const at = (ge.response?.data.message.split("is invalid: ")[1]).split(":")[0].trim().split("."), I = Array.from({ length: at.length }, (V, z) => at.slice(0, z + 1)), y = [...we, ...I], w = /* @__PURE__ */ new Set(), R = y.filter((V) => {
            const z = Array.isArray(V) ? JSON.stringify(V) : V;
            return w.has(z) ? !1 : (w.add(z), !0);
          });
          pe([...R]);
        }
        be(ge);
      });
    }).catch((Se) => {
      console.log("Validating error", Se);
      const Fe = Se.errorFields.reduce((Ce, at) => [...Ce, at.name], []), vt = Fe.filter((Ce) => Array.isArray(Ce)).flatMap((Ce) => Array.from({ length: Ce.length }, (at, I) => Ce.slice(0, I + 1))), xt = Fe.filter((Ce) => !Array.isArray(Ce)), At = [...we, ...xt, ...vt], et = /* @__PURE__ */ new Set(), ge = At.filter((Ce) => {
        const at = Array.isArray(Ce) ? JSON.stringify(Ce) : Ce;
        return et.has(at) ? !1 : (et.add(at), !0);
      });
      pe([...ge]);
    });
  }, _e = bs(() => {
    const Se = T.getFieldsValue(), Fe = Ya(Se, je), ce = yo(Fe), xt = Zc(ce, J);
    de(xt);
  }, [T, de, J, je]), De = (Se) => {
    const Fe = Tl(Se), ce = hp(Fe, J);
    Fe && T.setFieldsValue(ce);
  };
  if (Ut(() => {
    const Se = A === "apis" ? `${E}/${D}` : `v1/${D}`, Fe = o?.items.find(
      (ce) => typeof ce == "object" && !Array.isArray(ce) && ce !== null && ce.spec && typeof ce.spec == "object" && !Array.isArray(ce.spec) && ce.spec !== null && typeof ce.spec.overrideType == "string" && ce.spec.overrideType === Se
    );
    if (Lp(Fe) && Fe.spec.values.forEach(({ path: ce, value: vt }) => {
      T.setFieldValue(ce, vt);
    }), g) {
      const ce = hp(g, J);
      T.setFieldsValue(ce);
    }
    _e();
  }, [
    g,
    T,
    o,
    A,
    E,
    D,
    _e,
    J
  ]), Ut(() => {
    let Se = [];
    const Fe = A === "apis" ? `${E}/${D}` : `v1/${D}`, ce = o?.items.find(
      (et) => typeof et == "object" && !Array.isArray(et) && et !== null && et.spec && typeof et.spec == "object" && !Array.isArray(et.spec) && et.spec !== null && typeof et.spec.overrideType == "string" && et.spec.overrideType === Fe
    );
    Lp(ce) && (Se = ce.spec.values.flatMap(({ path: et }) => sC(et))), g && typeof g == "object" && g !== null && (Se = [...Se, ...V0(g)]);
    const vt = [...we, ...Se], xt = /* @__PURE__ */ new Set(), At = vt.filter((et) => {
      const ge = Array.isArray(et) ? JSON.stringify(et) : et;
      return xt.has(ge) ? !1 : (xt.add(ge), !0);
    });
    pe([...At]);
  }, [E, o, g, A, D]), Ut(() => {
    p && T.setFieldValue(["metadata", "namespace"], p), _e();
  }, [p, _e, T]), Ut(() => {
    _ && T.setFieldsValue({ apiVersion: E === "api/v1" ? "v1" : E, kind: b }), _e();
  }, [_, b, E, _e, T]), Ut(() => {
    const Se = T.getFieldsValue(), Fe = Ya(Se, je), ce = yo(Fe), xt = Zc(ce, J);
    de(xt);
  }, [de, J, T, je]), Ut(() => {
    _e();
  }, [J, _e]), !J)
    return null;
  const _t = v ? {
    filterSelectOptions: $0,
    selectValues: v.map((Se) => ({
      label: Se,
      value: Se
    })),
    disabled: !!p
  } : void 0, on = (Se) => {
    T.setFieldValue(Se, void 0), _e();
  }, Rt = ({
    path: Se,
    name: Fe,
    type: ce,
    items: vt,
    nestedProperties: xt,
    required: At
  }) => {
    const ge = (Array.isArray(Se) ? Se : [Se]).reduceRight(
      (I, y) => ({ [y]: { properties: I } }),
      { [Fe]: { type: ce, items: vt, properties: xt, required: At, isAdditionalProperties: !0 } }
    ), Ce = mt.cloneDeep(J), at = mt.merge(Ce, ge);
    console.log("newObject", ge), console.log("newProperties", at), oe(at);
  }, jt = ({ path: Se }) => {
    const ce = (Array.isArray(Se) ? Se : [Se]).flatMap((xt) => [xt, "properties"]).slice(0, -1), vt = mt.cloneDeep(J);
    mt.unset(vt, ce), oe(vt);
  }, Nt = (Se) => {
    pe([...we, Se]);
  }, wt = (Se) => {
    pe([...we.filter((Fe) => JSON.stringify(Fe) !== JSON.stringify(Se))]);
  }, In = (Se, Fe) => {
    Fe && T.getFieldValue(Se) === void 0 && (Fe === "str" && T.setFieldValue(Se, ""), Fe === "number" && T.setFieldValue(Se, 0), Fe === "arr" && T.setFieldValue(Se, []), Fe === "obj" && T.setFieldValue(Se, {})), G([...je, Se]);
  }, En = (Se) => {
    console.log(Se), G([...je.filter((Fe) => JSON.stringify(Fe) !== JSON.stringify(Se))]);
  };
  return /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    /* @__PURE__ */ x.jsxs(po.Container, { $designNewLayout: C, $designNewLayoutHeight: O, children: [
      /* @__PURE__ */ x.jsx(po.OverflowContainer, { ref: Te, children: /* @__PURE__ */ x.jsxs(Mt, { form: T, onValuesChange: _e, children: [
        /* @__PURE__ */ x.jsx(I_, { value: C, children: mf({
          properties: J,
          name: [],
          required: u,
          hiddenPaths: l,
          namespaceData: _t,
          makeValueUndefined: on,
          addField: Rt,
          removeField: jt,
          isEdit: !_,
          expandedControls: { onExpandOpen: Nt, onExpandClose: wt, expandedKeys: we },
          persistedControls: { onPersistMark: In, onPersistUnmark: En, persistedKeys: je, isPersistedKeysShown: X },
          urlParams: n
        }) }),
        !C && /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
          /* @__PURE__ */ x.jsx(Ur, { $space: 10, $samespace: !0 }),
          /* @__PURE__ */ x.jsx(
            dr,
            {
              type: "warning",
              message: "Only the data from the form will be sent. Empty fields will be removed recursively."
            }
          )
        ] }),
        _ && Me.data?.status.allowed === !1 && /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
          /* @__PURE__ */ x.jsx(Ur, { $space: 10, $samespace: !0 }),
          /* @__PURE__ */ x.jsx(dr, { type: "warning", message: "Insufficient rights to create" })
        ] }),
        !_ && Ee.data?.status.allowed === !1 && /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
          /* @__PURE__ */ x.jsx(Ur, { $space: 10, $samespace: !0 }),
          /* @__PURE__ */ x.jsx(dr, { type: "warning", message: "Insufficient rights to edit" })
        ] }),
        Be && /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
          /* @__PURE__ */ x.jsx(Ur, { $space: 10, $samespace: !0 }),
          /* @__PURE__ */ x.jsx(dr, { message: `An error has occurred: ${Be?.response?.data?.message} `, type: "error" })
        ] })
      ] }) }),
      /* @__PURE__ */ x.jsx("div", { children: /* @__PURE__ */ x.jsx(__, { theme: t, currentValues: ae || {}, onChange: De }) })
    ] }),
    /* @__PURE__ */ x.jsx(po.ControlsRowContainer, { $bgColor: F.colorPrimaryBg, $designNewLayout: C, children: /* @__PURE__ */ x.jsxs(st, { gap: C ? 10 : 16, align: "center", children: [
      /* @__PURE__ */ x.jsx(St, { type: "primary", onClick: Ie, loading: Ae, children: "Submit" }),
      j && /* @__PURE__ */ x.jsx(St, { onClick: () => L(j), children: "Cancel" }),
      /* @__PURE__ */ x.jsx(St, { onClick: () => We(!0), icon: /* @__PURE__ */ x.jsx(dx, {}) }),
      C && /* @__PURE__ */ x.jsx("div", { children: /* @__PURE__ */ x.jsx(An.Text, { children: "Only the data from the form will be sent. Empty fields will be removed recursively." }) })
    ] }) }),
    ve && /* @__PURE__ */ x.jsx(
      lu,
      {
        open: ve,
        onOk: () => We(!1),
        onCancel: () => We(!1),
        onClose: () => We(!1),
        title: "Debug for properties",
        width: "90vw",
        children: /* @__PURE__ */ x.jsx(po.DebugContainer, { $designNewLayoutHeight: O, children: /* @__PURE__ */ x.jsx(Hv, { fallback: /* @__PURE__ */ x.jsx("div", { children: "Loading..." }), children: /* @__PURE__ */ x.jsx(
          e8,
          {
            defaultLanguage: "json",
            width: "100%",
            height: O || "75vh",
            theme: "vs-dark",
            value: JSON.stringify(J, null, 2),
            options: {
              theme: "vs-dark",
              minimap: { enabled: !1 }
            }
          }
        ) }) })
      }
    )
  ] });
}, qg = ({
  properties: e,
  currentPath: t = [],
  result: n = []
}) => (e && Object.keys(e).forEach((i) => {
  const o = [...t, i];
  i === "additionalProperties" ? n.push(t) : typeof e[i] == "object" && e[i] !== null && qg({ properties: e[i], currentPath: o, result: n });
}), n), Wg = ({
  path: e,
  defaultValue: t
}) => {
  if (e.length === 0)
    return {};
  const [n, ...i] = e;
  return i.length === 0 ? { [n]: t } : { [n]: Wg({ path: i, defaultValue: t }) };
}, n8 = ({
  pathsWithAdditionalProperties: e,
  prefillValuesSchema: t,
  bodyParametersSchema: n
}) => e.reduce((i, o) => {
  const a = o.filter((l, f) => f % 2 === 0);
  let u = null;
  try {
    u = mt.get(t, a.join("."));
  } catch {
  }
  if (u) {
    const l = mt.get(n.properties, `${o.join(".")}.additionalProperties.type`), f = {};
    Object.keys(u).forEach((p) => {
      const v = {
        [p]: {
          type: l,
          isAdditionalProperties: !0
        }
      }, _ = mt.cloneDeep(f);
      f.properties = mt.merge(_.properties, v);
    });
    const d = Wg({ path: o, defaultValue: f });
    return mt.merge(i, d);
  }
  return i;
}, {}), r8 = (e, t) => {
  const n = { ...e };
  for (const i in t)
    t.hasOwnProperty(i) && n.hasOwnProperty(i) && (n[i] = t[i]);
  return n;
}, i8 = ({
  typeName: e,
  apiGroup: t,
  apiVersion: n,
  swagger: i
}) => {
  const o = `/apis/${t}/${n}/${e}`, a = `/apis/${t}/${n}/namespaces/{namespace}/${e}`, u = Object.keys(i.paths || {}).includes(o), l = Object.keys(i.paths || {}).includes(a);
  return { isClusterWide: u, isNamespaceScoped: l };
}, Kg = ({
  typeName: e,
  swagger: t
}) => {
  const n = `/api/v1/${e}`, i = `/api/v1/namespaces/{namespace}/${e}`, o = Object.keys(t.paths || {}).includes(n), a = Object.keys(t.paths || {}).includes(i);
  return { isClusterWide: o, isNamespaceScoped: a };
}, s8 = (e) => {
  if (!(typeof e == "object" && e !== null))
    return !1;
  const { spec: t } = e;
  if (!(typeof t == "object" && t !== null))
    return !1;
  const { overrideType: n, strategy: i, schema: o, hidden: a, expanded: u, persisted: l } = t;
  return !(typeof n != "string" || typeof n != "string" || typeof i != "string" || !(typeof o == "object" && o !== null) || !Array.isArray(a) && typeof a < "u" || !Array.isArray(u) && typeof u < "u" || !Array.isArray(l) && typeof l < "u");
}, o8 = ({
  swagger: e,
  data: t
}) => {
  let n = "", i = !1;
  if (t.type === "builtin") {
    const { isNamespaceScoped: o } = Kg({
      typeName: t.typeName,
      swagger: e
    });
    o && (i = !0), n = `/api/v1${o ? "/namespaces/{namespace}" : ""}/${t.typeName}`;
  } else {
    const { isNamespaceScoped: o } = i8({
      apiGroup: t.apiGroup,
      apiVersion: t.apiVersion,
      typeName: t.typeName,
      swagger: e
    });
    o && (i = !0), n = `/apis/${t.apiGroup}/${t.apiVersion}${o ? "/namespaces/{namespace}" : ""}/${t.typeName}`;
  }
  return { swaggerPath: n, isNamespaced: i };
}, a8 = ({
  swagger: e,
  swaggerPath: t
}) => {
  const n = e?.paths?.[t]?.post;
  if (!n)
    return { bodyParametersSchema: void 0, kindName: void 0, error: `No post data for ${t}` };
  const i = n?.["x-kubernetes-group-version-kind"];
  if (!i)
    return { bodyParametersSchema: void 0, kindName: void 0, error: `postData with no x-kubernetes-group-version-kind: ${JSON.stringify(n, null, 2)}` };
  const o = i?.kind;
  if (!o)
    return { bodyParametersSchema: void 0, kindName: void 0, error: `x-kubernetes-group-version-kind with no kind: ${JSON.stringify(i, null, 2)}` };
  const a = n?.parameters;
  if (!a) {
    const f = `postData with no parameters: ${JSON.stringify(n, null, 2)}`;
    return { bodyParametersSchema: void 0, kindName: o, error: f };
  }
  const u = a?.filter((f) => f.in === "body")[0];
  if (!u) {
    const f = `paremeters with no {in: body}: ${JSON.stringify(a, null, 2)}`;
    return { bodyParametersSchema: void 0, kindName: o, error: f };
  }
  const l = u.schema;
  if (!l) {
    const f = `bodyParameters with no schema:${JSON.stringify(u, null, 2)}`;
    return { bodyParametersSchema: void 0, kindName: o, error: f };
  }
  return Object.keys(l).includes("$ref") ? { bodyParametersSchema: l, kindName: o, error: "Underefed schema" } : { bodyParametersSchema: l, kindName: o, error: void 0 };
}, u8 = ({
  specificCustomOverrides: e,
  newProperties: t,
  bodyParametersSchema: n
}) => {
  let i, o, a, u = t, l;
  if (s8(e))
    if (e.spec.hidden && (i = e.spec.hidden), e.spec.expanded && (o = e.spec.expanded), e.spec.persisted && (a = e.spec.persisted), e.spec.strategy === "fullReplace")
      e.spec.schema.properties ? u = e.spec.schema.properties : u = t, e.spec.schema.required ? l = e.spec.schema.required : l = n.required;
    else if (e.spec.strategy === "merge") {
      if (e.spec.schema.properties) {
        const f = mt.cloneDeep(t);
        u = mt.merge(
          f,
          e.spec.schema.properties
        );
      } else
        u = t;
      e.spec.schema.required ? l = [
        ...n.required || [],
        ...e.spec.schema.required
      ] : l = n.required;
    } else if (e.spec.strategy === "replace") {
      if (e.spec.schema.properties) {
        const f = mt.cloneDeep(t);
        u = r8(
          f,
          e.spec.schema.properties
        );
      } else
        u = t;
      e.spec.schema.required ? l = [...e.spec.schema.required] : l = n.required;
    } else
      u = t, l = n.required;
  else
    u = t, l = n.required;
  return { hiddenPaths: i, expandedPaths: o, persistedPaths: a, propertiesToApply: u, requiredToApply: l };
}, J4 = ({
  theme: e,
  cluster: t,
  urlParams: n,
  urlParamsForPermissions: i,
  formsPrefillsData: o,
  swagger: a,
  namespacesData: u,
  formsOverridesData: l,
  data: f,
  isCreate: d,
  backlink: g,
  modeData: p,
  designNewLayout: v,
  designNewLayoutHeight: _
}) => {
  const [A, E] = Ve(void 0), [b, D] = Ve([]), [j, C] = Ve([]), [O, F] = Ve([]), [L, T] = Ve([]), [q, J] = Ve(""), [oe, ae] = Ve(!1), [he, de] = Ve(!1), Ae = bs(() => {
    p && (p.onChange("Manual"), p.onDisabled());
  }, [p]);
  return Ut(() => {
    if (!a)
      return;
    const { swaggerPath: fe, isNamespaced: Be } = o8({
      swagger: a,
      data: f
    });
    Be && ae(!0);
    const { bodyParametersSchema: be, kindName: ve, error: We } = a8({ swagger: a, swaggerPath: fe });
    if (We) {
      de(We), console.log(We), Ae();
      return;
    }
    ve && J(ve);
    const we = qg({
      properties: be.properties
    }), pe = n8({
      pathsWithAdditionalProperties: we,
      prefillValuesSchema: f.prefillValuesSchema,
      bodyParametersSchema: be
    }), je = mt.cloneDeep(be.properties), G = mt.merge(je, pe), X = f.type === "apis" ? `${f.apiGroup}/${f.apiVersion}/${f.typeName}` : `v1/${f.typeName}`, ie = l?.items.find((De) => De.spec.overrideType === X), { hiddenPaths: Te, expandedPaths: Me, persistedPaths: Ee, propertiesToApply: Ie, requiredToApply: _e } = u8({
      specificCustomOverrides: ie,
      newProperties: G,
      bodyParametersSchema: be
    });
    Te && C(Te), Me && F(Me), Ee && T(Ee), Ie && E(Ie), _e && D(_e);
  }, [a, f, Ae, l]), p?.current === "Manual" ? /* @__PURE__ */ x.jsx(
    T_,
    {
      theme: e,
      cluster: t,
      prefillValuesSchema: f.prefillValuesSchema,
      isCreate: d,
      type: f.type,
      isNameSpaced: oe ? u?.items.map((fe) => fe.metadata.name) : !1,
      apiGroupApiVersion: f.type === "builtin" ? "api/v1" : `${f.apiGroup}/${f.apiVersion}`,
      typeName: f.typeName,
      backlink: g,
      designNewLayoutHeight: _
    }
  ) : !A && !he ? null : he ? /* @__PURE__ */ x.jsx(dr, { message: he, type: "error" }) : /* @__PURE__ */ x.jsx(
    t8,
    {
      cluster: t,
      theme: e,
      urlParams: n,
      urlParamsForPermissions: i,
      formsPrefillsData: o,
      staticProperties: A,
      required: b,
      hiddenPaths: j,
      expandedPaths: O,
      persistedPaths: L,
      prefillValuesSchema: f.prefillValuesSchema,
      prefillValueNamespaceOnly: f.prefillValueNamespaceOnly,
      isCreate: d,
      type: f.type,
      isNameSpaced: oe ? u?.items.map((fe) => fe.metadata.name) : !1,
      apiGroupApiVersion: f.type === "builtin" ? "api/v1" : `${f.apiGroup}/${f.apiVersion}`,
      kindName: q,
      typeName: f.typeName,
      backlink: g,
      designNewLayout: v,
      designNewLayoutHeight: _
    },
    JSON.stringify(A) + JSON.stringify(b) + JSON.stringify(j) + JSON.stringify(f)
  );
}, c8 = Ze($l)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 238px;
  box-shadow:
    0 6px 16px 0 #00000014,
    0 3px 6px -4px #0000001f,
    0 9px 28px 8px #0000000d;

  .ant-card-body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 238px;
    overflow-x: auto;
    padding: 8px;
  }
`, l8 = {
  CustomCard: c8
}, f8 = ({ onAddClick: e }) => /* @__PURE__ */ x.jsx(l8.CustomCard, { onClick: e, children: /* @__PURE__ */ x.jsx(px, {}) }), ln = [];
for (let e = 0; e < 256; ++e)
  ln.push((e + 256).toString(16).slice(1));
function h8(e, t = 0) {
  return (ln[e[t + 0]] + ln[e[t + 1]] + ln[e[t + 2]] + ln[e[t + 3]] + "-" + ln[e[t + 4]] + ln[e[t + 5]] + "-" + ln[e[t + 6]] + ln[e[t + 7]] + "-" + ln[e[t + 8]] + ln[e[t + 9]] + "-" + ln[e[t + 10]] + ln[e[t + 11]] + ln[e[t + 12]] + ln[e[t + 13]] + ln[e[t + 14]] + ln[e[t + 15]]).toLowerCase();
}
let ll;
const d8 = new Uint8Array(16);
function p8() {
  if (!ll) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    ll = crypto.getRandomValues.bind(crypto);
  }
  return ll(d8);
}
const g8 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Pp = { randomUUID: g8 };
function y8(e, t, n) {
  if (Pp.randomUUID && !e)
    return Pp.randomUUID();
  e = e || {};
  const i = e.random || (e.rng || p8)();
  return i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, h8(i);
}
const m8 = ({
  clusterName: e,
  baseApiGroup: t,
  baseApiVersion: n,
  mpResourceName: i,
  mpResourceKind: o,
  isOpen: a,
  setIsOpen: u,
  setError: l,
  onCreateSuccess: f,
  onUpdateSuccess: d
}) => {
  const [g] = Mt.useForm(), p = Mt.useWatch("type", g), v = typeof a == "boolean" ? {
    name: "",
    description: "",
    icon: "",
    type: "direct",
    apiGroup: "",
    apiVersion: "",
    typeName: "",
    pathToNav: "",
    tags: [],
    disabled: !1,
    hidden: !1
  } : a.spec, _ = (E) => {
    if (typeof a == "boolean") {
      Xl({
        endpoint: `/api/clusters/${e}/k8s/apis/${t}/${n}/${i}`,
        body: {
          apiVersion: `${t}/${n}`,
          kind: o,
          metadata: {
            name: y8()
          },
          spec: { ...E }
        }
      }).then(() => {
        u(!1), f();
      }).catch((b) => {
        (ru(b) || b instanceof Error) && l(b);
      }).finally(() => u(!1));
      return;
    }
    Ql({
      endpoint: `/api/clusters/${e}/k8s/apis/${t}/${n}/${i}/${a.metadata.name}`,
      body: {
        apiVersion: `${t}/${n}`,
        kind: o,
        metadata: {
          name: a.metadata.name,
          resourceVersion: a.metadata.resourceVersion
        },
        spec: { ...E }
      }
    }).then(() => {
      u(!1), d();
    }).catch((b) => {
      (ru(b) || b instanceof Error) && l(b);
    }).finally(() => u(!1));
  }, A = () => {
    g.validateFields().then(() => {
      _(g.getFieldsValue());
    }).catch(() => console.log("Validating error"));
  };
  return /* @__PURE__ */ x.jsx(
    lu,
    {
      title: typeof a == "boolean" ? "Add card" : "Edit плитку",
      open: a !== !1,
      onCancel: () => u(!1),
      onOk: () => A,
      children: /* @__PURE__ */ x.jsxs(Mt, { form: g, name: "control-hooks", initialValues: { ...v }, children: [
        /* @__PURE__ */ x.jsx(Mt.Item, { label: "Name", name: "name", children: /* @__PURE__ */ x.jsx(lr, { required: !0 }) }),
        /* @__PURE__ */ x.jsx(Mt.Item, { label: "Description", name: "description", children: /* @__PURE__ */ x.jsx(lr, { required: !0 }) }),
        /* @__PURE__ */ x.jsx(Mt.Item, { label: "Icon", name: "icon", children: /* @__PURE__ */ x.jsx(lr.TextArea, { placeholder: "SVG-иконка, <svg /> -> base64", maxLength: void 0, required: !0 }) }),
        /* @__PURE__ */ x.jsx(Mt.Item, { label: "Resources type", name: "type", children: /* @__PURE__ */ x.jsx(
          vs,
          {
            placeholder: "Choose resource type",
            options: [
              { value: "direct", label: "Direct link" },
              { value: "crd", label: "CRD" },
              { value: "nonCrd", label: "API" },
              { value: "built-in", label: "Built-in" }
            ]
          }
        ) }),
        /* @__PURE__ */ x.jsx(Mt.Item, { label: "Enter API group", name: "apiGroup", children: /* @__PURE__ */ x.jsx(lr, { disabled: p === "direct" || p === "built-in" }) }),
        /* @__PURE__ */ x.jsx(Mt.Item, { label: "Enter API version", name: "apiVersion", children: /* @__PURE__ */ x.jsx(lr, { disabled: p === "direct" }) }),
        /* @__PURE__ */ x.jsx(Mt.Item, { label: "Enter resource type", name: "typeName", children: /* @__PURE__ */ x.jsx(lr, { disabled: p === "direct" }) }),
        /* @__PURE__ */ x.jsx(Mt.Item, { label: "Enter path", name: "pathToNav", children: /* @__PURE__ */ x.jsx(lr, { disabled: p !== "direct" }) }),
        /* @__PURE__ */ x.jsx(Mt.Item, { label: "Tags", name: "tags", children: /* @__PURE__ */ x.jsx(
          vs,
          {
            mode: "tags",
            placeholder: "Enter tags. Separators: comma and space",
            tokenSeparators: [",", " "],
            dropdownStyle: { display: "none" }
          }
        ) }),
        /* @__PURE__ */ x.jsx(Mt.Item, { label: "Disabled", name: "disabled", children: /* @__PURE__ */ x.jsx(eu, {}) }),
        /* @__PURE__ */ x.jsx(Mt.Item, { label: "Hidden", name: "hidden", children: /* @__PURE__ */ x.jsx(eu, {}) })
      ] })
    }
  );
}, w8 = ({
  clusterName: e,
  namespace: t,
  type: n,
  pathToNav: i,
  typeName: o,
  apiGroup: a,
  apiVersion: u,
  baseprefix: l
}) => {
  const f = "v1";
  return n === "direct" && i ? i : n === "crd" ? `/${l}/${e}/${t}/crd-table/${a}/${u}/${f}/${o}` : n === "nonCrd" ? `/${l}/${e}/${t}/api-table/${a}/${u}/${o}` : `/${l}/${e}/${t}/builtin-table/${o}`;
}, b8 = ({
  clusterName: e,
  namespace: t,
  type: n,
  pathToNav: i,
  typeName: o,
  apiGroup: a,
  apiVersion: u,
  baseprefix: l
}) => n === "direct" && i ? i : n === "crd" ? `/${l}/${e}/${t}/forms/crds/${a}/${u}/${o}` : n === "nonCrd" ? `/${l}/${e}/${t}/forms/apis/${a}/${u}/${o}` : `/${l}/${e}/${t}/forms/builtin/${u}/${o}`, v8 = ({
  clusterName: e,
  namespace: t,
  type: n,
  typeName: i,
  apiGroup: o,
  apiVersion: a
}) => n === "crd" ? `/api/clusters/${e}/k8s/apis/${o}/${a}${t ? `/namespaces/${t}` : ""}/${i}` : n === "nonCrd" ? `/api/clusters/${e}/k8s/apis/${o}/${a}${t ? `/namespaces/${t}` : ""}/${i}` : `/api/clusters/${e}/k8s/api/v1${t ? `/namespaces/${t}` : ""}/${i}`, x8 = Ze($l)`
  position: relative;
  width: 238px;
  overflow-x: auto;
  cursor: ${({ $isDisabled: e }) => e ? "not-allowed" : "pointer"};
  box-shadow:
    0 6px 16px 0 #00000014,
    0 3px 6px -4px #0000001f,
    0 9px 28px 8px #0000000d;

  &:hover {
    border-color: ${({ $hoverColor: e, $isDisabled: t }) => !t && e};
  }

  .ant-card-body {
    height: 238px;
    overflow-x: auto;
    padding: 8px;
  }
`, A8 = Ze.div`
  min-width: 45px;
  min-height: 45px;
  padding: 6px;

  svg {
    width: 45px;
    height: 45px;
  }
`, E8 = Ze.div`
  overflow-x: auto;
  scrollbar-width: thin;
  margin-bottom: 20px;
`, S8 = Ze.div`
  padding-left: 6px;
  padding-right: 6px;
  font-size: 16px;
  line-height: 24px;

  span {
    font-weight: 700;
  }
`, C8 = Ze.div`
  margin-top: 6px;
  margin-bottom: 6px;
  padding-left: 6px;
  padding-right: 6px;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
`, _8 = Ze(fl)`
  margin-right: 4px;
  margin-bottom: 4px;

  &:last-child {
    margin-right: 0;
  }
`, k8 = Ze.div`
  padding-left: 6px;
  padding-right: 6px;
`, O8 = Ze.div`
  position: absolute;
  bottom: 6px;
  right: 6px;
`, oi = {
  CustomCard: x8,
  ImageContainer: A8,
  OverflowContainer: E8,
  TitleContainer: S8,
  TagsContainer: C8,
  CustomTag: _8,
  DescriptionContainer: k8,
  EditButtonContainer: O8
}, Hg = ({
  baseprefix: e,
  description: t,
  name: n,
  icon: i,
  clusterName: o,
  namespace: a,
  type: u,
  pathToNav: l,
  typeName: f,
  apiGroup: d,
  apiVersion: g,
  tags: p,
  disabled: v,
  isEditMode: _,
  onDeleteClick: A,
  onEditClick: E,
  addedMode: b
}) => {
  const { useToken: D } = nr, { token: j } = D(), C = To();
  let O = "";
  try {
    O = window.atob(i);
  } catch {
    O = "Can't decode";
  }
  const F = b ? w8({
    clusterName: o,
    namespace: a,
    type: u,
    pathToNav: l,
    typeName: f,
    apiGroup: d,
    apiVersion: g,
    baseprefix: e
  }) : b8({
    clusterName: o,
    namespace: a,
    type: u,
    pathToNav: l,
    typeName: f,
    apiGroup: d,
    apiVersion: g,
    baseprefix: e
  }), L = b && u !== "direct" ? v8({
    clusterName: o,
    namespace: a,
    type: u,
    typeName: f,
    apiGroup: d,
    apiVersion: g
  }) : void 0, { data: T, error: q } = fn({
    uri: L || "",
    queryKey: [L || ""],
    refetchInterval: !1,
    isEnabled: b && L !== void 0
  });
  return b && (q || u === "direct") ? null : /* @__PURE__ */ x.jsx(
    oi.CustomCard,
    {
      $isDisabled: v,
      $hoverColor: j.colorPrimary,
      onClick: () => v ? null : C(F),
      children: /* @__PURE__ */ x.jsxs(st, { vertical: !0, style: { width: "100%", height: "100%" }, justify: "spaceBetween", children: [
        /* @__PURE__ */ x.jsxs(st, { justify: "space-between", children: [
          /* @__PURE__ */ x.jsx(oi.ImageContainer, { dangerouslySetInnerHTML: { __html: O } }),
          _ && /* @__PURE__ */ x.jsx(
            "div",
            {
              onClick: (J) => {
                J.preventDefault(), J.stopPropagation(), A && A();
              },
              children: /* @__PURE__ */ x.jsx("svg", { width: "21", height: "21", viewBox: "0 0 21 21", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ x.jsx(
                "path",
                {
                  d: "M10.5 0C4.70156 0 0 4.70156 0 10.5C0 16.2984 4.70156 21 10.5 21C16.2984 21 21 16.2984 21 10.5C21 4.70156 16.2984 0 10.5 0ZM15 11.0625C15 11.1656 14.9156 11.25 14.8125 11.25H6.1875C6.08437 11.25 6 11.1656 6 11.0625V9.9375C6 9.83438 6.08437 9.75 6.1875 9.75H14.8125C14.9156 9.75 15 9.83438 15 9.9375V11.0625Z",
                  fill: "currentColor"
                }
              ) })
            }
          )
        ] }),
        /* @__PURE__ */ x.jsxs(oi.OverflowContainer, { children: [
          /* @__PURE__ */ x.jsxs(oi.TitleContainer, { children: [
            n,
            " ",
            b && /* @__PURE__ */ x.jsxs("span", { children: [
              "x",
              T?.items?.length
            ] })
          ] }),
          /* @__PURE__ */ x.jsx(oi.TagsContainer, { children: p.map((J) => /* @__PURE__ */ x.jsx(oi.CustomTag, { children: J }, J)) }),
          /* @__PURE__ */ x.jsx(oi.DescriptionContainer, { children: /* @__PURE__ */ x.jsx(An.Text, { type: "secondary", children: t }) })
        ] }),
        /* @__PURE__ */ x.jsx(oi.EditButtonContainer, { children: _ && /* @__PURE__ */ x.jsx(
          "div",
          {
            onClick: (J) => {
              J.preventDefault(), J.stopPropagation(), E && E();
            },
            children: /* @__PURE__ */ x.jsx("svg", { width: "18", height: "19", viewBox: "0 0 18 19", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ x.jsx(
              "path",
              {
                d: "M17.28 16.79H0.72C0.32175 16.79 0 17.1117 0 17.51V18.32C0 18.419 0.081 18.5 0.18 18.5H17.82C17.919 18.5 18 18.419 18 18.32V17.51C18 17.1117 17.6783 16.79 17.28 16.79ZM3.27825 14.9C3.32325 14.9 3.36825 14.8955 3.41325 14.8888L7.19775 14.225C7.24275 14.216 7.2855 14.1958 7.317 14.162L16.8547 4.62425C16.8756 4.60343 16.8922 4.57871 16.9034 4.55149C16.9147 4.52427 16.9205 4.49509 16.9205 4.46562C16.9205 4.43616 16.9147 4.40698 16.9034 4.37976C16.8922 4.35254 16.8756 4.32782 16.8547 4.307L13.1153 0.56525C13.0725 0.5225 13.0163 0.5 12.9555 0.5C12.8948 0.5 12.8385 0.5225 12.7958 0.56525L3.258 10.103C3.22425 10.1367 3.204 10.1772 3.195 10.2222L2.53125 14.0067C2.50936 14.1273 2.51718 14.2513 2.55404 14.3682C2.59089 14.485 2.65566 14.5911 2.74275 14.6772C2.89125 14.8212 3.078 14.9 3.27825 14.9Z",
                fill: "currentColor"
              }
            ) })
          }
        ) })
      ] })
    }
  );
}, T8 = ({ uniqueTags: e, selectedTags: t, onSelectedTags: n }) => {
  const i = e.map((o) => ({ key: o, value: o }));
  return /* @__PURE__ */ x.jsx(
    vs,
    {
      mode: "tags",
      placeholder: "Search",
      tokenSeparators: [",", " ", "	"],
      allowClear: !0,
      options: i,
      onClear: () => {
        n([]);
      },
      value: t,
      onChange: (o) => n(o),
      style: { width: "240px" }
    }
  );
}, I8 = Ze.div`
  font-size: 36px;
  line-height: 36px;
  font-weight: 700;
  /* stylelint-disable-next-line value-no-vendor-prefix */
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -ms-line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-clamp: 1;
  word-break: break-all;
`, F8 = {
  BigValue: I8
}, B8 = ({
  clusterName: e,
  namespace: t,
  baseApiGroup: n,
  baseApiVersion: i,
  mpResourceName: o,
  mpResourceKind: a,
  baseprefix: u
}) => {
  const [l, f] = ex.useNotification(), [d, g] = Ve(!1), [p, v] = Ve(!1), [_, A] = Ve(!1), [E, b] = Ve(), [D, j] = Ve(), [C, O] = Ve([]), [F, L] = Ve([]), [T, q] = Ve([]), [J, oe] = Ve([]), {
    data: ae,
    isLoading: he,
    error: de
  } = fn({
    uri: `/api/clusters/${e}/k8s/apis/${n}/${i}/${o}/`,
    refetchInterval: 5e3,
    queryKey: ["marketplacePanels", e || "no-cluster"],
    isEnabled: e !== void 0
  }), Ae = Pi({
    apiGroup: n,
    typeName: o,
    namespace: "",
    clusterName: e || "",
    verb: "create",
    refetchInterval: !1
  }), fe = Pi({
    apiGroup: n,
    typeName: o,
    namespace: "",
    clusterName: e || "",
    verb: "update",
    refetchInterval: !1
  }), Be = Pi({
    apiGroup: n,
    typeName: o,
    namespace: "",
    clusterName: e || "",
    verb: "delete",
    refetchInterval: !1
  }), be = () => l.success({
    message: "Card created",
    key: "create-marketplace-success"
  }), ve = () => l.success({
    message: "Card modified",
    key: "update-marketplace-success"
  });
  if (Ut(() => {
    ae && (d ? (O(ae.items.map(({ spec: we }) => we).sort()), q(
      ae.items.flatMap(({ spec: we }) => we.tags).filter((we, pe, je) => je.indexOf(we) === pe)
    )) : (O(
      ae.items.map(({ spec: we }) => we).filter(({ hidden: we }) => we !== !0).sort()
    ), q(
      ae.items.filter(({ spec: we }) => we.hidden !== !0).flatMap(({ spec: we }) => we.tags).filter((we, pe, je) => je.indexOf(we) === pe)
    )));
  }, [ae, d]), Ut(() => {
    let we = [];
    J && J.length > 0 ? we = C.filter(
      ({ name: pe, description: je, tags: G }) => J.some((X) => pe.toLowerCase().includes(X.toLowerCase())) || J.some((X) => je.toLowerCase().includes(X.toLowerCase())) || J.some((X) => G.some((ie) => ie.toLowerCase().includes(X.toLowerCase())))
    ).sort() : we = C.sort(), L(we);
  }, [J, C]), de)
    return /* @__PURE__ */ x.jsx("div", { children: JSON.stringify(de) });
  if (he)
    return /* @__PURE__ */ x.jsx(vo, {});
  if (!ae)
    return /* @__PURE__ */ x.jsx("div", { children: "No panels" });
  const We = () => {
    g(!d);
  };
  return /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    f,
    /* @__PURE__ */ x.jsxs(st, { justify: "space-between", children: [
      /* @__PURE__ */ x.jsx("div", { children: /* @__PURE__ */ x.jsxs(st, { gap: 12, vertical: !0, children: [
        /* @__PURE__ */ x.jsx("div", { children: /* @__PURE__ */ x.jsx(An.Text, { type: "secondary", children: "Available Products" }) }),
        /* @__PURE__ */ x.jsx("div", { children: /* @__PURE__ */ x.jsx(F8.BigValue, { children: "Marketplace" }) })
      ] }) }),
      /* @__PURE__ */ x.jsx("div", { children: /* @__PURE__ */ x.jsxs(st, { gap: 12, vertical: !0, children: [
        /* @__PURE__ */ x.jsx(T8, { uniqueTags: T, selectedTags: J, onSelectedTags: oe }),
        (Ae.data?.status.allowed || fe.data?.status.allowed || Be.data?.status.allowed) && /* @__PURE__ */ x.jsxs(st, { align: "center", gap: 8, children: [
          /* @__PURE__ */ x.jsx(eu, { defaultChecked: !0, checked: d, onClick: We }),
          " Edit Mode"
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ x.jsx(Ur, { $space: 20, $samespace: !0 }),
    E && /* @__PURE__ */ x.jsx(
      dr,
      {
        description: JSON.stringify(E),
        message: "Card was not created",
        onClose: () => b(void 0),
        type: "error"
      }
    ),
    D && /* @__PURE__ */ x.jsx(
      dr,
      {
        description: JSON.stringify(D),
        message: "Card was not deleted",
        onClose: () => j(void 0),
        type: "error"
      }
    ),
    /* @__PURE__ */ x.jsxs(st, { gap: 22, wrap: !0, children: [
      e && t && F.map(
        ({ name: we, description: pe, icon: je, type: G, pathToNav: X, typeName: ie, apiGroup: Te, apiVersion: Me, tags: Ee, disabled: Ie }) => /* @__PURE__ */ x.jsx(
          Hg,
          {
            baseprefix: u,
            description: pe,
            disabled: Ie,
            icon: je,
            isEditMode: d,
            name: we,
            clusterName: e,
            namespace: t,
            type: G,
            pathToNav: X,
            typeName: ie,
            apiGroup: Te,
            apiVersion: Me,
            tags: Ee,
            onDeleteClick: () => {
              const _e = ae.items.find(({ spec: De }) => De.name === we);
              A(_e ? { name: _e.metadata.name } : !1);
            },
            onEditClick: () => {
              v(ae.items.find(({ spec: _e }) => _e.name === we) || !1);
            }
          },
          we
        )
      ),
      d && /* @__PURE__ */ x.jsx(
        f8,
        {
          onAddClick: () => {
            v(!0);
          }
        }
      )
    ] }),
    p && /* @__PURE__ */ x.jsx(
      m8,
      {
        clusterName: e,
        baseApiGroup: n,
        baseApiVersion: i,
        mpResourceName: o,
        mpResourceKind: a,
        isOpen: p,
        setError: b,
        setIsOpen: v,
        onCreateSuccess: be,
        onUpdateSuccess: ve
      }
    ),
    typeof _ != "boolean" && /* @__PURE__ */ x.jsx(
      L0,
      {
        name: _.name,
        onClose: () => A(!1),
        endpoint: `/api/clusters/${e}/k8s/apis/${n}/${i}/${o}/${_.name}`
      }
    )
  ] });
}, D8 = ({ onDelete: e, onUpdate: t }) => {
  const n = () => {
    const i = [];
    return t && i.push({
      key: "update",
      label: /* @__PURE__ */ x.jsx(
        "div",
        {
          onClick: (o) => {
            o.stopPropagation(), t();
          },
          children: /* @__PURE__ */ x.jsxs(st, { align: "center", gap: 8, children: [
            /* @__PURE__ */ x.jsx(sS, {}),
            "Edit"
          ] })
        }
      )
    }), e && i.push({
      key: "delete",
      label: /* @__PURE__ */ x.jsx(
        "div",
        {
          onClick: (o) => {
            o.stopPropagation(), e();
          },
          children: /* @__PURE__ */ x.jsxs(st, { align: "center", gap: 8, children: [
            /* @__PURE__ */ x.jsx(iS, {}),
            "Delete"
          ] })
        }
      )
    }), i;
  };
  return /* @__PURE__ */ x.jsx(Np, { placement: "bottomRight", menu: { items: n() }, trigger: ["click"], children: /* @__PURE__ */ x.jsx(
    St,
    {
      type: "text",
      onClick: (i) => {
        i.preventDefault(), i.stopPropagation();
      },
      children: /* @__PURE__ */ x.jsx(gx, {})
    }
  ) });
}, L8 = ({ accessGroups: e }) => {
  const t = () => e.map((n, i) => ({
    key: `${n}-${i}`,
    label: /* @__PURE__ */ x.jsx(
      "div",
      {
        onClick: (o) => {
          o.stopPropagation();
        },
        children: n
      }
    )
  }));
  return /* @__PURE__ */ x.jsx(Np, { placement: "bottomRight", menu: { items: t() }, trigger: ["click"], children: /* @__PURE__ */ x.jsxs(
    St,
    {
      type: "link",
      onClick: (n) => {
        n.preventDefault(), n.stopPropagation();
      },
      children: [
        "Access Groups",
        /* @__PURE__ */ x.jsx("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ x.jsx(
          "path",
          {
            d: "M12.8127 3H11.6408C11.5611 3 11.4861 3.03906 11.4393 3.10313L7.0002 9.22188L2.56114 3.10313C2.51426 3.03906 2.43926 3 2.35957 3H1.1877C1.08614 3 1.02676 3.11563 1.08614 3.19844L6.59551 10.7937C6.79551 11.0687 7.20489 11.0687 7.40332 10.7937L12.9127 3.19844C12.9736 3.11563 12.9143 3 12.8127 3Z",
            fill: "currentColor"
          }
        ) })
      ]
    }
  ) });
}, P8 = Ze.div`
  width: 45.33px;
  height: 1px;
`;
Ze.div`
  font-size: 36px;
  line-height: 36px;
  font-weight: 700;
  /* stylelint-disable-next-line value-no-vendor-prefix */
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -ms-line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-clamp: 1;
  word-break: break-all;
`;
const R8 = {
  ActionMenuPlaceholder: P8
}, j8 = ({
  clusterName: e,
  namespace: t,
  baseApiGroup: n,
  baseApiVersion: i,
  baseProjectApiGroup: o,
  baseProjectVersion: a,
  mpResourceName: u,
  projectResourceName: l,
  baseprefix: f,
  accessGroups: d,
  children: g
}) => {
  const p = To(), {
    data: v,
    isLoading: _
    // error: marketplaceError,
  } = fn({
    uri: `/api/clusters/${e}/k8s/apis/${n}/${i}/${u}/`,
    refetchInterval: 5e3,
    queryKey: ["marketplacePanels", e || "no-cluster"],
    isEnabled: e !== void 0
  }), {
    data: A,
    isLoading: E,
    error: b
  } = fn({
    uri: `/api/clusters/${e}/k8s/apis/${o}/${a}/${l}/${t}`,
    refetchInterval: 5e3,
    queryKey: ["projects", e || "no-cluster"],
    isEnabled: e !== void 0
  }), [D, j] = Ve(!1), C = Pi({
    apiGroup: o,
    typeName: l,
    namespace: "",
    clusterName: e || "",
    verb: "update",
    refetchInterval: !1
  }), O = Pi({
    apiGroup: o,
    typeName: l,
    namespace: "",
    clusterName: e || "",
    verb: "delete",
    refetchInterval: !1
  }), F = bs(() => {
    p(
      `/${f}/${e}/forms/apis/${o}/${a}/${l}/${t}?backlink=${f}/clusters/${e}`
    );
  }, [f, e, t, o, a, l, p]);
  if (E)
    return /* @__PURE__ */ x.jsx(vo, {});
  if (!A || b)
    return null;
  const L = A.status.conditions.find(({ type: T }) => T === "Ready");
  return /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    /* @__PURE__ */ x.jsxs(st, { justify: "space-between", children: [
      /* @__PURE__ */ x.jsx("div", { children: g }),
      /* @__PURE__ */ x.jsx("div", { children: /* @__PURE__ */ x.jsxs(st, { gap: 24, vertical: !0, children: [
        /* @__PURE__ */ x.jsx(st, { justify: "flex-end", children: L?.status === "True" && (C.data?.status.allowed || O.data?.status.allowed) ? /* @__PURE__ */ x.jsx(
          D8,
          {
            onDelete: O.data?.status.allowed ? () => {
              j(!0);
            } : void 0,
            onUpdate: C.data?.status.allowed ? F : void 0
          }
        ) : /* @__PURE__ */ x.jsx(R8.ActionMenuPlaceholder, {}) }),
        /* @__PURE__ */ x.jsx(L8, { accessGroups: d })
      ] }) })
    ] }),
    /* @__PURE__ */ x.jsx(Ur, { $space: 24, $samespace: !0 }),
    /* @__PURE__ */ x.jsx(An.Text, { type: "secondary", children: "Added Products" }),
    /* @__PURE__ */ x.jsx(Ur, { $space: 12, $samespace: !0 }),
    /* @__PURE__ */ x.jsxs(st, { gap: 22, wrap: !0, children: [
      _ && /* @__PURE__ */ x.jsx(vo, {}),
      e && t && v?.items.map(({ spec: T }) => T).sort().map(({ name: T, description: q, icon: J, type: oe, pathToNav: ae, typeName: he, apiGroup: de, apiVersion: Ae, tags: fe, disabled: Be }) => /* @__PURE__ */ x.jsx(
        Hg,
        {
          baseprefix: f,
          description: q,
          disabled: Be,
          icon: J,
          isEditMode: !1,
          name: T,
          clusterName: e,
          namespace: t,
          type: oe,
          pathToNav: ae,
          typeName: he,
          apiGroup: de,
          apiVersion: Ae,
          tags: fe,
          addedMode: !0
        },
        T
      ))
    ] }),
    D && /* @__PURE__ */ x.jsx(
      L0,
      {
        name: A.metadata.name,
        onClose: () => {
          j(!1), p(`${f}/clusters/${e}`);
        },
        endpoint: `/api/clusters/${e}/k8s/apis/${o}/${a}/${l}/${A.metadata.name}`
      }
    )
  ] });
}, Rl = ({
  items: e,
  components: t
}) => /* @__PURE__ */ x.jsx(x.Fragment, { children: e.map((n, i) => {
  const o = t[n.type];
  if (!o)
    return /* @__PURE__ */ x.jsxs("div", { children: [
      "❌ No component registered for type: ",
      String(n.type)
    ] }, i);
  let a = n.data;
  if (typeof n.data == "object" && n.data !== null && "items" in n.data && Array.isArray(n.data.items)) {
    const { items: l, ...f } = n.data;
    a = {
      ...f,
      items: l.map((d) => ({
        ...d,
        children: Array.isArray(d.children) ? /* @__PURE__ */ x.jsx(Rl, { items: d.children, components: t }) : d.children
      }))
    };
  }
  const u = n.children ? /* @__PURE__ */ x.jsx(Rl, { items: n.children, components: t }) : null;
  return /* @__PURE__ */ x.jsx(zv, { children: /* @__PURE__ */ x.jsx(o, { data: a, children: u }) }, i);
}) }), N8 = (e) => /* @__PURE__ */ x.jsx(Rl, { ...e }), $8 = ({
  data: e,
  children: t
}) => {
  const { id: n, text: i, ...o } = e;
  return /* @__PURE__ */ x.jsxs(An.Text, { ...o, children: [
    i,
    t
  ] });
}, M8 = ({
  data: e,
  children: t
}) => {
  const { id: n, ...i } = e;
  return /* @__PURE__ */ x.jsx($l, { ...i, children: t });
}, U8 = ({
  data: e,
  children: t
}) => {
  const { id: n, ...i } = e;
  return /* @__PURE__ */ x.jsx(st, { ...i, children: t });
}, V8 = ({ data: e, children: t }) => {
  const { id: n, ...i } = e;
  return /* @__PURE__ */ x.jsx(Rp, { ...i, children: t });
}, q8 = ({ data: e, children: t }) => {
  const { id: n, ...i } = e;
  return /* @__PURE__ */ x.jsx(hl, { ...i, children: t });
}, W8 = ({
  data: e,
  children: t
}) => {
  const { id: n, ...i } = e;
  return /* @__PURE__ */ x.jsx(tx, { ...i, children: t });
}, K8 = ({
  data: e,
  children: t
}) => {
  const { id: n, text: i, ...o } = e;
  return /* @__PURE__ */ x.jsxs(St, { ...o, children: [
    e.text,
    t
  ] });
}, H8 = () => {
  const e = Nl(null);
  return {
    Provider: ({ children: i, value: o }) => {
      const a = Oo(() => o, Object.values(o));
      return /* @__PURE__ */ x.jsx(e.Provider, { value: a, children: i });
    },
    useTypedContext: () => {
      const i = cu(e);
      if (!i)
        throw new Error("useTypedContext must be used within a Provider");
      return i;
    }
  };
}, zg = H8(), z8 = zg.Provider, Iu = zg.useTypedContext, G8 = ({ data: e }) => {
  const n = Iu().partsOfUrl.reduce((o, a, u) => (o[u.toString()] = a, o), {}), i = Ot({
    template: e.text,
    replaceValues: n
  });
  return /* @__PURE__ */ x.jsx("span", { children: i });
}, Gg = Nl(void 0), J8 = ({ urls: e, children: t }) => {
  const n = yx({
    queries: e.map((f, d) => ({
      queryKey: ["multi", d, f],
      queryFn: async () => (await nt.get(f)).data
    }))
  }), i = {}, o = [];
  n.forEach((f, d) => {
    i[`req${d}`] = f.data, o[d] = f.error ?? null;
  });
  const a = n.some((f) => f.isLoading), u = n.some((f) => f.isError), l = Oo(
    () => ({ data: i, isLoading: a, isError: u, errors: o }),
    /*
      We use JSON.stringify(data) and JSON.stringify(errors) as dependencies to safely memoize when values deeply change (since data is a new object every render).
      Alternatively, you could use a deep comparison hook or lodash.isEqual if needed.
    */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(i), a, u, JSON.stringify(o)]
  );
  return /* @__PURE__ */ x.jsx(Gg.Provider, { value: l, children: t });
}, wf = () => {
  const e = cu(Gg);
  if (!e)
    throw new Error("useMultiQuery must be used within a MultiQueryProvider");
  return e;
}, Y8 = ({ data: e }) => {
  const { data: t, isLoading: n, isError: i, errors: o } = wf(), a = Oo(() => e?.text ? e.text.replace(/\{reqs\[(\d+)\]\[((?:\s*['"][^'"]+['"]\s*,?)+)\]\}/g, (u, l, f) => {
    try {
      const d = parseInt(l, 10), g = Array.from(f.matchAll(/['"]([^'"]+)['"]/g)).map(
        (v) => v[1]
      ), p = Li.get(t[`req${d}`], g);
      return p != null ? String(p) : "";
    } catch {
      return u;
    }
  }) : "", [e?.text, t]);
  return n ? /* @__PURE__ */ x.jsx("div", { children: "Loading..." }) : i ? /* @__PURE__ */ x.jsxs("div", { children: [
    /* @__PURE__ */ x.jsx("h4", { children: "Errors:" }),
    /* @__PURE__ */ x.jsx("ul", { children: o.map((u, l) => u && /* @__PURE__ */ x.jsx("li", { children: u.message }, l)) })
  ] }) : /* @__PURE__ */ x.jsx("span", { children: a });
}, X8 = ({ data: e }) => {
  const { data: t, isLoading: n, isError: i, errors: o } = wf(), a = Iu(), u = Oo(() => e?.text ? e.text.replace(/\{reqs\[(\d+)\]\[((?:\s*['"][^'"]+['"]\s*,?)+)\]\}/g, (d, g, p) => {
    try {
      const v = parseInt(g, 10), _ = Array.from(p.matchAll(/['"]([^'"]+)['"]/g)).map(
        (E) => E[1]
      ), A = Li.get(t[`req${v}`], _);
      return A != null ? String(A) : "";
    } catch {
      return d;
    }
  }) : "", [e?.text, t]);
  if (n)
    return /* @__PURE__ */ x.jsx("div", { children: "Loading..." });
  if (i)
    return /* @__PURE__ */ x.jsxs("div", { children: [
      /* @__PURE__ */ x.jsx("h4", { children: "Errors:" }),
      /* @__PURE__ */ x.jsx("ul", { children: o.map((d, g) => d && /* @__PURE__ */ x.jsx("li", { children: d.message }, g)) })
    ] });
  const l = a.partsOfUrl.reduce((d, g, p) => (d[p.toString()] = g, d), {}), f = Ot({
    template: u,
    replaceValues: l
  });
  return /* @__PURE__ */ x.jsx("span", { children: f });
}, Q8 = ({
  data: e,
  children: t
}) => {
  const { id: n, clusterNamePartOfUrl: i, namespacePartOfUrl: o, ...a } = e, l = Iu().partsOfUrl.reduce((g, p, v) => (g[v.toString()] = p, g), {}), f = Ot({
    template: i,
    replaceValues: l
  }), d = Ot({
    template: o,
    replaceValues: l
  });
  return /* @__PURE__ */ x.jsx(j8, { clusterName: f, namespace: d, ...a, children: t });
}, Z8 = ({
  data: e,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  children: t
}) => {
  const { id: n, clusterNamePartOfUrl: i, namespacePartOfUrl: o, ...a } = e, l = Iu().partsOfUrl.reduce((g, p, v) => (g[v.toString()] = p, g), {}), f = Ot({
    template: i,
    replaceValues: l
  }), d = Ot({
    template: o,
    replaceValues: l
  });
  return /* @__PURE__ */ x.jsx(B8, { clusterName: f, namespace: d, ...a });
}, e4 = ({
  data: e,
  children: t
}) => {
  const { id: n, ...i } = e;
  return /* @__PURE__ */ x.jsx(gS, { ...i, children: t });
}, t4 = ({ data: e, children: t }) => {
  const { id: n, ...i } = e;
  return /* @__PURE__ */ x.jsx(Ur, { ...i });
}, n4 = ({
  data: e,
  children: t
}) => {
  const { id: n, ...i } = e;
  return /* @__PURE__ */ x.jsx("div", { ...i, children: t });
}, r4 = ({
  data: e,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  children: t
}) => {
  const { id: n, requestIndex: i, jsonPath: o, criteria: a, valueToCompare: u, successText: l, errorText: f, ...d } = e, { data: g, isLoading: p, isError: v, errors: _ } = wf();
  let A;
  try {
    [A] = N0.query(g[`req${i}`], `$${o}`);
  } catch (b) {
    return /* @__PURE__ */ x.jsxs("div", { children: [
      /* @__PURE__ */ x.jsx("h4", { children: "Errors:" }),
      /* @__PURE__ */ x.jsx("ul", { children: JSON.stringify(b) })
    ] });
  }
  const E = a === "equals" ? u === A : u !== A;
  return p ? /* @__PURE__ */ x.jsx("div", { children: "Loading..." }) : v ? /* @__PURE__ */ x.jsxs("div", { children: [
    /* @__PURE__ */ x.jsx("h4", { children: "Errors:" }),
    /* @__PURE__ */ x.jsx("ul", { children: _.map((b, D) => b && /* @__PURE__ */ x.jsx("li", { children: b.message }, D)) })
  ] }) : /* @__PURE__ */ x.jsxs(An.Text, { type: E ? "success" : "danger", ...d, children: [
    E ? l : f,
    t
  ] });
}, Y4 = {
  DefaultDiv: n4,
  antdText: $8,
  antdCard: M8,
  antdFlex: U8,
  antdRow: V8,
  antdCol: q8,
  antdTabs: W8,
  antdButton: K8,
  partsOfUrl: G8,
  multiQuery: Y8,
  parsedText: X8,
  ProjectInfoCard: Q8,
  MarketplaceCard: Z8,
  ContentCard: e4,
  Spacer: t4,
  StatusText: r4
}, i4 = ({
  urls: e,
  locationPathname: t
}) => {
  const n = t.split("/").reduce((i, o, a) => (i[a.toString()] = o, i), {});
  return e.map(
    (i) => Ot({
      template: i,
      replaceValues: n
    })
  );
}, X4 = (e) => {
  const t = mx(), { urlsToFetch: n } = e, i = i4({
    urls: n,
    locationPathname: t.pathname
  });
  return /* @__PURE__ */ x.jsx(z8, { value: { partsOfUrl: t.pathname.split("/") }, children: /* @__PURE__ */ x.jsx(J8, { urls: i, children: /* @__PURE__ */ x.jsx(N8, { ...e }) }) });
}, s4 = (e) => typeof e == "object" && "value" in e && "highlight" in e, Q4 = (e) => {
  const t = {};
  e.forEach(({ apis: i, highlightString: o }) => {
    i.forEach((a) => {
      const [u, l] = a.split("/"), f = u.split(".");
      if (f.length < 2) return;
      const d = f.slice(-2).join("."), g = f.slice(0, -2).reverse();
      let p = t[d] = t[d] || {};
      for (const v of g)
        p[v] = p[v] || {}, p = p[v];
      p[l] = {
        value: a,
        // highlight: api.includes(highlightString),
        highlight: a === o
      };
    });
  });
  const n = (i, o = "") => Object.entries(i).map(([a, u]) => {
    const l = o ? `${o}.${a}` : a;
    if (s4(u))
      return {
        // title: value.highlight ? <span style={{ color: 'red' }}>{value.value}</span> : value.value,
        title: u.highlight ? `${u.value} (pref)` : u.value,
        key: u.value,
        isLeaf: !0
      };
    const f = n(u, l);
    return {
      title: a,
      key: l,
      children: f,
      isLeaf: f.length === 0
    };
  });
  return Object.entries(t).map(([i, o]) => ({
    title: i,
    key: i,
    children: n(o, i),
    isLeaf: !1
  }));
}, Z4 = (e) => e.map((t) => ({
  title: `${t} (pref)`,
  key: t,
  isLeaf: !0
})), e5 = ({
  swagger: e,
  apiGroupListData: t,
  builtinResourceTypesData: n,
  namespace: i,
  noncrds: o = ["apps", "autoscaling", "batch", "policy"]
}) => {
  const a = t?.groups?.find(({ name: d }) => d === "apiextensions.k8s.io")?.preferredVersion.version, u = t?.groups.filter(({ name: d }) => !o.includes(d) && !d.includes(".k8s.io")).sort((d, g) => d.name.localeCompare(g.name)), l = t?.groups.filter(({ name: d }) => o.includes(d) || d.includes(".k8s.io")).sort((d, g) => d.name.localeCompare(g.name)), f = i && e ? n?.resources?.filter(
    ({ name: d }) => Kg({ typeName: d, swagger: e }).isNamespaceScoped
  ) : n?.resources;
  return { crdGroups: u, nonCrdGroups: l, builtinGroups: f, apiExtensionVersion: a };
}, t5 = ({
  data: e,
  clusterName: t,
  projectName: n,
  instanceName: i,
  namespace: o,
  syntheticProject: a,
  entryType: u,
  apiGroup: l,
  apiVersion: f,
  typeName: d,
  entryName: g,
  apiExtensionVersion: p,
  crdName: v,
  pathname: _
}) => e.map(({ pathToMatch: E, pathToNavigate: b, keysToParse: D }) => ({
  pathToMatch: E ? Ot({
    template: E,
    replaceValues: {
      clusterName: t,
      projectName: n,
      instanceName: i,
      namespace: o,
      syntheticProject: a,
      entryType: u,
      apiGroup: l,
      apiVersion: f,
      typeName: d,
      entryName: g,
      apiExtensionVersion: p,
      crdName: v
    }
  }) : void 0,
  pathToNavigate: b ? Ot({
    template: b,
    replaceValues: {
      clusterName: t,
      projectName: n,
      instanceName: i,
      namespace: o,
      syntheticProject: a,
      entryType: u,
      apiGroup: l,
      apiVersion: f,
      typeName: d,
      entryName: g,
      apiExtensionVersion: p,
      crdName: v
    }
  }) : void 0,
  keysToParse: D
})).find(({ pathToMatch: E }) => E ? Ml(E, _) : !1), o4 = (e) => !!(typeof e == "object" && !Array.isArray(e) && e !== null && e.spec && typeof e.spec == "object" && !Array.isArray(e.spec) && e.spec !== null && Array.isArray(e.spec.additionalPrinterColumns) && e.spec.additionalPrinterColumns.every(
  (t) => Object.keys(t).includes("name") && Object.keys(t).includes("jsonPath")
)), a4 = (e) => !!(typeof e == "object" && !Array.isArray(e) && e !== null && e.spec && typeof e.spec == "object" && !Array.isArray(e.spec) && e.spec !== null && Array.isArray(e.spec.additionalPrinterColumnsUndefinedValues) && e.spec.additionalPrinterColumnsUndefinedValues.every(
  (t) => Object.keys(t).includes("key") && Object.keys(t).includes("value")
)), u4 = (e) => !!(typeof e == "object" && !Array.isArray(e) && e !== null && e.spec && typeof e.spec == "object" && !Array.isArray(e.spec) && e.spec !== null && Array.isArray(e.spec.additionalPrinterColumnsTrimLengths) && e.spec.additionalPrinterColumnsTrimLengths.every(
  (t) => Object.keys(t).includes("key") && Object.keys(t).includes("value")
)), c4 = (e) => !!(typeof e == "object" && !Array.isArray(e) && e !== null && e.spec && typeof e.spec == "object" && !Array.isArray(e.spec) && e.spec !== null && Array.isArray(e.spec.additionalPrinterColumnsColWidths) && e.spec.additionalPrinterColumnsColWidths.every(
  (t) => Object.keys(t).includes("key") && Object.keys(t).includes("value")
)), n5 = ({
  columnsOverridesData: e,
  overrideType: t
}) => {
  const n = e?.items.find(
    (l) => typeof l == "object" && !Array.isArray(l) && l !== null && l.spec && typeof l.spec == "object" && !Array.isArray(l.spec) && l.spec !== null && typeof l.spec.overrideType == "string" && l.spec.overrideType === t
  ), i = o4(n) ? n.spec.additionalPrinterColumns : void 0, o = a4(n) ? n.spec.additionalPrinterColumnsUndefinedValues : void 0, a = u4(n) ? n.spec.additionalPrinterColumnsTrimLengths : void 0, u = c4(n) ? n.spec.additionalPrinterColumnsColWidths : void 0;
  return {
    ensuredCustomOverrides: i,
    ensuredCustomOverridesUndefinedValues: o,
    ensuredCustomOverridesTrimLengths: a,
    ensuredCustomOverridesColWidths: u
  };
}, r5 = async ({
  clusterName: e
}) => nt.get(`/api/clusters/${e}/k8s/openapi/v2`), l4 = async () => nt.get("/clusterlist"), f4 = async ({
  clusterName: e,
  namespace: t,
  apiGroup: n,
  apiVersion: i,
  typeName: o,
  limit: a
}) => {
  const u = a !== null ? `?limit=${a}` : "";
  return nt.get(
    `/api/clusters/${e}/k8s/apis/${n}/${i}${t ? `/namespaces/${t}` : ""}/${o}${u}`
  );
}, h4 = async ({
  clusterName: e,
  namespace: t,
  apiGroup: n,
  apiVersion: i,
  typeName: o,
  entryName: a
}) => nt.get(
  `/api/clusters/${e}/k8s/apis/${n}/${i}${t ? `/namespaces/${t}` : ""}/${o}/${a}`
), d4 = async ({
  clusterName: e,
  namespace: t,
  typeName: n,
  limit: i
}) => {
  const o = i !== null ? `?limit=${i}` : "";
  return nt.get(
    `/api/clusters/${e}/k8s/api/v1${t ? `/namespaces/${t}` : ""}/${n}${o}`
  );
}, p4 = async ({
  clusterName: e,
  namespace: t,
  typeName: n,
  entryName: i
}) => nt.get(
  `/api/clusters/${e}/k8s/api/v1${t ? `/namespaces/${t}` : ""}/${n}/${i}`
), g4 = async ({
  clusterName: e,
  namespace: t,
  apiGroup: n,
  apiVersion: i,
  crdName: o
}) => nt.get(
  `/api/clusters/${e}/k8s/apis/${n}/${i}${t ? `/namespaces/${t}` : ""}/${o}`
), y4 = async ({
  clusterName: e,
  namespace: t,
  apiGroup: n,
  apiVersion: i,
  crdName: o,
  entryName: a
}) => nt.get(
  `/api/clusters/${e}/k8s/apis/${n}/${i}${t ? `/namespaces/${t}` : ""}/${o}/${a}`
), m4 = async ({ clusterName: e }) => nt.get(`/api/clusters/${e}/k8s/apis/`), w4 = async ({
  clusterName: e,
  apiGroup: t,
  apiVersion: n
}) => nt.get(`/api/clusters/${e}/k8s/apis/${t}/${n}/`), b4 = async ({
  clusterName: e
}) => nt.get(`/api/clusters/${e}/k8s/api/v1`), v4 = async ({
  clusterName: e,
  apiExtensionVersion: t,
  crdName: n
}) => nt.get(
  `/api/clusters/${e}/k8s/apis/apiextensions.k8s.io/${t}/customresourcedefinitions/${n}`
), i5 = ({ refetchInterval: e }) => Mn({
  queryKey: ["useClusterList"],
  queryFn: async () => (await l4()).data,
  refetchInterval: e !== void 0 ? e : 5e3
}), s5 = ({
  clusterName: e,
  namespace: t,
  apiGroup: n,
  apiVersion: i,
  typeName: o,
  limit: a,
  refetchInterval: u
}) => Mn({
  queryKey: ["useApiResources", e, t, n, i, o, a],
  queryFn: async () => {
    const l = await f4({
      clusterName: e,
      namespace: t,
      apiGroup: n,
      apiVersion: i,
      typeName: o,
      limit: a
    }), f = JSON.parse(JSON.stringify(l.data));
    return f.metadata?.resourceVersion && delete f.metadata.resourceVersion, f;
  },
  refetchInterval: u !== void 0 ? u : 5e3
}), o5 = ({
  clusterName: e,
  namespace: t,
  apiGroup: n,
  apiVersion: i,
  typeName: o,
  entryName: a,
  refetchInterval: u
}) => Mn({
  queryKey: ["useApiResourceSingle", e, t, n, i, o, a],
  queryFn: async () => (await h4({
    clusterName: e,
    namespace: t,
    apiGroup: n,
    apiVersion: i,
    typeName: o,
    entryName: a
  })).data,
  refetchInterval: u !== void 0 ? u : 5e3
}), a5 = ({
  clusterName: e,
  namespace: t,
  typeName: n,
  limit: i,
  refetchInterval: o
}) => Mn({
  queryKey: ["useBuiltinResourceType", e, t, n, i],
  queryFn: async () => {
    const a = await d4({ clusterName: e, namespace: t, typeName: n, limit: i }), u = JSON.parse(JSON.stringify(a.data));
    return u.metadata?.resourceVersion && delete u.metadata.resourceVersion, u;
  },
  refetchInterval: o !== void 0 ? o : 5e3
}), u5 = ({
  clusterName: e,
  namespace: t,
  typeName: n,
  entryName: i,
  refetchInterval: o
}) => Mn({
  queryKey: ["useBuiltinResourceSingle", e, t, n, i],
  queryFn: async () => (await p4({ clusterName: e, namespace: t, typeName: n, entryName: i })).data,
  refetchInterval: o !== void 0 ? o : 5e3
}), c5 = ({
  clusterName: e,
  namespace: t,
  apiGroup: n,
  apiVersion: i,
  crdName: o,
  refetchInterval: a
}) => Mn({
  queryKey: ["useCrdResources", e, t, n, i, o],
  queryFn: async () => {
    const u = await g4({
      clusterName: e,
      namespace: t,
      apiGroup: n,
      apiVersion: i,
      crdName: o
    }), l = JSON.parse(JSON.stringify(u.data));
    return l.metadata?.resourceVersion && delete l.metadata.resourceVersion, l;
  },
  refetchInterval: a !== void 0 ? a : 5e3
}), l5 = ({
  clusterName: e,
  namespace: t,
  apiGroup: n,
  apiVersion: i,
  crdName: o,
  entryName: a,
  refetchInterval: u
}) => Mn({
  queryKey: ["useCrdResourceSingle", e, t, n, i, o, a],
  queryFn: async () => (await y4({
    clusterName: e,
    namespace: t,
    apiGroup: n,
    apiVersion: i,
    crdName: o,
    entryName: a
  })).data,
  refetchInterval: u !== void 0 ? u : 5e3
}), f5 = ({ clusterName: e }) => Mn({
  queryKey: ["useApisResourceTypes", e],
  queryFn: async () => {
    const t = await m4({ clusterName: e }), n = JSON.parse(JSON.stringify(t.data));
    return n.metadata?.resourceVersion && delete n.metadata.resourceVersion, n;
  },
  refetchInterval: 5e3
}), h5 = ({
  clusterName: e,
  apiGroup: t,
  apiVersion: n
}) => Mn({
  queryKey: ["useApiResourceTypesByGroup", e, t, n],
  queryFn: async () => {
    const i = await w4({
      clusterName: e,
      apiGroup: t,
      apiVersion: n
    }), o = JSON.parse(JSON.stringify(i.data));
    return o.metadata?.resourceVersion && delete o.metadata.resourceVersion, o;
  },
  refetchInterval: 5e3
}), d5 = ({ clusterName: e }) => Mn({
  queryKey: ["useBuiltinResourceTypes", e],
  queryFn: async () => {
    const t = await b4({ clusterName: e }), n = JSON.parse(JSON.stringify(t.data));
    return n.metadata?.resourceVersion && delete n.metadata.resourceVersion, n;
  },
  refetchInterval: 5e3
}), p5 = ({
  clusterName: e,
  apiExtensionVersion: t,
  crdName: n
}) => Mn({
  queryKey: ["useCrdData", e, t, n],
  queryFn: async () => {
    const i = await v4({
      clusterName: e,
      apiExtensionVersion: t,
      crdName: n
    }), o = JSON.parse(JSON.stringify(i.data));
    return o.metadata?.resourceVersion && delete o.metadata.resourceVersion, o;
  },
  refetchInterval: 5e3
});
export {
  uS as BackToDefaultIcon,
  t8 as BlackholeForm,
  J4 as BlackholeFormDataProvider,
  gS as ContentCard,
  iS as DeleteIcon,
  L0 as DeleteModal,
  W4 as DeleteModalMany,
  aS as DownIcon,
  Y4 as DynamicComponents,
  N8 as DynamicRenderer,
  X4 as DynamicRendererWithProviders,
  sS as EditIcon,
  PS as EnrichedTable,
  z4 as EnrichedTableProvider,
  fS as LockedIcon,
  vS as ManageableBreadcrumbs,
  K4 as ManageableBreadcrumbsWithDataProvider,
  CS as ManageableSidebar,
  H4 as ManageableSidebarWithDataProvider,
  B8 as MarketPlace,
  Hg as MarketplaceCard,
  gn as MinusIcon,
  P0 as PlusIcon,
  j8 as ProjectInfoCard,
  Ur as Spacer,
  cS as SuccessIcon,
  _4 as TreeWithSearch,
  hS as UnlockedIcon,
  oS as UpIcon,
  i8 as checkIfApiInstanceNamespaceScoped,
  Kg as checkIfBuiltInInstanceNamespaceScoped,
  iC as checkPermission,
  H8 as createContextFactory,
  Xl as createNewEntry,
  D0 as deleteEntry,
  Ni as feedbackIcons,
  $0 as filterSelectOptions,
  su as floorToDecimal,
  V0 as getAllPathsFromObj,
  h4 as getApiResourceSingle,
  m4 as getApiResourceTypes,
  w4 as getApiResourceTypesByApiGroup,
  f4 as getApiResources,
  a8 as getBodyParametersSchema,
  p4 as getBuiltinResourceSingle,
  b4 as getBuiltinResourceTypes,
  d4 as getBuiltinResources,
  Z4 as getBuiltinTreeData,
  l4 as getClusterList,
  v4 as getCrdData,
  y4 as getCrdResourceSingle,
  g4 as getCrdResources,
  yS as getDirectUnknownResource,
  DS as getEnrichedColumns,
  LS as getEnrichedColumnsWithControls,
  e5 as getGroupsByCategory,
  mf as getObjectFormItemsDraft,
  sC as getPrefixSubarrays,
  Pt as getStringByName,
  r5 as getSwagger,
  o8 as getSwaggerPathAndIsNamespaceScoped,
  Q4 as groupsToTreeData,
  BS as isFlatObject,
  s8 as isFormOverride,
  o4 as isWithAdditionalPrinterColumns,
  c4 as isWithAdditionalPrinterColumnsColWidths,
  u4 as isWithAdditionalPrinterColumnsTrimLengths,
  a4 as isWithAdditionalPrinterColumnsUndefinedValues,
  Zc as normalizeValuesForQuotas,
  hp as normalizeValuesForQuotasToNumber,
  r8 as overwriteMatchingKeys,
  n5 as parseCustomOverrides,
  G4 as parseQuotaValue,
  M0 as parseQuotaValueCpu,
  U0 as parseQuotaValueMemoryAndStorage,
  jS as prepareDataForEnrichedColumns,
  wS as prepareDataForManageableBreadcrumbs,
  AS as prepareDataForManageableSidebar,
  t5 as prepareTableMappings,
  Ot as prepareTemplate,
  i4 as prepareUrlsToFetchForDynamicRenderer,
  u8 as processOverride,
  Ya as removeEmptyFormValues,
  yo as renameBrokenFieldBack,
  Tl as renameBrokenFieldBackToFormAgain,
  Ql as updateEntry,
  o5 as useApiResourceSingle,
  h5 as useApiResourceTypesByGroup,
  s5 as useApiResources,
  f5 as useApisResourceTypes,
  u5 as useBuiltinResourceSingle,
  d5 as useBuiltinResourceTypes,
  a5 as useBuiltinResources,
  i5 as useClusterList,
  p5 as useCrdData,
  l5 as useCrdResourceSingle,
  c5 as useCrdResources,
  fn as useDirectUnknownResource,
  Pi as usePermissions
};
//# sourceMappingURL=openapi-k8s-toolkit.es.js.map
