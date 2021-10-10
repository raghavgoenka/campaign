webpackHotUpdate_N_E("pages/index",{

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
  alert("Not ");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZXRoZXJldW0vd2ViMy5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwid2luZG93IiwiV2ViMyIsImN1cnJlbnRQcm92aWRlciIsImNvbnNvbGUiLCJsb2ciLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciIsImFjY291bnRzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhbGVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBSUEsSUFBSjs7QUFFQSxJQUFHLFNBQWlDLE9BQU9DLE1BQU0sQ0FBQ0QsSUFBZCxLQUFzQixXQUExRCxFQUFzRTtBQUVsRUEsTUFBSSxHQUFHLElBQUlFLDJDQUFKLENBQVNELE1BQU0sQ0FBQ0QsSUFBUCxDQUFZRyxlQUFyQixDQUFQO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBRUgsQ0FMRCxNQU1JO0FBQ0QsTUFBTUMsUUFBUSxHQUFDLElBQUlKLDJDQUFJLENBQUNLLFNBQUwsQ0FBZUMsWUFBbkIsRUFDZDtBQUNBLGlFQUZjLENBQWY7QUFNQ1IsTUFBSSxHQUFHLElBQUlFLDJDQUFKLENBQVNJLFFBQVQsQ0FBUDtBQUNBLE1BQU1HLFFBQVEsR0FBQ1QsSUFBSSxDQUFDVSxHQUFMLENBQVNDLFdBQVQsRUFBZjtBQUNBUCxTQUFPLENBQUNDLEdBQVIsQ0FBWUksUUFBWjtBQUNGRyxPQUFLLENBQUMsTUFBRCxDQUFMO0FBQ0VSLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGtEQUFaO0FBRUgsQyxDQUNEOzs7QUFDZUwsbUVBQWYsRSxDQWlCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmM1YzhiMTAzMTlmNDRkNThjMmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xyXG5cclxubGV0IHdlYjM7XHJcblxyXG5pZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LndlYjMgIT09J3VuZGVmaW5lZCcpe1xyXG4gICAgICAgIFxyXG4gICAgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy53ZWIzLmN1cnJlbnRQcm92aWRlcik7XHJcbiAgICBjb25zb2xlLmxvZyhcIldlYjMgaXMgZGVmaW5lZFwiKTtcclxuICAgXHJcbn1cclxuZWxzZXtcclxuICAgY29uc3QgcHJvdmlkZXI9bmV3IFdlYjMucHJvdmlkZXJzLkh0dHBQcm92aWRlcihcclxuICAgIC8vICAgJ2h0dHA6Ly8xMjcuMC4wLjE6NzU0NScsXHJcbiAgICAnaHR0cHM6Ly9yaW5rZWJ5LmluZnVyYS5pby92My9lZmFjMzEwNGIxNDc0MWM4YTU4ODU2YWY1OWM3YzdiYidcclxuKTtcclxuXHJcbiAgIFxyXG4gICAgd2ViMyA9IG5ldyBXZWIzKHByb3ZpZGVyKTtcclxuICAgIGNvbnN0IGFjY291bnRzPXdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICBjb25zb2xlLmxvZyhhY2NvdW50cyk7XHJcbiAgYWxlcnQoXCJOb3QgXCIpXHJcbiAgICBjb25zb2xlLmxvZyhcIkluamVjdGVkIHdlYjMgbm90IGRldGVjdGVkLiBVc2luZyBodHRwIHByb3ZpZGVyLlwiKTtcclxuICAgXHJcbn1cclxuLy8gY29uc29sZS5sb2cod2ViMyk7XHJcbmV4cG9ydCBkZWZhdWx0IHdlYjM7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBpbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xyXG5cclxuLy8gY29uc3QgZ2V0V2ViMyA9ICgpID0+XHJcbi8vICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4vLyAgICAgLy8gV2FpdCBmb3IgbG9hZGluZyBjb21wbGV0aW9uIHRvIGF2b2lkIHJhY2UgY29uZGl0aW9ucyB3aXRoIHdlYjMgaW5qZWN0aW9uIHRpbWluZy5cclxuLy8gICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBhc3luYyAoKSA9PiB7XHJcbi8vICAgICAgIC8vIE1vZGVybiBkYXBwIGJyb3dzZXJzLi4uXHJcbi8vICAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcclxuLy8gICAgICAgICBjb25zdCB3ZWIzID0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtKTtcclxuLy8gICAgICAgICB0cnkge1xyXG4vLyAgICAgICAgICAgLy8gUmVxdWVzdCBhY2NvdW50IGFjY2VzcyBpZiBuZWVkZWRcclxuLy8gICAgICAgICAgIGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5lbmFibGUoKTtcclxuLy8gICAgICAgICAgIC8vIEFjY2NvdW50cyBub3cgZXhwb3NlZFxyXG4vLyAgICAgICAgICAgcmVzb2x2ZSh3ZWIzKTtcclxuLy8gICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgLy8gTGVnYWN5IGRhcHAgYnJvd3NlcnMuLi5cclxuLy8gICAgICAgZWxzZSBpZiAod2luZG93LndlYjMpIHtcclxuLy8gICAgICAgICAvLyBVc2UgTWlzdC9NZXRhTWFzaydzIHByb3ZpZGVyLlxyXG4vLyAgICAgICAgIGNvbnN0IHdlYjMgPSB3aW5kb3cud2ViMztcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhcIkluamVjdGVkIHdlYjMgZGV0ZWN0ZWQuXCIpO1xyXG4vLyAgICAgICAgIHJlc29sdmUod2ViMyk7XHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgLy8gRmFsbGJhY2sgdG8gbG9jYWxob3N0OyB1c2UgZGV2IGNvbnNvbGUgcG9ydCBieSBkZWZhdWx0Li4uXHJcbi8vICAgICAgIGVsc2Uge1xyXG4vLyAgICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IFdlYjMucHJvdmlkZXJzLkh0dHBQcm92aWRlcihcclxuLy8gICAgICAgICAgIFwiaHR0cDovLzEyNy4wLjAuMTo3NTQ1XCJcclxuLy8gICAgICAgICApO1xyXG4vLyAgICAgICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhwcm92aWRlcik7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJObyB3ZWIzIGluc3RhbmNlIGluamVjdGVkLCB1c2luZyBMb2NhbCB3ZWIzLlwiKTtcclxuLy8gICAgICAgICByZXNvbHZlKHdlYjMpO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9KTtcclxuLy8gICB9KTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IG5ldyBXZWIzKGdldFdlYjMpOyJdLCJzb3VyY2VSb290IjoiIn0=