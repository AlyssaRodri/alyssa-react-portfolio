import {
  Box,
  Flex,
  Link,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  HStack,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';


export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box> Alyssa Rodriguez </Box>

          <Flex justifyContent={'flex-end'}>
            <HStack spacing='2rem'>
              <Link href="/" > Home</Link>
              <Link to="/Projects"> My Work </Link>
              <Link href="/Contact"> Contact </Link>
              <a href="https://docs.google.com/document/d/1_0L-T8EB8gi0BITXL9dxcabHJLJJzVD2gN2KMLeCi8U/edit?usp=sharing" target="_blank" rel="noreferrer" download>Resume</a>
            </HStack>
          </Flex>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}