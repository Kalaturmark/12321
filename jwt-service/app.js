// app.js
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const secretKey = 'your-secret-key';

app.get('/create-token', (req, res) => {
    const token = jwt.sign({ user: 'testUser' }, secretKey);
    res.json({ token });
});

app.get('/verify-token', (req, res) => {
    const token = req.query.token;
    try {
        const decoded = jwt.verify(token, secretKey);
        res.json({ decoded });
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
});

app.listen(3000, () => console.log('JWT service running on port 3000'));
