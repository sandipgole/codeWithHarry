let objectDemo={
    name:"sandip",
    address:"ktm",
    marks:[1,2,3,4]
}

console.log(objectDemo);
console.log(objectDemo.name);
marks1=[1,2,3,4,5]
marks1.forEach(function(element)
{
    console.log(element)
})


for(let key in objectDemo)
{
    console.log(`the ${key} of object is ${objectDemo[key]}`)
}

let student={
    name:'rahul',
    age:10,
    address:'htd'
}

for (let key in student)
{
    console.log(`The ${key} of object is ${student[key]}`)
}