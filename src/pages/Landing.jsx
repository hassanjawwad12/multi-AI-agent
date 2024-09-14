import React from 'react'
import { VStack, Stack, Box, Text, Image } from "@chakra-ui/react";
import ButtonCustom from '../components/Button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Banner from './Banner';

export default function Landing() {
    const history = useHistory();
    return (
        <VStack 
        overflowY={'auto'}
        width="100%" bg="black" padding={'4'} >
            <Box
                pos={'absolute'}
                top={0}
                left={0}
                right={0}
                bottom={0}
                background={'linear-gradient(180deg, rgba(223, 214, 1, 0.2) 0%, rgba(4, 178, 248, 1) 100%)'}
                zIndex={1}
                opacity={0.25}
                filter={'blur(100px)'}
            />
            <Banner />
            <Stack
                h={['full', 'full', 'full', 'full']}
                pos={'relative'}
                direction={'column'}
                alignItems={'center'}
                justify={'center'}
                gap={12}
                zIndex={[2, 2, 1, 1]}
                w={['full', 'full', '60%', '60%']}
            >
                <Text mt={'12'} textAlign={'center'} color='white'
                    fontSize={['2xl', '3xl', '4xl', '4xl']}
                    fontWeight='bold'
                    fontFamily={'heading'}
                    lineHeight={'shorter'}>
                    Unleash the Power of AI
                    <br />
                    Your Daily Work Companion
                </Text>
                <Text textAlign={'center'}
                    color='whiteAlpha.700'
                    fontSize={['sm', 'md', 'sm', 'md']}
                    lineHeight={'taller'}
                >
                    Welcome to the heart of our DAPP (Decentralized Application), where the future meets productivity. Our DAPP isn't just another platform; it's your indispensable daily work companion, equipped with a multitude of powerful AI features designed to simplify and enhance your professional life.
                    <br />
                    In a world where time is money and efficiency is key, our DAPP brings you a comprehensive suite of AI-driven tools that seamlessly integrate into your daily work routine. Say goodbye to tedious tasks, information overload, and mundane processes. Say hello to a smarter, more productive you.
                </Text>
                <ButtonCustom
                    isExpanded={true}
                    mt={4}
                    type="primary"
                    btnName={'Get Started'}
                    onClick={() => {
                        history.push({
                            pathname: '/AIbot',
                            state: { toolId: 1 }
                        })
                    }}
                />

            </Stack>
        </VStack>
    )

}
