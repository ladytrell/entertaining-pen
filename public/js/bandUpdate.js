async function bandUpdateFormHandler(event) {
  event.preventDefault();

  const bandname = document.querySelector("#bandname-update").value.trim();
  const email = document.querySelector("#email-update").value.trim();
  const imagePath = document.querySelector("#imagePath-update").value.trim();

  const response = await fetch("/api/bands", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      bandname,
      email,
      imagePath,
    }),
  });
  document.location.replace("/band-landing");

  //   if (response.ok) {
  //     console.log(response, "in bandUpdate.js");
  //     // console.log("redirect to band page");
  //     document.location.replace("/band-landing");
  //   } else {
  //     console.log("something went wrong");
  //   }
}

document
  .querySelector(".band-update-form")
  .addEventListener("submit", bandUpdateFormHandler);
