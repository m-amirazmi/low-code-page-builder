import { BaseInputSettingProps } from "../types"

export interface InputTextProps extends BaseInputSettingProps {
  type: "text"
  defaultValue?: string
  placeholder?: string
}