
const express = require('express');
const path = require('path');

const app = express();
// Hostinger inyecta automáticamente el puerto correcto aquí
const PORT = process.env.PORT || 3000;

// Servir los archivos que Astro ya compiló
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor activo en el puerto: ${PORT}`);
});
