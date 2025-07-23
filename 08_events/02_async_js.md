# Async JS

Default Javascript is a `Synchronous` and `Single Threaded` language

#### Synchronous 
It means that Js executes line by line

#### Single Threaded
It means that on a single thread a js program gets executed therefore execution of js is slow comapred to other languages

### Blocking Code nand Non-Blocking Code
`Blocking Code` means that until a function or event in js gets executed further code has to wait till this gets completed and further code wont run

`Non-Blocking Code` means that even if a function or event doesnt gets executed or needs some time to gets executed further code can run or execute 

Both codes are important depending on the situation
For Example if we want to write a data in to database it needs some times so if we give Non-Blocking Code further code gets executed and prints that the data is registered in database but consider that we encounter some error while storing and couldnt store it in database but we have already said user that data is stored to avoid these type of situation we use Blocking code
### Execution Context
Line gets executed one by one
|-> console.log(1)
|-> console.log(2)         1st console.log(1) gets executed than other consolelogs gets executed
|-> console.log(3)

#### What is Asynchronous JavaScript?
Asynchronous JavaScript allows code to run without blocking the main thread. This means that long-running operations (like network requests, timers, or file reading) can happen in the background, letting the rest of the code continue executing.

#### Synchronous vs Asynchronous
- **Synchronous:** Code runs line by line, each operation waits for the previous one to finish.
- **Asynchronous:** Some operations can start and finish later, allowing other code to run in the meantime.



