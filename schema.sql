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

INSERT INTO applications(name, status, job_title, job_posting, notes) VALUES ('testCompany', 'interested', 'tester', 'http://test.com', 'misc notes');
