import { action } from '@storybook/addon-actions';

import { Accordion } from "./Accordion";
import { useState } from "react";

export default {
  component: Accordion,
};


const onChangeHandler = action('onClick')

export const CollapsedAccordion = () => {
  return (
    <Accordion titleValue="Collapsed Accordion" 
               expanded={false} 
               onClick={onChangeHandler} />
  );
};

export const ExpandedAccordion = () => {
  return (
    <Accordion titleValue="Opened Accordion" 
               expanded={true} 
               onClick={() => {}} />
  );
};

export const ToggleAccordion = () => {
  const [expanded, setExpanded] = useState(true);
  return (
    <Accordion titleValue="Accordion" 
               expanded={expanded} 
               onClick={() => setExpanded(!expanded)} />
  );
};
