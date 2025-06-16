"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const postRoutes_1 = __importDefault(require("./routes/postRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Servir a pasta 'public' como frontend
app.use(express_1.default.static(path_1.default.join(__dirname, '..', 'public')));
// API routes
app.use('/users', userRoutes_1.default);
app.use('/posts', postRoutes_1.default);
// Rota raiz
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', 'public', 'index.html'));
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
