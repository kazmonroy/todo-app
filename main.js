/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --main: rgba(250, 128, 114, 1);\n    --main-hover: rgba(250, 128, 114, .5);\n    --nav-bg: rgb(250, 250, 250);\n    --nav-bg-hover: #EEEEEE;\n    --gray: rgb(83, 83, 83);\n}\n\nhtml, body {\n    min-height: 100vh;\n}\n\nbody {\n    font-size: .9rem;\n\n    font-family: 'Montserrat', sans-serif;\n    display: grid;\n    overflow: hidden;\n    grid-template-rows: auto 1fr;\n    grid-template-columns: 250px 1fr;\n    grid-template-areas:\n        \"header header\"\n        \"nav wrapper\"\n}\n\nheader {\n    grid-area: header;\n    background-color: var(--main);\n    color: white;\n\n}\n\n.header-links {\n    display: flex;\n    align-items: center;\n    margin: auto 50px;\n    padding: 6px 0px;\n\n}\n\n.header-links>* {\n    padding: 5px;\n    cursor: pointer;\n    border-radius: 5px;\n    margin-right: 5px;\n    display: inline-block;\n}\n\n.burger-menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 3px;\n}\n\n.burger {\n    height: 1px;\n    width: 15px;\n    margin-bottom: 4px;\n    background-color: white;\n}\n\n.home-icon {\n\n    filter: invert(100%) sepia(0%) saturate(6%) hue-rotate(198deg) brightness(101%) contrast(101%);\n\n}\n\n.hd-link:hover {\n    background-color: rgba(186, 31, 14, 0.5);\n}\n\nnav {\n    grid-area: nav;\n    /* max-width: 250px; */\n    height: 100vh;\n\n    background-color: var(--nav-bg);\n    font-size: .9rem;\n\n    transition: transform .3s ease-in-out;\n}\n\nnav.collapse {\n    transform: translateX(-250px);\n}\n\n\nnav.collapse {\n    left: 0px;\n}\n\nnav>* {\n    cursor: pointer;\n\n}\n\n.nav-links {\n    list-style: none;\n    margin: 25px 0px 0px 50px;\n\n}\n\n\n.nav-link {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    padding: 8px;\n    border-radius: 5px;\n    margin-right: 5px;\n\n}\n\n.nav-icon {\n    margin-right: 10px;\n    min-width: 15px;\n}\n\n.nav-link:hover {\n    background-color: var(--nav-bg-hover);\n}\n\n\n\n\n.wrapper {\n    grid-area: wrapper;\n    max-width: 100vw;\n    display: flex;\n    justify-content: center;\n    margin: 25px 50px;\n    transition: transform .3s ease-in-out;\n\n}\n\n.todo-form {\n    min-width: 600px;\n\n}\n\n.wrapper.collapse {\n    transform: translateX(-250px);\n}\n\nform {\n    min-height: 20px;\n    display: flex;\n    align-items: center;\n    margin: 15px 0px;\n}\n\nform>* {\n    margin: 0px 5px;\n}\n\ninput {\n    border: none;\n    font-size: 1.5rem;\n    min-width: 200px;\n    font-family: inherit;\n    padding: 10px 0px;\n    cursor: pointer;\n}\n\ninput::placeholder {\n    font-size: .9rem;\n}\n\ninput:focus {\n    outline: none;\n\n}\n\n.submit-todo-btn {\n    cursor: pointer;\n    border: none;\n    padding: 5px;\n    background-color: white;\n}\n\n.submit-todo-btn:hover {\n    background-color: var(--nav-bg-hover);\n    border-radius: 50%;\n}\n\n.fa-plus {\n    font-size: 1.5rem;\n    font-weight: 100;\n    background-color: none;\n    pointer-events: none;\n    cursor: not-allowed;\n    color: var(--main);\n}\n\n/* Todo section */\n\n.todo-list,\n.header-links {\n    list-style: none;\n}\n\n.todo {\n    display: flex;\n    align-items: center;\n    padding: 5px;\n    margin: 8px 0px;\n    border-bottom: 1px solid var(--nav-bg-hover);\n}\n\n.todo-status {\n    padding: 8px;\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    border: 1px solid var(--gray);\n    cursor: pointer;\n}\n\n.todo-text {\n    flex: 1;\n    margin: 0px 10px 0px 0px;\n    padding: 5px;\n\n}\n\n.todo-text.edit {\n    border: none;\n    border-left: 2px solid lightblue;\n    outline-color: lightblue;\n}\n\n.remove-btn,\n.edit-btn {\n    cursor: pointer;\n    border: none;\n    padding: 5px;\n    background-color: white;\n    color: var(--gray);\n}\n\n.todo .fa-trash-can,\n.todo .fa-pen-to-square {\n    font-size: 1rem;\n    pointer-events: none;\n    cursor: not-allowed;\n\n}\n\n.remove-btn:hover,\n.edit-btn:hover {\n    color: var(--main);\n\n}\n\n@media  (max-width: 950px) {\n\n    body {\n        grid-template-columns: 200px 1fr;\n    }\n\n    .wrapper{\n        min-width: 300px;\n\n        margin: 25px 20px;\n    }\n\n    .todo-form {\n        min-width: 400px;\n\n    }\n\n\n\n    }\n\n\n@media (max-width: 600px) {\n\n    body {\n        grid-template-columns: 1fr;\n        grid-template-rows: 45px 50px 1fr;\n        grid-template-areas: \n        \"header\"\n        \"nav\"\n        \"wrapper\";\n\n    }\n\n    .header-links {\n        margin: 0px 20px;\n    }\n\n\n    nav {\n        max-height: 50px;\n        display: flex;\n        align-items: center;\n        justify-content: center; \n\n    }\n\n    .nav-links {\n        margin: 0px;\n        display: flex;\n        min-width: 100vw;\n        align-items: center;\n        justify-content: center;\n    }\n\n    .nav-links > * {\n        margin: 0px 20px;\n    }\n\n\n    .todo-form {\n        min-width: 90%;\n    }\n\n    .todo-list {\n        display: flex;\n        flex-direction: column;\n    }\n\n}", "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --main: rgba(250, 128, 114, 1);\n    --main-hover: rgba(250, 128, 114, .5);\n    --nav-bg: rgb(250, 250, 250);\n    --nav-bg-hover: #EEEEEE;\n    --gray: rgb(83, 83, 83);\n}\n\nhtml, body {\n    min-height: 100vh;\n}\n\nbody {\n    font-size: .9rem;\n\n    font-family: 'Montserrat', sans-serif;\n    display: grid;\n    overflow: hidden;\n    grid-template-rows: auto 1fr;\n    grid-template-columns: 250px 1fr;\n    grid-template-areas:\n        \"header header\"\n        \"nav wrapper\"\n}\n\nheader {\n    grid-area: header;\n    background-color: var(--main);\n    color: white;\n\n}\n\n.header-links {\n    display: flex;\n    align-items: center;\n    margin: auto 50px;\n    padding: 6px 0px;\n\n}\n\n.header-links>* {\n    padding: 5px;\n    cursor: pointer;\n    border-radius: 5px;\n    margin-right: 5px;\n    display: inline-block;\n}\n\n.burger-menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 3px;\n}\n\n.burger {\n    height: 1px;\n    width: 15px;\n    margin-bottom: 4px;\n    background-color: white;\n}\n\n.home-icon {\n\n    filter: invert(100%) sepia(0%) saturate(6%) hue-rotate(198deg) brightness(101%) contrast(101%);\n\n}\n\n.hd-link:hover {\n    background-color: rgba(186, 31, 14, 0.5);\n}\n\nnav {\n    grid-area: nav;\n    /* max-width: 250px; */\n    height: 100vh;\n\n    background-color: var(--nav-bg);\n    font-size: .9rem;\n\n    transition: transform .3s ease-in-out;\n}\n\nnav.collapse {\n    transform: translateX(-250px);\n}\n\n\nnav.collapse {\n    left: 0px;\n}\n\nnav>* {\n    cursor: pointer;\n\n}\n\n.nav-links {\n    list-style: none;\n    margin: 25px 0px 0px 50px;\n\n}\n\n\n.nav-link {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    padding: 8px;\n    border-radius: 5px;\n    margin-right: 5px;\n\n}\n\n.nav-icon {\n    margin-right: 10px;\n    min-width: 15px;\n}\n\n.nav-link:hover {\n    background-color: var(--nav-bg-hover);\n}\n\n\n\n\n.wrapper {\n    grid-area: wrapper;\n    max-width: 100vw;\n    display: flex;\n    justify-content: center;\n    margin: 25px 50px;\n    transition: transform .3s ease-in-out;\n\n}\n\n.todo-form {\n    min-width: 600px;\n\n}\n\n.wrapper.collapse {\n    transform: translateX(-250px);\n}\n\nform {\n    min-height: 20px;\n    display: flex;\n    align-items: center;\n    margin: 15px 0px;\n}\n\nform>* {\n    margin: 0px 5px;\n}\n\ninput {\n    border: none;\n    font-size: 1.5rem;\n    min-width: 200px;\n    font-family: inherit;\n    padding: 10px 0px;\n    cursor: pointer;\n}\n\ninput::placeholder {\n    font-size: .9rem;\n}\n\ninput:focus {\n    outline: none;\n\n}\n\n.submit-todo-btn {\n    cursor: pointer;\n    border: none;\n    padding: 5px;\n    background-color: white;\n}\n\n.submit-todo-btn:hover {\n    background-color: var(--nav-bg-hover);\n    border-radius: 50%;\n}\n\n.fa-plus {\n    font-size: 1.5rem;\n    font-weight: 100;\n    background-color: none;\n    pointer-events: none;\n    cursor: not-allowed;\n    color: var(--main);\n}\n\n/* Todo section */\n\n.todo-list,\n.header-links {\n    list-style: none;\n}\n\n.todo {\n    display: flex;\n    align-items: center;\n    padding: 5px;\n    margin: 8px 0px;\n    border-bottom: 1px solid var(--nav-bg-hover);\n}\n\n.todo-status {\n    padding: 8px;\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    border: 1px solid var(--gray);\n    cursor: pointer;\n}\n\n.todo-text {\n    flex: 1;\n    margin: 0px 10px 0px 0px;\n    padding: 5px;\n\n}\n\n.todo-text.edit {\n    border: none;\n    border-left: 2px solid lightblue;\n    outline-color: lightblue;\n}\n\n.remove-btn,\n.edit-btn {\n    cursor: pointer;\n    border: none;\n    padding: 5px;\n    background-color: white;\n    color: var(--gray);\n}\n\n.todo .fa-trash-can,\n.todo .fa-pen-to-square {\n    font-size: 1rem;\n    pointer-events: none;\n    cursor: not-allowed;\n\n}\n\n.remove-btn:hover,\n.edit-btn:hover {\n    color: var(--main);\n\n}\n\n@media  (max-width: 950px) {\n\n    body {\n        grid-template-columns: 200px 1fr;\n    }\n\n    .wrapper{\n        min-width: 300px;\n\n        margin: 25px 20px;\n    }\n\n    .todo-form {\n        min-width: 400px;\n\n    }\n\n\n\n    }\n\n\n@media (max-width: 600px) {\n\n    body {\n        grid-template-columns: 1fr;\n        grid-template-rows: 45px 50px 1fr;\n        grid-template-areas: \n        \"header\"\n        \"nav\"\n        \"wrapper\";\n\n    }\n\n    .header-links {\n        margin: 0px 20px;\n    }\n\n\n    nav {\n        max-height: 50px;\n        display: flex;\n        align-items: center;\n        justify-content: center; \n\n    }\n\n    .nav-links {\n        margin: 0px;\n        display: flex;\n        min-width: 100vw;\n        align-items: center;\n        justify-content: center;\n    }\n\n    .nav-links > * {\n        margin: 0px 20px;\n    }\n\n\n    .todo-form {\n        min-width: 90%;\n    }\n\n    .todo-list {\n        display: flex;\n        flex-direction: column;\n    }\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/style.css":
/*!******************************!*\
  !*** ./src/assets/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css");

      
      
      
      
      
      
      
      
      

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



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/modules/local-storage.js":
/*!**************************************!*\
  !*** ./src/modules/local-storage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addLocalTodo": () => (/* binding */ addLocalTodo),
