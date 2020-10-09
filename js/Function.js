const myGreet=function(name)
{
    console.log(`HI ${name}`)
}

let myName="gole";
myGreet(myName);

const greetAgain=function(name)
{

    msg=`HELLO ${name}`;
    return msg;
}
greetAgain("ram");
console.log(msg)

const demoObject={
    name:"Rohan",
    game:function(){
        return "PUBG"
    },
    ranks:[1,2,4]
}
console.log(demoObject.game());
console.log(demoObject.ranks);

const teachers=['ram','hari','sita'];
teachers.forEach(function(index,element)
{
    console.log(index +" "+element)
})