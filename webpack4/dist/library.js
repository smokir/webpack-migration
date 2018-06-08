(window["webpackJsonplibrary"] = window["webpackJsonplibrary"] || []).push([[0],[
/* 0 */
/***/ (function(module, exports) {

module.exports = function common() {
    return Math.random();
};


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

const _extensions = [];

module.exports = {
    addExtension(key, extension) {
        _extensions[key] = extension;
    },
    doSomething() {
        const a = _extensions.a();
        const b = _extensions.b();
        return a + b;
    }
};


/***/ })
]]);