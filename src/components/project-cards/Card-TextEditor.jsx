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
  
  export default function TextEditorCard() {
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
            <Image src='https://lh3.googleusercontent.com/UQgKxKz_ptBhtjlfftBSxg73R7O26RZiMtzc6wy4saseaZaowNdJuOV81yOiS1GKZYBfD2X9TYomG5e504Hy4qhga9rjOZEZB7fs0GNcR2FCMEMk6SyaJeCzJqEeNYg2k30-o-1Rwt4IWHC2zAlVJNehTkefwE3391gTtCyHxregTrHXQF8Ag-1Q3oOHDg8kO_g8vrJdl7DETXJBpzLkq5OeFsP7L-3eB2UvHXIuJgL4Fgq0OmphyYCzRmvaRRXvrIth3v1XUtkvO9fc-nRCb83dQYX6r5arKH3AoXUO2jv9AZMDKjiC8k7fQaVBNXkbx3JwFiBUWVDGFHGXo2ez1kT56TVAr-QysK7aWzcGpBbLNPcHo1NwQ3KklcXfWvpOOa1S2UozcsUkK1qx74GA96Nep_6dp04d-Anf7bHLORKZC8g87wJSNeZ9MGtS6z_kxJDMO9EqSfXDx5lMWg002kZ_fMYah9wO5oIT3AbQMlUKvkPHz3V-CSqbZ5lRbv2OGQ59Jn_DSEnrD70mfp9tHYOW8mtdHDxuGZsSBnaB5mv-XPiKZqIJKHxEH6v_JwMpa1xO9wTee_osYMlhHBFuBCPLgbLTAzX5G_rbLZYkdz79uUOVSIeLHFaRvX6onPkIpeVuAsZ9vH4N0OHs5k8wH7plzW50WDnSOeZnl65ISBc1XvOAUOAzDwJdqWC9D15Ah0TK4454W94m49Pkbv_Fn-8EuVqkt_s3RK7iiaiWzfSStINj59Z_nnCtrs9L=w1271-h854-no?authuser=0'
            height={'100%'} width={'100%'} />
          </Box>
          <Stack>
  
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}
              marginTop='2'>
             PWA Text Editor
            </Heading>
            <Text color={'gray.500'}>
                I was able create text editor app that can be downloaded onto the user's computer using PWAs.
            </Text>
            <Link href='https://github.com/AlyssaRodri/pwa-notetaker' isExternal>Visit this repo!</Link>

          </Stack>
        </Box>
      </Flex>
    );
  }