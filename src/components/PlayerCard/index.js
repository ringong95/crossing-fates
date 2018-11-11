import React, { Component } from 'react';

import { Card, FirstHalf, SecondHalf, InfoTextConntainer  } from './styles'

import CardColors from '../../lib/CardColors';

const randomCardColor = (colorOne = null)=>{
    if(!colorOne){ colorOne = CardColors[Math.floor(Math.random() * CardColors.length)]}
    
    const colorTwo = CardColors[Math.floor(Math.random() * CardColors.length)]
    if (colorOne === colorTwo){
        return randomCardColor(colorOne)
    }
    return [colorOne, colorTwo]
    
}
class PlayerCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            colors: randomCardColor()
        };
    }
    
    render() {
        console.log(this.props)

        // this.props = {side,pName, charOne, charTwo}

        return  (
            
            <Card charOne={this.props.charOne}>
            <InfoTextConntainer>
            
            Player: {this.props.pName}
            <br/>
            Character One: {this.props.charOne.enName}
            <br/>
            
            Character Two: {this.props.charTwo.enName}
            <br/>
            </InfoTextConntainer>
            <FirstHalf char={this.props.charOne} color={this.state.colors[0]}>
            
            </FirstHalf>
            <SecondHalf char={this.props.charTwo} color={this.state.colors[1]}>
            
            </SecondHalf>
            
            </Card>
            )
        }
    }
    
    export default PlayerCard