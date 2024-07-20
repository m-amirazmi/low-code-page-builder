import { TitleSchema } from "./types";

export const titleSchema: TitleSchema = {
  name: "hero",
  label: "Hero",
  settings: [
    {
      id: "title",
      type: "text",
      label: "Title",
      info: "The title display on the section",
      placeholder: "Enter page title"
    },
    {
      id: "subtitle",
      type: "text",
      label: "Subtitle",
      info: "The subtitle display on the section",
      placeholder: "Enter page subtitle"
    },
  ]
};
