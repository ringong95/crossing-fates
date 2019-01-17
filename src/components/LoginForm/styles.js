import styled from 'styled-components'
import { hexToRgb } from '../../lib/HexToRGB'

const bodyBg= `#c1bdba`;
const formBg= `#13232f`;
const white= `#ffffff`;

const main= `#1ab188`;

const graylight= '#a0b3b0';
const gray= '#ddd';

const thin= 300;
const normal= 400;
const bold= 600;
const br= '4px';

export const Forgot = styled.p`
    margin-top:-20px;
    text-align:right;
    cursor:pointer;
    color:  ${main};
    &:hover, &:focus {
    background:${main};
    filter: brightness(85%);

    text-decoration: underline;

    }
    
    text-decoration: none;

`

export const FormDiv = styled.div`
    background: rgba(${hexToRgb(formBg)},.9);
    padding: 40px;
    max-width:600px;
    margin:40px auto;
    border-radius: ${br};
    box-shadow:0 4px 10px 4px rgba(${hexToRgb(formBg)},.3);
`

export const TabGroup = styled.ul`
    list-style:none;
    padding:0;
    display:flex;
    margin:0 0 40px 0;
    li{
        width:100%;
    }
    li a {
        display:block;
        text-decoration: none;
        padding:15px;
        background:rgba(${hexToRgb(graylight)},.25);
        color:${graylight};
        font-size:20px;
        text-align:center;
        cursor:pointer;
        transition:.5s ease;
        &:hover {
            filter: brightness(85%);
            color:${white};
        }
    }
    .active a {
        background:${main};
        color:${white};
    }
`

export const TabContent = styled.div`
`

export const HeaderOne = styled.h1`
    text-align:center;
    color:${white};
    font-weight:${thin};
    margin:0 0 40px;
`

export const InputLabel = styled.label`
    position:absolute;
    transform:translateY(6px);
    left:13px;
    color:rgba(${hexToRgb(white)},.5);
    transition:all 0.25s ease;
    -webkit-backface-visibility: hidden;
    pointer-events: none;
    font-size:22px;
        .req {
            margin:2px;
            color: ${main};
        }

        ${ props => props.active  && `
            transform:translateY(50px);
            left:2px;
            font-size:14px;
            .req {
            opacity:0;
            }
        `}
        ${ props =>props.highlight && `
            color:${white};
        `}
`
export const Input = styled.input`
    font-size:22px;
    display:block;
    width:100%;
    height:100%;
    padding:5px 10px;
    background:none;
    background-image:none;
    border:1px solid ${graylight};
    color:${white};
    border-radius:0;
    transition:border-color .25s ease, box-shadow .25s ease;
    &:focus {
        outline:0;
        border-color:${main};
    }
`

export const FieldWraper = styled.div`
    position:relative;
    margin-bottom:40px;
`

export const TopRow = styled.div`
    &:after {
        content: "";
        display: table;
        clear: both;
    }
    > div {
        float:left;
        width:48%;
        margin-right:4%;
        &:last-child { 
        margin:0;
        }
    }
`

export const SubmitButton = styled.button`
    border:0;
    outline:none;
    display:block;
    width:100%;
    border-radius:0;
    padding:15px 0;
    font-size:2rem;
    font-weight:${bold};
    text-transform:uppercase;
    letter-spacing:.1em;
    background:${main};
    color:$white;
    transition:all.5s ease;
    -webkit-appearance: none;
    cursor:pointer;
    
    &:hover, &:focus {
        filter: brightness(85%);
    }
`

