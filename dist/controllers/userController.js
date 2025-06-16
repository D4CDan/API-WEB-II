"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUsers = void 0;
const prismaClient_1 = __importDefault(require("../prismaClient"));
const getUsers = async (_, res) => {
    const users = await prismaClient_1.default.user.findMany({ include: { posts: true } });
    res.json(users);
};
exports.getUsers = getUsers;
const createUser = async (req, res) => {
    const { name, email } = req.body;
    const user = await prismaClient_1.default.user.create({ data: { name, email } });
    res.status(201).json(user);
};
exports.createUser = createUser;
