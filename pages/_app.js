import MainContainer from "../components/MainContainer"
import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </ChakraProvider>
  )
}

export default MyApp
