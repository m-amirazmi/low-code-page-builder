import { SectionState } from "@/store/editor-store/types";

export interface SectionsProps {
  sections: SectionState[]
}

export interface StringTypeToSectionType {
  [key: string]: React.FC<any>
}