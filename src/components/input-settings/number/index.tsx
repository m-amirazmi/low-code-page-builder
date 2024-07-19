import { useState } from "react";
import { InputNumberProps } from "./types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Info } from "@/components/ui/info";

export const InputNumber: React.FC<InputNumberProps> = ({
  id,
  label,
  type,
  defaultValue = "",
  info,
  placeholder,
  onGetValue,
}) => {
  const [value, setValue] = useState<string>(defaultValue);

  const handleChange = ({
    currentTarget,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const val = currentTarget.value;
    setValue(val);
    onGetValue && onGetValue(val);
  };

  return (
    <div data-inputtype={type} id={id} className="flex flex-col gap-1">
      <div className="flex flex-col gap-2">
        <Label htmlFor={id}>{label}</Label>
        <Input
          type="number"
          inputMode="numeric"
          id={id}
          name={id}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </div>
      <Info>{info}</Info>
    </div>
  );
};
