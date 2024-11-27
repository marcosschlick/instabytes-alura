import express from "express"; 
import multer from "multer"; 
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js"; 
import cors from "cors";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}
const upload = multer({dest: "./uploads"});

const routes = (app) => {
    app.use(express.json());
    app.use(cors(corsOptions))
    app.get("/posts", listarPosts); 

    app.post("/posts", postarNovoPost); 


    app.post("/upload", upload.single("imagem"), uploadImagem); 

    app.put("/upload/:id", atualizarNovoPost)
};

export default routes;