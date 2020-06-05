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

If an instance, fails, user joins a different instance or a new thread gets created.

