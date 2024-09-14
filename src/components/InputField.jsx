import React from 'react'
import { Input } from '@chakra-ui/react'

function InputField(props) {
    return (
        <Input
            bg={'white'}
            paddingY={"6"}
            paddingX={"4"}
            border={'1px'}
            type={props.type}
            borderColor={'gray.200'}
            focusBorderColor='brand.main'
            placeholder={props.placeholder}
            _placeholder={{ color: 'gray.500' }}
            disabled={props.disabled}
            {...props}
        />
    )
}

export default InputField