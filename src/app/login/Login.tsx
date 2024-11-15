'use client'
import { Box, Button,  TextField, styled } from '@mui/material'
import React from 'react'
import theme from '../theme'
import { userSignIn } from '../actions/actions'

function Login({
    provider,
    ...props
  }: { provider?: string }) {

    const LoginFrame = styled(Box, {
        name:'LoginFrame',
        slot:'root'
    })(({theme}) => ({
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        margin:2
    }))

  return (
        <LoginFrame>

            <TextField variant='standard' label='email'/>
            <TextField variant='standard' label='password'/>
            <Button onClick={async () => {
                await userSignIn(provider)
            }} {...props}>Sign In</Button>
      
        </LoginFrame>
  )
}

export default Login
