import strapiAxios from "./strapiAxios";

export type Testimonial = {
  id: number;
  content: string;
  author: string;
  authorJobTitle: string;
  client: {
    name: string;
    brandColor: string;
    squareLogo: {
      url: string;
    };
  };
};

export const getAllTestimonials = async (): Promise<Testimonial[]> => {
  try {
    const res = await strapiAxios.get("/testimonials", {
      params: {
        populate: {
          client: {
            populate: {
              squareLogo: true,
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
