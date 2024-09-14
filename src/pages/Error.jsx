import React from 'react';
import { Alert, AlertIcon, AlertTitle, AlertDescription,VStack } from '@chakra-ui/react';

export const ErrorPage = () => {
  return (
    <VStack width="100%" height="full" align='center' justifyContent='center' bg="black" >
    <Alert
      status='error'
      variant='subtle'
      w='50%'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      textAlign='center'
      height='200px'
      rounded={'lg'}
    >
      <AlertIcon boxSize='40px' mr={0} />
      <AlertTitle mt={4} mb={1} fontSize='lg'>
        Page does not Exist!
      </AlertTitle>
      <AlertDescription maxWidth='sm'>
        Kindly put in the correct route
      </AlertDescription>
    </Alert>
    </VStack>
  );
};