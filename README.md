# POC Project


# Mock HTTP Promise
https://lmiller1990.github.io/vue-testing-handbook/simulating-user-input.html#mocking-an-ajax-call

# Vue testing handbook
https://lmiller1990.github.io/vue-testing-handbook/vuex-in-components.html#testing-vuex-in-components

# Common Tips of Vue Test Utils

https://vue-test-utils.vuejs.org/guides/#common-tips

# Options Mounted

https://vue-test-utils.vuejs.org/api/options.html


# Lifecycle

https://alligator.io/vuejs/component-lifecycle/


## BeforeCreate
The beforeCreate hook runs at the very *initialization of your component*. data has not been made reactive, and events have not been set up yet.

##  Created
In the created hook, you will be able to access reactive *data and events are active*. 
Templates and Virtual DOM have not yet been mounted or rendered.

## Mounting : beforeMount + mounted
Mounting hooks are often *the most-used hooks*, for better or worse.
 They allow you to access your component immediately *before and after the first render*. 
 They do not, however, run during server-side rendering.

Use if: You *need to access or modify the DOM* of your component immediately before or after the initial render.

*Do not use i*f: You need to fetch some data for your component on initialization. Use created (or created + activated for keep-alive components) for this instead, especially *if you need that data during server-side rendering.*


## Updating : beforeUpdate + updated

Updating hooks are called whenever *a reactive property used by your component changes*, or something else *causes it to re-render*. They allow you to hook into the watch-compute-render cycle for your component.

## beforeUpdate







## Test

Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

# Axios
https://fr.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html#Travailler-avec-des-erreurs

```
axios
  .get('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then(response => (this.info = response.data.bpi))
  .catch(error => console.log(error))


mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        this.info = response.data.bpi
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
  
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

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
