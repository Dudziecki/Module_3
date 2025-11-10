//Sum of Multiples
function sumMul(n, m) {
    if (n <= 0 || m <= 0) return "INVALID"
    const k = Math.floor((m - 1) / n)
    if (k <= 0) return 0;
    return n * (k * (k + 1)) / 2
}

//Even or Odd
function evenOrOdd(number) {
    if (!Number.isInteger(number)) return
    return number % 2 === 0 ? "Even" : "Odd"
}

//Odds-Index
function oddBall(arr) {
    let oddWordIndex = -1
    for (let i = 0; i <= arr.length; i++) {
        const word = arr[i]
        if (typeof word === "string" && word.length % 2 !== 0) {
            oddWordIndex = i
            break
        }
    }
    if (oddWordIndex === -1) return false
    for (const item of arr) {
        if (typeof item === "number" && item === oddWordIndex) return true
    }
    return false
}

// Convert a Boolean to a String
function booleanToString(b) {
    return b.toString()
}

// Basic Mathematical Operations
function basicOp(operation, value1, value2) {
    switch (operation) {
        case "+":
            return value1 + value2;
        case "-":
            return value1 - value2;
        case "*":
            return value1 * value2;
        case "/":
            return value1 / value2;
        default:
            return NaN;
    }
}

// Training JS #7: if..else and ternary operator
function saleHotdogs(n) {
    if (n < 5) return n * 100;
    else if (n < 10) return n * 95;
    else return n * 90;
}

// Count the divisors of a number!
function getDivisorsCnt(n) {
    let count = 0
    if (!Number.isInteger(n) || n < 0) return
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            count++
            if (i !== n / i) count++;
        }
    }
    return count
}

// Century From Year
function century(year) {
    return Math.ceil(year / 100);
}

// Simple multiplication
function simpleMultiplication(number) {
    if (number % 2 === 0) {
        return number * 8
    } else {
        return number * 9
    }
}

// Convert boolean values to strings 'Yes' or 'No'.
function boolToWord(bool) {
    if (typeof bool !== "boolean") return
    return bool === true ? "Yes" : "No"
}

// Persistent Bugger.
function persistence(num) {
    let count = 0;
    while (num >= 10) {
        const digits = num.toString().split('').map(Number);
        num = digits.reduce((a, b) => a * b);
        count++;
    }
    return count;
}

// Grasshopper - Summation
let summation = function (num) {
    return num * (num + 1) / 2;
}

// If you can't sleep, just count sheep!!
let countSheep = function (num) {
    let result = '';
    for (let i = 1; i <= num; i++) {
        result += `${i} sheep...`;
    }
    return result;
}

// Training JS #6: Basic data types--Boolean and conditional statements if..else
function trueOrFalse(val) {
    return val ? "true" : "false";
}

// Training JS #8: Conditional statement--switch
function howManydays(month) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            return 28;
    }
}

// Training JS #9: loop statement --while and do..while
function padIt(str, n) {
    let i = 1;
    while (i <= n) {
        if (i % 2 === 1) {
            str = '*' + str;
        } else {
            str = str + '*';
        }
        i++;
    }
    return str;
}

// Training JS #10: loop statement --for
function pickIt(arr) {
    let odd = [], even = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            odd.push(arr[i]);
        } else {
            even.push(arr[i]);
        }
    }
    return [odd, even];
}

// Training JS #11: loop statement --break,continue
function grabDoll(dolls) {
    let bag = [];

    for (let i = 0; i < dolls.length; i++) {
        if (dolls[i] !== "Hello Kitty" && dolls[i] !== "Barbie doll") {
            continue;
        }
        bag.push(dolls[i]);

        if (bag.length === 3) {
            break;
        }
    }
    return bag;
}

// Training JS #2: Basic data types--Number
let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1() {
    let a = v1;
    let b = v1;
    return a + b;
}

function equal2() {
    let a = v3;
    let b = v1;
    return a - b;
}

function equal3() {
    let a = v1;
    let b = v5;
    return a * b;
}

function equal4() {
    var a = v4;
    var b = v5;
    return a / b;
}

function equal5() {
    let a = v6;
    let b = v3;
    return a % b;
}

// Training JS #14: Methods of Number object--toString() and toLocaleString()
function colorOf(r, g, b) {
    let red = r.toString(16);
    let green = g.toString(16);
    let blue = b.toString(16);

    if (red.length === 1) red = '0' + red;
    if (green.length === 1) green = '0' + green;
    if (blue.length === 1) blue = '0' + blue;

    return '#' + red + green + blue;
}

// Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()
function howManySmaller(arr, n) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        let fixedNum = parseFloat(arr[i].toFixed(2));
        if (fixedNum < n) {
            count++;
        }
    }

    return count;
}

// Training JS #32: methods of Math---round() ceil() and floor()
function roundIt(n) {
    const parts = n.toString().split('.');
    const leftDigits = parts[0].length;
    const rightDigits = parts[1].length;

    if (leftDigits < rightDigits) {
        return Math.ceil(n);
    } else if (leftDigits > rightDigits) {
        return Math.floor(n);
    } else {
        return Math.round(n);
    }
}

// Training JS #33: methods of Math---max() min() and abs()
function maxMin(arr1, arr2) {
    const differences = [];

    for (let i = 0; i < arr1.length; i++) {
        differences.push(Math.abs(arr1[i] - arr2[i]));
    }

    const maxValue = Math.max(...differences);
    const minValue = Math.min(...differences);

    return [maxValue, minValue];
}

// Training JS #34: methods of Math---pow() sqrt() and cbrt()
function cutCube(volume, n) {
    if (volume % n !== 0) return false;

    const smallVolume = volume / n;

    const bigSide = Math.cbrt(volume);
    const smallSide = Math.cbrt(smallVolume);

    return Number.isInteger(bigSide) && Number.isInteger(smallSide);
}

// Training JS #36: methods of Math---kata author's lover:random()
function rndCode() {
    const letters = "ABCDEFGHIJKLM";
    const numbers = "0123456789";
    const symbols = "~!@#$%^&*";

    let code = "";

    for (let i = 0; i < 2; i++) {
        code += letters[Math.floor(Math.random() * letters.length)];
    }

    for (let i = 0; i < 4; i++) {
        code += numbers[Math.floor(Math.random() * numbers.length)];
    }

    for (let i = 0; i < 2; i++) {
        code += symbols[Math.floor(Math.random() * symbols.length)];
    }

    return code;
}


// Training JS #16: Methods of String object--slice(), substring() and substr()
function cutIt(arr) {
    let minLength = Infinity;
    for (let str of arr) {
        if (str.length < minLength) {
            minLength = str.length;
        }
    }

    const result = [];
    for (let str of arr) {
        result.push(str.slice(0, minLength));
    }

    return result;
}

// Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()
function firstToLast(str, c) {
    const firstIndex = str.indexOf(c);
    const lastIndex = str.lastIndexOf(c);

    if (firstIndex === -1) {
        return -1;
    }

    return lastIndex - firstIndex;
}

// Training JS #18: Methods of String object--concat() split() and its good friend join()
function splitAndMerge(string, separator) {
    const words = string.split(' ');
    const processedWords = words.map(word =>
        word.split('').join(separator)
    );

    return processedWords.join(' ');
}

// Training JS #19: Methods of String object--toUpperCase() toLowerCase() and replace()
function alienLanguage(str) {
    const words = str.split(' ');
    const alienWords = words.map(word => {
        const beginning = word.slice(0, -1).toUpperCase();
        const lastLetter = word.slice(-1).toLowerCase();

        return beginning + lastLetter;
    });

    return alienWords.join(' ');
}

// Training JS #20: Methods of String object--charAt() charCodeAt() and fromCharCode()
function topSecret(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char >= 'A' && char <= 'Z') {
            let code = char.charCodeAt(0) - 3;
            if (code < 65) code += 26;
            result += String.fromCharCode(code);
        } else if (char >= 'a' && char <= 'z') {
            let code = char.charCodeAt(0) - 3;
            if (code < 97) code += 26;
            result += String.fromCharCode(code);
        } else {
            result += char;
        }
    }

    return result;
}

// Training JS #21: Methods of String object--trim() and the string template
function fiveLine(s) {
    const cleanS = s.trim();
    let result = [];
    for (let i = 1; i <= 5; i++) {
        result.push(cleanS.repeat(i));
    }

    return result.join('\n');
}

// Training JS #3: Basic data types--String
let a1 = "A",
    a2 = "a",
    b1 = "B",
    b2 = "b",
    c1 = "C",
    c2 = "c",
    d1 = "D",
    d2 = "d",
    e1 = "E",
    e2 = "e",
    n1 = "N",
    n2 = "n"

function Dad() {
    return d1 + a2 + d2;
}

