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

export default function Project3Card() {
  return (
    <Flex  py={6}>
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
          <Image src='https://lh3.googleusercontent.com/Z-SHBdu0vElKsGrEQ4q1db9OCCYZMU8yXeIfXpeLNWYXkhTmRJk964UA0kQm9WGfyI7w70peZnVXo7OXg0jjL4crFBHLjjJA6e_KXJ7PW3q8trbhMt-GD9R2TLMalCLAld8t-8W_gwplyPQvX3iOi09skAjDkngAPNNsjVmUKHMBfhhbIo-mQ9DYXFThfXa8fjp5hPgw5tjgNxsJxsGxdrfJGTJgp_53aJVhW5O31kiZ0S8WahrkE_0FVflW8E8JDjFerQHBZzaetpcU5u_iQnNrICqkOOXhnI97e1jgxV2nCETylWtXCBAU8xyU_50dGLA3uoohEOMnkN7LO1cf7FbrTkb1J0mO-7y1KPKqShTMRrWST6_WP2vltPQEINKTjTvTF6GySUeKQHXNUhNxYUGwmBrR-qq5fBF6JBlOF3TWAGEqiR8V6YG84rbUOJM6rhNUa7chuY1-caOdTr8Wpp-m0PMQyz1g0qydav8AfM3kSfFSBYIUu-vvpwXpojxOdBUQIRCxWqP3zb0VGuysnFlLu6fcaOYB9rp8pJ9ff6tpm9siSJBImeo8XfA_GMPp9-wPjCNixyZJ52ZhS3uGrxQ4DyefWC1GaSLw4oXDLxZNcr5NSyKqkmljPjMFWm9ndov8dSbSEhoWHKnoLrRT-EhVBU7pEKR_8JOls1n-qQMmitOeOyeenzGIQSVYOtzu0BwLw6jI2Hx9T19q_aK7wWY7Wg8XnJdCSYTJK7KO6c2QysMbSev_a20clthG=w720-h387-no?authuser=0'
          height={'100%'} width={'100%'} />
        </Box>
        <Stack>

          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
            marginTop='2'>
            Food for Thought
          </Heading>
          <Text color={'gray.500'}>
            In this project, I worked with my group to create an app that would allow the user to search for more specific dietary restrictions that are not always included on the label on the box.
          </Text>
          <Link href='https://github.com/ksjefferies/Food-for-Thought' isExternal> Visit this repo!</Link>
        </Stack>
      </Box>
    </Flex>
  );
}