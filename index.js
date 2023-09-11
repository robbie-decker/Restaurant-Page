/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/CyberwayRiders.ttf */ "./src/fonts/CyberwayRiders.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Blender-Pro-Book.otf */ "./src/fonts/Blender-Pro-Book.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/NEON.TTF */ "./src/fonts/NEON.TTF"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/yellow_border.svg */ "./src/imgs/yellow_border.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/dots-mobile.png */ "./src/imgs/dots-mobile.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --lightBlue: #00F0FF;
    --neonYellow: #fcee0a;
    --cyberRed: #FC012A;
    --cyberwhite: #fff;
}

@font-face {
    font-family: "Cyberpunk";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    font-weight: 600;
    font-style: normal;
}

@font-face{
    font-family: "Blender";
    src:url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

@font-face{
    font-family: "Neon";
    src:url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

body{
    margin: 0;
    font-family: "Blender";
    padding: 0;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* width: 100vw; */
}

nav{
    /* width: 100vw; */
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    z-index: 1;
}

nav button{
    /* margin: 0 20px; */
    font-family: "Neon";
    height: 8vh;
    width: 200px;
    font-size: 2rem;
    background-color: inherit;
    color: var(--lightBlue);
    filter: brightness(60%);
    border: none;
}

nav button:hover{
    filter: brightness(100%);
    text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px var(--lightBlue), 0 0 30px var(--lightBlue), 0 0 40px var(--lightBlue), 0 0 55px var(--lightBlue), 0 0 75px var(--lightBlue);
}

h1{
    font-family: "Cyberpunk";
    background-color: black;
    color: var(--neonYellow);
    text-shadow: 2px 2px 7px rgba(0,240,255,0.95);
    font-size: 5rem;
    padding: 20px 0;
    margin: 0;
    width: 100%;
    text-align: center;
}

#content{
    width: 100%;
    background-color: var(--neonYellow);
}

.contact{
    width: 100%;
    width: -moz-available;          /* WebKit-based browsers will ignore this. */
    width: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */
}

.home{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.yellow_border{
    width: 100%;
    height: 20px;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    background-repeat: no-repeat;
    background-color: black;
    padding-bottom: 18px;
}

.loading_info{
    /* text-align: left; */
    position: relative;
    color: var(--neonYellow);
    bottom: -16px;
    padding-left: 10px;
    margin: 0;
}

#food, #drinks{
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: black; */
    /* color: var(--cyberwhite); */
}

.food_item{
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    color: var(--cyberwhite);
    clip-path: polygon(0 85%, 0% 0px, 100% 0, 100% 100%, 15% 100%);
    position: relative;
    background-color: var(--cyberRed);
    width: 450px;
    margin: 10px 0;
    padding: 20px;
    /* height: 90vmin; */
}

@media (max-width: 450px) {
    .food_item{
        width: 100vw;
    }

    .food_item .border{
        width: 95vw;
    }
}

.food_item img{
    /* background-color: black; */
    /* border: black solid 4px; */
    /* clip-path: polygon(1px 84%, 1% 1px, 99% 1px, 99% 99%, 14% 99%); */
}

.food_item .border{
    clip-path: polygon(0 85%, 0% 0px, 100% 0, 100% 100%, 15% 100%);
    background: black;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.food_description{
    padding: 0 5px 0 15%;
    margin: 0;
    text-align: right;
}
/* .cut_out{
    border-left: 24px solid var(--neonYellow);
    border-top: 24px solid transparent;
    bottom: 24px;
    display: block;
    height: 0px;
    position: absolute;
    width: 24px;
    z-index: 1;
} */

#map{
    height: 200px;
    width: 200px;
}

#contact_gallery{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
    grid-auto-rows: minmax(350px,1fr);
    align-items: stretch;
    gap: 15px;
    margin: 0 20px;
}

.contact_container{
    position: relative;
}

.contact_container img{
    background-color: var(--lightBlue);
    /* border: var(--lightBlue) solid 4px; */
    display: block;
    height: auto;
    width: 100%;
    object-fit: contain;
    overflow: hidden;
}

.overlay{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.88);
    overflow: hidden;
    width: 100%;
    height: 0;
    transition: .5s ease;
}
.overlay h4, .overlay p{
    text-align: center;
    color: var(--lightBlue);
    font-size: 3rem;
    font-family: "Blender";
}

.contact_container:hover > .overlay{
    height: 100%;
    outline: var(--lightBlue) solid 4px;
}

