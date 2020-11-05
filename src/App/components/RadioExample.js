import React , {useState} from 'react';
import { Radio , Button , message } from 'antd';
import styled from 'styled-components';
import Swal from 'sweetalert2';


message.config({
  top: 200,
  duration: 2,
  maxCount: 3,
});

const MyRadio = styled(Radio)`
  display: block;
  height: 30px;
  line-height: 30px;
`

const MyButton = styled(Button)`
  margin : 1em;
`

const RadioExample = () => {

  const [value , setValue] = useState(1);

  const radioStyle = {
    display: 'block',
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const buttonClick = () => {
    message.success('value : ' + value);
  }

  return (
    <>
      <Radio.Group onChange={handleChange} value={value}>
        <MyRadio value={'Milk'}>Milk</MyRadio>
        <MyRadio value={'Water'}>Water</MyRadio>
        <MyRadio value={'Honey'}>Honey</MyRadio>
        <MyRadio value={'Wine'}>Wine</MyRadio>
      </Radio.Group>
      <MyButton onClick={buttonClick} type="primary">Primary Button</MyButton>
    </>
  )
}

export default RadioExample;
