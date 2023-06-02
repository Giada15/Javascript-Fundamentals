'use strict';

// -------------FUNCTION DECLARATION VS FUNCTION EXPRESSION-------

//Function declaration

// function calcAge1(birthYear) {
//     return 2023 - birthYear
// }
// const age1 = calcAge1(2000)

//Function expression

// const calcAge2 = function (birthYear) {
//     return 2023 - birthYear
// }
// const age2 = calcAge2(2000)

// console.log(age1, age2)

//----------------ARROW FUNCTIONS ----------------------


// const calcAge3 = birthYear => 2023- birthYear
// const age3 = calcAge3(2000)

// console.log(age3)

// const yearsToRetirement = (birthYear, name) => {
//     const age = 2023 - birthYear
//     const retirement = 65 - age
//     return `${name}, you have ${retirement} years until your retirement`
// }

// console.log(yearsToRetirement(2000, "Matilda"))


//----------------FUNCTIONS CALLING OTHER FUNCTIONS--------------------

// function cutPieces(fruit) {
//     return fruit * 4
// }

// function fruitsJuice(apples, oranges) {
//     const applesPieces = cutPieces(apples)
//     const orangePieces = cutPieces(oranges)
//     const juice = `Juice with ${applesPieces} pieces of apples and ${orangePieces} pieces of oranges`
//     return juice
// }

// console.log(fruitsJuice(3, 4))


// function age(birthYear) {
//     return 2023 - birthYear
// }

// function yearsToRetirement(birthYear, name) {
//     const retirement = 65 - age(birthYear)
//     if (retirement > 0) {
//         return retirement
//     } else {
//         return -1
//     }
// }

// console.log(yearsToRetirement(1990, "Loli"))
// console.log(yearsToRetirement(1955, "Mike"))



// ---------------------Exercise 6--------------------

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

// const dolphinAvg = calcAverage(85, 54, 41)
// const koalasAvg = calcAverage(23, 34, 27)

// const checkWinner = (avgDolphin, avgKoalas) => {
//     if (avgDolphin >= avgKoalas * 2) {
//         return `Dolphins win`
//     } else if (avgKoalas >= avgDolphin * 2) {
//         return `Koalas win`
//     } else {
//         return `No one wins`
//     }
// }
// const winner = checkWinner(dolphinAvg, koalasAvg)
// console.log(winner)

// ------------------------ARRAY METHODS-------------

// const friends = ["Micheal", "Steven", "Peter"]
// console.log(friends.push("Jay")) // 4 -> The length of the array


// ---------------------Exercise 6--------------------

// const calcTip = (bill) => {
//     if (bill >= 50 && bill <= 300) {
//         return bill * 0.15
//     } else {
//         return bill * 0.20
//     }
// }

// const bills = [125, 555, 44]
// const tips = [calcTip(billsArray[0]), calcTip(billsArray[1]), calcTip(billsArray[2])]
// const total = [billsArray[0] + tipsArray[0], billsArray[1] + tipsArray[1], billsArray[2] + tipsArray[2]]

// console.log(bills)
// console.log(tips)
// console.log(total)

// -----------------------OBJECTS---------------

// const jane = {
//     firstName: "Jane",
//     birthYear: 1991,
//     job: "teacher",
//     friends: ["Micheal", "Peter", "Steven"],
//     hasDriversLicense: true,

// calcAge: function (birthYear) {
//     return 2037 - birthYear
// }

// calcAge: function () {
//     return 2037 - this.birthYear
// },

//     calcAge: function () {
//         this.age = 2037 - this.birthYear
//         return this.age
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and she has ${this.hasDriversLicense ? "a" : "no"} driver's license`
//     }

// }

// const interestedIn = prompt("What do you want to know?")
// console.log(jane[interestedIn] ? jane[interestedIn] : "not a match")

// console.log(`${jane.firstName} has ${jane["friends"].length} friends and her best friend is ${jane.friends[0]}`)

// console.log(jane.calcAge())
// console.log(jane.age)
// console.log(jane.getSummary())
// console.log(jane["getSummary"]())




// ---------------------Exercise 7--------------------

// const mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height)
//         return this.bmi
//     }
// }

// const john = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height)
//         return this.bmi
//     }
// }

// mark.calcBMI()
// john.calcBMI()

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
// } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
// }

// const jonas = [
//     "Jonas",
//     2037 - 1991,
//     "teacher",
//     ["Micheal", "Peter"],
//     true
// ]

// const typesArr = []
// for (let i = 0; i < jonas.length; i++) {
//     typesArr[i] = typeof (jonas[i])
//     // typesArr.push(typeof (jonas[i]))
// }

// console.log(typesArr)

// const years = [2006, 1995, 1998, 2012]
// const age = []

// for (let i = 0; i < years.length; i++) {
//     // age[i] = 2023 - years[i]
//     age.push(2023 - years[i])
// }

// console.log(age)

// --------------------CONTINUE AND BREAK--------------------


// const jonas = [
//     "Jonas",
//     2037 - 1991,
//     "teacher",
//     ["Micheal", "Peter"],
//     true
// ]

// //Only strings

// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== "string") continue

//     console.log(jonas[i], typeof jonas[i])
// }

// //Break with numbers

// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === "number") break

//     console.log(jonas[i], typeof jonas[i])
// }


// -------------------WHILE LOOP--------------------

// for (let i = 1; i <= 10; i++) {
//     console.log(`Lifting weigths repetition ${i}`)
// }

// let i = 1
// while (i <= 10) {
//     console.log(`Lifting weigths repetition ${i}`)
//     i++
// }

// let dice = Math.trunc(Math.random() * 6) + 1
// while (dice !== 6) {
//     console.log(`you rolled a ${dice}`)
//     dice = Math.trunc(Math.random() * 6) + 1
//     if (dice == 6) console.log('Loop is about to end...')
// }


// -------------------Exercise 10- For loops--------------------

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }


// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// const tips = []
// for (let i = 0; i < bills.length; i++) {
//     tips.push(calcTip(bills[i]))
// }
// const totals = []
// for (let i = 0; i < bills.length; i++) {
//     totals.push(bills[i] + tips[i])
// }

// console.log(bills)
// console.log(tips)
// console.log(totals)


// function calcAverage(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     const average = sum / arr.length
//     return average
// }

// console.log(calcAverage(totals))