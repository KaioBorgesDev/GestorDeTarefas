"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
require("./App.css");
var CreateTask_1 = __importDefault(require("./pages/CreateTask"));
var NotFound_1 = __importDefault(require("./pages/NotFound"));
var ListTask_1 = __importDefault(require("./pages/ListTask"));
function App() {
    return ((0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/', element: (0, jsx_runtime_1.jsx)(CreateTask_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/listar', element: (0, jsx_runtime_1.jsx)(ListTask_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '*', element: (0, jsx_runtime_1.jsx)(NotFound_1.default, {}) })] }));
}
exports.default = App;
