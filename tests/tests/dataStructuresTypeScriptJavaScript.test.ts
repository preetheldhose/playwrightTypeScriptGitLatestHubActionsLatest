import { test } from "@playwright/test";

test("DataStructures of TypeScript and JavaScript", async ({ }) => {

    let numbers: number[] = [1, 2, 3, 4];
    let fruits: Array<string> = ["Apple", "Banana", "Orange"];
    console.log(numbers); // [1, 2, 3, 4]
    console.log(fruits);  // ["Apple", "Banana", "Orange"]

    // using forEach

    numbers.forEach(num => console.log(num));
    fruits.forEach(fruit => console.log(fruit));

    //using join

    console.log(numbers.join(" - ")); // "1 - 2 - 3 - 4"
    console.log(fruits.join(", "));  // "Apple, Banana, Orange"

    // using forloop 

    for (let num of numbers) {
        console.log(num);
      }
      
    for (let fruit of fruits) {
        console.log(fruit);
    }
    
    // using map:

    console.log(numbers.map(num => `Number: ${num}`).join("\n"));
    console.log(fruits.map(fruit => `Fruit: ${fruit}`).join("\n"));

    // printing arrays as json:

    console.log(JSON.stringify(numbers)); // "[1,2,3,4]"
    console.log(JSON.stringify(fruits, null, 2)); 

    //Tulips: 

    let person: [string, number] = ["Alice", 25];
    console.log(person);

    // Accessing each element individually: 

    console.log(`Name: ${person[0]}`);
    console.log(`Age: ${person[1]}`);

    // using forEach 

    person.forEach(item => console.log(item));

    // printing as an object: 

    console.log(`Person: { Name: ${person[0]}, Age: ${person[1]} }`);

    // using json stringify

    console.log(JSON.stringify({ name: person[0], age: person[1] }, null, 2));


    // Sets:

    let uniqueNumbers: Set<number> = new Set([1, 2, 3, 1]); // {1, 2, 3}
    uniqueNumbers.add(4);
    uniqueNumbers.has(2); // true
    uniqueNumbers.delete(3);

    console.log(uniqueNumbers);

    // Using forEach
    uniqueNumbers.forEach(num => console.log(num));

    // Using Array.from() to Convert Set to an Array
    console.log(Array.from(uniqueNumbers));

    // Using a for...of Loop

    for (let num of uniqueNumbers) {
        console.log(num);
      }
    
    //  Printing as a JSON Object

    console.log(JSON.stringify({ uniqueNumbers: [...uniqueNumbers] }, null, 2));


})
