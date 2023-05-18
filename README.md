# unico-sdk-poc-vuejs

## NodeJS Version

```
14.X.X
```

## Project setup
```
yarn install

or 

npm install
```

### Compiles and hot-reloads for development
```
yarn serve

or 

npm run serve
```

### Compiles and minifies for production
```
yarn build

or 

npm run build
```

### Lints and fixes files
```
yarn lint

or

npm run lint
```

## Credentials configurations
The configuration bundle genereted by Unico's portal must be putted in a public folder. Like the next topic.

Obs: in case of incorrect bundle datas, an error "unable to get unico authentication" or "current host is not registre" will raise when trying to open the camera.

## Server configurations

In case of all configurations above was done and Camera doesn't open, verify if your application is running with https, example: https://0.0.0.0:8000 .

### Credentials Path
Fill the file below with the bundle genereted by Unico's portal:
* /public/data/service.json