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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkCompleted\": () => (/* binding */ checkCompleted),\n/* harmony export */   \"editTasks\": () => (/* binding */ editTasks),\n/* harmony export */   \"newProject\": () => (/* binding */ newProject),\n/* harmony export */   \"newTask\": () => (/* binding */ newTask)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/js/projects.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/js/tasks.js\");\n\n\n\n/*Creates new Project, taking a title as a parameter\n and storing them to localstore object named Projects*/\nfunction newProject(title) {\n  let myProjects = JSON.parse(localStorage.getItem(\"Projects\"));\n  if (myProjects == null) myProjects = [];\n  myProjects.push(new _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title));\n  localStorage.setItem(\"Projects\", JSON.stringify(myProjects));\n}\n\n/*creates a new task, taking title, date and project name\n as parameter storing them to localstore object named Tasks*/\nfunction newTask(title, date, project) {\n  let myTasks = JSON.parse(localStorage.getItem(\"Tasks\"));\n  if (myTasks == null) myTasks = [];\n  myTasks.push(new _tasks__WEBPACK_IMPORTED_MODULE_1__[\"default\"](title, date, project));\n  localStorage.setItem(\"Tasks\", JSON.stringify(myTasks));\n}\n\n/*Takes Tasks object out of localstorage, edits or deletes an entry\nand stores the object back to localstorage*/\nfunction editTasks(index, property, value) {\n  let myTasks = JSON.parse(localStorage.getItem(\"Tasks\"));\n  if (property === \"title\") {\n    myTasks[index].title = value;\n  } else if (property === \"date\") {\n    myTasks[index].date = value;\n  } else if (property === \"delete\") {\n    myTasks.splice(index, 1);\n  } else if (property === \"status\") {\n    if (myTasks[index].status === \"Uncompleted\") {\n      myTasks[index].status = \"Completed\";\n    } else {\n      myTasks[index].status = \"Uncompleted\";\n    }\n  }\n  localStorage.setItem(\"Tasks\", JSON.stringify(myTasks));\n}\n\nfunction checkCompleted(index) {\n  let myTasks = JSON.parse(localStorage.getItem(\"Tasks\"));\n  if (myTasks[index].status === \"Completed\") {\n    return true;\n  }\n}\n\n\n\n//# sourceURL=webpack://todo-app/./src/js/creation.js?");

/***/ }),

