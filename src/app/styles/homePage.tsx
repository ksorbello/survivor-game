'use client'
import { Box,  styled, Tabs,  } from "@mui/material";


export const PageContainer = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: 'column',
    minHeight:'100vh',
    boxSizing: "border-box",
    backgroundColor: theme.palette.background.default
  }));

  export const ContentContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    height:'100%',
  }));

  export const StyledTabs = styled(Tabs)(({ theme }) => ({
    width: '100%',
    height:'100%',
    marginBottom:'40px',
    color: theme.palette.primary.contrastText,
    "&hover":{backgroundColor: theme.palette.action.hover}
  }));


