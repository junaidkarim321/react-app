import React, { useState } from 'react'
import {
  Parcontainer,
  Headcontainer,
  H2,
  Parm,
  Buttoncontainer,
  Buttons,
  Button,
  Span,
  Menuitems,
  Headingmdiv,
  A,
  Spa,
  Parmdiv,
  Par,
  Line,
  Menucontainer,
} from './MenuHeadElements'
import Data from './Data';

function MenuHead() {
  const [items, setitems] = useState(Data)
  const filterItem = (cateelement) => {
    const updateitems =Data.filter((currentelement) => {
      return currentelement.category ===cateelement;
    });
    setitems(updateitems);
  }
  return (
    <Parcontainer id="MenuHeadElements">
      <Headcontainer>
        <H2>why choose our hotal <Span> see our menu </Span></H2>
        <Parm>lorem sjdkad  jasnjd jsdkhj  jshdjhjhsd kjasdhkjahnasd <br></br>sd nhhasdnmndjasndhaasdja  sjdaj </Parm>
      </Headcontainer>

      <Buttoncontainer>
        <Buttons>
          <Button onClick={() => filterItem('HOME')}>HOME </Button>
          <Button onClick={() => filterItem('ABOUT')}>ABOUT</Button>
          <Button onClick={() => filterItem('THIS')}>THIS</Button>
          <Button onClick={() => filterItem('LOREM')}>LOREM</Button>
        </Buttons>
      </Buttoncontainer>
      {
        items.map((elem) => {
          const { id, Name, price, description } = elem;
          return (
            <>
            <Menucontainer>
              <Menuitems>
                <Headingmdiv>
                  <A>{Name}<Line>-------------------------</Line> <Spa>{price}</Spa></A>
                </Headingmdiv>
                <Parmdiv>
                  <Par>{description}</Par>
                </Parmdiv>
              </Menuitems>
              </Menucontainer>
            </>
          )
        })
      }

    </Parcontainer>
  )
}

export default MenuHead
