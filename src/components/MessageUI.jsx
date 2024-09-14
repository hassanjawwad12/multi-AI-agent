import { HStack, Text, Flex, Icon } from '@chakra-ui/react'
import React from 'react'
import { PiRobotBold } from 'react-icons/pi'
import {FaRegUserCircle} from 'react-icons/fa'

function MessageUI(props) {
    return (
        props.user === 'bot' ?
        <Flex
            w={'full'}
            align={'flex-start'}
            justify={'flex-start'}
            key={props.message + props.user + (new Date()).toString()}
        >
                <HStack
                    bg={'brand.main'}
                    color={'brand.light'}
                    paddingX={'3'}
                    paddingY={'4'}
                    rounded={'lg'}
                    borderBottomLeftRadius={'none'}
                    align={'flex-start'}
                    justify={'flex-start'}
                    spacing={'4'}
                    textWrap={'wrap'}
                >
                    <Icon as={PiRobotBold} boxSize={'6'} />
                    <Text
                     as={'p'} 
                     fontSize={'lg'}
                     textWrap={'wrap'}
                    >
                        {props.message}
                    </Text>
                </HStack>
        </Flex>
        :
        <Flex
            w={'full'}
            align={'flex-end'}
            justify={'flex-end'}
            key={props.message + props.user + (new Date()).toString()}
        >
                <HStack
                    bg={'brand.light'}
                    color={'brand.main'}
                    paddingX={'3'}
                    paddingY={'2'}
                    rounded={'lg'}
                    border={'1px'}
                    borderColor={'brand.main'}
                    borderBottomRightRadius={'none'}
                    spacing={'4'}
                    {...props}
                >
                    <Text as={'p'} fontSize={'lg'}>{props.message}</Text>
                    <Icon as={FaRegUserCircle} boxSize={'6'} />
                </HStack>
        </Flex>
    )
}

export default MessageUI