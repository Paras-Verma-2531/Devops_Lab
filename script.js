document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Replace this with your actual login logic
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "your_username" && password === "your_password") {
      alert("Login successful!"); // Replace this with your desired action on successful login
    } else {
      alert("Invalid username or password. Please try again."); // Replace this with your desired action on failed login
    }
  });
});
