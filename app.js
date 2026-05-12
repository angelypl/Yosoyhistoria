const http = require('http');

// Hostinger asigna el puerto automáticamente, por eso usamos process.env.PORT
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(`
    <body style="background-color: #050505; color: white; font-family: serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0;">
      <div style="text-align: center; border: 1px solid #333; padding: 40px;">
        <h1 style="letter-spacing: 5px; text-transform: uppercase;">Yo Soy Historia</h1>
        <p style="color: #888;">Conexión establecida con éxito.</p>
        <p style="font-style: italic;">El periódico digital de misterio está listo para el despliegue.</p>
      </div>
    </body>
  `);
});

server.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
