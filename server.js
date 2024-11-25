import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Paisagem montanhosa",
        imagem: "https://source.unsplash.com/random/300x150/?mountain"
    },
    {
        id: 3, // Adicionando o ID faltante
        descricao: "Cachorro brincando",
        imagem: "https://source.unsplash.com/random/300x150/?dog"
    },
    {
        id: 4, // Adicionando o ID faltante
        descricao: "Pratos deliciosos",
        imagem: "https://source.unsplash.com/random/300x150/?food"
    },
    {
        id: 5, // Adicionando o ID faltante
        descricao: "Cidades vibrantes",
        imagem: "https://source.unsplash.com/random/300x150/?city"
    },
    {
        id: 6, // Adicionando o ID faltante
        descricao: "Natureza exuberante",
        imagem: "https://source.unsplash.com/random/300x150/?nature"
    }
];


const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorID(id){
    return posts.findIndex((post) => {
        return post.id === Number(id);
    })
}


app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id);
    res.status(200).json(posts[index]);
});