export function CapitalizeFirstLetter(word) {
let firstCharacter = word.charAt(0);
firstCharacter = firstCharacter.toUpperCase();
let capitalizedWord = firstCharacter + word.slice(1).toLowerCase()
 return capitalizedWord
}



export const Columns = [
    {
      name:'Name',  
      selector:row=> CapitalizeFirstLetter(row.name),
      sortable:true, 
    },
    {
      name:'Price',  
      selector:row=> `${row.stocks[0].sellPrice.USD} $`, 
      sortable:true, 
    },
    {
      name:'Size',  
      selector:row=> row.properties[0].value,
      sortable:true, 
    },
    {
      name:'Color', 
      selector:row=> CapitalizeFirstLetter(row.properties[1].value) || 'White',
      sortable:true, 
    },
    {
      name:'Description', 
      selector:row=> row.description,
      sortable:true, 
    }
  ]