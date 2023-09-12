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
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/refinery-25-bold.ttf */ "./src/fonts/refinery-25-bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/yellow_border.svg */ "./src/imgs/yellow_border.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/black_border.svg */ "./src/imgs/black_border.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/dots-mobile.png */ "./src/imgs/dots-mobile.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --lightBlue: #00F0FF;
    --neonYellow: #fcee0a;
    --cyberRed: #FC012A;
    --cyberwhite: #fff;
    --current_color: var(--neonYellow);
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

@font-face{
    font-family: "refinery-25";
    src:url(${___CSS_LOADER_URL_REPLACEMENT_3___})
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
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 10px;
    z-index: 1;
}

nav button{
    /* margin: 0 20px; */
    font-family: "Neon";
    height: 8vh;
    width: 200px;
    font-size: 2rem;
    background-color: inherit;
    /* color: var(--lightBlue); */
    filter: brightness(60%);
    border: none;
    transition: filter .5s ease, text-shadow .5s ease;
    /* transition: text-shadow .5s ease; */
}

#home{
    color: var(--neonYellow);
}

#home:hover{
    text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px var(--neonYellow), 0 0 30px var(--neonYellow), 0 0 40px var(--neonYellow), 0 0 55px var(--neonYellow), 0 0 75px var(--neonYellow);
}

#menu{
    color:var(--cyberRed);
}
#menu:hover{
    text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px var(--cyberRed), 0 0 30px var(--cyberRed), 0 0 40px var(--cyberRed), 0 0 55px var(--cyberRed), 0 0 75px var(--cyberRed);
}

#contact{
    color:var(--lightBlue);
}
#contact:hover{
    text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px var(--lightBlue), 0 0 30px var(--lightBlue), 0 0 40px var(--lightBlue), 0 0 55px var(--lightBlue), 0 0 75px var(--lightBlue);
}

nav button:hover{
    transition: .5s ease;
    filter: brightness(100%);
    /* text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px var(--lightBlue), 0 0 30px var(--lightBlue), 0 0 40px var(--lightBlue), 0 0 55px var(--lightBlue), 0 0 75px var(--lightBlue); */
}

.active{
    filter: brightness(100%);
    text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px var(--current_color), 0 0 30px var(--current_color), 0 0 40px var(--current_color), 0 0 55px var(--current_color), 0 0 75px var(--current_color);
}


h1{
    font-family: "Cyberpunk";
    background-color: black;
    color: var(--neonYellow);
    text-shadow: 2px 2px 7px rgba(0,240,255,0.95);
    font-size: 5rem;
    padding: 10px 0 20px 0;
    margin: 0;
    width: 100%;
    text-align: center;
}

h3{
    font-size: 2rem;
}

h2{
    font-family: "refinery-25";
    font-size: 4rem;
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
    height: 22px;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
    background-repeat: no-repeat;
    background-color: black;
    padding-bottom: 18px;
    background-size: cover;
}

.black_border{
    width: 100%;
    height: 20px;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
    background-repeat: no-repeat;
    background-color: black;
    padding-bottom: 18px;
    background-size: cover;
}

.loading_info{
    /* text-align: left; */
    position: relative;
    color: var(--neonYellow);
    bottom: -16px;
    padding-left: 10px;
    margin: 0;
}

.black_loading_info{
    transform: rotate(.5turn);
    text-align: right;
    padding-right: 10px;
    color: var(--neonYellow);
    margin: 0;
}

.hours, #location_container{
    max-width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#intro{
    max-width: 900px;
    background: linear-gradient(90deg,#000 2px,transparent 0) 0 0,linear-gradient(90deg,#000 2px,transparent 0) 0 100%,linear-gradient(270deg,#000 2px,transparent 0) 100% 0,linear-gradient(270deg,#000 2px,transparent 0) 100% 100%,linear-gradient(180deg,#000 2px,transparent 0) 0 0,linear-gradient(180deg,#000 2px,transparent 0) 100% 0,linear-gradient(0deg,#000 2px,transparent 0) 0 100%,linear-gradient(0deg,#000 2px,transparent 0) 100% 100%,linear-gradient(0deg,rgba(255,239,0,.161) 2px,transparent 0) 0 0,linear-gradient(180deg,rgba(255,239,0,.161) 2px,transparent 0) 0 0;
    background-repeat: no-repeat;
    background-size: 28px 28px,28px 28px,28px 28px,28px 28px,28px 28px,28px 28px,28px 28px,28px 28px,100% 100%,100% 100%;
    padding: 0 20px;
    margin: 6px;
}

.hours{
    color: var(--cyberwhite);
    background-color: black;
    width: 50%;
    margin: 20px 0;
    border-radius: 5px;
}


.author{
    text-align: right;
    font-size: 1.5rem;
}

.seperator{
    background-color: #ded207;
    display: block;
    height: 1px;
    margin: 0 auto;
    overflow: visible;
    position: relative;
    margin: 20px auto 0 auto;
    width: 80vw;
    background-position: top;
    background-repeat: no-repeat;
    background-size: auto 100%;
}

/* @media screen and (max-width: 950px){
    .seperator{
        width: 80vw;
    }
} */
.seperator::after, .seperator::before{
    background-color: #ded207;
    content: "";
    height: 1px;
    position: absolute;
    width: 50vw;
}

.seperator-left{
    box-sizing: border-box;
    border: 3px solid #ded207;
    height: 16px;
    position: absolute;
    top: -8px;
    width: 16px;
    left: -20px;
}

.seperator-left::after, .seperator-right::after{
    background-color: #ded207;
    content: "";
    height: 2px;
    left: -4px;
    position: absolute;
    top: 3px;
    transform: rotate(45deg);
    width: 16px; 
}

.seperator-right{
    box-sizing: border-box;
    border: 3px solid #ded207;
    height: 16px;
    position: absolute;
    top: -8px;
    width: 16px;
    right: -20px;
}

.hours{

}

.dirty_seperator{
    width: 100%;
    min-height: 20px;
    filter: brightness(70%);
    object-fit: cover;
}

#food, #drinks{
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: black; */
    /* color: var(--cyberwhite); */
}

#food{
    background-color: black;
    color: var(--cyberwhite);
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
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
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
    height: auto;
    width: 400px;
    min-width: 200px;
    margin-bottom: 25px;
    border: black 5px solid;
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

footer{
    background-color: var(--neonYellow);
    text-align: center;
    width: 100%;
    height: 50px;
}

