const express = require('express');
const connectdb = require('./config/db');

connectdb();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json({ extended: false }));

app.use('/api/users', require('./Routes/api/users'));
app.use('/api/auth', require('./Routes/api/auth'));
app.use('/api/profile', require('./Routes/api/profile'));
app.use('/api/posts', require('./Routes/api/posts'));

app.get('/', (req, res) => res.send('API Running'));
app.listen(port, () => console.log('server started'));
