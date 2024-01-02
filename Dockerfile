FROM node:18.17.0-alpine AS development

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

# Stage 2: Build production image
FROM node:18.17.0-alpine AS production

WORKDIR /app

COPY --from=development /app/node_modules ./node_modules
COPY . .

# Build the Next.js application
RUN yarn build

EXPOSE 2000

# Start the application
CMD ["yarn", "start"]