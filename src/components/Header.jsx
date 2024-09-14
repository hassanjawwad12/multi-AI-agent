import { HStack, Show, Image, Box } from '@chakra-ui/react'
import React from 'react'
import IconButton from './IconButton'
import {HamburgerIcon} from '@chakra-ui/icons'
import logo from '../assets/BuildAI.png'


export default function Header(props) {
    return (
        <Show below='md'>
            <HStack
                position={'relative'}
                top={'0'}
                zIndex={'dropdown'}
                w={'full'}
                paddingY={'2'}
                bg={'brand.main'}
                color={'brand.light'}
                padding={'2'}
                align={'center'}
                justify={'space-between'}
                transition={'all .2s ease-in-out'}
            >
                <IconButton
                    onClick={() => props.setIsExpanded(true)}
                    icon={HamburgerIcon}
                    boxSize={10}
                    type={'primary'}
                />
                <Image
                    src={logo}
                    alt={'logo'}
                    w={'24'}
                    objectFit={'contain'}
                    pos={'relative'}
                    left={'-4'}
                />
                <Box />
            </HStack>
        </Show>
    )
}
