const Person = {}
Object.defineProperties(Person, {
    name: {
        value: "Mike",
        writable: false,
        enumerable: false,
        configurable: false
    },
    city: {
        value: "NYC",
        writable: false,
        enumerable: false,
        configurable: false
    },
    country: {
        value: "United States",
        writable: false,
        enumerable: false,
        configurable: false
    }
})
// all descriptors
console.log(Object.getOwnPropertyDescriptors(Person))
// try to change city property
Person.city = "London";
console.log(Person.city)
// Checking the enumerable
for (let key in Person) {
    console.log(key, Person[key])
}
console.log(Object.keys(Person))
// Trying to delete a property
delete Person.name
console.log(Person.name)