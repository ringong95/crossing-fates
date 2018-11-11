import styled from 'styled-components'
import Mixins from '../../lib/Mixins';

export const Card = styled.div`

width:33.5%;
height: ${Mixins.cardHeight};
position: relative;
border-right:  1px solid  black;
border-left:  1px solid  black;
`

export const InfoTextConntainer = styled.div`
position: absolute;
left: 0%;
top: 25%;
width:100%;
height:50%;

z-index: 2;
font-family: 'Lato', sans-serif;
font-weight: bold;
text-align: center;
color:white;
font-size: 1.75em
text-shadow: 1px 1px black;
text-transform: capitalize;
`

export const CharImage = styled.img`
`
export const FirstHalf = styled.div`
position: absolute;
height: 100%;
width: 65%;
left: 0;
top: 0;
background: ${props => props.color} url(${props => require(`../../charImages/${props.char.abbrev}.png`)});
background-blend-mode: multiply;
background-position: top right;
background-size: 125%;
background-repeat: no-repeat;
-webkit-clip-path: polygon(0 0, 100% 0%, 55% 100%, 0% 100%);
clip-path: polygon(0 0, 100% 0%, 55% 100%, 0% 100%); 
`

export const SecondHalf = styled.div`
position: absolute;
height: 100%;
width: 65%;
right: 0;
top: 0;
background: ${props => props.color} url(${props => require(`../../charImages/${props.char.abbrev}.png`)});
background-blend-mode: multiply;
background-position: top left;
background-size: 125%;
background-repeat: no-repeat;
-webkit-clip-path: polygon(45% 0, 100% 0%, 100% 100%, 0% 100%);
clip-path: polygon(45% 0, 100% 0%, 100% 100%, 0% 100%); 
`


