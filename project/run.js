const os = require('os');
//const server = require('live-server');
const cp = require('child_process');
const host = os.hostname() === 'webservices' ? os.hostname() : 'localhost';
const port = host === 'webservices' ? 80 : 3000

var params = {
    port: port, // Set the server port. Defaults to 8080.
    host: host, // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
    root: "/public", // Set root directory that's being served. Defaults to cwd.
    //open: false, // When false, it won't load your browser by default.
    //ignore: 'scss,my/templates', // comma-separated string for paths to ignore
    file: "dist/index.html", // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
    wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
    // mount: [
    //     ['/components', './node_modules']
    // ], // Mount a directory to a route.
    logLevel: 0, // 0 = errors only, 1 = some, 2 = lots
    //middleware: [function(req, res, next) { next(); }] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
};

var devDocz = cp.spawn('docz', ['dev', `--host=${host}`, `--port=${port}`]);

// var gitFetch
// var int = setInterval(() => {

//     gitFetch = cp.exec('git fetch', (err, pOut, pErr) => {
//         if (err) clearInterval(int);


//         if (pOut !== '') { console.log('GIT F', pOut.toString()) }
//         console.log('GIT F', pOut.toString());
//         console.log('GIT ER', pErr.toString());
//     });

// }, 5000);


devDocz.stdout.on('data', (data) => {
    console.log(data.toString());
});


devDocz.stderr.on('data', (data) => {
    console.log(`ps stderr: ${data.toString()}`);
});

devDocz.on('close', (code) => {
    if (code !== 0) {
        console.log(`ps process exited with code ${code}`);
    }
});


//liveServer.start(params);./