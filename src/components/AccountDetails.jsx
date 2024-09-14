import { Divider, HStack, Heading, Text, VStack, Icon, Box } from '@chakra-ui/react'
import React from 'react'
import ButtonCustom from './Button'
import { FaRegUserCircle } from 'react-icons/fa'

export default function AccountDetails(props) {
    return (
        <VStack
            w={'full'}
            h={'full'}
            align={'flex-start'}
            spacing={'4'}
        >
            <HStack spacing={'4'}>
            <Icon as={FaRegUserCircle} color={'black'} boxSize={'6'} />
                <Heading
                    as={'h1'}
                    size={['sm', 'lg', 'xl', 'xl']}
                    color={'brand.text'}
                >
                    Account Details
                </Heading>
            </HStack>
            <Divider orientation='horizontal' />
            <VStack
                w={'full'}
                h={'full'}
                align={'flex-start'}
                spacing={'6'}
            >
                <HStack spacing={'4'}>
                    <Heading
                        as={'h2'}
                        size={['sm', 'md', 'lg', 'lg']}
                        color={'black'}
                    >
                        Name :
                    </Heading>
                    <Text
                        as={'p'}
                        fontSize={'lg'}
                        color={'black'}
                    >
                        {props.name}
                    </Text>
                </HStack>
                <HStack spacing={'4'}>
                    <Heading
                        as={'h2'}
                        size={['sm', 'md', 'lg', 'lg']}
                        color={'black'}
                    >
                        Email :
                    </Heading>
                    <Text
                        as={'p'}
                        fontSize={'lg'}
                        color={'black'}
                    >
                        {props.email}
                    </Text>
                </HStack>
                <HStack spacing={'4'}>
                    <Heading
                        as={'h2'}
                        size={['sm', 'md', 'lg', 'lg']}
                        color={'black'}
                    >
                        Number of Staff :
                    </Heading>
                    <Text
                        as={'p'}
                        fontSize={'lg'}
                        color={'black'}
                    >
                        {props.staff}
                    </Text>
                </HStack>
                {/* <Divider orientation='horizontal' /> */}
                <Box
                    w={'full'}
                    h='2'
                />
            </VStack>
        </VStack>
    )
}
