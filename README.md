# Todo App

A full-stack Todo application deployed on AWS EC2.

🔗 Live Demo: http://52.194.34.190

## Tech Stack

| Layer          | Technology                  |
| -------------- | --------------------------- |
| Frontend       | React, TypeScript           |
| Backend        | NestJS, TypeScript          |
| Database       | PostgreSQL (via Prisma ORM) |
| Infrastructure | AWS EC2, Docker, nginx      |

## Architecture

<img width="601" height="647" alt="image" src="https://github.com/user-attachments/assets/06813c23-ede5-41ea-8587-719ba2cedea6" />


Browser → nginx (port 80) → NestJS API (port 3001) → PostgreSQL

All services run in Docker containers on a single EC2 instance (t2.micro).

## Features

- Add and delete tasks
- REST API with full CRUD support
- Persistent data storage with PostgreSQL

## Local Development

git clone https://github.com/Shishimai1996/todoList.git

# Backend

cd todo-api
docker compose up -d

# Frontend

cd ..
npm install
npm start
