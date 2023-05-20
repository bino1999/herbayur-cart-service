

const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');

// routes
const cart = require("./routes/cart");  //use this when implementing routes

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use("/api/cart", cart);  //use this when implementing routes

app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5001;

// app.listen(port, () => console.log(`Server running on port ${port}`));

// app.use(cookieParser('82e4e438a0705fabf61f9854e3b575af'));

app.use(express.static(path.join(__dirname, '/client/build')))
   .listen(PORT, () => console.log(`Listening on ${PORT}`));

