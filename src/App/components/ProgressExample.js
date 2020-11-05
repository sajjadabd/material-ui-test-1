import React, {useState} from 'react';
import { Progress, Button } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin : 1em;
`


const ProgressExample = () => {


  const [percent , setPercent] = useState(0);


  const increase = () => {
    setPercent(percent + 10);
  }


  const decrease = () => {
    setPercent(percent - 10);
  }

  return (
    <>
        <Progress 
        strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
        }} 
        percent={percent} />
        <Wrapper>
          <Button.Group>
            <Button onClick={decrease} icon={<MinusOutlined />} />
            <Button onClick={increase} icon={<PlusOutlined />} />
          </Button.Group>
        </Wrapper>
    </>
  )
}

export default ProgressExample
