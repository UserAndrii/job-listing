import type { NextApiRequest, NextApiResponse } from "next";
import { updateJob } from "@/lib/db";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id || Array.isArray(id)) {
    return res.status(400).json({ error: "Invalid ID format" });
  }

  if (req.method === "PUT") {
    const { name, description } = req.body;

    try {
      updateJob(id, name, description);
      res
        .status(200)
        .json({
          message: "Job updated successfully",
          data: { id, ...req.body },
        });
    } catch {
      res.status(404).json({ error: `Job with id ${id} not found.` });
    }
  } else {
    res.setHeader("Allow", ["PUT"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
