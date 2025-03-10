document.addEventListener("DOMContentLoaded", () => {
  fetch("/api/hello")
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("message").innerText = data.message;
      })
      .catch((err) => console.error("Fehler:", err));
});

