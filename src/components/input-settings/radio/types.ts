import { BaseInputSettingProps } from "../types"

export interface InputRadioProps extends BaseInputSettingProps {
  type: "radio"
  defaultValue?: string
  options: {
    value: string
    label: string
  }[]
}