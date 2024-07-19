import { useState } from "react";
import { InputRadioProps } from "./types";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Info } from "@/components/ui/info";

export const InputRadio: React.FC<InputRadioProps> = ({
  id,
  label,
  options,
  type,
  defaultValue = "",
  info,
  onGetValue,
}) => {
  const [value, setValue] = useState<string>(defaultValue);

  const handleChange = (e: string) => {
    setValue(e);
    onGetValue && onGetValue(e);
  };

  return (
    <div data-inputtype={type} id={id} className="flex flex-col gap-1">
      <div className="flex flex-col gap-2">
        <Label htmlFor={id}>{label}</Label>
        <RadioGroup
          value={value}
          onValueChange={handleChange}
          id={id}
          name={id}
        >
          {options.map((opt) => (
            <div key={opt.value} className="flex items-center space-x-2">
              <RadioGroupItem value={opt.value} id={opt.value} />
              <Label htmlFor={opt.value}>{opt.label}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      <Info>{info}</Info>
    </div>
  );
};
