import React from 'react'
import chefs1 from '../../images/img1.jpg'
import chefs2 from '../../images/img2.jpg'
import chefs3 from '../../images/img3.jpg'
import {
    Container,
    Headcontainer,
    H2,
    Span,
    Parm,
    Divcontainer,
    Itemcontainer,
    Firstimg,
    Img,
    Divwithitems,
    P,
    Pp
} from './Elementschef'
function Chef() {
    return (
        <>
            <Container id="Chef">
                <Headcontainer>
                    <H2>meet our <Span> chef</Span></H2>
                    <Parm>lorem sjdkad  jasnjd jsdkhj  jshdjhjhsd kjasdhkjahnasd <br></br>sd nhhasdnmndjasndhaasdja  sjdaj </Parm>
                </Headcontainer>

           <Divcontainer>
               <Itemcontainer>
                 <Firstimg>
                     <Img src={chefs1}></Img>
                 </Firstimg>
                 <Divwithitems>
                     <P>lorem</P>
                     <Pp>lorem</Pp>
                 </Divwithitems>
               </Itemcontainer>
               <Itemcontainer>
                 <Firstimg>
                     <Img src={chefs2}></Img>
                 </Firstimg>
                 <Divwithitems>
                     <P>lorem</P>
                     <Pp>lorem</Pp>
                 </Divwithitems>
               </Itemcontainer>
               <Itemcontainer>
                 <Firstimg>
                     <Img src={chefs3}></Img>
                 </Firstimg>
                 <Divwithitems>
                     <P>lorem</P>
                     <Pp>lorem</Pp>
                 </Divwithitems>
               </Itemcontainer>
           </Divcontainer>






            </Container>
        </>
    )
}

export default Chef
