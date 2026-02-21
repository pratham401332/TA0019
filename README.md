# ELIGIX | Campus Placement Portal

A full-stack recruitment bridge designed to match students with companies based on CGPA and skillsets. 

## 🛠 Tech Stack
- **Frontend:** HTML5, Tailwind CSS, JavaScript (ES6+)
- **Backend:** Node.js, Express.js
- **Database:** MySQL

## 🚀 Local Setup Instructions

### 1. Database Configuration
Run the following SQL commands in your MySQL terminal to set up the database:

```sql
CREATE DATABASE eligix_db;
USE eligix_db;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    cgpa DECIMAL(3, 2) NOT NULL,
    skills TEXT NOT NULL,
    achievements TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE companies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    company_name VARCHAR(255) NOT NULL,
    min_cgpa_req DECIMAL(3, 2) NOT NULL,
    package_details VARCHAR(100) NOT NULL,
    job_role VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
THis website is currently running on local host and we will connect it to cloud services
