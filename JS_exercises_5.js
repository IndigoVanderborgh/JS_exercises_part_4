// generate sentences with arrays and parameters.


// The generateSentence(desc, arr) takes two parameters: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2:If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge

// This is the first iteration of the challenge where it returns a comma at the end
// this is less than intended, so we need to get rid of that comma

// function generateSentence(desc, arr) {
//     let baseString = `The ${arr.length} ${desc} are `
//     for (let i = 0; i < arr.length; i++) {
//         baseString += arr[i] + ", "
//     }
//     return baseString
// }

// const sentence = generateSentence("highest mountains", ["Mount Everest", "K2"])
// console.log(sentence)

// --> "The 2 highest mountains are Mount Everest, K2,"

function generateSentence(desc, arr) {
    let baseString = `The ${arr.length} ${desc} are ` // this is the base string, what we build on
    const lastIndex = arr.length - 1 // we want to remove the comma at the end so we remove it with line 18's if statement
    for (i = 0; i < arr.length; i++) { 
        if (i === lastIndex) {
            baseString += arr[i] // we add this so it doesn't add commas at the end
        } else {
            baseString += arr[i] + ", " // adds comma after each item, if last index isn't the last one in the array
        }
    }
    return baseString
}

const sentence = generateSentence("highest mountains", ["Mount Everest", "K2"])
console.log(sentence)