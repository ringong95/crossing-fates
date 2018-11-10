import React from 'react';

import { Card, PlayerNameText, InfoText } from './styles'

const PlayerCard = ({side= 0, pName='unknown', charOne='Default', charTwo='Default 2'}) => {

    return  (
        <Card charOne={charOne}>
            <PlayerNameText >
                Player: {pName}
            </PlayerNameText>
            <img src={require('../../../public/charImages/' + charOne.abbrev + '.png')} />
            <InfoText>
                Character One: {charOne.enName}
            </InfoText>
            <InfoText>
                Character Two: {charTwo.enName}
            </InfoText>
        </Card>
    )
}
export default PlayerCard