import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Job } from "@/types";

interface JobState {
  jobs: Job[];
}

const initialState: JobState = {
  jobs: [],
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setJobs: (state, action: PayloadAction<Job[]>) => {
      state.jobs = action.payload;
    },
    updateJob: (state, action: PayloadAction<Job>) => {
      const index = state.jobs.findIndex((job) => job.id === action.payload.id);
      if (index !== -1) {
        state.jobs[index] = action.payload;
      }
    },
  },
});

export const { setJobs, updateJob } = jobSlice.actions;
export default jobSlice.reducer;
