import fs from 'node:fs/promises';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import emails from './src/routes/emails.js';

// Variables de entorno
dotenv.config();

// Variables de entorno importantes
const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 5173;
const base = process.env.BASE || '/';
const FRONT_URL = process.env.FRONT_URL || 'http://localhost:3000';

// Cached production assets
const templateHtml = isProduction ? await fs.readFile('./dist/client/index.html', 'utf-8') : '';

// Crear servidor Express
const app = express();

// Middleware para leer datos en el body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Configuración de CORS
app.use(
  cors({
    origin: FRONT_URL,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Configuración de Vite o de producción
let vite;
if (!isProduction) {
  const { createServer } = await import('vite');
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base,
  });
  app.use(vite.middlewares);
} else {
  const compression = (await import('compression')).default;
  const sirv = (await import('sirv')).default;
  app.use(compression());
  app.use(base, sirv('./dist/client', { extensions: [] }));
}

// Ruta personalizada para manejar emails
app.use('/emails', emails);

// Servir HTML (SSR o SPA)
app.use('*all', async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '');

    let template;
    let render;
    if (!isProduction) {
      template = await fs.readFile('./index.html', 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule('/src/entry-server.js')).render;
    } else {
      template = templateHtml;
      render = (await import('./dist/server/entry-server.js')).render;
    }

    const rendered = await render(url);

    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? '')
      .replace(`<!--app-html-->`, rendered.html ?? '');

    res.status(200).set({ 'Content-Type': 'text/html' }).send(html);
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.error(e.stack);
    res.status(500).end(e.stack);
  }
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Server started at ${FRONT_URL}:${port}`);
});
