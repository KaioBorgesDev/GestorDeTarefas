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
var react_1 = require("react");
var Container_1 = __importDefault(require("../components/Container"));
var axios_1 = __importDefault(require("axios"));
var react_toastify_1 = require("react-toastify");
var ListTask = function () {
    var _a = (0, react_1.useState)(false), refresh = _a[0], setRefresh = _a[1];
    var _b = (0, react_1.useState)(null), tasks = _b[0], setTasks = _b[1]; // Inicializado como null
    var _c = (0, react_1.useState)("Todos"), statusFilter = _c[0], setStatusFilter = _c[1]; // Filtro de status
    var _d = (0, react_1.useState)(null), editTaskId = _d[0], setEditTaskId = _d[1]; // Controla qual tarefa está em edição
    var _e = (0, react_1.useState)(""), editedTitle = _e[0], setEditedTitle = _e[1];
    var _f = (0, react_1.useState)(""), editedDescription = _f[0], setEditedDescription = _f[1];
    (0, react_1.useEffect)(function () {
        getTasks(); // Chama a função de obter as tarefas
        setRefresh(false); // Reseta o estado de refresh
    }, [refresh, statusFilter]); // Adiciona statusFilter ao array de dependências
    var getTasks = function () { return __awaiter(void 0, void 0, void 0, function () {
        var url, response, tasks_res, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    url = statusFilter === "Todos"
                        ? "http://localhost:5002/listar"
                        : "http://localhost:5002/listar/".concat(statusFilter);
                    return [4 /*yield*/, axios_1.default.get(url)];
                case 1:
                    response = _a.sent();
                    if (response && response.data) {
                        tasks_res = response.data;
                        setTasks(tasks_res);
                    }
                    else {
                        react_toastify_1.toast.error("Erro ao encontrar as tarefas");
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    react_toastify_1.toast.error("Erro: " + error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var markAsCompleted = function (uuid) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1.default.post("http://localhost:5002/fechar/".concat(uuid))];
                case 1:
                    response = _a.sent();
                    if (response.status === 200) {
                        react_toastify_1.toast.success("Tarefa marcada como concluída!");
                        // Atualiza o estado das tarefas para refletir a mudança
                        setRefresh(true);
                    }
                    else {
                        react_toastify_1.toast.error("Erro ao fechar a tarefa.");
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    react_toastify_1.toast.error("Erro ao tentar marcar como concluída.");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var removeTask = function (uuid) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1.default.delete("http://localhost:5002/remove/".concat(uuid))];
                case 1:
                    response = _a.sent();
                    if (response.status === 200) {
                        react_toastify_1.toast.success("Tarefa removida com sucesso!");
                        // Atualiza a lista de tarefas
                        setRefresh(true);
                    }
                    else {
                        react_toastify_1.toast.error("Erro ao remover a tarefa.");
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    react_toastify_1.toast.error("Erro ao tentar remover a tarefa.");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleEditClick = function (task) {
        setEditTaskId(task.uuid); // Inicia a edição dessa tarefa
        setEditedTitle(task.title); // Preenche o título no campo de edição
        setEditedDescription(task.description); // Preenche a descrição no campo de edição
    };
    var handleSaveEdit = function (uuid) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!editedTitle || !editedDescription) {
                        react_toastify_1.toast.error("Título e descrição são obrigatórios.");
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1.default.put("http://localhost:5002/atualizar", {
                            uuid: uuid,
                            title: editedTitle,
                            description: editedDescription,
                        })];
                case 2:
                    response = _a.sent();
                    if (response.status === 200) {
                        react_toastify_1.toast.success("Tarefa atualizada com sucesso!");
                        setEditTaskId(null); // Finaliza a edição
                        setRefresh(true); // Atualiza a lista de tarefas
                    }
                    else {
                        react_toastify_1.toast.error("Erro ao atualizar a tarefa.");
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    react_toastify_1.toast.error("Erro: " + error_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var handleCancelEdit = function () {
        setEditTaskId(null); // Cancela a edição
    };
    return ((0, jsx_runtime_1.jsxs)(Container_1.default, { children: [(0, jsx_runtime_1.jsx)("h2", { className: "subtitle", children: "Lista de Tarefas" }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { children: "Filtrar por Status:" }), (0, jsx_runtime_1.jsxs)("select", { value: statusFilter, onChange: function (e) { return setStatusFilter(e.target.value); }, children: [(0, jsx_runtime_1.jsx)("option", { value: "Todos", children: "Todos" }), (0, jsx_runtime_1.jsx)("option", { value: "Pendente", children: "Pendente" }), (0, jsx_runtime_1.jsx)("option", { value: "Conclu\u00EDda", children: "Conclu\u00EDda" })] })] }), (0, jsx_runtime_1.jsx)("button", { onClick: function () { setRefresh(true); react_toastify_1.toast.success('Tarefas atualizadas'); }, className: "btn-atualizar", children: "Atualizar" }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "ID" }), (0, jsx_runtime_1.jsx)("th", { children: "Titulo" }), (0, jsx_runtime_1.jsx)("th", { children: "Descri\u00E7\u00E3o" }), (0, jsx_runtime_1.jsx)("th", { children: "Status" }), (0, jsx_runtime_1.jsx)("th", { children: "Criada em" }), (0, jsx_runtime_1.jsx)("th", { children: "A\u00E7\u00F5es" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: tasks && tasks.length > 0 ? (tasks.map(function (task) { return ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: task._id }), (0, jsx_runtime_1.jsx)("td", { children: editTaskId === task.uuid ? ((0, jsx_runtime_1.jsx)("input", { type: "text", value: editedTitle, onChange: function (e) { return setEditedTitle(e.target.value); } })) : (task.title) }), (0, jsx_runtime_1.jsx)("td", { children: editTaskId === task.uuid ? ((0, jsx_runtime_1.jsx)("input", { type: "text", value: editedDescription, onChange: function (e) { return setEditedDescription(e.target.value); } })) : (task.description) }), (0, jsx_runtime_1.jsx)("td", { children: task.status }), (0, jsx_runtime_1.jsx)("td", { children: new Date(task.created_At).toLocaleString() }), (0, jsx_runtime_1.jsxs)("td", { children: [task.status === "Pendente" && ((0, jsx_runtime_1.jsx)("button", { onClick: function () { return markAsCompleted(task.uuid); }, className: "btn-concluir", children: "Concluir" })), editTaskId === task.uuid ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("button", { onClick: function () { return handleSaveEdit(task.uuid); }, className: "btn-concluir", children: "Salvar" }), (0, jsx_runtime_1.jsx)("button", { onClick: handleCancelEdit, className: "btn-remover", children: "Cancelar" })] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("button", { onClick: function () { return handleEditClick(task); }, className: "btn-concluir", children: "Editar" }), (0, jsx_runtime_1.jsx)("button", { onClick: function () { return removeTask(task.uuid); }, className: "btn-remover", children: "Remover" })] }))] })] }, task._id)); })) : ((0, jsx_runtime_1.jsx)("tr", { children: (0, jsx_runtime_1.jsx)("td", { colSpan: 6, children: "Nenhuma tarefa encontrada" }) })) })] }), (0, jsx_runtime_1.jsx)("a", { href: "/", children: "Voltar" }), (0, jsx_runtime_1.jsx)(react_toastify_1.ToastContainer, {})] }));
};
exports.default = ListTask;
