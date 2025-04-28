let head=document.createElement("h1");
head.innerHTML="Saturday means holiday"

document.body.appendChild(head)
head.style.color="Red"

let image = document.createElement("img")

image.setAttribute("src","https://www.shutterstock.com/image-photo/orange-cat-sits-looking-straight-600nw-2479857351.jpg")
image.setAttribute("height","500px")
console.log(image);
document.body.appendChild(image);