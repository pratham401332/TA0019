USE eligix_db; 
DROP TABLE IF EXISTS students; 
CREATE TABLE students (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, cgpa DECIMAL(3, 2) NOT NULL, skills TEXT NOT NULL, achievements TEXT, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
DESCRIBE students;
CREATE TABLE IF NOT EXISTS companies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    company_name VARCHAR(255) NOT NULL,
    min_cgpa_req DECIMAL(3, 2) NOT NULL,
    package_details VARCHAR(100) NOT NULL,
    job_role VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

USE eligix_db;


SELECT * FROM students;


SELECT * FROM companies;