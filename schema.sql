DROP DATABASE IF EXISTS jb;
CREATE DATABASE jb;

\c jb;

DROP TABLE IF EXISTS applications;

CREATE TABLE applications(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    status VARCHAR(50),
    job_title VARCHAR(50) NOT NULL,
    job_posting VARCHAR(50),
    notes VARCHAR(500)
);

INSERT INTO applications(name, status, job_title, job_posting, notes) 
VALUES 
    ('Microsoft', 'interested', 'Software Engineer', 'http://microsoft.test', 'misc notes'),
    ('LinkedIn', 'applied', 'UI Engineer', 'http://linkedin.test', ''),
    ('Google', 'on-site', 'Test Engineer', 'http://google.test', ''),
    ('Pizza Hut', 'approved', 'Pizza Sampler', 'http://pizza.test', 'total comp: health care + pizza'),
    ('TP Tea', 'offered', 'Boba Sampler', 'http://tptea.test', 'perk: free boba!'),
    ('Taco Bell', 'rejected', 'Taco Sampler', 'http://tacobell.test', '');



