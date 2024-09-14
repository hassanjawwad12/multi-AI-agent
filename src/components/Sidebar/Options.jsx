import React from 'react'
import { Button, HStack, Heading, Icon, Text, VStack } from '@chakra-ui/react'
import {BsArrowRight} from 'react-icons/bs'
import {BiMessageDetail} from 'react-icons/bi'
import IconButton from '../IconButton'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


function Options(props) {
    const history = useHistory()
    const toolID = props.toolId
    return (
        <HStack
            onClick={() => {
                history.push({
                    pathname: '/AIbot',
                    state: {toolId: toolID}
                })
                props.setOptions(props.options.map((option, index) => {
                    if (index === props.index) {
                        return {
                            ...option,
                            active: true
                        }
                    } else {
                        return {
                            ...option,
                            active: false
                        }
                    }
                }
                ))
            }}
            border={'1px'}
            borderColor={'whiteAlpha.400'}
            bg={props.active ? 'whiteAlpha.400' : 'whiteAlpha.200'}
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
                fontFamily={'body'}
                {...props}
            >
                {props.isExpanded ? 
                props.optionsTitle : null}
            </Heading>
            <IconButton
                icon={BsArrowRight}
                boxSize={9}
                type={'light'}
                bg='transparent'
            />
        </HStack>
    )
}

export default Options