let anyVar = "I am a string";
if(anyVar === "I am a string") {
    console.log(true);
}

let anyVar2 = false;
if(!anyVar2) {
    console.log("The boolean value false is falsy");
}

let anyVar3 = null;
if(!anyVar3) {
    console.log("The null value is falsy");
}

let anyVar4;
if(!anyVar4) {
    console.log("undefined is falsy");
}

let anyVar5 = 0;
if(!anyVar5) {
    console.log("The number 0 is falsy (the only falsy number)");
}

if(!"") {
    console.log("The empty string is falsy (the only falsy string)");
}