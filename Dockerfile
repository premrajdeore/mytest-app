FROM node:20.12.2-bullseye
COPY package.json package-lock.json .
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["npm", "start"]