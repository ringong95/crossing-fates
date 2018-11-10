import React from 'react'

import AbbreviationsToName from './../../lib/AbbreviationsToName'
import { CardContainer, MatchInfoContainer, InfoText, } from './styles'
import PlayerCard from '../PlayerCard'
const MatchCard = ({MatchInfo})=>{
    console.log(MatchInfo)
    return( 
        <CardContainer>
            <PlayerCard 
                side={0}
                pName={MatchInfo.p1.name}
                charOne={AbbreviationsToName(MatchInfo.p1.charOne)}
                charTwo={AbbreviationsToName(MatchInfo.p1.charTwo)}
            />
            <MatchInfoContainer>
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
            </MatchInfoContainer>
            <PlayerCard 
                side={1}
                pName={MatchInfo.p2.name}
                charOne={AbbreviationsToName(MatchInfo.p2.charOne)}
                charTwo={AbbreviationsToName(MatchInfo.p2.charTwo)}
            />
        </CardContainer>
        )
    }
    
    export default MatchCard;
    