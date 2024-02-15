const express = require('express');
const mysql = require('mysql');

const app = express();

// Konfigurasi koneksi database MySQL
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'password',
  database: 'ujimysqlkudb',
  port: 3309,
  insecureAuth: true
});

// Membuat koneksi ke database
connection.connect((err) => {
  if (err) {
    console.error('Koneksi ke database gagal: ', err);
  } else {
    console.log('Koneksi ke database berhasil');
  }
});

// Middleware untuk mengizinkan parsing body dari request
app.use(express.json());

// Route untuk menambahkan data baru ke database
app.post('/data', (req, res) => {
  const { id, nama, alamat } = req.body;

  // Query INSERT ke database
  const query = `INSERT INTO users (id, nama, alamat) VALUES (?, ?, ?)`;
  connection.query(query, [id, nama, alamat], (error, results) => {
    if (error) {
      console.error('Error saat menambahkan data: ', error);
      res.status(500).json({ error: 'Terjadi kesalahan saat menambahkan data' });
    } else {
      res.status(201).json({ message: 'Data berhasil ditambahkan' });
    }
  });
});

// Menjalankan server
app.listen(3000, () => {
  console.log('Server berjalan pada port 3000');
});