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
  
  export default function NoteTakerCard() {
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
            <Image src='https://lh3.googleusercontent.com/UoSXcCBetBM5sP5k83npKQr4icpVoMmpLGcDzGiAVXdN_iFj3T4yq3v0JmYqwk7OWihtd-n0DBRhHHYjj0ERPGnFw5u6yYpDZ3c7vvlA_ug0wxMByYb8i_JMvAJpSqjlEySBxEkrpoh3waGs4BPd6r7bxEH7dkDVOgAWWd_gkMNSvVp9a-CR-xvDn8rOSt5WBdQKLqb16l3RCPEfx-efusThRj_nC3WHX6K86-xIF7kNPJG7GXfePfQ2Gd_LXeIEq148xxqYJCgiE30RdwYBKCsVXn8vgt2FIL9KMUBlpOSXVQersRPRXeU5qd6yR9Yu2iyV2fftwPwJbcdO68xjS4KQUPiz3G6Y6fSUB2Flwx0jxzl0zmXP1ZyR3r59oKR_MYFmKCbqzzQacDIbr1f_zWq2AQceuaTz_8g1GS-a5MWNZ2w5PUHmsCTUfmZoJlMWkLGdxyvoREfmnuGkhKv6vmcjkYJS76hoxRhz5ugvkQacEdLS8UI88JfjtOq4_DSxVwjiNxgGJjWJMkRE8F_Hq5D_KCjpm3Ztu1119b12WKJmmzJgHlttNHgeR99Yze1LVQ_knOHSk_pc2fLAz-ZnqQYMRnnnlHZTgD7EKqv9RFGavQjNxP8hbsWpZ6q-Gd2o1C4e2kukDR-4wPLcWFWJUpMI2Rv6IPJ9IaP9d2aFoYn2hQJFe8cqPn7iU4jwKiJIZUA81Qo7vIathnQAqt1Kh7cHlJFxKWnalgMxPuvIEYGpMN-2uj5ACrrdzmJK=w443-h215-no?authuser=0'
            height={'100%'} width={'100%'} />
          </Box>
          <Stack>
  
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}
              marginTop='2'>
              Note Taker
            </Heading>
            <Text color={'gray.500'}>
            In this project, I created a note taking application that allows the user to save their notes in the app, and click on them so that they can be read and reviewed in the future.
            </Text>
            <Link href='https://github.com/AlyssaRodri/note-taker' isExternal>Visit this repo!</Link>
          </Stack>
        </Box>
      </Flex>
    );
  }