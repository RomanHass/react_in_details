import { action } from "@storybook/addon-actions";

import { Accordion } from "./Accordion";
import { useState } from "react";

export default {
  title: "Accorion",
  component: Accordion,
};

// const onChangeHandler = action('onClick')

// export const CollapsedAccordion = () => {
//   return (
//     <Accordion titleValue="Collapsed Accordion"
//                expanded={false}
//                onClick={onChangeHandler} />
//   );
// };

// export const ExpandedAccordion = () => {
//   return (
//     <Accordion titleValue="Opened Accordion"
//                expanded={true}
//                onClick={() => {}} />
//   );
// };

// export const ToggleAccordion = () => {
//   const [expanded, setExpanded] = useState(true);
//   return (
//     <Accordion titleValue="Accordion"
//                expanded={expanded}
//                onClick={() => setExpanded(!expanded)} />
//   );
// };

const callback = action("accordion was expanded or closed");
const onClickcallback = action("some item was clicked");

export const ActionAccordion = () => (
  <Accordion
    titleValue="Action accordion"
    expanded={false}
    onClick={callback}
    items={[]}
    onChange={onClickcallback}
  />
);

export const ExpandedAccordion = () => {
  return (
    <Accordion
      titleValue="Expanded accordion"
      expanded={true}
      onClick={() => {}}
      items={[
        { title: "Roman", value: 1 },
        { title: "Daria", value: 2 },
        { title: "Tatiana", value: 3 },
      ]}
      onChange={onClickcallback}
    />
  );
};

export const ClosedAccordion = () => (
  <Accordion
    titleValue="Closed accordion"
    expanded={false}
    onClick={callback}
    items={[]}
    onChange={onClickcallback}
  />
);

export const ToggleAccordion = () => {
  const [on, setOn] = useState<boolean>(true);

  return (
    <Accordion
      titleValue="Toggle accordion"
      expanded={on}
      onClick={setOn}
      items={[
        { title: "Roman", value: 1 },
        { title: "Daria", value: 2 },
        { title: "Tatiana", value: 3 },
      ]}
      onChange={(value) => alert(`Person with ${value} should be happy`)}
    />
  );
};
