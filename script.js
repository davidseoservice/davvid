document.querySelectorAll("a").forEach(function (link) {
  if (link.hostname && link.hostname !== location.hostname) {
    link.target = "_blank";
  }
});

const connectButton = document.querySelector(".small");

if (connectButton) {
  connectButton.href = "https://www.facebook.com/Davvidd.seo";
  connectButton.textContent = "Let's Connect ↗";
  connectButton.target = "_blank";
}
