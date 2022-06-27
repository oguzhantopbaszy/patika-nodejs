global.console.log(__dirname);
// Prints: /Users/mjr

//console.log(path.dirname(__filename));
// Prints: /Users/mjr

global.console.log('LOG YAZILDI') //console'de bir çekirdek modül. Globalde tanımlı bir nesne olduğu için kütüphane gibi eklememize gerek yok.

global.setTimeout(() => {
   console.log('3 saniye bekle') 
}, 3000);

console.log(window);