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


        const {pName, charOne, charTwo} = this.props

        return  (
            
            <Card charOne={charOne}>
            <InfoTextConntainer>
            
            Player: {pName}
            <br/>
            Character One: {charOne.enName}
            <br/>
            
            Character Two: {charTwo.enName}
            <br/>
            </InfoTextConntainer>
            <FirstHalf char={charOne} color={this.state.colors[0]}>
            
            </FirstHalf>
            <SecondHalf char={charTwo} color={this.state.colors[1]}>
            
            </SecondHalf>
            
            </Card>
            )
        }
    }
    
    export default PlayerCard