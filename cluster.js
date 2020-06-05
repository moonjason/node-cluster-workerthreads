const http = require('http');
const cluster = require('cluster');
const cpus = require('os').cpus()
let numCPUs = cpus.length;
// console.log(cpus);

if(cluster.isMaster){ // checking if master process
    console.log('this is the master process', process.pid);
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork(); // creating worker instances 
    }
} else {
    http.createServer((req, res) => {
        const message = `worker process: ${process.pid}`;
        console.log(message);
        res.end(message)
    }).listen(9000); 
}