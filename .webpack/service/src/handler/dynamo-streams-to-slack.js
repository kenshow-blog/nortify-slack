/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/default-slack.ts":
/*!*************************************!*\
  !*** ./src/client/default-slack.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DefaultSlack\": () => (/* binding */ DefaultSlack)\n/* harmony export */ });\n/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsyringe */ \"tsyringe\");\n/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tsyringe__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const/const */ \"./src/const/const.ts\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\n\n\n\nlet DefaultSlack = class DefaultSlack {\n    async nortice(form) {\n        const data = {\n            username: _const_const__WEBPACK_IMPORTED_MODULE_2__.SLACK_USERNAME,\n            icon_emoji: _const_const__WEBPACK_IMPORTED_MODULE_2__.ICON_EMOJI,\n            text: `${process.env.SLACK_MENTION}\\n${form.title}`,\n            color: _const_const__WEBPACK_IMPORTED_MODULE_2__.SLACK_COLOR,\n            channel: process.env.SLACK_CHANNEL,\n            attachments: [\n                {\n                    color: _const_const__WEBPACK_IMPORTED_MODULE_2__.SLACK_COLOR,\n                    text: form.body,\n                },\n            ],\n        };\n        const content = {\n            method: \"post\",\n            baseURL: process.env.WEBHOOK_URL,\n            headers: {\n                \"Content-type\": \"application/json; charset=utf-8\",\n            },\n            data: JSON.stringify(data),\n        };\n        return await axios__WEBPACK_IMPORTED_MODULE_1___default().request(content);\n    }\n};\nDefaultSlack = __decorate([\n    (0,tsyringe__WEBPACK_IMPORTED_MODULE_0__.injectable)()\n], DefaultSlack);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L2RlZmF1bHQtc2xhY2sudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpCQTtBQURBO0FBQ0E7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vcnRpZmljYXRpb24tc2xhY2svLi9zcmMvY2xpZW50L2RlZmF1bHQtc2xhY2sudHM/NGQ0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTbGFjayB9IGZyb20gXCIuL3NsYWNrXCI7XG5pbXBvcnQgeyBpbmplY3RhYmxlIH0gZnJvbSBcInRzeXJpbmdlXCI7XG5pbXBvcnQgYXhpb3MsIHsgQXhpb3NSZXNwb25zZSB9IGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgU2xhY2tGb3JtIH0gZnJvbSBcIi4uL3R5cGVzL3NsYWNrLWZvcm1cIjtcbmltcG9ydCB7IFNMQUNLX1VTRVJOQU1FLCBJQ09OX0VNT0pJLCBTTEFDS19DT0xPUiB9IGZyb20gXCIuLi9jb25zdC9jb25zdFwiO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGVmYXVsdFNsYWNrIGltcGxlbWVudHMgU2xhY2sge1xuICBhc3luYyBub3J0aWNlKGZvcm06IFNsYWNrRm9ybSk6IFByb21pc2U8QXhpb3NSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICB1c2VybmFtZTogU0xBQ0tfVVNFUk5BTUUsXG4gICAgICBpY29uX2Vtb2ppOiBJQ09OX0VNT0pJLFxuICAgICAgdGV4dDogYCR7cHJvY2Vzcy5lbnYuU0xBQ0tfTUVOVElPTn1cXG4ke2Zvcm0udGl0bGV9YCxcbiAgICAgIGNvbG9yOiBTTEFDS19DT0xPUixcbiAgICAgIGNoYW5uZWw6IHByb2Nlc3MuZW52LlNMQUNLX0NIQU5ORUwsXG4gICAgICBhdHRhY2htZW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgY29sb3I6IFNMQUNLX0NPTE9SLFxuICAgICAgICAgIHRleHQ6IGZvcm0uYm9keSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgICBjb25zdCBjb250ZW50ID0ge1xuICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgIGJhc2VVUkw6IHByb2Nlc3MuZW52LldFQkhPT0tfVVJMLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcbiAgICAgIH0sXG4gICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICB9O1xuICAgIHJldHVybiBhd2FpdCBheGlvcy5yZXF1ZXN0KGNvbnRlbnQpO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/client/default-slack.ts\n");

