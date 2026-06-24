import strapiAxios from "./strapiAxios";

export type Experience = {
  id: number;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string | null;
  description: string;
};

export const getAllExperiences = async (): Promise<Experience[]> => {
  try {
    const res = await strapiAxios.get("/experiences", {
      params: { "sort[0]": "startDate:desc" },
    });
    return res.data.data;
  } catch (err) {
    console.error("Failed to fetch experiences", err);
    throw err;
  }
};
