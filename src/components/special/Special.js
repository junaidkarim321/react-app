import React from 'react'
import img4 from '../../images/img4.jpg'
import {
    Specialcontainer,
    Headcontainer,
    H2,
    Span,
    Parm,
    Buttonscontainer,
    Ssection,
    Button,
    Content,
    H4,
    ContentParm,
    ImageDiv,
    Img,
} from './Elementsspecial'
function Special() {

    return (
        <Specialcontainer id="Special" >
            <Headcontainer>
                <H2> choose our   <Span> Special </Span></H2>
                <Parm>lorem sjdkad  jasnjd jsdkhj  jshdjhjhsd kjasdhkjahnasd <br></br>sd nhhasdnmndjasndhaasdja  sjdaj </Parm>
            </Headcontainer>

            <Ssection>
                <Buttonscontainer>
                    <Button >sada kjdlksajd </Button>
                    <Button>sadadlksajdlkjasljd</Button>
                    <Button >THIsdaashdkjsa</Button>
                    <Button>LOREMsdasjdsajd</Button>
                    <Button>ABOUTsdsadjhsa</Button>
                    <Button >THIsdkasdhalS</Button>
                    <Button>LOREsdsakdjlsaM</Button> 
                </Buttonscontainer>
                <Content>
                    <H4>lore and what i will put in the Content</H4>
                    <ContentParm>loremm askjdhajdh askjdhsndskjahd asdhjsahdsa ajhgsadh a jhdnasnd bjy hhsdkjhjhd   ahkjha ksjhd 
                    oremm askjdhajdh askjdhsndskjahd asdhjsahdsa ajhgsadh a jhdnasnd bjy hhsdkjhjhd   ahkjha ksjhd
                    oremm askjdhajdh askjdhsndskjahd asdhjsahdsa ajhgsadh a jhdnasnd bjy hhsdkjhjhd   ahkjha <br></br><br></br>ksjhdhhsdkjhjhd   ahkjha ksjhd 
                    oremm askjdhajdh askjdhsndskjahd asdhjsahdsa ajhgsadh a jhdnasnd bjy hhsdkjhjhd   ahkjha ksjhd
                    oremm askjdhajdh askjdhsndskjahd asdhjsahdsa ajhgsadh a jhdnasnd bjy hhsdkjhjhd </ContentParm>
                </Content>
                <ImageDiv>
                    <Img src={img4}></Img>
                </ImageDiv>
            </Ssection> 
        </Specialcontainer>
    )
}

export default Special
