# Advanced HTTP
## SWBAT
- [] Implement POST, PATCH and DELETE

## json-server
We will be using json-server again!
```
json-server --watch --port4000 db.json
```

## Request Response
![request-response](./assets/requestResponse.png) 


## POST
`The HTTP POST method sends data to the server. The type of the body of the request is indicated by the Content-Type header. — MDN`




We can use post to persist data we've created. The data can be render on the dom optimistically (before the request has resolved) or pessimistically (after the request has resolved)

```
const cat = { name: 'rose' };

fetch('https://localhost:3000/pets', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(cat),
})
.then(res => res.json())
.then(data => {
  console.log(data);
})
.catch((error) => {
  console.error('Error:', error);
});

//Async and Await
async function postData(cat) {
  const res = await fetch('https://localhost:3000/pets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
    body: JSON.stringify(cat) 
  });
  const data = await res.json(); 
  console.log(data)
}

```


## Patch  

`PATCH is somewhat analogous to the "update" concept found in CRUD (in general, HTTP is different than CRUD, and the two should not be confused).A PATCH request is considered a set of instructions on how to modify a resource. Contrast this with PUT; which is a complete representation of a resource. -MDN`

Patch takes the updated data and looks identical to a post, excluding the url which must contain the ID of the item being updated.

```
const cat = { name: 'bubbles' };

fetch('https://localhost:3000/pets/120', {
  method: 'PATCH', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(cat),
})
.then(res => res.json())
.then(data => {
  console.log(data);
})
.catch((error) => {
  console.error('Error:', error);
});


```

## Delete

`The HTTP DELETE request method deletes the specified resource.-MDN`

```

fetch('https://localhost:3000/pets/120', {
  method: 'DELETE', 
})
.then(res => res.json())
.then(data => {
  console.log(data);
})
.catch((error) => {
  console.error('Error:', error);
});

```