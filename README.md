# Job Listing

This project is a job management application built with **Next.js**, **Redux Toolkit**, **Faker.js** (for generating test data), and **SQLite** (for storing real data).

## 🔧 Technologies

- **Next.js** (App Router, Server Actions)
- **TypeScript**
- **Redux Toolkit** (state management)
- **Faker.js** (test data generation)
- **SQLite** (job storage)
- **Tailwind CSS** (styling)

## 📂 Project Structure

```
📦 src
 ┣ 📂 components        # Basic components
 ┣ 📂 ui                # UI components
 ┣ 📂 pages
 ┃ ┣ 📂 api
 ┃      ┣ 📂 jobs
 ┃      ┗ 📜 index.ts   # API for fetching jobs
 ┃      ┗ 📜 [id].ts    # API for updating a job
 ┃
 ┣ 📂 redux
 ┃ ┣ 📜 jobSlice.ts     # Redux slice for job management
 ┃ ┗ 📜 store.ts        # Redux store
 ┗ 📜 layout.tsx        # Main layout
```

## 🚀 How to Run the Project

### 1. Install Dependencies

```sh
npm install
```

### 2. Start in Development Mode

```sh
npm run dev
```

The application will be available at: [http://localhost:3000](http://localhost:3000)

If you do not have pip installed, you may encounter an error when installing dependencies. It is recommended to use a virtual environment for your Python projects.

To create a new virtual environment, run the following command:

```bash
python -m venv myenv
```

Then activate it:

```bash
source myenv/bin/activate
```

Once the virtual environment is activated, you can install the dependencies by running:

```bash
npm i
```

---

## 📜 API Routes

| Method | Route          | Description    |
| ------ | -------------- | -------------- |
| GET    | `/api/jobs`    | Fetch all jobs |
| PUT    | `/api/jobs/id` | Add a new job  |

## 🛠 Redux Setup

All jobs are stored in the Redux store. When the page loads, the application fetches data from the API.

```tsx
const jobs = useSelector((state: RootState) => state.jobs.jobs);
dispatch(setJobs(jobsList));
```

---

Let me know if you need any modifications! 🚀
