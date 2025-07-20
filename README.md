# Gemini Chatbot API 💬✨

Proyek ini adalah chatbot sederhana berbasis web yang menggunakan **Google Gemini Pro API** untuk menjawab pertanyaan pengguna secara natural. Chatbot dibangun menggunakan **Node.js** dan **Express** di sisi backend, serta **HTML, CSS, dan JavaScript** di sisi frontend.

---

## 🔧 Fitur

- Chat interaktif dengan model AI Gemini
- Komunikasi frontend ↔ backend menggunakan `fetch`
- Mendukung respon dinamis berdasarkan input pengguna
- Aman: API Key disimpan di file `.env`

---

## 📁 Struktur Proyek

├── public/
│ ├── index.html # Halaman utama
│ ├── script.js # Script frontend untuk fetch
│ └── style.css # Styling chatbot
├── .env # Tempat menyimpan API key (jangan upload ke GitHub)
├── server.js # File utama server Express
├── package.json # Konfigurasi project Node.js
└── README.md # Dokumentasi proyek

yaml
Copy
Edit

---

## 🚀 Cara Menjalankan Proyek

1. **Clone repo**
   ```bash
   git clone https://github.com/yourusername/gemini-chatbot-api
   cd gemini-chatbot-api
Install dependency

bash
Copy
Edit
npm install
Tambahkan API key ke file .env

ini
Copy
Edit
GEMINI_API_KEY=your_google_api_key
Jalankan server

bash
Copy
Edit
node server.js
Buka di browser
Kunjungi http://localhost:3000 untuk mulai menggunakan chatbot!