.top_seperator{
    background-image: linear-gradient(90deg,#000 28px,#fcee0a 0,
    #fcee0a calc(50% - 14px),#000 calc(50% - 14px),#000 calc(50% + 14px),
    #fcee0a calc(50% + 14px),#fcee0a calc(100% - 28px),#000 calc(100% - 28px),
    #000),linear-gradient(90deg,#000 2px,#fcee0a 0,#fcee0a calc(50% - 1px),
    #000 calc(50% - 1px),#000 calc(50% + 1px),#fcee0a calc(50% + 1px),
    #fcee0a calc(100% - 2px),#000 calc(100% - 2px),#000);
    background-repeat: no-repeat;
    background-size: 100% 2px,100% 28px;
    height: 28px;
    margin: 20px;
}

.bottom_seperator{
    background-image: linear-gradient(90deg,#000 2px,#fcee0a 0,#fcee0a calc(50% - 1px),
    #000 calc(50% - 1px),#000 calc(50% + 1px),#fcee0a calc(50% + 1px),
    #fcee0a calc(100% - 2px),#000 calc(100% - 2px),#000),
    linear-gradient(90deg,#000 28px,#fcee0a 0,#fcee0a calc(50% - 14px),#000 calc(50% - 14px),
    #000 calc(50% + 14px),#fcee0a calc(50% + 14px),#fcee0a calc(100% - 28px),#000 calc(100% - 28px),#000);
    background-repeat: no-repeat;
    background-size: 100% 26px,100% 28px;
    height: 28px;
    margin: 20px;
}

.cut_container{
    border-color: #fcee0a transparent transparent;
    border-style: solid;
    border-width: 17px 17px 0 0;
    height: 0px;
    width: 100px;
    /* position: absolute;
    top: 0; */
}

/* Want to add an svg after this */
.black_container{
    background-color: #000;
    height: 100px;
    width: 75vw;
}

.gallery_container{
    display: block;
    width: 100%;
    position: relative;
}

.myImg{
    height: 100px;
    width: 100px;
    background-color: red;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n    --lightBlue: #00F0FF;\n    --neonYellow: #fcee0a;\n    --cyberRed: #FC012A;\n    --cyberwhite: #fff;\n}\n\n@font-face {\n    font-family: \"Cyberpunk\";\n    src: url('./fonts/CyberwayRiders.ttf');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face{\n    font-family: \"Blender\";\n    src:url('./fonts/Blender-Pro-Book.otf');\n}\n\n@font-face{\n    font-family: \"Neon\";\n    src:url('./fonts/NEON.TTF');\n}\n\nbody{\n    margin: 0;\n    font-family: \"Blender\";\n    padding: 0;\n    background-color: black;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* width: 100vw; */\n}\n\nnav{\n    /* width: 100vw; */\n    height: 10vh;\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    z-index: 1;\n}\n\nnav button{\n    /* margin: 0 20px; */\n    font-family: \"Neon\";\n    height: 8vh;\n    width: 200px;\n    font-size: 2rem;\n    background-color: inherit;\n    color: var(--lightBlue);\n    filter: brightness(60%);\n    border: none;\n}\n\nnav button:hover{\n    filter: brightness(100%);\n    text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px var(--lightBlue), 0 0 30px var(--lightBlue), 0 0 40px var(--lightBlue), 0 0 55px var(--lightBlue), 0 0 75px var(--lightBlue);\n}\n\nh1{\n    font-family: \"Cyberpunk\";\n    background-color: black;\n    color: var(--neonYellow);\n    text-shadow: 2px 2px 7px rgba(0,240,255,0.95);\n    font-size: 5rem;\n    padding: 20px 0;\n    margin: 0;\n    width: 100%;\n    text-align: center;\n}\n\n#content{\n    width: 100%;\n    background-color: var(--neonYellow);\n}\n\n.contact{\n    width: 100%;\n    width: -moz-available;          /* WebKit-based browsers will ignore this. */\n    width: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */\n}\n\n.home{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.yellow_border{\n    width: 100%;\n    height: 20px;\n    background-image: url(\"./imgs/yellow_border.svg\");\n    background-repeat: no-repeat;\n    background-color: black;\n    padding-bottom: 18px;\n}\n\n.loading_info{\n    /* text-align: left; */\n    position: relative;\n    color: var(--neonYellow);\n    bottom: -16px;\n    padding-left: 10px;\n    margin: 0;\n}\n\n#food, #drinks{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* background-color: black; */\n    /* color: var(--cyberwhite); */\n}\n\n.food_item{\n    /* display: flex;\n    flex-direction: column;\n    align-items: center; */\n    color: var(--cyberwhite);\n    clip-path: polygon(0 85%, 0% 0px, 100% 0, 100% 100%, 15% 100%);\n    position: relative;\n    background-color: var(--cyberRed);\n    width: 450px;\n    margin: 10px 0;\n    padding: 20px;\n    /* height: 90vmin; */\n}\n\n@media (max-width: 450px) {\n    .food_item{\n        width: 100vw;\n    }\n\n    .food_item .border{\n        width: 95vw;\n    }\n}\n\n.food_item img{\n    /* background-color: black; */\n    /* border: black solid 4px; */\n    /* clip-path: polygon(1px 84%, 1% 1px, 99% 1px, 99% 99%, 14% 99%); */\n}\n\n.food_item .border{\n    clip-path: polygon(0 85%, 0% 0px, 100% 0, 100% 100%, 15% 100%);\n    background: black;\n    background-image: url(\"./imgs/dots-mobile.png\");\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.food_description{\n    padding: 0 5px 0 15%;\n    margin: 0;\n    text-align: right;\n}\n/* .cut_out{\n    border-left: 24px solid var(--neonYellow);\n    border-top: 24px solid transparent;\n    bottom: 24px;\n    display: block;\n    height: 0px;\n    position: absolute;\n    width: 24px;\n    z-index: 1;\n} */\n\n#map{\n    height: 200px;\n    width: 200px;\n}\n\n#contact_gallery{\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px,1fr));\n    grid-auto-rows: minmax(350px,1fr);\n    align-items: stretch;\n    gap: 15px;\n    margin: 0 20px;\n}\n\n.contact_container{\n    position: relative;\n}\n\n.contact_container img{\n    background-color: var(--lightBlue);\n    /* border: var(--lightBlue) solid 4px; */\n    display: block;\n    height: auto;\n    width: 100%;\n    object-fit: contain;\n    overflow: hidden;\n}\n\n.overlay{\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: rgba(0,0,0,0.88);\n    overflow: hidden;\n    width: 100%;\n    height: 0;\n    transition: .5s ease;\n}\n.overlay h4, .overlay p{\n    text-align: center;\n    color: var(--lightBlue);\n    font-size: 3rem;\n    font-family: \"Blender\";\n}\n\n.contact_container:hover > .overlay{\n    height: 100%;\n    outline: var(--lightBlue) solid 4px;\n}\n\n.top_seperator{\n    background-image: linear-gradient(90deg,#000 28px,#fcee0a 0,\n    #fcee0a calc(50% - 14px),#000 calc(50% - 14px),#000 calc(50% + 14px),\n    #fcee0a calc(50% + 14px),#fcee0a calc(100% - 28px),#000 calc(100% - 28px),\n    #000),linear-gradient(90deg,#000 2px,#fcee0a 0,#fcee0a calc(50% - 1px),\n    #000 calc(50% - 1px),#000 calc(50% + 1px),#fcee0a calc(50% + 1px),\n    #fcee0a calc(100% - 2px),#000 calc(100% - 2px),#000);\n    background-repeat: no-repeat;\n    background-size: 100% 2px,100% 28px;\n    height: 28px;\n    margin: 20px;\n}\n\n.bottom_seperator{\n    background-image: linear-gradient(90deg,#000 2px,#fcee0a 0,#fcee0a calc(50% - 1px),\n    #000 calc(50% - 1px),#000 calc(50% + 1px),#fcee0a calc(50% + 1px),\n    #fcee0a calc(100% - 2px),#000 calc(100% - 2px),#000),\n    linear-gradient(90deg,#000 28px,#fcee0a 0,#fcee0a calc(50% - 14px),#000 calc(50% - 14px),\n    #000 calc(50% + 14px),#fcee0a calc(50% + 14px),#fcee0a calc(100% - 28px),#000 calc(100% - 28px),#000);\n    background-repeat: no-repeat;\n    background-size: 100% 26px,100% 28px;\n    height: 28px;\n    margin: 20px;\n}\n\n.cut_container{\n    border-color: #fcee0a transparent transparent;\n    border-style: solid;\n    border-width: 17px 17px 0 0;\n    height: 0px;\n    width: 100px;\n    /* position: absolute;\n    top: 0; */\n}\n\n/* Want to add an svg after this */\n.black_container{\n    background-color: #000;\n    height: 100px;\n    width: 75vw;\n}\n\n.gallery_container{\n    display: block;\n    width: 100%;\n    position: relative;\n}\n\n.myImg{\n    height: 100px;\n    width: 100px;\n    background-color: red;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


const images = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.importAll)(__webpack_require__("./src/imgs/people sync \\.(png%7Cjpe?g%7Csvg%7Cwebp)$"));

const contactHTML = `
    <h1>Contact Us</h1>
    <div class="yellow_border">
        <p class="loading_info">Contact page loading...</p>
    </div>
    <div class="top_seperator"></div>
    <div id="contact_gallery">
        <div class="contact_container">
            <img src="${images['Johnny_Silverhand.webp']}" alt="Johnny Silverhand picture">
            <div class="overlay">
                <h4>Johnny SilverHand</h4>
                <p>- Blurb about Johnny</p>
            </div>
        </div>
        <div class="contact_container">
            <img src="${images['Judy_Alvarez.webp']}" alt="Judy Alvarez Picture">
            <div class="overlay">
                <h4>Judy Alverez</h4>
                <p>- Blurb about Judy</p>
            </div>
        </div>
        <div class="contact_container">
            <img src="${images['Rogue.webp']}" alt="Rogue Amendiares Picture">
            <div class="overlay">
                <h4>Rogue Amendiares</h4>
                <p>- Blurb about Rogue</p>
            </div>
        </div>
        <div class="contact_container">
            <img src="${images['ClaireRussell.webp']}" alt="Claire Russell Picture">
            <div class="overlay">
                <h4>Claire Russell</h4>
                <p>- Blurb about Claire</p>
            </div>
        </div>
    </div>
    <div class="bottom_seperator"></div>
`;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactHTML);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _imgs_yellow_border_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/yellow_border.svg */ "./src/imgs/yellow_border.svg");
/* harmony import */ var _imgs_location_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/location.png */ "./src/imgs/location.png");




const homeHTML = `
    <h1>Cyberpunk's</h1> 
    <div class="yellow_border">
        <p class="loading_info">Home page loading...</p>
    </div>
    <p id="intro">Hi choomba! Let me jack you into the deets on this joint. The ambiance at Cyberpunks is straight out of the Afterlife. You walk in, and it's like stepping into a slice of Night City itself. The nosh is to die for as well with the menu consisting of Night City's local cuisine. This is the kind of place where you'll create memories you'll want to wipe, just so you can experience it all over again. Cyberpunks has the Night City flavors you have been craving. Stay frosty, choomba!  
    <br>- Night city local</p>
    <div class="hours">
        <h2>Hours</h2>
        <p>Sunday: 10am - 10pm</p>
        <p>Monday: 12pm - 8pm</p>
        <p>Tuesday: 12pm - 8pm</p>
        <p>Wednesday: 12pm - 8pm</p>
        <p>Thursday: 12pm - 8pm</p>
        <p>Friday: 10am - 2am</p>
        <p>Saturday: 10am - 2am</p>

    </div>
    <div id="location_container">
        <h2>Location</h2>
        <p>52 Kuroshio Avenue, JapanTown, Northern California</p>
        <img id="map" src="${_imgs_location_png__WEBPACK_IMPORTED_MODULE_1__}" alt="Map showing the location of Cyberpunks">
    </div>
    <div>
        <div></div>
    </div>
    
    <!-- <div class="top_seperator"></div>
    <div class="bottom_seperator"></div>
    <div class="cut_container"></div>
    <div class="cut_container" style="width: 42px;"></div>
    <div class="black_container"></div>
    <div class="gallery_container">
        <span class= "gallery_item_arrow"></span>
        <div class="myImg"></div>
    </div>
    <img class=yellow_border src=${_imgs_yellow_border_svg__WEBPACK_IMPORTED_MODULE_0__} alt="Border Image"> -->
`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeHTML);

/***/ }),

