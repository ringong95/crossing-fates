import React from 'react'

import { CardContainer, MatchInfo, InfoText, } from './styles'
import PlayerCard from '../PlayerCard'
const MatchCard = ()=>{
    return(
        <CardContainer>
            <PlayerCard 
                side={0}
                pName={'rockman'}
                charOne={'superman'}
                charTwo={'rock'}
            />
            <MatchInfo>
                <InfoText>
                    Date
                </InfoText>
                <InfoText>
                    MatchLocation
                </InfoText>
                <InfoText>
                    Channel name
                </InfoText>
                <InfoText>
                    Hyper link to vod
                </InfoText>
                <InfoText>
                    report system?
                </InfoText>
            </MatchInfo>
            <PlayerCard 
                side={1}
                pName
                charOne
                charTwo
            />
        </CardContainer>
        )
    }
    
    export default MatchCard;
    