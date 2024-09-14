import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import { Header } from "../components/Reusable/Header";
import { DrawerLaptop } from "../Sidebar/Side";

export const Tools = () => {
    return (
        <>
            <HStack>
                <DrawerLaptop />
                <Header />
            </HStack>
            <HStack width="100%" height={['60vh', '60vh', '60vh', '80vh']} align='center' justifyContent='center' bg="black" position={'relative'} >
                <Image
                    display={['none', 'none', 'none', 'block']}
                    position={'absolute'}
                    right={0}
                    src='robot.png' alt='ai' width='auto' height='100%' zIndex={1} mr={0} mt={4} mb={4} />
                <VStack
                    color={'white'}
                    gap={2}
                >
                    <Text fontSize={'2xl'}>Our Vision</Text>
                    <Text
                        width={['80%', '80%', '80%', '50%']}
                        textAlign={'center'}
                        fontSize={'lg'}
                    > We have different AI tools which can help you in different tasks and make your life easier, ranging from mental wellness coach which tells you how you can be better after taking certain inputs from you to personal shopping assistant which can help you in shopping for your needs.
                    </Text>
                </VStack>
            </HStack>
        </>
    );
};