/* harmony export */   "getLocalTodos": () => (/* binding */ getLocalTodos),
/* harmony export */   "removeLocalTodo": () => (/* binding */ removeLocalTodo)
/* harmony export */ });

const getLocalTodos = () => {
    let todos 
        if(localStorage.getItem('todos') === null) {
            todos = []
        } else {
            todos = JSON.parse(localStorage.getItem('todos'))
        }    return todos            
    }



const addLocalTodo = (todo) => {
    let todos = getLocalTodos()
    todos.push(todo)
    
    return localStorage.setItem('todos', JSON.stringify(todos))
            
    }
    
const removeLocalTodo = (todoText) => {
    let todos = getLocalTodos()
    todos.forEach((todo, index) => {
                if(todo.name === todoText) {
                    todos.splice(index, 1)
                }
            })

    return localStorage.setItem('todos', JSON.stringify(todos))
    
    }

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/style.css */ "./src/assets/style.css");
/* harmony import */ var _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/local-storage.js */ "./src/modules/local-storage.js");



const Todo = (text) => {
  const name = text;
  const tasks = [];
  return { name, tasks };
};

const todoListApp = (function () {
  // propertiers
  const _form = document.querySelector("form");
  const _todoList = document.querySelector(".todo-list");
  const _todoInput = document.querySelector('input[name="todo"]');
  const _todosContainer = document.querySelector(".todos-container");
  const _menuBtn = document.querySelector(".burger-menu");
  const _navBar = document.querySelector("nav");
  const _wrapper = document.querySelector(".wrapper");

  // Display Todos in UI

  const _displayTodos = () => {
    const storedTodos = (0,_modules_local_storage_js__WEBPACK_IMPORTED_MODULE_1__.getLocalTodos)();
    const todos = storedTodos;

    todos.forEach((todo) => {
      _addTodosUI(todo);
    });
  };

  const _addTodosUI = (todo) => {
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo");

    const todoStatus = document.createElement("div");
    todoStatus.classList.add("todo-status");

    const todoText = document.createElement("p");
    todoText.textContent = todo.name;
    todoText.classList.add("todo-text");

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-btn");
    removeBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';

    newTodo.appendChild(todoStatus);
    newTodo.appendChild(todoText);
    newTodo.appendChild(removeBtn);
    newTodo.appendChild(editBtn);

    return _todoList.appendChild(newTodo);
  };

  // Create & add todo

  const _getTodoValue = (_todoInput) => {
    if (_todoInput.value == "") {
      console.log("empty");
      return false;
    } else {
      const todo = Todo(_todoInput.value);
      _todoInput.value = "";

      (0,_modules_local_storage_js__WEBPACK_IMPORTED_MODULE_1__.addLocalTodo)(todo);

      return todo.name;
    }
  };

  const _appendNewTodoUI = (_todoInput) => {
    if (_todoInput.value == "") {
      return false;
    } else {
      const todo = Todo(_todoInput.value);
      _todoInput.value = "";

      (0,_modules_local_storage_js__WEBPACK_IMPORTED_MODULE_1__.addLocalTodo)(todo);

      _addTodosUI(todo);
    }
  };

  const _submitTodo = (e) => {
    e.preventDefault();

    return _appendNewTodoUI(_todoInput);
  };

  // Remove todo

  const _removeTodo = (e) => {
    const todoText = e.target.parentNode.firstChild.nextSibling.textContent;

    if (e.target.classList.contains("remove-btn")) {
      e.target.parentNode.remove();
      (0,_modules_local_storage_js__WEBPACK_IMPORTED_MODULE_1__.removeLocalTodo)(todoText);
    }
  };

  // Edit todo

  const _editTodo = (e) => {
    const _todoInput = e.target.parentNode.firstChild;

    if (e.target.classList.contains("edit-btn")) {
      _todoInput.toggleAttribute("contenteditable");
      _todoInput.classList.toggle("edit");
    }

    _todoInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        _todoInput.toggleAttribute("contenteditable");
        _todoInput.classList.toggle("edit");
      }
    });
  };

  const _buttonsEvents = () => {
    _todosContainer.addEventListener("click", (e) => {
      _removeTodo(e);
      _editTodo(e);
    });
  };

  const start = () => {
    _form.addEventListener("submit", _submitTodo);
    _displayTodos();
    _buttonsEvents();

    _menuBtn.addEventListener("click", () => {
      _navBar.classList.toggle("collapse");
      _wrapper.classList.toggle("collapse");

      _navBar.classList.toggle("open");
      _wrapper.classList.toggle("open");
    });
  };

  return { start };
})();

