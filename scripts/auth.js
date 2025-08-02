import {
  loginContainer, registrationContainer, dashboard, showRegistrationBtn, showLoginBtn,
  loginForm, registrationForm, logoutBtn, userEmailSpan, qrContainer
} from "./domElements.js";

// Helper function to show only the Login view and hide others
function showLoginView() {
  loginContainer.classList.remove("hidden");
  registrationContainer.classList.add("hidden");
  dashboard.classList.add("hidden");
  qrContainer.classList.add("hidden");
  userEmailSpan.textContent = ""; // Clear email display when showing login
}

// Helper function to show only the Register view and hide others
function showRegisterView() {
  loginContainer.classList.add("hidden");
  registrationContainer.classList.remove("hidden");
  dashboard.classList.add("hidden");
  qrContainer.classList.add("hidden");
  userEmailSpan.textContent = ""; // Clear email display when showing register
}

// Hompage view after logging in. (This function's purpose remains unchanged)
export function showDashboard(email) {
  loginContainer.classList.add("hidden");
  registrationContainer.classList.add("hidden");
  dashboard.classList.remove("hidden"); // Show dashboard
  qrContainer.classList.remove("hidden"); // Show QR container
  userEmailSpan.textContent = email;
}

export function setupAuthListeners() {
  // Show Registration Form
  showRegistrationBtn.addEventListener("click", function() {
    showRegisterView(); // Use the helper
  });

  //Show Log In Form
  showLoginBtn.addEventListener("click", function() {
    showLoginView(); // Use the helper
  });

  // New User Registration
  registrationForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("registration-email").value;
    const password = document.getElementById("registration-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password === confirmPassword) {
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password); // Caution: Storing passwords in localStorage is not secure in production!

      alert("Registration successful! Please Log in.");
      registrationForm.reset();

      showLoginView(); // After successful registration, show login form
    } else {
      alert("Passwords do not match");
    }
  });

  // User Log In
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
      localStorage.setItem("isLoggedIn", "true");
      showDashboard(email); // Already handles showing dashboard and hiding auth forms
    } else {
      alert("Invalid email or password.");
      showLoginView(); // On failed login, ensure we stay on the login view
    }
  });

  // Log Out
  logoutBtn.addEventListener("click", function() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");

    showLoginView(); // After logout, show the login form
  });
}

// User stays logged in after refreshing.
export function checkAuthOnLoad() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const email = localStorage.getItem("userEmail");

  if (isLoggedIn === "true" && email) {
    showDashboard(email);
  } else {
    showLoginView(); // If not logged in on load, show the login form
  }
}