/***/ "./src/js/display.js":
/*!***************************!*\
  !*** ./src/js/display.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateProjects\": () => (/* binding */ updateProjects),\n/* harmony export */   \"updateSelection\": () => (/* binding */ updateSelection),\n/* harmony export */   \"updateTasks\": () => (/* binding */ updateTasks)\n/* harmony export */ });\n/* harmony import */ var _creation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creation */ \"./src/js/creation.js\");\n\n\nconst sidebar = document.querySelector(\".projects-list\");\nconst content = document.querySelector(\".content\");\nconst table = document.querySelector(\".task-table\");\nlet myProjects = JSON.parse(localStorage.getItem(\"Projects\"));\nlet myTasks = JSON.parse(localStorage.getItem(\"Tasks\"));\nlet projectCount = 0;\nlet taskCount = 0;\n\nconst selection = document.getElementById(\"projects-selection\");\n\nfunction updateSelection() {\n  selection.innerHTML = '<option value=\"null\">No Selection</option>';\n  myProjects = JSON.parse(localStorage.getItem(\"Projects\"));\n  myProjects.forEach((project) => {\n    selection.innerHTML += `<option value=\"${project.title}\">${project.title}</option>`;\n  });\n}\n\nfunction updateProjects() {\n  projectCount = 0;\n  sidebar.textContent = \" \";\n  let myProjects = JSON.parse(localStorage.getItem(\"Projects\"));\n  if (myProjects == null) {\n    myProjects = [];\n  }\n  myProjects.forEach((project) => {\n    const projectBox = document.createElement(\"li\");\n    projectBox.classList.add(\"project-box\");\n    projectBox.innerText = `${project.title}`;\n    projectBox.setAttribute(\"data-count\", `${projectCount}`);\n    projectCount++;\n    sidebar.append(projectBox);\n  });\n}\n\nfunction updateTasks() {\n  table.innerHTML = \" \";\n  taskCount = 0;\n  const tableHeader = table.insertRow(0);\n  const tableHeaderCell1 = tableHeader.insertCell(0);\n  const tableHeaderCell2 = tableHeader.insertCell(1);\n  const tableHeaderCell3 = tableHeader.insertCell(2);\n  tableHeaderCell1.textContent = \"Task\";\n  tableHeaderCell2.textContent = \"Due Date\";\n  tableHeaderCell3.textContent = \"Status\";\n  let myTasks = JSON.parse(localStorage.getItem(\"Tasks\"));\n  myTasks.forEach((task) => newTaskEntry(task));\n}\n\n/*Creates table to display tasks, in which every row is a task\nits properties and buttons to manipulate it*/\nfunction newTaskEntry(task) {\n  const editButton = document.createElement(\"button\");\n  const deleteButton = document.createElement(\"button\");\n  const completeButton = document.createElement(\"button\");\n  const tableRow = table.insertRow(-1);\n  const tableRowCell1 = tableRow.insertCell(0);\n  const tableRowCell2 = tableRow.insertCell(1);\n  const tableRowCell3 = tableRow.insertCell(2);\n  const tableRowCell4 = tableRow.insertCell(3);\n  if ((0,_creation__WEBPACK_IMPORTED_MODULE_0__.checkCompleted)(taskCount) === true) {\n    completeButton.innerHTML = `<img src=\"/src/images/check-square.svg\" alt=\"Change status\" data-count=\"${taskCount}\">`;\n  } else {\n    completeButton.innerHTML = `<img src=\"/src/images/square.svg\" alt=\"Change status\" data-count=\"${taskCount}\">`;\n    console.log((0,_creation__WEBPACK_IMPORTED_MODULE_0__.editTasks)(taskCount, \"check\"));\n  }\n\n  editButton.innerHTML = `<img src=\"/src/images/edit.png\" alt=\"edit entry\" data-count=\"${taskCount}\">`;\n  deleteButton.innerHTML = `<img src=\"/src/images/x-square.svg\" alt=\"delete entry\" data-count=\"${taskCount}\">`;\n  editButton.classList.add(\"edit-button\");\n  deleteButton.classList.add(\"delete-button\");\n  completeButton.classList.add(\"complete-button\");\n  completeButton.setAttribute(\"data-count\", `${taskCount}`);\n  editButton.setAttribute(\"data-count\", `${taskCount}`);\n  deleteButton.setAttribute(\"data-count\", `${taskCount}`);\n  completeButton.classList.add(\"button\");\n  tableRow.classList = \"table-body\";\n  tableRowCell1.textContent = task.title;\n  tableRowCell2.textContent = task.date;\n  tableRowCell3.textContent = task.status;\n  tableRowCell4.append(completeButton);\n  tableRowCell4.append(editButton);\n  tableRowCell4.append(deleteButton);\n  taskCount++;\n  editButton.addEventListener(\"click\", (e) => {\n    let currentButton = e.target;\n    let index = currentButton.dataset.count;\n    (0,_creation__WEBPACK_IMPORTED_MODULE_0__.editTasks)(index, \"title\", \"Again Edited title\");\n  });\n  completeButton.addEventListener(\"click\", (e) => {\n    let currentButton = e.target;\n    let index = currentButton.dataset.count;\n    (0,_creation__WEBPACK_IMPORTED_MODULE_0__.editTasks)(index, \"status\");\n    updateTasks();\n  });\n\n  deleteButton.addEventListener(\"click\", (e) => {\n    let currentButton = e.target;\n    let index = currentButton.dataset.count;\n    (0,_creation__WEBPACK_IMPORTED_MODULE_0__.editTasks)(index, \"delete\");\n    updateTasks();\n  });\n}\n\n\n\n\n//# sourceURL=webpack://todo-app/./src/js/display.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _creation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creation.js */ \"./src/js/creation.js\");\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ \"./src/js/display.js\");\n\n\n\nconst taskForm = document.getElementById(\"task-form\");\nconst projectForm = document.getElementById(\"project-form\");\nlet myProjects = JSON.parse(localStorage.getItem(\"Projects\"));\nlet myTasks = JSON.parse(localStorage.getItem(\"Tasks\"));\n\ntaskForm.addEventListener(\"submit\", (e) => {\n  myTasks = JSON.parse(localStorage.getItem(\"Tasks\"));\n  e.preventDefault();\n  (0,_creation_js__WEBPACK_IMPORTED_MODULE_0__.newTask)(\n    document.getElementById(\"task-title\").value,\n    document.getElementById(\"date\").value,\n    document.getElementById(\"projects-selection\").value\n  );\n  (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.updateTasks)();\n  taskForm.reset();\n});\n\nprojectForm.addEventListener(\"submit\", (e) => {\n  myProjects = JSON.parse(localStorage.getItem(\"Projects\"));\n  e.preventDefault();\n  (0,_creation_js__WEBPACK_IMPORTED_MODULE_0__.newProject)(document.getElementById(\"title\").value);\n  (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.updateSelection)();\n  (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.updateProjects)();\n  projectForm.reset();\n});\n\n(0,_display_js__WEBPACK_IMPORTED_MODULE_1__.updateSelection)();\n(0,_display_js__WEBPACK_IMPORTED_MODULE_1__.updateProjects)();\n(0,_display_js__WEBPACK_IMPORTED_MODULE_1__.updateTasks)();\nconsole.log(myProjects);\nconsole.log(myTasks);\n\n\n//# sourceURL=webpack://todo-app/./src/js/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(title, date, project) {\n    this.title = title;\n    this.date = date;\n    this.project = project;\n    this.status = \"Unconpleted\";\n  }\n}\n\n\n//# sourceURL=webpack://todo-app/./src/js/tasks.js?");

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