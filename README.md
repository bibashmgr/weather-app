# Get Started with Fetching API in Reactjs

### Using _fetch()_ method

The _fetch()_ method takes one argument, the path to the resource you want to fetch. It returns a __Promise__ so you can use the _then()_ and _catch()_ methods to handle it.

__SYNTAX:__
```js
fetch(url)
    .then(response => {
        // handle the response
    })
    .catch(error => {
        // handle the error
    });
```

In practice, you often use the _async/await_ with the fetch() method like this:

```js
async function fetchApi() {
    let response = await fetch('url');
    let data = await response.method();
    // the Response object has other methods such as json(), text(), etc to handle the respective type of data.
    console.log(data);
}
```

### Using axios

__SYNTAX:__
```js
// GET request
axios.get('url', {
    // params
  })
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle error
  });

// POST request
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    // data to be posted
  }
})
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle error
  });
```


