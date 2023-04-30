const resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", () => {
  location.reload();
});
const reloadButton = document.querySelector("#reloadButton");
const gunsImg = document.querySelector("#guns");
const reloadSound = new Audio("./assets/audio/reload.mp3");

reloadButton.addEventListener("click", () => {
  gunsImg.src = "./assets/img/GUNRELOAD.gif";
  reloadSound.play();

  setTimeout(() => {
    gunsImg.src = "./assets/img/akgun.pngak";
  }, 4000);
});

// Get the fire button element
const fireButton = document.getElementById("fireButton");

// Get the board image element
const boardImage = document.getElementById("board");

// Get the flash image element
const flashImage = document.getElementById("flash");
const gunshotSound = new Audio("./assets/audio/gunshot.mp3");

// Add a mousedown event listener to the fire button
fireButton.addEventListener("mousedown", () => {
  // Show the flash image
  flashImage.style.display = "block";

  // Change the board image to boardwithhole.png
  boardImage.src = "./assets/img/boardwithhole.png";
  gunshotSound.play();

  // Add a mouseup event listener to the fire button
  fireButton.addEventListener("mouseup", () => {
    // Hide the flash image
    flashImage.style.display = "none";
  });
});
