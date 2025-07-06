# 1. Installer Stage: Install dependencies
FROM node:22-slim AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

# 2. Builder Stage: Build the application
FROM node:22-slim AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production
ENV NEXT_PUBLIC_MY_ENV_VAR=${NEXT_PUBLIC_MY_ENV_VAR}


RUN npm run build

# 3. Runner Stage: Run the application
FROM node:22-slim AS runner
WORKDIR /app
# The standalone output already includes the necessary node_modules, so we don't need to copy them separately.
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 8080

# The start command in package.json is "next start -p 8080".
# The standalone server will listen on the PORT environment variable, which Cloud Run sets to 8080 by default.
CMD ["node", "server.js"]
