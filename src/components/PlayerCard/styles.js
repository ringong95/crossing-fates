import styled from 'styled-components'

export const Card = styled.div`

width:33.5%;
height: 500px;
position: relative;
`

export const CharImage = styled.img`
`
export const FirstHalf = styled.div`
position: absolute;
height: 100%;
width: 65%;
left: 0;
top: 0;
background: #6DB3F2 url(${props => require(`../../charImages/${props.char.abbrev}.png`)});
background-position: top center;
background-size: 175%;
background-repeat: no-repeat;
-webkit-clip-path: polygon(0 0, 100% 0%, 50% 100%, 0% 100%);
clip-path: polygon(0 0, 100% 0%, 50% 100%, 0% 100%); 
`

export const SecondHalf = styled.div`
position: absolute;
height: 100%;
width: 65%;
right: 0;
top: 0;
background: #FEB22E  url(${props => require(`../../charImages/${props.char.abbrev}.png`)});
background-position: top center;
background-size: 175%;
background-repeat: no-repeat;
-webkit-clip-path: polygon(50% 0, 100% 0%, 100% 100%, 0% 100%);
clip-path: polygon(50% 0, 100% 0%, 100% 100%, 0% 100%); 
`

export const InfoText = styled.p`
text-shadow: 1px 1px white;
`


