import React from 'react'
import Button from '@material-ui/core/Button';

const ButtonExample = () => {
  return (
    <>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
    </>
  )
}

export default ButtonExample
