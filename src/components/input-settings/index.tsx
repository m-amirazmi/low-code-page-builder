import { InputCheckbox } from "./checkbox";
import { InputNumber } from "./number";
import { InputRadio } from "./radio";
import { InputRange } from "./range";
import { InputSelect } from "./select";
import { InputText } from "./text";
import { InputTextarea } from "./textarea";
import { InputComponentProps, InputSettingsProps } from "./types";

const inputMap: {
  [K in keyof InputComponentProps]: React.FC<InputComponentProps[K]>;
} = {
  checkbox: InputCheckbox,
  number: InputNumber,
  radio: InputRadio,
  text: InputText,
  range: InputRange,
  select: InputSelect,
  textarea: InputTextarea,
};

export const InputSettings: React.FC<InputSettingsProps> = ({ settings }) => {
  return (
    <>
      {settings.map((setting, index) => {
        const Component = inputMap[setting.type as keyof InputComponentProps];
        return <Component key={index} {...(setting as any)} />;
      })}
    </>
  );
};
