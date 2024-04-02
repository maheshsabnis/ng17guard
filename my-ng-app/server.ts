import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';
// Added date 19-03-2024
// The Express app is exported so that it can be used by serverless Functions.
// The Configuration
export function app(): express.Express {
  const server = express(); //Web App Framework on Node.js
  // USed by the Node.js to Read and Process files on the server
  // all files those are used by the server-side Hosted Folder
  console.log(`Server-Side Hosted Folder URL ${import.meta.url}`);
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  // list of files to be responded back to the browser
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');
// An Engine that manages the Server-Side Rendering of the Application
  const commonEngine = new CommonEngine();
  // Current the express server is configured with the 'html' view engine
  // this will make sure that the request for the html page is received
  // by the server and then server will look for that expetsnion inside
  // the configured server folder or view folder and the the .html file will be read
  // and will be responded to the HTTP request
  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // XERN-> X can be first character of database name: e.g. (M)ongoDB, (S)QL, (M)ySQL, etc.
  // E-> Express
  // A-> Angular
  // N->Node
  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  // All .html, .js, .css, and other files will be servred from the browser folder
  server.get('*.*', express.static(browserDistFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Angular engine
  // Server-Side Port used by @angular/ssr is 4000
  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    console.log(`protocol: ${protocol}, OriginalUrl: ${originalUrl},
      baseUrl: ${baseUrl}, and headers.host: ${headers.host}`);

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        /*
         protocol: http / https
         headers.host: The Host Server Name with the PORT
         originalUrl: The requested by in the request object from Browser's Address bar
        */
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
