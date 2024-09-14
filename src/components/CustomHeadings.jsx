import { Heading } from '@chakra-ui/react'
import React from 'react'

function CustomHeadings(props) {
    return (
        <Heading 
            as="h1"
            size={["md", "xl", "xl", "xl"]}
            color="brand.text"
            {...props}
        >
            {props.text}
        </Heading>
    )
}

export default CustomHeadings