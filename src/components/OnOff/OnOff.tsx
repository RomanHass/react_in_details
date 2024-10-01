import { useState } from "react";

export const OnOff = () => {

  const [on, setOn] = useState(true);

  const onStyle = {
    border: '2px solid black',
    width: '40px',
    backgroundColor: on ? 'green' : '',
    color: on ? 'white' : 'black'
  };

  const offStyle = {
    border: '2px solid black',
    width: '40px',
    backgroundColor: on ? '' : 'red',
    color: on ? 'black' : 'white'
  };

  const indicator = {
    width: '15px',
    height: '15px',
    border: '1px solid black',
    borderRadius: '50%',
    backgroundColor: on ? 'green' : 'red'
  }

  return (
    <div style={{display: 'flex', gap: '5px'}}>
      <div onClick={() => setOn(true)} style={onStyle}>ON</div>
      <div onClick={() => setOn(false)} style={offStyle}>OFF</div>
      <div style={indicator}></div>
    </div>
  );
};