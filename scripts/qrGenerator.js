import {
  qrText, ssidInput, passwordInput, encryptionSelect, paymentProvider, paymentRecipient,
  itemName, itemDescription, itemURL, itemPrice, categorySelect, qrImg
} from "./domElements.js";

// Toggle Selectors and Generate QR Code
export function qrCode() {
  const selectedOption = categorySelect.value;
  let qrData = "";
  
  // For Wifi Selection:  
  if (selectedOption === "plain-text") {
    const text = qrText.value.trim();
    if (!text) {
      return;
    }
    qrData = text;
  } else if (selectedOption === "wifi") {
    const ssid = ssidInput.value.trim();
    const password = passwordInput.value.trim();
    const encryption = encryptionSelect.value;

    qrData = `WIFI:T:${encryption};S:${ssid};P:${password};;`;
  } else if (selectedOption === "payment") {
    const provider = paymentProvider.value;
    const recipient = paymentRecipient.value.trim();

    if (provider === "paypal") {
      qrData = `https://www.paypal.me/${encodeURIComponent(recipient)}/`;
    } else if (provider === "venmo") {
      qrData = `https://venmo.com/${encodeURIComponent(recipient)}`;
    }
  } else if (selectedOption === "menu-item") {
    const nameVal = itemName.value.trim()
    //Same for this:
    const descriptionVal = itemDescription.value.trim();
    // This as well:
    const urlVal = itemURL.value.trim();
    // And this:
    const priceVal = itemPrice.value.trim();

    qrData = 
    `Menu Item: ${nameVal}\n` +    
    `Description: ${descriptionVal}\n` +
    `Price: $${priceVal}\n` +
    `More Info: ${urlVal}\n`;
  }

  if (qrData !== "") {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrData)}`;
    qrImg.classList.remove("hidden");
    
    qrImg.onload = function() {
      qrImg.classList.remove("hidden");
    };
  }
}