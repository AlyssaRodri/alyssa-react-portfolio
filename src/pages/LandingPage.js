import {
    Flex,
    Image,
    Text,
    Box,
    useColorModeValue,
    useColorMode,

} from '@chakra-ui/react';
import PageContainer from '../components/page-template/PageContainer';


export function LandingPage() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex>
            <PageContainer>
                <Box bg={useColorModeValue('gray.100', 'gray.900')} p={10} >
                    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Image
                    borderRadius='full'
                    boxSize='150px'
                    src='https://avatars.githubusercontent.com/u/99490187?v=4'
                    alt='Alyssa Rodriguez'
                    margin={5}
                    />
                    <Text margin={2}>  
                    My name is Alyssa Rodriguez and I am part of the SMU Coding Cohort for the spring of 2022 and am expected to graduate with a MERN certification in late May. While my experience in the Tech field is limited, I am eager to learn. I have worked in an office setting with my time at Asset Control, a background check company. Where I was given the opportunity to run an
                    entire department. I hope that in my work you will not just see my abilities, but my passion and willingness to learn. </Text>
                    </Flex>
                </Box>
            </PageContainer>
        </Flex>
    );
}