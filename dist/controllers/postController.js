"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPost = exports.getPosts = void 0;
const prismaClient_1 = __importDefault(require("../prismaClient"));
const getPosts = async (_, res) => {
    const posts = await prismaClient_1.default.post.findMany({ include: { author: true } });
    res.json(posts);
};
exports.getPosts = getPosts;
const createPost = async (req, res) => {
    const { title, content, authorId } = req.body;
    const post = await prismaClient_1.default.post.create({
        data: { title, content, authorId },
    });
    res.status(201).json(post);
};
exports.createPost = createPost;
