document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:8084/api/hello")  // Ruft die Spring Boot API ab
      .then((response) => response.text())  // Backend gibt reinen Text zurück
      .then((data) => {
        document.getElementById("message").innerText = data;
      })
      .catch((err) => console.error("Fehler:", err));
});


