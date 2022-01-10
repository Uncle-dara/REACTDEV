import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost); //patch is used for ipdating existing documents
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);

export default router;