/***/ }),

/***/ "./src/client/mock-slack.ts":
/*!**********************************!*\
  !*** ./src/client/mock-slack.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MockSlack\": () => (/* binding */ MockSlack)\n/* harmony export */ });\n/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsyringe */ \"tsyringe\");\n/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tsyringe__WEBPACK_IMPORTED_MODULE_0__);\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\n\nlet MockSlack = class MockSlack {\n    async nortice(form) {\n        console.log(form.body);\n        return {\n            data: form.body,\n            status: 200,\n            statusText: \"OK\",\n            headers: null,\n            config: null,\n        };\n    }\n};\nMockSlack = __decorate([\n    (0,tsyringe__WEBPACK_IMPORTED_MODULE_0__.injectable)()\n], MockSlack);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L21vY2stc2xhY2sudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQURBO0FBQ0E7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vcnRpZmljYXRpb24tc2xhY2svLi9zcmMvY2xpZW50L21vY2stc2xhY2sudHM/MTNiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTbGFjayB9IGZyb20gXCIuL3NsYWNrXCI7XG5pbXBvcnQgeyBpbmplY3RhYmxlIH0gZnJvbSBcInRzeXJpbmdlXCI7XG5pbXBvcnQgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBTbGFja0Zvcm0gfSBmcm9tIFwiLi4vdHlwZXMvc2xhY2stZm9ybVwiO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW9ja1NsYWNrIGltcGxlbWVudHMgU2xhY2sge1xuICBhc3luYyBub3J0aWNlKGZvcm06IFNsYWNrRm9ybSk6IFByb21pc2U8QXhpb3NSZXNwb25zZT4ge1xuICAgIGNvbnNvbGUubG9nKGZvcm0uYm9keSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IGZvcm0uYm9keSxcbiAgICAgIHN0YXR1czogMjAwLFxuICAgICAgc3RhdHVzVGV4dDogXCJPS1wiLFxuICAgICAgaGVhZGVyczogbnVsbCxcbiAgICAgIGNvbmZpZzogbnVsbCxcbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/client/mock-slack.ts\n");

/***/ }),

