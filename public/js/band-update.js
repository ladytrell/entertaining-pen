async function bandUpdateFormHandler(event) {
  event.preventDefault();

  const bandname = document.querySelector("#bandname-update");
  // .value.trim();
  const email = document.querySelector("#email-update");
  // .value.trim();
  // const image = document.querySelector("#imagePath-update").value.trim();
  console.log("balls");
}

document
  .querySelector(".band-update-form")
  .addEventListener("submit", bandUpdateFormHandler);
