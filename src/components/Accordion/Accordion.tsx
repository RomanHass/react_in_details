type ItemType = {
  title: string;
  value: any;
};

type AccordionPropsType = {
  titleValue: string;
  expanded: boolean;
  onClick: (expanded: boolean) => void;
  items: ItemType[];
  onChange: (value: any) => void;
};

export const Accordion = (props: AccordionPropsType) => {
  return (
    <div>
      <AccordionTitle
        title={props.titleValue}
        onClick={() => props.onClick(!props.expanded)}
      />
      {props.expanded && (
        <AccordionBody items={props.items} onChange={props.onChange} />
      )}
    </div>
  );
};

type AccordionTitlePropsType = {
  title: string;
  onClick: () => void;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3 onClick={props.onClick}>-- {props.title} --</h3>;
}

type AccordionBodyPropsType = {
  items: ItemType[];
  onChange: (value: any) => void;
};

function AccordionBody(props: AccordionBodyPropsType) {
  return (
    <ul>
      {props.items.map((i, index) => {
        return (
          <li onClick={() => props.onChange(i.value)} key={index}>
            {i.title}
          </li>
        );
      })}
    </ul>
  );
}
