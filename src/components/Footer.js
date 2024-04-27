import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
   <Box mt='80px' bgcolor={'#fff'}>
    <Stack gap='40px' alignItems='center' px='40px' pt='24px' sx={{justifyContent: 'center'}} flexWrap={'wrap'}>
      <img src={Logo} alt="logo" style={{width: '200px', height: '41px'}}  />
    </Stack>
    <Typography variant='h5' sx={{fontSize: {lg: '28px', xs: '20px'}}} mt='41px' textAlign={'center'} pb={'40px'}>
      Made with ❤️ by Muhammad Rafiq
    </Typography>
   </Box>
  )
}

export default Footer