import styled from 'styled-components'
import Mixins from '../../lib/Mixins';

export const CardContainer = styled.div`
  width:100%
  display:flex
  height: ${Mixins.cardHeight};
  border-top:    1px solid  black;
  border-bottom: 3px solid black;
`

export const MatchInfoContainer = styled.div`
padding: 45px 10px;
  background: SeaGreen;
  width:33%;
  font-family: 'Lato', sans-serif;
font-weight: bold;  
text-align: center;
color: #131516;
font-size: 1.5em
text-shadow: 1px 1px #DADEDF;
text-transform: capitalize;

`
export const LinkText = styled.a`
color: ${({ active }) => (
  active ? 'black' : 'black'
)};
font-size: 1.5em
text-shadow: 1px 1px #DADEDF;
text-transform: capitalize;
text-decoration: none;
`


export const PlayerNameText = styled.p`

`

export const InfoText = styled.p`

`


