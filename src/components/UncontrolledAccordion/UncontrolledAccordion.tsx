import { useState } from "react"

type AccordionPropsType = {
  titleValue: string
}

export const UncontrolledAccordion = (props: AccordionPropsType) => {

  const [expanded, setExpanded] = useState<boolean>(true);

  return (
    <div>
        <AccordionTitle title={props.titleValue} onClick={() => setExpanded(!expanded)}/>
        {/* <button onClick={() => setExpanded(!expanded)}>Toggle accordion</button> */}
        {expanded && <AccordionBody />}
      </div>
  );
}

type AccordionTitlePropsType = {
  title: string
  onClick: () => void
}

function AccordionTitle(props:AccordionTitlePropsType) {
  return (
    <h3 onClick={props.onClick}>-- {props.title} --</h3>
  );
}

function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}