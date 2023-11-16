const express = require('express');
const helmet = require('helmet');
const app = express();
const port = 2003;

const todoItems = [
  { id: 1, name: "Code the Backend", done: false },
  { id: 2, name: "Run 10KM", done: false },
];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());

app.use((req, res, next) => {
  console.log(`Content Type: ${req.headers['content-type']}`);
  console.log(`Request URL ${req.url}`);
  console.log(`Hostname: ${req.hostname}`);
  next();
})

app.get('/', (req, res) => {
  console.log("GET");
  res.send('Hello world');
});

app.post('/', (req, res) => {
  console.log("POST");
  console.log(req.body);
  res.sendStatus(200);
});

app.get('/tasks', (req, res) => {
  res.json(todoItems);
});

app.get('/tasks/done/:isDone?', (req, res) => {
  const tasks = todoItems.filter(task => task.done.toString() === req.params.isDone)
  res.json(tasks);
});

app.get('/tasks/:id', (req, res) => {
  const task = todoItems.find(task => task.id === +req.params.id);
  if(!task){
    res.sendStatus(404);
  }else{
    res.json(task);
  } 
});

app.post('/tasks', (req, res) => {
  todoItems.push(req.body);
  res.json(todoItems);
});





app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});