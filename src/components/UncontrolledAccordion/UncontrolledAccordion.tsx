import { useState } from "react"

type AccordionPropsType = {
  titleValue: string
}

export const UncontrolledAccordion = (props: AccordionPropsType) => {

  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div>
        <AccordionTitle title={props.titleValue} />
        <button onClick={() => setExpanded(!expanded)}>Toggle accordion</button>
        {expanded && <AccordionBody />}
      </div>
  );
}

type AccordionTitlePropsType = {
  title: string
}

function AccordionTitle(props:AccordionTitlePropsType) {
  return (
    <h3 >-- {props.title} --</h3>
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