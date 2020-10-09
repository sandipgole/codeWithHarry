// console.log("Asynchronous....")
// setTimeout(() => {
//     for (let index = 0; index < 100; index++) {
//         const element = index;
//         console.log(`Element Number `+element);
        
//     }

    
// },100);

// console.log("Printing done");
// console.log(breed);
// const breed = "Cocker Spaniel";

// const person = {
//     name: 'Dev',
//     age: 23
// };

// person.age = 24;

// console.log(person);
// const person = {
//     name: 'Dev',
//     age: 23
// };

// Object.freeze(person);
// person.age = 24;

// console.log(person);
const spices = ['ginger', 'cardamom', 'cinnamon', 'nutmeg'];
const [first, second, ...other] = spices;

console.log(first, second, other);