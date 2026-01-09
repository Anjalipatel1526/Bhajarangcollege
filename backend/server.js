const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const DATA_FILE = path.join(__dirname, 'applications.json');

// Ensure data file exists
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
}

app.post('/api/admissions', (req, res) => {
    try {
        const newApplication = {
            id: Date.now(),
            submittedAt: new Date().toISOString(),
            ...req.body
        };

        const fileData = fs.readFileSync(DATA_FILE, 'utf8');
        const applications = JSON.parse(fileData);

        applications.push(newApplication);

        fs.writeFileSync(DATA_FILE, JSON.stringify(applications, null, 2));

        console.log('New application received:', newApplication.name);
        res.status(201).json({ message: 'Application submitted successfully', id: newApplication.id });
    } catch (error) {
        console.error('Error saving application:', error);
        res.status(500).json({ message: 'Failed to save application' });
    }
});

app.get('/api/admissions', (req, res) => {
    try {
        const fileData = fs.readFileSync(DATA_FILE, 'utf8');
        res.json(JSON.parse(fileData));
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve applications' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
