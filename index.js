//When they view the browser console, they observe a table listing how many of each flavor they have ordered. In this case, they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo.


//1. Add cohort team to new repo
//This has been completed

//2.Repo cntains HTML connected to JS file
//This has been completed

//3.Create a prompt asking for their favorite flavor using list of integers
const userInputString = prompt("what is your favorite flavor?", "vanilla, vanilla, vanilla, strawberry, coffee, coffee")

//4.Split the string of numbers into an array of strings. Make a table so you can see the keys and values side by side.
const flavor = userInputString.split(",");
console.log(flavor);
console.table(flavor);

//5. Loop is used to iterate through the array of flavors
for (const key in flavor){
    console.log(key)
    console.log(flavor[key])
}

console.log("_________");

//6. An Object is used to keep count of how many orders there are of each flavor. 

function printObject (obj){
    for (const key in obj){
        console.log(`${key}: ${obj[key]}`)
    }
};
printObject(flavor);

console.log("________")

//7.  Number of elements
function countElements(flavor){
    let count = 0;
    for(let i = 0; i < flavor.length; i++){
        count++;
    }
    return count;
}
const myFlavor = ["vanilla", "strawberry", "coffee"];
const elementCount = countElements(myFlavor);
console.log("Number of elements:", elementCount);







