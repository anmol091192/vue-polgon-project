# vue-project

### About
- Builded the landing page using Vue.js framework
- Renamed "Add DuckDuckGo to Chrome" buttons as "Get Started"
- Incorporated Material Design through the use of Vuetify
- Dockerized the application through a clear Dockerfile.
- SEO Optimization done via adding meta tags(title) to each of the pages(Home,Signup).

### Techology Stack
- Vue.js (v2.x)
- Vuetify
- Docker

### Deployed on Netlify
```
https://dreamy-lichterman-6effa1.netlify.app/
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Docker Development Environment
- To build the Docker image, please run the following command.
```
docker build -t myapp .
```
- Spin up the Docker container
```
docker run -it -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules -p 8080:8080 myapp
```

### Docker Production ready Image 
- Building the production Image
```
docker build -f Dockerfile-prod -t myapp-prod .
```
- Running the Container
```
docker run -it -p 80:80 --rm myapp-prod
```
