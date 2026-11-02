FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
COPY .npmrc ./
RUN npm ci

COPY src ./src
COPY public ./public
COPY index.html ./
COPY vite.config.mjs ./
COPY tailwind.config.cjs ./
COPY postcss.config.cjs ./

RUN npm run build && rm -rf node_modules && npm install -g serve@latest

EXPOSE 3000
CMD ["serve", "-s", "dist"]
