import React from 'react'
import { Button, HStack, Heading, Icon, Text, VStack } from '@chakra-ui/react'
import {BiEditAlt} from 'react-icons/bi'
import {MdDeleteOutline} from 'react-icons/md'
import {BiMessageDetail} from 'react-icons/bi'
import IconButton from '../IconButton'


function HistoryButton(props) {
    return (
        <HStack
            border={'1px'}
            borderColor={'whiteAlpha.400'}
            bg={'whiteAlpha.200'}
            transition={'all .2s ease-in-out'}
            _hover={{
                bg: 'whiteAlpha.400',
                color: 'brand.main'
            }}
            paddingY={'2'}
            paddingX={'3'}
            cursor={'pointer'}
            rounded={'lg'}
            align={'center'}
            spacing={props.isExpanded ? '6' : '0'}
            {...props}
        >
            <Heading 
                w={'full'}
                as="p"
                size={["sm"]}
                color="white"
                isTruncated={true}
                {...props}
            >
                {props.isExpanded ? 
                props.historyTitle : null}
            </Heading>
            {props.isExpanded ?
            <HStack transition={'all .2s ease-in-out'}>
            <Button
                padding={'0'}
                bg={'transparent'}
                color={'white'}
                _hover={{
                    bg: 'whiteAlpha.700',
                    color: 'brand.main'
                }}
                {...props}
            >
                <BiEditAlt size={'20'}/>
            </Button>
            <Button
                p={'0'}
                bg={'transparent'}
                color={'white'}
                _hover={{
                    bg: 'whiteAlpha.700',
                    color: 'brand.main'
                }}
            >
                <MdDeleteOutline size={'20'}/>
            </Button>
            </HStack>
            : 
            <IconButton
                icon={BiMessageDetail}
                boxSize={9}
                type={'light'}
                bg='transparent'
            />
            }
        </HStack>
    )
}

export default HistoryButton