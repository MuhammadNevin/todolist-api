export class TodoListService {

    todolist = [
        {
            id: "1",
            title: "Learn Node.js",
            description: "Understand the basics of Node.js",
            dueDate: "2025-12-31T23:59:59Z",
            priority: "high",
            status: "in-progress",
            tags: ["learning", "backend"]
        },
        {
            id: "2",
            title: "Build a REST API",
            description: "Create a RESTful API for a ToDo app",
            dueDate: "2026-01-15T23:59:59Z",
            priority: "medium",
            status: "not-started",
            tags: ["project", "api"]
        }
    ];

    getJsonTodolist() {
        return JSON.stringify({
            code: 200,
            status: 'success',
            data: this.todolist
        });
    }

    getTodos(req, res) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(this.getJsonTodolist());
        res.end();
    }

    createTodo(req, res) {
        let body = '';

        req.addListener('data', (data) => {
            body += data.toString();

            try {
                if (!body) {
                    throw new Error('Empty request body');
                }

                const { title, description, dueDate, priority, status, tags } = JSON.parse(body);
                const newTodo = {
                    id: (this.todolist.length + 1).toString(),
                    title,
                    description,
                    dueDate,
                    priority,
                    status,
                    tags
                };
                this.todolist.push(newTodo);

                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.write(this.getJsonTodolist());

            } catch (error) {
                console.error('Error:', error.message); // Debug log
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.write(this.getJsonTodolist());

            } finally {
                res.end(); // Ensure response ends
            }
        });
    }

    updateTodo(req, res) {
        req.addListener('data', (data) => {
            let body = data.toString();
            console.log('Received body for update:', body); // Debug log

            try {
                if (!body) {
                    throw new Error('Empty request body');
                }

                const { id, title, description, dueDate, priority, status, tags } = JSON.parse(body);

                // Find the todo item by id
                // Ensure id comparison is type-safe
                const todoIndex = this.todolist.findIndex(todo => todo.id === id.toString());

                if (todoIndex === -1) {
                    throw new Error(`Todo with id ${id} not found`);
                }
                console.log('Updating todo at index:', todoIndex); // Debug log
                console.log('Current todo item:', this.todolist[todoIndex]); // Debug log
                console.log("body", body);

                // Update the todo item
                // Ensure the todo item is updated, not added
                this.todolist[todoIndex] = {
                    ...this.todolist[todoIndex], // Preserve existing fields
                    title,
                    description,
                    dueDate,
                    priority,
                    status,
                    tags
                };

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({
                    code: 200,
                    status: 'success',
                    message: 'Todo updated successfully',
                    data: this.todolist[todoIndex]
                }));

            } catch (error) {
                console.error('Error:', error.message); // Debug log
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({
                    code: 400,
                    status: 'error',
                    message: error.message
                }));

            } finally {
                res.end(); // Ensure response ends
            }
        });
    }

    deleteTodo(req, res) {
        // Implementation for deleting a todo item
        req.addListener('data', (data) => {
            let body = data.toString();
            console.log('Received body for delete:', body); // Debug log
            try {
                if (!body) {
                    throw new Error('Empty request body');
                }
                const { id } = JSON.parse(body);

                // Find the todo item by id
                const todoIndex = this.todolist.findIndex(todo => todo.id === id.toString());

                if (todoIndex === -1) {
                    throw new Error(`Todo with id ${id} not found`);
                }

                // Remove the todo item
                const deletedTodo = this.todolist.splice(todoIndex, 1)[0];

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({
                    code: 200,
                    status: 'success',
                    message: 'Todo deleted successfully',
                    data: deletedTodo
                }));
            } catch (error) {
                console.error('Error:', error.message); // Debug log
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({
                    code: 400,
                    status: 'error',
                    message: error.message
                }));
            } finally {
                res.end(); // Ensure response ends
            }
        });
    }
}