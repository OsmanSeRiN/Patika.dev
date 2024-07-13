import React from 'react'
import { Button, FormControl, FormHelperText, FormLabel, HStack, IconButton, Input, Radio, RadioGroup, Textarea, Wrap, WrapItem } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { RiSave3Line } from 'react-icons/ri'
import { FaListOl } from 'react-icons/fa'

const Form = () => {
    return (
        <form action="">
            <FormControl marginTop={5}>
                <FormLabel>Title</FormLabel>
                <Input type='text'></Input>
            </FormControl>
            <FormControl as={"fieldset"} marginTop={5}>
                <FormLabel>Category</FormLabel>
                <HStack spacing={"20px"}>
                    <IconButton
                        isRound={true}
                        variant='solid'
                        colorScheme='green'
                        aria-label='Done'
                        fontSize='20px'
                        icon={<CheckIcon />}
                    />
                     <IconButton
                        isRound={true}
                        variant='solid'
                        colorScheme='blue'
                        aria-label='Done'
                        fontSize='20px'
                        icon={<CheckIcon />}
                    />
                    <IconButton
                        isRound={true}
                        variant='solid'
                        colorScheme='red'
                        aria-label='Done'
                        fontSize='20px'
                        icon={<CheckIcon />}
                    />
                     <IconButton
                        isRound={true}
                        variant='solid'
                        colorScheme='orange'
                        aria-label='Done'
                        fontSize='20px'
                        icon={<CheckIcon />}
                    />
                </HStack>
            </FormControl>
            <FormControl marginTop={5}>
                <FormLabel>Title</FormLabel>
                <Textarea minH="20vh" resize={"none"}></Textarea>
            </FormControl>
             <Wrap marginTop={7} justify={"right"}>

                <WrapItem>
                    <Button colorScheme="yellow" leftIcon={<FaListOl/>}> Notes </Button>
                </WrapItem>

                <WrapItem>
                    <Button leftIcon={<RiSave3Line></RiSave3Line>} colorScheme="yellow"> Save</Button>
                </WrapItem>

             </Wrap>
        </form>
    )

}

export default Form