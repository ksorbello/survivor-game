'use client'
import * as React from 'react';
import { Box, Container } from "@mui/material";
import Navigation from './components/Nav';
import { redirect } from 'next/navigation';
import Image from "next/image";
import { auth } from '../../auth';





export default  function Home() {
  const [value, setValue] = React.useState("home");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    switch (newValue){
      case 'login':
       return redirect('/login');
      case 'about':
        return redirect('/about');
      case 'home':
        return redirect('/')
      } 
  };
  // need to sort out this client server compoenent shit 

  return (
  <Container >
    <Navigation handleChange={handleChange} value={value}/>
    <Box sx={{height:'50vh', maxHeight:'400px'}}>
      <Image
      src="/survivor.jpeg"
      alt='survivor logo'
      width={100}      // Specify the image width in pixels
      height={100}     // Specify the image height in pixels
      layout="responsive" 
      />
    </Box>
  </Container>
  );
}
