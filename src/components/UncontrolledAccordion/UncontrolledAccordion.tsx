import { useReducer, useState } from "react"
import { reducer } from "./reducer";

type AccordionPropsType = {
  titleValue: string
}


export const UncontrolledAccordion = (props: AccordionPropsType) => {
  console.log('UncontrolledAccordion rendering');

  // const [expanded, setExpanded] = useState<boolean>(true);

  const [state, dispatch] = useReducer(reducer, {expanded: true});

  // const onClickHandler = () => setExpanded(!expanded)
  const onClickHandler = () => {
    dispatch({type: 'TOGGLE-EXPANDED'})
}

  return (
    <div>
        <AccordionTitle title={props.titleValue} onClick={onClickHandler}/>
        {/* <button onClick={() => setExpanded(!expanded)}>Toggle accordion</button> */}
        {state.expanded && <AccordionBody />}
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