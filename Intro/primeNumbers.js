//1'e ve kendisine bölünecek,1'den büyük pozitif tamsayı olucak(asal sayılar)

const arguments = process.argv.slice(2);

function showPrimeNumbers(lowNumber,highNumber) {
    for(let i= lowNumber; i <= highNumber; i++) {

        let isPrime = true;
        for(let j = 2; j <= i; j++){
            if(i % j === 0 && j !== i) {
                isPrime = false
            }
        }

        if(isPrime && i != 1) {
            console.log(i);
        }

    }
}

showPrimeNumbers(arguments[0] * 1 , arguments[1] * 1); //1 ile çarptık çünkü bize string olarak dönen ifadeyi number'a çevirmek için.

//console.log(process.argv.slice(2)); //2 olarak yazıyoruz çünkü ilk 2 indexte bize node.exe ve çalıştığı yerin dosya konumunu veriyor.
console.log(process.argv[1]);
console.log(process.argv[0]);
