import characterAbbrevs from './characterAbbrevs'

export default (name)=>{
    if(typeof name === 'string'){
        const first = characterAbbrevs.filter(character => character.enName.toLowerCase() == name.toLowerCase()
        )
        if(first.length > 0) return first[0].abbrev
     }
     return ''
  
}  
