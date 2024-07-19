import { Info } from "@/components/ui/info";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputTextProps } from "./types";
import { useState } from "react";

export const InputText: React.FC<InputTextProps> = ({
  id,
  type,
  label,
  info,
  onGetValue,
  placeholder,
  defaultValue = "",
}) => {
  const [value, setValue] = useState<string>(defaultValue);

  const handleChange = ({
    currentTarget,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(currentTarget.value);
    onGetValue && onGetValue(currentTarget.value);
  };

  return (
    <div data-inputtype={type} id={id} className="flex flex-col gap-1">
      <div className="flex flex-col gap-2">
        <Label htmlFor={id}>{label}</Label>
        <Input
          type="text"
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
