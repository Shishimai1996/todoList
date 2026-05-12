# Todo App Architecture

This repository contains a Todo application built with a React frontend and a NestJS backend.

## Overall Structure

- `todo/`: React frontend
- `todo-api/`: NestJS backend with Prisma and PostgreSQL

The frontend runs on `http://localhost:3000` and communicates with the backend REST API at `http://localhost:3001`.

---

## Frontend (`todo/`)

- `src/App.tsx`:
  - Fetches the todo list from `GET /todos` on load
  - Creates a new todo with `POST /todos`
  - Deletes a todo with `DELETE /todos/:id`
- `src/todo.model.ts`: Todo type definition
- `src/components/NewTodo.tsx`: Input form for adding a new todo
- `src/components/TodoList.tsx`: Todo list display and delete button
- `src/components/CountUp.tsx`: Todo count display

The frontend is built with Create React App.

---

## Backend (`todo-api/`)

- NestJS application
- `src/main.ts`: bootstrap and CORS setup
- `src/todos/todos.controller.ts`: REST API endpoints
  - `GET /to  - `GET /to  - `GET /to  - `GET /to  - `GET `
- `src/todos/to- `src/todos/to- business- `src/todos/to- `src/todos/to- business- `src/todos/to- `src/todos/to- business- `src/todosa/schema.prisma`: Prisma - `src/todos/to- `src/tohe- `src/todos/to- `src/todos/to- business- `src/todos/toser- `src/todos/to- `src/todos/to- business- `src/todos/to- `src/todos/to- business- `src/todos/to- `src/todos/to- bu`: Todo - `src/todos/to# Docker- `src/todosnt En- `src/todos/to- `src/todos/to- business- `src/t the- `src/todos/to- `src/todos/to- busineQL
------------------------------------------t d------------------------------------------running the frontend, backend, and database together.

---

## Runn## Runn## Runn## Runn## Runn## Runn## Runn## Runn## Runn## Runn## R`
## Runn## Runn## Runn## Runn## Runn## Runn## Rupm run start:dev
```

### Running with Docker

```bash
cd todo-api
docker compose up -d
```

---

## Architecture Flow

1. The browser loads the React frontend.
2. The frontend calls `GET /todos` on the backend REST API.
3. The backend retrieves todos from PostgreSQL using Prisma.
4. The frontend renders the todo list and handles add/delete actions.
5. Adding a todo sends `POST /todos`; deleting sends `DELETE /todos/:id`.
6. The backend updates the database and returns the result.
