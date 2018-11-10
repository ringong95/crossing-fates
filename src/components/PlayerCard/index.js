import React from 'react';

import { Card, PlayerNameText, InfoText, FirstHalf, SecondHalf  } from './styles'

const PlayerCard = ({side= 0, pName='unknown', charOne='Default', charTwo='Default 2'}) => {
    
    return  (
        <Card charOne={charOne}>
            <FirstHalf char={charOne}>
            <InfoText>
            Player: {pName}
            <br/>
            Character One: {charOne.enName}
            <br/>
            
            Character Two: {charTwo.enName}
            <br/>
            
            </InfoText>
            </FirstHalf>
            <SecondHalf char={charTwo}>
            
            </SecondHalf>
        
        </Card>
        )
    }
    
    export default PlayerCard