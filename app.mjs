import http from 'http';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs/promises';
import { TodoListService } from './todolist-service.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const todoListService = new TodoListService();

const server = http.createServer(async (req, res) => {
    res.setHeader("Content-Type", "application/json");

    if (req.method === 'GET') {
        todoListService.getTodos(req, res);
    } else if (req.method === 'POST') {
        todoListService.createTodo(req, res);
    } else if (req.method === 'PUT') {
        todoListService.updateTodo(req, res);
    } else if (req.method === 'DELETE') {
        todoListService.deleteTodo(req, res);
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 