import {
    Flex,
    Grid
} from '@chakra-ui/react'

import PageContainer from "../components/page-template/PageContainer";
import Project3Card from '../components/project-cards/Card-Food';
import Project2Card from '../components/project-cards/Card-Plants';
import Project1Card from '../components/project-cards/Card-NBA';

export function MainPage(){
    return(
        <Flex>
            <PageContainer>
                <Grid templateColumns='repeat(3, 2fr)' gap={4}>
                    <Project3Card/>
                    <Project2Card/>
                    <Project1Card/>
                </Grid>

            </PageContainer>
        </Flex>

    )
}