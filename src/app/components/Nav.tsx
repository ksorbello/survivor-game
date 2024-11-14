'use client'
import * as React from 'react';
import {  Tab, } from '@mui/material';
import { StyledTabs } from '../styles/homePage';

export default function Navigation({handleChange, value} : {handleChange: (event: React.SyntheticEvent, newValue: string) => void , value: string}) {
  return (
 
      <StyledTabs
        value={value}
        onChange={handleChange}
        centered
      >
        <Tab value="one" label="SignUp" color='secondary'/>
        <Tab value="two" label="Create Game" />
        <Tab value="three" label="Login" />
      </StyledTabs>
 
  );
}