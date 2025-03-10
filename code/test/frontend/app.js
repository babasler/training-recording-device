// app.js
document.getElementById('getButton').addEventListener('click', () => {
  fetch('http://backend:8084/api/hello')
      .then(response => response.text())  // Wir erwarten eine Textantwort
      .then(data => {
        document.getElementById('response').innerText = data;
      })
      .catch(error => {
        console.error('Fehler bei GET-Anfrage:', error);
      });
});
