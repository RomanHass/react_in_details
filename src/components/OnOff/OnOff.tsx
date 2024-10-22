type PropsType = {
  on: boolean
  onClick: (setOn: boolean) => void
}

export const OnOff = (props: PropsType) => {
  const onStyle = {
    border: '2px solid black',
    width: '40px',
    backgroundColor: props.on ? 'green' : '',
    color: props.on ? 'white' : 'black'
  };

  const offStyle = {
    border: '2px solid black',
    width: '40px',
    backgroundColor: props.on ? '' : 'red',
    color: props.on ? 'black' : 'white'
  };

  const indicator = {
    width: '15px',
    height: '15px',
    border: '1px solid black',
    borderRadius: '50%',
    backgroundColor: props.on ? 'green' : 'red'
  }

  return (
    <div style={{display: 'flex', gap: '5px'}}>
      <div style={onStyle}
        onClick={() => props.onClick(true)}>ON</div>
      <div style={offStyle}
        onClick={() => props.onClick(false)}>OFF</div>
      <div style={indicator}></div>
    </div>
  )
};