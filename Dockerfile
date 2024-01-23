FROM node:20-slim AS builder

WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./
COPY prisma ./prisma/

RUN apt-get update -y && apt-get install -y openssl

RUN npm install -g pnpm
RUN pnpm install

COPY . .

RUN pnpm build

# FROM：基于一个基础镜像来修改
FROM node:lts-slim

# WORKDIR：指定当前工作目录
WORKDIR /app

# COPY：把容器外的内容复制到容器内
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/node_modules ./.nuxt
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/dist ./dist

# EXPOSE：声明当前容器要访问的网络端口
EXPOSE 3000

# RUN：在容器内执行命令
CMD [ "npm", "run", "prod" ]
