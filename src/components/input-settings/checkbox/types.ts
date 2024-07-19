import { BaseInputSettingProps } from "../types"

export interface InputCheckboxProps extends BaseInputSettingProps {
  type: "checkbox"
  value?: boolean
  defaultValue?: boolean
}