// Create web server
// 1. Create a web server
// 2. Handle GET /comments
// 3. Handle POST /comments
// 4. Handle GET /comments/:id
// 5. Handle PUT /comments/:id
// 6. Handle DELETE /comments/:id

// 1. Create a web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8888;

// 2. Handle GET /comments
// 3. Handle POST /comments
// 4. Handle GET /comments/:id
// 5. Handle PUT /comments/:id
// 6. Handle DELETE /comments/:id
const comments = [
    {id: 1, author: 'Nguyen Van A', content: 'Content 1'},
    {id: 2, author: 'Nguyen Van B', content: 'Content 2'},
    {id: 3, author: 'Nguyen Van C', content: 'Content 3'},
    {id: 4, author: 'Nguyen Van D', content: 'Content 4'},
    {id: 5, author: 'Nguyen Van E', content: 'Content 5'},
    {id: 6, author: 'Nguyen Van F', content: 'Content 6'},
    {id: 7, author: 'Nguyen Van G', content: 'Content 7'},
    {id: 8, author: 'Nguyen Van H', content: 'Content 8'},
    {id: 9, author: 'Nguyen Van I', content: 'Content 9'},
    {id: 10, author: 'Nguyen Van K', content: 'Content 10'},
];

app.use(bodyParser.json());
app.use(cors());

app.get('/comments', (req, res) => {
    res.send(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    comment.id = comments.length + 1;
    comments.push(comment);
    res.send(comment);
});

app.get('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const comment = comments.find(c => c.id === id);
    if (comment) {
        res.send(comment);
    } else {