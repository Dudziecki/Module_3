// Jokes you've been 'awaiting' for ... promise
async function sayJoke(apiUrl, jokeId) {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (!data.jokes || !Array.isArray(data.jokes)) {
            throw new Error(`No jokes at url: ${apiUrl}`);
        }

        const joke = data.jokes.find(j => j.id === jokeId);
        if (!joke) {
            throw new Error(`No jokes found id: ${jokeId}`);
        }

        return {
            saySetup: () => joke.setup,
            sayPunchLine: () => joke.punchLine
        };

    } catch (error) {
        if (error.message.includes('No jokes')) {
            return Promise.reject(error);
        }

        return Promise.reject(new Error(`No jokes at url: ${apiUrl}`));
    }
}

// Promises Made and Broken: The Misadventures of Bob the Highly Paid Consultant
async function submitOrder(user) {
    try {
        const [shoppingCart, profile] = await Promise.all([
            OrderAPI.getShoppingCartAsync(user),
            CustomerAPI.getProfileAsync(user)
        ]);

        const shippingRate = calculateShipping(shoppingCart, profile.zipCode);
        const orderSuccessful = await OrderAPI.placeOrderAsync(shoppingCart, shippingRate);
        console.log(`Your order ${orderSuccessful ? "was" : "was NOT"} placed successfully`);

        return orderSuccessful;
    } catch (error) {
        console.log("Your order was NOT placed successfully");
        throw error;
    }
}

// Nuclear Missile Manager
function launchAll(launchMissile) {
    for (let i = 0; i < 5; i++) {
        setTimeout(function () {
            launchMissile(i);
        }, i * 1000);
    }
}

// A Promise is a Promise
function promiseHelloWorld() {
    return Promise.resolve('Hello World!');
}

// This isn't what you think! The Misadventures of Bob the Highly Paid Consultant #2
ShoppingCart.prototype.addButtonClicked = function (item) {
    this.checkQuantityAsync(item, this.addButtonClicked1.bind(this));
};

ShoppingCart.prototype.addButtonClicked1 = function ({item, quantity}) {
    if (quantity > 0) {
        this.addToCartAsync(item, 1, (success) => this.addButtonClicked2(success));
    }
};

ShoppingCart.prototype.addButtonClicked2 = function (success) {
    if (success) {
        this.updateCartDisplayAsync((success) => {
            this.addButtonClicked3.call(this, success);
        });
    }
};

ShoppingCart.prototype.addButtonClicked3 = function (success) {
    this.showMessage(`${success ? "Successfully" : "Unsuccessfully"} added item to cart`);
};

// Well, that's just (proto)typical! The Misadventures of Bob the Highly Paid Consultant #3
function Cart(user) {
    this.user = user;
    this.cart = [];
}

Cart.prototype = {
    add: function (item) {
        this.cart.push(item);
    },

    remove: function (item) {
        this.cart = this.cart.filter(i => i.id !== item.id);
    },

    clear: function () {
        this.cart = [];
    },

    subtotal: function () {
        return this.cart.reduce((sum, item) => sum + item.quantity * item.value, 0);
    },

    toString: function () {
        return this.cart.map(item => `${item.name}: ${item.quantity}@ ${item.value} ea.`).join("\n");
    }
};

// Training JS #37: Unlock new weapon---RegExp Object
function countAnimals(animals, count) {
    const animalsArray = animals.split(',');

    return count.map(animal => {
        return animalsArray.filter(a => a === animal).length;
    });
}

// Training JS #38: Regular Expression--"^","$", "." and test()
function findSimilarity(str, word) {
    const words = str.split(' ');

    const similarWords = words.filter(w => {
        return w.length === word.length &&
            w[0] === word[0] &&
            w[w.length - 1] === word[word.length - 1];
    });

    return similarWords.join(' ');
}

// Training JS #39: Regular Expression--"?", "*", "+" and "{}"
const regex = /^-?9.*0{4,}$/;

