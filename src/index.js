module.exports = function toReadable (number) {
    const allNumbers= {
         0: 'zero',
         1: 'one',
         2: 'two',
         3: 'three',
         4: 'four',
         5: 'five',
         6: 'six',
         7: 'seven',
         8: 'eight',
         9: 'nine',
         10: 'ten',
         11: 'eleven',
         12: 'twelve',
         13: 'thirteen',
         14: 'fourteen',
         15: 'fifteen',
         16: 'sixteen',
         17: 'seventeen',
         18: 'eighteen',
         19: 'nineteen',
         20: 'twenty',
         30: 'thirty',
         40: 'forty',
         50: 'fifty',
         60: 'sixty',
         70: 'seventy',
         80: 'eighty',
         90: 'ninety',
         100: 'hundred'
     };
 
     let numberLength = number.toString().length;
     let arrnumber = number.toString().split('');
 
     if (numberLength === 1) {
         return allNumbers[number];
     }
 
     if (numberLength === 2) {
         if (allNumbers[number]) {
             return allNumbers[number];
         } else return allNumbers[arrnumber[0] + 0] + ' ' + allNumbers[arrnumber[1]];
     }
 
     if (numberLength === 3) {
         if (allNumbers[number]) {
             return 'one ' + allNumbers[number];
         } else if (arrnumber[1] == 0 && arrnumber[2] == 0) {
             return allNumbers[arrnumber[0]] + ' hundred';
         } else if (arrnumber[1] == 0){
             return allNumbers[arrnumber[0]] + ' hundred ' + allNumbers[arrnumber[2]];
         } else return allNumbers[arrnumber[0]] + ' hundred ' + (allNumbers[arrnumber[1] + arrnumber[2]] || allNumbers[arrnumber[1] + 0] + ' ' + allNumbers[arrnumber[2]]);
     }
 }
