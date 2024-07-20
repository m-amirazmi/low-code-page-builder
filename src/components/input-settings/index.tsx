import { InputCheckbox } from "./checkbox";
import { InputNumber } from "./number";
import { InputRadio } from "./radio";
import { InputRange } from "./range";
import { InputSelect } from "./select";
import { InputText } from "./text";
import { InputTextarea } from "./textarea";
import { InputSettingsProps, StringTypeToComponentType } from "./types";

const inputMap: StringTypeToComponentType = {
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
        const Component = inputMap[setting.type];
        return <Component key={index} {...setting} />;
      })}
    </>
  );
};
