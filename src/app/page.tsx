"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ClipLoader } from "react-spinners";

import { JobList } from "@/components/Jobs";
import { setJobs } from "@/redux/jobSlice";
import { getJobs } from "@/lib/api";

export default function Home() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await getJobs();
        dispatch(setJobs(response));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {loading ? (
          <ClipLoader color="#0070f3" loading={loading} size={50} />
        ) : (
          <JobList />
        )}
      </main>
    </div>
  );
}
