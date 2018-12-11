import React from 'react'

import AbbreviationsToName from './../../lib/AbbreviationsToName'
import { CardContainer, MatchInfoContainer, InfoText, LinkText } from './styles'
import PlayerCard from '../PlayerCard'
const MatchCard = ({MatchInfo})=>{
    return( 
        <CardContainer>
            <PlayerCard 
                pName={MatchInfo.p1.name}
                charOne={AbbreviationsToName(MatchInfo.p1.charOne)}
                charTwo={AbbreviationsToName(MatchInfo.p1.charTwo)}
            />
            <MatchInfoContainer>
                <InfoText>
                    Date: {MatchInfo.date}
                </InfoText>
                <InfoText>
                    MatchLocation: {MatchInfo.location}
                </InfoText>
                <LinkText href="/">>
                    Hyper link to vod
                </LinkText>
            </MatchInfoContainer>
            <PlayerCard 
                pName={MatchInfo.p2.name}
                charOne={AbbreviationsToName(MatchInfo.p2.charOne)}
                charTwo={AbbreviationsToName(MatchInfo.p2.charTwo)}
            />
        </CardContainer>
        )
    }
    
    export default MatchCard;
    