/***/ "./src/imgs/food_and_drink sync \\.(png%7Cjpe?g%7Csvg%7Cwebp)$":
/*!**********************************************************************************!*\
  !*** ./src/imgs/food_and_drink/ sync nonrecursive \.(png%7Cjpe?g%7Csvg%7Cwebp)$ ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./artichoke_pizza.webp": "./src/imgs/food_and_drink/artichoke_pizza.webp",
	"./burrito.webp": "./src/imgs/food_and_drink/burrito.webp",
	"./david.webp": "./src/imgs/food_and_drink/david.webp",
	"./eezybeef.webp": "./src/imgs/food_and_drink/eezybeef.webp",
	"./fried_ants.webp": "./src/imgs/food_and_drink/fried_ants.webp",
	"./hawt_dawg.webp": "./src/imgs/food_and_drink/hawt_dawg.webp",
	"./johnny.webp": "./src/imgs/food_and_drink/johnny.webp",
	"./locust_pizza.webp": "./src/imgs/food_and_drink/locust_pizza.webp",
	"./nicola.webp": "./src/imgs/food_and_drink/nicola.webp",
	"./rammmmen.webp": "./src/imgs/food_and_drink/rammmmen.webp",
	"./realfruit.webp": "./src/imgs/food_and_drink/realfruit.webp",
	"./tofu_pizza.webp": "./src/imgs/food_and_drink/tofu_pizza.webp"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/imgs/food_and_drink sync \\.(png%7Cjpe?g%7Csvg%7Cwebp)$";

/***/ }),

/***/ "./src/imgs/people sync \\.(png%7Cjpe?g%7Csvg%7Cwebp)$":
/*!**************************************************************************!*\
  !*** ./src/imgs/people/ sync nonrecursive \.(png%7Cjpe?g%7Csvg%7Cwebp)$ ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ClaireRussell.webp": "./src/imgs/people/ClaireRussell.webp",
	"./Johnny_Silverhand.webp": "./src/imgs/people/Johnny_Silverhand.webp",
	"./Judy_Alvarez.webp": "./src/imgs/people/Judy_Alvarez.webp",
	"./Rogue.webp": "./src/imgs/people/Rogue.webp"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/imgs/people sync \\.(png%7Cjpe?g%7Csvg%7Cwebp)$";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   importAll: () => (/* binding */ importAll)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/home.js");





function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}


const content = document.getElementById("content");

const currentContent = document.createElement('div');

currentContent.innerHTML = _home__WEBPACK_IMPORTED_MODULE_3__["default"];
currentContent.classList.add("home");

content.appendChild(currentContent);

const nav = document.getElementById("nav_menu");
for(let link of nav.children){
    link.addEventListener('click', () => {
        // Want to stop from running if the user reclicks the same button
        // link.classList.remove("active");
        console.log("this is happening");
        content.removeChild(currentContent);
        currentContent.classList.remove("home");
        currentContent.classList.remove("contact");
        currentContent.classList.remove("menu");
        switch (link.id){
            case "home":
                currentContent.innerHTML = _home__WEBPACK_IMPORTED_MODULE_3__["default"];
                currentContent.classList.add("home");
                // link.classList.add("active");
                break;
            case "menu":
                currentContent.innerHTML = _menu__WEBPACK_IMPORTED_MODULE_1__["default"];
                currentContent.classList.add("menu");
                // link.classList.add("active");
                break;
            case "contact":
                currentContent.innerHTML = _contact__WEBPACK_IMPORTED_MODULE_2__["default"];
                currentContent.classList.add("contact");
                // link.classList.add("active");
                break;
        }
        content.appendChild(currentContent);     
    });
}




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


const images = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.importAll)(__webpack_require__("./src/imgs/food_and_drink sync \\.(png%7Cjpe?g%7Csvg%7Cwebp)$"));
const menuHTML = `
<h1>Menu</h1>
<div class="yellow_border">
    <p class="loading_info"> Menu loading...</p>
</div>
    <div id="drinks">
        <h2>Drinks</h2>
        <h3>AfterLife</h3>
        <div class="food_item">
            <div class="border">
                <p><strong>Johnny SilverHand</strong></p>
                <img src="${images['johnny.webp']}" alt="Johnny Silverhand drink">
                <p class="food_description">- A tequila old fashioned with a splash of beer and a chili garnish. For the rockerboy who never gave up.</p>
            </div>
        </div>
        <div class="food_item">
            <div class="border">
                <p>David Martinez</p>
                <img src="${images['david.webp']}" alt="David Martinez drink">
                <p class="food_description">- A shot of vodka on the rocks, topped with Nicola. Aim high and go out with a bang</p>
            </div>
        </div>
        <div class="food_item">
            <div class="border">
                <p>NiCola</p>
                <img src="${images['nicola.webp']}" alt="NiCola picture">
                <p class="food_description">- America's favorite drink!</p>
            </div>
        </div>
    </div>
    <div id="food">
        <h2>Food</h2>
        <h3>Buck-a-Slice</h3>
        <div class="food_item">
            <div class="border">
                <p>Artichoke ‘N’ Avocado Pizza</p>
                <img src="${images['artichoke_pizza.webp']}" alt="Artichoke ‘N’ Avocado Pizza">
                <p class="food_description">- Topping it to the next level</p>
            </div>
        </div>
        <div class="food_item">
            <div class="border">
                <p>Tofu’d Tuna and Pineapple Pizza</p>
                <img src="${images['tofu_pizza.webp']}" alt="Tofu’d Tuna and Pineapple Pizza">
                <p class="food_description">- Vegans can’t get enough of it</p>
            </div>
        </div>
        <div class="food_item">
            <div class="border">
                <p>Locust Pepperoni Pizza</p>
                <img src="${images['locust_pizza.webp']}" alt="Locust Pepperoni Pizza">
                <p class="food_description">- It’ll swarm your taste buds!</p>
            </div>
        </div>
        <h3>Other</h3>
        <div class="food_item">
            <div class="border">
                <p>Eezybeef<p>
                <img src="${images['eezybeef.webp']}" alt="Eezybeef picture. Looks kinda gross">
                <p class="food_description">Synthetic meat - you’re in for a treat!</p>
            </div>
        </div>
        <div class="food_item">
            <div class="border">
                <p>Hawt Dawg<p>
                <img src="${images['hawt_dawg.webp']}" alt="Hawt Dawg picture">
                <p class="food_description">The thickest dogs and tightest buns in town!</p>
            </div>      
        </div>
        <div class="food_item">
            <div class="border">
                <p>RealFruit<p>
                <img src="${images['realfruit.webp']}" alt="RealFruit picture">
                <p class="food_description">It's not marketing. It's real.</p>
            </div>
        </div>
        <div class="food_item">
            <div class="border">
                <p>Rammmmen<p>
                <img src="${images['rammmmen.webp']}" alt="Rammmen Picture. Looks like rammen">
                <p class="food_description">Brand new recipe! 3X more MSG!</p>
            </div>
        </div>
        <div class="food_item">
            <div class="border">
                <p>Shwabshwab (Fried Ants) Ketchup<p>
                <img src="${images['fried_ants.webp']}" alt="Fried Ants picture">
                <p class="food_description">Your favorite food flavored with your second favorite food</p>
            </div>
        </div>
    </div>
`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuHTML);


/***/ }),

/***/ "./src/fonts/Blender-Pro-Book.otf":
/*!****************************************!*\
  !*** ./src/fonts/Blender-Pro-Book.otf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4b509de2d308bfa477c5.otf";

/***/ }),

/***/ "./src/fonts/CyberwayRiders.ttf":
/*!**************************************!*\
  !*** ./src/fonts/CyberwayRiders.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a5eed877f3e56aea68a0.ttf";

/***/ }),

/***/ "./src/fonts/NEON.TTF":
/*!****************************!*\
  !*** ./src/fonts/NEON.TTF ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b0f581c427424c101e20.TTF";

/***/ }),

/***/ "./src/imgs/dots-mobile.png":
/*!**********************************!*\
  !*** ./src/imgs/dots-mobile.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a7bd055aef2bf78e34cc.png";

/***/ }),

/***/ "./src/imgs/food_and_drink/artichoke_pizza.webp":
/*!******************************************************!*\
  !*** ./src/imgs/food_and_drink/artichoke_pizza.webp ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "78266296f844c76aeb0d.webp";

/***/ }),

/***/ "./src/imgs/food_and_drink/burrito.webp":
/*!**********************************************!*\
  !*** ./src/imgs/food_and_drink/burrito.webp ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1be83d1c20f1ad24dd5e.webp";

/***/ }),

/***/ "./src/imgs/food_and_drink/david.webp":
/*!********************************************!*\
  !*** ./src/imgs/food_and_drink/david.webp ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c3932e8e0a5f73cf85c8.webp";

/***/ }),

/***/ "./src/imgs/food_and_drink/eezybeef.webp":
/*!***********************************************!*\
  !*** ./src/imgs/food_and_drink/eezybeef.webp ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6eed920a15a4f4a06361.webp";

/***/ }),

/***/ "./src/imgs/food_and_drink/fried_ants.webp":
/*!*************************************************!*\
  !*** ./src/imgs/food_and_drink/fried_ants.webp ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "048f52f18f3bb5b80936.webp";

/***/ }),

/***/ "./src/imgs/food_and_drink/hawt_dawg.webp":
/*!************************************************!*\
  !*** ./src/imgs/food_and_drink/hawt_dawg.webp ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5dd58f0a036d7abc20a9.webp";

/***/ }),

