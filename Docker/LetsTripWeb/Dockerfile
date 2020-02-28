FROM node

# Create app directory
RUN mkdir -p /home/node/LetsTripWeb
WORKDIR /home/node/LetsTripWeb

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json .

RUN npm install 
RUN npm install bcryptjs
RUN npm install jsonwebtoken
RUN npm install body-parser
RUN npm install mysql
RUN npm install sequelize
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "node", "app.js" ]
