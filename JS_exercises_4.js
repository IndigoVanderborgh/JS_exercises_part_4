// exercise demonstrating addeventlisteners and objects in arrays (this comes with an html/css portion)
// which has <button id="jane-btn">
let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

// Fetch the button from the DOM, store it in a variable
const janeBtn = document.getElementById("jane-btn")
// Use addEventListener() to listen for button clicks
janeBtn.addEventListener("click", function() {
    console.log(data) 
    // if we want janes data we use: 
    // console.log(data[0]) --> logs out player name and score
    // if we want janes score and only her score (no name) we use: 
    // console.log(data[0].score)
})

// Log Jane's score when the button is clicked (via data)
// see above

