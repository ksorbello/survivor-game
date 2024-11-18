import React from 'react'
import { PageContainer} from '@toolpad/core/PageContainer'
// import { auth } from '../../../auth'
import Login from './Login'
import { Container } from '@mui/material'

async function Page() {
    // const session = await auth()
  return (
    <Container sx={{
     display:'flex',
     height:'100vh',
     width:'50%', 
     flexDirection:'column', 
     alignItems:'center',
     justifyContent:'center',
     marginTop:0,
     paddingTop:0
     }}>
        <Login/>
    </Container>
  )
}

export default Page
