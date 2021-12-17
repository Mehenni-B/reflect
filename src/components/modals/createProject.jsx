import React from 'react'
import { 
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    SimpleGrid,
    HStack,
    Flex,
    Text,
    Box
} from '@chakra-ui/react'
import { BiMessageSquareAdd } from 'react-icons/bi'
import { Formik, Form, FieldArray } from 'formik'
import {
    InputControl
} from "formik-chakra-ui"
import { BsFillTrashFill } from 'react-icons/bs'


const initialValues = {
    project: '',
    tachs: [
      {
        name: '',
        duration: '',
        antecedents: '',
      },
      {
        name: '',
        duration: '',
        antecedents: '',
      },
      {
        name: '',
        duration: '',
        antecedents: '',
      },
    ],
}

export default function CreateProject() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button 
                variant={"none"} 
                bg="green.500" 
                px="5" 
                color="white" 
                textTransform={"capitalize"} 
                fontWeight={"normal"} 
                leftIcon={<BiMessageSquareAdd/>}
                onClick={onOpen}
                >
                    new project
            </Button>
            <Modal 
                isOpen={isOpen} 
                onClose={onClose}
                size={"xl"}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create Project</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                        <AddProjectForm onClose={onClose}/>

                    </ModalBody>
                </ModalContent>
            </Modal>
            
        </>
    )
}



const AddProjectForm = ({onClose})=>{
    return(
        <Formik
            initialValues={initialValues}
            onSubmit={(values)=>{
                console.log("values: ",values)
            }}
        >
            {
                ({values})=>(
                    <Form>
                        <InputControl 
                            name="project"
                            placeholder="khalil project"
                            type="text"
                            label="Project Name"
                        />
                        <FieldArray name="tachs">
                            {
                                ({ insert, remove, push })=>(
                                    <SimpleGrid
                                        columns={1}
                                        spacing={4}
                                    >
                                        {
                                            values.tachs.map((tach,index)=>(
                                                <Box mt="1" key={index}>
                                                    <Flex justify={"space-between"} align={"center"} py="1">
                                                        <Text mb='1px'>Tach {index+1}:</Text>
                                                        <Button 
                                                            colorScheme="red" 
                                                            rounded={"sm"} 
                                                            size="sm" 
                                                            onClick={() => remove(index)}
                                                        >
                                                            <BsFillTrashFill/>
                                                        </Button>
                                                    </Flex>
                                                    <HStack>   
                                                            <InputControl 
                                                                name={`tachs.${index}.name`}
                                                                placeholder="tach name"
                                                                type="text"
                                                            />
                                                            <InputControl 
                                                                name={`tachs.${index}.duration`}
                                                                placeholder="tach duration"
                                                                type="text"
                                                            />
                                                            <InputControl 
                                                                name={`tachs.${index}.antecedents`}
                                                                placeholder="tach antecedents"
                                                                type="text"
                                                            /> 
                                                    </HStack>
                                                </Box>
                                            ))
                                        }
                                        <Button 
                                            textTransform={"capitalize"}
                                            colorScheme='blue'
                                            fontWeight={"normal"}
                                            onClick={() => push({ name: '', duration: '', antecedents:'' })}
                                        >add new tach</Button>
                                    </SimpleGrid>
                                )
                            }
                            
                        </FieldArray>
                        
                        <ModalFooter pr='0'>
                            <Button colorScheme='green' mr="3" fontWeight={"medium"} type="submit">Create</Button>
                            <Button
                                variant={"none"}
                                onClick={onClose}
                                border="2px"
                                borderStyle={"solid"}
                                borderColor={"green.300"}
                                color="green.400"
                                fontWeight={"medium"}
                            >
                                Close
                            </Button>
                        </ModalFooter>
                    </Form>
                )
            }
        </Formik>
    )
}