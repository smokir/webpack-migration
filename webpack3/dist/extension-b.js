(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["library"] = factory();
	else
		root["library"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return webpackJsonplibrary([0],{

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

const common = __webpack_require__(0);

module.exports = function(library) {
    library.addExtension('b', () => common() / 2);
};


/***/ })

},[3]);
});