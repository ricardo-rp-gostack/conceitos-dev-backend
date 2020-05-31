const express = require("express");
const { uuid } = require("uuidv4");

const port = 3333;

const app = express();
// Precisamos usar o json parser como middleware para poder acessar o req.body
app.use(express.json());

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

const projects = [];

app.get("/projects", (req, res) => {
  const { title } = req.query;

  const results = title
    ? projects.filter((project) => project.title.includes(title))
    : projects;

  return res.json(results);
});

app.post("/projects", (req, res) => {
  const { title, owner } = req.body;

  const project = { id: uuid(), title, owner };

  projects.push(project);

  return res.json(project);
});

app.put("/projects/:id", (req, res) => {
  const { id } = req.params;
  const { title, owner } = req.body;

  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex > 0) {
    return res.status(400).json({ error: "Project not found." });
  }
  const project = {
    id,
    title,
    owner,
  };

  projects[projectIndex] = project;

  return res.json(project);
});

app.delete("/projects/:id", (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex > 0) {
    return res.status(400).json({ error: "Project not found." });
  }
  projects.splice(projectIndex, 1);

  return res.status(204).send();
});

app.listen(port, () => {
  console.log(` 🚀️ Server running in localhost:${port}`);
});
