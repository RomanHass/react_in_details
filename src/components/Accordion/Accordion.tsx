type AccordionPropsType = {
  titleValue: string
  expanded: boolean
  onClick: (expanded: boolean) => void
}

export const Accordion = (props: AccordionPropsType) => {
  return (
    <div>
        <AccordionTitle title={props.titleValue}
          onClick={() => props.onClick(!props.expanded)} />
        {props.expanded && <AccordionBody />}
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