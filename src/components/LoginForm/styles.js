import styled from 'styled-components'
import { hexToRgb } from '../../lib/HexToRGB'
console.log(hexToRgb("#0033ff"))
const bodyBg= hexToRgb(`#c1bdba`);
const formBg= hexToRgb(`#13232f`);
const white= hexToRgb(`#ffffff`);

const main= hexToRgb(`#1ab188`);
const mainLight= `lighten(${main},5%)`;
const mainDark= `darken(${main},5%)`;

const graylight= hexToRgb('#a0b3b0');
const gray= hexToRgb('#ddd');

const thin= 300;
const normal= 400;
const bold= 600;
const br= '4px';


export const FormDiv = styled.div`
background: rgba(${formBg},.9);
padding: 40px;
max-width:600px;
margin:40px auto;
border-radius: ${br};
box-shadow:0 4px 10px 4px rgba(${formBg},.3);
`