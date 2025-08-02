import {
  qrText, ssidInput, encryptionSelect, paymentProvider, paymentRecipient,
  itemName, itemDescription, itemURL, itemPrice, button, categorySelect, inputGroups
} from "./domElements.js";

// Loop through the <select> Options
export function showSelectedInputGroup(selectedOption) {
  const groups = Object.values(inputGroups);
  for (let i = 0; i < groups.length; i++) {
    groups[i].classList.add("hidden");
  }

  if (inputGroups[selectedOption]) {
    inputGroups[selectedOption].classList.remove("hidden");
  }
}

export function checkInputs() {
  const selectedOption = categorySelect.value;

  if (selectedOption === "plain-text") {
    const text = qrText.value.trim();
    if (text !== "") {
      button.disabled = false;
      button.classList.remove("hidden");
    } else {
      button.disabled = true;
      button.classList.add("hidden");
    }
  } else if (selectedOption === "wifi") {
    const ssid = ssidInput.value.trim();
    const encryption = encryptionSelect.value;

    if (ssid !== "" && encryption !== "") {
      button.disabled = false;
      button.classList.remove("hidden");
    } else {
      button.disabled = true;
      button.classList.add("hidden");
    }
  } else if (selectedOption === "payment") {
    const provider = paymentProvider.value;
    const recipient = paymentRecipient.value.trim();

    if (provider !== "" && recipient !== "") {
      button.disabled = false;
      button.classList.remove("hidden");
    } else {
      button.disabled = true;
      button.classList.add("hidden");
    }
  } else if (selectedOption === "menu-item"){
    //Why: Because I am attempting to get the value that was written in the input field.
    const nameVal = itemName.value.trim()
    //Same for this:
    const descriptionVal = itemDescription.value.trim();
    // This as well:
    const urlVal = itemURL.value.trim();
    // And this:
    const priceVal = itemPrice.value.trim();

    if (nameVal !== ""
       && descriptionVal !== ""
       && urlVal !== ""
       && priceVal !== "") {
      button.disabled = false;
      button.classList.remove("hidden");
    } else {
      button.disabled = true;
      button.classList.add("hidden");
    }
  }
}