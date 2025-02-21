import Database from "better-sqlite3";
import { faker } from "@faker-js/faker";

const db = new Database("database.sqlite", { verbose: console.log });

db.exec(`
  CREATE TABLE IF NOT EXISTS jobs (
    id TEXT PRIMARY KEY,
    name TEXT,
    description TEXT
  )
`);

const generateFakeJobs = (count: number) => {
  const jobsList = Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.person.jobTitle(),
    description: faker.lorem.sentence(),
  }));

  const stmt = db.prepare(
    "INSERT INTO jobs (id, name, description) VALUES (?, ?, ?)"
  );

  jobsList.forEach((job) => {
    try {
      stmt.run(job.id, job.name, job.description);
    } catch (error) {
      console.error("Error inserting job:", error);
    }
  });
};

type CountResult = { "COUNT(*)": number };

const countResult = db
  .prepare("SELECT COUNT(*) FROM jobs")
  .get() as CountResult;

if (countResult["COUNT(*)"] === 0) {
  generateFakeJobs(10);
} else {
  console.log("Vacancies already exist in the table.");
}

export function addJob(id: string, name: string, description: string) {
  const stmt = db.prepare(
    "INSERT INTO jobs (id, name, description) VALUES (?, ?, ?)"
  );
  stmt.run(id, name, description);
}

export function getJobs() {
  return db.prepare("SELECT * FROM jobs").all();
}

export function updateJob(id: string, name: string, description: string) {
  const existingJob = db.prepare("SELECT * FROM jobs WHERE id = ?").get(id);
  if (!existingJob) {
    throw new Error(`Job with id ${id} was not found.`);
  }

  const stmt = db.prepare(
    "UPDATE jobs SET name = ?, description = ? WHERE id = ?"
  );
  const result = stmt.run(name, description, id);

  if (result.changes === 0) {
    throw new Error(`Job with id ${id} was not found.`);
  }
}

export default db;
