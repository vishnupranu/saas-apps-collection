const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    service: 'seo-audit-tool',
    timestamp: new Date().toISOString() 
  });
});

// API routes
app.get('/api/v1', (req, res) => {
  res.json({ 
    message: 'Welcome to seo-audit-tool API',
    version: '1.0.0',
    description: 'SEO audit and optimization tool'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: err.message 
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`✅ seo-audit-tool running on port ${PORT}`);
});

module.exports = app;
