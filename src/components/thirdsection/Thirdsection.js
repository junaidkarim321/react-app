import React from 'react'
import img from '../../images/img1.jpg'
import {
  Container,
  Imageconatiner,
  ContentContainer,
  Ul,
  Li,
  Img,
  LastPar,
  Item,
  Loremitem,
} from './Elements';
function Thirdsection() {
  return (
    <>
      <Container id='#thirdsection'>
        <Imageconatiner>
         <Img src={img}></Img>
        </Imageconatiner>

        <ContentContainer>
          <Item>lorem lorem  lorem lorem sndandan</Item>
          <Loremitem>lorem sdjanhdjkahd asjdhsakjhdkja ajsdhjakhd ajshdkjhakjhd
        asdakhdjhsakjdhaskjdakshd asndhkjahjkhsd khasdhjkhasd kha asjhdajhasdjh asjdhkjhsad sahd</Loremitem>
          <Ul>
            <Li>asdhadajdlkjajdlajdklsajdlsajdklsajd</Li>
            <Li>asdhadajdlkjajdlajdklsajdlsajdklsajd</Li>
            <Li>asdhadajdlkjajdlajdklsajdlsajdklsajd</Li>
            <Li>asdhadajdlkjajdlajdklsajdlsajdklsajd</Li>
          </Ul>
          <LastPar>sdjakshdlorem sdjanhdjkahd asjdhsakjhdkja ajsdhjakhd ajshdkjhakjhd
        asdakhdjhsakjdhaskjdakshd asndhkjahjkhsd khasdhjkhasd kha asjhdajhasdjh asjdhkjhsad sahd
        sdjakshdlorem sdjanhdjkahd asjdhsakjhdkja ajsdhjakhd ajshdkjhakjhd
        asdakhdjhsakjdhaskjdakshd asndhkjahjkhsd khasdhjkhasd kha asjhdajhasdjh asjdhkjhsad sahd
        sdjakshdlorem sdjanhdjkahd asjdhsakjhdkja ajsdhjakhd ajshdkjhakjhd
        asdakhdjhsakjdhaskjdakshd asndhkjahjkhsd khasdhjkhasd kha asjhdajhasdjh asjdhkjhsad sahd
        asdakhdjhsakjdhaskjdakshd asndhkjahjkhsd khasdhjkhasd kha asjhdajasjdhkjhsad sahd</LastPar>
        </ContentContainer>

      </Container>
    </>
  )
}

export default Thirdsection;
