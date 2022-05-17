import {
    Box,
    Heading,
    Text,
    Stack,
    useColorModeValue,
    Image,
    Flex,
    Link
  } from '@chakra-ui/react';
  
  export default function Project1Card() {
    return (
      <Flex py={6}>
        <Box
          maxW={'400px'}
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
            <Image src='https://lh3.googleusercontent.com/Tahqej3PoCRhPUuPCxkn0J3jHz7lNeb86aBOjfS_cHnHfUxhfcOpdZ0aWHOpokx-5pB4DrxgoOro7Vson_RZVLEc1LRkoeSZUhd5lDVEGEvqGtqFGdYzH0l8e89bvY4rGvMXbt38EbQ9DenAA0gem8e6V2DCN2gNhLG4pViR4CNYpEpMdDShAMVxlVm_4bkXJAywSSyPQxJNSeiQCjGwiU-OJJ_A_W5NK-tLLBIqVw1qhEXJ_JVJWeRlYtTqK6hNhXpzTQ6_CizJjolJQ5gLCzD1l7OJS-qJRJ2WVkOuH14UnCpFF5e54YGSJM8E63Wymt2s3mLg0u0MaWsKnFpDw-xAZYkKPcbFDFY8UtL3dcrfehGduDSiM5wil7DWYLR60KAkDPkRG9T9mEFQlUszuWzH16oP6wBe5jQ0hFg0w71zZCmHvkkF0D6McLaYoQc-O5KoGnmmLUX5awmNI9Wy2ngWUB9HmWykea5MturTvo6kxRNYd_VUh_C8LpJvA_oQw6fp-hETDQHZKsG68cA31VUk9g5aIADlue3yHXzOnKTdltN9XohkS5pFGBbxtUgclDBx_WGyJRfPf_g_Yy9wX-cJTkKaxJgkmXzIh2X-6J7q008eQQlAe4-u7T8fW-_hHwxylCCqHjWPfbzwSQESuohTGfHUChHKRRz0hBtD-Z1yzNok1e3-sGnByjSMZEVisnZ0Kzqo1dBDJIB4xL7v-XsWxi2e7LpJAEzWe4xUVUvNp9LPP9TY5F3o8_wd=w894-h768-no?authuser=0'
            height={'100%'} width={'100%'} />
          </Box>
          <Stack>
  
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}
              marginTop='2'>
              NBA Fandom
            </Heading>
            <Text color={'gray.500'}>
              With the idea of creating a one stop shop for all data to do with the NBA, my group and I created a front end application to help the user save the information of players and teams.
            </Text>
            <Link href='https://github.com/eugene125/project-1' isExternal> Visit this repo!</Link>
          </Stack>
        </Box>
      </Flex>
    );
  }