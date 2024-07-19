import { BaseInputSettingProps } from "../types"

export interface InputRangeProps extends BaseInputSettingProps {
  type: "range"
  min?: number
  max?: number
  step?: number
  unit?: string
  defaultValue?: number
}
