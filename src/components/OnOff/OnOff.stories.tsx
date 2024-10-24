import { action } from '@storybook/addon-actions';
import { useState } from 'react';
import { OnOff } from './OnOff';

export default {
  title: 'OnOff',
  component: OnOff,
};

export const ActionMode = () => <OnOff on={true} onClick={action('on or off clicked')} />

export const OnMode = () => <OnOff on={true} onClick={() => {}} />

export const OffMode = () => <OnOff on={false} onClick={() => {}} />

export const ModeChanging = () => {
  const [on, setOn] = useState<boolean>(true);
  return <OnOff on={on} onClick={setOn} />
}