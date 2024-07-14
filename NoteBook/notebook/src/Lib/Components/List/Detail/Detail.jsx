import { Box, Center } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Detail = () => {

    const selectedItems = useSelector((state) => state.notes.selectedItem)

    if(selectedItems.note === ""){
        return(
            <Center>
            Lütfen bir öğe seçin
           </Center>
        )
  }

    return (
        <>
          <Box>
            <Center fontWeight={600}>
              {selectedItems.title}
            </Center>
            <Box padding={5} marginTop={5} boxShadow={"inner"} h={"45vh"} fontSize={14}>
              {selectedItems.note}
            </Box>
          </Box>
        </>
      )

}

export default Detail