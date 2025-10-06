const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const path = require('path');

// Serve static files from 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html on root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


const PORT = 3002;
const blogsPath = path.join(__dirname, 'data', 'blogs.json');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET blogs
app.get('/api/blogs', (req, res) => {
  fs.readFile(blogsPath, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading data');
    res.json(JSON.parse(data));
  });
});

// POST new blog
app.post('/api/blogs', (req, res) => {
  const { topic, content } = req.body;
  if (!topic || !content) return res.status(400).send('Missing topic or content');

  fs.readFile(blogsPath, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Read error');

    let blogs = [];
    try {
      blogs = JSON.parse(data);
    } catch (e) {
      return res.status(500).send('JSON parse error');
    }

    const newBlog = {
      id: Date.now(),
      topic,
      content
    };

    blogs.push(newBlog);

    fs.writeFile(blogsPath, JSON.stringify(blogs, null, 2), (err) => {
      if (err) return res.status(500).send('Write error');
      res.status(201).json(newBlog);
    });
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
 