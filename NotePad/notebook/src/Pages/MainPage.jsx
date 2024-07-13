import { Center, Box } from '@chakra-ui/react'
import React from 'react'
import Form from '../Components/Form/Form'

const MainPage = () => {
  return (
    <>
      <Center >
        <Box width="40vw" height="70vh" padding={10} borderRadius={25} boxShadow={"xl"} marginTop={"15vh"} bgColor="white">
           <Center><h1 style={{fontSize:"3vh",fontWeight:"600",}}>NOTEBOOK</h1></Center>
          <Form/>
        </Box>
      </Center>
    </>
  )
}

export default MainPage