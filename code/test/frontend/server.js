const app = require('./app');
const PORT = 8083;

app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
