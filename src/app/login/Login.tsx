'use client'
import { Box, Button,  ButtonGroup, styled } from '@mui/material'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import { userLogin } from '../actions/actions'
import TilePictureComponent, { ImageData } from '../components/TileImages';


function Login({
    provider,
    ...props
  }: { provider?: string }) {

   const LoginPageContainer =   styled(Box)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        padding: 0,      // Remove padding
        margin: 0, 
      }));

      const FormContainer = styled(Box)(({ theme }) => ({
        backgroundColor: `${theme.palette.primary.main}80`, // 80 for 50% transparency
        borderRadius: '16px',
        padding: '16px',
        width: '300px', 
        height: '200px', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '40px',
        justifyContent: 'center',
        boxShadow: theme.shadows[3], // Add shadow for depth
        boxSizing: "border-box",

      }));

      const StyledForm = styled('form')(() => ({
        display: 'flex',
        flexDirection: 'column',
        gap: '16px', 
        width: '100%',
        alignItems: 'center',
      }));

      const TileContainer = styled(Box)({
        width: "75%",
        height: "60vh", 
        display:'flex',
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "40px",
        margin: 0,        // Remove any margin
        padding: 0,
    });

      const images : ImageData[] = [
        {src: '/girldoingsling.png', alt:'girl doing sling'},
        {src: '/highFive.png', alt:'high five pic'},
        {src: '/polePic.png', alt:'pole competition'},
        {src: '/sol.webp', alt:'sol'},
        {src: '/ughoh.jpeg', alt:'uh oh'},
        {src: '/gabeCaroline.jpg', alt:'gabe and caroline'},
        {src: '/meanie.jpg', alt:'girl bein mean'},
        {src: '/shawna.webp', alt:'rob vote out shawna'},
        {src: '/rupertYell.jpg', alt:'triumphant rupert'},

    ]

  return (
    <LoginPageContainer>
        <TileContainer>
        <TilePictureComponent images={images}/>
        </TileContainer>
        <FormContainer>
        <StyledForm action={userLogin}>
            <ButtonGroup        
            orientation="vertical"
            aria-label="Vertical button group"
            variant="contained"
            >
                <Button startIcon={<GitHubIcon/>} type='submit' name='action' value='github'  {...props}>Sign In With Github</Button>
                <Button startIcon={<GoogleIcon/>}  type='submit' name='action' value='google' {...props}>Sign In With Google</Button>
            
            </ButtonGroup>
        </StyledForm>

        </FormContainer>
    </LoginPageContainer>
  )
}

export default Login
