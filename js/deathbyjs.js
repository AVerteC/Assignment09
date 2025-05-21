// //STEP 1
// function alphasort(text) {
//     let words = text.split('')
//     words = words.sort()
//     return words.join('')
// }
// console.log(alphasort('webmaster'))
// //STEP 2
// function firstWordLetterCapital(text) {
//     let words = text.split(' ')
//     for (index in words) {
//         words[index] = words[index].charAt(0).toUpperCase() + words[index].substring(1)
//     }
//     return words.join(' ')
// }
// console.log(firstWordLetterCapital('the quick brown fox'))
// //STEP 3
// function vowelCounter(text) {
//     let vowels = new Set(['a', 'e', 'i', 'o', 'u'])
//     let vowelCount = 0
//     for (letter of text) {
//         if (vowels.has(letter.toLowerCase())) {
//             vowelCount++
//         }
//     }
//     return vowelCount
// }
// console.log(vowelCounter('The quick brown fox'))
// //STEP 4
// function idGenerator(length) {
//     let output = ""
//     for (let i = 0; i < length; i++) {
//         let letterCode = Math.floor(Math.random() * (122 - 97 + 1)) + 97
//         let letter = String.fromCharCode(letterCode)
//         let letterCase = Math.round(Math.random())
//         if (letterCase === 1) {
//             letter = letter.toUpperCase()
//         }
//         output += letter
//     }
//     return output
// }
// console.log(idGenerator(10))
// //STEP 5
// function Longest_Country_Name(items) {
//     if (items === undefined || items.length === 0) {
//         return null
//     }
//     let maxLength = -Infinity
//     let itemValue = ''
//     for (let i = 0; i < items.length; i++) {
//         if (items[i].length > maxLength) {
//             maxLength = items[i].length
//             itemValue = items[i]
//         }
//     }
//     return itemValue
// }
// console.log(Longest_Country_Name())