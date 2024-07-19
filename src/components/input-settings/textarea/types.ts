import { BaseInputSettingProps } from "../types"

export interface InputTextareaProps extends BaseInputSettingProps {
  type: "textarea"
  defaultValue?: string
  placeholder?: string
}
