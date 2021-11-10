import React from 'react'
import { FaBeer } from "react-icons/fa";
import {
    Container,
    FirstcontainerDiv,
    Firstdiv,
    Parmcontainer,
    Iconsdiv,
    H2,
    P,
    Fromcontainer,
    Inputs,
    Inputss,
    Subjectcontainer,
    Msgcontainer,
    Inputsss,
    Buttoncontainer,
    Button
} from './Elements'
function Contact() {
    return (
        <Container id="contact">
            <FirstcontainerDiv>
                <Firstdiv>
                    <Iconsdiv>
                        <FaBeer />
                    </Iconsdiv>
                    <Parmcontainer>
                        <H2>heading</H2>
                        <P>LOREM LOREM LOREM</P>
                        <P>LOREM LOREM LOREM</P>
                    </Parmcontainer>
                </Firstdiv>
                <Firstdiv>
                    <Iconsdiv>
                        <FaBeer />
                    </Iconsdiv>
                    <Parmcontainer>
                        <H2>heading</H2>
                        <P>LOREM LOREM LOREM</P>
                        <P>LOREM LOREM LOREM</P>
                    </Parmcontainer>
                </Firstdiv>
                <Firstdiv>
                    <Iconsdiv>
                        <FaBeer />
                    </Iconsdiv>
                    <Parmcontainer>
                        <H2>heading</H2>
                        <P>LOREM LOREM LOREM</P>
                        <P>LOREM LOREM LOREM</P>
                    </Parmcontainer>
                </Firstdiv>
                <Firstdiv>
                    <Iconsdiv>
                        <FaBeer />
                    </Iconsdiv>
                    <Parmcontainer>
                        <H2>heading</H2>
                        <P>LOREM LOREM LOREM</P>
                        <P>LOREM LOREM LOREM</P>
                    </Parmcontainer>
                </Firstdiv>
            </FirstcontainerDiv>
            <Fromcontainer>
                <Inputs placeholder="name"></Inputs>
                <Inputs placeholder="name"></Inputs>
            </Fromcontainer>
            <Subjectcontainer>
                <Inputss placeholder="name"></Inputss>
            </Subjectcontainer>
            <Msgcontainer>
                <Inputsss placeholder="name"></Inputsss>
            </Msgcontainer>
            <Buttoncontainer>
                <Button> send message</Button>
            </Buttoncontainer>
        </Container>
    )
}

export default Contact
