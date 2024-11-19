import React from 'react'
import { userLogout } from '../actions/actions'
import { Button } from '@mui/material'

function Logout() {
  return (
    <form action={userLogout}>
        <Button variant='contained' type='submit' sx={{margin:'.5rem'}}>
            Logout
        </Button>
    </form>
  )
}

export default Logout
