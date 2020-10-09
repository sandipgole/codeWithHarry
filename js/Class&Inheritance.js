class Employee{
    constructor(givenName,gainedExperience,workingDevision)
    {
        this.name=givenName;
        this.experience=gainedExperience;
        this.devision=workingDevision;
    }
    slogan()
    {
        return `I am ${this.name} this is best`
    }

    static add(a,b)
    {
        return a+b;
    }


}
// Sandip=new Employee("sandip",2,"IT");
// console.log(Sandip);
// console.log(Sandip.devision)
// console.log(Employee.add(6,5))

class Programmer extends Employee{
    constructor(givenName,gainedExperience,workingDevision,language){
        super(givenName,gainedExperience,workingDevision);
        this.lang=language;
    }

    favoriteLanguage()
    {
        if(this.lang=="js")
        {
            return "js"
        }
        else
        {
            return "python"
        }
    }
}
gole=new Programmer("gole",2,"CS & IT","js1")
console.log(gole.favoriteLanguage())