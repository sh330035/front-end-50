const container = document.querySelector(".container");

function activeAdd(element) {
  let activeNow = document.querySelector(".active");
  let photo = $(element).parent()[0];

  if (photo.matches(".active")) {
    return;
  }

  photo.classList.add("active");
  activeNow.classList.remove("active");
}

container.addEventListener("click", function handlePhotoClicked(e) {
  if (e.target.matches(".img") || e.target.matches(".title")) {
    activeAdd(e.target);
  }
  return;
});
