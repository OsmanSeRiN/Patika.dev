// components/Form.js
import React, { useEffect, useState } from 'react';
import { Button, FormControl, FormLabel, HStack, IconButton, Input, Textarea, Wrap, WrapItem } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { RiSave3Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addItem } from '../../Model/Redux/Reducer/List';

const Form = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [passive,setPassive] = useState("")

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && category && note) {
      dispatch(addItem({
        title: title,
        category: category,
        note: note,
        id: nanoid(5)
      }));


      setTitle("");
      setCategory("");
      setNote("");
    }
  };

  useEffect(()=>{
    if(title !== "" & note !=="" & category !==""){
        setPassive(false)
    }else{
        setPassive(true)
    }
  },[title,note,category])

  const selectCategory = (param) => {
    setCategory(param);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl marginTop={5}>
        <FormLabel>Title</FormLabel>
        <Input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </FormControl>
      <FormControl as={"fieldset"} marginTop={5}>
        <FormLabel>Category</FormLabel>
        <HStack spacing={"20px"}>
          <IconButton
            isRound={true}
            variant='solid'
            colorScheme='green'
            aria-label='Green'
            fontSize='20px'
            icon={category === "green" ? <CheckIcon /> : null}
            onClick={() => selectCategory("green")}
          />
          <IconButton
            isRound={true}
            variant='solid'
            colorScheme='blue'
            aria-label='Blue'
            fontSize='20px'
            icon={category === "blue" ? <CheckIcon /> : null}
            onClick={() => selectCategory("blue")}
          />
          <IconButton
            isRound={true}
            variant='solid'
            colorScheme='red'
            aria-label='Red'
            fontSize='20px'
            icon={category === "red" ? <CheckIcon /> : null}
            onClick={() => selectCategory("red")}
          />
          <IconButton
            isRound={true}
            variant='solid'
            colorScheme='orange'
            aria-label='Orange'
            fontSize='20px'
            icon={category === "orange" ? <CheckIcon /> : null}
            onClick={() => selectCategory("orange")}
          />
        </HStack>
      </FormControl>
      <FormControl marginTop={5}>
        <FormLabel>Note</FormLabel>
        <Textarea
          minH="20vh"
          resize={"none"}
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </FormControl>
      <Wrap marginTop={7} justify={"right"}>

        <WrapItem>
          <Button isDisabled={passive} type='submit' leftIcon={<RiSave3Line />} colorScheme="yellow"> Save</Button>
        </WrapItem>
      </Wrap>
    </form>
  );
};

export default Form;
