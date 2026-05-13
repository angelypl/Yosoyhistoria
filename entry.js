
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Servir los archivos estáticos de la carpeta dist
app.use(express.static(join(__dirname, 'dist')));

// Cualquier ruta que no sea un archivo, sirve el index.html
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor de Yo Soy Historia corriendo en el puerto ${PORT}`);
});
