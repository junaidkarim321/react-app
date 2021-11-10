import React, { useState } from 'react'
import {
    Parcontainer,
    Headcontainer,
    H2,
    Parm,
    Img,
    Span,
    Menucontainer,
} from './MenuHeadElements'
import Data from './Data';


function Menuhead() {
    const [items, ] = useState(Data)
    
    return (
        <Parcontainer id="images">
            <Headcontainer>
                <H2>why choose our hotal <Span> see our menu </Span></H2>
                <Parm>lorem sjdkad  jasnjd jsdkhj  jshdjhjhsd kjasdhkjahnasd <br></br>sd nhhasdnmndjasndhaasdja  sjdaj </Parm>
            </Headcontainer>

            {
                items.map((elem) => {
                    const { image } = elem;
                    return (
                        <>
                            
                            <Menucontainer>
                                    <Img src={image}></Img>
                            </Menucontainer>
                           
                        </>
                    )
                })
            }
          

        </Parcontainer>
    )
}

export default Menuhead
