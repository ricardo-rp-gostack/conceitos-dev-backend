const express = require("express");
const port = 3333;

const app = express();

// Metodos HTTP:
// GET: Buscar informação
// POST: Criar nova informação
// PUT/PATCH: Alterar informação
// DELETE:

// GERALMENTE
// Query params: Usado para filtros e paginacao. Vem como pares
// chave-valor. ex: /projects?filter=potato. req.query
// Route params: Serve para identificar um recurso. 
// Ex: projects/:id, req.params
// Request body: Conteudo(JSON) para criar ou editar um recurso. req.body

app.get("/projects", (req, res) => {
  const { title, owner } = req.query;

  return res.json(["Projeto 1", "Projeto 2"]);
});

app.post("/projects", (req, res) => {
  const {title, owner} = req.body;
  return res.json(["Projeto 1", "Projeto 2", "Projeto 3"]);
});

app.put("/projects/:id", (req, res) => {
  const { id } = request.params;

  return res.json(["Projeto 1 atualizado", "Projeto 2", "Projeto 3"]);
});

app.delete("/projects/:id", (req, res) => {
  return res.json(["Projeto 2", "Projeto 3"]);
});

app.listen(port, () => {
  console.log(` 🚀️ Server running in localhost:${port}`);
});
