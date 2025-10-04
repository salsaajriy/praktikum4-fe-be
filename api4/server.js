const express = require('express');
const app = express();
const PORT = 8001;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const articles = [
  {
    id: 1,
    title: "Belajar Express.js untuk Pemula",
    urlimage: "https://images.unsplash.com/photo-1592609391095-54a2168ae893",
    description: "Express.js adalah salah satu framework Node.js yang ringan dan fleksibel untuk membangun aplikasi web maupun API. Dengan sintaks yang sederhana, sangat cocok digunakan oleh pemula.",
    author: "Raden Walangsungsang"
  },
  {
    id: 2,
    title: "Membuat API dengan Node.js",
    urlimage: "https://miro.medium.com/v2/1*00n4mInvIt1f7GslbK0A.jpeg",
    description: "Untuk membuat API sederhana dengan Node.js dan Express, langkah pertama adalah memastikan Node.js sudah terpasang di komputer. Selanjutnya, instal Express sebagai dependency agar lebih mudah dalam mengelola route dan request.",
    author: "Empu Gandring"
  }
];

app.get("/api/test/getarticle", (req, res) => {
    res.json({
        status: "success",
        data: articles
    });
});