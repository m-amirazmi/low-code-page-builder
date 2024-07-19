import { BaseInputSettingProps } from "../types"

export interface InputSelectProps extends BaseInputSettingProps {
  type: "select"
  defaultValue?: string
  options: {
    value: string
    label: string
  }[]
}