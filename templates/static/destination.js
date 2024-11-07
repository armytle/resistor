// Copyright 2012 Google Inc. All rights reserved.

(function() {

  var data = {
      "resource": {
          "version": "1",

          "macros": [{
              "function": "__e"
          }],
          "tags": [{
              "function": "__rep",
              "vtp_containerId": "DC-13082624",
              "vtp_remoteConfig": ["map"],
              "tag_id": 1
          }, {
              "function": "__ogt_1p_data_v2",
              "priority": 0,
              "vtp_isAutoEnabled": true,
              "vtp_autoCollectExclusionSelectors": ["list", ["map", "exclusionSelector", ""]],
              "vtp_isEnabled": true,
              "vtp_cityType": "CSS_SELECTOR",
              "vtp_manualEmailEnabled": false,
              "vtp_firstNameType": "CSS_SELECTOR",
              "vtp_countryType": "CSS_SELECTOR",
              "vtp_cityValue": "",
              "vtp_emailType": "CSS_SELECTOR",
              "vtp_regionType": "CSS_SELECTOR",
              "vtp_autoEmailEnabled": true,
              "vtp_postalCodeValue": "",
              "vtp_lastNameValue": "",
              "vtp_phoneType": "CSS_SELECTOR",
              "vtp_phoneValue": "",
              "vtp_streetType": "CSS_SELECTOR",
              "vtp_autoPhoneEnabled": false,
              "vtp_postalCodeType": "CSS_SELECTOR",
              "vtp_emailValue": "",
              "vtp_firstNameValue": "",
              "vtp_streetValue": "",
              "vtp_lastNameType": "CSS_SELECTOR",
              "vtp_autoAddressEnabled": false,
              "vtp_regionValue": "",
              "vtp_countryValue": "",
              "vtp_isAutoCollectPiiEnabledFlag": false,
              "tag_id": 4
          }],
          "predicates": [{
              "function": "_eq",
              "arg0": ["macro", 0],
              "arg1": "gtm.js"
          }, {
              "function": "_eq",
              "arg0": ["macro", 0],
              "arg1": "gtm.init"
          }],
          "rules": [[["if", 0], ["add", 0]], [["if", 1], ["add", 1]]]
      },
      "runtime": [[50, "__e", [46, "a"], [36, [13, [41, "$0"], [3, "$0", ["require", "internal.getEventData"]], ["$0", "event"]]]], [50, "__ogt_1p_data_v2", [46, "a"], [50, "k", [46, "n", "o", "p"], [22, [20, [16, [15, "o"], "type"], [15, "p"]], [46, [22, [28, [15, "n"]], [46, [3, "n", [8]]]], [22, [28, [16, [15, "n"], [15, "p"]]], [46, [43, [15, "n"], [15, "p"], [16, [15, "o"], "userData"]]]]]], [36, [15, "n"]]], [50, "l", [46, "n", "o"], [52, "p", [16, [15, "a"], [15, "n"]]], [41, "q"], [22, [20, [15, "p"], "CSS_SELECTOR"], [46, [3, "q", "css_selector"]], [46, [22, [20, [15, "p"], "JS_VAR"], [46, [3, "q", "js_variable"]]]]], [36, [8, "selector_type", [15, "q"], "value", [16, [15, "a"], [15, "o"]]]]], [50, "m", [46, "n", "o", "p", "q"], [22, [28, [16, [15, "a"], [15, "q"]]], [46, [36]]], [43, [15, "n"], [15, "o"], ["l", [15, "p"], [15, "q"]]]], [22, [28, [17, [15, "a"], "isEnabled"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "b", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "c", ["require", "internal.getDestinationIds"]], [52, "d", ["require", "internal.getProductSettingsParameter"]], [52, "e", ["require", "internal.detectUserProvidedData"]], [52, "f", ["require", "queryPermission"]], [52, "g", ["require", "internal.setRemoteConfigParameter"]], [52, "h", ["require", "internal.registerCcdCallback"]], [52, "i", [30, ["c"], [7]]], [52, "j", [8, "enable_code", true]], [22, [17, [15, "a"], "isAutoEnabled"], [46, [53, [52, "n", [7]], [22, [1, [17, [15, "a"], "autoCollectExclusionSelectors"], [17, [17, [15, "a"], "autoCollectExclusionSelectors"], "length"]], [46, [53, [41, "q"], [3, "q", 0], [63, [7, "q"], [23, [15, "q"], [17, [17, [15, "a"], "autoCollectExclusionSelectors"], "length"]], [33, [15, "q"], [3, "q", [0, [15, "q"], 1]]], [46, [53, [52, "r", [17, [16, [17, [15, "a"], "autoCollectExclusionSelectors"], [15, "q"]], "exclusionSelector"]], [22, [15, "r"], [46, [2, [15, "n"], "push", [7, [15, "r"]]]]]]]]]]], [52, "o", [30, [16, [15, "b"], "enableAutoPhoneAndAddressDetection"], [17, [15, "a"], "isAutoCollectPiiEnabledFlag"]]], [52, "p", [39, [17, [15, "a"], "isAutoCollectPiiEnabledFlag"], [17, [15, "a"], "autoEmailEnabled"], true]], [43, [15, "j"], "auto_detect", [8, "email", [15, "p"], "phone", [1, [15, "o"], [17, [15, "a"], "autoPhoneEnabled"]], "address", [1, [15, "o"], [17, [15, "a"], "autoAddressEnabled"]], "exclude_element_selectors", [15, "n"]]]]]], [22, [17, [15, "a"], "isManualEnabled"], [46, [53, [52, "n", [8]], [22, [17, [15, "a"], "manualEmailEnabled"], [46, ["m", [15, "n"], "email", "emailType", "emailValue"]]], [22, [17, [15, "a"], "manualPhoneEnabled"], [46, ["m", [15, "n"], "phone", "phoneType", "phoneValue"]]], [22, [17, [15, "a"], "manualAddressEnabled"], [46, [53, [52, "o", [8]], ["m", [15, "o"], "first_name", "firstNameType", "firstNameValue"], ["m", [15, "o"], "last_name", "lastNameType", "lastNameValue"], ["m", [15, "o"], "street", "streetType", "streetValue"], ["m", [15, "o"], "city", "cityType", "cityValue"], ["m", [15, "o"], "region", "regionType", "regionValue"], ["m", [15, "o"], "country", "countryType", "countryValue"], ["m", [15, "o"], "postal_code", "postalCodeType", "postalCodeValue"], [43, [15, "n"], "name_and_address", [7, [15, "o"]]]]]], [43, [15, "j"], "selectors", [15, "n"]]]]], [65, "n", [15, "i"], [46, [53, ["g", [15, "n"], "user_data_settings", [15, "j"]], [52, "o", [16, [15, "j"], "auto_detect"]], [22, [28, [15, "o"]], [46, [6]]], [52, "p", [51, "", [7, "q"], [52, "r", [2, [15, "q"], "getMetadata", [7, "user_data_from_automatic"]]], [22, [15, "r"], [46, [36, [15, "r"]]]], [41, "s"], [22, ["f", "detect_user_provided_data", "auto"], [46, [3, "s", ["e", [8, "excludeElementSelectors", [16, [15, "o"], "exclude_element_selectors"], "fieldFilters", [8, "email", [16, [15, "o"], "email"], "phone", [16, [15, "o"], "phone"], "address", [16, [15, "o"], "address"]]]]]]], [52, "t", [1, [15, "s"], [16, [15, "s"], "elements"]]], [52, "u", [8]], [22, [1, [15, "t"], [18, [17, [15, "t"], "length"], 0]], [46, [53, [41, "v"], [53, [41, "w"], [3, "w", 0], [63, [7, "w"], [23, [15, "w"], [17, [15, "t"], "length"]], [33, [15, "w"], [3, "w", [0, [15, "w"], 1]]], [46, [53, [52, "x", [16, [15, "t"], [15, "w"]]], ["k", [15, "u"], [15, "x"], "email"], [22, [16, [15, "b"], "enableAutoPiiOnPhoneAndAddress"], [46, ["k", [15, "u"], [15, "x"], "phone_number"], [3, "v", ["k", [15, "v"], [15, "x"], "first_name"]], [3, "v", ["k", [15, "v"], [15, "x"], "last_name"]], [3, "v", ["k", [15, "v"], [15, "x"], "country"]], [3, "v", ["k", [15, "v"], [15, "x"], "postal_code"]]]]]]]], [22, [1, [15, "v"], [28, [16, [15, "u"], "address"]]], [46, [43, [15, "u"], "address", [15, "v"]]]]]]], [2, [15, "q"], "setMetadata", [7, "user_data_from_automatic", [15, "u"]]], [36, [15, "u"]]]], ["h", [15, "n"], [51, "", [7, "q"], [2, [15, "q"], "setMetadata", [7, "user_data_from_automatic_getter", [15, "p"]]]]]]]], [2, [15, "a"], "gtmOnSuccess", [7]]]
      ],
      "entities": {
          "__e": {
              "2": true,
              "4": true
          },
          "__ogt_1p_data_v2": {
              "2": true
          }

      },
      "blob": {
          "1": "1"
      },
      "permissions": {
          "__e": {
              "read_event_data": {
                  "eventDataAccess": "specific",
                  "keyPatterns": ["event"]
              }
          },
          "__ogt_1p_data_v2": {
              "detect_user_provided_data": {
                  "limitDataSources": true,
                  "allowAutoDataSources": true,
                  "allowManualDataSources": false,
                  "allowCodeDataSources": false
              }
          }

      }
      ,
      "security_groups": {
          "google": ["__e", "__ogt_1p_data_v2"
          ]

      }

  };

  var aa, ba = function(a) {
      var b = 0;
      return function() {
          return b < a.length ? {
              done: !1,
              value: a[b++]
          } : {
              done: !0
          }
      }
  }, da = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
      if (a == Array.prototype || a == Object.prototype)
          return a;
      a[b] = c.value;
      return a
  }
  , ea = function(a) {
      for (var b = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global], c = 0; c < b.length; ++c) {
          var d = b[c];
          if (d && d.Math == Math)
              return d
      }
      throw Error("Cannot find global object");
  }, fa = ea(this), ha = function(a, b) {
      if (b)
          a: {
              for (var c = fa, d = a.split("."), e = 0; e < d.length - 1; e++) {
                  var f = d[e];
                  if (!(f in c))
                      break a;
                  c = c[f]
              }
              var g = d[d.length - 1]
                , k = c[g]
                , m = b(k);
              m != k && m != null && da(c, g, {
                  configurable: !0,
                  writable: !0,
                  value: m
              })
          }
  };
  ha("Symbol", function(a) {
      if (a)
          return a;
      var b = function(f, g) {
          this.j = f;
          da(this, "description", {
              configurable: !0,
              writable: !0,
              value: g
          })
      };
      b.prototype.toString = function() {
          return this.j
      }
      ;
      var c = "jscomp_symbol_" + (Math.random() * 1E9 >>> 0) + "_"
        , d = 0
        , e = function(f) {
          if (this instanceof e)
              throw new TypeError("Symbol is not a constructor");
          return new b(c + (f || "") + "_" + d++,f)
      };
      return e
  });
  var ka = function(a) {
      return ia(a, a)
  }
    , ia = function(a, b) {
      a.raw = b;
      Object.freeze && (Object.freeze(a),
      Object.freeze(b));
      return a
  }
    , h = function(a) {
      var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
      if (b)
          return b.call(a);
      if (typeof a.length == "number")
          return {
              next: ba(a)
          };
      throw Error(String(a) + " is not an iterable or ArrayLike");
  }
    , la = function(a) {
      for (var b, c = []; !(b = a.next()).done; )
          c.push(b.value);
      return c
  }
    , oa = function(a) {
      return a instanceof Array ? a : la(h(a))
  }
    , pa = typeof Object.assign == "function" ? Object.assign : function(a, b) {
      for (var c = 1; c < arguments.length; c++) {
          var d = arguments[c];
          if (d)
              for (var e in d)
                  Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
      }
      return a
  }
  ;
  ha("Object.assign", function(a) {
      return a || pa
  });
  var qa = typeof Object.create == "function" ? Object.create : function(a) {
      var b = function() {};
      b.prototype = a;
      return new b
  }
  , ra;
  if (typeof Object.setPrototypeOf == "function")
      ra = Object.setPrototypeOf;
  else {
      var sa;
      a: {
          var ta = {
              a: !0
          }
            , ua = {};
          try {
              ua.__proto__ = ta;
              sa = ua.a;
              break a
          } catch (a) {}
          sa = !1
      }
      ra = sa ? function(a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b)
              throw new TypeError(a + " is not extensible");
          return a
      }
      : null
  }
  var va = ra
    , wa = function(a, b) {
      a.prototype = qa(b.prototype);
      a.prototype.constructor = a;
      if (va)
          va(a, b);
      else
          for (var c in b)
              if (c != "prototype")
                  if (Object.defineProperties) {
                      var d = Object.getOwnPropertyDescriptor(b, c);
                      d && Object.defineProperty(a, c, d)
                  } else
                      a[c] = b[c];
      a.Yn = b.prototype
  }
    , ya = function() {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
          b[c - a] = arguments[c];
      return b
  };
  /*

Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/
  var za = this || self;
  var Aa = function(a, b) {
      this.type = a;
      this.data = b
  };
  var Ba = function() {
      this.map = {};
      this.C = {}
  };
  aa = Ba.prototype;
  aa.get = function(a) {
      return this.map["dust." + a]
  }
  ;
  aa.set = function(a, b) {
      var c = "dust." + a;
      this.C.hasOwnProperty(c) || (this.map[c] = b)
  }
  ;
  aa.ai = function(a, b) {
      this.set(a, b);
      this.C["dust." + a] = !0
  }
  ;
  aa.has = function(a) {
      return this.map.hasOwnProperty("dust." + a)
  }
  ;
  aa.remove = function(a) {
      var b = "dust." + a;
      this.C.hasOwnProperty(b) || delete this.map[b]
  }
  ;
  var Ca = function(a, b) {
      var c = [], d;
      for (d in a.map)
          if (a.map.hasOwnProperty(d)) {
              var e = d.substring(5);
              switch (b) {
              case 1:
                  c.push(e);
                  break;
              case 2:
                  c.push(a.map[d]);
                  break;
              case 3:
                  c.push([e, a.map[d]])
              }
          }
      return c
  };
  Ba.prototype.Ka = function() {
      return Ca(this, 1)
  }
  ;
  Ba.prototype.Bh = function() {
      return Ca(this, 2)
  }
  ;
  Ba.prototype.Tf = function() {
      return Ca(this, 3)
  }
  ;
  var Da = function() {};
  Da.prototype.reset = function() {}
  ;
  var Fa = function(a, b) {
      this.P = a;
      this.parent = b;
      this.j = this.C = void 0;
      this.K = !1;
      this.H = function(c, d, e) {
          return c.apply(d, e)
      }
      ;
      this.values = new Ba
  };
  Fa.prototype.add = function(a, b) {
      Ga(this, a, b, !1)
  }
  ;
  var Ga = function(a, b, c, d) {
      a.K || (d ? a.values.ai(b, c) : a.values.set(b, c))
  };
  Fa.prototype.set = function(a, b) {
      this.K || (!this.values.has(a) && this.parent && this.parent.has(a) ? this.parent.set(a, b) : this.values.set(a, b))
  }
  ;
  Fa.prototype.get = function(a) {
      return this.values.has(a) ? this.values.get(a) : this.parent ? this.parent.get(a) : void 0
  }
  ;
  Fa.prototype.has = function(a) {
      return !!this.values.has(a) || !(!this.parent || !this.parent.has(a))
  }
  ;
  var Ha = function(a) {
      var b = new Fa(a.P,a);
      a.C && (b.C = a.C);
      b.H = a.H;
      b.j = a.j;
      return b
  };
  Fa.prototype.wd = function() {
      return this.P
  }
  ;
  Fa.prototype.Ma = function() {
      this.K = !0
  }
  ;
  function Ia(a, b) {
      for (var c, d = h(b), e = d.next(); !e.done && !(c = Ja(a, e.value),
      c instanceof Aa); e = d.next())
          ;
      return c
  }
  function Ja(a, b) {
      try {
          var c = h(b)
            , d = c.next().value
            , e = la(c)
            , f = a.get(String(d));
          if (!f || typeof f.invoke !== "function")
              throw Error("Attempting to execute non-function " + b[0] + ".");
          return f.invoke.apply(f, [a].concat(oa(e)))
      } catch (k) {
          var g = a.C;
          g && g(k, b.context ? {
              id: b[0],
              line: b.context.line
          } : null);
          throw k;
      }
  }
  ;var Ka = function() {
      this.C = new Da;
      this.j = new Fa(this.C)
  };
  aa = Ka.prototype;
  aa.wd = function() {
      return this.C
  }
  ;
  aa.execute = function(a) {
      return this.Zh([a].concat(oa(ya.apply(1, arguments))))
  }
  ;
  aa.Zh = function() {
      for (var a, b = h(ya.apply(0, arguments)), c = b.next(); !c.done; c = b.next())
          a = Ja(this.j, c.value);
      return a
  }
  ;
  aa.Wk = function(a) {
      var b = ya.apply(1, arguments)
        , c = Ha(this.j);
      c.j = a;
      for (var d, e = h(b), f = e.next(); !f.done; f = e.next())
          d = Ja(c, f.value);
      return d
  }
  ;
  aa.Ma = function() {
      this.j.Ma()
  }
  ;
  var La = function() {
      Ba.call(this);
      this.j = !1
  };
  wa(La, Ba);
  aa = La.prototype;
  aa.set = function(a, b) {
      this.j || Ba.prototype.set.call(this, a, b)
  }
  ;
  aa.ai = function(a, b) {
      this.j || Ba.prototype.ai.call(this, a, b)
  }
  ;
  aa.remove = function(a) {
      this.j || Ba.prototype.remove.call(this, a)
  }
  ;
  aa.Ma = function() {
      this.j = !0
  }
  ;
  aa.Xk = function() {
      return this.j
  }
  ;
  /*
jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
*/
  var Ma = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/
    , Na = function(a) {
      if (a == null)
          return String(a);
      var b = Ma.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object"
  }
    , Pa = function(a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b)
  }
    , Qa = function(a) {
      if (!a || Na(a) != "object" || a.nodeType || a == a.window)
          return !1;
      try {
          if (a.constructor && !Pa(a, "constructor") && !Pa(a.constructor.prototype, "isPrototypeOf"))
              return !1
      } catch (c) {
          return !1
      }
      for (var b in a)
          ;
      return b === void 0 || Pa(a, b)
  }
    , Sa = function(a, b) {
      var c = b || (Na(a) == "array" ? [] : {}), d;
      for (d in a)
          if (Pa(a, d)) {
              var e = a[d];
              Na(e) == "array" ? (Na(c[d]) != "array" && (c[d] = []),
              c[d] = Sa(e, c[d])) : Qa(e) ? (Qa(c[d]) || (c[d] = {}),
              c[d] = Sa(e, c[d])) : c[d] = e
          }
      return c
  };
  function Ta(a) {
      if (a == void 0 || Array.isArray(a) || Qa(a))
          return !0;
      switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
          return !0
      }
      return !1
  }
  function Ua(a) {
      return typeof a === "number" && a >= 0 && isFinite(a) && a % 1 === 0 || typeof a === "string" && a[0] !== "-" && a === "" + parseInt(a)
  }
  ;var Va = function(a) {
      a = a === void 0 ? [] : a;
      La.call(this);
      this.values = [];
      for (var b in a)
          a.hasOwnProperty(b) && (Ua(b) ? this.values[Number(b)] = a[Number(b)] : La.prototype.set.call(this, b, a[b]))
  };
  wa(Va, La);
  aa = Va.prototype;
  aa.toString = function(a) {
      if (a && a.indexOf(this) >= 0)
          return "";
      for (var b = [], c = 0; c < this.values.length; c++) {
          var d = this.values[c];
          d === null || d === void 0 ? b.push("") : d instanceof Va ? (a = a || [],
          a.push(this),
          b.push(d.toString(a)),
          a.pop()) : b.push(String(d))
      }
      return b.join(",")
  }
  ;
  aa.set = function(a, b) {
      if (!La.prototype.Xk.call(this))
          if (a === "length") {
              if (!Ua(b))
                  throw Error("RangeError: Length property must be a valid integer.");
              this.values.length = Number(b)
          } else
              Ua(a) ? this.values[Number(a)] = b : La.prototype.set.call(this, a, b)
  }
  ;
  aa.get = function(a) {
      return a === "length" ? this.length() : Ua(a) ? this.values[Number(a)] : La.prototype.get.call(this, a)
  }
  ;
  aa.length = function() {
      return this.values.length
  }
  ;
  aa.Ka = function() {
      for (var a = La.prototype.Ka.call(this), b = 0; b < this.values.length; b++)
          this.values.hasOwnProperty(b) && a.push(String(b));
      return a
  }
  ;
  aa.Bh = function() {
      for (var a = La.prototype.Bh.call(this), b = 0; b < this.values.length; b++)
          this.values.hasOwnProperty(b) && a.push(this.values[b]);
      return a
  }
  ;
  aa.Tf = function() {
      for (var a = La.prototype.Tf.call(this), b = 0; b < this.values.length; b++)
          this.values.hasOwnProperty(b) && a.push([String(b), this.values[b]]);
      return a
  }
  ;
  aa.remove = function(a) {
      Ua(a) ? delete this.values[Number(a)] : La.prototype.remove.call(this, a)
  }
  ;
  aa.pop = function() {
      return this.values.pop()
  }
  ;
  aa.push = function() {
      return this.values.push.apply(this.values, Array.prototype.slice.call(arguments))
  }
  ;
  aa.shift = function() {
      return this.values.shift()
  }
  ;
  aa.splice = function(a, b) {
      return new Va(this.values.splice.apply(this.values, arguments))
  }
  ;
  aa.unshift = function() {
      return this.values.unshift.apply(this.values, Array.prototype.slice.call(arguments))
  }
  ;
  aa.has = function(a) {
      return Ua(a) && this.values.hasOwnProperty(a) || La.prototype.has.call(this, a)
  }
  ;
  aa.Ma = function() {
      La.prototype.Ma.call(this);
      Object.freeze(this.values)
  }
  ;
  function Wa(a) {
      for (var b = [], c = 0; c < a.length(); c++)
          a.has(c) && (b[c] = a.get(c));
      return b
  }
  ;var Xa = function() {
      La.call(this)
  };
  wa(Xa, La);
  function Ya() {
      for (var a = $a, b = {}, c = 0; c < a.length; ++c)
          b[a[c]] = c;
      return b
  }
  function ab() {
      var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      a += a.toLowerCase() + "0123456789-_";
      return a + "."
  }
  var $a, bb;
  function cb(a) {
      $a = $a || ab();
      bb = bb || Ya();
      for (var b = [], c = 0; c < a.length; c += 3) {
          var d = c + 1 < a.length
            , e = c + 2 < a.length
            , f = a.charCodeAt(c)
            , g = d ? a.charCodeAt(c + 1) : 0
            , k = e ? a.charCodeAt(c + 2) : 0
            , m = f >> 2
            , n = (f & 3) << 4 | g >> 4
            , p = (g & 15) << 2 | k >> 6
            , q = k & 63;
          e || (q = 64,
          d || (p = 64));
          b.push($a[m], $a[n], $a[p], $a[q])
      }
      return b.join("")
  }
  function db(a) {
      function b(m) {
          for (; d < a.length; ) {
              var n = a.charAt(d++)
                , p = bb[n];
              if (p != null)
                  return p;
              if (!/^[\s\xa0]*$/.test(n))
                  throw Error("Unknown base64 encoding at char: " + n);
          }
          return m
      }
      $a = $a || ab();
      bb = bb || Ya();
      for (var c = "", d = 0; ; ) {
          var e = b(-1)
            , f = b(0)
            , g = b(64)
            , k = b(64);
          if (k === 64 && e === -1)
              return c;
          c += String.fromCharCode(e << 2 | f >> 4);
          g !== 64 && (c += String.fromCharCode(f << 4 & 240 | g >> 2),
          k !== 64 && (c += String.fromCharCode(g << 6 & 192 | k)))
      }
  }
  ;var eb = {};
  function fb(a, b) {
      eb[a] = eb[a] || [];
      eb[a][b] = !0
  }
  function gb(a) {
      var b = eb[a];
      if (!b || b.length === 0)
          return "";
      for (var c = [], d = 0, e = 0; e < b.length; e++)
          e % 8 === 0 && e > 0 && (c.push(String.fromCharCode(d)),
          d = 0),
          b[e] && (d |= 1 << e % 8);
      d > 0 && c.push(String.fromCharCode(d));
      return cb(c.join("")).replace(/\.+$/, "")
  }
  function hb() {
      for (var a = [], b = eb.fdr || [], c = 0; c < b.length; c++)
          b[c] && a.push(c);
      return a.length > 0 ? a : void 0
  }
  ;var ib = []
    , jb = {};
  function kb(a) {
      return ib[a] === void 0 ? !1 : ib[a]
  }
  ;function lb() {}
  function mb(a) {
      return typeof a === "function"
  }
  function l(a) {
      return typeof a === "string"
  }
  function nb(a) {
      return typeof a === "number" && !isNaN(a)
  }
  function ob(a) {
      return Array.isArray(a) ? a : [a]
  }
  function pb(a, b) {
      if (a && Array.isArray(a))
          for (var c = 0; c < a.length; c++)
              if (a[c] && b(a[c]))
                  return a[c]
  }
  function qb(a, b) {
      if (!nb(a) || !nb(b) || a > b)
          a = 0,
          b = 2147483647;
      return Math.floor(Math.random() * (b - a + 1) + a)
  }
  function rb(a, b) {
      for (var c = new sb, d = 0; d < a.length; d++)
          c.set(a[d], !0);
      for (var e = 0; e < b.length; e++)
          if (c.get(b[e]))
              return !0;
      return !1
  }
  function z(a, b) {
      for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
  }
  function tb(a) {
      return !!a && (Object.prototype.toString.call(a) === "[object Arguments]" || Object.prototype.hasOwnProperty.call(a, "callee"))
  }
  function ub(a) {
      return Math.round(Number(a)) || 0
  }
  function vb(a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a
  }
  function wb(a) {
      var b = [];
      if (Array.isArray(a))
          for (var c = 0; c < a.length; c++)
              b.push(String(a[c]));
      return b
  }
  function xb(a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : ""
  }
  function yb() {
      return new Date(Date.now())
  }
  function zb() {
      return yb().getTime()
  }
  var sb = function() {
      this.prefix = "gtm.";
      this.values = {}
  };
  sb.prototype.set = function(a, b) {
      this.values[this.prefix + a] = b
  }
  ;
  sb.prototype.get = function(a) {
      return this.values[this.prefix + a]
  }
  ;
  sb.prototype.contains = function(a) {
      return this.get(a) !== void 0
  }
  ;
  function Ab(a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c
  }
  function Bb(a) {
      var b = a;
      return function() {
          if (b) {
              var c = b;
              b = void 0;
              try {
                  c()
              } catch (d) {}
          }
      }
  }
  function Cb(a, b) {
      for (var c in b)
          b.hasOwnProperty(c) && (a[c] = b[c])
  }
  function Db(a, b) {
      for (var c = [], d = 0; d < a.length; d++)
          c.push(a[d]),
          c.push.apply(c, b[a[d]] || []);
      return c
  }
  function Eb(a, b) {
      return a.length >= b.length && a.substring(0, b.length) === b
  }
  function Fb(a, b) {
      return a.length >= b.length && a.substring(a.length - b.length, a.length) === b
  }
  function Gb(a, b) {
      var c = C;
      b = b || [];
      for (var d = c, e = 0; e < a.length - 1; e++) {
          if (!d.hasOwnProperty(a[e]))
              return;
          d = d[a[e]];
          if (b.indexOf(d) >= 0)
              return
      }
      return d
  }
  function Hb(a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
          d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c
  }
  var Ib = /^\w{1,9}$/;
  function Jb(a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      z(a, function(d, e) {
          Ib.test(d) && e && c.push(d)
      });
      return c.join(b)
  }
  function Kb(a, b) {
      function c() {
          e && ++d === b && (e(),
          e = null,
          c.done = !0)
      }
      var d = 0
        , e = a;
      c.done = !1;
      return c
  }
  function Lb(a) {
      if (!a)
          return a;
      var b = a;
      if (kb(3))
          try {
              b = decodeURIComponent(a)
          } catch (d) {}
      var c = b.split(",");
      return c.length === 2 && c[0] === c[1] ? c[0] : a
  }
  ;/*

Copyright Google LLC
SPDX-License-Identifier: Apache-2.0
*/
  var Mb = globalThis.trustedTypes, Nb;
  function Ob() {
      var a = null;
      if (!Mb)
          return a;
      try {
          var b = function(c) {
              return c
          };
          a = Mb.createPolicy("goog#html", {
              createHTML: b,
              createScript: b,
              createScriptURL: b
          })
      } catch (c) {}
      return a
  }
  function Pb() {
      Nb === void 0 && (Nb = Ob());
      return Nb
  }
  ;var Qb = function(a) {
      this.j = a
  };
  Qb.prototype.toString = function() {
      return this.j + ""
  }
  ;
  function Rb(a) {
      var b = a
        , c = Pb();
      return new Qb(c ? c.createScriptURL(b) : b)
  }
  function Sb(a) {
      if (a instanceof Qb)
          return a.j;
      throw Error("");
  }
  ;var Tb = ka([""])
    , Ub = ia(["\x00"], ["\\0"])
    , Vb = ia(["\n"], ["\\n"])
    , Wb = ia(["\x00"], ["\\u0000"]);
  function Xb(a) {
      return a.toString().indexOf("`") === -1
  }
  Xb(function(a) {
      return a(Tb)
  }) || Xb(function(a) {
      return a(Ub)
  }) || Xb(function(a) {
      return a(Vb)
  }) || Xb(function(a) {
      return a(Wb)
  });
  var Yb = function(a) {
      this.j = a
  };
  Yb.prototype.toString = function() {
      return this.j
  }
  ;
  var Zb = new Yb("about:invalid#zClosurez");
  var $b = function(a) {
      this.wm = a
  };
  function ac(a) {
      return new $b(function(b) {
          return b.substr(0, a.length + 1).toLowerCase() === a + ":"
      }
      )
  }
  var bc = [ac("data"), ac("http"), ac("https"), ac("mailto"), ac("ftp"), new $b(function(a) {
      return /^[^:]*([/?#]|$)/.test(a)
  }
  )];
  function cc(a, b) {
      b = b === void 0 ? bc : b;
      if (a instanceof Yb)
          return a;
      for (var c = 0; c < b.length; ++c) {
          var d = b[c];
          if (d instanceof $b && d.wm(a))
              return new Yb(a)
      }
  }
  function dc(a) {
      var b;
      b = b === void 0 ? bc : b;
      return cc(a, b) || Zb
  }
  var ec = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
  function fc(a) {
      var b;
      if (a instanceof Yb)
          if (a instanceof Yb)
              b = a.j;
          else
              throw Error("");
      else
          b = ec.test(a) ? a : void 0;
      return b
  }
  ;var hc = function() {
      this.j = gc[0].toLowerCase()
  };
  hc.prototype.toString = function() {
      return this.j
  }
  ;
  var ic = function(a) {
      this.j = a
  };
  ic.prototype.toString = function() {
      return this.j + ""
  }
  ;
  function jc(a, b) {
      var c = [new hc];
      if (c.length === 0)
          throw Error("");
      var d = c.map(function(f) {
          var g;
          if (f instanceof hc)
              g = f.j;
          else
              throw Error("");
          return g
      })
        , e = b.toLowerCase();
      if (d.every(function(f) {
          return e.indexOf(f) !== 0
      }))
          throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
      a.setAttribute(b, "true")
  }
  ;function kc(a, b) {
      var c = fc(b);
      c !== void 0 && (a.action = c)
  }
  ;var lc = Array.prototype.indexOf ? function(a, b) {
      return Array.prototype.indexOf.call(a, b, void 0)
  }
  : function(a, b) {
      if (typeof a === "string")
          return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
      for (var c = 0; c < a.length; c++)
          if (c in a && a[c] === b)
              return c;
      return -1
  }
  ;
  "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON", "INPUT"]);
  function mc(a) {
      return a === null ? "null" : a === void 0 ? "undefined" : a
  }
  ;var C = window
    , E = document
    , nc = navigator;
  function oc() {
      var a;
      try {
          a = nc.serviceWorker
      } catch (b) {
          return
      }
      return a
  }
  var pc = E.currentScript
    , qc = pc && pc.src;
  function rc(a, b) {
      var c = C[a];
      C[a] = c === void 0 ? b : c;
      return C[a]
  }
  function sc(a) {
      return (nc.userAgent || "").indexOf(a) !== -1
  }
  var tc = {
      async: 1,
      nonce: 1,
      onerror: 1,
      onload: 1,
      src: 1,
      type: 1
  }
    , uc = {
      onload: 1,
      src: 1,
      width: 1,
      height: 1,
      style: 1
  };
  function vc(a, b, c) {
      b && z(b, function(d, e) {
          d = d.toLowerCase();
          c.hasOwnProperty(d) || a.setAttribute(d, e)
      })
  }
  function wc(a, b, c, d, e) {
      var f = E.createElement("script");
      vc(f, d, tc);
      f.type = "text/javascript";
      f.async = d && d.async === !1 ? !1 : !0;
      var g;
      g = Rb(mc(a));
      f.src = Sb(g);
      var k, m = f.ownerDocument && f.ownerDocument.defaultView || window;
      m = m === void 0 ? document : m;
      var n, p, q = (p = (n = "document"in m ? m.document : m).querySelector) == null ? void 0 : p.call(n, "script[nonce]");
      (k = q == null ? "" : q.nonce || q.getAttribute("nonce") || "") && f.setAttribute("nonce", k);
      b && (f.onload = b);
      c && (f.onerror = c);
      if (e)
          e.appendChild(f);
      else {
          var r = E.getElementsByTagName("script")[0] || E.body || E.head;
          r.parentNode.insertBefore(f, r)
      }
      return f
  }
  function xc() {
      if (qc) {
          var a = qc.toLowerCase();
          if (a.indexOf("https://") === 0)
              return 2;
          if (a.indexOf("http://") === 0)
              return 3
      }
      return 1
  }
  function yc(a, b, c, d, e) {
      var f;
      f = f === void 0 ? !0 : f;
      var g = e
        , k = !1;
      g || (g = E.createElement("iframe"),
      k = !0);
      vc(g, c, uc);
      d && z(d, function(n, p) {
          g.dataset[n] = p
      });
      f && (g.height = "0",
      g.width = "0",
      g.style.display = "none",
      g.style.visibility = "hidden");
      a !== void 0 && (g.src = a);
      if (k) {
          var m = E.body && E.body.lastChild || E.body || E.head;
          m.parentNode.insertBefore(g, m)
      }
      b && (g.onload = b);
      return g
  }
  var zc = function(a, b, c, d) {
      var e = new Image(1,1);
      vc(e, d, {});
      e.onload = function() {
          e.onload = null;
          b && b()
      }
      ;
      e.onerror = function() {
          e.onerror = null;
          c && c()
      }
      ;
      e.src = a;
      return e
  };
  function Ac(a, b, c, d) {
      zc(a, b, c, d)
  }
  function Bc(a, b, c, d) {
      a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
  }
  function Cc(a, b, c) {
      a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
  }
  function F(a) {
      C.setTimeout(a, 0)
  }
  function Dc(a, b) {
      return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
  }
  function Ec(a) {
      var b = a.innerText || a.textContent || "";
      b && b !== " " && (b = b.replace(/^[\s\xa0]+/g, ""),
      b = b.replace(/[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b
  }
  function Fc(a) {
      var b = E.createElement("div"), c = b, d, e = mc("A<div>" + a + "</div>"), f = Pb();
      d = new ic(f ? f.createHTML(e) : e);
      if (c.nodeType === 1 && /^(script|style)$/i.test(c.tagName))
          throw Error("");
      var g;
      if (d instanceof ic)
          g = d.j;
      else
          throw Error("");
      c.innerHTML = g;
      b = b.lastChild;
      for (var k = []; b && b.firstChild; )
          k.push(b.removeChild(b.firstChild));
      return k
  }
  function Gc(a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++)
          d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
          if (d[String(f.tagName).toLowerCase()])
              return f;
          f = f.parentElement
      }
      return null
  }
  function Hc(a) {
      var b;
      try {
          b = nc.sendBeacon && nc.sendBeacon(a)
      } catch (c) {
          fb("TAGGING", 15)
      }
      b || zc(a)
  }
  function Ic(a, b) {
      try {
          return nc.sendBeacon(a, b)
      } catch (c) {
          fb("TAGGING", 15)
      }
      return !1
  }
  var Jc = {
      cache: "no-store",
      credentials: "include",
      keepalive: !0,
      method: "POST",
      mode: "no-cors",
      redirect: "follow"
  };
  function Kc(a, b, c) {
      if (Lc()) {
          var d = Object.assign({}, Jc);
          b && (d.body = b);
          c && (c.attributionReporting && (d.attributionReporting = c.attributionReporting),
          c.browsingTopics && (d.browsingTopics = c.browsingTopics));
          try {
              var e = C.fetch(a, d);
              e && e.catch(lb);
              return !0
          } catch (f) {}
      }
      if (c && c.noFallback)
          return !1;
      if (b)
          return Ic(a, b);
      Hc(a);
      return !0
  }
  function Lc() {
      return typeof C.fetch === "function"
  }
  function Mc(a, b) {
      var c = a[b];
      c && typeof c.animVal === "string" && (c = c.animVal);
      return c
  }
  function Nc() {
      var a = C.performance;
      if (a && mb(a.now))
          return a.now()
  }
  function Oc() {
      return C.performance || void 0
  }
  ;function Pc(a, b) {
      return this.evaluate(a) && this.evaluate(b)
  }
  function Qc(a, b) {
      return this.evaluate(a) === this.evaluate(b)
  }
  function Rc(a, b) {
      return this.evaluate(a) || this.evaluate(b)
  }
  function Sc(a, b) {
      a = this.evaluate(a);
      b = this.evaluate(b);
      return String(a).indexOf(String(b)) > -1
  }
  function Tc(a, b) {
      var c = String(this.evaluate(a))
        , d = String(this.evaluate(b));
      return c.substring(0, d.length) === d
  }
  function Uc(a, b) {
      a = this.evaluate(a);
      b = this.evaluate(b);
      switch (a) {
      case "pageLocation":
          var c = C.location.href;
          b instanceof Xa && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
          return c
      }
  }
  ;var Vc = function(a, b) {
      La.call(this);
      this.Xj = a;
      this.wh = b
  };
  wa(Vc, La);
  Vc.prototype.toString = function() {
      return this.Xj
  }
  ;
  Vc.prototype.getName = function() {
      return this.Xj
  }
  ;
  Vc.prototype.invoke = function(a) {
      return this.wh.apply(new Wc(this,a), Array.prototype.slice.call(arguments, 1))
  }
  ;
  Vc.prototype.jb = function(a) {
      try {
          return this.invoke.apply(this, Array.prototype.slice.call(arguments, 0))
      } catch (b) {}
  }
  ;
  var Wc = function(a, b) {
      this.wh = a;
      this.D = b
  };
  Wc.prototype.evaluate = function(a) {
      var b = this.D;
      return Array.isArray(a) ? Ja(b, a) : a
  }
  ;
  Wc.prototype.getName = function() {
      return this.wh.getName()
  }
  ;
  Wc.prototype.wd = function() {
      return this.D.wd()
  }
  ;
  var Xc = function() {
      this.map = new Map
  };
  Xc.prototype.set = function(a, b) {
      this.map.set(a, b)
  }
  ;
  Xc.prototype.get = function(a) {
      return this.map.get(a)
  }
  ;
  var Yc = function() {
      this.keys = [];
      this.values = []
  };
  Yc.prototype.set = function(a, b) {
      this.keys.push(a);
      this.values.push(b)
  }
  ;
  Yc.prototype.get = function(a) {
      var b = this.keys.indexOf(a);
      if (b > -1)
          return this.values[b]
  }
  ;
  function Zc() {
      try {
          return Map ? new Xc : new Yc
      } catch (a) {
          return new Yc
      }
  }
  ;var $c = function(a) {
      if (a instanceof $c)
          return a;
      if (Ta(a))
          throw Error("Type of given value has an equivalent Pixie type.");
      this.value = a
  };
  $c.prototype.getValue = function() {
      return this.value
  }
  ;
  $c.prototype.toString = function() {
      return String(this.value)
  }
  ;
  var bd = function(a) {
      La.call(this);
      this.promise = a;
      this.set("then", ad(this));
      this.set("catch", ad(this, !0));
      this.set("finally", ad(this, !1, !0))
  };
  wa(bd, Xa);
  var ad = function(a, b, c) {
      b = b === void 0 ? !1 : b;
      c = c === void 0 ? !1 : c;
      return new Vc("",function(d, e) {
          b && (e = d,
          d = void 0);
          c && (e = d);
          d instanceof Vc || (d = void 0);
          e instanceof Vc || (e = void 0);
          var f = Ha(this.D)
            , g = function(m) {
              return function(n) {
                  return c ? (m.invoke(f),
                  a.promise) : m.invoke(f, n)
              }
          }
            , k = a.promise.then(d && g(d), e && g(e));
          return new bd(k)
      }
      )
  };
  function I(a, b, c) {
      var d = Zc()
        , e = function(g, k) {
          for (var m = g.Ka(), n = 0; n < m.length; n++)
              k[m[n]] = f(g.get(m[n]))
      }
        , f = function(g) {
          var k = d.get(g);
          if (k)
              return k;
          if (g instanceof Va) {
              var m = [];
              d.set(g, m);
              for (var n = g.Ka(), p = 0; p < n.length; p++)
                  m[n[p]] = f(g.get(n[p]));
              return m
          }
          if (g instanceof bd)
              return g.promise;
          if (g instanceof Xa) {
              var q = {};
              d.set(g, q);
              e(g, q);
              return q
          }
          if (g instanceof Vc) {
              var r = function() {
                  for (var v = Array.prototype.slice.call(arguments, 0), u = 0; u < v.length; u++)
                      v[u] = cd(v[u], b, c);
                  var w = new Fa(b ? b.wd() : new Da);
                  b && (w.j = b.j);
                  return f(g.invoke.apply(g, [w].concat(v)))
              };
              d.set(g, r);
              e(g, r);
              return r
          }
          var t = !1;
          switch (c) {
          case 1:
              t = !0;
              break;
          case 2:
              t = !1;
              break;
          case 3:
              t = !1;
              break;
          default:
          }
          if (g instanceof $c && t)
              return g.getValue();
          switch (typeof g) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
              return g;
          case "object":
              if (g === null)
                  return null
          }
      };
      return f(a)
  }
  function cd(a, b, c) {
      var d = Zc()
        , e = function(g, k) {
          for (var m in g)
              g.hasOwnProperty(m) && k.set(m, f(g[m]))
      }
        , f = function(g) {
          var k = d.get(g);
          if (k)
              return k;
          if (Array.isArray(g) || tb(g)) {
              var m = new Va([]);
              d.set(g, m);
              for (var n in g)
                  g.hasOwnProperty(n) && m.set(n, f(g[n]));
              return m
          }
          if (Qa(g)) {
              var p = new Xa;
              d.set(g, p);
              e(g, p);
              return p
          }
          if (typeof g === "function") {
              var q = new Vc("",function() {
                  for (var x = Array.prototype.slice.call(arguments, 0), y = 0; y < x.length; y++)
                      x[y] = I(this.evaluate(x[y]), b, c);
                  return f((0,
                  this.D.H)(g, g, x))
              }
              );
              d.set(g, q);
              e(g, q);
              return q
          }
          var u = typeof g;
          if (g === null || u === "string" || u === "number" || u === "boolean")
              return g;
          var w = !1;
          switch (c) {
          case 1:
              w = !0;
              break;
          case 2:
              w = !1;
              break;
          default:
          }
          if (g !== void 0 && w)
              return new $c(g)
      };
      return f(a)
  }
  ;function dd() {
      var a = !1;
      return a
  }
  ;var ed = {
      supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
      concat: function(a) {
          for (var b = [], c = 0; c < this.length(); c++)
              b.push(this.get(c));
          for (var d = 1; d < arguments.length; d++)
              if (arguments[d]instanceof Va)
                  for (var e = arguments[d], f = 0; f < e.length(); f++)
                      b.push(e.get(f));
              else
                  b.push(arguments[d]);
          return new Va(b)
      },
      every: function(a, b) {
          for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
              if (this.has(d) && !b.invoke(a, this.get(d), d, this))
                  return !1;
          return !0
      },
      filter: function(a, b) {
          for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++)
              this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
          return new Va(d)
      },
      forEach: function(a, b) {
          for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
              this.has(d) && b.invoke(a, this.get(d), d, this)
      },
      hasOwnProperty: function(a, b) {
          return this.has(b)
      },
      indexOf: function(a, b, c) {
          var d = this.length()
            , e = c === void 0 ? 0 : Number(c);
          e < 0 && (e = Math.max(d + e, 0));
          for (var f = e; f < d; f++)
              if (this.has(f) && this.get(f) === b)
                  return f;
          return -1
      },
      join: function(a, b) {
          for (var c = [], d = 0; d < this.length(); d++)
              c.push(this.get(d));
          return c.join(b)
      },
      lastIndexOf: function(a, b, c) {
          var d = this.length()
            , e = d - 1;
          c !== void 0 && (e = c < 0 ? d + c : Math.min(c, e));
          for (var f = e; f >= 0; f--)
              if (this.has(f) && this.get(f) === b)
                  return f;
          return -1
      },
      map: function(a, b) {
          for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++)
              this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
          return new Va(d)
      },
      pop: function() {
          return this.pop()
      },
      push: function(a) {
          return this.push.apply(this, Array.prototype.slice.call(arguments, 1))
      },
      reduce: function(a, b, c) {
          var d = this.length(), e, f = 0;
          if (c !== void 0)
              e = c;
          else {
              if (d === 0)
                  throw Error("TypeError: Reduce on List with no elements.");
              for (var g = 0; g < d; g++)
                  if (this.has(g)) {
                      e = this.get(g);
                      f = g + 1;
                      break
                  }
              if (g === d)
                  throw Error("TypeError: Reduce on List with no elements.");
          }
          for (var k = f; k < d; k++)
              this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
          return e
      },
      reduceRight: function(a, b, c) {
          var d = this.length(), e, f = d - 1;
          if (c !== void 0)
              e = c;
          else {
              if (d === 0)
                  throw Error("TypeError: ReduceRight on List with no elements.");
              for (var g = 1; g <= d; g++)
                  if (this.has(d - g)) {
                      e = this.get(d - g);
                      f = d - (g + 1);
                      break
                  }
              if (g > d)
                  throw Error("TypeError: ReduceRight on List with no elements.");
          }
          for (var k = f; k >= 0; k--)
              this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
          return e
      },
      reverse: function() {
          for (var a = Wa(this), b = a.length - 1, c = 0; b >= 0; b--,
          c++)
              a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
          return this
      },
      shift: function() {
          return this.shift()
      },
      slice: function(a, b, c) {
          var d = this.length();
          b === void 0 && (b = 0);
          b = b < 0 ? Math.max(d + b, 0) : Math.min(b, d);
          c = c === void 0 ? d : c < 0 ? Math.max(d + c, 0) : Math.min(c, d);
          c = Math.max(b, c);
          for (var e = [], f = b; f < c; f++)
              e.push(this.get(f));
          return new Va(e)
      },
      some: function(a, b) {
          for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
              if (this.has(d) && b.invoke(a, this.get(d), d, this))
                  return !0;
          return !1
      },
      sort: function(a, b) {
          var c = Wa(this);
          b === void 0 ? c.sort() : c.sort(function(e, f) {
              return Number(b.invoke(a, e, f))
          });
          for (var d = 0; d < c.length; d++)
              c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d);
          return this
      },
      splice: function(a, b, c) {
          return this.splice.apply(this, Array.prototype.splice.call(arguments, 1, arguments.length - 1))
      },
      toString: function() {
          return this.toString()
      },
      unshift: function(a) {
          return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
      }
  };
  var fd = function(a) {
      var b;
      b = Error.call(this, a);
      this.message = b.message;
      "stack"in b && (this.stack = b.stack)
  };
  wa(fd, Error);
  var gd = {
      charAt: 1,
      concat: 1,
      indexOf: 1,
      lastIndexOf: 1,
      match: 1,
      replace: 1,
      search: 1,
      slice: 1,
      split: 1,
      substring: 1,
      toLowerCase: 1,
      toLocaleLowerCase: 1,
      toString: 1,
      toUpperCase: 1,
      toLocaleUpperCase: 1,
      trim: 1
  }
    , hd = new Aa("break")
    , id = new Aa("continue");
  function jd(a, b) {
      return this.evaluate(a) + this.evaluate(b)
  }
  function kd(a, b) {
      return this.evaluate(a) && this.evaluate(b)
  }
  function ld(a, b, c) {
      a = this.evaluate(a);
      b = this.evaluate(b);
      c = this.evaluate(c);
      if (!(c instanceof Va))
          throw Error("Error: Non-List argument given to Apply instruction.");
      if (a === null || a === void 0) {
          var d = "TypeError: Can't read property " + b + " of " + a + ".";
          if (dd())
              throw new fd(d);
          throw Error(d);
      }
      var e = typeof a === "number";
      if (typeof a === "boolean" || e) {
          if (b === "toString") {
              if (e && c.length()) {
                  var f = I(c.get(0));
                  try {
                      return a.toString(f)
                  } catch (y) {}
              }
              return a.toString()
          }
          var g = "TypeError: " + a + "." + b + " is not a function.";
          if (dd())
              throw new fd(g);
          throw Error(g);
      }
      if (typeof a === "string") {
          if (gd.hasOwnProperty(b)) {
              var k = 2;
              k = 1;
              var m = I(c, void 0, k);
              return cd(a[b].apply(a, m), this.D)
          }
          var n = "TypeError: " + b + " is not a function";
          if (dd())
              throw new fd(n);
          throw Error(n);
      }
      if (a instanceof Va) {
          if (a.has(b)) {
              var p = a.get(b);
              if (p instanceof Vc) {
                  var q = Wa(c);
                  q.unshift(this.D);
                  return p.invoke.apply(p, q)
              }
              var r = "TypeError: " + b + " is not a function";
              if (dd())
                  throw new fd(r);
              throw Error(r);
          }
          if (ed.supportedMethods.indexOf(b) >= 0) {
              var t = Wa(c);
              t.unshift(this.D);
              return ed[b].apply(a, t)
          }
      }
      if (a instanceof Vc || a instanceof Xa) {
          if (a.has(b)) {
              var v = a.get(b);
              if (v instanceof Vc) {
                  var u = Wa(c);
                  u.unshift(this.D);
                  return v.invoke.apply(v, u)
              }
              var w = "TypeError: " + b + " is not a function";
              if (dd())
                  throw new fd(w);
              throw Error(w);
          }
          if (b === "toString")
              return a instanceof Vc ? a.getName() : a.toString();
          if (b === "hasOwnProperty")
              return a.has.apply(a, Wa(c))
      }
      if (a instanceof $c && b === "toString")
          return a.toString();
      var x = "TypeError: Object has no '" + b + "' property.";
      if (dd())
          throw new fd(x);
      throw Error(x);
  }
  function md(a, b) {
      a = this.evaluate(a);
      if (typeof a !== "string")
          throw Error("Invalid key name given for assignment.");
      var c = this.D;
      if (!c.has(a))
          throw Error("Attempting to assign to undefined value " + b);
      var d = this.evaluate(b);
      c.set(a, d);
      return d
  }
  function nd() {
      var a = Ha(this.D)
        , b = Ia(a, Array.prototype.slice.apply(arguments));
      if (b instanceof Aa)
          return b
  }
  function od() {
      return hd
  }
  function pd(a) {
      for (var b = this.evaluate(a), c = 0; c < b.length; c++) {
          var d = this.evaluate(b[c]);
          if (d instanceof Aa)
              return d
      }
  }
  function qd() {
      for (var a = this.D, b = 0; b < arguments.length - 1; b += 2) {
          var c = arguments[b];
          if (typeof c === "string") {
              var d = this.evaluate(arguments[b + 1]);
              Ga(a, c, d, !0)
          }
      }
  }
  function rd() {
      return id
  }
  function sd(a, b) {
      return new Aa(a,this.evaluate(b))
  }
  function td(a, b) {
      var c = new Va;
      b = this.evaluate(b);
      for (var d = 0; d < b.length; d++)
          c.push(b[d]);
      var e = [51, a, c].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
      this.D.add(a, this.evaluate(e))
  }
  function ud(a, b) {
      return this.evaluate(a) / this.evaluate(b)
  }
  function vd(a, b) {
      a = this.evaluate(a);
      b = this.evaluate(b);
      var c = a instanceof $c
        , d = b instanceof $c;
      return c || d ? c && d ? a.getValue() === b.getValue() : !1 : a == b
  }
  function yd() {
      for (var a, b = 0; b < arguments.length; b++)
          a = this.evaluate(arguments[b]);
      return a
  }
  function zd(a, b, c, d) {
      for (var e = 0; e < b(); e++) {
          var f = a(c(e))
            , g = Ia(f, d);
          if (g instanceof Aa) {
              if (g.type === "break")
                  break;
              if (g.type === "return")
                  return g
          }
      }
  }
  function Ad(a, b, c) {
      if (typeof b === "string")
          return zd(a, function() {
              return b.length
          }, function(f) {
              return f
          }, c);
      if (b instanceof Xa || b instanceof Va || b instanceof Vc) {
          var d = b.Ka()
            , e = d.length;
          return zd(a, function() {
              return e
          }, function(f) {
              return d[f]
          }, c)
      }
  }
  function Bd(a, b, c) {
      a = this.evaluate(a);
      b = this.evaluate(b);
      c = this.evaluate(c);
      var d = this.D;
      return Ad(function(e) {
          d.set(a, e);
          return d
      }, b, c)
  }
  function Cd(a, b, c) {
      a = this.evaluate(a);
      b = this.evaluate(b);
      c = this.evaluate(c);
      var d = this.D;
      return Ad(function(e) {
          var f = Ha(d);
          Ga(f, a, e, !0);
          return f
      }, b, c)
  }
  function Dd(a, b, c) {
      a = this.evaluate(a);
      b = this.evaluate(b);
      c = this.evaluate(c);
      var d = this.D;
      return Ad(function(e) {
          var f = Ha(d);
          f.add(a, e);
          return f
      }, b, c)
  }
  function Ed(a, b, c) {
      a = this.evaluate(a);
      b = this.evaluate(b);
      c = this.evaluate(c);
      var d = this.D;
      return Fd(function(e) {
          d.set(a, e);
          return d
      }, b, c)
  }
  function Gd(a, b, c) {
      a = this.evaluate(a);
      b = this.evaluate(b);
      c = this.evaluate(c);
      var d = this.D;
      return Fd(function(e) {
          var f = Ha(d);
          Ga(f, a, e, !0);
          return f
      }, b, c)
  }
  function Hd(a, b, c) {
      a = this.evaluate(a);
      b = this.evaluate(b);
      c = this.evaluate(c);
      var d = this.D;
      return Fd(function(e) {
          var f = Ha(d);
          f.add(a, e);
          return f
      }, b, c)
  }
  function Fd(a, b, c) {
      if (typeof b === "string")
          return zd(a, function() {
              return b.length
          }, function(d) {
              return b[d]
          }, c);
      if (b instanceof Va)
          return zd(a, function() {
              return b.length()
          }, function(d) {
              return b.get(d)
          }, c);
      if (dd())
          throw new fd("The value is not iterable.");
      throw new TypeError("The value is not iterable.");
  }
  function Id(a, b, c, d) {
      function e(p, q) {
          for (var r = 0; r < f.length(); r++) {
              var t = f.get(r);
              q.add(t, p.get(t))
          }
      }
      var f = this.evaluate(a);
      if (!(f instanceof Va))
          throw Error("TypeError: Non-List argument given to ForLet instruction.");
      var g = this.D;
      d = this.evaluate(d);
      var k = Ha(g);
      for (e(g, k); Ja(k, b); ) {
          var m = Ia(k, d);
          if (m instanceof Aa) {
              if (m.type === "break")
                  break;
              if (m.type === "return")
                  return m
          }
          var n = Ha(g);
          e(k, n);
          Ja(n, c);
          k = n
      }
  }
  function Jd(a, b) {
      var c = this.D
        , d = this.evaluate(b);
      if (!(d instanceof Va))
          throw Error("Error: non-List value given for Fn argument names.");
      var e = Array.prototype.slice.call(arguments, 2);
      return new Vc(a,function() {
          return function(f) {
              var g = Ha(c);
              g.j === void 0 && (g.j = this.D.j);
              for (var k = Array.prototype.slice.call(arguments, 0), m = 0; m < k.length; m++)
                  if (k[m] = this.evaluate(k[m]),
                  k[m]instanceof Aa)
                      return k[m];
              for (var n = d.get("length"), p = 0; p < n; p++)
                  p < k.length ? g.add(d.get(p), k[p]) : g.add(d.get(p), void 0);
              g.add("arguments", new Va(k));
              var q = Ia(g, e);
              if (q instanceof Aa)
                  return q.type === "return" ? q.data : q
          }
      }())
  }
  function Kd(a) {
      a = this.evaluate(a);
      var b = this.D;
      if (Ld && !b.has(a))
          throw new ReferenceError(a + " is not defined.");
      return b.get(a)
  }
  function Md(a, b) {
      var c;
      a = this.evaluate(a);
      b = this.evaluate(b);
      if (a === void 0 || a === null) {
          var d = "TypeError: Cannot read properties of " + a + " (reading '" + b + "')";
          if (dd())
              throw new fd(d);
          throw Error(d);
      }
      if (a instanceof Xa || a instanceof Va || a instanceof Vc)
          c = a.get(b);
      else if (typeof a === "string")
          b === "length" ? c = a.length : Ua(b) && (c = a[b]);
      else if (a instanceof $c)
          return;
      return c
  }
  function Nd(a, b) {
      return this.evaluate(a) > this.evaluate(b)
  }
  function Od(a, b) {
      return this.evaluate(a) >= this.evaluate(b)
  }
  function Pd(a, b) {
      a = this.evaluate(a);
      b = this.evaluate(b);
      a instanceof $c && (a = a.getValue());
      b instanceof $c && (b = b.getValue());
      return a === b
  }
  function Qd(a, b) {
      return !Pd.call(this, a, b)
  }
  function Rd(a, b, c) {
      var d = [];
      this.evaluate(a) ? d = this.evaluate(b) : c && (d = this.evaluate(c));
      var e = Ia(this.D, d);
      if (e instanceof Aa)
          return e
  }
  var Ld = !1;
  function Sd(a, b) {
      return this.evaluate(a) < this.evaluate(b)
  }
  function Td(a, b) {
      return this.evaluate(a) <= this.evaluate(b)
  }
  function Ud() {
      for (var a = new Va, b = 0; b < arguments.length; b++) {
          var c = this.evaluate(arguments[b]);
          a.push(c)
      }
      return a
  }
  function Vd() {
      for (var a = new Xa, b = 0; b < arguments.length - 1; b += 2) {
          var c = this.evaluate(arguments[b]) + ""
            , d = this.evaluate(arguments[b + 1]);
          a.set(c, d)
      }
      return a
  }
  function Wd(a, b) {
      return this.evaluate(a) % this.evaluate(b)
  }
  function Xd(a, b) {
      return this.evaluate(a) * this.evaluate(b)
  }
  function Yd(a) {
      return -this.evaluate(a)
  }
  function Zd(a) {
      return !this.evaluate(a)
  }
  function $d(a, b) {
      return !vd.call(this, a, b)
  }
  function ae() {
      return null
  }
  function be(a, b) {
      return this.evaluate(a) || this.evaluate(b)
  }
  function ce(a, b) {
      var c = this.evaluate(a);
      this.evaluate(b);
      return c
  }
  function de(a) {
      return this.evaluate(a)
  }
  function ee() {
      return Array.prototype.slice.apply(arguments)
  }
  function fe(a) {
      return new Aa("return",this.evaluate(a))
  }
  function ge(a, b, c) {
      a = this.evaluate(a);
      b = this.evaluate(b);
      c = this.evaluate(c);
      if (a === null || a === void 0) {
          var d = "TypeError: Can't set property " + b + " of " + a + ".";
          if (dd())
              throw new fd(d);
          throw Error(d);
      }
      (a instanceof Vc || a instanceof Va || a instanceof Xa) && a.set(b, c);
      return c
  }
  function he(a, b) {
      return this.evaluate(a) - this.evaluate(b)
  }
  function ie(a, b, c) {
      a = this.evaluate(a);
      var d = this.evaluate(b)
        , e = this.evaluate(c);
      if (!Array.isArray(d) || !Array.isArray(e))
          throw Error("Error: Malformed switch instruction.");
      for (var f, g = !1, k = 0; k < d.length; k++)
          if (g || a === this.evaluate(d[k]))
              if (f = this.evaluate(e[k]),
              f instanceof Aa) {
                  var m = f.type;
                  if (m === "break")
                      return;
                  if (m === "return" || m === "continue")
                      return f
              } else
                  g = !0;
      if (e.length === d.length + 1 && (f = this.evaluate(e[e.length - 1]),
      f instanceof Aa && (f.type === "return" || f.type === "continue")))
          return f
  }
  function je(a, b, c) {
      return this.evaluate(a) ? this.evaluate(b) : this.evaluate(c)
  }
  function ke(a) {
      a = this.evaluate(a);
      return a instanceof Vc ? "function" : typeof a
  }
  function le() {
      for (var a = this.D, b = 0; b < arguments.length; b++) {
          var c = arguments[b];
          typeof c !== "string" || a.add(c, void 0)
      }
  }
  function me(a, b, c, d) {
      var e = this.evaluate(d);
      if (this.evaluate(c)) {
          var f = Ia(this.D, e);
          if (f instanceof Aa) {
              if (f.type === "break")
                  return;
              if (f.type === "return")
                  return f
          }
      }
      for (; this.evaluate(a); ) {
          var g = Ia(this.D, e);
          if (g instanceof Aa) {
              if (g.type === "break")
                  break;
              if (g.type === "return")
                  return g
          }
          this.evaluate(b)
      }
  }
  function ne(a) {
      return ~Number(this.evaluate(a))
  }
  function oe(a, b) {
      return Number(this.evaluate(a)) << Number(this.evaluate(b))
  }
  function pe(a, b) {
      return Number(this.evaluate(a)) >> Number(this.evaluate(b))
  }
  function qe(a, b) {
      return Number(this.evaluate(a)) >>> Number(this.evaluate(b))
  }
  function re(a, b) {
      return Number(this.evaluate(a)) & Number(this.evaluate(b))
  }
  function se(a, b) {
      return Number(this.evaluate(a)) ^ Number(this.evaluate(b))
  }
  function te(a, b) {
      return Number(this.evaluate(a)) | Number(this.evaluate(b))
  }
  function ue() {}
  function ve(a, b, c, d, e) {
      var f = !0;
      try {
          var g = this.evaluate(c);
          if (g instanceof Aa)
              return g
      } catch (r) {
          if (!(r instanceof fd && a))
              throw f = r instanceof fd,
              r;
          var k = Ha(this.D)
            , m = new $c(r);
          k.add(b, m);
          var n = this.evaluate(d)
            , p = Ia(k, n);
          if (p instanceof Aa)
              return p
      } finally {
          if (f && e !== void 0) {
              var q = this.evaluate(e);
              if (q instanceof Aa)
                  return q
          }
      }
  }
  ;var xe = function() {
      this.j = new Ka;
      we(this)
  };
  xe.prototype.execute = function(a) {
      return this.j.Zh(a)
  }
  ;
  var we = function(a) {
      var b = function(c, d) {
          var e = new Vc(String(c),d);
          e.Ma();
          a.j.j.set(String(c), e)
      };
      b("map", Vd);
      b("and", Pc);
      b("contains", Sc);
      b("equals", Qc);
      b("or", Rc);
      b("startsWith", Tc);
      b("variable", Uc)
  };
  var ze = function() {
      this.C = !1;
      this.j = new Ka;
      ye(this);
      this.C = !0
  };
  ze.prototype.execute = function(a) {
      return Ae(this.j.Zh(a))
  }
  ;
  var Be = function(a, b, c) {
      return Ae(a.j.Wk(b, c))
  };
  ze.prototype.Ma = function() {
      this.j.Ma()
  }
  ;
  var ye = function(a) {
      var b = function(c, d) {
          var e = String(c)
            , f = new Vc(e,d);
          f.Ma();
          a.j.j.set(e, f)
      };
      b(0, jd);
      b(1, kd);
      b(2, ld);
      b(3, md);
      b(56, re);
      b(57, oe);
      b(58, ne);
      b(59, te);
      b(60, pe);
      b(61, qe);
      b(62, se);
      b(53, nd);
      b(4, od);
      b(5, pd);
      b(52, qd);
      b(6, rd);
      b(49, sd);
      b(7, Ud);
      b(8, Vd);
      b(9, pd);
      b(50, td);
      b(10, ud);
      b(12, vd);
      b(13, yd);
      b(51, Jd);
      b(47, Bd);
      b(54, Cd);
      b(55, Dd);
      b(63, Id);
      b(64, Ed);
      b(65, Gd);
      b(66, Hd);
      b(15, Kd);
      b(16, Md);
      b(17, Md);
      b(18, Nd);
      b(19, Od);
      b(20, Pd);
      b(21, Qd);
      b(22, Rd);
      b(23, Sd);
      b(24, Td);
      b(25, Wd);
      b(26, Xd);
      b(27, Yd);
      b(28, Zd);
      b(29, $d);
      b(45, ae);
      b(30, be);
      b(32, ce);
      b(33, ce);
      b(34, de);
      b(35, de);
      b(46, ee);
      b(36, fe);
      b(43, ge);
      b(37, he);
      b(38, ie);
      b(39, je);
      b(67, ve);
      b(40, ke);
      b(44, ue);
      b(41, le);
      b(42, me)
  };
  ze.prototype.wd = function() {
      return this.j.wd()
  }
  ;
  function Ae(a) {
      if (a instanceof Aa || a instanceof Vc || a instanceof Va || a instanceof Xa || a instanceof $c || a === null || a === void 0 || typeof a === "string" || typeof a === "number" || typeof a === "boolean")
          return a
  }
  ;var Ce = function(a) {
      this.message = a
  };
  function De(a) {
      var b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[a];
      return b === void 0 ? new Ce("Value " + a + " can not be encoded in web-safe base64 dictionary.") : b
  }
  ;function Ee(a) {
      switch (a) {
      case 1:
          return "1";
      case 2:
      case 4:
          return "0";
      default:
          return "-"
      }
  }
  ;var Fe = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function Ge(a, b) {
      for (var c = "", d = !0; a > 7; ) {
          var e = a & 31;
          a >>= 5;
          d ? d = !1 : e |= 32;
          c = "" + De(e) + c
      }
      a <<= 2;
      d || (a |= 32);
      return c = "" + De(a | b) + c
  }
  ;var He = function() {
      function a(b) {
          return {
              toString: function() {
                  return b
              }
          }
      }
      return {
          wk: a("consent"),
          li: a("convert_case_to"),
          mi: a("convert_false_to"),
          ni: a("convert_null_to"),
          oi: a("convert_true_to"),
          ri: a("convert_undefined_to"),
          wn: a("debug_mode_metadata"),
          la: a("function"),
          Zg: a("instance_name"),
          al: a("live_only"),
          bl: a("malware_disabled"),
          METADATA: a("metadata"),
          jl: a("original_activity_id"),
          Gn: a("original_vendor_template_id"),
          En: a("once_on_load"),
          il: a("once_per_event"),
          vj: a("once_per_load"),
          In: a("priority_override"),
          Jn: a("respected_consent_types"),
          Dj: a("setup_tags"),
          ye: a("tag_id"),
          Ij: a("teardown_tags")
      }
  }();
  var ef;
  var ff = [], gf = [], hf = [], jf = [], kf = [], lf = {}, mf, nf;
  function of(a) {
      nf = nf || a
  }
  function pf(a) {}
  var qf, rf = [], sf = [];
  function tf(a, b) {
      var c = {};
      c[He.la] = "__" + a;
      for (var d in b)
          b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
      return c
  }
  function uf(a, b, c) {
      try {
          return mf(vf(a, b, c))
      } catch (d) {
          JSON.stringify(a)
      }
      return 2
  }
  function wf(a) {
      var b = a[He.la];
      if (!b)
          throw Error("Error: No function name given for function call.");
      return !!lf[b]
  }
  var vf = function(a, b, c) {
      c = c || [];
      var d = {}, e;
      for (e in a)
          a.hasOwnProperty(e) && (d[e] = xf(a[e], b, c));
      return d
  }
    , xf = function(a, b, c) {
      if (Array.isArray(a)) {
          var d;
          switch (a[0]) {
          case "function_id":
              return a[1];
          case "list":
              d = [];
              for (var e = 1; e < a.length; e++)
                  d.push(xf(a[e], b, c));
              return d;
          case "macro":
              var f = a[1];
              if (c[f])
                  return;
              var g = ff[f];
              if (!g || b.isBlocked(g))
                  return;
              c[f] = !0;
              var k = String(g[He.Zg]);
              try {
                  var m = vf(g, b, c);
                  m.vtp_gtmEventId = b.id;
                  b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                  d = yf(m, {
                      event: b,
                      index: f,
                      type: 2,
                      name: k
                  });
                  qf && (d = qf.Al(d, m))
              } catch (y) {
                  b.logMacroError && b.logMacroError(y, Number(f), k),
                  d = !1
              }
              c[f] = !1;
              return d;
          case "map":
              d = {};
              for (var n = 1; n < a.length; n += 2)
                  d[xf(a[n], b, c)] = xf(a[n + 1], b, c);
              return d;
          case "template":
              d = [];
              for (var p = !1, q = 1; q < a.length; q++) {
                  var r = xf(a[q], b, c);
                  nf && (p = p || nf.sm(r));
                  d.push(r)
              }
              return nf && p ? nf.Dl(d) : d.join("");
          case "escape":
              d = xf(a[1], b, c);
              if (nf && Array.isArray(a[1]) && a[1][0] === "macro" && nf.tm(a))
                  return nf.Om(d);
              d = String(d);
              for (var t = 2; t < a.length; t++)
                  Oe[a[t]] && (d = Oe[a[t]](d));
              return d;
          case "tag":
              var v = a[1];
              if (!jf[v])
                  throw Error("Unable to resolve tag reference " + v + ".");
              return {
                  Oj: a[2],
                  index: v
              };
          case "zb":
              var u = {
                  arg0: a[2],
                  arg1: a[3],
                  ignore_case: a[5]
              };
              u[He.la] = a[1];
              var w = uf(u, b, c)
                , x = !!a[4];
              return x || w !== 2 ? x !== (w === 1) : null;
          default:
              throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
          }
      }
      return a
  }
    , yf = function(a, b) {
      var c = a[He.la]
        , d = b && b.event;
      if (!c)
          throw Error("Error: No function name given for function call.");
      var e = lf[c], f = b && b.type === 2 && (d == null ? void 0 : d.reportMacroDiscrepancy) && e && rf.indexOf(c) !== -1, g = {}, k = {}, m;
      for (m in a)
          a.hasOwnProperty(m) && Eb(m, "vtp_") && (e && (g[m] = a[m]),
          !e || f) && (k[m.substring(4)] = a[m]);
      e && d && d.cachedModelValues && (g.vtp_gtmCachedValues = d.cachedModelValues);
      if (b) {
          if (b.name == null) {
              var n;
              a: {
                  var p = b.type
                    , q = b.index;
                  if (q == null)
                      n = "";
                  else {
                      var r;
                      switch (p) {
                      case 2:
                          r = ff[q];
                          break;
                      case 1:
                          r = jf[q];
                          break;
                      default:
                          n = "";
                          break a
                      }
                      var t = r && r[He.Zg];
                      n = t ? String(t) : ""
                  }
              }
              b.name = n
          }
          e && (g.vtp_gtmEntityIndex = b.index,
          g.vtp_gtmEntityName = b.name)
      }
      var v, u, w;
      if (f && sf.indexOf(c) === -1) {
          sf.push(c);
          var x = zb();
          v = e(g);
          var y = zb() - x
            , A = zb();
          u = ef(c, k, b);
          w = y - (zb() - A)
      } else if (e && (v = e(g)),
      !e || f)
          u = ef(c, k, b);
      f && d && (d.reportMacroDiscrepancy(d.id, c, void 0, !0),
      Ta(v) ? (Array.isArray(v) ? Array.isArray(u) : Qa(v) ? Qa(u) : typeof v === "function" ? typeof u === "function" : v === u) || d.reportMacroDiscrepancy(d.id, c) : v !== u && d.reportMacroDiscrepancy(d.id, c),
      w !== void 0 && d.reportMacroDiscrepancy(d.id, c, w));
      return e ? v : u
  };
  var zf = function(a, b, c) {
      var d;
      d = Error.call(this, c);
      this.message = d.message;
      "stack"in d && (this.stack = d.stack);
      this.permissionId = a;
      this.parameters = b;
      this.name = "PermissionError"
  };
  wa(zf, Error);
  zf.prototype.getMessage = function() {
      return this.message
  }
  ;
  function Af(a, b) {
      if (Array.isArray(a)) {
          Object.defineProperty(a, "context", {
              value: {
                  line: b[0]
              }
          });
          for (var c = 1; c < a.length; c++)
              Af(a[c], b[c])
      }
  }
  ;var Bf = function(a, b) {
      var c;
      c = Error.call(this, "Wrapped error for Dust debugging. Original error message: " + a.message);
      this.message = c.message;
      "stack"in c && (this.stack = c.stack);
      this.Im = a;
      this.j = [];
      this.C = b
  };
  wa(Bf, Error);
  function Cf() {
      return function(a, b) {
          a instanceof Bf || (a = new Bf(a,Df));
          b && a instanceof Bf && a.j.push(b);
          throw a;
      }
  }
  function Df(a) {
      if (!a.length)
          return a;
      a.push({
          id: "main",
          line: 0
      });
      for (var b = a.length - 1; b > 0; b--)
          nb(a[b].id) && a.splice(b++, 1);
      for (var c = a.length - 1; c > 0; c--)
          a[c].line = a[c - 1].line;
      a.splice(0, 1);
      return a
  }
  ;function Ef(a) {
      function b(r) {
          for (var t = 0; t < r.length; t++)
              d[r[t]] = !0
      }
      for (var c = [], d = [], e = Ff(a), f = 0; f < gf.length; f++) {
          var g = gf[f]
            , k = Gf(g, e);
          if (k) {
              for (var m = g.add || [], n = 0; n < m.length; n++)
                  c[m[n]] = !0;
              b(g.block || [])
          } else
              k === null && b(g.block || []);
      }
      for (var p = [], q = 0; q < jf.length; q++)
          c[q] && !d[q] && (p[q] = !0);
      return p
  }
  function Gf(a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
          var e = b(c[d]);
          if (e === 0)
              return !1;
          if (e === 2)
              return null
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
          var k = b(f[g]);
          if (k === 2)
              return null;
          if (k === 1)
              return !1
      }
      return !0
  }
  function Ff(a) {
      var b = [];
      return function(c) {
          b[c] === void 0 && (b[c] = uf(hf[c], a));
          return b[c]
      }
  }
  ;var Hf = {
      Al: function(a, b) {
          b[He.li] && typeof a === "string" && (a = b[He.li] === 1 ? a.toLowerCase() : a.toUpperCase());
          b.hasOwnProperty(He.ni) && a === null && (a = b[He.ni]);
          b.hasOwnProperty(He.ri) && a === void 0 && (a = b[He.ri]);
          b.hasOwnProperty(He.oi) && a === !0 && (a = b[He.oi]);
          b.hasOwnProperty(He.mi) && a === !1 && (a = b[He.mi]);
          return a
      }
  };
  var If = function() {
      this.j = {}
  }
    , Kf = function(a, b) {
      var c = Jf.j, d;
      (d = c.j)[a] != null || (d[a] = []);
      c.j[a].push(function() {
          return b.apply(null, oa(ya.apply(0, arguments)))
      })
  };
  function Lf(a, b, c, d) {
      if (a)
          for (var e = 0; e < a.length; e++) {
              var f = void 0
                , g = "A policy function denied the permission request";
              try {
                  f = a[e](b, c, d),
                  g += "."
              } catch (k) {
                  g = typeof k === "string" ? g + (": " + k) : k instanceof Error ? g + (": " + k.message) : g + "."
              }
              if (!f)
                  throw new zf(c,d,g);
          }
  }
  function Mf(a, b, c) {
      return function() {
          var d = arguments[0];
          if (d) {
              var e = a.j[d]
                , f = a.j.all;
              if (e || f) {
                  var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                  Lf(e, b, d, g);
                  Lf(f, b, d, g)
              }
          }
      }
  }
  ;var Qf = function() {
      var a = data.permissions || {}
        , b = Nf.ctid
        , c = this;
      this.C = {};
      this.j = new If;
      var d = {}
        , e = {}
        , f = Mf(this.j, b, function() {
          var g = arguments[0];
          return g && d[g] ? d[g].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
      });
      z(a, function(g, k) {
          function m(p) {
              var q = ya.apply(1, arguments);
              if (!n[p])
                  throw Of(p, {}, "The requested additional permission " + p + " is not configured.");
              f.apply(null, [p].concat(oa(q)))
          }
          var n = {};
          z(k, function(p, q) {
              var r = Pf(p, q);
              n[p] = r.assert;
              d[p] || (d[p] = r.M);
              r.Kj && !e[p] && (e[p] = r.Kj)
          });
          c.C[g] = function(p, q) {
              var r = n[p];
              if (!r)
                  throw Of(p, {}, "The requested permission " + p + " is not configured.");
              var t = Array.prototype.slice.call(arguments, 0);
              r.apply(void 0, t);
              f.apply(void 0, t);
              var v = e[p];
              v && v.apply(null, [m].concat(oa(t.slice(1))))
          }
      })
  }
    , Rf = function(a) {
      return Jf.C[a] || function() {}
  };
  function Pf(a, b) {
      var c = tf(a, b);
      c.vtp_permissionName = a;
      c.vtp_createPermissionError = Of;
      try {
          return yf(c)
      } catch (d) {
          return {
              assert: function(e) {
                  throw new zf(e,{},"Permission " + e + " is unknown.");
              },
              M: function() {
                  throw new zf(a,{},"Permission " + a + " is unknown.");
              }
          }
      }
  }
  function Of(a, b, c) {
      return new zf(a,b,c)
  }
  ;var Sf = !1;
  var Tf = {};
  Tf.nk = vb('');
  Tf.Il = vb('');
  var Zf = {}
    , $f = (Zf.uaa = !0,
  Zf.uab = !0,
  Zf.uafvl = !0,
  Zf.uamb = !0,
  Zf.uam = !0,
  Zf.uap = !0,
  Zf.uapv = !0,
  Zf.uaw = !0,
  Zf);
  var hg = function(a, b) {
      for (var c = 0; c < b.length; c++) {
          var d = a
            , e = b[c];
          if (!fg.exec(e))
              throw Error("Invalid key wildcard");
          var f = e.indexOf(".*"), g = f !== -1 && f === e.length - 2, k = g ? e.slice(0, e.length - 2) : e, m;
          a: if (d.length === 0)
              m = !1;
          else {
              for (var n = d.split("."), p = 0; p < n.length; p++)
                  if (!gg.exec(n[p])) {
                      m = !1;
                      break a
                  }
              m = !0
          }
          if (!m || k.length > d.length || !g && d.length !== e.length ? 0 : g ? Eb(d, k) && (d === k || d.charAt(k.length) === ".") : d === k)
              return !0
      }
      return !1
  }
    , gg = /^[a-z$_][\w$]*$/i
    , fg = /^(?:[a-z_$][a-z_$0-9]*\.)*[a-z_$][a-z_$0-9]*(?:\.\*)?$/i;
  var ig = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
  function jg(a, b) {
      var c = String(a)
        , d = String(b)
        , e = c.length - d.length;
      return e >= 0 && c.indexOf(d, e) === e
  }
  var kg = new sb;
  function lg(a, b, c) {
      var d = c ? "i" : void 0;
      try {
          var e = String(b) + String(d)
            , f = kg.get(e);
          f || (f = new RegExp(b,d),
          kg.set(e, f));
          return f.test(a)
      } catch (g) {
          return !1
      }
  }
  function mg(a, b) {
      return String(a).indexOf(String(b)) >= 0
  }
  function ng(a, b) {
      return String(a) === String(b)
  }
  function og(a, b) {
      return Number(a) >= Number(b)
  }
  function pg(a, b) {
      return Number(a) <= Number(b)
  }
  function qg(a, b) {
      return Number(a) > Number(b)
  }
  function rg(a, b) {
      return Number(a) < Number(b)
  }
  function sg(a, b) {
      return Eb(String(a), String(b))
  }
  ;var zg = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i
    , Ag = {
      Fn: "function",
      PixieMap: "Object",
      List: "Array"
  };
  function K(a, b, c) {
      for (var d = 0; d < b.length; d++) {
          var e = zg.exec(b[d]);
          if (!e)
              throw Error("Internal Error in " + a);
          var f = e[1]
            , g = e[2] === "!"
            , k = e[3]
            , m = c[d];
          if (m == null) {
              if (g)
                  throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
          } else if (k !== "*") {
              var n = typeof m;
              m instanceof Vc ? n = "Fn" : m instanceof Va ? n = "List" : m instanceof Xa ? n = "PixieMap" : m instanceof $c && (n = "OpaqueValue");
              if (n !== k)
                  throw Error("Error in " + a + ". Argument " + f + " has type " + ((Ag[n] || n) + ", which does not match required type ") + ((Ag[k] || k) + "."));
          }
      }
  }
  ;function Bg(a) {
      return "" + a
  }
  function Cg(a, b) {
      var c = [];
      return c
  }
  ;function Dg(a, b) {
      var c = new Vc(a,function() {
          for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++)
              d[e] = this.evaluate(d[e]);
          try {
              return b.apply(this, d)
          } catch (g) {
              if (dd())
                  throw new fd(g.message);
              throw g;
          }
      }
      );
      c.Ma();
      return c
  }
  function Eg(a, b) {
      var c = new Xa, d;
      for (d in b)
          if (b.hasOwnProperty(d)) {
              var e = b[d];
              mb(e) ? c.set(d, Dg(a + "_" + d, e)) : Qa(e) ? c.set(d, Eg(a + "_" + d, e)) : (nb(e) || l(e) || typeof e === "boolean") && c.set(d, e)
          }
      c.Ma();
      return c
  }
  ;function Fg(a, b) {
      K(this.getName(), ["apiName:!string", "message:?string"], arguments);
      var c = {}
        , d = new Xa;
      return d = Eg("AssertApiSubject", c)
  }
  ;function Gg(a, b) {
      K(this.getName(), ["actual:?*", "message:?string"], arguments);
      if (a instanceof bd)
          throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
      var c = {}
        , d = new Xa;
      return d = Eg("AssertThatSubject", c)
  }
  ;function Hg(a) {
      return function() {
          for (var b = [], c = this.D, d = 0; d < arguments.length; ++d)
              b.push(I(arguments[d], c));
          return cd(a.apply(null, b))
      }
  }
  function Ig() {
      for (var a = Math, b = Jg, c = {}, d = 0; d < b.length; d++) {
          var e = b[d];
          a.hasOwnProperty(e) && (c[e] = Hg(a[e].bind(a)))
      }
      return c
  }
  ;function Kg(a) {
      var b;
      return b
  }
  ;function Lg(a) {
      var b;
      return b
  }
  ;function Mg(a) {
      try {
          return encodeURI(a)
      } catch (b) {}
  }
  ;function Ng(a) {
      try {
          return encodeURIComponent(a)
      } catch (b) {}
  }
  ;function Sg(a) {
      K(this.getName(), ["message:?string"], arguments);
  }
  ;function Tg(a, b) {
      K(this.getName(), ["min:!number", "max:!number"], arguments);
      return qb(a, b)
  }
  ;function Ug() {
      return (new Date).getTime()
  }
  ;function Vg(a) {
      if (a === null)
          return "null";
      if (a instanceof Va)
          return "array";
      if (a instanceof Vc)
          return "function";
      if (a instanceof $c) {
          var b;
          a = (b = a) == null ? void 0 : b.getValue();
          var c;
          if (((c = a) == null ? void 0 : c.constructor) === void 0 || a.constructor.name === void 0) {
              var d = String(a);
              return d.substring(8, d.length - 1)
          }
          return String(a.constructor.name)
      }
      return typeof a
  }
  ;function Wg(a) {
      function b(c) {
          return function(d) {
              try {
                  return c(d)
              } catch (e) {
                  (Sf || Tf.nk) && a.call(this, e.message)
              }
          }
      }
      return {
          parse: b(function(c) {
              return cd(JSON.parse(c))
          }),
          stringify: b(function(c) {
              return JSON.stringify(I(c))
          })
      }
  }
  ;function Xg(a) {
      return ub(I(a, this.D))
  }
  ;function Yg(a) {
      return Number(I(a, this.D))
  }
  ;function Zg(a) {
      return a === null ? "null" : a === void 0 ? "undefined" : a.toString()
  }
  ;function $g(a, b, c) {
      var d = null
        , e = !1;
      return e ? d : null
  }
  ;var Jg = "floor ceil round max min abs pow sqrt".split(" ");
  function ah() {
      var a = {};
      return {
          Sl: function(b) {
              return a.hasOwnProperty(b) ? a[b] : void 0
          },
          kk: function(b, c) {
              a[b] = c
          },
          reset: function() {
              a = {}
          }
      }
  }
  function bh(a, b) {
      return function() {
          var c = Array.prototype.slice.call(ya.apply(0, arguments), 0);
          c.unshift(b);
          return Vc.prototype.invoke.apply(a, c)
      }
  }
  function ch(a, b) {
      K(this.getName(), ["apiName:!string", "mock:?*"], arguments);
  }
  function dh(a, b) {
      K(this.getName(), ["apiName:!string", "mock:!PixieMap"], arguments);
  }
  ;var eh = {};
  eh.keys = function(a) {
      return new Va
  }
  ;
  eh.values = function(a) {
      return new Va
  }
  ;
  eh.entries = function(a) {
      return new Va
  }
  ;
  eh.freeze = function(a) {
      return a
  }
  ;
  eh.delete = function(a, b) {
      return !1
  }
  ;
  function M(a, b) {
      var c = ya.apply(2, arguments)
        , d = a.D.j;
      if (!d)
          throw Error("Missing program state.");
      if (d.Um) {
          try {
              d.Lj.apply(null, [b].concat(oa(c)))
          } catch (e) {
              throw fb("TAGGING", 21),
              e;
          }
          return
      }
      d.Lj.apply(null, [b].concat(oa(c)))
  }
  ;var gh = function() {
      this.C = {};
      this.j = {};
      this.H = !0;
  };
  gh.prototype.get = function(a, b) {
      var c = this.contains(a) ? this.C[a] : void 0;
      return c
  }
  ;
  gh.prototype.contains = function(a) {
      return this.C.hasOwnProperty(a)
  }
  ;
  gh.prototype.add = function(a, b, c) {
      if (this.contains(a))
          throw Error("Attempting to add a function which already exists: " + a + ".");
      if (this.j.hasOwnProperty(a))
          throw Error("Attempting to add an API with an existing private API name: " + a + ".");
      this.C[a] = c ? void 0 : mb(b) ? Dg(a, b) : Eg(a, b)
  }
  ;
  function hh(a, b) {
      var c = void 0;
      return c
  }
  ;function ih() {
      var a = {};
      return a
  }
  ;var N = {
      g: {
          sa: "ad_personalization",
          O: "ad_storage",
          N: "ad_user_data",
          U: "analytics_storage",
          Fb: "region",
          Sb: "consent_updated",
          ff: "wait_for_update",
          ui: "app_remove",
          vi: "app_store_refund",
          wi: "app_store_subscription_cancel",
          xi: "app_store_subscription_convert",
          yi: "app_store_subscription_renew",
          zk: "consent_update",
          jg: "add_payment_info",
          kg: "add_shipping_info",
          nc: "add_to_cart",
          oc: "remove_from_cart",
          lg: "view_cart",
          Tb: "begin_checkout",
          qc: "select_item",
          lb: "view_item_list",
          Gb: "select_promotion",
          nb: "view_promotion",
          Ga: "purchase",
          rc: "refund",
          Na: "view_item",
          mg: "add_to_wishlist",
          Ak: "exception",
          zi: "first_open",
          Ai: "first_visit",
          aa: "gtag.config",
          Va: "gtag.get",
          Bi: "in_app_purchase",
          Ub: "page_view",
          Bk: "screen_view",
          Ci: "session_start",
          Ck: "timing_complete",
          Dk: "track_social",
          Oc: "user_engagement",
          Ek: "user_id_update",
          Jd: "gclid_link_decoration_source",
          Kd: "gclid_storage_source",
          ob: "gclgb",
          Wa: "gclid",
          hf: "gclgs",
          jf: "gcllp",
          kf: "gclst",
          fa: "ads_data_redaction",
          Di: "gad_source",
          Ei: "gad_source_src",
          Ld: "gclid_url",
          Fi: "gclsrc",
          ng: "gbraid",
          lf: "wbraid",
          ja: "allow_ad_personalization_signals",
          nf: "allow_custom_scripts",
          Md: "allow_direct_google_requests",
          pf: "allow_display_features",
          Nd: "allow_enhanced_conversions",
          pb: "allow_google_signals",
          za: "allow_interest_groups",
          Fk: "app_id",
          Gk: "app_installer_id",
          Hk: "app_name",
          Ik: "app_version",
          Hb: "auid",
          Gi: "auto_detection_enabled",
          Vb: "aw_remarketing",
          qf: "aw_remarketing_only",
          Od: "discount",
          Pd: "aw_feed_country",
          Qd: "aw_feed_language",
          ba: "items",
          Rd: "aw_merchant_id",
          og: "aw_basket_type",
          Pc: "campaign_content",
          Qc: "campaign_id",
          Rc: "campaign_medium",
          Sc: "campaign_name",
          Tc: "campaign",
          Uc: "campaign_source",
          Vc: "campaign_term",
          qb: "client_id",
          Hi: "rnd",
          pg: "consent_update_type",
          Ii: "content_group",
          Ji: "content_type",
          Za: "conversion_cookie_prefix",
          Wc: "conversion_id",
          na: "conversion_linker",
          Ki: "conversion_linker_disabled",
          Wb: "conversion_api",
          rf: "cookie_deprecation",
          Oa: "cookie_domain",
          Pa: "cookie_expires",
          Xa: "cookie_flags",
          sc: "cookie_name",
          sb: "cookie_path",
          Ha: "cookie_prefix",
          Xb: "cookie_update",
          uc: "country",
          wa: "currency",
          Sd: "customer_lifetime_value",
          Xc: "custom_map",
          qg: "gcldc",
          Td: "dclid",
          Li: "debug_mode",
          da: "developer_id",
          Mi: "disable_merchant_reported_purchases",
          Yc: "dc_custom_params",
          Ni: "dc_natural_search",
          rg: "dynamic_event_settings",
          sg: "affiliation",
          Ud: "checkout_option",
          tf: "checkout_step",
          ug: "coupon",
          Zc: "item_list_name",
          uf: "list_name",
          Oi: "promotions",
          bd: "shipping",
          vf: "tax",
          Vd: "engagement_time_msec",
          Wd: "enhanced_client_id",
          Xd: "enhanced_conversions",
          vg: "enhanced_conversions_automatic_settings",
          Yd: "estimated_delivery_date",
          wf: "euid_logged_in_state",
          dd: "event_callback",
          Jk: "event_category",
          ab: "event_developer_id_string",
          Kk: "event_label",
          vc: "event",
          Zd: "event_settings",
          ae: "event_timeout",
          Lk: "description",
          Mk: "fatal",
          Pi: "experiments",
          xf: "firebase_id",
          wc: "first_party_collection",
          be: "_x_20",
          tb: "_x_19",
          Qi: "fledge_drop_reason",
          wg: "fledge",
          xg: "flight_error_code",
          yg: "flight_error_message",
          Ri: "fl_activity_category",
          Si: "fl_activity_group",
          zg: "fl_advertiser_id",
          Ti: "fl_ar_dedupe",
          Ag: "match_id",
          Ui: "fl_random_number",
          Vi: "tran",
          Wi: "u",
          ce: "gac_gclid",
          xc: "gac_wbraid",
          Bg: "gac_wbraid_multiple_conversions",
          Cg: "ga_restrict_domain",
          Dg: "ga_temp_client_id",
          Nk: "ga_temp_ecid",
          yc: "gdpr_applies",
          Eg: "geo_granularity",
          Ib: "value_callback",
          ub: "value_key",
          zc: "_google_ng",
          Ac: "google_signals",
          Fg: "google_tld",
          de: "groups",
          Gg: "gsa_experiment_id",
          Xi: "gtm_up",
          Jb: "iframe_state",
          ed: "ignore_referrer",
          yf: "internal_traffic_results",
          Yb: "is_legacy_converted",
          Kb: "is_legacy_loaded",
          ee: "is_passthrough",
          fd: "_lps",
          Qa: "language",
          fe: "legacy_developer_id_string",
          oa: "linker",
          Bc: "accept_incoming",
          vb: "decorate_forms",
          W: "domains",
          Lb: "url_position",
          Ok: "merchant_feed_label",
          Pk: "merchant_feed_language",
          Qk: "merchant_id",
          Hg: "method",
          Rk: "name",
          gd: "new_customer",
          Ig: "non_interaction",
          Yi: "optimize_id",
          Jg: "page_hostname",
          hd: "page_path",
          Aa: "page_referrer",
          eb: "page_title",
          Kg: "passengers",
          Lg: "phone_conversion_callback",
          Zi: "phone_conversion_country_code",
          Mg: "phone_conversion_css_class",
          aj: "phone_conversion_ids",
          Ng: "phone_conversion_number",
          Og: "phone_conversion_options",
          Pg: "_protected_audience_enabled",
          jd: "quantity",
          he: "redact_device_info",
          zf: "referral_exclusion_definition",
          Zb: "restricted_data_processing",
          bj: "retoken",
          Sk: "sample_rate",
          Af: "screen_name",
          Mb: "screen_resolution",
          cj: "_script_source",
          dj: "search_term",
          Ia: "send_page_view",
          ac: "send_to",
          kd: "server_container_url",
          ld: "session_duration",
          ie: "session_engaged",
          Bf: "session_engaged_time",
          wb: "session_id",
          je: "session_number",
          Cf: "_shared_user_id",
          md: "delivery_postal_code",
          Tk: "temporary_client_id",
          Df: "topmost_url",
          ej: "tracking_id",
          Ef: "traffic_type",
          xa: "transaction_id",
          Nb: "transport_url",
          Qg: "trip_type",
          bc: "update",
          Ya: "url_passthrough",
          Ff: "_user_agent_architecture",
          Gf: "_user_agent_bitness",
          Hf: "_user_agent_full_version_list",
          If: "_user_agent_mobile",
          Jf: "_user_agent_model",
          Kf: "_user_agent_platform",
          Lf: "_user_agent_platform_version",
          Mf: "_user_agent_wow64",
          Ba: "user_data",
          Rg: "user_data_auto_latency",
          Sg: "user_data_auto_meta",
          Tg: "user_data_auto_multi",
          Ug: "user_data_auto_selectors",
          Vg: "user_data_auto_status",
          nd: "user_data_mode",
          ke: "user_data_settings",
          ya: "user_id",
          fb: "user_properties",
          fj: "_user_region",
          me: "us_privacy_string",
          ka: "value",
          Wg: "wbraid_multiple_conversions",
          od: "_fpm_parameters",
          nj: "_host_name",
          oj: "_in_page_command",
          pj: "_ip_override",
          qj: "_is_passthrough_cid",
          Ob: "non_personalized_ads",
          we: "_sst_parameters",
          rb: "conversion_label",
          qa: "page_location",
          cb: "global_developer_id_string",
          Cc: "tc_privacy_string"
      }
  }
    , jh = {}
    , kh = Object.freeze((jh[N.g.ja] = 1,
  jh[N.g.pf] = 1,
  jh[N.g.Nd] = 1,
  jh[N.g.pb] = 1,
  jh[N.g.ba] = 1,
  jh[N.g.Oa] = 1,
  jh[N.g.Pa] = 1,
  jh[N.g.Xa] = 1,
  jh[N.g.sc] = 1,
  jh[N.g.sb] = 1,
  jh[N.g.Ha] = 1,
  jh[N.g.Xb] = 1,
  jh[N.g.Xc] = 1,
  jh[N.g.da] = 1,
  jh[N.g.rg] = 1,
  jh[N.g.dd] = 1,
  jh[N.g.Zd] = 1,
  jh[N.g.ae] = 1,
  jh[N.g.wc] = 1,
  jh[N.g.Cg] = 1,
  jh[N.g.Ac] = 1,
  jh[N.g.Fg] = 1,
  jh[N.g.de] = 1,
  jh[N.g.yf] = 1,
  jh[N.g.Yb] = 1,
  jh[N.g.Kb] = 1,
  jh[N.g.oa] = 1,
  jh[N.g.zf] = 1,
  jh[N.g.Zb] = 1,
  jh[N.g.Ia] = 1,
  jh[N.g.ac] = 1,
  jh[N.g.kd] = 1,
  jh[N.g.ld] = 1,
  jh[N.g.Bf] = 1,
  jh[N.g.md] = 1,
  jh[N.g.Nb] = 1,
  jh[N.g.bc] = 1,
  jh[N.g.ke] = 1,
  jh[N.g.fb] = 1,
  jh[N.g.we] = 1,
  jh));
  Object.freeze([N.g.qa, N.g.Aa, N.g.eb, N.g.Qa, N.g.Af, N.g.ya, N.g.xf, N.g.Ii]);
  var lh = {}
    , mh = Object.freeze((lh[N.g.ui] = 1,
  lh[N.g.vi] = 1,
  lh[N.g.wi] = 1,
  lh[N.g.xi] = 1,
  lh[N.g.yi] = 1,
  lh[N.g.zi] = 1,
  lh[N.g.Ai] = 1,
  lh[N.g.Bi] = 1,
  lh[N.g.Ci] = 1,
  lh[N.g.Oc] = 1,
  lh))
    , nh = {}
    , oh = Object.freeze((nh[N.g.jg] = 1,
  nh[N.g.kg] = 1,
  nh[N.g.nc] = 1,
  nh[N.g.oc] = 1,
  nh[N.g.lg] = 1,
  nh[N.g.Tb] = 1,
  nh[N.g.qc] = 1,
  nh[N.g.lb] = 1,
  nh[N.g.Gb] = 1,
  nh[N.g.nb] = 1,
  nh[N.g.Ga] = 1,
  nh[N.g.rc] = 1,
  nh[N.g.Na] = 1,
  nh[N.g.mg] = 1,
  nh))
    , ph = Object.freeze([N.g.ja, N.g.Md, N.g.pb, N.g.Xb, N.g.wc, N.g.ed, N.g.Ia, N.g.bc])
    , qh = Object.freeze([].concat(oa(ph)))
    , rh = Object.freeze([N.g.Pa, N.g.ae, N.g.ld, N.g.Bf, N.g.Vd])
    , sh = Object.freeze([].concat(oa(rh)))
    , th = {}
    , uh = (th[N.g.O] = "1",
  th[N.g.U] = "2",
  th[N.g.N] = "3",
  th[N.g.sa] = "4",
  th)
    , vh = {}
    , wh = Object.freeze((vh[N.g.Jd] = 1,
  vh[N.g.Kd] = 1,
  vh[N.g.ja] = 1,
  vh[N.g.Md] = 1,
  vh[N.g.Nd] = 1,
  vh[N.g.za] = 1,
  vh[N.g.Vb] = 1,
  vh[N.g.qf] = 1,
  vh[N.g.Od] = 1,
  vh[N.g.Pd] = 1,
  vh[N.g.Qd] = 1,
  vh[N.g.ba] = 1,
  vh[N.g.Rd] = 1,
  vh[N.g.Za] = 1,
  vh[N.g.na] = 1,
  vh[N.g.Oa] = 1,
  vh[N.g.Pa] = 1,
  vh[N.g.Xa] = 1,
  vh[N.g.Ha] = 1,
  vh[N.g.wa] = 1,
  vh[N.g.Sd] = 1,
  vh[N.g.da] = 1,
  vh[N.g.Mi] = 1,
  vh[N.g.Xd] = 1,
  vh[N.g.Yd] = 1,
  vh[N.g.xf] = 1,
  vh[N.g.wc] = 1,
  vh[N.g.Yb] = 1,
  vh[N.g.Kb] = 1,
  vh[N.g.Qa] = 1,
  vh[N.g.Ok] = 1,
  vh[N.g.Pk] = 1,
  vh[N.g.Qk] = 1,
  vh[N.g.gd] = 1,
  vh[N.g.qa] = 1,
  vh[N.g.Aa] = 1,
  vh[N.g.Lg] = 1,
  vh[N.g.Mg] = 1,
  vh[N.g.Ng] = 1,
  vh[N.g.Og] = 1,
  vh[N.g.Zb] = 1,
  vh[N.g.Ia] = 1,
  vh[N.g.ac] = 1,
  vh[N.g.kd] = 1,
  vh[N.g.md] = 1,
  vh[N.g.xa] = 1,
  vh[N.g.Nb] = 1,
  vh[N.g.bc] = 1,
  vh[N.g.Ya] = 1,
  vh[N.g.Ba] = 1,
  vh[N.g.ya] = 1,
  vh[N.g.ka] = 1,
  vh))
    , xh = {}
    , yh = Object.freeze((xh.search = "s",
  xh.youtube = "y",
  xh.playstore = "p",
  xh.shopping = "h",
  xh.ads = "a",
  xh.maps = "m",
  xh));
  Object.freeze(N.g);
  var zh = {}
    , Ah = (zh[N.g.Sb] = "gcu",
  zh[N.g.ob] = "gclgb",
  zh[N.g.Wa] = "gclaw",
  zh[N.g.hf] = "gclgs",
  zh[N.g.jf] = "gcllp",
  zh[N.g.kf] = "gclst",
  zh[N.g.Hb] = "auid",
  zh[N.g.Od] = "dscnt",
  zh[N.g.Pd] = "fcntr",
  zh[N.g.Qd] = "flng",
  zh[N.g.Rd] = "mid",
  zh[N.g.og] = "bttype",
  zh[N.g.rb] = "label",
  zh[N.g.Wb] = "capi",
  zh[N.g.rf] = "pscdl",
  zh[N.g.wa] = "currency_code",
  zh[N.g.Sd] = "vdltv",
  zh[N.g.Li] = "_dbg",
  zh[N.g.Yd] = "oedeld",
  zh[N.g.ab] = "edid",
  zh[N.g.Qi] = "fdr",
  zh[N.g.wg] = "fledge",
  zh[N.g.ce] = "gac",
  zh[N.g.xc] = "gacgb",
  zh[N.g.Bg] = "gacmcov",
  zh[N.g.yc] = "gdpr",
  zh[N.g.cb] = "gdid",
  zh[N.g.zc] = "_ng",
  zh[N.g.Gg] = "gsaexp",
  zh[N.g.Jb] = "frm",
  zh[N.g.ee] = "gtm_up",
  zh[N.g.fd] = "lps",
  zh[N.g.fe] = "did",
  zh[N.g.gd] = void 0,
  zh[N.g.eb] = "tiba",
  zh[N.g.Zb] = "rdp",
  zh[N.g.wb] = "ecsid",
  zh[N.g.Cf] = "ga_uid",
  zh[N.g.md] = "delopc",
  zh[N.g.Cc] = "gdpr_consent",
  zh[N.g.xa] = "oid",
  zh[N.g.Ff] = "uaa",
  zh[N.g.Gf] = "uab",
  zh[N.g.Hf] = "uafvl",
  zh[N.g.If] = "uamb",
  zh[N.g.Jf] = "uam",
  zh[N.g.Kf] = "uap",
  zh[N.g.Lf] = "uapv",
  zh[N.g.Mf] = "uaw",
  zh[N.g.Rg] = "ec_lat",
  zh[N.g.Sg] = "ec_meta",
  zh[N.g.Tg] = "ec_m",
  zh[N.g.Ug] = "ec_sel",
  zh[N.g.Vg] = "ec_s",
  zh[N.g.nd] = "ec_mode",
  zh[N.g.ya] = "userId",
  zh[N.g.me] = "us_privacy",
  zh[N.g.ka] = "value",
  zh[N.g.Wg] = "mcov",
  zh[N.g.nj] = "hn",
  zh[N.g.oj] = "gtm_ee",
  zh[N.g.Ob] = "npa",
  zh[N.g.Wc] = null,
  zh[N.g.Mb] = null,
  zh[N.g.Qa] = null,
  zh[N.g.ba] = null,
  zh[N.g.qa] = null,
  zh[N.g.Aa] = null,
  zh[N.g.Df] = null,
  zh[N.g.od] = null,
  zh[N.g.Jd] = null,
  zh[N.g.Kd] = null,
  zh);
  function Bh(a, b) {
      if (a) {
          var c = a.split("x");
          c.length === 2 && (b.u_w = c[0],
          b.u_h = c[1])
      }
  }
  function Ch(a, b) {
      a && (a.length === 2 ? b.hl = a : a.length === 5 && (b.hl = a.substring(0, 2),
      b.gl = a.substring(3, 5)))
  }
  function Dh(a) {
      var b = Eh;
      b = b === void 0 ? Fh : b;
      var c;
      var d = b;
      if (a && a.length) {
          for (var e = [], f = 0; f < a.length; ++f) {
              var g = a[f];
              g && e.push({
                  item_id: d(g),
                  quantity: g.quantity,
                  value: g.price,
                  start_date: g.start_date,
                  end_date: g.end_date
              })
          }
          c = e
      } else
          c = [];
      var k;
      var m = c;
      if (m) {
          for (var n = [], p = 0; p < m.length; p++) {
              var q = m[p]
                , r = [];
              q && (r.push(Gh(q.value)),
              r.push(Gh(q.quantity)),
              r.push(Gh(q.item_id)),
              r.push(Gh(q.start_date)),
              r.push(Gh(q.end_date)),
              n.push("(" + r.join("*") + ")"))
          }
          k = n.length > 0 ? n.join("") : ""
      } else
          k = "";
      return k
  }
  function Fh(a) {
      return Hh(a.item_id, a.id, a.item_name)
  }
  function Hh() {
      for (var a = h(ya.apply(0, arguments)), b = a.next(); !b.done; b = a.next()) {
          var c = b.value;
          if (c !== null && c !== void 0)
              return c
      }
  }
  function Ih(a) {
      if (a && a.length) {
          for (var b = [], c = 0; c < a.length; ++c) {
              var d = a[c];
              d && d.estimated_delivery_date ? b.push("" + d.estimated_delivery_date) : b.push("")
          }
          return b.join(",")
      }
  }
  function Gh(a) {
      return typeof a !== "number" && typeof a !== "string" ? "" : a.toString()
  }
  ;function Jh(a) {
      return Kh ? E.querySelectorAll(a) : null
  }
  function Lh(a, b) {
      if (!Kh)
          return null;
      if (Element.prototype.closest)
          try {
              return a.closest(b)
          } catch (e) {
              return null
          }
      var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector
        , d = a;
      if (!E.documentElement.contains(d))
          return null;
      do {
          try {
              if (c.call(d, b))
                  return d
          } catch (e) {
              break
          }
          d = d.parentElement || d.parentNode
      } while (d !== null && d.nodeType === 1);
      return null
  }
  var Mh = !1;
  if (E.querySelectorAll)
      try {
          var Nh = E.querySelectorAll(":root");
          Nh && Nh.length == 1 && Nh[0] == E.documentElement && (Mh = !0)
      } catch (a) {}
  var Kh = Mh;
  var Oh = /^[0-9A-Fa-f]{64}$/;
  function Ph(a) {
      try {
          return (new TextEncoder).encode(a)
      } catch (e) {
          for (var b = [], c = 0; c < a.length; c++) {
              var d = a.charCodeAt(c);
              d < 128 ? b.push(d) : d < 2048 ? b.push(192 | d >> 6, 128 | d & 63) : d < 55296 || d >= 57344 ? b.push(224 | d >> 12, 128 | d >> 6 & 63, 128 | d & 63) : (d = 65536 + ((d & 1023) << 10 | a.charCodeAt(++c) & 1023),
              b.push(240 | d >> 18, 128 | d >> 12 & 63, 128 | d >> 6 & 63, 128 | d & 63))
          }
          return new Uint8Array(b)
      }
  }
  function Qh(a) {
      if (a === "" || a === "e0")
          return Promise.resolve(a);
      var b;
      if ((b = C.crypto) == null ? 0 : b.subtle) {
          if (Oh.test(a))
              return Promise.resolve(a);
          try {
              var c = Ph(a);
              return C.crypto.subtle.digest("SHA-256", c).then(function(d) {
                  var e = Array.from(new Uint8Array(d)).map(function(f) {
                      return String.fromCharCode(f)
                  }).join("");
                  return C.btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
              }).catch(function() {
                  return "e2"
              })
          } catch (d) {
              return Promise.resolve("e2")
          }
      } else
          return Promise.resolve("e1")
  }
  ;function Rh(a, b) {
      if (a === "")
          return b;
      var c = Number(a);
      return isNaN(c) ? b : c
  }
  ;var Sh = [];
  function Th(a) {
      switch (a) {
      case 0:
          return 0;
      case 43:
          return 1;
      case 44:
          return 2;
      case 45:
          return 11;
      case 51:
          return 3;
      case 62:
          return 4;
      case 74:
          return 7;
      case 87:
          return 5;
      case 101:
          return 6;
      case 102:
          return 13;
      case 103:
          return 10;
      case 105:
          return 8;
      case 106:
          return 9
      }
  }
  function P(a) {
      Sh[a] = !0;
      var b = Th(a);
      b !== void 0 && (ib[b] = !0)
  }
  P(33);
  P(29);
  P(30);
  P(31);
  P(32);
  P(46);
  P(78);
  P(16);
  P(112);
  P(15);
  P(117);
  P(111);
  P(63);
  P(88);
  P(7);
  P(47);
  P(4);
  P(82);
  P(108);
  P(73);
  P(69);
  P(71);
  P(86);
  P(122);
  P(97);

  P(118);
  P(87);
  P(5);
  P(74);
  P(101);
  jb[1] = Rh('1', 6E4);
  jb[3] = Rh('10', 1);
  jb[2] = Rh('', 50);
  P(25);
  P(13);
  P(68);
  P(109);
  P(9);
  P(89);

  P(54);
  P(24);
  P(105);
  P(106);
  P(103);
  P(100);
  P(92);
  P(49);
  P(22);
  P(51);
  P(59);
  P(64);
  P(66);
  P(75);
  P(102);
  P(107);
  P(70);
  P(6);
  P(58);
  function Q(a) {
      return !!Sh[a]
  }
  function T(a) {
      fb("GTM", a)
  }
  ;var Xh = function(a) {
      var b = {}
        , c = ["tv.1"]
        , d = 0;
      var v = c.join("~");
      return {
          bi: {
              userData: b
          },
          kn: v,
          sn: d
      }
  }
    , Vh = function(a) {
      return Yh.indexOf(a) !== -1
  }
    , ai = function(a, b) {
      if (C.Promise)
          try {
              var c = new Promise(function(d) {
                  Zh(a, d)
              }
              );
              return c
          } catch (d) {}
  }
    , bi = function(a) {
      if (C.Promise)
          try {
              return new Promise(function(b) {
                  Zh(a, function(c) {
                      b(c)
                  })
              }
              )
          } catch (b) {}
  }
    , ci = function(a) {
      for (var b = a.Ze, c = a.time, d = ["tv.1"], e = 0, f = !1, g = 0; g < b.length; ++g) {
          var k = b[g].name
            , m = b[g].value
            , n = b[g].index
            , p = Uh[k];
          p && m && (!Vh(k) || /^e\d+$/.test(m) || Wh.test(m) || Oh.test(m)) && (n !== void 0 && (p += n),
          d.push(p + "." + m),
          e++)
      }
      b.length === 1 && b[0].name === "error_code" && (e = 0,
      f = !0);
      return {
          Qb: encodeURIComponent(d.join("~")),
          Zf: e,
          time: c,
          Sj: f
      }
  }
    , Zh = function(a, b) {
      di(a, function(c) {
          b(ci(c))
      })
  }
    , li = function(a) {
      function b(r, t, v, u) {
          var w = ei(r);
          w !== "" && (Oh.test(w) ? k.push({
              name: t,
              value: w,
              index: u
          }) : k.push({
              name: t,
              value: v(w),
              index: u
          }))
      }
      function c(r, t) {
          var v = r;
          if (l(v) || Array.isArray(v)) {
              v = ob(r);
              for (var u = 0; u < v.length; ++u) {
                  var w = ei(v[u])
                    , x = Oh.test(w);
                  t && !x && T(89);
                  !t && x && T(88)
              }
          }
      }
      function d(r, t) {
          var v = r[t];
          c(v, !1);
          var u = fi[t];
          r[u] && (r[t] && T(90),
          v = r[u],
          c(v, !0));
          return v
      }
      function e(r, t, v) {
          for (var u = ob(d(r, t)), w = 0; w < u.length; ++w)
              b(u[w], t, v)
      }
      function f(r, t, v, u) {
          var w = d(r, t);
          b(w, t, v, u)
      }
      function g(r) {
          return function(t) {
              T(64);
              return r(t)
          }
      }
      var k = [];
      if (C.location.protocol !== "https:")
          return k.push({
              name: "error_code",
              value: "e3",
              index: void 0
          }),
          k;
      e(a, "email", gi);
      e(a, "phone_number", hi);
      e(a, "first_name", g(ii));
      e(a, "last_name", g(ii));
      var m = a.home_address || {};
      e(m, "street", g(ji));
      e(m, "city", g(ji));
      e(m, "postal_code", g(ki));
      e(m, "region", g(ji));
      e(m, "country", g(ki));
      for (var n = ob(a.address || {}), p = 0; p < n.length; p++) {
          var q = n[p];
          f(q, "first_name", ii, p);
          f(q, "last_name", ii, p);
          f(q, "street", ji, p);
          f(q, "city", ji, p);
          f(q, "postal_code", ki, p);
          f(q, "region", ji, p);
          f(q, "country", ki, p)
      }
      return k
  }
    , mi = function(a) {
      var b = a ? li(a) : [];
      return ci({
          Ze: b
      })
  }
    , ni = function(a) {
      return a && a != null && Object.keys(a).length > 0 && C.Promise ? li(a).some(function(b) {
          return b.value && Vh(b.name) && !Oh.test(b.value)
      }) : !1
  }
    , di = function(a, b) {
      var c = li(a);
      oi(c, b)
  }
    , ei = function(a) {
      return a == null ? "" : l(a) ? xb(String(a)) : "e0"
  }
    , ki = function(a) {
      return a.replace(pi, "")
  }
    , ii = function(a) {
      return ji(a.replace(/\s/g, ""))
  }
    , ji = function(a) {
      return xb(a.replace(qi, "").toLowerCase())
  }
    , hi = function(a) {
      a = a.replace(/[\s-()/.]/g, "");
      a.charAt(0) !== "+" && (a = "+" + a);
      return ri.test(a) ? a : "e0"
  }
    , gi = function(a) {
      var b = a.toLowerCase().split("@");
      if (b.length === 2) {
          var c = b[0];
          /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
          c = c + "@" + b[1];
          if (si.test(c))
              return c
      }
      return "e0"
  }
    , oi = function(a, b) {
      var c = !1;
      if (c = Q(53) ? !a.some(function(e) {
          return e.value && Vh(e.name)
      }) : a.some(function(e) {
          e.value && Vh(e.name)
      }))
          b({
              Ze: a
          });
      else if (C.Promise) {
          var d;
          Q(52) && (d = Nc());
          Promise.all(a.map(function(e) {
              return e.value && Vh(e.name) ? Qh(e.value).then(function(f) {
                  e.value = f
              }) : Promise.resolve()
          })).then(function() {
              var e = {
                  Ze: a
              };
              if (Q(52)) {
                  var f = Nc();
                  d && f && (e.time = Math.round(f) - Math.round(d))
              }
              b(e)
          }).catch(function() {
              b({
                  Ze: []
              })
          })
      } else
          b({
              Ze: []
          })
  }
    , qi = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g
    , si = /^\S+@\S+\.\S+$/
    , ri = /^\+\d{10,15}$/
    , pi = /[.~]/g
    , Wh = /^[0-9A-Za-z_-]{43}$/
    , ti = {}
    , Uh = (ti.email = "em",
  ti.phone_number = "pn",
  ti.first_name = "fn",
  ti.last_name = "ln",
  ti.street = "sa",
  ti.city = "ct",
  ti.region = "rg",
  ti.country = "co",
  ti.postal_code = "pc",
  ti.error_code = "ec",
  ti)
    , ui = {}
    , fi = (ui.email = "sha256_email_address",
  ui.phone_number = "sha256_phone_number",
  ui.first_name = "sha256_first_name",
  ui.last_name = "sha256_last_name",
  ui.street = "sha256_street",
  ui);
  var Yh = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
  var vi = {}
    , wi = C.google_tag_manager = C.google_tag_manager || {};
  vi.bh = "4a70";
  vi.ve = Number("0") || 0;
  vi.kb = "dataLayer";
  vi.vn = "ChAI8PaduAYQ9M3pkOa5ur1YEiQAuShFYzKU3ANEvdhxFKsPAIDYwVyUUkX4uHxYrRUlmuFNwu4aAtAx";
  var xi = {
      __cl: 1,
      __ecl: 1,
      __ehl: 1,
      __evl: 1,
      __fal: 1,
      __fil: 1,
      __fsl: 1,
      __hl: 1,
      __jel: 1,
      __lcl: 1,
      __sdl: 1,
      __tl: 1,
      __ytl: 1
  }, yi = {
      __paused: 1,
      __tg: 1
  }, zi;
  for (zi in xi)
      xi.hasOwnProperty(zi) && (yi[zi] = 1);
  var Ai = vb("true"), Bi = !0, Ci, Di = !1;
  Di = !0;
  Ci = Di;
  var Ei, Fi = !1;
  Ei = Fi;
  var Gi, Hi = !1;
  Gi = Hi;
  vi.Id = "www.googletagmanager.com";
  var Ii = "" + vi.Id + (Ci ? "/gtag/js" : "/gtm.js")
    , Ji = null
    , Ki = null
    , Li = {}
    , Mi = {};
  function Ni() {
      var a = wi.sequence || 1;
      wi.sequence = a + 1;
      return a
  }
  vi.xk = "true";
  var Oi = "";
  vi.eh = Oi;
  var Pi = new function() {
      this.j = "";
      this.H = !1;
      this.C = 0;
      this.P = this.Z = this.Ra = this.K = ""
  }
  ;
  function Qi() {
      var a = Pi.K.length;
      return Pi.K[a - 1] === "/" ? Pi.K.substring(0, a - 1) : Pi.K
  }
  function Ri() {
      return Pi.H && Pi.C !== 1
  }
  function Si(a) {
      for (var b = {}, c = h(a.split("|")), d = c.next(); !d.done; d = c.next())
          b[d.value] = !0;
      return b
  }
  var Ti = new sb
    , Ui = {}
    , Vi = {}
    , Yi = {
      name: vi.kb,
      set: function(a, b) {
          Sa(Hb(a, b), Ui);
          Wi()
      },
      get: function(a) {
          return Xi(a, 2)
      },
      reset: function() {
          Ti = new sb;
          Ui = {};
          Wi()
      }
  };
  function Xi(a, b) {
      return b != 2 ? Ti.get(a) : Zi(a)
  }
  function Zi(a, b) {
      var c = a.split(".");
      b = b || [];
      for (var d = Ui, e = 0; e < c.length; e++) {
          if (d === null)
              return !1;
          if (d === void 0)
              break;
          d = d[c[e]];
          if (b.indexOf(d) !== -1)
              return
      }
      return d
  }
  function $i(a, b) {
      Vi.hasOwnProperty(a) || (Ti.set(a, b),
      Sa(Hb(a, b), Ui),
      Wi())
  }
  function aj() {
      for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], b = 0; b < a.length; b++) {
          var c = a[b]
            , d = Xi(c, 1);
          if (Array.isArray(d) || Qa(d))
              d = Sa(d);
          Vi[c] = d
      }
  }
  function Wi(a) {
      z(Vi, function(b, c) {
          Ti.set(b, c);
          Sa(Hb(b), Ui);
          Sa(Hb(b, c), Ui);
          a && delete Vi[b]
      })
  }
  function bj(a, b) {
      var c, d = (b === void 0 ? 2 : b) !== 1 ? Zi(a) : Ti.get(a);
      Na(d) === "array" || Na(d) === "object" ? c = Sa(d) : c = d;
      return c
  }
  ;var cj = function(a, b, c) {
      if (!c)
          return !1;
      var d = c.selector_type, e = String(c.value), f = Q(107), g;
      if (f || d === "js_variable")
          for (var k = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "").split(","), m = 0; m < k.length; m++) {
              var n = k[m].trim();
              if (n && !Eb(n, "#") && !Eb(n, ".")) {
                  if (Eb(n, "dataLayer."))
                      g = Xi(n.substring(10));
                  else {
                      var p = n.split(".");
                      g = C[p.shift()];
                      for (var q = 0; q < p.length; q++)
                          g = g && g[p[q]]
                  }
                  if (g !== void 0)
                      break
              }
          }
      if ((f && g === void 0 || !f && d === "css_selector") && Kh)
          try {
              var r = Jh(e);
              if (r && r.length > 0) {
                  g = [];
                  for (var t = 0; t < r.length && t < (b === "email" || b === "phone_number" ? 5 : 1); t++)
                      g.push(Ec(r[t]) || xb(r[t].value));
                  g = g.length === 1 ? g[0] : g
              }
          } catch (v) {
              T(149)
          }
      return g ? (a[b] = g,
      !0) : !1
  }
    , dj = function(a) {
      if (a) {
          var b = {}
            , c = !1;
          c = cj(b, "email", a.email) || c;
          c = cj(b, "phone_number", a.phone) || c;
          b.address = [];
          for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
              var f = {};
              c = cj(f, "first_name", d[e].first_name) || c;
              c = cj(f, "last_name", d[e].last_name) || c;
              c = cj(f, "street", d[e].street) || c;
              c = cj(f, "city", d[e].city) || c;
              c = cj(f, "region", d[e].region) || c;
              c = cj(f, "country", d[e].country) || c;
              c = cj(f, "postal_code", d[e].postal_code) || c;
              b.address.push(f)
          }
          return c ? b : void 0
      }
  }
    , ej = function(a, b) {
      switch (a.enhanced_conversions_mode) {
      case "manual":
          if (b && Qa(b))
              return b;
          var c = a.enhanced_conversions_manual_var;
          if (c !== void 0)
              return c;
          var d = C.enhanced_conversion_data;
          d && T(154);
          return d;
      case "automatic":
          return dj(a[N.g.vg])
      }
  }
    , fj = function(a) {
      return Qa(a) ? !!a.enable_code : !1
  };
  var gj = /:[0-9]+$/
    , hj = /^\d+\.fls\.doubleclick\.net$/;
  function ij(a, b, c, d) {
      for (var e = [], f = h(a.split("&")), g = f.next(); !g.done; g = f.next()) {
          var k = h(g.value.split("="))
            , m = k.next().value
            , n = la(k);
          if (decodeURIComponent(m.replace(/\+/g, " ")) === b) {
              var p = n.join("=");
              if (!c)
                  return d ? p : decodeURIComponent(p.replace(/\+/g, " "));
              e.push(d ? p : decodeURIComponent(p.replace(/\+/g, " ")))
          }
      }
      return c ? e : void 0
  }
  function jj(a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if (b === "protocol" || b === "port")
          a.protocol = kj(a.protocol) || kj(C.location.protocol);
      b === "port" ? a.port = String(Number(a.hostname ? a.port : C.location.port) || (a.protocol === "http" ? 80 : a.protocol === "https" ? 443 : "")) : b === "host" && (a.hostname = (a.hostname || C.location.hostname).replace(gj, "").toLowerCase());
      return lj(a, b, c, d, e)
  }
  function lj(a, b, c, d, e) {
      var f, g = kj(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
      case "url_no_fragment":
          f = mj(a);
          break;
      case "protocol":
          f = g;
          break;
      case "host":
          f = a.hostname.replace(gj, "").toLowerCase();
          if (c) {
              var k = /^www\d*\./.exec(f);
              k && k[0] && (f = f.substring(k[0].length))
          }
          break;
      case "port":
          f = String(Number(a.port) || (g === "http" ? 80 : g === "https" ? 443 : ""));
          break;
      case "path":
          a.pathname || a.hostname || fb("TAGGING", 1);
          f = a.pathname.substring(0, 1) === "/" ? a.pathname : "/" + a.pathname;
          var m = f.split("/");
          (d || []).indexOf(m[m.length - 1]) >= 0 && (m[m.length - 1] = "");
          f = m.join("/");
          break;
      case "query":
          f = a.search.replace("?", "");
          e && (f = ij(f, e, !1));
          break;
      case "extension":
          var n = a.pathname.split(".");
          f = n.length > 1 ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
      case "fragment":
          f = a.hash.replace("#", "");
          break;
      default:
          f = a && a.href
      }
      return f
  }
  function kj(a) {
      return a ? a.replace(":", "").toLowerCase() : ""
  }
  function mj(a) {
      var b = "";
      if (a && a.href) {
          var c = a.href.indexOf("#");
          b = c < 0 ? a.href : a.href.substring(0, c)
      }
      return b
  }
  var nj = {}
    , oj = 0;
  function pj(a) {
      var b = nj[a];
      if (!b) {
          var c = E.createElement("a");
          a && (c.href = a);
          var d = c.pathname;
          d[0] !== "/" && (a || fb("TAGGING", 1),
          d = "/" + d);
          var e = c.hostname.replace(gj, "");
          b = {
              href: c.href,
              protocol: c.protocol,
              host: c.host,
              hostname: e,
              pathname: d,
              search: c.search,
              hash: c.hash,
              port: c.port
          };
          oj < 5 && (nj[a] = b,
          oj++)
      }
      return b
  }
  function qj(a) {
      function b(n) {
          var p = n.split("=")[0];
          return d.indexOf(p) < 0 ? n : p + "=0"
      }
      function c(n) {
          return n.split("&").map(b).filter(function(p) {
              return p !== void 0
          }).join("&")
      }
      var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" ")
        , e = pj(a)
        , f = a.split(/[?#]/)[0]
        , g = e.search
        , k = e.hash;
      g[0] === "?" && (g = g.substring(1));
      k[0] === "#" && (k = k.substring(1));
      g = c(g);
      k = c(k);
      g !== "" && (g = "?" + g);
      k !== "" && (k = "#" + k);
      var m = "" + f + g + k;
      m[m.length - 1] === "/" && (m = m.substring(0, m.length - 1));
      return m
  }
  function rj(a) {
      var b = pj(C.location.href)
        , c = jj(b, "host", !1);
      if (c && c.match(hj)) {
          var d = jj(b, "path");
          if (d) {
              var e = d.split(a + "=");
              if (e.length > 1)
                  return e[1].split(";")[0].split("?")[0]
          }
      }
  }
  function sj(a) {
      for (var b = 0; b < 3; ++b)
          try {
              var c = decodeURIComponent(a).replace(/\+/g, " ");
              if (c === a)
                  break;
              a = c
          } catch (d) {
              return ""
          }
      return a
  }
  ;var tj = {
      "https://www.google.com": "/g",
      "https://www.googleadservices.com": "/as",
      "https://pagead2.googlesyndication.com": "/gs"
  };
  function uj(a, b) {
      if (a) {
          var c = "" + a;
          c.indexOf("http://") !== 0 && c.indexOf("https://") !== 0 && (c = "https://" + c);
          c[c.length - 1] === "/" && (c = c.substring(0, c.length - 1));
          return pj("" + c + b).href
      }
  }
  function vj(a, b) {
      if (Ri() || Ei)
          return uj(a, b)
  }
  function wj() {
      return !!vi.eh && vi.eh.split("@@").join("") !== "SGTM_TOKEN"
  }
  function xj(a) {
      for (var b = h([N.g.kd, N.g.Nb]), c = b.next(); !c.done; c = b.next()) {
          var d = V(a, c.value);
          if (d)
              return d
      }
  }
  function yj(a, b) {
      return Ri() ? "" + Qi() + (b ? tj[a] || "" : "") : a
  }
  ;function zj(a) {
      var b = String(a[He.la] || "").replace(/_/g, "");
      return Eb(b, "cvt") ? "cvt" : b
  }
  var Aj = C.location.search.indexOf("?gtm_latency=") >= 0 || C.location.search.indexOf("&gtm_latency=") >= 0;
  var Bj = {
      sampleRate: "0.005000",
      tk: "",
      tn: "0.01"
  }, Cj = Math.random(), Dj;
  if (!(Dj = Aj)) {
      var Ej = Bj.sampleRate;
      Dj = Cj < Number(Ej)
  }
  var Fj = Dj
    , Gj = (qc == null ? void 0 : qc.includes("gtm_debug=d")) || Aj || Cj >= 1 - Number(Bj.tn);
  var Hj = /gtag[.\/]js/
    , Ij = /gtm[.\/]js/
    , Jj = !1;
  function Kj(a) {
      if (Jj)
          return "1";
      var b = a.scriptSource;
      if (b) {
          if (Hj.test(b))
              return "3";
          if (Ij.test(b))
              return "2"
      }
      return "0"
  }
  function Lj(a, b) {
      var c = Pj();
      c.pending || (c.pending = []);
      pb(c.pending, function(d) {
          return d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
      }) || c.pending.push({
          target: a,
          onLoad: b
      })
  }
  function Qj() {
      var a = C.google_tags_first_party;
      Array.isArray(a) || (a = []);
      for (var b = {}, c = h(a), d = c.next(); !d.done; d = c.next())
          b[d.value] = !0;
      return Object.freeze(b)
  }
  var Rj = function() {
      this.container = {};
      this.destination = {};
      this.canonical = {};
      this.pending = [];
      this.siloed = [];
      this.injectedFirstPartyContainers = {};
      this.injectedFirstPartyContainers = Qj()
  };
  function Pj() {
      var a = rc("google_tag_data", {})
        , b = a.tidr;
      b && typeof b === "object" || (b = new Rj,
      a.tidr = b);
      var c = b;
      c.container || (c.container = {});
      c.destination || (c.destination = {});
      c.canonical || (c.canonical = {});
      c.pending || (c.pending = []);
      c.siloed || (c.siloed = []);
      c.injectedFirstPartyContainers || (c.injectedFirstPartyContainers = Qj());
      return c
  }
  ;var Sj = {}
    , Tj = !1
    , Nf = {
      ctid: "DC-13082624",
      canonicalContainerId: "190369469",
      Yj: "DC-13082624|GT-PLTMBVTT",
      Zj: "DC-13082624"
  };
  Sj.se = vb("true");
  function Uj() {
      var a = Vj();
      return Tj ? a.map(Wj) : a
  }
  function Xj() {
      var a = Yj();
      return Tj ? a.map(Wj) : a
  }
  function Zj() {
      return ak(Nf.ctid)
  }
  function bk() {
      return ak(Nf.canonicalContainerId || "_" + Nf.ctid)
  }
  function Vj() {
      return Nf.Yj ? Nf.Yj.split("|") : [Nf.ctid]
  }
  function Yj() {
      return Nf.Zj ? Nf.Zj.split("|") : []
  }
  function ck() {
      var a = dk(ek())
        , b = a && a.parent;
      if (b)
          return dk(b)
  }
  function dk(a) {
      var b = Pj();
      return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid]
  }
  function ak(a) {
      return Tj ? Wj(a) : a
  }
  function Wj(a) {
      return "siloed_" + a
  }
  function fk(a) {
      return Tj ? gk(a) : a
  }
  function gk(a) {
      a = String(a);
      return Eb(a, "siloed_") ? a.substring(7) : a
  }
  function hk() {
      var a = !1;
      a = !0;
      if (a) {
          var b = Pj();
          if (b.siloed) {
              for (var c = [], d = Vj().map(Wj), e = Yj().map(Wj), f = {}, g = 0; g < b.siloed.length; f = {
                  Rf: void 0
              },
              g++)
                  f.Rf = b.siloed[g],
                  !Tj && pb(f.Rf.isDestination ? e : d, function(k) {
                      return function(m) {
                          return m === k.Rf.ctid
                      }
                  }(f)) ? Tj = !0 : c.push(f.Rf);
              b.siloed = c
          }
      }
  }
  function ik() {
      var a = Pj();
      if (a.pending) {
          for (var b, c = [], d = !1, e = Uj(), f = Xj(), g = {}, k = 0; k < a.pending.length; g = {
              Xe: void 0
          },
          k++)
              g.Xe = a.pending[k],
              pb(g.Xe.target.isDestination ? f : e, function(m) {
                  return function(n) {
                      return n === m.Xe.target.ctid
                  }
              }(g)) ? d || (b = g.Xe.onLoad,
              d = !0) : c.push(g.Xe);
          a.pending = c;
          if (b)
              try {
                  b(bk())
              } catch (m) {}
      }
  }
  function jk() {
      for (var a = Nf.ctid, b = Uj(), c = Xj(), d = function(n, p) {
          var q = {
              canonicalContainerId: Nf.canonicalContainerId,
              scriptContainerId: a,
              state: 2,
              containers: b.slice(),
              destinations: c.slice()
          };
          pc && (q.scriptElement = pc);
          qc && (q.scriptSource = qc);
          if (ck() === void 0) {
              var r;
              a: {
                  if ((q.scriptContainerId || "").indexOf("GTM-") >= 0) {
                      var t;
                      b: {
                          if (q.scriptSource) {
                              for (var v = Pi.H, u = pj(q.scriptSource), w = v ? u.pathname : "" + u.hostname + u.pathname, x = E.scripts, y = "", A = 0; A < x.length; ++A) {
                                  var B = x[A];
                                  if (!(B.innerHTML.length === 0 || !v && B.innerHTML.indexOf(q.scriptContainerId || "SHOULD_NOT_BE_SET") < 0 || B.innerHTML.indexOf(w) < 0)) {
                                      if (B.innerHTML.indexOf("(function(w,d,s,l,i)") >= 0) {
                                          t = String(A);
                                          break b
                                      }
                                      y = String(A)
                                  }
                              }
                              if (y) {
                                  t = y;
                                  break b
                              }
                          }
                          t = void 0
                      }
                      var D = t;
                      if (D) {
                          Jj = !0;
                          r = D;
                          break a
                      }
                  }
                  var H = [].slice.call(document.scripts);
                  r = q.scriptElement ? String(H.indexOf(q.scriptElement)) : "-1"
              }
              q.htmlLoadOrder = r;
              q.loadScriptType = Kj(q)
          }
          var J = p ? e.destination : e.container
            , G = J[n];
          G ? (p && G.state === 0 && T(93),
          Object.assign(G, q)) : J[n] = q
      }, e = Pj(), f = h(b), g = f.next(); !g.done; g = f.next())
          d(g.value, !1);
      for (var k = h(c), m = k.next(); !m.done; m = k.next())
          d(m.value, !0);
      e.canonical[bk()] = {};
      ik()
  }
  function kk(a) {
      return !!Pj().container[a]
  }
  function lk(a) {
      var b = Pj().destination[a];
      return !!b && !!b.state
  }
  function ek() {
      return {
          ctid: Zj(),
          isDestination: Sj.se
      }
  }
  function mk(a) {
      var b = Pj();
      (b.siloed = b.siloed || []).push(a)
  }
  function nk() {
      var a = Pj().container, b;
      for (b in a)
          if (a.hasOwnProperty(b) && a[b].state === 1)
              return !0;
      return !1
  }
  function ok() {
      var a = {};
      z(Pj().destination, function(b, c) {
          c.state === 0 && (a[gk(b)] = c)
      });
      return a
  }
  function pk(a) {
      return !!(a && a.parent && a.context && a.context.source === 1 && a.parent.ctid.indexOf("GTM-") !== 0)
  }
  var qk = "/td?id=" + Nf.ctid
    , rk = ["v", "t", "pid", "dl", "tdp"]
    , sk = ["mcc"]
    , tk = {}
    , uk = {};
  function vk(a, b, c) {
      uk[a] = b;
      (c === void 0 || c) && wk(a)
  }
  function wk(a, b) {
      if (tk[a] === void 0 || (b === void 0 ? 0 : b))
          tk[a] = !0
  }
  function xk(a) {
      a = a === void 0 ? !1 : a;
      var b = Object.keys(tk).filter(function(c) {
          return tk[c] === !0 && uk[c] !== void 0 && (a || !sk.includes(c))
      }).map(function(c) {
          var d = uk[c];
          typeof d === "function" && (d = d());
          return d ? "&" + c + "=" + d : ""
      }).join("");
      return "" + yj("https://www.googletagmanager.com") + qk + ("" + b + "&z=0")
  }
  function yk() {
      Object.keys(tk).forEach(function(a) {
          rk.indexOf(a) < 0 && (tk[a] = !1)
      })
  }
  function zk(a) {
      a = a === void 0 ? !1 : a;
      if (Gj && Nf.ctid) {
          var b = xk(a);
          a ? Kc(b) : zc(b);
          yk()
      }
  }
  function Ak() {
      Object.keys(tk).filter(function(a) {
          return tk[a] && !rk.includes(a)
      }).length > 0 && zk(!0)
  }
  var Bk = qb();
  function Ck() {
      Bk = qb()
  }
  function Dk() {
      vk("v", "3");
      vk("t", "t");
      vk("pid", function() {
          return String(Bk)
      });
      Bc(C, "pagehide", Ak);
      C.setInterval(Ck, 864E5)
  }
  function Ek() {
      var a = rc("google_tag_data", {});
      return a.ics = a.ics || new Fk
  }
  var Fk = function() {
      this.entries = {};
      this.waitPeriodTimedOut = this.wasSetLate = this.accessedAny = this.accessedDefault = this.usedImplicit = this.usedUpdate = this.usedDefault = this.usedDeclare = this.active = !1;
      this.j = []
  };
  Fk.prototype.default = function(a, b, c, d, e, f, g) {
      this.usedDefault || this.usedDeclare || !this.accessedDefault && !this.accessedAny || (this.wasSetLate = !0);
      this.usedDefault = this.active = !0;
      fb("TAGGING", 19);
      b == null ? fb("TAGGING", 18) : Gk(this, a, b === "granted", c, d, e, f, g)
  }
  ;
  Fk.prototype.waitForUpdate = function(a, b, c) {
      for (var d = 0; d < a.length; d++)
          Gk(this, a[d], void 0, void 0, "", "", b, c)
  }
  ;
  var Gk = function(a, b, c, d, e, f, g, k) {
      var m = a.entries
        , n = m[b] || {}
        , p = n.region
        , q = d && l(d) ? d.toUpperCase() : void 0;
      e = e.toUpperCase();
      f = f.toUpperCase();
      if (e === "" || q === f || (q === e ? p !== f : !q && !p)) {
          var r = !!(g && g > 0 && n.update === void 0)
            , t = {
              region: q,
              declare_region: n.declare_region,
              implicit: n.implicit,
              default: c !== void 0 ? c : n.default,
              declare: n.declare,
              update: n.update,
              quiet: r
          };
          if (e !== "" || n.default !== !1)
              m[b] = t;
          r && C.setTimeout(function() {
              m[b] === t && t.quiet && (fb("TAGGING", 2),
              a.waitPeriodTimedOut = !0,
              a.clearTimeout(b, void 0, k),
              a.notifyListeners())
          }, g)
      }
  };
  aa = Fk.prototype;
  aa.clearTimeout = function(a, b, c) {
      var d = [a], e = c.delegatedConsentTypes, f;
      for (f in e)
          e.hasOwnProperty(f) && e[f] === a && d.push(f);
      var g = this.entries[a] || {}
        , k = this.getConsentState(a, c);
      if (g.quiet) {
          g.quiet = !1;
          for (var m = h(d), n = m.next(); !n.done; n = m.next())
              Hk(this, n.value)
      } else if (b !== void 0 && k !== b)
          for (var p = h(d), q = p.next(); !q.done; q = p.next())
              Hk(this, q.value)
  }
  ;
  aa.update = function(a, b, c) {
      this.usedDefault || this.usedDeclare || this.usedUpdate || !this.accessedAny || (this.wasSetLate = !0);
      this.usedUpdate = this.active = !0;
      if (b != null) {
          var d = this.getConsentState(a, c)
            , e = this.entries;
          (e[a] = e[a] || {}).update = b === "granted";
          this.clearTimeout(a, d, c)
      }
  }
  ;
  aa.declare = function(a, b, c, d, e) {
      this.usedDeclare = this.active = !0;
      var f = this.entries
        , g = f[a] || {}
        , k = g.declare_region
        , m = c && l(c) ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      if (d === "" || m === e || (m === d ? k !== e : !m && !k)) {
          var n = {
              region: g.region,
              declare_region: m,
              declare: b === "granted",
              implicit: g.implicit,
              default: g.default,
              update: g.update,
              quiet: g.quiet
          };
          if (d !== "" || g.declare !== !1)
              f[a] = n
      }
  }
  ;
  aa.implicit = function(a, b) {
      this.usedImplicit = !0;
      var c = this.entries
        , d = c[a] = c[a] || {};
      d.implicit !== !1 && (d.implicit = b === "granted")
  }
  ;
  aa.getConsentState = function(a, b) {
      var c = this.entries
        , d = c[a] || {}
        , e = d.update;
      if (e !== void 0)
          return e ? 1 : 2;
      if (kb(8) && b.usedContainerScopedDefaults) {
          var f = b.containerScopedDefaults[a];
          if (f === 3)
              return 1;
          if (f === 2)
              return 2
      } else if (e = d.default,
      e !== void 0)
          return e ? 1 : 2;
      if (b == null ? 0 : b.delegatedConsentTypes.hasOwnProperty(a)) {
          var g = b.delegatedConsentTypes[a]
            , k = c[g] || {};
          e = k.update;
          if (e !== void 0)
              return e ? 1 : 2;
          if (kb(8) && b.usedContainerScopedDefaults) {
              var m = b.containerScopedDefaults[g];
              if (m === 3)
                  return 1;
              if (m === 2)
                  return 2
          } else if (e = k.default,
          e !== void 0)
              return e ? 1 : 2
      }
      e = d.declare;
      if (e !== void 0)
          return e ? 1 : 2;
      e = d.implicit;
      return e !== void 0 ? e ? 3 : 4 : 0
  }
  ;
  aa.addListener = function(a, b) {
      this.j.push({
          consentTypes: a,
          Nl: b
      })
  }
  ;
  var Hk = function(a, b) {
      for (var c = 0; c < a.j.length; ++c) {
          var d = a.j[c];
          Array.isArray(d.consentTypes) && d.consentTypes.indexOf(b) !== -1 && (d.bk = !0)
      }
  };
  Fk.prototype.notifyListeners = function(a, b) {
      for (var c = 0; c < this.j.length; ++c) {
          var d = this.j[c];
          if (d.bk) {
              d.bk = !1;
              try {
                  d.Nl({
                      consentEventId: a,
                      consentPriorityId: b
                  })
              } catch (e) {}
          }
      }
  }
  ;
  var Ik = !1
    , Jk = !1
    , Kk = {}
    , Lk = {
      delegatedConsentTypes: {},
      corePlatformServices: {},
      usedCorePlatformServices: !1,
      selectedAllCorePlatformServices: !1,
      containerScopedDefaults: (Kk.ad_storage = 1,
      Kk.analytics_storage = 1,
      Kk.ad_user_data = 1,
      Kk.ad_personalization = 1,
      Kk),
      usedContainerScopedDefaults: !1
  };
  function Mk(a) {
      var b = Ek();
      b.accessedAny = !0;
      return (l(a) ? [a] : a).every(function(c) {
          switch (b.getConsentState(c, Lk)) {
          case 1:
          case 3:
              return !0;
          case 2:
          case 4:
              return !1;
          default:
              return !0
          }
      })
  }
  function Nk(a) {
      var b = Ek();
      b.accessedAny = !0;
      return b.getConsentState(a, Lk)
  }
  function Ok(a) {
      for (var b = {}, c = h(a), d = c.next(); !d.done; d = c.next()) {
          var e = d.value;
          b[e] = Lk.corePlatformServices[e] !== !1
      }
      return b
  }
  function Pk(a) {
      var b = Ek();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet
  }
  function Qk() {
      if (!kb(12))
          return !1;
      var a = Ek();
      a.accessedAny = !0;
      if (a.active)
          return !0;
      if (!kb(8) || !Lk.usedContainerScopedDefaults)
          return !1;
      for (var b = h(Object.keys(Lk.containerScopedDefaults)), c = b.next(); !c.done; c = b.next())
          if (Lk.containerScopedDefaults[c.value] !== 1)
              return !0;
      return !1
  }
  function Rk(a, b) {
      Ek().addListener(a, b)
  }
  function Sk(a, b) {
      Ek().notifyListeners(a, b)
  }
  function Tk(a, b) {
      function c() {
          for (var e = 0; e < b.length; e++)
              if (!Pk(b[e]))
                  return !0;
          return !1
      }
      if (c()) {
          var d = !1;
          Rk(b, function(e) {
              d || c() || (d = !0,
              a(e))
          })
      } else
          a({})
  }
  function Uk(a, b) {
      function c() {
          for (var k = [], m = 0; m < e.length; m++) {
              var n = e[m];
              Mk(n) && !f[n] && k.push(n)
          }
          return k
      }
      function d(k) {
          for (var m = 0; m < k.length; m++)
              f[k[m]] = !0
      }
      var e = l(b) ? [b] : b
        , f = {}
        , g = c();
      g.length !== e.length && (d(g),
      Rk(e, function(k) {
          function m(q) {
              q.length !== 0 && (d(q),
              k.consentTypes = q,
              a(k))
          }
          var n = c();
          if (n.length !== 0) {
              var p = Object.keys(f).length;
              n.length + p >= e.length ? m(n) : C.setTimeout(function() {
                  m(c())
              }, 500)
          }
      }))
  }
  ;var Vk = ["ad_storage", "analytics_storage", "ad_user_data", "ad_personalization"]
    , Wk = !1
    , Xk = !1;
  function Yk() {
      Q(49) && !Xk && Wk && (Vk.some(function(a) {
          return Lk.containerScopedDefaults[a] !== 1
      }) || Zk("mbc"));
      Xk = !0
  }
  function Zk(a) {
      Gj && (vk(a, "1"),
      zk())
  }
  function $k(a) {
      fb("HEALTH", a)
  }
  ;var al;
  try {
      al = JSON.parse(db("eyIwIjoiVk4iLCIxIjoiVk4tMzEiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jb20udm4iLCI0IjoiIiwiNSI6dHJ1ZSwiNiI6ZmFsc2UsIjciOiJhZF9zdG9yYWdlfGFuYWx5dGljc19zdG9yYWdlfGFkX3VzZXJfZGF0YXxhZF9wZXJzb25hbGl6YXRpb24ifQ"))
  } catch (a) {
      T(123),
      $k(2),
      al = {}
  }
  function bl() {
      return al["0"] || ""
  }
  function cl() {
      return al["1"] || ""
  }
  function dl() {
      var a = !1;
      return a
  }
  function el() {
      return al["6"] !== !1
  }
  function fl() {
      var a = "";
      return a
  }
  function gl() {
      var a = !1;
      a = !!al["5"];
      return a
  }
  function hl() {
      var a = "";
      return a
  }
  var il = [N.g.O, N.g.U, N.g.N, N.g.sa], jl, kl;
  function ll(a) {
      for (var b = a[N.g.Fb], c = Array.isArray(b) ? b : [b], d = {
          Ne: 0
      }; d.Ne < c.length; d = {
          Ne: d.Ne
      },
      ++d.Ne)
          z(a, function(e) {
              return function(f, g) {
                  if (f !== N.g.Fb) {
                      var k = c[e.Ne]
                        , m = bl()
                        , n = cl();
                      Jk = !0;
                      Ik && fb("TAGGING", 20);
                      Ek().declare(f, g, k, m, n)
                  }
              }
          }(d))
  }
  function ml(a) {
      Yk();
      !kl && jl && Zk("crc");
      kl = !0;
      var b = a[N.g.Fb];
      b && T(40);
      var c = a[N.g.ff];
      c && T(41);
      for (var d = Array.isArray(b) ? b : [b], e = {
          Oe: 0
      }; e.Oe < d.length; e = {
          Oe: e.Oe
      },
      ++e.Oe)
          z(a, function(f) {
              return function(g, k) {
                  if (g !== N.g.Fb && g !== N.g.ff) {
                      var m = d[f.Oe]
                        , n = Number(c)
                        , p = bl()
                        , q = cl();
                      n = n === void 0 ? 0 : n;
                      Ik = !0;
                      Jk && fb("TAGGING", 20);
                      Ek().default(g, k, m, p, q, n, Lk)
                  }
              }
          }(e))
  }
  function nl(a) {
      if (Q(106)) {
          kb(9) && (Lk.usedContainerScopedDefaults = !0);
          var b = a[N.g.Fb];
          if (b) {
              var c = Array.isArray(b) ? b : [b];
              if (!c.includes(cl()) && !c.includes(bl()))
                  return
          }
          z(a, function(d, e) {
              switch (d) {
              case "ad_storage":
              case "analytics_storage":
              case "ad_user_data":
              case "ad_personalization":
                  break;
              default:
                  return
              }
              kb(9) && (Lk.usedContainerScopedDefaults = !0);
              Lk.containerScopedDefaults[d] = e === "granted" ? 3 : 2
          })
      }
  }
  function ol(a, b) {
      Yk();
      jl = !0;
      z(a, function(c, d) {
          Ik = !0;
          Jk && fb("TAGGING", 20);
          Ek().update(c, d, Lk)
      });
      Sk(b.eventId, b.priorityId)
  }
  function pl(a) {
      a.hasOwnProperty("all") && (Lk.selectedAllCorePlatformServices = !0,
      z(yh, function(b) {
          Lk.corePlatformServices[b] = a.all === "granted";
          Lk.usedCorePlatformServices = !0
      }));
      z(a, function(b, c) {
          b !== "all" && (Lk.corePlatformServices[b] = c === "granted",
          Lk.usedCorePlatformServices = !0)
      })
  }
  function W(a) {
      Array.isArray(a) || (a = [a]);
      return a.every(function(b) {
          return Mk(b)
      })
  }
  function ql(a, b) {
      Rk(a, b)
  }
  function rl(a, b) {
      Uk(a, b)
  }
  function sl(a, b) {
      Tk(a, b)
  }
  function tl() {
      var a = [N.g.O, N.g.sa, N.g.N];
      Ek().waitForUpdate(a, 500, Lk)
  }
  function ul(a) {
      for (var b = h(a), c = b.next(); !c.done; c = b.next()) {
          var d = c.value;
          Ek().clearTimeout(d, void 0, Lk)
      }
      Sk()
  }
  function vl() {
      if (wi.pscdl === void 0) {
          var a = function(c) {
              wi.pscdl = c
          }
            , b = function() {
              a("error")
          };
          try {
              nc.cookieDeprecationLabel ? (a("pending"),
              nc.cookieDeprecationLabel.getValue().then(a).catch(b)) : a("noapi")
          } catch (c) {
              b(c)
          }
      }
  }
  ;function wl(a, b) {
      b && z(b, function(c, d) {
          typeof d !== "object" && d !== void 0 && (a["1p." + c] = String(d))
      })
  }
  ;var xl = /[A-Z]+/
    , yl = /\s/;
  function zl(a, b) {
      if (l(a)) {
          a = xb(a);
          var c = a.indexOf("-");
          if (!(c < 0)) {
              var d = a.substring(0, c);
              if (xl.test(d)) {
                  var e = a.substring(c + 1), f;
                  if (b) {
                      var g = function(n) {
                          var p = n.indexOf("/");
                          return p < 0 ? [n] : [n.substring(0, p), n.substring(p + 1)]
                      };
                      f = g(e);
                      if (d === "DC" && f.length === 2) {
                          var k = g(f[1]);
                          k.length === 2 && (f[1] = k[0],
                          f.push(k[1]))
                      }
                  } else {
                      f = e.split("/");
                      for (var m = 0; m < f.length; m++)
                          if (!f[m] || yl.test(f[m]) && (d !== "AW" || m !== 1))
                              return
                  }
                  return {
                      id: a,
                      prefix: d,
                      destinationId: d + "-" + f[0],
                      ids: f
                  }
              }
          }
      }
  }
  function Al(a, b) {
      for (var c = {}, d = 0; d < a.length; ++d) {
          var e = zl(a[d], b);
          e && (c[e.id] = e)
      }
      Bl(c);
      var f = [];
      z(c, function(g, k) {
          f.push(k)
      });
      return f
  }
  function Bl(a) {
      var b = [], c;
      for (c in a)
          if (a.hasOwnProperty(c)) {
              var d = a[c];
              d.prefix === "AW" && d.ids[Cl[2]] && b.push(d.destinationId)
          }
      for (var e = 0; e < b.length; ++e)
          delete a[b[e]]
  }
  var Dl = {}
    , Cl = (Dl[0] = 0,
  Dl[1] = 0,
  Dl[2] = 1,
  Dl[3] = 0,
  Dl[4] = 1,
  Dl[5] = 2,
  Dl[6] = 0,
  Dl[7] = 0,
  Dl[8] = 0,
  Dl);
  var El = Number('') || 500
    , Fl = {}
    , Gl = {}
    , Hl = {
      initialized: 11,
      complete: 12,
      interactive: 13
  }
    , Il = {}
    , Jl = Object.freeze((Il[N.g.Ia] = !0,
  Il))
    , Kl = E.location.search.indexOf("?gtm_diagnostics=") >= 0 || E.location.search.indexOf("&gtm_diagnostics=") >= 0
    , Ll = void 0;
  function Ml(a, b) {
      if (b.length && Gj) {
          var c;
          (c = Fl)[a] != null || (c[a] = []);
          Gl[a] != null || (Gl[a] = []);
          var d = b.filter(function(e) {
              return !Gl[a].includes(e)
          });
          Fl[a].push.apply(Fl[a], oa(d));
          Gl[a].push.apply(Gl[a], oa(d));
          !Ll && d.length > 0 && (wk("tdc", !0),
          Ll = C.setTimeout(function() {
              zk();
              Fl = {};
              Ll = void 0
          }, El))
      }
  }
  function Nl(a, b, c) {
      if (Gj && a === "config") {
          var d, e = (d = zl(b)) == null ? void 0 : d.ids;
          if (!(e && e.length > 1)) {
              var f, g = rc("google_tag_data", {});
              g.td || (g.td = {});
              f = g.td;
              var k = Sa(c.K);
              Sa(c.j, k);
              var m = [], n;
              for (n in f)
                  if (f.hasOwnProperty(n)) {
                      var p = Ol(f[n], k);
                      p.length && (Kl && console.log(p),
                      m.push(n))
                  }
              m.length && (Ml(b, m),
              fb("TAGGING", Hl[E.readyState] || 14));
              f[b] = k
          }
      }
  }
  function Pl(a, b) {
      var c = {}, d;
      for (d in b)
          b.hasOwnProperty(d) && (c[d] = !0);
      for (var e in a)
          a.hasOwnProperty(e) && (c[e] = !0);
      return c
  }
  function Ol(a, b, c, d) {
      c = c === void 0 ? {} : c;
      d = d === void 0 ? "" : d;
      if (a === b)
          return [];
      var e = function(r, t) {
          var v;
          Na(t) === "object" ? v = t[r] : Na(t) === "array" && (v = t[r]);
          return v === void 0 ? Jl[r] : v
      }, f = Pl(a, b), g;
      for (g in f)
          if (f.hasOwnProperty(g)) {
              var k = (d ? d + "." : "") + g
                , m = e(g, a)
                , n = e(g, b)
                , p = Na(m) === "object" || Na(m) === "array"
                , q = Na(n) === "object" || Na(n) === "array";
              if (p && q)
                  Ol(m, n, c, k);
              else if (p || q || m !== n)
                  c[k] = !0
          }
      return Object.keys(c)
  }
  function Ql() {
      vk("tdc", function() {
          Ll && (C.clearTimeout(Ll),
          Ll = void 0);
          var a = [], b;
          for (b in Fl)
              Fl.hasOwnProperty(b) && a.push(b + "*" + Fl[b].join("."));
          return a.length ? a.join("!") : void 0
      }, !1)
  }
  ;var Rl = function(a, b, c, d, e, f, g, k, m, n, p) {
      this.eventId = a;
      this.priorityId = b;
      this.j = c;
      this.P = d;
      this.H = e;
      this.K = f;
      this.C = g;
      this.eventMetadata = k;
      this.onSuccess = m;
      this.onFailure = n;
      this.isGtmEvent = p
  }
    , Sl = function(a, b) {
      var c = [];
      switch (b) {
      case 3:
          c.push(a.j);
          c.push(a.P);
          c.push(a.H);
          c.push(a.K);
          c.push(a.C);
          break;
      case 2:
          c.push(a.j);
          break;
      case 1:
          c.push(a.P);
          c.push(a.H);
          c.push(a.K);
          c.push(a.C);
          break;
      case 4:
          c.push(a.j),
          c.push(a.P),
          c.push(a.H),
          c.push(a.K)
      }
      return c
  }
    , V = function(a, b, c, d) {
      for (var e = h(Sl(a, d === void 0 ? 3 : d)), f = e.next(); !f.done; f = e.next()) {
          var g = f.value;
          if (g[b] !== void 0)
              return g[b]
      }
      return c
  }
    , Tl = function(a) {
      for (var b = {}, c = Sl(a, 4), d = h(c), e = d.next(); !e.done; e = d.next())
          for (var f = Object.keys(e.value), g = h(f), k = g.next(); !k.done; k = g.next())
              b[k.value] = 1;
      return Object.keys(b)
  }
    , Ul = function(a, b, c) {
      function d(n) {
          Qa(n) && z(n, function(p, q) {
              f = !0;
              e[p] = q
          })
      }
      var e = {}
        , f = !1
        , g = Sl(a, c === void 0 ? 3 : c);
      g.reverse();
      for (var k = h(g), m = k.next(); !m.done; m = k.next())
          d(m.value[b]);
      return f ? e : void 0
  }
    , Vl = function(a) {
      for (var b = [N.g.Tc, N.g.Pc, N.g.Qc, N.g.Rc, N.g.Sc, N.g.Uc, N.g.Vc], c = Sl(a, 3), d = h(c), e = d.next(); !e.done; e = d.next()) {
          for (var f = e.value, g = {}, k = !1, m = h(b), n = m.next(); !n.done; n = m.next()) {
              var p = n.value;
              f[p] !== void 0 && (g[p] = f[p],
              k = !0)
          }
          var q = k ? g : void 0;
          if (q)
              return q
      }
      return {}
  }
    , Wl = function(a, b) {
      this.eventId = a;
      this.priorityId = b;
      this.C = {};
      this.P = {};
      this.j = {};
      this.H = {};
      this.Z = {};
      this.K = {};
      this.eventMetadata = {};
      this.isGtmEvent = !1;
      this.onSuccess = function() {}
      ;
      this.onFailure = function() {}
  }
    , Xl = function(a, b) {
      a.C = b;
      return a
  }
    , Yl = function(a, b) {
      a.P = b;
      return a
  }
    , Zl = function(a, b) {
      a.j = b;
      return a
  }
    , $l = function(a, b) {
      a.H = b;
      return a
  }
    , am = function(a, b) {
      a.Z = b;
      return a
  }
    , bm = function(a, b) {
      a.K = b;
      return a
  }
    , cm = function(a, b) {
      a.eventMetadata = b || {};
      return a
  }
    , dm = function(a, b) {
      a.onSuccess = b;
      return a
  }
    , em = function(a, b) {
      a.onFailure = b;
      return a
  }
    , fm = function(a, b) {
      a.isGtmEvent = b;
      return a
  }
    , gm = function(a) {
      return new Rl(a.eventId,a.priorityId,a.C,a.P,a.j,a.H,a.K,a.eventMetadata,a.onSuccess,a.onFailure,a.isGtmEvent)
  };
  var hm = {
      sk: Number("5"),
      Zn: Number("")
  }
    , im = [];
  function jm(a) {
      im.push(a)
  }
  var km = "?id=" + Nf.ctid
    , lm = void 0
    , mm = {}
    , nm = void 0
    , om = new function() {
      var a = 5;
      hm.sk > 0 && (a = hm.sk);
      this.C = a;
      this.j = 0;
      this.H = []
  }
    , pm = 1E3;
  function qm(a, b) {
      var c = lm;
      if (c === void 0)
          if (b)
              c = Ni();
          else
              return "";
      for (var d = [yj("https://www.googletagmanager.com"), "/a", km], e = h(im), f = e.next(); !f.done; f = e.next())
          for (var g = f.value, k = g({
              eventId: c,
              kc: !!a
          }), m = h(k), n = m.next(); !n.done; n = m.next()) {
              var p = h(n.value)
                , q = p.next().value
                , r = p.next().value;
              d.push("&" + q + "=" + r)
          }
      d.push("&z=0");
      return d.join("")
  }
  function rm() {
      nm && (C.clearTimeout(nm),
      nm = void 0);
      if (lm !== void 0 && sm) {
          var a;
          (a = mm[lm]) || (a = om.j < om.C ? !1 : zb() - om.H[om.j % om.C] < 1E3);
          if (a || pm-- <= 0)
              T(1),
              mm[lm] = !0;
          else {
              var b = om.j++ % om.C;
              om.H[b] = zb();
              var c = qm(!0);
              zc(c);
              sm = !1
          }
      }
  }
  var sm = !1;
  function tm(a) {
      mm[a] || (a !== lm && (rm(),
      lm = a),
      sm = !0,
      nm || (nm = C.setTimeout(rm, 500)),
      qm().length >= 2022 && rm())
  }
  var um = qb();
  function vm() {
      um = qb()
  }
  function wm() {
      return [["v", "3"], ["t", "t"], ["pid", String(um)]]
  }
  var xm = {};
  function ym(a, b, c) {
      Fj && a !== void 0 && (xm[a] = xm[a] || [],
      xm[a].push(c + b),
      tm(a))
  }
  function zm(a) {
      var b = a.eventId
        , c = a.kc
        , d = []
        , e = xm[b] || [];
      e.length && d.push(["epr", e.join(".")]);
      c && delete xm[b];
      return d
  }
  ;function Am(a, b) {
      var c = zl(ak(a), !0);
      c && Bm.register(c, b)
  }
  function Cm(a, b, c, d) {
      var e = zl(c, d.isGtmEvent);
      e && (Q(48) && Q(48) && Bi && !Tj && (d.deferrable = !0),
      Bm.push("event", [b, a], e, d))
  }
  function Dm(a, b, c, d) {
      var e = zl(c, d.isGtmEvent);
      e && Bm.push("get", [a, b], e, d)
  }
  function Em(a) {
      var b = zl(ak(a), !0), c;
      b ? c = Fm(Bm, b).j : c = {};
      return c
  }
  function Gm(a, b) {
      var c = zl(ak(a), !0);
      if (c) {
          var d = Bm
            , e = Sa(b, null);
          Sa(Fm(d, c).j, e);
          Fm(d, c).j = e
      }
  }
  var Hm = function() {
      this.P = {};
      this.j = {};
      this.C = {};
      this.Z = null;
      this.K = {};
      this.H = !1;
      this.status = 1
  }
    , Im = function(a, b, c, d) {
      this.C = zb();
      this.j = b;
      this.args = c;
      this.messageContext = d;
      this.type = a
  }
    , Jm = function() {
      this.destinations = {};
      this.j = {};
      this.commands = []
  }
    , Fm = function(a, b) {
      var c = b.destinationId;
      return a.destinations[c] = a.destinations[c] || new Hm
  }
    , Km = function(a, b, c, d) {
      if (d.j) {
          var e = Fm(a, d.j)
            , f = e.Z;
          if (f) {
              var g = Sa(c, null)
                , k = Sa(e.P[d.j.id], null)
                , m = Sa(e.K, null)
                , n = Sa(e.j, null)
                , p = Sa(a.j, null)
                , q = {};
              if (Fj)
                  try {
                      q = Sa(Ui)
                  } catch (u) {
                      T(72)
                  }
              var r = d.j.prefix
                , t = function(u) {
                  ym(d.messageContext.eventId, r, u)
              }
                , v = gm(fm(em(dm(cm(am($l(bm(Zl(Yl(Xl(new Wl(d.messageContext.eventId,d.messageContext.priorityId), g), k), m), n), p), q), d.messageContext.eventMetadata), function() {
                  if (t) {
                      var u = t;
                      t = void 0;
                      u("2");
                      if (d.messageContext.onSuccess)
                          d.messageContext.onSuccess()
                  }
              }), function() {
                  if (t) {
                      var u = t;
                      t = void 0;
                      u("3");
                      if (d.messageContext.onFailure)
                          d.messageContext.onFailure()
                  }
              }), !!d.messageContext.isGtmEvent));
              try {
                  ym(d.messageContext.eventId, r, "1"),
                  Nl(d.type, d.j.id, v),
                  f(d.j.id, b, d.C, v)
              } catch (u) {
                  ym(d.messageContext.eventId, r, "4")
              }
          }
      }
  };
  Jm.prototype.register = function(a, b, c) {
      var d = Fm(this, a);
      d.status !== 3 && (d.Z = b,
      d.status = 3,
      c && (Sa(d.j, c),
      d.j = c),
      this.flush())
  }
  ;
  Jm.prototype.push = function(a, b, c, d) {
      c !== void 0 && (Fm(this, c).status === 1 && (Fm(this, c).status = 2,
      this.push("require", [{}], c, {})),
      Fm(this, c).H && (d.deferrable = !1));
      this.commands.push(new Im(a,c,b,d));
      d.deferrable || this.flush()
  }
  ;
  Jm.prototype.flush = function(a) {
      for (var b = this, c = [], d = !1, e = {}; this.commands.length; e = {
          Ec: void 0,
          vh: void 0
      }) {
          var f = this.commands[0]
            , g = f.j;
          if (f.messageContext.deferrable)
              !g || Fm(this, g).H ? (f.messageContext.deferrable = !1,
              this.commands.push(f)) : c.push(f),
              this.commands.shift();
          else {
              switch (f.type) {
              case "require":
                  if (Fm(this, g).status !== 3 && !a) {
                      this.commands.push.apply(this.commands, c);
                      return
                  }
                  break;
              case "set":
                  z(f.args[0], function(r, t) {
                      Sa(Hb(r, t), b.j)
                  });
                  break;
              case "config":
                  var k = Fm(this, g);
                  e.Ec = {};
                  z(f.args[0], function(r) {
                      return function(t, v) {
                          Sa(Hb(t, v), r.Ec)
                      }
                  }(e));
                  var m = !!e.Ec[N.g.bc];
                  delete e.Ec[N.g.bc];
                  var n = g.destinationId === g.id;
                  m || (n ? k.K = {} : k.P[g.id] = {});
                  k.H && m || Km(this, N.g.aa, e.Ec, f);
                  k.H = !0;
                  n ? Sa(e.Ec, k.K) : (Sa(e.Ec, k.P[g.id]),
                  T(70));
                  d = !0;
                  break;
              case "event":
                  e.vh = {};
                  z(f.args[0], function(r) {
                      return function(t, v) {
                          Sa(Hb(t, v), r.vh)
                      }
                  }(e));
                  Km(this, f.args[1], e.vh, f);
                  break;
              case "get":
                  var p = {}
                    , q = (p[N.g.ub] = f.args[0],
                  p[N.g.Ib] = f.args[1],
                  p);
                  Km(this, N.g.Va, q, f)
              }
              this.commands.shift();
              Lm(this, f)
          }
      }
      this.commands.push.apply(this.commands, c);
      d && this.flush()
  }
  ;
  var Lm = function(a, b) {
      if (b.type !== "require")
          if (b.j)
              for (var c = Fm(a, b.j).C[b.type] || [], d = 0; d < c.length; d++)
                  c[d]();
          else
              for (var e in a.destinations)
                  if (a.destinations.hasOwnProperty(e)) {
                      var f = a.destinations[e];
                      if (f && f.C)
                          for (var g = f.C[b.type] || [], k = 0; k < g.length; k++)
                              g[k]()
                  }
  }
    , Bm = new Jm;
  var Mm = function(a, b) {
      var c = function() {};
      c.prototype = a.prototype;
      var d = new c;
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d
  }
    , Nm = function(a) {
      var b = a;
      return function() {
          if (b) {
              var c = b;
              b = null;
              c()
          }
      }
  };
  var Om = function(a, b, c) {
      a.addEventListener && a.addEventListener(b, c, !1)
  }
    , Pm = function(a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1)
  };
  var Qm, Rm;
  a: {
      for (var Sm = ["CLOSURE_FLAGS"], Tm = za, Um = 0; Um < Sm.length; Um++)
          if (Tm = Tm[Sm[Um]],
          Tm == null) {
              Rm = null;
              break a
          }
      Rm = Tm
  }
  var Vm = Rm && Rm[610401301];
  Qm = Vm != null ? Vm : !1;
  function Wm() {
      var a = za.navigator;
      if (a) {
          var b = a.userAgent;
          if (b)
              return b
      }
      return ""
  }
  var Xm, Ym = za.navigator;
  Xm = Ym ? Ym.userAgentData || null : null;
  function Zm(a) {
      return Qm ? Xm ? Xm.brands.some(function(b) {
          var c;
          return (c = b.brand) && c.indexOf(a) != -1
      }) : !1 : !1
  }
  function $m(a) {
      return Wm().indexOf(a) != -1
  }
  ;function an() {
      return Qm ? !!Xm && Xm.brands.length > 0 : !1
  }
  function bn() {
      return an() ? !1 : $m("Opera")
  }
  function cn() {
      return $m("Firefox") || $m("FxiOS")
  }
  function dn() {
      return an() ? Zm("Chromium") : ($m("Chrome") || $m("CriOS")) && !(an() ? 0 : $m("Edge")) || $m("Silk")
  }
  ;function en() {
      return Qm ? !!Xm && !!Xm.platform : !1
  }
  function fn() {
      return $m("iPhone") && !$m("iPod") && !$m("iPad")
  }
  function gn() {
      fn() || $m("iPad") || $m("iPod")
  }
  ;var hn = function(a) {
      hn[" "](a);
      return a
  };
  hn[" "] = function() {}
  ;
  bn();
  an() || $m("Trident") || $m("MSIE");
  $m("Edge");
  !$m("Gecko") || Wm().toLowerCase().indexOf("webkit") != -1 && !$m("Edge") || $m("Trident") || $m("MSIE") || $m("Edge");
  Wm().toLowerCase().indexOf("webkit") != -1 && !$m("Edge") && $m("Mobile");
  en() || $m("Macintosh");
  en() || $m("Windows");
  (en() ? Xm.platform === "Linux" : $m("Linux")) || en() || $m("CrOS");
  en() || $m("Android");
  fn();
  $m("iPad");
  $m("iPod");
  gn();
  Wm().toLowerCase().indexOf("kaios");
  var jn = function(a, b, c, d) {
      for (var e = b, f = c.length; (e = a.indexOf(c, e)) >= 0 && e < d; ) {
          var g = a.charCodeAt(e - 1);
          if (g == 38 || g == 63) {
              var k = a.charCodeAt(e + f);
              if (!k || k == 61 || k == 38 || k == 35)
                  return e
          }
          e += f + 1
      }
      return -1
  }
    , kn = /#|$/
    , ln = function(a, b) {
      var c = a.search(kn)
        , d = jn(a, 0, b, c);
      if (d < 0)
          return null;
      var e = a.indexOf("&", d);
      if (e < 0 || e > c)
          e = c;
      d += b.length + 1;
      return decodeURIComponent(a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " "))
  }
    , mn = /[?&]($|#)/
    , nn = function(a, b, c) {
      for (var d, e = a.search(kn), f = 0, g, k = []; (g = jn(a, f, b, e)) >= 0; )
          k.push(a.substring(f, g)),
          f = Math.min(a.indexOf("&", g) + 1 || e, e);
      k.push(a.slice(f));
      d = k.join("").replace(mn, "$1");
      var m, n = c != null ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
          var q, r = d.indexOf("#");
          r < 0 && (r = d.length);
          var t = d.indexOf("?"), v;
          t < 0 || t > r ? (t = r,
          v = "") : v = d.substring(t + 1, r);
          q = [d.slice(0, t), v, d.slice(r)];
          var u = q[1];
          q[1] = p ? u ? u + "&" + p : p : u;
          m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
      } else
          m = d;
      return m
  };
  var on = function(a) {
      try {
          var b;
          if (b = !!a && a.location.href != null)
              a: {
                  try {
                      hn(a.foo);
                      b = !0;
                      break a
                  } catch (c) {}
                  b = !1
              }
          return b
      } catch (c) {
          return !1
      }
  }
    , pn = function(a, b) {
      if (a)
          for (var c in a)
              Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
  }
    , qn = function(a) {
      if (C.top == C)
          return 0;
      if (a === void 0 ? 0 : a) {
          var b = C.location.ancestorOrigins;
          if (b)
              return b[b.length - 1] == C.location.origin ? 1 : 2
      }
      return on(C.top) ? 1 : 2
  }
    , rn = function(a) {
      a = a === void 0 ? document : a;
      return a.createElement("img")
  };
  function sn(a, b, c, d) {
      d = d === void 0 ? !1 : d;
      a.google_image_requests || (a.google_image_requests = []);
      var e = rn(a.document);
      if (c) {
          var f = function() {
              if (c) {
                  var g = a.google_image_requests
                    , k = lc(g, e);
                  k >= 0 && Array.prototype.splice.call(g, k, 1)
              }
              Pm(e, "load", f);
              Pm(e, "error", f)
          };
          Om(e, "load", f);
          Om(e, "error", f)
      }
      d && (e.attributionSrc = "");
      e.src = b;
      a.google_image_requests.push(e)
  }
  var un = function(a) {
      var b;
      b = b === void 0 ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      pn(a, function(d, e) {
          if (d || d === 0)
              c += "&" + e + "=" + encodeURIComponent("" + d)
      });
      tn(c, b)
  }
    , tn = function(a, b) {
      var c = window, d;
      b = b === void 0 ? !1 : b;
      d = d === void 0 ? !1 : d;
      if (c.fetch) {
          var e = {
              keepalive: !0,
              credentials: "include",
              redirect: "follow",
              method: "get",
              mode: "no-cors"
          };
          d && (e.mode = "cors",
          "setAttributionReporting"in XMLHttpRequest.prototype ? e.attributionReporting = {
              eventSourceEligible: "true",
              triggerEligible: "false"
          } : e.headers = {
              "Attribution-Reporting-Eligible": "event-source"
          });
          c.fetch(a, e)
      } else
          sn(c, a, b === void 0 ? !1 : b, d === void 0 ? !1 : d)
  };
  var vn = function() {
      this.P = this.P;
      this.C = this.C
  };
  vn.prototype.P = !1;
  vn.prototype.dispose = function() {
      this.P || (this.P = !0,
      this.Ra())
  }
  ;
  vn.prototype[Symbol.dispose] = function() {
      this.dispose()
  }
  ;
  vn.prototype.addOnDisposeCallback = function(a, b) {
      this.P ? b !== void 0 ? a.call(b) : a() : (this.C || (this.C = []),
      b && (a = a.bind(b)),
      this.C.push(a))
  }
  ;
  vn.prototype.Ra = function() {
      if (this.C)
          for (; this.C.length; )
              this.C.shift()()
  }
  ;
  var wn = function(a) {
      a.addtlConsent !== void 0 && typeof a.addtlConsent !== "string" && (a.addtlConsent = void 0);
      a.gdprApplies !== void 0 && typeof a.gdprApplies !== "boolean" && (a.gdprApplies = void 0);
      return a.tcString !== void 0 && typeof a.tcString !== "string" || a.listenerId !== void 0 && typeof a.listenerId !== "number" ? 2 : a.cmpStatus && a.cmpStatus !== "error" ? 0 : 3
  }
    , xn = function(a, b) {
      b = b === void 0 ? {} : b;
      vn.call(this);
      this.H = a;
      this.j = null;
      this.Z = {};
      this.Nf = 0;
      var c;
      this.pe = (c = b.nn) != null ? c : 500;
      var d;
      this.Dc = (d = b.Qn) != null ? d : !1;
      this.K = null
  };
  wa(xn, vn);
  xn.prototype.Ra = function() {
      this.Z = {};
      this.K && (Pm(this.H, "message", this.K),
      delete this.K);
      delete this.Z;
      delete this.H;
      delete this.j;
      vn.prototype.Ra.call(this)
  }
  ;
  var zn = function(a) {
      return typeof a.H.__tcfapi === "function" || yn(a) != null
  };
  xn.prototype.addEventListener = function(a) {
      var b = this
        , c = {
          internalBlockOnErrors: this.Dc
      }
        , d = Nm(function() {
          return a(c)
      })
        , e = 0;
      this.pe !== -1 && (e = setTimeout(function() {
          c.tcString = "tcunavailable";
          c.internalErrorState = 1;
          d()
      }, this.pe));
      var f = function(g, k) {
          clearTimeout(e);
          g ? (c = g,
          c.internalErrorState = wn(c),
          c.internalBlockOnErrors = b.Dc,
          k && c.internalErrorState === 0 || (c.tcString = "tcunavailable",
          k || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable",
          c.internalErrorState = 3);
          a(c)
      };
      try {
          An(this, "addEventListener", f)
      } catch (g) {
          c.tcString = "tcunavailable",
          c.internalErrorState = 3,
          e && (clearTimeout(e),
          e = 0),
          d()
      }
  }
  ;
  xn.prototype.removeEventListener = function(a) {
      a && a.listenerId && An(this, "removeEventListener", null, a.listenerId)
  }
  ;
  var Cn = function(a, b, c) {
      var d;
      d = d === void 0 ? "755" : d;
      var e;
      a: {
          if (a.publisher && a.publisher.restrictions) {
              var f = a.publisher.restrictions[b];
              if (f !== void 0) {
                  e = f[d === void 0 ? "755" : d];
                  break a
              }
          }
          e = void 0
      }
      var g = e;
      if (g === 0)
          return !1;
      var k = c;
      c === 2 ? (k = 0,
      g === 2 && (k = 1)) : c === 3 && (k = 1,
      g === 1 && (k = 0));
      var m;
      if (k === 0)
          if (a.purpose && a.vendor) {
              var n = Bn(a.vendor.consents, d === void 0 ? "755" : d);
              m = n && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH" ? !0 : n && Bn(a.purpose.consents, b)
          } else
              m = !0;
      else
          m = k === 1 ? a.purpose && a.vendor ? Bn(a.purpose.legitimateInterests, b) && Bn(a.vendor.legitimateInterests, d === void 0 ? "755" : d) : !0 : !0;
      return m
  }
    , Bn = function(a, b) {
      return !(!a || !a[b])
  }
    , An = function(a, b, c, d) {
      c || (c = function() {}
      );
      if (typeof a.H.__tcfapi === "function") {
          var e = a.H.__tcfapi;
          e(b, 2, c, d)
      } else if (yn(a)) {
          Dn(a);
          var f = ++a.Nf;
          a.Z[f] = c;
          if (a.j) {
              var g = {};
              a.j.postMessage((g.__tcfapiCall = {
                  command: b,
                  version: 2,
                  callId: f,
                  parameter: d
              },
              g), "*")
          }
      } else
          c({}, !1)
  }
    , yn = function(a) {
      if (a.j)
          return a.j;
      var b;
      a: {
          for (var c = a.H, d = 0; d < 50; ++d) {
              var e;
              try {
                  e = !(!c.frames || !c.frames.__tcfapiLocator)
              } catch (k) {
                  e = !1
              }
              if (e) {
                  b = c;
                  break a
              }
              var f;
              b: {
                  try {
                      var g = c.parent;
                      if (g && g != c) {
                          f = g;
                          break b
                      }
                  } catch (k) {}
                  f = null
              }
              if (!(c = f))
                  break
          }
          b = null
      }
      a.j = b;
      return a.j
  }
    , Dn = function(a) {
      a.K || (a.K = function(b) {
          try {
              var c;
              c = (typeof b.data === "string" ? JSON.parse(b.data) : b.data).__tcfapiReturn;
              a.Z[c.callId](c.returnValue, c.success)
          } catch (d) {}
      }
      ,
      Om(a.H, "message", a.K))
  }
    , En = function(a) {
      if (a.gdprApplies === !1)
          return !0;
      a.internalErrorState === void 0 && (a.internalErrorState = wn(a));
      return a.cmpStatus === "error" || a.internalErrorState !== 0 ? a.internalBlockOnErrors ? (un({
          e: String(a.internalErrorState)
      }),
      !1) : !0 : a.cmpStatus !== "loaded" || a.eventStatus !== "tcloaded" && a.eventStatus !== "useractioncomplete" ? !1 : !0
  };
  var Fn = {
      1: 0,
      3: 0,
      4: 0,
      7: 3,
      9: 3,
      10: 3
  };
  function Gn() {
      var a = wi.tcf || {};
      return wi.tcf = a
  }
  var Hn = function() {
      return new xn(C,{
          nn: -1
      })
  };
  function In() {
      var a = Gn()
        , b = Hn();
      zn(b) && !Jn() && !Kn() && T(124);
      if (!a.active && zn(b)) {
          Jn() && (a.active = !0,
          a.jc = {},
          a.cmpId = 0,
          a.tcfPolicyVersion = 0,
          Ek().active = !0,
          a.tcString = "tcunavailable");
          tl();
          try {
              b.addEventListener(function(c) {
                  if (c.internalErrorState !== 0)
                      Ln(a),
                      ul([N.g.O, N.g.sa, N.g.N]),
                      Ek().active = !0;
                  else if (a.gdprApplies = c.gdprApplies,
                  a.cmpId = c.cmpId,
                  a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode,
                  Kn() && (a.active = !0),
                  !Mn(c) || Jn() || Kn()) {
                      a.tcfPolicyVersion = c.tcfPolicyVersion;
                      var d;
                      if (c.gdprApplies === !1) {
                          var e = {}, f;
                          for (f in Fn)
                              Fn.hasOwnProperty(f) && (e[f] = !0);
                          d = e;
                          b.removeEventListener(c)
                      } else if (Mn(c)) {
                          var g = {}, k;
                          for (k in Fn)
                              if (Fn.hasOwnProperty(k))
                                  if (k === "1") {
                                      var m, n = c, p = {
                                          Rl: !0
                                      };
                                      p = p === void 0 ? {} : p;
                                      m = En(n) ? n.gdprApplies === !1 ? !0 : n.tcString === "tcunavailable" ? !p.Uj : (p.Uj || n.gdprApplies !== void 0 || p.Rl) && (p.Uj || typeof n.tcString === "string" && n.tcString.length) ? Cn(n, "1", 0) : !0 : !1;
                                      g["1"] = m
                                  } else
                                      g[k] = Cn(c, k, Fn[k]);
                          d = g
                      }
                      if (d) {
                          a.tcString = c.tcString || "tcempty";
                          a.jc = d;
                          var q = {}
                            , r = (q[N.g.O] = a.jc["1"] ? "granted" : "denied",
                          q);
                          a.gdprApplies !== !0 ? (ul([N.g.O, N.g.sa, N.g.N]),
                          Ek().active = !0) : (r[N.g.sa] = a.jc["3"] && a.jc["4"] ? "granted" : "denied",
                          typeof a.tcfPolicyVersion === "number" && a.tcfPolicyVersion >= 4 ? r[N.g.N] = a.jc["1"] && a.jc["7"] ? "granted" : "denied" : ul([N.g.N]),
                          ol(r, {
                              eventId: 0
                          }, {
                              gdprApplies: a ? a.gdprApplies : void 0,
                              tcString: Nn() || ""
                          }))
                      }
                  } else
                      ul([N.g.O, N.g.sa, N.g.N])
              })
          } catch (c) {
              Ln(a),
              ul([N.g.O, N.g.sa, N.g.N]),
              Ek().active = !0
          }
      }
  }
  function Ln(a) {
      a.type = "e";
      a.tcString = "tcunavailable"
  }
  function Mn(a) {
      return a.eventStatus === "tcloaded" || a.eventStatus === "useractioncomplete" || a.eventStatus === "cmpuishown"
  }
  function Jn() {
      return C.gtag_enable_tcf_support === !0
  }
  function Kn() {
      return Gn().enableAdvertiserConsentMode === !0
  }
  function Nn() {
      var a = Gn();
      if (a.active)
          return a.tcString
  }
  function On() {
      var a = Gn();
      if (a.active && a.gdprApplies !== void 0)
          return a.gdprApplies ? "1" : "0"
  }
  function Pn(a) {
      if (!Fn.hasOwnProperty(String(a)))
          return !0;
      var b = Gn();
      return b.active && b.jc ? !!b.jc[String(a)] : !0
  }
  var Qn = [N.g.O, N.g.U, N.g.N, N.g.sa]
    , Rn = {}
    , Sn = (Rn[N.g.O] = 1,
  Rn[N.g.U] = 2,
  Rn);
  function Tn(a) {
      if (a === void 0)
          return 0;
      switch (V(a, N.g.ja)) {
      case void 0:
          return 1;
      case !1:
          return 3;
      default:
          return 2
      }
  }
  function $n(a) {
      if (cl() === "US-CO" && nc.globalPrivacyControl === !0)
          return !1;
      var b = Tn(a);
      if (b === 3)
          return !1;
      switch (Nk(N.g.sa)) {
      case 1:
      case 3:
          return !0;
      case 2:
          return !1;
      case 4:
          return b === 2;
      case 0:
          return !0;
      default:
          return !1
      }
  }
  function ao() {
      return Qk() || !Mk(N.g.O) || !Mk(N.g.U)
  }
  function bo() {
      var a = {}, b;
      for (b in Sn)
          Sn.hasOwnProperty(b) && (a[Sn[b]] = Nk(b));
      return "G1" + Ee(a[1] || 0) + Ee(a[2] || 0)
  }
  var co = {}
    , eo = (co[N.g.O] = 0,
  co[N.g.U] = 1,
  co[N.g.N] = 2,
  co[N.g.sa] = 3,
  co);
  function fo(a) {
      switch (a) {
      case void 0:
          return 1;
      case !0:
          return 3;
      case !1:
          return 2;
      default:
          return 0
      }
  }
  function go(a) {
      for (var b = "1", c = 0; c < Qn.length; c++) {
          var d = b, e, f = Qn[c], g = Lk.delegatedConsentTypes[f];
          e = g === void 0 ? 0 : eo.hasOwnProperty(g) ? 12 | eo[g] : 8;
          var k = Ek();
          k.accessedAny = !0;
          var m = k.entries[f] || {};
          e = e << 2 | fo(m.implicit);
          b = d + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[e] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[fo(m.declare) << 4 | fo(m.default) << 2 | fo(m.update)])
      }
      var n = b
        , p = (cl() === "US-CO" && nc.globalPrivacyControl === !0 ? 1 : 0) << 3
        , q = (Qk() ? 1 : 0) << 2
        , r = Tn(a);
      b = n + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[p | q | r];
      Q(106) && (b += "" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[Lk.containerScopedDefaults.ad_storage << 4 | Lk.containerScopedDefaults.analytics_storage << 2 | Lk.containerScopedDefaults.ad_user_data] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[(kb(8) && Lk.usedContainerScopedDefaults ? 1 : 0) << 2 | Lk.containerScopedDefaults.ad_personalization]);
      return b
  }
  function ho() {
      if (!Mk(N.g.N))
          return "-";
      for (var a = Object.keys(yh), b = Ok(a), c = "", d = h(a), e = d.next(); !e.done; e = d.next()) {
          var f = e.value;
          b[f] && (c += yh[f])
      }
      (Lk.usedCorePlatformServices ? Lk.selectedAllCorePlatformServices : 1) && (c += "o");
      return c || "-"
  }
  function io() {
      return el() || (Jn() || Kn()) && On() === "1" ? "1" : "0"
  }
  function jo() {
      return (el() ? !0 : !(!Jn() && !Kn()) && On() === "1") || !Mk(N.g.N)
  }
  function ko() {
      var a = "0", b = "0", c;
      var d = Gn();
      c = d.active ? d.cmpId : void 0;
      typeof c === "number" && c >= 0 && c <= 4095 && (a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[c >> 6 & 63],
      b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[c & 63]);
      var e = "0", f;
      var g = Gn();
      f = g.active ? g.tcfPolicyVersion : void 0;
      typeof f === "number" && f >= 0 && f <= 63 && (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[f]);
      var k = 0;
      el() && (k |= 1);
      On() === "1" && (k |= 2);
      Jn() && (k |= 4);
      var m;
      var n = Gn();
      m = n.enableAdvertiserConsentMode !== void 0 ? n.enableAdvertiserConsentMode ? "1" : "0" : void 0;
      m === "1" && (k |= 8);
      Ek().waitPeriodTimedOut && (k |= 16);
      return "1" + a + b + e + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[k]
  }
  function lo() {
      return cl() === "US-CO"
  }
  ;function mo() {
      var a = !1;
      return a
  }
  ;var no = {
      UA: 1,
      AW: 2,
      DC: 3,
      G: 4,
      GF: 5,
      GT: 12,
      GTM: 14,
      HA: 6,
      MC: 7
  };
  function oo(a) {
      a = a === void 0 ? {} : a;
      var b = Nf.ctid.split("-")[0].toUpperCase()
        , c = {};
      c.ctid = Nf.ctid;
      c.Tm = vi.ve;
      c.Xm = vi.bh;
      c.ym = Sj.se ? 2 : 1;
      c.gn = a.jk;
      c.Ce = Nf.canonicalContainerId;
      c.Ce !== a.ra && (c.ra = a.ra);
      var d = ck();
      c.Jm = d ? d.canonicalContainerId : void 0;
      Ci ? (c.cg = no[b],
      c.cg || (c.cg = 0)) : c.cg = Gi ? 13 : 10;
      Pi.H ? (c.Xf = 0,
      c.wl = 2) : Ei ? c.Xf = 1 : mo() ? c.Xf = 2 : c.Xf = 3;
      var e = {};
      e[6] = Tj;
      Pi.C === 2 ? e[7] = !0 : Pi.C === 1 && (e[2] = !0);
      c.zl = e;
      var f = a.Pf, g;
      var k = c.cg
        , m = c.Xf;
      k === void 0 ? g = "" : (m || (m = 0),
      g = "" + Ge(1, 1) + De(k << 2 | m));
      var n = c.wl, p = "4" + g + (n ? "" + Ge(2, 1) + De(n) : ""), q, r = c.Xm;
      q = r && Fe.test(r) ? "" + Ge(3, 2) + r : "";
      var t, v = c.Tm;
      t = v ? "" + Ge(4, 1) + De(v) : "";
      var u;
      var w = c.ctid;
      if (w && f) {
          var x = w.split("-")
            , y = x[0].toUpperCase();
          if (y !== "GTM" && y !== "OPT")
              u = "";
          else {
              var A = x[1];
              u = "" + Ge(5, 3) + De(1 + A.length) + (c.ym || 0) + A
          }
      } else
          u = "";
      var B = c.gn, D = c.Ce, H = c.ra, J = c.Xn, G = p + q + t + u + (B ? "" + Ge(6, 1) + De(B) : "") + (D ? "" + Ge(7, 3) + De(D.length) + D : "") + (H ? "" + Ge(8, 3) + De(H.length) + H : "") + (J ? "" + Ge(9, 3) + De(J.length) + J : ""), O;
      var L = c.zl;
      L = L === void 0 ? {} : L;
      for (var S = [], ca = h(Object.keys(L)), Z = ca.next(); !Z.done; Z = ca.next()) {
          var U = Z.value;
          S[Number(U)] = L[U]
      }
      if (S.length) {
          var R = Ge(10, 3), ma;
          if (S.length === 0)
              ma = De(0);
          else {
              for (var na = [], ja = 0, xa = !1, Oa = 0; Oa < S.length; Oa++) {
                  xa = !0;
                  var Ea = Oa % 6;
                  S[Oa] && (ja |= 1 << Ea);
                  Ea === 5 && (na.push(De(ja)),
                  ja = 0,
                  xa = !1)
              }
              xa && na.push(De(ja));
              ma = na.join("")
          }
          var Ra = ma;
          O = "" + R + De(Ra.length) + Ra
      } else
          O = "";
      var Za = c.Jm;
      return G + O + (Za ? "" + Ge(11, 3) + De(Za.length) + Za : "")
  }
  ;var po = {
      Cj: "service_worker_endpoint",
      fh: "shared_user_id",
      gh: "shared_user_id_requested",
      xe: "shared_user_id_source"
  }, qo;
  function ro(a) {
      if (!qo) {
          qo = {};
          for (var b = h(Object.keys(po)), c = b.next(); !c.done; c = b.next())
              qo[po[c.value]] = !0
      }
      return !!qo[a]
  }
  function so(a, b) {
      b = b === void 0 ? !1 : b;
      if (ro(a)) {
          var c, d, e = (d = (c = rc("google_tag_data", {})).xcd) != null ? d : c.xcd = {};
          if (e[a])
              return e[a];
          if (b) {
              var f = void 0
                , g = 1
                , k = {}
                , m = {
                  set: function(n) {
                      f = n;
                      m.notify()
                  },
                  get: function() {
                      return f
                  },
                  subscribe: function(n) {
                      k[String(g)] = n;
                      return g++
                  },
                  unsubscribe: function(n) {
                      var p = String(n);
                      return k.hasOwnProperty(p) ? (delete k[p],
                      !0) : !1
                  },
                  notify: function() {
                      for (var n = h(Object.keys(k)), p = n.next(); !p.done; p = n.next()) {
                          var q = p.value;
                          try {
                              k[q](a, f)
                          } catch (r) {}
                      }
                  }
              };
              return e[a] = m
          }
      }
  }
  function to(a, b) {
      var c = so(a, !0);
      c && c.set(b)
  }
  function uo(a) {
      var b;
      return (b = so(a)) == null ? void 0 : b.get()
  }
  function vo(a, b) {
      if (typeof b === "function") {
          var c;
          return (c = so(a, !0)) == null ? void 0 : c.subscribe(b)
      }
  }
  function wo(a, b) {
      var c = so(a);
      return c ? c.unsubscribe(b) : !1
  }
  ;function xo(a) {
      var b = 1, c, d, e;
      if (a)
          for (b = 0,
          d = a.length - 1; d >= 0; d--)
              e = a.charCodeAt(d),
              b = (b << 6 & 268435455) + e + (e << 14),
              c = b & 266338304,
              b = c !== 0 ? b ^ c >> 21 : b;
      return b
  }
  ;function yo(a) {
      return a.origin !== "null"
  }
  ;function zo(a, b, c, d) {
      var e;
      if (Ao(d)) {
          for (var f = [], g = String(b || Bo()).split(";"), k = 0; k < g.length; k++) {
              var m = g[k].split("=")
                , n = m[0].replace(/^\s*|\s*$/g, "");
              if (n && n === a) {
                  var p = m.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                  p && c && (p = decodeURIComponent(p));
                  f.push(p)
              }
          }
          e = f
      } else
          e = [];
      return e
  }
  function Co(a, b, c, d, e) {
      if (Ao(e)) {
          var f = Do(a, d, e);
          if (f.length === 1)
              return f[0].id;
          if (f.length !== 0) {
              f = Eo(f, function(g) {
                  return g.Hl
              }, b);
              if (f.length === 1)
                  return f[0].id;
              f = Eo(f, function(g) {
                  return g.Lm
              }, c);
              return f[0] ? f[0].id : void 0
          }
      }
  }
  function Fo(a, b, c, d) {
      var e = Bo()
        , f = window;
      yo(f) && (f.document.cookie = a);
      var g = Bo();
      return e !== g || c !== void 0 && zo(b, g, !1, d).indexOf(c) >= 0
  }
  function Go(a, b, c, d) {
      function e(w, x, y) {
          if (y == null)
              return delete k[x],
              w;
          k[x] = y;
          return w + "; " + x + "=" + y
      }
      function f(w, x) {
          if (x == null)
              return w;
          k[x] = !0;
          return w + "; " + x
      }
      if (!Ao(c.Db))
          return 2;
      var g;
      b == null ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)),
      b = Ho(b),
      g = a + "=" + b);
      var k = {};
      g = e(g, "path", c.path);
      var m;
      c.expires instanceof Date ? m = c.expires.toUTCString() : c.expires != null && (m = "" + c.expires);
      g = e(g, "expires", m);
      g = e(g, "max-age", c.Cm);
      g = e(g, "samesite", c.Ym);
      c.secure && (g = f(g, "secure"));
      var n = c.domain;
      if (n && n.toLowerCase() === "auto") {
          for (var p = Io(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
              var v = p[t] !== "none" ? p[t] : void 0
                , u = e(g, "domain", v);
              u = f(u, c.flags);
              try {
                  d && d(a, k)
              } catch (w) {
                  q = w;
                  continue
              }
              r = !0;
              if (!Jo(v, c.path) && Fo(u, a, b, c.Db))
                  return 0
          }
          if (q && !r)
              throw q;
          return 1
      }
      n && n.toLowerCase() !== "none" && (g = e(g, "domain", n));
      g = f(g, c.flags);
      d && d(a, k);
      return Jo(n, c.path) ? 1 : Fo(g, a, b, c.Db) ? 0 : 1
  }
  function Ko(a, b, c) {
      c.path == null && (c.path = "/");
      c.domain || (c.domain = "auto");
      return Go(a, b, c)
  }
  function Eo(a, b, c) {
      for (var d = [], e = [], f, g = 0; g < a.length; g++) {
          var k = a[g]
            , m = b(k);
          m === c ? d.push(k) : f === void 0 || m < f ? (e = [k],
          f = m) : m === f && e.push(k)
      }
      return d.length > 0 ? d : e
  }
  function Do(a, b, c) {
      for (var d = [], e = zo(a, void 0, void 0, c), f = 0; f < e.length; f++) {
          var g = e[f].split(".")
            , k = g.shift();
          if (!b || !k || b.indexOf(k) !== -1) {
              var m = g.shift();
              if (m) {
                  var n = m.split("-");
                  d.push({
                      id: g.join("."),
                      Hl: Number(n[0]) || 1,
                      Lm: Number(n[1]) || 1
                  })
              }
          }
      }
      return d
  }
  function Ho(a) {
      a && a.length > 1200 && (a = a.substring(0, 1200));
      return a
  }
  var Lo = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/
    , Mo = /(^|\.)doubleclick\.net$/i;
  function Jo(a, b) {
      return a !== void 0 && (Mo.test(window.document.location.hostname) || b === "/" && Lo.test(a))
  }
  function No(a) {
      if (!a)
          return 1;
      var b = a;
      kb(11) && a === "none" && (b = window.document.location.hostname);
      b = b.indexOf(".") === 0 ? b.substring(1) : b;
      return b.split(".").length
  }
  function Oo(a) {
      if (!a || a === "/")
          return 1;
      a[0] !== "/" && (a = "/" + a);
      a[a.length - 1] !== "/" && (a += "/");
      return a.split("/").length - 1
  }
  function Po(a, b) {
      var c = "" + No(a)
        , d = Oo(b);
      d > 1 && (c += "-" + d);
      return c
  }
  var Bo = function() {
      return yo(window) ? window.document.cookie : ""
  }
    , Ao = function(a) {
      return a && kb(12) ? (Array.isArray(a) ? a : [a]).every(function(b) {
          return Pk(b) && Mk(b)
      }) : !0
  }
    , Io = function() {
      var a = []
        , b = window.document.location.hostname.split(".");
      if (b.length === 4) {
          var c = b[b.length - 1];
          if (Number(c).toString() === c)
              return ["none"]
      }
      for (var d = b.length - 2; d >= 0; d--)
          a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Mo.test(e) || Lo.test(e) || a.push("none");
      return a
  };
  function Qo(a) {
      var b = Math.round(Math.random() * 2147483647);
      return a ? String(b ^ xo(a) & 2147483647) : String(b)
  }
  function Ro(a) {
      return [Qo(a), Math.round(zb() / 1E3)].join(".")
  }
  function So(a, b, c, d, e) {
      var f = No(b);
      return Co(a, f, Oo(c), d, e)
  }
  function To(a, b, c, d) {
      return [b, Po(c, d), a].join(".")
  }
  ;function Uo(a, b, c, d) {
      var e, f = Number(a.Cb != null ? a.Cb : void 0);
      f !== 0 && (e = new Date((b || zb()) + 1E3 * (f || 7776E3)));
      return {
          path: a.path,
          domain: a.domain,
          flags: a.flags,
          encode: !!c,
          expires: e,
          Db: d
      }
  }
  ;var Vo;
  function Wo() {
      function a(g) {
          c(g.target || g.srcElement || {})
      }
      function b(g) {
          d(g.target || g.srcElement || {})
      }
      var c = Xo
        , d = Yo
        , e = Zo();
      if (!e.init) {
          Bc(E, "mousedown", a);
          Bc(E, "keyup", a);
          Bc(E, "submit", b);
          var f = HTMLFormElement.prototype.submit;
          HTMLFormElement.prototype.submit = function() {
              d(this);
              f.call(this)
          }
          ;
          e.init = !0
      }
  }
  function $o(a, b, c, d, e) {
      var f = {
          callback: a,
          domains: b,
          fragment: c === 2,
          placement: c,
          forms: d,
          sameHost: e
      };
      Zo().decorators.push(f)
  }
  function ap(a, b, c) {
      for (var d = Zo().decorators, e = {}, f = 0; f < d.length; ++f) {
          var g = d[f], k;
          if (k = !c || g.forms)
              a: {
                  var m = g.domains
                    , n = a
                    , p = !!g.sameHost;
                  if (m && (p || n !== E.location.hostname))
                      for (var q = 0; q < m.length; q++)
                          if (m[q]instanceof RegExp) {
                              if (m[q].test(n)) {
                                  k = !0;
                                  break a
                              }
                          } else if (n.indexOf(m[q]) >= 0 || p && m[q].indexOf(n) >= 0) {
                              k = !0;
                              break a
                          }
                  k = !1
              }
          if (k) {
              var r = g.placement;
              r === void 0 && (r = g.fragment ? 2 : 1);
              r === b && Cb(e, g.callback())
          }
      }
      return e
  }
  function Zo() {
      var a = rc("google_tag_data", {})
        , b = a.gl;
      b && b.decorators || (b = {
          decorators: []
      },
      a.gl = b);
      return b
  }
  ;var bp = /(.*?)\*(.*?)\*(.*)/
    , cp = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/
    , dp = /^(?:www\.|m\.|amp\.)+/
    , ep = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function fp(a) {
      var b = ep.exec(a);
      if (b)
          return {
              Qh: b[1],
              query: b[2],
              fragment: b[3]
          }
  }
  function gp(a, b) {
      var c = [nc.userAgent, (new Date).getTimezoneOffset(), nc.userLanguage || nc.language, Math.floor(zb() / 60 / 1E3) - (b === void 0 ? 0 : b), a].join("*"), d;
      if (!(d = Vo)) {
          for (var e = Array(256), f = 0; f < 256; f++) {
              for (var g = f, k = 0; k < 8; k++)
                  g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
              e[f] = g
          }
          d = e
      }
      Vo = d;
      for (var m = 4294967295, n = 0; n < c.length; n++)
          m = m >>> 8 ^ Vo[(m ^ c.charCodeAt(n)) & 255];
      return ((m ^ -1) >>> 0).toString(36)
  }
  function hp() {
      return function(a) {
          var b = pj(C.location.href)
            , c = b.search.replace("?", "")
            , d = ij(c, "_gl", !1, !0) || "";
          a.query = ip(d) || {};
          var e = jj(b, "fragment"), f;
          var g = -1;
          if (Eb(e, "_gl="))
              g = 4;
          else {
              var k = e.indexOf("&_gl=");
              k > 0 && (g = k + 3 + 2)
          }
          if (g < 0)
              f = void 0;
          else {
              var m = e.indexOf("&", g);
              f = m < 0 ? e.substring(g) : e.substring(g, m)
          }
          a.fragment = ip(f || "") || {}
      }
  }
  function jp(a) {
      var b = hp()
        , c = Zo();
      c.data || (c.data = {
          query: {},
          fragment: {}
      },
      b(c.data));
      var d = {}
        , e = c.data;
      e && (Cb(d, e.query),
      a && Cb(d, e.fragment));
      return d
  }
  var ip = function(a) {
      try {
          var b = kp(a, 3);
          if (b !== void 0) {
              for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                  var f = d[e]
                    , g = db(d[e + 1]);
                  c[f] = g
              }
              fb("TAGGING", 6);
              return c
          }
      } catch (k) {
          fb("TAGGING", 8)
      }
  };
  function kp(a, b) {
      if (a) {
          var c;
          a: {
              for (var d = a, e = 0; e < 3; ++e) {
                  var f = bp.exec(d);
                  if (f) {
                      c = f;
                      break a
                  }
                  d = decodeURIComponent(d)
              }
              c = void 0
          }
          var g = c;
          if (g && g[1] === "1") {
              var k = g[3], m;
              a: {
                  for (var n = g[2], p = 0; p < b; ++p)
                      if (n === gp(k, p)) {
                          m = !0;
                          break a
                      }
                  m = !1
              }
              if (m)
                  return k;
              fb("TAGGING", 7)
          }
      }
  }
  function lp(a, b, c, d, e) {
      function f(p) {
          var q = p
            , r = (new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")).exec(q)
            , t = q;
          if (r) {
              var v = r[2]
                , u = r[4];
              t = r[1];
              u && (t = t + v + u)
          }
          p = t;
          var w = p.charAt(p.length - 1);
          p && w !== "&" && (p += "&");
          return p + n
      }
      d = d === void 0 ? !1 : d;
      e = e === void 0 ? !1 : e;
      var g = fp(c);
      if (!g)
          return "";
      var k = g.query || ""
        , m = g.fragment || ""
        , n = a + "=" + b;
      d ? m.substring(1).length !== 0 && e || (m = "#" + f(m.substring(1))) : k = "?" + f(k.substring(1));
      return "" + g.Qh + k + m
  }
  function mp(a, b) {
      function c(n, p, q) {
          var r;
          a: {
              for (var t in n)
                  if (n.hasOwnProperty(t)) {
                      r = !0;
                      break a
                  }
              r = !1
          }
          if (r) {
              var v, u = [], w;
              for (w in n)
                  if (n.hasOwnProperty(w)) {
                      var x = n[w];
                      x !== void 0 && x === x && x !== null && x.toString() !== "[object Object]" && (u.push(w),
                      u.push(cb(String(x))))
                  }
              var y = u.join("*");
              v = ["1", gp(y), y].join("*");
              d ? (kb(4) || kb(1) || !p) && np("_gl", v, a, p, q) : op("_gl", v, a, p, q)
          }
      }
      var d = (a.tagName || "").toUpperCase() === "FORM"
        , e = ap(b, 1, d)
        , f = ap(b, 2, d)
        , g = ap(b, 4, d)
        , k = ap(b, 3, d);
      c(e, !1, !1);
      c(f, !0, !1);
      kb(1) && c(g, !0, !0);
      for (var m in k)
          k.hasOwnProperty(m) && pp(m, k[m], a)
  }
  function pp(a, b, c) {
      c.tagName.toLowerCase() === "a" ? op(a, b, c) : c.tagName.toLowerCase() === "form" && np(a, b, c)
  }
  function op(a, b, c, d, e) {
      d = d === void 0 ? !1 : d;
      e = e === void 0 ? !1 : e;
      var f;
      if (f = c.href) {
          var g;
          if (!(g = !kb(5) || d)) {
              var k = C.location.href
                , m = fp(c.href)
                , n = fp(k);
              g = !(m && n && m.Qh === n.Qh && m.query === n.query && m.fragment)
          }
          f = g
      }
      if (f) {
          var p = lp(a, b, c.href, d, e);
          ec.test(p) && (c.href = p)
      }
  }
  function np(a, b, c, d, e) {
      d = d === void 0 ? !1 : d;
      e = e === void 0 ? !1 : e;
      if (c && c.action) {
          var f = (c.method || "").toLowerCase();
          if (f !== "get" || d) {
              if (f === "get" || f === "post") {
                  var g = lp(a, b, c.action, d, e);
                  ec.test(g) && (c.action = g)
              }
          } else {
              for (var k = c.childNodes || [], m = !1, n = 0; n < k.length; n++) {
                  var p = k[n];
                  if (p.name === a) {
                      p.setAttribute("value", b);
                      m = !0;
                      break
                  }
              }
              if (!m) {
                  var q = E.createElement("input");
                  q.setAttribute("type", "hidden");
                  q.setAttribute("name", a);
                  q.setAttribute("value", b);
                  c.appendChild(q)
              }
          }
      }
  }
  function Xo(a) {
      try {
          var b;
          a: {
              for (var c = a, d = 100; c && d > 0; ) {
                  if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                      b = c;
                      break a
                  }
                  c = c.parentNode;
                  d--
              }
              b = null
          }
          var e = b;
          if (e) {
              var f = e.protocol;
              f !== "http:" && f !== "https:" || mp(e, e.hostname)
          }
      } catch (g) {}
  }
  function Yo(a) {
      try {
          if (a.action) {
              var b = jj(pj(a.action), "host");
              mp(a, b)
          }
      } catch (c) {}
  }
  function qp(a, b, c, d) {
      Wo();
      var e = c === "fragment" ? 2 : 1;
      d = !!d;
      $o(a, b, e, d, !1);
      e === 2 && fb("TAGGING", 23);
      d && fb("TAGGING", 24)
  }
  function rp(a, b) {
      Wo();
      $o(a, [lj(C.location, "host", !0)], b, !0, !0)
  }
  function sp() {
      var a = E.location.hostname
        , b = cp.exec(E.referrer);
      if (!b)
          return !1;
      var c = b[2]
        , d = b[1]
        , e = "";
      if (c) {
          var f = c.split("/")
            , g = f[1];
          e = g === "s" ? decodeURIComponent(f[2]) : decodeURIComponent(g)
      } else if (d) {
          if (d.indexOf("xn--") === 0)
              return !1;
          e = d.replace(/-/g, ".").replace(/\.\./g, "-")
      }
      var k = a.replace(dp, "")
        , m = e.replace(dp, "");
      return k === m || Fb(k, "." + m)
  }
  function tp(a, b) {
      return a === !1 ? !1 : a || b || sp()
  }
  ;var up = ["1"]
    , vp = {}
    , wp = {};
  function xp(a, b) {
      b = b === void 0 ? !0 : b;
      var c = yp(a.prefix);
      if (!vp[c])
          if (zp(c, a.path, a.domain)) {
              var d = wp[yp(a.prefix)];
              Ap(a, d ? d.id : void 0, d ? d.Lh : void 0)
          } else {
              var e = rj("auiddc");
              if (e)
                  fb("TAGGING", 17),
                  vp[c] = e;
              else if (b) {
                  var f = yp(a.prefix)
                    , g = Ro();
                  Bp(f, g, a);
                  zp(c, a.path, a.domain)
              }
          }
  }
  function Ap(a, b, c) {
      var d = yp(a.prefix)
        , e = vp[d];
      if (e) {
          var f = e.split(".");
          if (f.length === 2) {
              var g = Number(f[1]) || 0;
              if (g) {
                  var k = e;
                  b && (k = e + "." + b + "." + (c ? c : Math.floor(zb() / 1E3)));
                  Bp(d, k, a, g * 1E3)
              }
          }
      }
  }
  function Bp(a, b, c, d) {
      var e = To(b, "1", c.domain, c.path)
        , f = Uo(c, d);
      f.Db = Cp();
      Ko(a, e, f)
  }
  function zp(a, b, c) {
      var d = So(a, b, c, up, Cp());
      if (!d)
          return !1;
      Dp(a, d);
      return !0
  }
  function Dp(a, b) {
      var c = b.split(".");
      c.length === 5 ? (vp[a] = c.slice(0, 2).join("."),
      wp[a] = {
          id: c.slice(2, 4).join("."),
          Lh: Number(c[4]) || 0
      }) : c.length === 3 ? wp[a] = {
          id: c.slice(0, 2).join("."),
          Lh: Number(c[2]) || 0
      } : vp[a] = b
  }
  function yp(a) {
      return (a || "_gcl") + "_au"
  }
  function Ep(a) {
      function b() {
          Mk(c) && a()
      }
      var c = Cp();
      Tk(function() {
          b();
          Mk(c) || Uk(b, c)
      }, c)
  }
  function Fp(a) {
      var b = jp(!0)
        , c = yp(a.prefix);
      Ep(function() {
          var d = b[c];
          if (d) {
              Dp(c, d);
              var e = Number(vp[c].split(".")[1]) * 1E3;
              if (e) {
                  fb("TAGGING", 16);
                  var f = Uo(a, e);
                  f.Db = Cp();
                  var g = To(d, "1", a.domain, a.path);
                  Ko(c, g, f)
              }
          }
      })
  }
  function Gp(a, b, c, d, e) {
      e = e || {};
      var f = function() {
          var g = {}
            , k = So(a, e.path, e.domain, up, Cp());
          k && (g[a] = k);
          return g
      };
      Ep(function() {
          qp(f, b, c, d)
      })
  }
  function Cp() {
      return ["ad_storage", "ad_user_data"]
  }
  ;var Hp = {}
    , Ip = (Hp.k = {
      Fa: /^[\w-]+$/
  },
  Hp.b = {
      Fa: /^[\w-]+$/,
      Xh: !0
  },
  Hp.i = {
      Fa: /^[1-9]\d*$/
  },
  Hp.u = {
      Fa: /^[1-9]\d*$/
  },
  Hp);
  var Jp = {}
    , Mp = (Jp[5] = {
      uk: {
          2: Kp
      },
      mh: ["k", "i", "b", "u"]
  },
  Jp[4] = {
      uk: {
          2: Kp,
          GCL: Lp
      },
      mh: ["k", "i", "b"]
  },
  Jp);
  function Np(a) {
      var b = Mp[5];
      if (b) {
          var c = a.split(".")[0];
          if (c) {
              var d = b.uk[c];
              if (d)
                  return d(a, 5)
          }
      }
  }
  function Kp(a, b) {
      var c = a.split(".");
      if (c.length === 3) {
          var d = {}
            , e = Mp[b];
          if (e) {
              for (var f = e.mh, g = h(c[2].split("$")), k = g.next(); !k.done; k = g.next()) {
                  var m = k.value
                    , n = m[0];
                  if (f.indexOf(n) !== -1)
                      try {
                          var p = decodeURIComponent(m.substring(1))
                            , q = Ip[n];
                          q && (q.Xh ? (d[n] = d[n] || [],
                          d[n].push(p)) : d[n] = p)
                      } catch (r) {}
              }
              return d
          }
      }
  }
  function Op(a, b) {
      var c = Mp[5];
      if (c) {
          for (var d = [], e = h(c.mh), f = e.next(); !f.done; f = e.next()) {
              var g = f.value
                , k = Ip[g];
              if (k) {
                  var m = a[g];
                  if (m !== void 0)
                      if (k.Xh && Array.isArray(m))
                          for (var n = h(m), p = n.next(); !p.done; p = n.next())
                              d.push(encodeURIComponent("" + g + p.value));
                      else
                          d.push(encodeURIComponent("" + g + m))
              }
          }
          return ["2", b || "1", d.join("$")].join(".")
      }
  }
  function Lp(a) {
      var b = a.split(".");
      b.shift();
      var c = b.shift()
        , d = b.shift()
        , e = {};
      return e.k = d,
      e.i = c,
      e.b = b,
      e
  }
  ;var Pp = new Map([[5, "ad_storage"], [4, ["ad_storage", "ad_user_data"]]]);
  function Qp(a) {
      if (Mp[5]) {
          for (var b = [], c = zo(a, void 0, void 0, Pp.get(5)), d = h(c), e = d.next(); !e.done; e = d.next()) {
              var f = Np(e.value);
              f && (Rp(f),
              b.push(f))
          }
          return b
      }
  }
  function Sp(a, b, c, d) {
      c = c || {};
      var e = Po(c.domain, c.path)
        , f = Op(b, e);
      if (f) {
          var g = Uo(c, d, void 0, Pp.get(5));
          Ko(a, f, g)
      }
  }
  function Tp(a, b) {
      var c = b.Fa;
      return typeof c === "function" ? c(a) : c.test(a)
  }
  function Rp(a) {
      for (var b = h(Object.keys(a)), c = b.next(), d = {}; !c.done; d = {
          Ee: void 0
      },
      c = b.next()) {
          var e = c.value
            , f = a[e];
          d.Ee = Ip[e];
          d.Ee ? d.Ee.Xh ? a[e] = Array.isArray(f) ? f.filter(function(g) {
              return function(k) {
                  return Tp(k, g.Ee)
              }
          }(d)) : void 0 : typeof f === "string" && Tp(f, d.Ee) || (a[e] = void 0) : a[e] = void 0
      }
  }
  ;function Up(a) {
      for (var b = [], c = E.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
          var f = c[e].match(d);
          f && b.push({
              ei: f[1],
              value: f[2],
              timestamp: Number(f[2].split(".")[1]) || 0
          })
      }
      b.sort(function(g, k) {
          return k.timestamp - g.timestamp
      });
      return b
  }
  function Vp(a, b) {
      var c = Up(a)
        , d = {};
      if (!c || !c.length)
          return d;
      for (var e = 0; e < c.length; e++) {
          var f = c[e].value.split(".");
          if (!(f[0] !== "1" || b && f.length < 3 || !b && f.length !== 3) && Number(f[1])) {
              d[c[e].ei] || (d[c[e].ei] = []);
              var g = {
                  version: f[0],
                  timestamp: Number(f[1]) * 1E3,
                  T: f[2]
              };
              b && f.length > 3 && (g.labels = f.slice(3));
              d[c[e].ei].push(g)
          }
      }
      return d
  }
  ;var Wp = ["ad_storage", "ad_user_data"];
  function Xp() {
      var a = Yp();
      if (a.error)
          return a;
      if (!a.value)
          return {
              error: 2
          };
      var b;
      try {
          b = a.value.gclid
      } catch (c) {
          return {
              error: 11
          }
      }
      return b ? {
          value: b
      } : {
          value: void 0
      }
  }
  function Yp() {
      if (!Mk(Wp))
          return {
              error: 3
          };
      if (!C.localStorage)
          return {
              error: 1
          };
      var a = {
          schema: "gcl",
          version: 1
      }
        , b = void 0;
      try {
          b = C.localStorage.getItem("_gcl_ls")
      } catch (d) {
          return {
              error: 13
          }
      }
      try {
          if (b) {
              var c = JSON.parse(b);
              if (c && typeof c === "object")
                  a = c;
              else
                  return {
                      error: 12
                  }
          }
      } catch (d) {
          return {
              error: 8
          }
      }
      if (a.schema !== "gcl")
          return {
              error: 4
          };
      if (a.version !== 1)
          return {
              error: 5
          };
      try {
          Zp(a)
      } catch (d) {
          return {
              error: 8
          }
      }
      return {
          value: a,
          error: 0
      }
  }
  function Zp(a) {
      if (a && typeof a === "object")
          if ("expires"in a && "value"in a)
              Date.now() > a.expires && (a.value = null,
              a.error = 9);
          else
              for (var b = h(Object.keys(a)), c = b.next(); !c.done; c = b.next())
                  Zp(a[c.value])
  }
  ;var $p = /^\w+$/
    , aq = /^[\w-]+$/
    , bq = {}
    , cq = (bq.aw = "_aw",
  bq.dc = "_dc",
  bq.gf = "_gf",
  bq.gp = "_gp",
  bq.gs = "_gs",
  bq.ha = "_ha",
  bq.ag = "_ag",
  bq.gb = "_gb",
  bq);
  function dq() {
      return ["ad_storage", "ad_user_data"]
  }
  function eq(a) {
      return !kb(12) || Mk(a)
  }
  function fq(a, b) {
      function c() {
          var d = eq(b);
          d && a();
          return d
      }
      Tk(function() {
          c() || Uk(c, b)
      }, b)
  }
  function gq(a) {
      return hq(a).map(function(b) {
          return b.T
      })
  }
  function iq(a) {
      return jq(a).filter(function(b) {
          return b.T
      }).map(function(b) {
          return b.T
      })
  }
  function jq(a) {
      var b = kq(a.prefix)
        , c = lq("gb", b)
        , d = lq("ag", b);
      if (!d || !c)
          return [];
      var e = function(k) {
          return function(m) {
              m.type = k;
              return m
          }
      }
        , f = hq(c).map(e("gb"))
        , g = (kb(7) ? mq(d) : []).map(e("ag"));
      return f.concat(g).sort(function(k, m) {
          return m.timestamp - k.timestamp
      })
  }
  function nq(a, b, c, d, e, f) {
      var g = pb(a, function(k) {
          return k.T === c
      });
      g ? (g.timestamp < d && (g.timestamp = d,
      g.Bd = f),
      g.labels = oq(g.labels || [], e || [])) : a.push({
          version: b,
          T: c,
          timestamp: d,
          labels: e,
          Bd: f
      })
  }
  function mq(a) {
      for (var b = Qp(a) || [], c = [], d = h(b), e = d.next(); !e.done; e = d.next()) {
          var f = e.value
            , g = f
            , k = g.k
            , m = g.b
            , n = pq(f);
          if (n) {
              var p = void 0;
              kb(13) && (p = f.u);
              nq(c, "2", k, n, m || [], p)
          }
      }
      return c.sort(function(q, r) {
          return r.timestamp - q.timestamp
      })
  }
  function hq(a) {
      for (var b = [], c = zo(a, E.cookie, void 0, dq()), d = h(c), e = d.next(); !e.done; e = d.next()) {
          var f = qq(e.value);
          if (f != null) {
              var g = f;
              nq(b, g.version, g.T, g.timestamp, g.labels)
          }
      }
      b.sort(function(k, m) {
          return m.timestamp - k.timestamp
      });
      return rq(b)
  }
  function sq(a, b) {
      for (var c = [], d = h(a), e = d.next(); !e.done; e = d.next()) {
          var f = e.value;
          c.includes(f) || c.push(f)
      }
      for (var g = h(b), k = g.next(); !k.done; k = g.next()) {
          var m = k.value;
          c.includes(m) || c.push(m)
      }
      return c
  }
  function tq(a, b) {
      var c = pb(a, function(d) {
          return d.T === b.T
      });
      c ? (c.timestamp < b.timestamp && (c.timestamp = b.timestamp,
      c.Bd = b.Bd),
      c.La = c.La ? b.La ? c.timestamp < b.timestamp ? b.La : c.La : c.La || 0 : b.La || 0,
      c.labels = sq(c.labels || [], b.labels || []),
      c.Nc = sq(c.Nc || [], b.Nc || [])) : a.push(b)
  }
  function uq() {
      var a = Xp();
      if (!a || a.error || !a.value || typeof a.value !== "object")
          return null;
      var b = a.value;
      try {
          if (!("value"in b && b.value) || typeof b.value !== "object")
              return null;
          var c = b.value
            , d = c.value;
          return d && d.match(aq) ? {
              version: "",
              T: d,
              timestamp: Number(c.creationTimeMs) || 0,
              labels: [],
              La: c.linkDecorationSource || 0,
              Nc: [2]
          } : null
      } catch (e) {
          return null
      }
  }
  function vq(a) {
      for (var b = [], c = zo(a, E.cookie, void 0, dq()), d = h(c), e = d.next(); !e.done; e = d.next()) {
          var f = qq(e.value);
          f != null && (f.Bd = void 0,
          f.La = 0,
          f.Nc = [1],
          tq(b, f))
      }
      var g = uq();
      g && (g.Bd = void 0,
      g.La = g.La || 0,
      g.Nc = g.Nc || [2],
      tq(b, g));
      b.sort(function(k, m) {
          return m.timestamp - k.timestamp
      });
      return rq(b)
  }
  function oq(a, b) {
      if (!a.length)
          return b;
      if (!b.length)
          return a;
      var c = {};
      return a.concat(b).filter(function(d) {
          return c.hasOwnProperty(d) ? !1 : c[d] = !0
      })
  }
  function kq(a) {
      return a && typeof a === "string" && a.match($p) ? a : "_gcl"
  }
  function wq(a, b, c) {
      var d = pj(a)
        , e = {
          value: jj(d, "query", !1, void 0, "gclid"),
          La: c ? 4 : 2
      };
      if (b && !e.value) {
          var f = d.hash.replace("#", "");
          e.value = ij(f, "gclid", !1);
          e.La = 3
      }
      return e.value ? [e] : []
  }
  function xq(a, b) {
      var c = kb(7)
        , d = pj(a)
        , e = jj(d, "query", !1, void 0, "gclid")
        , f = jj(d, "query", !1, void 0, "gclsrc")
        , g = jj(d, "query", !1, void 0, "wbraid");
      g = Lb(g);
      var k;
      c && (k = jj(d, "query", !1, void 0, "gbraid"));
      var m = jj(d, "query", !1, void 0, "gad_source")
        , n = jj(d, "query", !1, void 0, "dclid");
      if (b && (!e || !f || !g || c && !k)) {
          var p = d.hash.replace("#", "");
          e = e || ij(p, "gclid", !1);
          f = f || ij(p, "gclsrc", !1);
          g = g || ij(p, "wbraid", !1);
          c && (k = k || ij(p, "gbraid", !1));
          m = m || ij(p, "gad_source", !1)
      }
      return yq(e, f, n, g, k, m)
  }
  function zq() {
      return xq(C.location.href, !0)
  }
  function yq(a, b, c, d, e, f) {
      var g = {}
        , k = function(m, n) {
          g[n] || (g[n] = []);
          g[n].push(m)
      };
      g.gclid = a;
      g.gclsrc = b;
      g.dclid = c;
      if (a !== void 0 && a.match(aq))
          switch (b) {
          case void 0:
              k(a, "aw");
              break;
          case "aw.ds":
              k(a, "aw");
              k(a, "dc");
              break;
          case "ds":
              k(a, "dc");
              break;
          case "3p.ds":
              k(a, "dc");
              break;
          case "gf":
              k(a, "gf");
              break;
          case "ha":
              k(a, "ha")
          }
      c && k(c, "dc");
      d !== void 0 && aq.test(d) && (g.wbraid = d,
      k(d, "gb"));
      kb(7) && e !== void 0 && aq.test(e) && (g.gbraid = e,
      k(e, "ag"));
      f !== void 0 && aq.test(f) && (g.gad_source = f,
      k(f, "gs"));
      return g
  }
  function Aq(a) {
      var b = zq();
      if (kb(6)) {
          for (var c = !0, d = h(Object.keys(b)), e = d.next(); !e.done; e = d.next())
              if (b[e.value] !== void 0) {
                  c = !1;
                  break
              }
          c && (b = xq(C.document.referrer, !1),
          b.gad_source = void 0)
      }
      Bq(b, !1, a)
  }
  function Cq(a) {
      Aq(a);
      var b = wq(C.location.href, !0, !1);
      kb(6) && !b.length && (b = wq(C.document.referrer, !1, !0));
      if (b.length) {
          var c = b[0];
          a = a || {};
          var d = zb()
            , e = Uo(a, d, !0)
            , f = dq()
            , g = function() {
              if (eq(f) && e.expires !== void 0) {
                  var k = {
                      value: {
                          value: c.value,
                          creationTimeMs: d,
                          linkDecorationSource: c.La
                      },
                      expires: Number(e.expires)
                  }
                    , m = Yp();
                  if (!m.error && m.value)
                      a: if (m.value.gclid = k,
                      !m.error && m.value) {
                          var n = m.value, p;
                          try {
                              p = JSON.stringify(n)
                          } catch (q) {
                              break a
                          }
                          try {
                              C.localStorage.setItem("_gcl_ls", p)
                          } catch (q) {}
                      }
              }
          };
          Tk(function() {
              g();
              eq(f) || Uk(g, f)
          }, f)
      }
  }
  function Bq(a, b, c, d, e) {
      c = c || {};
      e = e || [];
      var f = kq(c.prefix)
        , g = d || zb()
        , k = Math.round(g / 1E3)
        , m = dq()
        , n = !1
        , p = !1
        , q = function() {
          if (eq(m)) {
              var r = Uo(c, g, !0);
              r.Db = m;
              for (var t = function(G, O) {
                  var L = lq(G, f);
                  L && (Ko(L, O, r),
                  G !== "gb" && (n = !0))
              }, v = function(G) {
                  var O = ["GCL", k, G];
                  e.length > 0 && O.push(e.join("."));
                  return O.join(".")
              }, u = h(["aw", "dc", "gf", "ha", "gp"]), w = u.next(); !w.done; w = u.next()) {
                  var x = w.value;
                  a[x] && t(x, v(a[x][0]))
              }
              if (!n && a.gb) {
                  var y = a.gb[0]
                    , A = lq("gb", f);
                  !b && hq(A).some(function(G) {
                      return G.T === y && G.labels && G.labels.length > 0
                  }) || t("gb", v(y))
              }
          }
          if (!p && kb(7) && a.gbraid && eq("ad_storage") && (p = !0,
          !n)) {
              var B = a.gbraid
                , D = lq("ag", f);
              if (b || !(kb(7) ? mq(D) : []).some(function(G) {
                  return G.T === B && G.labels && G.labels.length > 0
              })) {
                  var H = {}
                    , J = (H.k = B,
                  H.i = "" + k,
                  H.b = e,
                  H);
                  Sp(D, J, c, g)
              }
          }
          Dq(a, f, g, c)
      };
      Tk(function() {
          q();
          eq(m) || Uk(q, m)
      }, m)
  }
  function Dq(a, b, c, d) {
      if (a.gad_source !== void 0 && eq("ad_storage")) {
          var e = a.gad_source
            , f = lq("gs", b);
          if (f) {
              var g = Math.round((zb() - (Nc() || 0)) / 1E3), k;
              if (kb(13)) {
                  var m, n = String, p = C.location.hostname, q = C.location.pathname, r = p = sj(p);
                  r.split(".").length > 2 && (r = r.replace(/^(www[0-9]*|web|ftp|wap|home|m|w|amp|mobile)\./, ""));
                  p = r;
                  q = sj(q);
                  var t = q.split(";")[0];
                  t = t.replace(/\/(ar|slp|web|index)?\/?$/, "");
                  m = n(xo(("" + p + t).toLowerCase()));
                  var v = {};
                  k = (v.k = e,
                  v.i = "" + g,
                  v.u = m,
                  v)
              } else {
                  var u = {};
                  k = (u.k = e,
                  u.i = "" + g,
                  u)
              }
              Sp(f, k, d, c)
          }
      }
  }
  function Eq(a, b) {
      var c = jp(!0);
      fq(function() {
          for (var d = kq(b.prefix), e = 0; e < a.length; ++e) {
              var f = a[e];
              if (cq[f] !== void 0) {
                  var g = lq(f, d)
                    , k = c[g];
                  if (k) {
                      var m = Math.min(Fq(k), zb()), n;
                      b: {
                          for (var p = m, q = zo(g, E.cookie, void 0, dq()), r = 0; r < q.length; ++r)
                              if (Fq(q[r]) > p) {
                                  n = !0;
                                  break b
                              }
                          n = !1
                      }
                      if (!n) {
                          var t = Uo(b, m, !0);
                          t.Db = dq();
                          Ko(g, k, t)
                      }
                  }
              }
          }
          Bq(yq(c.gclid, c.gclsrc), !1, b)
      }, dq())
  }
  function Gq(a) {
      var b = [];
      kb(7) && b.push("ag");
      if (b.length !== 0) {
          var c = jp(!0)
            , d = kq(a.prefix);
          fq(function() {
              for (var e = 0; e < b.length; ++e) {
                  var f = lq(b[e], d);
                  if (f) {
                      var g = c[f];
                      if (g) {
                          var k = Np(g);
                          if (k) {
                              var m = pq(k);
                              m || (m = zb());
                              var n;
                              a: {
                                  for (var p = m, q = Qp(f), r = 0; r < q.length; ++r)
                                      if (pq(q[r]) > p) {
                                          n = !0;
                                          break a
                                      }
                                  n = !1
                              }
                              if (n)
                                  break;
                              k.i = "" + Math.round(m / 1E3);
                              Sp(f, k, a, m)
                          }
                      }
                  }
              }
          }, ["ad_storage"])
      }
  }
  function lq(a, b) {
      var c = cq[a];
      if (c !== void 0)
          return b + c
  }
  function Fq(a) {
      return Hq(a.split(".")).length !== 0 ? (Number(a.split(".")[1]) || 0) * 1E3 : 0
  }
  function pq(a) {
      return a ? (Number(a.i) || 0) * 1E3 : 0
  }
  function qq(a) {
      var b = Hq(a.split("."));
      return b.length === 0 ? null : {
          version: b[0],
          T: b[2],
          timestamp: (Number(b[1]) || 0) * 1E3,
          labels: b.slice(3)
      }
  }
  function Hq(a) {
      return a.length < 3 || a[0] !== "GCL" && a[0] !== "1" || !/^\d+$/.test(a[1]) || !aq.test(a[2]) ? [] : a
  }
  function Iq(a, b, c, d, e) {
      if (Array.isArray(b) && yo(C)) {
          var f = kq(e)
            , g = function() {
              for (var k = {}, m = 0; m < a.length; ++m) {
                  var n = lq(a[m], f);
                  if (n) {
                      var p = zo(n, E.cookie, void 0, dq());
                      p.length && (k[n] = p.sort()[p.length - 1])
                  }
              }
              return k
          };
          fq(function() {
              qp(g, b, c, d)
          }, dq())
      }
  }
  function Jq(a, b, c, d) {
      if (Array.isArray(a) && yo(C)) {
          var e = [];
          kb(7) && e.push("ag");
          if (e.length !== 0) {
              var f = kq(d)
                , g = function() {
                  for (var k = {}, m = 0; m < e.length; ++m) {
                      var n = lq(e[m], f);
                      if (!n)
                          return {};
                      var p = Qp(n);
                      if (p.length) {
                          var q = p.sort(function(r, t) {
                              return pq(t) - pq(r)
                          })[0];
                          k[n] = Op(q)
                      }
                  }
                  return k
              };
              fq(function() {
                  qp(g, a, b, c)
              }, ["ad_storage"])
          }
      }
  }
  function rq(a) {
      return a.filter(function(b) {
          return aq.test(b.T)
      })
  }
  function Kq(a, b) {
      if (yo(C)) {
          for (var c = kq(b.prefix), d = {}, e = 0; e < a.length; e++)
              cq[a[e]] && (d[a[e]] = cq[a[e]]);
          fq(function() {
              z(d, function(f, g) {
                  var k = zo(c + g, E.cookie, void 0, dq());
                  k.sort(function(t, v) {
                      return Fq(v) - Fq(t)
                  });
                  if (k.length) {
                      var m = k[0], n = Fq(m), p = Hq(m.split(".")).length !== 0 ? m.split(".").slice(3) : [], q = {}, r;
                      r = Hq(m.split(".")).length !== 0 ? m.split(".")[2] : void 0;
                      q[f] = [r];
                      Bq(q, !0, b, n, p)
                  }
              })
          }, dq())
      }
  }
  function Lq(a) {
      var b = []
        , c = [];
      kb(7) && (b.push("ag"),
      c.push("gbraid"));
      b.length !== 0 && fq(function() {
          for (var d = kq(a.prefix), e = 0; e < b.length; ++e) {
              var f = lq(b[e], d);
              if (!f)
                  break;
              var g = Qp(f);
              if (g.length) {
                  var k = g.sort(function(q, r) {
                      return pq(r) - pq(q)
                  })[0]
                    , m = pq(k)
                    , n = k.b
                    , p = {};
                  p[c[e]] = k.k;
                  Bq(p, !0, a, m, n)
              }
          }
      }, ["ad_storage"])
  }
  function Mq(a, b) {
      for (var c = 0; c < b.length; ++c)
          if (a[b[c]])
              return !0;
      return !1
  }
  function Nq(a) {
      function b(e, f, g) {
          g && (e[f] = g)
      }
      if (Qk()) {
          var c = zq();
          if (Mq(c, a)) {
              var d = {};
              b(d, "gclid", c.gclid);
              b(d, "dclid", c.dclid);
              b(d, "gclsrc", c.gclsrc);
              b(d, "wbraid", c.wbraid);
              kb(7) && b(d, "gbraid", c.gbraid);
              rp(function() {
                  return d
              }, 3);
              rp(function() {
                  var e = {};
                  return e._up = "1",
                  e
              }, 1)
          }
      }
  }
  function Oq(a) {
      if (!kb(1))
          return null;
      var b = jp(!0).gad_source;
      if (b != null)
          return C.location.hash = "",
          b;
      if (kb(2)) {
          var c = pj(C.location.href);
          b = jj(c, "query", !1, void 0, "gad_source");
          if (b != null)
              return b;
          var d = zq();
          if (Mq(d, a))
              return "0"
      }
      return null
  }
  function Pq(a) {
      var b = Oq(a);
      b != null && rp(function() {
          var c = {};
          return c.gad_source = b,
          c
      }, 4)
  }
  function Qq(a, b, c) {
      var d = [];
      if (b.length === 0)
          return d;
      for (var e = {}, f = 0; f < b.length; f++) {
          var g = b[f]
            , k = g.type ? g.type : "gcl";
          (g.labels || []).indexOf(c) === -1 ? (a.push(0),
          e[k] || d.push(g)) : a.push(1);
          e[k] = !0
      }
      return d
  }
  function Rq(a, b, c, d) {
      var e = [];
      c = c || {};
      if (!eq(dq()))
          return e;
      var f = hq(a)
        , g = Qq(e, f, b);
      if (g.length && !d)
          for (var k = h(g), m = k.next(); !m.done; m = k.next()) {
              var n = m.value
                , p = n.timestamp
                , q = [n.version, Math.round(p / 1E3), n.T].concat(n.labels || [], [b]).join(".")
                , r = Uo(c, p, !0);
              r.Db = dq();
              Ko(a, q, r)
          }
      return e
  }
  function Sq(a, b) {
      var c = [];
      b = b || {};
      var d = jq(b)
        , e = Qq(c, d, a);
      if (e.length)
          for (var f = h(e), g = f.next(); !g.done; g = f.next()) {
              var k = g.value
                , m = kq(b.prefix)
                , n = lq(k.type, m);
              if (!n)
                  break;
              var p = k
                , q = p.version
                , r = p.T
                , t = p.labels
                , v = p.timestamp
                , u = Math.round(v / 1E3);
              if (k.type === "ag") {
                  var w = {}
                    , x = (w.k = r,
                  w.i = "" + u,
                  w.b = (t || []).concat([a]),
                  w);
                  Sp(n, x, b, v)
              } else if (k.type === "gb") {
                  var y = [q, u, r].concat(t || [], [a]).join(".")
                    , A = Uo(b, v, !0);
                  A.Db = dq();
                  Ko(n, y, A)
              }
          }
      return c
  }
  function Tq(a, b) {
      var c = kq(b)
        , d = lq(a, c);
      if (!d)
          return 0;
      var e;
      e = a === "ag" ? kb(7) ? mq(d) : [] : hq(d);
      for (var f = 0, g = 0; g < e.length; g++)
          f = Math.max(f, e[g].timestamp);
      return f
  }
  function Uq(a) {
      for (var b = 0, c = h(Object.keys(a)), d = c.next(); !d.done; d = c.next())
          for (var e = a[d.value], f = 0; f < e.length; f++)
              b = Math.max(b, Number(e[f].timestamp));
      return b
  }
  function Vq(a, b) {
      var c = Math.max(Tq("aw", a), Uq(eq(dq()) ? Vp() : {}))
        , d = Math.max(Tq("gb", a), Uq(eq(dq()) ? Vp("_gac_gb", !0) : {}));
      kb(7) && b && (d = Math.max(d, Tq("ag", a)));
      return d > c
  }
  ;var Wq = function(a, b) {
      var c = wi.ads_pageview = wi.ads_pageview || {};
      if (c[a])
          return !1;
      (b === void 0 ? 0 : b) || (c[a] = !0);
      return !0
  }
    , er = function(a, b, c, d, e) {
      var f = kq(a.prefix);
      if (Wq(f, !0)) {
          var g = zq(), k = [], m = g.gclid, n = g.dclid, p = g.gclsrc || "aw", q, r;
          if (Q(71)) {
              var t = Xq();
              q = t.Ke;
              r = t.Pj
          } else
              q = Yq();
          !m || p !== "aw.ds" && p !== "aw" && p !== "ds" && p !== "3p.ds" || k.push({
              T: m,
              Le: p
          });
          n && k.push({
              T: n,
              Le: "ds"
          });
          k.length === 2 && T(147);
          k.length === 0 && g.wbraid && k.push({
              T: g.wbraid,
              Le: "gb"
          });
          k.length === 0 && p === "aw.ds" && k.push({
              T: "",
              Le: "aw.ds"
          });
          Zq(function() {
              var v = W($q());
              if (v) {
                  xp(a);
                  var u = []
                    , w = v ? vp[yp(a.prefix)] : void 0;
                  w && u.push("auid=" + w);
                  if (W(N.g.N)) {
                      e && u.push("userId=" + e);
                      var x = uo(po.fh);
                      if (x === void 0)
                          to(po.gh, !0);
                      else {
                          var y = uo(po.xe);
                          u.push("ga_uid=" + y + "." + x)
                      }
                  }
                  var A = E.referrer ? jj(pj(E.referrer), "host") : ""
                    , B = v || !d ? k : [];
                  B.length === 0 && (ar.test(A) || br.test(A)) && B.push({
                      T: "",
                      Le: ""
                  });
                  if (B.length !== 0 || q !== void 0) {
                      A && u.push("ref=" + encodeURIComponent(A));
                      var D = cr();
                      u.push("url=" + encodeURIComponent(D));
                      u.push("tft=" + zb());
                      var H = Nc();
                      H !== void 0 && u.push("tfd=" + Math.round(H));
                      var J = qn(!0);
                      u.push("frm=" + J);
                      q !== void 0 && u.push("gad_source=" + encodeURIComponent(q));
                      r !== void 0 && u.push("gad_source_src=" + encodeURIComponent(r.toString()));
                      if (!c) {
                          var G = {};
                          c = gm(Xl(new Wl(0), (G[N.g.ja] = Bm.j[N.g.ja],
                          G)))
                      }
                      u.push("gtm=" + oo({
                          ra: b
                      }));
                      ao() && u.push("gcs=" + bo());
                      u.push("gcd=" + go(c));
                      jo() && u.push("dma_cps=" + ho());
                      u.push("dma=" + io());
                      $n(c) ? u.push("npa=0") : u.push("npa=1");
                      lo() && u.push("_ng=1");
                      zn(Hn()) && u.push("tcfd=" + ko());
                      var O = On();
                      O && u.push("gdpr=" + O);
                      var L = Nn();
                      L && u.push("gdpr_consent=" + L);
                      Q(18) && u.push("apve=" + (Q(19) ? 1 : 0));
                      Q(89) && jp(!1)._up && u.push("gtm_up=1");
                      Pi.j && u.push("tag_exp=" + Pi.j);
                      if (B.length > 0)
                          for (var S = 0; S < B.length; S++) {
                              var ca = B[S]
                                , Z = ca.T
                                , U = ca.Le;
                              if (!dr(a.prefix, U + "." + Z, w !== void 0)) {
                                  var R = 'https://adservice.google.com/pagead/regclk?' + u.join("&");
                                  Z !== "" ? R = U === "gb" ? R + "&wbraid=" + Z : R + "&gclid=" + Z + "&gclsrc=" + U : U === "aw.ds" && (R += "&gclsrc=aw.ds");
                                  Hc(R)
                              }
                          }
                      else if (q !== void 0 && !dr(a.prefix, "gad", w !== void 0)) {
                          var ma = 'https://adservice.google.com/pagead/regclk?' + u.join("&");
                          Hc(ma)
                      }
                  }
              }
          })
      }
  }
    , dr = function(a, b, c) {
      var d = wi.joined_auid = wi.joined_auid || {}
        , e = (c ? a || "_gcl" : "") + "." + b;
      if (d[e])
          return !0;
      d[e] = !0;
      return !1
  }
    , Xq = function() {
      var a = pj(C.location.href)
        , b = void 0
        , c = void 0
        , d = jj(a, "query", !1, void 0, "gad_source")
        , e = fr(a);
      d && e ? (b = d,
      c = 1) : d ? (b = d,
      c = 2) : e && (b = e,
      c = 3);
      return {
          Ke: b,
          Pj: c
      }
  }
    , fr = function(a) {
      var b = a.hash.replace("#", "").match(gr);
      return b ? b[1] : void 0
  }
    , Yq = function() {
      var a = pj(C.location.href)
        , b = jj(a, "query", !1, void 0, "gad_source");
      b === void 0 && (b = fr(a));
      return b
  }
    , cr = function() {
      var a = qn(!1) === 1 ? C.top.location.href : C.location.href;
      return a = a.replace(/[\?#].*$/, "")
  }
    , hr = function(a) {
      var b = [];
      z(a, function(c, d) {
          d = rq(d);
          for (var e = [], f = 0; f < d.length; f++)
              e.push(d[f].T);
          e.length && b.push(c + ":" + e.join(","))
      });
      return b.join(";")
  }
    , jr = function(a, b) {
      return ir("dc", a, b)
  }
    , kr = function(a, b) {
      return ir("aw", a, b)
  }
    , ir = function(a, b, c) {
      if (a === "aw" || a === "dc" || a === "gb") {
          var d = rj("gcl" + a);
          if (d)
              return d.split(".")
      }
      var e = kq(b);
      if (e === "_gcl") {
          var f = !W($q()) && c, g;
          g = zq()[a] || [];
          if (g.length > 0)
              return f ? ["0"] : g
      }
      var k = lq(a, e);
      return k ? gq(k) : []
  }
    , Zq = function(a) {
      var b = $q();
      sl(function() {
          a();
          W(b) || Uk(a, b)
      }, b)
  }
    , $q = function() {
      return [N.g.O, N.g.N]
  }
    , ar = /^(?:www\.)?google(?:\.com?)?(?:\.[a-z]{2}t?)?$/
    , br = /^www\.googleadservices\.com$/
    , gr = /^gad_source[_=](\d+)$/;
  function lr() {
      wi.dedupe_gclid || (wi.dedupe_gclid = Ro());
      return wi.dedupe_gclid
  }
  ;var mr = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/
    , nr = /^www.googleadservices.com$/;
  function or(a) {
      a || (a = pr());
      return a.rn ? !1 : a.dm || a.fm || a.im || a.gm || a.Ke || a.Ql || a.hm || a.Ul ? !0 : !1
  }
  function pr() {
      var a = {}
        , b = jp(!0);
      a.rn = !!b._up;
      var c = zq();
      a.dm = c.aw !== void 0;
      a.fm = c.dc !== void 0;
      a.im = c.wbraid !== void 0;
      a.gm = c.gbraid !== void 0;
      a.hm = c.gclsrc === "aw.ds";
      a.Ke = Xq().Ke;
      var d = E.referrer ? jj(pj(E.referrer), "host") : "";
      a.Ul = mr.test(d);
      a.Ql = nr.test(d);
      return a
  }
  ;var qr = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$")
    , rr = /^~?[\w-]+(?:\.~?[\w-]+)*$/
    , sr = /^\d+\.fls\.doubleclick\.net$/
    , tr = /;gac=([^;?]+)/
    , ur = /;gacgb=([^;?]+)/;
  function vr(a, b) {
      if (sr.test(E.location.host)) {
          var c = E.location.href.match(b);
          return c && c.length === 2 && c[1].match(qr) ? decodeURIComponent(c[1]) : ""
      }
      for (var d = [], e = h(Object.keys(a)), f = e.next(); !f.done; f = e.next()) {
          for (var g = f.value, k = [], m = a[g], n = 0; n < m.length; n++)
              k.push(m[n].T);
          d.push(g + ":" + k.join(","))
      }
      return d.length > 0 ? d.join(";") : ""
  }
  function wr(a, b, c) {
      for (var d = eq(dq()) ? Vp("_gac_gb", !0) : {}, e = [], f = !1, g = h(Object.keys(d)), k = g.next(); !k.done; k = g.next()) {
          var m = k.value
            , n = Rq("_gac_gb_" + m, a, b, c);
          f = f || n.length !== 0 && n.some(function(p) {
              return p === 1
          });
          e.push(m + ":" + n.join(","))
      }
      return {
          Pl: f ? e.join(";") : "",
          Ol: vr(d, ur)
      }
  }
  function xr(a) {
      var b = E.location.href.match(new RegExp(";" + a + "=([^;?]+)"));
      return b && b.length === 2 && b[1].match(rr) ? b[1] : void 0
  }
  function yr(a) {
      var b = kb(13), c = {}, d, e, f;
      sr.test(E.location.host) && (d = xr("gclgs"),
      e = xr("gclst"),
      b && (f = xr("gcllp")));
      if (d && e && (!b || f))
          c.yh = d,
          c.Ah = e,
          c.zh = f;
      else {
          var g = zb()
            , k = mq((a || "_gcl") + "_gs")
            , m = k.map(function(q) {
              return q.T
          })
            , n = k.map(function(q) {
              return g - q.timestamp
          })
            , p = [];
          b && (p = k.map(function(q) {
              return q.Bd
          }));
          m.length > 0 && n.length > 0 && (!b || p.length > 0) && (c.yh = m.join("."),
          c.Ah = n.join("."),
          b && p.length > 0 && (c.zh = p.join(".")))
      }
      return c
  }
  function zr(a, b, c, d) {
      d = d === void 0 ? !1 : d;
      if (sr.test(E.location.host)) {
          var e = xr(c);
          if (e)
              return [{
                  T: e
              }]
      } else {
          if (b === "gclid") {
              var f = (a || "_gcl") + "_aw";
              return d ? vq(f) : hq(f)
          }
          if (b === "wbraid")
              return hq((a || "_gcl") + "_gb");
          if (b === "braids")
              return jq({
                  prefix: a
              })
      }
      return []
  }
  function Ar(a) {
      return zr(a, "gclid", "gclaw").map(function(b) {
          return b.T
      }).join(".")
  }
  function Br(a) {
      var b = zr(a, "gclid", "gclaw", !0)
        , c = b.map(function(f) {
          return f.T
      }).join(".")
        , d = b.map(function(f) {
          return f.La || 0
      }).join(".")
        , e = b.map(function(f) {
          for (var g = 0, k = h(f.Nc || []), m = k.next(); !m.done; m = k.next()) {
              var n = m.value;
              n === 1 && (g |= 1);
              n === 2 && (g |= 2)
          }
          return g.toString()
      }).join(".");
      return {
          T: c,
          Qj: d,
          Rj: e
      }
  }
  function Cr(a) {
      return zr(a, "wbraid", "gclgb").map(function(b) {
          return b.T
      }).join(".")
  }
  function Dr(a) {
      return zr(a, "braids", "gclgb").map(function(b) {
          return b.T
      }).join(".")
  }
  function Er(a, b) {
      return sr.test(E.location.host) ? !(xr("gclaw") || xr("gac")) : Vq(a, b)
  }
  function Fr(a, b, c) {
      var d;
      d = c ? Sq(a, b) : Rq((b && b.prefix || "_gcl") + "_gb", a, b);
      return d.length === 0 || d.every(function(e) {
          return e === 0
      }) ? "" : d.join(".")
  }
  ;function Gr() {
      var a = C.__uspapi;
      if (mb(a)) {
          var b = "";
          try {
              a("getUSPData", 1, function(c, d) {
                  if (d && c) {
                      var e = c.uspString;
                      e && RegExp("^[\\da-zA-Z-]{1,20}$").test(e) && (b = e)
                  }
              })
          } catch (c) {}
          return b
      }
  }
  ;var Kr = function(a) {
      if (a.eventName === N.g.aa && a.metadata.hit_type === "page_view")
          if (Q(19)) {
              a.metadata.redact_click_ids = V(a.m, N.g.fa) != null && V(a.m, N.g.fa) !== !1 && !W([N.g.O, N.g.N]);
              var b = Hr(a)
                , c = V(a.m, N.g.na) !== !1;
              c || (a.j[N.g.Ki] = "1");
              var d = kq(b.prefix)
                , e = a.metadata.is_server_side_destination;
              if (!a.metadata.consent_updated && !a.metadata.user_id_updated) {
                  var f = V(a.m, N.g.Ya)
                    , g = V(a.m, N.g.oa) || {};
                  Ir({
                      sd: c,
                      Cd: g,
                      Gd: f,
                      ic: b
                  });
                  if (!e && !Wq(d)) {
                      a.isAborted = !0;
                      return
                  }
              }
              if (e)
                  a.isAborted = !0;
              else {
                  a.j[N.g.vc] = N.g.Ub;
                  if (a.metadata.consent_updated)
                      a.j[N.g.vc] = N.g.zk,
                      a.j[N.g.Sb] = "1";
                  else if (a.metadata.user_id_updated)
                      a.j[N.g.vc] = N.g.Ek;
                  else {
                      var k = zq();
                      a.j[N.g.Ld] = k.gclid;
                      a.j[N.g.Td] = k.dclid;
                      a.j[N.g.Fi] = k.gclsrc;
                      a.j[N.g.Ld] || a.j[N.g.Td] || (a.j[N.g.lf] = k.wbraid,
                      a.j[N.g.ng] = k.gbraid);
                      a.j[N.g.Aa] = E.referrer ? jj(pj(E.referrer), "host") : "";
                      a.j[N.g.qa] = cr();
                      Q(23) && (a.j[N.g.eb] = Jr());
                      if (Q(22) && pc && pc.src) {
                          var m = jj(pj(pc.src), "host");
                          m && (a.j[N.g.cj] = m)
                      }
                      var n;
                      if (Q(71)) {
                          var p = Xq();
                          n = p.Ke;
                          a.j[N.g.Ei] = p.Pj
                      } else
                          n = Yq();
                      a.j[N.g.Di] = n;
                      a.j[N.g.Jb] = qn(!0);
                      var q = pr();
                      or(q) && (a.j[N.g.fd] = "1");
                      a.j[N.g.Hi] = lr();
                      jp(!1)._up === "1" && (a.j[N.g.Xi] = "1")
                  }
                  Wk = !0;
                  var r = W([N.g.O, N.g.N]);
                  c && r && (xp(b),
                  a.j[N.g.Hb] = vp[yp(b.prefix)]);
                  a.j[N.g.ob] = void 0;
                  a.j[N.g.Wa] = void 0;
                  var t = Q(74);
                  if (!a.j[N.g.Ld] && !a.j[N.g.Td] && Er(d, t)) {
                      var v = t ? iq(b) : gq(d + "_gb");
                      v.length > 0 && (a.j[N.g.ob] = v.join("."))
                  } else if (!a.j[N.g.lf] && r) {
                      var u = gq(d + "_aw");
                      u.length > 0 && (a.j[N.g.Wa] = u.join("."))
                  }
                  a.m.isGtmEvent && (a.m.j[N.g.ja] = Bm.j[N.g.ja]);
                  $n(a.m) ? a.j[N.g.Ob] = !1 : a.j[N.g.Ob] = !0;
                  a.metadata.add_tag_timing = !0;
                  var w = Gr();
                  w !== void 0 && (a.j[N.g.me] = w || "error");
                  var x = On();
                  x && (a.j[N.g.yc] = x);
                  var y = Nn();
                  y && (a.j[N.g.Cc] = y);
                  a.metadata.speculative = !1
              }
          } else
              a.isAborted = !0
  }
    , Hr = function(a) {
      var b = {
          prefix: V(a.m, N.g.Za) || V(a.m, N.g.Ha),
          domain: V(a.m, N.g.Oa),
          Cb: V(a.m, N.g.Pa),
          flags: V(a.m, N.g.Xa)
      };
      a.m.isGtmEvent && (b.path = V(a.m, N.g.sb));
      return b
  }
    , Lr = function(a, b) {
      var c, d, e, f, g, k, m, n;
      c = a.sd;
      d = a.Cd;
      e = a.Gd;
      f = a.ra;
      g = a.m;
      k = a.Dd;
      m = a.Sn;
      n = a.qk;
      Ir({
          sd: c,
          Cd: d,
          Gd: e,
          ic: b
      });
      c && m !== !0 && (n != null ? n = String(n) : n = void 0,
      er(b, f, g, k, n))
  }
    , Ir = function(a) {
      var b, c, d, e;
      b = a.sd;
      c = a.Cd;
      d = a.Gd;
      e = a.ic;
      b && (tp(c[N.g.Bc], !!c[N.g.W]) && (Eq(Mr, e),
      Gq(e),
      Fp(e)),
      Q(83) ? Cq(e) : Aq(e),
      Kq(Mr, e),
      Lq(e));
      c[N.g.W] && (Iq(Mr, c[N.g.W], c[N.g.Lb], !!c[N.g.vb], e.prefix),
      Jq(c[N.g.W], c[N.g.Lb], !!c[N.g.vb], e.prefix),
      Gp(yp(e.prefix), c[N.g.W], c[N.g.Lb], !!c[N.g.vb], e),
      Gp("FPAU", c[N.g.W], c[N.g.Lb], !!c[N.g.vb], e));
      d && Nq(Nr);
      Pq(Nr)
  }
    , Or = function(a, b, c, d) {
      var e, f, g;
      e = a.rk;
      f = a.callback;
      g = a.Wj;
      if (typeof f === "function")
          if (e === N.g.Wa && g === void 0) {
              var k = d(b.prefix, c);
              k.length === 0 ? f(void 0) : k.length === 1 ? f(k[0]) : f(k)
          } else
              e === N.g.Hb ? (T(65),
              xp(b, !1),
              f(vp[yp(b.prefix)])) : f(g)
  }
    , Mr = ["aw", "dc", "gb"]
    , Nr = ["aw", "dc", "gb", "ag"];
  function Pr(a) {
      var b = V(a.m, N.g.Kb)
        , c = V(a.m, N.g.Yb);
      b && !c ? (a.eventName !== N.g.aa && a.eventName !== N.g.Oc && T(131),
      a.isAborted = !0) : !b && c && (T(132),
      a.isAborted = !0)
  }
  function Qr(a) {
      var b = W(N.g.O) ? wi.pscdl : "denied";
      b != null && (a.j[N.g.rf] = b)
  }
  function Rr(a) {
      var b = qn(!0);
      a.j[N.g.Jb] = b
  }
  function Sr(a) {
      lo() && (a.j[N.g.zc] = 1)
  }
  function Jr() {
      var a = E.title;
      if (a === void 0 || a === "")
          return "";
      var b = function(d) {
          try {
              return decodeURIComponent(d),
              !0
          } catch (e) {
              return !1
          }
      };
      a = encodeURIComponent(a);
      for (var c = 256; c > 0 && !b(a.substring(0, c)); )
          c--;
      return decodeURIComponent(a.substring(0, c))
  }
  function Tr(a) {
      Ur(a, "ce", V(a.m, N.g.Pa))
  }
  function Ur(a, b, c) {
      a.j[N.g.od] || (a.j[N.g.od] = {});
      a.j[N.g.od][b] = c
  }
  ;var Xr = function(a, b) {
      var c = a && !W([N.g.O, N.g.N]);
      return b && c ? "0" : b
  }
    , Zr = function(a) {
      var b = a.ic === void 0 ? {} : a.ic
        , c = kq(b.prefix);
      Wq(c) && sl(function() {
          function d(x) {
              var y = W([N.g.O, N.g.N]), A = m && y, B = b.prefix || "_gcl", D;
              wi.reported_gclid || (wi.reported_gclid = {});
              D = wi.reported_gclid;
              var H = (A ? B : "") + "." + (W(N.g.O) ? 1 : 0) + "." + (W(N.g.N) ? 1 : 0);
              if (!D[H]) {
                  D[H] = !0;
                  var J = {}
                    , G = function(U, R) {
                      if (R || typeof R === "number")
                          J[U] = R.toString()
                  }
                    , O = "https://www.google.com";
                  ao() && (G("gcs", bo()),
                  x && G("gcu", 1));
                  G("gcd", go(k));
                  Pi.j && G("tag_exp", Pi.j);
                  if (Qk()) {
                      G("rnd", lr());
                      if ((!p || q && q !== "aw.ds") && y) {
                          var L = gq(B + "_aw");
                          G("gclaw", L.join("."))
                      }
                      G("url", String(C.location).split(/[?#]/)[0]);
                      G("dclid", Xr(f, r));
                      y || (O = "https://pagead2.googlesyndication.com")
                  }
                  jo() && G("dma_cps", ho());
                  G("dma", io());
                  G("npa", $n(k) ? 0 : 1);
                  lo() && G("_ng", 1);
                  zn(Hn()) && G("tcfd", ko());
                  G("gdpr_consent", Nn() || "");
                  G("gdpr", On() || "");
                  jp(!1)._up === "1" && G("gtm_up", 1);
                  G("gclid", Xr(f, p));
                  G("gclsrc", q);
                  if (!(J.hasOwnProperty("gclid") || J.hasOwnProperty("dclid") || J.hasOwnProperty("gclaw")) && (G("gbraid", Xr(f, t)),
                  !J.hasOwnProperty("gbraid") && Qk() && y)) {
                      var S = gq(B + "_gb");
                      S.length > 0 && G("gclgb", S.join("."))
                  }
                  G("gtm", oo({
                      ra: k.eventMetadata.source_canonical_id,
                      Pf: !g
                  }));
                  m && W(N.g.O) && (xp(b || {}),
                  A && G("auid", vp[yp(b.prefix)] || ""));
                  Yr || a.Nj && G("did", a.Nj);
                  a.Ch && G("gdid", a.Ch);
                  a.th && G("edid", a.th);
                  a.Eh !== void 0 && G("frm", a.Eh);
                  Q(18) && G("apve", Q(19) ? 1 : 0);
                  var ca = Object.keys(J).map(function(U) {
                      return U + "=" + encodeURIComponent(J[U])
                  })
                    , Z = O + "/pagead/landing?" + ca.join("&");
                  Hc(Z)
              }
          }
          var e = !!a.nh
            , f = !!a.Dd
            , g = a.targetId
            , k = a.m
            , m = a.Uf === void 0 ? !0 : a.Uf
            , n = zq()
            , p = n.gclid || ""
            , q = n.gclsrc
            , r = n.dclid || ""
            , t = n.wbraid || ""
            , v = !e && ((!p || q && q !== "aw.ds" ? !1 : !0) || t)
            , u = Qk();
          if (v || u)
              if (u) {
                  var w = [N.g.O, N.g.N, N.g.sa];
                  d();
                  (function() {
                      W(w) || rl(function(x) {
                          d(!0, x.consentEventId, x.consentPriorityId)
                      }, w)
                  }
                  )()
              } else
                  d()
      }, [N.g.O, N.g.N, N.g.sa])
  }
    , Yr = !1;
  function $r(a, b, c, d) {
      var e = xc(), f;
      if (e === 1)
          a: {
              var g = Ii;
              g = g.toLowerCase();
              for (var k = "https://" + g, m = "http://" + g, n = 1, p = E.getElementsByTagName("script"), q = 0; q < p.length && q < 100; q++) {
                  var r = p[q].src;
                  if (r) {
                      r = r.toLowerCase();
                      if (r.indexOf(m) === 0) {
                          f = 3;
                          break a
                      }
                      n === 1 && r.indexOf(k) === 0 && (n = 2)
                  }
              }
              f = n
          }
      else
          f = e;
      return (f === 2 || d || "http:" !== C.location.protocol ? a : b) + c
  }
  ;function ls(a) {
      return {
          getDestinationId: function() {
              return a.target.destinationId
          },
          getEventName: function() {
              return a.eventName
          },
          setEventName: function(b) {
              a.eventName = b
          },
          getHitData: function(b) {
              return a.j[b]
          },
          setHitData: function(b, c) {
              a.j[b] = c
          },
          setHitDataIfNotDefined: function(b, c) {
              a.j[b] === void 0 && (a.j[b] = c)
          },
          copyToHitData: function(b, c) {
              a.copyToHitData(b, c)
          },
          getMetadata: function(b) {
              return a.metadata[b]
          },
          setMetadata: function(b, c) {
              a.metadata[b] = c
          },
          isAborted: function() {
              return a.isAborted
          },
          abort: function() {
              a.isAborted = !0
          },
          getFromEventContext: function(b) {
              return V(a.m, b)
          },
          vd: function() {
              return a
          },
          getHitKeys: function() {
              return Object.keys(a.j)
          }
      }
  }
  ;var ns = function(a) {
      var b = ms[a.target.destinationId];
      if (!a.isAborted && b)
          for (var c = ls(a), d = 0; d < b.length; ++d) {
              try {
                  b[d](c)
              } catch (e) {
                  a.isAborted = !0
              }
              if (a.isAborted)
                  break
          }
  }
    , os = function(a, b) {
      var c = ms[a];
      c || (c = ms[a] = []);
      c.push(b)
  }
    , ms = {};
  var ss, ts = !1;
  function us() {
      ts = !0;
      ss = ss || {}
  }
  function vs(a) {
      ts || us();
      return ss[a]
  }
  function ws() {
      var a = C.screen;
      return {
          width: a ? a.width : 0,
          height: a ? a.height : 0
      }
  }
  function xs(a) {
      if (E.hidden)
          return !0;
      var b = a.getBoundingClientRect();
      if (b.top === b.bottom || b.left === b.right || !C.getComputedStyle)
          return !0;
      var c = C.getComputedStyle(a, null);
      if (c.visibility === "hidden")
          return !0;
      for (var d = a, e = c; d; ) {
          if (e.display === "none")
              return !0;
          var f = e.opacity
            , g = e.filter;
          if (g) {
              var k = g.indexOf("opacity(");
              k >= 0 && (g = g.substring(k + 8, g.indexOf(")", k)),
              g.charAt(g.length - 1) === "%" && (g = g.substring(0, g.length - 1)),
              f = String(Math.min(Number(g), Number(f))))
          }
          if (f !== void 0 && Number(f) <= 0)
              return !0;
          (d = d.parentElement) && (e = C.getComputedStyle(d, null))
      }
      return !1
  }
  var Hs = function(a) {
      return a.tagName + ":" + a.isVisible + ":" + a.X.length + ":" + Gs.test(a.X)
  }
    , Vs = function(a) {
      a = a || {
          yd: !0,
          zd: !0,
          dg: void 0
      };
      a.zb = a.zb || {
          email: !0,
          phone: !1,
          address: !1
      };
      var b = Is(a)
        , c = Js[b];
      if (c && zb() - c.timestamp < 200)
          return c.result;
      var d = Ks(), e = d.status, f = [], g, k, m = [];
      if (!Q(28)) {
          if (a.zb && a.zb.email) {
              var n = Ls(d.elements);
              f = Ms(n, a && a.Fe);
              g = Ns(f);
              n.length > 10 && (e = "3")
          }
          !a.dg && g && (f = [g]);
          for (var p = 0; p < f.length; p++)
              m.push(Os(f[p], !!a.yd, !!a.zd));
          m = m.slice(0, 10)
      } else if (a.zb) {}
      g && (k = Os(g, !!a.yd, !!a.zd));
      var D = {
          elements: m,
          Th: k,
          status: e
      };
      Js[b] = {
          timestamp: zb(),
          result: D
      };
      return D
  }
    , Us = function(a, b, c) {
      var d = a.element
        , e = {
          X: a.X,
          type: a.ma,
          tagName: d.tagName
      };
      b && (e.querySelector = Ws(d));
      c && (e.isVisible = !xs(d));
      return e
  }
    , Os = function(a, b, c) {
      return Us({
          element: a.element,
          X: a.X,
          ma: Ts.mc
      }, b, c)
  }
    , Is = function(a) {
      var b = !(a == null || !a.yd) + "." + !(a == null || !a.zd);
      a && a.Fe && a.Fe.length && (b += "." + a.Fe.join("."));
      a && a.zb && (b += "." + a.zb.email + "." + a.zb.phone + "." + a.zb.address);
      return b
  }
    , Ns = function(a) {
      if (a.length !== 0) {
          var b;
          b = Xs(a, function(c) {
              return !Ys.test(c.X)
          });
          b = Xs(b, function(c) {
              return c.element.tagName.toUpperCase() === "INPUT"
          });
          b = Xs(b, function(c) {
              return !xs(c.element)
          });
          return b[0]
      }
  }
    , Ms = function(a, b) {
      if (!b || b.length === 0)
          return a;
      for (var c = [], d = 0; d < a.length; d++) {
          for (var e = !0, f = 0; f < b.length; f++) {
              var g = b[f];
              if (g && Lh(a[d].element, g)) {
                  e = !1;
                  break
              }
          }
          e && c.push(a[d])
      }
      return c
  }
    , Xs = function(a, b) {
      if (a.length <= 1)
          return a;
      var c = a.filter(b);
      return c.length === 0 ? a : c
  }
    , Ws = function(a) {
      var b;
      if (a === E.body)
          b = "body";
      else {
          var c;
          if (a.id)
              c = "#" + a.id;
          else {
              var d;
              if (a.parentElement) {
                  var e;
                  a: {
                      var f = a.parentElement;
                      if (f) {
                          for (var g = 0; g < f.childElementCount; g++)
                              if (f.children[g] === a) {
                                  e = g + 1;
                                  break a
                              }
                          e = -1
                      } else
                          e = 1
                  }
                  d = Ws(a.parentElement) + ">:nth-child(" + e.toString() + ")"
              } else
                  d = "";
              c = d
          }
          b = c
      }
      return b
  }
    , Ls = function(a) {
      for (var b = [], c = 0; c < a.length; c++) {
          var d = a[c]
            , e = d.textContent;
          d.tagName.toUpperCase() === "INPUT" && d.value && (e = d.value);
          if (e) {
              var f = e.match(Zs);
              if (f) {
                  var g = f[0], k;
                  if (C.location) {
                      var m = lj(C.location, "host", !0);
                      k = g.toLowerCase().indexOf(m) >= 0
                  } else
                      k = !1;
                  k || b.push({
                      element: d,
                      X: g
                  })
              }
          }
      }
      return b
  }
    , Ks = function() {
      var a = []
        , b = E.body;
      if (!b)
          return {
              elements: a,
              status: "4"
          };
      for (var c = b.querySelectorAll("*"), d = 0; d < c.length && d < 1E4; d++) {
          var e = c[d];
          if (!($s.indexOf(e.tagName.toUpperCase()) >= 0) && e.children instanceof HTMLCollection) {
              for (var f = !1, g = 0; g < e.childElementCount && g < 1E4; g++)
                  if (!(at.indexOf(e.children[g].tagName.toUpperCase()) >= 0)) {
                      f = !0;
                      break
                  }
              (!f || Q(28) && bt.indexOf(e.tagName) !== -1) && a.push(e)
          }
      }
      return {
          elements: a,
          status: c.length > 1E4 ? "2" : "1"
      }
  }
    , ct = !1;
  var Zs = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i
    , Gs = /@(gmail|googlemail)\./i
    , Ys = /support|noreply/i
    , $s = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" ")
    , at = ["BR"]
    , Ts = {
      mc: "1",
      ue: "2",
      oe: "3",
      qe: "4",
      hg: "5",
      ah: "6",
      Of: "7"
  }
    , Js = {}
    , bt = ["INPUT", "SELECT"];
  var Jf;
  var xt = Number('') || 5
    , zt = Number('') || 50
    , At = qb();
  var Ft = {
      pl: Number('') || 500,
      Vk: Number('') || 5E3,
      sj: Number('20') || 10,
      yk: Number('') || 5E3
  };
  function Gt(a) {
      return a.performance && a.performance.now() || Date.now()
  }
  var Ht = function(a, b) {
      var c;
      return c
  };
  var It;
  function Ot() {
      var a = Mf(Jf.j, "", function() {
          return {}
      });
      try {
          return a("internal_sw_allowed"),
          !0
      } catch (b) {
          return !1
      }
  }
  function Pt(a, b) {}
  var Qt = function(a, b, c, d) {};
  function Rt(a, b, c, d) {}
  function St(a, b, c, d) {}
  var Tt = void 0;
  function Ut(a) {
      var b = [];
      return b
  }
  ;var Vt = function(a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
          var e = a.charCodeAt(d);
          e < 128 ? b[c++] = e : (e < 2048 ? b[c++] = e >> 6 | 192 : ((e & 64512) == 55296 && d + 1 < a.length && (a.charCodeAt(d + 1) & 64512) == 56320 ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023),
          b[c++] = e >> 18 | 240,
          b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224,
          b[c++] = e >> 6 & 63 | 128),
          b[c++] = e & 63 | 128)
      }
      return b
  };
  cn();
  fn() || $m("iPod");
  $m("iPad");
  !$m("Android") || dn() || cn() || bn() || $m("Silk");
  dn();
  !$m("Safari") || dn() || (an() ? 0 : $m("Coast")) || bn() || (an() ? 0 : $m("Edge")) || (an() ? Zm("Microsoft Edge") : $m("Edg/")) || (an() ? Zm("Opera") : $m("OPR")) || cn() || $m("Silk") || $m("Android") || gn();
  var Wt = {}
    , Xt = null
    , Yt = function(a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
          var e = a.charCodeAt(d);
          e > 255 && (b[c++] = e & 255,
          e >>= 8);
          b[c++] = e
      }
      var f = 4;
      f === void 0 && (f = 0);
      if (!Xt) {
          Xt = {};
          for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), k = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; m < 5; m++) {
              var n = g.concat(k[m].split(""));
              Wt[m] = n;
              for (var p = 0; p < n.length; p++) {
                  var q = n[p];
                  Xt[q] === void 0 && (Xt[q] = p)
              }
          }
      }
      for (var r = Wt[f], t = Array(Math.floor(b.length / 3)), v = r[64] || "", u = 0, w = 0; u < b.length - 2; u += 3) {
          var x = b[u]
            , y = b[u + 1]
            , A = b[u + 2]
            , B = r[x >> 2]
            , D = r[(x & 3) << 4 | y >> 4]
            , H = r[(y & 15) << 2 | A >> 6]
            , J = r[A & 63];
          t[w++] = "" + B + D + H + J
      }
      var G = 0
        , O = v;
      switch (b.length - u) {
      case 2:
          G = b[u + 1],
          O = r[(G & 15) << 2] || v;
      case 1:
          var L = b[u];
          t[w] = "" + r[L >> 2] + r[(L & 3) << 4 | G >> 4] + O + v
      }
      return t.join("")
  };
  var Zt = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
  function $t(a) {
      var b;
      return (b = a.google_tag_data) != null ? b : a.google_tag_data = {}
  }
  function au() {
      var a = C.google_tag_data, b;
      if (a != null && a.uach) {
          var c = a.uach
            , d = Object.assign({}, c);
          c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
          b = d
      } else
          b = null;
      return b
  }
  function bu() {
      var a, b;
      return (b = (a = C.google_tag_data) == null ? void 0 : a.uach_promise) != null ? b : null
  }
  function cu(a) {
      var b, c;
      return typeof ((b = a.navigator) == null ? void 0 : (c = b.userAgentData) == null ? void 0 : c.getHighEntropyValues) === "function"
  }
  function du() {
      var a = C;
      if (!cu(a))
          return null;
      var b = $t(a);
      if (b.uach_promise)
          return b.uach_promise;
      var c = a.navigator.userAgentData.getHighEntropyValues(Zt).then(function(d) {
          b.uach != null || (b.uach = d);
          return d
      });
      return b.uach_promise = c
  }
  ;var eu = function(a, b) {
      a && (b.j[N.g.Ff] = a.architecture,
      b.j[N.g.Gf] = a.bitness,
      a.fullVersionList && (b.j[N.g.Hf] = a.fullVersionList.map(function(c) {
          return encodeURIComponent(c.brand || "") + ";" + encodeURIComponent(c.version || "")
      }).join("|")),
      b.j[N.g.If] = a.mobile ? "1" : "0",
      b.j[N.g.Jf] = a.model,
      b.j[N.g.Kf] = a.platform,
      b.j[N.g.Lf] = a.platformVersion,
      b.j[N.g.Mf] = a.wow64 ? "1" : "0")
  }, gu = function(a) {
      var b = fu.qn
        , c = function(g, k) {
          try {
              a(g, k)
          } catch (m) {}
      }
        , d = au();
      if (d)
          c(d);
      else {
          var e = bu();
          if (e) {
              b = Math.min(Math.max(isFinite(b) ? b : 0, 0), 1E3);
              var f = C.setTimeout(function() {
                  c.Re || (c.Re = !0,
                  T(106),
                  c(null, Error("Timeout")))
              }, b);
              e.then(function(g) {
                  c.Re || (c.Re = !0,
                  T(104),
                  C.clearTimeout(f),
                  c(g))
              }).catch(function(g) {
                  c.Re || (c.Re = !0,
                  T(105),
                  C.clearTimeout(f),
                  c(null, g))
              })
          } else
              c(null)
      }
  }, iu = function() {
      if (cu(C) && (hu = zb(),
      !bu())) {
          var a = du();
          a && (a.then(function() {
              T(95);
          }),
          a.catch(function() {
              T(96)
          }))
      }
  }, hu;
  function ju(a) {
      var b;
      b = b === void 0 ? document : b;
      var c;
      return !((c = b.featurePolicy) == null || !c.allowedFeatures().includes(a))
  }
  ;function ku() {
      return ju("join-ad-interest-group") && mb(nc.joinAdInterestGroup)
  }
  function lu(a, b) {
      var c = jb[3] === void 0 ? 1 : jb[3]
        , d = 'iframe[data-tagging-id="' + b + '"]'
        , e = [];
      try {
          if (c === 1) {
              var f = E.querySelector(d);
              f && (e = [f])
          } else
              e = Array.from(E.querySelectorAll(d))
      } catch (q) {}
      var g;
      a: {
          try {
              g = E.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]');
              break a
          } catch (q) {}
          g = void 0
      }
      var k = g, m = ((k == null ? void 0 : k.length) || 0) >= (jb[2] === void 0 ? 50 : jb[2]), n;
      if (n = e.length >= 1) {
          var p = Number(e[e.length - 1].dataset.loadTime);
          p !== void 0 && zb() - p < (jb[1] === void 0 ? 6E4 : jb[1]) ? (fb("TAGGING", 9),
          n = !0) : n = !1
      }
      if (!n) {
          if (c === 1)
              if (e.length >= 1)
                  mu(e[0]);
              else {
                  if (m) {
                      fb("TAGGING", 10);
                      return
                  }
              }
          else
              e.length >= c ? mu(e[0]) : m && mu(k[0]);
          yc(a, void 0, {
              allow: "join-ad-interest-group"
          }, {
              taggingId: b,
              loadTime: zb()
          })
      }
  }
  function mu(a) {
      try {
          a.parentNode.removeChild(a)
      } catch (b) {}
  }
  function nu() {
      return "https://td.doubleclick.net"
  }
  ;var cv = function(a, b) {
      var c = {}
        , d = function(f, g) {
          var k;
          k = g === !0 ? "1" : g === !1 ? "0" : encodeURIComponent(String(g));
          c[f] = k
      };
      z(a.j, function(f, g) {
          var k = bv[f];
          k && g !== void 0 && g !== "" && (!a.metadata.redact_click_ids || f !== N.g.Ld && f !== N.g.Td && f !== N.g.lf && f !== N.g.ng || (g = "0"),
          d(k, g))
      });
      d("gtm", oo({
          ra: a.metadata.source_canonical_id
      }));
      ao() && d("gcs", bo());
      d("gcd", go(a.m));
      jo() && d("dma_cps", ho());
      d("dma", io());
      zn(Hn()) && d("tcfd", ko());
      Pi.j && d("tag_exp", Pi.j);
      if (a.metadata.add_tag_timing) {
          d("tft", zb());
          var e = Nc();
          e !== void 0 && d("tfd", Math.round(e))
      }
      Q(18) && d("apve", Q(19) ? "1" : "0");
      Q(20) && d("apvf", Lc() ? Q(21) ? "f" : "sb" : "nf");
      b(c)
  }
    , dv = function(a) {
      cv(a, function(b) {
          if (a.metadata.hit_type === "page_view") {
              var c = [];
              z(b, function(e, f) {
                  c.push(e + "=" + f)
              });
              var d = yj(W([N.g.O, N.g.N]) ? "https://www.google.com" : "https://pagead2.googlesyndication.com", !0) + "/ccm/collect?" + c.join("&");
              Q(20) && Q(21) && Lc() ? Kc(d, void 0, {
                  noFallback: !0
              }) : Hc(d);
              if (mb(a.m.onSuccess))
                  a.m.onSuccess()
          }
      })
  }
    , ev = {}
    , bv = (ev[N.g.Sb] = "gcu",
  ev[N.g.ob] = "gclgb",
  ev[N.g.Wa] = "gclaw",
  ev[N.g.Di] = "gad_source",
  ev[N.g.Ei] = "gad_source_src",
  ev[N.g.Ld] = "gclid",
  ev[N.g.Fi] = "gclsrc",
  ev[N.g.ng] = "gbraid",
  ev[N.g.lf] = "wbraid",
  ev[N.g.Hb] = "auid",
  ev[N.g.Hi] = "rnd",
  ev[N.g.Ki] = "ncl",
  ev[N.g.qg] = "gcldc",
  ev[N.g.Td] = "dclid",
  ev[N.g.ab] = "edid",
  ev[N.g.vc] = "en",
  ev[N.g.yc] = "gdpr",
  ev[N.g.cb] = "gdid",
  ev[N.g.zc] = "_ng",
  ev[N.g.Xi] = "gtm_up",
  ev[N.g.Jb] = "frm",
  ev[N.g.fd] = "lps",
  ev[N.g.fe] = "did",
  ev[N.g.qa] = "dl",
  ev[N.g.Aa] = "dr",
  ev[N.g.eb] = "dt",
  ev[N.g.cj] = "scrsrc",
  ev[N.g.Cf] = "ga_uid",
  ev[N.g.Cc] = "gdpr_consent",
  ev[N.g.ya] = "uid",
  ev[N.g.me] = "us_privacy",
  ev[N.g.Ob] = "npa",
  ev);
  var fv = {
      J: {
          gi: "ads_conversion_hit",
          Hd: "container_execute_start",
          ji: "container_setup_end",
          fg: "container_setup_start",
          hi: "container_blocking_end",
          ii: "container_execute_end",
          ki: "container_yield_end",
          gg: "container_yield_start",
          ij: "event_execute_end",
          gj: "event_evaluation_end",
          Xg: "event_evaluation_start",
          jj: "event_setup_end",
          ne: "event_setup_start",
          lj: "ga4_conversion_hit",
          te: "page_load",
          Hn: "pageview",
          fc: "snippet_load",
          Ej: "tag_callback_error",
          Fj: "tag_callback_failure",
          Gj: "tag_callback_success",
          Hj: "tag_execute_end",
          pd: "tag_execute_start"
      }
  };
  function gv() {
      function a(c, d) {
          var e = gb(d);
          e && b.push([c, e])
      }
      var b = [];
      a("u", "GTM");
      a("ut", "TAGGING");
      a("h", "HEALTH");
      return b
  }
  ;var hv = !1;
  function Qv(a, b) {}
  function Rv(a, b) {}
  function Sv(a, b) {}
  function Tv(a, b) {}
  function Uv() {
      var a = {};
      return a
  }
  function Iv(a) {
      a = a === void 0 ? !0 : a;
      var b = {};
      return b
  }
  function Vv() {}
  function Wv(a, b) {}
  function Xv(a, b, c) {}
  function Yv() {}
  function Zv(a, b) {
      var c = C, d, e = c.GooglebQhCsO;
      e || (e = {},
      c.GooglebQhCsO = e);
      d = e;
      if (d[a])
          return !1;
      d[a] = [];
      d[a][0] = b;
      return !0
  }
  ;function $v(a, b, c, d) {
      var e = ln(a, "fmt");
      if (b) {
          var f = ln(a, "random")
            , g = ln(a, "label") || "";
          if (!f)
              return !1;
          var k = Yt(decodeURIComponent(g.replace(/\+/g, " ")) + ":" + decodeURIComponent(f.replace(/\+/g, " ")));
          if (!Zv(k, b))
              return !1
      }
      e && Number(e) !== 4 && (a = nn(a, "rfmt", e));
      var m = nn(a, "fmt", 4);
      wc(m, function() {
          C.google_noFurtherRedirects && b && (C.google_noFurtherRedirects = null,
          b())
      }, c, d, E.getElementsByTagName("script")[0].parentElement || void 0);
      return !0
  }
  ;function nw(a, b) {
      if (data.entities) {
          var c = data.entities[a];
          if (c)
              return c[b]
      }
  }
  ;function ow(a, b, c) {
      c = c === void 0 ? !1 : c;
      pw().addRestriction(0, a, b, c)
  }
  function qw(a, b, c) {
      c = c === void 0 ? !1 : c;
      pw().addRestriction(1, a, b, c)
  }
  function rw() {
      var a = bk();
      return pw().getRestrictions(1, a)
  }
  var sw = function() {
      this.container = {};
      this.j = {}
  }
    , tw = function(a, b) {
      var c = a.container[b];
      c || (c = {
          _entity: {
              internal: [],
              external: []
          },
          _event: {
              internal: [],
              external: []
          }
      },
      a.container[b] = c);
      return c
  };
  sw.prototype.addRestriction = function(a, b, c, d) {
      d = d === void 0 ? !1 : d;
      if (!d || !this.j[b]) {
          var e = tw(this, b);
          a === 0 ? d ? e._entity.external.push(c) : e._entity.internal.push(c) : a === 1 && (d ? e._event.external.push(c) : e._event.internal.push(c))
      }
  }
  ;
  sw.prototype.getRestrictions = function(a, b) {
      var c = tw(this, b);
      if (a === 0) {
          var d, e;
          return [].concat(oa((c == null ? void 0 : (d = c._entity) == null ? void 0 : d.internal) || []), oa((c == null ? void 0 : (e = c._entity) == null ? void 0 : e.external) || []))
      }
      if (a === 1) {
          var f, g;
          return [].concat(oa((c == null ? void 0 : (f = c._event) == null ? void 0 : f.internal) || []), oa((c == null ? void 0 : (g = c._event) == null ? void 0 : g.external) || []))
      }
      return []
  }
  ;
  sw.prototype.getExternalRestrictions = function(a, b) {
      var c = tw(this, b), d, e;
      return a === 0 ? (c == null ? void 0 : (d = c._entity) == null ? void 0 : d.external) || [] : (c == null ? void 0 : (e = c._event) == null ? void 0 : e.external) || []
  }
  ;
  sw.prototype.removeExternalRestrictions = function(a) {
      var b = tw(this, a);
      b._event && (b._event.external = []);
      b._entity && (b._entity.external = []);
      this.j[a] = !0
  }
  ;
  function pw() {
      var a = wi.r;
      a || (a = new sw,
      wi.r = a);
      return a
  }
  ;var uw = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/)
    , vw = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
      customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"]
  }
    , ww = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
  }
    , xw = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
  function yw() {
      var a = Xi("gtm.allowlist") || Xi("gtm.whitelist");
      a && T(9);
      Ci && (a = ["google", "gtagfl", "lcl", "zone"]);
      uw.test(C.location && C.location.hostname) && (Ci ? T(116) : (T(117),
      zw && (a = [],
      window.console && window.console.log && window.console.log("GTM blocked. See go/13687728."))));
      var b = a && Db(wb(a), vw)
        , c = Xi("gtm.blocklist") || Xi("gtm.blacklist");
      c || (c = Xi("tagTypeBlacklist")) && T(3);
      c ? T(8) : c = [];
      uw.test(C.location && C.location.hostname) && (c = wb(c),
      c.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      wb(c).indexOf("google") >= 0 && T(2);
      var d = c && Db(wb(c), ww)
        , e = {};
      return function(f) {
          var g = f && f[He.la];
          if (!g || typeof g !== "string")
              return !0;
          g = g.replace(/^_*/, "");
          if (e[g] !== void 0)
              return e[g];
          var k = Mi[g] || []
            , m = !0;
          if (a) {
              var n;
              if (n = m)
                  a: {
                      if (b.indexOf(g) < 0)
                          if (k && k.length > 0)
                              for (var p = 0; p < k.length; p++) {
                                  if (b.indexOf(k[p]) < 0) {
                                      T(11);
                                      n = !1;
                                      break a
                                  }
                              }
                          else {
                              n = !1;
                              break a
                          }
                      n = !0
                  }
              m = n
          }
          var q = !1;
          if (c) {
              var r = d.indexOf(g) >= 0;
              if (r)
                  q = r;
              else {
                  var t = rb(d, k || []);
                  t && T(10);
                  q = t
              }
          }
          var v = !m || q;
          v || !(k.indexOf("sandboxedScripts") >= 0) || b && b.indexOf("sandboxedScripts") !== -1 || (v = rb(d, xw));
          return e[g] = v
      }
  }
  var zw = !1;
  zw = !0;
  function Aw() {
      Tj && ow(bk(), function(a) {
          var b = tf(a.entityId), c;
          if (wf(b)) {
              var d = b[He.la];
              if (!d)
                  throw Error("Error: No function name given for function call.");
              var e = lf[d];
              c = !!e && !!e.runInSiloedMode
          } else
              c = !!nw(b[He.la], 4);
          return c
      })
  }
  function Bw(a, b, c, d, e) {
      if (!Cw()) {
          var f = d.siloed ? Wj(a) : a;
          if (!kk(f)) {
              var g = Dw(a)
                , k = Eb(a, "GTM-")
                , m = wj()
                , n = c ? "/gtag/js" : "/gtm.js"
                , p = vj(b, n + g);
              if (!p) {
                  var q = vi.Id + n;
                  if (m && qc && k)
                      q = qc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0],
                      p = $r("https://", "http://", q + g);
                  else if (Ri()) {
                      var r = n;
                      Q(64) && (r = "/");
                      p = Qi() + r + g
                  } else
                      p = $r("https://", "http://", q + g)
              }
              d.siloed && mk({
                  ctid: f,
                  isDestination: !1
              });
              var t = ek();
              Pj().container[f] = {
                  state: 1,
                  context: d,
                  parent: t
              };
              Lj({
                  ctid: f,
                  isDestination: !1
              }, e);
              wc(p)
          }
      }
  }
  function Ew(a, b, c, d) {
      if (!Cw()) {
          var e = c.siloed ? Wj(a) : a;
          if (!lk(e))
              if (!c.siloed && nk())
                  Pj().destination[e] = {
                      state: 0,
                      transportUrl: b,
                      context: c,
                      parent: ek()
                  },
                  Lj({
                      ctid: e,
                      isDestination: !0
                  }, d),
                  T(91);
              else {
                  var f = "/gtag/destination" + Dw(a, !0)
                    , g = vj(b, f);
                  g || (Ri() ? (Q(64) && (f = "/gtd" + Dw(a, !0)),
                  g = Qi() + f) : g = $r("https://", "http://", vi.Id + f));
                  c.siloed && mk({
                      ctid: e,
                      isDestination: !0
                  });
                  Pj().destination[e] = {
                      state: 1,
                      context: c,
                      parent: ek()
                  };
                  Lj({
                      ctid: e,
                      isDestination: !0
                  }, d);
                  wc(g)
              }
      }
  }
  function Dw(a, b) {
      b = b === void 0 ? !1 : b;
      var c = "?id=" + encodeURIComponent(a) + "&l=" + vi.kb;
      if (!Eb(a, "GTM-") || b)
          c += "&cx=c";
      Q(76) && (c += "&gtm=" + oo());
      wj() && (c += "&sign=" + vi.eh);
      var d = Pi.C;
      d === 1 ? c += "&fps=fc" : d === 2 && (c += "&fps=fe");
      return c
  }
  function Cw() {
      if (mo()) {
          return !0
      }
      return !1
  }
  ;var Fw = [];
  function Gw() {
      var a = Nf.ctid;
      if (a) {
          var b = Sj.se ? 1 : 0, c, d = dk(ek());
          c = d && d.context;
          return a + ";" + Nf.canonicalContainerId + ";" + (c && c.fromContainerExecution ? 1 : 0) + ";" + (c && c.source || 0) + ";" + b
      }
  }
  function Hw() {
      var a = pj(C.location.href);
      return a.hostname + a.pathname
  }
  function Iw() {
      var a = Hw();
      a && vk("dl", encodeURIComponent(a));
      if (Q(100)) {
          var b = Gw();
          b && vk("tdp", b)
      } else
          vk("tdp", function() {
              return Fw.length > 0 ? Fw.join(".") : void 0
          });
      var c = qn(!0);
      c !== void 0 && vk("frm", String(c))
  }
  ;var Jw = !1
    , Kw = 0
    , Lw = [];
  function Mw(a) {
      if (!Jw) {
          var b = E.createEventObject
            , c = E.readyState === "complete"
            , d = E.readyState === "interactive";
          if (!a || a.type !== "readystatechange" || c || !b && d) {
              Jw = !0;
              for (var e = 0; e < Lw.length; e++)
                  F(Lw[e])
          }
          Lw.push = function() {
              for (var f = ya.apply(0, arguments), g = 0; g < f.length; g++)
                  F(f[g]);
              return 0
          }
      }
  }
  function Nw() {
      if (!Jw && Kw < 140) {
          Kw++;
          try {
              var a, b;
              (b = (a = E.documentElement).doScroll) == null || b.call(a, "left");
              Mw()
          } catch (c) {
              C.setTimeout(Nw, 50)
          }
      }
  }
  function Ow(a) {
      Jw ? a() : Lw.push(a)
  }
  ;function Qw(a, b, c) {
      return {
          entityType: a,
          indexInOriginContainer: b,
          nameInOriginContainer: c,
          originContainerId: Zj()
      }
  }
  ;var Sw = function(a, b) {
      this.j = !1;
      this.K = [];
      this.eventData = {
          tags: []
      };
      this.P = !1;
      this.C = this.H = 0;
      Rw(this, a, b)
  }
    , Tw = function(a, b, c, d) {
      if (yi.hasOwnProperty(b) || b === "__zone")
          return -1;
      var e = {};
      Qa(d) && (e = Sa(d, e));
      e.id = c;
      e.status = "timeout";
      return a.eventData.tags.push(e) - 1
  }
    , Uw = function(a, b, c, d) {
      var e = a.eventData.tags[b];
      e && (e.status = c,
      e.executionTime = d)
  }
    , Vw = function(a) {
      if (!a.j) {
          for (var b = a.K, c = 0; c < b.length; c++)
              b[c]();
          a.j = !0;
          a.K.length = 0
      }
  }
    , Rw = function(a, b, c) {
      b !== void 0 && a.ze(b);
      c && C.setTimeout(function() {
          Vw(a)
      }, Number(c))
  };
  Sw.prototype.ze = function(a) {
      var b = this
        , c = Bb(function() {
          F(function() {
              a(Zj(), b.eventData)
          })
      });
      this.j ? c() : this.K.push(c)
  }
  ;
  var Ww = function(a) {
      a.H++;
      return Bb(function() {
          a.C++;
          a.P && a.C >= a.H && Vw(a)
      })
  }
    , Xw = function(a) {
      a.P = !0;
      a.C >= a.H && Vw(a)
  };
  var Yw = {};
  function Zw() {
      return C[$w()]
  }
  function $w() {
      return C.GoogleAnalyticsObject || "ga"
  }
  function cx() {
      var a = Zj();
  }
  function dx(a, b) {
      return function() {
          var c = Zw()
            , d = c && c.getByName && c.getByName(a);
          if (d) {
              var e = d.get("sendHitTask");
              d.set("sendHitTask", function(f) {
                  var g = f.get("hitPayload")
                    , k = f.get("hitCallback")
                    , m = g.indexOf("&tid=" + b) < 0;
                  m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0),
                  f.set("hitCallback", void 0, !0));
                  e(f);
                  m && (f.set("hitPayload", g, !0),
                  f.set("hitCallback", k, !0),
                  f.set("_x_19", void 0, !0),
                  e(f))
              })
          }
      }
  }
  var ix = ["es", "1"]
    , jx = {}
    , kx = {};
  function lx(a, b) {
      if (Fj) {
          var c;
          c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
          jx[a] = [["e", c], ["eid", a]];
          tm(a)
      }
  }
  function mx(a) {
      var b = a.eventId
        , c = a.kc;
      if (!jx[b])
          return [];
      var d = [];
      kx[b] || d.push(ix);
      d.push.apply(d, oa(jx[b]));
      c && (kx[b] = !0);
      return d
  }
  ;var nx = {}
    , ox = {}
    , px = {};
  function qx(a, b, c, d) {
      Fj && Q(88) && ((d === void 0 ? 0 : d) ? (px[b] = px[b] || 0,
      ++px[b]) : c !== void 0 ? (ox[a] = ox[a] || {},
      ox[a][b] = Math.round(c)) : (nx[a] = nx[a] || {},
      nx[a][b] = (nx[a][b] || 0) + 1))
  }
  function rx(a) {
      var b = a.eventId, c = a.kc, d = nx[b] || {}, e = [], f;
      for (f in d)
          d.hasOwnProperty(f) && e.push("" + f + d[f]);
      c && delete nx[b];
      return e.length ? [["md", e.join(".")]] : []
  }
  function sx(a) {
      var b = a.eventId, c = a.kc, d = ox[b] || {}, e = [], f;
      for (f in d)
          d.hasOwnProperty(f) && e.push("" + f + d[f]);
      c && delete ox[b];
      return e.length ? [["mtd", e.join(".")]] : []
  }
  function tx() {
      for (var a = [], b = h(Object.keys(px)), c = b.next(); !c.done; c = b.next()) {
          var d = c.value;
          a.push("" + d + px[d])
      }
      return a.length ? [["mec", a.join(".")]] : []
  }
  ;var ux = {}
    , vx = {};
  function wx(a, b, c) {
      if (Fj && b) {
          var d = zj(b);
          ux[a] = ux[a] || [];
          ux[a].push(c + d);
          var e = (wf(b) ? "1" : "2") + d;
          vx[a] = vx[a] || [];
          vx[a].push(e);
          tm(a)
      }
  }
  function xx(a) {
      var b = a.eventId
        , c = a.kc
        , d = []
        , e = ux[b] || [];
      e.length && d.push(["tr", e.join(".")]);
      var f = vx[b] || [];
      f.length && d.push(["ti", f.join(".")]);
      c && (delete ux[b],
      delete vx[b]);
      return d
  }
  ;function yx(a, b, c, d) {
      var e = jf[a]
        , f = zx(a, b, c, d);
      if (!f)
          return null;
      var g = xf(e[He.Dj], c, []);
      if (g && g.length) {
          var k = g[0];
          f = yx(k.index, {
              onSuccess: f,
              onFailure: k.Oj === 1 ? b.terminate : f,
              terminate: b.terminate
          }, c, d)
      }
      return f
  }
  function zx(a, b, c, d) {
      function e() {
          function w() {
              $k(3);
              var J = zb() - H;
              wx(c.id, f, "7");
              Uw(c.hc, B, "exception", J);
              Q(77) && Xv(c, f, fv.J.Ej);
              D || (D = !0,
              k())
          }
          if (f[He.bl])
              k();
          else {
              var x = vf(f, c, [])
                , y = x[He.wk];
              if (y != null)
                  for (var A = 0; A < y.length; A++)
                      if (!W(y[A])) {
                          k();
                          return
                      }
              var B = Tw(c.hc, String(f[He.la]), Number(f[He.ye]), x[He.METADATA])
                , D = !1;
              x.vtp_gtmOnSuccess = function() {
                  if (!D) {
                      D = !0;
                      var J = zb() - H;
                      wx(c.id, jf[a], "5");
                      Uw(c.hc, B, "success", J);
                      Q(77) && Xv(c, f, fv.J.Gj);
                      g()
                  }
              }
              ;
              x.vtp_gtmOnFailure = function() {
                  if (!D) {
                      D = !0;
                      var J = zb() - H;
                      wx(c.id, jf[a], "6");
                      Uw(c.hc, B, "failure", J);
                      Q(77) && Xv(c, f, fv.J.Fj);
                      k()
                  }
              }
              ;
              x.vtp_gtmTagId = f.tag_id;
              x.vtp_gtmEventId = c.id;
              c.priorityId && (x.vtp_gtmPriorityId = c.priorityId);
              wx(c.id, f, "1");
              Q(77) && Wv(c, f);
              var H = zb();
              try {
                  yf(x, {
                      event: c,
                      index: a,
                      type: 1
                  })
              } catch (J) {
                  w(J)
              }
              Q(77) && Xv(c, f, fv.J.Hj)
          }
      }
      var f = jf[a]
        , g = b.onSuccess
        , k = b.onFailure
        , m = b.terminate;
      if (c.isBlocked(f))
          return null;
      var n = xf(f[He.Ij], c, []);
      if (n && n.length) {
          var p = n[0]
            , q = yx(p.index, {
              onSuccess: g,
              onFailure: k,
              terminate: m
          }, c, d);
          if (!q)
              return null;
          g = q;
          k = p.Oj === 2 ? m : q
      }
      if (f[He.vj] || f[He.il]) {
          var r = f[He.vj] ? kf : c.hn
            , t = g
            , v = k;
          if (!r[a]) {
              var u = Ax(a, r, Bb(e));
              g = u.onSuccess;
              k = u.onFailure
          }
          return function() {
              r[a](t, v)
          }
      }
      return e
  }
  function Ax(a, b, c) {
      var d = []
        , e = [];
      b[a] = Bx(d, e, c);
      return {
          onSuccess: function() {
              b[a] = Cx;
              for (var f = 0; f < d.length; f++)
                  d[f]()
          },
          onFailure: function() {
              b[a] = Dx;
              for (var f = 0; f < e.length; f++)
                  e[f]()
          }
      }
  }
  function Bx(a, b, c) {
      return function(d, e) {
          a.push(d);
          b.push(e);
          c()
      }
  }
  function Cx(a) {
      a()
  }
  function Dx(a, b) {
      b()
  }
  ;var Gx = function(a, b) {
      for (var c = [], d = 0; d < jf.length; d++)
          if (a[d]) {
              var e = jf[d];
              var f = Ww(b.hc);
              try {
                  var g = yx(d, {
                      onSuccess: f,
                      onFailure: f,
                      terminate: f
                  }, b, d);
                  if (g) {
                      var k = e[He.la];
                      if (!k)
                          throw Error("Error: No function name given for function call.");
                      var m = lf[k];
                      c.push({
                          mk: d,
                          dk: (m ? m.priorityOverride || 0 : 0) || nw(e[He.la], 1) || 0,
                          execute: g
                      })
                  } else
                      Ex(d, b),
                      f()
              } catch (p) {
                  f()
              }
          }
      c.sort(Fx);
      for (var n = 0; n < c.length; n++)
          c[n].execute();
      return c.length > 0
  };
  function Fx(a, b) {
      var c, d = b.dk, e = a.dk;
      c = d > e ? 1 : d < e ? -1 : 0;
      var f;
      if (c !== 0)
          f = c;
      else {
          var g = a.mk
            , k = b.mk;
          f = g > k ? 1 : g < k ? -1 : 0
      }
      return f
  }
  function Ex(a, b) {
      if (Fj) {
          var c = function(d) {
              var e = b.isBlocked(jf[d]) ? "3" : "4"
                , f = xf(jf[d][He.Dj], b, []);
              f && f.length && c(f[0].index);
              wx(b.id, jf[d], e);
              var g = xf(jf[d][He.Ij], b, []);
              g && g.length && c(g[0].index)
          };
          c(a)
      }
  }
  var Jx = !1, Hx;
  function Lx(a) {
      var b = a["gtm.uniqueEventId"]
        , c = a["gtm.priorityId"]
        , d = a.event;
      if (Q(77)) {}
      if (d === "gtm.js") {
          if (Jx)
              return !1;
          Jx = !0
      }
      var e = !1
        , f = rw()
        , g = Sa(a, null);
      if (!f.every(function(t) {
          return t({
              originalEventData: g
          })
      })) {
          if (d !== "gtm.js" && d !== "gtm.init" && d !== "gtm.init_consent")
              return !1;
          e = !0
      }
      lx(b, d);
      var k = a.eventCallback
        , m = a.eventTimeout
        , n = {
          id: b,
          priorityId: c,
          name: d,
          isBlocked: Mx(g, e),
          hn: [],
          logMacroError: function() {
              T(6);
              $k(0)
          },
          cachedModelValues: Nx(),
          hc: new Sw(function() {
              if (Q(77)) {}
              k && k.apply(k, Array.prototype.slice.call(arguments, 0))
          }
          ,m),
          originalEventData: g
      };
      Q(88) && Fj && (n.reportMacroDiscrepancy = qx);
      Q(77) && Sv(n.id, n.name);
      var p = Ef(n);
      Q(77) && Tv(n.id, n.name);
      e && (p = Ox(p));
      if (Q(77)) {}
      var q = Gx(p, n)
        , r = !1;
      Xw(n.hc);
      d !== "gtm.js" && d !== "gtm.sync" || cx();
      return Px(p, q) || r
  }
  function Nx() {
      var a = {};
      a.event = bj("event", 1);
      a.ecommerce = bj("ecommerce", 1);
      a.gtm = bj("gtm");
      a.eventModel = bj("eventModel");
      return a
  }
  function Mx(a, b) {
      var c = yw();
      return function(d) {
          if (c(d))
              return !0;
          var e = d && d[He.la];
          if (!e || typeof e !== "string")
              return !0;
          e = e.replace(/^_*/, "");
          var f, g = bk();
          f = pw().getRestrictions(0, g);
          var k = a;
          b && (k = Sa(a, null),
          k["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER);
          for (var m = Mi[e] || [], n = h(f), p = n.next(); !p.done; p = n.next()) {
              var q = p.value;
              try {
                  if (!q({
                      entityId: e,
                      securityGroups: m,
                      originalEventData: k
                  }))
                      return !0
              } catch (r) {
                  return !0
              }
          }
          return !1
      }
  }
  function Ox(a) {
      for (var b = [], c = 0; c < a.length; c++)
          if (a[c]) {
              var d = String(jf[c][He.la]);
              if (xi[d] || jf[c][He.jl] !== void 0 || nw(d, 2))
                  b[c] = !0
          }
      return b
  }
  function Px(a, b) {
      if (!b)
          return b;
      for (var c = 0; c < a.length; c++)
          if (a[c] && jf[c] && !yi[String(jf[c][He.la])])
              return !0;
      return !1
  }
  var Qx = 0;
  function Wx(a, b) {
      return arguments.length === 1 ? Xx("set", a) : Xx("set", a, b)
  }
  function Yx(a, b) {
      return arguments.length === 1 ? Xx("config", a) : Xx("config", a, b)
  }
  function Zx(a, b, c) {
      c = c || {};
      c[N.g.ac] = a;
      return Xx("event", b, c)
  }
  function Xx() {
      return arguments
  }
  ;var $x = function() {
      this.messages = [];
      this.j = []
  };
  $x.prototype.enqueue = function(a, b, c) {
      var d = this.messages.length + 1;
      a["gtm.uniqueEventId"] = b;
      a["gtm.priorityId"] = d;
      var e = Object.assign({}, c, {
          eventId: b,
          priorityId: d,
          fromContainerExecution: !0
      })
        , f = {
          message: a,
          notBeforeEventId: b,
          priorityId: d,
          messageContext: e
      };
      this.messages.push(f);
      for (var g = 0; g < this.j.length; g++)
          try {
              this.j[g](f)
          } catch (k) {}
  }
  ;
  $x.prototype.listen = function(a) {
      this.j.push(a)
  }
  ;
  $x.prototype.get = function() {
      for (var a = {}, b = 0; b < this.messages.length; b++) {
          var c = this.messages[b]
            , d = a[c.notBeforeEventId];
          d || (d = [],
          a[c.notBeforeEventId] = d);
          d.push(c)
      }
      return a
  }
  ;
  $x.prototype.prune = function(a) {
      for (var b = [], c = [], d = 0; d < this.messages.length; d++) {
          var e = this.messages[d];
          e.notBeforeEventId === a ? b.push(e) : c.push(e)
      }
      this.messages = c;
      return b
  }
  ;
  function ay(a, b, c) {
      c.eventMetadata = c.eventMetadata || {};
      c.eventMetadata.source_canonical_id = Nf.canonicalContainerId;
      by().enqueue(a, b, c)
  }
  function cy() {
      var a = dy;
      by().listen(a)
  }
  function by() {
      var a = wi.mb;
      a || (a = new $x,
      wi.mb = a);
      return a
  }
  ;var ey = {}
    , fy = {};
  function gy(a, b) {
      for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
          Sh: void 0,
          Dh: void 0
      },
      f++) {
          var g = a[f];
          if (g.indexOf("-") >= 0) {
              if (e.Sh = zl(g, b),
              e.Sh) {
                  var k = Xj();
                  pb(k, function(r) {
                      return function(t) {
                          return r.Sh.destinationId === t
                      }
                  }(e)) ? c.push(g) : d.push(g)
              }
          } else {
              var m = ey[g] || [];
              e.Dh = {};
              m.forEach(function(r) {
                  return function(t) {
                      r.Dh[t] = !0
                  }
              }(e));
              for (var n = Uj(), p = 0; p < n.length; p++)
                  if (e.Dh[n[p]]) {
                      c = c.concat(Xj());
                      break
                  }
              var q = fy[g] || [];
              q.length && (c = c.concat(q))
          }
      }
      return {
          Am: c,
          Dm: d
      }
  }
  function hy(a) {
      z(ey, function(b, c) {
          var d = c.indexOf(a);
          d >= 0 && c.splice(d, 1)
      })
  }
  function iy(a) {
      z(fy, function(b, c) {
          var d = c.indexOf(a);
          d >= 0 && c.splice(d, 1)
      })
  }
  var jy = "HA GF G UA AW DC MC".split(" ")
    , ky = !1
    , ly = !1
    , my = !1
    , ny = !1;
  function oy(a, b) {
      a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
          value: Ni()
      });
      b.eventId = a["gtm.uniqueEventId"];
      b.priorityId = a["gtm.priorityId"];
      return {
          eventId: b.eventId,
          priorityId: b.priorityId
      }
  }
  var py = void 0
    , qy = void 0;
  function ry(a, b, c) {
      var d = Sa(a, null);
      d.eventId = void 0;
      d.inheritParentConfig = void 0;
      Object.keys(b).some(function(f) {
          return b[f] !== void 0
      }) && T(136);
      var e = Sa(b, null);
      Sa(c, e);
      ay(Yx(Uj()[0], e), a.eventId, d)
  }
  function sy(a) {
      for (var b = h([N.g.kd, N.g.Nb]), c = b.next(); !c.done; c = b.next()) {
          var d = c.value
            , e = a && a[d] || Bm.j[d];
          if (e)
              return e
      }
  }
  var ty = [N.g.kd, N.g.Nb, N.g.wc, N.g.qb, N.g.wb, N.g.ya, N.g.oa, N.g.Ha, N.g.Oa, N.g.sb]
    , uy = {
      config: function(a, b) {
          var c = oy(a, b);
          if (!(a.length < 2) && l(a[1])) {
              var d = {};
              if (a.length > 2) {
                  if (a[2] !== void 0 && !Qa(a[2]) || a.length > 3)
                      return;
                  d = a[2]
              }
              var e = zl(a[1], b.isGtmEvent);
              if (e) {
                  var f, g, k;
                  a: {
                      if (!Sj.se) {
                          var m = dk(ek());
                          if (pk(m)) {
                              var n = m.parent
                                , p = n.isDestination;
                              k = {
                                  Km: dk(n),
                                  zm: p
                              };
                              break a
                          }
                      }
                      k = void 0
                  }
                  var q = k;
                  q && (f = q.Km,
                  g = q.zm);
                  lx(c.eventId, "gtag.config");
                  var r = e.destinationId
                    , t = e.id !== r;
                  if (t ? Xj().indexOf(r) === -1 : Uj().indexOf(r) === -1) {
                      if (!b.inheritParentConfig && !d[N.g.Kb]) {
                          var v = sy(d);
                          if (t)
                              Ew(r, v, {
                                  source: 2,
                                  fromContainerExecution: b.fromContainerExecution
                              });
                          else if (f !== void 0 && f.containers.indexOf(r) !== -1) {
                              var u = d;
                              py ? ry(b, u, py) : qy || (qy = Sa(u, null))
                          } else
                              Bw(r, v, !0, {
                                  source: 2,
                                  fromContainerExecution: b.fromContainerExecution
                              })
                      }
                  } else {
                      if (f && (T(128),
                      g && T(130),
                      b.inheritParentConfig)) {
                          var w;
                          var x = d;
                          qy ? (ry(b, qy, x),
                          w = !1) : (!x[N.g.bc] && Ai && py || (py = Sa(x, null)),
                          w = !0);
                          w && f.containers && f.containers.join(",");
                          return
                      }
                      var y = d;
                      if (!my && (my = !0,
                      ly))
                          for (var A = h(ty), B = A.next(); !B.done; B = A.next())
                              if (y.hasOwnProperty(B.value)) {
                                  Zk("erc");
                                  break
                              }
                      Gj && !Tj && (Qx === 1 && (tk.mcc = !1),
                      Qx = 2);
                      Wk = !0;
                      if (Ai && !t && !d[N.g.bc]) {
                          var D = ny;
                          ny = !0;
                          if (D)
                              return
                      }
                      ky || T(43);
                      if (!b.noTargetGroup)
                          if (t) {
                              iy(e.id);
                              var H = e.id
                                , J = d[N.g.de] || "default";
                              J = String(J).split(",");
                              for (var G = 0; G < J.length; G++) {
                                  var O = fy[J[G]] || [];
                                  fy[J[G]] = O;
                                  O.indexOf(H) < 0 && O.push(H)
                              }
                          } else {
                              hy(e.id);
                              var L = e.id
                                , S = d[N.g.de] || "default";
                              S = S.toString().split(",");
                              for (var ca = 0; ca < S.length; ca++) {
                                  var Z = ey[S[ca]] || [];
                                  ey[S[ca]] = Z;
                                  Z.indexOf(L) < 0 && Z.push(L)
                              }
                          }
                      delete d[N.g.de];
                      var U = b.eventMetadata || {};
                      U.hasOwnProperty("is_external_event") || (U.is_external_event = !b.fromContainerExecution);
                      b.eventMetadata = U;
                      delete d[N.g.dd];
                      for (var R = t ? [e.id] : Xj(), ma = 0; ma < R.length; ma++) {
                          var na = d
                            , ja = R[ma]
                            , xa = Sa(b, null)
                            , Oa = zl(ja, xa.isGtmEvent);
                          Oa && Bm.push("config", [na], Oa, xa)
                      }
                  }
              }
          }
      },
      consent: function(a, b) {
          if (a.length === 3) {
              T(39);
              var c = oy(a, b)
                , d = a[1]
                , e = a[2];
              b.fromContainerExecution || (e[N.g.N] && T(139),
              e[N.g.sa] && T(140));
              d === "default" ? ml(e) : d === "update" ? ol(e, c) : d === "declare" && b.fromContainerExecution && ll(e)
          }
      },
      event: function(a, b) {
          var c = a[1];
          if (!(a.length < 2) && l(c)) {
              var d = void 0;
              if (a.length > 2) {
                  if (!Qa(a[2]) && a[2] !== void 0 || a.length > 3)
                      return;
                  d = a[2]
              }
              var e = d
                , f = {}
                , g = (f.event = c,
              f);
              e && (g.eventModel = Sa(e, null),
              e[N.g.dd] && (g.eventCallback = e[N.g.dd]),
              e[N.g.ae] && (g.eventTimeout = e[N.g.ae]));
              var k = oy(a, b)
                , m = k.eventId
                , n = k.priorityId;
              g["gtm.uniqueEventId"] = m;
              n && (g["gtm.priorityId"] = n);
              if (c === "optimize.callback")
                  return g.eventModel = g.eventModel || {},
                  g;
              var p;
              var q = d
                , r = q && q[N.g.ac];
              r === void 0 && (r = Xi(N.g.ac, 2),
              r === void 0 && (r = "default"));
              if (l(r) || Array.isArray(r)) {
                  var t;
                  t = b.isGtmEvent ? l(r) ? [r] : r : r.toString().replace(/\s+/g, "").split(",");
                  var v = gy(t, b.isGtmEvent)
                    , u = v.Am
                    , w = v.Dm;
                  if (w.length)
                      for (var x = sy(q), y = 0; y < w.length; y++) {
                          var A = zl(w[y], b.isGtmEvent);
                          A && Ew(A.destinationId, x, {
                              source: 3,
                              fromContainerExecution: b.fromContainerExecution
                          })
                      }
                  p = Al(u, b.isGtmEvent)
              } else
                  p = void 0;
              var B = p;
              if (B) {
                  var D;
                  !B.length || ((D = b.eventMetadata) == null ? 0 : D.em_event) || (ly = !0);
                  lx(m, c);
                  for (var H = [], J = 0; J < B.length; J++) {
                      var G = B[J]
                        , O = Sa(b, null);
                      if (jy.indexOf(fk(G.prefix)) !== -1) {
                          var L = Sa(d, null)
                            , S = O.eventMetadata || {};
                          S.hasOwnProperty("is_external_event") || (S.is_external_event = !O.fromContainerExecution);
                          O.eventMetadata = S;
                          delete L[N.g.dd];
                          Cm(c, L, G.id, O);
                          Gj && !Tj && Qx === 0 && (vk("mcc", "1"),
                          Qx = 1);
                          Wk = !0
                      }
                      H.push(G.id)
                  }
                  g.eventModel = g.eventModel || {};
                  B.length > 0 ? g.eventModel[N.g.ac] = H.join() : delete g.eventModel[N.g.ac];
                  ky || T(43);
                  b.noGtmEvent === void 0 && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
                  g.eventModel[N.g.Yb] && (b.noGtmEvent = !0);
                  return b.noGtmEvent ? void 0 : g
              }
          }
      },
      get: function(a, b) {
          T(53);
          if (a.length === 4 && l(a[1]) && l(a[2]) && mb(a[3])) {
              var c = zl(a[1], b.isGtmEvent)
                , d = String(a[2])
                , e = a[3];
              if (c) {
                  ky || T(43);
                  var f = sy();
                  if (!pb(Xj(), function(k) {
                      return c.destinationId === k
                  }))
                      Ew(c.destinationId, f, {
                          source: 4,
                          fromContainerExecution: b.fromContainerExecution
                      });
                  else if (jy.indexOf(fk(c.prefix)) !== -1) {
                      Wk = !0;
                      oy(a, b);
                      var g = {};
                      Sa((g[N.g.ub] = d,
                      g[N.g.Ib] = e,
                      g), null);
                      Dm(d, function(k) {
                          F(function() {
                              e(k)
                          })
                      }, c.id, b)
                  }
              }
          }
      },
      js: function(a, b) {
          if (a.length === 2 && a[1].getTime) {
              ky = !0;
              var c = oy(a, b)
                , d = c.eventId
                , e = c.priorityId
                , f = {};
              return f.event = "gtm.js",
              f["gtm.start"] = a[1].getTime(),
              f["gtm.uniqueEventId"] = d,
              f["gtm.priorityId"] = e,
              f
          }
      },
      policy: function(a) {
          if (a.length === 3 && l(a[1]) && mb(a[2])) {
              if (Kf(a[1], a[2]),
              T(74),
              a[1] === "all") {
                  T(75);
                  var b = !1;
                  try {
                      b = a[2](Zj(), "unknown", {})
                  } catch (c) {}
                  b || T(76)
              }
          } else
              T(73)
      },
      set: function(a, b) {
          var c = void 0;
          a.length === 2 && Qa(a[1]) ? c = Sa(a[1], null) : a.length === 3 && l(a[1]) && (c = {},
          Qa(a[2]) || Array.isArray(a[2]) ? c[a[1]] = Sa(a[2], null) : c[a[1]] = a[2]);
          if (c) {
              var d = oy(a, b)
                , e = d.eventId
                , f = d.priorityId;
              Sa(c, null);
              var g = Sa(c, null);
              Bm.push("set", [g], void 0, b);
              c["gtm.uniqueEventId"] = e;
              f && (c["gtm.priorityId"] = f);
              delete c.event;
              b.overwriteModelFields = !0;
              return c
          }
      }
  }
    , vy = {
      policy: !0
  };
  var xy = function(a) {
      if (wy(a))
          return a;
      this.value = a
  };
  xy.prototype.getUntrustedMessageValue = function() {
      return this.value
  }
  ;
  var wy = function(a) {
      return !a || Na(a) !== "object" || Qa(a) ? !1 : "getUntrustedMessageValue"in a
  };
  xy.prototype.getUntrustedMessageValue = xy.prototype.getUntrustedMessageValue;
  var yy = !1
    , zy = [];
  function Ay() {
      if (!yy) {
          yy = !0;
          for (var a = 0; a < zy.length; a++)
              F(zy[a])
      }
  }
  function By(a) {
      yy ? F(a) : zy.push(a)
  }
  ;var Cy = 0
    , Dy = {}
    , Ey = []
    , Fy = []
    , Gy = !1
    , Hy = !1;
  function Iy(a, b) {
      return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
  }
  function Jy(a, b, c) {
      a.eventCallback = b;
      c && (a.eventTimeout = c);
      return Ky(a)
  }
  function Ly(a, b) {
      if (!nb(b) || b < 0)
          b = 0;
      var c = wi[vi.kb]
        , d = 0
        , e = !1
        , f = void 0;
      f = C.setTimeout(function() {
          e || (e = !0,
          a());
          f = void 0
      }, b);
      return function() {
          var g = c ? c.subscribers : 1;
          ++d === g && (f && (C.clearTimeout(f),
          f = void 0),
          e || (a(),
          e = !0))
      }
  }
  function My(a, b) {
      var c = a._clear || b.overwriteModelFields;
      z(a, function(e, f) {
          e !== "_clear" && (c && $i(e),
          $i(e, f))
      });
      Ji || (Ji = a["gtm.start"]);
      var d = a["gtm.uniqueEventId"];
      if (!a.event)
          return !1;
      typeof d !== "number" && (d = Ni(),
      a["gtm.uniqueEventId"] = d,
      $i("gtm.uniqueEventId", d));
      return Lx(a)
  }
  function Ny(a) {
      if (a == null || typeof a !== "object")
          return !1;
      if (a.event)
          return !0;
      if (tb(a)) {
          var b = a[0];
          if (b === "config" || b === "event" || b === "js" || b === "get")
              return !0
      }
      return !1
  }
  function Oy() {
      var a;
      if (Fy.length)
          a = Fy.shift();
      else if (Ey.length)
          a = Ey.shift();
      else
          return;
      var b;
      var c = a;
      if (Gy || !Ny(c.message))
          b = c;
      else {
          Gy = !0;
          var d = c.message["gtm.uniqueEventId"];
          typeof d !== "number" && (d = c.message["gtm.uniqueEventId"] = Ni());
          var e = {}
            , f = {
              message: (e.event = "gtm.init_consent",
              e["gtm.uniqueEventId"] = d - 2,
              e),
              messageContext: {
                  eventId: d - 2
              }
          }
            , g = {}
            , k = {
              message: (g.event = "gtm.init",
              g["gtm.uniqueEventId"] = d - 1,
              g),
              messageContext: {
                  eventId: d - 1
              }
          };
          Ey.unshift(k, c);
          if (Gj) {
              if (!Q(100)) {
                  var m = Gw();
                  m && Fw.push(m)
              }
              zk()
          }
          b = f
      }
      return b
  }
  function Py() {
      for (var a = !1, b; !Hy && (b = Oy()); ) {
          Hy = !0;
          delete Ui.eventModel;
          Wi();
          var c = b
            , d = c.message
            , e = c.messageContext;
          if (d == null)
              Hy = !1;
          else {
              e.fromContainerExecution && aj();
              try {
                  if (mb(d))
                      try {
                          d.call(Yi)
                      } catch (v) {}
                  else if (Array.isArray(d)) {
                      if (l(d[0])) {
                          var f = d[0].split(".")
                            , g = f.pop()
                            , k = d.slice(1)
                            , m = Xi(f.join("."), 2);
                          if (m != null)
                              try {
                                  m[g].apply(m, k)
                              } catch (v) {}
                      }
                  } else {
                      var n = void 0;
                      if (tb(d))
                          a: {
                              if (d.length && l(d[0])) {
                                  var p = uy[d[0]];
                                  if (p && (!e.fromContainerExecution || !vy[d[0]])) {
                                      n = p(d, e);
                                      break a
                                  }
                              }
                              n = void 0
                          }
                      else
                          n = d;
                      n && (a = My(n, e) || a)
                  }
              } finally {
                  e.fromContainerExecution && Wi(!0);
                  var q = d["gtm.uniqueEventId"];
                  if (typeof q === "number") {
                      for (var r = Dy[String(q)] || [], t = 0; t < r.length; t++)
                          Fy.push(Qy(r[t]));
                      r.length && Fy.sort(Iy);
                      delete Dy[String(q)];
                      q > Cy && (Cy = q)
                  }
                  Hy = !1
              }
          }
      }
      return !a
  }
  function Ry() {
      if (Q(77)) {
          var a = Sy();
      }
      var b = Py();
      if (Q(77)) {}
      try {
          var c = Zj()
            , d = C[vi.kb].hide;
          if (d && d[c] !== void 0 && d.end) {
              d[c] = !1;
              var e = !0, f;
              for (f in d)
                  if (d.hasOwnProperty(f) && d[f] === !0) {
                      e = !1;
                      break
                  }
              e && (d.end(),
              d.end = null)
          }
      } catch (g) {}
      return b
  }
  function dy(a) {
      if (Cy < a.notBeforeEventId) {
          var b = String(a.notBeforeEventId);
          Dy[b] = Dy[b] || [];
          Dy[b].push(a)
      } else
          Fy.push(Qy(a)),
          Fy.sort(Iy),
          F(function() {
              Hy || Py()
          })
  }
  function Qy(a) {
      return {
          message: a.message,
          messageContext: a.messageContext
      }
  }
  function Ty() {
      function a(f) {
          var g = {};
          if (wy(f)) {
              var k = f;
              f = wy(k) ? k.getUntrustedMessageValue() : void 0;
              g.fromContainerExecution = !0
          }
          return {
              message: f,
              messageContext: g
          }
      }
      var b = rc(vi.kb, [])
        , c = wi[vi.kb] = wi[vi.kb] || {};
      c.pruned === !0 && T(83);
      Dy = by().get();
      cy();
      Ow(function() {
          if (!c.gtmDom) {
              c.gtmDom = !0;
              var f = {};
              b.push((f.event = "gtm.dom",
              f))
          }
      });
      By(function() {
          if (!c.gtmLoad) {
              c.gtmLoad = !0;
              var f = {};
              b.push((f.event = "gtm.load",
              f))
          }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function() {
          var f;
          if (wi.SANDBOXED_JS_SEMAPHORE > 0) {
              f = [];
              for (var g = 0; g < arguments.length; g++)
                  f[g] = new xy(arguments[g])
          } else
              f = [].slice.call(arguments, 0);
          var k = f.map(function(q) {
              return a(q)
          });
          Ey.push.apply(Ey, k);
          var m = d.apply(b, f)
            , n = Math.max(100, Number("1000") || 300);
          if (this.length > n)
              for (T(4),
              c.pruned = !0; this.length > n; )
                  this.shift();
          var p = typeof m !== "boolean" || m;
          return Py() && p
      }
      ;
      var e = b.slice(0).map(function(f) {
          return a(f)
      });
      Ey.push.apply(Ey, e);
      if (Sy()) {
          if (Q(77)) {}
          F(Ry)
      }
  }
  var Sy = function() {
      var a = !0;
      a = !1;
      return a
  }
    , Ky = function(a) {
      return C[vi.kb].push(a)
  };
  function Uy(a) {
      if (a == null || a.length === 0)
          return !1;
      var b = Number(a)
        , c = zb();
      return b < c + 3E5 && b > c - 9E5
  }
  function Vy(a) {
      return a && a.indexOf("pending:") === 0 ? Uy(a.substr(8)) : !1
  }
  ;function pz() {}
  ;var qz = function() {};
  qz.prototype.toString = function() {
      return "undefined"
  }
  ;
  var rz = new qz;
  function yz(a, b) {
      function c(g) {
          var k = pj(g)
            , m = jj(k, "protocol")
            , n = jj(k, "host", !0)
            , p = jj(k, "port")
            , q = jj(k, "path").toLowerCase().replace(/\/$/, "");
          if (m === void 0 || m === "http" && p === "80" || m === "https" && p === "443")
              m = "web",
              p = "default";
          return [m, n, p, q]
      }
      for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
          if (d[f] !== e[f])
              return !1;
      return !0
  }
  function zz(a) {
      return Az(a) ? 1 : 0
  }
  function Az(a) {
      var b = a.arg0
        , c = a.arg1;
      if (a.any_of && Array.isArray(c)) {
          for (var d = 0; d < c.length; d++) {
              var e = Sa(a, {});
              Sa({
                  arg1: c[d],
                  any_of: void 0
              }, e);
              if (zz(e))
                  return !0
          }
          return !1
      }
      switch (a["function"]) {
      case "_cn":
          return mg(b, c);
      case "_css":
          var f;
          a: {
              if (b)
                  try {
                      for (var g = 0; g < ig.length; g++) {
                          var k = ig[g];
                          if (b[k] != null) {
                              f = b[k](c);
                              break a
                          }
                      }
                  } catch (m) {}
              f = !1
          }
          return f;
      case "_ew":
          return jg(b, c);
      case "_eq":
          return ng(b, c);
      case "_ge":
          return og(b, c);
      case "_gt":
          return qg(b, c);
      case "_lc":
          return String(b).split(",").indexOf(String(c)) >= 0;
      case "_le":
          return pg(b, c);
      case "_lt":
          return rg(b, c);
      case "_re":
          return lg(b, c, a.ignore_case);
      case "_sw":
          return sg(b, c);
      case "_um":
          return yz(b, c)
      }
      return !1
  }
  ;function Bz() {
      var a;
      a = a === void 0 ? "" : a;
      var b, c;
      return ((b = data) == null ? 0 : (c = b.blob) == null ? 0 : c.hasOwnProperty(1)) ? String(data.blob[1]) : a
  }
  ;function Cz() {
      var a = [["cv", Q(109) ? Bz() : "1"], ["rv", vi.bh], ["tc", jf.filter(function(b) {
          return b
      }).length]];
      vi.ve && a.push(["x", vi.ve]);
      Pi.j && a.push(["tag_exp", Pi.j]);
      return a
  }
  ;var Dz = {}
    , Ez = {};
  function Fz() {
      var a = 0;
      return function(b) {
          switch (b) {
          case 1:
              a |= 1;
              break;
          case 2:
              a |= 2;
              break;
          case 3:
              a |= 4
          }
          return a
      }
  }
  function Gz(a, b, c, d) {
      if (Fj) {
          var e = String(c) + b;
          Dz[a] = Dz[a] || [];
          Dz[a].push(e);
          Ez[a] = Ez[a] || [];
          Ez[a].push(d + b)
      }
  }
  function Hz(a) {
      var b = a.eventId
        , c = a.kc
        , d = []
        , e = Dz[b] || [];
      e.length && d.push(["hf", e.join(".")]);
      var f = Ez[b] || [];
      f.length && d.push(["ht", f.join(".")]);
      c && (delete Dz[b],
      delete Ez[b]);
      return d
  }
  ;function Iz() {
      return !1
  }
  function Jz() {
      var a = {};
      return function(b, c, d) {}
  }
  ;function Kz() {
      var a = Lz;
      return function(b, c, d) {
          var e = d && d.event;
          b === "__html" && Q(81) || Mz(c);
          var f = Eb(b, "__cvt_") ? void 0 : 1
            , g = new Xa;
          z(c, function(r, t) {
              var v = cd(t, void 0, f);
              v === void 0 && t !== void 0 && T(44);
              g.set(r, v)
          });
          a.j.j.C = Cf();
          var k = {
              Lj: Rf(b),
              eventId: e == null ? void 0 : e.id,
              priorityId: e !== void 0 ? e.priorityId : void 0,
              ze: e !== void 0 ? function(r) {
                  e.hc.ze(r)
              }
              : void 0,
              hb: function() {
                  return b
              },
              log: function() {},
              Ml: {
                  index: d == null ? void 0 : d.index,
                  type: d == null ? void 0 : d.type,
                  name: d == null ? void 0 : d.name
              },
              Um: !!nw(b, 3),
              originalEventData: e == null ? void 0 : e.originalEventData
          };
          e && e.cachedModelValues && (k.cachedModelValues = {
              gtm: e.cachedModelValues.gtm,
              ecommerce: e.cachedModelValues.ecommerce
          });
          if (Iz()) {
              var m = Jz(), n, p;
              k.Ua = {
                  di: [],
                  Ae: {},
                  Ab: function(r, t, v) {
                      t === 1 && (n = r);
                      t === 7 && (p = v);
                      m(r, t, v)
                  },
                  Yf: ah()
              };
              k.log = function(r) {
                  var t = ya.apply(1, arguments);
                  n && m(n, 4, {
                      level: r,
                      source: p,
                      message: t
                  })
              }
          }
          var q = Be(a, k, [b, g]);
          a.j.j.C = void 0;
          q instanceof Aa && q.type === "return" && (q = q.data);
          return I(q, void 0, f)
      }
  }
  function Mz(a) {
      var b = a.gtmOnSuccess
        , c = a.gtmOnFailure;
      mb(b) && (a.gtmOnSuccess = function() {
          F(b)
      }
      );
      mb(c) && (a.gtmOnFailure = function() {
          F(c)
      }
      )
  }
  ;function Nz(a, b) {
      var c = this;
  }
  Nz.R = "addConsentListener";
  var Oz = !1;
  function Pz(a) {
      for (var b = 0; b < a.length; ++b)
          if (Oz)
              try {
                  a[b]()
              } catch (c) {
                  T(77)
              }
          else
              a[b]()
  }
  function Qz(a, b, c) {
      var d = this, e;
      return e
  }
  Qz.F = "internal.addDataLayerEventListener";
  function Rz(a, b, c) {}
  Rz.R = "addDocumentEventListener";
  function Sz(a, b, c, d) {}
  Sz.R = "addElementEventListener";
  function Tz(a) {
      return a.D.j
  }
  ;function Uz(a) {}
  Uz.R = "addEventCallback";
  function jA(a) {}
  jA.F = "internal.addFormAbandonmentListener";
  function kA(a, b, c, d) {}
  kA.F = "internal.addFormData";
  var lA = {}
    , mA = []
    , nA = {}
    , oA = 0
    , pA = 0;
  function wA(a, b) {}
  wA.F = "internal.addFormInteractionListener";
  function DA(a, b) {}
  DA.F = "internal.addFormSubmitListener";
  function IA(a) {}
  IA.F = "internal.addGaSendListener";
  function JA(a) {
      if (!a)
          return {};
      var b = a.Ml;
      return Qw(b.type, b.index, b.name)
  }
  function KA(a) {
      return a ? {
          originatingEntity: JA(a)
      } : {}
  }
  ;function SA(a) {
      var b = wi.zones;
      return b ? b.getIsAllowedFn(Uj(), a) : function() {
          return !0
      }
  }
  function TA() {
      qw(bk(), function(a) {
          var b = a.originalEventData["gtm.uniqueEventId"]
            , c = wi.zones;
          return c ? c.isActive(Uj(), b) : !0
      });
      ow(bk(), function(a) {
          var b, c;
          b = a.entityId;
          c = a.securityGroups;
          return SA(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c)
      })
  }
  ;var UA = function(a, b) {
      this.tagId = a;
      this.Ce = b
  };
  function VA(a, b) {
      var c = this, d;
      return d
  }
  VA.F = "internal.loadGoogleTag";
  function WA(a) {
      return new Vc("",function(b) {
          var c = this.evaluate(b);
          if (c instanceof Vc)
              return new Vc("",function() {
                  var d = ya.apply(0, arguments)
                    , e = this
                    , f = Sa(Tz(this), null);
                  f.eventId = a.eventId;
                  f.priorityId = a.priorityId;
                  f.originalEventData = a.originalEventData;
                  var g = d.map(function(m) {
                      return e.evaluate(m)
                  })
                    , k = Ha(this.D);
                  k.j = f;
                  return c.jb.apply(c, [k].concat(oa(g)))
              }
              )
      }
      )
  }
  ;function XA(a, b, c) {
      var d = this;
  }
  XA.F = "internal.addGoogleTagRestriction";
  var YA = {}
    , ZA = [];
  function fB(a, b) {}
  fB.F = "internal.addHistoryChangeListener";
  function gB(a, b, c) {}
  gB.R = "addWindowEventListener";
  function hB(a, b) {
      return !0
  }
  hB.R = "aliasInWindow";
  function iB(a, b, c) {}
  iB.F = "internal.appendRemoteConfigParameter";
  function jB(a) {
      var b;
      return b
  }
  jB.R = "callInWindow";
  function kB(a) {}
  kB.R = "callLater";
  function lB(a) {}
  lB.F = "callOnDomReady";
  function mB(a) {}
  mB.F = "callOnWindowLoad";
  function nB(a, b) {
      var c;
      return c
  }
  nB.F = "internal.computeGtmParameter";
  function oB(a, b) {
      var c = this;
  }
  oB.F = "internal.consentScheduleFirstTry";
  function pB(a, b) {
      var c = this;
  }
  pB.F = "internal.consentScheduleRetry";
  function qB(a) {
      var b;
      return b
  }
  qB.F = "internal.copyFromCrossContainerData";
  function rB(a, b) {
      var c;
      var d = cd(c, this.D, Eb(Tz(this).hb(), "__cvt_") ? 2 : 1);
      d === void 0 && c !== void 0 && T(45);
      return d
  }
  rB.R = "copyFromDataLayer";
  function sB(a) {
      var b = void 0;
      return b
  }
  sB.F = "internal.copyFromDataLayerCache";
  function tB(a) {
      var b;
      return b
  }
  tB.R = "copyFromWindow";
  function uB(a) {
      var b = void 0;
      return cd(b, this.D, 1)
  }
  uB.F = "internal.copyKeyFromWindow";
  var vB = function(a, b, c) {
      this.eventName = b;
      this.m = c;
      this.j = {};
      this.isAborted = !1;
      this.target = a;
      this.metadata = Sa(c.eventMetadata || {}, {})
  };
  vB.prototype.copyToHitData = function(a, b, c) {
      var d = V(this.m, a);
      d === void 0 && (d = b);
      if (d !== void 0 && c !== void 0 && l(d) && Q(69))
          try {
              d = c(d)
          } catch (e) {}
      d !== void 0 && (this.j[a] = d)
  }
  ;
  var st = function(a, b, c) {
      var d = vs(a.target.destinationId);
      return d && d[b] !== void 0 ? d[b] : c
  };
  function wB(a, b) {
      var c;
      return c
  }
  wB.F = "internal.copyPreHit";
  function xB(a, b) {
      var c = null;
      return cd(c, this.D, 2)
  }
  xB.R = "createArgumentsQueue";
  function yB(a) {
      return cd(function(c) {
          var d = Zw();
          if (typeof c === "function")
              d(function() {
                  c(function(f, g, k) {
                      var m = Zw()
                        , n = m && m.getByName && m.getByName(f);
                      return Mm(C.gaplugins.Linker, n).decorate(g, k)
                  })
              });
          else if (Array.isArray(c)) {
              var e = String(c[0]).split(".");
              b[e.length === 1 ? e[0] : e[1]] && d.apply(null, c)
          } else if (c === "isLoaded")
              return !!d.loaded
      }, this.D, 1)
  }
  yB.F = "internal.createGaCommandQueue";
  function zB(a) {
      return cd(function() {
          if (!mb(e.push))
              throw Error("Object at " + a + " in window is not an array.");
          e.push.apply(e, Array.prototype.slice.call(arguments, 0))
      }, this.D, Eb(Tz(this).hb(), "__cvt_") ? 2 : 1)
  }
  zB.R = "createQueue";
  function AB(a, b) {
      var c = null;
      return c
  }
  AB.F = "internal.createRegex";
  function BB() {
      var a = {};
      return a
  }
  ;function CB(a) {}
  CB.F = "internal.declareConsentState";
  function DB(a) {
      var b = "";
      return b
  }
  DB.F = "internal.decodeUrlHtmlEntities";
  function EB(a, b, c) {
      var d;
      return d
  }
  EB.F = "internal.decorateUrlWithGaCookies";
  function FB(a) {
      var b;
      M(this, "detect_user_provided_data", "auto");
      var c = I(a) || {}
        , d = Vs({
          yd: !!c.includeSelector,
          zd: !!c.includeVisibility,
          Fe: c.excludeElementSelectors,
          zb: c.fieldFilters,
          dg: !!c.selectMultipleElements
      });
      b = new Xa;
      var e = new Va;
      b.set("elements", e);
      for (var f = d.elements, g = 0; g < f.length; g++)
          e.push(GB(f[g]));
      d.Th !== void 0 && b.set("preferredEmailElement", GB(d.Th));
      b.set("status", d.status);
      return b
  }
  var GB = function(a) {
      var b = new Xa;
      b.set("userData", a.X);
      b.set("tagName", a.tagName);
      a.querySelector !== void 0 && b.set("querySelector", a.querySelector);
      a.isVisible !== void 0 && b.set("isVisible", a.isVisible);
      if (Q(28)) {} else
          switch (a.type) {
          case Ts.mc:
              b.set("type", "email")
          }
      return b
  };
  FB.F = "internal.detectUserProvidedData";
  function HB() {}
  HB.F = "internal.disableDeferringCustomEvents";
  function KB(a, b) {
      return b
  }
  KB.F = "internal.enableAutoEventOnClick";
  function SB(a, b) {
      return b
  }
  SB.F = "internal.enableAutoEventOnElementVisibility";
  function TB() {}
  TB.F = "internal.enableAutoEventOnError";
  var UB = {}
    , VB = []
    , WB = {}
    , XB = 0
    , YB = 0;
  function dC(a, b) {
      var c = this;
      return b
  }
  dC.F = "internal.enableAutoEventOnFormInteraction";
  function iC(a, b) {
      var c = this;
      return b
  }
  iC.F = "internal.enableAutoEventOnFormSubmit";
  function nC() {
      var a = this;
  }
  nC.F = "internal.enableAutoEventOnGaSend";
  var oC = {}
    , pC = [];
  function wC(a, b) {
      var c = this;
      return b
  }
  wC.F = "internal.enableAutoEventOnHistoryChange";
  var xC = ["http://", "https://", "javascript:", "file://"];
  function BC(a, b) {
      var c = this;
      return b
  }
  BC.F = "internal.enableAutoEventOnLinkClick";
  var CC, DC;
  function OC(a, b) {
      var c = this;
      return b
  }
  OC.F = "internal.enableAutoEventOnScroll";
  function PC(a) {
      return function() {
          if (a.limit && a.Nh >= a.limit)
              a.Wf && C.clearInterval(a.Wf);
          else {
              a.Nh++;
              var b = zb();
              Ky({
                  event: a.eventName,
                  "gtm.timerId": a.Wf,
                  "gtm.timerEventNumber": a.Nh,
                  "gtm.timerInterval": a.interval,
                  "gtm.timerLimit": a.limit,
                  "gtm.timerStartTime": a.lk,
                  "gtm.timerCurrentTime": b,
                  "gtm.timerElapsedTime": b - a.lk,
                  "gtm.triggers": a.pn
              })
          }
      }
  }
  function QC(a, b) {
      return b
  }
  QC.F = "internal.enableAutoEventOnTimer";
  var gc = ka(["data-gtm-yt-inspected-"]), SC = ["www.youtube.com", "www.youtube-nocookie.com"], TC, UC = !1;
  function dD(a, b) {
      var c = this;
      return b
  }
  dD.F = "internal.enableAutoEventOnYouTubeActivity";
  function eD(a, b) {
      K(this.getName(), ["booleanExpression:!string", "context:?PixieMap"], arguments);
      var c = b ? I(b) : {}
        , d = a
        , e = !1;
      return e
  }
  eD.F = "internal.evaluateBooleanExpression";
  var fD;
  function gD(a) {
      var b = !1;
      return b
  }
  gD.F = "internal.evaluateMatchingRules";
  var lD = function(a) {
      var b, c, d = a.metadata.send_as_iframe, e = a.j[N.g.zg];
      W([N.g.O, N.g.N]) ? d ? (b = Ri() ? Qi() + "/activityi/" + e + ";" : "https://" + e + ".fls.doubleclick.net/activityi;",
      c = 3) : (b = yj("https://ad.doubleclick.net") + "/activity;",
      c = 1) : (b = "" + yj("https://ade.googlesyndication.com") + "/ddm/activity/",
      c = 2);
      return {
          baseUrl: b,
          endpoint: c,
          Zm: d
      }
  }
    , nD = function(a) {
      a.metadata.hit_type === "page_view" ? dv(a) : mD(a, function(b) {
          var c = a.metadata.parsed_target
            , d = lD(a)
            , e = d.baseUrl
            , f = d.Zm
            , g = [];
          z(b, function(p, q) {
              g.push(p + "=" + q)
          });
          var k = e + g.join(";") + "?";
          f ? yc(k, a.m.onSuccess) : zc(k, a.m.onSuccess, a.m.onFailure);
          if (a.metadata.attribution_reporting_experiment) {
              var m = "" + yj("https://ad.doubleclick.net") + "/activity;register_conversion=1;" + g.join(";") + "?";
              Ac(m, void 0, void 0, {
                  attributionsrc: ""
              })
          }
          if (a.metadata.send_fledge_experiment) {
              var n = nu() + "/td/fls/rul/activityi;fledge=1;" + g.join(";") + "?";
              lu(n, fk(c.target.id))
          }
      })
  }
    , mD = function(a, b) {
      var c = []
        , d = {}
        , e = function(r, t, v) {
          var u = v ? String(t) : encodeURIComponent(String(t));
          d[r] = u
      }
        , f = Qa(a.j[N.g.Yc]) ? a.j[N.g.Yc] : {};
      z(a.j, function(r, t) {
          var v = oD[r];
          if (v) {
              var u = $f[v] === !0;
              if (t === void 0 || !u && t === "")
                  return;
              e(v, t)
          }
          v === void 0 && e(r, t)
      });
      e("gtm", oo({
          ra: a.metadata.source_canonical_id
      }));
      ao() && e("gcs", bo());
      e("gcd", go(a.m));
      jo() && e("dma_cps", ho());
      e("dma", io());
      zn(Hn()) && e("tcfd", ko());
      Pi.j && e("tag_exp", Pi.j);
      var g = pD(a);
      g && e("prd", g, !0);
      e("epver", "2");
      var k = a.j[N.g.qa];
      k && a.metadata.redact_click_ids && (k = qj(String(k)));
      z(f, function(r, t) {
          if (t != null)
              if (r === "~oref")
                  k = t;
              else {
                  var v = encodeURIComponent(r);
                  d[v] != null && T(141);
                  e(v, t)
              }
      });
      var m = W(N.g.N);
      Q(90) && (m = !1);
      var n = a.metadata.user_data;
      if (n && m) {
          var p = bi(n);
          p && c.push(p.then(function(r) {
              e("em", r.Qb)
          }))
      }
      var q = function() {
          k && e("~oref", k);
          b(d)
      };
      if (c.length)
          try {
              Promise.all(c).then(function() {
                  q()
              });
              return
          } catch (r) {}
      q()
  }
    , pD = function(a) {
      var b = a.j[N.g.ba];
      if (!Array.isArray(b))
          return "";
      for (var c = [], d = function(n, p, q) {
          q !== void 0 && q !== "" && c.push("" + n + p + ":" + encodeURIComponent(String(q)))
      }, e = 0; e < b.length; e++) {
          var f = b[e]
            , g = Q(60)
            , k = f.id;
          f.item_id !== void 0 && (g && (k = f.item_id),
          f.id !== void 0 ? (T(150),
          f.id !== f.item_id && T(151)) : T(152));
          k === void 0 && g && (k = f.item_name);
          var m = e + 1;
          d("i", m, k);
          d("p", m, f.price);
          d("q", m, f[N.g.jd]);
          d("c", m, f[N.g.uc]);
          d("l", m, f[N.g.Qa]);
          d("a", m, f.accountId)
      }
      return c.join("|")
  }
    , qD = {}
    , oD = (qD[N.g.Sb] = "gcu",
  qD[N.g.ob] = "gclgb",
  qD[N.g.Wa] = "gclaw",
  qD[N.g.Hb] = "auiddc",
  qD[N.g.Wb] = "ps",
  qD[N.g.rf] = "pscdl",
  qD[N.g.qg] = "gcldc",
  qD[N.g.ab] = "edid",
  qD[N.g.Ri] = "cat",
  qD[N.g.Si] = "type",
  qD[N.g.zg] = "src",
  qD[N.g.Ti] = "pcor",
  qD[N.g.Ui] = "num",
  qD[N.g.Vi] = "tran",
  qD[N.g.Wi] = "u",
  qD[N.g.ce] = "gac",
  qD[N.g.xc] = "gacgb",
  qD[N.g.yc] = "gdpr",
  qD[N.g.cb] = "gdid",
  qD[N.g.zc] = "_ng",
  qD[N.g.Jb] = "frm",
  qD[N.g.ee] = "gtm_up",
  qD[N.g.jd] = "qty",
  qD[N.g.Cc] = "gdpr_consent",
  qD[N.g.xa] = "ord",
  qD[N.g.Ff] = "uaa",
  qD[N.g.Gf] = "uab",
  qD[N.g.Hf] = "uafvl",
  qD[N.g.If] = "uamb",
  qD[N.g.Jf] = "uam",
  qD[N.g.Kf] = "uap",
  qD[N.g.Lf] = "uapv",
  qD[N.g.Mf] = "uaw",
  qD[N.g.ka] = "cost",
  qD[N.g.Ob] = "npa",
  qD[N.g.qa] = null,
  qD[N.g.Yc] = null,
  qD[N.g.ba] = null,
  qD);
  var rD = function() {
      return [N.g.O, N.g.N]
  }
    , tD = function(a) {
      var b = zl(a);
      if (b && (b.ids.length === 1 || b.ids.length === 3)) {
          var c = b.ids[Cl[4]] || ""
            , d = b.ids[Cl[5]]
            , e = ""
            , f = "unknown";
          if (d) {
              var g = d.split("+");
              if (g.length !== 2)
                  return;
              e = g[0];
              f = sD[g[1].toLowerCase()]
          }
          if (f)
              return {
                  target: b,
                  sl: c,
                  tl: e,
                  Bl: f
              }
      }
  }
    , uD = function(a) {
      ns(a);
  }
    , vD = function(a) {
      var b = Jb(Ul(a.m, N.g.da, 1), ".")
        , c = Jb(Ul(a.m, N.g.da, 2), ".");
      a.j[N.g.cb] = b;
      a.j[N.g.ab] = c
  }
    , wD = function(a) {
      if (!a.metadata.consent_updated) {
          var b = V(a.m, N.g.Ni);
          if (Qa(b) && b.exclusion_parameters && b.engines)
              if (mo()) {} else {
                  var c = V(a.m, N.g.na) !== !1
                    , d = Hr(a)
                    , e = function() {
                      if (W(rD())) {
                          var f = {
                              config: b,
                              gtm: oo({
                                  ra: a.metadata.source_canonical_id
                              })
                          };
                          c && (xp(d),
                          f.auiddc = vp[yp(d.prefix)]);
                          C.__dc_ns_processor === void 0 && (C.__dc_ns_processor = []);
                          C.__dc_ns_processor.push(f);
                          wc("https://www.googletagmanager.com/dclk/ns/v1.js")
                      }
                  };
                  W(rD()) ? e() : Uk(e, rD())
              }
      }
  }
    , zD = function(a, b, c, d) {
      function e() {
          for (var p = h(g), q = p.next(); !q.done; q = p.next()) {
              var r = q.value;
              if (!r.metadata.consent_updated || r.metadata.hit_type === "page_view" || W(rD())) {
                  for (var t = h(r.metadata.hit_type === "page_view" ? xD : yD), v = t.next(); !v.done; v = t.next()) {
                      var u = v.value;
                      u(r);
                      if (r.isAborted)
                          break
                  }
                  r.metadata.speculative || r.isAborted || nD(r)
              }
          }
      }
      var f = tD(a);
      if (f) {
          var g = []
            , k = new vB(f.target,b,d);
          k.metadata.parsed_target = f;
          k.metadata.counting_method = f.Bl;
          g.push(k);
          if (Q(19) && b === N.g.aa) {
              var m = new vB(f.target,b,d);
              m.metadata.hit_type = "page_view";
              m.metadata.speculative = !0;
              g.push(m)
          }
          var n = rD();
          sl(function() {
              e();
              W(n) || rl(function(p) {
                  var q, r;
                  q = p.consentEventId;
                  r = p.consentPriorityId;
                  for (var t = h(g), v = t.next(); !v.done; v = t.next()) {
                      var u = v.value;
                      u.metadata.consent_updated = !0;
                      u.metadata.consent_event_id = q;
                      u.metadata.consent_priority_id = r
                  }
                  e(q, r)
              }, n)
          }, n)
      } else
          F(d.onFailure)
  }
    , yD = [Pr, function(a) {
      a.metadata.conversion_linker_enabled = V(a.m, N.g.na) !== !1;
      var b = V(a.m, N.g.nf) === !0
        , c = W(rD());
      if (mo() && b) {
          b = !1
      }
      a.metadata.send_as_iframe = b && c;
      var d = V(a.m, N.g.fa);
      a.metadata.redact_ads_data = d !== void 0 && d !== !1;
      a.metadata.redact_click_ids = a.metadata.redact_ads_data && !W(rD());
      a.metadata.cookie_options = Hr(a)
  }
  , function(a) {
      if (!a.metadata.consent_updated) {
          var b = a.m.isGtmEvent ? V(a.m, "oref") : mj(pj(C.location.href));
          a.j[N.g.qa] = b
      }
  }
  , function(a) {
      if (a.eventName === N.g.Va && !a.m.isGtmEvent) {
          if (!a.metadata.consent_updated) {
              var b = {
                  callback: V(a.m, N.g.Ib),
                  Wj: V(a.m, V(a.m, N.g.ub)),
                  rk: V(a.m, N.g.ub)
              };
              Or(b, a.metadata.cookie_options, a.metadata.redact_ads_data, jr)
          }
          a.isAborted = !0
      }
  }
  , function(a) {
      if (a.eventName === N.g.aa && !a.m.isGtmEvent) {
          if (!a.metadata.consent_updated && !Q(19)) {
              var b = a.metadata.conversion_linker_enabled
                , c = a.metadata.cookie_options
                , d = a.metadata.redact_ads_data;
              Lr({
                  sd: b,
                  Cd: V(a.m, N.g.oa) || {},
                  Gd: V(a.m, N.g.Ya),
                  ra: a.metadata.source_canonical_id,
                  m: a.m,
                  Dd: d,
                  qk: V(a.m, N.g.ya)
              }, c);
              wD(a);
              var e = a.metadata.parsed_target.target
                , f = Jb(Ul(a.m, N.g.da, 2), ".")
                , g = Jb(Ul(a.m, N.g.da, 1), ".")
                , k = qn(!0);
              Zr({
                  nh: !0,
                  ic: b ? c : void 0,
                  th: f,
                  m: a.m,
                  Ch: g,
                  Uf: b,
                  Dd: d,
                  targetId: e.ids.length > 1 ? e.id : "",
                  Eh: k
              })
          }
          a.isAborted = !0
      }
  }
  , function(a) {
      var b = a.metadata.parsed_target
        , c = {}
        , d = V(a.m, N.g.Yc);
      Qa(d) && z(d, function(e, f) {
          f != null && (c[e] = f)
      });
      a.j[N.g.zg] = b.target.ids[Cl[3]];
      a.j[N.g.Si] = b.sl;
      a.j[N.g.Ri] = b.tl;
      a.j[N.g.Yc] = c
  }
  , function(a) {
      var b = a.metadata.counting_method;
      switch (b) {
      case "standard":
          a.j[N.g.xa] = qb(1E11, 1E13);
          return;
      case "unique":
          a.j[N.g.xa] = "1";
          a.j[N.g.Ui] = qb(1E11, 1E13);
          return;
      case "per_session":
          var c = V(a.m, N.g.wb);
          a.j[N.g.xa] = c;
          return
      }
      var d = b === "transactions" ? "1" : V(a.m, N.g.jd);
      a.j[N.g.jd] = d;
      a.copyToHitData(N.g.ka);
      a.copyToHitData(N.g.xa)
  }
  , function(a) {
      a.m.isGtmEvent && (a.copyToHitData(N.g.Wi),
      a.copyToHitData(N.g.Vi),
      a.copyToHitData(N.g.Ag))
  }
  , function(a) {
      a.metadata.consent_updated && (a.j[N.g.Sb] = "1")
  }
  , function(a) {
      var b = On();
      b && (a.j[N.g.yc] = b);
      var c = Nn();
      c && (a.j[N.g.Cc] = c)
  }
  , function(a) {
      jp(!1)._up === "1" && (a.j[N.g.ee] = "1")
  }
  , function(a) {
      $n(a.m) ? a.j[N.g.Ob] = "0" : a.j[N.g.Ob] = "1"
  }
  , function(a) {
      if (a.metadata.conversion_linker_enabled) {
          var b = W(rD())
            , c = a.metadata.cookie_options
            , d = a.metadata.redact_ads_data
            , e = jr(c.prefix, d)
            , f = !1;
          xp(c);
          var g = b ? vp[yp(c.prefix)] : void 0;
          e && e.length && (a.j[N.g.qg] = e.join("."),
          f = !0);
          if (a.metadata.send_as_iframe) {
              var k = kq(c.prefix) !== "_gcl", m;
              if (!(m = f)) {
                  var n = c.prefix;
                  m = !(rj("gclaw") || rj("gac") || (zq().aw || []).length > 0 ? 0 : (zq().gb || []).length > 0 || Q(74) && zq().gbraid !== void 0 || Vq(n, !0))
              }
              if (m) {
                  var p = kr(c.prefix, d);
                  p && p.length && (a.j[N.g.Wa] = p.join("."),
                  T(59));
                  var q, r = rj("gac");
                  (q = r ? !W($q()) && d ? "0" : decodeURIComponent(r) : hr(eq(dq()) ? Vp() : {})) && (k || (a.j[N.g.ce] = q))
              } else {
                  var t;
                  a: {
                      var v = c.prefix
                        , u = rj("gclgb");
                      if (u)
                          t = u.split(".");
                      else {
                          var w = kq(v);
                          if (w === "_gcl") {
                              var x = !W($q()) && d
                                , y = zq()
                                , A = [];
                              y.wbraid && A.push(y.wbraid);
                              Q(74) && y.gbraid && A.push(y.gbraid);
                              if (A.length > 0) {
                                  t = x ? ["0"] : A;
                                  break a
                              }
                          }
                          t = iq({
                              prefix: w
                          })
                      }
                  }
                  var B = t;
                  B.length && (a.j[N.g.ob] = B.join("."));
                  if (!k) {
                      var D, H = rj("gacgb");
                      (D = H ? !W($q()) && d ? "0" : decodeURIComponent(H) : hr(eq(dq()) ? Vp("_gac_gb", !0) : {})) && (a.j[N.g.xc] = D)
                  }
              }
          }
          g && (a.j[N.g.Hb] = g)
      }
  }
  , function(a) {
      var b = a.metadata.counting_method;
      if (b === "transactions" || b === "items_sold") {
          var c = V(a.m, N.g.ba);
          if (Array.isArray(c)) {
              if (!a.m.isGtmEvent)
                  for (var d = V(a.m, N.g.uc), e = V(a.m, N.g.Qa), f = h(c), g = f.next(); !g.done; g = f.next()) {
                      var k = g.value;
                      Qa(k) && (k[N.g.uc] = d,
                      k[N.g.Qa] = e,
                      k.accountId = void 0)
                  }
              a.j[N.g.ba] = c
          }
      }
  }
  , function(a) {
      var b = V(a.m, N.g.Xc)
        , c = {};
      Qa(b) && z(b, function(g, k) {
          l(k) && AD.test(g) && (c[g] = k)
      });
      for (var d = Tl(a.m), e = 0; e < d.length; e++) {
          var f = d[e];
          AD.test(f) && (c[f] = f)
      }
      z(c, function(g, k) {
          a.j[g] = V(a.m, k)
      })
  }
  , vD, function(a) {
      var b = W(rD()) && ju("attribution-reporting");
      if (a.metadata.attribution_reporting_experiment = b)
          a.j[N.g.Wb] = "1",
          a.j[N.g.Ti] = qb()
  }
  , function(a) {
      if (a.m.isGtmEvent) {
          var b = V(a.m, N.g.Ba);
          Qa(b) && (a.metadata.user_data = b)
      }
  }
  , function(a) {
      if (!cu(C))
          T(87);
      else if (hu !== void 0) {
          T(85);
          var b = au();
          b ? eu(b, a) : T(86)
      }
  }
  , function(a) {
      Q(46) && V(a.m, N.g.za) !== !1 && W(rD()) && $n(a.m) && ku() && (a.metadata.send_fledge_experiment = !0)
  }
  , function(a) {
      if (st(a, "ccd_add_1p_data", !1) && W(N.g.N)) {
          var b = a.m.C[N.g.ke];
          if (fj(b)) {
              var c = V(a.m, N.g.Ba);
              c === null ? a.metadata.user_data_from_code = null : (b.enable_code && Qa(c) && (a.metadata.user_data_from_code = c),
              Qa(b.selectors) && (a.metadata.user_data_from_manual = dj(b.selectors)))
          }
      }
  }
  , Qr, Rr, Sr, uD]
    , xD = [Kr, vD, wD, Sr, uD]
    , sD = {
      "": "unknown",
      standard: "standard",
      unique: "unique",
      per_session: "per_session",
      transactions: "transactions",
      items_sold: "items_sold"
  }
    , AD = /^u([1-9]\d?|100)$/;
  function OD() {
      return Pn(7) && Pn(9) && Pn(10)
  }
  ;function JE(a, b, c, d) {}
  JE.F = "internal.executeEventProcessor";
  function KE(a) {
      var b;
      return cd(b, this.D, 1)
  }
  KE.F = "internal.executeJavascriptString";
  function LE(a) {
      var b;
      return b
  }
  ;function ME(a) {
      var b = {};
      return cd(b)
  }
  ME.F = "internal.getAdsCookieWritingOptions";
  function NE(a) {
      var b = !1;
      return b
  }
  NE.F = "internal.getAllowAdPersonalization";
  function OE(a, b) {
      b = b === void 0 ? !0 : b;
      var c;
      return c
  }
  OE.F = "internal.getAuid";
  var PE = null;
  function QE() {
      var a = new Xa;
      return a
  }
  QE.R = "getContainerVersion";
  function RE(a, b) {
      b = b === void 0 ? !0 : b;
      var c;
      return c
  }
  RE.R = "getCookieValues";
  function SE() {
      return bl()
  }
  SE.F = "internal.getCountryCode";
  function TE() {
      var a = [];
      a = Xj();
      return cd(a)
  }
  TE.F = "internal.getDestinationIds";
  function UE(a) {
      var b = new Xa;
      return b
  }
  UE.F = "internal.getDeveloperIds";
  function VE(a, b) {
      var c = null;
      return c
  }
  VE.F = "internal.getElementAttribute";
  function WE(a) {
      var b = null;
      return b
  }
  WE.F = "internal.getElementById";
  function XE(a) {
      var b = "";
      return b
  }
  XE.F = "internal.getElementInnerText";
  function YE(a, b) {
      var c = null;
      return c
  }
  YE.F = "internal.getElementProperty";
  function ZE(a) {
      var b;
      return b
  }
  ZE.F = "internal.getElementValue";
  function $E(a) {
      var b = 0;
      return b
  }
  $E.F = "internal.getElementVisibilityRatio";
  function aF(a) {
      var b = null;
      return b
  }
  aF.F = "internal.getElementsByCssSelector";
  function bF(a) {
      var b;
      K(this.getName(), ["keyPath:!string"], arguments);
      M(this, "read_event_data", a);
      var c;
      a: {
          var d = a
            , e = Tz(this).originalEventData;
          if (e) {
              for (var f = e, g = {}, k = {}, m = {}, n = [], p = d.split("\\\\"), q = 0; q < p.length; q++) {
                  for (var r = p[q].split("\\."), t = 0; t < r.length; t++) {
                      for (var v = r[t].split("."), u = 0; u < v.length; u++)
                          n.push(v[u]),
                          u !== v.length - 1 && n.push(m);
                      t !== r.length - 1 && n.push(k)
                  }
                  q !== p.length - 1 && n.push(g)
              }
              for (var w = [], x = "", y = h(n), A = y.next(); !A.done; A = y.next()) {
                  var B = A.value;
                  B === m ? (w.push(x),
                  x = "") : x = B === g ? x + "\\" : B === k ? x + "." : x + B
              }
              x && w.push(x);
              for (var D = h(w), H = D.next(); !H.done; H = D.next()) {
                  if (f == null) {
                      c = void 0;
                      break a
                  }
                  f = f[H.value]
              }
              c = f
          } else
              c = void 0
      }
      b = cd(c, this.D, 1);
      return b
  }
  bF.F = "internal.getEventData";
  var cF = {};
  cF.enableAWFledge = Q(29);
  cF.enableAdsConversionValidation = Q(15);
  cF.enableAutoPhoneAndAddressDetection = Q(27);
  cF.enableAutoPiiOnPhoneAndAddress = Q(28);
  cF.enableCachedEcommerceData = Q(35);
  cF.enableCloudRecommentationsErrorLogging = Q(36);
  cF.enableCloudRecommentationsSchemaIngestion = Q(37);
  cF.enableCloudRetailInjectPurchaseMetadata = Q(39);
  cF.enableCloudRetailLogging = Q(38);
  cF.enableCloudRetailPageCategories = Q(40);
  cF.enableConsentDisclosureActivity = Q(41);
  cF.enableDCFledge = Q(46);
  cF.enableDecodeUri = Q(69);
  cF.enableDeferAllEnhancedMeasurement = Q(47);
  cF.enableDmaBlockDisclosure = Q(50);
  cF.enableFormSkipValidation = Q(63);
  cF.enableGtmEcModeFix = Q(75);
  cF.enableUrlDecodeEventUsage = Q(108);
  cF.enableZoneConfigInChildContainers = Q(110);
  cF.useEnableAutoEventOnFormApis = Q(120);
  cF.autoPiiEligible = gl();
  function dF() {
      return cd(cF)
  }
  dF.F = "internal.getFlags";
  function eF() {
      return new $c(rz)
  }
  eF.F = "internal.getHtmlId";
  function fF(a) {
      var b;
      return b
  }
  fF.F = "internal.getIframingState";
  function gF(a, b) {
      var c;
      K(this.getName(), ["targetId:!string", "name:!string"], arguments);
      var d = vs(a) || {};
      c = cd(d[b], this.D);
      return c
  }
  gF.F = "internal.getProductSettingsParameter";
  function hF(a, b) {
      var c;
      return c
  }
  hF.R = "getQueryParameters";
  function iF(a, b) {
      var c;
      return c
  }
  iF.R = "getReferrerQueryParameters";
  function jF(a) {
      var b = "";
      return b
  }
  jF.R = "getReferrerUrl";
  function kF() {
      return cl()
  }
  kF.F = "internal.getRegionCode";
  function lF(a, b) {
      var c;
      return c
  }
  lF.F = "internal.getRemoteConfigParameter";
  function mF(a) {
      var b = "";
      return b
  }
  mF.R = "getUrl";
  function nF() {
      M(this, "get_user_agent");
      return nc.userAgent
  }
  nF.F = "internal.getUserAgent";
  function vF() {
      return C.gaGlobal = C.gaGlobal || {}
  }
  function wF() {
      var a = vF();
      a.hid = a.hid || qb();
      return a.hid
  }
  function xF(a, b) {
      var c = vF();
      if (c.vid === void 0 || b && !c.from_cookie)
          c.vid = a,
          c.from_cookie = b
  }
  ;function TF(a) {
      if (vt(a) || Ri())
          a.j[N.g.fj] = cl() || bl();
      Q(66) && !vt(a) && Ri() && (a.j[N.g.pj] = "::")
  }
  function UF(a) {
      if (Q(65) && Ri()) {
          Tr(a);
          Ur(a, "cpf", V(a.m, N.g.Ha));
          var b = V(a.m, N.g.Xb);
          Ur(a, "cu", b === !0 ? 1 : b === !1 ? 0 : void 0);
          Ur(a, "cf", V(a.m, N.g.Xa));
          Ur(a, "cd", Po(V(a.m, N.g.Oa), V(a.m, N.g.sb)))
      }
  }
  ;var jG = function(a) {
      this.H = a;
      this.j = ""
  }
    , kG = function(a, b) {
      a.C = b;
      return a
  }
    , lG = function(a, b) {
      b = a.j + b;
      for (var c = b.indexOf("\n\n"); c !== -1; ) {
          var d = a, e;
          a: {
              var f = h(b.substring(0, c).split("\n"))
                , g = f.next().value
                , k = f.next().value;
              if (g.indexOf("event: message") === 0 && k.indexOf("data: ") === 0)
                  try {
                      e = JSON.parse(k.substring(k.indexOf(":") + 1));
                      break a
                  } catch (G) {}
              e = void 0
          }
          var m = d
            , n = e;
          if (n) {
              var p = n.send_pixel
                , q = n.options
                , r = m.H;
              if (p) {
                  var t = p || [];
                  if (Array.isArray(t))
                      for (var v = Qa(q) ? q : {}, u = h(t), w = u.next(); !w.done; w = u.next())
                          r(w.value, v)
              }
              var x = n.create_iframe
                , y = n.options
                , A = m.C;
              if (x && A) {
                  var B = x || [];
                  if (Array.isArray(B))
                      for (var D = Qa(y) ? y : {}, H = h(B), J = H.next(); !J.done; J = H.next())
                          A(J.value, D)
              }
          }
          b = b.substring(c + 2);
          c = b.indexOf("\n\n")
      }
      a.j = b
  };
  function mG(a) {
      var b = a.search;
      return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse")
  }
  ;var YG = window
    , ZG = document
    , $G = function(a) {
      var b = YG._gaUserPrefs;
      if (b && b.ioo && b.ioo() || ZG.documentElement.hasAttribute("data-google-analytics-opt-out") || a && YG["ga-disable-" + a] === !0)
          return !0;
      try {
          var c = YG.external;
          if (c && c._gaUserPrefs && c._gaUserPrefs == "oo")
              return !0
      } catch (p) {}
      for (var d = [], e = String(ZG.cookie).split(";"), f = 0; f < e.length; f++) {
          var g = e[f].split("=")
            , k = g[0].replace(/^\s*|\s*$/g, "");
          if (k && k == "AMP_TOKEN") {
              var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
              m && (m = decodeURIComponent(m));
              d.push(m)
          }
      }
      for (var n = 0; n < d.length; n++)
          if (d[n] == "$OPT_OUT")
              return !0;
      return ZG.getElementById("__gaOptOutExtension") ? !0 : !1
  };
  function kH(a) {
      z(a, function(c) {
          c.charAt(0) === "_" && delete a[c]
      });
      var b = a[N.g.fb] || {};
      z(b, function(c) {
          c.charAt(0) === "_" && delete b[c]
      })
  }
  function OH(a, b) {}
  function PH(a, b) {
      var c = function() {};
      return c
  }
  function QH(a, b, c) {}
  ;var RH = PH;
  function TH(a, b, c) {
      var d = this;
  }
  TH.F = "internal.gtagConfig";
  function UH() {
      var a = {};
      return a
  }
  ;function WH(a, b) {}
  WH.R = "gtagSet";
  function XH() {
      var a = {};
      return a
  }
  ;function YH(a, b) {}
  YH.R = "injectHiddenIframe";
  var ZH = Fz();
  function $H(a, b, c, d, e) {
      var f = this;
  }
  $H.F = "internal.injectHtml";
  var dI = {};
  function fI(a, b, c, d) {}
  var gI = {
      dl: 1,
      id: 1
  }
    , hI = {};
  function iI(a, b, c, d) {}
  fI.R = "injectScript";
  iI.F = "internal.injectScript";
  function jI(a) {
      var b = !0;
      return b
  }
  jI.R = "isConsentGranted";
  function kI() {
      return el()
  }
  kI.F = "internal.isDmaRegion";
  function lI(a) {
      var b = !1;
      return b
  }
  lI.F = "internal.isEntityInfrastructure";
  function mI() {
      var a = Wg(function(b) {
          Tz(this).log("error", b)
      });
      a.R = "JSON";
      return a
  }
  ;function nI(a) {
      var b = void 0;
      return cd(b)
  }
  nI.F = "internal.legacyParseUrl";
  function oI() {
      return !1
  }
  var pI = {
      getItem: function(a) {
          var b = null;
          return b
      },
      setItem: function(a, b) {
          return !1
      },
      removeItem: function(a) {}
  };
  function qI() {}
  qI.R = "logToConsole";
  function rI(a, b) {}
  rI.F = "internal.mergeRemoteConfig";
  function sI(a, b, c) {
      c = c === void 0 ? !0 : c;
      var d = [];
      return cd(d)
  }
  sI.F = "internal.parseCookieValuesFromString";
  function tI(a) {
      var b = void 0;
      return b
  }
  tI.R = "parseUrl";
  function uI(a) {}
  uI.F = "internal.processAsNewEvent";
  function vI(a, b, c) {
      var d;
      return d
  }
  vI.F = "internal.pushToDataLayer";
  function wI(a) {
      var b = !1;
      K(this.getName(), ["permission:!string"], [a]);
      for (var c = Array.prototype.slice.call(arguments, 0), d = 0; d < c.length; ++d)
          c[d] = I(c[d], this.D, 1);
      c.unshift(this);
      try {
          M.apply(null, c),
          b = !0
      } catch (e) {
          return !1
      }
      return b
  }
  wI.R = "queryPermission";
  function xI() {
      var a = "";
      return a
  }
  xI.R = "readCharacterSet";
  function yI() {
      return vi.kb
  }
  yI.F = "internal.readDataLayerName";
  function zI() {
      var a = "";
      return a
  }
  zI.R = "readTitle";
  function AI(a, b) {
      var c = this;
      K(this.getName(), ["destinationId:!string", "callback:!Fn"], arguments),
      os(a, function(d) {
          b.invoke(c.D, cd(d, c.D, 1))
      });
  }
  AI.F = "internal.registerCcdCallback";
  function BI(a) {
      return !0
  }
  BI.F = "internal.registerDestination";
  var CI = ["config", "event", "get", "set"];
  function DI(a, b, c) {}
  DI.F = "internal.registerGtagCommandListener";
  function EI(a, b) {
      var c = !1;
      return c
  }
  EI.F = "internal.removeDataLayerEventListener";
  function FI(a, b) {}
  FI.F = "internal.removeFormData";
  function GI() {}
  GI.R = "resetDataLayer";
  function HI(a, b, c, d) {}
  HI.F = "internal.sendGtagEvent";
  function II(a, b, c) {}
  II.R = "sendPixel";
  function JI(a, b) {}
  JI.F = "internal.setAnchorHref";
  function KI(a) {}
  KI.F = "internal.setContainerConsentDefaults";
  function LI(a, b, c, d) {
      var e = this;
      d = d === void 0 ? !0 : d;
      var f = !1;
      return f
  }
  LI.R = "setCookie";
  function MI(a) {}
  MI.F = "internal.setCorePlatformServices";
  function NI(a, b) {}
  NI.F = "internal.setDataLayerValue";
  function OI(a) {}
  OI.R = "setDefaultConsentState";
  function PI(a, b) {}
  PI.F = "internal.setDelegatedConsentType";
  function QI(a, b) {}
  QI.F = "internal.setFormAction";
  function RI(a, b, c) {}
  RI.F = "internal.setInCrossContainerData";
  function SI(a, b, c) {
      return !1
  }
  SI.R = "setInWindow";
  function TI(a, b, c) {}
  TI.F = "internal.setProductSettingsParameter";
  function UI(a, b, c) {
      K(this.getName(), ["targetId:!string", "name:!string", "value:!*"], arguments);
      for (var d = b.split("."), e = Em(a), f = 0; f < d.length - 1; f++) {
          if (e[d[f]] === void 0)
              e[d[f]] = {};
          else if (!Qa(e[d[f]]))
              throw Error("setRemoteConfigParameter failed, path contains a non-object type: " + d[f]);
          e = e[d[f]]
      }
      e[d[f]] = I(c, this.D, 1);
  }
  UI.F = "internal.setRemoteConfigParameter";
  function VI(a, b, c, d) {
      var e = this;
  }
  VI.R = "sha256";
  function WI(a, b, c) {}
  WI.F = "internal.sortRemoteConfigParameters";
  function XI(a, b) {
      var c = void 0;
      return c
  }
  XI.F = "internal.subscribeToCrossContainerData";
  var YI = {}
    , ZI = {};
  YI.getItem = function(a) {
      var b = null;
      return b
  }
  ;
  YI.setItem = function(a, b) {}
  ;
  YI.removeItem = function(a) {}
  ;
  YI.clear = function() {}
  ;
  YI.R = "templateStorage";
  function $I(a, b) {
      var c = !1;
      return c
  }
  $I.F = "internal.testRegex";
  function aJ(a) {
      var b;
      return b
  }
  ;function bJ(a) {
      var b;
      return b
  }
  bJ.F = "internal.unsiloId";
  function cJ(a, b) {
      var c;
      return c
  }
  cJ.F = "internal.unsubscribeFromCrossContainerData";
  function dJ(a) {}
  dJ.R = "updateConsentState";
  var eJ;
  function fJ(a, b, c) {
      eJ = eJ || new gh;
      eJ.add(a, b, c)
  }
  function gJ(a, b) {
      var c = eJ = eJ || new gh;
      if (c.j.hasOwnProperty(a))
          throw Error("Attempting to add a private function which already exists: " + a + ".");
      if (c.contains(a))
          throw Error("Attempting to add a private function with an existing API name: " + a + ".");
      c.j[a] = mb(b) ? Dg(a, b) : Eg(a, b)
  }
  function hJ() {
      return function(a) {
          var b;
          var c = eJ;
          if (c.contains(a))
              b = c.get(a, this);
          else {
              var d;
              if (d = c.j.hasOwnProperty(a)) {
                  var e = !1
                    , f = this.D.j;
                  if (f) {
                      var g = f.hb();
                      if (g) {
                          g.indexOf("__cvt_") !== 0 && (e = !0);
                      }
                  } else
                      e = !0;
                  d = e
              }
              if (d) {
                  var k = c.j.hasOwnProperty(a) ? c.j[a] : void 0;
                  b = k
              } else
                  throw Error(a + " is not a valid API name.");
          }
          return b
      }
  }
  ;function iJ() {
      var a = function(c) {
          return void gJ(c.F, c)
      }
        , b = function(c) {
          return void fJ(c.R, c)
      };
      b(Nz);
      b(Uz);
      b(hB);
      b(jB);
      b(kB);
      b(rB);
      b(tB);
      b(xB);
      b(mI());
      b(zB);
      b(QE);
      b(RE);
      b(hF);
      b(iF);
      b(jF);
      b(mF);
      b(WH);
      b(YH);
      b(fI);
      b(jI);
      b(qI);
      b(tI);
      b(wI);
      b(xI);
      b(zI);
      b(II);
      b(LI);
      b(OI);
      b(SI);
      b(VI);
      b(YI);
      b(dJ);
      fJ("Math", Ig());
      fJ("Object", eh);
      fJ("TestHelper", ih());
      fJ("assertApi", Fg);
      fJ("assertThat", Gg);
      fJ("decodeUri", Kg);
      fJ("decodeUriComponent", Lg);
      fJ("encodeUri", Mg);
      fJ("encodeUriComponent", Ng);
      fJ("fail", Sg);
      fJ("generateRandom", Tg);
      fJ("getTimestamp", Ug);
      fJ("getTimestampMillis", Ug);
      fJ("getType", Vg);
      fJ("makeInteger", Xg);
      fJ("makeNumber", Yg);
      fJ("makeString", Zg);
      fJ("makeTableMap", $g);
      fJ("mock", ch);
      fJ("fromBase64", LE, !("atob"in C));
      fJ("localStorage", pI, !oI());
      fJ("toBase64", aJ, !("btoa"in C));
      a(Qz);
      a(kA);
      a(wA);
      a(DA);
      a(IA);
      a(XA);
      a(fB);
      a(iB);
      a(lB);
      a(mB);
      a(nB);
      a(oB);
      a(pB);
      a(qB);
      a(sB);
      a(uB);
      a(wB);
      a(yB);
      a(AB);
      a(CB);
      a(DB);
      a(EB);
      a(FB);
      a(HB);
      a(KB);
      a(SB);
      a(TB);
      a(dC);
      a(iC);
      a(nC);
      a(wC);
      a(BC);
      a(OC);
      a(QC);
      a(dD);
      a(eD);
      a(gD);
      a(JE);
      a(KE);
      a(ME);
      a(NE);
      a(OE);
      a(SE);
      a(TE);
      a(UE);
      a(VE);
      a(WE);
      a(XE);
      a(YE);
      a(ZE);
      a($E);
      a(aF);
      a(bF);
      a(dF);
      a(eF);
      a(fF);
      a(gF);
      a(kF);
      a(lF);
      a(TH);
      a($H);
      a(iI);
      a(kI);
      a(lI);
      a(nI);
      a(VA);
      a(rI);
      a(sI);
      a(uI);
      a(vI);
      a(yI);
      a(AI);
      a(BI);
      a(DI);
      a(EI);
      a(FI);
      a(HI);
      a(JI);
      a(KI);
      a(MI);
      a(NI);
      a(PI);
      a(QI);
      a(RI);
      a(TI);
      a(UI);
      a(WI);
      a(XI);
      a($I);
      a(bJ);
      a(cJ);
      gJ("internal.CrossContainerSchema", BB());
      gJ("internal.GtagSchema", UH());
      gJ("internal.IframingStateSchema", XH());
      fJ("mockObject", dh);
      return hJ()
  }
  ;var Lz;
  function jJ() {
      Lz.j.j.H = function(a, b, c) {
          wi.SANDBOXED_JS_SEMAPHORE = wi.SANDBOXED_JS_SEMAPHORE || 0;
          wi.SANDBOXED_JS_SEMAPHORE++;
          try {
              return a.apply(b, c)
          } finally {
              wi.SANDBOXED_JS_SEMAPHORE--
          }
      }
  }
  function kJ(a) {
      a && z(a, function(b, c) {
          for (var d = 0; d < c.length; d++) {
              var e = c[d].replace(/^_*/, "");
              Mi[e] = Mi[e] || [];
              Mi[e].push(b)
          }
      })
  }
  ;var lJ = Array.isArray;
  function mJ(a, b) {
      return Sa(a, b || null)
  }
  function X(a) {
      return window.encodeURIComponent(a)
  }
  function nJ(a, b, c) {
      zc(a, b, c)
  }
  function oJ(a, b) {
      if (!a)
          return !1;
      var c = jj(pj(a), "host");
      if (!c)
          return !1;
      for (var d = 0; b && d < b.length; d++) {
          var e = b[d] && b[d].toLowerCase();
          if (e) {
              var f = c.length - e.length;
              f > 0 && e.charAt(0) !== "." && (f--,
              e = "." + e);
              if (f >= 0 && c.indexOf(e, f) === f)
                  return !0
          }
      }
      return !1
  }
  function pJ(a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
          a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c],
          e = !0);
      return e ? d : null
  }
  var yJ = C.clearTimeout
    , zJ = C.setTimeout;
  function AJ(a, b, c) {
      if (mo()) {
          b && F(b)
      } else
          return wc(a, b, c)
  }
  function BJ() {
      return C.location.href
  }
  function CJ(a, b) {
      return Xi(a, b || 2)
  }
  function DJ(a, b) {
      C[a] = b
  }
  function EJ(a, b, c) {
      b && (C[a] === void 0 || c && !C[a]) && (C[a] = b);
      return C[a]
  }
  function FJ(a, b) {
      if (mo()) {
          b && F(b)
      } else
          yc(a, b)
  }

  var GJ = {};
  var Y = {
      securityGroups: {}
  };

  Y.securityGroups.v = ["google"],
  Y.__v = function(a) {
      var b = a.vtp_name;
      if (!b || !b.replace)
          return !1;
      var c = CJ(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
      return c !== void 0 ? c : a.vtp_defaultValue
  }
  ,
  Y.__v.o = "v",
  Y.__v.isVendorTemplate = !0,
  Y.__v.priorityOverride = 0,
  Y.__v.isInfrastructure = !0,
  Y.__v.runInSiloedMode = !1;

  Y.securityGroups.rep = ["google"],
  Y.__rep = function(a) {
      var b = fk(a.vtp_containerId), c = zl(b, !0), d;
      switch (c.prefix) {
      case "AW":
          d = kD;
          break;
      case "DC":
          d = zD;
          break;
      case "GF":
          d = ED;
          break;
      case "HA":
          d = KD;
          break;
      case "UA":
          d = hE;
          break;
      case "MC":
          d = RH(c, a.vtp_gtmEventId);
          break;
      default:
          F(a.vtp_gtmOnFailure);
          return
      }
      d ? (F(a.vtp_gtmOnSuccess),
      Am(b, d),
      a.vtp_remoteConfig && Gm(b, a.vtp_remoteConfig || {})) : F(a.vtp_gtmOnFailure)
  }
  ,
  Y.__rep.o = "rep",
  Y.__rep.isVendorTemplate = !0,
  Y.__rep.priorityOverride = 0,
  Y.__rep.isInfrastructure = !1,
  Y.__rep.runInSiloedMode = !0;
  Y.securityGroups.read_event_data = ["google"],
  function() {
      function a(b, c) {
          return {
              key: c
          }
      }
      (function(b) {
          Y.__read_event_data = b;
          Y.__read_event_data.o = "read_event_data";
          Y.__read_event_data.isVendorTemplate = !0;
          Y.__read_event_data.priorityOverride = 0;
          Y.__read_event_data.isInfrastructure = !1;
          Y.__read_event_data.runInSiloedMode = !1
      }
      )(function(b) {
          var c = b.vtp_eventDataAccess
            , d = b.vtp_keyPatterns || []
            , e = b.vtp_createPermissionError;
          return {
              assert: function(f, g) {
                  if (g != null && !l(g))
                      throw e(f, {
                          key: g
                      }, "Key must be a string.");
                  if (c !== "any") {
                      try {
                          if (c === "specific" && g != null && hg(g, d))
                              return
                      } catch (k) {
                          throw e(f, {
                              key: g
                          }, "Invalid key filter.");
                      }
                      throw e(f, {
                          key: g
                      }, "Prohibited read from event data.");
                  }
              },
              M: a
          }
      })
  }();

  Y.securityGroups.detect_user_provided_data = ["google"],
  function() {
      function a(b, c) {
          return {
              dataSource: c
          }
      }
      (function(b) {
          Y.__detect_user_provided_data = b;
          Y.__detect_user_provided_data.o = "detect_user_provided_data";
          Y.__detect_user_provided_data.isVendorTemplate = !0;
          Y.__detect_user_provided_data.priorityOverride = 0;
          Y.__detect_user_provided_data.isInfrastructure = !1;
          Y.__detect_user_provided_data.runInSiloedMode = !1
      }
      )(function(b) {
          var c = b.vtp_createPermissionError;
          return {
              assert: function(d, e) {
                  if (e !== "auto" && e !== "manual" && e !== "code")
                      throw c(d, {}, "Unknown user provided data source.");
                  if (b.vtp_limitDataSources)
                      if (e !== "auto" || b.vtp_allowAutoDataSources) {
                          if (e === "manual" && !b.vtp_allowManualDataSources)
                              throw c(d, {}, "Detection of user provided data via manually specified CSS selectors is not allowed.");
                          if (e === "code" && !b.vtp_allowCodeDataSources)
                              throw c(d, {}, "Detection of user provided data from an in-page variable is not allowed.");
                      } else
                          throw c(d, {}, "Automatic detection of user provided data is not allowed.");
              },
              M: a
          }
      })
  }();

  Y.securityGroups.get = ["google"],
  Y.__get = function(a) {
      var b = a.vtp_settings
        , c = b.eventParameters || {}
        , d = String(a.vtp_eventName)
        , e = {};
      e.eventId = a.vtp_gtmEventId;
      e.priorityId = a.vtp_gtmPriorityId;
      a.vtp_deferrable && (e.deferrable = !0);
      var f = Zx(String(b.streamId), d, c);
      ay(f, e.eventId, e);
      a.vtp_gtmOnSuccess()
  }
  ,
  Y.__get.o = "get",
  Y.__get.isVendorTemplate = !0,
  Y.__get.priorityOverride = 0,
  Y.__get.isInfrastructure = !1,
  Y.__get.runInSiloedMode = !1;

  var HJ = {};
  HJ.dataLayer = Yi;
  HJ.callback = function(a) {
      Li.hasOwnProperty(a) && mb(Li[a]) && Li[a]();
      delete Li[a]
  }
  ;
  HJ.bootstrap = 0;
  HJ._spx = !1;
  function IJ() {
      wi[Zj()] = wi[Zj()] || HJ;
      jk();
      nk() || z(ok(), function(d, e) {
          Ew(d, e.transportUrl, e.context);
          T(92)
      });
      Cb(Mi, Y.securityGroups);
      var a = dk(ek()), b, c = a == null ? void 0 : (b = a.context) == null ? void 0 : b.source;
      c !== 2 && c !== 4 && c !== 3 || T(142);
      qf = Hf
  }
  var JJ = !1;
  (function(a) {
      function b() {
          n = E.documentElement.getAttribute("data-tag-assistant-present");
          Uy(n) && (m = k.kj)
      }
      function c() {
          m && qc ? g(m) : a()
      }
      if (!C["__TAGGY_INSTALLED"]) {
          var d = !1;
          if (E.referrer) {
              var e = pj(E.referrer);
              d = lj(e, "host") === "cct.google"
          }
          if (!d) {
              var f = zo("googTaggyReferrer");
              d = !(!f.length || !f[0].length)
          }
          d && (C["__TAGGY_INSTALLED"] = !0,
          wc("https://cct.google/taggy/agent.js"))
      }
      var g = function(v) {
          var u = "GTM"
            , w = "GTM";
          Ci && (u = "OGT",
          w = "GTAG");
          var x = C["google.tagmanager.debugui2.queue"];
          x || (x = [],
          C["google.tagmanager.debugui2.queue"] = x,
          wc("https://" + vi.Id + "/debug/bootstrap?id=" + Nf.ctid + "&src=" + w + "&cond=" + v + "&gtm=" + oo()));
          var y = {
              messageType: "CONTAINER_STARTING",
              data: {
                  scriptSource: qc,
                  containerProduct: u,
                  debug: !1,
                  id: Nf.ctid,
                  targetRef: {
                      ctid: Nf.ctid,
                      isDestination: Sj.se
                  },
                  aliases: Vj(),
                  destinations: Yj()
              }
          };
          y.data.resume = function() {
              a()
          }
          ;
          vi.xk && (y.data.initialPublish = !0);
          x.push(y)
      }
        , k = {
          Uk: 1,
          mj: 2,
          Aj: 3,
          si: 4,
          kj: 5
      };
      k[k.Uk] = "GTM_DEBUG_LEGACY_PARAM";
      k[k.mj] = "GTM_DEBUG_PARAM";
      k[k.Aj] = "REFERRER";
      k[k.si] = "COOKIE";
      k[k.kj] = "EXTENSION_PARAM";
      var m = void 0
        , n = void 0
        , p = jj(C.location, "query", !1, void 0, "gtm_debug");
      Uy(p) && (m = k.mj);
      if (!m && E.referrer) {
          var q = pj(E.referrer);
          lj(q, "host") === "tagassistant.google.com" && (m = k.Aj)
      }
      if (!m) {
          var r = zo("__TAG_ASSISTANT");
          r.length && r[0].length && (m = k.si)
      }
      m || b();
      if (!m && Vy(n)) {
          var t = !1;
          Bc(E, "TADebugSignal", function() {
              t || (t = !0,
              b(),
              c())
          }, !1);
          C.setTimeout(function() {
              t || (t = !0,
              b(),
              c())
          }, 200)
      } else
          c()
  }
  )(function() {
      try {
          var a;
          if (!(a = !Q(59))) {
              var b;
              if (!(b = JJ)) {
                  var c;
                  a: {
                      for (var d = Pj(), e = h(Uj()), f = e.next(); !f.done; f = e.next())
                          if (d.injectedFirstPartyContainers[f.value]) {
                              c = !0;
                              break a
                          }
                      c = !1
                  }
                  b = !c
              }
              a = b
          }
          if (a) {
              hk();
              if (Q(77)) {}
              ib[12] = !0;
              In();
              vl();
              var g = bk();
              if (Pj().canonical[g]) {
                  var k = wi.zones;
                  k && k.unregisterChild(Uj());
                  pw().removeExternalRestrictions(bk());
              } else {
                  iu();
                  Pi.j = "101533421~101671035~101686685";
                  Pi.K = "";
                  Pi.Ra = "ad_storage|analytics_storage|ad_user_data|ad_personalization";
                  Pi.Z = "ad_storage|analytics_storage|ad_user_data";
                  Pi.P = "4a10";
                  Pi.P = "4a30";
                  Aw();
                  for (var m = data.resource || {}, n = m.macros || [], p = 0; p < n.length; p++)
                      ff.push(n[p]);
                  for (var q = m.tags || [], r = 0; r < q.length; r++)
                      jf.push(q[r]);
                  for (var t = m.predicates || [], v = 0; v < t.length; v++)
                      hf.push(t[v]);
                  for (var u = m.rules || [], w = 0; w < u.length; w++) {
                      for (var x = u[w], y = {}, A = 0; A < x.length; A++) {
                          var B = x[A][0];
                          y[B] = Array.prototype.slice.call(x[A], 1);
                          B !== "if" && B !== "unless" || pf(y[B])
                      }
                      gf.push(y)
                  }
                  lf = Y;
                  mf = zz;
                  Jf = new Qf;
                  var D = data.sandboxed_scripts
                    , H = data.security_groups;
                  a: {
                      var J = data.runtime || []
                        , G = data.runtime_lines;
                      Lz = new ze;
                      jJ();
                      ef = Kz();
                      var O = Lz
                        , L = iJ()
                        , S = new Vc("require",L);
                      S.Ma();
                      O.j.j.set("require", S);
                      for (var ca = [], Z = 0; Z < J.length; Z++) {
                          var U = J[Z];
                          if (!Array.isArray(U) || U.length < 3) {
                              if (U.length === 0)
                                  continue;
                              break a
                          }
                          G && G[Z] && G[Z].length && Af(U, G[Z]);
                          try {
                              Lz.execute(U),
                              Q(88) && Fj && U[0] === 50 && ca.push(U[1])
                          } catch (Un) {}
                      }
                      Q(88) && (rf = ca)
                  }
                  if (D && D.length)
                      for (var R = ["sandboxedScripts"], ma = 0; ma < D.length; ma++) {
                          var na = D[ma].replace(/^_*/, "");
                          Mi[na] = R
                      }
                  kJ(H);
                  IJ();
                  if (!Gi)
                      for (var ja = el() ? Si(Pi.Z) : Si(Pi.Ra), xa = 0; xa < il.length; xa++) {
                          var Oa = il[xa]
                            , Ea = Oa
                            , Ra = ja[Oa] ? "granted" : "denied";
                          Ek().implicit(Ea, Ra)
                      }
                  Ty();
                  Jw = !1;
                  Kw = 0;
                  if (E.readyState === "interactive" && !E.createEventObject || E.readyState === "complete")
                      Mw();
                  else {
                      Bc(E, "DOMContentLoaded", Mw);
                      Bc(E, "readystatechange", Mw);
                      if (E.createEventObject && E.documentElement.doScroll) {
                          var Za = !0;
                          try {
                              Za = !C.frameElement
                          } catch (Un) {}
                          Za && Nw()
                      }
                      Bc(C, "load", Mw)
                  }
                  yy = !1;
                  E.readyState === "complete" ? Ay() : Bc(C, "load", Ay);
                  Fj && (jm(wm),
                  C.setInterval(vm, 864E5),
                  jm(Cz),
                  jm(mx),
                  jm(gv),
                  jm(zm),
                  jm(Hz),
                  jm(xx),
                  jm(Ut),
                  Q(88) && (jm(rx),
                  jm(sx),
                  jm(tx)));
                  if (Gj) {
                      Dk();
                      Ql();
                      Iw();
                      var wd;
                      var xd = dk(ek());
                      if (xd) {
                          for (; xd.parent; ) {
                              var Rx = dk(xd.parent);
                              if (!Rx)
                                  break;
                              xd = Rx
                          }
                          wd = xd
                      } else
                          wd = void 0;
                      var Re = wd;
                      if (!Re)
                          T(144);
                      else if (Re.canonicalContainerId) {
                          var Vn;
                          a: {
                              if (Re.scriptSource) {
                                  var Mj;
                                  try {
                                      var Sx;
                                      Mj = (Sx = Oc()) == null ? void 0 : Sx.getEntriesByType("resource")
                                  } catch (Un) {}
                                  if (Mj) {
                                      for (var Wn = {}, Nj = 0; Nj < Mj.length; ++Nj) {
                                          var Tx = Mj[Nj]
                                            , Xn = Tx.initiatorType;
                                          if (Xn === "script" && Tx.name === Re.scriptSource) {
                                              Vn = {
                                                  Vm: Nj,
                                                  Wm: Wn
                                              };
                                              break a
                                          }
                                          Wn[Xn] = 1 + (Wn[Xn] || 0)
                                      }
                                      T(146)
                                  } else
                                      T(145)
                              }
                              Vn = void 0
                          }
                          var Yn = Vn;
                          Yn && (vk("rtg", String(Re.canonicalContainerId)),
                          vk("rlo", String(Yn.Vm)),
                          vk("slo", String(Yn.Wm.script || "0")),
                          vk("hlo", Re.htmlLoadOrder || "-1"),
                          vk("lst", String(Re.loadScriptType || "0")))
                      }
                      var Zn;
                      var Oj = ck();
                      if (Oj) {
                          var Ux;
                          Zn = Oj.canonicalContainerId || "_" + (Oj.scriptContainerId || ((Ux = Oj.destinations) == null ? void 0 : Ux[0]))
                      } else
                          Zn = void 0;
                      var Vx = Zn;
                      Vx && vk("pcid", Vx);
                      Q(34) && (vk("bt", String(Pi.H ? 2 : Ei ? 1 : 0)),
                      vk("ct", String(Pi.H ? 0 : Ei ? 1 : mo() ? 2 : 3)))
                  }
                  pz();
                  $k(1);
                  TA();
                  Ki = zb();
                  HJ.bootstrap = Ki;
                  HJ._spx = !0,
                  Ry();
                  if (Q(77)) {}
              }
          }
      } catch (Un) {
          if ($k(4),
          Fj) {
              var KJ = qm(!0, !0);
              zc(KJ)
          }
      }
  });

}
)()
