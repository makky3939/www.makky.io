webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fast_xml_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fast-xml-parser */ "./node_modules/fast-xml-parser/src/parser.js");
/* harmony import */ var fast_xml_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fast_xml_parser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _orcid_bibtex_parse_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @orcid/bibtex-parse-js */ "./node_modules/@orcid/bibtex-parse-js/bibtexParse.js");
/* harmony import */ var _orcid_bibtex_parse_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_orcid_bibtex_parse_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! fs */ 4);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "/Users/makky/ghq/github.com/makky3939/www.makky.io/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var PublicationPages = function PublicationPages(_ref) {
  var pages = _ref.pages;

  if (pages.includes('pages')) {
    return __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, pages);
  } else {
    return __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "p. ", pages);
  }
};

var PublicationOthers = function PublicationOthers(_ref2) {
  var url = _ref2.url;

  if (url) {
    return __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "[", __jsx("a", {
      href: url,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "PDF"), "]");
  } else {
    return __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    });
  }
};

var Publication = function Publication(_ref3) {
  var bibitem = _ref3.bibitem;

  if (bibitem.entryType == 'article') {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, bibitem.entryTags.author, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, ". "), __jsx("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, bibitem.entryTags.title), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, ". "), "".concat(bibitem.entryTags.journal, " (").concat(bibitem.entryTags.number, ":").concat(bibitem.entryTags.volume, ")"), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, ". "), bibitem.entryTags.year, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, ", "), "p. ".concat(bibitem.entryTags.pages), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, ". "), __jsx(PublicationOthers, {
      url: bibitem.entryTags.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }));
  } else if (bibitem.entryType == 'inproceedings') {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, bibitem.entryTags.author, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, ". "), __jsx("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, bibitem.entryTags.title), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, ". "), bibitem.entryTags.booktitle, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, ". "), bibitem.entryTags.location, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, ", "), bibitem.entryTags.year, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, ", "), "p. ".concat(bibitem.entryTags.pages), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, ". "), __jsx(PublicationOthers, {
      url: bibitem.entryTags.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }));
  }
};

