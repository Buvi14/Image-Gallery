// Sample Data
let images = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1635236838971-413163228b39?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80",
    imageDescription: "Natural Trees",
    imageId: "1",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    imageDescription: "Work space",
    imageId: "2",
  },
  {
    imageUrl: "./images/coffee.jpg",
    imageDescription: "Coffee",
    imageId: "3",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    imageDescription: "Living Room",
    imageId: "4",
  },
  {
    imageUrl: "./images/dog.jpg",
    imageDescription: "Living Room",
    imageId: "5",
  },
  {
    imageUrl: "./images/Laptop.jpg",
    imageDescription: "Laptop",
    imageId: "6",
  },
  {
    imageUrl: "./images/leaf.jpg",
    imageDescription: "Leaf",
    imageId: "7",
  },
  {
    imageUrl: "./images/nature.jpg",
    imageDescription: "Natural Scene",
    imageId: "8",
  },
  {
    imageUrl: "./images/trees.jpg",
    imageDescription: "Trees",
    imageId: "9",
  },
  {
    imageUrl: "./images/Swimming.jpg",
    imageDescription: "Swim",
    imageId: "10",
  },
  {
    imageUrl: "./images/Snacks.jpg",
    imageDescription: "Eatables",
    imageId: "11",
  },
  {
    imageUrl: "./images/Rainy-street.jpg",
    imageDescription: "Rainy Street",
    imageId: "12",
  },
  {
    imageUrl: "./images/Mist climate.jpg",
    imageDescription: "Cool Climate",
    imageId: "13",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1635510238241-a53e14fe659e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    imageDescription: "Cycling",
    imageId: "14",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1600775348802-0fcc0d19ef99?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    imageDescription: "Snow Mountain",
    imageId: "15",
  },
];

// Adding pictures to container from the aboce data
let images_container = document.querySelector(".container");
let pictures = "";
for (let i = 0; i < images.length; i++) {
  pictures += `<div class="images">`;
  pictures += `<span class="image-description">${images[i].imageDescription}</span>`;
  pictures += `<img src="${images[i].imageUrl}" alt="coffee" onclick="openImage(this.src)"/>`;
  pictures += `</div>`;
}
images_container.innerHTML = pictures;

// Open the Single Picture
let full_container = document.getElementById("full-image-container");
let full_image = document.getElementById("full-image");

// Opening of Image
function openImage(pic) {
  full_container.style.display = "flex";
  full_image.src = pic;
}
// Closing of Image
function closeImage() {
  full_container.style.display = "none";
}

// Downloading the images using Fetch
async function downloadImage() {
  const image = await fetch(full_image.src);
  console.log(image);
  const imageBlog = await image.blob();
  const imageURL = URL.createObjectURL(imageBlog);
  const link = document.createElement("a");
  link.href = imageURL;
  link.download = "images";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
