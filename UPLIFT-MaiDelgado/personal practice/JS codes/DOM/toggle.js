const button = document.querySelectorAll(".showModalBtn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const toggleButton = document.querySelector(".toggleBold");

const showModal = function () {
  //   console.log(modal.classList);
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// console.log(button);
button.forEach(function (element) {
  //   console.log(element);
  element.addEventListener("click", showModal);
});

const toggleBold = function () {
  const paragraph = document.querySelector("p");
  paragraph.classList.toggle("bold");
};

toggleButton.addEventListener("click", toggleBold);

// task to do
// close button
// press esc key to close modal

const closeBtn = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

closeModalBtn.addEventListener("click", closeBtn);



// function closeDialog() {
//     let d = document.getElementById('d')
//     d.style.display = "none"
//     d.close()
// }