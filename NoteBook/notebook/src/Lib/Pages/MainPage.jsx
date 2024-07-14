import { Center, Box, Button, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import Form from '../Components/Form/Form'
import { MdFormatListBulletedAdd } from 'react-icons/md';
import { TiThList } from 'react-icons/ti';
import Lists from '../Components/List/List';


const MainPage = () => {
  const [page,setPage] = useState("");

  const movetopage = (e) => {
    setPage(e)
  }

  return (
    <>
      <Center >

            <Stack>
            <Button borderRadius={0} isActive={page === "new-note"} colorScheme="orange"  leftIcon={<MdFormatListBulletedAdd />} onClick={()=>{movetopage("new-note")}}>
              New Note
            </Button>

            <Button borderRadius={0}  isActive={page === "list-of-notes" } colorScheme="green" leftIcon={<TiThList />} onClick={()=>{movetopage("list-of-notes")}}>
            <Box alignItems={"left"}>
            Note List
            </Box>
            </Button>
            </Stack>

       { page === "new-note" ? <Box width="40vw" height="70vh" padding={10} borderRadius={25} boxShadow={"xl"} marginTop={"15vh"} bgColor="white">
           <Center><h1 style={{fontSize:"3vh",fontWeight:"600",}}>NEW NOTE</h1></Center>
          <Form/>
        </Box>
        :
        <Box width="40vw" height="70vh" padding={10} borderRadius={25} boxShadow={"xl"} marginTop={"15vh"} bgColor="white">
           <Center><h1 style={{fontSize:"3vh",fontWeight:"600",}}>NOTE LİST</h1></Center>
           <Lists/>
        </Box>}
      </Center>
    </>
  )
}

export default MainPage