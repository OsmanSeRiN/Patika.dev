import { DeleteIcon } from '@chakra-ui/icons'
import { Box, Button, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteItem, selectedItem } from '../../../Model/Redux/Reducer/List'

const ListItems = ({title,category,note}) => {

  const dispatch = useDispatch();

  const selectedItems = async() =>{
     await dispatch(selectedItem(
      {
        title:title,
        category:category,
        note:note,
      }
     ))
  }

  const deleteItems = async() =>{
    await dispatch(deleteItem(title))
  }

  return (
    <>
      <Box cursor={"pointer"} _hover={{bg:"#F4F4F4"}} p={1} borderRadius={"5"} onClick={()=>{selectedItems()}}>
         <Wrap align={"center"}>
            <WrapItem w={"10%"}>
              <Box w={5} h={5} bgColor={category} borderRadius={"100%"}>

              </Box>
            </WrapItem>
            <WrapItem fontWeight={500} w={"70%"}>
              {title}
            </WrapItem>
            <WrapItem  w={"10%"} _hover={{bg:"#F4F4F4"}}>
              <Button borderWidth={0} borderRadius={"50%"} alignItems={"center"} colorScheme='red' variant={"outline"} onClick={()=>{deleteItems()}} >
              <DeleteIcon/>
              </Button>
            </WrapItem>
         </Wrap>
      </Box>
    </>
  )
}

export default ListItems