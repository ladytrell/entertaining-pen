async function bandUpdateFormHandler(event) {
  event.preventDefault();

  const bandname = document.querySelector("#bandname-update").value.trim();
  const email = document.querySelector("#email-update").value.trim();
  const imagePath = document.querySelector("#imagePath-update").value.trim();

  try {
    const response = await fetch("/api/bands", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        bandname,
        email,
        imagePath,
      }),
    });
    const data = await response.json();
    console.log("redirect to band page");
    location.redirect("/band-landing");
  } catch (err) {}
}

document
  .querySelector(".band-update-form")
  .addEventListener("submit", bandUpdateFormHandler);
