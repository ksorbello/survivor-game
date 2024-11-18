import * as React from 'react';
import {  Tab, } from '@mui/material';
import { StyledTabs } from '../styles/homePage';
import { auth } from '../../../auth';

export default function Navigation({handleChange, value} : {handleChange: (event: React.SyntheticEvent, newValue: string) => void , value: string}) {
  return (
      <StyledTabs
        value={value}
        onChange={handleChange}
        centered
      >
        <Tab value="home" label="Home" color='secondary' />
        <Tab value="about" label="About" color='secondary'/>
        <Tab value="two" label="Create Game" color='secondary' />
        <Tab value="login" label="Login"  color='secondary'/>
      </StyledTabs>
 
  );
}