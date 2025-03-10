const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Statisches Frontend aus "public" servieren
app.use(express.static(path.join(__dirname, "public")));

// API-Route
// app.get("/api/hello", (req, res) => {
//     res.json({ message: "Hello from the backend!" });
// });

// Server starten
app.listen(PORT, () => {
    console.log(`✅ Server läuft auf http://localhost:${PORT}`);
});