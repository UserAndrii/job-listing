export async function getJobs() {
  const response = await fetch("/api/jobs");

  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }

  return response.json();
}

export async function updateJobById(
  id: string,
  name: string,
  description: string
) {
  const response = await fetch(`/api/jobs/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, description }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to update job");
  }

  return response.json();
}
