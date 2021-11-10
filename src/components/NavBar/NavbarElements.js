import styled from 'styled-components';


export const Nav = styled.div`
display:flex;
align-items:center;
flex-direction:row;
justify-content: space-around;
background: black;
padding:9px 180px;
color: white;
position:fixed;
`
export const Navlogo = styled.h1`

`
export const NavMenu = styled.ul`
list-style-type:none;
display: flex;
`
export const Navitem = styled.li`
margin:10px 30px;

`
export const Link = styled.a`
text-decoration:none;
`
export const NavSearch = styled.button`
 background: #ffb03b;
  color: #fff;
  border-radius: 50px;
  margin: 0 0 0 20px;
  padding: 10px 25px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 1px;
  transition: 0.3s;
  white-space: nowrap;

`