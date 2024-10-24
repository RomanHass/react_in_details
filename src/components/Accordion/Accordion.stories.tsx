import { action } from '@storybook/addon-actions';

import { Accordion } from "./Accordion";
import { useState } from "react";

export default {
  title: 'Accorion',
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


const callback = action('accordion was expanded or closed')


export const ActionAccordion = () => <Accordion titleValue="Action accordion" expanded={false} onClick={callback} />

export const ExpandedAccordion = () => {
  return <Accordion titleValue="Expanded accordion" expanded={true}  onClick={() => {}} />
}

export const ClosedAccordion = () => <Accordion titleValue="Closed accordion" expanded={false} onClick={() => {}} />

export const ToggleAccordion = () => {
  const [on, setOn] = useState<boolean>(true);

  return <Accordion titleValue='Toggle accordion' expanded={on} onClick={setOn} />
}