/***/ "./src/client/slack.ts":
/*!*****************************!*\
  !*** ./src/client/slack.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/config/container.ts":
/*!*********************************!*\
  !*** ./src/config/container.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\n/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _handler_default_dynamo_streams_to_slack_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handler/default-dynamo-streams-to-slack-handler */ \"./src/handler/default-dynamo-streams-to-slack-handler.ts\");\n/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tsyringe */ \"tsyringe\");\n/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tsyringe__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client_mock_slack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client/mock-slack */ \"./src/client/mock-slack.ts\");\n/* harmony import */ var _services_mock_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/mock-message-service */ \"./src/services/mock-message-service.ts\");\n/* harmony import */ var _util_when__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/when */ \"./src/util/when.ts\");\n/* harmony import */ var _client_default_slack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client/default-slack */ \"./src/client/default-slack.ts\");\n\n\n\n\n\n\n\nconst injectClass = (0,_util_when__WEBPACK_IMPORTED_MODULE_5__.when)(process.env.STAGE)\n    .on((0,_util_when__WEBPACK_IMPORTED_MODULE_5__.eq)(\"st\"), () => {\n    return {\n        slack: _client_default_slack__WEBPACK_IMPORTED_MODULE_6__.DefaultSlack,\n        messageService: _services_mock_message_service__WEBPACK_IMPORTED_MODULE_4__.MockMessageService,\n    };\n})\n    .otherwise(() => {\n    return {\n        slack: _client_mock_slack__WEBPACK_IMPORTED_MODULE_3__.MockSlack,\n        messageService: _services_mock_message_service__WEBPACK_IMPORTED_MODULE_4__.MockMessageService,\n    };\n});\ntsyringe__WEBPACK_IMPORTED_MODULE_2__.container.register(\"Slack\", {\n    useClass: injectClass.slack,\n});\ntsyringe__WEBPACK_IMPORTED_MODULE_2__.container.register(\"MessageService\", {\n    useClass: injectClass.messageService,\n});\ntsyringe__WEBPACK_IMPORTED_MODULE_2__.container.register(\"DefaultDynamoStreamsToSlackHandler\", {\n    useClass: _handler_default_dynamo_streams_to_slack_handler__WEBPACK_IMPORTED_MODULE_1__.DefaultDynamoStreamsToSlackHandler,\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tsyringe__WEBPACK_IMPORTED_MODULE_2__.container);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL2NvbnRhaW5lci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9ydGlmaWNhdGlvbi1zbGFjay8uL3NyYy9jb25maWcvY29udGFpbmVyLnRzP2U3YTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicmVmbGVjdC1tZXRhZGF0YVwiO1xuaW1wb3J0IHsgRGVmYXVsdER5bmFtb1N0cmVhbXNUb1NsYWNrSGFuZGxlciB9IGZyb20gXCIuLi9oYW5kbGVyL2RlZmF1bHQtZHluYW1vLXN0cmVhbXMtdG8tc2xhY2staGFuZGxlclwiO1xuaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSBcInRzeXJpbmdlXCI7XG5pbXBvcnQgeyBNb2NrU2xhY2sgfSBmcm9tIFwiLi4vY2xpZW50L21vY2stc2xhY2tcIjtcbmltcG9ydCB7IE1vY2tNZXNzYWdlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9tb2NrLW1lc3NhZ2Utc2VydmljZVwiO1xuaW1wb3J0IHsgZXEsIHdoZW4gfSBmcm9tIFwiLi4vdXRpbC93aGVuXCI7XG5pbXBvcnQgeyBEZWZhdWx0U2xhY2sgfSBmcm9tIFwiLi4vY2xpZW50L2RlZmF1bHQtc2xhY2tcIjtcblxuY29uc3QgaW5qZWN0Q2xhc3MgPSB3aGVuKHByb2Nlc3MuZW52LlNUQUdFKVxuICAub24oZXEoXCJzdFwiKSwgKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBzbGFjazogRGVmYXVsdFNsYWNrLFxuICAgICAgbWVzc2FnZVNlcnZpY2U6IE1vY2tNZXNzYWdlU2VydmljZSxcbiAgICB9O1xuICB9KVxuICAub3RoZXJ3aXNlKCgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgc2xhY2s6IE1vY2tTbGFjayxcbiAgICAgIG1lc3NhZ2VTZXJ2aWNlOiBNb2NrTWVzc2FnZVNlcnZpY2UsXG4gICAgfTtcbiAgfSk7XG5jb250YWluZXIucmVnaXN0ZXIoXCJTbGFja1wiLCB7XG4gIHVzZUNsYXNzOiBpbmplY3RDbGFzcy5zbGFjayxcbn0pO1xuY29udGFpbmVyLnJlZ2lzdGVyKFwiTWVzc2FnZVNlcnZpY2VcIiwge1xuICB1c2VDbGFzczogaW5qZWN0Q2xhc3MubWVzc2FnZVNlcnZpY2UsXG59KTtcbmNvbnRhaW5lci5yZWdpc3RlcihcIkRlZmF1bHREeW5hbW9TdHJlYW1zVG9TbGFja0hhbmRsZXJcIiwge1xuICB1c2VDbGFzczogRGVmYXVsdER5bmFtb1N0cmVhbXNUb1NsYWNrSGFuZGxlcixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb250YWluZXI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/config/container.ts\n");

/***/ }),

