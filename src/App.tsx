import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import { OnOff } from './components/OnOff/UncontrolledOnOff';
import { OnOffByDimych } from './components/OnOff/OnOffByDimych';
import { Rating } from './components/Rating/Rating';
import { UncontrolledAccordion } from './components/UncontrolledAccordion/UncontrolledAccordion';
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating';


function App() {
  console.log('App rendering')
  return (
    <div className="App">
      <div style={{margin: '10px', border: '1px solid red'}}>
        <h2>Controlled Accordion:</h2>
        <Accordion titleValue="Menu" expanded={true} />
        <Accordion titleValue="Users" expanded={false} />
      </div>
      <hr />

      <div style={{margin: '10px', border: '1px solid red'}}>
        <h2>Uncontrolled Accordion:</h2>
        <UncontrolledAccordion titleValue="Menu" />
        <UncontrolledAccordion titleValue="Users" />
      </div>
      <hr />

      <div style={{margin: '10px', border: '1px solid blue'}}>
        <h2>Contolled rating:</h2>
        <Rating value={0} />
        <Rating value={1} />
        <Rating value={2} />
        <Rating value={3} />
        <Rating value={4} />
        <Rating value={5} />
      </div>

      <hr />
      <div style={{margin: '10px', border: '1px solid blue'}}>
        <h2>Uncontrolled rating:</h2>
        <UncontrolledRating />
      </div>
      <hr />
      <OnOff/>
      {/* <OnOffByDimych /> */}
    </div>
  );
}

type PageTitleProps = {
  title: string
}

function PageTitle(props: PageTitleProps) {
  return <h3>{props.title}</h3>
}

export default App;
