<<<<<<< HEAD
const input = document.getElementById("url-input");
const button = document.getElementById("generate-btn");
const qrImage = document.getElementById("qr-image");
const downloadBtn = document.getElementById("download-btn");
const urlDisplay = document.getElementById("url-display");

button.addEventListener("click", async () => {
  const url = input.value.trim();

  if (!url) {
    alert("Please enter a URL");
    return;
  }

  // Request QR from backend
  const response = await fetch("http://localhost:3001/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url })
  });

  const blob = await response.blob();
  const imageUrl = URL.createObjectURL(blob);

  // Display the QR
  qrImage.src = imageUrl;
  qrImage.addEventListener("mouseover", () => {
    urlDisplay.style.display = "block";
    urlDisplay.textContent = url;
  });
  qrImage.addEventListener("mouseout", () => {
    qrImage.style.transform = "scale(1)";
    urlDisplay.textContent = "";
  });

  // Enable download button
  downloadBtn.href = imageUrl;
  downloadBtn.style.display = "inline-block";

  input.value = "";
});
=======
const input = document.getElementById("url-input");
const button = document.getElementById("generate-btn");
const qrImage = document.getElementById("qr-image");
const downloadBtn = document.getElementById("download-btn");
const urlDisplay = document.getElementById("url-display");

button.addEventListener("click", async () => {
  const url = input.value.trim();

  if (!url) {
    alert("Please enter a URL");
    return;
  }

  // Request QR from backend
  const response = await fetch("http://localhost:3001/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url })
  });

  const blob = await response.blob();
  const imageUrl = URL.createObjectURL(blob);

  // Display the QR
  qrImage.src = imageUrl;
  qrImage.addEventListener("mouseover", () => {
    urlDisplay.style.display = "block";
    urlDisplay.textContent = url;
  });
  qrImage.addEventListener("mouseout", () => {
    qrImage.style.transform = "scale(1)";
    urlDisplay.textContent = "";
  });

  // Enable download button
  downloadBtn.href = imageUrl;
  downloadBtn.style.display = "inline-block";

  input.value = "";
});
>>>>>>> e0e03c23c336a70e543c67f9dc5f30c30f880eef
