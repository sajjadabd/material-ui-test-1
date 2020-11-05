import React from 'react';
import styled from 'styled-components';
import ButtonExample from './material/ButtonExample';


const Wrapper = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
  flex-direction : column;
  margin : 1em;
`

const App = () => {
  return (
    <Wrapper>
      <ButtonExample />
    </Wrapper>
  )
}

export default App
