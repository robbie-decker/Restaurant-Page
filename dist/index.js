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
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
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

/* #intro::before{
    content: "Here is some content"
} */

.yellow_border{
    width: inherit;
    height: 20px;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    background-color: black;
}

/* .menu{
    background-color: black;
} */

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
    font-family: "Blender";
    color: var(--cyberwhite);
    clip-path: polygon(0 85%, 0% 0px, 100% 0, 100% 100%, 15% 100%);
    position: relative;
    background-color: var(--cyberRed);
    width: 70vmin;
    margin: 10px 0;
    padding: 20px;
    /* height: 90vmin; */
}

.food_item img{
    /* background-color: black; */
    /* border: black solid 4px; */
    /* clip-path: polygon(1px 84%, 1% 1px, 99% 1px, 99% 99%, 14% 99%); */
}

.food_item .border{
    clip-path: polygon(0 85%, 0% 0px, 100% 0, 100% 100%, 15% 100%);
    background: black;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n    --lightBlue: #00F0FF;\n    --neonYellow: #fcee0a;\n    --cyberRed: #FC012A;\n    --cyberwhite: #fff;\n}\n\n@font-face {\n    font-family: \"Cyberpunk\";\n    src: url('./fonts/CyberwayRiders.ttf');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face{\n    font-family: \"Blender\";\n    src:url('./fonts/Blender-Pro-Book.otf');\n}\n\n@font-face{\n    font-family: \"Neon\";\n    src:url('./fonts/NEON.TTF');\n}\n\nbody{\n    margin: 0;\n    padding: 0;\n    background-color: black;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* width: 100vw; */\n}\n\nnav{\n    /* width: 100vw; */\n    height: 10vh;\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    z-index: 1;\n}\n\nnav button{\n    /* margin: 0 20px; */\n    font-family: \"Neon\";\n    height: 8vh;\n    width: 200px;\n    font-size: 2rem;\n    background-color: inherit;\n    color: var(--lightBlue);\n    filter: brightness(60%);\n    border: none;\n}\n\nnav button:hover{\n    filter: brightness(100%);\n    text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px var(--lightBlue), 0 0 30px var(--lightBlue), 0 0 40px var(--lightBlue), 0 0 55px var(--lightBlue), 0 0 75px var(--lightBlue);\n}\n\nh1{\n    font-family: \"Cyberpunk\";\n    background-color: black;\n    color: var(--neonYellow);\n    text-shadow: 2px 2px 7px rgba(0,240,255,0.95);\n    font-size: 5rem;\n    padding: 20px 0;\n    margin: 0;\n    width: 100%;\n    text-align: center;\n}\n\n#content{\n    width: 100%;\n    background-color: var(--neonYellow);\n}\n\n.contact{\n    width: 100%;\n    width: -moz-available;          /* WebKit-based browsers will ignore this. */\n    width: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */\n}\n\n.home{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n/* #intro::before{\n    content: \"Here is some content\"\n} */\n\n.yellow_border{\n    width: inherit;\n    height: 20px;\n    background-image: url(\"./imgs/yellow_border.svg\");\n    background-color: black;\n}\n\n/* .menu{\n    background-color: black;\n} */\n\n#food, #drinks{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* background-color: black; */\n    /* color: var(--cyberwhite); */\n}\n\n.food_item{\n    /* display: flex;\n    flex-direction: column;\n    align-items: center; */\n    font-family: \"Blender\";\n    color: var(--cyberwhite);\n    clip-path: polygon(0 85%, 0% 0px, 100% 0, 100% 100%, 15% 100%);\n    position: relative;\n    background-color: var(--cyberRed);\n    width: 70vmin;\n    margin: 10px 0;\n    padding: 20px;\n    /* height: 90vmin; */\n}\n\n.food_item img{\n    /* background-color: black; */\n    /* border: black solid 4px; */\n    /* clip-path: polygon(1px 84%, 1% 1px, 99% 1px, 99% 99%, 14% 99%); */\n}\n\n.food_item .border{\n    clip-path: polygon(0 85%, 0% 0px, 100% 0, 100% 100%, 15% 100%);\n    background: black;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.food_description{\n    padding: 0 5px 0 15%;\n    margin: 0;\n    text-align: right;\n}\n/* .cut_out{\n    border-left: 24px solid var(--neonYellow);\n    border-top: 24px solid transparent;\n    bottom: 24px;\n    display: block;\n    height: 0px;\n    position: absolute;\n    width: 24px;\n    z-index: 1;\n} */\n\n#map{\n    height: 200px;\n    width: 200px;\n}\n\n#contact_gallery{\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px,1fr));\n    grid-auto-rows: minmax(350px,1fr);\n    align-items: stretch;\n    gap: 15px;\n    margin: 0 20px;\n}\n\n.contact_container{\n    position: relative;\n}\n\n.contact_container img{\n    background-color: var(--lightBlue);\n    /* border: var(--lightBlue) solid 4px; */\n    display: block;\n    height: auto;\n    width: 100%;\n    object-fit: contain;\n    overflow: hidden;\n}\n\n.overlay{\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: rgba(0,0,0,0.88);\n    overflow: hidden;\n    width: 100%;\n    height: 0;\n    transition: .5s ease;\n}\n.overlay h4, .overlay p{\n    text-align: center;\n    color: var(--lightBlue);\n    font-size: 3rem;\n    font-family: \"Blender\";\n}\n\n.contact_container:hover > .overlay{\n    height: 100%;\n    outline: var(--lightBlue) solid 4px;\n}\n\n.top_seperator{\n    background-image: linear-gradient(90deg,#000 28px,#fcee0a 0,\n    #fcee0a calc(50% - 14px),#000 calc(50% - 14px),#000 calc(50% + 14px),\n    #fcee0a calc(50% + 14px),#fcee0a calc(100% - 28px),#000 calc(100% - 28px),\n    #000),linear-gradient(90deg,#000 2px,#fcee0a 0,#fcee0a calc(50% - 1px),\n    #000 calc(50% - 1px),#000 calc(50% + 1px),#fcee0a calc(50% + 1px),\n    #fcee0a calc(100% - 2px),#000 calc(100% - 2px),#000);\n    background-repeat: no-repeat;\n    background-size: 100% 2px,100% 28px;\n    height: 28px;\n    margin: 20px;\n}\n\n.bottom_seperator{\n    background-image: linear-gradient(90deg,#000 2px,#fcee0a 0,#fcee0a calc(50% - 1px),\n    #000 calc(50% - 1px),#000 calc(50% + 1px),#fcee0a calc(50% + 1px),\n    #fcee0a calc(100% - 2px),#000 calc(100% - 2px),#000),\n    linear-gradient(90deg,#000 28px,#fcee0a 0,#fcee0a calc(50% - 14px),#000 calc(50% - 14px),\n    #000 calc(50% + 14px),#fcee0a calc(50% + 14px),#fcee0a calc(100% - 28px),#000 calc(100% - 28px),#000);\n    background-repeat: no-repeat;\n    background-size: 100% 26px,100% 28px;\n    height: 28px;\n    margin: 20px;\n}\n\n.cut_container{\n    border-color: #fcee0a transparent transparent;\n    border-style: solid;\n    border-width: 17px 17px 0 0;\n    height: 0px;\n    width: 100px;\n    /* position: absolute;\n    top: 0; */\n}\n\n/* Want to add an svg after this */\n.black_container{\n    background-color: #000;\n    height: 100px;\n    width: 75vw;\n}\n\n.gallery_container{\n    display: block;\n    width: 100%;\n    position: relative;\n}\n\n.myImg{\n    height: 100px;\n    width: 100px;\n    background-color: red;\n}"],"sourceRoot":""}]);
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
    <div class="top_seperator"></div>
    <div id="contact_gallery">
        <div class="contact_container">
            <img src="${images['Johnny_Silverhand.webp'].default}" alt="Johnny Silverhand picture">
            <div class="overlay">
                <h4>Johnny SilverHand</h4>
                <p>- Blurb about Johnny</p>
            </div>
        </div>
        <div class="contact_container">
            <img src="${images['Judy_Alvarez.webp'].default}" alt="Judy Alvarez Picture">
            <div class="overlay">
                <h4>Judy Alverez</h4>
                <p>- Blurb about Judy</p>
            </div>
        </div>
        <div class="contact_container">
            <img src="${images['Rogue.webp'].default}" alt="Rogue Amendiares Picture">
            <div class="overlay">
                <h4>Rogue Amendiares</h4>
                <p>- Blurb about Rogue</p>
            </div>
        </div>
        <div class="contact_container">
            <img src="${images['ClaireRussell.webp'].default}" alt="Claire Russell Picture">
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
    <div class="yellow_border"></div>
    <!-- <img class=yellow_border src=${_imgs_yellow_border_svg__WEBPACK_IMPORTED_MODULE_0__} alt="Border Image"> -->
    <p id="intro">Hi choomba! Let me jack you into the deets on this joint. The ambiance at Cyberpunks is straight out of the Afterlife. You walk in, and it's like stepping into a slice of Night City itself. The nosh is to die for as well with the menu consisting of Night City's local cuisine. This is the kind of place where you'll create memories you'll want to wipe, just so you can experience it all over again. Cyberpunks has the Night City flavors you have been craving. Stay frosty, choomba!  
    <br>- Night city local</p>
    <h2>Hours</h2>
    <p>Blah blah</p>
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
        console.log("this is happening");
        content.removeChild(currentContent);
        currentContent.classList.remove("home");
        currentContent.classList.remove("contact");
        currentContent.classList.remove("menu");
        switch (link.id){
            case "home":
                currentContent.innerHTML = _home__WEBPACK_IMPORTED_MODULE_3__["default"];
                currentContent.classList.add("home");
                break;
            case "menu":
                currentContent.innerHTML = _menu__WEBPACK_IMPORTED_MODULE_1__["default"];
                currentContent.classList.add("menu");
                break;
            case "contact":
                currentContent.innerHTML = _contact__WEBPACK_IMPORTED_MODULE_2__["default"];
                currentContent.classList.add("contact");
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
console.log(images);
const menuHTML = `
<h1>Menu</h1>
    <div id="drinks">
        <h2>Drinks</h2>
        <h3>AfterLife</h3>
        <div class="food_item">
            <div class="border">
                <p><strong>Johnny SilverHand</strong></p>
                <img src="${images['johnny.webp'].default}" alt="Johnny Silverhand drink">
                <p class="food_description">- A tequila old fashioned with a splash of beer and a chili garnish. For the rockerboy who never gave up.</p>
            </div>
        </div>
        <div class="food_item">
            <div class="border">
                <p>David Martinez</p>
                <img src="${images['david.webp'].default}" alt="David Martinez drink">
                <p class="food_description">- A shot of vodka on the rocks, topped with Nicola. Aim high and go out with a bang</p>
            </div>
        </div>
        <div class="food_item">
            <div class="border">
                <p>NiCola</p>
                <img src="${images['nicola.webp'].default}" alt="NiCola picture">
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
                <img src="${images['artichoke_pizza.webp'].default}" alt="Artichoke ‘N’ Avocado Pizza">
                <p class="food_description">- Topping it to the next level</p>
            </div>
        </div>
        <div class="food_item">
            <div class="border">
                <p>Tofu’d Tuna and Pineapple Pizza</p>
                <img src="${images['tofu_pizza.webp'].default}" alt="Tofu’d Tuna and Pineapple Pizza">
                <p class="food_description">- Vegans can’t get enough of it</p>
            </div>
        </div>
        <div class="food_item">
            <div class="border">
                <p>Locust Pepperoni Pizza</p>
                <img src="${images['locust_pizza.webp'].default}" alt="Locust Pepperoni Pizza">
                <p class="food_description">- It’ll swarm your taste buds!</p>
            </div>
        </div>
        <h3>Other</h3>
        <div class="food_item">
            <div class="border">
                <p>Eezybeef<p>
                <img src="${images['eezybeef.webp'].default}" alt="Eezybeef picture. Looks kinda gross">
                <p class="food_description">Synthetic meat - you’re in for a treat!</p>
            </div>
        </div>
        <div class="food_item">
            <div class="border">
                <p>Hawt Dawg<p>
                <img src="${images['hawt_dawg.webp'].default}" alt="Hawt Dawg picture">
                <p class="food_description">The thickest dogs and tightest buns in town!</p>
            </div>      
        </div>
        <div class="food_item">
            <div class="border">
                <p>RealFruit<p>
                <img src="${images['realfruit.webp'].default}" alt="RealFruit picture">
                <p class="food_description">It's not marketing. It's real.</p>
            </div>
        </div>
        <div class="food_item">
            <div class="border">
                <p>Rammmmen<p>
                <img src="${images['rammmmen.webp'].default}" alt="Rammmen Picture. Looks like rammen">
                <p class="food_description">Brand new recipe! 3X more MSG!</p>
            </div>
        </div>
        <div class="food_item">
            <div class="border">
                <p>Shwabshwab (Fried Ants) Ketchup<p>
                <img src="${images['fried_ants.webp'].default}" alt="Fried Ants picture">
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
module.exports = __webpack_require__.p + "1192cf3670d8f673ec5c.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsd0JBQXdCLHlCQUF5QixPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxNQUFNLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxTQUFTLE9BQU8sYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssUUFBUSxPQUFPLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9B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QUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW1ncy9mb29kX2FuZF9kcmluay8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZyU3Q2pwZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW1ncy9wZW9wbGUvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmclN0NqcGUiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0N5YmVyd2F5UmlkZXJzLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvQmxlbmRlci1Qcm8tQm9vay5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL05FT04uVFRGXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWdzL3llbGxvd19ib3JkZXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdHtcbiAgICAtLWxpZ2h0Qmx1ZTogIzAwRjBGRjtcbiAgICAtLW5lb25ZZWxsb3c6ICNmY2VlMGE7XG4gICAgLS1jeWJlclJlZDogI0ZDMDEyQTtcbiAgICAtLWN5YmVyd2hpdGU6ICNmZmY7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkN5YmVycHVua1wiO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5AZm9udC1mYWNle1xuICAgIGZvbnQtZmFtaWx5OiBcIkJsZW5kZXJcIjtcbiAgICBzcmM6dXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG5AZm9udC1mYWNle1xuICAgIGZvbnQtZmFtaWx5OiBcIk5lb25cIjtcbiAgICBzcmM6dXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xufVxuXG5ib2R5e1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8qIHdpZHRoOiAxMDB2dzsgKi9cbn1cblxubmF2e1xuICAgIC8qIHdpZHRoOiAxMDB2dzsgKi9cbiAgICBoZWlnaHQ6IDEwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIHotaW5kZXg6IDE7XG59XG5cbm5hdiBidXR0b257XG4gICAgLyogbWFyZ2luOiAwIDIwcHg7ICovXG4gICAgZm9udC1mYW1pbHk6IFwiTmVvblwiO1xuICAgIGhlaWdodDogOHZoO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRCbHVlKTtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNjAlKTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbm5hdiBidXR0b246aG92ZXJ7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEwMCUpO1xuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4ICNGRkYsIDAgMCAxMHB4ICNGRkYsIDAgMCAxNXB4ICNGRkYsIDAgMCAyMHB4IHZhcigtLWxpZ2h0Qmx1ZSksIDAgMCAzMHB4IHZhcigtLWxpZ2h0Qmx1ZSksIDAgMCA0MHB4IHZhcigtLWxpZ2h0Qmx1ZSksIDAgMCA1NXB4IHZhcigtLWxpZ2h0Qmx1ZSksIDAgMCA3NXB4IHZhcigtLWxpZ2h0Qmx1ZSk7XG59XG5cbmgxe1xuICAgIGZvbnQtZmFtaWx5OiBcIkN5YmVycHVua1wiO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB2YXIoLS1uZW9uWWVsbG93KTtcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA3cHggcmdiYSgwLDI0MCwyNTUsMC45NSk7XG4gICAgZm9udC1zaXplOiA1cmVtO1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICBtYXJnaW46IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jY29udGVudHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uZW9uWWVsbG93KTtcbn1cblxuLmNvbnRhY3R7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IC1tb3otYXZhaWxhYmxlOyAgICAgICAgICAvKiBXZWJLaXQtYmFzZWQgYnJvd3NlcnMgd2lsbCBpZ25vcmUgdGhpcy4gKi9cbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTsgIC8qIE1vemlsbGEtYmFzZWQgYnJvd3NlcnMgd2lsbCBpZ25vcmUgdGhpcy4gKi9cbn1cblxuLmhvbWV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qICNpbnRybzo6YmVmb3Jle1xuICAgIGNvbnRlbnQ6IFwiSGVyZSBpcyBzb21lIGNvbnRlbnRcIlxufSAqL1xuXG4ueWVsbG93X2JvcmRlcntcbiAgICB3aWR0aDogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4vKiAubWVudXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn0gKi9cblxuI2Zvb2QsICNkcmlua3N7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICovXG4gICAgLyogY29sb3I6IHZhcigtLWN5YmVyd2hpdGUpOyAqL1xufVxuXG4uZm9vZF9pdGVte1xuICAgIC8qIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xuICAgIGZvbnQtZmFtaWx5OiBcIkJsZW5kZXJcIjtcbiAgICBjb2xvcjogdmFyKC0tY3liZXJ3aGl0ZSk7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgODUlLCAwJSAwcHgsIDEwMCUgMCwgMTAwJSAxMDAlLCAxNSUgMTAwJSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YmVyUmVkKTtcbiAgICB3aWR0aDogNzB2bWluO1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgLyogaGVpZ2h0OiA5MHZtaW47ICovXG59XG5cbi5mb29kX2l0ZW0gaW1ne1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xuICAgIC8qIGJvcmRlcjogYmxhY2sgc29saWQgNHB4OyAqL1xuICAgIC8qIGNsaXAtcGF0aDogcG9seWdvbigxcHggODQlLCAxJSAxcHgsIDk5JSAxcHgsIDk5JSA5OSUsIDE0JSA5OSUpOyAqL1xufVxuXG4uZm9vZF9pdGVtIC5ib3JkZXJ7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgODUlLCAwJSAwcHgsIDEwMCUgMCwgMTAwJSAxMDAlLCAxNSUgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZm9vZF9kZXNjcmlwdGlvbntcbiAgICBwYWRkaW5nOiAwIDVweCAwIDE1JTtcbiAgICBtYXJnaW46IDA7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4vKiAuY3V0X291dHtcbiAgICBib3JkZXItbGVmdDogMjRweCBzb2xpZCB2YXIoLS1uZW9uWWVsbG93KTtcbiAgICBib3JkZXItdG9wOiAyNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvdHRvbTogMjRweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgei1pbmRleDogMTtcbn0gKi9cblxuI21hcHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbn1cblxuI2NvbnRhY3RfZ2FsbGVyeXtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsMWZyKSk7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgzNTBweCwxZnIpO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGdhcDogMTVweDtcbiAgICBtYXJnaW46IDAgMjBweDtcbn1cblxuLmNvbnRhY3RfY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvbnRhY3RfY29udGFpbmVyIGltZ3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEJsdWUpO1xuICAgIC8qIGJvcmRlcjogdmFyKC0tbGlnaHRCbHVlKSBzb2xpZCA0cHg7ICovXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm92ZXJsYXl7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44OCk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG59XG4ub3ZlcmxheSBoNCwgLm92ZXJsYXkgcHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0Qmx1ZSk7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGZvbnQtZmFtaWx5OiBcIkJsZW5kZXJcIjtcbn1cblxuLmNvbnRhY3RfY29udGFpbmVyOmhvdmVyID4gLm92ZXJsYXl7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG91dGxpbmU6IHZhcigtLWxpZ2h0Qmx1ZSkgc29saWQgNHB4O1xufVxuXG4udG9wX3NlcGVyYXRvcntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIzAwMCAyOHB4LCNmY2VlMGEgMCxcbiAgICAjZmNlZTBhIGNhbGMoNTAlIC0gMTRweCksIzAwMCBjYWxjKDUwJSAtIDE0cHgpLCMwMDAgY2FsYyg1MCUgKyAxNHB4KSxcbiAgICAjZmNlZTBhIGNhbGMoNTAlICsgMTRweCksI2ZjZWUwYSBjYWxjKDEwMCUgLSAyOHB4KSwjMDAwIGNhbGMoMTAwJSAtIDI4cHgpLFxuICAgICMwMDApLGxpbmVhci1ncmFkaWVudCg5MGRlZywjMDAwIDJweCwjZmNlZTBhIDAsI2ZjZWUwYSBjYWxjKDUwJSAtIDFweCksXG4gICAgIzAwMCBjYWxjKDUwJSAtIDFweCksIzAwMCBjYWxjKDUwJSArIDFweCksI2ZjZWUwYSBjYWxjKDUwJSArIDFweCksXG4gICAgI2ZjZWUwYSBjYWxjKDEwMCUgLSAycHgpLCMwMDAgY2FsYygxMDAlIC0gMnB4KSwjMDAwKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAycHgsMTAwJSAyOHB4O1xuICAgIGhlaWdodDogMjhweDtcbiAgICBtYXJnaW46IDIwcHg7XG59XG5cbi5ib3R0b21fc2VwZXJhdG9ye1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywjMDAwIDJweCwjZmNlZTBhIDAsI2ZjZWUwYSBjYWxjKDUwJSAtIDFweCksXG4gICAgIzAwMCBjYWxjKDUwJSAtIDFweCksIzAwMCBjYWxjKDUwJSArIDFweCksI2ZjZWUwYSBjYWxjKDUwJSArIDFweCksXG4gICAgI2ZjZWUwYSBjYWxjKDEwMCUgLSAycHgpLCMwMDAgY2FsYygxMDAlIC0gMnB4KSwjMDAwKSxcbiAgICBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIzAwMCAyOHB4LCNmY2VlMGEgMCwjZmNlZTBhIGNhbGMoNTAlIC0gMTRweCksIzAwMCBjYWxjKDUwJSAtIDE0cHgpLFxuICAgICMwMDAgY2FsYyg1MCUgKyAxNHB4KSwjZmNlZTBhIGNhbGMoNTAlICsgMTRweCksI2ZjZWUwYSBjYWxjKDEwMCUgLSAyOHB4KSwjMDAwIGNhbGMoMTAwJSAtIDI4cHgpLCMwMDApO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDI2cHgsMTAwJSAyOHB4O1xuICAgIGhlaWdodDogMjhweDtcbiAgICBtYXJnaW46IDIwcHg7XG59XG5cbi5jdXRfY29udGFpbmVye1xuICAgIGJvcmRlci1jb2xvcjogI2ZjZWUwYSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMTdweCAxN3B4IDAgMDtcbiAgICBoZWlnaHQ6IDBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgLyogcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDsgKi9cbn1cblxuLyogV2FudCB0byBhZGQgYW4gc3ZnIGFmdGVyIHRoaXMgKi9cbi5ibGFja19jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiA3NXZ3O1xufVxuXG4uZ2FsbGVyeV9jb250YWluZXJ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubXlJbWd7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qiw0Q0FBc0M7SUFDdEMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QiwyQ0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsMkNBQTJCO0FBQy9COztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsOExBQThMO0FBQ2xNOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsNkNBQTZDO0lBQzdDLGVBQWU7SUFDZixlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQixXQUFXLDRDQUE0QztJQUM1RSw2QkFBNkIsR0FBRyw2Q0FBNkM7QUFDakY7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7R0FFRzs7QUFFSDtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1oseURBQWlEO0lBQ2pELHVCQUF1QjtBQUMzQjs7QUFFQTs7R0FFRzs7QUFFSDtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSTs7MEJBRXNCO0lBQ3RCLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsOERBQThEO0lBQzlELGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLGNBQWM7SUFDZCxhQUFhO0lBQ2Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3QixvRUFBb0U7QUFDeEU7O0FBRUE7SUFDSSw4REFBOEQ7SUFDOUQsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCO0FBQ0E7Ozs7Ozs7OztHQVNHOztBQUVIO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMERBQTBEO0lBQzFELGlDQUFpQztJQUNqQyxvQkFBb0I7SUFDcEIsU0FBUztJQUNULGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsd0NBQXdDO0lBQ3hDLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1Isa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsU0FBUztJQUNULG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJOzs7Ozt3REFLb0Q7SUFDcEQsNEJBQTRCO0lBQzVCLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJOzs7O3lHQUlxRztJQUNyRyw0QkFBNEI7SUFDNUIsb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNkNBQTZDO0lBQzdDLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLFlBQVk7SUFDWjthQUNTO0FBQ2I7O0FBRUEsa0NBQWtDO0FBQ2xDO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcbiAgICAtLWxpZ2h0Qmx1ZTogIzAwRjBGRjtcXG4gICAgLS1uZW9uWWVsbG93OiAjZmNlZTBhO1xcbiAgICAtLWN5YmVyUmVkOiAjRkMwMTJBO1xcbiAgICAtLWN5YmVyd2hpdGU6ICNmZmY7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIkN5YmVycHVua1xcXCI7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL0N5YmVyd2F5UmlkZXJzLnR0ZicpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2V7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQmxlbmRlclxcXCI7XFxuICAgIHNyYzp1cmwoJy4vZm9udHMvQmxlbmRlci1Qcm8tQm9vay5vdGYnKTtcXG59XFxuXFxuQGZvbnQtZmFjZXtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJOZW9uXFxcIjtcXG4gICAgc3JjOnVybCgnLi9mb250cy9ORU9OLlRURicpO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvKiB3aWR0aDogMTAwdnc7ICovXFxufVxcblxcbm5hdntcXG4gICAgLyogd2lkdGg6IDEwMHZ3OyAqL1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG5uYXYgYnV0dG9ue1xcbiAgICAvKiBtYXJnaW46IDAgMjBweDsgKi9cXG4gICAgZm9udC1mYW1pbHk6IFxcXCJOZW9uXFxcIjtcXG4gICAgaGVpZ2h0OiA4dmg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRCbHVlKTtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDYwJSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxubmF2IGJ1dHRvbjpob3ZlcntcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEwMCUpO1xcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjRkZGLCAwIDAgMTBweCAjRkZGLCAwIDAgMTVweCAjRkZGLCAwIDAgMjBweCB2YXIoLS1saWdodEJsdWUpLCAwIDAgMzBweCB2YXIoLS1saWdodEJsdWUpLCAwIDAgNDBweCB2YXIoLS1saWdodEJsdWUpLCAwIDAgNTVweCB2YXIoLS1saWdodEJsdWUpLCAwIDAgNzVweCB2YXIoLS1saWdodEJsdWUpO1xcbn1cXG5cXG5oMXtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDeWJlcnB1bmtcXFwiO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHZhcigtLW5lb25ZZWxsb3cpO1xcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA3cHggcmdiYSgwLDI0MCwyNTUsMC45NSk7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgcGFkZGluZzogMjBweCAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjb250ZW50e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmVvblllbGxvdyk7XFxufVxcblxcbi5jb250YWN0e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgd2lkdGg6IC1tb3otYXZhaWxhYmxlOyAgICAgICAgICAvKiBXZWJLaXQtYmFzZWQgYnJvd3NlcnMgd2lsbCBpZ25vcmUgdGhpcy4gKi9cXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7ICAvKiBNb3ppbGxhLWJhc2VkIGJyb3dzZXJzIHdpbGwgaWdub3JlIHRoaXMuICovXFxufVxcblxcbi5ob21le1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiAjaW50cm86OmJlZm9yZXtcXG4gICAgY29udGVudDogXFxcIkhlcmUgaXMgc29tZSBjb250ZW50XFxcIlxcbn0gKi9cXG5cXG4ueWVsbG93X2JvcmRlcntcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltZ3MveWVsbG93X2JvcmRlci5zdmdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi8qIC5tZW51e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59ICovXFxuXFxuI2Zvb2QsICNkcmlua3N7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xcbiAgICAvKiBjb2xvcjogdmFyKC0tY3liZXJ3aGl0ZSk7ICovXFxufVxcblxcbi5mb29kX2l0ZW17XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQmxlbmRlclxcXCI7XFxuICAgIGNvbG9yOiB2YXIoLS1jeWJlcndoaXRlKTtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgODUlLCAwJSAwcHgsIDEwMCUgMCwgMTAwJSAxMDAlLCAxNSUgMTAwJSk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3liZXJSZWQpO1xcbiAgICB3aWR0aDogNzB2bWluO1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgLyogaGVpZ2h0OiA5MHZtaW47ICovXFxufVxcblxcbi5mb29kX2l0ZW0gaW1ne1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cXG4gICAgLyogYm9yZGVyOiBibGFjayBzb2xpZCA0cHg7ICovXFxuICAgIC8qIGNsaXAtcGF0aDogcG9seWdvbigxcHggODQlLCAxJSAxcHgsIDk5JSAxcHgsIDk5JSA5OSUsIDE0JSA5OSUpOyAqL1xcbn1cXG5cXG4uZm9vZF9pdGVtIC5ib3JkZXJ7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDg1JSwgMCUgMHB4LCAxMDAlIDAsIDEwMCUgMTAwJSwgMTUlIDEwMCUpO1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9vZF9kZXNjcmlwdGlvbntcXG4gICAgcGFkZGluZzogMCA1cHggMCAxNSU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcbi8qIC5jdXRfb3V0e1xcbiAgICBib3JkZXItbGVmdDogMjRweCBzb2xpZCB2YXIoLS1uZW9uWWVsbG93KTtcXG4gICAgYm9yZGVyLXRvcDogMjRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm90dG9tOiAyNHB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgaGVpZ2h0OiAwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIHotaW5kZXg6IDE7XFxufSAqL1xcblxcbiNtYXB7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuI2NvbnRhY3RfZ2FsbGVyeXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwxZnIpKTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgzNTBweCwxZnIpO1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBtYXJnaW46IDAgMjBweDtcXG59XFxuXFxuLmNvbnRhY3RfY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jb250YWN0X2NvbnRhaW5lciBpbWd7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Qmx1ZSk7XFxuICAgIC8qIGJvcmRlcjogdmFyKC0tbGlnaHRCbHVlKSBzb2xpZCA0cHg7ICovXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ub3ZlcmxheXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuODgpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcXG59XFxuLm92ZXJsYXkgaDQsIC5vdmVybGF5IHB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0Qmx1ZSk7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJCbGVuZGVyXFxcIjtcXG59XFxuXFxuLmNvbnRhY3RfY29udGFpbmVyOmhvdmVyID4gLm92ZXJsYXl7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3V0bGluZTogdmFyKC0tbGlnaHRCbHVlKSBzb2xpZCA0cHg7XFxufVxcblxcbi50b3Bfc2VwZXJhdG9ye1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIzAwMCAyOHB4LCNmY2VlMGEgMCxcXG4gICAgI2ZjZWUwYSBjYWxjKDUwJSAtIDE0cHgpLCMwMDAgY2FsYyg1MCUgLSAxNHB4KSwjMDAwIGNhbGMoNTAlICsgMTRweCksXFxuICAgICNmY2VlMGEgY2FsYyg1MCUgKyAxNHB4KSwjZmNlZTBhIGNhbGMoMTAwJSAtIDI4cHgpLCMwMDAgY2FsYygxMDAlIC0gMjhweCksXFxuICAgICMwMDApLGxpbmVhci1ncmFkaWVudCg5MGRlZywjMDAwIDJweCwjZmNlZTBhIDAsI2ZjZWUwYSBjYWxjKDUwJSAtIDFweCksXFxuICAgICMwMDAgY2FsYyg1MCUgLSAxcHgpLCMwMDAgY2FsYyg1MCUgKyAxcHgpLCNmY2VlMGEgY2FsYyg1MCUgKyAxcHgpLFxcbiAgICAjZmNlZTBhIGNhbGMoMTAwJSAtIDJweCksIzAwMCBjYWxjKDEwMCUgLSAycHgpLCMwMDApO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMnB4LDEwMCUgMjhweDtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbiAgICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5ib3R0b21fc2VwZXJhdG9ye1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIzAwMCAycHgsI2ZjZWUwYSAwLCNmY2VlMGEgY2FsYyg1MCUgLSAxcHgpLFxcbiAgICAjMDAwIGNhbGMoNTAlIC0gMXB4KSwjMDAwIGNhbGMoNTAlICsgMXB4KSwjZmNlZTBhIGNhbGMoNTAlICsgMXB4KSxcXG4gICAgI2ZjZWUwYSBjYWxjKDEwMCUgLSAycHgpLCMwMDAgY2FsYygxMDAlIC0gMnB4KSwjMDAwKSxcXG4gICAgbGluZWFyLWdyYWRpZW50KDkwZGVnLCMwMDAgMjhweCwjZmNlZTBhIDAsI2ZjZWUwYSBjYWxjKDUwJSAtIDE0cHgpLCMwMDAgY2FsYyg1MCUgLSAxNHB4KSxcXG4gICAgIzAwMCBjYWxjKDUwJSArIDE0cHgpLCNmY2VlMGEgY2FsYyg1MCUgKyAxNHB4KSwjZmNlZTBhIGNhbGMoMTAwJSAtIDI4cHgpLCMwMDAgY2FsYygxMDAlIC0gMjhweCksIzAwMCk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAyNnB4LDEwMCUgMjhweDtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbiAgICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5jdXRfY29udGFpbmVye1xcbiAgICBib3JkZXItY29sb3I6ICNmY2VlMGEgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMTdweCAxN3B4IDAgMDtcXG4gICAgaGVpZ2h0OiAwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7ICovXFxufVxcblxcbi8qIFdhbnQgdG8gYWRkIGFuIHN2ZyBhZnRlciB0aGlzICovXFxuLmJsYWNrX2NvbnRhaW5lcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IDc1dnc7XFxufVxcblxcbi5nYWxsZXJ5X2NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5teUltZ3tcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtpbXBvcnRBbGx9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmNvbnN0IGltYWdlcyA9IGltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4vaW1ncy9wZW9wbGUnLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnfHdlYnApJC8pKTtcblxuY29uc3QgY29udGFjdEhUTUwgPSBgXG4gICAgPGgxPkNvbnRhY3QgVXM8L2gxPlxuICAgIDxkaXYgY2xhc3M9XCJ0b3Bfc2VwZXJhdG9yXCI+PC9kaXY+XG4gICAgPGRpdiBpZD1cImNvbnRhY3RfZ2FsbGVyeVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdF9jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZXNbJ0pvaG5ueV9TaWx2ZXJoYW5kLndlYnAnXS5kZWZhdWx0fVwiIGFsdD1cIkpvaG5ueSBTaWx2ZXJoYW5kIHBpY3R1cmVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5XCI+XG4gICAgICAgICAgICAgICAgPGg0PkpvaG5ueSBTaWx2ZXJIYW5kPC9oND5cbiAgICAgICAgICAgICAgICA8cD4tIEJsdXJiIGFib3V0IEpvaG5ueTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3RfY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2VzWydKdWR5X0FsdmFyZXoud2VicCddLmRlZmF1bHR9XCIgYWx0PVwiSnVkeSBBbHZhcmV6IFBpY3R1cmVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5XCI+XG4gICAgICAgICAgICAgICAgPGg0Pkp1ZHkgQWx2ZXJlejwvaDQ+XG4gICAgICAgICAgICAgICAgPHA+LSBCbHVyYiBhYm91dCBKdWR5PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdF9jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZXNbJ1JvZ3VlLndlYnAnXS5kZWZhdWx0fVwiIGFsdD1cIlJvZ3VlIEFtZW5kaWFyZXMgUGljdHVyZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXlcIj5cbiAgICAgICAgICAgICAgICA8aDQ+Um9ndWUgQW1lbmRpYXJlczwvaDQ+XG4gICAgICAgICAgICAgICAgPHA+LSBCbHVyYiBhYm91dCBSb2d1ZTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3RfY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2VzWydDbGFpcmVSdXNzZWxsLndlYnAnXS5kZWZhdWx0fVwiIGFsdD1cIkNsYWlyZSBSdXNzZWxsIFBpY3R1cmVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5XCI+XG4gICAgICAgICAgICAgICAgPGg0PkNsYWlyZSBSdXNzZWxsPC9oND5cbiAgICAgICAgICAgICAgICA8cD4tIEJsdXJiIGFib3V0IENsYWlyZTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYm90dG9tX3NlcGVyYXRvclwiPjwvZGl2PlxuYDtcblxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0SFRNTDsiLCJpbXBvcnQgeWVsbG93Qm9yZGVyIGZyb20gJy4vaW1ncy95ZWxsb3dfYm9yZGVyLnN2Zyc7XG5pbXBvcnQgbG9jYXRpb24gZnJvbSAnLi9pbWdzL2xvY2F0aW9uLnBuZyc7XG5cblxuY29uc3QgaG9tZUhUTUwgPSBgXG4gICAgPGgxPkN5YmVycHVuaydzPC9oMT4gXG4gICAgPGRpdiBjbGFzcz1cInllbGxvd19ib3JkZXJcIj48L2Rpdj5cbiAgICA8IS0tIDxpbWcgY2xhc3M9eWVsbG93X2JvcmRlciBzcmM9JHt5ZWxsb3dCb3JkZXJ9IGFsdD1cIkJvcmRlciBJbWFnZVwiPiAtLT5cbiAgICA8cCBpZD1cImludHJvXCI+SGkgY2hvb21iYSEgTGV0IG1lIGphY2sgeW91IGludG8gdGhlIGRlZXRzIG9uIHRoaXMgam9pbnQuIFRoZSBhbWJpYW5jZSBhdCBDeWJlcnB1bmtzIGlzIHN0cmFpZ2h0IG91dCBvZiB0aGUgQWZ0ZXJsaWZlLiBZb3Ugd2FsayBpbiwgYW5kIGl0J3MgbGlrZSBzdGVwcGluZyBpbnRvIGEgc2xpY2Ugb2YgTmlnaHQgQ2l0eSBpdHNlbGYuIFRoZSBub3NoIGlzIHRvIGRpZSBmb3IgYXMgd2VsbCB3aXRoIHRoZSBtZW51IGNvbnNpc3Rpbmcgb2YgTmlnaHQgQ2l0eSdzIGxvY2FsIGN1aXNpbmUuIFRoaXMgaXMgdGhlIGtpbmQgb2YgcGxhY2Ugd2hlcmUgeW91J2xsIGNyZWF0ZSBtZW1vcmllcyB5b3UnbGwgd2FudCB0byB3aXBlLCBqdXN0IHNvIHlvdSBjYW4gZXhwZXJpZW5jZSBpdCBhbGwgb3ZlciBhZ2Fpbi4gQ3liZXJwdW5rcyBoYXMgdGhlIE5pZ2h0IENpdHkgZmxhdm9ycyB5b3UgaGF2ZSBiZWVuIGNyYXZpbmcuIFN0YXkgZnJvc3R5LCBjaG9vbWJhISAgXG4gICAgPGJyPi0gTmlnaHQgY2l0eSBsb2NhbDwvcD5cbiAgICA8aDI+SG91cnM8L2gyPlxuICAgIDxwPkJsYWggYmxhaDwvcD5cbiAgICA8ZGl2IGlkPVwibG9jYXRpb25fY29udGFpbmVyXCI+XG4gICAgICAgIDxoMj5Mb2NhdGlvbjwvaDI+XG4gICAgICAgIDxwPjUyIEt1cm9zaGlvIEF2ZW51ZSwgSmFwYW5Ub3duLCBOb3J0aGVybiBDYWxpZm9ybmlhPC9wPlxuICAgICAgICA8aW1nIGlkPVwibWFwXCIgc3JjPVwiJHtsb2NhdGlvbn1cIiBhbHQ9XCJNYXAgc2hvd2luZyB0aGUgbG9jYXRpb24gb2YgQ3liZXJwdW5rc1wiPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICAgIDxkaXY+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPCEtLSA8ZGl2IGNsYXNzPVwidG9wX3NlcGVyYXRvclwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJib3R0b21fc2VwZXJhdG9yXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImN1dF9jb250YWluZXJcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY3V0X2NvbnRhaW5lclwiIHN0eWxlPVwid2lkdGg6IDQycHg7XCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImJsYWNrX2NvbnRhaW5lclwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJnYWxsZXJ5X2NvbnRhaW5lclwiPlxuICAgICAgICA8c3BhbiBjbGFzcz0gXCJnYWxsZXJ5X2l0ZW1fYXJyb3dcIj48L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJteUltZ1wiPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxpbWcgY2xhc3M9eWVsbG93X2JvcmRlciBzcmM9JHt5ZWxsb3dCb3JkZXJ9IGFsdD1cIkJvcmRlciBJbWFnZVwiPiAtLT5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWVIVE1MOyIsInZhciBtYXAgPSB7XG5cdFwiLi9hcnRpY2hva2VfcGl6emEud2VicFwiOiBcIi4vc3JjL2ltZ3MvZm9vZF9hbmRfZHJpbmsvYXJ0aWNob2tlX3BpenphLndlYnBcIixcblx0XCIuL2J1cnJpdG8ud2VicFwiOiBcIi4vc3JjL2ltZ3MvZm9vZF9hbmRfZHJpbmsvYnVycml0by53ZWJwXCIsXG5cdFwiLi9kYXZpZC53ZWJwXCI6IFwiLi9zcmMvaW1ncy9mb29kX2FuZF9kcmluay9kYXZpZC53ZWJwXCIsXG5cdFwiLi9lZXp5YmVlZi53ZWJwXCI6IFwiLi9zcmMvaW1ncy9mb29kX2FuZF9kcmluay9lZXp5YmVlZi53ZWJwXCIsXG5cdFwiLi9mcmllZF9hbnRzLndlYnBcIjogXCIuL3NyYy9pbWdzL2Zvb2RfYW5kX2RyaW5rL2ZyaWVkX2FudHMud2VicFwiLFxuXHRcIi4vaGF3dF9kYXdnLndlYnBcIjogXCIuL3NyYy9pbWdzL2Zvb2RfYW5kX2RyaW5rL2hhd3RfZGF3Zy53ZWJwXCIsXG5cdFwiLi9qb2hubnkud2VicFwiOiBcIi4vc3JjL2ltZ3MvZm9vZF9hbmRfZHJpbmsvam9obm55LndlYnBcIixcblx0XCIuL2xvY3VzdF9waXp6YS53ZWJwXCI6IFwiLi9zcmMvaW1ncy9mb29kX2FuZF9kcmluay9sb2N1c3RfcGl6emEud2VicFwiLFxuXHRcIi4vbmljb2xhLndlYnBcIjogXCIuL3NyYy9pbWdzL2Zvb2RfYW5kX2RyaW5rL25pY29sYS53ZWJwXCIsXG5cdFwiLi9yYW1tbW1lbi53ZWJwXCI6IFwiLi9zcmMvaW1ncy9mb29kX2FuZF9kcmluay9yYW1tbW1lbi53ZWJwXCIsXG5cdFwiLi9yZWFsZnJ1aXQud2VicFwiOiBcIi4vc3JjL2ltZ3MvZm9vZF9hbmRfZHJpbmsvcmVhbGZydWl0LndlYnBcIixcblx0XCIuL3RvZnVfcGl6emEud2VicFwiOiBcIi4vc3JjL2ltZ3MvZm9vZF9hbmRfZHJpbmsvdG9mdV9waXp6YS53ZWJwXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltZ3MvZm9vZF9hbmRfZHJpbmsgc3luYyBcXFxcLihwbmclN0NqcGU/ZyU3Q3N2ZyU3Q3dlYnApJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9DbGFpcmVSdXNzZWxsLndlYnBcIjogXCIuL3NyYy9pbWdzL3Blb3BsZS9DbGFpcmVSdXNzZWxsLndlYnBcIixcblx0XCIuL0pvaG5ueV9TaWx2ZXJoYW5kLndlYnBcIjogXCIuL3NyYy9pbWdzL3Blb3BsZS9Kb2hubnlfU2lsdmVyaGFuZC53ZWJwXCIsXG5cdFwiLi9KdWR5X0FsdmFyZXoud2VicFwiOiBcIi4vc3JjL2ltZ3MvcGVvcGxlL0p1ZHlfQWx2YXJlei53ZWJwXCIsXG5cdFwiLi9Sb2d1ZS53ZWJwXCI6IFwiLi9zcmMvaW1ncy9wZW9wbGUvUm9ndWUud2VicFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWdzL3Blb3BsZSBzeW5jIFxcXFwuKHBuZyU3Q2pwZT9nJTdDc3ZnJTdDd2VicCkkXCI7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgbWVudUhUTUwgZnJvbSAnLi9tZW51JztcbmltcG9ydCBjb250YWN0SFRNTCBmcm9tICcuL2NvbnRhY3QnO1xuaW1wb3J0IGhvbWVIVE1MIGZyb20gJy4vaG9tZSc7XG5cbmZ1bmN0aW9uIGltcG9ydEFsbChyKSB7XG4gICAgbGV0IGltYWdlcyA9IHt9O1xuICAgIHIua2V5cygpLm1hcCgoaXRlbSwgaW5kZXgpID0+IHsgaW1hZ2VzW2l0ZW0ucmVwbGFjZSgnLi8nLCAnJyldID0gcihpdGVtKTsgfSk7XG4gICAgcmV0dXJuIGltYWdlcztcbn1cbmV4cG9ydCB7IGltcG9ydEFsbCB9O1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5jb25zdCBjdXJyZW50Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5jdXJyZW50Q29udGVudC5pbm5lckhUTUwgPSBob21lSFRNTDtcbmN1cnJlbnRDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xuXG5jb250ZW50LmFwcGVuZENoaWxkKGN1cnJlbnRDb250ZW50KTtcblxuY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZfbWVudVwiKTtcbmZvcihsZXQgbGluayBvZiBuYXYuY2hpbGRyZW4pe1xuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vIFdhbnQgdG8gc3RvcCBmcm9tIHJ1bm5pbmcgaWYgdGhlIHVzZXIgcmVjbGlja3MgdGhlIHNhbWUgYnV0dG9uXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyBoYXBwZW5pbmdcIik7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY3VycmVudENvbnRlbnQpO1xuICAgICAgICBjdXJyZW50Q29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaG9tZVwiKTtcbiAgICAgICAgY3VycmVudENvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcImNvbnRhY3RcIik7XG4gICAgICAgIGN1cnJlbnRDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51XCIpO1xuICAgICAgICBzd2l0Y2ggKGxpbmsuaWQpe1xuICAgICAgICAgICAgY2FzZSBcImhvbWVcIjpcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29udGVudC5pbm5lckhUTUwgPSBob21lSFRNTDtcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29udGVudC5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtZW51XCI6XG4gICAgICAgICAgICAgICAgY3VycmVudENvbnRlbnQuaW5uZXJIVE1MID0gbWVudUhUTUw7XG4gICAgICAgICAgICAgICAgY3VycmVudENvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY29udGFjdFwiOlxuICAgICAgICAgICAgICAgIGN1cnJlbnRDb250ZW50LmlubmVySFRNTCA9IGNvbnRhY3RIVE1MO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3VycmVudENvbnRlbnQpOyAgICAgXG4gICAgfSk7XG59XG5cblxuIiwiaW1wb3J0IHtpbXBvcnRBbGx9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmNvbnN0IGltYWdlcyA9IGltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4vaW1ncy9mb29kX2FuZF9kcmluaycsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3xzdmd8d2VicCkkLykpO1xuY29uc29sZS5sb2coaW1hZ2VzKTtcbmNvbnN0IG1lbnVIVE1MID0gYFxuPGgxPk1lbnU8L2gxPlxuICAgIDxkaXYgaWQ9XCJkcmlua3NcIj5cbiAgICAgICAgPGgyPkRyaW5rczwvaDI+XG4gICAgICAgIDxoMz5BZnRlckxpZmU8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vZF9pdGVtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5Kb2hubnkgU2lsdmVySGFuZDwvc3Ryb25nPjwvcD5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2VzWydqb2hubnkud2VicCddLmRlZmF1bHR9XCIgYWx0PVwiSm9obm55IFNpbHZlcmhhbmQgZHJpbmtcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvb2RfZGVzY3JpcHRpb25cIj4tIEEgdGVxdWlsYSBvbGQgZmFzaGlvbmVkIHdpdGggYSBzcGxhc2ggb2YgYmVlciBhbmQgYSBjaGlsaSBnYXJuaXNoLiBGb3IgdGhlIHJvY2tlcmJveSB3aG8gbmV2ZXIgZ2F2ZSB1cC48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb29kX2l0ZW1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3JkZXJcIj5cbiAgICAgICAgICAgICAgICA8cD5EYXZpZCBNYXJ0aW5lejwvcD5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2VzWydkYXZpZC53ZWJwJ10uZGVmYXVsdH1cIiBhbHQ9XCJEYXZpZCBNYXJ0aW5leiBkcmlua1wiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vZF9kZXNjcmlwdGlvblwiPi0gQSBzaG90IG9mIHZvZGthIG9uIHRoZSByb2NrcywgdG9wcGVkIHdpdGggTmljb2xhLiBBaW0gaGlnaCBhbmQgZ28gb3V0IHdpdGggYSBiYW5nPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vZF9pdGVtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgPHA+TmlDb2xhPC9wPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZXNbJ25pY29sYS53ZWJwJ10uZGVmYXVsdH1cIiBhbHQ9XCJOaUNvbGEgcGljdHVyZVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vZF9kZXNjcmlwdGlvblwiPi0gQW1lcmljYSdzIGZhdm9yaXRlIGRyaW5rITwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGlkPVwiZm9vZFwiPlxuICAgICAgICA8aDI+Rm9vZDwvaDI+XG4gICAgICAgIDxoMz5CdWNrLWEtU2xpY2U8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vZF9pdGVtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgPHA+QXJ0aWNob2tlIOKAmE7igJkgQXZvY2FkbyBQaXp6YTwvcD5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2VzWydhcnRpY2hva2VfcGl6emEud2VicCddLmRlZmF1bHR9XCIgYWx0PVwiQXJ0aWNob2tlIOKAmE7igJkgQXZvY2FkbyBQaXp6YVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vZF9kZXNjcmlwdGlvblwiPi0gVG9wcGluZyBpdCB0byB0aGUgbmV4dCBsZXZlbDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb2RfaXRlbVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvcmRlclwiPlxuICAgICAgICAgICAgICAgIDxwPlRvZnXigJlkIFR1bmEgYW5kIFBpbmVhcHBsZSBQaXp6YTwvcD5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2VzWyd0b2Z1X3BpenphLndlYnAnXS5kZWZhdWx0fVwiIGFsdD1cIlRvZnXigJlkIFR1bmEgYW5kIFBpbmVhcHBsZSBQaXp6YVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vZF9kZXNjcmlwdGlvblwiPi0gVmVnYW5zIGNhbuKAmXQgZ2V0IGVub3VnaCBvZiBpdDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb2RfaXRlbVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvcmRlclwiPlxuICAgICAgICAgICAgICAgIDxwPkxvY3VzdCBQZXBwZXJvbmkgUGl6emE8L3A+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlc1snbG9jdXN0X3BpenphLndlYnAnXS5kZWZhdWx0fVwiIGFsdD1cIkxvY3VzdCBQZXBwZXJvbmkgUGl6emFcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvb2RfZGVzY3JpcHRpb25cIj4tIEl04oCZbGwgc3dhcm0geW91ciB0YXN0ZSBidWRzITwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgzPk90aGVyPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb2RfaXRlbVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvcmRlclwiPlxuICAgICAgICAgICAgICAgIDxwPkVlenliZWVmPHA+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlc1snZWV6eWJlZWYud2VicCddLmRlZmF1bHR9XCIgYWx0PVwiRWV6eWJlZWYgcGljdHVyZS4gTG9va3Mga2luZGEgZ3Jvc3NcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvb2RfZGVzY3JpcHRpb25cIj5TeW50aGV0aWMgbWVhdCAtIHlvdeKAmXJlIGluIGZvciBhIHRyZWF0ITwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb2RfaXRlbVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvcmRlclwiPlxuICAgICAgICAgICAgICAgIDxwPkhhd3QgRGF3ZzxwPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZXNbJ2hhd3RfZGF3Zy53ZWJwJ10uZGVmYXVsdH1cIiBhbHQ9XCJIYXd0IERhd2cgcGljdHVyZVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vZF9kZXNjcmlwdGlvblwiPlRoZSB0aGlja2VzdCBkb2dzIGFuZCB0aWdodGVzdCBidW5zIGluIHRvd24hPC9wPlxuICAgICAgICAgICAgPC9kaXY+ICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vZF9pdGVtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgPHA+UmVhbEZydWl0PHA+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlc1sncmVhbGZydWl0LndlYnAnXS5kZWZhdWx0fVwiIGFsdD1cIlJlYWxGcnVpdCBwaWN0dXJlXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmb29kX2Rlc2NyaXB0aW9uXCI+SXQncyBub3QgbWFya2V0aW5nLiBJdCdzIHJlYWwuPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vZF9pdGVtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgPHA+UmFtbW1tZW48cD5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2VzWydyYW1tbW1lbi53ZWJwJ10uZGVmYXVsdH1cIiBhbHQ9XCJSYW1tbWVuIFBpY3R1cmUuIExvb2tzIGxpa2UgcmFtbWVuXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmb29kX2Rlc2NyaXB0aW9uXCI+QnJhbmQgbmV3IHJlY2lwZSEgM1ggbW9yZSBNU0chPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vZF9pdGVtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgPHA+U2h3YWJzaHdhYiAoRnJpZWQgQW50cykgS2V0Y2h1cDxwPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZXNbJ2ZyaWVkX2FudHMud2VicCddLmRlZmF1bHR9XCIgYWx0PVwiRnJpZWQgQW50cyBwaWN0dXJlXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmb29kX2Rlc2NyaXB0aW9uXCI+WW91ciBmYXZvcml0ZSBmb29kIGZsYXZvcmVkIHdpdGggeW91ciBzZWNvbmQgZmF2b3JpdGUgZm9vZDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnVIVE1MO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==