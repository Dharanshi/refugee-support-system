"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mipd";
exports.ids = ["vendor-chunks/mipd"];
exports.modules = {

/***/ "(ssr)/./node_modules/mipd/dist/esm/store.js":
/*!*********************************************!*\
  !*** ./node_modules/mipd/dist/esm/store.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createStore: () => (/* binding */ createStore)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"(ssr)/./node_modules/mipd/dist/esm/utils.js\");\n\nfunction createStore() {\n    const listeners = new Set();\n    let providerDetails = [];\n    const request = () => (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.requestProviders)((providerDetail) => {\n        if (providerDetails.some(({ info }) => info.uuid === providerDetail.info.uuid))\n            return;\n        providerDetails = [...providerDetails, providerDetail];\n        listeners.forEach((listener) => listener(providerDetails, { added: [providerDetail] }));\n    });\n    let unwatch = request();\n    return {\n        _listeners() {\n            return listeners;\n        },\n        clear() {\n            listeners.forEach((listener) => listener([], { removed: [...providerDetails] }));\n            providerDetails = [];\n        },\n        destroy() {\n            this.clear();\n            listeners.clear();\n            unwatch?.();\n        },\n        findProvider({ rdns }) {\n            return providerDetails.find((providerDetail) => providerDetail.info.rdns === rdns);\n        },\n        getProviders() {\n            return providerDetails;\n        },\n        reset() {\n            this.clear();\n            unwatch?.();\n            unwatch = request();\n        },\n        subscribe(listener, { emitImmediately } = {}) {\n            listeners.add(listener);\n            if (emitImmediately)\n                listener(providerDetails, { added: providerDetails });\n            return () => listeners.delete(listener);\n        },\n    };\n}\n//# sourceMappingURL=store.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWlwZC9kaXN0L2VzbS9zdG9yZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QztBQUN2QztBQUNQO0FBQ0E7QUFDQSwwQkFBMEIsMkRBQWdCO0FBQzFDLG9DQUFvQyxNQUFNO0FBQzFDO0FBQ0E7QUFDQSxvRUFBb0UseUJBQXlCO0FBQzdGLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLDJEQUEyRCwrQkFBK0I7QUFDMUY7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsdUJBQXVCLE1BQU07QUFDN0I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw4QkFBOEIsa0JBQWtCLElBQUk7QUFDcEQ7QUFDQTtBQUNBLDRDQUE0Qyx3QkFBd0I7QUFDcEU7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVmdWdlZS1pZGVudGlmaWNhdGlvbi1hcHAtdjIvLi9ub2RlX21vZHVsZXMvbWlwZC9kaXN0L2VzbS9zdG9yZS5qcz8yNjNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlcXVlc3RQcm92aWRlcnMgfSBmcm9tICcuL3V0aWxzLmpzJztcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdG9yZSgpIHtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSBuZXcgU2V0KCk7XG4gICAgbGV0IHByb3ZpZGVyRGV0YWlscyA9IFtdO1xuICAgIGNvbnN0IHJlcXVlc3QgPSAoKSA9PiByZXF1ZXN0UHJvdmlkZXJzKChwcm92aWRlckRldGFpbCkgPT4ge1xuICAgICAgICBpZiAocHJvdmlkZXJEZXRhaWxzLnNvbWUoKHsgaW5mbyB9KSA9PiBpbmZvLnV1aWQgPT09IHByb3ZpZGVyRGV0YWlsLmluZm8udXVpZCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHByb3ZpZGVyRGV0YWlscyA9IFsuLi5wcm92aWRlckRldGFpbHMsIHByb3ZpZGVyRGV0YWlsXTtcbiAgICAgICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiBsaXN0ZW5lcihwcm92aWRlckRldGFpbHMsIHsgYWRkZWQ6IFtwcm92aWRlckRldGFpbF0gfSkpO1xuICAgIH0pO1xuICAgIGxldCB1bndhdGNoID0gcmVxdWVzdCgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIF9saXN0ZW5lcnMoKSB7XG4gICAgICAgICAgICByZXR1cm4gbGlzdGVuZXJzO1xuICAgICAgICB9LFxuICAgICAgICBjbGVhcigpIHtcbiAgICAgICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4gbGlzdGVuZXIoW10sIHsgcmVtb3ZlZDogWy4uLnByb3ZpZGVyRGV0YWlsc10gfSkpO1xuICAgICAgICAgICAgcHJvdmlkZXJEZXRhaWxzID0gW107XG4gICAgICAgIH0sXG4gICAgICAgIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgICAgICBsaXN0ZW5lcnMuY2xlYXIoKTtcbiAgICAgICAgICAgIHVud2F0Y2g/LigpO1xuICAgICAgICB9LFxuICAgICAgICBmaW5kUHJvdmlkZXIoeyByZG5zIH0pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm92aWRlckRldGFpbHMuZmluZCgocHJvdmlkZXJEZXRhaWwpID0+IHByb3ZpZGVyRGV0YWlsLmluZm8ucmRucyA9PT0gcmRucyk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3ZpZGVycygpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm92aWRlckRldGFpbHM7XG4gICAgICAgIH0sXG4gICAgICAgIHJlc2V0KCkge1xuICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICAgICAgdW53YXRjaD8uKCk7XG4gICAgICAgICAgICB1bndhdGNoID0gcmVxdWVzdCgpO1xuICAgICAgICB9LFxuICAgICAgICBzdWJzY3JpYmUobGlzdGVuZXIsIHsgZW1pdEltbWVkaWF0ZWx5IH0gPSB7fSkge1xuICAgICAgICAgICAgbGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XG4gICAgICAgICAgICBpZiAoZW1pdEltbWVkaWF0ZWx5KVxuICAgICAgICAgICAgICAgIGxpc3RlbmVyKHByb3ZpZGVyRGV0YWlscywgeyBhZGRlZDogcHJvdmlkZXJEZXRhaWxzIH0pO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IGxpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpO1xuICAgICAgICB9LFxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdG9yZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mipd/dist/esm/store.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/mipd/dist/esm/utils.js":
