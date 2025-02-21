import React from "react";
import toast from "react-hot-toast";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";

import { CoreButton } from "@/ui";
import { CoreInput } from "../Form";

import { updateJobById } from "@/lib/api";
import { updateJob } from "@/redux/jobSlice";
import { validationSchema } from "@/helpers";

import { Job } from "@/types";

interface JobEditFormProps {
  job: Job;
  onClose: () => void;
}

export const JobEditForm: React.FC<JobEditFormProps> = ({ job, onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = async (values: {
    title: string;
    description: string;
  }) => {
    try {
      await updateJobById(job.id, values.title, values.description);
      dispatch(
        updateJob({
          id: job.id,
          name: values.title,
          description: values.description,
        })
      );

      toast.success("Vacancy has been updated successfully!");
      onClose();
    } catch (error) {
      toast.error("Error updating a vacancy!");
      console.error("Error updating job:", error);
    }
  };

  return (
    <Formik
      initialValues={{ title: job.name, description: job.description }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <div>
            <h3 className="font-bold text-lg text-center">Edit Job</h3>
            <CoreInput
              name="title"
              label="Title"
              errors={errors}
              touched={touched}
              placeholder="Enter job title..."
            />
          </div>
          <div className="mt-4">
            <CoreInput
              name="description"
              label="Description"
              type="textarea"
              errors={errors}
              touched={touched}
              placeholder="Enter job description..."
            />
          </div>
          <CoreButton type="submit">Save</CoreButton>
        </Form>
      )}
    </Formik>
  );
};
