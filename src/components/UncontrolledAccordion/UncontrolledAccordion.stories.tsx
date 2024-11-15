import { action } from "@storybook/addon-actions";

import { UncontrolledAccordion } from "./UncontrolledAccordion";

export default {
  title: "UncontrolledAccordion",
  component: UncontrolledAccordion,
};

export const ToggleUncontrolledAccordion = () => {
  return (
    <UncontrolledAccordion titleValue="Users" />
  );
};
