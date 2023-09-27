


// let boxSlither = document.getElementById("boxSlither");

// boxSlither.addEventListener("click", function(){
//     // alert("yes, funtion");
//     if (boxSlither.classList.contains("box-slither-1")) {
//         boxSlither.classList.remove("box-slither-1");
//         boxSlither.classList.add("box-slither-2"); 
//     }
//     else if (boxSlither.classList.contains("box-slither-2")) {
//         boxSlither.classList.remove("box-slither-2");
//         boxSlither.classList.add("box-slither-3"); 
//     }
//     else if (boxSlither.classList.contains("box-slither-3")) {
//         boxSlither.classList.remove("box-slither-3");
//         boxSlither.classList.add("box-slither-4"); 
//     }
//     else if (boxSlither.classList.contains("box-slither-4")) {
//         boxSlither.classList.remove("box-slither-4");
//         boxSlither.classList.add("box-slither-1"); 
//     }
    
// })
let atras = document.getElementById("atras");
let siguiente = document.getElementById("siguiente");
let signal1 = document.getElementById("signal1");
let signal2 = document.getElementById("signal2");
let signal3 = document.getElementById("signal3");
let signal4 = document.getElementById("signal4");

atras.addEventListener("click", function(){
    if (boxSlither.classList.contains("box-slither-4")) {
         boxSlither.classList.remove("box-slither-4");
         boxSlither.classList.add("box-slither-3"); 
     }
     else if (boxSlither.classList.contains("box-slither-3")) {
         boxSlither.classList.remove("box-slither-3");
         boxSlither.classList.add("box-slither-2"); 
     }
     else if (boxSlither.classList.contains("box-slither-2")) {
         boxSlither.classList.remove("box-slither-2");
         boxSlither.classList.add("box-slither-1"); 
     }
     else if (boxSlither.classList.contains("box-slither-1")) {
         boxSlither.classList.remove("box-slither-1");
         boxSlither.classList.add("box-slither-4"); 
     }
    
})
siguiente.addEventListener("click", function(){
    if (boxSlither.classList.contains("box-slither-1")) {
        boxSlither.classList.remove("box-slither-1");
        boxSlither.classList.add("box-slither-2");
    }
    else if (boxSlither.classList.contains("box-slither-2")) {
        boxSlither.classList.remove("box-slither-2");
        boxSlither.classList.add("box-slither-3"); 
    }
    else if (boxSlither.classList.contains("box-slither-3")) {
        boxSlither.classList.remove("box-slither-3");
        boxSlither.classList.add("box-slither-4"); 
    }
    else if (boxSlither.classList.contains("box-slither-4")) {
        boxSlither.classList.remove("box-slither-4");
        boxSlither.classList.add("box-slither-1"); 
    }
    
})


siguiente.addEventListener("click", function(){
    if (signal1.classList.contains("sig1")) {
        signal1.classList.remove("sig1");
        signal1.classList.add("sig2");
        signal2.classList.remove("sig2");
        signal2.classList.add("sig1");
        signal3.classList.remove("sig1");
        signal3.classList.add("sig2");
        signal4.classList.remove("sig1");
        signal4.classList.add("sig2");
    }
    else if (signal2.classList.contains("sig1")) {
        signal1.classList.remove("sig1");
        signal1.classList.add("sig2");
        signal2.classList.remove("sig1");
        signal2.classList.add("sig2");
        signal3.classList.remove("sig2");
        signal3.classList.add("sig1");
        signal4.classList.remove("sig1");
        signal4.classList.add("sig2"); 
    }
    else if (signal3.classList.contains("sig1")) {
        signal1.classList.remove("sig1");
        signal1.classList.add("sig2");
        signal2.classList.remove("sig1");
        signal2.classList.add("sig2");
        signal3.classList.remove("sig1");
        signal3.classList.add("sig2"); 
        signal4.classList.remove("sig2");
        signal4.classList.add("sig1"); 
    }
    else if (signal4.classList.contains("sig1")) {
        signal1.classList.remove("sig2");
        signal1.classList.add("sig1");
        signal2.classList.remove("sig1");
        signal2.classList.add("sig2");
        signal3.classList.remove("sig1");
        signal3.classList.add("sig2"); 
        signal4.classList.remove("sig1");
        signal4.classList.add("sig2");
         
    }
    
})
atras.addEventListener("click", function(){
    if (signal1.classList.contains("sig1")) {
        signal1.classList.remove("sig1");
        signal1.classList.add("sig2");
        signal2.classList.remove("sig1");
        signal2.classList.add("sig2");
        signal3.classList.remove("sig1");
        signal3.classList.add("sig2");
        signal4.classList.remove("sig2");
        signal4.classList.add("sig1");
    }
    else if (signal2.classList.contains("sig1")) {
        signal1.classList.remove("sig2");
        signal1.classList.add("sig1");
        signal2.classList.remove("sig1");
        signal2.classList.add("sig2");
        signal3.classList.remove("sig1");
        signal3.classList.add("sig2");
        signal4.classList.remove("sig1");
        signal4.classList.add("sig2"); 
    }
    else if (signal3.classList.contains("sig1")) {
        signal1.classList.remove("sig1");
        signal1.classList.add("sig2");
        signal2.classList.remove("sig2");
        signal2.classList.add("sig1");
        signal3.classList.remove("sig1");
        signal3.classList.add("sig2"); 
        signal4.classList.remove("sig1");
        signal4.classList.add("sig2"); 
    }
    else if (signal4.classList.contains("sig1")) {
        signal1.classList.remove("sig1");
        signal1.classList.add("sig2");
        signal2.classList.remove("sig1");
        signal2.classList.add("sig2");
        signal3.classList.remove("sig2");
        signal3.classList.add("sig1"); 
        signal4.classList.remove("sig1");
        signal4.classList.add("sig2");
         
    }
    
})




// siguiente.addEventListener("click", function(){
//     if (signal1.classList.contains("sig2")) {
//         signal1.classList.remove("sig2");
//         signal1.classList.add("sig1");
//     }
//     else if (signal2.classList.contains("sig2")) {
//         signal2.classList.remove("sig2");
//         signal2.classList.add("sig1"); 
//     }
//     else if (signal3.classList.contains("sig2")) {
//         signal3.classList.remove("sig2");
//         signal3.classList.add("sig1"); 
//     }
//     else if (signal4.classList.contains("sig2")) {
//         signal4.classList.remove("sig2");
//         signal4.classList.add("sig1"); 
//     }
    
// })
// atras.addEventListener("click", function(){
//     if (signal1.classList.contains("sig1")) {
//         signal1.classList.remove("sig1");
//         signal1.classList.add("sig2");
//     }
//     else if (signal2.classList.contains("sig1")) {
//         signal2.classList.remove("sig1");
//         signal2.classList.add("sig2"); 
//     }
//     else if (signal3.classList.contains("sig1")) {
//         signal3.classList.remove("sig1");
//         signal3.classList.add("sig2"); 
//     }
//     else if (signal4.classList.contains("sig1")) {
//         signal4.classList.remove("sig1");
//         signal4.classList.add("sig2"); 
//     }

// })


