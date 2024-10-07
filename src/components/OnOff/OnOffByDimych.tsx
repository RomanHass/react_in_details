import { useState } from "react";


export const OnOffByDimych = () => {

  const [on, setOn] = useState<boolean>(true);

  const onStyle = {
    padding: '5px',
    display: 'inline-block',
    width: '30px',
    height: '20px',
    border: '1px solid black',
    backgroundColor: on ? 'green' : 'white',
  };
  const offStyle = {
    padding: '5px',
    marginLeft: '5px',
    display: 'inline-block',
    width: '30px',
    height: '20px',
    border: '1px solid black',
    backgroundColor: on ? 'white': 'red',
  };
  const indicatorStyle = {
    marginLeft: '10px',
    display: 'inline-block',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    border: '1px solid black',
    backgroundColor: on ? 'green' : 'red',
  };

  return (
    <div>
      <div onClick={() => setOn(true)} style={onStyle}>ON</div>
      <div onClick={() => setOn(false)} style={offStyle}>OFF</div>
      <div style={indicatorStyle}></div>
    </div>
  );
};