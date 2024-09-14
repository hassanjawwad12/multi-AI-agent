import { VStack, Image } from "@chakra-ui/react";
import { Main } from "../components/Recipe/Main";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export const Recipe = () => {
    const location = useLocation();
    console.log("location:", location)
    const toolId = location.state?.toolId;
    console.log("toolId:", toolId)
    return (
        <>
            {/* <Header /> */}
            <VStack width="100%" height={'full'} align='center' justifyContent='start' bg="black" position={'relative'}>
                {/* <Image
                    display={['none', 'none', 'none', 'block']}
                    src='robot.png' alt='ai' width='auto' height='80%' position='absolute' top={'-40'} right='24' zIndex={1} /> */}
                <Main id={toolId} />
            </VStack>
        </>
    );
};