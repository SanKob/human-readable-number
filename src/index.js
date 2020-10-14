module.exports = function toReadable (number) {
    let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundred = 'hundred';
    let output;
    let numsToString = number.toString();
    
    let unitsToWords = (num) => {
      return output = units[parseFloat(num)];
    };
    
    let tensToWords = (num) => {
      return output = tens[num[0]] + `${units[num[1]] !== 'zero' ? ` ${units[num[1]]}`  : ''}`;
    };
    
    let hundredSToWords = (num) => {
        output = units[num[0]] + ' ' + hundred;
      if ( num[1] === '1') {
        let numOfUnits = num.slice(1);
        output = output + ' ' + unitsToWords(numOfUnits);
      }
      else if (num[1] === '0' && num[2] !== '0') {
        output = output + ' ' + unitsToWords(num[2]);
      } 
      else if (num[1] !== '0') {
        let numOfTens = num.slice(1);
      output = output + ' ' + tensToWords(numOfTens);
      }
      
    }
     
    if (number < 20) {
      unitsToWords(number);
    }
    
    else if (number < 100) {
      tensToWords(numsToString)
  }
    else if (number < 1000) {
      hundredSToWords(numsToString);
     }
    return output;
}
