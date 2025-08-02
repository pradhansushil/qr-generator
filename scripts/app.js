import {
  qrText, ssidInput, passwordInput, encryptionSelect, paymentProvider, paymentRecipient,
  itemName, itemDescription, itemURL, itemPrice, button, categorySelect, qrImg
} from "./domElements.js";
import {showSelectedInputGroup, checkInputs} from "./formHandlers.js";
import {qrCode} from "./qrGenerator.js";
import { checkAuthOnLoad, setupAuthListeners } from "./auth.js";

window.onload = function () {
  // Authenticate
  checkAuthOnLoad();
  setupAuthListeners();

  // Button to generate QR Code.
  button.addEventListener("click", qrCode);
   
  const inputs = [qrText, ssidInput, passwordInput, paymentRecipient, itemName, itemDescription, itemURL, itemPrice];
  for (let i=0; i < inputs.length; i++) {
    //reset on refresh.
    inputs[i].value = "";
    // Check whether to see if user typed anything to toggle "Generate" button on and off
    inputs[i].addEventListener("input", checkInputs);
  }

  const selects = [encryptionSelect, paymentProvider];
  for (let j = 0; j < selects.length; j++) {
    selects[j].addEventListener("change", checkInputs);
  }

  categorySelect.addEventListener("change", function() {
    showSelectedInputGroup(categorySelect.value);
    checkInputs();
  });

  showSelectedInputGroup(categorySelect.value);

  // Hide Contents
  qrImg.classList.add("hidden");
  button.disabled = true;
  button.classList.add("hidden");

  paymentProvider.selectedIndex = 0;
}