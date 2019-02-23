console.log("running");
// 1 free function invokation => this === window
function sayHi () {

	console.log('hi', this);
} 

var obj = {name: 'whatever'};

// 2 left of the dot => this === obj left of the dot
//obj.hi = sayHi;

sayHi();

// 3 when using forced context => this === the given context

// sayHi.call(obj, arg1, arg2);  one time 
// VM87:3 hi {name: "whatever", hi: ƒ}
// undefined
// sayHi.apply(obj, [arg1, arg2]); one time with second argument as array of args
// VM87:3 hi {name: "whatever", hi: ƒ}
// undefined
// sayHi()
// VM87:3 hi Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}

// var sayHiOnlyObj = sayHi.bind(obj); // binds forever 
// undefined
// sayHiOnlyObj()
// VM87:3 hi {name: "whatever", hi: ƒ}
// undefined
// sayHiOnlyObj()
// VM87:3 hi {name: "whatever", hi: ƒ}

// 4 the new keyword => this === the newly created object

// function Car(color) {
    // (new magic) create new empty obj
    // (new magic) this = obj
    
// 	this.color = color;
    // (new magic) return obj
// } 
// undefined
// var blueC = Car('blue');
// undefined
// blueC
// undefined
// var blueC = new Car('blue');
// undefined
// blueC
// Car {color: "blue"}