# Async JS and Fetch

### Goals

Request-response cycle
HTTP Verbs
GET requests with external API
Handling promises from .fetch()
.catch()

- Explain the request-response cycle
- Explain the importance of HTTP verbs
- Explain asynchronous functions in JavaScript
- Use fetch() to retrieve data from external API

First install JSON Server: `npm install -g json-server`
To start the server run `json-server --watch db.json`
This will produce the following endpoint: `http://localhost:3000/pokemons`


### Warm up

In your own words, describe Asynchronous functions

- ability to perform different tasks simultaneously
- a function that takes time to complete
- good for api data fetching becuase they can work in tandem with other functions
- Using asynchronous functions allows for multiple tasks to be completed without fully completing one at a time.
- functions that wait for a promise to be executed and return a promise(fetch)
- Some of the functions run as normal (top to bottom execution) while the asynchronous functions act as though removed from the line and are run separately. allow you to perform long requests without blocking the main thread
- 