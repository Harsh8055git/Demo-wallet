"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/SignIn.js":
/*!******************************!*\
  !*** ./components/SignIn.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignIn; }\n/* harmony export */ });\n/* harmony import */ var _home_harsh_Desktop_Zefi_youtube_tutorials_web3Auth_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_harsh_Desktop_Zefi_youtube_tutorials_web3Auth_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_harsh_Desktop_Zefi_youtube_tutorials_web3Auth_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-moralis */ \"./node_modules/react-moralis/lib/index.esm.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _images_Web3Auth_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/Web3Auth.svg */ \"./components/images/Web3Auth.svg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _toruslabs_openlogin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @toruslabs/openlogin */ \"./node_modules/@toruslabs/openlogin/dist/openlogin.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nvar _utils = (__webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\").utils), randomBytes = _utils.randomBytes, parseUnits = _utils.parseUnits;\nvar MULTISIG_POLYGON_MUMBAI = '0xB9af456433Ba1651011Ca5e3C991a1A7A5A75b91';\nvar ZEFITRANSFER_POLYGON_MUMBAI = '0xBdEbd749DBC9755C940BBa353f3eF9e3c9ADBca6';\nvar AAVEV2_POLYGON_MUMBAI = '0x6E7a42B7452942E4510AA62000FE37215c266df9';\n// const WALLET_FACTORY_POLYGON_MUMBAI = '0x9Fa38603FD8ba413AFdf9214b0984f6FB1D4b174';\nvar WALLET_FACTORY_POLYGON_MUMBAI = '0xcc13A54434A5560aA451b124632c087719904628'; // manager - harsh 0x015\nfunction SignIn() {\n    _s();\n    var ref = (0,react_moralis__WEBPACK_IMPORTED_MODULE_3__.useMoralis)(), authenticate = ref.authenticate, authError = ref.authError, isAuthenticating = ref.isAuthenticating, Moralis = ref.Moralis, account = ref.account, connector = ref.connector, connectorType = ref.connectorType, provider = ref.provider;\n    var VERIFIER = {\n        loginProvider: \"google\",\n        clientId: \"YOUR PROJECT ID\"\n    };\n    var handleCustomLogin = function() {\n        var _ref = _asyncToGenerator(_home_harsh_Desktop_Zefi_youtube_tutorials_web3Auth_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _home_harsh_Desktop_Zefi_youtube_tutorials_web3Auth_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return authenticate({\n                            provider: \"web3Auth\",\n                            clientId: \"BAZA9R-WqW4LXycYuB9FeVf4GaqSOvCc8LQ4FoHw7IwfdKBzfNtHhknzF6R5UTivMgk13-Zo-YELzn_nWN4m1Lc\",\n                            chainId: Moralis.Chains.ETH_RINKBEY\n                        });\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleCustomLogin() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true), isLoading = ref1[0], setLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(), openlogin1 = ref2[0], setOpenLogin = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(), privKey = ref3[0], setPrivKey = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        return console.log(privKey);\n    }, [\n        privKey\n    ]);\n    var onMount = function() {\n        var _ref = _asyncToGenerator(_home_harsh_Desktop_Zefi_youtube_tutorials_web3Auth_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var openlogin;\n            return _home_harsh_Desktop_Zefi_youtube_tutorials_web3Auth_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        setLoading(true);\n                        _ctx.prev = 1;\n                        openlogin = new _toruslabs_openlogin__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n                            clientId: \"BAZA9R-WqW4LXycYuB9FeVf4GaqSOvCc8LQ4FoHw7IwfdKBzfNtHhknzF6R5UTivMgk13-Zo-YELzn_nWN4m1Lc\",\n                            network: \"mainnet\"\n                        });\n                        setOpenLogin(openlogin);\n                        _ctx.next = 6;\n                        return openlogin.init();\n                    case 6:\n                        setPrivKey(openlogin.privKey);\n                        console.log(openlogin.privKey);\n                    case 8:\n                        _ctx.prev = 8;\n                        setLoading(false);\n                        return _ctx.finish(8);\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    ,\n                    8,\n                    11\n                ]\n            ]);\n        }));\n        return function onMount() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onLogin = function() {\n        var _ref = _asyncToGenerator(_home_harsh_Desktop_Zefi_youtube_tutorials_web3Auth_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _home_harsh_Desktop_Zefi_youtube_tutorials_web3Auth_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!(isLoading || privKey)) {\n                            _ctx.next = 2;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 2:\n                        setLoading(true);\n                        _ctx.prev = 3;\n                        _ctx.next = 6;\n                        return openlogin1.login({\n                            loginProvider: VERIFIER.loginProvider,\n                            redirectUrl: \"http://localhost:3000/\"\n                        });\n                    case 6:\n                        setPrivKey(openlogin1.privKey);\n                        console.log(privKey);\n                    case 8:\n                        _ctx.prev = 8;\n                        setLoading(false);\n                        return _ctx.finish(8);\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    3,\n                    ,\n                    8,\n                    11\n                ]\n            ]);\n        }));\n        return function onLogin() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // useEffect(() => {\n    //   onMount();\n    // }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().card),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().img),\n                src: _images_Web3Auth_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                width: 80,\n                height: 80\n            }, void 0, false, {\n                fileName: \"/home/harsh/Desktop/Zefi/youtube-tutorials/web3Auth/components/SignIn.js\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this),\n            isAuthenticating && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().green),\n                children: \"Authenticating\"\n            }, void 0, false, {\n                fileName: \"/home/harsh/Desktop/Zefi/youtube-tutorials/web3Auth/components/SignIn.js\",\n                lineNumber: 93,\n                columnNumber: 28\n            }, this),\n            authError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().error),\n                children: JSON.stringify(authError.message)\n            }, void 0, false, {\n                fileName: \"/home/harsh/Desktop/Zefi/youtube-tutorials/web3Auth/components/SignIn.js\",\n                lineNumber: 95,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().buttonCard),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().loginButton),\n                    onClick: handleCustomLogin,\n                    children: \"Login with Web3Auth\"\n                }, void 0, false, {\n                    fileName: \"/home/harsh/Desktop/Zefi/youtube-tutorials/web3Auth/components/SignIn.js\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/harsh/Desktop/Zefi/youtube-tutorials/web3Auth/components/SignIn.js\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/harsh/Desktop/Zefi/youtube-tutorials/web3Auth/components/SignIn.js\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, this));\n};\n_s(SignIn, \"jOhjXZeGspEALhu0+0ZWhy1huoc=\", false, function() {\n    return [\n        react_moralis__WEBPACK_IMPORTED_MODULE_3__.useMoralis\n    ];\n});\n_c = SignIn;\nvar _c;\n$RefreshReg$(_c, \"SignIn\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZ25Jbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUM4QjtBQUNZO0FBQ0k7QUFDTjtBQUNHO0FBQ0M7QUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcvQixHQUFLLENBQStCUSxNQUF1QixHQUF2QkEsbUZBQXVCLEVBQW5ERSxXQUFXLEdBQWlCRixNQUF1QixDQUFuREUsV0FBVyxFQUFFQyxVQUFVLEdBQUtILE1BQXVCLENBQXRDRyxVQUFVO0FBRS9CLEdBQUssQ0FBQ0MsdUJBQXVCLEdBQUcsQ0FBNEM7QUFDNUUsR0FBSyxDQUFDQywyQkFBMkIsR0FBRyxDQUE0QztBQUNoRixHQUFLLENBQUNDLHFCQUFxQixHQUFHLENBQTRDO0FBQzFFLEVBQXNGO0FBQ3RGLEdBQUssQ0FBQ0MsNkJBQTZCLEdBQUcsQ0FBNEMsNENBQUUsQ0FBd0I7QUFJN0YsUUFBUSxDQUFDQyxNQUFNLEdBQUcsQ0FBQzs7SUFDaEMsR0FBSyxDQUF1R2YsR0FBWSxHQUFaQSx5REFBVSxJQUE5R2dCLFlBQVksR0FBd0ZoQixHQUFZLENBQWhIZ0IsWUFBWSxFQUFFQyxTQUFTLEdBQTZFakIsR0FBWSxDQUFsR2lCLFNBQVMsRUFBRUMsZ0JBQWdCLEdBQTJEbEIsR0FBWSxDQUF2RmtCLGdCQUFnQixFQUFFQyxPQUFPLEdBQWtEbkIsR0FBWSxDQUFyRW1CLE9BQU8sRUFBRUMsT0FBTyxHQUF5Q3BCLEdBQVksQ0FBNURvQixPQUFPLEVBQUVDLFNBQVMsR0FBOEJyQixHQUFZLENBQW5EcUIsU0FBUyxFQUFFQyxhQUFhLEdBQWV0QixHQUFZLENBQXhDc0IsYUFBYSxFQUFFQyxRQUFRLEdBQUt2QixHQUFZLENBQXpCdUIsUUFBUTtJQUN2RyxHQUFLLENBQUNDLFFBQVEsR0FBRyxDQUFDO1FBQ2hCQyxhQUFhLEVBQUUsQ0FBUTtRQUN2QkMsUUFBUSxFQUFFLENBQWlCO0lBQzdCLENBQUM7SUFDRCxHQUFLLENBQUNDLGlCQUFpQjtvTUFBRyxRQUFRLFdBQUksQ0FBQzs7Ozs7K0JBQy9CWCxZQUFZLENBQUMsQ0FBQzs0QkFDbEJPLFFBQVEsRUFBRSxDQUFVOzRCQUNwQkcsUUFBUSxFQUFFLENBQXlGOzRCQUNuR0UsT0FBTyxFQUFFVCxPQUFPLENBQUNVLE1BQU0sQ0FBQ0MsV0FBVzt3QkFDckMsQ0FBQzs7Ozs7O1FBS0gsQ0FBQzt3QkFWS0gsaUJBQWlCOzs7O0lBWXZCLEdBQUssQ0FBMkJ4QixJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUF0QzRCLFNBQVMsR0FBZ0I1QixJQUFjLEtBQTVCNkIsVUFBVSxHQUFJN0IsSUFBYztJQUU5QyxHQUFLLENBQTZCQSxJQUFVLEdBQVZBLCtDQUFRLElBQW5DOEIsVUFBUyxHQUFrQjlCLElBQVUsS0FBMUIrQixZQUFZLEdBQUkvQixJQUFVO0lBQzVDLEdBQUssQ0FBeUJBLElBQVUsR0FBVkEsK0NBQVEsSUFBL0JnQyxPQUFPLEdBQWdCaEMsSUFBVSxLQUF4QmlDLFVBQVUsR0FBSWpDLElBQVU7SUFFeENDLGdEQUFTLENBQUMsUUFBUTtRQUFGaUMsTUFBTSxDQUFOQSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsT0FBTztPQUFHLENBQUNBO1FBQUFBLE9BQU87SUFBQSxDQUFDO0lBRS9DLEdBQUssQ0FBQ0ksT0FBTztvTUFBRyxRQUFRLFdBQUksQ0FBQztnQkFJbkJOLFNBQVM7Ozs7d0JBSGpCRCxVQUFVLENBQUMsSUFBSTs7d0JBR1BDLFNBQVMsR0FBRyxHQUFHLENBQUM1Qiw0REFBUyxDQUFDLENBQUM7NEJBQy9CcUIsUUFBUSxFQUFFLENBQXlGOzRCQUNuR2MsT0FBTyxFQUFFLENBQVM7d0JBQ3BCLENBQUM7d0JBQ0ROLFlBQVksQ0FBQ0QsU0FBUzs7K0JBRWhCQSxTQUFTLENBQUNRLElBQUk7O3dCQUNwQkwsVUFBVSxDQUFDSCxTQUFTLENBQUNFLE9BQU87d0JBRTVCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsU0FBUyxDQUFDRSxPQUFPOzs7d0JBSTdCSCxVQUFVLENBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7UUFFcEIsQ0FBQzt3QkFuQktPLE9BQU87Ozs7SUFxQmIsR0FBSyxDQUFDRyxPQUFPO29NQUFHLFFBQVEsV0FBSSxDQUFDOzs7OzhCQUN2QlgsU0FBUyxJQUFJSSxPQUFPOzs7Ozs7d0JBRXhCSCxVQUFVLENBQUMsSUFBSTs7OytCQUVQQyxVQUFTLENBQUNVLEtBQUssQ0FBQyxDQUFDOzRCQUNyQmxCLGFBQWEsRUFBRUQsUUFBUSxDQUFDQyxhQUFhOzRCQUNyQ21CLFdBQVcsRUFBRSxDQUF3Qjt3QkFDdkMsQ0FBQzs7d0JBQ0RSLFVBQVUsQ0FBQ0gsVUFBUyxDQUFDRSxPQUFPO3dCQUM1QkUsT0FBTyxDQUFDQyxHQUFHLENBQUNILE9BQU87Ozt3QkFHbkJILFVBQVUsQ0FBQyxLQUFLOzs7Ozs7Ozs7Ozs7OztRQUVwQixDQUFDO3dCQWZLVSxPQUFPOzs7O0lBaUJiLEVBQW9CO0lBQ3BCLEVBQWU7SUFDZixFQUFVO0lBSVYsTUFBTSw2RUFDSEcsQ0FBRztRQUFDQyxTQUFTLEVBQUU3QyxxRUFBVzs7d0ZBQ3hCRixtREFBSztnQkFBQytDLFNBQVMsRUFBRTdDLG9FQUFVO2dCQUFFZ0QsR0FBRyxFQUFFL0MsNERBQUk7Z0JBQUVnRCxLQUFLLEVBQUUsRUFBRTtnQkFBRUMsTUFBTSxFQUFFLEVBQUU7Ozs7OztZQUM3RGpDLGdCQUFnQixnRkFBS2tDLENBQUM7Z0JBQUNOLFNBQVMsRUFBRTdDLHNFQUFZOzBCQUFFLENBQWM7Ozs7OztZQUM5RGdCLFNBQVMsZ0ZBQ1BtQyxDQUFDO2dCQUFDTixTQUFTLEVBQUU3QyxzRUFBWTswQkFBR3NELElBQUksQ0FBQ0MsU0FBUyxDQUFDdkMsU0FBUyxDQUFDd0MsT0FBTzs7Ozs7O3dGQUU5RFosQ0FBRztnQkFBQ0MsU0FBUyxFQUFFN0MsMkVBQWlCO3NHQUM5QjBELENBQU07b0JBQUNiLFNBQVMsRUFBRTdDLDRFQUFrQjtvQkFBRTRELE9BQU8sRUFBRWxDLGlCQUFpQjs4QkFBRSxDQUduRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJRixDQUFDO0dBcEZpQlosTUFBTTs7UUFDZ0ZmLHFEQUFVOzs7S0FEaEdlLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWduSW4uanM/ZWU0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlTW9yYWxpcyB9IGZyb20gXCJyZWFjdC1tb3JhbGlzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi9pbWFnZXMvV2ViM0F1dGguc3ZnXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgT3BlbkxvZ2luIGZyb20gXCJAdG9ydXNsYWJzL29wZW5sb2dpblwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuXG5cbmNvbnN0IHsgcmFuZG9tQnl0ZXMsIHBhcnNlVW5pdHMgfSA9IHJlcXVpcmUoJ2V0aGVycycpLnV0aWxzO1xuXG5jb25zdCBNVUxUSVNJR19QT0xZR09OX01VTUJBSSA9ICcweEI5YWY0NTY0MzNCYTE2NTEwMTFDYTVlM0M5OTFhMUE3QTVBNzViOTEnO1xuY29uc3QgWkVGSVRSQU5TRkVSX1BPTFlHT05fTVVNQkFJID0gJzB4QmRFYmQ3NDlEQkM5NzU1Qzk0MEJCYTM1M2YzZUY5ZTNjOUFEQmNhNic7XG5jb25zdCBBQVZFVjJfUE9MWUdPTl9NVU1CQUkgPSAnMHg2RTdhNDJCNzQ1Mjk0MkU0NTEwQUE2MjAwMEZFMzcyMTVjMjY2ZGY5Jztcbi8vIGNvbnN0IFdBTExFVF9GQUNUT1JZX1BPTFlHT05fTVVNQkFJID0gJzB4OUZhMzg2MDNGRDhiYTQxM0FGZGY5MjE0YjA5ODRmNkZCMUQ0YjE3NCc7XG5jb25zdCBXQUxMRVRfRkFDVE9SWV9QT0xZR09OX01VTUJBSSA9ICcweGNjMTNBNTQ0MzRBNTU2MGFBNDUxYjEyNDYzMmMwODc3MTk5MDQ2MjgnOyAvLyBtYW5hZ2VyIC0gaGFyc2ggMHgwMTVcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25JbigpIHtcbiAgY29uc3QgeyBhdXRoZW50aWNhdGUsIGF1dGhFcnJvciwgaXNBdXRoZW50aWNhdGluZywgTW9yYWxpcywgYWNjb3VudCwgY29ubmVjdG9yLCBjb25uZWN0b3JUeXBlLCBwcm92aWRlciB9ID0gdXNlTW9yYWxpcygpO1xuICBjb25zdCBWRVJJRklFUiA9IHtcbiAgICBsb2dpblByb3ZpZGVyOiBcImdvb2dsZVwiLCAvLyBcImZhY2Vib29rXCIsIFwiYXBwbGVcIiwgXCJ0d2l0dGVyXCIsIFwicmVkZGl0XCIsIGV0Yy4gU2VlIGZ1bGwgbGlzdCBvZiBzdXBwb3J0ZWQgbG9naW5zOiBodHRwczovL2RvY3MudG9yLnVzL2RpcmVjdC1hdXRoL3ZlcmlmaWVyc1xuICAgIGNsaWVudElkOiBcIllPVVIgUFJPSkVDVCBJRFwiLFxuICB9O1xuICBjb25zdCBoYW5kbGVDdXN0b21Mb2dpbiA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBhdXRoZW50aWNhdGUoe1xuICAgICAgcHJvdmlkZXI6IFwid2ViM0F1dGhcIixcbiAgICAgIGNsaWVudElkOiBcIkJBWkE5Ui1XcVc0TFh5Y1l1QjlGZVZmNEdhcVNPdkNjOExRNEZvSHc3SXdmZEtCemZOdEhoa256RjZSNVVUaXZNZ2sxMy1aby1ZRUx6bl9uV040bTFMY1wiLFxuICAgICAgY2hhaW5JZDogTW9yYWxpcy5DaGFpbnMuRVRIX1JJTktCRVksXG4gICAgfSk7XG5cbiAgICBcblxuICAgIFxuICB9O1xuICBcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBbb3BlbmxvZ2luLCBzZXRPcGVuTG9naW5dID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3ByaXZLZXksIHNldFByaXZLZXldID0gdXNlU3RhdGUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4gY29uc29sZS5sb2cocHJpdktleSksIFtwcml2S2V5XSlcblxuICBjb25zdCBvbk1vdW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgb3BlbmxvZ2luID0gbmV3IE9wZW5Mb2dpbih7XG4gICAgICAgIGNsaWVudElkOiBcIkJBWkE5Ui1XcVc0TFh5Y1l1QjlGZVZmNEdhcVNPdkNjOExRNEZvSHc3SXdmZEtCemZOdEhoa256RjZSNVVUaXZNZ2sxMy1aby1ZRUx6bl9uV040bTFMY1wiLFxuICAgICAgICBuZXR3b3JrOiBcIm1haW5uZXRcIiwgLy8gdmFsaWQgdmFsdWVzICh0ZXN0bmV0IG9yIG1haW5uZXQpXG4gICAgICB9KTtcbiAgICAgIHNldE9wZW5Mb2dpbihvcGVubG9naW4pO1xuXG4gICAgICBhd2FpdCBvcGVubG9naW4uaW5pdCgpO1xuICAgICAgc2V0UHJpdktleShvcGVubG9naW4ucHJpdktleSk7XG4gICAgICBcbiAgICAgIGNvbnNvbGUubG9nKG9wZW5sb2dpbi5wcml2S2V5KTtcbiAgICBcbiAgICAgIFxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb25Mb2dpbiA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoaXNMb2FkaW5nIHx8IHByaXZLZXkpIHJldHVybjtcblxuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IG9wZW5sb2dpbi5sb2dpbih7XG4gICAgICAgIGxvZ2luUHJvdmlkZXI6IFZFUklGSUVSLmxvZ2luUHJvdmlkZXIsXG4gICAgICAgIHJlZGlyZWN0VXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9cIixcbiAgICAgIH0pO1xuICAgICAgc2V0UHJpdktleShvcGVubG9naW4ucHJpdktleSk7XG4gICAgICBjb25zb2xlLmxvZyhwcml2S2V5KTtcbiAgICAgIFxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBvbk1vdW50KCk7XG4gIC8vIH0sIFtdKTtcblxuIFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlcy5pbWd9IHNyYz17TG9nb30gd2lkdGg9ezgwfSBoZWlnaHQ9ezgwfSAvPlxuICAgICAge2lzQXV0aGVudGljYXRpbmcgJiYgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZ3JlZW59PkF1dGhlbnRpY2F0aW5nPC9wPn1cbiAgICAgIHthdXRoRXJyb3IgJiYgKFxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5lcnJvcn0+e0pTT04uc3RyaW5naWZ5KGF1dGhFcnJvci5tZXNzYWdlKX08L3A+XG4gICAgICApfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25DYXJkfT5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbkJ1dHRvbn0gb25DbGljaz17aGFuZGxlQ3VzdG9tTG9naW59PlxuICAgICAgICAgIExvZ2luIHdpdGggV2ViM0F1dGhcbiAgICAgICAgICBcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbiAgICAgIH1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZU1vcmFsaXMiLCJzdHlsZXMiLCJMb2dvIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJPcGVuTG9naW4iLCJldGhlcnMiLCJyZXF1aXJlIiwidXRpbHMiLCJyYW5kb21CeXRlcyIsInBhcnNlVW5pdHMiLCJNVUxUSVNJR19QT0xZR09OX01VTUJBSSIsIlpFRklUUkFOU0ZFUl9QT0xZR09OX01VTUJBSSIsIkFBVkVWMl9QT0xZR09OX01VTUJBSSIsIldBTExFVF9GQUNUT1JZX1BPTFlHT05fTVVNQkFJIiwiU2lnbkluIiwiYXV0aGVudGljYXRlIiwiYXV0aEVycm9yIiwiaXNBdXRoZW50aWNhdGluZyIsIk1vcmFsaXMiLCJhY2NvdW50IiwiY29ubmVjdG9yIiwiY29ubmVjdG9yVHlwZSIsInByb3ZpZGVyIiwiVkVSSUZJRVIiLCJsb2dpblByb3ZpZGVyIiwiY2xpZW50SWQiLCJoYW5kbGVDdXN0b21Mb2dpbiIsImNoYWluSWQiLCJDaGFpbnMiLCJFVEhfUklOS0JFWSIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJvcGVubG9naW4iLCJzZXRPcGVuTG9naW4iLCJwcml2S2V5Iiwic2V0UHJpdktleSIsImNvbnNvbGUiLCJsb2ciLCJvbk1vdW50IiwibmV0d29yayIsImluaXQiLCJvbkxvZ2luIiwibG9naW4iLCJyZWRpcmVjdFVybCIsImRpdiIsImNsYXNzTmFtZSIsImNhcmQiLCJpbWciLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsInAiLCJncmVlbiIsImVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1lc3NhZ2UiLCJidXR0b25DYXJkIiwiYnV0dG9uIiwibG9naW5CdXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SignIn.js\n");

/***/ })

});