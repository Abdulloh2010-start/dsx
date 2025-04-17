const input = document.getElementById("input");
const button = document.getElementById("qrcodeButton");
const qrcodeContainer = document.getElementById("qrcode");
const colorDark = document.getElementById("colorDark");
const colorLight = document.getElementById("colorLight");

let currentQRCode = null;

function generateQRCode(text, darkColor, lightColor) {
  qrcodeContainer.innerHTML = "";
  currentQRCode = new QRCode(qrcodeContainer, {
    text: text,
    width: 200,
    height: 200,
    colorDark: darkColor,
    colorLight: lightColor,
    correctLevel: QRCode.CorrectLevel.H,
  });
}
button.addEventListener("click", () => {
  const url = input.value.trim();
  generateQRCode(url, colorDark.value, colorLight.value);
});
colorDark.addEventListener("input", () => {
  const url = input.value;
  if (url) {
    generateQRCode(url, colorDark.value, colorLight.value);
  }
});
colorLight.addEventListener("input", () => {
  const url = input.value;
  if (url) {
    generateQRCode(url, colorDark.value, colorLight.value);
  }
});
