
'use client'
import * as React from 'react';
import { Container } from "@mui/material";
import Navigation from './components/Nav';




export default function Home() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
  <Container>
    <Navigation handleChange={handleChange} value={value}/>
  </Container>
  );
}
