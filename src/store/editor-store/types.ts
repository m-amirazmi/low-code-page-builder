import { InputProps } from "@/components/input-settings/types"

export interface SectionState {
  id?: string
  name: string
  label: string
  settings?: InputProps[]
}

export interface PageState {
  id?: string
  name: string
  path: string
  label: string
  sections?: SectionState[]
}

export interface EditorStore {
  pages: PageState[]
  createSection: ({
    pageName,
    sectionName,
    sectionLabel,
  }: {
    pageName: string,
    sectionName: string
    sectionLabel: string
  }) => void
  getSections: ({
    pageName
  }: {
    pageName: string
  }) => SectionState[] | []
  createPage: ({
    name,
    label,
    path
  }: {
    name: string
    label: string
    path: string
  }) => void
}


export interface GetTotalType<T> {
  items: T[]
  name: string
}

export interface NamedItem {
  name: string
}
