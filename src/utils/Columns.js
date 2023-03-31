function CapitalizeFirstLetter(word) {
let firstCharacter = word.charAt(0);
firstCharacter = firstCharacter.toUpperCase();
let capitalizedWord = firstCharacter + word.slice(1).toLowerCase()
 return capitalizedWord
}



export const Columns = [
    {
      name:'Name',  
      selector:row=> CapitalizeFirstLetter(row.name),
    },
    {
      name:'Price',  
      selector:row=> `${row.stocks[0].sellPrice.USD} $`, 
    },
    {
      name:'Size',  
      selector:row=> row.properties[0].value,
    },
    {
      name:'Color', 
      selector:row=> CapitalizeFirstLetter(row.properties[1].value) || 'White',
    },
    {
      name:'Description', 
      selector:row=> row.description,
    }
  ]