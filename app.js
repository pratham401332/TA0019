import express from 'express';
import cors from 'cors';
import db from './db.js';

const app = express();
const PORT = 3000;

// --- MIDDLEWARE CONFIGURATION ---

// 1. Better CORS config: This explicitly allows local files and common dev ports
app.use(cors({
    origin: '*', // Allows any origin, including 'null' (local files)
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

// 2. Enable JSON parsing for incoming POST requests
app.use(express.json());

// --- ROUTES ---

// Fetch Initial Data
app.get('/data', async (req, res) => {
    try {
        const [companies] = await db.query("SELECT * FROM companies");
        const [students] = await db.query("SELECT * FROM students");
        res.json({ companies, students });
    } catch (err) {
        console.error("Fetch Error:", err.message);
        res.status(500).json({ error: err.message });
    }
});

// Save Student Data
app.post('/student', async (req, res) => {
    const { name, cgpa, skills, achievements } = req.body;
    try {
        const query = "INSERT INTO students (name, cgpa, skills, achievements) VALUES (?, ?, ?, ?)";
        await db.query(query, [name, cgpa, skills, achievements]);
        res.status(200).send("Student saved successfully");
    } catch (err) {
        console.error("Student Post Error:", err.message);
        res.status(500).json({ error: err.message });
    }
});

// Save Company Data
app.post('/company', async (req, res) => {
    // Destructuring 'package' as 'pkg' to avoid JS reserved word conflicts
    const { company_name, min_cgpa, package: pkg, job_role } = req.body;
    try {
        const query = "INSERT INTO companies (company_name, min_cgpa_req, package_details, job_role) VALUES (?, ?, ?, ?)";
        await db.query(query, [company_name, min_cgpa, pkg, job_role]);
        res.status(200).send("Company saved successfully");
    } catch (err) {
        console.error("Company Post Error:", err.message);
        res.status(500).json({ error: err.message });
    }
});

// --- SERVER START ---
app.listen(PORT, () => {
    console.log(`🚀 Server is active at http://localhost:${PORT}`);
    console.log(`📡 CORS is enabled for all origins.`);
});