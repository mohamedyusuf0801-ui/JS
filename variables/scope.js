let x = 10;    // Global scope
function outerFunction() {
    let y = 20;  // local scope 
    function innerFunction() {
        let z = 30;  // block scope
        console.log("Inner Function: x =", x); // Accessing global variable
        console.log("Inner Function: y =", y); // Accessing outer function variable
        console.log("Inner Function: z =", z); // Accessing inner function variable
    }
    
}