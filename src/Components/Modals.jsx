import React, { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input
} from '@chakra-ui/react';

function Modals(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [date, setDate] = useState('');
    const [todo, setTodo] = useState('');
    const [notes, setNotes] = useState('');
    const [location, setLocation] = useState('');
    const [status, setStatus] = useState('');

    const handleTodo = (element) => {
        setTodo(element.target.value);
    }
    const handleNotes = (element) => {
        setNotes(element.target.value);
    }
    const handleStatus = (element) => {
        setStatus(element.target.value);
    }

    const btnSave = () => {
        let temp = [...props.data];
        temp.push({ date: date, todo: todo, location: location, note: notes, status: status });
        props.setData(temp);
        onClose();
    }

    return (
        <div>
            <Button onClick={onOpen} borderRadius="full"><GoPlus /></Button>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Date</FormLabel>
                            <Input ref={initialRef} placeholder='' onChange={(element) => setDate(element.target.value)} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>To Do</FormLabel>
                            <Input placeholder='' onChange={handleTodo} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Location</FormLabel>
                            <Input placeholder='' onChange={(element) => setLocation(element.target.value)} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Notes</FormLabel>
                            <Input placeholder='' onChange={handleNotes} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Status</FormLabel>
                            <Input placeholder='' onChange={handleStatus} />
                        </FormControl>

                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={onClose} mr={4} colorScheme='red'>Cancel</Button>
                        <Button mr={3} colorScheme='whatsapp' variant='outline' onClick={btnSave}>
                            Save
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
}

export default Modals;