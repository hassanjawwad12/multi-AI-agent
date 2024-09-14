import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import './index.css'
import { MetaMaskProvider } from "@metamask/sdk-react";

const theme = extendTheme({
  colors: {
    brand: {
      main: '#37AEFF',
      sidebar: '#171717',
      light: '#ACACAC',
      grayLight: '#E9E9E9',
      text: '#000033'
    }
  },
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <MetaMaskProvider
            debug={false}
            sdkOptions={{
                dappMetadata: {
                    name: "Build-AI",
                    url: window.location.href,
                },
            }}
        >
      <App />
      </MetaMaskProvider>
  </ChakraProvider>
)
