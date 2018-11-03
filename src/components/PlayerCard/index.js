import React from 'react'

import { Card, PlayerNameText, InfoText } from './styles'

const PlayerCard = ({side= 0, pName='unknown', charOne='Test', charTwo='Test 2'}) => {
    return  (
        <Card side={side}>
            <PlayerNameText >
                Player: {pName}
            </PlayerNameText>
            <InfoText>
                Character One: {charOne}
            </InfoText>
            <InfoText>
                Character Two: {charTwo}
            </InfoText>
        </Card>
    )
}
export default PlayerCard