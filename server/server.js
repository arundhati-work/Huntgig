const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27018/huntgig", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/companies', require('./routes/CompanyRoutes'));
app.use('/api/auth', require('./routes/AuthRoutes'));
app.use('/api/contact', require('./routes/ContactRoutes'));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