/***/ "./src/const/const.ts":
/*!****************************!*\
  !*** ./src/const/const.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ICON_EMOJI\": () => (/* binding */ ICON_EMOJI),\n/* harmony export */   \"SLACK_COLOR\": () => (/* binding */ SLACK_COLOR),\n/* harmony export */   \"SLACK_USERNAME\": () => (/* binding */ SLACK_USERNAME)\n/* harmony export */ });\nconst SLACK_USERNAME = \"dynamodb-streams-nortice-slack\";\nconst ICON_EMOJI = \":red_circle:\";\nconst SLACK_COLOR = \"#D00000\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uc3QvY29uc3QudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0E7QUFJQTtBQUlBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9ydGlmaWNhdGlvbi1zbGFjay8uL3NyYy9jb25zdC9jb25zdC50cz9iZmYwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog6YCa55+lbGFtYmRh44Guc2xhY2vkuIrjgafjga7lkI3liY1cbiAqL1xuZXhwb3J0IGNvbnN0IFNMQUNLX1VTRVJOQU1FID0gXCJkeW5hbW9kYi1zdHJlYW1zLW5vcnRpY2Utc2xhY2tcIjtcbi8qKlxuICog6YCa55+lbGFtYmRh44Gu44Ki44Kk44Kz44OzXG4gKi9cbmV4cG9ydCBjb25zdCBJQ09OX0VNT0pJID0gXCI6cmVkX2NpcmNsZTpcIjtcbi8qKlxuICog44Oh44OD44K744O844K444Gu6IOM5pmv6ImyXG4gKi9cbmV4cG9ydCBjb25zdCBTTEFDS19DT0xPUiA9IFwiI0QwMDAwMFwiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/const/const.ts\n");

/***/ }),

/***/ "./src/handler/default-dynamo-streams-to-slack-handler.ts":
/*!****************************************************************!*\
  !*** ./src/handler/default-dynamo-streams-to-slack-handler.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DefaultDynamoStreamsToSlackHandler\": () => (/* binding */ DefaultDynamoStreamsToSlackHandler)\n/* harmony export */ });\n/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsyringe */ \"tsyringe\");\n/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tsyringe__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _client_slack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client/slack */ \"./src/client/slack.ts\");\n/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/message-service */ \"./src/services/message-service.ts\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (undefined && undefined.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (undefined && undefined.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nvar _a, _b;\n\n\n\nlet DefaultDynamoStreamsToSlackHandler = class DefaultDynamoStreamsToSlackHandler {\n    constructor(slack, messageService) {\n        this.slack = slack;\n        this.messageService = messageService;\n    }\n    async execute(event) {\n        console.log(\"通知処理を開始します。\");\n        event.Records.forEach(async (record) => {\n            console.log(\"Stream record: \", JSON.stringify(record, null, 2));\n            const message = this.messageService.createSlackMessage(record);\n            try {\n                await this.slack.nortice(message);\n            }\n            catch (e) {\n                console.error(\"通知処理に失敗しました。\", e);\n                throw new Error(e);\n            }\n        });\n        console.log(\"通知処理が完了しました。\");\n        return;\n    }\n};\nDefaultDynamoStreamsToSlackHandler = __decorate([\n    (0,tsyringe__WEBPACK_IMPORTED_MODULE_0__.injectable)(),\n    __param(0, (0,tsyringe__WEBPACK_IMPORTED_MODULE_0__.inject)(\"Slack\")),\n    __param(1, (0,tsyringe__WEBPACK_IMPORTED_MODULE_0__.inject)(\"MessageService\")),\n    __metadata(\"design:paramtypes\", [typeof (_a = typeof _client_slack__WEBPACK_IMPORTED_MODULE_1__.Slack !== \"undefined\" && _client_slack__WEBPACK_IMPORTED_MODULE_1__.Slack) === \"function\" ? _a : Object, typeof (_b = typeof _services_message_service__WEBPACK_IMPORTED_MODULE_2__.MessageService !== \"undefined\" && _services_message_service__WEBPACK_IMPORTED_MODULE_2__.MessageService) === \"function\" ? _b : Object])\n], DefaultDynamoStreamsToSlackHandler);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGFuZGxlci9kZWZhdWx0LWR5bmFtby1zdHJlYW1zLXRvLXNsYWNrLWhhbmRsZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0QkE7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUhBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3J0aWZpY2F0aW9uLXNsYWNrLy4vc3JjL2hhbmRsZXIvZGVmYXVsdC1keW5hbW8tc3RyZWFtcy10by1zbGFjay1oYW5kbGVyLnRzP2MzNDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBpbmplY3RhYmxlIH0gZnJvbSBcInRzeXJpbmdlXCI7XG5pbXBvcnQgeyBEeW5hbW9EQlN0cmVhbUV2ZW50IH0gZnJvbSBcImF3cy1sYW1iZGFcIjtcbmltcG9ydCB7IFNsYWNrIH0gZnJvbSBcIi4uL2NsaWVudC9zbGFja1wiO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvbWVzc2FnZS1zZXJ2aWNlXCI7XG4vKipcbiAqIGR5YW5tbyBzdHJlYW1zIOKGkiBzbGFja+mAmuefpSDjg4/jg7Pjg4njg6kg5a6f6KOF44Kv44Op44K5XG4gKi9cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEZWZhdWx0RHluYW1vU3RyZWFtc1RvU2xhY2tIYW5kbGVyIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBpbmplY3QoXCJTbGFja1wiKSBwcml2YXRlIHJlYWRvbmx5IHNsYWNrOiBTbGFjayxcbiAgICBAaW5qZWN0KFwiTWVzc2FnZVNlcnZpY2VcIikgcHJpdmF0ZSByZWFkb25seSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2VcbiAgKSB7fVxuICBhc3luYyBleGVjdXRlKGV2ZW50OiBEeW5hbW9EQlN0cmVhbUV2ZW50KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc29sZS5sb2coXCLpgJrnn6Xlh6bnkIbjgpLplovlp4vjgZfjgb7jgZnjgIJcIik7XG4gICAgZXZlbnQuUmVjb3Jkcy5mb3JFYWNoKGFzeW5jIChyZWNvcmQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU3RyZWFtIHJlY29yZDogXCIsIEpTT04uc3RyaW5naWZ5KHJlY29yZCwgbnVsbCwgMikpO1xuXG4gICAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5tZXNzYWdlU2VydmljZS5jcmVhdGVTbGFja01lc3NhZ2UocmVjb3JkKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc2xhY2subm9ydGljZShtZXNzYWdlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIumAmuefpeWHpueQhuOBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLCBlKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwi6YCa55+l5Yem55CG44GM5a6M5LqG44GX44G+44GX44Gf44CCXCIpO1xuICAgIHJldHVybjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/handler/default-dynamo-streams-to-slack-handler.ts\n");

