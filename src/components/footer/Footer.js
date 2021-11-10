import React from 'react'
import { FaBeer } from "react-icons/fa";
import {
    Container,
    Firstdiv,
    H2,
    P,
    Iconsdiv,
    A,
    Pdiv,
    Span,
    Pp
} from './Footerelements'
function Footer() {
    return (
        <Container>
            <Firstdiv>
                <H2>lorem </H2>
                <P>lorem sjdnhakjshd kajshdjahusod kjsdhgy</P>
            </Firstdiv>
            <Iconsdiv>
                <A><FaBeer /></A>
                <A><FaBeer /></A>
                <A><FaBeer /></A>
                <A><FaBeer /></A>
                <A><FaBeer /></A>
            </Iconsdiv>
            <Pdiv>
                <Pp>dsfjslkdfjsljkdsfjlkdsjflkdsajdkla<br></br>jmdsnfdsdlkjsadlkjsadkl ja <Span>sajdnsajhd</Span></Pp>
            </Pdiv>
        </Container>
    )
}

export default Footer
