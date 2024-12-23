"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var axios_1 = __importDefault(require("axios"));
var react_1 = require("react");
var react_toastify_1 = require("react-toastify"); // Importando o ToastContainer e toast
require("react-toastify/dist/ReactToastify.css"); // Importando o estilo do Toastify
var Container_1 = __importDefault(require("../components/Container"));
var CreateTask = function () {
    // definindo estados para armazenar os valores dos inputs
    var _a = (0, react_1.useState)(''), titleValue = _a[0], setTitleValue = _a[1];
    var _b = (0, react_1.useState)(''), descriptionValue = _b[0], setDescriptionValue = _b[1];
    // Função para lidar com as mudanças nos inputs
    var handleValueInputs = function (event) {
        var _a = event.target, name = _a.name, value = _a.value;
        // Atualizando o estado com base no input que foi alterado
        if (name === 'titulo') {
            setTitleValue(value);
        }
        else if (name === 'descricao') {
            setDescriptionValue(value);
        }
    };
    // Função para criar a tarefa, que será chamada no submit
    var createTask = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var body, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    // Verificando se os campos estão vazios
                    if (titleValue != '' || descriptionValue != '') {
                        react_toastify_1.toast.error("Os campos estão vazios!"); // Exibe um toast de erro
                        return [2 /*return*/];
                    }
                    body = {
                        id_user: "0622a129-f622-4244-abd4-7b650419a842",
                        title: titleValue,
                        description: descriptionValue
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1.default.post('http://localhost:5002/', body)];
                case 2:
                    response = _a.sent();
                    if (response.data.Mensagem) {
                        react_toastify_1.toast.success(response.data.Mensagem);
                    }
                    if (response.data.Error) {
                        react_toastify_1.toast.error("Não foi possível enviar a tarefa.");
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    react_toastify_1.toast.error("Ocorreu um erro ao criar a tarefa.");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsxs)(Container_1.default, { children: [(0, jsx_runtime_1.jsxs)("form", { className: "form", onSubmit: createTask, children: [(0, jsx_runtime_1.jsxs)("div", { className: "form-group", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "titulo", children: "T\u00EDtulo" }), (0, jsx_runtime_1.jsx)("input", { type: "text", id: "titulo", name: "titulo", placeholder: "Levar o cachorro para passear", value: titleValue, onChange: handleValueInputs })] }), (0, jsx_runtime_1.jsxs)("div", { className: "form-group", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "descricao", children: "Descri\u00E7\u00E3o" }), (0, jsx_runtime_1.jsx)("input", { type: "text", id: "descricao", name: "descricao", placeholder: "Descri\u00E7\u00E3o da tarefa", value: descriptionValue, onChange: handleValueInputs })] }), (0, jsx_runtime_1.jsx)("button", { type: "submit", className: "submit-btn", children: "Enviar" })] }), (0, jsx_runtime_1.jsx)(react_toastify_1.ToastContainer, {}), (0, jsx_runtime_1.jsx)("h3", { children: (0, jsx_runtime_1.jsx)("a", { href: "/listar", children: "Listar Tarefas" }) })] }));
};
exports.default = CreateTask;