var researchGrants = [{
  "text": "AIP Challenge Program, JST AIP Network Lab, Japan. 1,000,000 JPY, August 2020 - March 2021."
}, {
  "text": "AIP Challenge Program, JST AIP Network Lab, Japan. 1,000,000 JPY, August 2019 - March 2020."
}];
var teachingExperience = [{
  "title": "Teaching Assistant, Database Technology, University of Tsukuba. October 2020 - December 2020."
}, {
  "title": "Teaching Assistant, Information Media Laboratory, University of Tsukuba. April 2020 - July 2020."
}, {
  "title": "Teaching Assistant, Introduction to Data Engineering, University of Tsukuba. April 2020 - July 2020."
}, {
  "title": "Teaching Assistant, Database Technology, University of Tsukuba. October 2019 - December 2019."
}, {
  "title": "Teaching Assistant, Introduction to Data Engineering, University of Tsukuba. April 2019 - July 2019."
}, {
  "title": "Teaching Assistant, Database Technology, University of Tsukuba. October 2018 - December 2018."
}, {
  "title": "Teaching Assistant, Introduction to Data Engineering, University of Tsukuba. April 2018 - July 2018."
}];
var workExperience = [{
  "title": "Research Assistant, University of Tsukuba, Japan. April 2019 - Present.",
  "_comment": "As a Member of the JST CREST https://www.dl.soc.i.kyoto-u.ac.jp/system/wp-content/uploads/2019/03/hcompWS18www.pdf CyborgCrowd Project. It is a Japanese funded research project to integrate crowdsourcing and AI technologies."
}, {
  "title": "Engineer (Part-time), Preferred Networks, Inc. October 2017 - Present."
}, {
  "title": "Engineer (Part-time), Bit Journey, Inc. October 2017 - May 2020"
}, {
  "title": "Intern, Arm Treasure Data inc. August 2018 - September 2018"
}, {
  "title": "Intern, Preferred Networks, Inc. August 2017 - September 2017"
}, {
  "title": "Engineer (Part-time), LINE Corporation. April 2016"
}, {
  "title": "Intern, CyberAgent inc. September 2015"
}, {
  "title": "Intern, National Institute of Informatics, Japan. August 2015"
}, {
  "title": "Intern, pixiv inc. March 2015"
}, {
  "title": "Engineer (Part-time), 3-shake inc. July　2016 - August 2017"
}, {
  "title": "Engineer (Part-time), BearTail inc. May 2014 - March 2015"
}, {
  "title": "Engineer (Part-time), Has-key, inc. August 2013 - March 2017"
}];
var awards = [{
  "title": "第13回データ工学と情報マネジメントに関するフォーラム (DEIM2021), 学生プレゼンテーション賞, 2021-03-03"
}, {
  "title": "第12回データ工学と情報マネジメントに関するフォーラム (DEIM2020), オンラインプレゼンテーション賞, 2020-03-03"
}, {
  "title": "WebDB Forum 2019, 口頭発表 企業賞 (株式会社LIFULL賞, 株式会社FRONTEO賞), 2019-09-09"
}, {
  "title": "日本学生支援機構 特に優れた業績による奨学金返還免除 (全額), 2019年5月"
}, {
  "title": "筑波大学 図書館情報メディア研究科 研究科長表彰, 2019-03"
}, {
  "title": "ワーカの成長を考慮した自己補正マイクロタスク割当て手法，第9回データ工学と情報マネジメントに関するフォーラム，学生プレゼンテーション賞"
}, {
  "title": "EscapeGoat:筑波大学 情報学群 知識情報・図書館学類生向けの卒業判定アプリ，株式会社ハシゴ Gitソースコンテスト2016，銅賞"
}, {
  "title": "pixiv 2015 SPRING BOOT CAMP，準優勝"
}, {
  "title": "震災について考えるサイト，第15回 全日本中学高校Webコンテスト ThinkQuest JAPAN，プラチナ賞 (Yahoo!基金特別賞)"
}, {
  "title": "Google StreetViewを用いた図書情報システムの開発，第9回 北関東３県工業高校生徒研究発表大会，最優秀賞"
}, {
  "title": "Google StreetViewを用いた図書情報システムの開発，第64回 生徒研究発表会，最優秀賞"
}, {
  "title": "Google StreetViewを用いた図書情報システムの開発，第２回 立命館・全国高校生ソフトウェア創作コンテスト ICT Challenge+R 2012，最優秀賞"
}];