footer a{
   font-size: 2rem;
   color: black;
   text-decoration: none; 
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n    --lightBlue: #00F0FF;\n    --neonYellow: #fcee0a;\n    --cyberRed: #FC012A;\n    --cyberwhite: #fff;\n    --current_color: var(--neonYellow);\n}\n\n@font-face {\n    font-family: \"Cyberpunk\";\n    src: url('./fonts/CyberwayRiders.ttf');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face{\n    font-family: \"Blender\";\n    src:url('./fonts/Blender-Pro-Book.otf');\n}\n\n@font-face{\n    font-family: \"Neon\";\n    src:url('./fonts/NEON.TTF');\n}\n\n@font-face{\n    font-family: \"refinery-25\";\n    src:url('./fonts/refinery-25-bold.ttf')\n}\n\nbody{\n    margin: 0;\n    font-family: \"Blender\";\n    padding: 0;\n    background-color: black;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* width: 100vw; */\n}\n\nnav{\n    width: 100%;\n    height: 10vh;\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    margin-top: 10px;\n    z-index: 1;\n}\n\nnav button{\n    /* margin: 0 20px; */\n    font-family: \"Neon\";\n    height: 8vh;\n    width: 200px;\n    font-size: 2rem;\n    background-color: inherit;\n    /* color: var(--lightBlue); */\n    filter: brightness(60%);\n    border: none;\n    transition: filter .5s ease, text-shadow .5s ease;\n    /* transition: text-shadow .5s ease; */\n}\n\n#home{\n    color: var(--neonYellow);\n}\n\n#home:hover{\n    text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px var(--neonYellow), 0 0 30px var(--neonYellow), 0 0 40px var(--neonYellow), 0 0 55px var(--neonYellow), 0 0 75px var(--neonYellow);\n}\n\n#menu{\n    color:var(--cyberRed);\n}\n#menu:hover{\n    text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px var(--cyberRed), 0 0 30px var(--cyberRed), 0 0 40px var(--cyberRed), 0 0 55px var(--cyberRed), 0 0 75px var(--cyberRed);\n}\n\n#contact{\n    color:var(--lightBlue);\n}\n#contact:hover{\n    text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px var(--lightBlue), 0 0 30px var(--lightBlue), 0 0 40px var(--lightBlue), 0 0 55px var(--lightBlue), 0 0 75px var(--lightBlue);\n}\n\nnav button:hover{\n    transition: .5s ease;\n    filter: brightness(100%);\n    /* text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px var(--lightBlue), 0 0 30px var(--lightBlue), 0 0 40px var(--lightBlue), 0 0 55px var(--lightBlue), 0 0 75px var(--lightBlue); */\n}\n\n.active{\n    filter: brightness(100%);\n    text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px var(--current_color), 0 0 30px var(--current_color), 0 0 40px var(--current_color), 0 0 55px var(--current_color), 0 0 75px var(--current_color);\n}\n\n\nh1{\n    font-family: \"Cyberpunk\";\n    background-color: black;\n    color: var(--neonYellow);\n    text-shadow: 2px 2px 7px rgba(0,240,255,0.95);\n    font-size: 5rem;\n    padding: 10px 0 20px 0;\n    margin: 0;\n    width: 100%;\n    text-align: center;\n}\n\nh3{\n    font-size: 2rem;\n}\n\nh2{\n    font-family: \"refinery-25\";\n    font-size: 4rem;\n}\n\n#content{\n    width: 100%;\n    background-color: var(--neonYellow);\n}\n\n.contact{\n    width: 100%;\n    width: -moz-available;          /* WebKit-based browsers will ignore this. */\n    width: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */\n}\n\n.home{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.yellow_border{\n    width: 100%;\n    height: 22px;\n    background-image: url(\"./imgs/yellow_border.svg\");\n    background-repeat: no-repeat;\n    background-color: black;\n    padding-bottom: 18px;\n    background-size: cover;\n}\n\n.black_border{\n    width: 100%;\n    height: 20px;\n    background-image: url(\"./imgs/black_border.svg\");\n    background-repeat: no-repeat;\n    background-color: black;\n    padding-bottom: 18px;\n    background-size: cover;\n}\n\n.loading_info{\n    /* text-align: left; */\n    position: relative;\n    color: var(--neonYellow);\n    bottom: -16px;\n    padding-left: 10px;\n    margin: 0;\n}\n\n.black_loading_info{\n    transform: rotate(.5turn);\n    text-align: right;\n    padding-right: 10px;\n    color: var(--neonYellow);\n    margin: 0;\n}\n\n.hours, #location_container{\n    max-width: 900px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#intro{\n    max-width: 900px;\n    background: linear-gradient(90deg,#000 2px,transparent 0) 0 0,linear-gradient(90deg,#000 2px,transparent 0) 0 100%,linear-gradient(270deg,#000 2px,transparent 0) 100% 0,linear-gradient(270deg,#000 2px,transparent 0) 100% 100%,linear-gradient(180deg,#000 2px,transparent 0) 0 0,linear-gradient(180deg,#000 2px,transparent 0) 100% 0,linear-gradient(0deg,#000 2px,transparent 0) 0 100%,linear-gradient(0deg,#000 2px,transparent 0) 100% 100%,linear-gradient(0deg,rgba(255,239,0,.161) 2px,transparent 0) 0 0,linear-gradient(180deg,rgba(255,239,0,.161) 2px,transparent 0) 0 0;\n    background-repeat: no-repeat;\n    background-size: 28px 28px,28px 28px,28px 28px,28px 28px,28px 28px,28px 28px,28px 28px,28px 28px,100% 100%,100% 100%;\n    padding: 0 20px;\n    margin: 6px;\n}\n\n.hours{\n    color: var(--cyberwhite);\n    background-color: black;\n    width: 50%;\n    margin: 20px 0;\n    border-radius: 5px;\n}\n\n\n.author{\n    text-align: right;\n    font-size: 1.5rem;\n}\n\n.seperator{\n    background-color: #ded207;\n    display: block;\n    height: 1px;\n    margin: 0 auto;\n    overflow: visible;\n    position: relative;\n    margin: 20px auto 0 auto;\n    width: 80vw;\n    background-position: top;\n    background-repeat: no-repeat;\n    background-size: auto 100%;\n}\n\n/* @media screen and (max-width: 950px){\n    .seperator{\n        width: 80vw;\n    }\n} */\n.seperator::after, .seperator::before{\n    background-color: #ded207;\n    content: \"\";\n    height: 1px;\n    position: absolute;\n    width: 50vw;\n}\n\n.seperator-left{\n    box-sizing: border-box;\n    border: 3px solid #ded207;\n    height: 16px;\n    position: absolute;\n    top: -8px;\n    width: 16px;\n    left: -20px;\n}\n\n.seperator-left::after, .seperator-right::after{\n    background-color: #ded207;\n    content: \"\";\n    height: 2px;\n    left: -4px;\n    position: absolute;\n    top: 3px;\n    transform: rotate(45deg);\n    width: 16px; \n}\n\n.seperator-right{\n    box-sizing: border-box;\n    border: 3px solid #ded207;\n    height: 16px;\n    position: absolute;\n    top: -8px;\n    width: 16px;\n    right: -20px;\n}\n\n.hours{\n\n}\n\n.dirty_seperator{\n    width: 100%;\n    min-height: 20px;\n    filter: brightness(70%);\n    object-fit: cover;\n}\n\n#food, #drinks{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* background-color: black; */\n    /* color: var(--cyberwhite); */\n}\n\n#food{\n    background-color: black;\n    color: var(--cyberwhite);\n}\n\n.food_item{\n    /* display: flex;\n    flex-direction: column;\n    align-items: center; */\n    color: var(--cyberwhite);\n    clip-path: polygon(0 85%, 0% 0px, 100% 0, 100% 100%, 15% 100%);\n    position: relative;\n    background-color: var(--cyberRed);\n    width: 450px;\n    margin: 10px 0;\n    padding: 20px;\n    /* height: 90vmin; */\n}\n\n@media (max-width: 450px) {\n    .food_item{\n        width: 100vw;\n    }\n\n    .food_item .border{\n        width: 95vw;\n    }\n}\n\n.food_item img{\n    /* background-color: black; */\n    /* border: black solid 4px; */\n    /* clip-path: polygon(1px 84%, 1% 1px, 99% 1px, 99% 99%, 14% 99%); */\n}\n\n.food_item .border{\n    clip-path: polygon(0 85%, 0% 0px, 100% 0, 100% 100%, 15% 100%);\n    background: black;\n    background-image: url(\"./imgs/dots-mobile.png\");\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.food_description{\n    padding: 0 5px 0 15%;\n    margin: 0;\n    text-align: right;\n}\n/* .cut_out{\n    border-left: 24px solid var(--neonYellow);\n    border-top: 24px solid transparent;\n    bottom: 24px;\n    display: block;\n    height: 0px;\n    position: absolute;\n    width: 24px;\n    z-index: 1;\n} */\n\n#map{\n    height: auto;\n    width: 400px;\n    min-width: 200px;\n    margin-bottom: 25px;\n    border: black 5px solid;\n}\n\n#contact_gallery{\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px,1fr));\n    grid-auto-rows: minmax(350px,1fr);\n    align-items: stretch;\n    gap: 15px;\n    margin: 0 20px;\n}\n\n.contact_container{\n    position: relative;\n}\n\n.contact_container img{\n    background-color: var(--lightBlue);\n    /* border: var(--lightBlue) solid 4px; */\n    display: block;\n    height: auto;\n    width: 100%;\n    object-fit: contain;\n    overflow: hidden;\n}\n\n.overlay{\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: rgba(0,0,0,0.88);\n    overflow: hidden;\n    width: 100%;\n    height: 0;\n    transition: .5s ease;\n}\n.overlay h4, .overlay p{\n    text-align: center;\n    color: var(--lightBlue);\n    font-size: 3rem;\n    font-family: \"Blender\";\n}\n\n.contact_container:hover > .overlay{\n    height: 100%;\n    outline: var(--lightBlue) solid 4px;\n}\n\n.top_seperator{\n    background-image: linear-gradient(90deg,#000 28px,#fcee0a 0,\n    #fcee0a calc(50% - 14px),#000 calc(50% - 14px),#000 calc(50% + 14px),\n    #fcee0a calc(50% + 14px),#fcee0a calc(100% - 28px),#000 calc(100% - 28px),\n    #000),linear-gradient(90deg,#000 2px,#fcee0a 0,#fcee0a calc(50% - 1px),\n    #000 calc(50% - 1px),#000 calc(50% + 1px),#fcee0a calc(50% + 1px),\n    #fcee0a calc(100% - 2px),#000 calc(100% - 2px),#000);\n    background-repeat: no-repeat;\n    background-size: 100% 2px,100% 28px;\n    height: 28px;\n    margin: 20px;\n}\n\n.bottom_seperator{\n    background-image: linear-gradient(90deg,#000 2px,#fcee0a 0,#fcee0a calc(50% - 1px),\n    #000 calc(50% - 1px),#000 calc(50% + 1px),#fcee0a calc(50% + 1px),\n    #fcee0a calc(100% - 2px),#000 calc(100% - 2px),#000),\n    linear-gradient(90deg,#000 28px,#fcee0a 0,#fcee0a calc(50% - 14px),#000 calc(50% - 14px),\n    #000 calc(50% + 14px),#fcee0a calc(50% + 14px),#fcee0a calc(100% - 28px),#000 calc(100% - 28px),#000);\n    background-repeat: no-repeat;\n    background-size: 100% 26px,100% 28px;\n    height: 28px;\n    margin: 20px;\n}\n\nfooter{\n    background-color: var(--neonYellow);\n    text-align: center;\n    width: 100%;\n    height: 50px;\n}\n\nfooter a{\n   font-size: 2rem;\n   color: black;\n   text-decoration: none; \n}\n\n\n.cut_container{\n    border-color: #fcee0a transparent transparent;\n    border-style: solid;\n    border-width: 17px 17px 0 0;\n    height: 0px;\n    width: 100px;\n    /* position: absolute;\n    top: 0; */\n}\n\n/* Want to add an svg after this */\n.black_container{\n    background-color: #000;\n    height: 100px;\n    width: 75vw;\n}\n\n.gallery_container{\n    display: block;\n    width: 100%;\n    position: relative;\n}\n\n.myImg{\n    height: 100px;\n    width: 100px;\n    background-color: red;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _imgs_location_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/location.png */ "./src/imgs/location.png");
/* harmony import */ var _imgs_seperator_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/seperator.svg */ "./src/imgs/seperator.svg");




