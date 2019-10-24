

// Using a callback

/* DECLARATION */
function theMainFunction(...someParams /* < optional */, callback){
    // some logic that runs
    return callback();
}

function theDelayedFunction(){
    // some logic
    return;
}

/* EXECUTION */
theMainFunction(...someParams ,function(){
    theDelayedFunction();
})

// Using a promise

function theSecondMainFunction(){
    // RUNS FIRST
    var result = 'foo';
    return new Promise((resolve,reject)=>{
        // RUNS SECOND
        const valid = true; // < this is optional
            // you can do some more logic here
        if(valid){
            resolve(result);
        } else {
            // you can even run validation in this block and if it fails
            // then execute the reject
            reject(); // < this is optional
        }
        // note that in the returned promise code block essentially you could only run the resolve(result) all the other code is not required but it is good practice. 
    })
}

theSecondMainFunction().then(function(result){
    // RUNS THIRD
    console.log(result); // logs "foo" to the console
}).catch(function(err){
    // OPTIONAL CODE BLOCK
    // RUNS IF REJECT IS EXECUTED INSTEAD OF RESOLVED.
}).finally(function(){
    // OPTIONAL CODE BLOCK
    // RUNS FOURTH REGARDLESS OF RESOLVED OR REJECTED
});

// The observable pattern

class Observable {
    store;
    constructor(){
        this.store = []
    }

	subscribe( fn ) {
		this.callbacks.push( fn );
	}
	publish( data ) {
		this.callbacks.forEach( fn => fn( data ) );
	}
	unsubscribe() {
		this.callbacks = [];
	}
}

module.exports = Observable;

// in some other part of the application 

const Observable = require('path to file with observable class');

const observable = new Observable(); // instantiate the observable

function thirdMainFunction(){
    // RUNS FIRST
    // Some logic that produces a result
    result = 'bar';
    observable.publish(result);
}

// for demo purpose this is underneath the "thirdMainFunction"
// But once the observable has been instantiated it can 
// be exported with "module.exports" and imported with "require"
// anywhere in the application and subscribe would bring whatever 
// to that module.

observable.subscribe(function(result){
    // RUNS SECOND
    console.log(result); // will log "bar" to console
})

