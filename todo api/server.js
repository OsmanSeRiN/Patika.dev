const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const { json } = require('body-parser');
const { nanoid } = require('nanoid');

dotenv.config({ path: './config.env' });

const app = express();

app.use(cors());
app.use(json());

let todos = [
  {
    id: nanoid(),
    title: 'todo 1',
    isSelected: true,
  },
  {
    id: nanoid(),
    title: 'todo 2',
    isSelected: false,
  },
  {
    id: nanoid(),
    title: 'todo 3',
    isSelected: false,
  },
  {
    id: nanoid(),
    title: 'todo 4',
    isSelected: false,
  },
  {
    id: nanoid(),
    title: 'todo 5',
    isSelected: false,
  },
];

app.get('/todos', (req, res) => res.send(todos));

app.post('/todos', (req, res) => {
  const todo = { title: req.body.title, id: nanoid(), isSelected: false };
  todos.push(todo);
  return res.send(todo);
});

app.patch('/todos/:id', (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex((todo) => todo.id == id);
  const isSelected = Boolean(req.body.isSelected);
  if (index > -1) {
    todos[index].isSelected = isSelected;
  }
  return res.send(todos[index]);
});

app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex((todo) => todo.id == id);
  if (index > -1) {
    todos.splice(index, 1);
  }

  res.send(todos);
});

const PORT = 7000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.green.bold));