var Index = function Index(_ref4) {
  var recentBlogPosts = _ref4.recentBlogPosts,
      publicationList = _ref4.publicationList;
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, __jsx("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Navbar"], {
    expand: "md",
    fixed: "top",
    light: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavbarBrand"], {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, "www."), __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, "makky"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, ".io")))), __jsx("div", {
    className: "bg-jumbotron",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: "6",
    md: "10",
    className: "my-5 py-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
    className: "my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, "Masaki Kobayashi"))), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, "Doctoral student at University of Tsukuba", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }), "(Graduate School of Library, Information and Media Studies)"), __jsx("dl", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, __jsx("dt", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, "Research Topics:"), __jsx("dd", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, "Human Computation, Crowdsourcing, Human-AI Collaboration"), __jsx("dt", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, "Interests:"), __jsx("dd", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, "Front-end Web, Site Reliability Engineering, Photography"), __jsx("dt", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, "Links:"), __jsx("dd", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, __jsx("a", {
    href: "/cv_masaki_kobayashi_20200309.pdf",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, "CV"), ', ', __jsx("a", {
    href: "https://blog.makky.io/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, "blog.makky.io"), ', ', __jsx("a", {
    href: "https://github.com/makky3939",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, "GitHub"), ', ', __jsx("a", {
    href: "https://speakerdeck.com/makky",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, "SpeakerDeck"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }), __jsx("a", {
    href: "https://scholar.google.com/citations?user=6jE4oTYAAAAJ",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, "Google Scholar"), ', ', __jsx("a", {
    href: "https://www.amazon.jp/hz/wishlist/ls/FOZWIXJAQW3C?ref_=wl_share",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, "Wishlist"), ', ', __jsx("a", {
    href: "https://www.slideshare.net/masakikobayashi1485",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, "SlideShare (inactive)"))))))))), __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    className: "my-5 py-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: "8",
    md: "10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, __jsx("h3", {
    className: "pb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, "Hello,"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }, "I am a doctoral student at the Graduate School of Library, Information and Media Studies, University of Tsukuba. My current research interest is Human-Machine collaboration in Crowdsourcing for efficient microtask processing."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }, "I am also interested in developing web applications and, I am fluent in JavaScript, TypeScript, Ruby, and Python. I have experienced as a part-time engineer and an intern in more than ten companies and research institutions."))))), __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: "8",
    md: "10",
    className: "my-5 py-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, __jsx("h3", {
    className: "pb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, "Recent Blog Posts"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }, recentBlogPosts.map(function (bp, index) {
    return __jsx("li", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277
      },
      __self: this
    }, __jsx("a", {
      href: bp["link"],
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278
      },
      __self: this
    }, bp["title"]));
  })), __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, "View all blog posts on ", __jsx("a", {
    href: "https://blog.makky.io/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, "blog.makky.io"), "."))))), __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "justify-content-center pb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: "10",
    md: "12",
    className: "mt-5 pt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }, __jsx("h3", {
    className: "pb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }, "Publications"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }, publicationList.map(function (bibitem, index) {
    return __jsx("li", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298
      },
      __self: this
    }, __jsx(Publication, {
      bibitem: bibitem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298
      },
      __self: this
    }));
  })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "justify-content-center pb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: "10",
    md: "12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: this
  }, __jsx("h3", {
    className: "pb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: this
  }, "Work Experience"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }, workExperience.map(function (we, index) {
    return __jsx("li", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311
      },
      __self: this
    }, we.title);
  })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "justify-content-center pb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: "10",
    md: "12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    },
    __self: this
  }, __jsx("h3", {
    className: "pb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  }, "Teaching Experience"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  }, teachingExperience.map(function (te, index) {
    return __jsx("li", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324
      },
      __self: this
    }, te.title);
  })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "justify-content-center pb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: "10",
    md: "12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }, __jsx("h3", {
    className: "pb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  }, "Research Grants"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: this
  }, researchGrants.map(function (rg, index) {
    return __jsx("li", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339
      },
      __self: this
    }, rg.text);
  })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "justify-content-center pb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: "10",
    md: "12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: this
  }, __jsx("h3", {
    className: "pb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348
    },
    __self: this
  }, "Awards"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351
    },
    __self: this
  }, awards.map(function (aw, index) {
    return __jsx("li", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 354
      },
      __self: this
    }, aw.title);
  })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "justify-content-center pb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: "10",
    md: "12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362
    },
    __self: this
  }, __jsx("h3", {
    className: "pb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363
    },
    __self: this
  }, "Patents"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367
    },
    __self: this
  }, "\u68EE\u5D8B \u539A\u884C, \u82E5\u6797 \u5553, \u5C0F\u6797 \u6B63\u6A39. \u5272\u5F53\u88C5\u7F6E\u53CA\u3073\u5272\u5F53\u65B9\u6CD5. \u7279\u98582019-035829.")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "justify-content-center pb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: "10",
    md: "12",
    className: "mb-5 pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: this
  }, __jsx("h3", {
    className: "pb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
    },
    __self: this
  }, "Others"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378
    },
    __self: this
  }, "The Thirty-Fifth AAAI Conference on Artificial Intelligence (AAAI 2021), Student volunteer staff"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379
    },
    __self: this
  }, "The 40th International ACM SIGIR Conference on Research and Development in Information Retrieval (SIGIR 2017), Student volunteer staff"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380
    },
    __self: this
  }, "IPA \u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u30AD\u30E3\u30F3\u30D72013 \u5168\u56FD\u5927\u4F1A Web\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u30AF\u30E9\u30B9\u4FEE\u4E86")))))), __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: "10",
    md: "12",
    className: "my-5 py-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393
    },
    __self: this
  }, "Photographs"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394
    },
    __self: this
  }, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (x, i) {
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      key: i,
      lg: "4",
      md: "4",
      sm: "6",
      className: "my-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 398
      },
      __self: this
    }, __jsx("img", {
      className: "rounded img-fluid",
      src: __webpack_require__("./pages/images/photographs/2016 sync recursive ^\\.\\/.*\\.jpg$")("./".concat(x, ".jpg")),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 399
      },
      __self: this
    }));
  })))))), __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: "10",
    md: "12",
    className: "my-5 py-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429
    },
    __self: this
  }, "Past Projects"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: "4",
    md: "6",
    sm: "12",
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431
    },
    __self: this
  }, __jsx("img", {
    className: "rounded img-fluid border",
    src: __webpack_require__(/*! ./images/portfolio/mind_project_2.png */ "./pages/images/portfolio/mind_project_2.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432
    },
    __self: this
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: "4",
    md: "6",
    sm: "12",
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434
    },
    __self: this
  }, __jsx("img", {
    className: "rounded img-fluid border",
    src: __webpack_require__(/*! ./images/portfolio/mind_project.png */ "./pages/images/portfolio/mind_project.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435
    },
    __self: this
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: "4",
    md: "6",
    sm: "12",
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437
    },
    __self: this
  }, __jsx("img", {
    className: "rounded img-fluid border",
    src: __webpack_require__(/*! ./images/portfolio/ldaboard_1.png */ "./pages/images/portfolio/ldaboard_1.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438
    },
    __self: this
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: "4",
    md: "6",
    sm: "12",
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440
    },
    __self: this
  }, __jsx("img", {
    className: "rounded img-fluid border",
    src: __webpack_require__(/*! ./images/portfolio/self_correction_2.png */ "./pages/images/portfolio/self_correction_2.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441
    },
    __self: this
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: "4",
    md: "6",
    sm: "12",
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446
    },
    __self: this
  }, __jsx("img", {
    className: "rounded img-fluid border",
    src: __webpack_require__(/*! ./images/portfolio/chainerui_1.png */ "./pages/images/portfolio/chainerui_1.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: this
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: "4",
    md: "6",
    sm: "12",
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449
    },
    __self: this
  }, __jsx("img", {
    className: "rounded img-fluid border",
    src: __webpack_require__(/*! ./images/portfolio/escapegoat_1.png */ "./pages/images/portfolio/escapegoat_1.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450
    },
    __self: this
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: "4",
    md: "6",
    sm: "12",
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452
    },
    __self: this
  }, __jsx("img", {
    className: "rounded img-fluid border",
    src: __webpack_require__(/*! ./images/portfolio/emotional_palette.png */ "./pages/images/portfolio/emotional_palette.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453
    },
    __self: this
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: "4",
    md: "6",
    sm: "12",
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455
    },
    __self: this
  }, __jsx("img", {
    className: "rounded img-fluid border",
    src: __webpack_require__(/*! ./images/portfolio/kasuga14_freshman.png */ "./pages/images/portfolio/kasuga14_freshman.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456
    },
    __self: this
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: "4",
    md: "6",
    sm: "12",
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458
    },
    __self: this
  }, __jsx("img", {
    className: "rounded img-fluid border",
    src: __webpack_require__(/*! ./images/portfolio/klis_setumeikai.png */ "./pages/images/portfolio/klis_setumeikai.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459
    },
    __self: this
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: "4",
    md: "6",
    sm: "12",
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461
    },
    __self: this
  }, __jsx("img", {
    className: "rounded img-fluid border",
    src: __webpack_require__(/*! ./images/portfolio/home_makky_io.png */ "./pages/images/portfolio/home_makky_io.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462
    },
    __self: this
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: "4",
    md: "6",
    sm: "12",
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464
    },
    __self: this
  }, __jsx("img", {
    className: "rounded img-fluid border",
    src: __webpack_require__(/*! ./images/portfolio/makky_io_2015.png */ "./pages/images/portfolio/makky_io_2015.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465
    },
    __self: this
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: "4",
    md: "6",
    sm: "12",
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467
    },
    __self: this
  }, __jsx("img", {
    className: "rounded img-fluid border",
    src: __webpack_require__(/*! ./images/portfolio/media_art_hounted_house.png */ "./pages/images/portfolio/media_art_hounted_house.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468
    },
    __self: this
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: "4",
    md: "6",
    sm: "12",
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470
    },
    __self: this
  }, __jsx("img", {
    className: "rounded img-fluid border",
    src: __webpack_require__(/*! ./images/portfolio/visubus.png */ "./pages/images/portfolio/visubus.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471
    },
    __self: this
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: "4",
    md: "6",
    sm: "12",
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473
    },
    __self: this
  }, __jsx("img", {
    className: "rounded img-fluid border",
    src: __webpack_require__(/*! ./images/portfolio/beef_clicker.png */ "./pages/images/portfolio/beef_clicker.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474
    },
    __self: this
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: "4",
    md: "6",
    sm: "12",
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476
    },
    __self: this
  }, __jsx("img", {
    className: "rounded img-fluid border",
    src: __webpack_require__(/*! ./images/portfolio/housyasen.png */ "./pages/images/portfolio/housyasen.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477
    },
    __self: this
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: "4",
    md: "6",
    sm: "12",
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479
    },
    __self: this
  }, __jsx("img", {
    className: "rounded img-fluid border",
    src: __webpack_require__(/*! ./images/portfolio/zishin.png */ "./pages/images/portfolio/zishin.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480
    },
    __self: this
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: "4",
    md: "6",
    sm: "12",
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482
    },
    __self: this
  }, __jsx("img", {
    className: "rounded img-fluid border",
    src: __webpack_require__(/*! ./images/portfolio/shinsai.png */ "./pages/images/portfolio/shinsai.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483
    },
    __self: this
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: "4",
    md: "6",
    sm: "12",
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485
    },
    __self: this
  }, __jsx("img", {
    className: "rounded img-fluid border",
    src: __webpack_require__(/*! ./images/portfolio/librarysearch_1.png */ "./pages/images/portfolio/librarysearch_1.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486
    },
    __self: this
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    lg: "4",
    md: "6",
    sm: "12",
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488
    },
    __self: this
  }, __jsx("img", {
    className: "rounded img-fluid border",
    src: __webpack_require__(/*! ./images/portfolio/mito_th.png */ "./pages/images/portfolio/mito_th.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489
    },
    __self: this
  }))))))), __jsx("div", {
    className: "bg-dark text-white py-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    md: "10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502
    },
    __self: this
  }, __jsx("p", {
    className: "my-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503
    },
    __self: this
  }, __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504
    },
    __self: this
  }, "\xA9 makky.io All Rights Reserved."))))))));
};

Index.getInitialProps = function _callee(ctx) {
  var bibtex_text, publicationList, res, text, xml, posts, recentBlogPosts;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          bibtex_text = fs__WEBPACK_IMPORTED_MODULE_8___default.a.readFileSync('./pages/bibliography.bib').toString();
          publicationList = _orcid_bibtex_parse_js__WEBPACK_IMPORTED_MODULE_7___default.a.toJSON(bibtex_text); // console.log(publicationList)

          _context.next = 4;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('https://blog.makky.io/feed.xml'));

        case 4:
          res = _context.sent;
          _context.next = 7;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(res.text());

        case 7:
          text = _context.sent;
          xml = fast_xml_parser__WEBPACK_IMPORTED_MODULE_4___default.a.parse(text);
          posts = xml["rss"]["channel"]["item"];
          recentBlogPosts = posts.slice(0, 3); // console.log(recentBlogPosts)

          return _context.abrupt("return", {
            recentBlogPosts: recentBlogPosts,
            publicationList: publicationList
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.e001fd9aaff9d8bec7a9.hot-update.js.map