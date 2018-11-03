import styled from 'styled-components'


export const CardContainer = styled.div`
  width:100%
  display:flex
`

export const Card = styled.div`
background: ${props => props.side ? "palevioletred" : "DarkCyan"};
 
  width:33%;
`

export const PlayerNameText = styled.p`

`

export const InfoText = styled.p`

`


