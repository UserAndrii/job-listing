import React, { useState } from "react";

import { Modal } from "../Modal";
import { CoreButton } from "@/ui";
import { JobEditForm } from "./JobEditForm";

import { Job } from "@/types";

interface JobCardProps {
  job: Job;
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-2 border rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
      <h3 className="font-bold text-lg">{job.name}</h3>
      <p className="text-gray-700">{job.description}</p>
      <CoreButton onClick={handleEditClick} className="mt-auto px-4 py-1">
        Edit
      </CoreButton>

      <Modal onClose={handleCloseModal} isOpen={isModalOpen}>
        <JobEditForm job={job} onClose={handleCloseModal} />
      </Modal>
    </div>
  );
};
