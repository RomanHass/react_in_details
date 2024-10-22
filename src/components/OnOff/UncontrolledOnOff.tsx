import { useState } from "react";

export const UncontrolledOnOff = () => {

  const [on, setOn] = useState(true);

  // console.log('UncontrolledOnOff');

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

  const onClicked = () => setOn(true)
  const offClicked = () => setOn(false)

  return (
    <div style={{display: 'flex', gap: '5px'}}>
      <div onClick={onClicked} style={onStyle}>ON</div>
      <div onClick={offClicked} style={offStyle}>OFF</div>
      <div style={indicator}></div>
    </div>
  );
};