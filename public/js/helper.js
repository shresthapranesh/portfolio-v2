// const form = document.getElementById("contactform");
// const contactdiv = document.getElementById("formsubmit");
// const aftersubmit = document.getElementById("aftersubmit");
// const navigation = document.querySelector(".nav-content");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const fname = document.getElementById("firstname");
//   const lname = document.getElementById("lastname");
//   const email = document.getElementById("email");
//   const pn = document.getElementById("phone");
//   const msg = document.getElementById("msg");
//   upload(fname.value, lname.value, email.value, pn.value, msg.value);
// });

// const upload = (fname, lname, email, pn, msg) => {
//   const data = new FormData();
//   data.append("firstname", fname);
//   data.append("lastname", lname);
//   data.append("email", email);
//   data.append("phone", pn);
//   data.append("message", msg);

//   fetch("/contactform", {
//     method: "POST",
//     body: data,
//   }).catch((error) => console.log(error));
//   contactdiv.style.display = "none";
//   aftersubmit.style.display = "block";
// };

// function myFunction(x) {
//   x.classList.toggle("change");
//   if (
//     navigation.querySelector("nav").style.display == "none" ||
//     navigation.querySelector("nav").style.display == ""
//   )
//     navigation.querySelector("nav").style.display = "flex";
//   else navigation.querySelector("nav").style.display = "none";
// }
