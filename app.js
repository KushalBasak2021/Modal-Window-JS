const modalButton = document.querySelector(".modal-button");
const closeButton = document.querySelector("#close-button");
const modalContainer = document.querySelector(".modal-container");

modalButton.addEventListener("click", () => {
  modalContainer.classList.add("active");
  console.log("hi");
});

closeButton.addEventListener("click", () => {
  modalContainer.classList.remove("active");
});
