import strapiAxios from "./strapiAxios";

export type CaseStudy = {
  id: number;
  title: string;
  slug: string;
  shortSummary: string;
  longSummary: string;
  problemSummary: string;
  roleSummary: string;
  resultSummary: string;
  content: string;
  previewMedia?: {
    url: string;
    alternativeText: string;
  };
  resultsMedia?: Array<{
    url: string;
    alternativeText: string;
  }>;
  client: {
    name: string;
    brandColor: string;
    squareLogo: {
      url: string;
    };
    agency?: {
      name: string;
      logo: {
        url: string;
      };
      website: string;
      brandColor: string;
    };
  };
};

export const getAllCaseStudies = async (): Promise<CaseStudy[]> => {
  try {
    const res = await strapiAxios.get("/case-studies", {
      params: {
        populate: {
          previewMedia: true,
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

export const getOneCaseStudy = async (slug: string): Promise<CaseStudy> => {
  try {
    const res = await strapiAxios.get("/case-studies", {
      params: {
        filters: {
          slug: slug,
        },
        populate: {
          previewMedia: true,
          client: {
            populate: {
              squareLogo: true,
              agency: {
                populate: {
                  logo: true,
                },
              },
            },
          },
        },
      },
    });
    return res.data.data[0];
  } catch (err) {
    console.error("Failed to fetch case study", err);
    throw err;
  }
};
