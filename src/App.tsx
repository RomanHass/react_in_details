import "./App.css";
import { Accordion } from "./components/Accordion/Accordion";
import { UncontrolledOnOff } from "./components/OnOff/UncontrolledOnOff";
import { OnOffByDimych } from "./components/OnOff/OnOffByDimych";
import { Rating, RatingValueType } from "./components/Rating/Rating";
import { UncontrolledAccordion } from "./components/UncontrolledAccordion/UncontrolledAccordion";
import { UncontrolledRating } from "./components/UncontrolledRating/UncontrolledRating";
import { useState } from "react";
import { OnOff } from "./components/OnOff/OnOff";

function App() {
  console.log("App rendering");

  const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  const [expanded, setExpanded] = useState<boolean>(true);
  const [on, setOn] = useState<boolean>(true);

  return (
    <div className="App">
      <div style={{ margin: "10px", border: "1px solid red" }}>
        <h2>Controlled Accordion:</h2>
        {/* <Accordion titleValue="Menu" expanded={true} /> */}

        <Accordion
          titleValue="Users"
          expanded={expanded}
          onClick={setExpanded}
          items={[]}
          onChange={function (value: any): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
      <hr />

      <div style={{ margin: "10px", border: "1px solid red" }}>
        <h2>Uncontrolled Accordion:</h2>
        <UncontrolledAccordion titleValue="Menu" />
        <UncontrolledAccordion titleValue="Users" />
      </div>
      <hr />

      <div style={{ margin: "10px", border: "1px solid blue" }}>
        <h2>Contolled rating:</h2>
        <Rating value={ratingValue} onClick={setRatingValue} />
        {/* <Rating value={1} />
        <Rating value={2} />
        <Rating value={3} />
        <Rating value={4} />
        <Rating value={5} /> */}
      </div>

      <hr />
      <div style={{ margin: "10px", border: "1px solid blue" }}>
        <h2>Uncontrolled rating:</h2>
        <UncontrolledRating />
      </div>
      <hr />

      <div style={{ margin: "10px", border: "1px solid red" }}>
        <h2>Contolled ON OFF:</h2>
        <OnOff on={on} onClick={setOn} />
      </div>
      <hr />
      <div style={{ margin: "10px", border: "1px solid blue" }}>
        <h2>Uncontrolled ON OFF:</h2>
        <UncontrolledOnOff />
        {/* <OnOffByDimych /> */}
      </div>
    </div>
  );
}

type PageTitleProps = {
  title: string;
};

function PageTitle(props: PageTitleProps) {
  return <h3>{props.title}</h3>;
}

export default App;
