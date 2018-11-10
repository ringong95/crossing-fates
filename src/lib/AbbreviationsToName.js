import characterAbbrevs from './characterAbbrevs'

export default (name)=>{
    return characterAbbrevs.filter(character =>character.abbrev === name
    )[0]
}  
