// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const container = document.getElementById("container")

function renderImages() {
    let imgsDOM = "" // so we can concactonate line 16, as this will contain all three images and not load the function 3 times
    for (let i = 0; i < imgs.length; i++) {
        imgsDOM += `<img alt="Employee in the company" class="team-img" src="${imgs[i]}">`
    }
        // for (let imageString of imgs) { // this is another way to tackle it
        //     imgsDOM += `<img alt="Employee in the company" class="team-img" src="${imageString}">`
        // }
    container.innerHTML = imgsDOM
}

renderImages()


// simplified version of it:

let a = [ 'stanley' , 'wesley' , 'indigo']

 // and we want to produce in the console: "stanley, wesley, indigio"

let baseString = ""
for (let i = 0; i < a.length; i ++) {
    baseString += `${a[i]}, `
}
console.log(baseString)