function Bee() {
    return b1 + e2 + e2;
}

function banana() {
    return b2 + a2 + n2 + a2 + n2 + a2;
}

function answer1() {
    return 'no';
}

function answer2() {
    return 'no';
}

function answer3() {
    return 'yes';
}

// Training JS #5: Basic data types--Object
function animal(obj) {
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

// Training Time
function shuffleIt(arr, ...swapArrays) {
    const result = [...arr];
    for (const indices of swapArrays) {
        const [i, j] = indices;

        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}

// Training JS #23: methods of arrayObject---push(), pop(), shift() and unshift()
function infiniteLoop(arr, d, n) {
    const lengths = arr.map(subArr => subArr.length);
    let flat = [].concat(...arr);
    if (d === "left") {
        for (let i = 0; i < n; i++) {
            flat.push(flat.shift());
        }
    } else {
        for (let i = 0; i < n; i++) {
            flat.unshift(flat.pop());
        }
    }

    let result = [];
    let index = 0;
    for (let len of lengths) {
        result.push(flat.slice(index, index + len));
        index += len;
    }

    return result;
}

// Training JS #24: methods of arrayObject---splice() and slice()
function threeInOne(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i += 3) {
        const group = arr.slice(i, i + 3);
        result.push(group.reduce((sum, num) => sum + num, 0));
    }

    return result;
}

// Training JS #25: methods of arrayObject---reverse() and sort()
function sortIt(arr) {
    const count = {};
    for (const num of arr) {
        count[num] = (count[num] || 0) + 1;
    }

    return [...arr].sort((a, b) => {
        if (count[a] < count[b]) return -1;
        if (count[a] > count[b]) return 1;

        return b - a;
    });
}

// Training JS #26: methods of arrayObject---map()
function isolateIt(arr) {
    return arr.map(str => {
        const mid = Math.floor(str.length / 2);

        if (str.length % 2 === 0) {
            return str.slice(0, mid) + '|' + str.slice(mid);
        } else {
            return str.slice(0, mid) + '|' + str.slice(mid + 1);
        }
    });
}

// Training JS #27: methods of arrayObject---filter()
function countGrade(scores) {
    return scores.reduce((acc, score) => {
        switch (true) {
            case score === 100:
                acc.S++;
                break;
            case score >= 90:
                acc.A++;
                break;
            case score >= 80:
                acc.B++;
                break;
            case score >= 60:
                acc.C++;
                break;
            case score >= 0:
                acc.D++;
                break;
            case score === -1:
                acc.X++;
                break;
        }
        return acc;
    }, {S: 0, A: 0, B: 0, C: 0, D: 0, X: 0});
}

// Training JS #28: methods of arrayObject---every() and some()
function mirrorImage(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        const a = arr[i];
        const b = arr[i + 1];

        const aStr = a.toString();
        const bStr = b.toString();
        const aReversed = aStr.split('').reverse().join('');

        if (bStr === aReversed) {
            return [a, b];
        }
    }
    return [-1, -1];
}

// Training JS #29: methods of arrayObject---concat() and join()
function bigToSmall(arr) {
    const flatArray = [].concat(...arr);
    const sorted = flatArray.sort((a, b) => b - a);

    return sorted.join('>');
}

// Training JS #30: methods of arrayObject---reduce() and reduceRight()
function tailAndHead(arr) {
    const sums = [];

    for (let i = 0; i < arr.length - 1; i++) {
        const tail = arr[i] % 10;
        const head = parseInt(arr[i + 1].toString()[0]);
        sums.push(tail + head);
    }

    return sums.reduce((product, num) => product * num, 1);
}

// Training JS #31: methods of arrayObject---isArray() indexOf() and toString()
function blackAndWhite(arr) {
    if (!Array.isArray(arr)) {
        return "It's a fake array";
    }
    if (arr.includes(5) && arr.includes(13)) {
        return "It's a black array";
    }

    return "It's a white array";
}

// Strings, strings, strings (Easy)
Boolean.prototype.toString = function () {
    return this.valueOf() ? 'true' : 'false';
};

Number.prototype.toString = function () {
    return String(this.valueOf());
};

Array.prototype.toString = function () {
    return `[${this.map(item => String(item)).join(',')}]`;
};

// Count strings in objects
function strCount(obj) {
    let count = 0;

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if (typeof value === 'string') {
                count++;
            } else if (typeof value === 'object' && value !== null) {
                count += strCount(value);
            }
        }
    }

    return count;
}

// Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
function countDevelopers(list) {
    return list.filter(dev =>
        dev.language === 'JavaScript' &&
        dev.continent === 'Europe'
    ).length;
}

// Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer
function findSenior(list) {
    const maxAge = Math.max(...list.map(dev => dev.age));
    return list.filter(dev => dev.age === maxAge);
}

// Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details
function askForMissingDetails(list) {
    return list.filter(dev => {
        const missingProperty = Object.keys(dev).find(key => dev[key] === null);
        if (missingProperty) {
            dev.question = `Hi, could you please provide your ${missingProperty}.`;
            return true;
        }
        return false;
    });
}

// Coding Meetup #9 - Higher-Order Functions Series - Is the meetup age-diverse?
function isAgeDiverse(list) {
    const ageGroups = new Set();

    list.forEach(dev => {
        const age = dev.age;
        if (age >= 100) ageGroups.add('centenarian');
        else if (age >= 90) ageGroups.add('nineties');
        else if (age >= 80) ageGroups.add('eighties');
        else if (age >= 70) ageGroups.add('seventies');
        else if (age >= 60) ageGroups.add('sixties');
        else if (age >= 50) ageGroups.add('fifties');
        else if (age >= 40) ageGroups.add('forties');
        else if (age >= 30) ageGroups.add('thirties');
        else if (age >= 20) ageGroups.add('twenties');
        else if (age >= 13) ageGroups.add('teens');
    });

    const allGroups = ['teens', 'twenties', 'thirties', 'forties', 'fifties', 'sixties', 'seventies', 'eighties', 'nineties', 'centenarian'];
    return allGroups.every(group => ageGroups.has(group));
}

// Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages
function countLanguages(list) {
    return list.reduce((count, dev) => {
        const language = dev.language;
        count[language] = (count[language] || 0) + 1;
        return count;
    }, {});
}

// Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?
function isSameLanguage(list) {
    const languages = new Set(list.map(dev => dev.language));
    return languages.size === 1;
}

// Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins
function findAdmin(list, lang) {
    return list.filter(dev =>
        dev.language === lang &&
        dev.githubAdmin === 'yes'
    );
}

// Invalid Input - Error Handling #1
function getCount(words) {
    if (typeof words !== 'string') {
        return {vowels: 0, consonants: 0};
    }

    let vowels = 0;
    let consonants = 0;
    const str = words.toLowerCase();

    for (let char of str) {
        if (char >= 'a' && char <= 'z') {
            if ('aeiou'.includes(char)) {
                vowels++;
            } else {
                consonants++;
            }
        }
    }

    return {vowels, consonants};
}

// Error Throwing - Error Handling #2
function validateMessage(msg) {
    if (msg === null) {
        throw new ReferenceError('Message is null!');
    }

    if (typeof msg !== 'string') {
        throw new TypeError(`Message should be of type string but was of type ${typeof msg}!`);
    }

    if (msg.length === 0 || msg.length > 255) {
        throw new RangeError(`Message contains ${msg.length} characters!`);
    }

    if (/<[^>]*>/.test(msg)) {
        return false;
    }

    return true;
}

// Throw from list - Error Handling #3
function validate(username, password) {
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (trimmedUsername.length > 12) {
        throw ERRORS.usernameTooLong(trimmedUsername);
    }

    if (trimmedUsername.length < 1) {
        throw ERRORS.usernameTooShort(trimmedUsername);
    }

    const usernameInvalidChars = /[(){}[\]|;:'"\/?.,<>~\-=+*&^%$@!]/;
    if (usernameInvalidChars.test(username)) {
        throw ERRORS.usernameInvalidCharacters(username);
    }

    if (trimmedPassword.length > 24) {
        throw ERRORS.passwordTooLong(trimmedPassword);
    }

    if (trimmedPassword.length < 8) {
        throw ERRORS.passwordTooShort(trimmedPassword);
    }

    const passwordAllowedChars = /^[a-zA-Z0-9;:?.,<>~*^%$ @!_]+$/;
    if (!passwordAllowedChars.test(password)) {
        throw ERRORS.passwordInvalidCharacters(password);
    }

    if (!/[A-Z]/.test(password)) {
        throw ERRORS.passwordNoCapital(password);
    }

    if (!/\d/.test(password)) {
        throw ERRORS.passwordNoNumber(password);
    }

    if (password.includes(username)) {
        throw ERRORS.passwordContainsUsername(password);
    }

    return true;
}




