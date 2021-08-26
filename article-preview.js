const $share = document.querySelector(".share");
const $shareBox = document.querySelector(".share-box");

$share.addEventListener("click", toggleClass);

function toggleClass() {
  $share.classList.toggle("active");
  $shareBox.classList.toggle("active");
}
