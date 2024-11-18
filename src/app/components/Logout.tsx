import React from 'react'
import { userLogout } from '../actions/actions'
import { Button } from '@mui/material'

function Logout() {
  return (
    <form action={userLogout}>
        <Button type='submit'>
            Logout
        </Button>
    </form>
  )
}

export default Logout
