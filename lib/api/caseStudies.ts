import strapiAxios from "./strapiAxios";

export type CaseStudy = {
  id: number;
  title: string;
  shortSummary: string;
  client: {
    brandColor: string;
    logo: {
      url: string;
    };
  };
};

export const getAllCaseStudies = async (): Promise<CaseStudy[]> => {
  try {
    const res = await strapiAxios.get("/case-studies", {
      params: {
        populate: {
          client: {
            populate: {
              logo: true,
            },
          },
        },
      },
    });
    return res.data.data;
  } catch (err) {
    console.error("Failed to fetch case studies", err);
    throw err;
  }
};
