import {
    Box,
    Heading,
    Text,
    Stack,
    useColorModeValue,
    Flex,
    Link
  } from '@chakra-ui/react';
  
  export default function ECommerceCard() {
    return (
      <Flex py={6}>
        <Box
        //   maxW={'400px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}>
          <Box
            h={'210px'}
            bg={'gray.100'}
            mt={-6}
            mx={-6}
            mb={6}
            pos={'relative'}>
            <iframe src="https://drive.google.com/file/d/1zm609IqE9boy68I3VmBwOIiwv9g7bV_L/preview" width="100%" height="100%" allow="autoplay"></iframe>
          </Box>
          <Stack>
  
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}
              marginTop='2'>
              E-Commerce
            </Heading>
            <Text color={'gray.500'}>
                I created a back-end tracker for a client's e-commerce website in order to help the company remain competitive. 
            </Text>
            <Link href='https://github.com/AlyssaRodri/ecommerce-backend' isExternal>Visit this repo!</Link>
          </Stack>
        </Box>
      </Flex>
    );
  }