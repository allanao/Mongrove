/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/electron.js":
/*!****************************!*\
  !*** ./client/electron.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { app, BrowserWindow } = __webpack_require__(/*! electron */ \"electron\");\n\n// main process\n// const { ipcMain } = require('electron');\n\n// ipcMain.on('anything-asynchronous', (event, arg) => {\n// //execute tasks on behalf of renderer process \n//     console.log(arg) // prints \"ping\"\n// })\n\n\n\n\n// try {\n// \trequire('electron-reloader')(module, {\n//     watchRenderer: true\n//   })\n// } catch (_) { console.log('Error'); }\n\n// require('electron-reload')(__dirname, {\n//     electron: path.join(__dirname, 'node_modules', 'electron'),\n//     hardResetMethod: 'exit'\n// });\n\nfunction createWindow () {\n  // Create the browser window.\n  let win = new BrowserWindow({\n    width: 800,\n    height: 600,\n    webPreferences: {\n      nodeIntegration: true,\n    }\n  });\n\n  // and load the index.html of the app.\n  // win.loadFile('index.html');\n\n  // load the index.html from a url\n  win.loadURL('http://localhost:3000');\n\n  // Open the DevTools.\n  // win.webContents.openDevTools();\n};\n\n// app.on('ready', createWindow);\n\n// This method will be called when Electron has finished\n// initialization and is ready to create browser windows.\n// Some APIs can only be used after this event occurs.\napp.whenReady().then(createWindow);\n\n\n// Quit when all windows are closed, except on macOS. There, it's common\n// for applications and their menu bar to stay active until the user quits\n// explicitly with Cmd + Q.\napp.on('window-all-closed', () => {\n  if (process.platform !== 'darwin') {\n    app.quit()\n  }\n});\n\napp.on('activate', () => {\n  // On macOS it's common to re-create a window in the app when the\n  // dock icon is clicked and there are no other windows open.\n  \n  if (BrowserWindow.getAllWindows().length === 0) {\n    createWindow()\n  }\n});\n\n//# sourceURL=webpack://Mongrove/./client/electron.js?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("electron");;

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./client/electron.js");
/******/ 	
/******/ })()
;