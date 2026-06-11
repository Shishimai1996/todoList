# Build stage
FROM node:18-alpine AS builder
WORKDIR /usr/src/app

# Install build deps
COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

# Ensure openssl is available and generate prisma client and build the app
RUN apk add --no-cache openssl
RUN npx prisma generate
RUN npm run build

# Production image
FROM node:18-alpine
WORKDIR /usr/src/app

COPY package*.json ./
# production deps are copied from builder; skip install to avoid lockfile conflicts
RUN apk add --no-cache openssl

COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/prisma ./prisma

EXPOSE 3001
CMD ["npm", "run", "start:prod"]
