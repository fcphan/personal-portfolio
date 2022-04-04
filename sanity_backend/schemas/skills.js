export default {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "skill",
      title: "Skill",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
