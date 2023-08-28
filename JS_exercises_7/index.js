// Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

// const totalPrice = 420.69235632455
// const btn = document.getElementById("purchase-btn")
// btn.textContent = `Buy €${ totalPrice }`


// answer: use the tofixed with how many decimals in the paranthesis in the end of the template
// const totalPrice = 420.69235632455
// const btn = document.getElementById("purchase-btn")
// btn.textContent = `Buy €${ totalPrice.toFixed(2) }`


// Challenge:
// The toFixed() method doesn't work anymore. Can you make it work?
// Google the error message if you're unsure about how to do it

// const totalPrice = 420.69235632455
// const btn = document.getElementById("purchase-btn")
// btn.textContent = `Buy €${ totalPrice.toFixed(2) }`

// toFixed is not a function; so we need to convert the value to a number before calling the 'toFixed' method or only call the method on numbers

// for example: 
// const num = '123'
// const result = num.tofixed(2) --> will throw us an error

// to solve this we can convert the value to a number before calling the tofixed mothod

// const num = '123.456'

// const result = Number(num).tofixed(2)
// console.log(result) // 123.45

// circling back, lets solve this issue now:

const totalPrice = 420.69235632455
const btn = document.getElementById("purchase-btn")
btn.textContent = `Buy €${Number(totalPrice).toFixed(2)}`