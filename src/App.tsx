import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import { OnOff } from './components/OnOff/OnOff';
import { Rating } from './components/Rating/Rating';


function App() {
  console.log('App rendering')
  return (
    <div className="App">
      <Accordion titleValue="Menu" expanded={true} />
      <Accordion titleValue="Users" expanded={false} />
      <hr />
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
      <hr />
      <OnOff/>
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
