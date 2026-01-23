import strapiAxios from "./strapiAxios";

type Client = {
  name: string;
  brandColor: string;
  logo: {
    url: string;
  };
  squareLogo: {
    url: string;
  };
};

export const getCaseStudyClient = async (slug: string): Promise<Client> => {
  try {
    const res = await strapiAxios.get("/case-studies", {
      params: {
        filters: {
          slug: slug,
        },
        fields: [],
        populate: {
          client: true,
        },
      },
    });
    return res.data.data[0];
  } catch (err) {
    console.error("Failed to fetch client", err);
    throw err;
  }
};
