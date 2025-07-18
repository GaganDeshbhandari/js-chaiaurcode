# Async JS

#### What is Asynchronous JavaScript?
Asynchronous JavaScript allows code to run without blocking the main thread. This means that long-running operations (like network requests, timers, or file reading) can happen in the background, letting the rest of the code continue executing.

#### Synchronous vs Asynchronous
- **Synchronous:** Code runs line by line, each operation waits for the previous one to finish.
- **Asynchronous:** Some operations can start and finish later, allowing other code to run in the meantime.

#### Callbacks
A callback is a function passed as an argument to another function, to be executed later (after some operation completes).

```js
console.log('Start');
setTimeout(() => {
  console.log('Callback executed after 2 seconds');
}, 2000);
console.log('End');
```

#### Promises
A Promise is an object representing the eventual completion or failure of an asynchronous operation.

```js
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Done!'), 1000);
});

promise.then(result => console.log(result));
```

#### Async/Await
`async` and `await` make it easier to work with Promises, allowing asynchronous code to look synchronous.

```js
async function fetchData() {
  let result = await promise;
  console.log(result);
}
fetchData();
```

#### Event Loop
The event loop is what allows JavaScript to perform non-blocking operations. It manages the execution of multiple chunks of your program over time.

#### Example: Event Loop in Action
```js
console.log('First');
setTimeout(() => {
  console.log('Second');
}, 0);
console.log('Third');
// Output: First, Third, Second
```

---
Feel free to add more notes or examples as you learn!