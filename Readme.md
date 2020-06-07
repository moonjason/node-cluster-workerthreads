# Node.js Clusters

## What are they ?

- A group of node instances to spread out web traffic throughout them 
  - scales an application execution on multiple processor cores by creating worker processes
- Made up of master instance, and worker instances
  - worker processes share a single port, therefore, requests are routed through a single port 
  - If I do `const cpus=require('os').cpus()` , get an array of objects like below

```js 
[
  {
    model: 'Intel(R) Core(TM) i5-7360U CPU @ 2.30GHz',
    speed: 2300,
    times: { user: 34570890, nice: 0, sys: 17256150, idle: 84705020, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i5-7360U CPU @ 2.30GHz',
    speed: 2300,
    times: { user: 13554200, nice: 0, sys: 6721730, idle: 116250080, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i5-7360U CPU @ 2.30GHz',
    speed: 2300,
    times: { user: 34902780, nice: 0, sys: 13902770, idle: 87720630, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i5-7360U CPU @ 2.30GHz',
    speed: 2300,
    times: { user: 11952690, nice: 0, sys: 5635070, idle: 118938240, irq: 0 }
  }
]
```

- One cpu or core will be the master instance, the rest will be workers



These separate instances are used to spread out traffic, making applications run smoother.

- each instance has independent data, etc. 
  - consumes full amount of ram 
    - so sharing data is tougher than worker threads

If an instance, fails, user joins a different instance or a new thread gets created.





# Worker Threads

## What are they?

- Similar to Web Workers 
- Like threads in other programming langauges but are not



**JavaScript is single threaded** (arguably but assume this)



```js
const { Worker, isMainThread, parentPort } = require('worker_threads');
if (isMainThread) {
  // this code is executed in the main thread 
  
 	// create the worker
  const worker = new Worker(__filename);
  
  // Listen for messages from the worker and print them 
  worker.on('message', (msg) => {console.log(msg); });
} else {
  // this code is executed in the worker and not in the main thread.
  
  // send a message to the main thread.
  parentPort.postMessage('Hello world!');
}
```



