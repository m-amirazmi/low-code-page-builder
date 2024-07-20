import { create } from "zustand";
import { EditorStore, GetTotalType, NamedItem, PageState, SectionState } from "./types";

export const getName = (name: string) => {
  return name.split("__")
}

const getTotal = <T extends NamedItem>({ items, name }: GetTotalType<T>) => {
  return items.reduce((acc, current) => {
    const [pageName] = getName(current.name)
    if (pageName === name) return acc + 1
    else return acc
  }, 0)
}

export const useEditorStore = create<EditorStore>()((set, get) => ({
  pages: [],
  getSections: ({ pageName }) => {
    const pages = get().pages
    const page = pages.find(({ name }) => name === pageName)
    if (!page) return []
    return page.sections || []
  },
  createPage: ({ label, name, path }) => set((state) => {
    const findPageSamePath = state.pages.find((page) => page.path === path)
    if (!!findPageSamePath) return { pages: state.pages }

    const findPage = state.pages.find((page) => {
      const [pageName] = getName(page.name)
      return pageName === name
    })
    const page: PageState = {} as PageState

    if (!findPage) {
      page.path = path
      page.label = label
      page.name = `${name}__0`
      page.sections = []
    } else {
      const totalPage = getTotal<PageState>({
        items: state.pages,
        name
      })
      page.name = `${name}__${totalPage}`
      page.label = label
      page.path = path
      page.sections = []
    }

    state.pages.push(page as PageState)

    return { pages: state.pages }
  }),
  createSection: ({ pageName, sectionLabel, sectionName }) => set((state) => {
    const findPage = state.pages.find(({ name }) => name === pageName)

    const page = { ...findPage }

    if (!findPage) {
      page.label = "Homepage"
      page.name = pageName
      page.path = "/"
      page.sections = []
    }

    const copySections = page.sections ? [...page.sections] : []
    const totalSection = getTotal<SectionState>({
      items: page.sections as SectionState[],
      name: sectionName
    })

    const section: SectionState = {
      label: sectionLabel,
      name: `${sectionName}__${totalSection}`,
      settings: []
    }

    copySections.push(section)
    page.sections = copySections

    const removeCurrentPage = state.pages.filter(({ name }) => name !== pageName) || []

    removeCurrentPage.push(page as PageState)
    return { pages: removeCurrentPage }
  })
}))