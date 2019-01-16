import React, { Component } from 'react';
import { PopupDiv, PopupInnerDiv } from './styles'
import LoginForm from '../LoginForm';

class PopupLogin extends Component {
    
componentWillMount(){
    document.addEventListener('mousedown', this.handleClick, false)
}
componentWillUnmount(){
    document.removeEventListener('mousedown', this.handleClick, false)
}

handleClick = (e)=>{
    if(this.node.contains(e.target)){
        return;
    }
    this.props.closePopup();
}

    render() {
        return (
            <PopupDiv  >
                <PopupInnerDiv innerRef={node=>this.node = node}tabIndex="0">
                <LoginForm/>
                <h1>{this.props.text}</h1>
                <button onClick={this.props.closePopup}>close me</button>
                </PopupInnerDiv>
            </PopupDiv>
            );
        }
    }

export default PopupLogin;