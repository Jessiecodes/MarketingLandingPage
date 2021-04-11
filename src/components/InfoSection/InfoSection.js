import React from 'react'
import './InfoSection.elements';
import { Container, Button } from '../../globalStyles';
import { Link }  from 'react-router-dom';
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle
} from './InfoSection.elements';


const InfoSection = ({ 
    primary,
    lightBg,
    imgStart,
    lightTopLine,
    lightTextDesc,
    buttonLabel,
    description,
    headline,
    lightText,
    topLine
 }) => {
    return (
        <>
          <InfoSec lightBg={lightBg}>
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                           <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                           <Heading lightText={lightText}>{headline}</Heading>
                           <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                           <Link to='/sign-up'>
                               <Button big fontBig primary={primary}>
                                   {buttonLabel}
                               </Button>
                           </Link>
                        </TextWrapper>
                    </InfoColumn>
                </InfoRow>
            </Container>
          </InfoSec>  
        </>
    )
}

export default InfoSection