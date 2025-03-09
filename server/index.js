const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

// Routes
const apiRoutes = require('./routes/api');
const indexRoutes = require('./routes/index');

// Environment variables
dotenv.config();

// Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Statik dosyalar için
app.use(express.static(path.join(__dirname, '../src')));

// MongoDB Bağlantısı
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB bağlantısı başarılı'))
.catch(err => console.error('MongoDB bağlantı hatası:', err));

// Routes
app.use('/api', apiRoutes);
app.use('/', indexRoutes);

// Server başlatma
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor`);
});