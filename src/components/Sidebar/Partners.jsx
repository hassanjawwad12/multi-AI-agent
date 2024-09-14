import React from 'react'
import { Button, HStack, Heading, VStack, Image} from '@chakra-ui/react'
import {BsArrowRight} from 'react-icons/bs'
import {BiMessageDetail} from 'react-icons/bi'
import IconButton from '../IconButton'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function PartnersOptions(props) {
    const history = useHistory()
    return (
        <HStack
            onClick={() => {
                history.push(props.link)
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
                }))
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
            spacing={props.isExpanded ? '2' : '0'}
            {...props}
        >
            <Image src={props.logo}
            w='8' h='8' alt="Partner Logo" />
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

export default PartnersOptions