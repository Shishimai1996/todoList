AuthModule added:

- `POST /auth/signup` { email, password } -> { access_token }
- `POST /auth/login` { email, password } -> { access_token }

JWT secret: read from `process.env.JWT_SECRET` otherwise `CHANGE_THIS_SECRET`.

Todos endpoints are protected by `JwtAuthGuard` and expect `Authorization: Bearer <token>`.
