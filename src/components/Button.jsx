import React from 'react'
import { Kbd } from '@chakra-ui/react'
import { Button, HStack, Text } from '@chakra-ui/react'

function ButtonCustom(props) {
    return (
        props.type === 'primary' ?
            <Button
                transition={'all .2s ease-in-out'}
                bg={'brand.main'}
                color={'white'}
                _hover={{
                    bg: 'brand.light',
                    color: 'white'
                }}
                {...props}
            >
                <HStack spacing={'2'}>
                    {props.isExpanded ?
                        <Text fontSize={'md'}>{props.btnName}</Text>
                        : props.icon}
                    {props.shortcut &&
                        <Kbd
                            size={'sm'}
                            border={'none'}
                            bg={'brand.light'}
                            textColor={'brand.main'}
                        >
                            {'  '}{props.shortcut}
                        </Kbd>
                    }
                </HStack>
            </Button>
            :
            <Button
                transition={'all .2s ease-in-out'}
                bg={'brand.light'}
                color={'brand.main'}
                _hover={{
                    bg: 'whiteAlpha.900',
                    color: 'brand.main'
                }}
                {...props}
            >
                {props.isExpanded ?
                    props.btnName
                    : props.icon}
            </Button>
    )
}

export default ButtonCustom