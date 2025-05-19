//STEP 1
// let name = prompt('Enter your name:')
// if (name === null || name.length === 0) {
//     alert('Invalid name input')
// }
// alert(`The length of your name is: ${name.length}`)
//STEP 2
// let name = prompt('Enter your name: ')
// if (name === null || name.length === 0) {
//     alert('Invalid name input')
// }

// let number = parseInt(prompt('Specify the index you want to find a letter at: '))
// if (isNaN(number) || number < 0 || number > name.length - 1) {
//     alert('You have entered an invalid index.')
// } else {
//     alert(`The character at index ${number} is: ${name.charAt(number)}`)
// }
//STEP 3
// let firstName = prompt('Enter your first name:')
// let lastName = prompt('Enter your last name:')
// alert(`Your name is: ${firstName + ' ' + lastName}`)
//STEP 4
// let phrase = "The quick brown fox jumps over the lazy dog"
// const regex = /(fox)/
// const result = regex.exec(phrase)
// alert(`'fox' starts at the index: ${result.index}`)
//STEP 5
// let phrase = "The quick brown fox jumps over the lazy dog"
// const searchKey = 'fox'
// const result = phrase.lastIndexOf(searchKey)
// alert(`the last 'fox' starts at the index: ${result}`)
//STEP 6
// let phrase = "The quick brown fox jumps over the lazy dog"
// const key = 'the lazy dog'
// let name = prompt('Enter your full name: ')
// const result = phrase.replace(key, name)
// alert(`Replacing 'the lazy dog' with your full name results in: \n${result}`)
//STEP 7
// let phrase = "The quick brown fox jumps over the lazy dog"
// let searchKey = prompt('Enter a word to search for: ')
// if (searchKey === null) {
//     alert('Invalid input.')
// }
// const pattern = new RegExp(`(${searchKey})`, 'g')
// const result = phrase.match(pattern)
// let matches = 0
// if (result !== null) {
//     matches = result.length
// }
// alert(`'${searchKey}' was found ${matches} times.`)

//STEP 8
// let old_string = "The quick brown fox jumps over the lazy dog"
// let new_string = old_string.substring(31)
// alert(`uppercase new_string: '${new_string.toUpperCase()}'`)
//STEP 9
// let text = " THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          "
// alert(`'${text.trim().toLowerCase()}'`)
//STEP 10
// let text = "the quick brown fox jumps over the lazy dog"
// let temp = text.charAt(0).toUpperCase()
// text = temp + text.substring(1)
// alert(text)