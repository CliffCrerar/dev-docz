# Dinosaur-Mask
Json-server instance for mocking API's. This way the frontend skuad will never ever again say: "Backend is not Ready"

### Live url - https://dinosaur-mask.herokuapp.com/

- To access and modify resources, you can use any HTTP method `GET POST PUT PATCH DELETE OPTIONS`
- To change resources - modify [db.json](/db.json) file
- To add and override methods - modify [server/index.js](//server/index.js) file
- All resources are wraped in `items` root key `{items: [...]}`
- For more info check out [json-server](https://github.com/typicode/json-server) repo

### Local setup
- `yarn install` or `npm install`
- `npm run start:local`