/***/ "./src/imgs/food_and_drink/johnny.webp":
/*!*********************************************!*\
  !*** ./src/imgs/food_and_drink/johnny.webp ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "892f7ab41a0a365d2aaf.webp";

/***/ }),

/***/ "./src/imgs/food_and_drink/locust_pizza.webp":
/*!***************************************************!*\
  !*** ./src/imgs/food_and_drink/locust_pizza.webp ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7f70d3afc301d917a79a.webp";

/***/ }),

/***/ "./src/imgs/food_and_drink/nicola.webp":
/*!*********************************************!*\
  !*** ./src/imgs/food_and_drink/nicola.webp ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a629d756d524c45d1585.webp";

/***/ }),

/***/ "./src/imgs/food_and_drink/rammmmen.webp":
/*!***********************************************!*\
  !*** ./src/imgs/food_and_drink/rammmmen.webp ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1bf9d64e728ee8759798.webp";

/***/ }),

/***/ "./src/imgs/food_and_drink/realfruit.webp":
/*!************************************************!*\
  !*** ./src/imgs/food_and_drink/realfruit.webp ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8be0b4211bcfefd34703.webp";

/***/ }),

/***/ "./src/imgs/food_and_drink/tofu_pizza.webp":
/*!*************************************************!*\
  !*** ./src/imgs/food_and_drink/tofu_pizza.webp ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "be89b9e9ead4f675b4c6.webp";

/***/ }),

/***/ "./src/imgs/location.png":
/*!*******************************!*\
  !*** ./src/imgs/location.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "944aa8f51ed32e586885.png";

/***/ }),

/***/ "./src/imgs/people/ClaireRussell.webp":
/*!********************************************!*\
  !*** ./src/imgs/people/ClaireRussell.webp ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4429bcb7a0d5269423a4.webp";

/***/ }),

/***/ "./src/imgs/people/Johnny_Silverhand.webp":
/*!************************************************!*\
  !*** ./src/imgs/people/Johnny_Silverhand.webp ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "57873399284c9843a673.webp";

/***/ }),

/***/ "./src/imgs/people/Judy_Alvarez.webp":
/*!*******************************************!*\
  !*** ./src/imgs/people/Judy_Alvarez.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "259c3871c52a024a49c5.webp";

/***/ }),

/***/ "./src/imgs/people/Rogue.webp":
/*!************************************!*\
  !*** ./src/imgs/people/Rogue.webp ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9fa1a33650013b96be1c.webp";

/***/ }),

