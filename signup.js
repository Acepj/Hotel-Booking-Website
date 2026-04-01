document.addEventListener("DOMContentLoaded", function () {
  // =========================
  // LOGIN FORM
  // =========================
  const form = document.getElementById("loginForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      if (email !== "" && password !== "") {
        console.log("Login successful");
        window.location.href = "collections.html";
      } else {
        alert("Please enter email and password");
      }
    });
  }

  // =========================
  // SIGN-UP BUTTON NAVIGATION
  // =========================
  const signupBtn = document.getElementById("signupBtn");

  if (signupBtn) {
    signupBtn.addEventListener("click", function () {
      window.location.href = "signup.html";
    });
  }

  // =========================
  // SCROLL REVEAL ANIMATION
  // =========================
  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealElements.length > 0) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible"); // fades out when scrolling up
          }
        });
      },
      {
        threshold: 0.15,
      },
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  }
});

// =========================
// PAGE FADE-IN ON LOAD
// =========================
window.addEventListener("load", function () {
  document.body.classList.remove("opacity-0");
});
