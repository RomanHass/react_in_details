import { action } from '@storybook/addon-actions';
import { ChangeEvent, useRef, useState } from 'react';

export default {
  title: 'input',
  // component: OnOff,
};

export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const actualValue = e.currentTarget.value
    setValue(actualValue)}
  

  return <><input onChange={onChange} /> - {value}</>
  
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
  const [value, setValue] = useState('')

  const inputRef = useRef<HTMLInputElement>(null)
  
  const save = () => {
    if (inputRef.current) {
      setValue(inputRef.current.value)
    } 
  }

  return <><input ref={inputRef} /><button onClick={save}>save</button> - actual value: {value}</> 
  
}

export const ControlledInputWithFixedValue = () => <input value='controlled input' />
