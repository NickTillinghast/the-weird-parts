var a = "hello world";

function b() {
    console.log("called B!");
};
b();
console.log(a);



function a() {
    function b() {
        var myVar;
        console.log(myVar)
    }
    console.log(myVar);
    var myVar = 2;
    b()
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);

========================

function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms) { }
    console.log('finished functioin');
}

function clickHandler() {
    console.log('click event!')
}
// listen for the click event
document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');

=========== because its a function it will be hoisted =========
greet();

function greet() {
    console.log('hi');
}

======== variable will not be hoisted =========
var anonymousGreet = function () {
    console.log('hi');
}

anonymousGreet();
=============== function within a function =======
function log(a) {
    a();
}

log(function () {
    console.log('hello');
});





