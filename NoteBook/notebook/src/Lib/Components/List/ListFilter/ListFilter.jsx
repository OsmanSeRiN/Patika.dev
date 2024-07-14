import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { filteItems } from '../../../Model/Redux/Reducer/List'

const ListFilter = () => {

  const dispatch = useDispatch()
  const [activeFilter,setActiveFilter] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(filteItems(activeFilter));
      console.log(activeFilter)
    };

    fetchData();
  }, [activeFilter]);



  return (
    <>
     <InputGroup>
       <InputRightElement>
         <SearchIcon></SearchIcon>
       </InputRightElement>
       <Input type='search' value={activeFilter} onChange={(e)=>setActiveFilter(e.target.value)}></Input>
     </InputGroup>
    </>
  )
}

export default ListFilter