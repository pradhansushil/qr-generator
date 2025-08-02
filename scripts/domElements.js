// === Variables ===
export const qrContainer = document.getElementById("qr-container");
export const qrText = document.getElementById("qrText");
export const qrImg = document.getElementById("qrImage");
export const button = document.getElementById("generateBtn");
export const categorySelect = document.getElementById("options");

// Wifi Variables
export const ssidInput = document.getElementById("ssid");
export const passwordInput = document.getElementById("password");
export const encryptionSelect = document.getElementById("encryption");

// Payment Variables
export const paymentProvider = document.getElementById("paymentProvider");
export const paymentRecipient = document.getElementById("paymentRecipient");

// Menu Item Variables
export const itemName = document.getElementById("menu-item");
export const itemDescription = document.getElementById("menu-description");
export const itemURL = document.getElementById("menu-link");
export const itemPrice = document.getElementById("item-price");

// Authentication
export const loginContainer = document.getElementById("login-container");
export const registrationContainer = document.getElementById("registration-container");
export const dashboard = document.getElementById("dashboard")

export const showRegistrationBtn = document.getElementById("show-register");
export const showLoginBtn = document.getElementById("show-login");

export const loginForm = document.getElementById("login-form");
export const registrationForm = document.getElementById("registration-form");

export const logoutBtn = document.getElementById("logout-btn");
export const userEmailSpan = document.getElementById("user-email");

// Collect all inputs by group for validation
export const inputGroups = {
  "plain-text": document.getElementById("input-plain-text"),
  "wifi": document.getElementById("input-wifi"),
  "payment": document.getElementById("input-payment"),
  "menu-item": document.getElementById("input-menu-item")
};