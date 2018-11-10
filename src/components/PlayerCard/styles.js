import styled from 'styled-components'


export const CardContainer = styled.div`
  width:100%
  display:flex
`

export const Card = styled.div`
background: ${props => props.charOne.abbrev &&  `url(require("images/img.svg"))`};
  width:33.5%;
`

export const CharImage = styled.img`
width: 100px;
height: 100px;
-webkit-clip-path: polygon(0 0, 0 100px, 100px 80px, 100px 0);
`

export const PlayerNameText = styled.p`

`

export const InfoText = styled.p`

`


