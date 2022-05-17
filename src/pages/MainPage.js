import {
    Flex,
    Grid,
} from '@chakra-ui/react'

import PageContainer from "../components/page-template/PageContainer";
import Project3Card from '../components/project-cards/Card-Food';
import Project2Card from '../components/project-cards/Card-Plants';
import Project1Card from '../components/project-cards/Card-NBA';
import TextEditorCard from '../components/project-cards/Card-TextEditor';
import ECommerceCard from '../components/project-cards/Card-ECommerce';
import NoteTakerCard from '../components/project-cards/Card-NoteTaker';

export function MainPage(){
    return(
        <Flex>
            <PageContainer>

                <Grid templateColumns='repeat(3, 2fr)' gap={4}>
                    <Project1Card/>
                    <Project2Card/>
                    <Project3Card/>
                    <TextEditorCard/>
                    <NoteTakerCard/>
                    <ECommerceCard/>
                    
                </Grid>

            </PageContainer>
        </Flex>

    )
}