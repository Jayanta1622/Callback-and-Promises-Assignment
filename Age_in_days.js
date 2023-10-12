function ageInDays(person) {
    let fullName = person.firstName+person.lastName;
    let days = (2020-person.age)*365;
    function callback(){
        console.log(`The person's full name is ${fullName} and their age in days is ${days}`);
    }
    return callback;
}

const person={
    firstName:"Mithun",
    lastName:"S",
    age:2003
}
let result = ageInDays(person);
result();