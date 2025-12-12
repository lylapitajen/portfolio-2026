import axios from "axios";
// export default function strapiAxios() {
//   axios.create({
//     baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
//     timeout: 10000,
//   });
// }

const strapiAxios = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api`,
  headers: {
    Authorization: `Bearer ${process.env.PROD_STRAPI_API_KEY}`,
  },
});

export default strapiAxios;
