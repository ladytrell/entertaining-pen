async function bandUpdateFormHandler(event) {
  event.preventDefault();

  const bandname = document.querySelector("#bandname-update").value.trim();
  const email = document.querySelector("#email-update").value.trim();
  const imagePath = document.querySelector("#imagePath-update").value.trim();
/*
  const response = await fetch("/api/bands", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      bandname,
      email,
      imagePath,
    }),
  });
  //document.location.replace("/band-landing");
  */
  fetch("/api/bands", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      bandname,
      email,
      imagePath,
    }),
  })
    .then(response => {
      if (!response.ok) {
        return alert('Error: ' + response.statusText);
      }
      let url = document.location.pathname;
      console.log("url", url);
      let index = url.lastIndexOf("/") + 1;
      let bandId = url.substring(index);
      url = "/bands/band-card/" + bandId;
      document.location.replace(url);
      return response.json();
    })
}

document
  .querySelector(".band-update-form")
  .addEventListener("submit", bandUpdateFormHandler);
