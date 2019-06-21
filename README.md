# nuxt-function-api-example

This is a example for using [`vue-function-api`](https://github.com/liximomo/vue-function-api) in [`Nuxt.js`](https://nuxtjs.org/)

Live Demo: <https://nuxt-function-api-example.netlify.com>

## Steps to do
1. Install `vue-function-api`

```bash
npm i vue-function-api
```

2. Create a plugin under `./plugins`

```ts
import Vue from 'vue'
import { plugin } from 'vue-function-api'

Vue.use(plugin)
```

3. Config `nuxt.config.js`

```ts
export default {
  // ...
  plugins: [
    './plugins/vue-function-api' // your plugin name
  ],
  // ...
}
```

4. You are good to go!~

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
