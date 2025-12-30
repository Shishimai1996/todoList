Quick DB setup for todo-api

1. Start Postgres with Docker Compose:

```bash
cd todo-api
docker compose up -d
```

2. Install dependencies and generate Prisma client:

```bash
cd todo-api
npm install
npx prisma generate
```

3. Run migrations (creates schema and tables):

```bash
npx prisma migrate dev --name init
```

4. Run the Nest app:

```bash
npm run start:dev
```
