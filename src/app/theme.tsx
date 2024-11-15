'use client';
import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const roboto = Roboto({
    weight: ['300','400', '500', '700'],
    subsets: ['latin'],
    display: 'swap'
})

declare module '@mui/material/styles' {
    interface Components {
        LoginFrame:{}
    }
}

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette:{
    mode:'light',
    primary:{
      main: '#00848f',
      light:'#0098a7',
      dark: '#006164',
      contrastText: '#640300'
    },
    secondary:{
      main: '#0f844a',
      light:'#179556',
      dark: '#006435',
      contrastText: '#093f7b'
    },
    background:{
      default: '#ececec'
    },
    action:{
      hover:'#640300'
    }, 
  },
components:{
  LoginFrame:{
    styleOverrides:{
      root: {width: '250px', height:'200px', borderStyle:'ridge solid', borderRadius: '20px'  }
    }
  }
}
      
 

});

export default theme;