todoListApp.start();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsT0FBTyxLQUFLLFlBQVksY0FBYyxRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxVQUFVLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxPQUFPLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksY0FBYyxPQUFPLE1BQU0sYUFBYSxPQUFPLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxhQUFhLGFBQWEsT0FBTyxLQUFLLGFBQWEsU0FBUyxPQUFPLE1B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QUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQTRCO0FBS1E7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3QkFBd0Isd0VBQWE7QUFDckM7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUEsTUFBTSx1RUFBWTs7QUFFbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBLE1BQU0sdUVBQVk7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSwwRUFBZTtBQUNyQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvLi9zcmMvYXNzZXRzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC8uL3NyYy9hc3NldHMvc3R5bGUuY3NzPzYwMWQiLCJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwLy4vc3JjL21vZHVsZXMvbG9jYWwtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVtaW5kLW1lLXRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JlbWluZC1tZS10by1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZW1pbmQtbWUtdG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1tYWluOiByZ2JhKDI1MCwgMTI4LCAxMTQsIDEpO1xcbiAgICAtLW1haW4taG92ZXI6IHJnYmEoMjUwLCAxMjgsIDExNCwgLjUpO1xcbiAgICAtLW5hdi1iZzogcmdiKDI1MCwgMjUwLCAyNTApO1xcbiAgICAtLW5hdi1iZy1ob3ZlcjogI0VFRUVFRTtcXG4gICAgLS1ncmF5OiByZ2IoODMsIDgzLCA4Myk7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICAgICAgICBcXFwibmF2IHdyYXBwZXJcXFwiXFxufVxcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcbn1cXG5cXG4uaGVhZGVyLWxpbmtzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiBhdXRvIDUwcHg7XFxuICAgIHBhZGRpbmc6IDZweCAwcHg7XFxuXFxufVxcblxcbi5oZWFkZXItbGlua3M+KiB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5idXJnZXItbWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDNweDtcXG59XFxuXFxuLmJ1cmdlciB7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhvbWUtaWNvbiB7XFxuXFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg2JSkgaHVlLXJvdGF0ZSgxOThkZWcpIGJyaWdodG5lc3MoMTAxJSkgY29udHJhc3QoMTAxJSk7XFxuXFxufVxcblxcbi5oZC1saW5rOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODYsIDMxLCAxNCwgMC41KTtcXG59XFxuXFxubmF2IHtcXG4gICAgZ3JpZC1hcmVhOiBuYXY7XFxuICAgIC8qIG1heC13aWR0aDogMjUwcHg7ICovXFxuICAgIGhlaWdodDogMTAwdmg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZyk7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbm5hdi5jb2xsYXBzZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjUwcHgpO1xcbn1cXG5cXG5cXG5uYXYuY29sbGFwc2Uge1xcbiAgICBsZWZ0OiAwcHg7XFxufVxcblxcbm5hdj4qIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbn1cXG5cXG4ubmF2LWxpbmtzIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgbWFyZ2luOiAyNXB4IDBweCAwcHggNTBweDtcXG5cXG59XFxuXFxuXFxuLm5hdi1saW5rIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuXFxufVxcblxcbi5uYXYtaWNvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgbWluLXdpZHRoOiAxNXB4O1xcbn1cXG5cXG4ubmF2LWxpbms6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmctaG92ZXIpO1xcbn1cXG5cXG5cXG5cXG5cXG4ud3JhcHBlciB7XFxuICAgIGdyaWQtYXJlYTogd3JhcHBlcjtcXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMjVweCA1MHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0O1xcblxcbn1cXG5cXG4udG9kby1mb3JtIHtcXG4gICAgbWluLXdpZHRoOiA2MDBweDtcXG5cXG59XFxuXFxuLndyYXBwZXIuY29sbGFwc2Uge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1MHB4KTtcXG59XFxuXFxuZm9ybSB7XFxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTVweCAwcHg7XFxufVxcblxcbmZvcm0+KiB7XFxuICAgIG1hcmdpbjogMHB4IDVweDtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgcGFkZGluZzogMTBweCAwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcblxcbn1cXG5cXG4uc3VibWl0LXRvZG8tYnRuIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5zdWJtaXQtdG9kby1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmctaG92ZXIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5mYS1wbHVzIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbik7XFxufVxcblxcbi8qIFRvZG8gc2VjdGlvbiAqL1xcblxcbi50b2RvLWxpc3QsXFxuLmhlYWRlci1saW5rcyB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi50b2RvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW46IDhweCAwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1uYXYtYmctaG92ZXIpO1xcbn1cXG5cXG4udG9kby1zdGF0dXMge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JheSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8tdGV4dCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIG1hcmdpbjogMHB4IDEwcHggMHB4IDBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcblxcbn1cXG5cXG4udG9kby10ZXh0LmVkaXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgbGlnaHRibHVlO1xcbiAgICBvdXRsaW5lLWNvbG9yOiBsaWdodGJsdWU7XFxufVxcblxcbi5yZW1vdmUtYnRuLFxcbi5lZGl0LWJ0biB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogdmFyKC0tZ3JheSk7XFxufVxcblxcbi50b2RvIC5mYS10cmFzaC1jYW4sXFxuLnRvZG8gLmZhLXBlbi10by1zcXVhcmUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcblxcbn1cXG5cXG4ucmVtb3ZlLWJ0bjpob3ZlcixcXG4uZWRpdC1idG46aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbik7XFxuXFxufVxcblxcbkBtZWRpYSAgKG1heC13aWR0aDogOTUwcHgpIHtcXG5cXG4gICAgYm9keSB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcXG4gICAgfVxcblxcbiAgICAud3JhcHBlcntcXG4gICAgICAgIG1pbi13aWR0aDogMzAwcHg7XFxuXFxuICAgICAgICBtYXJnaW46IDI1cHggMjBweDtcXG4gICAgfVxcblxcbiAgICAudG9kby1mb3JtIHtcXG4gICAgICAgIG1pbi13aWR0aDogNDAwcHg7XFxuXFxuICAgIH1cXG5cXG5cXG5cXG4gICAgfVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcblxcbiAgICBib2R5IHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0NXB4IDUwcHggMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICAgICBcXFwiaGVhZGVyXFxcIlxcbiAgICAgICAgXFxcIm5hdlxcXCJcXG4gICAgICAgIFxcXCJ3cmFwcGVyXFxcIjtcXG5cXG4gICAgfVxcblxcbiAgICAuaGVhZGVyLWxpbmtzIHtcXG4gICAgICAgIG1hcmdpbjogMHB4IDIwcHg7XFxuICAgIH1cXG5cXG5cXG4gICAgbmF2IHtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDUwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcXG5cXG4gICAgfVxcblxcbiAgICAubmF2LWxpbmtzIHtcXG4gICAgICAgIG1hcmdpbjogMHB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIG1pbi13aWR0aDogMTAwdnc7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLm5hdi1saW5rcyA+ICoge1xcbiAgICAgICAgbWFyZ2luOiAwcHggMjBweDtcXG4gICAgfVxcblxcblxcbiAgICAudG9kby1mb3JtIHtcXG4gICAgICAgIG1pbi13aWR0aDogOTAlO1xcbiAgICB9XFxuXFxuICAgIC50b2RvLWxpc3Qge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztJQUdJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLHFDQUFxQztJQUNyQyw0QkFBNEI7SUFDNUIsdUJBQXVCO0lB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O1FBQ0ksZ0JBQWdCOztRQUVoQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxnQkFBZ0I7O0lBRXBCOzs7O0lBSUE7OztBQUdKOztJQUVJO1FBQ0ksMEJBQTBCO1FBQzFCLGlDQUFpQztRQUNqQzs7O2lCQUdTOztJQUViOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOzs7SUFHQTtRQUNJLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHVCQUF1Qjs7SUFFM0I7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOzs7SUFHQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO0lBQzFCOztBQUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tbWFpbjogcmdiYSgyNTAsIDEyOCwgMTE0LCAxKTtcXG4gICAgLS1tYWluLWhvdmVyOiByZ2JhKDI1MCwgMTI4LCAxMTQsIC41KTtcXG4gICAgLS1uYXYtYmc6IHJnYigyNTAsIDI1MCwgMjUwKTtcXG4gICAgLS1uYXYtYmctaG92ZXI6ICNFRUVFRUU7XFxuICAgIC0tZ3JheTogcmdiKDgzLCA4MywgODMpO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcblxcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICAgICAgXFxcIm5hdiB3cmFwcGVyXFxcIlxcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG59XFxuXFxuLmhlYWRlci1saW5rcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogYXV0byA1MHB4O1xcbiAgICBwYWRkaW5nOiA2cHggMHB4O1xcblxcbn1cXG5cXG4uaGVhZGVyLWxpbmtzPioge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uYnVyZ2VyLW1lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAzcHg7XFxufVxcblxcbi5idXJnZXIge1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5ob21lLWljb24ge1xcblxcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNiUpIGh1ZS1yb3RhdGUoMTk4ZGVnKSBicmlnaHRuZXNzKDEwMSUpIGNvbnRyYXN0KDEwMSUpO1xcblxcbn1cXG5cXG4uaGQtbGluazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg2LCAzMSwgMTQsIDAuNSk7XFxufVxcblxcbm5hdiB7XFxuICAgIGdyaWQtYXJlYTogbmF2O1xcbiAgICAvKiBtYXgtd2lkdGg6IDI1MHB4OyAqL1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmcpO1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcblxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5uYXYuY29sbGFwc2Uge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1MHB4KTtcXG59XFxuXFxuXFxubmF2LmNvbGxhcHNlIHtcXG4gICAgbGVmdDogMHB4O1xcbn1cXG5cXG5uYXY+KiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG59XFxuXFxuLm5hdi1saW5rcyB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMjVweCAwcHggMHB4IDUwcHg7XFxuXFxufVxcblxcblxcbi5uYXYtbGluayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcblxcbn1cXG5cXG4ubmF2LWljb24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIG1pbi13aWR0aDogMTVweDtcXG59XFxuXFxuLm5hdi1saW5rOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnLWhvdmVyKTtcXG59XFxuXFxuXFxuXFxuXFxuLndyYXBwZXIge1xcbiAgICBncmlkLWFyZWE6IHdyYXBwZXI7XFxuICAgIG1heC13aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDI1cHggNTBweDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dDtcXG5cXG59XFxuXFxuLnRvZG8tZm9ybSB7XFxuICAgIG1pbi13aWR0aDogNjAwcHg7XFxuXFxufVxcblxcbi53cmFwcGVyLmNvbGxhcHNlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNTBweCk7XFxufVxcblxcbmZvcm0ge1xcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDE1cHggMHB4O1xcbn1cXG5cXG5mb3JtPioge1xcbiAgICBtYXJnaW46IDBweCA1cHg7XFxufVxcblxcbmlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxufVxcblxcbmlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG5cXG59XFxuXFxuLnN1Ym1pdC10b2RvLWJ0biB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc3VibWl0LXRvZG8tYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnLWhvdmVyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uZmEtcGx1cyB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgY29sb3I6IHZhcigtLW1haW4pO1xcbn1cXG5cXG4vKiBUb2RvIHNlY3Rpb24gKi9cXG5cXG4udG9kby1saXN0LFxcbi5oZWFkZXItbGlua3Mge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4udG9kbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luOiA4cHggMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbmF2LWJnLWhvdmVyKTtcXG59XFxuXFxuLnRvZG8tc3RhdHVzIHtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXkpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvLXRleHQge1xcbiAgICBmbGV4OiAxO1xcbiAgICBtYXJnaW46IDBweCAxMHB4IDBweCAwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG5cXG59XFxuXFxuLnRvZG8tdGV4dC5lZGl0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGxpZ2h0Ymx1ZTtcXG4gICAgb3V0bGluZS1jb2xvcjogbGlnaHRibHVlO1xcbn1cXG5cXG4ucmVtb3ZlLWJ0bixcXG4uZWRpdC1idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xcbn1cXG5cXG4udG9kbyAuZmEtdHJhc2gtY2FuLFxcbi50b2RvIC5mYS1wZW4tdG8tc3F1YXJlIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG5cXG59XFxuXFxuLnJlbW92ZS1idG46aG92ZXIsXFxuLmVkaXQtYnRuOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLW1haW4pO1xcblxcbn1cXG5cXG5AbWVkaWEgIChtYXgtd2lkdGg6IDk1MHB4KSB7XFxuXFxuICAgIGJvZHkge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XFxuICAgIH1cXG5cXG4gICAgLndyYXBwZXJ7XFxuICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xcblxcbiAgICAgICAgbWFyZ2luOiAyNXB4IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgLnRvZG8tZm9ybSB7XFxuICAgICAgICBtaW4td2lkdGg6IDQwMHB4O1xcblxcbiAgICB9XFxuXFxuXFxuXFxuICAgIH1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG5cXG4gICAgYm9keSB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDVweCA1MHB4IDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAgICAgXFxcImhlYWRlclxcXCJcXG4gICAgICAgIFxcXCJuYXZcXFwiXFxuICAgICAgICBcXFwid3JhcHBlclxcXCI7XFxuXFxuICAgIH1cXG5cXG4gICAgLmhlYWRlci1saW5rcyB7XFxuICAgICAgICBtYXJnaW46IDBweCAyMHB4O1xcbiAgICB9XFxuXFxuXFxuICAgIG5hdiB7XFxuICAgICAgICBtYXgtaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXFxuXFxuICAgIH1cXG5cXG4gICAgLm5hdi1saW5rcyB7XFxuICAgICAgICBtYXJnaW46IDBweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5uYXYtbGlua3MgPiAqIHtcXG4gICAgICAgIG1hcmdpbjogMHB4IDIwcHg7XFxuICAgIH1cXG5cXG5cXG4gICAgLnRvZG8tZm9ybSB7XFxuICAgICAgICBtaW4td2lkdGg6IDkwJTtcXG4gICAgfVxcblxcbiAgICAudG9kby1saXN0IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG5leHBvcnQgY29uc3QgZ2V0TG9jYWxUb2RvcyA9ICgpID0+IHtcbiAgICBsZXQgdG9kb3MgXG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpID09PSBudWxsKSB7XG4gICAgICAgICAgICB0b2RvcyA9IFtdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpXG4gICAgICAgIH0gICAgcmV0dXJuIHRvZG9zICAgICAgICAgICAgXG4gICAgfVxuXG5cblxuZXhwb3J0IGNvbnN0IGFkZExvY2FsVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgbGV0IHRvZG9zID0gZ2V0TG9jYWxUb2RvcygpXG4gICAgdG9kb3MucHVzaCh0b2RvKVxuICAgIFxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpXG4gICAgICAgICAgICBcbiAgICB9XG4gICAgXG5leHBvcnQgIGNvbnN0IHJlbW92ZUxvY2FsVG9kbyA9ICh0b2RvVGV4dCkgPT4ge1xuICAgIGxldCB0b2RvcyA9IGdldExvY2FsVG9kb3MoKVxuICAgIHRvZG9zLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYodG9kby5uYW1lID09PSB0b2RvVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICB0b2Rvcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpXG4gICAgXG4gICAgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vYXNzZXRzL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHtcbiAgZ2V0TG9jYWxUb2RvcyxcbiAgYWRkTG9jYWxUb2RvLFxuICByZW1vdmVMb2NhbFRvZG8sXG59IGZyb20gXCIuL21vZHVsZXMvbG9jYWwtc3RvcmFnZS5qc1wiO1xuXG5jb25zdCBUb2RvID0gKHRleHQpID0+IHtcbiAgY29uc3QgbmFtZSA9IHRleHQ7XG4gIGNvbnN0IHRhc2tzID0gW107XG4gIHJldHVybiB7IG5hbWUsIHRhc2tzIH07XG59O1xuXG5jb25zdCB0b2RvTGlzdEFwcCA9IChmdW5jdGlvbiAoKSB7XG4gIC8vIHByb3BlcnRpZXJzXG4gIGNvbnN0IF9mb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gIGNvbnN0IF90b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1saXN0XCIpO1xuICBjb25zdCBfdG9kb0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInRvZG9cIl0nKTtcbiAgY29uc3QgX3RvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2Rvcy1jb250YWluZXJcIik7XG4gIGNvbnN0IF9tZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXItbWVudVwiKTtcbiAgY29uc3QgX25hdkJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIik7XG4gIGNvbnN0IF93cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53cmFwcGVyXCIpO1xuXG4gIC8vIERpc3BsYXkgVG9kb3MgaW4gVUlcblxuICBjb25zdCBfZGlzcGxheVRvZG9zID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JlZFRvZG9zID0gZ2V0TG9jYWxUb2RvcygpO1xuICAgIGNvbnN0IHRvZG9zID0gc3RvcmVkVG9kb3M7XG5cbiAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICBfYWRkVG9kb3NVSSh0b2RvKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBfYWRkVG9kb3NVSSA9ICh0b2RvKSA9PiB7XG4gICAgY29uc3QgbmV3VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBuZXdUb2RvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuXG4gICAgY29uc3QgdG9kb1N0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb1N0YXR1cy5jbGFzc0xpc3QuYWRkKFwidG9kby1zdGF0dXNcIik7XG5cbiAgICBjb25zdCB0b2RvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRvZG9UZXh0LnRleHRDb250ZW50ID0gdG9kby5uYW1lO1xuICAgIHRvZG9UZXh0LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXRleHRcIik7XG5cbiAgICBjb25zdCByZW1vdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlLWJ0blwiKTtcbiAgICByZW1vdmVCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS10cmFzaC1jYW5cIj48L2k+JztcblxuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcImVkaXQtYnRuXCIpO1xuICAgIGVkaXRCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1wZW4tdG8tc3F1YXJlXCI+PC9pPic7XG5cbiAgICBuZXdUb2RvLmFwcGVuZENoaWxkKHRvZG9TdGF0dXMpO1xuICAgIG5ld1RvZG8uYXBwZW5kQ2hpbGQodG9kb1RleHQpO1xuICAgIG5ld1RvZG8uYXBwZW5kQ2hpbGQocmVtb3ZlQnRuKTtcbiAgICBuZXdUb2RvLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuXG4gICAgcmV0dXJuIF90b2RvTGlzdC5hcHBlbmRDaGlsZChuZXdUb2RvKTtcbiAgfTtcblxuICAvLyBDcmVhdGUgJiBhZGQgdG9kb1xuXG4gIGNvbnN0IF9nZXRUb2RvVmFsdWUgPSAoX3RvZG9JbnB1dCkgPT4ge1xuICAgIGlmIChfdG9kb0lucHV0LnZhbHVlID09IFwiXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZW1wdHlcIik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvZG8gPSBUb2RvKF90b2RvSW5wdXQudmFsdWUpO1xuICAgICAgX3RvZG9JbnB1dC52YWx1ZSA9IFwiXCI7XG5cbiAgICAgIGFkZExvY2FsVG9kbyh0b2RvKTtcblxuICAgICAgcmV0dXJuIHRvZG8ubmFtZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgX2FwcGVuZE5ld1RvZG9VSSA9IChfdG9kb0lucHV0KSA9PiB7XG4gICAgaWYgKF90b2RvSW5wdXQudmFsdWUgPT0gXCJcIikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b2RvID0gVG9kbyhfdG9kb0lucHV0LnZhbHVlKTtcbiAgICAgIF90b2RvSW5wdXQudmFsdWUgPSBcIlwiO1xuXG4gICAgICBhZGRMb2NhbFRvZG8odG9kbyk7XG5cbiAgICAgIF9hZGRUb2Rvc1VJKHRvZG8pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBfc3VibWl0VG9kbyA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgcmV0dXJuIF9hcHBlbmROZXdUb2RvVUkoX3RvZG9JbnB1dCk7XG4gIH07XG5cbiAgLy8gUmVtb3ZlIHRvZG9cblxuICBjb25zdCBfcmVtb3ZlVG9kbyA9IChlKSA9PiB7XG4gICAgY29uc3QgdG9kb1RleHQgPSBlLnRhcmdldC5wYXJlbnROb2RlLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcudGV4dENvbnRlbnQ7XG5cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVtb3ZlLWJ0blwiKSkge1xuICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgICAgIHJlbW92ZUxvY2FsVG9kbyh0b2RvVGV4dCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIEVkaXQgdG9kb1xuXG4gIGNvbnN0IF9lZGl0VG9kbyA9IChlKSA9PiB7XG4gICAgY29uc3QgX3RvZG9JbnB1dCA9IGUudGFyZ2V0LnBhcmVudE5vZGUuZmlyc3RDaGlsZDtcblxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJlZGl0LWJ0blwiKSkge1xuICAgICAgX3RvZG9JbnB1dC50b2dnbGVBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIik7XG4gICAgICBfdG9kb0lucHV0LmNsYXNzTGlzdC50b2dnbGUoXCJlZGl0XCIpO1xuICAgIH1cblxuICAgIF90b2RvSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICBfdG9kb0lucHV0LnRvZ2dsZUF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiKTtcbiAgICAgICAgX3RvZG9JbnB1dC5jbGFzc0xpc3QudG9nZ2xlKFwiZWRpdFwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBfYnV0dG9uc0V2ZW50cyA9ICgpID0+IHtcbiAgICBfdG9kb3NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBfcmVtb3ZlVG9kbyhlKTtcbiAgICAgIF9lZGl0VG9kbyhlKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzdGFydCA9ICgpID0+IHtcbiAgICBfZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIF9zdWJtaXRUb2RvKTtcbiAgICBfZGlzcGxheVRvZG9zKCk7XG4gICAgX2J1dHRvbnNFdmVudHMoKTtcblxuICAgIF9tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBfbmF2QmFyLmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZVwiKTtcbiAgICAgIF93cmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZVwiKTtcblxuICAgICAgX25hdkJhci5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcbiAgICAgIF93cmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7IHN0YXJ0IH07XG59KSgpO1xuXG50b2RvTGlzdEFwcC5zdGFydCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9