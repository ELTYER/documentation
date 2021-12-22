FROM node:12
WORKDIR /usr/src/app

COPY . ./

# building the app
RUN npm install .
RUN npm run build

# Running the app
CMD [ "npm", "start" ]