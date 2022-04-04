import SanityClient from "@sanity/client";
import imageURLBuilder from "@sanity/image-url";

export const client = SanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-04-04",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_API_TOKEN,
});

const builder = imageURLBuilder(client);

export const urlFor = (source) => builder.image(source);
