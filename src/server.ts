import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import cors from 'cors';
import { db } from './db';
const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');
import { RowDataPacket } from 'mysql2';

const app = express();
const angularApp = new AngularNodeAppEngine();
const PORT = 3000;
/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/**', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use('/**', (req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});
app.use(cors());
app.use(express.json());
/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}
app.get('/api/orders', (req, res) => {
  const query = `SELECT * FROM orders`;
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching orders:', err);
      res.status(500).json({ error: 'Error fetching orders' });
    } else {
      res.json(results);
    }
  });
});

// Get specific order with customer, address, and items
app.get('/api/orders/:id', (req, res) => {
  const orderId = req.params.id;
  const query = `
    SELECT o.*, c.name AS customerName, a.houseno, a.streetname, a.city, a.state, a.pincode
    FROM orders o
    JOIN customers c ON o.customer_id = c.id
    JOIN addresses a ON o.address_id = a.id
    WHERE o.id = ?
  `;
  db.query(query, [orderId], (err, results) => {
    if (err) {
      console.error('Error:', err);
      res.status(500).json({ error: 'Error fetching order details' });
    } else {
      const row = (results as RowDataPacket[])[0];
      res.json(row);
    }
  });
  
});

// Run server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
