import React from 'react';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2';

const ButtonExample = () => {
  
  const handleClick = () => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'You Clicked',
      showConfirmButton: false,
      timer: 1500
    })
  }
  
  return (
    <>
      <Button 
      onClick={handleClick}
      type="primary" 
      icon={<DownloadOutlined />} 
      size={'large'}>
        Download
      </Button>
    </>
  )
}

export default ButtonExample
