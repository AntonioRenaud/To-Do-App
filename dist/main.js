/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/creation.js":
/*!****************************!*\
  !*** ./src/js/creation.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newProject\": () => (/* binding */ newProject),\n/* harmony export */   \"newTask\": () => (/* binding */ newTask)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/js/projects.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/js/tasks.js\");\n\n\n\nfunction newProject(title) {\n  let myProjects = JSON.parse(localStorage.getItem(\"Projects\"));\n  if (myProjects == null) myProjects = [];\n  myProjects.push(new _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title));\n  localStorage.setItem(\"Projects\", JSON.stringify(myProjects));\n}\n\nfunction newTask(title, date, project) {\n  let myTasks = JSON.parse(localStorage.getItem(\"Tasks\"));\n  if (myTasks == null) myTasks = [];\n  myTasks.push(new _tasks__WEBPACK_IMPORTED_MODULE_1__[\"default\"](title, date, project));\n  localStorage.setItem(\"Tasks\", JSON.stringify(myTasks));\n\n  /*\n\nconst projectAviator = new Project(\"Aviator\", \"Urgent\");\n  const projectNavigator = new Project(\"Navigator\", \"Urgent\");\n  const projectSpaceMan = new Project(\"SpaceMan\", \"Urgent\");\n  const task1 = new Task(\n    \"Make General Desing\",\n    \"Make the initial desing for what will be the Aviator software\",\n    \"05-23-23\",\n    \"urgent\",\n    \"Aviator\",\n    \"sin completar\"\n  );\n\n  const task2 = new Task(\n    \"Implement Desing\",\n    \"Make first prototype following desing\",\n    \"06-23-23\",\n    \"urgent\",\n    \"Aviator\",\n    \"sin completar\"\n  );\n\n  const task3 = new Task(\n    \"Implement NAVIGATOR\",\n    \"Make first prototype following desing\",\n    \"06-23-24\",\n    \"urgent\",\n    \"Navigator\",\n    \"sin completar\"\n  );\n\n  const task4 = new Task(\n    \"Implement SpaceMan\",\n    \"Make first prototype following desing\",\n    \"05-26-25\",\n    \"urgent\",\n    \"SpaceMan\",\n    \"sin completar\"\n  );\n\n\n\n  projectsArray.push(projectAviator);\n  projectsArray.push(projectNavigator);\n  projectsArray.push(projectSpaceMan);\n*/\n}\n\n\n\n\n//# sourceURL=webpack://todo-app/./src/js/creation.js?");

/***/ }),

/***/ "./src/js/display.js":
/*!***************************!*\
  !*** ./src/js/display.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateProjects\": () => (/* binding */ updateProjects),\n/* harmony export */   \"updateSelection\": () => (/* binding */ updateSelection),\n/* harmony export */   \"updateTasks\": () => (/* binding */ updateTasks)\n/* harmony export */ });\nconst sidebar = document.querySelector(\".projects-list\");\nconst content = document.querySelector(\".content\");\nlet myProjects = JSON.parse(localStorage.getItem(\"Projects\"));\nlet myTasks = JSON.parse(localStorage.getItem(\"Tasks\"));\nlet projectCount = 0;\nlet taskCount = 0;\n\nconst selection = document.getElementById(\"projects-selection\");\n\nfunction updateSelection() {\n  selection.innerHTML = '<option value=\"null\">No Selection</option>';\n  myProjects = JSON.parse(localStorage.getItem(\"Projects\"));\n  myProjects.forEach((project) => {\n    selection.innerHTML += `<option value=\"${project.title}\">${project.title}</option>`;\n  });\n}\n\nfunction updateProjects() {\n  sidebar.textContent = \" \";\n  let myProjects = JSON.parse(localStorage.getItem(\"Projects\"));\n  myProjects.forEach((project) => {\n    const projectBox = document.createElement(\"li\");\n    projectBox.classList.add(\"project-box\");\n    projectBox.innerText = `${project.title}`;\n    projectBox.setAttribute(\"data-count\", `${projectCount}`);\n    projectCount++;\n    sidebar.append(projectBox);\n  });\n}\n\nfunction updateTasks() {\n  content.textContent = \" \";\n  let myTasks = JSON.parse(localStorage.getItem(\"Tasks\"));\n  myTasks.forEach((task) => {\n    const taskBox = document.createElement(\"p\");\n    taskBox.classList.add(\"task-box\");\n    taskBox.innerHTML = `${task.title}, ${task.date}, ${task.project}, ${task.status} `;\n    taskBox.setAttribute(\"data-count\", `${taskCount}`);\n    taskCount++;\n    content.append(taskBox);\n  });\n}\n\n\n\n\n//# sourceURL=webpack://todo-app/./src/js/display.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _creation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creation.js */ \"./src/js/creation.js\");\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ \"./src/js/display.js\");\n\n\n\nconst taskForm = document.getElementById(\"task-form\");\nconst projectForm = document.getElementById(\"project-form\");\nlet myProjects = JSON.parse(localStorage.getItem(\"Projects\"));\nlet myTasks = JSON.parse(localStorage.getItem(\"Tasks\"));\n\nconsole.log(\"Script run ;/\");\n\ntaskForm.addEventListener(\"submit\", (e) => {\n  myTasks = JSON.parse(localStorage.getItem(\"Tasks\"));\n  e.preventDefault();\n  (0,_creation_js__WEBPACK_IMPORTED_MODULE_0__.newTask)(\n    document.getElementById(\"task-title\").value,\n    document.getElementById(\"date\").value,\n    document.getElementById(\"projects-selection\").value\n  );\n  (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.updateTasks)();\n  taskForm.reset();\n});\n\nprojectForm.addEventListener(\"submit\", (e) => {\n  myProjects = JSON.parse(localStorage.getItem(\"Projects\"));\n  e.preventDefault();\n  (0,_creation_js__WEBPACK_IMPORTED_MODULE_0__.newProject)(document.getElementById(\"title\").value);\n  (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.updateSelection)();\n  (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.updateProjects)();\n\n  projectForm.reset();\n});\n\n(0,_display_js__WEBPACK_IMPORTED_MODULE_1__.updateSelection)();\n(0,_display_js__WEBPACK_IMPORTED_MODULE_1__.updateProjects)();\n(0,_display_js__WEBPACK_IMPORTED_MODULE_1__.updateTasks)();\nconsole.log(myProjects);\n\n\n//# sourceURL=webpack://todo-app/./src/js/index.js?");

/***/ }),

/***/ "./src/js/projects.js":
/*!****************************!*\
  !*** ./src/js/projects.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n  constructor(title) {\n    this.title = title;\n  }\n}\n\n\n//# sourceURL=webpack://todo-app/./src/js/projects.js?");

/***/ }),

/***/ "./src/js/tasks.js":
/*!*************************!*\
  !*** ./src/js/tasks.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(title, date, project) {\n    this.title = title;\n    this.date = date;\n    this.project = project;\n  }\n}\n\n\n//# sourceURL=webpack://todo-app/./src/js/tasks.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;