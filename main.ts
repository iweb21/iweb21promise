#! /usr/bin/env node

const goingToPicnic =new Promise ((resolve, reject) => {
    setTimeout(() => {
        reject("Failure..!");
    }, 2000);
    
})
goingToPicnic
.then((value) => {
    console.log(value);
    console.log("going to Picnic...");
    
    })
    .catch((value) => {
        console.log(value);
        console.log("i m not going to Picnic...");
        
        
    })