import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Create __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create Express app
const app = express();

// Set public folder as static folder
app.use(express.static(path.join(__dirname, 'public')));

// Load index.html on root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(5000, () => {
    console.log('Server is running at http://localhost:5000');
});