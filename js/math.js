//STEP 1
// let input = parseFloat(prompt("Enter a number to get the absolute value: "))
// if (isNaN(input)) {
//     alert('Invalid number input.')
// } else {
//     console.log(`-1${Math.abs(input)}`)
// }
//STEP 2
// let input = parseFloat(prompt("Enter a floating point number to round up: "))
// if (isNaN(input)) {
//     alert('Invalid float input.')
// } else {
//     console.log(`${Math.ceil(input)}`)
// }
//STEP 3
// let input = parseFloat(prompt("Enter a floating point number to round down: "))
// if (isNaN(input)) {
//     alert('Invalid float input.')
// } else {
//     console.log(`${Math.floor(input)}`)
// }
//STEP 4
// let input = prompt("Enter five numbers separated by commas. Ex: 1,2,3 ...")
// let numbers = input.split(',', 5)
// let invalidItem = false
// if (numbers.length === 5) {
//     for (let i = 0; i < numbers.length; i++) {
//         numbers[i] = Number(numbers[i])
//         if (isNaN(numbers[i]))
//             invalidItem = true
//     }
//     if (invalidItem == false) {
//         let maxVal = Math.max(...numbers)
//         let minVal = Math.min(...numbers)
//         console.log(`The largest number is ${maxVal}.\n The smallest number is ${minVal}.`)
//     } else {
//         alert('Invalid number in input.')
//     }
// } else {
//     alert('Enter 5 numbers separated by commas.')
// }
//STEP 5
// let input = parseFloat(prompt('Enter a number to square root: '))
// if (isNaN(input)) {
//     alert('Invalid number input.')
// } else {
//     console.log(Math.sqrt(input))
// }