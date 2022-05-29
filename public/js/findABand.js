// const findBand = require("../../views");

// const BandFormHandler = async function (event) {
//   event.preventDefault();

//   const select = document.querySelector("#select");
//   // const body = document.querySelector('textarea[name="comment-body"]').value;

//   select.addEventListener("change", function handleChange(event) {
//     console.log(event.target.value); // get selected VALUE
//     console.log(select);
//   });
//   if (body) {
//     await fetch("/api/bands", {
//       method: "GET",
//       body: JSON.stringify({
//         genre,
//         // body,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     document.location.reload();
//   }
// };

// document
//   .querySelector("#genre-list")
//   .addEventListener("click", BandFormHandler);
// // //////////////////
// // const select = document.getElementById('select');

// // select.addEventListener('change', function handleChange(event) {
// //   console.log(event.target.value); // get selected VALUE

// //   // get selected VALUE even outside event handler
// //   console.log(select.options[select.selectedIndex].value);

// //   // get selected TEXT in or outside event handler
// //   console.log(select.options[select.selectedIndex].text);
// // });
