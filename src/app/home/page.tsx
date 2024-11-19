import React from 'react'
import { auth } from '../../../auth'
import { alpha, useTheme} from '@mui/material/styles';
import { redirect } from 'next/navigation'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Logout from '../components/Logout'
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Card, CardContent, Grid2, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

const Home = async () =>  {
    const session = await auth()

    if(!session?.user) return redirect('/')
  return (
<Box sx={{flexGrow:1}}>
    <Grid2 container spacing={2} margin={'2rem'}>
        <Grid2 size={{ xs: 6, md: 11 }}>
            <Typography variant='h5' padding={'.5rem'} sx={{color:'primary.main',}}>{session.user.name}</Typography>
            {(session.user.image && session.user.name) &&   
                <Avatar
                sx={{width:100, height:100}}
                src={session.user.image}
                />}
        </Grid2>
        <Grid2 sx={{paddingLeft:'1rem'}} size={{ xs: 6, md: 1 }}>
            <Logout/>
        </Grid2>
        <Grid2  size={{ md: 12}} sx={{ color: 'primary.main', boxShadow: 1,}} >
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'center',margin:'2rem'}}>
            <Typography variant='h3'>Games</Typography>
            </Box>
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'center',margin:'2rem', width:'100%', color:'primary.contrastText'}}>
                <Accordion sx={{backgroundColor:'primary.light',opacity:.7, color:'primary.contrastText'}}>
                    <AccordionSummary 
                    expandIcon={<ExpandMoreIcon/>}>
                        Season 47
                    </AccordionSummary>
                    <AccordionDetails>
                        <TableContainer>
                            <Table >
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Header1</TableCell>
                                        <TableCell>Header1</TableCell>
                                        <TableCell>Header1</TableCell>
                                        <TableCell>Header1</TableCell>
                                        <TableCell>Header1</TableCell>
                                        <TableCell>Header1</TableCell>
                                        <TableCell>Header1</TableCell>
                                        <TableCell>Header1</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>value</TableCell>
                                        <TableCell>value</TableCell>
                                        <TableCell>value</TableCell>
                                        <TableCell>value</TableCell>   
                                        <TableCell>value</TableCell>
                                        <TableCell>value</TableCell>
                                        <TableCell>value</TableCell>
                                        <TableCell>value</TableCell>                                        
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </AccordionDetails>
                </Accordion>
                </Box>
        </Grid2>
        
    </Grid2>
</Box>


  )
}
export default Home
