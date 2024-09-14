import React from 'react'
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
    Text
} from '@chakra-ui/react'
import { InfoIcon } from '@chakra-ui/icons'

export default function ModalBox({ description }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <InfoIcon onClick={onOpen} color={'white'} cursor={'pointer'}/>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg={'gray.800'} border={'1px'} borderColor={'gray.600'}>
                    <ModalHeader>
                        <Text color={'white'}>Description</Text>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text fontSize={'xl'} color={'white'}>{description}</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='red' onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}