import React, {useState} from 'react';
import { Switch } from 'antd';

const SwitchExample = () => {

  const [value , setValue] = useState(false);

  const handleChange = () => {
    setValue(!value);
  }

  return (
    <>
      <Switch checked={value} onChange={handleChange} />
    </>
  )
}

export default SwitchExample
