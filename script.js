const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const btn = document.querySelector("#btn-submit");

btn.addEventListener("click", function () {
  const Name = name.value;
  const Email = email.value;
  const Message = message.value;

  emailjs
    .send("service_h7n90cl", "template_ss0v7qv", {
      from_name: Name,
      email_id: Email,
      message: Message,
    })
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Email sent successfully!",
        });
      },
      function (error) {
        console.log("FAILED...", error);
        Swal.fire({
          icon: "error",
          title: "Failed!",
          text: "Failed to send email. Please try again.",
        });
      }
    );
});


// responsive design
const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");

// Add click event listener for the toggle button
navToggle.addEventListener("click", handleClicked);

// Define the handleClicked function
function handleClicked() {
  // Toggle the display of the navigation menu
  navMenu.classList.toggle("show-menu");
}

// Add event listeners to each menu option to hide the menu when clicked
const menuOptions = ["main", "edu", "project", "skill", "service", "contact-me"];
menuOptions.forEach(option => {
  const element = document.getElementById(option);
  if (element) {
    element.addEventListener("click", function () {
      navMenu.classList.remove("show-menu");
    });
  }
});