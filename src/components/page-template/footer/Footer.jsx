import {
    Box,
    Container,
    HStack,
    Link,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  
  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Stack direction={'row'} spacing={6}>
            
            <HStack spacing="10rem">
                <p>email@email.com</p>
                <p> 940-465-3191</p>
                <Link href='https://www.linkedin.com/in/alyssa-rodriguez-935433152/' isExternal> LinkedIn <ExternalLinkIcon mx="2px"/></Link>
                <Link href='https://github.com/AlyssaRodri'> Github <ExternalLinkIcon mx="2px"/></Link>
            </HStack>
          </Stack>
        </Container>
      </Box>
    );
  }