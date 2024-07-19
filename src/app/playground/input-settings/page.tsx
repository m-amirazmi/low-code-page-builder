"use client";

import { InputCheckbox } from "@/components/input-settings/checkbox";
import { InputNumber } from "@/components/input-settings/number";
import { InputRadio } from "@/components/input-settings/radio";
import { InputRange } from "@/components/input-settings/range/index";
import { InputSelect } from "@/components/input-settings/select";
import { InputText } from "@/components/input-settings/text";
import { InputTextarea } from "@/components/input-settings/textarea";
import { GetValueType } from "@/components/input-settings/types";

export default function PlaygroundInputSettings() {
  const handleGetValue = (type: string, value: GetValueType) => {
    console.log(`${type} => ${value}`);
  };

  return (
    <Layout>
      <Container type="Checkbox">
        <InputCheckbox
          type="checkbox"
          id="checkbox-1"
          label="Checkbox 1"
          onGetValue={(value) => handleGetValue("Checkbox", value)}
          info="You agree to our Terms of Service and Privacy Policy."
        />
        <InputCheckbox
          type="checkbox"
          id="checkbox-2"
          label="Checkbox 2"
          onGetValue={(value) => handleGetValue("Checkbox", value)}
        />
        <InputCheckbox
          type="checkbox"
          id="checkbox-3"
          label="Is this true?"
          defaultValue={true}
          onGetValue={(value) => handleGetValue("Checkbox", value)}
        />
      </Container>
      <Container type="Text">
        <InputText
          type="text"
          id="text-1"
          label="Text 1"
          onGetValue={(value) => handleGetValue("Text", value)}
          info="Add some padding to the box."
        />
        <InputText
          type="text"
          id="text-2"
          label="Text 2"
          placeholder="This is placeholder"
          onGetValue={(value) => handleGetValue("Text", value)}
        />
        <InputText
          type="text"
          id="text-2"
          label="Text 2"
          placeholder="This is placeholder"
          defaultValue="This is default"
          info="Add some padding to the box."
          onGetValue={(value) => handleGetValue("Text", value)}
        />
      </Container>
      <Container type="Number">
        <InputNumber
          type="number"
          id="number-1"
          label="Number 1"
          onGetValue={(value) => handleGetValue("Number", value)}
          info="Add some padding to the box."
        />
        <InputNumber
          type="number"
          id="number-2"
          label="Number 2"
          placeholder="this is the numberx"
          onGetValue={(value) => handleGetValue("Number", value)}
        />
        <InputNumber
          type="number"
          id="number-3"
          label="Number 3"
          defaultValue="9"
          onGetValue={(value) => handleGetValue("Number", value)}
        />
      </Container>
      <Container type="Radio">
        <InputRadio
          type="radio"
          id="radio-1"
          label="Radio 1"
          onGetValue={(value) => handleGetValue("Radio", value)}
          options={[
            { value: "opt1", label: "Option 1" },
            { value: "opt2", label: "Option 2" },
            { value: "opt3", label: "Option 3" },
          ]}
          info="Add some padding to the box."
          defaultValue="opt2"
        />
      </Container>
      <Container type="Select">
        <InputSelect
          type="select"
          id="select-1"
          label="Select 1"
          onGetValue={(value) => handleGetValue("Select", value)}
          options={[
            { value: "opt1", label: "Option 1" },
            { value: "opt2", label: "Option 2" },
            { value: "opt3", label: "Option 3" },
          ]}
          info="Add some padding to the box."
          defaultValue="opt3"
        />
      </Container>
      <Container type="Range">
        <InputRange
          type="range"
          id="range-1"
          label="Range 1"
          onGetValue={(value) => handleGetValue("Range", value)}
          info="Add some padding to the box."
          min={10}
          max={100}
        />
      </Container>
      <Container type="Textarea">
        <InputTextarea
          type="textarea"
          id="textarea-1"
          label="Textarea 1"
          onGetValue={(value) => handleGetValue("Textarea", value)}
          info="Add some padding to the box."
          defaultValue="Add new text here"
          placeholder="This is the placeholder"
        />
      </Container>
    </Layout>
  );
}

const Container: React.FC<{
  children: React.ReactNode;
  type: string;
}> = ({ children, type }) => {
  return (
    <>
      <p className="text-xl font-semibold">{type}</p>
      {children}
    </>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="p-8 flex flex-col gap-3">
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
};