/*!*********************************************!*\
  !*** ./node_modules/mipd/dist/esm/utils.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   announceProvider: () => (/* binding */ announceProvider),\n/* harmony export */   requestProviders: () => (/* binding */ requestProviders)\n/* harmony export */ });\n/**\n * Announces an EIP-1193 Provider.\n */\nfunction announceProvider(detail) {\n    const event = new CustomEvent('eip6963:announceProvider', { detail: Object.freeze(detail) });\n    window.dispatchEvent(event);\n    const handler = () => window.dispatchEvent(event);\n    window.addEventListener('eip6963:requestProvider', handler);\n    return () => window.removeEventListener('eip6963:requestProvider', handler);\n}\n/**\n * Watches for EIP-1193 Providers to be announced.\n */\nfunction requestProviders(listener) {\n    if (typeof window === 'undefined')\n        return;\n    const handler = (event) => listener(event.detail);\n    window.addEventListener('eip6963:announceProvider', handler);\n    window.dispatchEvent(new CustomEvent('eip6963:requestProvider'));\n    return () => window.removeEventListener('eip6963:announceProvider', handler);\n}\n//# sourceMappingURL=utils.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWlwZC9kaXN0L2VzbS91dGlscy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsZ0VBQWdFLCtCQUErQjtBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVmdWdlZS1pZGVudGlmaWNhdGlvbi1hcHAtdjIvLi9ub2RlX21vZHVsZXMvbWlwZC9kaXN0L2VzbS91dGlscy5qcz83MDkzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQW5ub3VuY2VzIGFuIEVJUC0xMTkzIFByb3ZpZGVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYW5ub3VuY2VQcm92aWRlcihkZXRhaWwpIHtcbiAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnZWlwNjk2Mzphbm5vdW5jZVByb3ZpZGVyJywgeyBkZXRhaWw6IE9iamVjdC5mcmVlemUoZGV0YWlsKSB9KTtcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgY29uc3QgaGFuZGxlciA9ICgpID0+IHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZWlwNjk2MzpyZXF1ZXN0UHJvdmlkZXInLCBoYW5kbGVyKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2VpcDY5NjM6cmVxdWVzdFByb3ZpZGVyJywgaGFuZGxlcik7XG59XG4vKipcbiAqIFdhdGNoZXMgZm9yIEVJUC0xMTkzIFByb3ZpZGVycyB0byBiZSBhbm5vdW5jZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0UHJvdmlkZXJzKGxpc3RlbmVyKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKVxuICAgICAgICByZXR1cm47XG4gICAgY29uc3QgaGFuZGxlciA9IChldmVudCkgPT4gbGlzdGVuZXIoZXZlbnQuZGV0YWlsKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZWlwNjk2Mzphbm5vdW5jZVByb3ZpZGVyJywgaGFuZGxlcik7XG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdlaXA2OTYzOnJlcXVlc3RQcm92aWRlcicpKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2VpcDY5NjM6YW5ub3VuY2VQcm92aWRlcicsIGhhbmRsZXIpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mipd/dist/esm/utils.js\n");

/***/ })

};
;