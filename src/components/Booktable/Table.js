import React from 'react'
import {
    Constcontainer,
    Headcontainer,
    H2,
    Span,
    Parm,
    Fromcontainer,
    Inputscontainer,
    Input,
    Msgcontainer,
    Inputmsg,
    Buttoncontainer,
    Button,
    Contr
} from './TableElements'
function Table() {
    return (
        <>
            <Constcontainer id="Table">
           
                <Headcontainer>
                    <H2>book a <Span> Table </Span></H2>
                    <Parm>lorem sjdkad  jasnjd jsdkhj  jshdjhjhsd kjasdhkjahnasd <br></br>sd nhhasdnmndjasndhaasdja  sjdaj </Parm>
                </Headcontainer>

 
                <Fromcontainer>
                <Contr>
                    <Inputscontainer >
                        <Input placeholder=" your name "></Input>
                        <Input placeholder="email"></Input>
                        <Input placeholder="phone "></Input>
                        <Input placeholder="date "></Input>
                        <Input placeholder="time "></Input>
                        <Input placeholder="# of people "></Input>
                    </Inputscontainer>

                    <Msgcontainer>
                        <Inputmsg placeholder="message "></Inputmsg>
                    </Msgcontainer>

                    <Buttoncontainer>
                        <Button>send message</Button>
                    </Buttoncontainer>
                    </Contr>
                </Fromcontainer>
            
            </Constcontainer>

        </>
    )
}

export default Table