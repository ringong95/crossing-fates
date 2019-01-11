import styled from 'styled-components'

export const SearchContainer = styled.div`
display: flex;
visibility: ${props => props.show ?  'visible' : 'hidden'};
opacity: ${props => props.show ?  '1' : '0'};
max-height: ${props => props.show ? '500px' : '0px'};
flex-wrap: wrap;
margin: 15px 0 40px 0px;
transition: all 1s ease-out;
overflow: hidden;

`;
export const SearchFields = styled.div`
width: 50%;
`
export const ContainerLabel = styled.a`
display:flex;
width: 100%
margin: 0 auto;
justify-content: space-between;
align-items: center;
padding-top: 10px;
`
export const Label = styled.a`
display:flex;
margin: 0 20px;
justify-content: center;
align-items: center;
padding-top: 10px;
`

export const HeaderContainer = styled.div`
position: -webkit-sticky; /* Safari */
position: sticky;
top: 0;
z-index: 10000;
width: 100%
border-bottom:    1px solid  black;
background: #EEEEEE;
max-height: ${props => props.show ? '500px' : '50px'};
transition: all 1s ease-out;

`

export const InputContainer = styled.div`
display: flex;
flex-wrap: wrap;
margin: 25px 0px; 
`