/***/ }),

/***/ "./src/handler/dynamo-streams-to-slack.ts":
/*!************************************************!*\
  !*** ./src/handler/dynamo-streams-to-slack.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"execute\": () => (/* binding */ execute)\n/* harmony export */ });\n/* harmony import */ var _config_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/container */ \"./src/config/container.ts\");\n\nconst execute = (event) => {\n    return _config_container__WEBPACK_IMPORTED_MODULE_0__[\"default\"].resolve(\"DefaultDynamoStreamsToSlackHandler\")\n        .execute(event);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGFuZGxlci9keW5hbW8tc3RyZWFtcy10by1zbGFjay50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBT0E7QUFDQTtBQUlBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3J0aWZpY2F0aW9uLXNsYWNrLy4vc3JjL2hhbmRsZXIvZHluYW1vLXN0cmVhbXMtdG8tc2xhY2sudHM/OWVjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29udGFpbmVyIGZyb20gXCIuLi9jb25maWcvY29udGFpbmVyXCI7XG5pbXBvcnQgeyBEZWZhdWx0RHluYW1vU3RyZWFtc1RvU2xhY2tIYW5kbGVyIH0gZnJvbSBcIi4vZGVmYXVsdC1keW5hbW8tc3RyZWFtcy10by1zbGFjay1oYW5kbGVyXCI7XG5pbXBvcnQgeyBEeW5hbW9EQlN0cmVhbUV2ZW50IH0gZnJvbSBcImF3cy1sYW1iZGFcIjtcblxuLyoqXG4gKiBkeWFubW8gc3RyZWFtcyDihpIgc2xhY2vpgJrnn6Ug44OP44Oz44OJ44OpXG4gKi9cbmV4cG9ydCBjb25zdCBleGVjdXRlID0gKGV2ZW50OiBEeW5hbW9EQlN0cmVhbUV2ZW50KTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIHJldHVybiBjb250YWluZXJcbiAgICAucmVzb2x2ZTxEZWZhdWx0RHluYW1vU3RyZWFtc1RvU2xhY2tIYW5kbGVyPihcbiAgICAgIFwiRGVmYXVsdER5bmFtb1N0cmVhbXNUb1NsYWNrSGFuZGxlclwiXG4gICAgKVxuICAgIC5leGVjdXRlKGV2ZW50KTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/handler/dynamo-streams-to-slack.ts\n");

