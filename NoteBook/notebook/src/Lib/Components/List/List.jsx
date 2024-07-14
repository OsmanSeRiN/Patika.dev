// Lists.jsx
import React from 'react'
import ListItems from './ListItem.jsx/ListItem'
import { Box, List, ListItem, Wrap, WrapItem } from '@chakra-ui/react'
import Detail from './Detail/Detail'
import ListFilter from './ListFilter/ListFilter'
import { useSelector } from 'react-redux'

const Lists = () => {

  const filterItem = useSelector((state)=> state.notes.filterItems)
  const notes = filterItem

  return (
    <>
      <Wrap marginTop={10}>
        <WrapItem bg={"white"} w={"49%"}>
          <Box borderWidth={1} borderColor={"gray.200"} w={"100%"} padding={5} h={"50vh"} borderRadius={"5%"}>
            <ListFilter />
            <List spacing={2} marginTop={2}>
              {
                notes.map((item, index) => (
                  <ListItem key={index}>
                    <ListItems title={item.title} category={item.category}  note={item.note} />
                  </ListItem>
                ))
              }
            </List>
          </Box>
        </WrapItem>
        <WrapItem bg={"white"} w={"49%"}>
          <Box w={"100%"}>
            <Detail />
          </Box>
        </WrapItem>
      </Wrap>
    </>
  )
}

export default Lists
