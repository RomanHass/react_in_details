
import { useState } from 'react';
import './Select.css';

type ItemType = {
  title: string
  value: any
}

type PropsType = {
  title: string
  opened: boolean
  changeSelect: (opened: boolean) => void
  items: Array<ItemType>
}

export const Select = (props: PropsType) => {

  const [titleItem, setTitleItem] = useState<string>(props.title)

  return (
    <div>
      <div className={`select ${props.opened ? 'select-opened' : ''}`}
           onClick={() => props.changeSelect(!props.opened)}>{titleItem}</div>
      <div className={props.opened ? 'open' : 'close'}>
        {props.items.map(item => {
          return (
            <div style={{padding: '5px 0'}} 
                 onClick={() => setTitleItem(item.title)} key={item.value}>
              {item.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}