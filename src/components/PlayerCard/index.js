import React from 'react';

import { Card, FirstHalf, SecondHalf, InfoTextConntainer  } from './styles'

const PlayerCard = ({side= 0, pName='unknown', charOne='Default', charTwo='Default 2'}) => {
    
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
            <FirstHalf char={charOne}>
            
            </FirstHalf>
            <SecondHalf char={charTwo}>
            
            </SecondHalf>
        
        </Card>
        )
    }
    
    export default PlayerCard