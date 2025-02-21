import React from "react";
import { useSelector } from "react-redux";

import { JobCard } from "./JobCard";
import { RootState } from "@/redux/store";

export const JobList: React.FC = () => {
  const jobs = useSelector((state: RootState) => state.jobs.jobs);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {jobs.length > 0 ? (
        jobs.map((job) => <JobCard key={job.id} job={job} />)
      ) : (
        <p>No jobs available</p>
      )}
    </div>
  );
};
