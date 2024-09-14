import { IconButton } from '@chakra-ui/react'
import React from 'react'

function IconButtonCustom(props) {
    return (
        <IconButton 
            as={props.icon}
            color={props.type === 'primary' ? 'white' : 'brand.light'}
            bg={'none'}
            padding={'2'}
            cursor={'pointer'}
            rounded={'lg'}
            boxSize={props.boxSize}
            {...props}
        />
    )
}

export default IconButtonCustom