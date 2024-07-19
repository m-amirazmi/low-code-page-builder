import { BaseInputSettingProps } from "../types"

export interface InputNumberProps extends BaseInputSettingProps {
  type: "number"
  defaultValue?: string
  placeholder?: string
}