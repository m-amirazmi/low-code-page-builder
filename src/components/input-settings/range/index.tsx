import { useState } from "react";
import { InputRangeProps } from "./types";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Info } from "@/components/ui/info";

export const InputRange: React.FC<InputRangeProps> = ({
  id,
  label,
  type,
  defaultValue,
  info,
  max,
  min,
  onGetValue,
  step,
  unit,
}) => {
  const [value, setValue] = useState<number>(defaultValue || min || 0);

  const handleChange = (value: number[]) => {
    onGetValue && onGetValue(value[0]);
    setValue(value[0]);
  };

  return (
    <div data-inputtype={type} id={id} className="flex flex-col gap-1">
      <div className="flex flex-col gap-2">
        <Label htmlFor={id}>{label}</Label>
        <div className="flex items-center gap-2">
          <Slider
            onValueChange={handleChange}
            value={[value]}
            max={max}
            step={step}
            min={min}
            name={id}
          />
          <span>{value}</span>
          <span>{unit}</span>
        </div>
      </div>
      <Info>{info}</Info>
    </div>
  );
};
