webpackHotUpdate_N_E("pages/campaigns/requests",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZXRoZXJldW0vd2ViMy5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwid2luZG93IiwiV2ViMyIsImN1cnJlbnRQcm92aWRlciIsImNvbnNvbGUiLCJsb2ciLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciIsImFjY291bnRzIiwiZXRoIiwiZ2V0QWNjb3VudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLElBQUlBLElBQUo7O0FBRUEsSUFBRyxTQUFpQyxPQUFPQyxNQUFNLENBQUNELElBQWQsS0FBc0IsV0FBMUQsRUFBc0U7QUFFbEVBLE1BQUksR0FBRyxJQUFJRSwyQ0FBSixDQUFTRCxNQUFNLENBQUNELElBQVAsQ0FBWUcsZUFBckIsQ0FBUDtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWjtBQUVILENBTEQsTUFNSTtBQUNELE1BQU1DLFFBQVEsR0FBQyxJQUFJSiwyQ0FBSSxDQUFDSyxTQUFMLENBQWVDLFlBQW5CLEVBQ2Q7QUFDQSxpRUFGYyxDQUFmO0FBTUNSLE1BQUksR0FBRyxJQUFJRSwyQ0FBSixDQUFTSSxRQUFULENBQVA7QUFDQSxNQUFNRyxRQUFRLEdBQUNULElBQUksQ0FBQ1UsR0FBTCxDQUFTQyxXQUFULEVBQWY7QUFDQVAsU0FBTyxDQUFDQyxHQUFSLENBQVlJLFFBQVo7QUFFQUwsU0FBTyxDQUFDQyxHQUFSLENBQVksa0RBQVo7QUFFSCxDLENBQ0Q7OztBQUNlTCxtRUFBZixFLENBaUJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMuMDY4NzQ1NjY0ZGRhMzJkMWVjZWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xyXG5cclxubGV0IHdlYjM7XHJcblxyXG5pZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LndlYjMgIT09J3VuZGVmaW5lZCcpe1xyXG4gICAgICAgIFxyXG4gICAgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy53ZWIzLmN1cnJlbnRQcm92aWRlcik7XHJcbiAgICBjb25zb2xlLmxvZyhcIldlYjMgaXMgZGVmaW5lZFwiKTtcclxuICAgXHJcbn1cclxuZWxzZXtcclxuICAgY29uc3QgcHJvdmlkZXI9bmV3IFdlYjMucHJvdmlkZXJzLkh0dHBQcm92aWRlcihcclxuICAgIC8vICAgJ2h0dHA6Ly8xMjcuMC4wLjE6NzU0NScsXHJcbiAgICAnaHR0cHM6Ly9yaW5rZWJ5LmluZnVyYS5pby92My9lZmFjMzEwNGIxNDc0MWM4YTU4ODU2YWY1OWM3YzdiYidcclxuKTtcclxuXHJcbiAgIFxyXG4gICAgd2ViMyA9IG5ldyBXZWIzKHByb3ZpZGVyKTtcclxuICAgIGNvbnN0IGFjY291bnRzPXdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICBjb25zb2xlLmxvZyhhY2NvdW50cyk7XHJcbiBcclxuICAgIGNvbnNvbGUubG9nKFwiSW5qZWN0ZWQgd2ViMyBub3QgZGV0ZWN0ZWQuIFVzaW5nIGh0dHAgcHJvdmlkZXIuXCIpO1xyXG4gICBcclxufVxyXG4vLyBjb25zb2xlLmxvZyh3ZWIzKTtcclxuZXhwb3J0IGRlZmF1bHQgd2ViMztcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIGltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XHJcblxyXG4vLyBjb25zdCBnZXRXZWIzID0gKCkgPT5cclxuLy8gICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbi8vICAgICAvLyBXYWl0IGZvciBsb2FkaW5nIGNvbXBsZXRpb24gdG8gYXZvaWQgcmFjZSBjb25kaXRpb25zIHdpdGggd2ViMyBpbmplY3Rpb24gdGltaW5nLlxyXG4vLyAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGFzeW5jICgpID0+IHtcclxuLy8gICAgICAgLy8gTW9kZXJuIGRhcHAgYnJvd3NlcnMuLi5cclxuLy8gICAgICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xyXG4vLyAgICAgICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pO1xyXG4vLyAgICAgICAgIHRyeSB7XHJcbi8vICAgICAgICAgICAvLyBSZXF1ZXN0IGFjY291bnQgYWNjZXNzIGlmIG5lZWRlZFxyXG4vLyAgICAgICAgICAgYXdhaXQgd2luZG93LmV0aGVyZXVtLmVuYWJsZSgpO1xyXG4vLyAgICAgICAgICAgLy8gQWNjY291bnRzIG5vdyBleHBvc2VkXHJcbi8vICAgICAgICAgICByZXNvbHZlKHdlYjMpO1xyXG4vLyAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfVxyXG4vLyAgICAgICAvLyBMZWdhY3kgZGFwcCBicm93c2Vycy4uLlxyXG4vLyAgICAgICBlbHNlIGlmICh3aW5kb3cud2ViMykge1xyXG4vLyAgICAgICAgIC8vIFVzZSBNaXN0L01ldGFNYXNrJ3MgcHJvdmlkZXIuXHJcbi8vICAgICAgICAgY29uc3Qgd2ViMyA9IHdpbmRvdy53ZWIzO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFwiSW5qZWN0ZWQgd2ViMyBkZXRlY3RlZC5cIik7XHJcbi8vICAgICAgICAgcmVzb2x2ZSh3ZWIzKTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgICAvLyBGYWxsYmFjayB0byBsb2NhbGhvc3Q7IHVzZSBkZXYgY29uc29sZSBwb3J0IGJ5IGRlZmF1bHQuLi5cclxuLy8gICAgICAgZWxzZSB7XHJcbi8vICAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgV2ViMy5wcm92aWRlcnMuSHR0cFByb3ZpZGVyKFxyXG4vLyAgICAgICAgICAgXCJodHRwOi8vMTI3LjAuMC4xOjc1NDVcIlxyXG4vLyAgICAgICAgICk7XHJcbi8vICAgICAgICAgY29uc3Qgd2ViMyA9IG5ldyBXZWIzKHByb3ZpZGVyKTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHdlYjMgaW5zdGFuY2UgaW5qZWN0ZWQsIHVzaW5nIExvY2FsIHdlYjMuXCIpO1xyXG4vLyAgICAgICAgIHJlc29sdmUod2ViMyk7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH0pO1xyXG4vLyAgIH0pO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgbmV3IFdlYjMoZ2V0V2ViMyk7Il0sInNvdXJjZVJvb3QiOiIifQ==