/***/ }),

/***/ "./src/services/message-service.ts":
/*!*****************************************!*\
  !*** ./src/services/message-service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/services/mock-message-service.ts":
/*!**********************************************!*\
  !*** ./src/services/mock-message-service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MockMessageService\": () => (/* binding */ MockMessageService)\n/* harmony export */ });\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsyringe */ \"tsyringe\");\n/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tsyringe__WEBPACK_IMPORTED_MODULE_1__);\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\n\n\nlet MockMessageService = class MockMessageService {\n    createSlackMessage(record) {\n        const user = aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.Converter.unmarshall(record.dynamodb.NewImage);\n        const body = `\n    ユーザー登録がありました。ご確認お願いいたします。\n    *・* 登録日時: ${user.createdAt}\n    *・* ユーザー名: ${user.name}\n    *・* email: ${user.email}\n    *・* 年齢: ${user.age}\n    `;\n        return {\n            title: \"ユーザー登録がありました。ご確認お願いいたします。\",\n            body: body,\n        };\n    }\n};\nMockMessageService = __decorate([\n    (0,tsyringe__WEBPACK_IMPORTED_MODULE_1__.injectable)()\n], MockMessageService);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvbW9jay1tZXNzYWdlLXNlcnZpY2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxCQTtBQURBO0FBQ0E7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vcnRpZmljYXRpb24tc2xhY2svLi9zcmMvc2VydmljZXMvbW9jay1tZXNzYWdlLXNlcnZpY2UudHM/NTc1NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gXCIuL21lc3NhZ2Utc2VydmljZVwiO1xuaW1wb3J0IHsgRHluYW1vREJSZWNvcmQgfSBmcm9tIFwiYXdzLWxhbWJkYVwiO1xuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uL3R5cGVzL3VzZXJcIjtcbmltcG9ydCAqIGFzIEFXUyBmcm9tIFwiYXdzLXNka1wiO1xuaW1wb3J0IHsgaW5qZWN0YWJsZSB9IGZyb20gXCJ0c3lyaW5nZVwiO1xuaW1wb3J0IHsgU2xhY2tGb3JtIH0gZnJvbSBcIi4uL3R5cGVzL3NsYWNrLWZvcm1cIjtcblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1vY2tNZXNzYWdlU2VydmljZSBpbXBsZW1lbnRzIE1lc3NhZ2VTZXJ2aWNlIHtcbiAgY3JlYXRlU2xhY2tNZXNzYWdlKHJlY29yZDogRHluYW1vREJSZWNvcmQpOiBTbGFja0Zvcm0ge1xuICAgIGNvbnN0IHVzZXIgPSBBV1MuRHluYW1vREIuQ29udmVydGVyLnVubWFyc2hhbGwoXG4gICAgICByZWNvcmQuZHluYW1vZGIuTmV3SW1hZ2VcbiAgICApIGFzIFVzZXJNb2RlbDtcbiAgICBjb25zdCBib2R5ID0gYFxuICAgIOODpuODvOOCtuODvOeZu+mMsuOBjOOBguOCiuOBvuOBl+OBn+OAguOBlOeiuuiqjeOBiumhmOOBhOOBhOOBn+OBl+OBvuOBmeOAglxuICAgICrjg7sqIOeZu+mMsuaXpeaZgjogJHt1c2VyLmNyZWF0ZWRBdH1cbiAgICAq44O7KiDjg6bjg7zjgrbjg7zlkI06ICR7dXNlci5uYW1lfVxuICAgICrjg7sqIGVtYWlsOiAke3VzZXIuZW1haWx9XG4gICAgKuODuyog5bm06b2iOiAke3VzZXIuYWdlfVxuICAgIGA7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IFwi44Om44O844K244O855m76Yyy44GM44GC44KK44G+44GX44Gf44CC44GU56K66KqN44GK6aGY44GE44GE44Gf44GX44G+44GZ44CCXCIsXG4gICAgICBib2R5OiBib2R5LFxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/mock-message-service.ts\n");

