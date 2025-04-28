let heading = document.createElement("h1")
heading.textContent = "Click to see Puppy"
document.body.appendChild(heading)

heading.addEventListener("click", () => {
    let image = document.createElement("img")

    image.setAttribute("src", "https://www.shutterstock.com/image-photo/orange-cat-sits-looking-straight-600nw-2479857351.jpg")
    image.setAttribute("height", "500px")
    console.log(image);
    document.body.appendChild(image);

    image.addEventListener("dblclick", () => {
        image.remove()
    })
})