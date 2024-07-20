export interface PreviewStore {
  view: "xs" | "sm" | "md" | "lg" | "xl",
  setView: (view: PreviewStore["view"]) => void
}