/***/ }),

/***/ "./src/util/when.ts":
/*!**************************!*\
  !*** ./src/util/when.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eq\": () => (/* binding */ eq),\n/* harmony export */   \"when\": () => (/* binding */ when)\n/* harmony export */ });\nconst match = (val) => ({\n    on: (pred, fn) => match(val),\n    otherwise: (fn) => val,\n});\nconst chain = (val) => ({\n    on: (pred, fn) => pred(val) ? match(fn()) : chain(val),\n    otherwise: (fn) => fn(),\n});\nconst eq = (val1) => (val2) => val1 === val2;\nconst when = (val) => ({\n    on: (pred, fn) => pred(val) ? match(fn()) : chain(val),\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbC93aGVuLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9ydGlmaWNhdGlvbi1zbGFjay8uL3NyYy91dGlsL3doZW4udHM/M2Y1NSJdLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIENoYWluZWRXaGVuPFQsIFI+ID0ge1xuICBvbjogPEE+KHByZWQ6ICh2OiBUKSA9PiBib29sZWFuLCBmbjogKCkgPT4gQSkgPT4gQ2hhaW5lZFdoZW48VCwgUiB8IEE+O1xuICBvdGhlcndpc2U6IDxBPihmbjogKCkgPT4gQSkgPT4gUiB8IEE7XG59O1xuXG5jb25zdCBtYXRjaCA9IDxULCBSPih2YWw6IGFueSk6IENoYWluZWRXaGVuPFQsIFI+ID0+ICh7XG4gIG9uOiA8QT4ocHJlZDogKHY6IFQpID0+IGJvb2xlYW4sIGZuOiAoKSA9PiBBKSA9PiBtYXRjaDxULCBSIHwgQT4odmFsKSxcbiAgb3RoZXJ3aXNlOiA8QT4oZm46ICgpID0+IEEpOiBBIHwgUiA9PiB2YWwsXG59KTtcblxuY29uc3QgY2hhaW4gPSA8VCwgUj4odmFsOiBUKTogQ2hhaW5lZFdoZW48VCwgUj4gPT4gKHtcbiAgb246IDxBPihwcmVkOiAodjogVCkgPT4gYm9vbGVhbiwgZm46ICgpID0+IEEpID0+XG4gICAgcHJlZCh2YWwpID8gbWF0Y2goZm4oKSkgOiBjaGFpbjxULCBBIHwgUj4odmFsKSxcbiAgb3RoZXJ3aXNlOiA8QT4oZm46ICgpID0+IEEpID0+IGZuKCksXG59KTtcblxuZXhwb3J0IGNvbnN0IGVxID1cbiAgPFQ+KHZhbDE6IFQpID0+XG4gICh2YWwyOiBUKSA9PlxuICAgIHZhbDEgPT09IHZhbDI7XG5leHBvcnQgY29uc3Qgd2hlbiA9IDxUPih2YWw6IFQpID0+ICh7XG4gIG9uOiA8QT4ocHJlZDogKHY6IFQpID0+IGJvb2xlYW4sIGZuOiAoKSA9PiBBKSA9PlxuICAgIHByZWQodmFsKSA/IG1hdGNoPFQsIEE+KGZuKCkpIDogY2hhaW48VCwgQT4odmFsKSxcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/util/when.ts\n");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("reflect-metadata");

/***/ }),

/***/ "tsyringe":
/*!***************************!*\
  !*** external "tsyringe" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("tsyringe");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/handler/dynamo-streams-to-slack.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;