const homeHTML = `
    <h1>Cyberpunk's</h1> 
    <div class="yellow_border">
        <p class="loading_info">Home page loading...</p>
    </div>
        <div id="intro">
            <p>Hi choomba! Let me jack you into the deets on this joint. The ambiance at Cyberpunks is straight out of the Afterlife. You walk in, and it's like stepping into a slice of Night City itself. The nosh is to die for as well with the menu consisting of Night City's local cuisine. This is the kind of place where you'll create memories you'll want to wipe, just so you can experience it all over again. Cyberpunks has the Night City flavors you have been craving. Stay frosty, choomba!</p>
            <p class="author">- Night city local</p>
        </div>
        <div class="seperator">
            <span class="seperator-left"></span>
            <span class="seperator-right"></span>
        </div>
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
        <img class="dirty_seperator" src="${_imgs_seperator_svg__WEBPACK_IMPORTED_MODULE_1__}" alt="Seperator">
        <div id="location_container">
            <h2>Location</h2>
            <p>52 Kuroshio Avenue, JapanTown, Northern California</p>
            <img id="map" src="${_imgs_location_png__WEBPACK_IMPORTED_MODULE_0__}" alt="Map showing the location of Cyberpunks">
        </div>
    
    
    <!-- <div class="top_seperator"></div>
    <div class="bottom_seperator"></div>
    <div class="cut_container"></div>
    <div class="cut_container" style="width: 42px;"></div>
    <div class="black_container"></div>
    <div class="gallery_container">
        <span class= "gallery_item_arrow"></span>
        <div class="myImg"></div>
    </div>-->
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
var r = document.querySelector(':root');


currentContent.innerHTML = _home__WEBPACK_IMPORTED_MODULE_3__["default"];
currentContent.classList.add("home");

content.appendChild(currentContent);

const nav = document.getElementById("nav_menu");
for(let link of nav.children){
    link.addEventListener('click', () => {
        // Want to stop from running if the user reclicks the same button
        for(let option of nav.children){
            option.classList.remove("active");
        }
        console.log("this is happening");
        content.removeChild(currentContent);
        currentContent.classList.remove("home");
        currentContent.classList.remove("contact");
        currentContent.classList.remove("menu");
        switch (link.id){
            case "home":
                currentContent.innerHTML = _home__WEBPACK_IMPORTED_MODULE_3__["default"];
                currentContent.classList.add("home");
                link.classList.add("active");
                r.style.setProperty('--current_color', 'var(--neonYellow)');
                console.log(r);
                break;
            case "menu":
                currentContent.innerHTML = _menu__WEBPACK_IMPORTED_MODULE_1__["default"];
                currentContent.classList.add("menu");
                link.classList.add("active");
                r.style.setProperty('--current_color', 'var(--cyberRed)');
                console.log(r);
                break;
            case "contact":
                currentContent.innerHTML = _contact__WEBPACK_IMPORTED_MODULE_2__["default"];
                currentContent.classList.add("contact");
                link.classList.add("active");
                r.style.setProperty('--current_color', 'var(--lightBlue)');
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
    <div class="yellow_border" style="transform: rotate(.5turn);">
        <p class="black_loading_info" >Food loading...</p>
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

/***/ "./src/fonts/refinery-25-bold.ttf":
/*!****************************************!*\
  !*** ./src/fonts/refinery-25-bold.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "95ab85501f32cc66733a.ttf";

/***/ }),

/***/ "./src/imgs/black_border.svg":
/*!***********************************!*\
  !*** ./src/imgs/black_border.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cdc9be90f958c830909a.svg";

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
module.exports = __webpack_require__.p + "052ac8a8695869dd8176.png";

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

/***/ "./src/imgs/seperator.svg":
/*!********************************!*\
  !*** ./src/imgs/seperator.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5f2e45f91881986a7e10.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sUUFBUSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssTUFBTSxPQUFPLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFNBQVMsT0FBTyxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxRQUFRLE9BQU8sYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxP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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ25HeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbWdzL2Zvb2RfYW5kX2RyaW5rLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nJTdDanBlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbWdzL3Blb3BsZS8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZyU3Q2pwZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvQ3liZXJ3YXlSaWRlcnMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9CbGVuZGVyLVByby1Cb29rLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vZm9udHMvTkVPTi5UVEZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL3JlZmluZXJ5LTI1LWJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9pbWdzL3llbGxvd19ib3JkZXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi9pbWdzL2JsYWNrX2JvcmRlci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuL2ltZ3MvZG90cy1tb2JpbGUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdHtcbiAgICAtLWxpZ2h0Qmx1ZTogIzAwRjBGRjtcbiAgICAtLW5lb25ZZWxsb3c6ICNmY2VlMGE7XG4gICAgLS1jeWJlclJlZDogI0ZDMDEyQTtcbiAgICAtLWN5YmVyd2hpdGU6ICNmZmY7XG4gICAgLS1jdXJyZW50X2NvbG9yOiB2YXIoLS1uZW9uWWVsbG93KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiQ3liZXJwdW5rXCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2V7XG4gICAgZm9udC1mYW1pbHk6IFwiQmxlbmRlclwiO1xuICAgIHNyYzp1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbkBmb250LWZhY2V7XG4gICAgZm9udC1mYW1pbHk6IFwiTmVvblwiO1xuICAgIHNyYzp1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG59XG5cbkBmb250LWZhY2V7XG4gICAgZm9udC1mYW1pbHk6IFwicmVmaW5lcnktMjVcIjtcbiAgICBzcmM6dXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pXG59XG5cbmJvZHl7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBcIkJsZW5kZXJcIjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8qIHdpZHRoOiAxMDB2dzsgKi9cbn1cblxubmF2e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB6LWluZGV4OiAxO1xufVxuXG5uYXYgYnV0dG9ue1xuICAgIC8qIG1hcmdpbjogMCAyMHB4OyAqL1xuICAgIGZvbnQtZmFtaWx5OiBcIk5lb25cIjtcbiAgICBoZWlnaHQ6IDh2aDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgLyogY29sb3I6IHZhcigtLWxpZ2h0Qmx1ZSk7ICovXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDYwJSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHRyYW5zaXRpb246IGZpbHRlciAuNXMgZWFzZSwgdGV4dC1zaGFkb3cgLjVzIGVhc2U7XG4gICAgLyogdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgLjVzIGVhc2U7ICovXG59XG5cbiNob21le1xuICAgIGNvbG9yOiB2YXIoLS1uZW9uWWVsbG93KTtcbn1cblxuI2hvbWU6aG92ZXJ7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggI0ZGRiwgMCAwIDEwcHggI0ZGRiwgMCAwIDE1cHggI0ZGRiwgMCAwIDIwcHggdmFyKC0tbmVvblllbGxvdyksIDAgMCAzMHB4IHZhcigtLW5lb25ZZWxsb3cpLCAwIDAgNDBweCB2YXIoLS1uZW9uWWVsbG93KSwgMCAwIDU1cHggdmFyKC0tbmVvblllbGxvdyksIDAgMCA3NXB4IHZhcigtLW5lb25ZZWxsb3cpO1xufVxuXG4jbWVudXtcbiAgICBjb2xvcjp2YXIoLS1jeWJlclJlZCk7XG59XG4jbWVudTpob3ZlcntcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjRkZGLCAwIDAgMTBweCAjRkZGLCAwIDAgMTVweCAjRkZGLCAwIDAgMjBweCB2YXIoLS1jeWJlclJlZCksIDAgMCAzMHB4IHZhcigtLWN5YmVyUmVkKSwgMCAwIDQwcHggdmFyKC0tY3liZXJSZWQpLCAwIDAgNTVweCB2YXIoLS1jeWJlclJlZCksIDAgMCA3NXB4IHZhcigtLWN5YmVyUmVkKTtcbn1cblxuI2NvbnRhY3R7XG4gICAgY29sb3I6dmFyKC0tbGlnaHRCbHVlKTtcbn1cbiNjb250YWN0OmhvdmVye1xuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4ICNGRkYsIDAgMCAxMHB4ICNGRkYsIDAgMCAxNXB4ICNGRkYsIDAgMCAyMHB4IHZhcigtLWxpZ2h0Qmx1ZSksIDAgMCAzMHB4IHZhcigtLWxpZ2h0Qmx1ZSksIDAgMCA0MHB4IHZhcigtLWxpZ2h0Qmx1ZSksIDAgMCA1NXB4IHZhcigtLWxpZ2h0Qmx1ZSksIDAgMCA3NXB4IHZhcigtLWxpZ2h0Qmx1ZSk7XG59XG5cbm5hdiBidXR0b246aG92ZXJ7XG4gICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEwMCUpO1xuICAgIC8qIHRleHQtc2hhZG93OiAwIDAgNXB4ICNGRkYsIDAgMCAxMHB4ICNGRkYsIDAgMCAxNXB4ICNGRkYsIDAgMCAyMHB4IHZhcigtLWxpZ2h0Qmx1ZSksIDAgMCAzMHB4IHZhcigtLWxpZ2h0Qmx1ZSksIDAgMCA0MHB4IHZhcigtLWxpZ2h0Qmx1ZSksIDAgMCA1NXB4IHZhcigtLWxpZ2h0Qmx1ZSksIDAgMCA3NXB4IHZhcigtLWxpZ2h0Qmx1ZSk7ICovXG59XG5cbi5hY3RpdmV7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEwMCUpO1xuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4ICNGRkYsIDAgMCAxMHB4ICNGRkYsIDAgMCAxNXB4ICNGRkYsIDAgMCAyMHB4IHZhcigtLWN1cnJlbnRfY29sb3IpLCAwIDAgMzBweCB2YXIoLS1jdXJyZW50X2NvbG9yKSwgMCAwIDQwcHggdmFyKC0tY3VycmVudF9jb2xvciksIDAgMCA1NXB4IHZhcigtLWN1cnJlbnRfY29sb3IpLCAwIDAgNzVweCB2YXIoLS1jdXJyZW50X2NvbG9yKTtcbn1cblxuXG5oMXtcbiAgICBmb250LWZhbWlseTogXCJDeWJlcnB1bmtcIjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogdmFyKC0tbmVvblllbGxvdyk7XG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggN3B4IHJnYmEoMCwyNDAsMjU1LDAuOTUpO1xuICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICBwYWRkaW5nOiAxMHB4IDAgMjBweCAwO1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgze1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuaDJ7XG4gICAgZm9udC1mYW1pbHk6IFwicmVmaW5lcnktMjVcIjtcbiAgICBmb250LXNpemU6IDRyZW07XG59XG5cbiNjb250ZW50e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5lb25ZZWxsb3cpO1xufVxuXG4uY29udGFjdHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB3aWR0aDogLW1vei1hdmFpbGFibGU7ICAgICAgICAgIC8qIFdlYktpdC1iYXNlZCBicm93c2VycyB3aWxsIGlnbm9yZSB0aGlzLiAqL1xuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlOyAgLyogTW96aWxsYS1iYXNlZCBicm93c2VycyB3aWxsIGlnbm9yZSB0aGlzLiAqL1xufVxuXG4uaG9tZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnllbGxvd19ib3JkZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMnB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmctYm90dG9tOiAxOHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5ibGFja19ib3JkZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX199KTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmctYm90dG9tOiAxOHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5sb2FkaW5nX2luZm97XG4gICAgLyogdGV4dC1hbGlnbjogbGVmdDsgKi9cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY29sb3I6IHZhcigtLW5lb25ZZWxsb3cpO1xuICAgIGJvdHRvbTogLTE2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmJsYWNrX2xvYWRpbmdfaW5mb3tcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSguNXR1cm4pO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgY29sb3I6IHZhcigtLW5lb25ZZWxsb3cpO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmhvdXJzLCAjbG9jYXRpb25fY29udGFpbmVye1xuICAgIG1heC13aWR0aDogOTAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNpbnRyb3tcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywjMDAwIDJweCx0cmFuc3BhcmVudCAwKSAwIDAsbGluZWFyLWdyYWRpZW50KDkwZGVnLCMwMDAgMnB4LHRyYW5zcGFyZW50IDApIDAgMTAwJSxsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCMwMDAgMnB4LHRyYW5zcGFyZW50IDApIDEwMCUgMCxsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCMwMDAgMnB4LHRyYW5zcGFyZW50IDApIDEwMCUgMTAwJSxsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCMwMDAgMnB4LHRyYW5zcGFyZW50IDApIDAgMCxsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCMwMDAgMnB4LHRyYW5zcGFyZW50IDApIDEwMCUgMCxsaW5lYXItZ3JhZGllbnQoMGRlZywjMDAwIDJweCx0cmFuc3BhcmVudCAwKSAwIDEwMCUsbGluZWFyLWdyYWRpZW50KDBkZWcsIzAwMCAycHgsdHJhbnNwYXJlbnQgMCkgMTAwJSAxMDAlLGxpbmVhci1ncmFkaWVudCgwZGVnLHJnYmEoMjU1LDIzOSwwLC4xNjEpIDJweCx0cmFuc3BhcmVudCAwKSAwIDAsbGluZWFyLWdyYWRpZW50KDE4MGRlZyxyZ2JhKDI1NSwyMzksMCwuMTYxKSAycHgsdHJhbnNwYXJlbnQgMCkgMCAwO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAyOHB4IDI4cHgsMjhweCAyOHB4LDI4cHggMjhweCwyOHB4IDI4cHgsMjhweCAyOHB4LDI4cHggMjhweCwyOHB4IDI4cHgsMjhweCAyOHB4LDEwMCUgMTAwJSwxMDAlIDEwMCU7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIG1hcmdpbjogNnB4O1xufVxuXG4uaG91cnN7XG4gICAgY29sb3I6IHZhcigtLWN5YmVyd2hpdGUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5cbi5hdXRob3J7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5zZXBlcmF0b3J7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZDIwNztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMCBhdXRvO1xuICAgIHdpZHRoOiA4MHZ3O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xufVxuXG4vKiBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTBweCl7XG4gICAgLnNlcGVyYXRvcntcbiAgICAgICAgd2lkdGg6IDgwdnc7XG4gICAgfVxufSAqL1xuLnNlcGVyYXRvcjo6YWZ0ZXIsIC5zZXBlcmF0b3I6OmJlZm9yZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkMjA3O1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA1MHZ3O1xufVxuXG4uc2VwZXJhdG9yLWxlZnR7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZGVkMjA3O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtOHB4O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGxlZnQ6IC0yMHB4O1xufVxuXG4uc2VwZXJhdG9yLWxlZnQ6OmFmdGVyLCAuc2VwZXJhdG9yLXJpZ2h0OjphZnRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkMjA3O1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgbGVmdDogLTRweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzcHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIHdpZHRoOiAxNnB4OyBcbn1cblxuLnNlcGVyYXRvci1yaWdodHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICNkZWQyMDc7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC04cHg7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgcmlnaHQ6IC0yMHB4O1xufVxuXG4uaG91cnN7XG5cbn1cblxuLmRpcnR5X3NlcGVyYXRvcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg3MCUpO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4jZm9vZCwgI2RyaW5rc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cbiAgICAvKiBjb2xvcjogdmFyKC0tY3liZXJ3aGl0ZSk7ICovXG59XG5cbiNmb29ke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB2YXIoLS1jeWJlcndoaXRlKTtcbn1cblxuLmZvb2RfaXRlbXtcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cbiAgICBjb2xvcjogdmFyKC0tY3liZXJ3aGl0ZSk7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgODUlLCAwJSAwcHgsIDEwMCUgMCwgMTAwJSAxMDAlLCAxNSUgMTAwJSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YmVyUmVkKTtcbiAgICB3aWR0aDogNDUwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICAvKiBoZWlnaHQ6IDkwdm1pbjsgKi9cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICAgLmZvb2RfaXRlbXtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgIH1cblxuICAgIC5mb29kX2l0ZW0gLmJvcmRlcntcbiAgICAgICAgd2lkdGg6IDk1dnc7XG4gICAgfVxufVxuXG4uZm9vZF9pdGVtIGltZ3tcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cbiAgICAvKiBib3JkZXI6IGJsYWNrIHNvbGlkIDRweDsgKi9cbiAgICAvKiBjbGlwLXBhdGg6IHBvbHlnb24oMXB4IDg0JSwgMSUgMXB4LCA5OSUgMXB4LCA5OSUgOTklLCAxNCUgOTklKTsgKi9cbn1cblxuLmZvb2RfaXRlbSAuYm9yZGVye1xuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDg1JSwgMCUgMHB4LCAxMDAlIDAsIDEwMCUgMTAwJSwgMTUlIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX199KTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb29kX2Rlc2NyaXB0aW9ue1xuICAgIHBhZGRpbmc6IDAgNXB4IDAgMTUlO1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi8qIC5jdXRfb3V0e1xuICAgIGJvcmRlci1sZWZ0OiAyNHB4IHNvbGlkIHZhcigtLW5lb25ZZWxsb3cpO1xuICAgIGJvcmRlci10b3A6IDI0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm90dG9tOiAyNHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjRweDtcbiAgICB6LWluZGV4OiAxO1xufSAqL1xuXG4jbWFwe1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIGJvcmRlcjogYmxhY2sgNXB4IHNvbGlkO1xufVxuXG4jY29udGFjdF9nYWxsZXJ5e1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwxZnIpKTtcbiAgICBncmlkLWF1dG8tcm93czogbWlubWF4KDM1MHB4LDFmcik7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZ2FwOiAxNXB4O1xuICAgIG1hcmdpbjogMCAyMHB4O1xufVxuXG4uY29udGFjdF9jb250YWluZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY29udGFjdF9jb250YWluZXIgaW1ne1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Qmx1ZSk7XG4gICAgLyogYm9yZGVyOiB2YXIoLS1saWdodEJsdWUpIHNvbGlkIDRweDsgKi9cbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ub3ZlcmxheXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjg4KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMDtcbiAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcbn1cbi5vdmVybGF5IGg0LCAub3ZlcmxheSBwe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRCbHVlKTtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgZm9udC1mYW1pbHk6IFwiQmxlbmRlclwiO1xufVxuXG4uY29udGFjdF9jb250YWluZXI6aG92ZXIgPiAub3ZlcmxheXtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3V0bGluZTogdmFyKC0tbGlnaHRCbHVlKSBzb2xpZCA0cHg7XG59XG5cbi50b3Bfc2VwZXJhdG9ye1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywjMDAwIDI4cHgsI2ZjZWUwYSAwLFxuICAgICNmY2VlMGEgY2FsYyg1MCUgLSAxNHB4KSwjMDAwIGNhbGMoNTAlIC0gMTRweCksIzAwMCBjYWxjKDUwJSArIDE0cHgpLFxuICAgICNmY2VlMGEgY2FsYyg1MCUgKyAxNHB4KSwjZmNlZTBhIGNhbGMoMTAwJSAtIDI4cHgpLCMwMDAgY2FsYygxMDAlIC0gMjhweCksXG4gICAgIzAwMCksbGluZWFyLWdyYWRpZW50KDkwZGVnLCMwMDAgMnB4LCNmY2VlMGEgMCwjZmNlZTBhIGNhbGMoNTAlIC0gMXB4KSxcbiAgICAjMDAwIGNhbGMoNTAlIC0gMXB4KSwjMDAwIGNhbGMoNTAlICsgMXB4KSwjZmNlZTBhIGNhbGMoNTAlICsgMXB4KSxcbiAgICAjZmNlZTBhIGNhbGMoMTAwJSAtIDJweCksIzAwMCBjYWxjKDEwMCUgLSAycHgpLCMwMDApO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDJweCwxMDAlIDI4cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIG1hcmdpbjogMjBweDtcbn1cblxuLmJvdHRvbV9zZXBlcmF0b3J7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCMwMDAgMnB4LCNmY2VlMGEgMCwjZmNlZTBhIGNhbGMoNTAlIC0gMXB4KSxcbiAgICAjMDAwIGNhbGMoNTAlIC0gMXB4KSwjMDAwIGNhbGMoNTAlICsgMXB4KSwjZmNlZTBhIGNhbGMoNTAlICsgMXB4KSxcbiAgICAjZmNlZTBhIGNhbGMoMTAwJSAtIDJweCksIzAwMCBjYWxjKDEwMCUgLSAycHgpLCMwMDApLFxuICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywjMDAwIDI4cHgsI2ZjZWUwYSAwLCNmY2VlMGEgY2FsYyg1MCUgLSAxNHB4KSwjMDAwIGNhbGMoNTAlIC0gMTRweCksXG4gICAgIzAwMCBjYWxjKDUwJSArIDE0cHgpLCNmY2VlMGEgY2FsYyg1MCUgKyAxNHB4KSwjZmNlZTBhIGNhbGMoMTAwJSAtIDI4cHgpLCMwMDAgY2FsYygxMDAlIC0gMjhweCksIzAwMCk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMjZweCwxMDAlIDI4cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIG1hcmdpbjogMjBweDtcbn1cblxuZm9vdGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5lb25ZZWxsb3cpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG5cbmZvb3RlciBhe1xuICAgZm9udC1zaXplOiAycmVtO1xuICAgY29sb3I6IGJsYWNrO1xuICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBcbn1cblxuXG4uY3V0X2NvbnRhaW5lcntcbiAgICBib3JkZXItY29sb3I6ICNmY2VlMGEgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDE3cHggMTdweCAwIDA7XG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7ICovXG59XG5cbi8qIFdhbnQgdG8gYWRkIGFuIHN2ZyBhZnRlciB0aGlzICovXG4uYmxhY2tfY29udGFpbmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogNzV2dztcbn1cblxuLmdhbGxlcnlfY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm15SW1ne1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDRDQUFzQztJQUN0QyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDJDQUF1QztBQUMzQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiwyQ0FBMkI7QUFDL0I7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUI7QUFDSjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixV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SUFDUixrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0k7Ozs7O3dEQUtvRDtJQUNwRCw0QkFBNEI7SUFDNUIsbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7Ozs7eUdBSXFHO0lBQ3JHLDRCQUE0QjtJQUM1QixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0dBQ0csZUFBZTtHQUNmLFlBQVk7R0FDWixxQkFBcUI7QUFDeEI7OztBQUdBO0lBQ0ksNkNBQTZDO0lBQzdDLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLFlBQVk7SUFDWjthQUNTO0FBQ2I7O0FBRUEsa0NBQWtDO0FBQ2xDO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcbiAgICAtLWxpZ2h0Qmx1ZTogIzAwRjBGRjtcXG4gICAgLS1uZW9uWWVsbG93OiAjZmNlZTBhO1xcbiAgICAtLWN5YmVyUmVkOiAjRkMwMTJBO1xcbiAgICAtLWN5YmVyd2hpdGU6ICNmZmY7XFxuICAgIC0tY3VycmVudF9jb2xvcjogdmFyKC0tbmVvblllbGxvdyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIkN5YmVycHVua1xcXCI7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL0N5YmVyd2F5UmlkZXJzLnR0ZicpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2V7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQmxlbmRlclxcXCI7XFxuICAgIHNyYzp1cmwoJy4vZm9udHMvQmxlbmRlci1Qcm8tQm9vay5vdGYnKTtcXG59XFxuXFxuQGZvbnQtZmFjZXtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJOZW9uXFxcIjtcXG4gICAgc3JjOnVybCgnLi9mb250cy9ORU9OLlRURicpO1xcbn1cXG5cXG5AZm9udC1mYWNle1xcbiAgICBmb250LWZhbWlseTogXFxcInJlZmluZXJ5LTI1XFxcIjtcXG4gICAgc3JjOnVybCgnLi9mb250cy9yZWZpbmVyeS0yNS1ib2xkLnR0ZicpXFxufVxcblxcbmJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJCbGVuZGVyXFxcIjtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIHdpZHRoOiAxMDB2dzsgKi9cXG59XFxuXFxubmF2e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxubmF2IGJ1dHRvbntcXG4gICAgLyogbWFyZ2luOiAwIDIwcHg7ICovXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTmVvblxcXCI7XFxuICAgIGhlaWdodDogOHZoO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgLyogY29sb3I6IHZhcigtLWxpZ2h0Qmx1ZSk7ICovXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg2MCUpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IGZpbHRlciAuNXMgZWFzZSwgdGV4dC1zaGFkb3cgLjVzIGVhc2U7XFxuICAgIC8qIHRyYW5zaXRpb246IHRleHQtc2hhZG93IC41cyBlYXNlOyAqL1xcbn1cXG5cXG4jaG9tZXtcXG4gICAgY29sb3I6IHZhcigtLW5lb25ZZWxsb3cpO1xcbn1cXG5cXG4jaG9tZTpob3ZlcntcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggI0ZGRiwgMCAwIDEwcHggI0ZGRiwgMCAwIDE1cHggI0ZGRiwgMCAwIDIwcHggdmFyKC0tbmVvblllbGxvdyksIDAgMCAzMHB4IHZhcigtLW5lb25ZZWxsb3cpLCAwIDAgNDBweCB2YXIoLS1uZW9uWWVsbG93KSwgMCAwIDU1cHggdmFyKC0tbmVvblllbGxvdyksIDAgMCA3NXB4IHZhcigtLW5lb25ZZWxsb3cpO1xcbn1cXG5cXG4jbWVudXtcXG4gICAgY29sb3I6dmFyKC0tY3liZXJSZWQpO1xcbn1cXG4jbWVudTpob3ZlcntcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggI0ZGRiwgMCAwIDEwcHggI0ZGRiwgMCAwIDE1cHggI0ZGRiwgMCAwIDIwcHggdmFyKC0tY3liZXJSZWQpLCAwIDAgMzBweCB2YXIoLS1jeWJlclJlZCksIDAgMCA0MHB4IHZhcigtLWN5YmVyUmVkKSwgMCAwIDU1cHggdmFyKC0tY3liZXJSZWQpLCAwIDAgNzVweCB2YXIoLS1jeWJlclJlZCk7XFxufVxcblxcbiNjb250YWN0e1xcbiAgICBjb2xvcjp2YXIoLS1saWdodEJsdWUpO1xcbn1cXG4jY29udGFjdDpob3ZlcntcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggI0ZGRiwgMCAwIDEwcHggI0ZGRiwgMCAwIDE1cHggI0ZGRiwgMCAwIDIwcHggdmFyKC0tbGlnaHRCbHVlKSwgMCAwIDMwcHggdmFyKC0tbGlnaHRCbHVlKSwgMCAwIDQwcHggdmFyKC0tbGlnaHRCbHVlKSwgMCAwIDU1cHggdmFyKC0tbGlnaHRCbHVlKSwgMCAwIDc1cHggdmFyKC0tbGlnaHRCbHVlKTtcXG59XFxuXFxubmF2IGJ1dHRvbjpob3ZlcntcXG4gICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMDAlKTtcXG4gICAgLyogdGV4dC1zaGFkb3c6IDAgMCA1cHggI0ZGRiwgMCAwIDEwcHggI0ZGRiwgMCAwIDE1cHggI0ZGRiwgMCAwIDIwcHggdmFyKC0tbGlnaHRCbHVlKSwgMCAwIDMwcHggdmFyKC0tbGlnaHRCbHVlKSwgMCAwIDQwcHggdmFyKC0tbGlnaHRCbHVlKSwgMCAwIDU1cHggdmFyKC0tbGlnaHRCbHVlKSwgMCAwIDc1cHggdmFyKC0tbGlnaHRCbHVlKTsgKi9cXG59XFxuXFxuLmFjdGl2ZXtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEwMCUpO1xcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjRkZGLCAwIDAgMTBweCAjRkZGLCAwIDAgMTVweCAjRkZGLCAwIDAgMjBweCB2YXIoLS1jdXJyZW50X2NvbG9yKSwgMCAwIDMwcHggdmFyKC0tY3VycmVudF9jb2xvciksIDAgMCA0MHB4IHZhcigtLWN1cnJlbnRfY29sb3IpLCAwIDAgNTVweCB2YXIoLS1jdXJyZW50X2NvbG9yKSwgMCAwIDc1cHggdmFyKC0tY3VycmVudF9jb2xvcik7XFxufVxcblxcblxcbmgxe1xcbiAgICBmb250LWZhbWlseTogXFxcIkN5YmVycHVua1xcXCI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogdmFyKC0tbmVvblllbGxvdyk7XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDdweCByZ2JhKDAsMjQwLDI1NSwwLjk1KTtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBwYWRkaW5nOiAxMHB4IDAgMjBweCAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmgze1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbmgye1xcbiAgICBmb250LWZhbWlseTogXFxcInJlZmluZXJ5LTI1XFxcIjtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4jY29udGVudHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5lb25ZZWxsb3cpO1xcbn1cXG5cXG4uY29udGFjdHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHdpZHRoOiAtbW96LWF2YWlsYWJsZTsgICAgICAgICAgLyogV2ViS2l0LWJhc2VkIGJyb3dzZXJzIHdpbGwgaWdub3JlIHRoaXMuICovXFxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlOyAgLyogTW96aWxsYS1iYXNlZCBicm93c2VycyB3aWxsIGlnbm9yZSB0aGlzLiAqL1xcbn1cXG5cXG4uaG9tZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnllbGxvd19ib3JkZXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIycHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWdzL3llbGxvd19ib3JkZXIuc3ZnXFxcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMThweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmJsYWNrX2JvcmRlcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltZ3MvYmxhY2tfYm9yZGVyLnN2Z1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZy1ib3R0b206IDE4cHg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5sb2FkaW5nX2luZm97XFxuICAgIC8qIHRleHQtYWxpZ246IGxlZnQ7ICovXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY29sb3I6IHZhcigtLW5lb25ZZWxsb3cpO1xcbiAgICBib3R0b206IC0xNnB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmJsYWNrX2xvYWRpbmdfaW5mb3tcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLjV0dXJuKTtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1uZW9uWWVsbG93KTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaG91cnMsICNsb2NhdGlvbl9jb250YWluZXJ7XFxuICAgIG1heC13aWR0aDogOTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNpbnRyb3tcXG4gICAgbWF4LXdpZHRoOiA5MDBweDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCMwMDAgMnB4LHRyYW5zcGFyZW50IDApIDAgMCxsaW5lYXItZ3JhZGllbnQoOTBkZWcsIzAwMCAycHgsdHJhbnNwYXJlbnQgMCkgMCAxMDAlLGxpbmVhci1ncmFkaWVudCgyNzBkZWcsIzAwMCAycHgsdHJhbnNwYXJlbnQgMCkgMTAwJSAwLGxpbmVhci1ncmFkaWVudCgyNzBkZWcsIzAwMCAycHgsdHJhbnNwYXJlbnQgMCkgMTAwJSAxMDAlLGxpbmVhci1ncmFkaWVudCgxODBkZWcsIzAwMCAycHgsdHJhbnNwYXJlbnQgMCkgMCAwLGxpbmVhci1ncmFkaWVudCgxODBkZWcsIzAwMCAycHgsdHJhbnNwYXJlbnQgMCkgMTAwJSAwLGxpbmVhci1ncmFkaWVudCgwZGVnLCMwMDAgMnB4LHRyYW5zcGFyZW50IDApIDAgMTAwJSxsaW5lYXItZ3JhZGllbnQoMGRlZywjMDAwIDJweCx0cmFuc3BhcmVudCAwKSAxMDAlIDEwMCUsbGluZWFyLWdyYWRpZW50KDBkZWcscmdiYSgyNTUsMjM5LDAsLjE2MSkgMnB4LHRyYW5zcGFyZW50IDApIDAgMCxsaW5lYXItZ3JhZGllbnQoMTgwZGVnLHJnYmEoMjU1LDIzOSwwLC4xNjEpIDJweCx0cmFuc3BhcmVudCAwKSAwIDA7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjhweCAyOHB4LDI4cHggMjhweCwyOHB4IDI4cHgsMjhweCAyOHB4LDI4cHggMjhweCwyOHB4IDI4cHgsMjhweCAyOHB4LDI4cHggMjhweCwxMDAlIDEwMCUsMTAwJSAxMDAlO1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxuICAgIG1hcmdpbjogNnB4O1xcbn1cXG5cXG4uaG91cnN7XFxuICAgIGNvbG9yOiB2YXIoLS1jeWJlcndoaXRlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbjogMjBweCAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcblxcbi5hdXRob3J7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnNlcGVyYXRvcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZDIwNztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMCBhdXRvO1xcbiAgICB3aWR0aDogODB2dztcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJTtcXG59XFxuXFxuLyogQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTUwcHgpe1xcbiAgICAuc2VwZXJhdG9ye1xcbiAgICAgICAgd2lkdGg6IDgwdnc7XFxuICAgIH1cXG59ICovXFxuLnNlcGVyYXRvcjo6YWZ0ZXIsIC5zZXBlcmF0b3I6OmJlZm9yZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZDIwNztcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiA1MHZ3O1xcbn1cXG5cXG4uc2VwZXJhdG9yLWxlZnR7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNkZWQyMDc7XFxuICAgIGhlaWdodDogMTZweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC04cHg7XFxuICAgIHdpZHRoOiAxNnB4O1xcbiAgICBsZWZ0OiAtMjBweDtcXG59XFxuXFxuLnNlcGVyYXRvci1sZWZ0OjphZnRlciwgLnNlcGVyYXRvci1yaWdodDo6YWZ0ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWQyMDc7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgbGVmdDogLTRweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDNweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICB3aWR0aDogMTZweDsgXFxufVxcblxcbi5zZXBlcmF0b3ItcmlnaHR7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNkZWQyMDc7XFxuICAgIGhlaWdodDogMTZweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC04cHg7XFxuICAgIHdpZHRoOiAxNnB4O1xcbiAgICByaWdodDogLTIwcHg7XFxufVxcblxcbi5ob3Vyc3tcXG5cXG59XFxuXFxuLmRpcnR5X3NlcGVyYXRvcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg3MCUpO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuI2Zvb2QsICNkcmlua3N7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xcbiAgICAvKiBjb2xvcjogdmFyKC0tY3liZXJ3aGl0ZSk7ICovXFxufVxcblxcbiNmb29ke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHZhcigtLWN5YmVyd2hpdGUpO1xcbn1cXG5cXG4uZm9vZF9pdGVte1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgICBjb2xvcjogdmFyKC0tY3liZXJ3aGl0ZSk7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDg1JSwgMCUgMHB4LCAxMDAlIDAsIDEwMCUgMTAwJSwgMTUlIDEwMCUpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YmVyUmVkKTtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgLyogaGVpZ2h0OiA5MHZtaW47ICovXFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xcbiAgICAuZm9vZF9pdGVte1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICB9XFxuXFxuICAgIC5mb29kX2l0ZW0gLmJvcmRlcntcXG4gICAgICAgIHdpZHRoOiA5NXZ3O1xcbiAgICB9XFxufVxcblxcbi5mb29kX2l0ZW0gaW1ne1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cXG4gICAgLyogYm9yZGVyOiBibGFjayBzb2xpZCA0cHg7ICovXFxuICAgIC8qIGNsaXAtcGF0aDogcG9seWdvbigxcHggODQlLCAxJSAxcHgsIDk5JSAxcHgsIDk5JSA5OSUsIDE0JSA5OSUpOyAqL1xcbn1cXG5cXG4uZm9vZF9pdGVtIC5ib3JkZXJ7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDg1JSwgMCUgMHB4LCAxMDAlIDAsIDEwMCUgMTAwJSwgMTUlIDEwMCUpO1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltZ3MvZG90cy1tb2JpbGUucG5nXFxcIik7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvb2RfZGVzY3JpcHRpb257XFxuICAgIHBhZGRpbmc6IDAgNXB4IDAgMTUlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG4vKiAuY3V0X291dHtcXG4gICAgYm9yZGVyLWxlZnQ6IDI0cHggc29saWQgdmFyKC0tbmVvblllbGxvdyk7XFxuICAgIGJvcmRlci10b3A6IDI0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvdHRvbTogMjRweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICB6LWluZGV4OiAxO1xcbn0gKi9cXG5cXG4jbWFwe1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXG4gICAgYm9yZGVyOiBibGFjayA1cHggc29saWQ7XFxufVxcblxcbiNjb250YWN0X2dhbGxlcnl7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsMWZyKSk7XFxuICAgIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMzUwcHgsMWZyKTtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIGdhcDogMTVweDtcXG4gICAgbWFyZ2luOiAwIDIwcHg7XFxufVxcblxcbi5jb250YWN0X2NvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY29udGFjdF9jb250YWluZXIgaW1ne1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEJsdWUpO1xcbiAgICAvKiBib3JkZXI6IHZhcigtLWxpZ2h0Qmx1ZSkgc29saWQgNHB4OyAqL1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLm92ZXJsYXl7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjg4KTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMDtcXG4gICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XFxufVxcbi5vdmVybGF5IGg0LCAub3ZlcmxheSBwe1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodEJsdWUpO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQmxlbmRlclxcXCI7XFxufVxcblxcbi5jb250YWN0X2NvbnRhaW5lcjpob3ZlciA+IC5vdmVybGF5e1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG91dGxpbmU6IHZhcigtLWxpZ2h0Qmx1ZSkgc29saWQgNHB4O1xcbn1cXG5cXG4udG9wX3NlcGVyYXRvcntcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCMwMDAgMjhweCwjZmNlZTBhIDAsXFxuICAgICNmY2VlMGEgY2FsYyg1MCUgLSAxNHB4KSwjMDAwIGNhbGMoNTAlIC0gMTRweCksIzAwMCBjYWxjKDUwJSArIDE0cHgpLFxcbiAgICAjZmNlZTBhIGNhbGMoNTAlICsgMTRweCksI2ZjZWUwYSBjYWxjKDEwMCUgLSAyOHB4KSwjMDAwIGNhbGMoMTAwJSAtIDI4cHgpLFxcbiAgICAjMDAwKSxsaW5lYXItZ3JhZGllbnQoOTBkZWcsIzAwMCAycHgsI2ZjZWUwYSAwLCNmY2VlMGEgY2FsYyg1MCUgLSAxcHgpLFxcbiAgICAjMDAwIGNhbGMoNTAlIC0gMXB4KSwjMDAwIGNhbGMoNTAlICsgMXB4KSwjZmNlZTBhIGNhbGMoNTAlICsgMXB4KSxcXG4gICAgI2ZjZWUwYSBjYWxjKDEwMCUgLSAycHgpLCMwMDAgY2FsYygxMDAlIC0gMnB4KSwjMDAwKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDJweCwxMDAlIDI4cHg7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4uYm90dG9tX3NlcGVyYXRvcntcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCMwMDAgMnB4LCNmY2VlMGEgMCwjZmNlZTBhIGNhbGMoNTAlIC0gMXB4KSxcXG4gICAgIzAwMCBjYWxjKDUwJSAtIDFweCksIzAwMCBjYWxjKDUwJSArIDFweCksI2ZjZWUwYSBjYWxjKDUwJSArIDFweCksXFxuICAgICNmY2VlMGEgY2FsYygxMDAlIC0gMnB4KSwjMDAwIGNhbGMoMTAwJSAtIDJweCksIzAwMCksXFxuICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywjMDAwIDI4cHgsI2ZjZWUwYSAwLCNmY2VlMGEgY2FsYyg1MCUgLSAxNHB4KSwjMDAwIGNhbGMoNTAlIC0gMTRweCksXFxuICAgICMwMDAgY2FsYyg1MCUgKyAxNHB4KSwjZmNlZTBhIGNhbGMoNTAlICsgMTRweCksI2ZjZWUwYSBjYWxjKDEwMCUgLSAyOHB4KSwjMDAwIGNhbGMoMTAwJSAtIDI4cHgpLCMwMDApO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMjZweCwxMDAlIDI4cHg7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG5mb290ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5lb25ZZWxsb3cpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbmZvb3RlciBhe1xcbiAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICBjb2xvcjogYmxhY2s7XFxuICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBcXG59XFxuXFxuXFxuLmN1dF9jb250YWluZXJ7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZjZWUwYSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxN3B4IDE3cHggMCAwO1xcbiAgICBoZWlnaHQ6IDBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDsgKi9cXG59XFxuXFxuLyogV2FudCB0byBhZGQgYW4gc3ZnIGFmdGVyIHRoaXMgKi9cXG4uYmxhY2tfY29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB3aWR0aDogNzV2dztcXG59XFxuXFxuLmdhbGxlcnlfY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm15SW1ne1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge2ltcG9ydEFsbH0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuY29uc3QgaW1hZ2VzID0gaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi9pbWdzL3Blb3BsZScsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3xzdmd8d2VicCkkLykpO1xuXG5jb25zdCBjb250YWN0SFRNTCA9IGBcbiAgICA8aDE+Q29udGFjdCBVczwvaDE+XG4gICAgPGRpdiBjbGFzcz1cInllbGxvd19ib3JkZXJcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJsb2FkaW5nX2luZm9cIj5Db250YWN0IHBhZ2UgbG9hZGluZy4uLjwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidG9wX3NlcGVyYXRvclwiPjwvZGl2PlxuICAgIDxkaXYgaWQ9XCJjb250YWN0X2dhbGxlcnlcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3RfY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2VzWydKb2hubnlfU2lsdmVyaGFuZC53ZWJwJ119XCIgYWx0PVwiSm9obm55IFNpbHZlcmhhbmQgcGljdHVyZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXlcIj5cbiAgICAgICAgICAgICAgICA8aDQ+Sm9obm55IFNpbHZlckhhbmQ8L2g0PlxuICAgICAgICAgICAgICAgIDxwPi0gQmx1cmIgYWJvdXQgSm9obm55PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdF9jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZXNbJ0p1ZHlfQWx2YXJlei53ZWJwJ119XCIgYWx0PVwiSnVkeSBBbHZhcmV6IFBpY3R1cmVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5XCI+XG4gICAgICAgICAgICAgICAgPGg0Pkp1ZHkgQWx2ZXJlejwvaDQ+XG4gICAgICAgICAgICAgICAgPHA+LSBCbHVyYiBhYm91dCBKdWR5PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdF9jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZXNbJ1JvZ3VlLndlYnAnXX1cIiBhbHQ9XCJSb2d1ZSBBbWVuZGlhcmVzIFBpY3R1cmVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5XCI+XG4gICAgICAgICAgICAgICAgPGg0PlJvZ3VlIEFtZW5kaWFyZXM8L2g0PlxuICAgICAgICAgICAgICAgIDxwPi0gQmx1cmIgYWJvdXQgUm9ndWU8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0X2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlc1snQ2xhaXJlUnVzc2VsbC53ZWJwJ119XCIgYWx0PVwiQ2xhaXJlIFJ1c3NlbGwgUGljdHVyZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXlcIj5cbiAgICAgICAgICAgICAgICA8aDQ+Q2xhaXJlIFJ1c3NlbGw8L2g0PlxuICAgICAgICAgICAgICAgIDxwPi0gQmx1cmIgYWJvdXQgQ2xhaXJlPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJib3R0b21fc2VwZXJhdG9yXCI+PC9kaXY+XG5gO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RIVE1MOyIsImltcG9ydCBsb2NhdGlvbiBmcm9tICcuL2ltZ3MvbG9jYXRpb24ucG5nJztcbmltcG9ydCBzZXBlcmF0b3IgZnJvbSAnLi9pbWdzL3NlcGVyYXRvci5zdmcnXG5cblxuY29uc3QgaG9tZUhUTUwgPSBgXG4gICAgPGgxPkN5YmVycHVuaydzPC9oMT4gXG4gICAgPGRpdiBjbGFzcz1cInllbGxvd19ib3JkZXJcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJsb2FkaW5nX2luZm9cIj5Ib21lIHBhZ2UgbG9hZGluZy4uLjwvcD5cbiAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cImludHJvXCI+XG4gICAgICAgICAgICA8cD5IaSBjaG9vbWJhISBMZXQgbWUgamFjayB5b3UgaW50byB0aGUgZGVldHMgb24gdGhpcyBqb2ludC4gVGhlIGFtYmlhbmNlIGF0IEN5YmVycHVua3MgaXMgc3RyYWlnaHQgb3V0IG9mIHRoZSBBZnRlcmxpZmUuIFlvdSB3YWxrIGluLCBhbmQgaXQncyBsaWtlIHN0ZXBwaW5nIGludG8gYSBzbGljZSBvZiBOaWdodCBDaXR5IGl0c2VsZi4gVGhlIG5vc2ggaXMgdG8gZGllIGZvciBhcyB3ZWxsIHdpdGggdGhlIG1lbnUgY29uc2lzdGluZyBvZiBOaWdodCBDaXR5J3MgbG9jYWwgY3Vpc2luZS4gVGhpcyBpcyB0aGUga2luZCBvZiBwbGFjZSB3aGVyZSB5b3UnbGwgY3JlYXRlIG1lbW9yaWVzIHlvdSdsbCB3YW50IHRvIHdpcGUsIGp1c3Qgc28geW91IGNhbiBleHBlcmllbmNlIGl0IGFsbCBvdmVyIGFnYWluLiBDeWJlcnB1bmtzIGhhcyB0aGUgTmlnaHQgQ2l0eSBmbGF2b3JzIHlvdSBoYXZlIGJlZW4gY3JhdmluZy4gU3RheSBmcm9zdHksIGNob29tYmEhPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJhdXRob3JcIj4tIE5pZ2h0IGNpdHkgbG9jYWw8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VwZXJhdG9yXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNlcGVyYXRvci1sZWZ0XCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZXBlcmF0b3ItcmlnaHRcIj48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaG91cnNcIj5cbiAgICAgICAgICAgIDxoMj5Ib3VyczwvaDI+XG4gICAgICAgICAgICA8cD5TdW5kYXk6IDEwYW0gLSAxMHBtPC9wPlxuICAgICAgICAgICAgPHA+TW9uZGF5OiAxMnBtIC0gOHBtPC9wPlxuICAgICAgICAgICAgPHA+VHVlc2RheTogMTJwbSAtIDhwbTwvcD5cbiAgICAgICAgICAgIDxwPldlZG5lc2RheTogMTJwbSAtIDhwbTwvcD5cbiAgICAgICAgICAgIDxwPlRodXJzZGF5OiAxMnBtIC0gOHBtPC9wPlxuICAgICAgICAgICAgPHA+RnJpZGF5OiAxMGFtIC0gMmFtPC9wPlxuICAgICAgICAgICAgPHA+U2F0dXJkYXk6IDEwYW0gLSAyYW08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW1nIGNsYXNzPVwiZGlydHlfc2VwZXJhdG9yXCIgc3JjPVwiJHtzZXBlcmF0b3J9XCIgYWx0PVwiU2VwZXJhdG9yXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJsb2NhdGlvbl9jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMj5Mb2NhdGlvbjwvaDI+XG4gICAgICAgICAgICA8cD41MiBLdXJvc2hpbyBBdmVudWUsIEphcGFuVG93biwgTm9ydGhlcm4gQ2FsaWZvcm5pYTwvcD5cbiAgICAgICAgICAgIDxpbWcgaWQ9XCJtYXBcIiBzcmM9XCIke2xvY2F0aW9ufVwiIGFsdD1cIk1hcCBzaG93aW5nIHRoZSBsb2NhdGlvbiBvZiBDeWJlcnB1bmtzXCI+XG4gICAgICAgIDwvZGl2PlxuICAgIFxuICAgIFxuICAgIDwhLS0gPGRpdiBjbGFzcz1cInRvcF9zZXBlcmF0b3JcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYm90dG9tX3NlcGVyYXRvclwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjdXRfY29udGFpbmVyXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImN1dF9jb250YWluZXJcIiBzdHlsZT1cIndpZHRoOiA0MnB4O1wiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJibGFja19jb250YWluZXJcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZ2FsbGVyeV9jb250YWluZXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9IFwiZ2FsbGVyeV9pdGVtX2Fycm93XCI+PC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibXlJbWdcIj48L2Rpdj5cbiAgICA8L2Rpdj4tLT5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWVIVE1MOyIsInZhciBtYXAgPSB7XG5cdFwiLi9hcnRpY2hva2VfcGl6emEud2VicFwiOiBcIi4vc3JjL2ltZ3MvZm9vZF9hbmRfZHJpbmsvYXJ0aWNob2tlX3BpenphLndlYnBcIixcblx0XCIuL2J1cnJpdG8ud2VicFwiOiBcIi4vc3JjL2ltZ3MvZm9vZF9hbmRfZHJpbmsvYnVycml0by53ZWJwXCIsXG5cdFwiLi9kYXZpZC53ZWJwXCI6IFwiLi9zcmMvaW1ncy9mb29kX2FuZF9kcmluay9kYXZpZC53ZWJwXCIsXG5cdFwiLi9lZXp5YmVlZi53ZWJwXCI6IFwiLi9zcmMvaW1ncy9mb29kX2FuZF9kcmluay9lZXp5YmVlZi53ZWJwXCIsXG5cdFwiLi9mcmllZF9hbnRzLndlYnBcIjogXCIuL3NyYy9pbWdzL2Zvb2RfYW5kX2RyaW5rL2ZyaWVkX2FudHMud2VicFwiLFxuXHRcIi4vaGF3dF9kYXdnLndlYnBcIjogXCIuL3NyYy9pbWdzL2Zvb2RfYW5kX2RyaW5rL2hhd3RfZGF3Zy53ZWJwXCIsXG5cdFwiLi9qb2hubnkud2VicFwiOiBcIi4vc3JjL2ltZ3MvZm9vZF9hbmRfZHJpbmsvam9obm55LndlYnBcIixcblx0XCIuL2xvY3VzdF9waXp6YS53ZWJwXCI6IFwiLi9zcmMvaW1ncy9mb29kX2FuZF9kcmluay9sb2N1c3RfcGl6emEud2VicFwiLFxuXHRcIi4vbmljb2xhLndlYnBcIjogXCIuL3NyYy9pbWdzL2Zvb2RfYW5kX2RyaW5rL25pY29sYS53ZWJwXCIsXG5cdFwiLi9yYW1tbW1lbi53ZWJwXCI6IFwiLi9zcmMvaW1ncy9mb29kX2FuZF9kcmluay9yYW1tbW1lbi53ZWJwXCIsXG5cdFwiLi9yZWFsZnJ1aXQud2VicFwiOiBcIi4vc3JjL2ltZ3MvZm9vZF9hbmRfZHJpbmsvcmVhbGZydWl0LndlYnBcIixcblx0XCIuL3RvZnVfcGl6emEud2VicFwiOiBcIi4vc3JjL2ltZ3MvZm9vZF9hbmRfZHJpbmsvdG9mdV9waXp6YS53ZWJwXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltZ3MvZm9vZF9hbmRfZHJpbmsgc3luYyBcXFxcLihwbmclN0NqcGU/ZyU3Q3N2ZyU3Q3dlYnApJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9DbGFpcmVSdXNzZWxsLndlYnBcIjogXCIuL3NyYy9pbWdzL3Blb3BsZS9DbGFpcmVSdXNzZWxsLndlYnBcIixcblx0XCIuL0pvaG5ueV9TaWx2ZXJoYW5kLndlYnBcIjogXCIuL3NyYy9pbWdzL3Blb3BsZS9Kb2hubnlfU2lsdmVyaGFuZC53ZWJwXCIsXG5cdFwiLi9KdWR5X0FsdmFyZXoud2VicFwiOiBcIi4vc3JjL2ltZ3MvcGVvcGxlL0p1ZHlfQWx2YXJlei53ZWJwXCIsXG5cdFwiLi9Sb2d1ZS53ZWJwXCI6IFwiLi9zcmMvaW1ncy9wZW9wbGUvUm9ndWUud2VicFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWdzL3Blb3BsZSBzeW5jIFxcXFwuKHBuZyU3Q2pwZT9nJTdDc3ZnJTdDd2VicCkkXCI7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgbWVudUhUTUwgZnJvbSAnLi9tZW51JztcbmltcG9ydCBjb250YWN0SFRNTCBmcm9tICcuL2NvbnRhY3QnO1xuaW1wb3J0IGhvbWVIVE1MIGZyb20gJy4vaG9tZSc7XG5cbmZ1bmN0aW9uIGltcG9ydEFsbChyKSB7XG4gICAgbGV0IGltYWdlcyA9IHt9O1xuICAgIHIua2V5cygpLm1hcCgoaXRlbSwgaW5kZXgpID0+IHsgaW1hZ2VzW2l0ZW0ucmVwbGFjZSgnLi8nLCAnJyldID0gcihpdGVtKTsgfSk7XG4gICAgcmV0dXJuIGltYWdlcztcbn1cbmV4cG9ydCB7IGltcG9ydEFsbCB9O1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5jb25zdCBjdXJyZW50Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xudmFyIHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpO1xuXG5cbmN1cnJlbnRDb250ZW50LmlubmVySFRNTCA9IGhvbWVIVE1MO1xuY3VycmVudENvbnRlbnQuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQoY3VycmVudENvbnRlbnQpO1xuXG5jb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdl9tZW51XCIpO1xuZm9yKGxldCBsaW5rIG9mIG5hdi5jaGlsZHJlbil7XG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gV2FudCB0byBzdG9wIGZyb20gcnVubmluZyBpZiB0aGUgdXNlciByZWNsaWNrcyB0aGUgc2FtZSBidXR0b25cbiAgICAgICAgZm9yKGxldCBvcHRpb24gb2YgbmF2LmNoaWxkcmVuKXtcbiAgICAgICAgICAgIG9wdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyBoYXBwZW5pbmdcIik7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY3VycmVudENvbnRlbnQpO1xuICAgICAgICBjdXJyZW50Q29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaG9tZVwiKTtcbiAgICAgICAgY3VycmVudENvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcImNvbnRhY3RcIik7XG4gICAgICAgIGN1cnJlbnRDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51XCIpO1xuICAgICAgICBzd2l0Y2ggKGxpbmsuaWQpe1xuICAgICAgICAgICAgY2FzZSBcImhvbWVcIjpcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29udGVudC5pbm5lckhUTUwgPSBob21lSFRNTDtcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29udGVudC5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcbiAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgci5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jdXJyZW50X2NvbG9yJywgJ3ZhcigtLW5lb25ZZWxsb3cpJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibWVudVwiOlxuICAgICAgICAgICAgICAgIGN1cnJlbnRDb250ZW50LmlubmVySFRNTCA9IG1lbnVIVE1MO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICByLnN0eWxlLnNldFByb3BlcnR5KCctLWN1cnJlbnRfY29sb3InLCAndmFyKC0tY3liZXJSZWQpJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY29udGFjdFwiOlxuICAgICAgICAgICAgICAgIGN1cnJlbnRDb250ZW50LmlubmVySFRNTCA9IGNvbnRhY3RIVE1MO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xuICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICByLnN0eWxlLnNldFByb3BlcnR5KCctLWN1cnJlbnRfY29sb3InLCAndmFyKC0tbGlnaHRCbHVlKScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3VycmVudENvbnRlbnQpOyAgICAgXG4gICAgfSk7XG59XG5cblxuIiwiaW1wb3J0IHtpbXBvcnRBbGx9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmNvbnN0IGltYWdlcyA9IGltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4vaW1ncy9mb29kX2FuZF9kcmluaycsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3xzdmd8d2VicCkkLykpO1xuY29uc3QgbWVudUhUTUwgPSBgXG48aDE+TWVudTwvaDE+XG48ZGl2IGNsYXNzPVwieWVsbG93X2JvcmRlclwiPlxuICAgIDxwIGNsYXNzPVwibG9hZGluZ19pbmZvXCI+IE1lbnUgbG9hZGluZy4uLjwvcD5cbjwvZGl2PlxuICAgIDxkaXYgaWQ9XCJkcmlua3NcIj5cbiAgICAgICAgPGgyPkRyaW5rczwvaDI+XG4gICAgICAgIDxoMz5BZnRlckxpZmU8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vZF9pdGVtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5Kb2hubnkgU2lsdmVySGFuZDwvc3Ryb25nPjwvcD5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2VzWydqb2hubnkud2VicCddfVwiIGFsdD1cIkpvaG5ueSBTaWx2ZXJoYW5kIGRyaW5rXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmb29kX2Rlc2NyaXB0aW9uXCI+LSBBIHRlcXVpbGEgb2xkIGZhc2hpb25lZCB3aXRoIGEgc3BsYXNoIG9mIGJlZXIgYW5kIGEgY2hpbGkgZ2FybmlzaC4gRm9yIHRoZSByb2NrZXJib3kgd2hvIG5ldmVyIGdhdmUgdXAuPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vZF9pdGVtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgPHA+RGF2aWQgTWFydGluZXo8L3A+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlc1snZGF2aWQud2VicCddfVwiIGFsdD1cIkRhdmlkIE1hcnRpbmV6IGRyaW5rXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmb29kX2Rlc2NyaXB0aW9uXCI+LSBBIHNob3Qgb2Ygdm9ka2Egb24gdGhlIHJvY2tzLCB0b3BwZWQgd2l0aCBOaWNvbGEuIEFpbSBoaWdoIGFuZCBnbyBvdXQgd2l0aCBhIGJhbmc8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb29kX2l0ZW1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3JkZXJcIj5cbiAgICAgICAgICAgICAgICA8cD5OaUNvbGE8L3A+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlc1snbmljb2xhLndlYnAnXX1cIiBhbHQ9XCJOaUNvbGEgcGljdHVyZVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vZF9kZXNjcmlwdGlvblwiPi0gQW1lcmljYSdzIGZhdm9yaXRlIGRyaW5rITwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwieWVsbG93X2JvcmRlclwiIHN0eWxlPVwidHJhbnNmb3JtOiByb3RhdGUoLjV0dXJuKTtcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJibGFja19sb2FkaW5nX2luZm9cIiA+Rm9vZCBsb2FkaW5nLi4uPC9wPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgaWQ9XCJmb29kXCI+XG4gICAgICAgIDxoMj5Gb29kPC9oMj5cbiAgICAgICAgPGgzPkJ1Y2stYS1TbGljZTwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb29kX2l0ZW1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3JkZXJcIj5cbiAgICAgICAgICAgICAgICA8cD5BcnRpY2hva2Ug4oCYTuKAmSBBdm9jYWRvIFBpenphPC9wPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZXNbJ2FydGljaG9rZV9waXp6YS53ZWJwJ119XCIgYWx0PVwiQXJ0aWNob2tlIOKAmE7igJkgQXZvY2FkbyBQaXp6YVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vZF9kZXNjcmlwdGlvblwiPi0gVG9wcGluZyBpdCB0byB0aGUgbmV4dCBsZXZlbDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb2RfaXRlbVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvcmRlclwiPlxuICAgICAgICAgICAgICAgIDxwPlRvZnXigJlkIFR1bmEgYW5kIFBpbmVhcHBsZSBQaXp6YTwvcD5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2VzWyd0b2Z1X3BpenphLndlYnAnXX1cIiBhbHQ9XCJUb2Z14oCZZCBUdW5hIGFuZCBQaW5lYXBwbGUgUGl6emFcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvb2RfZGVzY3JpcHRpb25cIj4tIFZlZ2FucyBjYW7igJl0IGdldCBlbm91Z2ggb2YgaXQ8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb29kX2l0ZW1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3JkZXJcIj5cbiAgICAgICAgICAgICAgICA8cD5Mb2N1c3QgUGVwcGVyb25pIFBpenphPC9wPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZXNbJ2xvY3VzdF9waXp6YS53ZWJwJ119XCIgYWx0PVwiTG9jdXN0IFBlcHBlcm9uaSBQaXp6YVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vZF9kZXNjcmlwdGlvblwiPi0gSXTigJlsbCBzd2FybSB5b3VyIHRhc3RlIGJ1ZHMhPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDM+T3RoZXI8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vZF9pdGVtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgPHA+RWV6eWJlZWY8cD5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2VzWydlZXp5YmVlZi53ZWJwJ119XCIgYWx0PVwiRWV6eWJlZWYgcGljdHVyZS4gTG9va3Mga2luZGEgZ3Jvc3NcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvb2RfZGVzY3JpcHRpb25cIj5TeW50aGV0aWMgbWVhdCAtIHlvdeKAmXJlIGluIGZvciBhIHRyZWF0ITwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb2RfaXRlbVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvcmRlclwiPlxuICAgICAgICAgICAgICAgIDxwPkhhd3QgRGF3ZzxwPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZXNbJ2hhd3RfZGF3Zy53ZWJwJ119XCIgYWx0PVwiSGF3dCBEYXdnIHBpY3R1cmVcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvb2RfZGVzY3JpcHRpb25cIj5UaGUgdGhpY2tlc3QgZG9ncyBhbmQgdGlnaHRlc3QgYnVucyBpbiB0b3duITwvcD5cbiAgICAgICAgICAgIDwvZGl2PiAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb2RfaXRlbVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvcmRlclwiPlxuICAgICAgICAgICAgICAgIDxwPlJlYWxGcnVpdDxwPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZXNbJ3JlYWxmcnVpdC53ZWJwJ119XCIgYWx0PVwiUmVhbEZydWl0IHBpY3R1cmVcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvb2RfZGVzY3JpcHRpb25cIj5JdCdzIG5vdCBtYXJrZXRpbmcuIEl0J3MgcmVhbC48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb29kX2l0ZW1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3JkZXJcIj5cbiAgICAgICAgICAgICAgICA8cD5SYW1tbW1lbjxwPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZXNbJ3JhbW1tbWVuLndlYnAnXX1cIiBhbHQ9XCJSYW1tbWVuIFBpY3R1cmUuIExvb2tzIGxpa2UgcmFtbWVuXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmb29kX2Rlc2NyaXB0aW9uXCI+QnJhbmQgbmV3IHJlY2lwZSEgM1ggbW9yZSBNU0chPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vZF9pdGVtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgPHA+U2h3YWJzaHdhYiAoRnJpZWQgQW50cykgS2V0Y2h1cDxwPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZXNbJ2ZyaWVkX2FudHMud2VicCddfVwiIGFsdD1cIkZyaWVkIEFudHMgcGljdHVyZVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vZF9kZXNjcmlwdGlvblwiPllvdXIgZmF2b3JpdGUgZm9vZCBmbGF2b3JlZCB3aXRoIHlvdXIgc2Vjb25kIGZhdm9yaXRlIGZvb2Q8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBtZW51SFRNTDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=