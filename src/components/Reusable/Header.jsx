import { Text, Image, HStack, Stack, Spacer, Container, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
//import { DrawerP } from "../../Sidebar/Drawer";
//import { Metamask } from "../metamask";

export const Header = () => {
    const navigate = useNavigate();
    return (
        <>
            <Container maxW='6xl'>
                <Stack
                    direction={['column', 'column', 'row', 'row']}
                    pl={[0, 0, 4, 4]}
                    w='full'
                    bg="black"
                    pr={4}
                    align={['center', 'center', 'flex-start', 'flex-start']}
                    justifyContent={['center', 'center', 'space-between', 'space-between']}
                >
                    <Stack
                        direction={['row', 'row', 'row', 'row']}
                        pl={[0, 0, 4, 4]}
                        w={['100%', '100%', '60%', '60%']}
                        mt={6}
                        align={['center', 'center', 'flex-start', 'flex-start']}
                    >
                        <Image
                            onClick={() => navigate('/')}
                            cursor={'pointer'}
                            src="logo.png" alt="logo" width="120px" height="auto" justifyContent="space-between" />
                        <Spacer />
                        <Button
                            bg='yellow'
                            color='purple'
                            width={'80%'}
                            fontFamily='heading'
                            as='i'
                            px={2}
                            fontSize={'sm'}
                            borderRadius='2xl'
                            _hover={{
                                bg: '#4D4D4D',
                                color: 'white'
                            }}
                            display={['flex', 'flex', 'none', 'none']}
                        >
                            Connect
                        </Button>
                        <HStack
                            fontFamily="heading"
                            fontSize={['3xl', '3xl', '5xl', '5xl']}
                            fontWeight="extrabold"
                            mt={6}
                            display={['none', 'none', 'block', 'block']}
                        >
                            <Text
                                color='#38AEFF'
                                as='i'
                            >Our</Text>
                            <Text
                                color='#DFD602'
                                as='i'
                            >Tools
                            </Text>
                        </HStack>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
};