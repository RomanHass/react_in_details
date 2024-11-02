import { useState } from "react";
import { Select } from "./Select";

export default {
  title: 'Select',
  component: Select,
};


export const ToggleSelect = () => {
  const [on, setOn] = useState<boolean>(false)

  return (
    <Select title="Select Title" 
            opened={on}
            changeSelect={setOn} 
            items={[
                {title: 'Bread', value: 1},
                {title: 'Milk', value: 2},
                {title: 'Sugar', value: 3},
                {title: 'Orange', value: 4},
          ]}
    />
  );
}