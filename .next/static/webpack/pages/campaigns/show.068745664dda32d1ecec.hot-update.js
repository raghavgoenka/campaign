webpackHotUpdate_N_E("pages/campaigns/show",{

/***/ "./ethereum/web3.js":
/*!**************************!*\
  !*** ./ethereum/web3.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);

var web3;

if ( true && typeof window.web3 !== 'undefined') {
  web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(window.web3.currentProvider);
  console.log("Web3 is defined");
} else {
  var provider = new web3__WEBPACK_IMPORTED_MODULE_0___default.a.providers.HttpProvider( //   'http://127.0.0.1:7545',
  'https://rinkeby.infura.io/v3/efac3104b14741c8a58856af59c7c7bb');
  web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(provider);
  var accounts = web3.eth.getAccounts();
  console.log(accounts);
  console.log("Injected web3 not detected. Using http provider.");
} // console.log(web3);


/* harmony default export */ __webpack_exports__["default"] = (web3); // import Web3 from "web3";
// const getWeb3 = () =>
//   new Promise((resolve, reject) => {
//     // Wait for loading completion to avoid race conditions with web3 injection timing.
//     window.addEventListener("load", async () => {
//       // Modern dapp browsers...
//       if (window.ethereum) {
//         const web3 = new Web3(window.ethereum);
//         try {
//           // Request account access if needed
//           await window.ethereum.enable();
//           // Acccounts now exposed
//           resolve(web3);
//         } catch (error) {
//           reject(error);
//         }
//       }
//       // Legacy dapp browsers...
//       else if (window.web3) {
//         // Use Mist/MetaMask's provider.
//         const web3 = window.web3;
//         console.log("Injected web3 detected.");
//         resolve(web3);
//       }
//       // Fallback to localhost; use dev console port by default...
//       else {
//         const provider = new Web3.providers.HttpProvider(
//           "http://127.0.0.1:7545"
//         );
//         const web3 = new Web3(provider);
//         console.log("No web3 instance injected, using Local web3.");
//         resolve(web3);
//       }
//     });
//   });
// export default new Web3(getWeb3);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZXRoZXJldW0vd2ViMy5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwid2luZG93IiwiV2ViMyIsImN1cnJlbnRQcm92aWRlciIsImNvbnNvbGUiLCJsb2ciLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciIsImFjY291bnRzIiwiZXRoIiwiZ2V0QWNjb3VudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLElBQUlBLElBQUo7O0FBRUEsSUFBRyxTQUFpQyxPQUFPQyxNQUFNLENBQUNELElBQWQsS0FBc0IsV0FBMUQsRUFBc0U7QUFFbEVBLE1BQUksR0FBRyxJQUFJRSwyQ0FBSixDQUFTRCxNQUFNLENBQUNELElBQVAsQ0FBWUcsZUFBckIsQ0FBUDtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWjtBQUVILENBTEQsTUFNSTtBQUNELE1BQU1DLFFBQVEsR0FBQyxJQUFJSiwyQ0FBSSxDQUFDSyxTQUFMLENBQWVDLFlBQW5CLEVBQ2Q7QUFDQSxpRUFGYyxDQUFmO0FBTUNSLE1BQUksR0FBRyxJQUFJRSwyQ0FBSixDQUFTSSxRQUFULENBQVA7QUFDQSxNQUFNRyxRQUFRLEdBQUNULElBQUksQ0FBQ1UsR0FBTCxDQUFTQyxXQUFULEVBQWY7QUFDQVAsU0FBTyxDQUFDQyxHQUFSLENBQVlJLFFBQVo7QUFFQUwsU0FBTyxDQUFDQyxHQUFSLENBQVksa0RBQVo7QUFFSCxDLENBQ0Q7OztBQUNlTCxtRUFBZixFLENBaUJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYW1wYWlnbnMvc2hvdy4wNjg3NDU2NjRkZGEzMmQxZWNlYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XHJcblxyXG5sZXQgd2ViMztcclxuXHJcbmlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cud2ViMyAhPT0ndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgXHJcbiAgICB3ZWIzID0gbmV3IFdlYjMod2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTtcclxuICAgIGNvbnNvbGUubG9nKFwiV2ViMyBpcyBkZWZpbmVkXCIpO1xyXG4gICBcclxufVxyXG5lbHNle1xyXG4gICBjb25zdCBwcm92aWRlcj1uZXcgV2ViMy5wcm92aWRlcnMuSHR0cFByb3ZpZGVyKFxyXG4gICAgLy8gICAnaHR0cDovLzEyNy4wLjAuMTo3NTQ1JyxcclxuICAgICdodHRwczovL3JpbmtlYnkuaW5mdXJhLmlvL3YzL2VmYWMzMTA0YjE0NzQxYzhhNTg4NTZhZjU5YzdjN2JiJ1xyXG4pO1xyXG5cclxuICAgXHJcbiAgICB3ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpO1xyXG4gICAgY29uc3QgYWNjb3VudHM9d2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgIGNvbnNvbGUubG9nKGFjY291bnRzKTtcclxuIFxyXG4gICAgY29uc29sZS5sb2coXCJJbmplY3RlZCB3ZWIzIG5vdCBkZXRlY3RlZC4gVXNpbmcgaHR0cCBwcm92aWRlci5cIik7XHJcbiAgIFxyXG59XHJcbi8vIGNvbnNvbGUubG9nKHdlYjMpO1xyXG5leHBvcnQgZGVmYXVsdCB3ZWIzO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcclxuXHJcbi8vIGNvbnN0IGdldFdlYjMgPSAoKSA9PlxyXG4vLyAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuLy8gICAgIC8vIFdhaXQgZm9yIGxvYWRpbmcgY29tcGxldGlvbiB0byBhdm9pZCByYWNlIGNvbmRpdGlvbnMgd2l0aCB3ZWIzIGluamVjdGlvbiB0aW1pbmcuXHJcbi8vICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgYXN5bmMgKCkgPT4ge1xyXG4vLyAgICAgICAvLyBNb2Rlcm4gZGFwcCBicm93c2Vycy4uLlxyXG4vLyAgICAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XHJcbi8vICAgICAgICAgY29uc3Qgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XHJcbi8vICAgICAgICAgdHJ5IHtcclxuLy8gICAgICAgICAgIC8vIFJlcXVlc3QgYWNjb3VudCBhY2Nlc3MgaWYgbmVlZGVkXHJcbi8vICAgICAgICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0uZW5hYmxlKCk7XHJcbi8vICAgICAgICAgICAvLyBBY2Njb3VudHMgbm93IGV4cG9zZWRcclxuLy8gICAgICAgICAgIHJlc29sdmUod2ViMyk7XHJcbi8vICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbi8vICAgICAgIC8vIExlZ2FjeSBkYXBwIGJyb3dzZXJzLi4uXHJcbi8vICAgICAgIGVsc2UgaWYgKHdpbmRvdy53ZWIzKSB7XHJcbi8vICAgICAgICAgLy8gVXNlIE1pc3QvTWV0YU1hc2sncyBwcm92aWRlci5cclxuLy8gICAgICAgICBjb25zdCB3ZWIzID0gd2luZG93LndlYjM7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJJbmplY3RlZCB3ZWIzIGRldGVjdGVkLlwiKTtcclxuLy8gICAgICAgICByZXNvbHZlKHdlYjMpO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICAgIC8vIEZhbGxiYWNrIHRvIGxvY2FsaG9zdDsgdXNlIGRldiBjb25zb2xlIHBvcnQgYnkgZGVmYXVsdC4uLlxyXG4vLyAgICAgICBlbHNlIHtcclxuLy8gICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoXHJcbi8vICAgICAgICAgICBcImh0dHA6Ly8xMjcuMC4wLjE6NzU0NVwiXHJcbi8vICAgICAgICAgKTtcclxuLy8gICAgICAgICBjb25zdCB3ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gd2ViMyBpbnN0YW5jZSBpbmplY3RlZCwgdXNpbmcgTG9jYWwgd2ViMy5cIik7XHJcbi8vICAgICAgICAgcmVzb2x2ZSh3ZWIzKTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfSk7XHJcbi8vICAgfSk7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBuZXcgV2ViMyhnZXRXZWIzKTsiXSwic291cmNlUm9vdCI6IiJ9