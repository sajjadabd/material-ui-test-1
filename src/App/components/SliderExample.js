import React, {useState} from 'react';
import {Slider} from 'antd';
import styled from 'styled-components';

const MySlider = styled(Slider)`
  width : 50vw;
  margin : 4em auto;
`

const SliderExample = () => {


  // const [value , setValue] = useState(30);

  const handleChange = (value) => {
    console.log(value);
  }

  return (
    <>
      <MySlider onChange={handleChange} defaultValue={30} tooltipVisible  />
    </>
  )
}

export default SliderExample
