import { Checkbox } from "@/components/ui/checkbox";
import { Info } from "@/components/ui/info";
import { Label } from "@/components/ui/label";
import { CheckedState } from "@radix-ui/react-checkbox";
import { InputCheckboxProps } from "./types";
import { useState } from "react";

export const InputCheckbox: React.FC<InputCheckboxProps> = ({
  id,
  label,
  type,
  info,
  onGetValue,
  defaultValue = false,
}) => {
  const [value, setValue] = useState<boolean>(defaultValue);

  const handleChange = (e: CheckedState) => {
    setValue(e as boolean);
    if (!onGetValue) return;
    onGetValue(e);
  };

  return (
    <div
      data-inputtype={type}
      id={id}
      className="flex flex-row items-start gap-2"
    >
      <Checkbox
        className="block"
        id={id}
        name={id}
        checked={value}
        onCheckedChange={handleChange}
      />
      <div className="mt-[1px] flex flex-col gap-1">
        <Label className="block" htmlFor={id}>
          {label}
        </Label>
        <Info>{info}</Info>
      </div>
    </div>
  );
};
