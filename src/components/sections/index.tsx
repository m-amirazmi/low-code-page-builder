import { getName } from "@/store/editor-store";
import { Title } from "./title";
import { SectionsProps, StringTypeToSectionType } from "./types";

const sectionMap: StringTypeToSectionType = {
  title: Title,
};

export const Sections: React.FC<SectionsProps> = ({ sections }) => {
  return sections.map((section, index) => {
    const [name] = getName(section.name);
    const Component = sectionMap[name];
    return <Component key={index} {...section} />;
  });
};