/***/ "./src/imgs/yellow_border.svg":
/*!************************************!*\
  !*** ./src/imgs/yellow_border.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fbac7d2eda00a106400b.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLHdCQUF3Qix5QkFBeUIsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssTUFBTSxPQUFPLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2hHeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbWdzL2Zvb2RfYW5kX2RyaW5rLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nJTdDanBlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbWdzL3Blb3BsZS8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZyU3Q2pwZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvQ3liZXJ3YXlSaWRlcnMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9CbGVuZGVyLVByby1Cb29rLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vZm9udHMvTkVPTi5UVEZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ltZ3MveWVsbG93X2JvcmRlci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2ltZ3MvZG90cy1tb2JpbGUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3R7XG4gICAgLS1saWdodEJsdWU6ICMwMEYwRkY7XG4gICAgLS1uZW9uWWVsbG93OiAjZmNlZTBhO1xuICAgIC0tY3liZXJSZWQ6ICNGQzAxMkE7XG4gICAgLS1jeWJlcndoaXRlOiAjZmZmO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJDeWJlcnB1bmtcIjtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZXtcbiAgICBmb250LWZhbWlseTogXCJCbGVuZGVyXCI7XG4gICAgc3JjOnVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuQGZvbnQtZmFjZXtcbiAgICBmb250LWZhbWlseTogXCJOZW9uXCI7XG4gICAgc3JjOnVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbn1cblxuYm9keXtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1mYW1pbHk6IFwiQmxlbmRlclwiO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLyogd2lkdGg6IDEwMHZ3OyAqL1xufVxuXG5uYXZ7XG4gICAgLyogd2lkdGg6IDEwMHZ3OyAqL1xuICAgIGhlaWdodDogMTB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgei1pbmRleDogMTtcbn1cblxubmF2IGJ1dHRvbntcbiAgICAvKiBtYXJnaW46IDAgMjBweDsgKi9cbiAgICBmb250LWZhbWlseTogXCJOZW9uXCI7XG4gICAgaGVpZ2h0OiA4dmg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIGNvbG9yOiB2YXIoLS1saWdodEJsdWUpO1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg2MCUpO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxubmF2IGJ1dHRvbjpob3ZlcntcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggI0ZGRiwgMCAwIDEwcHggI0ZGRiwgMCAwIDE1cHggI0ZGRiwgMCAwIDIwcHggdmFyKC0tbGlnaHRCbHVlKSwgMCAwIDMwcHggdmFyKC0tbGlnaHRCbHVlKSwgMCAwIDQwcHggdmFyKC0tbGlnaHRCbHVlKSwgMCAwIDU1cHggdmFyKC0tbGlnaHRCbHVlKSwgMCAwIDc1cHggdmFyKC0tbGlnaHRCbHVlKTtcbn1cblxuaDF7XG4gICAgZm9udC1mYW1pbHk6IFwiQ3liZXJwdW5rXCI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHZhcigtLW5lb25ZZWxsb3cpO1xuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDdweCByZ2JhKDAsMjQwLDI1NSwwLjk1KTtcbiAgICBmb250LXNpemU6IDVyZW07XG4gICAgcGFkZGluZzogMjBweCAwO1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjb250ZW50e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5lb25ZZWxsb3cpO1xufVxuXG4uY29udGFjdHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB3aWR0aDogLW1vei1hdmFpbGFibGU7ICAgICAgICAgIC8qIFdlYktpdC1iYXNlZCBicm93c2VycyB3aWxsIGlnbm9yZSB0aGlzLiAqL1xuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlOyAgLyogTW96aWxsYS1iYXNlZCBicm93c2VycyB3aWxsIGlnbm9yZSB0aGlzLiAqL1xufVxuXG4uaG9tZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnllbGxvd19ib3JkZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmctYm90dG9tOiAxOHB4O1xufVxuXG4ubG9hZGluZ19pbmZve1xuICAgIC8qIHRleHQtYWxpZ246IGxlZnQ7ICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGNvbG9yOiB2YXIoLS1uZW9uWWVsbG93KTtcbiAgICBib3R0b206IC0xNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBtYXJnaW46IDA7XG59XG5cbiNmb29kLCAjZHJpbmtze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xuICAgIC8qIGNvbG9yOiB2YXIoLS1jeWJlcndoaXRlKTsgKi9cbn1cblxuLmZvb2RfaXRlbXtcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cbiAgICBjb2xvcjogdmFyKC0tY3liZXJ3aGl0ZSk7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgODUlLCAwJSAwcHgsIDEwMCUgMCwgMTAwJSAxMDAlLCAxNSUgMTAwJSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YmVyUmVkKTtcbiAgICB3aWR0aDogNDUwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICAvKiBoZWlnaHQ6IDkwdm1pbjsgKi9cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICAgLmZvb2RfaXRlbXtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgIH1cblxuICAgIC5mb29kX2l0ZW0gLmJvcmRlcntcbiAgICAgICAgd2lkdGg6IDk1dnc7XG4gICAgfVxufVxuXG4uZm9vZF9pdGVtIGltZ3tcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cbiAgICAvKiBib3JkZXI6IGJsYWNrIHNvbGlkIDRweDsgKi9cbiAgICAvKiBjbGlwLXBhdGg6IHBvbHlnb24oMXB4IDg0JSwgMSUgMXB4LCA5OSUgMXB4LCA5OSUgOTklLCAxNCUgOTklKTsgKi9cbn1cblxuLmZvb2RfaXRlbSAuYm9yZGVye1xuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDg1JSwgMCUgMHB4LCAxMDAlIDAsIDEwMCUgMTAwJSwgMTUlIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb29kX2Rlc2NyaXB0aW9ue1xuICAgIHBhZGRpbmc6IDAgNXB4IDAgMTUlO1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi8qIC5jdXRfb3V0e1xuICAgIGJvcmRlci1sZWZ0OiAyNHB4IHNvbGlkIHZhcigtLW5lb25ZZWxsb3cpO1xuICAgIGJvcmRlci10b3A6IDI0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm90dG9tOiAyNHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjRweDtcbiAgICB6LWluZGV4OiAxO1xufSAqL1xuXG4jbWFwe1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xufVxuXG4jY29udGFjdF9nYWxsZXJ5e1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwxZnIpKTtcbiAgICBncmlkLWF1dG8tcm93czogbWlubWF4KDM1MHB4LDFmcik7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZ2FwOiAxNXB4O1xuICAgIG1hcmdpbjogMCAyMHB4O1xufVxuXG4uY29udGFjdF9jb250YWluZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY29udGFjdF9jb250YWluZXIgaW1ne1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Qmx1ZSk7XG4gICAgLyogYm9yZGVyOiB2YXIoLS1saWdodEJsdWUpIHNvbGlkIDRweDsgKi9cbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ub3ZlcmxheXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjg4KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMDtcbiAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcbn1cbi5vdmVybGF5IGg0LCAub3ZlcmxheSBwe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRCbHVlKTtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgZm9udC1mYW1pbHk6IFwiQmxlbmRlclwiO1xufVxuXG4uY29udGFjdF9jb250YWluZXI6aG92ZXIgPiAub3ZlcmxheXtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3V0bGluZTogdmFyKC0tbGlnaHRCbHVlKSBzb2xpZCA0cHg7XG59XG5cbi50b3Bfc2VwZXJhdG9ye1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywjMDAwIDI4cHgsI2ZjZWUwYSAwLFxuICAgICNmY2VlMGEgY2FsYyg1MCUgLSAxNHB4KSwjMDAwIGNhbGMoNTAlIC0gMTRweCksIzAwMCBjYWxjKDUwJSArIDE0cHgpLFxuICAgICNmY2VlMGEgY2FsYyg1MCUgKyAxNHB4KSwjZmNlZTBhIGNhbGMoMTAwJSAtIDI4cHgpLCMwMDAgY2FsYygxMDAlIC0gMjhweCksXG4gICAgIzAwMCksbGluZWFyLWdyYWRpZW50KDkwZGVnLCMwMDAgMnB4LCNmY2VlMGEgMCwjZmNlZTBhIGNhbGMoNTAlIC0gMXB4KSxcbiAgICAjMDAwIGNhbGMoNTAlIC0gMXB4KSwjMDAwIGNhbGMoNTAlICsgMXB4KSwjZmNlZTBhIGNhbGMoNTAlICsgMXB4KSxcbiAgICAjZmNlZTBhIGNhbGMoMTAwJSAtIDJweCksIzAwMCBjYWxjKDEwMCUgLSAycHgpLCMwMDApO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDJweCwxMDAlIDI4cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIG1hcmdpbjogMjBweDtcbn1cblxuLmJvdHRvbV9zZXBlcmF0b3J7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCMwMDAgMnB4LCNmY2VlMGEgMCwjZmNlZTBhIGNhbGMoNTAlIC0gMXB4KSxcbiAgICAjMDAwIGNhbGMoNTAlIC0gMXB4KSwjMDAwIGNhbGMoNTAlICsgMXB4KSwjZmNlZTBhIGNhbGMoNTAlICsgMXB4KSxcbiAgICAjZmNlZTBhIGNhbGMoMTAwJSAtIDJweCksIzAwMCBjYWxjKDEwMCUgLSAycHgpLCMwMDApLFxuICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywjMDAwIDI4cHgsI2ZjZWUwYSAwLCNmY2VlMGEgY2FsYyg1MCUgLSAxNHB4KSwjMDAwIGNhbGMoNTAlIC0gMTRweCksXG4gICAgIzAwMCBjYWxjKDUwJSArIDE0cHgpLCNmY2VlMGEgY2FsYyg1MCUgKyAxNHB4KSwjZmNlZTBhIGNhbGMoMTAwJSAtIDI4cHgpLCMwMDAgY2FsYygxMDAlIC0gMjhweCksIzAwMCk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMjZweCwxMDAlIDI4cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIG1hcmdpbjogMjBweDtcbn1cblxuLmN1dF9jb250YWluZXJ7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmNlZTBhIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxN3B4IDE3cHggMCAwO1xuICAgIGhlaWdodDogMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwOyAqL1xufVxuXG4vKiBXYW50IHRvIGFkZCBhbiBzdmcgYWZ0ZXIgdGhpcyAqL1xuLmJsYWNrX2NvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDc1dnc7XG59XG5cbi5nYWxsZXJ5X2NvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5teUltZ3tcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDRDQUFzQztJQUN0QyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDJDQUF1QztBQUMzQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiwyQ0FBMkI7QUFDL0I7O0FBRUE7SUFDSSxTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHNC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V0FBVztJQUNYLFlBQVk7SUFDWjthQUNTO0FBQ2I7O0FBRUEsa0NBQWtDO0FBQ2xDO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcbiAgICAtLWxpZ2h0Qmx1ZTogIzAwRjBGRjtcXG4gICAgLS1uZW9uWWVsbG93OiAjZmNlZTBhO1xcbiAgICAtLWN5YmVyUmVkOiAjRkMwMTJBO1xcbiAgICAtLWN5YmVyd2hpdGU6ICNmZmY7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIkN5YmVycHVua1xcXCI7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL0N5YmVyd2F5UmlkZXJzLnR0ZicpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2V7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQmxlbmRlclxcXCI7XFxuICAgIHNyYzp1cmwoJy4vZm9udHMvQmxlbmRlci1Qcm8tQm9vay5vdGYnKTtcXG59XFxuXFxuQGZvbnQtZmFjZXtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJOZW9uXFxcIjtcXG4gICAgc3JjOnVybCgnLi9mb250cy9ORU9OLlRURicpO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQmxlbmRlclxcXCI7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvKiB3aWR0aDogMTAwdnc7ICovXFxufVxcblxcbm5hdntcXG4gICAgLyogd2lkdGg6IDEwMHZ3OyAqL1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG5uYXYgYnV0dG9ue1xcbiAgICAvKiBtYXJnaW46IDAgMjBweDsgKi9cXG4gICAgZm9udC1mYW1pbHk6IFxcXCJOZW9uXFxcIjtcXG4gICAgaGVpZ2h0OiA4dmg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRCbHVlKTtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDYwJSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxubmF2IGJ1dHRvbjpob3ZlcntcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEwMCUpO1xcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjRkZGLCAwIDAgMTBweCAjRkZGLCAwIDAgMTVweCAjRkZGLCAwIDAgMjBweCB2YXIoLS1saWdodEJsdWUpLCAwIDAgMzBweCB2YXIoLS1saWdodEJsdWUpLCAwIDAgNDBweCB2YXIoLS1saWdodEJsdWUpLCAwIDAgNTVweCB2YXIoLS1saWdodEJsdWUpLCAwIDAgNzVweCB2YXIoLS1saWdodEJsdWUpO1xcbn1cXG5cXG5oMXtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDeWJlcnB1bmtcXFwiO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHZhcigtLW5lb25ZZWxsb3cpO1xcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA3cHggcmdiYSgwLDI0MCwyNTUsMC45NSk7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgcGFkZGluZzogMjBweCAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjb250ZW50e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmVvblllbGxvdyk7XFxufVxcblxcbi5jb250YWN0e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgd2lkdGg6IC1tb3otYXZhaWxhYmxlOyAgICAgICAgICAvKiBXZWJLaXQtYmFzZWQgYnJvd3NlcnMgd2lsbCBpZ25vcmUgdGhpcy4gKi9cXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7ICAvKiBNb3ppbGxhLWJhc2VkIGJyb3dzZXJzIHdpbGwgaWdub3JlIHRoaXMuICovXFxufVxcblxcbi5ob21le1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ueWVsbG93X2JvcmRlcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltZ3MveWVsbG93X2JvcmRlci5zdmdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxOHB4O1xcbn1cXG5cXG4ubG9hZGluZ19pbmZve1xcbiAgICAvKiB0ZXh0LWFsaWduOiBsZWZ0OyAqL1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGNvbG9yOiB2YXIoLS1uZW9uWWVsbG93KTtcXG4gICAgYm90dG9tOiAtMTZweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiNmb29kLCAjZHJpbmtze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cXG4gICAgLyogY29sb3I6IHZhcigtLWN5YmVyd2hpdGUpOyAqL1xcbn1cXG5cXG4uZm9vZF9pdGVte1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgICBjb2xvcjogdmFyKC0tY3liZXJ3aGl0ZSk7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDg1JSwgMCUgMHB4LCAxMDAlIDAsIDEwMCUgMTAwJSwgMTUlIDEwMCUpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YmVyUmVkKTtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgLyogaGVpZ2h0OiA5MHZtaW47ICovXFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xcbiAgICAuZm9vZF9pdGVte1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICB9XFxuXFxuICAgIC5mb29kX2l0ZW0gLmJvcmRlcntcXG4gICAgICAgIHdpZHRoOiA5NXZ3O1xcbiAgICB9XFxufVxcblxcbi5mb29kX2l0ZW0gaW1ne1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cXG4gICAgLyogYm9yZGVyOiBibGFjayBzb2xpZCA0cHg7ICovXFxuICAgIC8qIGNsaXAtcGF0aDogcG9seWdvbigxcHggODQlLCAxJSAxcHgsIDk5JSAxcHgsIDk5JSA5OSUsIDE0JSA5OSUpOyAqL1xcbn1cXG5cXG4uZm9vZF9pdGVtIC5ib3JkZXJ7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDg1JSwgMCUgMHB4LCAxMDAlIDAsIDEwMCUgMTAwJSwgMTUlIDEwMCUpO1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltZ3MvZG90cy1tb2JpbGUucG5nXFxcIik7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvb2RfZGVzY3JpcHRpb257XFxuICAgIHBhZGRpbmc6IDAgNXB4IDAgMTUlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG4vKiAuY3V0X291dHtcXG4gICAgYm9yZGVyLWxlZnQ6IDI0cHggc29saWQgdmFyKC0tbmVvblllbGxvdyk7XFxuICAgIGJvcmRlci10b3A6IDI0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvdHRvbTogMjRweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICB6LWluZGV4OiAxO1xcbn0gKi9cXG5cXG4jbWFwe1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbiNjb250YWN0X2dhbGxlcnl7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsMWZyKSk7XFxuICAgIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMzUwcHgsMWZyKTtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIGdhcDogMTVweDtcXG4gICAgbWFyZ2luOiAwIDIwcHg7XFxufVxcblxcbi5jb250YWN0X2NvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY29udGFjdF9jb250YWluZXIgaW1ne1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEJsdWUpO1xcbiAgICAvKiBib3JkZXI6IHZhcigtLWxpZ2h0Qmx1ZSkgc29saWQgNHB4OyAqL1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLm92ZXJsYXl7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjg4KTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMDtcXG4gICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XFxufVxcbi5vdmVybGF5IGg0LCAub3ZlcmxheSBwe1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodEJsdWUpO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQmxlbmRlclxcXCI7XFxufVxcblxcbi5jb250YWN0X2NvbnRhaW5lcjpob3ZlciA+IC5vdmVybGF5e1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG91dGxpbmU6IHZhcigtLWxpZ2h0Qmx1ZSkgc29saWQgNHB4O1xcbn1cXG5cXG4udG9wX3NlcGVyYXRvcntcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCMwMDAgMjhweCwjZmNlZTBhIDAsXFxuICAgICNmY2VlMGEgY2FsYyg1MCUgLSAxNHB4KSwjMDAwIGNhbGMoNTAlIC0gMTRweCksIzAwMCBjYWxjKDUwJSArIDE0cHgpLFxcbiAgICAjZmNlZTBhIGNhbGMoNTAlICsgMTRweCksI2ZjZWUwYSBjYWxjKDEwMCUgLSAyOHB4KSwjMDAwIGNhbGMoMTAwJSAtIDI4cHgpLFxcbiAgICAjMDAwKSxsaW5lYXItZ3JhZGllbnQoOTBkZWcsIzAwMCAycHgsI2ZjZWUwYSAwLCNmY2VlMGEgY2FsYyg1MCUgLSAxcHgpLFxcbiAgICAjMDAwIGNhbGMoNTAlIC0gMXB4KSwjMDAwIGNhbGMoNTAlICsgMXB4KSwjZmNlZTBhIGNhbGMoNTAlICsgMXB4KSxcXG4gICAgI2ZjZWUwYSBjYWxjKDEwMCUgLSAycHgpLCMwMDAgY2FsYygxMDAlIC0gMnB4KSwjMDAwKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDJweCwxMDAlIDI4cHg7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4uYm90dG9tX3NlcGVyYXRvcntcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCMwMDAgMnB4LCNmY2VlMGEgMCwjZmNlZTBhIGNhbGMoNTAlIC0gMXB4KSxcXG4gICAgIzAwMCBjYWxjKDUwJSAtIDFweCksIzAwMCBjYWxjKDUwJSArIDFweCksI2ZjZWUwYSBjYWxjKDUwJSArIDFweCksXFxuICAgICNmY2VlMGEgY2FsYygxMDAlIC0gMnB4KSwjMDAwIGNhbGMoMTAwJSAtIDJweCksIzAwMCksXFxuICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywjMDAwIDI4cHgsI2ZjZWUwYSAwLCNmY2VlMGEgY2FsYyg1MCUgLSAxNHB4KSwjMDAwIGNhbGMoNTAlIC0gMTRweCksXFxuICAgICMwMDAgY2FsYyg1MCUgKyAxNHB4KSwjZmNlZTBhIGNhbGMoNTAlICsgMTRweCksI2ZjZWUwYSBjYWxjKDEwMCUgLSAyOHB4KSwjMDAwIGNhbGMoMTAwJSAtIDI4cHgpLCMwMDApO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMjZweCwxMDAlIDI4cHg7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4uY3V0X2NvbnRhaW5lcntcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmNlZTBhIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDE3cHggMTdweCAwIDA7XFxuICAgIGhlaWdodDogMHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwOyAqL1xcbn1cXG5cXG4vKiBXYW50IHRvIGFkZCBhbiBzdmcgYWZ0ZXIgdGhpcyAqL1xcbi5ibGFja19jb250YWluZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHdpZHRoOiA3NXZ3O1xcbn1cXG5cXG4uZ2FsbGVyeV9jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubXlJbWd7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7aW1wb3J0QWxsfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5jb25zdCBpbWFnZXMgPSBpbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuL2ltZ3MvcGVvcGxlJywgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2Z3x3ZWJwKSQvKSk7XG5cbmNvbnN0IGNvbnRhY3RIVE1MID0gYFxuICAgIDxoMT5Db250YWN0IFVzPC9oMT5cbiAgICA8ZGl2IGNsYXNzPVwieWVsbG93X2JvcmRlclwiPlxuICAgICAgICA8cCBjbGFzcz1cImxvYWRpbmdfaW5mb1wiPkNvbnRhY3QgcGFnZSBsb2FkaW5nLi4uPC9wPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0b3Bfc2VwZXJhdG9yXCI+PC9kaXY+XG4gICAgPGRpdiBpZD1cImNvbnRhY3RfZ2FsbGVyeVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdF9jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZXNbJ0pvaG5ueV9TaWx2ZXJoYW5kLndlYnAnXX1cIiBhbHQ9XCJKb2hubnkgU2lsdmVyaGFuZCBwaWN0dXJlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgICAgIDxoND5Kb2hubnkgU2lsdmVySGFuZDwvaDQ+XG4gICAgICAgICAgICAgICAgPHA+LSBCbHVyYiBhYm91dCBKb2hubnk8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0X2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlc1snSnVkeV9BbHZhcmV6LndlYnAnXX1cIiBhbHQ9XCJKdWR5IEFsdmFyZXogUGljdHVyZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXlcIj5cbiAgICAgICAgICAgICAgICA8aDQ+SnVkeSBBbHZlcmV6PC9oND5cbiAgICAgICAgICAgICAgICA8cD4tIEJsdXJiIGFib3V0IEp1ZHk8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0X2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlc1snUm9ndWUud2VicCddfVwiIGFsdD1cIlJvZ3VlIEFtZW5kaWFyZXMgUGljdHVyZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXlcIj5cbiAgICAgICAgICAgICAgICA8aDQ+Um9ndWUgQW1lbmRpYXJlczwvaDQ+XG4gICAgICAgICAgICAgICAgPHA+LSBCbHVyYiBhYm91dCBSb2d1ZTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3RfY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2VzWydDbGFpcmVSdXNzZWxsLndlYnAnXX1cIiBhbHQ9XCJDbGFpcmUgUnVzc2VsbCBQaWN0dXJlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgICAgIDxoND5DbGFpcmUgUnVzc2VsbDwvaDQ+XG4gICAgICAgICAgICAgICAgPHA+LSBCbHVyYiBhYm91dCBDbGFpcmU8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImJvdHRvbV9zZXBlcmF0b3JcIj48L2Rpdj5cbmA7XG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdEhUTUw7IiwiaW1wb3J0IHllbGxvd0JvcmRlciBmcm9tICcuL2ltZ3MveWVsbG93X2JvcmRlci5zdmcnO1xuaW1wb3J0IGxvY2F0aW9uIGZyb20gJy4vaW1ncy9sb2NhdGlvbi5wbmcnO1xuXG5cbmNvbnN0IGhvbWVIVE1MID0gYFxuICAgIDxoMT5DeWJlcnB1bmsnczwvaDE+IFxuICAgIDxkaXYgY2xhc3M9XCJ5ZWxsb3dfYm9yZGVyXCI+XG4gICAgICAgIDxwIGNsYXNzPVwibG9hZGluZ19pbmZvXCI+SG9tZSBwYWdlIGxvYWRpbmcuLi48L3A+XG4gICAgPC9kaXY+XG4gICAgPHAgaWQ9XCJpbnRyb1wiPkhpIGNob29tYmEhIExldCBtZSBqYWNrIHlvdSBpbnRvIHRoZSBkZWV0cyBvbiB0aGlzIGpvaW50LiBUaGUgYW1iaWFuY2UgYXQgQ3liZXJwdW5rcyBpcyBzdHJhaWdodCBvdXQgb2YgdGhlIEFmdGVybGlmZS4gWW91IHdhbGsgaW4sIGFuZCBpdCdzIGxpa2Ugc3RlcHBpbmcgaW50byBhIHNsaWNlIG9mIE5pZ2h0IENpdHkgaXRzZWxmLiBUaGUgbm9zaCBpcyB0byBkaWUgZm9yIGFzIHdlbGwgd2l0aCB0aGUgbWVudSBjb25zaXN0aW5nIG9mIE5pZ2h0IENpdHkncyBsb2NhbCBjdWlzaW5lLiBUaGlzIGlzIHRoZSBraW5kIG9mIHBsYWNlIHdoZXJlIHlvdSdsbCBjcmVhdGUgbWVtb3JpZXMgeW91J2xsIHdhbnQgdG8gd2lwZSwganVzdCBzbyB5b3UgY2FuIGV4cGVyaWVuY2UgaXQgYWxsIG92ZXIgYWdhaW4uIEN5YmVycHVua3MgaGFzIHRoZSBOaWdodCBDaXR5IGZsYXZvcnMgeW91IGhhdmUgYmVlbiBjcmF2aW5nLiBTdGF5IGZyb3N0eSwgY2hvb21iYSEgIFxuICAgIDxicj4tIE5pZ2h0IGNpdHkgbG9jYWw8L3A+XG4gICAgPGRpdiBjbGFzcz1cImhvdXJzXCI+XG4gICAgICAgIDxoMj5Ib3VyczwvaDI+XG4gICAgICAgIDxwPlN1bmRheTogMTBhbSAtIDEwcG08L3A+XG4gICAgICAgIDxwPk1vbmRheTogMTJwbSAtIDhwbTwvcD5cbiAgICAgICAgPHA+VHVlc2RheTogMTJwbSAtIDhwbTwvcD5cbiAgICAgICAgPHA+V2VkbmVzZGF5OiAxMnBtIC0gOHBtPC9wPlxuICAgICAgICA8cD5UaHVyc2RheTogMTJwbSAtIDhwbTwvcD5cbiAgICAgICAgPHA+RnJpZGF5OiAxMGFtIC0gMmFtPC9wPlxuICAgICAgICA8cD5TYXR1cmRheTogMTBhbSAtIDJhbTwvcD5cblxuICAgIDwvZGl2PlxuICAgIDxkaXYgaWQ9XCJsb2NhdGlvbl9jb250YWluZXJcIj5cbiAgICAgICAgPGgyPkxvY2F0aW9uPC9oMj5cbiAgICAgICAgPHA+NTIgS3Vyb3NoaW8gQXZlbnVlLCBKYXBhblRvd24sIE5vcnRoZXJuIENhbGlmb3JuaWE8L3A+XG4gICAgICAgIDxpbWcgaWQ9XCJtYXBcIiBzcmM9XCIke2xvY2F0aW9ufVwiIGFsdD1cIk1hcCBzaG93aW5nIHRoZSBsb2NhdGlvbiBvZiBDeWJlcnB1bmtzXCI+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8IS0tIDxkaXYgY2xhc3M9XCJ0b3Bfc2VwZXJhdG9yXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImJvdHRvbV9zZXBlcmF0b3JcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY3V0X2NvbnRhaW5lclwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjdXRfY29udGFpbmVyXCIgc3R5bGU9XCJ3aWR0aDogNDJweDtcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYmxhY2tfY29udGFpbmVyXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImdhbGxlcnlfY29udGFpbmVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPSBcImdhbGxlcnlfaXRlbV9hcnJvd1wiPjwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm15SW1nXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGltZyBjbGFzcz15ZWxsb3dfYm9yZGVyIHNyYz0ke3llbGxvd0JvcmRlcn0gYWx0PVwiQm9yZGVyIEltYWdlXCI+IC0tPlxuYDtcblxuZXhwb3J0IGRlZmF1bHQgaG9tZUhUTUw7IiwidmFyIG1hcCA9IHtcblx0XCIuL2FydGljaG9rZV9waXp6YS53ZWJwXCI6IFwiLi9zcmMvaW1ncy9mb29kX2FuZF9kcmluay9hcnRpY2hva2VfcGl6emEud2VicFwiLFxuXHRcIi4vYnVycml0by53ZWJwXCI6IFwiLi9zcmMvaW1ncy9mb29kX2FuZF9kcmluay9idXJyaXRvLndlYnBcIixcblx0XCIuL2RhdmlkLndlYnBcIjogXCIuL3NyYy9pbWdzL2Zvb2RfYW5kX2RyaW5rL2RhdmlkLndlYnBcIixcblx0XCIuL2VlenliZWVmLndlYnBcIjogXCIuL3NyYy9pbWdzL2Zvb2RfYW5kX2RyaW5rL2VlenliZWVmLndlYnBcIixcblx0XCIuL2ZyaWVkX2FudHMud2VicFwiOiBcIi4vc3JjL2ltZ3MvZm9vZF9hbmRfZHJpbmsvZnJpZWRfYW50cy53ZWJwXCIsXG5cdFwiLi9oYXd0X2Rhd2cud2VicFwiOiBcIi4vc3JjL2ltZ3MvZm9vZF9hbmRfZHJpbmsvaGF3dF9kYXdnLndlYnBcIixcblx0XCIuL2pvaG5ueS53ZWJwXCI6IFwiLi9zcmMvaW1ncy9mb29kX2FuZF9kcmluay9qb2hubnkud2VicFwiLFxuXHRcIi4vbG9jdXN0X3BpenphLndlYnBcIjogXCIuL3NyYy9pbWdzL2Zvb2RfYW5kX2RyaW5rL2xvY3VzdF9waXp6YS53ZWJwXCIsXG5cdFwiLi9uaWNvbGEud2VicFwiOiBcIi4vc3JjL2ltZ3MvZm9vZF9hbmRfZHJpbmsvbmljb2xhLndlYnBcIixcblx0XCIuL3JhbW1tbWVuLndlYnBcIjogXCIuL3NyYy9pbWdzL2Zvb2RfYW5kX2RyaW5rL3JhbW1tbWVuLndlYnBcIixcblx0XCIuL3JlYWxmcnVpdC53ZWJwXCI6IFwiLi9zcmMvaW1ncy9mb29kX2FuZF9kcmluay9yZWFsZnJ1aXQud2VicFwiLFxuXHRcIi4vdG9mdV9waXp6YS53ZWJwXCI6IFwiLi9zcmMvaW1ncy9mb29kX2FuZF9kcmluay90b2Z1X3BpenphLndlYnBcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1ncy9mb29kX2FuZF9kcmluayBzeW5jIFxcXFwuKHBuZyU3Q2pwZT9nJTdDc3ZnJTdDd2VicCkkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL0NsYWlyZVJ1c3NlbGwud2VicFwiOiBcIi4vc3JjL2ltZ3MvcGVvcGxlL0NsYWlyZVJ1c3NlbGwud2VicFwiLFxuXHRcIi4vSm9obm55X1NpbHZlcmhhbmQud2VicFwiOiBcIi4vc3JjL2ltZ3MvcGVvcGxlL0pvaG5ueV9TaWx2ZXJoYW5kLndlYnBcIixcblx0XCIuL0p1ZHlfQWx2YXJlei53ZWJwXCI6IFwiLi9zcmMvaW1ncy9wZW9wbGUvSnVkeV9BbHZhcmV6LndlYnBcIixcblx0XCIuL1JvZ3VlLndlYnBcIjogXCIuL3NyYy9pbWdzL3Blb3BsZS9Sb2d1ZS53ZWJwXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltZ3MvcGVvcGxlIHN5bmMgXFxcXC4ocG5nJTdDanBlP2clN0NzdmclN0N3ZWJwKSRcIjsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBtZW51SFRNTCBmcm9tICcuL21lbnUnO1xuaW1wb3J0IGNvbnRhY3RIVE1MIGZyb20gJy4vY29udGFjdCc7XG5pbXBvcnQgaG9tZUhUTUwgZnJvbSAnLi9ob21lJztcblxuZnVuY3Rpb24gaW1wb3J0QWxsKHIpIHtcbiAgICBsZXQgaW1hZ2VzID0ge307XG4gICAgci5rZXlzKCkubWFwKChpdGVtLCBpbmRleCkgPT4geyBpbWFnZXNbaXRlbS5yZXBsYWNlKCcuLycsICcnKV0gPSByKGl0ZW0pOyB9KTtcbiAgICByZXR1cm4gaW1hZ2VzO1xufVxuZXhwb3J0IHsgaW1wb3J0QWxsIH07XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbmNvbnN0IGN1cnJlbnRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmN1cnJlbnRDb250ZW50LmlubmVySFRNTCA9IGhvbWVIVE1MO1xuY3VycmVudENvbnRlbnQuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQoY3VycmVudENvbnRlbnQpO1xuXG5jb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdl9tZW51XCIpO1xuZm9yKGxldCBsaW5rIG9mIG5hdi5jaGlsZHJlbil7XG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gV2FudCB0byBzdG9wIGZyb20gcnVubmluZyBpZiB0aGUgdXNlciByZWNsaWNrcyB0aGUgc2FtZSBidXR0b25cbiAgICAgICAgLy8gbGluay5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgaGFwcGVuaW5nXCIpO1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGN1cnJlbnRDb250ZW50KTtcbiAgICAgICAgY3VycmVudENvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcImhvbWVcIik7XG4gICAgICAgIGN1cnJlbnRDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJjb250YWN0XCIpO1xuICAgICAgICBjdXJyZW50Q29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwibWVudVwiKTtcbiAgICAgICAgc3dpdGNoIChsaW5rLmlkKXtcbiAgICAgICAgICAgIGNhc2UgXCJob21lXCI6XG4gICAgICAgICAgICAgICAgY3VycmVudENvbnRlbnQuaW5uZXJIVE1MID0gaG9tZUhUTUw7XG4gICAgICAgICAgICAgICAgY3VycmVudENvbnRlbnQuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XG4gICAgICAgICAgICAgICAgLy8gbGluay5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1lbnVcIjpcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29udGVudC5pbm5lckhUTUwgPSBtZW51SFRNTDtcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29udGVudC5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgICAgICAgICAgICAgICAvLyBsaW5rLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY29udGFjdFwiOlxuICAgICAgICAgICAgICAgIGN1cnJlbnRDb250ZW50LmlubmVySFRNTCA9IGNvbnRhY3RIVE1MO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xuICAgICAgICAgICAgICAgIC8vIGxpbmsuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGN1cnJlbnRDb250ZW50KTsgICAgIFxuICAgIH0pO1xufVxuXG5cbiIsImltcG9ydCB7aW1wb3J0QWxsfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5jb25zdCBpbWFnZXMgPSBpbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuL2ltZ3MvZm9vZF9hbmRfZHJpbmsnLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnfHdlYnApJC8pKTtcbmNvbnN0IG1lbnVIVE1MID0gYFxuPGgxPk1lbnU8L2gxPlxuPGRpdiBjbGFzcz1cInllbGxvd19ib3JkZXJcIj5cbiAgICA8cCBjbGFzcz1cImxvYWRpbmdfaW5mb1wiPiBNZW51IGxvYWRpbmcuLi48L3A+XG48L2Rpdj5cbiAgICA8ZGl2IGlkPVwiZHJpbmtzXCI+XG4gICAgICAgIDxoMj5Ecmlua3M8L2gyPlxuICAgICAgICA8aDM+QWZ0ZXJMaWZlPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb2RfaXRlbVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvcmRlclwiPlxuICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+Sm9obm55IFNpbHZlckhhbmQ8L3N0cm9uZz48L3A+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlc1snam9obm55LndlYnAnXX1cIiBhbHQ9XCJKb2hubnkgU2lsdmVyaGFuZCBkcmlua1wiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vZF9kZXNjcmlwdGlvblwiPi0gQSB0ZXF1aWxhIG9sZCBmYXNoaW9uZWQgd2l0aCBhIHNwbGFzaCBvZiBiZWVyIGFuZCBhIGNoaWxpIGdhcm5pc2guIEZvciB0aGUgcm9ja2VyYm95IHdobyBuZXZlciBnYXZlIHVwLjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb2RfaXRlbVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvcmRlclwiPlxuICAgICAgICAgICAgICAgIDxwPkRhdmlkIE1hcnRpbmV6PC9wPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZXNbJ2RhdmlkLndlYnAnXX1cIiBhbHQ9XCJEYXZpZCBNYXJ0aW5leiBkcmlua1wiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vZF9kZXNjcmlwdGlvblwiPi0gQSBzaG90IG9mIHZvZGthIG9uIHRoZSByb2NrcywgdG9wcGVkIHdpdGggTmljb2xhLiBBaW0gaGlnaCBhbmQgZ28gb3V0IHdpdGggYSBiYW5nPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vZF9pdGVtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgPHA+TmlDb2xhPC9wPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZXNbJ25pY29sYS53ZWJwJ119XCIgYWx0PVwiTmlDb2xhIHBpY3R1cmVcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvb2RfZGVzY3JpcHRpb25cIj4tIEFtZXJpY2EncyBmYXZvcml0ZSBkcmluayE8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBpZD1cImZvb2RcIj5cbiAgICAgICAgPGgyPkZvb2Q8L2gyPlxuICAgICAgICA8aDM+QnVjay1hLVNsaWNlPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb2RfaXRlbVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvcmRlclwiPlxuICAgICAgICAgICAgICAgIDxwPkFydGljaG9rZSDigJhO4oCZIEF2b2NhZG8gUGl6emE8L3A+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlc1snYXJ0aWNob2tlX3BpenphLndlYnAnXX1cIiBhbHQ9XCJBcnRpY2hva2Ug4oCYTuKAmSBBdm9jYWRvIFBpenphXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmb29kX2Rlc2NyaXB0aW9uXCI+LSBUb3BwaW5nIGl0IHRvIHRoZSBuZXh0IGxldmVsPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vZF9pdGVtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgPHA+VG9mdeKAmWQgVHVuYSBhbmQgUGluZWFwcGxlIFBpenphPC9wPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZXNbJ3RvZnVfcGl6emEud2VicCddfVwiIGFsdD1cIlRvZnXigJlkIFR1bmEgYW5kIFBpbmVhcHBsZSBQaXp6YVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vZF9kZXNjcmlwdGlvblwiPi0gVmVnYW5zIGNhbuKAmXQgZ2V0IGVub3VnaCBvZiBpdDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb2RfaXRlbVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvcmRlclwiPlxuICAgICAgICAgICAgICAgIDxwPkxvY3VzdCBQZXBwZXJvbmkgUGl6emE8L3A+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlc1snbG9jdXN0X3BpenphLndlYnAnXX1cIiBhbHQ9XCJMb2N1c3QgUGVwcGVyb25pIFBpenphXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmb29kX2Rlc2NyaXB0aW9uXCI+LSBJdOKAmWxsIHN3YXJtIHlvdXIgdGFzdGUgYnVkcyE8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMz5PdGhlcjwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb29kX2l0ZW1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3JkZXJcIj5cbiAgICAgICAgICAgICAgICA8cD5FZXp5YmVlZjxwPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZXNbJ2VlenliZWVmLndlYnAnXX1cIiBhbHQ9XCJFZXp5YmVlZiBwaWN0dXJlLiBMb29rcyBraW5kYSBncm9zc1wiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vZF9kZXNjcmlwdGlvblwiPlN5bnRoZXRpYyBtZWF0IC0geW914oCZcmUgaW4gZm9yIGEgdHJlYXQhPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vZF9pdGVtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgPHA+SGF3dCBEYXdnPHA+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlc1snaGF3dF9kYXdnLndlYnAnXX1cIiBhbHQ9XCJIYXd0IERhd2cgcGljdHVyZVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vZF9kZXNjcmlwdGlvblwiPlRoZSB0aGlja2VzdCBkb2dzIGFuZCB0aWdodGVzdCBidW5zIGluIHRvd24hPC9wPlxuICAgICAgICAgICAgPC9kaXY+ICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vZF9pdGVtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgPHA+UmVhbEZydWl0PHA+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlc1sncmVhbGZydWl0LndlYnAnXX1cIiBhbHQ9XCJSZWFsRnJ1aXQgcGljdHVyZVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vZF9kZXNjcmlwdGlvblwiPkl0J3Mgbm90IG1hcmtldGluZy4gSXQncyByZWFsLjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb2RfaXRlbVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvcmRlclwiPlxuICAgICAgICAgICAgICAgIDxwPlJhbW1tbWVuPHA+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlc1sncmFtbW1tZW4ud2VicCddfVwiIGFsdD1cIlJhbW1tZW4gUGljdHVyZS4gTG9va3MgbGlrZSByYW1tZW5cIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvb2RfZGVzY3JpcHRpb25cIj5CcmFuZCBuZXcgcmVjaXBlISAzWCBtb3JlIE1TRyE8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb29kX2l0ZW1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3JkZXJcIj5cbiAgICAgICAgICAgICAgICA8cD5TaHdhYnNod2FiIChGcmllZCBBbnRzKSBLZXRjaHVwPHA+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlc1snZnJpZWRfYW50cy53ZWJwJ119XCIgYWx0PVwiRnJpZWQgQW50cyBwaWN0dXJlXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmb29kX2Rlc2NyaXB0aW9uXCI+WW91ciBmYXZvcml0ZSBmb29kIGZsYXZvcmVkIHdpdGggeW91ciBzZWNvbmQgZmF2b3JpdGUgZm9vZDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnVIVE1MO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==