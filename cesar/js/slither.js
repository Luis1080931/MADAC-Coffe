


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


