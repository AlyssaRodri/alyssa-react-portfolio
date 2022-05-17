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
  
  export default function Project2Card() {
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
            <Image src='https://lh3.googleusercontent.com/YgQ53PPXwhLW-QmR9IyzHTNrjQc0YbS0B89y7fvfngTbjK7ej5lzZadk7g2me2-gFt5OWQhePLqM4ori6E9xR1_6ZIBYiJ_c1AyZDtL9EFx539jIlRUxAfkoOA_m6Nz_JEBsFU4FbHGc2CcUK7s0X7qskAMfusS4TVjZgn8mMX7VOp_B8XjyUnhZSTEPq5zV2qTbjNHj1VORxzGKGkqfWGnCkq00bVWESvsCk-oneeasW3v1f3ipTrXw4SvRk5KfCfMSvhYr7BBm70nHBQau-a6wVbPFw-qEjxRZD8jq_3s91rH1t7uRSiwXhNb54OjmxaJiUMw-XlmL9n7yrt6BunMlJSacbgpdfJQKQZhf1Rireg5UMt3IV8mnP-g-NG3tUnM-PvUDY3hci6uwyi9vPFQtJGmKiX2wRaTgQ3_w3AemnY0Bmr5vry4Bq5jPX7r1_JCM8eMghXG2oHuJtb2c4R4LNLBy_RKwNNcbALxfHK0uCZ7Gn2WMBrds3lplFo4oma4r7ARJlqsX8IowjAT_euvWyrOYBEZP9Iq5A2Cw167WLy4SH9zGpMldCjoMssfFAuu8_N8gX8iIinBXZqISIiKV0ttLQNL2v-eOWSE9yDiHdmCOUYtFiIgQ2B2gIZ2SoWwb-0W_KrILoYtBwD1soE9KyWAq7IiHzozmE4FBpfQR0DTcVw9JEioURFeAag61hUl8W4g8T_vaIVQpICTWp0J0xN96jLwSbU3XK0I9nzaAHiwPbRw15mhhmv2q=w945-h768-no?authuser=0'
            height={'100%'} width={'100%'} />
          </Box>
          <Stack>
  
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}
              marginTop='2'>
              Plant Blog
            </Heading>
            <Text color={'gray.500'}>
              My group and I created a community where the user would be able to communicate with other plant parents. 
            </Text>
            <Link href="https://github.com/AlyssaRodri/plant-store" isExternal> Visit this repo! </Link>
          </Stack>
        </Box>
      </Flex>
    );
  }