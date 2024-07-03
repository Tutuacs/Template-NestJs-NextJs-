FROM node:20 as base

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g pnpm
COPY . .
RUN pnpx prisma generate --schema=./prisma/schema.prisma
RUN pnpm run build

FROM base as server
CMD [ "node", "dist/main.js" ]

# FROM base as migration
# CMD [ "pnpx", "prisma", "migrate", "dev", "--name", "init", "--schema=./prisma/schema.prisma"]