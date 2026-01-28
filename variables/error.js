num=prompt("Enter a number:");
try {
    if (isNaN(num)) {
        throw "Not a number";
    } if (num == ""){
        throw "Empty input";
    }console.log(num**2);
} catch (err) {
    console.log("Error: " + err);
} finally {
    console.log("Execution completed.");
}