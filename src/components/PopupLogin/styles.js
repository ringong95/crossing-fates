import styled from 'styled-components'
import Mixins from '../../lib/Mixins';



export const PopupDiv = styled.div`
position: fixed;
width: 100%;
height: 100%;
top: 0;
left: 0;
right: 0;
bottom: 0;
margin: auto;
background-color: rgba(0,0,0, 0.5);
z-index: 1
`

export const PopupInnerDiv = styled.div`
position: absolute;
left: 25%;
right: 25%;
top: 15%;
// bottom: 25%;
margin: auto;
background: white;
z-index: 2;
height: 0
`