// Training JS #40: Regular Expression--"|", "[]" and "()"
let regex = /https?:\/\/[a-z0-9.]+\.(?:com|net)/gi;
// !!!!

// Training JS #42: Regular Expression--( ?: ), ( ?= ) and ( ?! )
let regex = /(\d)(?=(\d{3})+$)/g;

function addCommas(money, reg) {
    const parts = money.split('$');
    const formattedNumber = parts[1].replace(reg, x => x + ",");
    return '$' + formattedNumber;
}

// Color Ghost
class Ghost {
    constructor() {
        const colors = ['white', 'yellow', 'purple', 'red'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }
}

// Find all javascript files
function findAllJavascriptFiles(root, callback) {
    const results = [];

    function processFolder(folder) {
        return new Promise((resolve) => {
            folder.size((size) => {
                if (size === 0) {
                    resolve();
                    return;
                }

                let completed = 0;

                for (let i = 0; i < size; i++) {
                    folder.read(i, (item) => {
                        if (typeof item === 'string') {
                            if (item.endsWith('.js')) {
                                results.push(item);
                            }
                            checkDone();
                        } else {
                            // Это папка
                            processFolder(item).then(checkDone);
                        }
                    });
                }

                function checkDone() {
                    completed++;
                    if (completed === size) {
                        resolve();
                    }
                }
            });
        });
    }

    processFolder(root).then(() => {
        callback(results);
    });
}

// Refactored Greeting
class Person {
    constructor(name) {
        this.name = name;
    }

    greet(name) {
        return `Hello ${name}, my name is ${this.name}`;
    }
}

// Building blocks
class Block {
    constructor(data) {
        [this.width, this.length, this.height] = data;
    }

    getWidth() {
        return this.width;
    }

    getLength() {
        return this.length;
    }

    getHeight() {
        return this.height;
    }

    getVolume() {
        return this.width * this.length * this.height;
    }

