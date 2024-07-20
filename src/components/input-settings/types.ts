import { InputCheckboxProps } from "./checkbox/types"
import { InputNumberProps } from "./number/types"
import { InputRadioProps } from "./radio/types"
import { InputRangeProps } from "./range/types"
import { InputSelectProps } from "./select/types"
import { InputTextProps } from "./text/types"
import { InputTextareaProps } from "./textarea/types"

export type GetValueType = string | boolean | number

export interface BaseInputSettingProps {
  id: string
  label: string
  info?: string
  onGetValue?: (value: GetValueType) => void
}

export interface StringTypeToComponentType {
  [key: string]: React.FC<any>
}

export type InputProps =
  | InputCheckboxProps
  | InputNumberProps
  | InputRadioProps
  | InputTextProps
  | InputTextareaProps
  | InputSelectProps
  | InputRangeProps


export interface InputSettingsProps {
  settings: InputProps[]
}
