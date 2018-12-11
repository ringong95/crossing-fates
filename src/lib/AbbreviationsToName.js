import characterAbbrevs from './characterAbbrevs'

export default (abbrev)=>{
    return characterAbbrevs.filter(character =>character.abbrev === abbrev
    )[0]
}  
