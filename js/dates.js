// // STEP 1
// const months = {
//     "jan": 0, "january": 0,
//     "feb": 1, "february": 1,
//     "mar": 2, "march": 2,
//     "apr": 3, "april": 3,
//     "may": 4,
//     "jun": 5, "june": 5,
//     "jul": 6, "july": 6,
//     "aug": 7, "august": 7,
//     "sep": 8, "september": 8,
//     "oct": 9, "october": 9,
//     "nov": 10, "november": 10,
//     "dec": 11, "december": 11
// }
// let month = prompt('Enter the month:\nex: January or Jan')
// if (month === null || month.length === 0) {
//     let temp = 'Invalid month input.'
//     alert(temp)
//     throw new Error(temp)
// } else if (months[month.trim().toLowerCase()] === undefined) {
//     let temp = 'Invalid month input.'
//     alert(temp)
//     throw new Error(temp)
// }

// monthNumber = months[month.trim().toLowerCase()]
// let year = parseInt(prompt('Enter the year: '))
// if (isNaN(year) || year < 0) {
//     let temp = 'Invalid year input.'
//     alert(temp)
//     throw new Error(temp)
// }
// year = Number(year)

// const daysInMonth = new Date(year, monthNumber, 0).getDate()
// let temp = month.charAt(0).toUpperCase() + month.substring(1)
// console.log(`There are ${daysInMonth} days in ${month}, ${year}.`)
// // STEP 2
// function isValidDate(year, month, day) {
//     let tempDate = new Date(year, month, day);
//     return tempDate.getFullYear() === year &&
//         tempDate.getMonth() === month &&
//         tempDate.getDate() === day;
// }
// let date = prompt("Enter the date in YYYY-MM-DD format: ")
// if (date === null || date.length === 0) {
//     let temp = 'Invalid date input.'
//     alert(temp)
//     throw new Error(temp)
// }
// dateNums = date.split('-')


// for (let i = 0; i < 3; i++) {
//     dateNums[i] = Number(dateNums[i])
//     if (isNaN(dateNums[i])) {
//         let temp = 'Invalid date input.'
//         alert(temp)
//         throw new Error(temp)
//     }
// }

// if (isValidDate(dateNums[0], dateNums[1], dateNums[2]) === false) {
//     let temp = 'Invalid date input.'
//     alert(temp)
//     throw new Error(temp)
// }

// console.log(dateNums)
// if (dateNums.length !== 3 || dateNums[1] === 0 || dateNums[2] === 0) {
//     let temp = 'Invalid date input.'
//     alert(temp)
//     throw new Error(temp)
// }

// dateObj = new Date(dateNums[0], (dateNums[1] - 1), dateNums[2]).getMonth()
// const months = {
//     0: "January",
//     1: "February",
//     2: "March",
//     3: "April",
//     4: "May",
//     5: "June",
//     6: "July",
//     7: "August",
//     8: "September",
//     9: "October",
//     10: "November",
//     11: "December"
// }
// console.log(`The month for the date ${dateNums[0]}-${dateNums[1]}-${dateNums[2]} is ${months[dateObj]}.`)
//STEP 3
// function isValidDate(year, month, day) {
//     let tempDate = new Date(year, month, day);
//     return tempDate.getFullYear() === year &&
//         tempDate.getMonth() === month &&
//         tempDate.getDate() === day;
// }

// let date = prompt("Enter the date in YYYY-MM-DD format: ")
// if (date === null || date.length === 0) {
//     let temp = 'Invalid date input.'
//     alert(temp)
//     throw new Error(temp)
// }
// dateNums = date.split('-')
// if (isValidDate(dateNums[0], dateNums[1], dateNums[2]) === false) {
//     let temp = 'Invalid date input.'
//     alert(temp)
//     throw new Error(temp)
// }
// for (let i = 0; i < 3; i++) {
//     dateNums[i] = Number(dateNums[i])
//     if (isNaN(dateNums[i])) {
//         let temp = 'Invalid date input.'
//         alert(temp)
//         throw new Error(temp)
//     }
// }
// if (dateNums.length !== 3 || dateNums[1] === 0 || dateNums[2] === 0) {
//     let temp = 'Invalid date input.'
//     alert(temp)
//     throw new Error(temp)
// }

// dateObj = new Date(dateNums[0], (dateNums[1] - 1), dateNums[2]).getDay()

// if (dateObj === 0 || dateObj === 6) {
//     console.log(`The date ${date} falls on a weekend.`)
// }
//STEP 4
// date = new Date()
// date.setDate(date.getDate() - 1)

// const daysOfWeek = {
//     0: "Sunday",
//     1: "Monday",
//     2: "Tuesday",
//     3: "Wednesday",
//     4: "Thursday",
//     5: "Friday",
//     6: "Saturday"
// }
// yesterday = date.getDay()
// console.log(`Yesterday was ${daysOfWeek[yesterday]}.`)

//STEP 5
// date = new Date()
// const daysOfWeek = {
//     0: "Sunday",
//     1: "Monday",
//     2: "Tuesday",
//     3: "Wednesday",
//     4: "Thursday",
//     5: "Friday",
//     6: "Saturday"
// }
// currentDay = date.getDay()
// console.log(`Today is ${daysOfWeek[currentDay].charAt(0).toUpperCase()}.`)
