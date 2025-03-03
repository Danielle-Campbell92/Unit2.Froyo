//When they view the browser console, they observe a table listing how many of each flavor they have ordered. In this case, they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo.


//1. Add cohort team to new repo
//This has been completed

//2.Repo cntains HTML connected to JS file
//This has been completed

//3.Create a prompt asking for their favorite flavor using list of integers
const userInputString = prompt("what is your favorite flavor?", "vanilla, vanilla, vanilla, strawberry, coffee, coffee")

//4.Split the string of numbers into an array of strings
const stringArray = userInputString.split(",");

const flavors = {
    vanilla: 3,
    coffee: 2,
    strawberry: 1,
};

console.log(Object.keys(flavors));
console.table(Object.keys(flavors));

console.log(Object.values(flavors));
console.table(Object.values(flavors));

console.log(flavors);
console.table(flavors);

//5. Loop is used to iterate through the array of flavors
for(let i=0; i<flavors.length;i++){
    console.log("current index", i, "current value", flavors[i])
};


console.log("_________");

let idx=0
while(idx<flavors.length){
    console.log(flavors[idx])
    idx++
};

//6. An Objects is used too keep count of how many orders there are of each flavor. 

function printObject (obj){
    for(const key in obj){
        console.log(`${key}: ${obj[key]}`)
    }
};
printObject(flavors);

//The program counts the number of each flavor in the user's input. The logic for counting the frequencies of elements in an array is organized into a function that returns an object. Console output changes based upon user's input.