    getSurfaceArea() {
        return 2 * (this.width * this.length +
            this.width * this.height +
            this.length * this.height);
    }
}

// Basic subclasses - Adam and Eve
class Human {
    constructor() {
    }
}

class Man extends Human {
    constructor() {
        super();
    }
}

class Woman extends Human {
    constructor() {
        super();
    }
}

class God {
    static create() {
        return [new Man(), new Woman()];
    }
}

// FIXME: Get Full Name
class Dinglemouse {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`.trim();
    }

}

// Who's Online?
function whosOnline(friends) {
    const result = {};

    for (const friend of friends) {
        let statusKey;

        if (friend.status === 'offline') {
            statusKey = 'offline';
        } else if (friend.status === 'online') {
            statusKey = friend.lastActivity > 10 ? 'away' : 'online';
        }

        if (statusKey) {
            if (!result[statusKey]) {
                result[statusKey] = [];
            }
            result[statusKey].push(friend.username);
        }
    }

    return result;
}

// Split The Bill
function splitTheBill(group) {
    const amounts = Object.values(group);
    const total = amounts.reduce((sum, amount) => sum + amount, 0);
    const average = total / amounts.length;

    const result = {};
    for (const [person, spent] of Object.entries(group)) {
        result[person] = Math.round((spent - average) * 100) / 100;
    }

    return result;
}

// The Enigma Machine - Part 1: The Plugboard
function Plugboard(wires) {
    if (wires) {
        if (wires.length % 2 !== 0) {
            throw new Error('Invalid wiring: odd number of characters');
        }
        if (wires.length > 20) {
            throw new Error('Invalid wiring: too many wires (max 10 pairs)');
        }

        const seen = new Set();
        for (let char of wires) {
            if (seen.has(char)) {
                throw new Error('Invalid wiring: duplicate character ' + char);
            }
            seen.add(char);
        }
    }

    const mapping = {};
    if (wires) {
        for (let i = 0; i < wires.length; i += 2) {
            const char1 = wires[i];
            const char2 = wires[i + 1];
            mapping[char1] = char2;
            mapping[char2] = char1;
        }
    }

    this.process = function (wire) {
        if (!/^[A-Z]$/.test(wire)) {
            return wire;
        }

        return mapping[wire] || wire;
    };
}

// "this" is a problem
function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = this.firstName + ' ' + this.lastName;
}

// Ninja vs Samurai: Strike
let Warrior = function (name) {
    this.name = name;
    this.health = 100;
}

Warrior.prototype.strike = function (enemy, swings) {
    enemy.health = Math.max(0, enemy.health - (swings * 10));
}

// JavaScript class-like objects
class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    toString() {
        return `${this.name} is a ${this.type}`;
    }
}

// SantaClausable Interface
function isSantaClausable(obj) {
    return typeof obj.sayHoHoHo === 'function' &&
        typeof obj.distributeGifts === 'function' &&
        typeof obj.goDownTheChimney === 'function';
}

// Fun with ES6 Classes #1 - People, people, people
class Person {
    constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    sayFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    static greetExtraTerrestrials(raceName) {
        return `Welcome to Planet Earth ${raceName}`;
    }
}

// Fun with ES6 Classes #2 - Animals and Inheritance
class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age, 0, "shark", status);
    }
}

class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, 4, "cat", status);
    }

    introduce() {
        return super.introduce() + "  Meow meow!";
    }
}

class Dog extends Animal {
    constructor(name, age, status, master) {
        super(name, age, 4, "dog", status);
        this.master = master;
    }

    greetMaster() {
        return `Hello ${this.master}`;
    }
}

// Fun with ES6 Classes #3 - Cuboids, Cubes and Getters
class Cuboid {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }

    get surfaceArea() {
        return 2 * (this.length * this.width +
            this.length * this.height +
            this.width * this.height);
    }

    get volume() {
        return this.length * this.width * this.height;
    }
}

class Cube extends Cuboid {
    constructor(length) {
        super(length, length, length);
    }
}

// Fun with ES6 Classes #4 - Cubes and Setters
class Cube {
    constructor(length) {
        this.length = length;
    }

    get surfaceArea() {
        return 6 * this.length * this.length;
    }

    set surfaceArea(area) {
        this.length = Math.sqrt(area / 6);
    }

    get volume() {
        return this.length * this.length * this.length;
    }

    set volume(vol) {
        this.length = Math.cbrt(vol);
    }
}

// SpeedCode #3 × Fun with ES6 Classes #5 - Dogs and Classes
class Labrador extends Dog {
    constructor(name, age, gender, master) {
        super(name, age, gender, "Labrador", "Large", master, true)
    }
}

// Fun with ES6 Classes #6 - Fake Files (Basic)
class File {
    constructor(fullName, contents) {
        this._fullName = fullName;
        this._contents = contents;
        this._lineCounter = 0;
        this._charCounter = 0;

        // Вычисляем filename и extension
        const lastDotIndex = fullName.lastIndexOf('.');
        this._filename = fullName.substring(0, lastDotIndex);
        this._extension = fullName.substring(lastDotIndex + 1);
    }

    get fullName() {
        return this._fullName;
    }

    get filename() {
        return this._filename;
    }

    get extension() {
        return this._extension;
    }

    getContents() {
        return this._contents;
    }

    write(str) {
        if (this._contents === "") {
            this._contents = str;
        } else {
            this._contents += `\n${str}`;
        }
    }

    gets() {
        const lines = this._contents.split('\n');
        if (this._lineCounter < lines.length) {
            return lines[this._lineCounter++];
        }
        return undefined;
    }

    getc() {
        if (this._charCounter < this._contents.length) {
            return this._contents[this._charCounter++];
        }
        return undefined;
    }
}

// PaginationHelper
class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }

    itemCount() {
        return this.collection.length;
    }

    pageCount() {
        return Math.ceil(this.collection.length / this.itemsPerPage);
    }

    pageItemCount(pageIndex) {
        if (pageIndex < 0 || pageIndex >= this.pageCount()) {
            return -1;
        }

        if (pageIndex === this.pageCount() - 1) {
            // Последняя страница
            return this.collection.length % this.itemsPerPage || this.itemsPerPage;
        }

        return this.itemsPerPage;
    }

    pageIndex(itemIndex) {
        if (itemIndex < 0 || itemIndex >= this.collection.length) {
            return -1;
        }

        return Math.floor(itemIndex / this.itemsPerPage);
    }
}

// Array#reduce
Array.prototype.reduce = function (process, initial) {
    let acc = initial !== undefined ? initial : this[0];
    let i = initial !== undefined ? 0 : 1;

    for (; i < this.length; i++) {
        acc = process(acc, this[i], i, this);
    }

    return acc;
};

// Calculating with objects
Num.prototype[Symbol.toPrimitive] = function (hint) {
    if (hint === 'number' || hint === 'default') {
        return this.num;
    }
    return this.toString();
};

// A Chain adding function
function add(n) {
    const f = function (x) {
        return add(n + x);
    };

    f.valueOf = function () {
        return n;
    };

    f.toString = function () {
        return n.toString();
    };

    return f;
}

// Wrapped Function
Object.defineProperty(
    Function.prototype,
    'wrap',
    {
        value: function (wrapper) {
            const original = this;
            return function (...args) {
                return wrapper.call(this, original, ...args);
            };
        }
    }
);

// Concatenating functions
Function.prototype.pipe = function (...funcs) {
    const firstFunc = this;
    return function (input) {
        return funcs.reduce((result, func) => func(result), firstFunc(input));
    };
};

// Function Cache
function cache(fn) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);


        if (cache.has(key)) {
            return cache.get(key);
        }


        const result = fn.apply(this, args);
        cache.set(key, result);

        return result;
    };
}

// Pipelining and composing functions
function pipeline(seed, ...funcs) {
    return funcs.reduce((result, fn) => fn(result), seed);
}

function compose(...funcs) {
    return function (input) {
        let result = input;
        for (let i = funcs.length - 1; i >= 0; i--) {
            result = funcs[i](result);
        }
        return result;
    };
}

// How new Works
var myObj = {};
myObj = Object.create(MyObject.prototype);
MyObject.call(myObj);

// Cylon Evolution
function Cylon(model) {
    this.model = model;
}

Cylon.prototype.attack = () => "Destroy all humans!";

function HumanSkin(model) {
    Cylon.call(this, model);
}

HumanSkin.prototype = Object.create(Cylon.prototype);
HumanSkin.prototype.constructor = HumanSkin;
HumanSkin.prototype.infiltrate = () => "Infiltrate the colonies";

// Write JavaScript's 'call' function using apply.
Function.prototype.call = function (thisArg, ...args) {
    return this.apply(thisArg, args);
};

// Anonymous Returns.
let alpha = {
    name: 'My Alpha',
    getNameFunc: function () {
        return () => {
            return this.name;
        };
    }
};

// Basics - Generators #1
function* generator(initial = 1) {
    let count = initial;

    while (true) {
        const newValue = yield count;
        if (typeof newValue === 'number') {
            count = newValue;
        } else {
            count++;
        }
    }
}

// Multiplication - Generators #2
function* generator(a) {
    let b = 1;

    while (true) {
        yield `${a} x ${b} = ${a * b}`;
        b++;
    }
}

// Generating Generators - Generators #3
function* generator(start, end) {
    for (let a = start; a <= end; a++) {
        yield function* () {
            for (let b = 1; b <= 10; b++) {
                yield `${a} x ${b} = ${a * b}`;
            }
        }();
    }
}

// Fibonacci Generator Function
function* fibonacci() {
    let a = 0;
    let b = 1;

    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

// Mr. Freeze
Object.freeze(MrFreeze);

// Defining getters and setters on an existing class
Object.defineProperty(Person.prototype, 'name', {
    get() {
        return this.firstName + ' ' + this.lastName;
    },
    set(fullName) {
        [this.firstName, this.lastName] = fullName.split(' ');
    }
});