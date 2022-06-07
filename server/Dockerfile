# FROM node:16.15.0
# WORKDIR /server/src/app
# # Install app dependencies
# # A wildcard is used to ensure both package.json AND package-lock.json are copied
# # where available (npm@5+)
# COPY package*.json ./

# RUN npm install && npm install typescript -g
# # If you are building your code for production
# # RUN npm ci --only=production

# # Bundle app source
# COPY . .

# RUN tsc

# EXPOSE 3001

# CMD [ "node", "./build/index.js" ]

FROM node:16.15.0
WORKDIR /app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json tsconfig.json ./

RUN npm install

COPY ./src ./src

RUN ls -a
RUN npm run build

# # If you are building your code for production
# # RUN npm ci --only=production

# # Bundle app source
# COPY . .

# RUN tsc

# WORKDIR /app
# COPY ./build ./build

EXPOSE 3001

CMD [ "node", "./build/app.js" ]