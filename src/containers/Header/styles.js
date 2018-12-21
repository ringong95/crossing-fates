import styled from 'styled-components'

export const SearchContainer = styled.div`
display: flex;
visibility: ${props => props.show ?  'visible' : 'hidden'};
opacity: ${props => props.show ?  '1' : '0'};
max-height: ${props => props.show ? '500px' : '0px'};
flex-wrap: wrap;
margin: 25px 0px;
transition: all 1s ease-out;
overflow: hidden;
`;
export const SearchFields = styled.div`
width: 50%;
`
export const ContainerLabel = styled.a`
width: 100%
margin: 0 auto;

`

export const InputContainer = styled.div`
display: flex;
flex-wrap: wrap;
margin: 25px 0px; 
`
