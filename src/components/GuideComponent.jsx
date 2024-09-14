import React from 'react'
import { Box, HStack, Text } from '@chakra-ui/react'

export default function GuideComponent({
    guideTitle,
    description
}) {
    return (
        <Box w={'full'} bg='white' p={'4'} borderRadius={'md'}>
            <HStack w={'full'} spacing={'4'}>
                <Box w="6" h="6" bg="brand.main" borderRadius={'md'} />
                <Text fontSize={['lg', 'xl', '2xl']}
                    fontWeight={'bold'} color={'black'}>
                    {guideTitle}
                </Text>
            </HStack>
            <Text marginTop={'4'} lineHeight={'7'} fontSize={['sm', 'md', 'lg']}
                color={'black'}>
                {description}
            </Text>
        </Box>
    )
}
