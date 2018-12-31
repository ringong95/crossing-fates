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
                    Date: {("0" + MatchInfo.date.getMonth()+1).slice(-2)}-{("0" + MatchInfo.date.getDate()).slice(-2)}-{ MatchInfo.date.getFullYear()}
                </InfoText>
                <InfoText>
                    MatchLocation: {MatchInfo.location}
                </InfoText>
                <LinkText href={MatchInfo.source}  target="_blank">
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
    