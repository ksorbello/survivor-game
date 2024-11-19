'use client'
import { Box, Button, Grid2, IconButton, Modal, TextField } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

function Games() {
    const [open, setOpen] = useState(false)

    const handleClose = (() => {
        setOpen(!open)
    })
  return (
    <Grid2 container spacing={2}>
        <Grid2 size={{ md: 12}} sx={{display:'flex',justifyContent:'right', margin:'2rem'}}>
            <Button variant='contained' onClick={() => setOpen(true)}>Create Game</Button>
        </Grid2>
        <Modal
        open={open}
        onClose={handleClose}
        >
        

            <Box sx={{display:'flex', alignItems: 'center', justifyContent:'center', borderRadius:'5%', backgroundColor:'secondary.dark', height: '50%', width: '50%' ,margin:'5rem', opacity:.3}}>
                <Box sx={{display:'flex', alignContent:'right'}}>
                    <IconButton onClick={() => setOpen(false)}>
                    <CloseIcon/>
                    </IconButton>
                </Box>
            <form>
                <TextField variant='outlined' label="Name" sx={{backgroundColor:'secondary.contrastText'}}></TextField>

            </form> 
            </Box>

          
        </Modal>
    </Grid2>
  )
}

export default Games
