// ASSIGNMENT NO3
const students = [
    "Ife", "Farouk", "Aisha", "Chinedu", "Fatima", "Emeka", "Zainab", "Tunde", "Ngozi", "Abdul", 
    "Hauwa", "Yusuf", "Amina", "Bala", "Zubair", "Olivia", "Samuel", "Rashida", "Ibrahim", "Adewale"
];

const [firstStudent, secondStudent, thirdStudent, fourthStudent, fifthStudent, ...remainingStudents] = students;

console.log("First Student:", firstStudent);
console.log("Second Student:", secondStudent);
console.log("Third Student:", thirdStudent);
console.log("Fourth Student:", fourthStudent);
console.log("Fifth Student:", fifthStudent);
console.log("Remaining Students:", remainingStudents);

const scores = [56, 78, 90, 45, 67, 88, 92, 73, 81, 95, 90, 85, 77, 69, 82, 91, 84, 76, 89, 94];

const [score1, score2, score3, score4, score5, ...remainingScores] = scores;

console.log("Score 1:", score1);
console.log("Score 2:", score2);
console.log("Score 3:", score3);
console.log("Score 4:", score4);
console.log("Score 5:", score5);
console.log("Remaining Scores:", remainingScores);


// NO4
const numbers = [35, 42, 17, 56, 29, 63, 48, 91, 74, 85, 12, 39, 58, 77, 64, 23, 81, 90, 47, 66];

const oddNumbers = numbers.filter(function(number) {
    return number % 2 !== 0;
});

console.log("Original numbers:", numbers);
console.log("Odd numbers:", oddNumbers);


// Slice
const slicedNumbers = numbers.slice(2, 7);

console.log("Sliced numbers:", slicedNumbers);


// Splice
const splicedNumbers = numbers.splice(2, 2);

console.log("Spliced numbers:", splicedNumbers);
console.log("Numbers after splice:", numbers);


// String to Array
const nameString = "John, David, Michael, Samuel, Peter";
const nameArray = nameString.split(", ");

console.log("Name Array:", nameArray);

// Array to String
const names = ["John", "David", "Michael", "Samuel", "Peter"];
const namesString = names.join(", ");

console.log("Names String:", namesString);

// ASSIGNMENT 2
let prices = [5000, 10000, 15000, 20000, 25000];
let doublePrices = prices.map(function(price) {
    return price * 2;
});

console.log("Case 1 - Double Prices:");
console.log(doublePrices);

let selectedItems = [5000, 10000, 15000, 20000, 25000];
let total = selectedItems.reduce(function(sum, price) {
    return sum + price;
}, 0);

console.log("Case 2 - Total Price:");
console.log(total);

let products = [
    "Nike Shoes",
    "Polo Shirt",
    "Adidas Shoes",
    "Jeans",
    "Gucci Bag",
    "T-Shirt",
    "Nike Shoes",
    "Shorts",
    "School Bag"
];

let shoes = [];
let shirts = [];
let trousers = [];
let bags = [];

products.forEach(function(product) {

    if (product.includes("Shoes")) {
        shoes.push(product);
    }

    else if (product.includes("Shirt")) {
        shirts.push(product);
    }

    else if (product.includes("Jeans") || product.includes("Shorts")) {
        trousers.push(product);
    }

    else if (product.includes("Bag")) {
        bags.push(product);
    }

});

console.log("Case 3 - Grouped Products:");

console.log("Shoes:");
console.log(shoes);

console.log("Shirts:");
console.log(shirts);

console.log("Trousers:");
console.log(trousers);

console.log("Bags:");
console.log(bags);